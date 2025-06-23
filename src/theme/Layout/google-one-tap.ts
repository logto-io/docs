import { z } from 'zod';

export const oneTapSchema = z
  .object({
    isEnabled: z.boolean().optional(),
    autoSelect: z.boolean().optional(),
    closeOnTapOutside: z.boolean().optional(),
    itpSupport: z.boolean().optional(),
  })
  .optional();

export const googleOneTapConfigSchema = z.object({
  clientId: z.string(),
  oneTap: oneTapSchema,
});

export type GoogleOneTapConfig = z.infer<typeof googleOneTapConfigSchema>;
