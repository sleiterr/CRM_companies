# CRM Dashboard (Next.js)

Educational CRM-style dashboard built with Next.js App Router. It demonstrates a multi-pane admin layout, dashboard widgets, and a simple company management flow.

## Features

- Admin layout with persistent sidebar navigation.
- Dashboard page composed of parallel routes (stats, sales, categories, countries, promotions).
- Companies list view with toolbar and search input.
- Add company modal with a Formik-based form.
- Server components for data fetching and client components for UI interactivity.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Formik
- Headless UI

## Getting Started

1) Install dependencies:

```bash
npm install
```

2) Configure environment variables (see below).

3) Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_PROJECT_TOKEN=your_mockapi_project_token
```

The data layer calls MockAPI:

```
https://<PROJECT_TOKEN>.mockapi.io/api/v1/
```

You can create a project at https://mockapi.io and use the project token from its URL.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - build for production
- `npm run start` - run production server
- `npm run lint` - run Next.js lint

## Project Structure

- `app/` - routes, layouts, and parallel dashboard slots
- `components/` - UI components and forms
- `lib/` - API client and utilities
- `public/` - static assets

## Notes

- This is a learning project; data is read from MockAPI.
- Some UI elements are placeholders and can be extended with real CRUD logic.
