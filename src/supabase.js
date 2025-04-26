import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zraybasowdmotzttcous.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYXliYXNvd2Rtb3R6dHRjb3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjU1NDQsImV4cCI6MjA2MDQ0MTU0NH0.QgmBZHROwsWYRYDQ5gq1UspfBIPKd7jZbtUp4kYc-RQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;