
import { Request, Response, NextFunction } from 'express';
import { registerSchema, loginSchema } from './validators';
import { registerUser, loginUser } from './service';


export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: 'Validation failed', errors: parsed.error.format() });
    }

    const { firstName, lastName, email, password } = parsed.data;

    const result = await registerUser(firstName, lastName, email, password);
    return res.status(201).json(result);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};



// Parses and validates data using Zod
// Calls service
// Returns clean JSON responses



export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: 'Validation failed', errors: parsed.error.format() });
    }

    const { email, password } = parsed.data;

    const result = await loginUser(email, password);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};



