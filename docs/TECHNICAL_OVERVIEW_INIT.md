# Ahachul App Technical Overview (Init)

Last Updated: 2026-02-23
Owner: FE Team
Repository: `ahachul_app`

## Purpose

This document initializes a technical baseline for the React Native mobile application so FE/BE/PM/QA can collaborate with consistent context.

## Architecture Snapshot

- Platform: React Native (TypeScript)
- Entry: `index.js`, `src/App.tsx`
- Mobile targets: `ios/`, `android/`
- Core FE layers:
  - Screens: `src/screens`
  - Components: `src/components`
  - Hooks: `src/hooks`
  - Utilities: `src/utils`
  - Constants/Types: `src/constants`, `src/types`

## Tooling Snapshot

- Bundler/runtime config: `metro.config.js`, `babel.config.js`
- Test baseline: `jest.config.js`, `__tests__/App.test.tsx`
- Native iOS deps: `ios/Podfile`
- Native Android gradle: `android/build.gradle`, `android/app/build.gradle`

## Initial Documentation Backlog

1. Build & Run Guide (iOS/Android local setup)
2. WebView communication contract (`useWebView`, `messageHandler`)
3. Permission model (`usePermission`, modal flow)
4. Offline mode strategy (`src/screens/Offline`)
5. Release checklist and regression scenarios

## Notes

- This is an initialization document for orchestration onboarding.
- Subsequent FE tasks should evolve this into detailed runbook and architecture decisions.

Initialized via orchestration FE task.
