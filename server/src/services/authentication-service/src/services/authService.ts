import { generateToken } from '../utils/jwt';

// Replace the following with your actual user model and data storage
interface User {
  id: string;
  email: string;
  password: string;
}

const users: User[] = [];

export async function signUpUser(userData: Partial<User>): Promise<User> {
  // Add user data validation and password hashing here

  const newUser: User = {
    id: Date.now().toString(),
    email: userData.email as string,
    password: userData.password as string,
  };

  users.push(newUser);
  return newUser;
}

export async function authenticateUser(credentials: { email: string; password: string }): Promise<string> {
  // Add password verification here
  console.log(credentials, '____________________________________');
  const user = users.find(u => u.email === credentials.email);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  return generateToken({ id: user.id });
}