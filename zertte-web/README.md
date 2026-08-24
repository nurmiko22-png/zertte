# ZERTTE — Frontend (Next.js App Router)

This folder is a drop-in replacement for `apps/web` in
[`front_future`](https://github.com/mmeirbek/front_future).

It consumes the existing backend contract (`docs/api-contract.md`) **unchanged**:
no renamed fields, no invented endpoints, no fabricated response shapes.

## Install

```bash
cd apps/web
pnpm add zustand @tanstack/react-query framer-motion lucide-react clsx tailwind-merge \
  tailwindcss @tailwindcss/postcss postcss
```

`katex`, `react-markdown`, `remark-*`, `rehype-katex` are already in the existing
`apps/web/package.json` and are reused for math/markdown rendering.

## Environment

```
NEXT_PUBLIC_API_URL=http://localhost:3002/v1
```

Every request goes through `lib/api/client.ts` (bearer token + refresh + unified
`{ error: { code, message } }` parsing). Nothing calls `fetch()` directly.

## Structure

```
app/
  (auth)/login, (auth)/register
  onboarding/            language -> grade -> subjects -> goals -> diagnostic
  diagnostic/            immersive diagnostic + learning profile result
  (student)/             sidebar (desktop) + bottom nav (mobile)
    learn, roadmap, practice, progress, tutor, shop, profile
  lesson/[topicId]/      full-screen immersive lesson (no chrome)
components/
  ui/ layout/ knowledge-tree/ lesson/ ai/ gamification/
lib/
  api/     client.ts, sse.ts
  services/ auth, students, subjects, knowledge, roadmap, topics, tasks,
            diagnostic, tutor, teacher
  i18n/    ru (default), en, kk
  stores/  gamification (streak/coins placeholders), lesson, onboarding
```

## Contract notes

- **Mastery** is backend data (`mastery`, `attempts`, `correctAttempts`, `trend`,
  `prerequisiteMet`, `masteryBefore/After`, `nextTaskDifficulty`,
  `prerequisiteUnlocked`, `mistakeType`). Never faked, never replaced by XP.
- **Streak and coins** are **not** in the contract. They live only in
  `lib/stores/gamification.ts` behind `isPlaceholder: true` so a future
  gamification endpoint replaces one file.
- The knowledge tree is built from real `parentTopicId` / `prerequisites`
  (`GET /topics`) joined with `GET /students/:id/knowledge` and
  `GET /students/:id/roadmap`. No invented dependencies.
- AI chat uses the SSE scenarios (`/chat`, `/diagnostic`, `/feedback`,
  `/orchestrator/chat`) with `message` / `widget` / `done` events.
