import { z } from 'zod';

export const CreateOrganizationSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-z0-9-]+$/),
  billingEmail: z.string().email()
});

export type CreateOrganizationInput = z.infer<typeof CreateOrganizationSchema>;
