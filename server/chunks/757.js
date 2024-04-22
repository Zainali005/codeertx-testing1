"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 6757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _utils_validation_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8315);
/* harmony import */ var _error_msg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ContactForm = ()=>{
    // user
    // const { user } = useSelector(state => state.auth);
    // console.log(user)
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: _utils_validation_schema__WEBPACK_IMPORTED_MODULE_5__/* .contactSchema */ .OD,
        onSubmit: (values, { resetForm  })=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(`${values.name} your message sent successfully`, {
                position: "top-left"
            });
            resetForm();
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "row",
        id: "contact-form",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "tp-contact-big-title",
                    children: "Let’s Talk..."
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-6 mb-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: "name",
                        type: "text",
                        placeholder: "First Name"
                    }),
                    touched.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        error: errors.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-6 mb-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: "name",
                        type: "text",
                        placeholder: "Last Name"
                    }),
                    touched.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        error: errors.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-12 mb-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: "email",
                        type: "email",
                        placeholder: "Enter your Mail"
                    }),
                    touched.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        error: errors.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-12 mb-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        value: values.msg,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: "msg",
                        placeholder: "Enter your Massage"
                    }),
                    touched.msg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        error: errors.msg
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "tp-btn",
                    children: "Send Massage"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;