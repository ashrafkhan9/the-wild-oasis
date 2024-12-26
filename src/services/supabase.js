import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://svhdtyegihxyfgagjzgl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2aGR0eWVnaWh4eWZnYWdqemdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NTAxNjMsImV4cCI6MjA1MDEyNjE2M30.9bsmud2zG28hhxv8p6DNppvuFBhLgwd9yjgV9EJomPc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
