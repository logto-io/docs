import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { type LoadedContent } from '@docusaurus/plugin-content-docs';
import { type PluginConfig } from '@docusaurus/types';
import { type Optional } from '@silverhand/essentials';
import satori from 'satori';
import sharp from 'sharp';

import { getFonts } from './fonts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const currentLocale = String(process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en');
const outputDir = path.join(__dirname, `../../static-localized/${currentLocale}/img/og`);
const templateImagePath = path.join(__dirname, './template.png');
const cssClampStyles = (lineCount: number) => ({
  display: '-webkit-box',
  WebkitLineClamp: lineCount,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ogImageGenerator: PluginConfig = () => {
  return {
    name: 'og-image-generator',
    async allContentLoaded({ allContent }) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Skipping OG images generation in development...');
        return;
      }

      // eslint-disable-next-line no-restricted-syntax
      const docsPlugin = allContent['docusaurus-plugin-content-docs']
        ?.default as Optional<LoadedContent>;

      console.log(`Generating OG images for docs in locale ${currentLocale}...`);

      const { docs } = docsPlugin?.loadedVersions[0] ?? {};

      if (!docs) {
        return;
      }

      const fonts = await getFonts();

      if (!existsSync(outputDir)) {
        await fs.mkdir(outputDir, { recursive: true });
      }

      await Promise.all(
        docs.map(async ({ permalink, title, description }) => {
          const permalinkWithoutTrailingSlash = permalink.endsWith('/')
            ? permalink.slice(0, -1)
            : permalink;
          const docKey = permalinkWithoutTrailingSlash.replaceAll('/', '_');
          const textSvg = await satori(
            {
              type: 'div',
              key: docKey,
              props: {
                style: {
                  width: 1000,
                  height: 562,
                  padding: '140px 56px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '20px',
                  fontFamily: 'Inter, NotoSans, NotoSansThai',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      style: {
                        color: 'white',
                        margin: 0,
                        fontSize: '60px',
                        lineHeight: '68px',
                        fontWeight: 700,
                        letterSpacing: '0.64px',
                        ...cssClampStyles(3),
                      },
                      children: title,
                    },
                  },
                  {
                    type: 'p',
                    props: {
                      style: {
                        color: 'rgba(255, 255, 255, 0.80)',
                        margin: 0,
                        fontSize: '32px',
                        lineHeight: '42px',
                        letterSpacing: '0.64px',
                        ...cssClampStyles(3),
                      },
                      children: description,
                    },
                  },
                ],
              },
            },
            {
              width: 1000,
              height: 562,
              fonts,
            }
          );

          const outputFilename = `${docKey}.png`;
          const outputPath = path.join(outputDir, outputFilename);

          await sharp(templateImagePath)
            .composite([
              {
                input: Buffer.from(textSvg),
                top: 0,
                left: 0,
              },
            ])
            .toFile(outputPath);

          console.log('Generated og:image', outputFilename);
        })
      );
    },
  };
};

export default ogImageGenerator;
