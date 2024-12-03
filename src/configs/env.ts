import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const SUPABASE_HOST = process.env.SUPABASE_HOST;
export const SUPABASE_USER = process.env.SUPABASE_USER;
export const SUPABASE_PASSWORD = process.env.SUPABASE_PASSWORD;
export const SUPABASE_DATABASE = process.env.SUPABASE_DATABASE;
export const SUPABASE_PORT = Number(process.env.SUPABASE_PORT);
