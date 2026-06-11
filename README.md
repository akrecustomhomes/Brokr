# Brokr Deployment

Brokr is prepared for Vercel hosting and Supabase migration. The current app still runs as a static frontend, but the deployment scaffold, environment config, and database schema are in place for moving data out of browser/local state.

## Separate Projects

Create fresh Brokr projects in both Supabase and Vercel. Do not reuse the AkreGC Supabase URL, anon key, storage buckets, or Vercel environment values. This keeps Brokr data, files, users, and future email/archive jobs isolated from AkreGC.

## Local Preview

```bash
npm run dev
```

Open `http://127.0.0.1:4173`.

## Vercel

1. Create a new Vercel project named `brokr`.
2. Import this `outputs/brokr` folder as the project root.
3. Set environment variables from `.env.example` using the new Brokr Supabase project values:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` for broker/admin user invites. Keep this server-only in Vercel.
4. Vercel will run `npm run build`.
5. Output directory is `dist`.

## Supabase

1. Create a new Supabase project named `brokr`.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Copy the project URL and anon key into Vercel environment variables.
4. Confirm Storage buckets exist for branding assets, profile images, transaction files, and archive packages.
5. In Supabase Auth URL settings, allow `https://app.lumerealestate.com` as a redirect URL.

## Database Coverage

The Supabase schema now includes:

- Branding settings
- Required broker contact
- Google Drive archive settings
- Agents, including profile image, split address, calendar color, license, archive status, and commission split
- Users and permission scope
- Transactions, including prices, deadlines, required documents, additional documents, archive fields, and status
- Transaction files and broker review status
- Company tasks
- Inbox notifications and handled states

## Current Integration

Currently wired to Supabase:

- Login/logout with Supabase Auth email and password
- First broker super-admin setup
- Broker/Admin user records and invite emails through the Vercel `/api/invite-user` function
- Branding load/save when Supabase config exists
- Required broker contact load/save when Supabase config exists
- Google Drive archive settings load/save when Supabase config exists

Still browser/local-state until the next backend wiring pass:

- Agents
- Transactions
- File vault metadata
- Company tasks
- Inbox state

## Next Backend Pass

Recommended next steps:

1. Wire each local collection in `script.js` to Supabase load/save calls.
2. Move uploaded files into Supabase Storage buckets.
3. Add server-side broker notification emails.
4. Add Google Drive archive packaging through an Edge Function or Vercel API route.
5. Replace prototype open RLS policies with role-aware policies before production.

See `supabase/edge-functions.md` for the planned user invite, broker notification, and Google Drive archive functions.
