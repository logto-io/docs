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
const outputDir = path.join(__dirname, '../../static/img/og');
const templateImagePath = path.join(__dirname, './template.png');

const ogImageGenerator: PluginConfig = () => {
  return {
    name: 'og-image-generator',
    async allContentLoaded({ allContent }) {
      // eslint-disable-next-line no-restricted-syntax
      const docsPlugin = allContent['docusaurus-plugin-content-docs']
        ?.default as Optional<LoadedContent>;

      console.log('Generating OG images for docs...');

      const { docs } = docsPlugin?.loadedVersions[0] ?? {};

      if (!docs) {
        return;
      }

      const fonts = await getFonts();

      if (!existsSync(outputDir)) {
        await fs.mkdir(outputDir);
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
                  fontFamily: 'Inter, NotoSans',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      style: {
                        color: 'white',
                        margin: 0,
                        fontSize: '64px',
                        lineHeight: '72px',
                        fontWeight: 700,
                        letterSpacing: '0.64px',
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
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
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
