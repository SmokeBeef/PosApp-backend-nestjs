import { z, ZodTypeAny } from 'zod';

export const validation = async <T extends ZodTypeAny>(
  data: any,
  schema: T,
): Promise<z.infer<T>> => {
  const result = await schema.parseAsync(data);
  return result as z.infer<T>;
};
