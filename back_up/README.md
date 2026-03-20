# EGIB Przeglądarka Działek — Deployment Guide

## Project structure

egib-viewer/
├── index.html                   # Main HTML page
├── app.js                       # Application logic
├── powiaty_data.js              # County WFS service definitions
├── netlify.toml                 # Netlify configuration
├── netlify/
│   └── functions/
│       └── wfs-proxy.js         # Serverless CORS proxy
└── README.md                    # This file

## Local development (VS Code)

The app requires the Netlify serverless function to be running locally
because the WFS servers block direct browser requests (CORS).
The correct way to run it locally is with `netlify dev`, not Live Server.

```bash
# 1. Install Netlify CLI (only once)
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Enter the project folder and start the local dev server
cd egib-viewer
netlify dev
```

`netlify dev` starts everything on http://localhost:8888
Both the static files and the /.netlify/functions/wfs-proxy endpoint
will be available on that single port — no CORS issues.

## Deploy to Netlify

### Option A — Netlify CLI (recommended)

Run the following commands in the VS Code integrated terminal (Ctrl+`):

```bash
# 1. Install Netlify CLI globally (only once)
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. From inside the egib-viewer folder, initialise and deploy
cd egib-viewer
netlify init

# When prompted:
#   - "Create & configure a new site" -> Yes
#   - Team -> select your team
#   - Site name -> e.g. egib-polska (must be unique)
#   - Build command -> leave empty (press Enter)
#   - Publish directory -> . (a single dot, meaning the root)

# 4. Deploy (production)
netlify deploy --prod
```

After the last command Netlify prints the live URL, e.g.:
https://egib-polska.netlify.app

### Option B — Netlify Drop (no CLI needed)

1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `egib-viewer` folder onto the page.
3. Netlify gives you a random URL instantly.
4. You can rename the site in Site Settings > General > Site name.

## CORS

All WFS requests go through `netlify/functions/wfs-proxy.js`.
That function runs server-side (no browser CORS restriction) and adds
`Access-Control-Allow-Origin: *` to the response back to the browser.
The allowlist in the function covers all known EGIB WFS hostnames.
