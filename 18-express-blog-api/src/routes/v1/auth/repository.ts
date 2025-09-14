import User, { IUser } from "../../../models/user.model";


// checks if user already exists
export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};


// stores hashed user in DB
export const createUser = async (userData: Partial<IUser>) => {
  return User.create(userData);
};