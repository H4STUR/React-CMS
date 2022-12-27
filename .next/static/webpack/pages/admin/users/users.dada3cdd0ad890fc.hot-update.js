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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import PropTypes from 'prop-types';\n// import InfiniteScroll from 'react-infinite-scroll-component';\n\nconst { Content , Sider  } = antd__WEBPACK_IMPORTED_MODULE_4__.Layout;\nconst PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\nfunction Users() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUsers();\n    }, []);\n    function getUsers() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://flyboost.agares.uk/database/\").then(function(response) {\n            console.log(response.data);\n            setUsers(response.data);\n        });\n    }\n    //DATA INSIDE TABLE\n    const Roles = [\n        {\n            id: 1,\n            role: \"Admin\",\n            color: \"green\"\n        },\n        {\n            id: 2,\n            role: \"Moderator\",\n            color: \"green\"\n        },\n        {\n            id: 3,\n            role: \"Booster\",\n            color: \"red\"\n        },\n        {\n            id: 4,\n            role: \"VIP Booster\",\n            color: \"gold\"\n        },\n        {\n            id: 5,\n            role: \"User\",\n            color: \"gray\"\n        }\n    ];\n    const columns = [\n        {\n            title: \"ID\",\n            dataIndex: \"id\",\n            key: \"id\",\n            render: (text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                    lineNumber: 53,\n                    columnNumber: 31\n                }, this)\n        },\n        {\n            title: \"Name\",\n            dataIndex: \"name\",\n            key: \"name\",\n            render: (text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                    lineNumber: 59,\n                    columnNumber: 29\n                }, this)\n        },\n        {\n            title: \"Email\",\n            dataIndex: \"email\",\n            key: \"email\"\n        },\n        {\n            title: \"Role\",\n            key: \"privilege\",\n            dataIndex: \"privilege\",\n            render: (_, param)=>/*#__PURE__*/ {\n                let { privilege  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: Roles.map((role)=>{\n                        console.log(role);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Tag, {\n                            color: role.color,\n                            children: role.role\n                        }, role.id, false, {\n                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                            lineNumber: 75,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false);\n            }\n        },\n        {\n            title: \"Action\",\n            key: \"action\",\n            render: (_, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Space, {\n                    size: \"middle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n        }\n    ];\n    const data = users.map((user)=>({\n            id: user.id,\n            name: user.name,\n            email: user.email,\n            privilege: [\n                user.privilege\n            ]\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            columns: columns,\n            dataSource: data,\n            className: \"dark-theme-table\"\n        }, void 0, false, {\n            fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n            lineNumber: 146,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\workpalce\\\\CMS\\\\pages\\\\admin\\\\users\\\\users.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi91c2Vycy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQytCO0FBQy9CO0FBQ2tCO0FBQ2Y7QUFDN0Isc0NBQXNDO0FBSXRDLGdFQUFnRTtBQUVDO0FBRWpFLE1BQU0sRUFBRVcsUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FBR1gsd0NBQU1BO0FBQ2pDLE1BQU1ZLFlBQVlDLG1CQUFPQSxDQUFDO0FBTTFCLFNBQVNDLFFBQ1Q7O0lBQ0ksTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDLElBQU07UUFDWlc7SUFDSixHQUFHLEVBQUU7SUFFTCxTQUFTQSxXQUNUO1FBQ0laLGlEQUFTLENBQUNjLHNDQUFrQixFQUFFRyxJQUFJLENBQUMsU0FBU0MsUUFBUSxFQUNwRDtZQUNHQyxRQUFRQyxHQUFHLENBQUNGLFNBQVNHLElBQUk7WUFDekJWLFNBQVNPLFNBQVNHLElBQUk7UUFDekI7SUFDSjtJQUVBLG1CQUFtQjtJQUVqQixNQUFNQyxRQUFRO1FBQ1o7WUFBQ0MsSUFBSTtZQUFHQyxNQUFNO1lBQVNDLE9BQU87UUFBTztRQUNyQztZQUFDRixJQUFJO1lBQUdDLE1BQU07WUFBYUMsT0FBTztRQUFPO1FBQ3pDO1lBQUNGLElBQUk7WUFBR0MsTUFBTTtZQUFXQyxPQUFPO1FBQUs7UUFDckM7WUFBQ0YsSUFBSTtZQUFHQyxNQUFNO1lBQWVDLE9BQU87UUFBTTtRQUMxQztZQUFDRixJQUFJO1lBQUdDLE1BQU07WUFBUUMsT0FBTztRQUFNO0tBQ2xDO0lBRUgsTUFBTUMsVUFBVTtRQUNkO1lBQ0lDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0MscUJBQVMsOERBQUNDOzhCQUFHRDs7Ozs7O1FBQ3hCO1FBQ0Y7WUFDRUosT0FBTztZQUNQQyxXQUFXO1lBQ1hDLEtBQUs7WUFDTEMsUUFBUSxDQUFDQyxxQkFBUyw4REFBQ0M7OEJBQUdEOzs7Ozs7UUFDeEI7UUFDQTtZQUNFSixPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsT0FBTztZQUNQRSxLQUFLO1lBQ0xELFdBQVc7WUFDWEUsUUFBUSxDQUFDRyx5QkFDUDtvQkFEVSxFQUFFQyxVQUFTLEVBQUU7dUJBQ3ZCOzhCQUNHWixNQUFNYSxHQUFHLENBQUMsQ0FBQ1gsT0FBUzt3QkFDbkJMLFFBQVFDLEdBQUcsQ0FBQ0k7d0JBQ1oscUJBQ0UsOERBQUMxQixxQ0FBR0E7NEJBQUMyQixPQUFPRCxLQUFLQyxLQUFLO3NDQUNuQkQsS0FBS0EsSUFBSTsyQkFEaUJBLEtBQUtELEVBQUU7Ozs7O29CQUl4Qzs7WUFDQTtRQUVOO1FBQ0E7WUFDRUksT0FBTztZQUNQRSxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0csR0FBR0csdUJBQ1YsOERBQUN4Qyx1Q0FBS0E7b0JBQUN5QyxNQUFLOztzQ0FDViw4REFBQ0w7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7Ozs7Ozs7OztRQUdUO0tBQ0Q7SUFFRCxNQUFNWCxPQUFPWCxNQUFNeUIsR0FBRyxDQUFDLENBQUNHLE9BQ3JCO1lBQ0dmLElBQUllLEtBQUtmLEVBQUU7WUFDWGdCLE1BQU1ELEtBQUtDLElBQUk7WUFDZkMsT0FBT0YsS0FBS0UsS0FBSztZQUNqQk4sV0FBVztnQkFBQ0ksS0FBS0osU0FBUzthQUFDO1FBQy9CO0lBR0oscUJBQ0EsOERBQUM5QixzRUFBV0E7a0JBeUNSLDRFQUFDUCx1Q0FBS0E7WUFBQzZCLFNBQVNBO1lBQVNlLFlBQVlwQjtZQUFNcUIsV0FBVTs7Ozs7Ozs7Ozs7QUFPN0Q7R0FwSVNqQztLQUFBQTtBQXNJVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi91c2Vycy91c2Vycy5qcz85M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCwgU3BhY2UsIFRhYmxlLCBUYWcsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcclxuXHJcblxyXG4gICAgXHJcbiAgXHJcblxyXG5mdW5jdGlvbiBVc2VycygpXHJcbntcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVc2VycygpXHJcbiAgICB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlNFUlZFUikudGhlbihmdW5jdGlvbihyZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9EQVRBIElOU0lERSBUQUJMRVxyXG5cclxuICAgICAgY29uc3QgUm9sZXMgPSBbIFxyXG4gICAgICAgIHtpZDogMSwgcm9sZTogXCJBZG1pblwiLCBjb2xvcjogXCJncmVlblwifSxcclxuICAgICAgICB7aWQ6IDIsIHJvbGU6IFwiTW9kZXJhdG9yXCIsIGNvbG9yOiBcImdyZWVuXCJ9LFxyXG4gICAgICAgIHtpZDogMywgcm9sZTogXCJCb29zdGVyXCIsIGNvbG9yOiBcInJlZFwifSxcclxuICAgICAgICB7aWQ6IDQsIHJvbGU6IFwiVklQIEJvb3N0ZXJcIiwgY29sb3I6IFwiZ29sZFwifSxcclxuICAgICAgICB7aWQ6IDUsIHJvbGU6IFwiVXNlclwiLCBjb2xvcjogXCJncmF5XCJ9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0lEJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnaWQnLFxyXG4gICAgICAgICAgICBrZXk6ICdpZCcsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQpID0+IDxhPnt0ZXh0fTwvYT4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICAgIGtleTogJ25hbWUnLFxyXG4gICAgICAgICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgICAgICAga2V5OiAnZW1haWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdSb2xlJyxcclxuICAgICAgICAgIGtleTogJ3ByaXZpbGVnZScsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICdwcml2aWxlZ2UnLFxyXG4gICAgICAgICAgcmVuZGVyOiAoXywgeyBwcml2aWxlZ2UgfSkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtSb2xlcy5tYXAoKHJvbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvbGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17cm9sZS5jb2xvcn0ga2V5PXtyb2xlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7cm9sZS5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgICAgICAgIGtleTogJ2FjdGlvbicsXHJcbiAgICAgICAgICByZW5kZXI6IChfLCByZWNvcmQpID0+IChcclxuICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICA8YT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgIDxhPkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHByaXZpbGVnZTogW3VzZXIucHJpdmlsZWdlXSxcclxuICAgICAgICB9KSk7XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgPGgxPiBBbGwgVXNlcnM8L2gxPlxyXG4gICAgICAgIDx0YWJsZSA+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSA+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiOiBcIkFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCI6IFwiTW9kZXJhdG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzXCI6IFwiQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNFwiOiBcIlZJUCBCb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1XCI6IFwiVXNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVt1c2VyLnByaXZpbGVnZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2B1c2VyLyR7dXNlci5pZH0vZWRpdGB9PkVESVQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5ERUxFVEU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBjbGFzc05hbWU9XCJkYXJrLXRoZW1lLXRhYmxlXCIgLz5cclxuXHJcblxyXG4gICAgICAgIHsvKiA8RW1wdHkgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9IHN0eWxlPXt7IFwibWFyZ2luVG9wXCI6IFwiMjAwcHhcIn19Lz4gKi99XHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJTcGFjZSIsIlRhYmxlIiwiVGFnIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBZG1pbkxheW91dCIsIkNvbnRlbnQiLCJTaWRlciIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJnZXRVc2VycyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVIiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlJvbGVzIiwiaWQiLCJyb2xlIiwiY29sb3IiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwiYSIsIl8iLCJwcml2aWxlZ2UiLCJtYXAiLCJyZWNvcmQiLCJzaXplIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImRhdGFTb3VyY2UiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/users/users.js\n"));

/***/ })

});