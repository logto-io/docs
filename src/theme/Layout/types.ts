import { z } from 'zod';

export type RawSiteConfig = {
  customFields?: {
    inkeepApiKey?: string;
    isDebuggingEnabled?: boolean;
    isProduction?: boolean;
    googleOneTapConfig?: string;
  };
};

export const rawSiteConfigSchema = z.object({
  customFields: z
    .object({
      inkeepApiKey: z.string().optional(),
      isDebuggingEnabled: z.boolean().optional(),
      isProduction: z.boolean().optional(),
      googleOneTapConfig: z.string().optional(),
    })
    .optional(),
}) satisfies z.ZodType<RawSiteConfig>;

export type GoogleOneTapCredentialResponse = {
  credential: string;
};
