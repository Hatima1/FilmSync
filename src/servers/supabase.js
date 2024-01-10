import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yhdlzkcezobnzcfvziho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZGx6a2Nlem9ibnpjZnZ6aWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjAxNzksImV4cCI6MjAxODYzNjE3OX0.IgYKjvByBC5JR1i5eSXUaAwDSH-xME7gq5Uz550ajAY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
