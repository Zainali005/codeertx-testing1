"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 6065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_details)
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
;// CONCATENATED MODULE: ./src/components/service-details/accordion-area.jsx


const accordion_items = [
    {
        id: "one",
        show: true,
        title: "Is my data safe?",
        desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
    },
    {
        id: "two",
        title: "How does the 30-day free software trial work?",
        desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
    },
    {
        id: "three",
        title: "What happens after my free trial?",
        desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
    },
    {
        id: "four",
        title: "What makes LessAccounting better than the rest?",
        desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
    },
    {
        id: "five",
        title: "Is my data safe?",
        desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
    }, 
];
const AccordionArea = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "sd-accordio-area grey-bg pt-130 pb-130",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-7",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "tp-title-sm mb-90",
                                children: "Solutions: all your questions answered"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-custom-accordio",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion",
                                    id: "accordionExample",
                                    children: accordion_items.map((item, i)=>{
                                        const { id , show , title , desc  } = item;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `accordion-items ${show ? "faq-accordio-border" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "accordion-header",
                                                    id: `heading-${id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: `accordion-buttons ${show ? "" : "collapsed"}`,
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": `#collapse-${id}`,
                                                        "aria-expanded": show ? "true" : "false",
                                                        "aria-controls": `collapse-${id}`,
                                                        children: title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: `collapse-${id}`,
                                                    className: `accordion-collapse collapse ${show ? "show" : ""}`,
                                                    "aria-labelledby": `heading-${id}`,
                                                    "data-bs-parent": "#accordionExample",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "accordion-body",
                                                        children: desc
                                                    })
                                                })
                                            ]
                                        }, id);
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const accordion_area = (AccordionArea);

;// CONCATENATED MODULE: ./src/components/service-details/service-details-area.jsx


const ServiceDetailsArea = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "service-details-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row service-pt-pb",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sd-service-details",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "tp-title-sm service-details-space",
                                            children: "Find the best solution for every stage of your business development"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                "Schedule a free expert session ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fal fa-arrow-right"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sd-service-details-paragraph",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pb-15",
                                            children: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pb-10",
                                            children: "Design services range from research and product review to ideation, UX design, and user testing."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sd-big-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/service/service-icon-10.1.webp",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sd-service-details",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "tp-title-sm service-details-space",
                                        children: "Design process based on best practices and methodologies that deliver"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sd-service-details-paragraph",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pb-15",
                                            children: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Design services range from research and product review to ideation, UX design, and user testing."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_details_area = (ServiceDetailsArea);

;// CONCATENATED MODULE: ./src/components/service-details/index.jsx







const ServiceDetails = ({ service  })=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                title: service?.title ? service?.title : "Service Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(service_details_area, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(accordion_area, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const service_details = (ServiceDetails);


/***/ }),

/***/ 8356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ animationCreate)
/* harmony export */ });
const animationCreate = ()=>{
    if (false) {}
    new WOW.WOW({
        live: false
    }).init();
};


/***/ })

};
;