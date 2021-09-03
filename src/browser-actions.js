import { isCypressTestRunner, isProtractorTestRunner } from './helpers';
import { KEYCODES } from '../src/constants';

/**
 * Works with Cypress & Protractor.
 * @param {string} url 
 */
export const navigateToUrl = (url) => {
    if (isCypressTestRunner()) {
        cy.visit(url);
    } else if (isProtractorTestRunner()) {
        browser.get(url);
    }
}

/**
 * Works with Cypress & Protractor.
 * @param {string} method - method to be one of "back" or "forward" or "refresh"
 */
export const navigationCommand = (method) => {
    if (isCypressTestRunner()) {
        cy.go(method);
    } else if (isProtractorTestRunner()) {
        if (method === 'back') {
            browser.navigate().back();
        } else if (method === 'forward') {
            browser.navigate().forward();
        } else if (method === 'refresh') {
            browser.navigate().refresh();
        } 
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 */
export const triggerClick = (selector) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.click({force: true});
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        browser.executeScript("arguments[0].click();", $el);
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 */
 export const regularClick = (selector) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.click({force: true});
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        $el.click();
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} selector 
 * @param {string} text 
 */
export const inputText = (selector, text) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.type(text);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        $el.clear();
        $el.sendKeys(text);
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} selector 
 * @param {string} keyCode - @see KEYCODES in **constants.js**
 */
export const inputKey = (selector, keyCode) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        switch (keyCode) {
            case KEYCODES.ENTER:
                $el.type('{enter}');
                break;
            case KEYCODES.DOWN_ARROW:
                $el.type('{downarrow}');
                break;
            case KEYCODES.UP_ARROW:
                $el.type('{uparrow}');
                break;
            case KEYCODES.TAB:
                console.error('TAB not supported');
                break;
            default:
                break;
        }
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        switch (keyCode) {
            case KEYCODES.ENTER:
                $el.sendKeys(protractor.Key.ENTER);
                break;
            case KEYCODES.DOWN_ARROW:
                $el.sendKeys(protractor.Key.ARROW_DOWN);
                break;
            case KEYCODES.UP_ARROW:
                $el.sendKeys(protractor.Key.ARROW_UP);
                break;
            case KEYCODES.TAB:
                $el.sendKeys(protractor.Key.TAB);
                break;
            default:
                break;
        }
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 * @param {string} value 
 */
export const selectValue = (selector, value) => {
    if (isCypressTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : cy.get(selector);
        $el.select(value);
    } else if (isProtractorTestRunner()) {
        const $el = (typeof selector === 'object') ? selector : element(by.css(selector));
        $el.element(by.cssContainingText('option', value)).click();
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 */
export const findElement = (selector) => {
    if (isCypressTestRunner()) {
        return cy.get(selector);
    } else if (isProtractorTestRunner()) {
        return element(by.css(selector));
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 */
export const findAllElements = (selector) => {
    if (isCypressTestRunner()) {
        return cy.find(selector);
    } else if (isProtractorTestRunner()) {
        return element(by.css(selector));
    }
}

/**
 * 
 * @param {string} selector 
 */
export const findFirstElement = (selector) => {
    if (isCypressTestRunner()) {
        return cy.get(selector).first();
    } else if (isProtractorTestRunner()) {
        return element.all(by.css(selector)).first();
    }
}

/**
 * Works with Cypress & Protractor.
 * @param {string} text 
 * @param {object} options = {elementType: 'button'}
 */
export const findElementByText = (text, options) => {
    if (isCypressTestRunner()) {
        return cy.contains(text);
    } else if (isProtractorTestRunner()) {
        if (options && options.elementType && options.elementType === 'button') {
            return element(by.buttonText(text));
        } else if (options && options.elementType && options.elementType === 'anchor') {
            return element(by.linkText(text));
        } else {
            // Note: When finding elements by xpath, there is a known issue retrieving the attribute of such element(s).
            return element(by.xpath("//*[contains(text(), '".concat(text, "')]")));
        }
    }
}

/**
 * Works with Cypress & Protractor.
 * @param {string} attr 
 * @param {string} value 
 * @param {object} options = {elementType: 'button'}
 * @param {string} pos 
 */
export const findElementByAttr = (attr, value, options, pos) => {
    if (isCypressTestRunner()) {
        return cy.xpath('(//' + options.elementType + '[contains(' + attr + '(),"' + value + '")])[' + pos + ']');
    } else if (isProtractorTestRunner()) {
        // Note: When finding elements by xpath, there is a known issue retrieving the attribute of such element(s).
        return element(by.xpath('(//' + options.elementType + '[contains(' + attr + '(),"' + value + '")])[' + pos + ']'));
    }
}

/**
 * Works with Cypress & Protractor.
 * @param {string} xpath 
 */
export const findElementByXPath = (xpath) => {
    if (isCypressTestRunner()) {
        return cy.xpath(xpath);
    } else if (isProtractorTestRunner()) {
        // Note: When finding elements by xpath, there is a known issue retrieving the attribute of such element(s).
        return element(by.xpath(xpath));
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} selector 
 * @param {string} value 
 */
export const selectValueByXpath = (selector, value) => {
    if (isCypressTestRunner()) {
        var $el = (typeof selector === 'object') ? selector : cy.xpath(selector);
        $el.select(value);
    } else if (isProtractorTestRunner()) {
        var $el = (typeof selector === 'object') ? selector : element(by.xpath(selector));
        $el.element(by.cssContainingText('option', value)).click();

    }
}

/**
 * 
 * @param {string} selector 
 * @param {number} durationInMilliseconds 
 */

export const waitElementUntilVisible = (selector, durationInMilliseconds) => {
    if (isCypressTestRunner()) {
        return cy.get(selector).should('be.visible');
    } else if (isProtractorTestRunner()) {
        const $el = element(by.css(selector));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable($el), durationInMilliseconds);
        return $el;
    }
}

/**
 * 
 * @param {string} selector 
 * @param {number} durationInMilliseconds  
 */
export const waitElementUntilVisibleByXpath = (selector, durationInMilliseconds) => {
    if (isCypressTestRunner()) {
        return cy.xpath(selector).should('be.visible');
    } else if (isProtractorTestRunner()) {
        const $el = element(by.xpath(selector));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable($el), durationInMilliseconds);
        return $el;
    }
}


/**
 * Note: Works with Cypress. Doesn't work with Protractor.
 * @param {object} elementSelector 
 * @param {string} siblingSelector 
 */
export const findSiblingOfElement = (elementSelector, siblingSelector) => {
    const $el = elementSelector;
    if (typeof elementSelector !== 'object') throw new Error('*elementSelector* must be an object');

    if (isCypressTestRunner()) {
        return $el.siblings(siblingSelector).first();
    } else if (isProtractorTestRunner()) {
        // $el.element(by.xpath("..")).then(function(tee) {
        //     console.log('tee: ', tee);
        // })
        // $el.parentElementArrayFinder.each(function(ele, index) {
        //     console.log('hey: ')
        // });
        // return $el.element(by.xpath("..")).findElement(by.css(siblingSelector)); // Make sure only the first sibling is returned.
        // return $el.element(by.css(siblingSelector)); // Make sure only the first sibling is returned.
        // return $el.browser.element.all(by.css(siblingSelector)); // Make sure only the first sibling is returned.
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {number} durationInMilliseconds 
 */
export const delay = (durationInMilliseconds) => {
    if (isCypressTestRunner()) {
        return cy.wait(durationInMilliseconds);
    } else if (isProtractorTestRunner()) {
        return browser.sleep(durationInMilliseconds);
    }
}

/**
 * Note: Works with Cypress & Protractor.
 * @param {string} iframeId 
 */
export const switchToIframe = (iframeId) => {
    if (isCypressTestRunner()) {
        cy.frameLoaded('#'+iframeId)
    } else if (isProtractorTestRunner()) {
        browser.switchTo().frame(element(by.id(iframeId)).getWebElement());
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} id 
 * @param {string} text
 * @param {string} iframeid 
 */
export const inputTextInIframe = (id, text, iframeid) => {
    if (isCypressTestRunner()) {
        const $el = cy.iframe('#'+iframeid).find("input#"+id);
        $el.type(text);
    } else if (isProtractorTestRunner()) {
        element(by.xpath("//input[@id='"+id+"']")).sendKeys(text);
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} id 
 * @param {string} value 
 * @param {string} iframeid 
 */
export const selectValueInIframe = (id, value, iframeid) => {
    if (isCypressTestRunner()) {
        const $el = cy.iframe('#'+iframeid).find("select#"+id);
        $el.select(value);
    } else if (isProtractorTestRunner()) {
        const $el = element(by.xpath("//select[@id='"+id+"']"));
        $el.element(by.cssContainingText('option', value)).click();
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} selector 
 * @param {string} iframeid 
 */
export const triggerClickInIframe = (selector, iframeid) => {
    if (isCypressTestRunner()) {
        const $el = cy.iframe('#'+iframeid).find(selector);
        $el.click();
    } else if (isProtractorTestRunner()) {
        const $el = element(by.css(selector));
        browser.executeScript("arguments[0].click();", $el);
    }
}

/**
 * Note: Works with Cypress & Protractor
 * @param {string} displaytext - The text to be displayed in the log
 */
export const log = (displaytext) => {
    if (isCypressTestRunner()) {
        cy.log(displaytext);
    } else if (isProtractorTestRunner()) {
        console.log(displaytext);
    }
}
/**
 * Note: Works with Cypress & Protractor
 * @param {string} location - location to be one of "top" or "bottom" 
 */
export const scrollToSection = (location) => {
    if (isCypressTestRunner()) {
        cy.scrollTo(location);
    } else if (isProtractorTestRunner()) {
        if (location === 'top') {
            browser.executeScript('window.scrollTo(0,0);');
        } else if (location === 'bottom') {
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight);')
        }
    }
}
