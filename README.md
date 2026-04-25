# AutomationExerciseApp – Test Automation Framework with Playwright + TypeScript

This project contains automated UI tests for the demo web application  
https://automationexercise.com/, implemented using **Playwright** and **TypeScript**.

The goal of the project is to demonstrate modern automation practices, including:
- Page Object Model (POM)
- UI test automation with Playwright
- Cross-browser execution
- GitHub Actions CI integration
- Clean project structure and maintainable code

---

## 🚀 Tech Stack

- **Playwright** (Chromium, Firefox, WebKit)
- **TypeScript**
- **Node.js**
- **GitHub Actions** (CI)
- **Page Object Model (POM)**

---

## 📁 Project Structure

├── .github/workflows/playwright.yml   # CI pipeline
├── tests/                             # Test files
├── pages/                             # Page Object Model classes
├── utils/                             # Helpers / utilities
├── playwright.config.ts               # Playwright configuration
├── package.json
└── README.md


---

## ▶️ Running Tests Locally

### Install dependencies:
```
npm install
```

### Run all tests:
```
npx playwright test
```

### Run tests in headed mode:
```
npx playwright test --headed
```

### Run a specific test:
```
npx playwright test tests/example.spec.ts
```


---

## 🏗️ CI/CD – GitHub Actions

The project includes a ready-to-use GitHub Actions workflow:

- Installs dependencies
- Installs Playwright browsers
- Runs the full test suite on every push and pull request

Workflow file:  
`.github/workflows/playwright.yml`

---

## 📌 Future Improvements

- Add API tests (Playwright APIRequestContext)
- Add test data fixtures
- Add reporting (HTML / Allure)
- Add environment configuration support

---

## 📄 License

This project is licensed under the **MIT License**.
