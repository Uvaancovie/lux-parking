// app/api/add-events/route.ts
import { NextResponse } from 'next/server';
import { createClient, PostgrestError } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const { name, description, location, city, event_date } = await request.json();

    // Insert a new event into the 'events' table
    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          name,
          description: description || "No description available",
          location,
          city,
          event_date: new Date(event_date).toISOString(),
          popularity: 0, // Default popularity
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const e = error as Error | PostgrestError;
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
