export const AIRTABLE_BASE_ID = process.env.NODE_ENV === 'production' ? process.env.AIRTABLE_BASE_ID : import.meta.env.VITE_AIRTABLE_BASE_ID;
export const AIRTABLE_TOKEN = process.env.NODE_ENV === 'production' ? process.env.AIRTABLE_TOKEN : import.meta.env.VITE_AIRTABLE_TOKEN;
export const SUPABASE_URL = process.env.NODE_ENV === 'production' ? process.env.SUPABASE_URL : import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_KEY = process.env.NODE_ENV === 'production' ? process.env.SUPABASE_KEY : import.meta.env.VITE_SUPABASE_KEY;