import { describe, expect, it } from 'vitest';
import { CreateOrganizationSchema } from '@/lib/validators';

describe('CreateOrganizationSchema', () => {
  it('accepts valid organization input', () => {
    const result = CreateOrganizationSchema.safeParse({
      name: 'Acme Inc',
      slug: 'acme-inc',
      billingEmail: 'ops@acme.com'
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid slug characters', () => {
    const result = CreateOrganizationSchema.safeParse({
      name: 'Acme Inc',
      slug: 'Acme Inc',
      billingEmail: 'ops@acme.com'
    });

    expect(result.success).toBe(false);
  });
});
