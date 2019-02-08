(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _DemoManager = __webpack_require__(7);

var _DemoManager2 = _interopRequireDefault(_DemoManager);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clsLink = 'link linkButton ';

exports.default = function (props) {
    var linkToPage = function linkToPage(page, text, extraCls) {
        return _react2.default.createElement(
            _reactStatic.Link,
            { exact: page === '', activeClassName: 'selected', className: clsLink + extraCls, to: '/' + page },
            text
        );
    };

    if (props.top) {
        return _react2.default.createElement(
            'nav',
            { id: 'topBar' },
            _react2.default.createElement(
                _reactStatic.Head,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Moo.do' + (props.title ? ' - ' + props.title : '')
                )
            ),
            _react2.default.createElement(
                'div',
                { id: 'topBarInside' },
                _react2.default.createElement(
                    _reactStatic.Link,
                    { id: 'logoWrapper', to: '/' },
                    _react2.default.createElement('img', { className: 'logo', src: '/img/logoForWhite600.png' })
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'topLinks' },
                    linkToPage('premium', 'Premium'),
                    linkToPage('help', 'Help'),
                    linkToPage('blog', 'Blog'),
                    _react2.default.createElement(
                        'span',
                        { className: clsLink + 'linkLogin noMobile', title: 'Login', onClick: _auth2.default.openApp.bind(_auth2.default, 'topbar') },
                        'Login'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: clsLink + 'linkGetStarted noMobile', title: 'Get Started', onClick: _auth2.default.openApp.bind(_auth2.default, 'topbar') },
                        'Get Started'
                    )
                )
            )
        );
    } else {
        return _react2.default.createElement(
            'div',
            { id: 'footer', className: 'center' },
            linkToPage('', 'Home', 'noMobile'),
            linkToPage('premium', 'Premium'),
            linkToPage('help', 'Help'),
            linkToPage('changelog', 'Changelog'),
            linkToPage('blog', 'Blog'),
            linkToPage('us', 'About Us'),
            linkToPage('contact', 'Contact'),
            linkToPage('press', 'Press'),
            linkToPage('privacy', 'Privacy'),
            _react2.default.createElement(
                'span',
                { className: 'socialIcons' },
                _react2.default.createElement(
                    'a',
                    { className: clsLink, target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Facebook', 'bot'), href: 'https://www.facebook.com/MooDoApp' },
                    _react2.default.createElement('i', { className: 'icon-facebook' })
                ),
                _react2.default.createElement(
                    'a',
                    { className: clsLink, target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Twitter', 'bot'), href: 'https://www.twitter.com/MooDoApp' },
                    _react2.default.createElement('i', { className: 'icon-twitter' })
                ),
                _react2.default.createElement(
                    'a',
                    { className: clsLink, target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Google', 'bot'), href: 'https://www.google.com/+MooDoApp' },
                    _react2.default.createElement('i', { className: 'icon-google-plus' })
                ),
                _react2.default.createElement(
                    'a',
                    { className: clsLink, target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Email', 'bot') },
                    _react2.default.createElement('i', { className: 'icon-envelope' })
                )
            )
        );
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _DemoManager = __webpack_require__(7);

var _DemoManager2 = _interopRequireDefault(_DemoManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function auth() {
    this.clientId = "597847337936.apps.googleusercontent.com";

    this.scopes = ['https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/drive.install', 'https://www.googleapis.com/auth/drive.appdata'];

    this.isLoggedIn = false;
}

auth.prototype = {
    init: function init(cb) {
        gapi.auth.init(); // Always call init on load so popup doesn't get blocked later

        this.authenticate( /*immediate*/true, cb);
    },
    getCurrentAppUser: function getCurrentAppUser() {
        try {
            var localSettings = window.localStorage.getItem('localSettings');

            var localSettingsObj = JSON.parse(localSettings);

            if (localSettingsObj) {
                var currentUser = localSettingsObj.values.Default.activeUser;

                return currentUser;
            }
        } catch (err) {
            log('Error getting app user: ', err);
        }

        return undefined;
    },
    requestAuthorization: function requestAuthorization(goPremium) {
        var ua = navigator.userAgent;

        if (!window.gapi || !window.gapi.auth) {
            this.sendToApp(false, goPremium);
        } else if (ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident') !== -1) {
            // Send directly to app for login for IE as immediate login does not currently work
            this.sendToApp(false, goPremium);
        } else {
            this.authenticate(false, function (isAuthorized) {
                if (isAuthorized) {
                    this.getEmailAddr(function (userInfo) {
                        var currentUser = this.getCurrentAppUser();

                        if (currentUser === userInfo.email) {
                            this.sendToApp(false, goPremium);
                        } else {
                            this.sendToApp(userInfo.email, goPremium);
                        }
                    }.bind(this));
                } else {
                    this.sendToApp();
                }
            }.bind(this));
        }
    },
    sendToApp: function sendToApp(forceUser, goPremium, noLogin, isPremium) {
        var host = window.location.host;

        // if (host === 'beta.moo.do')
        // {
        //     host = 'www.moo.do';
        // }

        var inviteParam = _util2.default.getURLHashParam('invite');

        // if (window.location.search.indexOf('ref=producthunt') > 0)
        // {
        //     inviteParam = 'producthunt';
        // }

        var newAddr;
        var hash = '';

        if (forceUser) {
            hash = 'user=' + encodeURIComponent(forceUser);
            newAddr = 'https://' + host + '/web/';
        } else {
            if (!noLogin) hash += 'login=true';

            newAddr = 'https://' + host + '/web/';
        }

        if (inviteParam) {
            hash += (hash ? '&' : '') + 'invite=' + inviteParam;
        }

        if (goPremium) {
            hash += (hash ? '&' : '') + 'premium=true';
        }

        if (isPremium) {
            hash += (hash ? '&' : '') + 'ispremium=true';
        }

        window.location.href = newAddr + (hash ? '#' + hash : '');
    },
    authenticate: function authenticate(immediate, callback) {
        var config = {
            'client_id': this.clientId,
            'scope': this.scopes,
            'immediate': immediate,
            'response_type': 'token id_token',
            'authuser': -1
        };

        var standalone = !!window.navigator.standalone || window.navigator.userAgent.indexOf('FluidApp') >= 0;

        var requireCustomRedirect = standalone || this.isMobro();

        if (requireCustomRedirect && !immediate) {
            config['redirect_uri'] = 'https://' + window.location.host + '/web/';
        }

        gapi.auth.authorize(config, function (token) {
            //console.log('Landing Page Auth Token: ', token);

            if (token && !token.error) {
                this.isLoggedIn = true;

                console.log('Landing Page Auth Logged In');
            } else {
                console.log('Landing Page Auth Logged Out');
            }

            if (callback) {
                callback(this.isLoggedIn);
            }
        }.bind(this));
    },
    decodeIDToken: function decodeIDToken(jwt) {
        var decoded;

        if (jwt) {
            var parts = jwt.split('.');

            try {
                decoded = JSON.parse(_util2.default.b64_to_utf8(parts[1]));
            } catch (err) {
                log('Decode Error: ', err);
            }
        }

        return decoded;
    },
    getEmailAddr: function getEmailAddr(_cb) {
        var token = gapi.auth.getToken();

        if (token) {
            var url = 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + token.access_token;

            _util2.default.XHR({
                type: 'GET',
                url: url,
                autoRetry: true,
                cb: function cb(xhr) {
                    if (xhr.status === 200) {
                        var userInfoParsed = {};

                        try {
                            userInfoParsed = JSON.parse(xhr.responseText);
                        } catch (err) {
                            log('Error: ', err);
                        }

                        _cb(userInfoParsed);
                    } else {
                        _cb();
                    }
                }
            });
        }
    },
    isMobro: function isMobro() {
        var supported = null,
            errorName;

        try {
            new ActiveXObject("");
        } catch (e) {
            // FF has ReferenceError here
            errorName = e.name;
        }

        try {
            supported = !!new ActiveXObject("htmlfile");
        } catch (e) {
            supported = false;
        }

        if (errorName != 'ReferenceError' && supported == false) {
            supported = false;
        } else {
            supported = true;
        }

        return !supported;
    },
    openApp: function openApp() {
        _util2.default.sendEvent(_util2.default.PageEvents.GetStartedClicked, location);

        _util2.default.setSegment(_util2.default.Segment.SignedUp);

        if (_DemoManager2.default.isMobile()) {
            _util2.default.sendToAppStore(_DemoManager2.default.OS);
        } else {
            this.sendToApp(false, false, /*noLogin*/true);
        }
    }
};

exports.default = new auth();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _DemoManager = __webpack_require__(7);

var _DemoManager2 = _interopRequireDefault(_DemoManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var self = {
    PageEvents: {
        LoginClicked: 'LoginClicked',
        GetStartedClicked: 'GetStartedClicked',
        AppClicked: 'AppClicked',
        NativeAppClicked: 'NativeAppClicked',
        SocialClicked: 'SocialClicked',
        ExternalPage: 'ExternalPage'
    },
    Segment: {
        DriveBy: 0,
        Watched: 1,
        Browsed: 2,
        Interacted: 3,
        SocialClicked: 4,
        AppClicked: 5,
        SignedUp: 6,
        ExistingUser: 7,
        NativeAppClicked: 8
    }
};

if (typeof String.prototype.startsWith !== 'function') {
    if (Object.defineProperty) {
        Object.defineProperty(String.prototype, 'startsWith', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function value(searchString, position) {
                position = position || 0;

                return this.lastIndexOf(searchString, position) === position;
            }
        });
    } else {
        String.prototype.startsWith = function (str) {
            return this.lastIndexOf(str, 0) === 0;
        };
    }
}

self.decodeRedirect = function (str) {
    var utf8;

    if (str) {
        utf8 = self.b64_to_utf8(str.substr(1));
    }

    return utf8;
};

self.encodeRedirect = function (path) {
    return self.utf8_to_b64(path);
};

self.utf8_to_b64 = function (str) {
    var b64;

    try {
        b64 = window.btoa(unescape(encodeURIComponent(str))).replace(/\+/g, '-').replace(/\//g, '_');
    } catch (err) {
        self.reportError(err, str);
    }

    return b64;
};

self.b64_to_utf8 = function (str) {
    var utf8;

    try {
        utf8 = decodeURIComponent(escape(window.atob(str.replace(/-/g, '+').replace(/_/g, '/'))));
    } catch (err) {
        self.reportError(err, str);
    }

    return utf8;
};

self._segment = self.Segment.DriveBy;

self.setSegment = function (seg) {
    if (seg > self._segment) {
        self._segment = seg;
    }
};

var segmentNames = ['DriveBy', 'Watched', 'Browsed', 'Interacted', 'SocialClicked', 'AppClicked', 'SignedUp', 'ExistingUser'];
self.getSegment = function () {
    return segmentNames[self._segment];
};

self.getURLHashParam = function (key) {
    if (typeof window !== 'undefined') {
        var queryString = window.location.hash.substring(1);

        var regex = /([^&=]+)=([^&]*)/g;
        var m;

        while (m = regex.exec(queryString)) {
            if (decodeURIComponent(m[1]) === key) {
                return decodeURIComponent(m[2]);
            }
        }
    }

    return undefined;
};

function generateQueryString(data) {
    var queryString = '';

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
        var queryArr = [];

        for (var key in data) {
            queryArr[queryArr.length] = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }

        queryString = queryArr.join('&').replace(/%20/g, '+');
    } else {
        queryString = data;
    }

    return queryString;
};

var maxRetryCount = 5;
var retryTimeouts = [0, 5, 15, 35, 80, 170];
var retryErrorCodes = [408, 500, 502, 503, 504];

self.XHR = function (params) {
    var url = params.url;
    var type = params.type;
    var cb = params.cb;
    var data = params.data;
    var headers = params.headers;
    var autoRetry = params.autoRetry;
    var maxRetries = params.maxRetries || 2;
    var currentRetries = 0;

    var username = params.username;
    var password = params.password;

    var productionAPI = '//api.moo.do/';
    if (url.startsWith('https:' + productionAPI)) {
        if (window.location.hostname === 'beta.moo.do') {
            url = url.replace('api.moo.do', 'api-beta.moo.do');
        } else if (window.location.hostname === 'dev.moo.do' || window.location.hostname === 'localhost') {
            url = url.replace('api.moo.do', 'api-dev.moo.do');
        }
        // else if (window.location.hostname === 'localhost')
        // {
        //     console.log('xhr local');
        //     url = url.replace('https://api.moo.do', 'http://localhost:9024');
        // }
    }

    function retry() {
        if (currentRetries < maxRetries) {
            currentRetries++;

            setTimeout(sendXHR, retryTimeouts[currentRetries] * 1000);
        } else {
            log('XHR Failed to retry - reached max retry limit');
        }
    }

    function sendXHR() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }

            // If the XHR was a failure, setup request for retry if requested and valid
            if (xhr.status !== 200) {
                // If we have retries left, enable the retry field so callers can perform a retry
                if (currentRetries < maxRetries) {
                    xhr.retry = retry;

                    // Some callers may request auto-retry, in which case do not call the CB. Invalid requests
                    // do not get automatically retried as there is an issue with the payload.
                    if (autoRetry && retryErrorCodes.indexOf(xhr.status) >= 0) {
                        xhr.retry();
                    } else {
                        // When not auto-retrying, the caller is responsible for performing the retry themselves
                        cb(xhr);
                    }
                } else {
                    // If we have exhausted the retry count, ensure that the CB is still called with a failure code
                    cb(xhr);
                }
            } else {
                // No need to retry on success
                cb(xhr);
            }
        };

        if (username && password) {
            xhr.open(type.toUpperCase(), url, /*async*/true, username, password);
        } else {
            xhr.open(type.toUpperCase(), url, /*async*/true);
        }

        if (headers) {
            for (var key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }

        if (data) {
            xhr.setRequestHeader('Accept', '*/*');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            var queryString = generateQueryString(data);
            xhr.send(queryString);
        } else {
            //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

            xhr.send();
        }
    }

    sendXHR();
};

self.XHR_PrivateAPI = function (params) {
    var basePath = '/private/v1',
        url = window.location.hostname === 'beta.moo.do' ? 'api-beta.moo.do' : 'api.moo.do';

    // TODO: Does not support authenticated requests

    var XHRParams = {
        type: params.type,
        url: 'https://' + url + basePath + params.path,
        data: params.data,
        cb: params.cb,
        headers: params.headers,
        autoRetry: params.autoRetry,
        maxRetries: params.maxRetries
    };

    self.XHR(XHRParams);
};

self.XHR_PublicAPI = function (params) {
    // TODO: Implement
};

self.sendEvent = function (action, label, nonInteractive) {
    if (action) {
        if (window.ga) {
            try {
                ga('send', 'event', 'LandingPage', action, label, /*value*/undefined, nonInteractive);
            } catch (err) {
                self.reportError(err);
            }
        } else {
            self.reportError(new Error('GAnalytics not found'));
        }
    } else {
        self.reportError(new Error('Invalid landing page event action'));
    }
};

self.tagSession = function (field, value) {
    if (window.smartlook) {
        try {
            smartlook('tag', field, value);
        } catch (err) {
            self.reportError(err);
        }
    }
};

if (typeof window !== 'undefined') {
    if (window.ga) {
        ga(function (tracker) {
            var clientId = tracker.get('clientId');

            self.tagSession('name', clientId);
        });
    }

    window.__BEFORE_UNLOAD = function () {
        self.tagSession('segment', self.getSegment());
    };
}

self.reportError = function (err) {
    if (window.Rollbar) {
        Rollbar.error(err);
    }
};

self.sendToAppStore = function (appStore, location) {
    if (_DemoManager2.default.isMobile() && _DemoManager2.default.OS) {
        appStore = _DemoManager2.default.OS;

        var url;
        switch (appStore) {
            case _DemoManager2.default.OSNames.Android:
                url = 'https://play.google.com/store/apps/details?id=moo.do';
                break;
            case _DemoManager2.default.OSNames.Chrome:
                url = 'https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk';
                break;
            case _DemoManager2.default.OSNames.iOS:
                url = 'https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8';
                break;
            default:
                break;
        }

        if (url) {
            window.open(url);

            return false;
        }
    }

    if (appStore && location) {
        self.sendEvent(self.PageEvents.AppClicked, location);

        self.setSegment(self.Segment.AppClicked);
    }
};

self.sendToExternalPage = function (url) {
    self.sendEvent(self.PageEvents.ExternalPage, url);

    window.open(url);
};

function endsWith(str, pattern) {
    return str.indexOf(pattern, str.length - pattern.length) !== -1;
}

var nativeDownloadDefault = 'https://www.moo.do/download/';
var nativeDownloadOSX = 'https://www.moo.do/lnk/mac';
var nativeDownloadWin = 'https://www.moo.do/lnk/windows';

// (function ()
// {
//     self.XHR({
//         type: 'GET',
//         url: 'https://api.github.com/repos/MooDoApp/MooDoApp.github.io/releases/latest',
//         cb: function (xhr)
//         {
//             if (xhr.status === 200)
//             {
//                 var data = JSON.parse(xhr.responseText);

//                 for (var i = 0; i < data.assets.length; ++i)
//                 {
//                     var asset = data.assets[i];

//                     if (endsWith(asset.name, '.exe'))
//                     {
//                         nativeDownloadWin = asset.browser_download_url;

//                         var linkWin = document.getElementById('downloadWindows');

//                         if (linkWin)
//                         {
//                             linkWin.href = nativeDownloadWin;
//                         }
//                     }
//                     else if (endsWith(asset.name, '.zip'))
//                     {
//                         nativeDownloadOSX = asset.browser_download_url;

//                         var linkOSX = document.getElementById('downloadOSX');

//                         if (linkOSX)
//                         {
//                             linkOSX.href = nativeDownloadOSX;
//                         }
//                     }
//                 }
//             }
//         }
//     });
// })();

self.updateDownloadUrl = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        var xhr = new XMLHttpRequest(),
            url = 'https://api.github.com/repos/MooDoApp/MooDoApp.github.io/releases/latest';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);

                    if (data && data.assets) {
                        for (var i = 0; i < data.assets.length; ++i) {
                            var asset = data.assets[i];
                            if (asset.name.indexOf('.zip') > 0) {
                                nativeDownloadOSX = asset.browser_download_url;
                            } else if (asset.name.indexOf('.exe') > 0) {
                                nativeDownloadWin = asset.browser_download_url;
                            }
                        }
                    }
                }
            }
        };

        xhr.open('GET', url);
        xhr.send();
    }
};

self.downloadNativeApp = function (location, os) {
    var url = nativeDownloadDefault;
    if (!_DemoManager2.default.isMobile()) {
        if (!os) {
            os = _DemoManager2.default.OS;
        }

        switch (os) {
            case _DemoManager2.default.OSNames.Windows:
                url = nativeDownloadWin;
                break;
            case _DemoManager2.default.OSNames.OSX:
                url = nativeDownloadOSX;
                break;
        }

        if (!url) {
            url = nativeDownloadDefault;
        }
    }

    if (url) {
        self.sendEvent(self.PageEvents.NativeAppClicked, location);

        self.setSegment(self.Segment.NativeAppClicked);

        window.open(url);

        return false;
    }
};

var SocialLink = {
    Facebook: 'Facebook',
    Twitter: 'Twitter',
    Google: 'Google',
    Email: 'Email'
};

self.sendToSocialMedia = function (social, location) {
    if (social === SocialLink.Email) {
        window.open('mailto:contact@moo.do', '_blank');
    }

    self.sendEvent(self.PageEvents.SocialClicked, location);

    self.setSegment(self.Segment.SocialClicked);
};

self.removeExistingScript = function (script) {
    if (false) {
        console.log('script missing id');
    }

    var existing = document.getElementById(script.id);
    if (existing) {
        existing.parentNode.removeChild(existing);
    }
};

exports.default = self;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OSNames = {
    Android: 'Android',
    Chrome: 'Chrome',
    iOS: 'iOS',
    Windows: 'Windows',
    OSX: 'Mac',
    Linux: 'Linux'
};

function DemoManager() {
    this.init();

    this.OSNames = OSNames;

    this._onDemoLoaded = function () {};
    this._onDemoDone = function () {};
    this._onDemoInteracted = function () {};

    this.configLoaded = false;
    this.videoLoaded = false;

    this._loadingVideoPlayer = false;
    this._videoLibLoaded = false;
    this._videoQueue = [];

    this.demos = [];

    this.demoIndex = 0;
    this.loadingDemo = undefined;
}

DemoManager.prototype = {
    init: function init() {
        if (typeof navigator !== 'undefined') {
            this._preferImages = this.isMobile() || this.isLegacyBrowser();
            this._forceVideo = this.isMobile() || this.isLegacyBrowser();
            this._noLoadDelay = this.isMobile();
            this._isRetina = this.isRetina();
            this._isLegacy = this.isLegacyBrowser();

            this.checkPageScroll = this.checkPageScroll.bind(this);

            var userAgent = navigator.userAgent;
            if (userAgent.indexOf('iPad') !== -1 || userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPod') !== -1) {
                this.OS = OSNames.iOS;
                this._isMobile = true;
            } else if (userAgent.indexOf('Android') !== -1) {
                this.OS = OSNames.Android;
                this._isMobile = true;
            } else if (!!userAgent.match(/IEMobile/i)) {
                this.OS = OSNames.Windows;
                this._isMobile = true;
            } else if (userAgent.indexOf('Win') !== -1) {
                this.OS = OSNames.Windows;
            } else if (userAgent.indexOf('Mac') !== -1) {
                this.OS = OSNames.OSX;
            } else if (userAgent.indexOf('Linux') !== -1) {
                this.OS = OSNames.Linux;
            }

            if (!this._isMobile) {
                var check = false;

                (function (a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);

                if (!check) {
                    var mediaQuery = '(max-device-width: 620px)';

                    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
                        check = true;
                    }
                }

                this._isMobile = check;
            }

            window.addEventListener('message', this.receiveFrameMessage.bind(this), false);
        }
    },
    registerListeners: function registerListeners(onLoaded, onDone, onInteracted, onScroll) {
        if (onLoaded) {
            this._onDemoLoaded = onLoaded;
        }

        if (onDone) {
            this._onDemoDone = onDone;
        }

        if (onInteracted) {
            this._onDemoInteracted = onInteracted;
        }

        if (onScroll) {
            this._onDemoScroll = onScroll;
        }
    },
    config: function config(_config) {
        this._forceVideo = _config.forceVideo;
        this._noLoadDelay = _config.noLoadDelay;
        this._onlyOne = _config.onlyOne;

        if (_config.isMobile !== undefined) {
            this._isMobile = _config.isMobile;
        }

        this.configLoaded = true;
    },
    isMobile: function isMobile() {
        return this._isMobile;
    },
    isLegacyBrowser: function isLegacyBrowser() {
        if (this._isLegacy === undefined) {
            this._isLegacy = false;

            var userAgent = navigator.userAgent;

            var majorVersion = 1000;
            var minorVersion = 1000;

            if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident') !== -1) {
                this._isLegacy = true;
            } else if (userAgent.indexOf('Chrome') !== -1 || userAgent.indexOf('CriOS') !== -1) {
                var re = new RegExp('Chrome/([0-9]{1,})\.');

                if (re.exec(userAgent) != null) {
                    majorVersion = parseFloat(RegExp.$1);
                }

                if (majorVersion < 26) {
                    this._isLegacy = true;
                }
            } else if (userAgent.indexOf('Android') !== -1) {
                var re = new RegExp('Linux; Android ([0-9]{1,})\.([0-9]{1,})\.');

                if (re.exec(userAgent) != null) {
                    majorVersion = parseFloat(RegExp.$1);
                    minorVersion = parseFloat(RegExp.$2);
                }

                if (this.majorVersion < 4) {
                    this._isLegacy = true;
                }
            } else if (userAgent.indexOf('Firefox') !== -1) {
                var re = new RegExp('Firefox/([0-9]{1,})\.');

                if (re.exec(userAgent) != null) {
                    majorVersion = parseFloat(RegExp.$1);
                }

                if (majorVersion < 16) {
                    this._isLegacy = true;
                }
            } else if (userAgent.indexOf('Safari') !== -1) {
                var re = new RegExp('Version/([0-9]{1,})\.([0-9]{1,})\.');

                if (re.exec(userAgent) != null) {
                    majorVersion = parseFloat(RegExp.$1);
                    minorVersion = parseFloat(RegExp.$2);
                }

                if (majorVersion < 6) {
                    this._isLegacy = true;
                }
            }
        }

        return this._isLegacy;
    },
    isRetina: function isRetina() {
        if (this._isRetina === undefined) {
            var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

            if (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia(mediaQuery).matches) {
                this._isRetina = true;
            } else {
                this._isRetina = false;
            }
        }

        return this._isRetina;
    },
    requireInteractivity: function requireInteractivity() {
        return navigator.userAgent.indexOf('Edge') !== -1;
    },
    getPageScrollOffset: function getPageScrollOffset() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    },
    registerDemo: function registerDemo(info) {
        console.assert(info.img || info.src, 'Must supply either an image or an iframe src');

        this.demos.push(info);
    },
    registerDemos: function registerDemos(infoArr) {
        for (var i = 0; i < infoArr.length; ++i) {
            this.registerDemo(infoArr[i]);
        }
    },
    checkPageScroll: function checkPageScroll() {
        var buffer = 100,
            h = window.innerHeight;

        for (var i = 0; i < this.demos.length; i++) {
            var d = this.demos[i],
                el = document.getElementById(d.id);

            var r = el.getBoundingClientRect();
            if (r.bottom > -buffer && r.top < h + buffer) {
                if (!d.isLoaded && !d.isLoading) {
                    // console.log('load demo', i, d.data, r.top, r.bottom);
                    this.loadDemo(d);
                }
            }

            if (d.isLoaded) {
                var amt = Math.max(0, Math.min(h, r.bottom) - Math.max(0, r.top)),
                    perc = amt / r.height;

                if (perc >= 0.5 && !d.isPlaying) {
                    // console.log('on screen play', i, d.data, r.top, r.bottom);

                    // On screen so it should start playing
                    this.sendFrameMessage(d.id, 'resume');
                    d.isPlaying = true;
                } else if (perc < 0.5 && d.isPlaying) {
                    // console.log('off screen pause', i, d.data, r.top, r.bottom);

                    // Off screen so it should stop playing
                    this.sendFrameMessage(d.id, 'pause');
                    d.isPlaying = false;
                }
            }
        }
    },
    beginLoading: function beginLoading() {
        if (!this.isMobile() && !this.isLegacyBrowser()) {
            var startScroll = this.getPageScrollOffset();

            var reportedScroll = false;

            var onscroll = function (e) {
                requestAnimationFrame(this.checkPageScroll);

                if (this.getPageScrollOffset() - startScroll > 500 && !reportedScroll) {
                    reportedScroll = true;

                    new Promise(function(resolve) { resolve(); }).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(37)]; ((function (util) {
                        util.setSegment(util.Segment.Browsed);
                    }).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);
                }

                if (this._onDemoScroll) {
                    this._onDemoScroll(e);
                }
            }.bind(this);

            this.checkPageScroll();

            document.addEventListener('scroll', onscroll);
            window.addEventListener('resize', onresize);
        } else {
            this.loadDemos();
        }
    },
    receiveFrameMessage: function receiveFrameMessage(e) {
        switch (e.data) {
            case 'demoReady':
                this.notifyOfLoad(e);
                this.checkPageScroll();
                break;
            case 'done':
                this.notifyOfDone(e);
                break;
            case 'userInteracted':
                this.notifyOnInteracted(e);
                break;
            default:
                break;
        }
    },
    _getDemoForMessage: function _getDemoForMessage(e) {
        var demo;

        for (var i = 0; i < this.demos.length; i++) {
            var d = this.demos[i];
            var el = document.getElementById(d.id);

            if (el.contentWindow === e.source) {
                demo = d;

                break;
            }
        }

        return demo;
    },
    notifyOfLoad: function notifyOfLoad(e) {
        var demo = this._getDemoForMessage(e);

        if (demo) {
            demo.isLoaded = true;

            var el = document.getElementById(demo.id);

            var parent = el.parentElement;
            parent.classList.remove('icon-spinner');

            this._onDemoLoaded(demo.id);
        }

        // if(!this._onlyOne)
        // {
        //     this._loadNextDemo();
        // }
    },
    notifyOfDone: function notifyOfDone(e) {
        var demo = this._getDemoForMessage(e);

        this._onDemoDone(demo.id);
    },
    notifyOnInteracted: function notifyOnInteracted(e) {
        var demo = this._getDemoForMessage(e);

        this._onDemoInteracted(demo.id);
    },
    // getImgSrc: function (src)
    // {
    //     if (this.isRetina())
    //     {
    //         return src.split('.')[0] + '@2x.' + src.split('.')[1];
    //     }

    //     return src;
    // },
    loadVideoPlayer: function loadVideoPlayer() {
        if (!this._loadingVideoPlayer) {
            this._loadingVideoPlayer = true;

            window.onYouTubeIframeAPIReady = function () {
                this._videoLibLoaded = true;

                for (var i = 0; i < this._videoQueue.length; ++i) {
                    this.createVideo(this._videoQueue[i]);
                }

                this._videoQueue = [];
            }.bind(this);

            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";

            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    },
    requestVideoLoad: function requestVideoLoad(elementID, videoID, cb) {
        var ele = document.getElementById(elementID);

        if (ele) {
            ele.parentElement.parentElement.classList.add('icon-spinner');
        }

        if (!this._videoLibLoaded) {
            this._videoQueue.push({ elementID: elementID, videoID: videoID, cb: cb });

            this.loadVideoPlayer();
        } else {
            this.createVideo({ elementID: elementID, videoID: videoID, cb: cb });
        }
    },
    createVideo: function createVideo(data) {
        var origMuteState = false;
        var ytplayer;
        var duration;

        var self = this;

        function createPlayer() {
            ytplayer = new YT.Player(data.elementID, {
                videoId: data.videoID,
                playerVars: {
                    'enablejsapi': 1,
                    'autoplay': self.isMobile() ? 0 : 1,
                    'autohide': 1,
                    'controls': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'vq': 'hd720',
                    // 'theme': 'light',
                    // 'color': 'white',
                    'origin': '//' + window.location.host
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                    'onError': onPlayerError
                }
            });
        }

        function checkVideo() {
            if (ytplayer.getPlayerState() === 1) {
                if (ytplayer.getCurrentTime() >= duration - 1.5) {
                    ytplayer.pauseVideo();

                    self.notifyOfDone({});

                    if (origMuteState) {
                        ytplayer.unMute();
                    }
                }
            }
        }

        function onPlayerReady(ev) {
            // console.log('Player Ready: ', ev);
            duration = ytplayer.getDuration();
            setInterval(checkVideo, 1000);

            if (!self.isMobile()) {
                origMuteState = ev.target.isMuted();
                ev.target.mute();
            }

            setTimeout(function () {
                var videoBlocker = document.getElementById('videoBlocker');

                videoBlocker.style.display = 'none';
            }, 4500);

            self.notifyOfLoad({});

            var vidEle = document.getElementById(data.elementID);

            vidEle.parentElement.parentElement.classList.remove('icon-spinner');

            if (data.cb) {
                data.cb();
            }

            if (self.isMobile()) {
                var videoFrame = document.getElementById(data.elementID);
                videoFrame.style.opacity = 1;
            }
        }

        function onPlayerStateChange(ev) {
            // console.log('Player StateChange: ', ev.data);

            switch (ev.data) {
                case YT.PlayerState.PLAYING:
                    var videoFrame = document.getElementById(data.elementID);
                    videoFrame.style.opacity = 1;

                    self._onDemoLoaded(data.elementID);

                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.BUFFERING:
                case YT.PlayerState.CUED:
                case YT.PlayerState.UNSTARTED:
                default:
                    break;
            }
        }

        function onPlayerError(ev) {
            console.log('Player Error: ', ev);
        }

        createPlayer();
    },
    _loadNextDemo: function _loadNextDemo() {
        if (this.isMobile()) {
            while (this.demoIndex < this.demos.length && this.demos[this.demoIndex].noMobile) {
                this.demoIndex++;
            }
        } else if (!this.isMobile()) {
            while (this.demoIndex < this.demos.length && this.demos[this.demoIndex].mobileOnly) {
                this.demoIndex++;
            }
        }

        if (this.demoIndex < this.demos.length) {
            if (this.videoLoaded && this.demos[this.demoIndex].noVideo) {
                this.demoIndex++;

                this._loadNextDemo();

                return;
            }

            var shouldDelayLoad = this._loadDemo(this.demoIndex);

            this.demoIndex++;

            if (this._noLoadDelay || !shouldDelayLoad) {
                this._loadNextDemo();
            }
        }
    },
    loadDemos: function loadDemos() {
        for (var i = 0; i < this.demos.length; i++) {
            this._loadDemo(i);
        }
    },
    _loadDemo: function _loadDemo(index) {
        // console.log('loading demo', index);
        var demo = this.demos[index];
        this.loadDemo(demo);
    },
    loadDemo: function loadDemo(demo) {
        demo.isLoading = true;

        var replaceEle = document.getElementById(demo.id),
            shouldDelayLoad = false;

        if (replaceEle) {
            if ((this._preferImages || !demo.src) && demo.imgs !== undefined) {
                for (var i = 0; i < demo.imgs.length; i++) {
                    var d = demo.imgs[i];
                    // Create and use an image element
                    var imgEle = document.createElement('img');

                    imgEle.id = replaceEle.id;

                    imgEle.className = 'demoimg' + (d.cls ? ' ' + d.cls : '');

                    // imgEle.src = this.getImgSrc(demo.imgs[i]);
                    imgEle.src = d.src;

                    // replaceEle.id = '';
                    // replaceEle.style.overflowY = 'hidden';
                    // replaceEle.style.overflowX ='auto';

                    replaceEle.appendChild(imgEle);

                    if (d.caption) {
                        var captionEl = document.createElement('div');

                        captionEl.className = 'caption';
                        captionEl.textContent = d.caption;

                        replaceEle.appendChild(captionEl);
                    }
                }
            } else if ((this._preferImages || this._forceVideo) && demo.video !== undefined && demo.video.indexOf('/') >= 0) {
                shouldDelayLoad = false;

                var videoEle = document.createElement('video');

                videoEle.id = 'v' + replaceEle.id;

                videoEle.className = 'demoimg';

                videoEle.preload = 'auto';
                videoEle.autoplay = this.isMobile() ? '' : 'autoplay';
                videoEle.controls = 'controls';

                for (var i = 0; i < demo.video.length; ++i) {
                    var srcEle = document.createElement('source');

                    srcEle.src = demo.video[i].path;
                    srcEle.type = demo.video[i].type;

                    videoEle.appendChild(srcEle);
                }

                // Flash Fallback Object
                // {
                //     var flashObj = document.createElement('object');

                //     flashObj.type = 'application/x-shockwave-flash';
                //     flashObj.data = 'http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf';

                //     function cParam(name, value)
                //     {
                //         var p = document.createElement('param');
                //         p.name = name;
                //         p.value = value;
                //         return p;
                //     }

                //     flashObj.appendChild(cParam('movie', 'http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf'));
                //     flashObj.appendChild(cParam('allowFullscreen', 'true'));
                //     flashObj.appendChild(cParam('wmode', 'transparent'));
                //     flashObj.appendChild(cParam('flashVars', "config={'playlist':['http://gwmoo.ngrok.com/video/moodo.png',{'url':'http://gwmoo.ngrok.com/video/moodo.mp4','autoPlay':true}]}"));

                //     //videoEle.appendChild(flashObj);
                //     videoEle = flashObj;
                // }

                replaceEle.id = '';
                replaceEle.style.overflow = 'hidden';

                replaceEle.appendChild(videoEle);

                this.videoLoaded = true;

                window.postMessage('video_started', '*');
            } else if ((this._preferImages || this._forceVideo) && demo.video !== undefined && demo.video.indexOf('/') < 0) {
                shouldDelayLoad = false;

                this.requestVideoLoad(demo.videoEle, demo.video, demo.videoCB);
            } else if (demo.src && (!this.isMobile() || demo.forceDesktopIFrame)) {
                shouldDelayLoad = true;

                // Create and use an iframe element
                var frameEle = document.createElement('iframe');

                frameEle.id = replaceEle.id;

                frameEle.className = replaceEle.className + ' demo';

                frameEle.setAttribute('seamless', 'seamless');
                frameEle.setAttribute('data-recording-ignore', 'html');
                frameEle.scrolling = 'no';

                frameEle.src = demo.src;

                var parent = replaceEle.parentElement;
                parent.replaceChild(frameEle, replaceEle);

                parent.classList.add('icon-spinner');
            } else {
                // Nothing
            }
        }
        return shouldDelayLoad;
    },
    sendFrameMessage: function sendFrameMessage(id, data) {
        var ele = document.getElementById(id);

        if (ele) {
            var frame = ele.contentWindow;
            if (frame) {
                frame.postMessage(data, '*');
            }
        }
    }

};

exports.default = new DemoManager();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-autobind");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactAutobind = __webpack_require__(8);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        (0, _reactAutobind2.default)(_this);

        _this.transform = _this.addPrefix('transform');
        _this.numWorkflows = 5;
        _this.selectedWorkflow = 0;

        _util2.default.updateDownloadUrl();
        return _this;
    }

    _createClass(Home, [{
        key: 'addPrefix',
        value: function addPrefix(p) {
            var prefix = '';
            if (typeof document !== 'undefined') {
                var v = ['ms', 'webkit', 'moz', 'o'];
                var s = document.body.style;
                var p2 = p.charAt(0).toUpperCase() + p.slice(1);
                if (typeof s[p] == 'string') {
                    prefix = '';
                } else {
                    for (var i = 0; i < v.length; i++) {
                        if (typeof s[v[i] + p2] == 'string') {
                            prefix = v[i];
                            break;
                        }
                    }
                }

                var styleString = prefix.length > 0 ? p.charAt(0).toUpperCase() + p.slice(1) : p;
            }

            if (prefix) {
                return prefix + styleString;
            } else {
                return styleString;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.onKeyDown);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('keydown', this.onKeyDown);
        }
    }, {
        key: 'selectWorkflow',
        value: function selectWorkflow(index) {
            var workflows = this.refs.workflows,
                demoButtons = this.refs.demoButtons;

            workflows.style[this.transform] = 'translateX(' + -index * 100 + '%)';
            for (var i = 0; i < this.numWorkflows; i++) {
                var d = demoButtons.children[i],
                    w = workflows.children[i * 2 + 1];

                if (i === index) {
                    w.classList.add('selected');
                    d.classList.add('selected');
                } else if (i === this.selectedWorkflow) {
                    w.classList.remove('selected');
                    d.classList.remove('selected');
                }
            }

            this.selectedWorkflow = index;
            this.refs.playLeft.style.opacity = index > 0 ? 0.7 : 0;
            this.refs.playRight.style.opacity = index < this.numWorkflows - 1 ? 0.7 : 0;
        }
    }, {
        key: 'onClickLeft',
        value: function onClickLeft() {
            if (this.selectedWorkflow > 0) {
                this.selectWorkflow(this.selectedWorkflow - 1);
            }
        }
    }, {
        key: 'onClickRight',
        value: function onClickRight() {
            if (this.selectedWorkflow < this.numWorkflows - 1) {
                this.selectWorkflow(this.selectedWorkflow + 1);
            }
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            var rect = this.refs.workflows.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
                if (e.keyCode === 37 && this.selectedWorkflow > 0) // LeftArrow
                    {
                        this.selectWorkflow(this.selectedWorkflow - 1);
                    } else if (e.keyCode === 39 && this.selectedWorkflow < this.numWorkflows - 1) // RightArrow
                    {
                        this.selectWorkflow(this.selectedWorkflow + 1);
                    }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'about' },
                _react2.default.createElement(_Nav2.default, { top: true }),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full flexbox flexvert', id: 'sectionTop' },
                    _react2.default.createElement('div', { className: 'spacer spacerTop' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'topTitle' },
                        'Take control of your life'
                    ),
                    _react2.default.createElement('div', { className: 'spacer' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'topSubtitle' },
                        'Moo.do brings your ',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('i', { className: 'icon-check' }),
                            'Tasks'
                        ),
                        ', ',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('img', { src: '/img/plugin-gmail.png' }),
                            'Email'
                        ),
                        ', and ',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('img', { src: '/img/plugin-gcal.png' }),
                            'Calendar'
                        ),
                        ' together so you can focus on getting things done.'
                    ),
                    _react2.default.createElement('div', { className: 'spacer' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'featuresWrapper' },
                        _react2.default.createElement(
                            'div',
                            { id: 'topDemo', className: 'topDemo' },
                            _react2.default.createElement(
                                'div',
                                { className: 'videoWrapper' },
                                _react2.default.createElement(
                                    'video',
                                    { playsInline: true, loop: true, muted: true, poster: '/img/about/landingTopNew2.png', width: '2038', height: '476', autoPlay: true },
                                    _react2.default.createElement('source', { src: '/img/about/landingTopNew2.mp4', type: 'video/mp4' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'spacer' }),
                    _react2.default.createElement(
                        'div',
                        { id: 'platformsTop' },
                        _react2.default.createElement(
                            'div',
                            { id: 'buttonGetStarted-top', className: 'button center red', onClick: _auth2.default.openApp.bind(_auth2.default, 'top') },
                            'Get Started Free'
                        )
                    ),
                    _react2.default.createElement('div', { className: 'spacer spacerBottom' })
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'sectionWhatIs', className: 'section-full' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'What is Moo.do?'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sectionSubtitle sectionSubtitleWide' },
                        'Moo.do is a powerful task manager, outliner, email client, and calendar, all in one. Each piece is designed to work beautifully together and it\'s integrated with the other services and apps you need.'
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'topDemoFeatures', className: 'featureGrid big flexbox flex-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('i', { className: 'icon-check' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Tasks'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('img', { src: '/img/plugin-gmail.png' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Gmail'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('img', { src: '/img/plugin-gcal.png' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Google Calendar'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('img', { src: '/img/plugin-gdrive.png' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Google Drive'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'featureContacts', className: 'f1' },
                            _react2.default.createElement('img', { src: '/img/plugin-gcontacts.png' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Google Contacts'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('i', { className: 'icon-onenote' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'OneNote'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'f1' },
                            _react2.default.createElement('img', { className: 'imgEvernote', src: '/img/plugin-evernote.png' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Evernote'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h1',
                                { id: 'powTask' },
                                'Powerful task management'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sectionSubtitle' },
                                'Lay out your projects and tasks in whatever structure works for you. Zoom, search, and filter each pane to customize your view.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'orgFeatures' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row flexbox' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'f1' },
                                        _react2.default.createElement('i', { className: 'icon-markdown' }),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            'Markdown'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Flexible formatting so your lists look great'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'f1' },
                                        _react2.default.createElement('i', { className: 'icon-zoom_in' }),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            'Zoom'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Focus a pane on just one project'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row flexbox' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'f1' },
                                        _react2.default.createElement('i', { className: 'icon-search' }),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            'Search'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Focus on certain tags or keywords'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'f1' },
                                        _react2.default.createElement('i', { className: 'icon-filter_list' }),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            'Filter'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'By item type, completed, priority, and more'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-img landing-img f15' },
                            _react2.default.createElement(
                                'video',
                                { loop: true, muted: true, playsInline: true, poster: '/img/about/organization.png', autoPlay: true },
                                _react2.default.createElement('source', { src: '/img/about/organization.mp4', type: 'video/mp4' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full gray' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section columns flipped' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Emails are tasks too'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sectionSubtitle' },
                                'Emails and tasks are the same thing in your brain, so they work seamlessly together with Moo.do\'s built-in email client.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'featureGrid small' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('i', { className: 'icon-snooze' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Snooze'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('i', { className: 'icon-check' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Create tasks'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('i', { className: 'icon-priority_high' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Prioritize'
                                    )
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'center' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'button signup white' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/help/email/' },
                                        'Read more about email in Moo.do'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-img landing-img f15' },
                            _react2.default.createElement(
                                'video',
                                { loop: true, muted: true, playsInline: true, poster: '/img/about/email.png', autoPlay: true },
                                _react2.default.createElement('source', { src: '/img/about/email.mp4', type: 'video/mp4' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Built-in calendar'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sectionSubtitle' },
                                'Tasks are important whether they\'re on a todo list or your calendar. It just makes sense that they should be together.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'featureGrid small' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        '@'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Natural language'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('i', { className: 'icon-notifications_active' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Notifications'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('i', { className: 'icon-search' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Search'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-img landing-img f15' },
                            _react2.default.createElement(
                                'video',
                                { loop: true, muted: true, playsInline: true, poster: '/img/about/calendar.png', autoPlay: true },
                                _react2.default.createElement('source', { src: '/img/about/calendar.mp4', type: 'video/mp4' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'sectionBoards', className: 'section-full gray' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Put it all together and build your own boards'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sectionSubtitle' },
                        'Zoom, search, and filter each pane to customize your view, and combine multiple panes to customize your whole workflow.'
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'section-examples' },
                        _react2.default.createElement(
                            'div',
                            { id: 'demoButtons', className: 'flexbox flex-center', ref: 'demoButtons' },
                            _react2.default.createElement(
                                'div',
                                { className: 'button white selected', onClick: this.selectWorkflow.bind(this, 0) },
                                'Email + GTD'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'button white', onClick: this.selectWorkflow.bind(this, 1) },
                                'Kanban Boards'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'button white', onClick: this.selectWorkflow.bind(this, 2) },
                                'GTD'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'button white', onClick: this.selectWorkflow.bind(this, 3) },
                                'Project Management'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'button white', onClick: this.selectWorkflow.bind(this, 4) },
                                'Agenda + Calendar'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'workflowsWrapper', className: 'rel' },
                            _react2.default.createElement(
                                'div',
                                { id: 'workflowsDemos', className: 'ns', ref: 'workflows' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Email + GTD'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'landing-img selected' },
                                    _react2.default.createElement('img', { src: '/img/about/EmailGTD.png' })
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Kanban Boards'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'landing-img' },
                                    _react2.default.createElement('img', { src: '/img/about/Kanban.png' })
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'GTD'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'landing-img' },
                                    _react2.default.createElement('img', { src: '/img/about/GTD.png' })
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Project Management'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'landing-img' },
                                    _react2.default.createElement('img', { src: '/img/about/ProjectManagement.png' })
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Agenda + Calendar'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'landing-img' },
                                    _react2.default.createElement('img', { src: '/img/about/AgendaCalendar.png' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'play-left', ref: 'playLeft', onClick: this.onClickLeft },
                                _react2.default.createElement('div', { className: 'icon-play_circle_filled' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'play-right', ref: 'playRight', onClick: this.onClickRight },
                                _react2.default.createElement('div', { className: 'icon-play_circle_filled' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full', id: 'sectionMisc' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'And of course, the standard features'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sectionSubtitle' },
                        'Moo.do has all the basics covered.'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Customizable'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Moo.do has a Dark theme, multiple display options, and tweakable font sizes and colors.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'm2 landing-img' },
                            _react2.default.createElement('img', { src: '/img/about/dark.png' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Realtime collaboration'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Moo.do synchronizes in realtime between all your devices and collaborators, using the same technology as Google Docs.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Works offline'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Moo.do works offline on every device. Changes will synchronize automatically when you come online.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-section columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Extreme privacy'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Your data is stored in your personal Google Drive account. None of your data ever goes through our servers.'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'center' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'button signup white' },
                                    _react2.default.createElement(
                                        'a',
                                        { onClick: _util2.default.sendToExternalPage.bind(_util2.default, 'https://medium.com/startup-grind/serverless-bootstrap-your-startup-by-only-doing-half-of-the-work-46a7a4fca5cf') },
                                        'Read more about Moo.do\'s architecture'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-text f1' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Mobile apps'
                            ),
                            _react2.default.createElement(
                                'p',
                                { id: 'downloadImages' },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: _util2.default.sendToAppStore.bind(_util2.default, 'iOS', 'top'), href: 'https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8', target: '_blank' },
                                    _react2.default.createElement('img', { src: '/img/app_store.svg', height: '50px' })
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { onClick: _util2.default.sendToAppStore.bind(_util2.default, 'Android', 'top'), href: 'https://play.google.com/store/apps/details?id=moo.do', target: '_blank' },
                                    _react2.default.createElement('img', { src: '/img/play_store.svg', height: '62px' })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section-full' },
                    _react2.default.createElement(
                        'div',
                        { className: 'signupButtons' },
                        _react2.default.createElement(
                            'div',
                            { className: 'button red', onClick: _auth2.default.openApp.bind(_auth2.default, 'bottom') },
                            'Get started - it\'s free'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'button buttonDownload signup white', onClick: _util2.default.downloadNativeApp.bind(_util2.default, 'bottom', undefined) },
                            ' Download App'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'platforms' },
                            _react2.default.createElement(
                                'a',
                                { className: 'platform linkButton', id: 'downloadWindows', onClick: _util2.default.downloadNativeApp.bind(_util2.default, 'bottom', 'Windows'), href: 'https://github.com/MooDoApp/MooDoApp.github.io/releases/latest/', target: '_blank' },
                                _react2.default.createElement('i', { className: 'icon-windows' }),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'Windows'
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'platform linkButton', id: 'downloadOSX', onClick: _util2.default.downloadNativeApp.bind(_util2.default, 'bottom', 'OSX'), href: 'https://github.com/MooDoApp/MooDoApp.github.io/releases/latest/', target: '_blank' },
                                _react2.default.createElement('i', { className: 'icon-desktop' }),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'Mac'
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'platform linkButton', onClick: _util2.default.sendToAppStore.bind(_util2.default, 'iOS', 'top'), href: 'https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8', target: '_blank' },
                                _react2.default.createElement('i', { className: 'icon-apple' }),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'iOS'
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'platform linkButton', onClick: _util2.default.sendToAppStore.bind(_util2.default, 'Android', 'top'), href: 'https://play.google.com/store/apps/details?id=moo.do', target: '_blank' },
                                _react2.default.createElement('i', { className: 'icon-android' }),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'Android'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(Home);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        { id: 'premium' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Premium' }),
        _react2.default.createElement(
            'div',
            { id: 'sectionPremiumTop', className: 'section-full' },
            _react2.default.createElement(
                'div',
                { className: 'topTitle' },
                'Moo.do Premium'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionSubtitle' },
                'Integrate more of your services together and unlock advanced organization and customization features.'
            ),
            _react2.default.createElement(
                'div',
                { className: 'premiumTiers flexbox' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumTier' },
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierTitle' },
                            'Basic'
                        ),
                        _react2.default.createElement('div', { className: 'premiumTierTime' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierPrice' },
                            'FREE'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'premiumTierFeatures' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Unlimited items'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Real-time collaboration'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Gmail integration'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumAction' },
                        _react2.default.createElement(
                            'div',
                            { className: 'button center red noMobile', onClick: _auth2.default.requestAuthorization.bind(_auth2.default, 'premium-top-free', true) },
                            'Get Started Now'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'blue' },
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumTier' },
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierTitle' },
                            'Premium'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierTime' },
                            'YEARLY'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierPrice' },
                            '$4.08',
                            _react2.default.createElement(
                                'span',
                                { className: 'priceMonth' },
                                ' / mo'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'premiumTierFeatures' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Basic features'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Calendar pane'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Google Calendar sync'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Google Drive sync'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Multiple Boards'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Sync emails offline'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Advanced display settings'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumAction' },
                        _react2.default.createElement(
                            'div',
                            { className: 'button center red', onClick: _auth2.default.requestAuthorization.bind(_auth2.default, 'premium-top-year', true) },
                            'Start Free Trial'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTrialText' },
                            '14 day free trial. No credit card required.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumTier' },
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierTitle' },
                            'Premium'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierTime' },
                            'MONTHLY'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTierPrice' },
                            '$5',
                            _react2.default.createElement(
                                'span',
                                { className: 'priceMonth' },
                                ' / mo'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'premiumTierFeatures' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Basic features'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Calendar pane'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Google Calendar sync'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Google Drive sync'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Multiple Boards'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Sync emails offline'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('span', { className: 'icon-check' }),
                                'Advanced display settings'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'premiumAction' },
                        _react2.default.createElement(
                            'div',
                            { className: 'button center red noMobile', onClick: _auth2.default.requestAuthorization.bind(_auth2.default, 'premium-top-month', true) },
                            'Start Free Trial'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumTrialText' },
                            '14 day free trial. No credit card required.'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Calendar Pane'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionSubtitle' },
                'Day, Week, and Month views for managing your calendar.'
            ),
            _react2.default.createElement('img', { id: 'img-calendar', className: 'premiumImg demo-img-large-border', src: '/img/about/CalendarPane.gif' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Google Drive Pane'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionSubtitle' },
                'Attach documents to your tasks. Dragging a file from your computer into Moo.do automatically uploads it to Drive.'
            ),
            _react2.default.createElement('img', { id: 'img-drive', className: 'premiumImg demo-img-large-border', src: '/img/about/DrivePane.png' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Google Calendar Sync'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-text f15' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Two way sync'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Manage your Google Calendar in Moo.do and/or sync your Moo.do events with your Google Calendar.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-img f1' },
                    _react2.default.createElement('img', { className: 'demo-img-large-border', src: '/img/about/GCalSettings.jpg' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Boards'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionSubtitle' },
                'Save sets of panes to easily switch between workflows.'
            ),
            _react2.default.createElement('img', { id: 'img-workspaces', className: 'premiumImg demo-img-large-border', src: '/img/about/Workspaces.gif' })
        ),
        _react2.default.createElement(
            'div',
            { id: 'sectionDisplaySettings', className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Display Settings'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-text f15' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Customize look and feel'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Advanced display settings open up all sorts of options to customize Moo.do to your liking.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-img f1' },
                    _react2.default.createElement('img', { className: 'demo-img-large-border', id: 'imgDisplaySettings', src: '/img/about/DisplaySettings.jpg' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Gmail Sync Time'
            ),
            _react2.default.createElement(
                'div',
                { className: 'iSubtitle' },
                'Cache emails for access while offline and quicker load time.'
            ),
            _react2.default.createElement(
                'div',
                { className: 'timeBar timeBarFree' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Free'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    '2 days'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'timeBar timeBarPremium' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Premium'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    '30 days'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full section-first' },
            _react2.default.createElement(
                'h1',
                null,
                'Pricing'
            ),
            _react2.default.createElement(
                'div',
                { className: 'iSubtitle' },
                _react2.default.createElement(
                    'b',
                    null,
                    'Moo.do'
                ),
                ' is free to use, free of ads, and nobody can ever read your data.'
            ),
            _react2.default.createElement(
                'div',
                { id: 'pricingTable', className: 'm4' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('div', null),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Free'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Premium'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header price' },
                    _react2.default.createElement(
                        'div',
                        null,
                        'Price'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '$0'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            '$5 / m',
                            _react2.default.createElement(
                                'span',
                                { className: 'noMobile' },
                                'onth'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            '$49 / y',
                            _react2.default.createElement(
                                'span',
                                { className: 'noMobile' },
                                'ear'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        'Core Features'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Unlimited items'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Powerful search'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Realtime collaboration'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Multiple Boards'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Day, Week, Month views'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        'Plugins'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('i', { className: 'icon-group' }),
                        'Google Contacts'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: '/img/plugin-mailbird.png' }),
                        'Mailbird'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: '/img/plugin-gdrive.png' }),
                        'Google Drive'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: '/img/plugin-gmail.png' }),
                        'Gmail'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Standard email features'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Offline sync'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '2 days'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '30 days'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: '/img/plugin-gcal.png' }),
                        'Google Calendar'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Sync Moo.do tasks'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Manage Calendar in Moo.do'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        'Customization'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Display settings presets'
                    ),
                    _react2.default.createElement('div', { className: 'icon-check' }),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Advanced display settings'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        null,
                        'We love you',
                        _react2.default.createElement('i', { className: 'icon-heart' })
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Early access to new features'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        'Premium support'
                    ),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', { className: 'icon-check' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'noMobile header' },
                    _react2.default.createElement('div', null),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumButton center' },
                            _react2.default.createElement(
                                'span',
                                { className: 'link linkLogin linkButton linkBlue', title: 'Login/Signup', onClick: _auth2.default.requestAuthorization.bind(_auth2.default, 'premium-pricing-free') },
                                'Sign up for free'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'premiumButton center' },
                            _react2.default.createElement(
                                'span',
                                { className: 'link linkLogin linkButton linkBlue', title: 'Login/Signup', onClick: _auth2.default.requestAuthorization.bind(_auth2.default, 'premium-pricing-premium', true) },
                                'Go premium'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'lastRow' },
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'h1',
                null,
                'Cancellation Policy'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText m3' },
                'You may cancel your subscription at any time and we will stop billing you immediately. For monthly subscriptions this means we will not bill you the following month. If you cancel your subscription part way into a month, you will continue to have access to premium features until the end of that month. Please contact ',
                _react2.default.createElement(
                    'b',
                    null,
                    'support@moo.do'
                ),
                ' if you mistakenly cancelled your subscription, would like to change your billing plan, or for further information.'
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _reactAutobind = __webpack_require__(8);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

var _HelpBasics = __webpack_require__(38);

var _HelpBasics2 = _interopRequireDefault(_HelpBasics);

var _HelpEmail = __webpack_require__(39);

var _HelpEmail2 = _interopRequireDefault(_HelpEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollPad = 100;
var Duration = 200;

var Help = function (_React$Component) {
    _inherits(Help, _React$Component);

    function Help(props) {
        _classCallCheck(this, Help);

        var _this = _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).call(this, props));

        (0, _reactAutobind2.default)(_this);

        _this.highlightedIndex = -1;
        _this.scrollTimeouts = {};
        return _this;
    }

    _createClass(Help, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var content = this.refs.content,
                headers = content.querySelectorAll('h1,h2');

            this.setState({ toc: headers, selectedIndex: 0 });

            document.addEventListener('scroll', this.checkHighlight);
            this.checkHighlight();

            // Videos
            function formatVideoPlayButton(videoWrapper) {
                videoWrapper.insertAdjacentHTML('beforeend', '<div class="video-overlay-container"><svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video"><polygon points="70, 55 70, 145 145, 100" fill="#fff"/></svg></div>');
            }
            function hideVideoPlayButton(video, videoButtonContainer) {
                if (video) {
                    video.play();
                }
                if (videoButtonContainer) {
                    videoButtonContainer.classList.add('is-hidden');
                }
            }
            function renderVideoPlayButton(videoWrapper) {
                var video = videoWrapper.getElementsByTagName('video')[0];
                if (video) {
                    formatVideoPlayButton(videoWrapper);
                    var videoButtonContainer = videoWrapper.getElementsByClassName('video-overlay-container')[0];
                    if (videoButtonContainer) {
                        videoButtonContainer.addEventListener('click', hideVideoPlayButton.bind(this, video, videoButtonContainer));
                    }
                }
            }

            var videos = document.getElementsByClassName('showPlayButton');
            for (var i = 0; i < videos.length; i++) {
                renderVideoPlayButton(videos[i]);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.checkHighlight);
        }
    }, {
        key: 'easeOut',
        value: function easeOut(t, b, c) {
            return -c * t * (t - 2) + b;
        }
    }, {
        key: 'checkHighlight',
        value: function checkHighlight() {
            var content = this.refs.content,
                toc = this.refs.pageToc,
                headers = content.querySelectorAll('h1,h2'),
                found = -1;

            for (var i = 0; i < headers.length; i++) {
                var rect = headers[i].getBoundingClientRect(),
                    top = rect.top;

                if (top < ScrollPad) {
                    found = i;
                } else {
                    break;
                }
            }

            var index = Math.max(found, 0);

            this.setState({ selectedIndex: index });

            var tocEl = this.refs['toc' + index];

            if (tocEl) {
                var rect = tocEl.getBoundingClientRect(),
                    top = rect.top + toc.scrollTop - toc.clientHeight / 2;

                this.scrollTo('toc', toc, top);
            }
        }
    }, {
        key: 'onClickTOC',
        value: function onClickTOC(header) {
            var rect = header.getBoundingClientRect(),
                top = rect.top + document.documentElement.scrollTop - ScrollPad + 1;

            this.scrollTo('scrollBody', document.documentElement, top);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(name, element, y) {
            var _this2 = this;

            var scrollValueY = element.scrollTop,
                differenceY = y - scrollValueY,
                startTime = 0;

            var scrollLoop = function scrollLoop(timestamp) {
                if (!startTime) {
                    startTime = timestamp - 20;
                }

                var t = Math.min((timestamp - startTime) / Duration, 1);

                var scrollOffsetY = _this2.easeOut(t, scrollValueY, differenceY);
                element.scrollTop = scrollOffsetY;

                if (t === 1) {
                    delete _this2.scrollTimeouts[name];
                } else {
                    _this2.scrollTimeouts[name] = requestAnimationFrame(scrollLoop);
                }
            };

            clearTimeout(this.scrollTimeouts[name]);
            this.scrollTimeouts[name] = requestAnimationFrame(scrollLoop);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var page = this.props.page,
                state = this.state || {},
                toc = state.toc;

            return _react2.default.createElement(
                'div',
                { id: 'help' },
                _react2.default.createElement(_Nav2.default, { top: true, title: 'Help' }),
                _react2.default.createElement(
                    'div',
                    { id: 'topBarHelp' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/help', exact: true, activeClassName: 'selected' },
                            'Get Started'
                        ),
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/help/email', activeClassName: 'selected' },
                            'GTD Your Email'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'sectionHelpContent', className: 'section section-first section-full sectionHelp flexbox' },
                    _react2.default.createElement(
                        'div',
                        { id: 'helpPageTOC', ref: 'pageToc' },
                        toc && Array.prototype.map.call(toc, function (header, i) {
                            return _react2.default.createElement(header.tagName.toLowerCase(), {
                                key: i,
                                className: i === state.selectedIndex ? 'selected' : '',
                                onClick: _this3.onClickTOC.bind(_this3, header),
                                ref: 'toc' + i
                            }, header.textContent);
                        })
                    ),
                    _react2.default.createElement('div', { id: 'helpPageTOCSpacer' }),
                    _react2.default.createElement(
                        'div',
                        { id: 'helpPageText', ref: 'content' },
                        (page === '' || page === 'basics') && _react2.default.createElement(_HelpBasics2.default, null),
                        page === 'email' && _react2.default.createElement(_HelpEmail2.default, null)
                    )
                )
            );
        }
    }]);

    return Help;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withRouteData)(function (props) {
    return _react2.default.createElement(Help, { page: props.page });
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withRouteData)(function (_ref) {
    var post = _ref.post;

    var contents = post.contents;

    contents = contents.replace(/<li>(Fix|Feature|Change|Speed|Blog|Release|Misc):(.*)<\/li>/g, function (match, m1, m2) {
        return '<li><span class="change change' + m1 + '">' + m1 + '</span><span>' + m2 + '</span></li>';
    });

    return _react2.default.createElement(
        'div',
        { className: 'changelog' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Changelog' }),
        _react2.default.createElement(
            'div',
            { className: 'section section-first section-full padded' },
            _react2.default.createElement(
                'header',
                null,
                'Change Log'
            ),
            _react2.default.createElement('div', { className: 'sectionText', dangerouslySetInnerHTML: { __html: contents } })
        )
    );
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactStatic = __webpack_require__(4);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        { id: 'us' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'About Us' }),
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'style',
                null,
                '#jay {\n                    background-image: url("/img/jay.png");\n                }\n\n                #grant {\n                    background-image: url("/img/grant.png");\n                }'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-first section-full' },
            _react2.default.createElement(
                'header',
                null,
                'The Team'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText bioSection flexbox' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'bioHeader' },
                        _react2.default.createElement('div', { className: 'img', id: 'jay' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioName' },
                            _react2.default.createElement(
                                'a',
                                { href: 'mailto:jay@moo.do' },
                                '+Jay Meistrich'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioTitle' },
                            'Co-Founder'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioLoc' },
                            'Seattle, WA'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bioText' },
                        'Prior to ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'Moo.do'
                        ),
                        ', Jay worked in ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://www.microsoft.com/appliedsciences' },
                            'Microsoft\'s Applied Sciences Group'
                        ),
                        ' where he helped start the ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://www.microsoft.com/surface' },
                            'Surface'
                        ),
                        ' tablet project and researched future experiences for Windows, Windows Phone, Xbox, and Surface. Jay received his B.S. in Computer Science from Carnegie Mellon University while exploring his passion for game development in the ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://gamecreation.org' },
                            'Game Creation Society'
                        ),
                        '. Jay is a nomad, traveling and pursuing his loves of food and photography in his free time.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'bioHeader' },
                        _react2.default.createElement('div', { className: 'img', id: 'grant' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioName' },
                            _react2.default.createElement(
                                'a',
                                { href: 'mailto:grant@moo.do' },
                                '+Grant Watters'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioTitle' },
                            'Co-Founder'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioLoc' },
                            'Seattle, WA'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bioText' },
                        'Before founding ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'Moo.do'
                        ),
                        ', Grant worked on the Internet Explorer team at Microsoft to improve their graphics and touch experience. He implemented the CSS 3D Transforms spec and helped bring multi-threaded rendering to IE. Grant received his B.S. in Computer Science from Carnegie Mellon University with an emphasis on robotics and graphics. In his free time he likes to play soccer and ski.'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'The Plan'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Our goal is to help people organize everything in one place so that they can stay in their flow and avoid unnecessary task switching and searching for what to do next.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'We created ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' because we were frustrated with the difficulty of using multiple unconnected services. We had to-do lists completely unrelated to our calendars. We were referencing emails, texts, and chats on multiple networks. We were spending a lot of time organizing our organization systems.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'We believe that software can be both easy to use and powerful, so ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' is designed to focus on content and be easier to use than a piece of paper. We\'re just getting started with integrating services and believe that bringing everything together in one familiar place will greatly improve everybody\'s productivity.'
                )
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        { id: 'contact' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Contact' }),
        _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
                'header',
                null,
                'Contact Us'
            ),
            _react2.default.createElement(
                'div',
                { id: 'contactTable', className: 'm6 sectionText flexbox' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Feature Requests'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'm1' },
                        'Visit our ',
                        _react2.default.createElement(
                            'a',
                            { href: 'https://feedback.moo.do' },
                            'feedback page'
                        ),
                        ' to submit feature requests.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Email support'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'm1' },
                        _react2.default.createElement(
                            'a',
                            { href: 'mailto:support@moo.do' },
                            'Send us an email'
                        ),
                        ' if you have any questions or issues.'
                    )
                )
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactStatic = __webpack_require__(4);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        { id: 'pressPage' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Press Kit' }),
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'style',
                null,
                '\n                    #jay {\n                        background-image: url("/img/jay.png");\n                    }\n\n                    #grant {\n                        background-image: url("/img/grant.png");\n                    }\n                '
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'sectionContact', className: 'section section-full section-first' },
            _react2.default.createElement(
                'header',
                null,
                'Contact'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'E-Mail:'
                    ),
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:press@moo.do' },
                        'press@moo.do'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Facebook:'
                    ),
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Facebook', 'bot'), href: 'https://www.facebook.com/MooDoApp' },
                        'https://www.facebook.com/MooDoApp'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Twitter:'
                    ),
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Twitter', 'bot'), href: 'https://www.twitter.com/MooDoApp' },
                        'https://www.twitter.com/MooDoApp'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Google+:'
                    ),
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', onClick: _util2.default.sendToSocialMedia.bind(_util2.default, 'Google', 'bot'), href: 'https://www.google.com/+MooDoApp' },
                        'https://www.google.com/+MooDoApp'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'The Product'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' is the task manager for everything. By bringing all of your data into one consistent interface with a built-in email client, ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' keeps all aspects of your life organized.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' is designed to adapt to you. It uses a flexible content-first interface so you can write your tasks in an outline format as you would on paper or in a simple text editor.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' is available on any computer, tablet, or phone and synchronizes all devices and users in realtime. ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' works offline and your data is always recoverable once synced.'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'The Plan'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Our goal is to help people organize everything in one place so that they can stay in their flow and avoid unnecessary task switching and searching for what to do next.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'We created ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' because we were frustrated with the difficulty of using multiple unconnected services. We had to-do lists completely unrelated to our calendars. We were referencing emails, texts, and chats on multiple networks. We were spending a lot of time organizing our organization systems.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'We believe that software can be both easy to use and powerful, so ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' is designed to focus on content and be easier to use than a piece of paper. We\'re just getting started with integrating services and believe that bringing everything together in one familiar place will greatly improve everybody\'s productivity.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'See more ',
                    _react2.default.createElement(
                        'a',
                        { href: '/us/' },
                        'about us'
                    ),
                    '.'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'The Team'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText bioSection flexbox' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'bioHeader' },
                        _react2.default.createElement('div', { className: 'img', id: 'jay' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioName' },
                            _react2.default.createElement(
                                'a',
                                { href: 'mailto:jay@moo.do' },
                                '+Jay Meistrich'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioTitle' },
                            'Co-Founder'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioLoc' },
                            'Seattle, WA'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bioText' },
                        'Prior to ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'Moo.do'
                        ),
                        ', Jay worked in ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://www.microsoft.com/appliedsciences' },
                            'Microsoft\'s Applied Sciences Group'
                        ),
                        ' where he helped start the ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://www.microsoft.com/surface' },
                            'Surface'
                        ),
                        ' tablet project and researched future experiences for Windows, Windows Phone, Xbox, and Surface. Jay received his B.S. in Computer Science from Carnegie Mellon University while exploring his passion for game development in the ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://gamecreation.org' },
                            'Game Creation Society'
                        ),
                        '. Jay is a nomad, traveling and pursuing his loves of food and photography in his free time.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'bioHeader' },
                        _react2.default.createElement('div', { className: 'img', id: 'grant' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioName' },
                            _react2.default.createElement(
                                'a',
                                { href: 'mailto:grant@moo.do' },
                                '+Grant Watters'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioTitle' },
                            'Co-Founder'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bioLoc' },
                            'Seattle, WA'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bioText' },
                        'Before founding ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'Moo.do'
                        ),
                        ', Grant worked on the Internet Explorer team at Microsoft to improve their graphics and touch experience. He implemented the CSS 3D Transforms spec and helped bring multi-threaded rendering to Internet Explorer. Grant received his B.S. in Computer Science from Carnegie Mellon University with an emphasis on robotics and graphics. In his free time he likes to play soccer and ski.'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'sectionInPress', className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'In Press'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'p',
                    { className: 'm6' },
                    '"What makes Moo.do different is that it treats your emails like any other task, file, note or appointment \u2013 and then gives you a unified place to manage everything."'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'https://techcrunch.com/2016/08/30/moo-do-turns-gmail-into-a-task-management-system/' },
                        _react2.default.createElement('img', { className: 'pressLogo', src: '/img/press/tc.png' })
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'm6' },
                    '"This organizational-chimera-that-could has quickly become one of my favorite ways to organize and stay on top of the various tasks and lists that I make for myself."'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'https://www.forbes.com/sites/anthonykarcz/2016/08/30/moodo-gmail-integration//' },
                        _react2.default.createElement('img', { className: 'pressLogo', src: '/img/press/forbes.jpg' })
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'Videos'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText m4' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Get it together'
                ),
                _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('iframe', { className: 'ytVideo', width: '560', height: '315', src: '//www.youtube.com/embed/jdtUhbNoAlg?theme=light&color=white&rel=0&autohide=1&vq=hd720', frameBorder: '0', allowFullScreen: true }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'a',
                    { href: 'https://www.youtube.com/watch?v=jdtUhbNoAlg' },
                    'https://www.youtube.com/watch?v=jdtUhbNoAlg'
                )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'The task manager for everything'
                ),
                _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('iframe', { className: 'ytVideo', width: '560', height: '315', src: '//www.youtube.com/embed/NEKRtjgPCCQ?theme=light&color=white&rel=0&autohide=1&vq=hd720', frameBorder: '0', allowFullScreen: true }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                _react2.default.createElement(
                    'a',
                    { href: 'https://www.youtube.com/watch?v=NEKRtjgPCCQ' },
                    'https://www.youtube.com/watch?v=NEKRtjgPCCQ'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'Screenshots'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionScreenshots' },
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/landingTop.png' },
                        _react2.default.createElement('img', { src: '/img/about/landingTop.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Everything works together (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/landingTop.png' },
                            'img'
                        ),
                        ') (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/landingTop.mp4' },
                            'video'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/Everything-together.png' },
                        _react2.default.createElement('img', { src: '/img/about/Everything-together.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Effectively organize your projects (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/Everything-together.png' },
                            'img'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/outline.png' },
                        _react2.default.createElement('img', { src: '/img/about/outline.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Effectively organize your projects (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/outline.png' },
                            'img'
                        ),
                        ') (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/outline.mp4' },
                            'video'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/email.png' },
                        _react2.default.createElement('img', { src: '/img/about/email.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Email is now a powerful todo list (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/email.png' },
                            'img'
                        ),
                        ') (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/email.mp4' },
                            'video'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/calendar.png' },
                        _react2.default.createElement('img', { src: '/img/about/calendar.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Schedule your tasks in your calendar (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/calendar.png' },
                            'img'
                        ),
                        ') (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/calendar.mp4' },
                            'video'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/GmailCalendar.png' },
                        _react2.default.createElement('img', { src: '/img/about/GmailCalendar.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Drag emails right onto your calendar (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/GmailCalendar.png' },
                            'img'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/Kanban.png' },
                        _react2.default.createElement('img', { src: '/img/about/Kanban.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Set up Kanban boards with multiple panes side by side (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/Kanban.png' },
                            'img'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/GTD.png' },
                        _react2.default.createElement('img', { src: '/img/about/GTD.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'Organize with priorities and stars, and tags for context (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/GTD.png' },
                            'img'
                        ),
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'screenshot' },
                    _react2.default.createElement(
                        'a',
                        { href: '/img/about/ProjectManagement.png' },
                        _react2.default.createElement('img', { src: '/img/about/ProjectManagement.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'caption' },
                        'View tasks by assignment and attach files from Drive (',
                        _react2.default.createElement(
                            'a',
                            { href: '/img/about/ProjectManagement.png' },
                            'img'
                        ),
                        ')'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'Logos'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText m3' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Download as a ',
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoLogos.zip' },
                        '.zip'
                    ),
                    ' or individually below.'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'logoSection' },
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoLogoWhiteBg.png' },
                        _react2.default.createElement('img', { className: 'logoPreview', src: '/media/MoodoLogoWhiteBg.png' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'logoSection' },
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoLogoBlueBg.png' },
                        _react2.default.createElement('img', { className: 'blueBackground logoPreview', src: '/media/MoodoLogoBlueBg.png' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'icons', className: 'logoSection' },
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoWhiteIcon.png' },
                        _react2.default.createElement('img', { className: 'iconPreview', src: '/media/MoodoWhiteIcon.png' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoBlueIcon.png' },
                        _react2.default.createElement('img', { className: 'iconPreview', src: '/media/MoodoBlueIcon.png' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '/media/MoodoBlackIcon.png' },
                        _react2.default.createElement('img', { className: 'iconPreview', src: '/media/MoodoBlackIcon.png' })
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'header',
                null,
                'Case Studies'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText m3' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/blog/project-management/' },
                        'Project Management Case Study'
                    ),
                    ' - How we use ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' to manage its own development.'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/blog/kanban/' },
                        'Moo.do for Kanban'
                    ),
                    ' - How ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'Moo.do'
                    ),
                    ' can be used as a team organization tool.'
                )
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        { id: 'privacy' },
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Privacy Policy' }),
        _react2.default.createElement(
            'div',
            { className: 'section section-full section-first' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                'Information We Collect'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                'We collect "Non-Personal Information" and "Personal Information". Non-Personal Information includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit and preferences that are generated based on the data you submit and number of clicks. Personal Information includes only your email and first and last names, which you submit to us through the registration process at the site. We may use your email to send you an occasional message. We do not share Personal Information with third parties.'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                'Google Drive'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                'None of the information entered into your document is sent to us or stored on our servers. All information is saved on Google Drive and subject to the ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://www.google.com/intl/en/policies/privacy/' },
                    'Google Privacy Policy'
                ),
                '. Moo.do will only access and modify files that it has created on your Google Drive account unless you specify otherwise (See Authorization Scopes). Moo.do does not have access to your other files by default.'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                'Authorization Scopes'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                'By default, Moo.do will request access to the ',
                _react2.default.createElement(
                    'b',
                    null,
                    'UserInfo.Email'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Drive.File'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Drive.Install'
                ),
                ', and ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Drive.AppData'
                ),
                ' OAuth scopes. These allow Moo.do to access only files that were created with Moo.do and allow Moo.do to see your Google email address. Over the course of using Moo.do you may need to grant additional authorization scopes to enable additional features. These may include but are not limited to: ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Contacts.Readonly'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Tasks.Readonly'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Drive.Metadata'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Full Drive Read/Write'
                ),
                ', ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Drive.Gmail'
                ),
                ', and ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Calendar'
                ),
                ' scopes. Any data that is accessed through these scopes is only sent to devices that you use Moo.do with. Moo.do does not send or store this information anywhere except locally on your devices.'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                'Changes to Our Privacy Policy'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                'The company ("Moo.do LLC") reserves the right to change this policy and our Terms of Service at any time.  We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site. Significant changes will go into effect 30 days following such notification.  Non-material changes or clarifications will take effect immediately. You should periodically check the Site and this privacy page for updates.'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'section section-full' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                'Contact Us'
            ),
            _react2.default.createElement(
                'div',
                { className: 'sectionText' },
                'If you have any questions regarding this Privacy Policy or the practices of this site, please contact us by sending an email to ',
                _react2.default.createElement(
                    'a',
                    { href: 'mailto:support@moo.do' },
                    'support@moo.do'
                ),
                '.'
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'lastUpdated', className: 'section section-full' },
            _react2.default.createElement(
                'b',
                null,
                'Last Updated: '
            ),
            _react2.default.createElement(
                'span',
                null,
                'February 15th, 2015'
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactStatic = __webpack_require__(4);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Unsubscribe = function (_React$Component) {
    _inherits(Unsubscribe, _React$Component);

    function Unsubscribe() {
        _classCallCheck(this, Unsubscribe);

        return _possibleConstructorReturn(this, (Unsubscribe.__proto__ || Object.getPrototypeOf(Unsubscribe)).apply(this, arguments));
    }

    _createClass(Unsubscribe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var email = _util2.default.getURLHashParam('email');
            var gid = _util2.default.getURLHashParam('gid');

            _util2.default.XHR_PrivateAPI({
                type: 'POST',
                path: '/feedback/unsubscribe',
                data: {
                    email: email,
                    gid: gid
                },
                cb: function cb(xhr) {
                    var msg;
                    if (xhr.status === 200) {
                        msg = 'You have been successfully unsubscribed from future emails.';
                    } else {
                        msg = 'There was an error unsubscribing. Please reply to the email to unsubscribe.';
                    }

                    document.getElementById('unsubMessage').innerText = msg;
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Nav2.default, { top: true }),
                _react2.default.createElement(
                    'div',
                    { className: 'section section-full section-first' },
                    _react2.default.createElement(
                        'div',
                        { id: 'unsubMessage', className: 'sectionText center' },
                        'Unsubscribing...'
                    )
                )
            );
        }
    }]);

    return Unsubscribe;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(Unsubscribe);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactStatic = __webpack_require__(4);

var _reactAutobind = __webpack_require__(8);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pricing = {
    None: -1,
    EarlyMonthly: 0,
    EarlyYearly: 1,
    RegMonthly: 2,
    RegYearly: 3
};

var premiumPlans = ['2m4b', 'gjgm', 'pmjw', '5pm2'];

if (false) {
    premiumPlans = ['58qg', 'pnr2', '6vr2', 'mt4b'];
}

var premiumPrices = ['4.95', '49.95', '5', '49'];

var PurchaseError = {
    None: 0,
    AlreadyPremium: 1,
    MissingNonce: 2,
    ServerConnect: 3,
    BraintreeConnect: 4,
    FailedAuth: 5,
    InvalidCode: 6
};

var adTrackingID = 976910954;
var purchaseConversionID = 'ha4uCMXduXUQ6vTp0QM';

var Purchase = function (_React$Component) {
    _inherits(Purchase, _React$Component);

    function Purchase(props) {
        _classCallCheck(this, Purchase);

        var _this = _possibleConstructorReturn(this, (Purchase.__proto__ || Object.getPrototypeOf(Purchase)).call(this, props));

        (0, _reactAutobind2.default)(_this);

        if (typeof window !== 'undefined') {
            window.GoogleApiLoaded = _this.onGoogleAPILoaded;
        }

        _this.isGoogleApiLoaded = false;
        _this.planID = premiumPlans[Pricing.RegMonthly];
        _this.submittingPayment = false;

        var id_token = _util2.default.getURLHashParam('id_token'),
            email = _util2.default.getURLHashParam('email'),
            gid = _util2.default.getURLHashParam('gid');

        if (id_token && email && gid) {
            _this._preparePurchase(gid, email, id_token);
        } else {
            _this.state = { phase: 'login' };
        }
        return _this;
    }

    _createClass(Purchase, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onGoogleAPILoaded',
        value: function onGoogleAPILoaded() {
            if (!this.isGoogleApiLoaded) {
                if (!window.gapi || !window.gapi.auth) {
                    if (numRetries > 0) {
                        numRetries--;
                        setTimeout(GoogleApiLoaded, 1000);
                    }
                } else {
                    this.isGoogleApiLoaded = true;

                    _auth2.default.init(function (isLoggedIn) {
                        _util2.default.setSegment(_util2.default.Segment.ExistingUser);
                    });
                }
            }
        }
    }, {
        key: 'runPurchaseAuthenticate',
        value: function runPurchaseAuthenticate() {
            var _this2 = this;

            _auth2.default.authenticate( /*immediate*/false, function (success) {
                if (success) {
                    var token = gapi.auth.getToken();

                    var dt = _auth2.default.decodeIDToken(token.id_token);

                    _this2._preparePurchase(dt.sub, dt.email, token.id_token);
                } else {
                    _this2.displayPurchaseError(PurchaseError.FailedAuth);
                }
            });
        }
    }, {
        key: '_preparePurchase',
        value: function _preparePurchase(gid, email, id_token) {
            var _this3 = this;

            this._gid = gid;
            this._email = email;
            this._id_token = id_token;

            this.setState({ phase: 'pricing', 'emailDisplay': 'Account: ' + email });

            _util2.default.XHR_PrivateAPI({
                type: 'POST',
                path: '/billing/getStatus',
                data: { email: email, gid: gid },
                headers: {
                    id_token: id_token,
                    gid: gid
                },
                cb: function cb(xhr) {
                    if (xhr.status === 200) {
                        try {
                            var statusData = JSON.parse(xhr.response).data;

                            if (statusData) {
                                if (statusData.premiumStatus !== 4) {
                                    _this3.getClientToken();
                                } else {
                                    _this3.displayPurchaseError(PurchaseError.AlreadyPremium);
                                }
                            } else {
                                _this3.displayPurchaseError(PurchaseError.ServerConnect);
                            }
                        } catch (err) {
                            _this3.displayPurchaseError(PurchaseError.ServerConnect);

                            _util2.default.reportError(err);
                        }
                    } else {
                        _this3.displayPurchaseError(PurchaseError.ServerConnect);
                    }
                }
            });
        }
    }, {
        key: 'getClientToken',
        value: function getClientToken() {
            var _this4 = this;

            _util2.default.XHR_PrivateAPI({
                type: 'POST',
                path: '/billing/getToken',
                data: { email: this._email, gid: this._gid },
                headers: {
                    id_token: this._id_token,
                    gid: this._gid
                },
                cb: function cb(xhr) {
                    if (xhr.status === 200) {
                        try {
                            var tokenResponse = JSON.parse(xhr.responseText).data;

                            if (tokenResponse && tokenResponse.token) {
                                var clientToken = tokenResponse.token;

                                if (window.braintree) {
                                    _this4.setState({ phase: 'purchase' });
                                    var btClient = new window.braintree.api.Client({ clientToken: clientToken });

                                    window.braintree.setup(clientToken, 'dropin', {
                                        container: 'braintreeDropin',
                                        onPaymentMethodReceived: function onPaymentMethodReceived(obj) {
                                            _this4.handlePaymentMethodUpdate(obj, _this4._email, _this4._gid, _this4._id_token);
                                        },
                                        onError: function onError(err) {
                                            _util2.default.reportError(err);

                                            _this4.displayPurchaseError(PurchaseError.BraintreeConnect);
                                        },
                                        onReady: function onReady(bti) {
                                            document.getElementById('braintreeDropinLoader').classList.add('hidden');
                                            document.getElementById('braintreeSubmitWrapper').classList.remove('hidden');
                                        }
                                    });
                                } else {
                                    _this4.displayPurchaseError(PurchaseError.BraintreeConnect);
                                }
                            } else {
                                _this4.displayPurchaseError(PurchaseError.ServerConnect);
                            }
                        } catch (err) {
                            _util2.default.reportError(err);

                            _this4.displayPurchaseError(PurchaseError.ServerConnect);
                        }
                    } else {
                        _this4.displayPurchaseError(PurchaseError.ServerConnect);
                    }
                }
            });
        }
    }, {
        key: 'displayPurchaseSuccess',
        value: function displayPurchaseSuccess() {
            this.setState({ phase: 'success' });
        }
    }, {
        key: 'displayPurchaseError',
        value: function displayPurchaseError(code) {
            var msg;

            switch (code) {
                case PurchaseError.None:
                    msg = '';
                    break;
                case PurchaseError.AlreadyPremium:
                    msg = 'You\'re already a premium user! Please visit the app to manage your account.';
                    this.setState({ phase: 'login' });
                    break;
                case PurchaseError.ServerConnect:
                    msg = 'Failed to connect to our billing database. Please contact support@moo.do.';
                    break;
                case PurchaseError.MissingNonce:
                case PurchaseError.BraintreeConnect:
                    msg = 'Failed to connect to our billing provider. Please try again later or contact support@moo.do.';
                    break;
                case PurchaseError.FailedAuth:
                    msg = 'Failed to authorize your account.';
                    break;
                case PurchaseError.InvalidCode:
                    msg = 'You entered an invalid code.';
                    break;
                default:
                    msg = 'There was an error processing your information. Please contact support@moo.do or try again later.';
                    break;
            }

            this.setState({ errorMessage: msg });
        }
    }, {
        key: 'runPurchaseSendToApp',
        value: function runPurchaseSendToApp() {
            _auth2.default.sendToApp(email, /*goPremium*/false, /*noLogin*/true, /*isPremium*/true);
        }
    }, {
        key: 'selectPlan',
        value: function selectPlan(planIndex) {
            this.setState({ selectedPrice: planIndex });

            this.planID = premiumPlans[planIndex];
        }
    }, {
        key: 'enterCode',
        value: function enterCode() {
            var _this5 = this;

            this.setState({ phase: 'code', selectedPrice: 'code' });

            requestAnimationFrame(function () {
                return _this5.refs.enterCode.focus();
            });
        }
    }, {
        key: 'submitCode',
        value: function submitCode() {
            var _this6 = this;

            var codeInput = this.refs.enterCode;

            var code = codeInput.value;

            codeInput.value = '';

            if (code && code.length > 10) {
                this.displayPurchaseError(PurchaseError.None);

                _util2.default.XHR_PrivateAPI({
                    type: 'POST',
                    path: '/billing/useCode',
                    data: { code: code },
                    headers: {
                        id_token: id_token,
                        gid: gid
                    },
                    cb: function cb(xhr) {
                        if (xhr.status === 200) {
                            _this6.displayPurchaseSuccess();
                        } else if (xhr.status === 400) {
                            _this6.displayPurchaseError(PurchaseError.InvalidCode);
                        } else {
                            _this6.displayPurchaseError(PurchaseError.ServerConnect);
                        }
                    }
                });
            } else {
                this.displayPurchaseError(PurchaseError.InvalidCode);
            }
        }
    }, {
        key: 'handlePaymentMethodUpdate',
        value: function handlePaymentMethodUpdate(obj, email, gid, id_token) {
            var _this7 = this;

            this.setState({ errorMessage: null });

            if (obj && obj.nonce) {
                if (!this.submittingPayment) {
                    this.submittingPayment = true;

                    _util2.default.XHR_PrivateAPI({
                        type: 'POST',
                        path: '/billing/signup',
                        data: { email: email, gid: gid, nonce: obj.nonce, planID: this.planID },
                        headers: {
                            id_token: id_token,
                            gid: gid
                        },
                        cb: function cb(xhr) {
                            _this7.submittingPayment = false;

                            if (xhr.status === 200) {
                                _this7.displayPurchaseSuccess();

                                _this7.reportAdConversion(purchaseConversionID, parseInt(premiumPrices[premiumPlans.indexOf(_this7.planID)]));
                            } else {
                                _this7.displayPurchaseError(PurchaseError.AlreadyPremium);
                            }
                        }
                    });
                }
            } else {
                this.displayPurchaseError(PurchaseError.MissingNonce);
            }
        }
    }, {
        key: 'reportAdConversion',
        value: function reportAdConversion(conversionID, value) {
            var image = new Image(1, 1);

            var href = '//www.googleadservices.com/pagead/conversion/' + adTrackingID + '/?label=' + conversionID + '&guid=ON';

            if (value) {
                href += '&value=' + value + '&currency_code=USD';
            }

            image.src = href;
            document.body.appendChild(image);
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.state || {},
                phase = state.phase,
                selPr = state.selectedPrice;

            return _react2.default.createElement(
                'div',
                { id: 'purchase' },
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement('script', { src: 'https://js.braintreegateway.com/v2/braintree.js' }),
                    _react2.default.createElement('script', { src: 'https://apis.google.com/js/client.js?onload=GoogleApiLoaded', defer: true, async: true })
                ),
                _react2.default.createElement(_Nav2.default, { top: true, title: 'Purchase' }),
                _react2.default.createElement(
                    'div',
                    { className: 'section section-full section-first pageContent', id: 'sectionPurchase' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'premiumTitle' },
                        'Moo.do Premium'
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'tagline', className: 'iSubtitle premiumSubtitle m4' },
                        'Integrate more of your services together and unlock advanced organization and customization features.'
                    ),
                    phase === 'login' && _react2.default.createElement(
                        'div',
                        { id: 'loginArea', className: 'm4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pricingButton center' },
                            _react2.default.createElement(
                                'span',
                                { className: 'linkButton linkBlue ib', title: 'Login', onClick: this.runPurchaseAuthenticate },
                                'Select Account'
                            )
                        )
                    ),
                    (phase === 'pricing' || phase == 'purchase') && _react2.default.createElement(
                        'div',
                        { id: 'pricingArea', className: 'm4' },
                        _react2.default.createElement(
                            'div',
                            { id: 'emailDisplay' },
                            state.emailDisplay
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        (!selPr || selPr === 2) && _react2.default.createElement(
                            'div',
                            { id: 'pricing_2', className: 'pricingButton' + (selPr === 2 ? ' pricingSelected' : ''), onClick: this.selectPlan.bind(this, 2, 3) },
                            _react2.default.createElement(
                                'span',
                                { className: 'linkButton linkBlue ib', title: '$5 / month' },
                                '$5 / month'
                            )
                        ),
                        (!selPr || selPr === 3) && _react2.default.createElement(
                            'div',
                            { id: 'pricing_3', className: 'pricingButton' + (selPr === 3 ? ' pricingSelected' : ''), onClick: this.selectPlan.bind(this, 3, 2) },
                            _react2.default.createElement(
                                'span',
                                { className: 'linkButton linkBlue ib', title: '$49 / year' },
                                '$49 / year'
                            )
                        ),
                        (!selPr || selPr === 'code') && _react2.default.createElement(
                            'div',
                            { id: 'enterCodeButton', className: 'pricingButton' + (selPr === 'code' ? ' pricingSelected' : ''), onClick: this.enterCode },
                            _react2.default.createElement(
                                'span',
                                { className: 'linkButton linkBlue ib', title: 'Enter Code' },
                                'Enter Code'
                            )
                        )
                    ),
                    phase === 'code' && _react2.default.createElement(
                        'div',
                        { id: 'codeArea', className: 'm4' },
                        _react2.default.createElement(
                            'form',
                            { id: 'billingForm', className: 'center', method: 'post', action: 'javascript:void(0);' },
                            _react2.default.createElement('input', { id: 'codeValue', style: { width: 250 }, type: 'text', className: '', placeholder: 'code', ref: 'enterCode' }),
                            _react2.default.createElement('input', { id: 'codeSubmit', type: 'submit', className: 'linkButton linkBlue ib', onclick: this.submitCode, value: 'SUBMIT' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'purchaseArea', className: 'm4' + (phase !== 'purchase' ? ' hidden' : '') },
                        _react2.default.createElement(
                            'form',
                            { id: 'billingForm', className: 'center', method: 'post', action: 'javascript:void(0);' },
                            _react2.default.createElement('div', { id: 'braintreeDropin' }),
                            _react2.default.createElement(
                                'div',
                                { id: 'braintreeDropinLoader' },
                                'Loading...'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'braintreeSubmitWrapper', className: 'pricingButton center m2 hidden' },
                                _react2.default.createElement('input', { id: 'braintreeSubmit', type: 'submit', className: 'linkButton linkBlue ib', value: 'SUBMIT' })
                            )
                        )
                    ),
                    phase === 'success' && _react2.default.createElement(
                        'div',
                        { id: 'successArea', className: 'm4' },
                        'Thanks for signing up for Moo.do!',
                        _react2.default.createElement(
                            'div',
                            { className: 'pricingButton center m4' },
                            _react2.default.createElement(
                                'span',
                                { className: 'linkButton linkBlue ib', title: 'Login', onclick: 'runPurchaseSendToApp()' },
                                'Back to the app!'
                            )
                        )
                    ),
                    state.errorMessage && _react2.default.createElement(
                        'div',
                        { id: 'errorArea', className: 'm4' },
                        _react2.default.createElement(
                            'div',
                            { id: 'errorMessage' },
                            state.errorMessage
                        )
                    )
                )
            );
        }
    }]);

    return Purchase;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(Purchase);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _reactStatic = __webpack_require__(4);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invoice = function (_React$Component) {
    _inherits(Invoice, _React$Component);

    function Invoice() {
        _classCallCheck(this, Invoice);

        return _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).apply(this, arguments));
    }

    _createClass(Invoice, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var d = _util2.default.getURLHashParam('d');
            if (d) {
                var invoiceData = JSON.parse(window.atob(d));

                var hostedFields = document.getElementsByClassName('hostedField');

                for (var i = 0; i < hostedFields.length; ++i) {
                    var fieldEle = hostedFields[i];

                    fieldEle.textContent = invoiceData[fieldEle.id];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'home' },
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement('link', { rel: 'stylesheet', media: 'screen', href: '/landing/css/invoice_screen.css' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', media: 'all', href: '/landing/css/invoice_all.css' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', media: 'print', href: '/landing/css/invoice_print.css' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container_12', id: 'wrapper' },
                    _react2.default.createElement(
                        'div',
                        { id: 'content', className: 'grid_10 prefix_1 suffix_1 center' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'receipt' },
                            'Transaction ',
                            _react2.default.createElement('span', { id: 'id', className: 'hostedField' })
                        ),
                        _react2.default.createElement('img', { src: '/img/logoForWhite266.png' }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn_primary', href: 'javascript:window.print();', style: { marginBottom: 48 } },
                            'Print'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'block' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Transaction Information'
                            ),
                            _react2.default.createElement(
                                'dl',
                                { className: 'detail_list long' },
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Merchant'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    'Moo.do LLC'
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Merchant Address'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    '2105 E. Jefferson St',
                                    _react2.default.createElement('br', null),
                                    'Seattle, WA 98122'
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Amount'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    { className: 'amount_positive' },
                                    _react2.default.createElement('span', { id: 'amount', className: 'hostedField' }),
                                    ' ',
                                    _react2.default.createElement('span', { id: 'currency', className: 'hostedField' })
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Transaction Date'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    _react2.default.createElement('span', { id: 'date', className: 'hostedField' })
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Status'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    { className: 'positive' },
                                    _react2.default.createElement('span', { id: 'status', className: 'hostedField' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'block' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Customer Information'
                            ),
                            _react2.default.createElement(
                                'dl',
                                { className: 'detail_list' },
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Company Name'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    _react2.default.createElement('span', { id: 'company', className: 'hostedField' })
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Email'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    _react2.default.createElement('span', { id: 'email', className: 'hostedField' })
                                ),
                                _react2.default.createElement(
                                    'dt',
                                    null,
                                    'Address'
                                ),
                                _react2.default.createElement(
                                    'dd',
                                    null,
                                    _react2.default.createElement('span', { id: 'address', className: 'hostedField' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'clear' })
                )
            );
        }
    }]);

    return Invoice;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(Invoice);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(3);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)(function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Nav2.default, { top: true, title: 'Beta' }),
        _react2.default.createElement(
            'div',
            { className: 'padded' },
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'h1',
                null,
                'Use the beta'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Beta version of the web app: ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://beta.moo.do/web/' },
                    'https://beta.moo.do/web/'
                )
            ),
            _react2.default.createElement(
                'p',
                null,
                'In the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://beta.moo.do/download/' },
                    _react2.default.createElement('span', { className: 'platformName' }),
                    ' app'
                ),
                ' you will see a "Use beta version" checkbox in the ',
                _react2.default.createElement(
                    'span',
                    { className: 'onlyMac' },
                    'Moo.do'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'onlyWin' },
                    'File'
                ),
                ' menu to toggle between the beta version and the normal version.',
                _react2.default.createElement(
                    'span',
                    { className: 'onlyWin' },
                    ' You may need to press ',
                    _react2.default.createElement(
                        'span',
                        { className: 'hotkey' },
                        'Alt'
                    ),
                    ' to open the File menu.'
                )
            ),
            _react2.default.createElement(
                'h1',
                null,
                'Join the community'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is the best place to post bug reports and feature requests, where the group can discuss and iterate on ideas in real-time.'
            ),
            _react2.default.createElement(
                'a',
                { style: { marginTop: 16 }, className: 'slackInvite', target: '_blank', href: 'https://join.slack.com/t/moodo/shared_invite/enQtMzgyOTY4MzY4Nzg3LTQxMTllZTE1MjM4MTRlMjViOGM3ZjU5ZTZhMjAxZjI1NjM3NWM5MTM3Y2M4MWYzODRmNjUwYTk0Njg2YWI0NzU' },
                _react2.default.createElement('object', { className: 'slackMark', data: '/img/slack.svg', type: 'image/svg+xml' }),
                'Join us with Slack'
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _Post = __webpack_require__(40);

var _Post2 = _interopRequireDefault(_Post);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withRouteData)(function (_ref) {
    var posts = _ref.posts,
        numPages = _ref.numPages,
        path = _ref.path,
        isSinglePost = _ref.isSinglePost,
        showChangelog = _ref.showChangelog;
    return _react2.default.createElement(
        'div',
        { className: 'blog' },
        _react2.default.createElement(_Nav2.default, { top: true, title: isSinglePost ? posts[0].title : 'Blog' }),
        showChangelog && _react2.default.createElement(
            'div',
            { className: 'linkChangelog padded center' },
            _react2.default.createElement(
                _reactStatic.Link,
                { to: '/changelog' },
                _react2.default.createElement(
                    'div',
                    { className: 'button white' },
                    'Open Change Log'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'posts' },
            posts.map(function (post, i) {
                var ret = _react2.default.createElement(_Post2.default, { key: post.title, post: post, excerpt: numPages > 1 });
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    { key: post.title + 'frag' },
                    ret,
                    _react2.default.createElement('hr', null)
                );
            })
        ),
        numPages > 1 && _react2.default.createElement(
            'div',
            { className: 'pagination padded' },
            Array(numPages).fill().map(function (a, num) {
                return _react2.default.createElement(
                    _reactStatic.Link,
                    { activeClassName: 'selected', exact: true, key: num, to: path + (num > 0 ? '/' + (num + 1) : ''), prefetch: false },
                    num + 1
                );
            })
        )
    );
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Nav2.default, { top: true }),
        _react2.default.createElement(
            'div',
            { className: 'section section-full section-first' },
            'We were unable to find the page you were looking for - ',
            _react2.default.createElement(
                'a',
                { href: '/' },
                'please try again'
            ),
            '.'
        )
    );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(27);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _reactStaticRoutes = __webpack_require__(28);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _DemoManager = __webpack_require__(7);

var _DemoManager2 = _interopRequireDefault(_DemoManager);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!false && typeof window !== 'undefined') {
                if (window.location.protocol === 'http:') {
                    window.location = 'https://' + location.host + location.pathname;
                } else if (window.location.hash.indexOf('app%22:true') >= 0 || window.location.hash.indexOf('"app":true') >= 0) {
                    window.location.pathname = '/web/';
                }
            }

            if (true) {
                /* Google Tag Manager */
                (function (w, d, s, l, i) {
                    w[l] = w[l] || [];w[l].push({ "gtm.start": new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-MRLRNC6');

                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                ga('create', 'UA-37740918-2', { 'cookieDomain': 'auto', 'siteSpeedSampleRate': 50 });
                ga('require', 'displayfeatures');ga('send', 'pageview');

                var _rollbarConfig = {
                    accessToken: "0f28959fc748418d84d2ae6ee391e213",
                    captureUncaught: true,
                    captureUnhandledRejections: false,
                    maxItems: 500,
                    payload: {
                        environment: "landing"
                    }
                };

                !function (r) {
                    function e(n) {
                        if (o[n]) return o[n].exports;var t = o[n] = { exports: {}, id: n, loaded: !1 };return r[n].call(t.exports, t, t.exports, e), t.loaded = !0, t.exports;
                    }var o = {};return e.m = r, e.c = o, e.p = "", e(0);
                }([function (r, e, o) {
                    "use strict";
                    var n = o(1),
                        t = o(4);_rollbarConfig = _rollbarConfig || {}, _rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.4.2/rollbar.min.js", _rollbarConfig.async = void 0 === _rollbarConfig.async || _rollbarConfig.async;var a = n.setupShim(window, _rollbarConfig),
                        l = t(_rollbarConfig);window.rollbar = n.Rollbar, a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, l);
                }, function (r, e, o) {
                    "use strict";
                    function n(r) {
                        return function () {
                            try {
                                return r.apply(this, arguments);
                            } catch (r) {
                                try {
                                    console.error("[Rollbar]: Internal error", r);
                                } catch (r) {}
                            }
                        };
                    }function t(r, e) {
                        this.options = r, this._rollbarOldOnError = null;var o = d++;this.shimId = function () {
                            return o;
                        }, "undefined" != typeof window && window._rollbarShims && (window._rollbarShims[o] = { handler: e, messages: [] });
                    }function a(r, e) {
                        if (r) {
                            var o = e.globalAlias || "Rollbar";if ("object" == _typeof(r[o])) return r[o];r._rollbarShims = {}, r._rollbarWrappedError = null;var t = new i(e);return n(function () {
                                e.captureUncaught && (t._rollbarOldOnError = r.onerror, s.captureUncaughtExceptions(r, t, !0), s.wrapGlobals(r, t, !0)), e.captureUnhandledRejections && s.captureUnhandledRejections(r, t, !0);var n = e.autoInstrument;return e.enabled !== !1 && (void 0 === n || n === !0 || "object" == (typeof n === 'undefined' ? 'undefined' : _typeof(n)) && n.network) && r.addEventListener && (r.addEventListener("load", t.captureLoad.bind(t)), r.addEventListener("DOMContentLoaded", t.captureDomContentLoaded.bind(t))), r[o] = t, t;
                            })();
                        }
                    }function l(r) {
                        return n(function () {
                            var e = this,
                                o = Array.prototype.slice.call(arguments, 0),
                                n = { shim: e, method: r, args: o, ts: new Date() };window._rollbarShims[this.shimId()].messages.push(n);
                        });
                    }var i,
                        s = o(2),
                        d = 0,
                        c = o(3),
                        p = function p(r, e) {
                        return new t(r, e);
                    };i = c.curry ? c.curry(p) : c.bind(null, p), t.prototype.loadFull = function (r, e, o, t, a) {
                        var l = function l() {
                            var e;if (void 0 === r._rollbarDidLoad) {
                                e = new Error("rollbar.js did not load");for (var o, n, t, l, i = 0; o = r._rollbarShims[i++];) {
                                    for (o = o.messages || []; n = o.shift();) {
                                        for (t = n.args || [], i = 0; i < t.length; ++i) {
                                            if (l = t[i], "function" == typeof l) {
                                                l(e);break;
                                            }
                                        }
                                    }
                                }
                            }"function" == typeof a && a(e);
                        },
                            i = !1,
                            s = e.createElement("script"),
                            d = e.getElementsByTagName("script")[0],
                            c = d.parentNode;s.crossOrigin = "", s.src = t.rollbarJsUrl, o || (s.async = !0), s.onload = s.onreadystatechange = n(function () {
                            if (!(i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                                s.onload = s.onreadystatechange = null;try {
                                    c.removeChild(s);
                                } catch (r) {}i = !0, l();
                            }
                        }), c.insertBefore(s, d);
                    }, t.prototype.wrap = function (r, e, o) {
                        try {
                            var n;if (n = "function" == typeof e ? e : function () {
                                return e || {};
                            }, "function" != typeof r) return r;if (r._isWrap) return r;if (!r._rollbar_wrapped && (r._rollbar_wrapped = function () {
                                o && "function" == typeof o && o.apply(this, arguments);try {
                                    return r.apply(this, arguments);
                                } catch (o) {
                                    var e = o;throw e && ("string" == typeof e && (e = new String(e)), e._rollbarContext = n() || {}, e._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError = e), e;
                                }
                            }, r._rollbar_wrapped._isWrap = !0, r.hasOwnProperty)) for (var t in r) {
                                r.hasOwnProperty(t) && (r._rollbar_wrapped[t] = r[t]);
                            }return r._rollbar_wrapped;
                        } catch (e) {
                            return r;
                        }
                    };for (var u = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(","), f = 0; f < u.length; ++f) {
                        t.prototype[u[f]] = l(u[f]);
                    }r.exports = { setupShim: a, Rollbar: i };
                }, function (r, e) {
                    "use strict";
                    function o(r, e, o) {
                        if (r) {
                            var t;"function" == typeof e._rollbarOldOnError ? t = e._rollbarOldOnError : r.onerror && !r.onerror.belongsToShim && (t = r.onerror, e._rollbarOldOnError = t);var a = function a() {
                                var o = Array.prototype.slice.call(arguments, 0);n(r, e, t, o);
                            };a.belongsToShim = o, r.onerror = a;
                        }
                    }function n(r, e, o, n) {
                        r._rollbarWrappedError && (n[4] || (n[4] = r._rollbarWrappedError), n[5] || (n[5] = r._rollbarWrappedError._rollbarContext), r._rollbarWrappedError = null), e.handleUncaughtException.apply(e, n), o && o.apply(r, n);
                    }function t(r, e, o) {
                        if (r) {
                            "function" == typeof r._rollbarURH && r._rollbarURH.belongsToShim && r.removeEventListener("unhandledrejection", r._rollbarURH);var n = function n(r) {
                                var o, n, t;try {
                                    o = r.reason;
                                } catch (r) {
                                    o = void 0;
                                }try {
                                    n = r.promise;
                                } catch (r) {
                                    n = "[unhandledrejection] error getting `promise` from event";
                                }try {
                                    t = r.detail, !o && t && (o = t.reason, n = t.promise);
                                } catch (r) {
                                    t = "[unhandledrejection] error getting `detail` from event";
                                }o || (o = "[unhandledrejection] error getting `reason` from event"), e && e.handleUnhandledRejection && e.handleUnhandledRejection(o, n);
                            };n.belongsToShim = o, r._rollbarURH = n, r.addEventListener("unhandledrejection", n);
                        }
                    }function a(r, e, o) {
                        if (r) {
                            var n,
                                t,
                                a = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for (n = 0; n < a.length; ++n) {
                                t = a[n], r[t] && r[t].prototype && l(e, r[t].prototype, o);
                            }
                        }
                    }function l(r, e, o) {
                        if (e.hasOwnProperty && e.hasOwnProperty("addEventListener")) {
                            for (var n = e.addEventListener; n._rollbarOldAdd && n.belongsToShim;) {
                                n = n._rollbarOldAdd;
                            }var t = function t(e, o, _t) {
                                n.call(this, e, r.wrap(o), _t);
                            };t._rollbarOldAdd = n, t.belongsToShim = o, e.addEventListener = t;for (var a = e.removeEventListener; a._rollbarOldRemove && a.belongsToShim;) {
                                a = a._rollbarOldRemove;
                            }var l = function l(r, e, o) {
                                a.call(this, r, e && e._rollbar_wrapped || e, o);
                            };l._rollbarOldRemove = a, l.belongsToShim = o, e.removeEventListener = l;
                        }
                    }r.exports = { captureUncaughtExceptions: o, captureUnhandledRejections: t, wrapGlobals: a };
                }, function (r, e) {
                    "use strict";
                    function o(r, e) {
                        this.impl = r(e, this), this.options = e, n(o.prototype);
                    }function n(r) {
                        for (var e = function e(r) {
                            return function () {
                                var e = Array.prototype.slice.call(arguments, 0);if (this.impl[r]) return this.impl[r].apply(this.impl, e);
                            };
                        }, o = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(","), n = 0; n < o.length; n++) {
                            r[o[n]] = e(o[n]);
                        }
                    }o.prototype._swapAndProcessMessages = function (r, e) {
                        this.impl = r(this.options);for (var o, n, t; o = e.shift();) {
                            n = o.method, t = o.args, this[n] && "function" == typeof this[n] && ("captureDomContentLoaded" === n || "captureLoad" === n ? this[n].apply(this, [t[0], o.ts]) : this[n].apply(this, t));
                        }return this;
                    }, r.exports = o;
                }, function (r, e) {
                    "use strict";
                    r.exports = function (r) {
                        return function (e) {
                            if (!e && !window._rollbarInitialized) {
                                r = r || {};for (var o, n, t = r.globalAlias || "Rollbar", a = window.rollbar, l = function l(r) {
                                    return new a(r);
                                }, i = 0; o = window._rollbarShims[i++];) {
                                    n || (n = o.handler), o.handler._swapAndProcessMessages(l, o.messages);
                                }window[t] = n, window._rollbarInitialized = !0;
                            }
                        };
                    };
                }]);

                /* // Smartlook
                window.addEventListener('beforeunload', function () { if (window.__BEFORE_UNLOAD) window.__BEFORE_UNLOAD(); }, true);
                window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},s=d.getElementsByTagName('script')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='//rec.getsmartlook.com/bundle.js';s.parentNode.insertBefore(c,s);
                })(document);
                smartlook('init', 'e2ae42bc779d271c39a66958cf86e6e138e0a941');
                */
            }

            document.documentElement.classList.add(_DemoManager2.default.OS);

            if (_DemoManager2.default.isMobile()) {
                document.documentElement.classList.add('mobile');
            }

            if (_DemoManager2.default.isLegacyBrowser()) {
                document.documentElement.classList.add('prefImages');
            }

            if (_DemoManager2.default.OS === _DemoManager2.default.OSNames.Windows) {
                document.documentElement.classList.add('windows');
            }

            var ua = navigator.userAgent;
            if (ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident') !== -1) {
                document.documentElement.classList.add('ie');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactStatic.Router,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'noscript',
                        null,
                        _react2.default.createElement('iframe', { src: 'https://www.googletagmanager.com/ns.html?id=GTM-MRLRNC6', height: '0', width: '0', style: { display: 'none', visibility: 'hidden' } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(_reactStaticRoutes2.default, null)
                    ),
                    _react2.default.createElement(_Nav2.default, { bottom: true })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(29);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(30);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(31);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _reactUniversalComponent = __webpack_require__(33);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Premium',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Premium', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Premium');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Premium';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Help',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Help', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Help');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Help';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Changelog',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Changelog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Changelog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Changelog';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Us',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/Us', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Us');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/Us';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Contact',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/containers/Contact';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Press',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Press', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Press');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/Press';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Privacy',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/Privacy', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Privacy');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/containers/Privacy';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Unsubscribe',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/Unsubscribe', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Unsubscribe');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/containers/Unsubscribe';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Purchase',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/containers/Purchase', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Purchase');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/containers/Purchase';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Invoice',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/containers/Invoice', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Invoice');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/containers/Invoice';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Beta',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/containers/Beta', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Beta');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/containers/Beta';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/jay/Documents/code/basketcaseExperiments/Duchess/static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 13

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(34);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(35);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(36);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(9);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withRouteData)(function (_ref) {
    var page = _ref.page;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'header',
            null,
            'How to get started'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Not sure where to begin? This article will give you a solid understanding of how to setup Moo.do to manage your projects and tasks.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'Adding projects and tasks'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Each item in the Outline can be anything: a project, a task, an appointment, a link to an email or file, or just plain text. Using the item types described below, you can specify what you want an item in your outline to represent.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/basics/outline.png' }),
        _react2.default.createElement(
            'h2',
            null,
            'Projects, tasks, and lists'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Set the style of an item by right clicking it and selecting the item type or by typing one of these characters at the beginning of the item.'
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'span',
                { className: 'basicsPrefix' },
                '#'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Projects (headers)'
                ),
                ' display larger and bolder than other items. You can use these to visually differentiate projects from everything else.'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'span',
                { className: 'basicsPrefix' },
                '[ ]'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Tasks'
                ),
                ' display a checkbox to their left which you can use to complete them. You can also complete any item with the checkbox on the right.'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'span',
                { className: 'basicsPrefix' },
                '*'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Bulleted lists'
                ),
                ' show a bullet next to each item.'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'span',
                { className: 'basicsPrefix' },
                '1.'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Numbered lists'
                ),
                ' show an automatically incrementing number next to each item in the list.'
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Hierarchy'
        ),
        _react2.default.createElement(
            'p',
            null,
            'In other note apps you might create different files or documents for different projects, but in Moo.do everything should be kept in one file and organized as a hierarchy.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'To move items around in your hierarchy, indent an item under the project above by pressing ',
            _react2.default.createElement(
                'span',
                { className: 'hotkey' },
                'Tab'
            ),
            ' and unindent it by pressing ',
            _react2.default.createElement(
                'span',
                { className: 'hotkey' },
                'Shift + Tab'
            ),
            '.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/basics/hierarchy.png' }),
        _react2.default.createElement(
            'h1',
            null,
            'Managing projects'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Moo.do makes narrowing your focus to a single project or context easy. Remove distractions by zooming, searching, and filtering your outline.'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Zoom'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Zoom into an item to show only its children and hide everything else. This is the best way to focus on a single project.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'videoWrapper showPlayButton imgOnePane' },
            _react2.default.createElement(
                'video',
                { loop: true, muted: true, playsInline: true, poster: '/img/help/basics/zoom.png' },
                _react2.default.createElement('source', { src: '/img/help/basics/zoom.mp4', type: 'video/mp4' })
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Search and filter'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePointFive', src: '/img/help/basics/search.png' }),
        _react2.default.createElement(
            'p',
            null,
            'Search for a keyword or #tag to show matching items. And use Moo.do\u2019s many different filters to customize your view by showing or hiding specific item types.'
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'basicsSearch', src: '/img/help/basics/icon-search-header.png' }),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Headers:'
                ),
                ' When you want to hide anything not related to projects'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'basicsSearch', src: '/img/help/basics/icon-search-task.png' }),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Tasks:'
                ),
                ' When you want to see only tasks and ignore other notes'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'basicsSearch', src: '/img/help/basics/icon-search-complete.png' }),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Completed:'
                ),
                ' Hide completed items to focus on what\u2019s left, or show only completed items to see what you\u2019ve done'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'basicsSearch', src: '/img/help/basics/icon-search-star.png' }),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Star:'
                ),
                ' Show only those high priority starred items'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'basicsSearch basicsSearchPriority', src: '/img/help/basics/icon-search-priority.png' }),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    'Priority:'
                ),
                ' Show only prioritized items'
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Overview'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Click the ',
            _react2.default.createElement('img', { className: 'inlineIcon', src: '/img/help/basics/icon-overview.png' }),
            ' menu in the top left of the pane to open the Overview. The Overview lets you quickly scroll to items in view or zoom into them.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'In an Outline or Calendar pane, it shows all of your Moo.do items with children. In the Gmail pane, it shows your Gmail labels. And in the Drive pane, it shows your folders in Drive.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'videoWrapper showPlayButton imgOnePointFive' },
            _react2.default.createElement(
                'video',
                { loop: true, muted: true, playsInline: true, poster: '/img/help/basics/overview.png' },
                _react2.default.createElement('source', { src: '/img/help/basics/overview.mp4', type: 'video/mp4' })
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Collapsing'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Collapsing is a good way to hide projects you don\u2019t look at very often, or keep details of projects closed until you\u2019re ready to work on them. Click on the arrow on the left side of an item to collapse it, or click the [arrow] icon at the top of the pane to collapse everything.'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Dates'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Press ! or ',
            _react2.default.createElement(
                'span',
                { className: 'hotkey' },
                _react2.default.createElement('span', { className: 'hotkeyPri' }),
                ' + Shift + D'
            ),
            ' to open the date picker. There you can either type a date or repeat date like "every friday" or click on a date in the date picker. You can even drag across the calendar to select a range of dates.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'Using multiple panes to create boards'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Each pane is a separate, customizable view on the same data in your file. You can combine multiple panes together to create your own boards.'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Add a new pane'
        ),
        _react2.default.createElement(
            'p',
            null,
            'To the right of the panes is the Add Pane area. Click a pane type to add it or click the zoom icon next to it to choose an item to zoom the new pane to.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/basics/addpane.png' }),
        _react2.default.createElement(
            'h2',
            null,
            'Drag and drop'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Grab an item on the left side to drag it. You can drag it around the same pane to rearrange it, or to a different pane to move it to a separate project or milestone.'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Put panes together'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Combine multiple panes with their own search and zoom to create custom boards. You can use multiple panes to create completely custom workflows:'
        ),
        _react2.default.createElement(
            'h3',
            { className: 'center' },
            'Email + GTD'
        ),
        _react2.default.createElement(
            'div',
            { className: 'imageDesc' },
            'Organize your emails on your todo list.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgTwoPane', src: '/img/about/EmailGTD.png' }),
        _react2.default.createElement(
            'h3',
            { className: 'center' },
            'Kanban Boards'
        ),
        _react2.default.createElement(
            'div',
            { className: 'imageDesc' },
            'Drag tasks between stages of your projects.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgTwoPane', src: '/img/about/Kanban.png' }),
        _react2.default.createElement(
            'h3',
            { className: 'center' },
            'GTD'
        ),
        _react2.default.createElement(
            'div',
            { className: 'imageDesc' },
            'Use tag searches combined with a calendar pane to always know what\'s next.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgTwoPane', src: '/img/about/GTD.png' }),
        _react2.default.createElement(
            'h3',
            { className: 'center' },
            'Project Management'
        ),
        _react2.default.createElement(
            'div',
            { className: 'imageDesc' },
            'Get an overview of what your team is up to.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgTwoPane', src: '/img/about/ProjectManagement.png' }),
        _react2.default.createElement(
            'h3',
            { className: 'center' },
            'Agenda + Calendar'
        ),
        _react2.default.createElement(
            'div',
            { className: 'imageDesc' },
            'See your upcoming schedule from every view.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgTwoPane', src: '/img/about/AgendaCalendar.png' }),
        _react2.default.createElement(
            'h2',
            null,
            'Save multiple boards'
        ),
        _react2.default.createElement(
            'p',
            null,
            'In the sidebar on the left you\u2019ll see \u201CMy First Board\u201D which is created for you by default. If you click \u201CNew Board\u201D all your panes will disappear giving you a new Board with a fresh set of panes to arrange for a different purpose. Switching back to \u201CMy First Board\u201D will bring back your original set of panes. With Boards you can save a set of boards for each of your workflows, such as one for working with email, one for focusing on today\u2019s tasks, one for planning future tasks, etc\u2026'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/basics/boards.png', style: { width: 150 } })
    );
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(3);

var _auth = __webpack_require__(5);

var _auth2 = _interopRequireDefault(_auth);

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withRouteData)(function (_ref) {
    var page = _ref.page;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'header',
            null,
            'How to GTD your email'
        ),
        _react2.default.createElement(
            'p',
            null,
            'The main thing that makes email so stressful is that emails are \u201Copen loops\u201D in your brain. You already have a prioritized todo list and calendar, but emails exist outside of that system. Unlike other apps, with Moo.do you can prioritize and organize emails together with your other tasks and calendar.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This article describes how to get your inbox under control in Moo.do with ',
            _react2.default.createElement(
                'a',
                { href: 'https://lifehacker.com/productivity-101-a-primer-to-the-getting-things-done-1551880955' },
                'GTD (Getting Things Done)'
            ),
            ', but these concepts can apply to any organization system.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Moo.do offers three ways to process emails: prioritize directly in the Inbox, move emails onto a todo list, and manage multiple labels on a Kanban board.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            '1. Prioritize emails in the Inbox'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This method is used for quickly triaging emails without taking the time to add additional context. We recommend this for tasks which you plan to do right away, while longer-term tasks should be moved to your outline or calendar as described down below.'
        ),
        _react2.default.createElement(
            'ol',
            null,
            _react2.default.createElement(
                'li',
                null,
                'As is typical with GTD, for each email that requires no action, archive or delete it.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'If it is easy to handle or respond to quickly, do it now.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'If it needs further action set a priority (1-3) and move on.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'When you reach the end of the inbox, sort by priority and start with the most important emails.'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'videoWrapper showPlayButton imgOnePane' },
            _react2.default.createElement(
                'video',
                { loop: true, muted: true, playsInline: true, poster: '/img/help/email/priority.png' },
                _react2.default.createElement('source', { src: '/img/help/email/priority.mp4', type: 'video/mp4' })
            )
        ),
        _react2.default.createElement(
            'h1',
            null,
            '2. Organize emails where they belong'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Emails that can\u2019t be handled quickly should be moved out of the inbox and alongside other tasks so that you can deal with them later. An email might represent a task in its own right, be a reference for an existing task, or just be something to save for later. Moo.do offers multiple ways to organize these emails:'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'With other tasks on the Outline'
        ),
        _react2.default.createElement(
            'p',
            null,
            'For emails that belong on a todo list, add it to your Outline. Once an email is in the Outline, add sub-items, notes, or tags to add extra information like any other item or task.'
        ),
        _react2.default.createElement(
            'ol',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Drag the email to the Outline. This can either be a task on it\u2019s own, or a child of an existing task.',
                _react2.default.createElement(
                    'div',
                    { className: 'videoWrapper showPlayButton imgTwoPane' },
                    _react2.default.createElement(
                        'video',
                        { loop: true, muted: true, playsInline: true, poster: '/img/help/email/dragOutline.png' },
                        _react2.default.createElement('source', { src: '/img/help/email/dragOutline.mp4', type: 'video/mp4' })
                    )
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'Use the Create Task menu by right clicking the email or using the T hotkey. This creates a new task with the email as a child, and you can optionally add it to an existing task or project or add some notes.',
                _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/email/createTask.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                'Move to Outline by right clicking the email or using the M hotkey. Start typing the name of the item to add it to, and choose it from the autocomplete list.',
                _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/email/moveOutline.png' })
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'On the Calendar'
        ),
        _react2.default.createElement(
            'p',
            null,
            'If an email needs to be handled at a specific time, add it to your calendar.'
        ),
        _react2.default.createElement(
            'ol',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Drag and drop the email to the Calendar.',
                _react2.default.createElement(
                    'div',
                    { className: 'videoWrapper showPlayButton imgTwoPane' },
                    _react2.default.createElement(
                        'video',
                        { loop: true, muted: true, playsInline: true, poster: '/img/help/email/dragCalendar.png' },
                        _react2.default.createElement('source', { src: '/img/help/email/dragCalendar.mp4', type: 'video/mp4' })
                    )
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'Use the Create Task menu described in #2 above and type a @date after the task name.',
                _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/email/createTaskCalendar.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                'Add to Calendar by right clicking the email or pressing C. Type a date to add it to your calendar.'
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Review priorities of emails and tasks together'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Once your email is out of your inbox, you have powerful management tools to see a complete picture of what you have to do next.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'If you like to prioritize by time, the Agenda shows all of your tasks and emails together, in priority order.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/email/agenda.png' }),
        _react2.default.createElement(
            'p',
            null,
            'Searching an Outline pane for related items may be best if you prefer to organize by project or context.'
        ),
        _react2.default.createElement('img', { className: 'helpImg imgOnePane', src: '/img/help/email/outlineContext.png' }),
        _react2.default.createElement(
            'p',
            null,
            'If you prefer a flat task view without all the hierarchy, use the \u201COnly matching items\u201D filter in the search bar.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'videoWrapper showPlayButton imgOnePane' },
            _react2.default.createElement(
                'video',
                { loop: true, muted: true, playsInline: true, poster: '/img/help/email/flatSearch.png' },
                _react2.default.createElement('source', { src: '/img/help/email/flatSearch.mp4', type: 'video/mp4' })
            )
        ),
        _react2.default.createElement(
            'h1',
            null,
            '3. Multiple labels side by side'
        ),
        _react2.default.createElement(
            'p',
            null,
            'If you already have a system for organizing emails with labels, Moo.do makes it easy to work with multiple labels side by side. Add additional Gmail panes and set each one to a different label by clicking the hamburger icon at the top left of the pane and selecting a label from the list. Then you can drag and drop emails between the labels.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'videoWrapper showPlayButton imgThreePane' },
            _react2.default.createElement(
                'video',
                { loop: true, muted: true, playsInline: true, poster: '/img/help/email/labels.png' },
                _react2.default.createElement('source', { src: '/img/help/email/labels.mp4', type: 'video/mp4' })
            )
        )
    );
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _htmr = __webpack_require__(41);

var _htmr2 = _interopRequireDefault(_htmr);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _DemoManager = __webpack_require__(7);

var _DemoManager2 = _interopRequireDefault(_DemoManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var hrExcerpt = '<p>##EXCERPT##</p>';

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props,
                post = props.post,
                contents = post.contents;

            if (typeof window !== 'undefined') {
                window.__addDemo = function (demo) {
                    if (!props.excerpt) _this2.loadDemos([demo]);
                };
                window.__addDemos = function (arr) {
                    if (!props.excerpt) _this2.loadDemos(arr);
                };
            }

            if (!props.excerpt && typeof window !== 'undefined') {
                // Google+
                (function () {
                    var po = document.createElement('script');
                    po.type = 'text/javascript';
                    po.async = true;
                    po.src = 'https://apis.google.com/js/platform.js';
                    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);
                })();

                if (window.FB) {
                    FB.XFBML.parse(document);
                } else {
                    // Facebook
                    (function (d, s, id) {
                        var js,
                            fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=312316478922816&version=v2.0";
                        fjs.parentNode.insertBefore(js, fjs);
                    })(document, 'script', 'facebook-jssdk');
                }

                // Twitter
                if (window.twttr) {
                    twttr.widgets.load();
                } else {
                    !function (d, s, id) {
                        var js,
                            fjs = d.getElementsByTagName(s)[0],
                            p = /^http:/.test(d.location) ? 'http' : 'https';if (!d.getElementById(id)) {
                            js = d.createElement(s);js.id = id;js.src = p + '://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, 'script', 'twitter-wjs');
                }

                // Disqus
                window.disqus_identifier = post.title;
                window.disqus_shortname = 'moodo';
                window.disqus_url = 'https://www.moo.do/blog/' + post.slug;

                if (window.DISQUS) {
                    DISQUS.reset({
                        reload: true,
                        config: function config() {
                            this.page.identifier = window.disqus_identifier;
                            this.page.url = window.disqus_url;
                        }
                    });
                } else {
                    var dsq = document.createElement('script');
                    dsq.id = 'script_disqus';
                    dsq.type = 'text/javascript';
                    dsq.async = true;
                    dsq.src = '//' + window.disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                }
            }

            if (typeof window !== 'undefined') {
                var post = props.post;
                if (post.script) {
                    var script = document.createElement("script");
                    script.id = 'script_' + post.slug;
                    script.innerHTML = post.script;
                    _util2.default.removeExistingScript(script);
                    document.head.appendChild(script);
                }
            }
        }
    }, {
        key: 'loadDemos',
        value: function loadDemos(arr) {
            var config = {};
            _DemoManager2.default.registerDemos(arr);
            if (_DemoManager2.default.isMobile() || _DemoManager2.default.isLegacyBrowser()) {
                _DemoManager2.default.config({ preferImages: true, noDelayLoad: true });
            } else {
                _DemoManager2.default.config({ onlyOne: true });
            }

            _DemoManager2.default.beginLoading();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                post = props.post,
                date = new Date(post.date),
                dateStr = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
                category = post.category,
                contents = post.contents,
                indexOfExcerptHR = contents.indexOf(hrExcerpt);

            if (indexOfExcerptHR >= 0) {
                contents = props.excerpt ? contents.substr(0, indexOfExcerptHR) : contents.replace(hrExcerpt, '');
            }

            return _react2.default.createElement(
                'div',
                { className: 'post padded', id: post.uid ? 'post_' + post.uid : undefined },
                _react2.default.createElement(
                    'div',
                    { className: 'postHeader' + (post.image ? ' withImage' : '') },
                    _react2.default.createElement(
                        'header',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/blog/' + post.slug, prefetch: false },
                            post.title
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'postMetadata' },
                        _react2.default.createElement(
                            'span',
                            { className: 'postDate' },
                            dateStr
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'postCategories' },
                            _react2.default.createElement(
                                'span',
                                null,
                                ' | '
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/blog/' + category, prefetch: false },
                                    category
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'postContent' },
                    post.image && _react2.default.createElement('img', { className: 'postImg postImgFull postImgHero', src: post.image }),
                    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: contents } }),
                    props.excerpt && _react2.default.createElement(
                        'div',
                        { className: 'postFooter' },
                        _react2.default.createElement(
                            'div',
                            { className: 'readMore' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/blog/' + post.slug, prefetch: false },
                                indexOfExcerptHR >= 0 ? 'Continue Reading...' : 'Continue to comments...'
                            )
                        )
                    )
                ),
                !props.excerpt && _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { id: 'social' },
                        _react2.default.createElement('span', { id: 'shareFB', className: 'fb-share-button', 'data-href': 'https://www.moo.do/blog/' + post.slug, 'data-type': 'button' }),
                        _react2.default.createElement(
                            'a',
                            { id: 'shareTwitter', href: 'https://twitter.com/share', className: 'twitter-share-button', 'data-text': '#MooDo blog post: https://www.moo.do/blog/' + post.slug, 'data-count': 'none' },
                            'Tweet'
                        ),
                        _react2.default.createElement('span', { id: 'shareGoogle', className: 'g-plus', 'data-action': 'share', 'data-annotation': 'none' }),
                        _react2.default.createElement('div', { id: 'fb-root' })
                    ),
                    _react2.default.createElement('div', { id: 'disqus_thread', className: 'padded' })
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(function (props) {
    return _react2.default.createElement(Post, { post: props.post, excerpt: props.excerpt });
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.99f9b5b1.js.map