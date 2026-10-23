alter table public.broker_contacts
  add column if not exists license_reminder_days integer not null default 60;

alter table public.broker_contacts
  add column if not exists license_reminder_agent_enabled boolean not null default true;

alter table public.broker_contacts
  add column if not exists license_reminder_broker_enabled boolean not null default true;

update public.broker_contacts
set
  license_reminder_days = coalesce(license_reminder_days, 60),
  license_reminder_agent_enabled = coalesce(license_reminder_agent_enabled, true),
  license_reminder_broker_enabled = coalesce(license_reminder_broker_enabled, true)
where id = 'primary';
