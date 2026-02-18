![CI](https://github.com/v-gajjar/SudokuApp/actions/workflows/SudokuApp.yml/badge.svg)
![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)

# Sudoku App

A clean, mobile-first Sudoku game built with React. Solve puzzles at Easy, Medium, or Hard difficulty—with pencil marks, auto-check, and light/dark themes.

---

## Table of Contents

- [Preview](#preview)
- [What is Sudoku App?](#-what-is-sudoku-app)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#scripts)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

---

## Preview

A 9×9 grid, number pad, and Fill/Guess mode—designed for mobile and desktop.

---

## What is Sudoku App?

Sudoku App is a fully playable Sudoku experience focused on:

- **Simple interactions** – Tap a cell, tap a number. Or tap a number first, then cells.
- **Two input modes** – **Fill** (one number per cell) and **Guess** (pencil marks for candidates).
- **Mobile-first layout** – Compact, centered layout that works on phones and larger screens.
- **Light and dark themes** – Teal accents, Nunito font, and theme persistence.

**Purpose:** A straightforward Sudoku you can open anytime—part logic, part relaxation.

---

## Features

### Core gameplay

- **Fill mode** – Place one number per cell. Tap cell, tap number (or number then cell).
- **Guess mode** – Add and remove pencil marks (candidates 1–9) in each cell.
- **Number pad** – 1–9 plus eraser to clear cells or pencil marks.
- **Difficulty levels** – Easy, Medium, Hard, and Random—each with its own puzzle.
- **Win detection** – Dialog when the puzzle is solved correctly.

### Settings and UX

- **Auto check guesses** – Highlights conflicting numbers in red when enabled.
- **Show clock** – Toggle the timer in the header.
- **Light/dark theme** – Persists to `localStorage`, respects system preference.
- **Help dialog** – How to play and mode tips.
- **Settings dialog** – Difficulty, auto-check, and clock visibility.

---

## Tech Stack

| Category   | Tools          |
| ---------- | -------------- |
| Framework  | React 19       |
| Build      | Vite 5         |
| Styling    | Tailwind CSS 3 |
| Linting    | ESLint 9       |
| Formatting | Prettier       |
| CI/CD      | GitHub Actions, Lighthouse CI |

---

## Getting Started

```bash
git clone https://github.com/v-gajjar/SudokuApp.git
cd SudokuApp
npm install
npm run dev
```

**Node:** Requires Node 18+ (tested with Node 20).

### For forked repos

Fetch and merge upstream:

```bash
git remote add upstream https://github.com/v-gajjar/SudokuApp.git
git fetch upstream
git merge upstream/main
git push origin main
```

---

## Scripts

| Script                 | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start dev server (Vite)   |
| `npm run build`        | Production build          |
| `npm run preview`      | Preview production build  |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | ESLint with auto-fix      |
| `npm run format`       | Format with Prettier      |
| `npm run format:check` | Check Prettier formatting |
| `npm run lighthouse`   | Run Lighthouse CI (requires `npm run build` first) |

**Before submitting a PR:** Run `npm run lint`, `npm run format:check`, and `npm run build`. CI also runs Lighthouse for performance, accessibility, and SEO checks.

---

## Project Structure

<details>
<summary>📁 Click to expand file structure</summary>

```plaintext
.
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug.yml
│   │   ├── config.yml
│   │   ├── documentation.yml
│   │   ├── enhancement_refactor.yml
│   │   ├── feature_request.yml
│   │   └── question_discussion.yml
│   ├── workflows
│   │   └── SudokuApp.yml
│   └── pull_request_template.md
├── src
│   ├── components
│   │   ├── Cell.jsx
│   │   ├── GameBoard.jsx
│   │   ├── HelpDialog.jsx
│   │   ├── Keyboard.jsx
│   │   ├── PlayMode.jsx
│   │   ├── SettingsDialog.jsx
│   │   ├── TopNav.jsx
│   │   ├── WinDialog.jsx
│   │   └── icons/
│   ├── constants
│   │   ├── practiceBoard.js
│   │   └── puzzles.js
│   ├── hooks
│   │   ├── useGameState.js
│   │   ├── useTheme.js
│   │   └── useTimer.js
│   ├── utils
│   │   └── sudoku.js
│   ├── App.jsx
│   └── main.jsx
├── public
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── eslint.config.js
└── postcss.config.js
```

</details>

---

## Contributing

Contributions are welcome.

Before submitting a PR, run:

- `npm run lint`
- `npm run format:check`
- `npm run build`

---

## Team

Built by:

| Name               | GitHub                                                    |
| ------------------ | --------------------------------------------------------- |
| Jolene Kearse      | [jolenekearse](https://github.com/jolenekearse)           |
| Rishik Chakravarty | [rishikchakravarty](https://github.com/rishikchakravarty) |

With contributions from the wider community.

---

## Troubleshooting

- **Node version** – Requires Node 18+. If using nvm: `nvm install 20` and `nvm use 20`.
- **Stale install** – If things break, delete `node_modules` and run `npm install` again.

---

## License

MIT License. See [LICENSE](LICENSE) if present.
