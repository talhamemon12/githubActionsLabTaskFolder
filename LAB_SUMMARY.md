# Lab: GitHub Actions CI for Event Planning App

## Steps performed
- Forked starter repository.
- Cloned repo to Ubuntu VM.
- Installed dependencies and ran tests.
- Identified failing date validation test.
- Fixed `controllers/Event.js` to disallow past dates.
- Created GitHub Actions workflow `.github/workflows/ci.yml`.
- Committed & pushed changes; verified CI run is green.

## Key files changed
- controllers/Event.js — fixed date validation logic.
- .github/workflows/ci.yml — CI pipeline config.

## Verification
- Local: `npm test` → all tests pass.
- GitHub Actions: latest workflow run shows ✅ (All tests passed).

