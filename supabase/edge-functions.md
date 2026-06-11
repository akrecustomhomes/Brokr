# Brokr Backend Function Plan

These backend functions should run as Supabase Edge Functions or Vercel API routes because they need server-only secrets.

## invite-user

Purpose: send a Supabase Auth invite email when an Admin/Broker adds a user.

Inputs:
- email
- role
- agent_id
- permission_scope

Secrets:
- SUPABASE_SERVICE_ROLE_KEY
- APP_BASE_URL

## send-broker-notification

Purpose: send broker emails for uploaded files, deadline alerts, and review-needed items.

Inputs:
- notification_id
- broker_email
- subject
- body

Secrets:
- RESEND_API_KEY
- BROKR_FROM_EMAIL

## archive-transaction

Purpose: package a closed transaction file vault and send it to the configured Google Drive folder after broker approval.

Inputs:
- transaction_id
- archive_settings_id

Secrets:
- SUPABASE_SERVICE_ROLE_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REFRESH_TOKEN

Output:
- archive package storage path
- Google Drive destination link
- archived_at timestamp
