# notes-app-full-stack-testing
[![CodeQL](https://github.com/helloitsdave/notes-app/actions/workflows/codeql.yml/badge.svg)](https://github.com/helloitsdave/notes-app/actions/workflows/codeql.yml)

The intention is to build and deploy a very simple app (FE/BE + DB) which can be used to demonstrate tests for each layer using vitest, supertest, react-testing-library and playwright.

Starting point for building the app was the great FreeCodeCamp tutorial [Full Stack Project Tutorial – Create A Notes App Using React and Node.js](https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/)

Refactored the app for testability and added a few additional tweaks.

## Deployed app
[![Playwright e2e Production Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/playwright-production-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/playwright-production-tests.yml)

- FE and BE services are deployed using aws free tier on [aws](https://aws.amazon.com/free)
- Database is deployed using serverless postgres on [neon](https://neon.tech/)

[https://www.noteapp.co.uk](https://www.noteapp.co.uk)

## FE Implementation

- React
- Typescript
- [Axios](https://axios-http.com/docs/intro)

## BE Implementation

- Node.js
- Typescript
- Express
- Postgres
- [Primsa](https://www.prisma.io/) (DB ORM)

### Database

- [Postgres](https://www.postgresql.org/) with Serverless hosting on [Neon](https://neon.tech/)

## Test Layers

### [FE End to End Tests (e2e)](playwright/tests)
[![Playwright e2e Production Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/playwright-production-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/playwright-production-tests.yml)

Executes against the deployed app in real environment

- [Playwright.io](https://playwright.dev/) with typescript
- [Allure Production Test Report](https://helloitsdave.github.io/notes-app-full-stack-testing) with history

### [FE Service Tests](playwright/tests)
[![Frontend Service Tests - Playwright](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/frontend-service-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/frontend-service-tests.yml)

Executes using frontend service running with local backend + db

- docker and [Playwright.io](https://playwright.dev/)

### [FE Component Tests](frontend/src/)
[![Frontend Component Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/frontend-component-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/frontend-component-tests.yml)

Executes against virtual DOM and mocked backend

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with [vitest](https://vitest.dev/)
- [Mock Service Worker(msw)](https://mswjs.io/) to mock the api
- [msw/data](https://github.com/mswjs/data) for data store

### [BE e2e Tests](backend/tests/e2e)
[![Backend e2e Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/backend-e2e-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/backend-e2e-tests.yml)

Executes api tests against dockerised App and Seeded DB

- docker, [supertest](https://github.com/ladjs/supertest) and [vitest](https://vitest.dev/)

### [BE Integration Tests](backend/tests/integration)
[![Backend Integration Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/backend-integration-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/backend-integration-tests.yml)

Executes tests using mocked dependencies

- [supertest](https://github.com/ladjs/supertest), [vitest](https://vitest.dev/) and [vitest-mock-extended](https://github.com/eratio08/vitest-mock-extended)

### [API Contract Tests](backend/tests/contract)
[![Backend Contract Tests](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/api-contract-tests.yml/badge.svg)](https://github.com/helloitsdave/notes-app-full-stack-testing/actions/workflows/api-contract-tests.yml)

Executes against dockerised BE App and Seeded DB

- Contract tests with [pact](https://docs.pact.io/)
