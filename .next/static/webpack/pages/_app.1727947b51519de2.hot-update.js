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

/***/ "./components/ToggleTheme.js":
/*!***********************************!*\
  !*** ./components/ToggleTheme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ToggleTheme = ()=>{\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/\".concat(theme, \".css\")\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\ToggleTheme.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>{\n                        setTheme(\"dark\");\n                        localStorage.setItem(\"theme\", \"dark\");\n                    },\n                    style: {\n                        fontSize: \"24px\"\n                    },\n                    children: \"\\uD83C\\uDF1A\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\ToggleTheme.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>{\n                        setTheme(\"light\");\n                        localStorage.setItem(\"theme\", \"light\");\n                    },\n                    style: {\n                        fontSize: \"24px\"\n                    },\n                    children: \"\\uD83C\\uDF1E\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\ToggleTheme.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\workpalce\\\\CMS\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ToggleTheme, \"MdZKBHIsk7njl4oTUEJB8i+KqJ0=\");\n_c = ToggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleTheme);\nvar _c;\n$RefreshReg$(_c, \"ToggleTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ2U7QUFDbkI7QUFFN0IsTUFBTUcsY0FBYyxJQUNwQjs7SUFDSSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsaURBQVVBLENBQUNDLHdEQUFZQTtJQUVqRCxxQkFBTTs7MEJBQ0YsOERBQUNDLGtEQUFJQTswQkFDRCw0RUFBQ0k7b0JBQUtDLEtBQUk7b0JBQWFDLE1BQU0sUUFBYyxPQUFOSixPQUFNOzs7Ozs7Ozs7OzswQkFFL0MsOERBQUNLOzBCQUNJTCxVQUFVLHdCQUNQLDhEQUFDTTtvQkFBS0MsU0FBUyxJQUNYO3dCQUNJTixTQUFTO3dCQUNUTyxhQUFhQyxPQUFPLENBQUMsU0FBUztvQkFDbEM7b0JBQ0pDLE9BQU87d0JBQUVDLFVBQVU7b0JBQU87OEJBQUc7Ozs7OzhDQUU3Qiw4REFBQ0w7b0JBQUtDLFNBQVMsSUFDWDt3QkFDSU4sU0FBUzt3QkFDVE8sYUFBYUMsT0FBTyxDQUFDLFNBQVM7b0JBQ2xDO29CQUFHQyxPQUFPO3dCQUFFQyxVQUFVO29CQUFPOzhCQUFHOzs7Ozs2QkFDdkM7Ozs7Ozs7O0FBS2I7R0EzQk1aO0tBQUFBO0FBNkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9nZ2xlVGhlbWUuanM/MzQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBUb2dnbGVUaGVtZSA9ICgpID0+XHJcbntcclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybjw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2Nzcy8ke3RoZW1lfS5jc3NgfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fT7wn4yaPC9zcGFuPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcImxpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiIH19PvCfjJ48L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlVGhlbWU7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJIZWFkIiwiVG9nZ2xlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJzcGFuIiwib25DbGljayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHlsZSIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n"));

/***/ })

});