# AutomationExerciseApp – Test Automation Framework with Playwright + TypeScript

![Playwright Tests](https://github.com/IskraKrasimirova/AutomationExerciseApp-PlaywrightTS/actions/workflows/playwright.yml/badge.svg)

[![Allure Report](https://img.shields.io/badge/Allure-Report-6f42c1?logo=allure&logoColor=white)](https://iskrakrasimirova.github.io/AutomationExerciseApp-PlaywrightTS/)

This project contains automated UI and API tests for the application  
[AutomationExercise](https://automationexercise.com/), implemented using **Playwright** and **TypeScript**.

The goal of the project is to demonstrate modern automation practices, including:
- Page Object Model (POM)
- UI test automation with Playwright
- API test automation with Playwright (Playwright APIRequestContext)
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

```
├── .github/workflows/playwright.yml     # CI pipeline
├── tests/
│   ├── ui/                              # UI tests (Playwright UI)
│   └── api/                             # API tests (Playwright APIRequestContext)
├── pages/                               # Page Object Model classes
├── utils/                               # Helpers / utilities
├── playwright.config.ts                 # Playwright configuration
├── package.json
└── README.md
```

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

### Run tests by tags:
```
npx playwright test --grep @smoke
npx playwright test --grep "@api" --grep "@search"
npx playwright test --grep "@api|@search"
```

---

## 📊 Allure Report (Local)

To generate and open the Allure report locally:

### Generate the report:
```
npm run allure:generate
```

### Open the report:
```
npm run allure:open
```

### Or using npx directly:
```
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```


---

## 🌐 Allure Report (GitHub Pages)

The latest published Allure report is available here:

👉 **[Open Allure Report](https://iskrakrasimirova.github.io/AutomationExerciseApp-PlaywrightTS/)**

---

## 🏗️ CI/CD – GitHub Actions

The project includes a ready-to-use GitHub Actions workflow:

- Installs dependencies  
- Installs Playwright browsers  
- Runs the full test suite on every push and pull request  
- Generates and publishes Allure report to GitHub Pages  

Workflow file:  
`.github/workflows/playwright.yml`

---

## 📌 Future Improvements

- Add test data fixtures  
- Add environment configuration support  

---

## 📄 License

This project is licensed under the **MIT License**.