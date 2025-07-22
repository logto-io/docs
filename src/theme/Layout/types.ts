import { z } from 'zod';

export type RawSiteConfig = {
  customFields?: {
    inkeepApiKey?: string;
    isDebuggingEnabled?: boolean;
    logtoApiBaseUrl?: string;
    isDevFeatureEnabled?: boolean;
    logtoAdminConsoleUrl?: string;
    googleOneTapConfig?: string;
  };
};

export const rawSiteConfigSchema = z.object({
  customFields: z
    .object({
      inkeepApiKey: z.string().optional(),
      isDebuggingEnabled: z.boolean().optional(),
      logtoApiBaseUrl: z.string().optional(),
      isDevFeatureEnabled: z.boolean().optional(),
      logtoAdminConsoleUrl: z.string().optional(),
      googleOneTapConfig: z.string().optional(),
    })
    .optional(),
}) satisfies z.ZodType<RawSiteConfig>;

export type GoogleOneTapCredentialResponse = {
  credential: string;
};
