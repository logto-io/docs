import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { type LoadedContent } from '@docusaurus/plugin-content-docs';
import { type PluginConfig } from '@docusaurus/types';
import { type Optional } from '@silverhand/essentials';
import satori from 'satori';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../static/img/og');
const templateImagePath = path.join(__dirname, '../static/img/og-image.png');
const fontPath = path.join(__dirname, '../static/fonts/inter-regular.ttf');

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

      const font = await fs.readFile(fontPath);

      await fs.rm(outputDir, { recursive: true, force: true });
      await fs.mkdir(outputDir);

      await Promise.all(
        docs.map(async (doc) => {
          const permalinkWithoutTrailingSlash = doc.permalink.endsWith('/')
            ? doc.permalink.slice(0, -1)
            : doc.permalink;
          const docKey = permalinkWithoutTrailingSlash.replaceAll('/', '_');
          const textSvg = await satori(
            {
              type: 'div',
              key: docKey,
              props: {
                style: {
                  width: 1000,
                  height: 563,
                  padding: '100px 60px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '20px',
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
                        letterSpacing: '0.44px',
                      },
                      children: doc.title,
                    },
                  },
                  {
                    type: 'p',
                    props: {
                      style: {
                        color: 'rgba(255, 255, 255, 0.80)',
                        margin: 0,
                        fontSize: '28px',
                        lineHeight: '36px',
                        fontWeight: 500,
                        letterSpacing: '0.4px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      },
                      children: doc.description,
                    },
                  },
                ],
              },
            },
            {
              width: 1000,
              height: 563,
              fonts: [{ name: 'Inter', data: font }],
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
