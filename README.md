Sparrow Mart 🛒 
============

**Sparrow Mart** is a simple e-commerce website built with Create React App (CRA) and JavaScript. This project includes various dependencies and tools for development, testing, and building the application.

Table of Contents
-----------------

-   [Project Structure](#project-structure)
-   [Setup and Installation](#setup-and-installation)
-   [Available Scripts](#available-scripts)
-   [Linting and Formatting](#linting-and-formatting)
-   [Testing](#testing)

Project Structure
-----------------

The project structure follows a typical CRA layout with additional configurations for Storybook, Cypress, and linting.

Setup and Installation
----------------------

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    `git clone https://github.com/SGSANJAY044/test_ecom.git
    cd sparrow-mart`

2.  **Install dependencies:**
    `npm install`

3.  **Start the development server:**
    `npm start`

4.  **Open the project in your browser:** Open http://localhost:3000 to view it in the browser.

Available Scripts
-----------------

### `npm start`

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### `npm build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm eject`

Ejects the app configuration.

### `npm run storybook`

Starts Storybook for component development and documentation.

### `npm run build-storybook`

Builds the Storybook for production.

### `npm run prepare`

Prepares the project for commit hooks using Husky.

Linting and Formatting
----------------------

The project uses ESLint and Prettier for linting and formatting. Linting and formatting are configured to run on staged files using Husky and lint-staged.

Linting configuration is located in the `.eslintrc` file, and lint-staged configuration is in the `package.json`.

Testing
-------

The project includes testing tools and configurations:

-   **React Testing Library**: For component testing.
-   **Cypress**: For end-to-end testing.
-   **Storybook**: For isolated component development and testing.

Run tests using the following commands:

-   **Run unit tests:**

 

  

    `npm test`

-   **Run end-to-end tests:**

 

  

    `npm run cypress`

-   **Run Storybook:**

 

  

    `npm run storybook`