"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\n\nfunction Home() {\n    const onFinish = (values)=>{\n        console.log(\"Success:\", values);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            color: \"rgba(0, 0, 0, 0.88)\",\n                            marginBottom: 40,\n                            fontFamily: \"sans-serif\"\n                        },\n                        children: \"Welcome toJoin Mudassir dev...!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                        name: \"basic\",\n                        labelCol: {\n                            span: 8\n                        },\n                        wrapperCol: {\n                            span: 16\n                        },\n                        initialValues: {\n                            remember: true\n                        },\n                        onFinish: onFinish,\n                        onFinishFailed: onFinishFailed,\n                        autoComplete: \"off\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {\n                                label: \"Username\",\n                                name: \"username\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your username!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0, false, {\n                                    fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {\n                                label: \"Password\",\n                                name: \"password\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your password!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Password, {}, void 0, false, {\n                                    fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {\n                                name: \"remember\",\n                                valuePropName: \"checked\",\n                                wrapperCol: {\n                                    offset: 8,\n                                    span: 16\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                                    children: \"Remember me\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {\n                                wrapperCol: {\n                                    offset: 8,\n                                    span: 16\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"primary\",\n                                    htmlType: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mudassir/Documents/git-hub/google-onetap-auth2/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNrQjtBQUNNO0FBR3RDLFNBQVNNLE9BQU87SUFDN0IsTUFBTUMsV0FBVyxDQUFDQyxTQUFnQjtRQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlGO0lBQzFCO0lBRUEsTUFBTUcsaUJBQWlCLENBQUNDLFlBQW1CO1FBQ3pDSCxRQUFRQyxHQUFHLENBQUMsV0FBV0U7SUFDekI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNaLGtEQUFJQTs7a0NBQ0gsOERBQUNhO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXcEIscUVBQVc7O2tDQUMxQiw4REFBQ3FCO3dCQUNDQyxPQUFPOzRCQUNMQyxPQUFPOzRCQUNQQyxjQUFjOzRCQUNkQyxZQUFZO3dCQUNkO2tDQUNEOzs7Ozs7a0NBR0QsOERBQUN0QixzQ0FBSUE7d0JBQ0hXLE1BQUs7d0JBQ0xZLFVBQVU7NEJBQUVDLE1BQU07d0JBQUU7d0JBQ3BCQyxZQUFZOzRCQUFFRCxNQUFNO3dCQUFHO3dCQUN2QkUsZUFBZTs0QkFBRUMsVUFBVSxJQUFJO3dCQUFDO3dCQUNoQ3hCLFVBQVVBO3dCQUNWSSxnQkFBZ0JBO3dCQUNoQnFCLGNBQWE7OzBDQUViLDhEQUFDNUIsMkNBQVM7Z0NBQ1I4QixPQUFNO2dDQUNObkIsTUFBSztnQ0FDTG9CLE9BQU87b0NBQUM7d0NBQUVDLFVBQVUsSUFBSTt3Q0FBRUMsU0FBUztvQ0FBOEI7aUNBQUU7MENBRW5FLDRFQUFDaEMsdUNBQUtBOzs7Ozs7Ozs7OzBDQUdSLDhEQUFDRCwyQ0FBUztnQ0FDUjhCLE9BQU07Z0NBQ05uQixNQUFLO2dDQUNMb0IsT0FBTztvQ0FBQzt3Q0FBRUMsVUFBVSxJQUFJO3dDQUFFQyxTQUFTO29DQUE4QjtpQ0FBRTswQ0FFbkUsNEVBQUNoQyxnREFBYzs7Ozs7Ozs7OzswQ0FHakIsOERBQUNELDJDQUFTO2dDQUNSVyxNQUFLO2dDQUNMd0IsZUFBYztnQ0FDZFYsWUFBWTtvQ0FBRVcsUUFBUTtvQ0FBR1osTUFBTTtnQ0FBRzswQ0FFbEMsNEVBQUN6QiwwQ0FBUUE7OENBQUM7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDQywyQ0FBUztnQ0FBQ3lCLFlBQVk7b0NBQUVXLFFBQVE7b0NBQUdaLE1BQU07Z0NBQUc7MENBQzNDLDRFQUFDMUIsd0NBQU1BO29DQUFDdUMsTUFBSztvQ0FBVUMsVUFBUzs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRCxDQUFDO0tBdEV1QnBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHNvcnRBbmREZWR1cGxpY2F0ZURpYWdub3N0aWNzIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlcyk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44OClcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgV2VsY29tZSB0b0pvaW4gTXVkYXNzaXIgZGV2Li4uIVxuICAgICAgICA8L2gyPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTYgfX1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XG4gICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIVwiIH1dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIVwiIH1dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcbiAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICA8Rm9ybS5JdGVtIHdyYXBwZXJDb2w9e3sgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiSG9tZSIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMiIsInN0eWxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsImluaXRpYWxWYWx1ZXMiLCJyZW1lbWJlciIsImF1dG9Db21wbGV0ZSIsIkl0ZW0iLCJsYWJlbCIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiUGFzc3dvcmQiLCJ2YWx1ZVByb3BOYW1lIiwib2Zmc2V0IiwidHlwZSIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});