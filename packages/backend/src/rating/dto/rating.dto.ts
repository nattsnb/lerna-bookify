import { Reservation } from '@bookify/prisma-client';

export class RatingDto {
  id: number;
  score: number;
  review?: string;
  reservation: Reservation;
  reservationId: number;
}
