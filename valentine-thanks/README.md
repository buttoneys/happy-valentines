# Valentine "Thank You" — single page

A small, responsive single-page site to thank your friends. Placeholders are used so you can quickly edit names/messages.

## Files
- `index.html` — markup
- `styles.css` — minimal modern styles
- `script.js` — data + confetti + interactivity

## Edit content
Open `script.js` and edit the `friends` array at the top. Each entry is an object with `name` and `msg`.

Example:
```
{ name: 'Your friend', msg: 'Short thank-you message' }
```

## Run locally
Just open `index.html` in your browser — no build steps required.

## Deploy to GitHub Pages
This repository includes a GitHub Actions workflow that will automatically publish the site from the `main` branch.

1. Create a repo named `happy-valentines` on GitHub (or use your preferred name).
2. Push the project to the new repository (example commands below).
3. After the `main` branch is pushed, the `Deploy to GitHub Pages` workflow will run and publish the site.

Your site will be available at `https://<your-username>.github.io/happy-valentines` once Pages finishes deploying.

Example commands to run locally:

```bash
git init
git add .
git commit -m "Initial: Valentine thank-you site"
# replace <your-username> with your GitHub username
git remote add origin https://github.com/<your-username>/happy-valentines.git
git branch -M main
git push -u origin main
```

Enjoy — replace placeholders and share the love! 💌