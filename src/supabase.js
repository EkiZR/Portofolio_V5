import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase configuration is missing. Check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set and the dev server was restarted.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);