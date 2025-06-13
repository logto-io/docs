/* eslint-disable @silverhand/fp/no-mutating-methods, no-await-in-loop */
import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';

import { load } from 'js-yaml';

const locales = ['en', 'es', 'fr', 'ja'];

const getDocRelativePath = (fullPath) => fullPath.split('/').slice(0, -1).join('/');

const getSlugByPath = (fullPath, locale) =>
  '/' +
  fullPath
    .split('/')
    .slice(locale === 'en' ? 1 : 3, -1)
    .join('/');

const hasTutorialFragment = (fullPath) => {
  const isSdk = fullPath.includes('/quick-starts/framework/');
  const isConnector = fullPath.includes('/integrations/');

  return (
    (isSdk && existsSync(path.join(getDocRelativePath(fullPath), '_for-tutorial.mdx'))) ||
    (isConnector && existsSync(path.join(getDocRelativePath(fullPath), '_integration.mdx')))
  );
};

const getInputDocsDir = (locale) =>
  locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;

const getOutputDir = (locale) =>
  locale === 'en'
    ? 'tutorial/build-with-logto'
    : `i18n/${locale}/docusaurus-plugin-content-blog-tutorial/build-with-logto`;

const getSdkDisplayName = (sdk) =>
  String(sdk.frontMatter.tutorial_name ?? sdk.frontMatter.sidebar_label ?? '');

const getConnectorDisplayName = (connector) =>
  String(connector.frontMatter.tutorial_name ?? connector.frontMatter.sidebar_label ?? '');

const getSdkPath = (metadata) => {
  const sdkName = String(metadata.frontMatter.tutorial_name ?? '');

  return sdkName
    ? sdkName.replaceAll(' ', '-').replaceAll(/[()]/g, '').replaceAll('.', 'dot').toLowerCase()
    : metadata.slug.split('/').slice(2).join('-');
};

const getConnectorPath = (metadata) => {
  const connectorName = String(
    metadata.frontMatter.tutorial_name ?? metadata.frontMatter.sidebar_label ?? ''
  );

  return connectorName
    .toLowerCase()
    .split(/[^\da-z-]/gi) // Remove non-alphanumeric characters
    .filter(Boolean)
    .join('-');
};

/**
 * Extract frontmatter from MDX file content
 * @param {string} content - MDX file content
 * @returns {Object|null} Parsed frontmatter object or null if not found
 */
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\S\s]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  try {
    return load(match[1]) || {};
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error.message);
    return null;
  }
}

/**
 * Process all MDX files in a directory recursively
 * @param {string} dir - Directory to search for MDX files
 * @returns {Array} Array of objects with file path and frontmatter
 */
async function processMdxFiles(dir, locale) {
  const results = [];

  async function walkDir(currentPath) {
    const files = await fs.readdir(currentPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(currentPath, file.name);

      if (file.isDirectory()) {
        await walkDir(fullPath);
      } else if (file.name.endsWith('.mdx')) {
        try {
          const content = await fs.readFile(fullPath, 'utf8');
          const title = content.match(/# (.+)/)?.[1];
          const frontMatter = extractFrontmatter(content);

          if (frontMatter && hasTutorialFragment(fullPath)) {
            results.push({
              file: fullPath,
              title: frontMatter.title ?? title,
              slug: frontMatter.slug ?? getSlugByPath(fullPath, locale),
              frontMatter,
            });
          }
        } catch (error) {
          console.error(`Error reading file ${fullPath}:`, error.message);
        }
      }
    }
  }

  await walkDir(dir);
  return results;
}

const generate = async (
  sdks,
  connectors,
  template,
  outputDir,
  /**
   * The type of the passwordless connector. Value is either "Email" or "SMS".
   * Social connectors should leave this empty.
   */
  type
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
          .replaceAll('${connectorDocDir}', getDocRelativePath(connector.file))
          .replaceAll('${sdkDocDir}', getDocRelativePath(sdk.file))
          .replaceAll('${sdk}', getSdkDisplayName(sdk))
          .replaceAll('${sdkPath}', sdkPath)
          .replaceAll('${sdkOfficialLink}', String(sdk.frontMatter.official_link))
          .replaceAll('${language}', String(sdk.frontMatter.language))
          .replaceAll('${appType}', String(sdk.frontMatter.app_type))
          .replaceAll('${framework}', String(sdk.frontMatter.framework));
        /* eslint-enable no-template-curly-in-string */

        const filename = `generated-${sdkPath}-${connectorPath}.mdx`;
        const outputFilename = path.join(outputDir, filename);

        await fs.writeFile(outputFilename, post, 'utf8');

        console.log('Generated', outputFilename);
      })
    )
  );
};

async function run(locale) {
  const inputDocsDir = getInputDocsDir(locale);
  const outputDir = getOutputDir(locale);

  const socialTemplatePath = path.join(outputDir, '_template-social.mdx');
  const passwordlessTemplatePath = path.join(outputDir, '_template-passwordless.mdx');
  const ssoTemplatePath = path.join(outputDir, '_template-sso.mdx');

  const [socialTemplate, passwordlessTemplate, ssoTemplate] = await Promise.all([
    fs.readFile(socialTemplatePath, 'utf8'),
    fs.readFile(passwordlessTemplatePath, 'utf8'),
    fs.readFile(ssoTemplatePath, 'utf8'),
  ]);

  const [sdks, socialConnectors, emailConnectors, smsConnectors, ssoConnectors] = await Promise.all(
    [
      processMdxFiles(path.join(inputDocsDir, 'quick-starts/framework'), locale),
      processMdxFiles(path.join(inputDocsDir, 'integrations/social'), locale),
      processMdxFiles(path.join(inputDocsDir, 'integrations/email'), locale),
      processMdxFiles(path.join(inputDocsDir, 'integrations/sms'), locale),
      processMdxFiles(path.join(inputDocsDir, 'integrations/sso'), locale),
    ]
  );

  if (locale === 'en') {
    // Write tutorial metadata of default locale to output folder as json
    await fs.writeFile(
      path.join(outputDir, 'metadata.json'),
      JSON.stringify(
        {
          sdks,
          socialConnectors,
          emailConnectors,
          smsConnectors,
          ssoConnectors,
        },
        null,
        2
      )
    );
  }

  await Promise.all([
    generate(sdks, socialConnectors, socialTemplate, outputDir),
    generate(sdks, emailConnectors, passwordlessTemplate, outputDir, 'Email'),
    generate(sdks, smsConnectors, passwordlessTemplate, outputDir, 'SMS'),
    generate(sdks, ssoConnectors, ssoTemplate, outputDir),
  ]);
}

try {
  await Promise.all(locales.map((locale) => run(locale)));
} catch (error) {
  console.error('Error generating tutorials:', error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

/* eslint-enable @silverhand/fp/no-mutating-methods, no-await-in-loop */
