import { pool } from '../db';

export interface User {
  id: number;
  email: string;
  password: string;
}

export async function createUser(email: string, password: string, name: string, phone: string, birthday: string): Promise<User | null> {
  try {
    const result = await pool.query<User>(
      'INSERT INTO users (email, password, name, phone, birthday) VALUES ($1, $2, $#, $4, $5) RETURNING *',
      [email, password, name, phone, birthday]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    const result = await pool.query<User>('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error finding user by email:', error);
    return null;
  }
}
