
import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from './repository';
import { generateToken } from '../../../utils/jwt';


// checks email, hashes password, creates user
export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });


// JWT Token Generation
  const token = generateToken({ userId: newUser._id.toString(), role: newUser.role });


  return {
    message: 'User registered successfully',
    token,
  };
};



// compares password using bcrypt
export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }


// JWT Token Generation
  const token = generateToken({ userId: user._id.toString(), role: user.role });



  return {
    message: 'Login successful',
    token,
  };
};