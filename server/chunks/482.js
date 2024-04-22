"use strict";
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 7482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/layout/index.jsx + 14 modules
var layout = __webpack_require__(4196);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8356);
// EXTERNAL MODULE: ./src/components/common/breadcrumb/breadcrumb.jsx
var breadcrumb = __webpack_require__(6740);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/blog/blog-sidebar.jsx
var blog_sidebar = __webpack_require__(2854);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(8315);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(2);
;// CONCATENATED MODULE: ./src/components/forms/blog-details-form.jsx





const BlogDetailsForm = ()=>{
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,external_formik_.useFormik)({
        initialValues: {
            name: "",
            email: "",
            number: "",
            msg: "",
            terms: false
        },
        validationSchema: validation_schema/* blogSchema */.gT,
        onSubmit: (values, { resetForm  })=>{
            console.log(values);
            resetForm();
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: values.name,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "name",
                                type: "text",
                                placeholder: "Your Name"
                            }),
                            touched.name && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                error: errors.name
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: values.email,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "email",
                                type: "email",
                                placeholder: "Your Email"
                            }),
                            touched.email && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                error: errors.email
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: values.number,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "number",
                                type: "text",
                                placeholder: "number"
                            }),
                            touched.number && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                error: errors.number
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "postbox__comment-input",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Website"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                value: values.msg,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "msg",
                                placeholder: "Enter your comment ..."
                            }),
                            touched.msg && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                error: errors.msg
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-xxl-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "postbox__comment-agree d-flex align-items-start mb-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "terms",
                                    value: values.terms,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    className: "e-check-input",
                                    type: "checkbox",
                                    id: "terms"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "e-check-label",
                                    htmlFor: "e-agree",
                                    children: "Save my name, email, and website in this browser for the next time I comment."
                                })
                            ]
                        }),
                        touched.terms && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                            error: errors.terms?.split("true,")[1]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "postbox__comment-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "tp-btn",
                            children: "Post comment"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_details_form = (BlogDetailsForm);

;// CONCATENATED MODULE: ./src/components/blog-details/blog-details-area.jsx





const BlogDetailsArea = ({ blog  })=>{
    const { author , date , views , title , description  } = blog || {};
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "postbox__area pt-120 pb-120",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-8 col-xl-8 col-lg-8 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "postbox__wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                        className: "postbox__item format-image transition-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "postbox__content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "postbox__meta",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-user-circle"
                                                                    }),
                                                                    author
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-clock"
                                                                    }),
                                                                    date
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-eye"
                                                                    }),
                                                                    " ",
                                                                    views,
                                                                    " views"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "postbox__title",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "postbox__text",
                                                    children: description
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "postbox__thumb2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row gx-50",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-xl-6",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/assets/img/blog-details/blog-big-4.webp",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-xl-6",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/assets/img/blog-details/blog-sm-5.webp",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "postbox__comment-form",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "postbox__comment-form-title",
                                                children: "Leave a Reply"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(blog_details_form, {})
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-4 col-xl-4 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar/* default */.Z, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const blog_details_area = (BlogDetailsArea);

;// CONCATENATED MODULE: ./src/components/blog-details/index.jsx






const BlogDetails = ({ blog  })=>{
    (0,external_react_.useEffect)(()=>{
        console.log("blog title new", blog);
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout/* HeaderFour */.T7, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                title: blog?.title,
                imgName: "about_us-min.webp"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blog_details_area, {
                blog: blog
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const blog_details = (BlogDetails);


/***/ })

};
;