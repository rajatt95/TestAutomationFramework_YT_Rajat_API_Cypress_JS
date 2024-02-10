<!--
    #/**
    # * @author Rajat Verma
    # * Email: rajatvermaa95@gmail.com
    # * GitHub Profile: https://github.com/rajatt95
    # * GitHub Page: https://rajatt95.github.io/
    # * LinkedIn: https://www.linkedin.com/in/rajatt95/
    # * Topmate: https://topmate.io/rajatt95
    # * Telegram: https://t.me/rajatt95
    # * Instagram: https://www.instagram.com/rajattvermaa95/
    # * YouTube: https://www.youtube.com/@rajatt95
    # * WhatsApp Community: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
    # * WhatsApp Channel: https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r
    # */
    #/***************************************************/
-->
---
# 💻 Test Automation Framework | API 

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
<!-- # - [Video Tutorial](#video-tutorial) -->
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Other Projects](#other-projects)
- [Technical Documents](#technical-documents)
- [Contacts](#contacts)

## 📖 Introduction
This repository contains a Test Automation Framework built using Cypress and Javascript for automated testing of REST APIs.

<!-- ## 🎥 Video Tutorial

<a href="https://www.youtube.com/watch?v=g0nG6aPbpl4&list=PLrBBHmoBFxBUu9G7haETpa0B03H9GnfKX"> <img src="https://img.youtube.com/vi/g0nG6aPbpl4/0.jpg" alt="Test Automation Framework | WEB | Cypress + JS" width="200"> </a>

Click on the image above to watch the tutorials. -->

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/rajatt95/TestAutomationFramework_YT_Rajat_API_Cypress_JS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TestAutomationFramework_YT_Rajat_API_Cypress_JS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Running Tests

  ```bash
  npm run cy:tests
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- 01_api_tests.yml
|          |-- 02_api_tests_select_env.yml
|-- cypress
|     |-- e2e
|          |-- tests-reqres
|                |-- users.cy.js
|     |-- fixtures
|           |-- users
|                |-- user_create.json
|                |-- user_update_put.json
|     |-- reports
|     |-- support
|          |-- utils
|                |-- EndpointUtils.js
|                |-- RequestBodyUtils.js
|                |-- RequestUtils.js
|                |-- ResponseUtils.js
|                |-- VerificationUtils.js
|          |-- commands.js
|          |-- e2e.js
|-- .gitignore
|-- cypress.config.js
|-- package.json
```

- `cypress/e2e`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `cypress/fixtures`: Contains external files (example: user create/update data) that can be used to mock data during tests.
- `cypress/reports`: Contains the report for tests (Logs are attached).
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/support/utils`: Contains the Utilities that provides methods for asserting different conditions on web elements, handling requests and responses.


## ⚙️ Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.

## 🔄 Continuous Integration

This project is configured for CI using Github Actions. Check the configurations in `.github/workflows/*.yml`.

- `01_api_tests.yml`: This workflow executes tests in pre-defined environment PROD.
- `02_api_tests_select_env.yml`: This workflow will first ask User to select the environment (DEV / Pre-PROD / PROD) for tests execution.

## 📊 Reporting

Mochawesome report (Logs are attached) is stored in the `cypress/reports` directory.


## 🔭 Other Projects

- [![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-java)  - 
  [![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://github.com/stars/rajatt95/lists/selenium-automation-frameworks)
  [![Appium](https://img.shields.io/badge/Appium-40C4FF?style=for-the-badge&logo=appium&logoColor=white)](https://github.com/stars/rajatt95/lists/appium-automation-frameworks)
  [![Rest Assured](https://img.shields.io/badge/Rest%20Assured-5B47A5?style=for-the-badge&logo=rest-assured&logoColor=white)](https://github.com/stars/rajatt95/lists/restassured-automation-framework)

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/stars/rajatt95/lists/programming-language-javascript) - 
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://github.com/stars/rajatt95/lists/cypress-automation-frameworks)
[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://github.com/stars/rajatt95/lists/playwright-automation-frameworks)

- [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-python) -
  [![Requests](https://img.shields.io/badge/Requests-2CA5E0?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/requests-automation-framework)

## 📄 Technical Documents

- [![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/drive/folders/1tne9pZjgWvfrS0l9tVHs6k1jnQHpTLoA?usp=sharing)
- [![GitHub Repository](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajatt95/Documents)

## 📧 Contacts

- [![Email](https://img.shields.io/badge/Email-rajatvermaa95%40gmail.com-green)](mailto:rajatvermaa95@gmail.com)
- [![GitHub Profile](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/rajatt95)
- [![GitHub Page](https://img.shields.io/badge/GitHub-Page-lightgrey)](https://rajatt95.github.io/)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/rajatt95)
- [![Topmate](https://img.shields.io/badge/Topmate-Profile-red)](https://topmate.io/rajatt95)
- [![Telegram](https://img.shields.io/badge/Telegram-Channel-blue)](https://t.me/rajatt95)
- [![Instagram](https://img.shields.io/badge/Instagram-Profile-orange)](https://www.instagram.com/rajattvermaa95/)
- [![YouTube](https://img.shields.io/badge/YouTube-Channel-red)](https://www.youtube.com/@rajatt95)
- [![WhatsApp Community](https://img.shields.io/badge/WhatsApp-Community-brightgreen)](https://chat.whatsapp.com/LP20xMGvxnEL88GoB58bo1)
- [![WhatsApp Channel](https://img.shields.io/badge/WhatsApp-Channel-brightgreen)](https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r)

Feel free to reach out if you have any questions, or suggestions, or just want to chat!

Thanks for visiting my GitHub profile! 😊

<p align="left"> <img src="https://komarev.com/ghpvc/?username=rajatt95&label=Profile%20views&color=0e75b6&style=flat" alt="rajatt95" /> </p>
