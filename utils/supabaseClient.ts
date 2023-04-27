import { createClient } from "@supabase/supabase-js";

require("dotenv").config();
const supabaseUrl = "https://adjshruddceezyziiibv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkanNocnVkZGNlZXp5emlpaWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMzA5MTMsImV4cCI6MTk5NjgwNjkxM30.ZRapgTpJQXrp_AWswg2f5rCM0c1sATOWJEWZREQsFwY"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;