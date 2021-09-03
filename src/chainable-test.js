import {    
    navigateToUrl, 
    navigationCommand, 
    triggerClick, 
    regularClick, 
    inputText, 
    inputKey, 
    selectValue, 
    findElement, 
    findAllElements, 
    findFirstElement, 
    findElementByText, 
    findElementByAttr, 
    findElementByXPath,  
    selectValueByXpath, 
    waitElementUntilVisible, 
    waitElementUntilVisibleByXpath, 
    findSiblingOfElement, 
    delay, 
    switchToIframe, 
    inputTextInIframe, 
    selectValueInIframe, 
    triggerClickInIframe,
    log, 
    scrollToSection
} from './browser-actions';
import { 
    assertCurrentUrlEquals, 
    assertCurrentUrlContains, 
    assertElementTextEquals, 
    assertElementXpathTextEquals, 
    assertElementHasClassAttribute, 
    assertElementIsVisible, 
    assertElementIsPresent, 
    assertElementNotExist, 
    assertInputElementValueEquals, 
    assertElementXpathTextContains
} from './browser-assertions';

class ChainableTest {
    elementContext = null;
    baseUrl = '';

    constructor(baseUrl) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    navigateToUrl(url) {
        navigateToUrl(`${this.baseUrl}${url}`);
        return this;
    }

    navigationCommand(method) {
        navigationCommand(method);
        return this;
    }

    findElement(selector) {
        this.elementContext = findElement(selector);
        return this;
    }

    findAllElements(selector) {
        this.elementContext = findAllElements(selector);
        return this;
    }

    findElementByText(text, options) {
        this.elementContext = findElementByText(text, options);
        return this;
    }

    findElementByAttr(attr, value, options, pos) {
        this.elementContext = findElementByAttr(attr, value, options, pos);
        return this;
    }

    findElementByXPath(xpath) {
        this.elementContext = findElementByXPath(xpath);
        return this;
    }

    selectValueByXpath(selector, value) {
        this.elementContext = selectValueByXpath(selector, value);
        return this;
    }
    
    findFirstElement(selector) {
        this.elementContext = findFirstElement(selector);
        return this;
    }

    findSiblingOfElement(siblingSelector, elementSelector) {
        if (elementSelector) {
            findSiblingOfElement(elementSelector, siblingSelector);
        } else if (this.elementContext !== null) {
            findSiblingOfElement(this.elementContext, siblingSelector);
        }
        return this;
    }

    waitElementUntilVisible(selector, durationInMilliseconds) {
        this.elementContext = waitElementUntilVisible(selector, durationInMilliseconds);
        return this;
    }

    waitElementUntilVisibleByXpath(selector, durationInMilliseconds) {
        this.elementContext = waitElementUntilVisibleByXpath(selector, durationInMilliseconds);
        return this;
    }
    
    switchToIframe(iframeId) {
        this.elementContext = switchToIframe(iframeId);
        return this;
    }

    inputTextInIframe(id, text, iframeid) {
        this.elementContext = inputTextInIframe(id, text, iframeid);
        return this;
    }

    selectValueInIframe(id, value, iframeid) {
        this.elementContext = selectValueInIframe(id, value, iframeid);
        return this;
    }

    triggerClickInIframe(selector, iframeid) {
        this.elementContext = triggerClickInIframe(selector, iframeid);
        return this;
    }

    triggerClick(selector) {
        if (selector) {
            triggerClick(selector);
        } else if (this.elementContext !== null) {
            triggerClick(this.elementContext);
        }
        return this;
    }

    regularClick(selector) {
        if (selector) {
            regularClick(selector);
        } else if (this.elementContext !== null) {
            regularClick(this.elementContext);
        }
        return this;
    }

    inputText(text, selector) {
        if (selector) {
            inputText(selector, text);
        } else if (this.elementContext !== null) {
            inputText(this.elementContext, text);
        }
        return this;
    }

    inputKey(keyCode, selector) {
        if (selector) {
            inputKey(selector, keyCode);
        } else if (this.elementContext !== null) {
            inputKey(this.elementContext, keyCode);
        }
        return this;
    }

    delay(durationInMilliseconds) {
        if (durationInMilliseconds) {
            delay(durationInMilliseconds);
        }
        return this;
    }

    log(displaytext) {
        log(displaytext);
        return this;
    }

    scrollToSection(location) {
        scrollToSection(location);
        return this;
    }

    selectValue(value, selector) {
        if (selector) {
            selectValue(selector, value);
        } else if (this.elementContext !== null) {
            selectValue(this.elementContext, value);
        }
        return this;
    }

    assertCurrentUrlEquals(expectedValue) {
        assertCurrentUrlEquals(expectedValue);
        return this;
    }

    assertCurrentUrlContains(expectedValue) {
        assertCurrentUrlContains(expectedValue);
        return this;
    }

    assertElementTextEquals(expectedValue, selector) {
        if (selector) {
            assertElementTextEquals(selector, expectedValue);
        } else if (this.elementContext !== null) {
            assertElementTextEquals(this.elementContext, expectedValue);
        }
        return this;
    }

    assertElementXpathTextEquals(xpath, expectedValue) {
        if (xpath) {
            assertElementXpathTextEquals(xpath, expectedValue);
        } else if (this.elementContext !== null) {
            assertElementXpathTextEquals(this.elementContext, expectedValue);
        }
        return this;
    }
    
    assertElementHasClassAttribute(expectedValue, selector) {
        if (selector) {
            assertElementHasClassAttribute(selector, expectedValue);
        } else if (this.elementContext !== null) {
            assertElementHasClassAttribute(this.elementContext, expectedValue);
        }
        return this;
    }

    assertInputElementValueEquals(expectedValue, selector) {
        if (selector) {
            assertInputElementValueEquals(selector, expectedValue);
        } else if (this.elementContext !== null) {
            assertInputElementValueEquals(this.elementContext, expectedValue);
        }
        return this;
    }

    assertElementXpathTextContains(xpath, type, expectedValue) {
        if (xpath) {
            assertElementXpathTextContains(xpath, type, expectedValue);
        } else if (this.elementContext !== null) {
            assertElementXpathTextContains(xpath, type, expectedValue);
        }
        return this;
    }
    
    assertElementIsPresent(selector) {
        if (selector) {
            assertElementIsPresent(selector);
        } else if (this.elementContext !== null) {
            assertElementIsPresent(this.elementContext);
        }
        return this;
    }

    assertElementNotExist(selector) {
        if (selector) {
            assertElementNotExist(selector);
        } else if (this.elementContext !== null) {
            assertElementNotExist(this.elementContext);
        }
        return this;
    }

    assertElementIsVisible(selector) {
        if (selector) {
            assertElementIsVisible(selector);
        } else if (this.elementContext !== null) {
            assertElementIsVisible(this.elementContext);
        }
        return this;
    }
}

export default ChainableTest;