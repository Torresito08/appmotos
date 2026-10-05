import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://agddfqzpxhntmzmjhjkt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZGRmcXpweGhudG16bWpoamt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMjQwMjksImV4cCI6MjEwNTYwMDAyOX0.HKjGp61wcpqzQYpFXCBkANqQAU7PtIJMulGqidEuY_o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});