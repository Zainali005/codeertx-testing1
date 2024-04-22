"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 5258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Calendaly() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
        src: "https://calendly.com/xecutors/30min",
        title: "Book A Free Call"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendaly);


/***/ }),

/***/ 7569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = ({ pageTitle , font  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "CodeErtz - Evolve ,  Bit By Bit"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "Unlock the potential of your startup with Xecutors subscription-based digital solutions and gain access to opportunities for angel investment."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                }),
                font && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    href: font,
                    rel: "stylesheet"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: "/favicon.png"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 4196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yD": () => (/* reexport */ footer_3),
  "T7": () => (/* reexport */ header_4),
  "im": () => (/* reexport */ wrapper)
});

// UNUSED EXPORTS: Footer, FooterFive, FooterFour, FooterTwo, SocialLinks

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/layout/wrapper.jsx


const Wrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const wrapper = (Wrapper);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/svg/index.js + 23 modules
var svg = __webpack_require__(7523);
;// CONCATENATED MODULE: ./src/layout/footers/footer.jsx




const footer_contents = {
    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "More than 10 years in the game and ",
            "we're",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            " just getting started.\uD83E\uDD1D"
        ]
    }),
    btn_text: "Available for new Project",
    copyRight_text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Creative Agency , All Right Receved."
        ]
    }),
    conditions: [
        "Support",
        "Privacy policy",
        "Terms and conditions"
    ],
    logo: "/assets/img/copyright/copyright-logo.webp",
    social_links: [
        "fab fa-linkedin-in",
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-youtube", 
    ]
};
const { btn_text , conditions , copyRight_text , logo , social_links , title  } = footer_contents;
const Footer = ()=>{
    return /*#__PURE__*/ _jsxs("footer", {
        className: "p-relative",
        children: [
            /*#__PURE__*/ _jsx("button", {
                className: "scrollTop d-none d-md-block",
                "data-target": "html",
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "tp-backto-top",
                        children: /*#__PURE__*/ _jsx(UpArrow, {})
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-clip-shape",
                children: /*#__PURE__*/ _jsx(ClipPath, {})
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tp-clip-height-one"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tp-clip-height-two"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tp-footer-area tp-footer-space black-bg p-relative fix pt-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-footer-border-shape d-none"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-footer-border-shape-two"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "circle-animation footer-animation d-none d-md-block",
                        children: /*#__PURE__*/ _jsx("span", {
                            className: "tp-circle-3"
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "tp-footer-widget wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-7 col-lg-7 col-md-7 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-top",
                                            children: /*#__PURE__*/ _jsx("h5", {
                                                className: "tp-footer-title",
                                                children: title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-5 col-lg-5 col-md-5 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-button text-start text-md-end",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/contact",
                                                children: /*#__PURE__*/ _jsxs("a", {
                                                    className: "tp-btn",
                                                    children: [
                                                        btn_text,
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "far fa-arrow-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-copyright-area pb-90 wow tpfadeUp",
                        "data-wow-duration": ".5s",
                        "data-wow-delay": ".7s",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "tp-copyright-box align-items-center",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-5 col-lg-5 col-md-5 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-text z-index-1",
                                                    children: /*#__PURE__*/ _jsx("p", {
                                                        className: "m-0",
                                                        children: copyRight_text
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-7 col-lg-7 col-md-7 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-right text-md-end text-start",
                                                    children: conditions.map((c, i)=>/*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: c
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "tp-copyright-logo-box",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-4 col-lg-4 col-md-4 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-logo mt-35",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: logo,
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-8 col-lg-8 col-md-8 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-social text-md-end mt-25",
                                                    children: social_links.map((s, i)=>/*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: s
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ./src/layout/footers/footer-2.jsx



const footer_2_footer_contents = {
    shapes: [
        {
            num: "one",
            img: "/assets/img/creative/creative-hand.webp"
        },
        {
            num: "two",
            img: "/assets/img/service/service-1.webp"
        }, 
    ],
    title: "Let’s build something together",
    text: "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency",
    btn_text: "Contact us",
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Personal Portfolio , All Right Received."
        ]
    }),
    copy_right_menu: [
        "Case Studies",
        "Pricing Plan"
    ],
    social_links: [
        "fab fa-linkedin-in",
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-youtube"
    ],
    social_links: [
        {
            icon: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/"
        },
        {
            icon: "fab fa-facebook-f",
            link: "http://facebook.com"
        },
        {
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/"
        },
        {
            icon: "fab fa-youtube",
            link: "https://www.youtube.com/"
        }, 
    ]
};
const { shapes , btn_text: footer_2_btn_text , copy_right_menu , copy_right_text , social_links: footer_2_social_links , text: footer_2_text , title: footer_2_title  } = footer_2_footer_contents;
const FooterTwo = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "p-relative",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tp-footer-area pt-120 p-relative",
            children: [
                shapes.map((s, i)=>/*#__PURE__*/ _jsx("div", {
                        className: `tp-footer-shape-${s.num}`,
                        children: /*#__PURE__*/ _jsx("img", {
                            src: s.img,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ _jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "col-xl-12 wow tpfadeUp",
                                "data-wow-duration": ".3s",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "footer-widget-info text-center",
                                    children: [
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: "tp-footer-title pb-15",
                                            children: footer_2_title
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: footer_2_text
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "/contact",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                className: "tp-btn mb-50",
                                                children: footer_2_btn_text
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "right-receved",
                                            children: copy_right_text
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "tp-copyright-bottom wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-12 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-copyright-logo-box text-md-center text-center text-lg-start mb-30",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "tp-copyright-logo",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/assets/img/logo/logo-blue.webp",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-cpoyright-menu text-md-start text-center text-lg-center mb-30",
                                            children: copy_right_menu.map((m, i)=>/*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: m
                                                }, i))
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30",
                                            children: footer_2_social_links.map((s, i)=>/*#__PURE__*/ _jsx("a", {
                                                    href: s.link,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: s.icon
                                                    })
                                                }, i))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_2 = ((/* unused pure expression or super */ null && (FooterTwo)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/layout/social-links.jsx


const social_links_social_links = [
    {
        link: "http://facebook.com",
        target: "_blank",
        icon: "fab fa-facebook-f"
    },
    {
        link: "http://twitter.com",
        target: "_blank",
        icon: "fab fa-figma"
    },
    {
        link: "https://www.skype.com/en/",
        target: "_blank",
        icon: "fas fa-paper-plane"
    }
];
const hero_socials = [
    {
        num: 1,
        link: "http://facebook.com",
        target: "_blank",
        icon: "fab fa-facebook-f social-icon-1",
        title: "Facebook"
    },
    {
        num: 3,
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "fab fa-youtube social-icon-3",
        title: "Youtube"
    },
    {
        num: 2,
        link: "http://twitter.com",
        target: "_blank",
        icon: "fab fa-twitter social-icon-2",
        title: "Twitter"
    }, 
];
const HeroSocials = ({ hide_title =false  })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: hero_socials.map((l, i)=>/*#__PURE__*/ _jsxs("a", {
                href: l.link,
                className: `social-icon-${l.num}`,
                target: l.target ? l.target : "",
                children: [
                    /*#__PURE__*/ _jsx("i", {
                        className: l.icon
                    }),
                    hide_title ? "" : l.title
                ]
            }, i))
    });
};
const social_links_SocialLinks = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "social-link-design",
        children: social_links_social_links.map((l, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: l.link,
                target: l.target ? l.target : "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: l.icon
                })
            }, i))
    });
};
/* harmony default export */ const layout_social_links = (social_links_SocialLinks);

;// CONCATENATED MODULE: ./src/layout/footers/component/copyright-area.jsx




const copyright_area_CopyrightArea = ({ copy_right_text ="" , conditions =[] , color =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tp-copyright-area",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copyright-border pt-40 wow tpfadeUp",
                "data-wow-duration": ".5s",
                "data-wow-delay": ".7s",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-copyright-left text-lg-start text-start text-md-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `${color ? "text-black" : ""}`,
                                    children: copy_right_text
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_social_links, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `tp-copyright-right ${color} text-start text-md-center text-lg-end`,
                                children: conditions.map((c, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: c.url,
                                        children: c.name
                                    }, i))
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const copyright_area = (copyright_area_CopyrightArea);

;// CONCATENATED MODULE: ./src/layout/footers/footer-3.jsx






const footer_3_footer_contents = {
    logo: "/assets/img/logo/head-logop.png",
    widget_desc: "",
    footer_widgets: [
        {
            w_class: "d-flex justify-content-lg-center",
            title: "Software Development",
            widget_lists: [
                ""
            ]
        },
        {
            padd: "pl-20",
            title: "Community",
            widget_lists: [
                "Home",
                "Services",
                "About us",
                "Blogs",
                "Contact us", 
            ]
        }, 
    ],
    subscribe_title: "Subscribe Newslatter",
    subscribe_text: "Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo",
    copy_right_text: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "\xa9 2023 Xecutors (Private) Limited. All rights reserved."
    }),
    conditions: [
        {
            name: "Privacy policy",
            url: "privacy-policy"
        },
        {
            name: "Terms of Use",
            url: "terms-conditions"
        },
        {
            name: "FAQs",
            url: "#faq-section"
        }, 
    ]
};
const { conditions: footer_3_conditions , copy_right_text: footer_3_copy_right_text , footer_widgets , logo: footer_3_logo , widget_desc , subscribe_text , subscribe_title ,  } = footer_3_footer_contents;
const FooterThree = ({ home_four =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "tp-footer-area black-bg pt-100 pb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-12 mobile-show",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "footer-logo",
                                        width: 250,
                                        height: 45,
                                        src: footer_3_logo,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-lg-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "footer-title",
                                            children: "Software Development"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Custom Software Development"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Web Application Development"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Mobile Application Development"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Front End Development"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Prototyping"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-lg-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "footer-title",
                                            children: "Cloud Services"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Cloud Computing"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Google Cloud Platform (GCP)"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Amazon Web Services (AWS)"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Microsoft Azure"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-lg-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "footer-title",
                                            children: "Emerging Technologies"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Artificial Intelligence (AI)"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "DevOps, Blockchain"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Internet of Things (IoT)"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Augmented Reality (AR)"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Virtual Reality (VR)"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-lg-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "footer-title",
                                            children: "Consultancy & Advisory"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "IT Strategy Consulting"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Business Process Improvement"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Product Management"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Project Management"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12 col-lg-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tp-footer-subscribe",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Subscribe to stay tuned for new web design and latest updates. Let's do it!"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                            onSubmit: (e)=>e.preventDefault(),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    placeholder: "Enter your email Address"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "tp-btn",
                                                                    type: "submit",
                                                                    children: "Subscribe"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12 col-lg-6 mobile-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "footer-logo",
                                                    width: 200,
                                                    height: 90,
                                                    src: footer_3_logo,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(copyright_area, {
                        copy_right_text: footer_3_copy_right_text,
                        conditions: footer_3_conditions
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_3 = (FooterThree);
const InstagramItem = ({ img  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tp-footer-widget__tp-insta-img mb-15",
            children: [
                /*#__PURE__*/ _jsx("img", {
                    className: "w-100",
                    src: `/assets/img/footer/footer-${img}.webp`,
                    alt: ""
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "tp-footer-widget__tp-insta-img-icon",
                    children: /*#__PURE__*/ _jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ _jsx("i", {
                            className: "fab fa-instagram"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/hooks/use-sticky.js

const useSticky = ()=>{
    const { 0: headerSticky , 1: setHeaderSticky  } = (0,external_react_.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setHeaderSticky(true);
        } else {
            setHeaderSticky(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        headerSticky
    };
};
/* harmony default export */ const use_sticky = (useSticky);

;// CONCATENATED MODULE: ./src/layout/headers/menu-data.js
const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Why Us",
        link: "#whychoose"
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "Services",
        link: "#services"
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "Pricing",
        link: "#Package-Plan"
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Testimonials",
        link: "#testimonials"
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: false,
        title: "Case Studies",
        link: "#caseStudies"
    },
    {
        id: 6,
        mega_menu: false,
        has_dropdown: false,
        title: "FAQs",
        link: "#faq-section"
    }, 
];
/* harmony default export */ const headers_menu_data = (menu_data);

;// CONCATENATED MODULE: ./src/components/common/off-canvas/index.jsx




const sidebar_contents = {
    title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "Your digital vision, our execution"
    }),
    inst_imgs: [
        "/assets/img/offcanvas/insta-1.webp",
        "/assets/img/offcanvas/insta-2.webp",
        "/assets/img/offcanvas/insta-4.webp",
        "/assets/img/offcanvas/insta-4.webp", 
    ]
};
const { inst_imgs , title: off_canvas_title  } = sidebar_contents;
const Sidebar = ({ isOpen , setIsOpen  })=>{
    const { 0: navTitle , 1: setNavTitle  } = (0,external_react_.useState)("");
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tp-offcanvas-area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `tpoffcanvas ${isOpen ? "opened" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tpoffcanvas__logo2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/logo/head-logop.png",
                                        height: 90,
                                        width: 170,
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tpoffcanvas__close-btn",
                            onClick: ()=>setIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-btn",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fal fa-times-hexagon"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tpoffcanvas__content d-none d-sm-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: off_canvas_title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-menu d-lg-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mm-menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: headers_menu_data.map((menu, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: !menu.has_dropdown ? "" : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown",
                                            children: [
                                                menu.has_dropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    onClick: ()=>openMobileMenu(menu.title),
                                                    children: [
                                                        menu.title,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: navTitle === menu?.title ? "sub-menu active" : "sub-menu",
                                                    children: menu?.sub_menus?.map((sub, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: `${sub.link}`,
                                                                children: sub.title
                                                            })
                                                        }, i))
                                                }),
                                                !menu.has_dropdown && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: menu.link,
                                                    children: menu.title
                                                })
                                            ]
                                        }, i))
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "tpoffcanvas__contact",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Contact us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:8180012345678",
                                                    children: "+443301130300"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:Collaxmail@gmail.com",
                                                    children: "hello@xecutors.com "
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setIsOpen(false),
                className: `body-overlay ${isOpen ? "apply" : ""}`
            })
        ]
    });
};
/* harmony default export */ const off_canvas = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/headers/mobile-menu.jsx




const MobileMenu = ({ logo , bg , transparent =true  })=>{
    const { headerSticky  } = use_sticky();
    const [sidebarOpen, setSidebarOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "header-sticky-mobile",
                className: `tp-md-menu ${transparent ? "header-transparent" : ""} d-lg-none pt-40 pb-40 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tp-logo1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `/assets/img/logo/head-logop.png`,
                                            height: 70,
                                            width: 150,
                                            alt: ""
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bar text-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "tp-menu-bar",
                                        "aria-label": "bars",
                                        onClick: ()=>setSidebarOpen(true),
                                        type: "button",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fal fa-bars"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(off_canvas, {
                isOpen: sidebarOpen,
                setIsOpen: setSidebarOpen
            })
        ]
    });
};
/* harmony default export */ const mobile_menu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layout/headers/nav-menus.jsx




const NavMenus = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: headers_menu_data.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: menu.link,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: menu.title
                    })
                })
            }, i))
    });
};
/* harmony default export */ const nav_menus = (NavMenus);

// EXTERNAL MODULE: ./src/components/contact/calendaly.jsx
var calendaly = __webpack_require__(5258);
;// CONCATENATED MODULE: ./src/layout/headers/header-4.jsx








const HeaderFour = ()=>{
    const { headerSticky  } = use_sticky();
    const { 0: showCalendaly , 1: setShowCalendaly  } = (0,external_react_.useState)(false);
    const handleBookCall = ()=>{
        setShowCalendaly(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            showCalendaly && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "BookCallModal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "BookCallContainer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(calendaly/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "closeFrame",
                            onClick: ()=>setShowCalendaly(false),
                            children: " close"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-10 ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tp-logo text-start",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    width: 250,
                                                    height: 120,
                                                    src: "/assets/img/logo/head-logop.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tp-main-menu tp-menu-black text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "tp-header-left d-flex align-items-center justify-content-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tp-header-login login-color-black d-none d-xxl-block "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tp-header-yellow-button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "tp-btn",
                                                    onClick: handleBookCall,
                                                    children: "Book A Free Call"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu, {
                logo: "logo-blue.webp"
            })
        ]
    });
};
/* harmony default export */ const header_4 = (HeaderFour);

;// CONCATENATED MODULE: ./src/layout/footers/footer-4.jsx






const footer_4_footer_contents = {
    shapes: [
        "hero-shape-5.1.webp",
        "testimonial-shape-5.4.webp"
    ],
    logo: "/assets/img/logo/logo-blue.webp",
    widget_desc: "A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla",
    footer_widgets: [
        {
            w_class: "d-flex justify-content-lg-center",
            title: "Useful Links",
            widget_lists: [
                "Contact us",
                "How it Works",
                "Create",
                "Explore",
                "Terms & Services"
            ]
        },
        {
            padd: "pl-20",
            title: "Community",
            widget_lists: [
                "Help Center",
                "Partners",
                "Suggestions",
                "Blog",
                "Newsletters"
            ]
        }, 
    ],
    subscribe_title: "Subscribe Newslatter",
    subscribe_text: "Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo",
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "\xa9 Copyright \xa9",
            new Date().getFullYear(),
            " Collax. All Rights Reserved Copyright"
        ]
    }),
    conditions: [
        "Terms and conditions",
        "Privacy policy",
        "FAQs"
    ]
};
const { conditions: footer_4_conditions , copy_right_text: footer_4_copy_right_text , footer_widgets: footer_4_footer_widgets , logo: footer_4_logo , widget_desc: footer_4_widget_desc , subscribe_text: footer_4_subscribe_text , subscribe_title: footer_4_subscribe_title , shapes: footer_4_shapes  } = footer_4_footer_contents;
const FooterFour = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tp-footer-area pt-130 pb-30 p-relative",
            children: [
                footer_4_shapes.map((s, i)=>/*#__PURE__*/ _jsx("div", {
                        className: `bp-foooter-shape-${i + 1} d-none d-lg-block`,
                        children: /*#__PURE__*/ _jsx("img", {
                            src: `/assets/img/footer/${s}`,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row wow tpfadeUp",
                        "data-wow-duration": ".3s",
                        "data-wow-delay": ".5s",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-xl-3 col-lg-4 col-md-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "tp-footer-widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__logo mb-30",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: /*#__PURE__*/ _jsx(Image, {
                                                        width: 250,
                                                        height: 45,
                                                        src: footer_4_logo,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__text mb-30",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                children: footer_4_widget_desc
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__social-link tp-footer-widget__social-link-2 ",
                                            children: /*#__PURE__*/ _jsx(SocialLinks, {})
                                        })
                                    ]
                                })
                            }),
                            footer_4_footer_widgets.map((w, i)=>{
                                const { title , widget_lists , w_class , padd  } = w;
                                return /*#__PURE__*/ _jsx("div", {
                                    className: `col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ""}`,
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: `tp-footer-widget ${padd ? padd : ""}`,
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "tp-footer-widget__title pb-15",
                                                children: /*#__PURE__*/ _jsx("h3", {
                                                    className: "footer-title text-black",
                                                    children: title
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "tp-footer-widget__list",
                                                children: /*#__PURE__*/ _jsx("ul", {
                                                    children: widget_lists.map((l, i)=>/*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: l
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }, i);
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-xl-3 col-lg-4 col-md-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "tp-footer-widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__title pb-15",
                                            children: /*#__PURE__*/ _jsx("h3", {
                                                className: "footer-title text-black",
                                                children: footer_4_subscribe_title
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__text mb-55",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                children: footer_4_subscribe_text
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-widget__input tp-input-white",
                                            children: /*#__PURE__*/ _jsxs("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "text",
                                                        placeholder: "Enter Mail"
                                                    }),
                                                    /*#__PURE__*/ _jsx("button", {
                                                        type: "submit",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(CopyrightArea, {
                    copy_right_text: footer_4_copy_right_text,
                    conditions: footer_4_conditions,
                    color: "tp-copyright-color"
                })
            ]
        })
    });
};
/* harmony default export */ const footer_4 = ((/* unused pure expression or super */ null && (FooterFour)));

;// CONCATENATED MODULE: ./src/layout/footers/footer-5.jsx




const footer_5_footer_contents = {
    shapes: [
        "footer/testimonial-shape-5.4.webp",
        "footer/team-shape-5.3.webp"
    ],
    title: "Discover our collax inner system",
    sm_text: "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency",
    btn_text: "Contact us",
    copy_right: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Personal Portfolio , All Right Receved."
        ]
    }),
    logo: "/assets/img/logo/logo-white.webp"
};
const { shapes: footer_5_shapes , title: footer_5_title , sm_text , btn_text: footer_5_btn_text , copy_right , logo: footer_5_logo  } = footer_5_footer_contents;
const FooterFive = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tp-footer-area pt-120 p-relative black-bg p-relative",
            children: [
                footer_5_shapes.map((s, i)=>/*#__PURE__*/ _jsx("div", {
                        className: `bs-footer-shape-${i + 1} d-none d-lg-block`,
                        children: /*#__PURE__*/ _jsx("img", {
                            src: `/assets/img/${s}`,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ _jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "col-xl-12 wow tpfadeUp",
                                "data-wow-duration": ".3s",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "footer-widget-info bp-footer-widget-color text-center",
                                    children: [
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: "tp-footer-title text-white pb-15",
                                            children: footer_5_title
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: sm_text
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "tp-btn mb-50",
                                            href: "#",
                                            children: footer_5_btn_text
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "right-receved",
                                            children: copy_right
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "tp-copyright-bottom pb-90 wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-12 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-copyright-logo-box mb-30",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "tp-copyright-logo text-center text-lg-start",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: footer_5_logo,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "tp-cpoyright-menu bp-cpoyright-menu text-md-start text-center text-lg-center mb-30",
                                            children: [
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Case Studies"
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Pricing Plan"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-copyright-social bp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30",
                                            children: /*#__PURE__*/ _jsx(SocialLinks, {})
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_5 = ((/* unused pure expression or super */ null && (FooterFive)));

;// CONCATENATED MODULE: ./src/layout/index.jsx











/***/ }),

/***/ 7523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wq": () => (/* reexport */ feature_1),
  "NS": () => (/* reexport */ feature_3),
  "kJ": () => (/* reexport */ feature_2),
  "XT": () => (/* reexport */ feature_5),
  "M6": () => (/* reexport */ feature_4),
  "tg": () => (/* reexport */ feature_6),
  "WB": () => (/* reexport */ highlight_2)
});

// UNUSED EXPORTS: AngelRight, ArrowBig, ArrowRight, Bulb, ClipPath, Code, Document, Highlight, HighlightFive, HighlightFour, HighlightSix, HighlightThree, Managed, PopupArrow, PopupArrowTwo, UpArrow

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/svg/up-arrow.js


const UpArrow = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "16",
        height: "58",
        viewBox: "0 0 16 58",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z",
            fill: "#292930"
        })
    });
};
/* harmony default export */ const up_arrow = ((/* unused pure expression or super */ null && (UpArrow)));

;// CONCATENATED MODULE: ./src/svg/clip-path.js


const ClipPath = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "1918",
        height: "98",
        viewBox: "0 0 1918 98",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M435.5 54L0 1V0L1917.5 1L1309 75.5C1263 82 1178.75 88.6471 1176.5 89C1116 98.5 958.667 98.3333 885.5 97C874.167 96.5 856.5 95.5 850.5 95.5C793.5 95.5 554.667 69.3333 435.5 54Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const clip_path = ((/* unused pure expression or super */ null && (ClipPath)));

;// CONCATENATED MODULE: ./src/svg/highlight.js


const Highlight = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "244",
        height: "8",
        viewBox: "0 0 244 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L244 8H0V0Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlight = ((/* unused pure expression or super */ null && (Highlight)));

;// CONCATENATED MODULE: ./src/svg/highlight-2.js


const HighlightTwo = ({ width ="266" , height ="12" , viewBox ="0 0 266 12"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: height,
        viewBox: viewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M0 0L266 12H0V0Z",
            fill: "var(--tp-theme-primary)"
        })
    });
};
/* harmony default export */ const highlight_2 = (HighlightTwo);

;// CONCATENATED MODULE: ./src/svg/feature-1.js


const FeatureOne = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                x: "0",
                y: "0",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m36.69,40.68c-2.57.02-1.79-.19-3.73,1.17-.51.36-1,.76-1.56,1.05-.55.29-1.12.36-1.72.3-.75-.08-1.45-.28-2.05-.8-.52-.44-1.1-.8-1.64-1.22-.38-.29-.79-.42-1.27-.41-.79.02-1.57,0-2.36,0-1.86.04-3.11-1.21-3.49-2.55-.21-.74-.47-1.46-.7-2.19-.14-.47-.4-.83-.81-1.12-.68-.46-1.33-.96-1.99-1.44-.55-.4-.95-.92-1.2-1.55-.28-.69-.32-1.39-.1-2.1.23-.73.43-1.47.71-2.19.21-.56.18-1.08,0-1.62-.25-.74-.49-1.49-.73-2.24-.54-1.68-.07-3.1,1.36-4.14.64-.46,1.27-.93,1.91-1.38.36-.25.6-.57.73-.99.25-.8.51-1.59.78-2.39.51-1.52,1.75-2.42,3.35-2.45.8-.01,1.61-.04,2.41,0,.68.04,1.18-.26,1.64-.67.61-.54,1.26-1.05,1.98-1.44,1.21-.66,2.42-.57,3.57.17.37.23.7.52,1.06.76.46.31.93.6,1.4.89.23.14.49.18.75.18.82,0,1.64,0,2.46,0,1.77,0,2.98.88,3.54,2.55.26.78.52,1.55.76,2.33.12.39.34.68.66.91.68.49,1.36.98,2.03,1.48,1.31.97,1.79,2.42,1.31,3.99-.25.8-.51,1.59-.78,2.38-.13.38-.13.73.01,1.12.26.72.47,1.46.71,2.19.18.55.22,1.11.23,1.69.02,1.06-.52,1.76-1.27,2.36-.67.53-1.37,1.03-2.07,1.51-.4.27-.64.63-.78,1.08-.24.76-.49,1.53-.74,2.29-.52,1.55-1.7,2.42-3.33,2.47-.4.01-.8,0-1.06,0Zm-11.8-12.41c-.09.53-.17.99-.25,1.46-.19,1.08-.37,2.17-.56,3.25-.08.46,0,.88.4,1.17.4.29.81.25,1.23.02.38-.21.77-.41,1.16-.61,1.03-.54,2.07-1.08,3.08-1.61.37.19.71.37,1.05.55,1.06.56,2.13,1.11,3.19,1.68.42.23.83.26,1.23-.03.38-.28.46-.68.39-1.12-.05-.29-.1-.58-.15-.88-.22-1.29-.44-2.58-.66-3.88.15-.14.29-.27.42-.41,1-.98,2-1.95,3-2.93.19-.19.38-.39.39-.66.02-.61-.43-1.13-1.05-1.23-1.38-.22-2.76-.44-4.14-.61-.42-.05-.64-.22-.81-.59-.61-1.27-1.24-2.53-1.86-3.8-.22-.45-.55-.71-1.07-.69-.48.02-.75.31-.95.71-.64,1.31-1.29,2.63-1.93,3.94-.11.22-.23.36-.49.4-.81.1-1.63.21-2.44.34-.73.12-1.48.18-2.2.41-.64.21-1.18.98-.5,1.68.16.16.32.32.49.48,1.01.99,2.02,1.98,3.04,2.97Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m34.14,43.34c.33-.24.6-.43.86-.64.17-.13.35-.13.54-.13.82,0,1.64.03,2.46-.02,2.29-.15,3.88-1.32,4.74-3.44.29-.72.51-1.48.74-2.23.1-.32.25-.56.54-.73.24-.14.45-.32.65-.46.16,0,.22.11.29.18,1.52,1.52,3.04,3.04,4.56,4.56.05.05.1.1.15.15.56.62.39,1.43-.39,1.75-1.06.44-2.14.84-3.21,1.26-.45.18-.9.37-1.37.52-.33.11-.5.3-.62.62-.54,1.43-1.16,2.84-1.65,4.29-.4,1.17-1.4,1.23-2.16.44-1.86-1.95-3.79-3.82-5.69-5.72-.12-.12-.26-.23-.44-.4Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m15.26,35.74c.34.25.65.47.96.69.14.1.17.25.22.4.23.71.47,1.42.7,2.13.73,2.26,2.83,3.7,5,3.7.66,0,1.33.03,1.99,0,.49-.03.89.09,1.24.41.13.12.27.21.4.31-.02.14-.11.19-.18.26-1.99,1.99-3.98,3.98-5.97,5.97-.22.22-.45.44-.79.48-.55.06-.94-.17-1.17-.75-.46-1.15-.91-2.3-1.36-3.45-.15-.37-.3-.74-.43-1.12-.1-.29-.27-.45-.56-.56-1.51-.58-3.02-1.18-4.53-1.76-.42-.16-.72-.42-.79-.88-.05-.35.06-.65.31-.91,1.63-1.63,3.26-3.26,4.94-4.94Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m26.55,31.17c.16-.98.3-1.96.48-2.94.09-.5-.05-.88-.41-1.22-.72-.69-1.43-1.39-2.14-2.08,0-.04,0-.08,0-.13.93-.14,1.86-.3,2.79-.41.65-.07,1.09-.34,1.36-.96.33-.77.73-1.5,1.1-2.25.06-.12.12-.23.22-.42.41.82.83,1.54,1.13,2.31.35.88.9,1.34,1.87,1.37.68.02,1.35.18,2.02.28.17.03.34.07.39.08-.65.7-1.31,1.44-2.02,2.14-.41.41-.58.83-.47,1.4.18.94.37,1.88.47,2.83l-.09.11c-.86-.45-1.74-.88-2.59-1.35-.49-.27-.94-.27-1.43,0-.85.47-1.73.9-2.59,1.35-.03-.04-.06-.08-.09-.12Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m24.47,24.8s0,.08,0,.13c-.05,0-.09-.03-.07-.09,0-.02.05-.03.08-.04Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m26.64,31.28s-.08.05-.12,0c-.03-.04-.01-.09.03-.12.03.04.06.08.09.12Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m33.34,31.17s.06.08.03.12c-.03.05-.08.01-.12,0,.03-.04.06-.08.09-.11Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_1 = (FeatureOne);

;// CONCATENATED MODULE: ./src/svg/feature-2.js


const FeatureTwo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                y: "0",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m33.18,23.76c-2.37-.72-4.71-1.42-7.04-2.12-1.96-.59-3.92-1.18-5.88-1.76-.3-.09-.55-.23-.6-.56-.06-.34.16-.54.42-.71,1.28-.84,2.55-1.69,3.83-2.53.14-.09.27-.18.39-.26.06-.21-.05-.37-.11-.53-.52-1.35-1.05-2.69-1.58-4.04-.05-.12-.09-.24-.14-.37-.09-.25-.07-.48.12-.68.21-.2.44-.25.72-.14.56.22,1.12.43,1.68.65,3.07,1.19,6.14,2.39,9.22,3.59.42.16.81.4,1.29.51.12-.45.24-.88.36-1.32.13-.47.25-.94.38-1.41.13-.44.42-.62.8-.51.34.09.51.4.4.82-.31,1.2-.71,2.37-.94,3.58-.35,1.89-.93,3.71-1.41,5.56-.92,3.49-1.88,6.97-2.82,10.45-.01.05-.01.1-.02.14.07.15.22.19.35.26,1.1.63,2.21,1.24,3.31,1.88.44.26.89.37,1.39.35,2.57-.06,5.15-.1,7.72-.18.67-.02,1.25.18,1.78.53.36.23.54.64.64,1.07.28,1.15.56,2.31.83,3.46.74,3.13,1.48,6.27,2.21,9.4.03.13.06.26.06.38,0,.32-.21.56-.52.61-.11.02-.23.01-.34.01-1.83,0-3.65,0-5.48,0-.64,0-.75-.07-.95-.68-.16-.49-.3-1-.49-1.48-1.14-2.87-1.93-5.85-3.03-8.77-.25-.07-.54-.02-.83-.03-.62,0-1.24,0-1.86,0-.67,0-1.28-.17-1.85-.53-1.23-.79-2.47-1.57-3.71-2.35-.1-.06-.17-.15-.36-.1-.21.78-.42,1.59-.64,2.43.75.69,1.08,1.53.82,2.54-.24.91-.86,1.47-1.78,1.76-.28.82-.58,1.66-.87,2.5-.47,1.37-.93,2.74-1.4,4.11-.04.12-.08.25-.14.36-.14.27-.43.4-.7.32-.3-.08-.49-.35-.46-.66.01-.14.07-.28.11-.42.67-1.97,1.34-3.94,2.01-5.9.02-.06.04-.12.06-.21h-8.19c-.14.19-.18.43-.27.65-.44,1.19-.92,2.36-1.31,3.57-.26.8-.49,1.6-.8,2.38-.21.53-.33.62-.9.62-2.12,0-4.24,0-6.36,0-.07,0-.13,0-.2,0-.56-.03-.82-.4-.62-.94.3-.79.6-1.58.95-2.35.59-1.3,1.1-2.64,1.63-3.96.41-1.02.7-2.08,1.16-3.08.16-.34.32-.68.59-.95.45-.46,1.01-.71,1.65-.75.05,0,.1,0,.15,0,4.47-.09,8.95-.13,13.43-.1.08,0,.16,0,.27,0,.24-.92.48-1.83.71-2.73-.67-.62-1.19-1.29-.88-2.23.29-.88.98-1.26,1.92-1.23.71-2.64,1.41-5.28,2.11-7.92Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m14.41,33.62c-.01-2.08,1.66-3.77,3.73-3.78,2.1,0,3.79,1.68,3.82,3.77.02,1.95-1.89,3.82-3.79,3.78-2.07-.04-3.75-1.69-3.76-3.77Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m43.13,33.62c-2.08.01-3.79-1.69-3.8-3.78,0-2.06,1.69-3.75,3.76-3.76,2.08-.02,3.8,1.69,3.8,3.77,0,2.06-1.7,3.76-3.76,3.77Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_2 = (FeatureTwo);

;// CONCATENATED MODULE: ./src/svg/feature-3.js


const FeatureThree = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m49.91,25.79c-.16-.42-.43-.65-.88-.65-.44,0-.71.25-.87.65.02-.27,0-.52,0-.77,0-3.95,0-7.9,0-11.85,0-.23,0-.45-.08-.67-.15-.41-.5-.68-.93-.7-.14,0-.28,0-.42,0-2.63,0-5.26,0-7.89,0-.26,0-.52-.01-.78-.02-.1,0-.2,0-.28.04-.24.13-.49.12-.74.12-1.47,0-2.94,0-4.4,0-.48,0-.87.15-1.21.5-2.82,2.84-5.65,5.66-8.48,8.49-.12.12-.23.23-.29.39-.04.1-.15.19-.23.27-3.41,3.41-6.82,6.82-10.23,10.23-.11.11-.23.22-.33.35-.24.29-.25.55,0,.82.31.34.65.67.97,1,.45.45.9.91,1.36,1.36.06.06.11.13.21.12.06,0,.09.04.13.08,4.15,4.15,8.3,8.31,12.45,12.46.1.1.2.19.3.27.24.19.51.18.75-.01.44-.37.83-.8,1.24-1.21,3.16-3.16,6.32-6.32,9.48-9.47.13-.13.15-.3.27-.42,2.89-2.88,5.77-5.77,8.66-8.65.32-.32.47-.68.47-1.12,0-.41,0-.82,0-1.22,0-.14.05-.19.19-.18.49.02.97-.01,1.46.02.07,0,.14,0,.13.1-.05.69.02,1.38-.14,2.06-.14.61-.45,1.12-.89,1.57-2.88,2.87-5.76,5.75-8.64,8.63-.08.08-.15.15-.17.27-.02.08-.08.13-.14.19-3.47,3.47-6.94,6.93-10.4,10.4-.82.83-2.15,1.06-3.2.47-.23-.13-.42-.29-.6-.47-1.75-1.75-3.5-3.5-5.25-5.26-1.65-1.66-3.31-3.31-4.97-4.96-.74-.74-1.48-1.47-2.22-2.21-.48-.24-.78-.68-1.16-1.04-.48-.46-.94-.93-1.41-1.4-.79-.8-.94-2.21-.26-3.24.11-.16.24-.3.38-.44,3.48-3.47,6.95-6.95,10.43-10.42.14-.14.18-.32.31-.46,1.88-1.87,3.75-3.75,5.63-5.62,1.02-1.02,2.05-2.04,3.06-3.07.59-.6,1.31-.88,2.12-.91,2.11-.08,4.22-.03,6.32-.03.12,0,.25,0,.37,0,.13,0,.25,0,.37-.09.09-.06.2-.06.31-.06,2.32,0,4.64,0,6.95,0,.54,0,1.04.18,1.49.47.79.51,1.32,1.22,1.51,2.15.06.32.04.64.04.97,0,.16,0,.33.09.47.05.09.05.2.05.3,0,3.53,0,7.06,0,10.59,0,.28,0,.55,0,.83Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m32.1,23.54c.97,0,1.82.35,2.6.91.37.27.37.27.69-.06.16-.17.33-.33.49-.5.06-.07.12-.1.2-.02.21.21.42.42.63.62.08.08.03.13-.02.18-.25.25-.5.51-.76.76-.08.08-.08.13-.01.22.62.82.96,1.73.9,2.77-.05.83-.33,1.58-.73,2.3-.06.11-.12.22-.18.33-.06.12-.12.1-.21.02-.33-.33-.66-.66-.99-.98-.09-.09-.07-.16-.01-.25.32-.53.5-1.1.47-1.73-.02-.48-.19-.9-.44-1.3-.07-.11-.11-.05-.17,0-.57.57-1.15,1.14-1.72,1.72-.43.42-.85.85-1.28,1.27-.12.12-.17.28-.24.43-.04.08.03.14.06.2.25.46.54.89.76,1.37.28.62.47,1.27.45,1.95-.02,1.11-.48,2.01-1.31,2.73-.82.72-1.76,1.11-2.85,1.08-.9-.02-1.71-.35-2.46-.84-.19-.12-.37-.26-.55-.4-.1-.08-.15-.09-.25,0-.31.32-.63.62-.94.94-.1.1-.16.09-.25,0-.17-.19-.36-.36-.54-.54-.09-.08-.09-.15,0-.24.32-.31.62-.63.94-.94.1-.09.09-.15.01-.25-.5-.64-.88-1.34-1.07-2.14-.3-1.27,0-2.42.69-3.5.16-.24.33-.48.51-.7.07-.08.12-.08.19,0,.34.34.68.69,1.02,1.02.08.08.05.12,0,.19-.37.41-.65.87-.76,1.42-.19.94.06,1.79.57,2.58.08.13.15.07.23,0,.59-.58,1.17-1.17,1.76-1.75.59-.59,1.18-1.19,1.78-1.77.11-.11.09-.2.02-.31-.33-.55-.64-1.12-.87-1.73-.21-.52-.35-1.06-.33-1.64,0-.12.03-.25-.05-.36-.03-.05,0-.11.01-.16.07-.25.17-.49.31-.71.79-1.23,1.88-2.01,3.36-2.17.12-.01.24,0,.36,0Zm-1.35,10.06c0-.11,0-.23-.03-.34-.09-.6-.37-1.12-.65-1.65-.06-.1-.1-.11-.19-.02-1.13,1.14-2.26,2.27-3.4,3.41-.06.06-.08.1,0,.16.21.15.41.31.63.43.93.51,1.87.43,2.69-.24.56-.45.95-.99.93-1.75Zm1.38-8.39c-.9,0-1.95.8-2.17,1.68-.11.46-.03.9.13,1.33.1.27.2.54.37.78.13.18.16.18.3.03.06-.06.12-.12.18-.18.95-.95,1.89-1.9,2.84-2.85.1-.1.11-.16-.02-.24-.48-.34-1.01-.55-1.63-.55Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m42.07,21.34c-.79-.04-1.47-.31-2.07-.79-.68-.55-1.16-1.24-1.33-2.11-.19-.96.07-1.82.64-2.59.65-.86,1.5-1.38,2.59-1.49.5-.05.98.06,1.44.27,1.18.55,1.94,1.45,2.2,2.74.15.78-.05,1.5-.46,2.16-.58.93-1.4,1.54-2.49,1.76-.04,0-.09.01-.13.02-.13.01-.26.03-.37.04Zm.01-5.23c-.1,0-.19,0-.29.01-.71.04-1.25.53-1.39,1.23-.05.27-.04.54-.02.81.05.66.48,1.18,1.11,1.33.37.09.75.09,1.13.02.43-.09.77-.32.98-.71.22-.4.25-.83.2-1.27-.08-.63-.39-1.08-.99-1.31-.24-.09-.48-.11-.73-.11Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_3 = (FeatureThree);

;// CONCATENATED MODULE: ./src/svg/feature-4.js


const Featurefour = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                y: "0",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m14.7,31.1c-.82-.77-1.25-1.71-1.15-2.85.1-1.14.78-2.14,1.83-2.62.46-.21.95-.32,1.47-.31,5.51.07,11.02-.14,16.52-.1,3.2.03,6.4,0,9.6,0,.16,0,.37.11.49-.14.03-.07.18-.06.25.02.21.29.56.31.85.4.92.28,1.95,1.7,1.91,2.67-.03.64-.09,1.28-.36,1.84-.25.52-.76.86-1.26,1.17-.77.48-1.66.46-2.51.46-7.58.03-15.16,0-22.74.04-.95,0-1.9.06-2.85.1-.69.03-1.35-.14-1.89-.61,0-.16-.08-.13-.17-.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m24.82,39.43c-.75-.99-1.47-2.01-2.29-2.95-.02-.03-.05-.05-.07-.08-.54-.7-1.09-1.4-1.63-2.1-.02-.03-.05-.05-.07-.08-.17-.25-.33-.5-.5-.75,0-.06,0-.12,0-.18,1.46,0,2.93-.01,4.39-.01,4.88,0,9.77,0,14.65,0,.17,0,.35,0,.52.01.03.03.05.05.08.08-.8,1.32-1.9,2.42-2.77,3.68-.6.88-1.35,1.65-1.9,2.59-.29.5-.72.93-.98,1.48-.12.26-.12.51-.12.77-.01,1.37,0,2.74,0,4.11,0,.79-.21,1.5-.87,2.01-.39.3-.87.44-1.31.63-1.06.46-2.14.86-3.22,1.26-.97.36-2.2-.38-2.41-1.46-.05-.24-.06-.5-.06-.75,0-1.67-.05-3.34.02-5.01.05-1.1-.32-1.98-1.03-2.77-.12-.14-.24-.28-.36-.42-.02-.03-.05-.05-.07-.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m32.06,10.12c.34.28.77.33,1.16.47,1.27.47,2.42,1.13,3.44,2.05.85.77,1.57,1.61,2.13,2.61.46.83.76,1.7.93,2.61.17.87.38,1.75.31,2.66-.08.98-.26,1.93-.57,2.87-.06.17-.14.23-.3.22-1.23-.03-2.45.05-3.68-.04v-.14c-.05-.69-.31-1.33-.71-1.85-.55-.71-1.2-1.35-2.09-1.64-.33-.11-.65-.24-1-.46.82-.8,1.27-1.75,1.03-2.92-.15-.74-.62-1.3-1.24-1.7-1.25-.81-2.66-.5-3.54.42-.93.97-1.37,2.77.5,4.38-2.22.47-3.59,1.76-4.07,4.01-.07.07-.2.03-.32.03-1.05,0-2.11,0-3.16,0-.24,0-.36-.07-.43-.29-.46-1.36-.7-2.77-.55-4.2.21-1.98.89-3.78,2.14-5.37,1.59-2.01,3.64-3.23,6.13-3.71.77-.15,1.59-.23,2.41-.07.44.08.93.16,1.4.03.03,0,.06,0,.08,0Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m20.26,33.3c0,.06,0,.12,0,.18-.08-.02-.2,0-.17-.13.02-.1.11-.07.18-.05Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m14.7,31.1c.09-.05.17-.08.17.08-.07,0-.17.06-.17-.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m35.47,23.44v.14c-.06.04-.08-.02-.08-.05,0-.03.05-.06.08-.09Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m32.06,10.12s-.06,0-.08,0c.02-.02.05-.05.07-.07,0,.02,0,.05.01.07Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m39.91,33.38s-.05-.05-.08-.08c.07-.02.09,0,.08.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m20.75,34.23s.05.05.07.08c-.06.01-.09,0-.07-.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m22.45,36.4s.05.05.07.08c-.06.01-.09,0-.07-.08Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m24.82,39.43s.05.05.07.08c-.06.01-.09,0-.07-.08Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_4 = (Featurefour);

;// CONCATENATED MODULE: ./src/svg/feature-5.js


const Featurefive = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m10.03,31.21h5.86c-.03,3.1,0,6.19.11,9.29h6.94v-9.37h5.88v18.75c-6.23.08-12.48.14-18.79.1v-18.77Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m42.24,10.01c.08.04.15.08.23.12,1.2.7,2.4,1.4,3.6,2.11.15.09.29.17.46.27-.68,1.3-.72,2.6,0,3.87.73,1.28,1.88,1.9,3.35,1.98v5.15c-1.5.01-2.54.8-3.33,1.99-.85,1.28-.61,2.57.05,3.85-.15.09-.28.17-.41.25-1.36.79-2.72,1.57-4.1,2.36-.81-1.21-1.96-1.83-3.38-1.85-1.45-.01-2.57.66-3.38,1.93-1.51-.87-3.01-1.74-4.52-2.6,1.28-3.02-.17-5.52-3.39-5.78,0-.87,0-1.74,0-2.61s0-1.72,0-2.61c1.48-.07,2.65-.69,3.37-1.99.71-1.28.75-2.57-.07-3.86.76-.44,1.51-.87,2.26-1.31.74-.43,1.49-.86,2.22-1.28.13.04.16.15.21.23,1.57,2.24,4.82,2.25,6.39.01.11-.16.21-.27.42-.24Zm1.05,11.01c.04-2.51-2.03-4.64-4.52-4.71-2.71-.08-4.67,2.17-4.72,4.6-.05,2.52,2.02,4.68,4.54,4.72,2.72.04,4.61-2.04,4.69-4.61Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m38.17,36.96c-.05,2.36.17,4.67.05,7.02h-7v-6.96c2.3.1,4.6-.11,6.95-.06Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m19.43,28.81c-1.05-1.05-2.1-2.1-3.13-3.13.52-.52,1.06-1.06,1.62-1.62.46.49.94.99,1.43,1.51,1.53-1.4,2.79-2.93,4.22-4.25.55.56,1.09,1.1,1.64,1.65-1.91,1.93-3.79,3.95-5.77,5.84Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m40.53,39.28v-2.31h9.44v2.31h-9.44Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m40.49,41.67h9.48v2.22c-.6.11-8.2.19-9.36.09-.04-.76.04-1.53-.12-2.31Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m20.56,38.16h-2.31v-6.94h2.31v6.94Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m40.94,20.97c0,1.31-.97,2.31-2.23,2.31-1.27,0-2.3-1.05-2.3-2.32,0-1.12.92-2.32,2.23-2.3,1.28.02,2.31,1.04,2.31,2.31Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_5 = (Featurefive);

;// CONCATENATED MODULE: ./src/svg/feature-6.js


const Featuresix = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 60 60",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                class: "cls-2",
                fill: "#00adb5",
                width: "60",
                height: "60",
                rx: "6",
                ry: "6"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m49.65,21.02c-1.01,7.75-2.01,15.46-3.01,23.18h-6.65c0-.18,0-.33,0-.49,0-2.42,0-4.85,0-7.27,0-1.63-.91-2.56-2.53-2.62-.05,0-.11-.01-.19-.02,0-.13-.02-.25-.02-.37,0-1.02.02-2.05-.01-3.07-.1-3.42-2.58-6.34-6.03-7.03-4.12-.83-8.06,1.92-8.77,5.99-.17.96-.11,1.97-.14,2.96-.02.51,0,1.02,0,1.54-.18.05-.34.08-.49.13-1.02.32-1.68,1.22-1.68,2.35,0,2.48,0,4.96,0,7.44,0,.15,0,.29,0,.46h-9.6c.13-.63.26-1.25.39-1.86.72-3.4,1.44-6.81,2.16-10.21.47-2.2.94-4.4,1.41-6.6.3-1.41.61-2.82.9-4.24.04-.19.1-.28.31-.27.18.01.36,0,.55,0,11,0,22.01,0,33.01,0,.12,0,.24,0,.42,0Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m10.35,38.53V10.01c.16,0,.29,0,.42,0,2.82,0,5.64,0,8.46,0,.29,0,.49.09.69.28,1.57,1.45,3.15,2.89,4.72,4.34.24.23.5.32.83.32,6.92,0,13.83,0,20.75,0,.16,0,.31,0,.49,0v4.8c-.55,0-1.09,0-1.62,0-9.87,0-19.75,0-29.62,0-.19,0-.39,0-.58,0-.33.02-.56.19-.63.52-.46,2.17-.92,4.34-1.38,6.5-.48,2.26-.96,4.51-1.44,6.77-.34,1.6-.68,3.2-1.01,4.8,0,.04-.03.08-.08.21Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m30.04,35.14c2.46,0,4.91,0,7.37,0,.83,0,1.24.4,1.24,1.23,0,4.12,0,8.24,0,12.35,0,.89-.41,1.28-1.3,1.28-4.88,0-9.76,0-14.64,0-.87,0-1.28-.4-1.28-1.27,0-4.11-.01-8.21-.02-12.32,0-.9.39-1.28,1.29-1.29,2.45,0,4.89,0,7.34,0,0,0,0,0,0,0Zm-1.91,9.29c0,.49,0,.98,0,1.47,0,.45.13.85.41,1.2.52.65,1.35.9,2.11.63.78-.27,1.29-.97,1.3-1.82.01-.97,0-1.93.01-2.9,0-.17.09-.37.2-.5.41-.45.71-.94.84-1.53.3-1.36-.37-2.76-1.64-3.38-1.23-.6-2.75-.29-3.63.76-.91,1.08-1.04,2.7-.14,3.74.47.55.56,1.08.53,1.72-.01.2,0,.41,0,.61Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m23.56,33.78c0-.54-.01-1.06,0-1.58.02-1.03-.06-2.07.21-3.08.65-2.47,2.75-4.28,5.29-4.56,3.15-.34,6,1.67,6.69,4.76.14.63.13,1.3.15,1.95.02.7,0,1.41,0,2.11,0,.12-.01.24-.02.4h-12.33Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        class: "cls-1",
                        fill: "#222831",
                        d: "m29.49,44.15c0-.49-.02-.98,0-1.47.02-.45-.13-.78-.5-1.04-.52-.37-.7-.91-.62-1.53.09-.66.47-1.12,1.09-1.36.77-.28,1.66.04,2.04.72.42.76.28,1.64-.42,2.16-.37.28-.5.6-.49,1.05.02,1.07,0,2.14,0,3.2,0,.28-.12.49-.4.56-.26.07-.48-.01-.61-.25-.06-.1-.08-.24-.08-.36,0-.57,0-1.14,0-1.7,0,0,0,0,0,0Z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const feature_6 = (Featuresix);

;// CONCATENATED MODULE: ./src/svg/arrow-right.js


const ArrowRight = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "28",
        height: "12",
        viewBox: "0 0 28 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M27.5303 6.53033C27.8232 6.23744 27.8232 5.76256 27.5303 5.46967L22.7574 0.696699C22.4645 0.403806 21.9896 0.403806 21.6967 0.696699C21.4038 0.989593 21.4038 1.46447 21.6967 1.75736L25.9393 6L21.6967 10.2426C21.4038 10.5355 21.4038 11.0104 21.6967 11.3033C21.9896 11.5962 22.4645 11.5962 22.7574 11.3033L27.5303 6.53033ZM0 6.75H27V5.25H0V6.75Z",
            fill: "#292930"
        })
    });
};
/* harmony default export */ const arrow_right = ((/* unused pure expression or super */ null && (ArrowRight)));

;// CONCATENATED MODULE: ./src/svg/angel-right.js


const AngelRight = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "18",
        height: "33",
        viewBox: "0 0 18 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("line", {
                x1: "0.707107",
                y1: "1.18181",
                x2: "16.7071",
                y2: "17.1818",
                stroke: "black",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "1.07121",
                y1: "31.4041",
                x2: "15.2934",
                y2: "17.1819",
                stroke: "black",
                strokeWidth: "2"
            })
        ]
    });
};
/* harmony default export */ const angel_right = ((/* unused pure expression or super */ null && (AngelRight)));

;// CONCATENATED MODULE: ./src/svg/arrow-big.js


const ArrowBig = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M25.3852 0.53084H7.44061V0.532315V0.53418V0.536051V0.537926V0.539806V0.541691V0.543582V0.545477V0.547378V0.549283V0.551194V0.55311V0.555031V0.556957V0.558889V0.560825V0.562767V0.564714V0.566666V0.568623V0.570585V0.572553V0.574526V0.576504V0.578488V0.580477V0.582471V0.58447V0.586475V0.588485V0.5905V0.592521V0.594547V0.596578V0.598615V0.600657V0.602704V0.604757V0.606816V0.60888V0.610949V0.613024V0.615104V0.617189V0.619281V0.621377V0.623479V0.625587V0.6277V0.629819V0.631943V0.634073V0.636209V0.63835V0.640496V0.642648V0.644806V0.64697V4.4597H14.8103C15.4175 4.4597 16.1674 4.76381 16.3875 5.5239C16.7101 6.21923 16.5128 6.91869 16.025 7.40766L16.0235 7.4091L0.654518 22.6873C0.654327 22.6875 0.654137 22.6877 0.653946 22.6879C0.621716 22.7202 0.602236 22.74 0.585537 22.7589C0.570169 22.7764 0.563459 22.7863 0.560467 22.7913C0.558094 22.7952 0.557665 22.7967 0.557318 22.798C0.556917 22.7994 0.55463 22.8078 0.55463 22.827V22.9448L0.53964 22.9749L3.04575 25.4863C3.09814 25.4944 3.17092 25.5 3.25169 25.5C3.33341 25.5 3.40695 25.4943 3.45946 25.486L19.1312 10.1493C19.2831 9.99744 19.4547 9.86374 19.6637 9.77066C19.8759 9.67615 20.1007 9.63497 20.3436 9.63497L20.35 9.63497C20.4113 9.63494 20.5382 9.63487 20.672 9.65721C20.7704 9.67365 20.9236 9.70976 21.0678 9.80558C21.7858 10.0467 22.0732 10.7758 22.0732 11.3672V18.7536H25.5V0.607256L25.4232 0.530238C25.4107 0.530639 25.398 0.53084 25.3852 0.53084ZM0.47172 22.8716L0.471825 22.8718L0.47172 22.8716ZM3.38948 25.5544L3.39381 25.5502L3.38951 25.5545L3.38948 25.5544Z",
            stroke: "#292930"
        })
    });
};
/* harmony default export */ const arrow_big = ((/* unused pure expression or super */ null && (ArrowBig)));

;// CONCATENATED MODULE: ./src/svg/highlight-3.js


const HighlightThree = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "160",
        height: "11",
        viewBox: "0 0 160 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L160 11H0V0Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlight_3 = ((/* unused pure expression or super */ null && (HighlightThree)));

;// CONCATENATED MODULE: ./src/svg/document.js


const Document = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M22.9201 9.11169C22.8196 9.00949 22.6998 8.92831 22.5678 8.87286C22.4355 8.81732 22.2936 8.78872 22.1502 8.78872C22.0068 8.78872 21.8649 8.81732 21.7326 8.87286C21.6005 8.92835 21.4806 9.0096 21.38 9.1119C21.3799 9.11199 21.3798 9.11209 21.3797 9.11219L13.2476 17.2717L13.2281 17.2913L13.2214 17.3182L12.7524 19.2026L12.7121 19.3644L12.8738 19.3238L14.7499 18.8526L14.7768 18.8459L14.7964 18.8262L22.9197 10.6577C22.9198 10.6577 22.9198 10.6576 22.9199 10.6575C23.0218 10.5565 23.1027 10.4361 23.1579 10.3035C23.2131 10.1708 23.2415 10.0283 23.2415 9.88451C23.2415 9.74067 23.2131 9.59826 23.1579 9.46552C23.1027 9.33298 23.0219 9.2127 22.9201 9.11169ZM22.9201 9.11169C22.92 9.11154 22.9198 9.11141 22.9197 9.11127L22.8493 9.18228L22.9206 9.11219C22.9204 9.11202 22.9203 9.11186 22.9201 9.11169ZM15.1768 0.100017L15.1774 0.100013C15.2807 0.0994136 15.383 0.11929 15.4786 0.158513C15.5742 0.197727 15.6612 0.255516 15.7345 0.328588C15.7345 0.328604 15.7345 0.328619 15.7346 0.328635L19.2738 3.88363C19.2738 3.88364 19.2738 3.88364 19.2738 3.88365C19.3465 3.95734 19.4041 4.04475 19.4432 4.1409C19.4823 4.23705 19.5021 4.34002 19.5015 4.4439V4.44448V6.22227C19.5015 6.43164 19.4187 6.63234 19.2715 6.78026C19.1242 6.92815 18.9246 7.01116 18.7166 7.01116C18.5086 7.01116 18.309 6.92815 18.1617 6.78026C18.0145 6.63234 17.9317 6.43164 17.9317 6.22227V4.80893V4.76764L17.9025 4.73837L14.8849 1.70725L14.8556 1.6778H14.814H2.78764C2.52627 1.6778 2.2757 1.7821 2.09102 1.9676C1.90636 2.15309 1.8027 2.40457 1.8027 2.66669V22.2223C1.8027 22.4845 1.90636 22.736 2.09102 22.9214C2.2757 23.1069 2.52627 23.2112 2.78764 23.2112H16.9467C17.2081 23.2112 17.4587 23.1069 17.6433 22.9214C17.828 22.736 17.9317 22.4845 17.9317 22.2223V20.4446C17.9317 20.2352 18.0145 20.0345 18.1617 19.8866C18.309 19.7387 18.5086 19.6557 18.7166 19.6557C18.9246 19.6557 19.1242 19.7387 19.2715 19.8866C19.4187 20.0345 19.5015 20.2352 19.5015 20.4446V22.2223C19.5015 22.9032 19.2323 23.5561 18.7531 24.0374C18.2739 24.5187 17.6242 24.789 16.9467 24.789H2.78764C2.1102 24.789 1.46042 24.5187 0.981261 24.0374C0.502089 23.5561 0.232813 22.9032 0.232813 22.2223V2.66669C0.232813 1.98583 0.502089 1.33293 0.981262 0.85162C1.46042 0.370323 2.1102 0.100015 2.78764 0.100015L15.1768 0.100017ZM23.819 11.949H23.8652L15.7349 20.1156C15.7348 20.1157 15.7347 20.1158 15.7346 20.1159C15.6326 20.2166 15.5051 20.2874 15.366 20.3206L15.3649 20.3209L11.8251 21.2098L11.8251 21.2098L11.8222 21.2106C11.6896 21.2481 11.5495 21.2499 11.416 21.2157C11.2825 21.1816 11.1602 21.1127 11.0615 21.016C10.9628 20.9192 10.8912 20.798 10.8539 20.6646C10.8166 20.5311 10.8149 20.3902 10.849 20.2559L10.8492 20.2554L11.7341 16.6998L11.7344 16.6987C11.7675 16.5587 11.8381 16.4306 11.9384 16.3281C11.9384 16.328 11.9385 16.3279 11.9386 16.3278L20.2388 7.99061L20.2389 7.99071L20.2425 7.98667C20.4848 7.7154 20.7795 7.4966 21.1088 7.34361C21.438 7.19062 21.7948 7.10664 22.1574 7.09677C22.52 7.08691 22.8807 7.15137 23.2177 7.28624C23.5547 7.4211 23.8608 7.62355 24.1174 7.88124C24.3739 8.13893 24.5755 8.44646 24.7098 8.78508C24.8441 9.12369 24.9084 9.48626 24.8985 9.85065C24.8887 10.215 24.8051 10.5736 24.6527 10.9044C24.5003 11.2352 24.2825 11.5313 24.0124 11.7747L23.819 11.949ZM4.00264 16.331C4.14988 16.1831 4.34949 16.1001 4.55752 16.1001H8.09729C8.30533 16.1001 8.50494 16.1831 8.65217 16.331C8.79943 16.4789 8.88224 16.6796 8.88224 16.889C8.88224 17.0984 8.79943 17.2991 8.65218 17.447C8.50494 17.5949 8.30533 17.6779 8.09729 17.6779H4.55752C4.34949 17.6779 4.14988 17.5949 4.00264 17.447C3.85539 17.2991 3.77258 17.0984 3.77258 16.889C3.77258 16.6796 3.85539 16.4789 4.00264 16.331ZM4.55752 5.43337H12.522C12.73 5.43337 12.9296 5.51638 13.0769 5.66428C13.2241 5.81219 13.3069 6.0129 13.3069 6.22227C13.3069 6.43164 13.2241 6.63234 13.0769 6.78026C12.9296 6.92815 12.73 7.01116 12.522 7.01116H4.55752C4.34949 7.01116 4.14988 6.92815 4.00264 6.78026C3.85539 6.63234 3.77258 6.43164 3.77258 6.22227C3.77258 6.0129 3.85539 5.81219 4.00264 5.66428C4.14988 5.51638 4.34949 5.43337 4.55752 5.43337ZM13.0769 10.9976C13.2241 11.1455 13.3069 11.3463 13.3069 11.5556C13.3069 11.765 13.2241 11.9657 13.0769 12.1136C12.9296 12.2615 12.73 12.3445 12.522 12.3445H4.55752C4.34949 12.3445 4.14988 12.2615 4.00264 12.1136C3.85539 11.9657 3.77258 11.765 3.77258 11.5556C3.77258 11.3463 3.85539 11.1455 4.00264 10.9976C4.14988 10.8497 4.34949 10.7667 4.55752 10.7667H12.522C12.73 10.7667 12.9296 10.8497 13.0769 10.9976Z",
            fill: "#171717",
            stroke: "#0F0F0F",
            strokeWidth: "0.2"
        })
    });
};
/* harmony default export */ const svg_document = ((/* unused pure expression or super */ null && (Document)));

;// CONCATENATED MODULE: ./src/svg/highlight-4.js


const HighlightFour = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "91",
        height: "12",
        viewBox: "0 0 91 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L91 12H0V0Z",
            fill: "#82CEFD"
        })
    });
};
/* harmony default export */ const highlight_4 = ((/* unused pure expression or super */ null && (HighlightFour)));

;// CONCATENATED MODULE: ./src/svg/highlight-5.js


const HighlightFive = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "160",
        height: "11",
        viewBox: "0 0 160 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L160 11H0V0Z",
            fill: "#89CEFB"
        })
    });
};
/* harmony default export */ const highlight_5 = ((/* unused pure expression or super */ null && (HighlightFive)));

;// CONCATENATED MODULE: ./src/svg/highlisght-6.js


const HighlightSix = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "530",
        height: "12",
        viewBox: "0 0 530 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0.000244141 -7.62939e-06L530 12H0.000244141V-7.62939e-06Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlisght_6 = ((/* unused pure expression or super */ null && (HighlightSix)));

;// CONCATENATED MODULE: ./src/svg/bulb.js


const Bulb = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "28",
        height: "37",
        viewBox: "0 0 28 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M27.4965 14.0709C27.4965 6.62887 21.4419 0.574219 13.9998 0.574219C6.55765 0.574219 0.503174 6.62887 0.503174 14.0709C0.503174 18.6347 2.83329 22.9003 6.63242 25.3809V29.6329C6.63242 33.6952 9.93732 37 13.9996 37C18.0619 37 21.3668 33.6951 21.3668 29.6329V27.2447C21.3668 27.2441 21.3667 25.3811 21.3667 25.3811C25.1663 22.9004 27.4965 18.6349 27.4965 14.0709ZM18.7651 29.633C18.7651 32.2606 16.6274 34.3983 13.9998 34.3983C11.3721 34.3983 9.23444 32.2606 9.23444 29.633V28.5456H18.7651V29.633ZM19.418 23.5252C19.0141 23.7572 18.7651 24.1874 18.7651 24.6533V25.9438H15.3006V19.2167C16.9898 18.6671 18.2146 17.0784 18.2146 15.2082C18.2146 14.4898 17.6321 13.9073 16.9137 13.9073C16.1952 13.9073 15.6127 14.4898 15.6127 15.2082C15.6127 16.0976 14.8891 16.8212 13.9998 16.8212C13.1104 16.8212 12.3867 16.0977 12.3867 15.2082C12.3867 14.4898 11.8042 13.9073 11.0858 13.9073C10.3674 13.9073 9.78487 14.4898 9.78487 15.2082C9.78487 17.0783 11.0096 18.6671 12.6988 19.2167V25.9438H9.23461V24.6532C9.23461 24.1874 8.98565 23.7572 8.58174 23.5252C5.20362 21.5844 3.10519 17.9618 3.10519 14.0709C3.10519 8.06352 7.99256 3.17607 14 3.17607C20.0075 3.17607 24.8949 8.06343 24.8949 14.0709C24.8947 17.9619 22.7961 21.5846 19.418 23.5252Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const bulb = ((/* unused pure expression or super */ null && (Bulb)));

;// CONCATENATED MODULE: ./src/svg/code.js


const Code = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "34",
        height: "36",
        viewBox: "0 0 34 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M23.0471 36H5.04712C2.72076 36 0.828369 34.1076 0.828369 31.7812V4.21875C0.828369 1.8924 2.72076 0 5.04712 0H23.0471C25.3735 0 27.2659 1.8924 27.2659 4.21875V8.23508H24.4534V4.21875C24.4534 3.44339 23.8225 2.8125 23.0471 2.8125H5.04712C4.27176 2.8125 3.64087 3.44339 3.64087 4.21875V31.7812C3.64087 32.5566 4.27176 33.1875 5.04712 33.1875H23.0471C23.8225 33.1875 24.4534 32.5566 24.4534 31.7812V27.6413H27.2659V31.7812C27.2659 34.1076 25.3735 36 23.0471 36ZM16.8596 5.63351H11.2346V8.44601H16.8596V5.63351ZM15.4534 28.9773C15.4534 28.2005 14.8239 27.571 14.0471 27.571C13.2704 27.571 12.6409 28.2005 12.6409 28.9773C12.6409 29.754 13.2704 30.3835 14.0471 30.3835C14.8239 30.3835 15.4534 29.754 15.4534 28.9773ZM20.3695 24.9695L24.3127 10.9773H21.3907L17.4474 24.9695H20.3695ZM16.6451 21.2962L12.7741 18.0085L16.6451 14.7211L14.8244 12.5774L8.42953 18.0085L14.8244 23.4399L16.6451 21.2962ZM33.1647 18.0085L26.7701 12.5774L24.9494 14.7209L28.8202 18.0085L24.9494 21.2962L26.7701 23.4399L33.1647 18.0085Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const code = ((/* unused pure expression or super */ null && (Code)));

;// CONCATENATED MODULE: ./src/svg/managed.js


const Managed = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "39",
        height: "36",
        viewBox: "0 0 39 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M37.5377 7.3625C33.5846 7.3625 29.6315 7.3625 25.6784 7.3625C25.3909 7.3625 25.1034 7.3625 24.8159 7.3625V5.6375C24.8159 2.97813 22.6596 0.75 19.9284 0.75C17.269 0.75 15.0409 2.90625 15.0409 5.6375V7.3625C12.2377 7.3625 9.50649 7.3625 6.70337 7.3625C5.26587 7.3625 3.82837 7.3625 2.39087 7.3625C1.60024 7.3625 0.953369 8.00938 0.953369 8.8V30.7938V33.8844C0.953369 34.675 1.60024 35.3219 2.39087 35.3219H14.2502H33.2252H37.5377C38.3284 35.3219 38.9752 34.675 38.9752 33.8844C38.9752 26.5531 38.9752 19.2219 38.9752 11.8906C38.9752 10.8844 38.9752 9.80625 38.9752 8.8C38.9752 8.00938 38.3284 7.3625 37.5377 7.3625ZM17.9877 5.6375C17.9877 4.55938 18.9221 3.625 20.0002 3.625C21.0784 3.625 22.0127 4.55938 22.0127 5.6375V7.3625C20.6471 7.3625 19.3534 7.3625 17.9877 7.3625V5.6375ZM25.7502 32.375C19.4252 32.375 13.1002 32.375 6.77524 32.375C5.84087 32.375 4.83462 32.375 3.90024 32.375C3.90024 25.5469 3.90024 18.7188 3.90024 11.8188C3.90024 11.2438 3.90024 10.7406 3.90024 10.1656H14.3221H33.2971H36.1721V30.7219V32.375C32.6502 32.375 29.2002 32.375 25.7502 32.375Z",
                fill: "white"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M27.7628 19.8687C27.1878 19.8687 26.6847 19.8687 26.1097 19.8687C25.9659 19.2218 25.6784 18.575 25.319 18C25.6065 17.7125 25.894 17.425 26.1815 17.1375C26.2534 17.0656 26.3253 16.9937 26.469 16.85C26.7565 16.5625 26.9003 16.2031 26.9003 15.8437C26.9003 15.4843 26.7565 15.0531 26.469 14.8375C26.1815 14.6218 25.8222 14.4062 25.4628 14.4062C25.1034 14.4062 24.744 14.55 24.4565 14.8375C24.0972 15.1968 23.6659 15.6281 23.3065 15.9875C22.7315 15.6281 22.0847 15.3406 21.4378 15.1968C21.4378 14.7656 21.4378 14.3343 21.4378 13.9031C21.4378 13.7593 21.4378 13.6875 21.4378 13.5437C21.4378 13.1843 21.294 12.7531 21.0065 12.5375C20.7909 12.3218 20.3597 12.1062 20.0003 12.1062C19.6409 12.1062 19.2097 12.25 18.994 12.5375C18.7065 12.825 18.5628 13.1843 18.5628 13.5437V15.1968C17.9159 15.3406 17.269 15.6281 16.694 15.9875C16.4065 15.7 16.119 15.4125 15.8315 15.125C15.7597 15.0531 15.6878 14.9812 15.544 14.8375C15.2565 14.55 14.8972 14.4062 14.5378 14.4062C14.1784 14.4062 13.7472 14.55 13.5315 14.8375C13.3159 15.125 13.1003 15.4843 13.1003 15.8437C13.1003 16.2031 13.244 16.5625 13.5315 16.85L14.6815 18C14.3222 18.575 14.0347 19.2218 13.8909 19.8687C13.4597 19.8687 13.0284 19.8687 12.5972 19.8687C12.4534 19.8687 12.3815 19.8687 12.2378 19.8687C11.8784 19.8687 11.4472 20.0125 11.2315 20.3C11.0159 20.5156 10.8003 20.9468 10.8003 21.3062C10.8003 21.6656 10.944 22.0968 11.2315 22.3125C11.519 22.6 11.8784 22.7437 12.2378 22.7437H13.8909C14.0347 23.3906 14.3222 24.0375 14.6815 24.6125C14.394 24.9 14.1065 25.1875 13.819 25.475C13.7472 25.5468 13.6753 25.6187 13.5315 25.7625C13.244 26.05 13.1003 26.4093 13.1003 26.7687C13.1003 27.1281 13.244 27.5593 13.5315 27.775C13.819 27.9906 14.1784 28.2062 14.5378 28.2062C14.8972 28.2062 15.2565 28.0625 15.544 27.775C15.9034 27.4156 16.3347 26.9843 16.694 26.625C17.269 26.9843 17.9159 27.2718 18.5628 27.4156V28.7093V29.0687C18.5628 29.4281 18.7065 29.8593 18.994 30.075C19.2097 30.2906 19.6409 30.5062 20.0003 30.5062C20.3597 30.5062 20.7909 30.3625 21.0065 30.075C21.294 29.7875 21.4378 29.4281 21.4378 29.0687C21.4378 28.4937 21.4378 27.9906 21.4378 27.4156C22.0847 27.2718 22.7315 26.9843 23.3065 26.625L24.169 27.4875L24.4565 27.775C24.744 28.0625 25.1034 28.2062 25.4628 28.2062C25.8222 28.2062 26.2534 28.0625 26.469 27.775C26.6847 27.4875 26.9003 27.1281 26.9003 26.7687C26.9003 26.4093 26.7565 26.05 26.469 25.7625C26.1097 25.4031 25.6784 24.9718 25.319 24.6125C25.6784 24.0375 25.9659 23.3906 26.1097 22.7437H27.4034H27.7628C28.1222 22.7437 28.5534 22.6 28.769 22.3125C28.9847 22.0968 29.2003 21.6656 29.2003 21.3062C29.2003 20.9468 29.0565 20.5156 28.769 20.3C28.4815 20.0125 28.194 19.8687 27.7628 19.8687V19.8687ZM20.0003 24.7562C18.1315 24.7562 16.5503 23.2468 16.5503 21.3062C16.5503 19.4375 18.0597 17.8562 20.0003 17.8562C21.9409 17.8562 20.0003 17.8562 20.0003 17.8562C21.869 17.8562 23.4503 19.3656 23.4503 21.3062C23.4503 23.2468 21.869 24.7562 20.0003 24.7562Z",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const managed = ((/* unused pure expression or super */ null && (Managed)));

;// CONCATENATED MODULE: ./src/svg/popup-arrow.js


const PopupArrow = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "107",
        height: "107",
        viewBox: "0 0 107 107",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0.224823 95.4633L11.3577 106.62C11.8638 107.127 14.9002 107.127 15.406 106.62L80.1796 43.2308C81.1916 42.2165 82.2038 41.7093 83.7219 41.7093C84.228 41.7093 85.2402 41.7093 85.746 42.2165C87.7702 42.7236 88.7822 44.7521 88.7822 46.7805V78.7286V79.2358H104.976C105.988 79.2358 106.494 79.2358 107 79.2358V1.64818C107 1.64818 107 1.64819 105.988 0.633841C104.976 -0.380504 105.482 0.126918 104.47 0.126918H28.5633C28.5633 0.633841 28.5633 1.14101 28.5633 2.66253V18.3826C28.5633 19.3967 28.5633 20.4111 28.5633 20.4111H60.9501C62.9743 20.4111 64.9984 21.4252 65.5043 23.4536C66.5163 25.482 66.0104 27.5105 64.4923 29.032L1.23705 91.9136C0.730947 92.4208 0.224823 92.928 0.224823 93.9421C-0.281034 94.9561 0.224823 94.9562 0.224823 95.4633Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const popup_arrow = ((/* unused pure expression or super */ null && (PopupArrow)));

;// CONCATENATED MODULE: ./src/svg/popup-arrow-2.js


const PopupArrowTwo = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const popup_arrow_2 = ((/* unused pure expression or super */ null && (PopupArrowTwo)));

;// CONCATENATED MODULE: ./src/svg/index.js


























/***/ })

};
;