import { Request } from 'express';
import { User } from '@bookify/prisma-client';

export interface RequestWithUser extends Request {
  user: User;
}
