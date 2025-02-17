import { calculateTotal } from '@/app/utils/calculateTotal';
import type { ICard } from '@/entities/Card/model/CardsSlice';

export const getCountPoints = (options: ICard[]) => calculateTotal(options, undefined, (item) => item.points || 0);
