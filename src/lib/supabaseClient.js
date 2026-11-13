import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly and early rather than letting every query silently error out.
  console.error(
    'Missing Supabase environment variables. Copy .env.example to .env and fill in ' +
      'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from your Supabase project settings.'
  )
}

// createClient() throws immediately if the URL is missing/invalid, which would
// otherwise blank-screen the entire app before it can even render the console
// warning above. Falling back to a syntactically valid placeholder lets the
// app render normally; any actual Supabase calls will just fail gracefully
// (CatalogContext/AuthContext already handle that) until real values are set.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
