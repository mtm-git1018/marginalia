import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBILC_KEY = import.meta.env.VITE_SUPABASE_PUBLIC_KEY

export const supabase = createClient<Database>(SUPABASE_URL,SUPABASE_PUBILC_KEY);
