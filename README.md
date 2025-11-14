# New GSTR-9 Screens

This repository contains a lightweight prototype for a GSTR-9 annual return reporting dashboard. It is a static HTML/CSS/JavaScript implementation that showcases how teams can review filing readiness, explore section-wise turnover and taxes, and track action items before submitting the annual return.

## Getting started

1. Open `index.html` in any modern browser. No additional build tooling is required because all assets are plain HTML, CSS, and JavaScript files.
2. Use the filters to switch between financial years, GSTINs, and filing statuses. The page refreshes automatically with contextual information.
3. Toggle **Highlight variances** to emphasise sections where the paid taxes do not match the payable amount.
4. Use **Export Summary** to download the current report context as a JSON file. This can help with record keeping or sharing with compliance teams.
5. Add action items to track follow-ups required before filing.

## File overview

| File | Description |
| ---- | ----------- |
| `index.html` | Page layout and markup for the dashboard. |
| `styles.css` | Styling for the dashboard, including cards, tables, and responsive behaviour. |
| `script.js` | Mock data, interaction handlers, filtering logic, exporting, and notes features. |

Feel free to expand the mock data set in `script.js` or wire it to a backend API when integrating this UI into a larger system.
