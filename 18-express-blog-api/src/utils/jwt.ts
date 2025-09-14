
import jwt from 'jsonwebtoken';

export interface JwtPayload {
  userId: string;
  role: 'admin' | 'blogger';
}


export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '1h', // 1 hour expiry
  });
};