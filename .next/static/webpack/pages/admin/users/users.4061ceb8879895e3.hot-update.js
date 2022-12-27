"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/users/users",{

/***/ "./pages/admin/users/users.js":
/*!************************************!*\
  !*** ./pages/admin/users/users.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import InfiniteScroll from 'react-infinite-scroll-component';\n\nconst { Content , Sider  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nfunction Users() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUsers();\n    }, []);\n    function getUsers() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://flyboost.agares.uk/database/\").then(function(response) {\n            console.log(response.data);\n            setUsers(response.data);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" All Users\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"#\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Role\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: users.map((user, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: user.id\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: user.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: user.email\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: user.privilege\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                children: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, key, true, {\n                                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi91c2Vycy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUE4QjtBQUNKO0FBQ2tCO0FBQzBCO0FBQ3RFLGdFQUFnRTtBQUVDO0FBRWpFLE1BQU0sRUFBRVcsUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FBR1osd0NBQU1BO0FBRWpDLFNBQVNhLFFBQ1Q7O0lBQ0ksTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDLElBQU07UUFDWmM7SUFDSixHQUFHLEVBQUU7SUFFTCxTQUFTQSxXQUNUO1FBQ0lmLGlEQUFTLENBQUNpQixzQ0FBa0IsRUFBRUcsSUFBSSxDQUFDLFNBQVNDLFFBQVEsRUFDcEQ7WUFDR0MsUUFBUUMsR0FBRyxDQUFDRixTQUFTRyxJQUFJO1lBQ3pCVixTQUFTTyxTQUFTRyxJQUFJO1FBQ3pCO0lBQ0o7SUFJQSxxQkFDQSw4REFBQ2Ysc0VBQVdBO2tCQUNSLDRFQUFDZ0I7OzhCQUNHLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNSLDhEQUFDQzs7c0NBQ0csOERBQUNDO3NDQUNHLDRFQUFDQzs7a0RBQ0csOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJWiw4REFBQ0M7c0NBQ0lsQixNQUFNbUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUNsQiw4REFBQ0w7O3NEQUNHLDhEQUFDTTtzREFBSUYsS0FBS0csRUFBRTs7Ozs7O3NEQUNaLDhEQUFDRDtzREFBSUYsS0FBS0ksSUFBSTs7Ozs7O3NEQUNkLDhEQUFDRjtzREFBSUYsS0FBS0ssS0FBSzs7Ozs7O3NEQUNmLDhEQUFDSDtzREFBSUYsS0FBS00sU0FBUzs7Ozs7O3NEQUNuQiw4REFBQ0o7c0RBQ0csNEVBQUMzQix3Q0FBTUE7MERBQUM7Ozs7Ozs7Ozs7OzttQ0FOUDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnpCO0dBdkRTdEI7S0FBQUE7QUF5RFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdXNlcnMvdXNlcnMuanM/OTNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRW1wdHksIEF2YXRhciwgRGl2aWRlciwgTGlzdCwgU2tlbGV0b24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG4vLyBpbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5mdW5jdGlvbiBVc2VycygpXHJcbntcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVc2VycygpXHJcbiAgICB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlNFUlZFUikudGhlbihmdW5jdGlvbihyZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPiBBbGwgVXNlcnM8L2gxPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlciwga2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5wcml2aWxlZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+IDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB7LyogPEVtcHR5IGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfSBzdHlsZT17eyBcIm1hcmdpblRvcFwiOiBcIjIwMHB4XCJ9fS8+ICovfVxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICAgICk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sIm5hbWVzIjpbIkxheW91dCIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFbXB0eSIsIkF2YXRhciIsIkRpdmlkZXIiLCJMaXN0IiwiU2tlbGV0b24iLCJCdXR0b24iLCJBZG1pbkxheW91dCIsIkNvbnRlbnQiLCJTaWRlciIsIlVzZXJzIiwidXNlcnMiLCJzZXRVc2VycyIsImdldFVzZXJzIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlNFUlZFUiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGl2IiwiaDEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidXNlciIsImtleSIsInRkIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwcml2aWxlZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/users/users.js\n"));

/***/ })

});