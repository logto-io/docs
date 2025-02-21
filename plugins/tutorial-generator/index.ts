import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { DocMetadata, LoadedContent } from '@docusaurus/plugin-content-docs';
import { type PluginConfig } from '@docusaurus/types';
import { type Optional } from '@silverhand/essentials';

import { getConnectorDisplayName, getConnectorPath, getSdkDisplayName, getSdkPath } from './utils';

type DocGroups = {
  sdks: DocMetadata[];
  socialConnectors: DocMetadata[];
  emailConnectors: DocMetadata[];
  smsConnectors: DocMetadata[];
  ssoConnectors: DocMetadata[];
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';

/**
 * A helper function to get the absolute path of a doc.
 *
 * Typical source paths in Docusaurus look like:
 * - @site/docs/integrations/email/aws-ses/README.mdx
 * - @site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/aws-ses/README.mdx
 */
const getRelativeDocSourcePath = (doc: DocMetadata) => doc.source.split('/').slice(1, -1).join('/');
const getAbsoluteDocDir = (doc: DocMetadata) => {
  const relativeSourceDirPath = getRelativeDocSourcePath(doc);
  return path.join(__dirname, '../../', relativeSourceDirPath);
};

const getAbsoluteOutputDir = () => {
  const relativeOutputPath =
    locale === 'en'
      ? 'tutorial/build-with-logto'
      : `i18n/${locale}/docusaurus-plugin-content-blog-tutorial/build-with-logto`;
  return path.join(__dirname, '../../', relativeOutputPath);
};

const tutorialGenerator: PluginConfig = () => {
  return {
    name: 'programmatic-seo-tutorial-generator',
    async allContentLoaded({ allContent }) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Skipping tutorials generation in development...');
        return;
      }

      // eslint-disable-next-line no-restricted-syntax
      const docsPlugin = allContent['docusaurus-plugin-content-docs']
        ?.default as Optional<LoadedContent>;

      console.log('Generating tutorials...');

      const { docs } = docsPlugin?.loadedVersions[0] ?? {};

      if (!docs) {
        return;
      }

      const outputDir = getAbsoluteOutputDir();

      const socialTemplatePath = path.join(outputDir, '_template-social.mdx');
      const passwordlessTemplatePath = path.join(outputDir, '_template-passwordless.mdx');
      const ssoTemplatePath = path.join(outputDir, '_template-sso.mdx');

      if (
        !existsSync(socialTemplatePath) ||
        !existsSync(passwordlessTemplatePath) ||
        !existsSync(ssoTemplatePath)
      ) {
        console.log('No templates found. Skipping...');
        return;
      }

      const [socialTemplate, passwordlessTemplate, ssoTemplate] = await Promise.all([
        fs.readFile(socialTemplatePath, 'utf8'),
        fs.readFile(passwordlessTemplatePath, 'utf8'),
        fs.readFile(ssoTemplatePath, 'utf8'),
      ]);

      const tutorialMetadata = docs.reduce<DocGroups>(
        (acc, doc) => {
          const { sourceDirName } = doc;
          const absoluteDocDir = getAbsoluteDocDir(doc);

          if (
            sourceDirName.startsWith('quick-starts/framework/') &&
            existsSync(path.join(absoluteDocDir, '_for-tutorial.mdx'))
          ) {
            return { ...acc, sdks: [...acc.sdks, doc] };
          }
          if (
            sourceDirName.startsWith('integrations/social/') &&
            existsSync(path.join(absoluteDocDir, '_integration.mdx'))
          ) {
            return { ...acc, socialConnectors: [...acc.socialConnectors, doc] };
          }
          if (
            sourceDirName.startsWith('integrations/email/') &&
            existsSync(path.join(absoluteDocDir, '_integration.mdx'))
          ) {
            return { ...acc, emailConnectors: [...acc.emailConnectors, doc] };
          }
          if (
            sourceDirName.startsWith('integrations/sms/') &&
            existsSync(path.join(absoluteDocDir, '_integration.mdx'))
          ) {
            return { ...acc, smsConnectors: [...acc.smsConnectors, doc] };
          }
          if (
            sourceDirName.startsWith('integrations/sso/') &&
            existsSync(path.join(absoluteDocDir, '_integration.mdx'))
          ) {
            return { ...acc, ssoConnectors: [...acc.ssoConnectors, doc] };
          }
          return acc;
        },
        {
          sdks: [],
          socialConnectors: [],
          emailConnectors: [],
          smsConnectors: [],
          ssoConnectors: [],
        }
      );

      if (!locale) {
        // Write tutorial metadata of default locale to output folder as json
        await fs.writeFile(
          path.join(outputDir, 'metadata.json'),
          JSON.stringify(tutorialMetadata, null, 2)
        );
      }

      const { sdks, socialConnectors, emailConnectors, smsConnectors, ssoConnectors } =
        tutorialMetadata;

      const generate = async (
        sdks: DocMetadata[],
        connectors: DocMetadata[],
        template: string,
        /**
         * The type of the passwordless connector. Social connectors should leave this empty.
         */
        type?: 'Email' | 'SMS'
      ) => {
        await Promise.all(
          sdks.map((sdk) =>
            connectors.map(async (connector) => {
              const connectorPath = getConnectorPath(connector);
              const sdkPath = getSdkPath(sdk);

              /* eslint-disable no-template-curly-in-string */
              const post = template
                .replaceAll('${connector}', getConnectorDisplayName(connector))
                .replaceAll('${connectorPath}', connectorPath)
                // How the connector service provider call it. E.g. GitHub calls it "GitHub OAuth app"
                .replaceAll(
                  '${connectorConfigName}',
                  String(connector.frontMatter.tutorial_config_name ?? '')
                )
                .replaceAll('${connectorType}', type ?? '')
                .replaceAll('${connectorTypeLowerCase}', (type ?? '').toLowerCase())
                .replaceAll(
                  '${passwordlessSignUpIdentifier}',
                  String(connector.frontMatter.tutorial_sign_up_identifier ?? '')
                )
                .replaceAll('${connectorDocDir}', getRelativeDocSourcePath(connector))
                .replaceAll('${sdkDocDir}', getRelativeDocSourcePath(sdk))
                .replaceAll('${sdk}', getSdkDisplayName(sdk))
                .replaceAll('${sdkPath}', sdkPath)
                .replaceAll('${sdkOfficialLink}', String(sdk.frontMatter.official_link))
                .replaceAll('${language}', String(sdk.frontMatter.language))
                .replaceAll('${appType}', String(sdk.frontMatter.app_type))
                .replaceAll('${framework}', String(sdk.frontMatter.framework));
              /* eslint-enable no-template-curly-in-string */

              const filename = `generated-${sdkPath}-${connectorPath}.mdx`;

              await fs.writeFile(path.join(outputDir, filename), post, 'utf8');

              console.log('Generated', filename);
            })
          )
        );
      };

      void Promise.all([
        generate(sdks, socialConnectors, socialTemplate),
        generate(sdks, emailConnectors, passwordlessTemplate, 'Email'),
        generate(sdks, smsConnectors, passwordlessTemplate, 'SMS'),
        generate(sdks, ssoConnectors, ssoTemplate),
      ]);
    },
  };
};

export default tutorialGenerator;
