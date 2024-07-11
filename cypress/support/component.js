// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


import { mount } from 'cypress/react18'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../src/redux/store";
Cypress.Commands.add('mount', (children) => {
    return mount(<Provider store={store}>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </Provider>)
})

// Example use:
// cy.mount(<MyComponent />)