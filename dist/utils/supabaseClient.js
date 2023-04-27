"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
require("dotenv").config();
const supabaseUrl = "https://adjshruddceezyziiibv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkanNocnVkZGNlZXp5emlpaWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMzA5MTMsImV4cCI6MTk5NjgwNjkxM30.ZRapgTpJQXrp_AWswg2f5rCM0c1sATOWJEWZREQsFwY";
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
