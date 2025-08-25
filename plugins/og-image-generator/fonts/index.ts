import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { type Font } from 'satori';

type FontMetadata = Omit<Font, 'data'> & { filename: string };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Satori requires font metadata to be passed in order to render text with the correct font.
 * This metadata includes the font name, filename, and weight.
 * The `name` will be used in the `font-family` CSS property as font faces.
 *
 * Also, satori does not support variable fonts, so static fonts must be provided separately
 * for each weight.
 *
 * Note: The `NotoSans` font is used for CJK characters.
 */
const fontsMetadata = [
  { name: 'Inter', filename: 'Inter_18pt-Regular.ttf', weight: 400 },
  { name: 'Inter', filename: 'Inter_28pt-Bold.ttf', weight: 700 },
  // NotoSansSC also includes JP characters
  { name: 'NotoSans', filename: 'NotoSansSC-Regular.ttf', weight: 400 },
  { name: 'NotoSans', filename: 'NotoSansSC-Bold.ttf', weight: 700 },
  { name: 'NotoSansThai', filename: 'NotoSansThai-Regular.ttf', weight: 400 },
  { name: 'NotoSansThai', filename: 'NotoSansThai-Bold.ttf', weight: 700 },
] satisfies FontMetadata[];

export const getFonts = async (): Promise<Font[]> => {
  const fonts = await Promise.all(
    fontsMetadata.map(async ({ filename, ...rest }) => {
      const font = await fs.readFile(path.join(__dirname, filename));
      return { ...rest, data: font };
    })
  );

  return fonts;
};
