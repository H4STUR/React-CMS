"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Routes/Routes.js":
/*!*************************************!*\
  !*** ./components/Routes/Routes.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _SitesRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitesRoutes */ \"./components/Routes/SitesRoutes.js\");\n/* harmony import */ var _pages_frontend_sites_homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/frontend/sites/homePage */ \"./pages/frontend/sites/homePage.js\");\n\n\n\n//templates\n\nfunction BaseRoutes() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n                    index: true,\n                    element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_frontend_sites_homePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\Routes\\\\Routes.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SitesRoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\Routes\\\\Routes.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\Routes\\\\Routes.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\Routes\\\\Routes.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = BaseRoutes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes);\nvar _c;\n$RefreshReg$(_c, \"BaseRoutes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JvdXRlcy9Sb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZ0U7QUFDekI7QUFFdkMsV0FBVztBQUNnRDtBQUMzRCxTQUFTSyxhQUNUO0lBQ0kscUJBQ0EsOERBQUNMLDJEQUFhQTtrQkFDViw0RUFBQ0Msb0RBQU1BOzs4QkFFSCw4REFBQ0MsbURBQUtBO29CQUFDSSxLQUFLO29CQUFDQyx1QkFBUyw4REFBQ0gsc0VBQVFBOzs7Ozs7OEJBSS9CLDhEQUFDRCxvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7S0FmU0U7QUFpQlQsK0RBQWVKLG9EQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm91dGVzL1JvdXRlcy5qcz9mYTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2l0ZXNSb3V0ZXMgZnJvbSBcIi4vU2l0ZXNSb3V0ZXNcIlxyXG5cclxuLy90ZW1wbGF0ZXNcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuLi8uLi9wYWdlcy9mcm9udGVuZC9zaXRlcy9ob21lUGFnZVwiO1xyXG5mdW5jdGlvbiBCYXNlUm91dGVzKClcclxue1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgey8qIEJBU0UgQUNUSU9OUyAqL31cclxuICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgey8qIFVTRVJTIEFDVElPTlMgKi99XHJcblxyXG4gICAgICAgICAgICB7LyogU0lURVMgQUNUSU9OUyAqL31cclxuICAgICAgICAgICAgPFNpdGVzUm91dGVzIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlczsiXSwibmFtZXMiOlsiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiU2l0ZXNSb3V0ZXMiLCJIb21lUGFnZSIsIkJhc2VSb3V0ZXMiLCJpbmRleCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Routes/Routes.js\n"));

/***/ })

});