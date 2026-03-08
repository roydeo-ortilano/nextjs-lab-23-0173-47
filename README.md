# Next.js Component Patterns Lab
**Student:** Roy Deo Ortilano
**Student No.:** 23-0173-47
**Course:** Rich Internet Application Development (RIAD)

A mini-application built with Next.js App Router demonstrating 10 essential component patterns, progressing from basic static components to advanced patterns including Middleware and global state management.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The app is protected by Middleware. To browse, open DevTools → Application → Cookies → `http://localhost:3000` → add cookie: Name: `auth-token`, Value: `test123`, Path: `/`. Then refresh.

---

## Live Demo
[https://nextjs-lab-23-0173-47.vercel.app](https://nextjs-lab-23-0173-47.vercel.app)

---

## Component Patterns

### Task 01 – Static Functional Component
**File:** `src/app/components/Hello.tsx`

A basic static component with no props. Returns a styled hero section with a welcome heading and description using Tailwind CSS utility classes.

### Task 02 – Component with Props
**File:** `src/app/components/UserCard.tsx`

A typed component using a TypeScript interface with `name`, `role`, and optional `department` prop. The optional prop uses the `??` operator for a fallback value. Rendered multiple times in `page.tsx` with different prop values.

### Task 03 – Client Component with useState
**File:** `src/app/components/Counter.tsx`

A `'use client'` component using the `useState` hook to track a count value. Features Increment, Decrement, and Reset buttons. A guard condition prevents the counter from going below zero.

### Task 04 – Root Layout Component
**File:** `src/app/layout.tsx`

The root layout wraps all pages with a sticky navbar (brand + nav links), a `{children}` content area, and a footer with the current year. Exports a custom `metadata` object with title and description.

### Task 05 – Async Server Component
**File:** `src/app/posts/page.tsx`

An `async` Server Component (no `'use client'`) that fetches posts from the JSONPlaceholder API using `next: { revalidate: 60 }` for Incremental Static Regeneration. Displays the first 10 posts with title and truncated body preview.

### Task 06 – Dynamic Route Component
**File:** `src/app/posts/[id]/page.tsx`

A dynamic route component that accepts `params` typed via a `PageProps` interface. Fetches a single post by ID and displays the full title, body, and userId. Includes a back link to `/posts` and implements `generateStaticParams` to pre-generate the first 10 post pages.

### Task 07 – Server Action (Contact Form)
**File:** `src/app/contact/page.tsx`

A contact form that uses a Server Action with `'use server'` declared inside the function body. Extracts `name`, `email`, and `message` from `FormData`, logs them to the console, calls `revalidatePath('/contact')`, and redirects to `/contact?sent=true` to display a success message.

### Task 08 – Suspense + Loading UI
**Files:** `src/app/posts/page.tsx`, `src/app/posts/SlowData.tsx`, `src/app/posts/loading.tsx`

Demonstrates React Streaming with a `SlowData` component that artificially delays 3 seconds using `setTimeout`. Wrapped in a `<Suspense>` boundary with a skeleton fallback so posts load instantly while slow data streams in separately. A `loading.tsx` file provides a full-page skeleton during navigation.

### Task 09 – Middleware (Route Protection)
**File:** `middleware.ts` (project root)

Intercepts all incoming requests and checks for an `auth-token` cookie. Unauthenticated users are redirected to `/login?redirect=<original-path>`. The config matcher excludes `/login`, `_next/static`, `_next/image`, and `favicon.ico`.

### Task 10 – Custom Hook + Context (Shopping Cart)
**Files:** `src/lib/cart-context.tsx`, `src/app/shop/page.tsx`, `src/app/components/CartSummary.tsx`

A global shopping cart built with React Context. The `CartProvider` exposes `items`, `total`, `addItem`, and `removeItem` via the `useCart` custom hook. The provider wraps the root layout, and a `CartSummary` component in the navbar displays the live item count and total price. The shop features the latest Samsung and Apple devices.

---

## Project Structure

```
nextjs-lab-23-0173-47/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hello.tsx
│   │   │   ├── UserCard.tsx
│   │   │   ├── Counter.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── posts/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── SlowData.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── cart-context.tsx
└── middleware.ts
```

---

## Tech Stack
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **JSONPlaceholder API** (https://jsonplaceholder.typicode.com)
- **Google Fonts** (Roboto)
