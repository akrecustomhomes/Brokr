alter table public.branding_settings
  add column if not exists dark_logo_src text;

alter table public.branding_settings
  add column if not exists light_logo_src text;

insert into storage.buckets (id, name, public)
values ('branding-assets', 'branding-assets', true)
on conflict (id) do update set public = true;

drop policy if exists "prototype read branding assets" on storage.objects;
create policy "prototype read branding assets"
on storage.objects for select
using (bucket_id = 'branding-assets');

drop policy if exists "prototype write branding assets" on storage.objects;
drop policy if exists "authenticated insert branding assets" on storage.objects;
create policy "authenticated insert branding assets"
on storage.objects for insert to authenticated
with check (bucket_id = 'branding-assets');

drop policy if exists "authenticated update branding assets" on storage.objects;
create policy "authenticated update branding assets"
on storage.objects for update to authenticated
using (bucket_id = 'branding-assets')
with check (bucket_id = 'branding-assets');

drop policy if exists "authenticated delete branding assets" on storage.objects;
create policy "authenticated delete branding assets"
on storage.objects for delete to authenticated
using (bucket_id = 'branding-assets');
