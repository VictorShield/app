# João Victor Tavares — 3D Interactive Portfolio (PRD)

## Original Problem Statement
"Build up a 3D interactive site for my creative marketing strategist portfolio."
- User: João Victor Tavares (Creative Marketing Strategist)
- Email: victormirmav00@gmail.com
- LinkedIn: https://www.linkedin.com/in/joao-victor-t-4a2b6085/
- Reference asset: Baby Phat Creative Strategy Case Study PDF.

## Personas
- **Brand directors / CMOs** evaluating creative strategist hires.
- **Agency heads / recruiters** scanning for strategists with performance + brand chops.
- **Peer strategists & creative directors** as community/credibility signal.

## Core Requirements (static)
- Premium, distinctive, dark-mode editorial 3D experience (no AI-slop gradients).
- Anchor case study: Baby Phat — full metrics, framework, kill discipline, pushbacks.
- Functional contact pipeline (DB-backed) + LinkedIn link.
- Mobile-responsive, accessible, smooth scroll.

## Architecture
- Frontend: React 19 + CRA/craco + Tailwind + Framer Motion + @react-three/fiber v9 + drei v10 + lenis (smooth scroll) + sonner (toasts) + react-fast-marquee (ribbon).
- Backend: FastAPI + Motor (MongoDB async). Routes `/api/`, `/api/status`, `/api/contact` (GET/POST).
- DB: MongoDB collections `status_checks`, `contact_submissions`.
- Env: `REACT_APP_BACKEND_URL`, `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`.

## What's Implemented (Dec 2025)
- 3D hero (chrome torus knot + floating shards + particles) with mouse-reactive camera.
- Editorial chrome typography, Cabinet Grotesk + IBM Plex Sans + JetBrains Mono.
- Sections: Hero, Philosophy, Baby Phat Case Study (animated metrics, pushbacks, kill list), 4×3 Hook-Cluster Matrix (interactive), Services + Testing Roadmap, Contact, Footer.
- Marquee ribbons between sections.
- Contact form POST → MongoDB persistence; toasts on success/error.
- Mobile nav drawer; data-testid attributes throughout.
- craco patched for webpack-dev-server v5 / RDS v4 legacy options (`onAfterSetupMiddleware`, `https`).
- Tested end-to-end: backend 7/7, frontend 14/14 (testing_agent_v3 iteration 1).

## Backlog
### P1
- [ ] Email notification on new contact submission (Resend integration — needs API key).
- [ ] Admin page (`/admin`) to view contact submissions (gated).
- [ ] OG image + meta tags for LinkedIn/X sharing.
- [ ] Additional case studies (currently only Baby Phat as anchor).

### P2
- [ ] Per-cluster creative thumbnails inside the matrix card.
- [ ] Scroll-driven 3D camera path on hero.
- [ ] Lottie / shader marquee instead of plain marquee.
- [ ] Dark/light theme toggle (currently dark only).
- [ ] Replace `@app.on_event("shutdown")` with FastAPI lifespan.
- [ ] Lock down CORS to specific origins for production.

## Next Tasks
1. Confirm portrait/case-study imagery (currently using Pexels placeholders).
2. Add Resend integration for inbound brief email notifications.
3. Add second case study (or "Selected Work" grid).
