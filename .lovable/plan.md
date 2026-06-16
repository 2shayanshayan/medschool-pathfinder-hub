## Problem

The "The bar rises" line chart renders as an empty white box. Recharts' `ResponsiveContainer` relies on measuring its parent at mount; during TanStack Start's SSR pass the container has no width, and the hydrated client doesn't always trigger a re-measure, leaving the SVG empty.

## Fix

In `src/routes/index.tsx`, gate the chart on a client-mounted flag so recharts only renders in the browser where layout measurement works.

1. Add a small `useEffect` + `useState` (`mounted`) at the top of the route component (import `useEffect`/`useState` from React).
2. In the chart container `<div>` (currently lines 287–318), render the `ResponsiveContainer`/`ReLineChart` tree only when `mounted` is true. Until then, render an empty placeholder of the same height so layout doesn't jump.
3. Keep the existing height (`h-[380px]`), data, axes, tooltip, legend, and line colors unchanged.

No other sections, copy, or styling change. The surrounding heading, subtitle, and explanatory box stay as they are.

## Out of scope

- The unrelated `book.tsx` "Map is not a constructor" runtime error — separate issue, not part of this fix.
