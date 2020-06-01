(function(o) {
    function t(t) {
        for (var e, n, c = t[0], l = t[1], i = t[2], p = 0, d = []; p < c.length; p++) n = c[p], r[n] && d.push(r[n][0]), r[n] = 0;
        for (e in l) Object.prototype.hasOwnProperty.call(l, e) && (o[e] = l[e]);
        u && u(t);
        while (d.length) d.shift()();
        return a.push.apply(a, i || []), s()
    }

    function s() {
        for (var o, t = 0; t < a.length; t++) {
            for (var s = a[t], e = !0, c = 1; c < s.length; c++) {
                var l = s[c];
                0 !== r[l] && (e = !1)
            }
            e && (a.splice(t--, 1), o = n(n.s = s[0]))
        }
        return o
    }
    var e = {},
        r = {
            app: 0
        },
        a = [];

    function n(t) {
        if (e[t]) return e[t].exports;
        var s = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return o[t].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = o, n.c = e, n.d = function(o, t, s) {
        n.o(o, t) || Object.defineProperty(o, t, {
            enumerable: !0,
            get: s
        })
    }, n.r = function(o) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, n.t = function(o, t) {
        if (1 & t && (o = n(o)), 8 & t) return o;
        if (4 & t && "object" === typeof o && o && o.__esModule) return o;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: o
            }), 2 & t && "string" != typeof o)
            for (var e in o) n.d(s, e, function(t) {
                return o[t]
            }.bind(null, e));
        return s
    }, n.n = function(o) {
        var t = o && o.__esModule ? function() {
            return o["default"]
        } : function() {
            return o
        };
        return n.d(t, "a", t), t
    }, n.o = function(o, t) {
        return Object.prototype.hasOwnProperty.call(o, t)
    }, n.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var i = 0; i < c.length; i++) t(c[i]);
    var u = l;
    a.push([0, "chunk-vendors"]), s()
})({
    0: function(o, t, s) {
        o.exports = s("56d7")
    },
    "56d7": function(o, t, s) {
        "use strict";
        s.r(t);
        s("cadf"), s("551c"), s("f751"), s("097d");
        var e = s("2b0e"),
            r = s("2f62"),
            a = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("div", {
                    staticClass: "page-container",
                    attrs: {
                        "data-mode": o.returnMode
                    }
                }, [s("div", {
                    staticClass: "page-content"
                }, [s("header", [s("componentLogo"), s("componentMode")], 1), s("section", [s("componentIntro")], 1), s("footer", [s("componentInput"), s("componentSocial"), s("componentCursor"), s("componentClipboard")], 1)])])
            },
            n = [],
            c = {
                computed: {
                    returnMode: function() {
                        return this.$store.getters.returnMode ? "light" : "dark"
                    }
                }
            },
            l = {
                methods: {
                    getCopyEventListeners: function() {
                        document.querySelector(".page-copy").addEventListener("click", this.getClipboard)
                    },
                    getClipboard: function(o) {
                        o.preventDefault();
                        var t = document.querySelector("#emailInput");
                        t.setAttribute("type", "text"), t.select();
                        try {
                            document.execCommand("copy");
                            this.$store.dispatch("setClipboard")
                        } catch (s) {
                            alert("Oops, unable to copy")
                        }
                        t.setAttribute("type", "hidden"), window.getSelection().removeAllRanges()
                    }
                },
                mounted: function() {
                    this.getCopyEventListeners()
                }
            },
            i = {
                methods: {
                    getCursorMouseEventListeners: function() {
                        document.addEventListener("mouseup", this.getCursorMouseUp), document.addEventListener("touchend", this.getCursorMouseUp), document.addEventListener("mouseout", this.getCursorMouseOut), document.addEventListener("mouseover", this.getCursorMouseOver), document.addEventListener("mousemove", this.getCursorMouseMove), document.addEventListener("touchmove", this.getCursorMouseMove), document.addEventListener("mousedown", this.getCursorMouseDown), document.addEventListener("touchstart", this.getCursorMouseDown);
                        var o = document.querySelectorAll(".page-hover");
                        if (o.length > 0)
                            for (var t = 0; t < o.length; t++) o[t].addEventListener("mouseover", this.getCursorMouseHover), o[t].addEventListener("mouseout", this.getCursorMouseHover)
                    },
                    getCursorMousePosition: function(o) {
                        var t = {
                            x: o ? o.pageX : window.event.clientX,
                            y: o ? o.pageY : window.event.clientY
                        };
                        return t
                    },
                    getCursorMouseMove: function(o) {
                        var t = this.getCursorMousePosition(o),
                            s = document.querySelector(".page-cursor");
                        s.style.top = t.y - 15 + "px", s.style.left = t.x - 15 + "px"
                    },
                    getCursorMouseOver: function(o) {
                        document.querySelector(".page-cursor").classList.add("cursor-active")
                    },
                    getCursorMouseOut: function(o) {
                        document.querySelector(".page-cursor").classList.remove("cursor-active")
                    },
                    getCursorMouseUp: function(o) {
                        document.querySelector(".page-cursor").classList.remove("cursor-down")
                    },
                    getCursorMouseDown: function(o) {
                        document.querySelector(".page-cursor").classList.add("cursor-down")
                    },
                    getCursorMouseHover: function() {
                        document.querySelector(".page-cursor").classList.toggle("cursor-large")
                    }
                },
                mounted: function() {
                    this.getCursorMouseEventListeners()
                }
            },
            u = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("transition", {
                    staticClass: "page-logo",
                    attrs: {
                        tag: "div",
                        name: "transition-fade-down",
                        appear: ""
                    }
                }, [s("svg", {
                    staticClass: "component-logo page-hover",
                    attrs: {
                        x: "0px",
                        y: "0px",
                        role: "image",
                        viewBox: "0 0 534 399.301"
                    }
                }, [s("path", {
                    staticClass: "st0",
                    attrs: {
                        d: "M0,399.301h146.136L77.933,281.263c-0.084,3.486-0.317,6.937-0.69,10.345C73.384,340.038,42.672,380.898,0,399.301L0,399.301z"
                    }
                }), s("polygon", {
                    staticClass: "st0",
                    attrs: {
                        points: "534,399.301 434.525,399.301 434.525,0 534,0 534,399.301 "
                    }
                }), s("polygon", {
                    staticClass: "st0",
                    attrs: {
                        points: "58.495,0 290.498,399.219 290.627,399.139 333.901,280.37 170.967,0 58.495,0 "
                    }
                })])])
            },
            p = [],
            d = {
                name: "componentLogo"
            },
            v = d,
            C = s("2877"),
            m = Object(C["a"])(v, u, p, !1, null, null, null),
            f = m.exports,
            g = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("transition", {
                    staticClass: "page-mode",
                    attrs: {
                        tag: "div",
                        mode: "out-in",
                        name: "transition-fade",
                        appear: ""
                    }
                }, [s("button", {
                    staticClass: "component-mode page-hover",
                    class: {
                        "mode-active": o.returnMode
                    },
                    on: {
                        click: o.setMode
                    }
                }, [s("span"), s("span")])])
            },
            _ = [],
            h = {
                name: "componentMode",
                methods: {
                    setMode: function() {
                        this.$store.dispatch("setMode")
                    }
                }
            },
            y = h,
            b = Object(C["a"])(y, g, _, !1, null, null, null),
            w = b.exports,
            M = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("h1", [s("transition-group", {
                    staticClass: "content-line",
                    attrs: {
                        tag: "div",
                        mode: "out-in",
                        name: "transition-fade-up",
                        appear: ""
                    }
                }, [s("div", {
                    key: "1",
                    staticClass: "content-word color-primary"
                }, [s("span", {
                    staticClass: "color color-1"
                }, [o._v("H")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("o")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v(",")])]), s("div", {
                    key: "2",
                    staticClass: "content-word color-primary"
                }, [s("span", {
                    staticClass: "color color-2"
                }, [o._v("I")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("’")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("m")])]), s("div", {
                    key: "3",
                    staticClass: "content-word color-primary"
                }, [s("span", {
                    staticClass: "color color-5"
                }, [o._v("M")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("a")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("c")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("o")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("m")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v(".")])])]), s("transition-group", {
                    staticClass: "content-line",
                    attrs: {
                        tag: "div",
                        mode: "out-in",
                        name: "transition-fade-up",
                        appear: ""
                    }
                }, [s("div", {
                    key: "1",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-3"
                }, [o._v("I")])]), s("div", {
                    key: "2",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-4"
                }, [o._v("h")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("p")])]), s("div", {
                    key: "3",
                    staticClass: "content-word color-secondary"
                },  [s("span", {
                    staticClass: "color color-3"
                }, [o._v("b")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("r")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("a")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("n")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("d")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("s")])]), s("div", {
                    key: "4",
                    staticClass: "content-word color-secondary"
                },  [s("span", {
                    staticClass: "color color-4"
                }, [o._v("d")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("s")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("g")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("n")])]), s("div", {
                    key: "5",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-5"
                }, [o._v("d")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("g")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("a")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("l")])]), s("div", {
                    key: "6",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-2"
                }, [o._v("p")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("r")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("o")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("d")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("u")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("c")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("s")])]), s("div", {
                    key: "7",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-5"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("h")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("a")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("t")])]), s("div", {
                    key: "8",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-4"
                }, [o._v("c")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("r")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("a")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("e")])]), s("div", {
                    key: "9",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-5"
                }, [o._v("d")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("l")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("g")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("h")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("f")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("u")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("l")])]), s("div", {
                    key: "10",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-5"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("x")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("p")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("r")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("n")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("c")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("s")])]), s("div", {
                    key: "11",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-1"
                }, [o._v("f")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("o")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("r")])]), s("div", {
                    key: "12",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-4"
                }, [o._v("t")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("h")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("i")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("r")])]), s("div", {
                    key: "13",
                    staticClass: "content-word color-secondary"
                }, [s("span", {
                    staticClass: "color color-4"
                }, [o._v("u")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v("s")]), s("span", {
                    staticClass: "color color-1"
                }, [o._v("e")]), s("span", {
                    staticClass: "color color-2"
                }, [o._v("r")]), s("span", {
                    staticClass: "color color-3"
                }, [o._v("s")]), s("span", {
                    staticClass: "color color-4"
                }, [o._v(".")])]), s("div", {
                    key: "14",
                    staticClass: "content-word"
                }, [s("a", {
                    staticClass: "page-hover",
                    attrs: {
                        href: "https://dribbble.com/malcolmtosh",
                        target: "_blank"
                    }
                }, [o._v("Work")]), s("span", {
                    staticClass: "color color-5"
                }, [o._v(".")])])])], 1)
            },
            k = [],
            L = {
                name: "componentIntro"
            },
            E = L,
            S = Object(C["a"])(E, M, k, !1, null, null, null),
            x = S.exports,
            O = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("input", {
                    attrs: {
                        type: "hidden",
                        id: "emailInput",
                        value: "malcolmtosh@gmail.com"
                    }
                })
            },
            j = [],
            $ = {
                name: "componentInput"
            },
            A = $,
            q = Object(C["a"])(A, O, j, !1, null, null, null),
            I = q.exports,
            P = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("transition-group", {
                    staticClass: "page-social",
                    class: {
                        hide: o.returnClipboard
                    },
                    attrs: {
                        tag: "div",
                        mode: "out-in",
                        name: "transition-fade",
                        appear: ""
                    }
                }, o._l(o.returnSocial, function(t, e) {
                    return s("a", {
                        key: e,
                        class: t.class,
                        attrs: {
                            href: t.link
                        }
                    }, [o._v("\n\t\t\n\t\t\t" + o._s(t.title) + "\n\n\t")])
                }), 0)
            },
            H = [],
            U = {
                name: "componentSocial",
                computed: {
                    returnSocial: function() {
                        return this.$store.getters.returnSocial
                    },
                    returnClipboard: function() {
                        return this.$store.getters.returnClipboard
                    }
                }
            },
            D = U,
            z = Object(C["a"])(D, P, H, !1, null, null, null),
            V = z.exports,
            N = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("div", {
                    staticClass: "page-cursor"
                })
            },
            T = [],
            W = {
                name: "componentCursor"
            },
            B = W,
            F = Object(C["a"])(B, N, T, !1, null, null, null),
            J = F.exports,
            X = function() {
                var o = this,
                    t = o.$createElement,
                    s = o._self._c || t;
                return s("transition", {
                    staticClass: "page-clipboard",
                    attrs: {
                        tag: "div",
                        name: "transition-fade-up",
                        appear: ""
                    }
                }, [o.returnClipboard ? s("div", {
                    staticClass: "page-clipboard",
                    on: {
                        click: o.removeClipboard
                    }
                }, [s("span", [s("strong", [o._v("malcolmtosh@gmail.com")]), o._v(" copied to clipboard 👌🏽")])]) : o._e()])
            },
            Y = [],
            R = {
                name: "componentClipboard",
                methods: {
                    removeClipboard: function() {
                        this.$store.dispatch("setClipboard")
                    }
                },
                computed: {
                    returnClipboard: function() {
                        return this.$store.getters.returnClipboard
                    }
                }
            },
            G = R,
            K = Object(C["a"])(G, X, Y, !1, null, null, null),
            Q = K.exports,
            Z = {
                name: "app",
                mixins: [c, l, i],
                components: {
                    componentLogo: f,
                    componentMode: w,
                    componentSocial: V,
                    componentCursor: J,
                    componentIntro: x,
                    componentInput: I,
                    componentClipboard: Q
                },
                methods: {
                    updateAvailable: function() {
                        console.log("shit son, new content is available")
                    }
                },
                mounted: function() {
                    document.addEventListener("SWUpdated", this.updateAvailable)
                },
                beforeDestroy: function() {
                    document.removeEventListener("SWUpdated", this.updateAvailable)
                }
            },
            oo = Z,
            to = Object(C["a"])(oo, a, n, !1, null, null, null),
            so = to.exports;
        e["a"].use(r["a"]);
        var eo = new r["a"].Store({
                state: {
                    mode: !1,
                    loading: !0,
                    clipboard: !1,
                    social: [{
                        title: "malcolmtosh@gmail.com",
                        link: "mailto: malcolmtosh@gmail.com",
                        class: "page-hover page-copy"
                    }]
                },
                getters: {
                    returnMode: function(o) {
                        return o.mode
                    },
                    returnSocial: function(o) {
                        return o.social
                    },
                    returnClipboard: function(o) {
                        return o.clipboard
                    }
                },
                mutations: {
                    setMode: function(o) {
                        o.mode = !o.mode
                    },
                    setLoading: function(o) {
                        o.loading = !o.loading
                    },
                    setClipboard: function(o) {
                        o.clipboard = !o.clipboard
                    }
                },
                actions: {
                    setMode: function(o) {
                        o.commit("setMode")
                    },
                    setLoading: function(o) {
                        o.commit("setLoading")
                    },
                    setClipboard: function(o) {
                        o.commit("setClipboard")
                    }
                }
            }),
            ro = (s("b517"), s("9483"));
        Object(ro["a"])("".concat("", "service-worker.js"), {
            ready: function() {
                console.log("App is being served from cache by a service worker.")
            },
            registered: function() {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                console.log("New content is available; please refresh."), document.dispatchEvent(updateSiteEvent)
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(o) {
                console.error("Error during service worker registration:", o)
            }
        });
        new Event("SWUpdated");
        e["a"].config.productionTip = !0, console.log("%c Available for freelance work - malcolmtosh@gmail.com", "background: #222; color: #bada55; padding: 1rem;"), new e["a"]({
            store: eo,
            render: function(o) {
                return o(so)
            }
        }).$mount("#app")
    },
    b517: function(o, t, s) {}
});
//# sourceMappingURL=app.958a70c7.js.map
