//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CustomWidget",
    appName: "CustomWidget",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.80.80",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://169.254.80.80:80/middleware/MWServlet",
    secureurl: "https://169.254.80.80:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmChartGlobals();
    frmCustomButtonGlobals();
    frmDoubleSliderGlobals();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "cwiclassname": "com.konylabs.customwidget.N_customwidgets"
    });
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;