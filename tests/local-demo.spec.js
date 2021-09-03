import { getEnvironmentVariable } from '../src/helpers';
import ChainableTest from '../src/chainable-test';

describe('Demo Page', () => {
    let test = new ChainableTest(getEnvironmentVariable('LOCAL_DEMO_BASE_URL'));

    it('finds element by text and triggers click', () => {
        test.navigateToUrl('/')
            .findElementByText('About link', {elementType: 'anchor'}).triggerClick();
    });

    it('verifies an element has text', () => {
        test.navigateToUrl('/')
            .findElement('.page-title').assertElementTextEquals('Index Page');
    });

    it('enters text in input fields', () => {
        test.navigateToUrl('/')
            .findElement('input#field-1').inputText('Wawa Inc.')
            .findElement('textarea#field-2').inputText('Wawa Inc.');
    });

    it('verifies the presence of a hidden element', () => {
        test.navigateToUrl('/')
            .findElement('#elementHidden').assertElementIsPresent();
    });

    it('verifies the visibility of an element', () => {
        test.navigateToUrl('/')
            .findElement('.page-title').assertElementIsVisible();
    });

    it('verifies an element has a class attribute', () => {
        test.navigateToUrl('/')
            .findElementByText('About link', {elementType: 'anchor'}).assertElementHasClassAttribute('link-active');
    });
});