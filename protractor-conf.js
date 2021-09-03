const SMARTBEAR_CBT_USERNAME = 'Raghu.Vamsi@wawa.com';
const SMARTBEAR_CBT_AUTHKEY = 'Vision2020!@';


exports.config = {
    framework: 'jasmine',
   // seleniumAddress: `https://${SMARTBEAR_CBT_USERNAME}:${SMARTBEAR_CBT_AUTHKEY}@hub.crossbrowsertesting.com:443/wd/hub`,
    // seleniumAddress: `http://${SMARTBEAR_CBT_USERNAME}:${SMARTBEAR_CBT_PASSWORD}@hub-cloud.crossbrowsertesting.com:443/wd/hub`,
     seleniumAddress: 'http://localhost:4444/wd/hub',
    // baseUrl: 'https://www.google.com/',
    params: { // pass environment variables
        "GOOGLE_BASE_URL": "https://qa01-private.ip.wawa.com/order-management-portal/ui",
        "CATERING_LITE_URL_QA": "https://qa01.ip.wawa.com/commerce/ui",
        "LOCAL_DEMO_BASE_URL": "http://localhost:3000",
        "IS_VISUAL_TESTING_ENABLED": false
    },
    jasmineNodeOpts: {defaultTimeoutInterval: 300000},
    multiCapabilities: [{
        browserName: 'chrome',
		
		record_video : 'true',
        record_network : false,
        record_snapshot : false,
        username : SMARTBEAR_CBT_USERNAME,
        password : SMARTBEAR_CBT_AUTHKEY
    }], 
    plugins: [
        {
            package: 'protractor-react-selector'
        }
    ],
    specs: ['tests/catering-lite.spec.js'],
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        // await browser.waitForReact();
        require('@babel/register');
        //you can do magic here. See the Pro-tip in later section
    }
};

//Your username is kevingomes5 and access key is kL6tmBz7C9ozpLXi58q9.
// We’ll see where to use this soon.