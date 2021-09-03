import { getEnvironmentVariable } from '../src/helpers';
import ChainableTest from '../src/chainable-test';
import { KEYCODES } from '../src/constants';

describe('Home Page', () => {
    let test = new ChainableTest(getEnvironmentVariable('GOOGLE_BASE_URL'));

    it('Navigates to about link', () => {
        test.navigateToUrl('/').findElementByText('About').triggerClick();
    });

    it('Searches for text', () => {
        test.navigateToUrl('/').findElement('input[name="q"]').inputText('Wawa Inc.').inputKey(KEYCODES.ENTER);
    });
    
    it('Navigates to about link with xpath, Navigates back to search page and asserts the xpath text contains the value', () => {
        test.navigateToUrl('/').findElementByXPath('//a[contains(text(),"About")]').triggerClick().delay(100).navigationCommand('back').findElement('input[name="q"]').inputText('Wawa Inc.').inputKey(KEYCODES.ENTER).assertElementXpathTextContains('//input[@aria-label="Search"]', 'text', 'Wawa Inc.');
    });

    it('Wait for the xpath element to be visible and then searches for text, Logs output message', () => {
        test.navigateToUrl('/').waitElementUntilVisibleByXpath('//a[contains(text(),"About")]').findElement('input[name="q"]').inputText('Wawa Inc.').inputKey(KEYCODES.ENTER).log("Search text is entered");
    });
    
    it('Scrolls to bottom of the page and asserts that the element doesnt exist', () => {
        test.navigateToUrl('/').waitElementUntilVisibleByXpath('//a[contains(text(),"About")]').findElement('input[name="q"]').inputText('Wawa Inc.').inputKey(KEYCODES.ENTER).delay(2000).scrollToSection('bottom').assertElementNotExist('Your Cart Is Empty');
    });
    
    it('Searches for text and asserts if the value exists in the element', () => {
        test.navigateToUrl('/').findElement('input[name="q"]').inputText('Wawa Inc.').assertInputElementValueEquals('Wawa Inc.', 'input[name="q"]');
    });
         
    it('Searches for text and asserts if the xpath value equals the entered text', () => {
        test.navigateToUrl('/').findElement('input[name="q"]').inputText('Wawa Inc.').inputKey(KEYCODES.ENTER).delay(200).assertElementXpathTextEquals( '//input[@aria-label="Search"]','');
    });
 
});