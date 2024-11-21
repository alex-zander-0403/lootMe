import { z } from 'zod';

const BoxSchema = z.object({
  id: z.number(),
  title: z.string(),
  img: z.string(),
  price: z.number(),
  userId: z.number().nullable(),
});

export default BoxSchema;
