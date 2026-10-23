alter table public.broker_contacts
  add column if not exists license_reminder_days integer not null default 60;

alter table public.broker_contacts
  add column if not exists license_reminder_agent_enabled boolean not null default true;

alter table public.broker_contacts
  add column if not exists license_reminder_broker_enabled boolean not null default true;

alter table public.broker_contacts
  add column if not exists deadline_reminder_days integer not null default 2;

alter table public.broker_contacts
  add column if not exists deadline_reminder_agent_enabled boolean not null default true;

alter table public.broker_contacts
  add column if not exists deadline_reminder_broker_enabled boolean not null default true;

alter table public.transactions
  add column if not exists details jsonb not null default '{}'::jsonb;
