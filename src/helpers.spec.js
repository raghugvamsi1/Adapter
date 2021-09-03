import { 
    _disableMemoization, 
    getCurrentTestRunner, 
    isCypressTestRunner, 
    isProtractorTestRunner
} from './helpers';

describe("Helpers", () => {
    beforeAll(() => {
        _disableMemoization();
    });

    beforeEach(() => {
        global.browser = null;
        global.Cypress = null;
    })

    it("getCurrentTestRunner() - No Test Runners available", () => {
        const CTR = getCurrentTestRunner();
        expect(CTR).toEqual({
            cypress: false,
            protractor: false
        });
    });

    it("getCurrentTestRunner() - Protractor is available", () => {
        global.browser = {};
        const CTR = getCurrentTestRunner();
        expect(CTR).toEqual({
            cypress: false,
            protractor: true
        });
    });

    it("isCypressTestRunner() - returns false", () => {
        global.browser = {};
        const flag = isCypressTestRunner();
        expect(flag).toBeFalsy();
    }); 

    it("isProtractorTestRunner() - returns true", () => {
        global.browser = {};
        const flag = isProtractorTestRunner();
        expect(flag).toBeTruthy();
    }); 

    it("getCurrentTestRunner() - Cypress is available", () => {
        global.Cypress = {};
        const CTR = getCurrentTestRunner();
        expect(CTR).toEqual({
            cypress: true,
            protractor: false
        });
    });

    it("isCypressTestRunner() - returns true", () => {
        global.Cypress = {};
        const flag = isCypressTestRunner();
        expect(flag).toBeTruthy();
    }); 

    it("isProtractorTestRunner() - returns false", () => {
        global.Cypress = {};
        const flag = isProtractorTestRunner();
        expect(flag).toBeFalsy();
    });
});