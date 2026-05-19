# ⎇ Git Simulator

**Interactive Git Practice PWA** — Practice old & modern Git commands in a fully offline, installable web app.

🌐 **Live Demo:** https://naveedeme.github.io/git-simulator/

---

## Features

| Feature | Details |
|---|---|
| ⌨️ Interactive Terminal | Type real Git commands with colored output, history, Tab completion |
| 🌿 Live Branch Graph | Animated canvas showing commits and branches as you work |
| 📋 Cheat Sheet | 9 categories, 70+ commands — old vs new (Git 2.x) syntax side by side |
| 🎯 Guided Scenarios | 12 real-world walkthroughs (hotfix, rebase, worktree, sparse-checkout…) |
| ⚙️ GitHub Actions | Complete workflow curriculum for CI/CD, Pages, Docker, releases, security, and reusable automation |
| 🧠 Knowledge Quiz | 18 context-rich questions with explanations, randomized each round |
| 📚 Full Reference | Searchable table of all commands with old→new mapping |
| 📶 Fully Offline PWA | Install to home screen, works without internet, no sign-up |

---

## Supported Git Commands

The simulator handles **50+ git subcommands** including:

**Classic:**
`init`, `clone`, `add`, `commit`, `status`, `log`, `diff`, `branch`, `checkout`,
`merge`, `rebase`, `reset`, `stash`, `tag`, `remote`, `fetch`, `pull`, `push`,
`cherry-pick`, `bisect`, `reflog`, `show`, `blame`, `config`, `gc`, `fsck`

**Modern (Git 2.23+):**
`switch`, `restore`, `worktree`, `sparse-checkout`, `maintenance`

**Shell helpers:**
`ls`, `cat`, `echo`, `touch`, `mkdir`, `pwd`, `cd`, `clear`, `help`

---

## Old vs New Syntax Highlights

| Old (Classic) | New (Git 2.23+) | Notes |
|---|---|---|
| `git checkout <branch>` | `git switch <branch>` | Safer, focused |
| `git checkout -b <branch>` | `git switch -c <branch>` | Create & switch |
| `git checkout -- <file>` | `git restore <file>` | Restore file |
| `git reset HEAD <file>` | `git restore --staged <file>` | Unstage |
| `git stash save "msg"` | `git stash push -m "msg"` | Deprecated |
| `git push --force` | `git push --force-with-lease` | Safer force push |
| `git diff --cached` | `git diff --staged` | Clearer alias |
| `git push origin :<branch>` | `git push origin --delete <branch>` | Explicit |
| `git gc` (manual) | `git maintenance start` (Git 2.29+) | Scheduled |

---

## Deploy to GitHub Pages

This repo uses a GitHub Actions workflow for automatic deployment.

### Steps

1. **Fork or clone this repo** to `naveedeme/git-simulator` (or your own account)

2. **Enable GitHub Pages** in Settings → Pages → Source: **GitHub Actions**

3. **Push to `main`** — the workflow triggers automatically

4. **Visit** `https://<username>.github.io/git-simulator/`

### Manual trigger

You can also go to **Actions → Deploy Git Simulator to GitHub Pages → Run workflow**.

---

## Local Development

No build tools needed. Just open `index.html`:

```bash
# Clone
git clone https://github.com/naveedeme/git-simulator.git
cd git-simulator

# Serve locally (for PWA/SW to work)
npx serve .
# or
python3 -m http.server 8080
# or use VS Code Live Server
```

> **Note:** Service workers require HTTPS or `localhost`. Open via a local server, not `file://`.

---

## Project Structure

```
git-simulator/
├── index.html              # Main PWA app (single file)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline cache)
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-192x192-maskable.png
├── icon-384x384.png
├── icon-512x512.png
├── icon-512x512-maskable.png
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages CI/CD
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+1` | Jump to Terminal |
| `Ctrl+2` | Jump to Cheat Sheet |
| `Ctrl+3` | Jump to Quiz |
| `Ctrl+4` | Jump to GitHub Actions |
| `↑ / ↓` | Command history in terminal |
| `Tab` | Autocomplete git commands |

---

## PWA Installation

### Desktop (Chrome / Edge)
Click the **⬇ Install** button in the header, or use the browser's install icon in the address bar.

### Mobile (Android)
Tap **Add to Home Screen** in Chrome's menu.

### iOS (Safari)
Tap Share → **Add to Home Screen**.

---

## License

MIT — free to use, fork, and modify.

---

*Built with vanilla HTML/CSS/JS — no frameworks, no build tools, fully offline.*
