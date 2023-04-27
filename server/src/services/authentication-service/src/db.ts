import { Pool, PoolConfig } from 'pg';
import { DB_CONFIG } from './config';

export const pool = new Pool(DB_CONFIG as PoolConfig);
