# E2E Tests Adapter

This javascript library contains a set of helper functions that you can use to write E2E tests and run your tests using the **Cypress** or the **Protractor** Test Runners.

## 1. Use in your App

### 1.1 Install from library

### 1.2 Import the functions
```javascript
import { ChainableTest, helpers } from '../dist/index';
```

* See the **src/helpers.js** for a list of functions that are available.
* See the **src/chianable-test.js** for a list of functions that are available.

Note: We will soon publish API docs for the same.


### 1.3 Run the tests 

## 2. Contributing to this Repo

### 2.1 Local Machine Setup

Clone the repository and follow the steps below.

**Step 1:** Install Dependencies & Setup Environment Variable

Run the following command to install node dependencies
```
yarn install
```

Copy the *.env.sample* to *.env.local* and configure the values of the variables in the file.


**Step 2:** Start the *demo-app*

Run the following command to start the demo app on http://localhost:3000/
```
yarn run demo-app
```

**Step 3:** Run Cypress tests

Cypress configuration is stored in *<projectRootDir>/cypress.json*. 
```
yarn run e2e-tests:cy
```

**Step 4:** Run Protractor tests

Protractor configuration is stored in *<projectRootDir>/protractor-conf.js*.
 
> If you do not have access to Selenium Webdriver URL hosted on SmartBear, start the Selenium Webdriver on your local machine.

Note: Run the following two commands to launch the Selenium WebDriver on you local machine. You might have to execute these commands a few times, if you encounter an error starting a browser session.
```
./node_modules/.bin/webdriver-manager update
./node_modules/.bin/webdriver-manager start
```

> Run tests using the *Protractor* Test Runner. Run the following command in another terminal. These tests would be executed by sending them over to the Selenium Server configured in *.env.local* configured in Step 1.
```
yarn run e2e-tests:pt:env-local
```

## 3. See Also

* [SmartBear CBT](docs/smartbear-cbt.md)


Component Tests: E2E Test Adapter
-----------------------------------

```
yarn run demo-app             # Launch the App that needs to be tested
yarn run component-tests      # Run Headless Cypress Tests with mocked API Responses
```


Component Tests: Web UI Reference Implementation
-------------------------------------------------

```
yarn install             # Install dependencies
yarn run build           # Create the App Build
yarn run start           # Launch the app
yarn run component-tests # Test App With Mocked APIs
```



1. (DONE) Mock API Responses - Using Cypress. Completed a POC. 
2. (TODO) Finalize CodeFresh Pipeline design for running Component Tests
3. (TODO) Modify CodeFresh Pipeline as per design
4. (TODO) Run Component Tests in the CodeFresh Pipeline
5. (TODO) Generate Allure Report
