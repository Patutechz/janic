import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xhnnfjosazakoznoxyga.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhobm5mam9zYXpha296bm94eWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjAxODUsImV4cCI6MjA1OTc5NjE4NX0.8n9rv2n1yWA2FQKnKNntBSId3q_uzYxSlrPRa_94suc'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase