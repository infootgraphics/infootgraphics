import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY } from "$lib/env";
import { SUPABASE_URL } from "$lib/env";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);