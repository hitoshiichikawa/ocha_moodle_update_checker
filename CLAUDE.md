# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Google Apps Script (GAS) application that monitors Ochanomizu University Elementary School's Moodle pages for updates and sends notifications via email and LINE.

## Architecture

**Single-file GAS application** (`main.js`) with the following key components:

- **Authentication**: Cookie-based Moodle login with session management via `cookieStore` global
- **Content Processing**: Fetches pages, extracts `#region-main-box` content, filters dynamic attributes (random IDs, expand/collapse states), computes SHA-256 hash
- **Change Detection**: Compares computed hashes against stored values in "マスタ" (Master) sheet
- **Notifications**: Sends updates via `MailApp.sendEmail()` and LINE Push API
- **LINE Integration**: Webhook endpoint (`doPost`) handles follow/unfollow events; stores users in "LINE" sheet

## Data Flow

1. `main()` → `loadConfig()` loads credentials from Script Properties and "プロパティ" sheet
2. `loginAndGetCookies()` authenticates with Moodle, manages cookies across redirects
3. For each page in `pages` array: fetch → extract → filter → hash → compare
4. `updateMasterSheet()` updates "マスタ" sheet, returns changed pages
5. Changed pages trigger `sendUpdateEmail()` and `sendLinePushNotifications()`
6. `scheduleNextExecution()` sets next trigger (7:00-21:00 hourly)

## Required Configuration

**Script Properties** (set in GAS editor):
- `USERNAME`, `PASSWORD`: Moodle credentials
- `LINE_CHANNEL_ID`, `LINE_CHANNEL_ACCESS_TOKEN`: LINE bot credentials

**"プロパティ" Sheet**:
- Row with `MAIL_RECEIVERS` in column A, comma-separated emails in column B

## Sheets Used

- **マスタ**: Stores page_name, hash, update status, check timestamp
- **ログ**: Debug log of all page checks
- **LINE**: Registered LINE user IDs for push notifications
- **プロパティ**: Configuration values (mail receivers)

## Key Functions

- `filterDynamicAttributes()`: Removes volatile HTML elements that would cause false-positive updates (random IDs, expansion states)
- `extractPageContent()`: Isolates main content area, removes navigation
- `doPost()`: LINE webhook handler for user management
