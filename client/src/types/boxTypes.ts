import type { z } from 'zod';
import type BoxSchema from '../utils/validators';

// тип данных из бд
export type BoxTypeDb = z.infer<typeof BoxSchema>;

// тип данных из формы (фронт)
export type BoxTypeForm = Omit<BoxTypeDb, 'id'>;
// export type BoxTypeForm = Omit<BoxTypeDb, 'id' | 'userId'>;
