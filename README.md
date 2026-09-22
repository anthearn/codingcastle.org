# Coding Castle

Static launch page for https://codingcastle.org, using the supplied banner and landscape.

The countdown targets **1 March 2027 at 00:00 GMT** (`2027-03-01T00:00:00Z`), updates every second, and stops at zero with a launch-day message. Change the date in `countdown.js` and `index.html` together.

## Local preview

Run `python3 -m http.server 8000`, then visit http://localhost:8000.

## GitHub Pages

Publish the `main` branch from `/` in Settings → Pages. `CNAME` specifies `codingcastle.org`. No build step is required.

Configure the domain's DNS using GitHub's current instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

The Press Start 2P font is self-hosted; its SIL Open Font License is in `fonts/OFL.txt`.
