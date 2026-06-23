# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Registration Flow (UI → API) >> User cannot register with an existing email @regression
- Location: tests/ui/userFlows.spec.ts:231:9

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Firefox is unable to launch if the $HOME folder isn't owned by the current user.                                  ║
║ Workaround: Set the HOME=/root environment variable in your GitHub Actions workflow file when running Playwright. ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /ms-playwright/firefox-1511/firefox/firefox -no-remote -headless -profile /tmp/playwright_firefoxdev_profile-FGsj8Y -juggler-pipe -silent
  - <launched> pid=6281
  - [pid=6281][err] [6281] Sandbox: CanCreateUserNamespace() clone() failure: EPERM
  - [pid=6281][err] Running Nightly as root in a regular user's session is not supported.  ($HOME is /github/home which is owned by uid 1001.)
  - [pid=6281] <process did exit: exitCode=1, signal=null>
  - [pid=6281] starting temporary directories cleanup
  - [pid=6281] <gracefully close start>
  - [pid=6281] <kill>
  - [pid=6281] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6281] finished temporary directories cleanup
  - [pid=6281] <gracefully close end>

```