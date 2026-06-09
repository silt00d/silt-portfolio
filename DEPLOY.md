# Silt Deployment Guide

This folder is the deployable static website for Silt.

## Deploy Target

Upload or connect this folder to Vercel:

```text
outputs/finder-portfolio
```

The site entry file is:

```text
index.html
```

## GitHub

1. Create a new GitHub repository.
2. Push the contents of this folder to that repository.
3. Keep this folder as the repository root when possible.

If you push the whole Codex project instead, set Vercel's Root Directory to:

```text
outputs/finder-portfolio
```

## Vercel Project Settings

Use these settings when importing from GitHub:

```text
Framework Preset: Other
Root Directory: outputs/finder-portfolio
Build Command: leave empty
Output Directory: leave empty
Install Command: leave empty
```

If the repository root is already `finder-portfolio`, leave Root Directory empty.

## Domain

After the first deployment succeeds:

1. Open the Vercel project.
2. Go to Settings > Domains.
3. Add the custom domain, for example `silt.kr`.
4. Follow the DNS records Vercel shows.
5. Wait until DNS and SSL become valid.

Typical records:

```text
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Use Vercel's exact instructions in the Domains screen if they differ.

## SEO Files

Before production launch, update these files if the final domain is not `silt.kr`:

```text
robots.txt
sitemap.xml
index.html
```

## Admin Page Note

`admin.html` is included in this static folder. It is marked `noindex` through `vercel.json` and disallowed in `robots.txt`, but it is not password-protected. For a private production admin, connect a real backend or deploy the admin separately behind authentication.
