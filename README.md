# Fleet Earnings Dashboard (React)

A responsive React recreation of the "Earnings Dashboard" Figma design
(Sign-in screen + Dashboard Overview screen), built for a Web Development
Assessment. Written to be easy for a beginner to read, extend, and explain.

## 1. How to run it

You need [Node.js](https://nodejs.org) installed (version 16 or higher).

```bash
# 1. Move into the project folder
cd fleet-dashboard

# 2. Install dependencies (only needed once)
npm install

# 3. Start the local development server
npm start
```

This opens `http://localhost:3000` in your browser. The app starts on the
Sign-in page — click "Sign in" (it accepts anything, since there's no
real backend) to see the Dashboard.

To create an optimized production build:

```bash
npm run build
```

## 2. Project structure

```
fleet-dashboard/
├── public/
│   └── index.html          # the single HTML page React mounts into
├── src/
│   ├── index.js             # entry point: renders <App /> into index.html
│   ├── index.css            # global reset + CSS variables (colors, spacing)
│   ├── App.js                # top-level component, switches Login <-> Dashboard
│   │
│   ├── pages/
│   │   ├── Login/
│   │   │   ├── Login.jsx     # Sign-in screen
│   │   │   └── Login.css
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx # Dashboard screen (composes the pieces below)
│   │       └── Dashboard.css
│   │
│   └── components/            # small, reusable building blocks
│       ├── Sidebar/           # left navigation menu
│       ├── StatCard/          # one of the 4 top summary cards
│       ├── DriverList/        # "List of Driver" table + tabs
│       └── ClientList/        # "List of Clients" table + service tags
```

### Why this structure?

- **`pages/`** holds full screens (Login, Dashboard) — the things a user
  actually navigates between.
- **`components/`** holds small, reusable pieces that pages are built from.
  For example, `StatCard` is written once and reused 4 times with different
  data, instead of copy-pasting the same markup four times.
- Each component has its **own `.css` file** with a matching name
  (e.g. `Sidebar.jsx` + `Sidebar.css`). This keeps styles scoped to the
  component they belong to, so you always know where to look when you
  want to change how something looks.

## 3. How the pieces fit together (data flow)

1. `index.js` renders `<App />`.
2. `App.js` keeps one piece of state: `isLoggedIn` (true/false).
   - If `false`, it shows `<Login onLogin={...} />`.
   - If `true`, it shows `<Dashboard onLogout={...} />`.
3. `Login.jsx` collects the email/password in local state (`useState`) and,
   when the form is submitted, calls the `onLogin` function it received
   as a prop. This tells `App.js` to flip `isLoggedIn` to `true`.
4. `Dashboard.jsx` doesn't contain any table or card styling itself — it
   just arranges 4 smaller components: `Sidebar`, `StatCard` (x4),
   `DriverList`, and `ClientList`. This "composition" pattern is standard
   in React and keeps each file small and focused on one job.

## 4. Responsiveness

Every component's CSS file ends with `@media` breakpoints:

- **Desktop** (default styles): sidebar with icons + text, two tables
  side-by-side, 4 stat cards in a row.
- **Tablet** (`max-width: 1024px`): sidebar shrinks to icon-only, the two
  tables stack vertically.
- **Mobile** (`max-width: 640px`): sidebar becomes a horizontal top bar,
  buttons and stat cards stack full-width, tables scroll horizontally if
  they don't fit.

Resize your browser window (or open Chrome DevTools → Toggle Device
Toolbar) to see these breakpoints in action.

## 5. Where to plug in real data later

Right now `DriverList.jsx` and `ClientList.jsx` use small hard-coded
arrays (`DRIVERS`, `CLIENTS`) near the top of the file, and `Dashboard.jsx`
hard-codes the 4 `stats`. To connect this to a real backend, replace those
arrays with data loaded via `useEffect` + `fetch()` (or a library like
`axios`), and pass it down the same way via props.
