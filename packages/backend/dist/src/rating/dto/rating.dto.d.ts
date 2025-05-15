import { Reservation } from '.prisma/client';
export declare class RatingDto {
  id: number;
  score: number;
  review?: string;
  reservation: Reservation;
  reservationId: number;
}
