import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL =
    "https://atvbrrjgzfqnnnmjotzo.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_hnSOforhEWU3LY5o9HTl2g_y0rFrb76";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
