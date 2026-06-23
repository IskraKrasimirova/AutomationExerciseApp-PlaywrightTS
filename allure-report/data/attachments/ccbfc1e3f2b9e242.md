# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/registerTests.spec.ts >> Register tests @ui @register >> User cannot register with existing email @e2e @regression
- Location: tests/ui/registerTests.spec.ts:56:9

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Firefox is unable to launch if the $HOME folder isn't owned by the current user.                                  ║
║ Workaround: Set the HOME=/root environment variable in your GitHub Actions workflow file when running Playwright. ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /ms-playwright/firefox-1511/firefox/firefox -no-remote -headless -profile /tmp/playwright_firefoxdev_profile-e12zNt -juggler-pipe -silent
  - <launched> pid=5413
  - [pid=5413][err] [5413] Sandbox: CanCreateUserNamespace() clone() failure: EPERM
  - [pid=5413][err] Running Nightly as root in a regular user's session is not supported.  ($HOME is /github/home which is owned by uid 1001.)
  - [pid=5413] <process did exit: exitCode=1, signal=null>
  - [pid=5413] starting temporary directories cleanup
  - [pid=5413] <gracefully close start>
  - [pid=5413] <kill>
  - [pid=5413] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=5413] finished temporary directories cleanup
  - [pid=5413] <gracefully close end>

```