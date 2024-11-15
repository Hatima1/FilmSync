import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dnrckombqbaubfygygny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmNrb21icWJhdWJmeWd5Z255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3ODI0MzEsImV4cCI6MjA0NTM1ODQzMX0.Yp40DP_aOG8Bp-UcyV2zhLDA15t0EF8qzTMa5Ph2sLM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
