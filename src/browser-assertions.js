import { isCypressTestRunner, isProtractorTestRunner } from './helpers';

/**
 * Note: Works with Cypress & Protractor.
 */
const getCurrentUrl = () => {
    if (isCypressTestRunner()) {
        return cy.url();
    } else if (isProtractorTestRunner()) {
        return browser.getCurrentUrl();
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} expectedValue 
 */
export const assertCurrentUrlEquals = (expectedValue) => {
    const url = getCurrentUrl();
    if (isCypressTestRunner()) {
        url.should('eq', expectedValue);
    } else if (isProtractorTestRunner()) {
        url.then(function(value) {
            expect(value).toBe(expectedValue);
        });
    }
}

/**
 * Works with Cypress & Protractor.
 * @param {string} expectedValue 
 */
export const assertCurrentUrlContains = (expectedValue) => {
    const url = getCurrentUrl();
    if (isCypressTestRunner()) {
        url.should('contains', expectedValue);
    } else if (isProtractorTestRunner()) {
        url.then(function(value) {
            const matchResult = value.match(expectedValue);
            expect((matchResult == null)).toBe(false);
        });
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string or object} selector 
 * @param {string} expectedValue 
 */
export const assertElementTextEquals = (selector, expectedValue) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.should('have.text', expectedValue);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        const elementText = $el.getText();
        expect(elementText).toEqual(expectedValue);
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string or object} xpath 
 * @param {string} expectedValue 
 */
 export const assertElementXpathTextEquals = (xpath, expectedValue) => {
    if (isCypressTestRunner()) {
        const $el = cy.xpath(xpath);
        $el.should('have.text', expectedValue);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof xpath === 'object') ? xpath : element(by.xpath(xpath));
        const elementText = $el.getText();
        expect(elementText).toEqual(expectedValue);
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string or object} selector 
 * @param {string} expectedClassAttr 
 */
export const assertElementHasClassAttribute = (selector, expectedClassAttr) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        return $el.should('have.class', expectedClassAttr);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        const attribute_value = $el.getAttribute('class');
        attribute_value.then(function(value) {
            expect(value).toBe(expectedClassAttr);
        });
    }
}

/**
 * Note: 
 * @param {string or object} selector 
 */
export const assertElementIsVisible = (selector) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.should('be.visible');
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        const isVisible = $el.isDisplayed();
        expect(isVisible).toBe(true);
    }
}

/**
 * Note: Works on Cypress & Protractor
 * @param {string or object} selector 
 */
export const assertElementIsPresent = (selector) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.then(function(jqElement) {
            expect(jqElement.length).to.be.greaterThan(0);
        });
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        const isPresent = $el.isPresent();
        expect(isPresent).toBe(true);
    }
}

/**
 * Note: Works on Cypress & Protractor
 * @param {string or object} selector 
 */
 export const assertElementNotExist = (selector) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.should('not.exist');
    } else if (isProtractorTestRunner()) {
        try {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        } catch(err) {}
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 * @param {string} expectedValue 
 */
export const assertInputElementValueEquals = (selector, expectedValue) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.invoke('val').should('deep.equal', expectedValue);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        const attribute_value = $el.getAttribute('value');
        attribute_value.then(function(value) {
            expect(value).toBe(expectedValue);
        });
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} xpath - The Xpath of the element which is to be looked up
 * @param {string} type - text or value
 * @param {string} expectedValue - The expected value of the xpath element's type
 */
 export const assertElementXpathTextContains = (xpath, type, expectedValue) => {
    if (isCypressTestRunner()) {
        cy.xpath(xpath).invoke(type).then((actualtypename) => {
            actualtypename.includes(expectedValue.trim());
        })
    } else if (isProtractorTestRunner()) {
        const $el = (typeof xpath === 'object') ? selector : element(by.xpath(xpath));
        const attribute_value = $el.getAttribute('value');
        attribute_value.then(function(value) {
            expect(value).toBe(expectedValue);
        });
    }
}

