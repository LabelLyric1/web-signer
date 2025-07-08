var Hd = e => {
    throw TypeError(e)
};
var gl = (e, t, n) => t.has(e) || Hd("Cannot " + n);
var Z = (e, t, n) => (gl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    _e = (e, t, n) => t.has(e) ? Hd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    ve = (e, t, n, r) => (gl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    it = (e, t, n) => (gl(e, t, "access private method"), n);
var ss = (e, t, n, r) => ({
    set _(o) {
        ve(e, t, o, n)
    },
    get _() {
        return Z(e, t, r)
    }
});

function hy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();
var as = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Br(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var cp = {
        exports: {}
    },
    ja = {},
    dp = {
        exports: {}
    },
    we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi = Symbol.for("react.element"),
    py = Symbol.for("react.portal"),
    my = Symbol.for("react.fragment"),
    gy = Symbol.for("react.strict_mode"),
    vy = Symbol.for("react.profiler"),
    yy = Symbol.for("react.provider"),
    wy = Symbol.for("react.context"),
    xy = Symbol.for("react.forward_ref"),
    by = Symbol.for("react.suspense"),
    Sy = Symbol.for("react.memo"),
    _y = Symbol.for("react.lazy"),
    Vd = Symbol.iterator;

function Cy(e) {
    return e === null || typeof e != "object" ? null : (e = Vd && e[Vd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var fp = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    hp = Object.assign,
    pp = {};

function Uo(e, t, n) {
    this.props = e, this.context = t, this.refs = pp, this.updater = n || fp
}
Uo.prototype.isReactComponent = {};
Uo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Uo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function mp() {}
mp.prototype = Uo.prototype;

function kc(e, t, n) {
    this.props = e, this.context = t, this.refs = pp, this.updater = n || fp
}
var Tc = kc.prototype = new mp;
Tc.constructor = kc;
hp(Tc, Uo.prototype);
Tc.isPureReactComponent = !0;
var Kd = Array.isArray,
    gp = Object.prototype.hasOwnProperty,
    Nc = {
        current: null
    },
    vp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function yp(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) gp.call(t, r) && !vp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Xi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Nc.current
    }
}

function Ey(e, t) {
    return {
        $$typeof: Xi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Pc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xi
}

function ky(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Gd = /\/+/g;

function vl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ky("" + e.key) : t.toString(36)
}

function Ls(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Xi:
                case py:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + vl(s, 0) : r, Kd(o) ? (n = "", e != null && (n = e.replace(Gd, "$&/") + "/"), Ls(o, t, n, "", function(u) {
        return u
    })) : o != null && (Pc(o) && (o = Ey(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Gd, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Kd(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + vl(i, a);
            s += Ls(i, t, n, l, o)
        } else if (l = Cy(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + vl(i, a++), s += Ls(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ls(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Ls(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function Ty(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var vt = {
        current: null
    },
    Ms = {
        transition: null
    },
    Ny = {
        ReactCurrentDispatcher: vt,
        ReactCurrentBatchConfig: Ms,
        ReactCurrentOwner: Nc
    };

function wp() {
    throw Error("act(...) is not supported in production builds of React.")
}
we.Children = {
    map: ls,
    forEach: function(e, t, n) {
        ls(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ls(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ls(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Pc(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
we.Component = Uo;
we.Fragment = my;
we.Profiler = vy;
we.PureComponent = kc;
we.StrictMode = gy;
we.Suspense = by;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny;
we.act = wp;
we.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hp({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Nc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) gp.call(t, l) && !vp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Xi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
we.createContext = function(e) {
    return e = {
        $$typeof: wy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: yy,
        _context: e
    }, e.Consumer = e
};
we.createElement = yp;
we.createFactory = function(e) {
    var t = yp.bind(null, e);
    return t.type = e, t
};
we.createRef = function() {
    return {
        current: null
    }
};
we.forwardRef = function(e) {
    return {
        $$typeof: xy,
        render: e
    }
};
we.isValidElement = Pc;
we.lazy = function(e) {
    return {
        $$typeof: _y,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ty
    }
};
we.memo = function(e, t) {
    return {
        $$typeof: Sy,
        type: e,
        compare: t === void 0 ? null : t
    }
};
we.startTransition = function(e) {
    var t = Ms.transition;
    Ms.transition = {};
    try {
        e()
    } finally {
        Ms.transition = t
    }
};
we.unstable_act = wp;
we.useCallback = function(e, t) {
    return vt.current.useCallback(e, t)
};
we.useContext = function(e) {
    return vt.current.useContext(e)
};
we.useDebugValue = function() {};
we.useDeferredValue = function(e) {
    return vt.current.useDeferredValue(e)
};
we.useEffect = function(e, t) {
    return vt.current.useEffect(e, t)
};
we.useId = function() {
    return vt.current.useId()
};
we.useImperativeHandle = function(e, t, n) {
    return vt.current.useImperativeHandle(e, t, n)
};
we.useInsertionEffect = function(e, t) {
    return vt.current.useInsertionEffect(e, t)
};
we.useLayoutEffect = function(e, t) {
    return vt.current.useLayoutEffect(e, t)
};
we.useMemo = function(e, t) {
    return vt.current.useMemo(e, t)
};
we.useReducer = function(e, t, n) {
    return vt.current.useReducer(e, t, n)
};
we.useRef = function(e) {
    return vt.current.useRef(e)
};
we.useState = function(e) {
    return vt.current.useState(e)
};
we.useSyncExternalStore = function(e, t, n) {
    return vt.current.useSyncExternalStore(e, t, n)
};
we.useTransition = function() {
    return vt.current.useTransition()
};
we.version = "18.3.1";
dp.exports = we;
var _ = dp.exports;
const se = Br(_),
    xp = hy({
        __proto__: null,
        default: se
    }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Py = _,
    Ay = Symbol.for("react.element"),
    Ry = Symbol.for("react.fragment"),
    jy = Object.prototype.hasOwnProperty,
    Oy = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Iy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function bp(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) jy.call(t, r) && !Iy.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Ay,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Oy.current
    }
}
ja.Fragment = Ry;
ja.jsx = bp;
ja.jsxs = bp;
cp.exports = ja;
var x = cp.exports,
    Sp = {
        exports: {}
    },
    Lt = {},
    _p = {
        exports: {}
    },
    Cp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(D, z) {
        var Y = D.length;
        D.push(z);
        e: for (; 0 < Y;) {
            var O = Y - 1 >>> 1,
                L = D[O];
            if (0 < o(L, z)) D[O] = z, D[Y] = L, Y = O;
            else break e
        }
    }

    function n(D) {
        return D.length === 0 ? null : D[0]
    }

    function r(D) {
        if (D.length === 0) return null;
        var z = D[0],
            Y = D.pop();
        if (Y !== z) {
            D[0] = Y;
            e: for (var O = 0, L = D.length, te = L >>> 1; O < te;) {
                var R = 2 * (O + 1) - 1,
                    V = D[R],
                    J = R + 1,
                    ee = D[J];
                if (0 > o(V, Y)) J < L && 0 > o(ee, V) ? (D[O] = ee, D[J] = Y, O = J) : (D[O] = V, D[R] = Y, O = R);
                else if (J < L && 0 > o(ee, Y)) D[O] = ee, D[J] = Y, O = J;
                else break e
            }
        }
        return z
    }

    function o(D, z) {
        var Y = D.sortIndex - z.sortIndex;
        return Y !== 0 ? Y : D.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        m = 1,
        h = null,
        c = 3,
        f = !1,
        y = !1,
        d = !1,
        v = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function w(D) {
        for (var z = n(u); z !== null;) {
            if (z.callback === null) r(u);
            else if (z.startTime <= D) r(u), z.sortIndex = z.expirationTime, t(l, z);
            else break;
            z = n(u)
        }
    }

    function C(D) {
        if (d = !1, w(D), !y)
            if (n(l) !== null) y = !0, X(E);
            else {
                var z = n(u);
                z !== null && H(C, z.startTime - D)
            }
    }

    function E(D, z) {
        y = !1, d && (d = !1, p(j), j = -1), f = !0;
        var Y = c;
        try {
            for (w(z), h = n(l); h !== null && (!(h.expirationTime > z) || D && !G());) {
                var O = h.callback;
                if (typeof O == "function") {
                    h.callback = null, c = h.priorityLevel;
                    var L = O(h.expirationTime <= z);
                    z = e.unstable_now(), typeof L == "function" ? h.callback = L : h === n(l) && r(l), w(z)
                } else r(l);
                h = n(l)
            }
            if (h !== null) var te = !0;
            else {
                var R = n(u);
                R !== null && H(C, R.startTime - z), te = !1
            }
            return te
        } finally {
            h = null, c = Y, f = !1
        }
    }
    var A = !1,
        N = null,
        j = -1,
        I = 5,
        B = -1;

    function G() {
        return !(e.unstable_now() - B < I)
    }

    function k() {
        if (N !== null) {
            var D = e.unstable_now();
            B = D;
            var z = !0;
            try {
                z = N(!0, D)
            } finally {
                z ? F() : (A = !1, N = null)
            }
        } else A = !1
    }
    var F;
    if (typeof g == "function") F = function() {
        g(k)
    };
    else if (typeof MessageChannel < "u") {
        var S = new MessageChannel,
            U = S.port2;
        S.port1.onmessage = k, F = function() {
            U.postMessage(null)
        }
    } else F = function() {
        v(k, 0)
    };

    function X(D) {
        N = D, A || (A = !0, F())
    }

    function H(D, z) {
        j = v(function() {
            D(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
        D.callback = null
    }, e.unstable_continueExecution = function() {
        y || f || (y = !0, X(E))
    }, e.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < D ? Math.floor(1e3 / D) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return c
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(D) {
        switch (c) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = c
        }
        var Y = c;
        c = z;
        try {
            return D()
        } finally {
            c = Y
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(D, z) {
        switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
        }
        var Y = c;
        c = D;
        try {
            return z()
        } finally {
            c = Y
        }
    }, e.unstable_scheduleCallback = function(D, z, Y) {
        var O = e.unstable_now();
        switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? O + Y : O) : Y = O, D) {
            case 1:
                var L = -1;
                break;
            case 2:
                L = 250;
                break;
            case 5:
                L = 1073741823;
                break;
            case 4:
                L = 1e4;
                break;
            default:
                L = 5e3
        }
        return L = Y + L, D = {
            id: m++,
            callback: z,
            priorityLevel: D,
            startTime: Y,
            expirationTime: L,
            sortIndex: -1
        }, Y > O ? (D.sortIndex = Y, t(u, D), n(l) === null && D === n(u) && (d ? (p(j), j = -1) : d = !0, H(C, Y - O))) : (D.sortIndex = L, t(l, D), y || f || (y = !0, X(E))), D
    }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(D) {
        var z = c;
        return function() {
            var Y = c;
            c = z;
            try {
                return D.apply(this, arguments)
            } finally {
                c = Y
            }
        }
    }
})(Cp);
_p.exports = Cp;
var Ly = _p.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var My = _,
    Ot = Ly;

function ne(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ep = new Set,
    Ci = {};

function Ur(e, t) {
    Ro(e, t), Ro(e + "Capture", t)
}

function Ro(e, t) {
    for (Ci[e] = t, e = 0; e < t.length; e++) Ep.add(t[e])
}
var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    su = Object.prototype.hasOwnProperty,
    Dy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Yd = {},
    Qd = {};

function zy(e) {
    return su.call(Qd, e) ? !0 : su.call(Yd, e) ? !1 : Dy.test(e) ? Qd[e] = !0 : (Yd[e] = !0, !1)
}

function Fy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function By(e, t, n, r) {
    if (t === null || typeof t > "u" || Fy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function yt(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    nt[e] = new yt(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    nt[t] = new yt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    nt[e] = new yt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    nt[e] = new yt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    nt[e] = new yt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    nt[e] = new yt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    nt[e] = new yt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    nt[e] = new yt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    nt[e] = new yt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ac = /[\-:]([a-z])/g;

function Rc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ac, Rc);
    nt[t] = new yt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ac, Rc);
    nt[t] = new yt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ac, Rc);
    nt[t] = new yt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    nt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
nt.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    nt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function jc(e, t, n, r) {
    var o = nt.hasOwnProperty(t) ? nt[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (By(t, n, o, r) && (n = null), r || o === null ? zy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Rn = My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    us = Symbol.for("react.element"),
    Jr = Symbol.for("react.portal"),
    eo = Symbol.for("react.fragment"),
    Oc = Symbol.for("react.strict_mode"),
    au = Symbol.for("react.profiler"),
    kp = Symbol.for("react.provider"),
    Tp = Symbol.for("react.context"),
    Ic = Symbol.for("react.forward_ref"),
    lu = Symbol.for("react.suspense"),
    uu = Symbol.for("react.suspense_list"),
    Lc = Symbol.for("react.memo"),
    Fn = Symbol.for("react.lazy"),
    Np = Symbol.for("react.offscreen"),
    Zd = Symbol.iterator;

function Zo(e) {
    return e === null || typeof e != "object" ? null : (e = Zd && e[Zd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Be = Object.assign,
    yl;

function li(e) {
    if (yl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        yl = t && t[1] || ""
    }
    return `
` + yl + e
}
var wl = !1;

function xl(e, t) {
    if (!e || wl) return "";
    wl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        wl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? li(e) : ""
}

function Uy(e) {
    switch (e.tag) {
        case 5:
            return li(e.type);
        case 16:
            return li("Lazy");
        case 13:
            return li("Suspense");
        case 19:
            return li("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = xl(e.type, !1), e;
        case 11:
            return e = xl(e.type.render, !1), e;
        case 1:
            return e = xl(e.type, !0), e;
        default:
            return ""
    }
}

function cu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case eo:
            return "Fragment";
        case Jr:
            return "Portal";
        case au:
            return "Profiler";
        case Oc:
            return "StrictMode";
        case lu:
            return "Suspense";
        case uu:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Tp:
            return (e.displayName || "Context") + ".Consumer";
        case kp:
            return (e._context.displayName || "Context") + ".Provider";
        case Ic:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Lc:
            return t = e.displayName || null, t !== null ? t : cu(e.type) || "Memo";
        case Fn:
            t = e._payload, e = e._init;
            try {
                return cu(e(t))
            } catch {}
    }
    return null
}

function $y(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return cu(t);
        case 8:
            return t === Oc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ir(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Pp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Wy(e) {
    var t = Pp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function cs(e) {
    e._valueTracker || (e._valueTracker = Wy(e))
}

function Ap(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Pp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Js(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function du(e, t) {
    var n = t.checked;
    return Be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Xd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ir(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Rp(e, t) {
    t = t.checked, t != null && jc(e, "checked", t, !1)
}

function fu(e, t) {
    Rp(e, t);
    var n = ir(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? hu(e, t.type, n) : t.hasOwnProperty("defaultValue") && hu(e, t.type, ir(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function qd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function hu(e, t, n) {
    (t !== "number" || Js(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ui = Array.isArray;

function fo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ir(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function pu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(ne(91));
    return Be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Jd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(ne(92));
            if (ui(n)) {
                if (1 < n.length) throw Error(ne(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ir(n)
    }
}

function jp(e, t) {
    var n = ir(t.value),
        r = ir(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ef(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Op(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function mu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Op(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ds, Ip = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ds = ds || document.createElement("div"), ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ds.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ei(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var pi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Hy = ["Webkit", "ms", "Moz", "O"];
Object.keys(pi).forEach(function(e) {
    Hy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), pi[t] = pi[e]
    })
});

function Lp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || pi.hasOwnProperty(e) && pi[e] ? ("" + t).trim() : t + "px"
}

function Mp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Lp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Vy = Be({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function gu(e, t) {
    if (t) {
        if (Vy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(ne(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(ne(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(ne(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(ne(62))
    }
}

function vu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var yu = null;

function Mc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var wu = null,
    ho = null,
    po = null;

function tf(e) {
    if (e = es(e)) {
        if (typeof wu != "function") throw Error(ne(280));
        var t = e.stateNode;
        t && (t = Da(t), wu(e.stateNode, e.type, t))
    }
}

function Dp(e) {
    ho ? po ? po.push(e) : po = [e] : ho = e
}

function zp() {
    if (ho) {
        var e = ho,
            t = po;
        if (po = ho = null, tf(e), t)
            for (e = 0; e < t.length; e++) tf(t[e])
    }
}

function Fp(e, t) {
    return e(t)
}

function Bp() {}
var bl = !1;

function Up(e, t, n) {
    if (bl) return e(t, n);
    bl = !0;
    try {
        return Fp(e, t, n)
    } finally {
        bl = !1, (ho !== null || po !== null) && (Bp(), zp())
    }
}

function ki(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Da(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(ne(231, t, typeof n));
    return n
}
var xu = !1;
if (En) try {
    var Xo = {};
    Object.defineProperty(Xo, "passive", {
        get: function() {
            xu = !0
        }
    }), window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo)
} catch {
    xu = !1
}

function Ky(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (m) {
        this.onError(m)
    }
}
var mi = !1,
    ea = null,
    ta = !1,
    bu = null,
    Gy = {
        onError: function(e) {
            mi = !0, ea = e
        }
    };

function Yy(e, t, n, r, o, i, s, a, l) {
    mi = !1, ea = null, Ky.apply(Gy, arguments)
}

function Qy(e, t, n, r, o, i, s, a, l) {
    if (Yy.apply(this, arguments), mi) {
        if (mi) {
            var u = ea;
            mi = !1, ea = null
        } else throw Error(ne(198));
        ta || (ta = !0, bu = u)
    }
}

function $r(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function $p(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function nf(e) {
    if ($r(e) !== e) throw Error(ne(188))
}

function Zy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = $r(e), t === null) throw Error(ne(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return nf(o), e;
                if (i === r) return nf(o), t;
                i = i.sibling
            }
            throw Error(ne(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (a === r) {
                    s = !0, r = o, n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (a === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(ne(189))
            }
        }
        if (n.alternate !== r) throw Error(ne(190))
    }
    if (n.tag !== 3) throw Error(ne(188));
    return n.stateNode.current === n ? e : t
}

function Wp(e) {
    return e = Zy(e), e !== null ? Hp(e) : null
}

function Hp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Hp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Vp = Ot.unstable_scheduleCallback,
    rf = Ot.unstable_cancelCallback,
    Xy = Ot.unstable_shouldYield,
    qy = Ot.unstable_requestPaint,
    He = Ot.unstable_now,
    Jy = Ot.unstable_getCurrentPriorityLevel,
    Dc = Ot.unstable_ImmediatePriority,
    Kp = Ot.unstable_UserBlockingPriority,
    na = Ot.unstable_NormalPriority,
    e1 = Ot.unstable_LowPriority,
    Gp = Ot.unstable_IdlePriority,
    Oa = null,
    fn = null;

function t1(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
        fn.onCommitFiberRoot(Oa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : o1,
    n1 = Math.log,
    r1 = Math.LN2;

function o1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (n1(e) / r1 | 0) | 0
}
var fs = 64,
    hs = 4194304;

function ci(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ra(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = ci(a) : (i &= s, i !== 0 && (r = ci(i)))
    } else s = n & ~o, s !== 0 ? r = ci(s) : i !== 0 && (r = ci(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Jt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function i1(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function s1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - Jt(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = i1(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function Su(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Yp() {
    var e = fs;
    return fs <<= 1, !(fs & 4194240) && (fs = 64), e
}

function Sl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function qi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Jt(t), e[t] = n
}

function a1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - Jt(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function zc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Jt(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var Ce = 0;

function Qp(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zp, Fc, Xp, qp, Jp, _u = !1,
    ps = [],
    Xn = null,
    qn = null,
    Jn = null,
    Ti = new Map,
    Ni = new Map,
    Un = [],
    l1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function of (e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Xn = null;
            break;
        case "dragenter":
        case "dragleave":
            qn = null;
            break;
        case "mouseover":
        case "mouseout":
            Jn = null;
            break;
        case "pointerover":
        case "pointerout":
            Ti.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ni.delete(t.pointerId)
    }
}

function qo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = es(t), t !== null && Fc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function u1(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Xn = qo(Xn, e, t, n, r, o), !0;
        case "dragenter":
            return qn = qo(qn, e, t, n, r, o), !0;
        case "mouseover":
            return Jn = qo(Jn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Ti.set(i, qo(Ti.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Ni.set(i, qo(Ni.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function em(e) {
    var t = Sr(e.target);
    if (t !== null) {
        var n = $r(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = $p(n), t !== null) {
                    e.blockedOn = t, Jp(e.priority, function() {
                        Xp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ds(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            yu = r, n.target.dispatchEvent(r), yu = null
        } else return t = es(n), t !== null && Fc(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function sf(e, t, n) {
    Ds(e) && n.delete(t)
}

function c1() {
    _u = !1, Xn !== null && Ds(Xn) && (Xn = null), qn !== null && Ds(qn) && (qn = null), Jn !== null && Ds(Jn) && (Jn = null), Ti.forEach(sf), Ni.forEach(sf)
}

function Jo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _u || (_u = !0, Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, c1)))
}

function Pi(e) {
    function t(o) {
        return Jo(o, e)
    }
    if (0 < ps.length) {
        Jo(ps[0], e);
        for (var n = 1; n < ps.length; n++) {
            var r = ps[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Xn !== null && Jo(Xn, e), qn !== null && Jo(qn, e), Jn !== null && Jo(Jn, e), Ti.forEach(t), Ni.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null);) em(n), n.blockedOn === null && Un.shift()
}
var mo = Rn.ReactCurrentBatchConfig,
    oa = !0;

function d1(e, t, n, r) {
    var o = Ce,
        i = mo.transition;
    mo.transition = null;
    try {
        Ce = 1, Bc(e, t, n, r)
    } finally {
        Ce = o, mo.transition = i
    }
}

function f1(e, t, n, r) {
    var o = Ce,
        i = mo.transition;
    mo.transition = null;
    try {
        Ce = 4, Bc(e, t, n, r)
    } finally {
        Ce = o, mo.transition = i
    }
}

function Bc(e, t, n, r) {
    if (oa) {
        var o = Cu(e, t, n, r);
        if (o === null) jl(e, t, r, ia, n), of (e, r);
        else if (u1(o, e, t, n, r)) r.stopPropagation();
        else if ( of (e, r), t & 4 && -1 < l1.indexOf(e)) {
            for (; o !== null;) {
                var i = es(o);
                if (i !== null && Zp(i), i = Cu(e, t, n, r), i === null && jl(e, t, r, ia, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else jl(e, t, r, null, n)
    }
}
var ia = null;

function Cu(e, t, n, r) {
    if (ia = null, e = Mc(r), e = Sr(e), e !== null)
        if (t = $r(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = $p(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ia = e, null
}

function tm(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Jy()) {
                case Dc:
                    return 1;
                case Kp:
                    return 4;
                case na:
                case e1:
                    return 16;
                case Gp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Yn = null,
    Uc = null,
    zs = null;

function nm() {
    if (zs) return zs;
    var e, t = Uc,
        n = t.length,
        r, o = "value" in Yn ? Yn.value : Yn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return zs = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Fs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ms() {
    return !0
}

function af() {
    return !1
}

function Mt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ms : af, this.isPropagationStopped = af, this
    }
    return Be(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms)
        },
        persist: function() {},
        isPersistent: ms
    }), t
}
var $o = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    $c = Mt($o),
    Ji = Be({}, $o, {
        view: 0,
        detail: 0
    }),
    h1 = Mt(Ji),
    _l, Cl, ei, Ia = Be({}, Ji, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wc,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ei && (ei && e.type === "mousemove" ? (_l = e.screenX - ei.screenX, Cl = e.screenY - ei.screenY) : Cl = _l = 0, ei = e), _l)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Cl
        }
    }),
    lf = Mt(Ia),
    p1 = Be({}, Ia, {
        dataTransfer: 0
    }),
    m1 = Mt(p1),
    g1 = Be({}, Ji, {
        relatedTarget: 0
    }),
    El = Mt(g1),
    v1 = Be({}, $o, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    y1 = Mt(v1),
    w1 = Be({}, $o, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    x1 = Mt(w1),
    b1 = Be({}, $o, {
        data: 0
    }),
    uf = Mt(b1),
    S1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    _1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    C1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function E1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = C1[e]) ? !!t[e] : !1
}

function Wc() {
    return E1
}
var k1 = Be({}, Ji, {
        key: function(e) {
            if (e.key) {
                var t = S1[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wc,
        charCode: function(e) {
            return e.type === "keypress" ? Fs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    T1 = Mt(k1),
    N1 = Be({}, Ia, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    cf = Mt(N1),
    P1 = Be({}, Ji, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wc
    }),
    A1 = Mt(P1),
    R1 = Be({}, $o, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    j1 = Mt(R1),
    O1 = Be({}, Ia, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    I1 = Mt(O1),
    L1 = [9, 13, 27, 32],
    Hc = En && "CompositionEvent" in window,
    gi = null;
En && "documentMode" in document && (gi = document.documentMode);
var M1 = En && "TextEvent" in window && !gi,
    rm = En && (!Hc || gi && 8 < gi && 11 >= gi),
    df = " ",
    ff = !1;

function om(e, t) {
    switch (e) {
        case "keyup":
            return L1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function im(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var to = !1;

function D1(e, t) {
    switch (e) {
        case "compositionend":
            return im(t);
        case "keypress":
            return t.which !== 32 ? null : (ff = !0, df);
        case "textInput":
            return e = t.data, e === df && ff ? null : e;
        default:
            return null
    }
}

function z1(e, t) {
    if (to) return e === "compositionend" || !Hc && om(e, t) ? (e = nm(), zs = Uc = Yn = null, to = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return rm && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var F1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function hf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!F1[e.type] : t === "textarea"
}

function sm(e, t, n, r) {
    Dp(r), t = sa(t, "onChange"), 0 < t.length && (n = new $c("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var vi = null,
    Ai = null;

function B1(e) {
    vm(e, 0)
}

function La(e) {
    var t = oo(e);
    if (Ap(t)) return e
}

function U1(e, t) {
    if (e === "change") return t
}
var am = !1;
if (En) {
    var kl;
    if (En) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var pf = document.createElement("div");
            pf.setAttribute("oninput", "return;"), Tl = typeof pf.oninput == "function"
        }
        kl = Tl
    } else kl = !1;
    am = kl && (!document.documentMode || 9 < document.documentMode)
}

function mf() {
    vi && (vi.detachEvent("onpropertychange", lm), Ai = vi = null)
}

function lm(e) {
    if (e.propertyName === "value" && La(Ai)) {
        var t = [];
        sm(t, Ai, e, Mc(e)), Up(B1, t)
    }
}

function $1(e, t, n) {
    e === "focusin" ? (mf(), vi = t, Ai = n, vi.attachEvent("onpropertychange", lm)) : e === "focusout" && mf()
}

function W1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return La(Ai)
}

function H1(e, t) {
    if (e === "click") return La(t)
}

function V1(e, t) {
    if (e === "input" || e === "change") return La(t)
}

function K1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tn = typeof Object.is == "function" ? Object.is : K1;

function Ri(e, t) {
    if (tn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!su.call(t, o) || !tn(e[o], t[o])) return !1
    }
    return !0
}

function gf(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function vf(e, t) {
    var n = gf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = gf(n)
    }
}

function um(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? um(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function cm() {
    for (var e = window, t = Js(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Js(e.document)
    }
    return t
}

function Vc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function G1(e) {
    var t = cm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && um(n.ownerDocument.documentElement, n)) {
        if (r !== null && Vc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = vf(n, i);
                var s = vf(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Y1 = En && "documentMode" in document && 11 >= document.documentMode,
    no = null,
    Eu = null,
    yi = null,
    ku = !1;

function yf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ku || no == null || no !== Js(r) || (r = no, "selectionStart" in r && Vc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), yi && Ri(yi, r) || (yi = r, r = sa(Eu, "onSelect"), 0 < r.length && (t = new $c("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = no)))
}

function gs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var ro = {
        animationend: gs("Animation", "AnimationEnd"),
        animationiteration: gs("Animation", "AnimationIteration"),
        animationstart: gs("Animation", "AnimationStart"),
        transitionend: gs("Transition", "TransitionEnd")
    },
    Nl = {},
    dm = {};
En && (dm = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);

function Ma(e) {
    if (Nl[e]) return Nl[e];
    if (!ro[e]) return e;
    var t = ro[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in dm) return Nl[e] = t[n];
    return e
}
var fm = Ma("animationend"),
    hm = Ma("animationiteration"),
    pm = Ma("animationstart"),
    mm = Ma("transitionend"),
    gm = new Map,
    wf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function dr(e, t) {
    gm.set(e, t), Ur(t, [e])
}
for (var Pl = 0; Pl < wf.length; Pl++) {
    var Al = wf[Pl],
        Q1 = Al.toLowerCase(),
        Z1 = Al[0].toUpperCase() + Al.slice(1);
    dr(Q1, "on" + Z1)
}
dr(fm, "onAnimationEnd");
dr(hm, "onAnimationIteration");
dr(pm, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(mm, "onTransitionEnd");
Ro("onMouseEnter", ["mouseout", "mouseover"]);
Ro("onMouseLeave", ["mouseout", "mouseover"]);
Ro("onPointerEnter", ["pointerout", "pointerover"]);
Ro("onPointerLeave", ["pointerout", "pointerover"]);
Ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    X1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));

function xf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Qy(r, t, void 0, e), e.currentTarget = null
}

function vm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
                    xf(o, a, u), i = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
                        xf(o, a, u), i = l
                    }
        }
    }
    if (ta) throw e = bu, ta = !1, bu = null, e
}

function je(e, t) {
    var n = t[Ru];
    n === void 0 && (n = t[Ru] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ym(t, e, 2, !1), n.add(r))
}

function Rl(e, t, n) {
    var r = 0;
    t && (r |= 4), ym(n, e, r, t)
}
var vs = "_reactListening" + Math.random().toString(36).slice(2);

function ji(e) {
    if (!e[vs]) {
        e[vs] = !0, Ep.forEach(function(n) {
            n !== "selectionchange" && (X1.has(n) || Rl(n, !1, e), Rl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vs] || (t[vs] = !0, Rl("selectionchange", !1, t))
    }
}

function ym(e, t, n, r) {
    switch (tm(t)) {
        case 1:
            var o = d1;
            break;
        case 4:
            o = f1;
            break;
        default:
            o = Bc
    }
    n = o.bind(null, t, n, e), o = void 0, !xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function jl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = Sr(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = i = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Up(function() {
        var u = i,
            m = Mc(n),
            h = [];
        e: {
            var c = gm.get(e);
            if (c !== void 0) {
                var f = $c,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Fs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = T1;
                        break;
                    case "focusin":
                        y = "focus", f = El;
                        break;
                    case "focusout":
                        y = "blur", f = El;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = El;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        f = lf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = m1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = A1;
                        break;
                    case fm:
                    case hm:
                    case pm:
                        f = y1;
                        break;
                    case mm:
                        f = j1;
                        break;
                    case "scroll":
                        f = h1;
                        break;
                    case "wheel":
                        f = I1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = x1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = cf
                }
                var d = (t & 4) !== 0,
                    v = !d && e === "scroll",
                    p = d ? c !== null ? c + "Capture" : null : c;
                d = [];
                for (var g = u, w; g !== null;) {
                    w = g;
                    var C = w.stateNode;
                    if (w.tag === 5 && C !== null && (w = C, p !== null && (C = ki(g, p), C != null && d.push(Oi(g, C, w)))), v) break;
                    g = g.return
                }
                0 < d.length && (c = new f(c, y, null, n, m), h.push({
                    event: c,
                    listeners: d
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", c && n !== yu && (y = n.relatedTarget || n.fromElement) && (Sr(y) || y[kn])) break e;
                if ((f || c) && (c = m.window === m ? m : (c = m.ownerDocument) ? c.defaultView || c.parentWindow : window, f ? (y = n.relatedTarget || n.toElement, f = u, y = y ? Sr(y) : null, y !== null && (v = $r(y), y !== v || y.tag !== 5 && y.tag !== 6) && (y = null)) : (f = null, y = u), f !== y)) {
                    if (d = lf, C = "onMouseLeave", p = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (d = cf, C = "onPointerLeave", p = "onPointerEnter", g = "pointer"), v = f == null ? c : oo(f), w = y == null ? c : oo(y), c = new d(C, g + "leave", f, n, m), c.target = v, c.relatedTarget = w, C = null, Sr(m) === u && (d = new d(p, g + "enter", y, n, m), d.target = w, d.relatedTarget = v, C = d), v = C, f && y) t: {
                        for (d = f, p = y, g = 0, w = d; w; w = Vr(w)) g++;
                        for (w = 0, C = p; C; C = Vr(C)) w++;
                        for (; 0 < g - w;) d = Vr(d),
                        g--;
                        for (; 0 < w - g;) p = Vr(p),
                        w--;
                        for (; g--;) {
                            if (d === p || p !== null && d === p.alternate) break t;
                            d = Vr(d), p = Vr(p)
                        }
                        d = null
                    }
                    else d = null;
                    f !== null && bf(h, c, f, d, !1), y !== null && v !== null && bf(h, v, y, d, !0)
                }
            }
            e: {
                if (c = u ? oo(u) : window, f = c.nodeName && c.nodeName.toLowerCase(), f === "select" || f === "input" && c.type === "file") var E = U1;
                else if (hf(c))
                    if (am) E = V1;
                    else {
                        E = W1;
                        var A = $1
                    }
                else(f = c.nodeName) && f.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (E = H1);
                if (E && (E = E(e, u))) {
                    sm(h, E, n, m);
                    break e
                }
                A && A(e, c, u),
                e === "focusout" && (A = c._wrapperState) && A.controlled && c.type === "number" && hu(c, "number", c.value)
            }
            switch (A = u ? oo(u) : window, e) {
                case "focusin":
                    (hf(A) || A.contentEditable === "true") && (no = A, Eu = u, yi = null);
                    break;
                case "focusout":
                    yi = Eu = no = null;
                    break;
                case "mousedown":
                    ku = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ku = !1, yf(h, n, m);
                    break;
                case "selectionchange":
                    if (Y1) break;
                case "keydown":
                case "keyup":
                    yf(h, n, m)
            }
            var N;
            if (Hc) e: {
                switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                }
                j = void 0
            }
            else to ? om(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");j && (rm && n.locale !== "ko" && (to || j !== "onCompositionStart" ? j === "onCompositionEnd" && to && (N = nm()) : (Yn = m, Uc = "value" in Yn ? Yn.value : Yn.textContent, to = !0)), A = sa(u, j), 0 < A.length && (j = new uf(j, e, null, n, m), h.push({
                event: j,
                listeners: A
            }), N ? j.data = N : (N = im(n), N !== null && (j.data = N)))),
            (N = M1 ? D1(e, n) : z1(e, n)) && (u = sa(u, "onBeforeInput"), 0 < u.length && (m = new uf("onBeforeInput", "beforeinput", null, n, m), h.push({
                event: m,
                listeners: u
            }), m.data = N))
        }
        vm(h, t)
    })
}

function Oi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function sa(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = ki(e, n), i != null && r.unshift(Oi(e, i, o)), i = ki(e, t), i != null && r.push(Oi(e, i, o))), e = e.return
    }
    return r
}

function Vr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function bf(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = ki(n, i), l != null && s.unshift(Oi(n, l, a))) : o || (l = ki(n, i), l != null && s.push(Oi(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var q1 = /\r\n?/g,
    J1 = /\u0000|\uFFFD/g;

function Sf(e) {
    return (typeof e == "string" ? e : "" + e).replace(q1, `
`).replace(J1, "")
}

function ys(e, t, n) {
    if (t = Sf(t), Sf(e) !== t && n) throw Error(ne(425))
}

function aa() {}
var Tu = null,
    Nu = null;

function Pu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Au = typeof setTimeout == "function" ? setTimeout : void 0,
    ew = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _f = typeof Promise == "function" ? Promise : void 0,
    tw = typeof queueMicrotask == "function" ? queueMicrotask : typeof _f < "u" ? function(e) {
        return _f.resolve(null).then(e).catch(nw)
    } : Au;

function nw(e) {
    setTimeout(function() {
        throw e
    })
}

function Ol(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Pi(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Pi(t)
}

function er(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Cf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wo = Math.random().toString(36).slice(2),
    cn = "__reactFiber$" + Wo,
    Ii = "__reactProps$" + Wo,
    kn = "__reactContainer$" + Wo,
    Ru = "__reactEvents$" + Wo,
    rw = "__reactListeners$" + Wo,
    ow = "__reactHandles$" + Wo;

function Sr(e) {
    var t = e[cn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[kn] || n[cn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Cf(e); e !== null;) {
                    if (n = e[cn]) return n;
                    e = Cf(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function es(e) {
    return e = e[cn] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function oo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(ne(33))
}

function Da(e) {
    return e[Ii] || null
}
var ju = [],
    io = -1;

function fr(e) {
    return {
        current: e
    }
}

function Oe(e) {
    0 > io || (e.current = ju[io], ju[io] = null, io--)
}

function Ae(e, t) {
    io++, ju[io] = e.current, e.current = t
}
var sr = {},
    dt = fr(sr),
    St = fr(!1),
    Or = sr;

function jo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return sr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function _t(e) {
    return e = e.childContextTypes, e != null
}

function la() {
    Oe(St), Oe(dt)
}

function Ef(e, t, n) {
    if (dt.current !== sr) throw Error(ne(168));
    Ae(dt, t), Ae(St, n)
}

function wm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(ne(108, $y(e) || "Unknown", o));
    return Be({}, n, r)
}

function ua(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sr, Or = dt.current, Ae(dt, e), Ae(St, St.current), !0
}

function kf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ne(169));
    n ? (e = wm(e, t, Or), r.__reactInternalMemoizedMergedChildContext = e, Oe(St), Oe(dt), Ae(dt, e)) : Oe(St), Ae(St, n)
}
var bn = null,
    za = !1,
    Il = !1;

function xm(e) {
    bn === null ? bn = [e] : bn.push(e)
}

function iw(e) {
    za = !0, xm(e)
}

function hr() {
    if (!Il && bn !== null) {
        Il = !0;
        var e = 0,
            t = Ce;
        try {
            var n = bn;
            for (Ce = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            bn = null, za = !1
        } catch (o) {
            throw bn !== null && (bn = bn.slice(e + 1)), Vp(Dc, hr), o
        } finally {
            Ce = t, Il = !1
        }
    }
    return null
}
var so = [],
    ao = 0,
    ca = null,
    da = 0,
    Ft = [],
    Bt = 0,
    Ir = null,
    Sn = 1,
    _n = "";

function vr(e, t) {
    so[ao++] = da, so[ao++] = ca, ca = e, da = t
}

function bm(e, t, n) {
    Ft[Bt++] = Sn, Ft[Bt++] = _n, Ft[Bt++] = Ir, Ir = e;
    var r = Sn;
    e = _n;
    var o = 32 - Jt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - Jt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Sn = 1 << 32 - Jt(t) + o | n << o | r, _n = i + e
    } else Sn = 1 << i | n << o | r, _n = e
}

function Kc(e) {
    e.return !== null && (vr(e, 1), bm(e, 1, 0))
}

function Gc(e) {
    for (; e === ca;) ca = so[--ao], so[ao] = null, da = so[--ao], so[ao] = null;
    for (; e === Ir;) Ir = Ft[--Bt], Ft[Bt] = null, _n = Ft[--Bt], Ft[Bt] = null, Sn = Ft[--Bt], Ft[Bt] = null
}
var Rt = null,
    At = null,
    De = !1,
    Xt = null;

function Sm(e, t) {
    var n = Ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Tf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Rt = e, At = er(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Rt = e, At = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ir !== null ? {
                id: Sn,
                overflow: _n
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Rt = e, At = null, !0) : !1;
        default:
            return !1
    }
}

function Ou(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Iu(e) {
    if (De) {
        var t = At;
        if (t) {
            var n = t;
            if (!Tf(e, t)) {
                if (Ou(e)) throw Error(ne(418));
                t = er(n.nextSibling);
                var r = Rt;
                t && Tf(e, t) ? Sm(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, Rt = e)
            }
        } else {
            if (Ou(e)) throw Error(ne(418));
            e.flags = e.flags & -4097 | 2, De = !1, Rt = e
        }
    }
}

function Nf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Rt = e
}

function ws(e) {
    if (e !== Rt) return !1;
    if (!De) return Nf(e), De = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Pu(e.type, e.memoizedProps)), t && (t = At)) {
        if (Ou(e)) throw _m(), Error(ne(418));
        for (; t;) Sm(e, t), t = er(t.nextSibling)
    }
    if (Nf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(ne(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            At = er(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            At = null
        }
    } else At = Rt ? er(e.stateNode.nextSibling) : null;
    return !0
}

function _m() {
    for (var e = At; e;) e = er(e.nextSibling)
}

function Oo() {
    At = Rt = null, De = !1
}

function Yc(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
var sw = Rn.ReactCurrentBatchConfig;

function ti(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(ne(309));
                var r = n.stateNode
            }
            if (!r) throw Error(ne(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(ne(284));
        if (!n._owner) throw Error(ne(290, e))
    }
    return e
}

function xs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(ne(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Pf(e) {
    var t = e._init;
    return t(e._payload)
}

function Cm(e) {
    function t(p, g) {
        if (e) {
            var w = p.deletions;
            w === null ? (p.deletions = [g], p.flags |= 16) : w.push(g)
        }
    }

    function n(p, g) {
        if (!e) return null;
        for (; g !== null;) t(p, g), g = g.sibling;
        return null
    }

    function r(p, g) {
        for (p = new Map; g !== null;) g.key !== null ? p.set(g.key, g) : p.set(g.index, g), g = g.sibling;
        return p
    }

    function o(p, g) {
        return p = or(p, g), p.index = 0, p.sibling = null, p
    }

    function i(p, g, w) {
        return p.index = w, e ? (w = p.alternate, w !== null ? (w = w.index, w < g ? (p.flags |= 2, g) : w) : (p.flags |= 2, g)) : (p.flags |= 1048576, g)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, g, w, C) {
        return g === null || g.tag !== 6 ? (g = Ul(w, p.mode, C), g.return = p, g) : (g = o(g, w), g.return = p, g)
    }

    function l(p, g, w, C) {
        var E = w.type;
        return E === eo ? m(p, g, w.props.children, C, w.key) : g !== null && (g.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Fn && Pf(E) === g.type) ? (C = o(g, w.props), C.ref = ti(p, g, w), C.return = p, C) : (C = Ks(w.type, w.key, w.props, null, p.mode, C), C.ref = ti(p, g, w), C.return = p, C)
    }

    function u(p, g, w, C) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w.containerInfo || g.stateNode.implementation !== w.implementation ? (g = $l(w, p.mode, C), g.return = p, g) : (g = o(g, w.children || []), g.return = p, g)
    }

    function m(p, g, w, C, E) {
        return g === null || g.tag !== 7 ? (g = Ar(w, p.mode, C, E), g.return = p, g) : (g = o(g, w), g.return = p, g)
    }

    function h(p, g, w) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return g = Ul("" + g, p.mode, w), g.return = p, g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case us:
                    return w = Ks(g.type, g.key, g.props, null, p.mode, w), w.ref = ti(p, null, g), w.return = p, w;
                case Jr:
                    return g = $l(g, p.mode, w), g.return = p, g;
                case Fn:
                    var C = g._init;
                    return h(p, C(g._payload), w)
            }
            if (ui(g) || Zo(g)) return g = Ar(g, p.mode, w, null), g.return = p, g;
            xs(p, g)
        }
        return null
    }

    function c(p, g, w, C) {
        var E = g !== null ? g.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : a(p, g, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case us:
                    return w.key === E ? l(p, g, w, C) : null;
                case Jr:
                    return w.key === E ? u(p, g, w, C) : null;
                case Fn:
                    return E = w._init, c(p, g, E(w._payload), C)
            }
            if (ui(w) || Zo(w)) return E !== null ? null : m(p, g, w, C, null);
            xs(p, w)
        }
        return null
    }

    function f(p, g, w, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return p = p.get(w) || null, a(g, p, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case us:
                    return p = p.get(C.key === null ? w : C.key) || null, l(g, p, C, E);
                case Jr:
                    return p = p.get(C.key === null ? w : C.key) || null, u(g, p, C, E);
                case Fn:
                    var A = C._init;
                    return f(p, g, w, A(C._payload), E)
            }
            if (ui(C) || Zo(C)) return p = p.get(w) || null, m(g, p, C, E, null);
            xs(g, C)
        }
        return null
    }

    function y(p, g, w, C) {
        for (var E = null, A = null, N = g, j = g = 0, I = null; N !== null && j < w.length; j++) {
            N.index > j ? (I = N, N = null) : I = N.sibling;
            var B = c(p, N, w[j], C);
            if (B === null) {
                N === null && (N = I);
                break
            }
            e && N && B.alternate === null && t(p, N), g = i(B, g, j), A === null ? E = B : A.sibling = B, A = B, N = I
        }
        if (j === w.length) return n(p, N), De && vr(p, j), E;
        if (N === null) {
            for (; j < w.length; j++) N = h(p, w[j], C), N !== null && (g = i(N, g, j), A === null ? E = N : A.sibling = N, A = N);
            return De && vr(p, j), E
        }
        for (N = r(p, N); j < w.length; j++) I = f(N, p, j, w[j], C), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? j : I.key), g = i(I, g, j), A === null ? E = I : A.sibling = I, A = I);
        return e && N.forEach(function(G) {
            return t(p, G)
        }), De && vr(p, j), E
    }

    function d(p, g, w, C) {
        var E = Zo(w);
        if (typeof E != "function") throw Error(ne(150));
        if (w = E.call(w), w == null) throw Error(ne(151));
        for (var A = E = null, N = g, j = g = 0, I = null, B = w.next(); N !== null && !B.done; j++, B = w.next()) {
            N.index > j ? (I = N, N = null) : I = N.sibling;
            var G = c(p, N, B.value, C);
            if (G === null) {
                N === null && (N = I);
                break
            }
            e && N && G.alternate === null && t(p, N), g = i(G, g, j), A === null ? E = G : A.sibling = G, A = G, N = I
        }
        if (B.done) return n(p, N), De && vr(p, j), E;
        if (N === null) {
            for (; !B.done; j++, B = w.next()) B = h(p, B.value, C), B !== null && (g = i(B, g, j), A === null ? E = B : A.sibling = B, A = B);
            return De && vr(p, j), E
        }
        for (N = r(p, N); !B.done; j++, B = w.next()) B = f(N, p, j, B.value, C), B !== null && (e && B.alternate !== null && N.delete(B.key === null ? j : B.key), g = i(B, g, j), A === null ? E = B : A.sibling = B, A = B);
        return e && N.forEach(function(k) {
            return t(p, k)
        }), De && vr(p, j), E
    }

    function v(p, g, w, C) {
        if (typeof w == "object" && w !== null && w.type === eo && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case us:
                    e: {
                        for (var E = w.key, A = g; A !== null;) {
                            if (A.key === E) {
                                if (E = w.type, E === eo) {
                                    if (A.tag === 7) {
                                        n(p, A.sibling), g = o(A, w.props.children), g.return = p, p = g;
                                        break e
                                    }
                                } else if (A.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Fn && Pf(E) === A.type) {
                                    n(p, A.sibling), g = o(A, w.props), g.ref = ti(p, A, w), g.return = p, p = g;
                                    break e
                                }
                                n(p, A);
                                break
                            } else t(p, A);
                            A = A.sibling
                        }
                        w.type === eo ? (g = Ar(w.props.children, p.mode, C, w.key), g.return = p, p = g) : (C = Ks(w.type, w.key, w.props, null, p.mode, C), C.ref = ti(p, g, w), C.return = p, p = C)
                    }
                    return s(p);
                case Jr:
                    e: {
                        for (A = w.key; g !== null;) {
                            if (g.key === A)
                                if (g.tag === 4 && g.stateNode.containerInfo === w.containerInfo && g.stateNode.implementation === w.implementation) {
                                    n(p, g.sibling), g = o(g, w.children || []), g.return = p, p = g;
                                    break e
                                } else {
                                    n(p, g);
                                    break
                                }
                            else t(p, g);
                            g = g.sibling
                        }
                        g = $l(w, p.mode, C),
                        g.return = p,
                        p = g
                    }
                    return s(p);
                case Fn:
                    return A = w._init, v(p, g, A(w._payload), C)
            }
            if (ui(w)) return y(p, g, w, C);
            if (Zo(w)) return d(p, g, w, C);
            xs(p, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, g !== null && g.tag === 6 ? (n(p, g.sibling), g = o(g, w), g.return = p, p = g) : (n(p, g), g = Ul(w, p.mode, C), g.return = p, p = g), s(p)) : n(p, g)
    }
    return v
}
var Io = Cm(!0),
    Em = Cm(!1),
    fa = fr(null),
    ha = null,
    lo = null,
    Qc = null;

function Zc() {
    Qc = lo = ha = null
}

function Xc(e) {
    var t = fa.current;
    Oe(fa), e._currentValue = t
}

function Lu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function go(e, t) {
    ha = e, Qc = lo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (bt = !0), e.firstContext = null)
}

function Wt(e) {
    var t = e._currentValue;
    if (Qc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, lo === null) {
            if (ha === null) throw Error(ne(308));
            lo = e, ha.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else lo = lo.next = e;
    return t
}
var _r = null;

function qc(e) {
    _r === null ? _r = [e] : _r.push(e)
}

function km(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, qc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Tn(e, r)
}

function Tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Bn = !1;

function Jc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Tm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Cn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function tr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Se & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Tn(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, qc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Tn(e, n)
}

function Bs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, zc(e, n)
    }
}

function Af(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function pa(e, t, n, r) {
    var o = e.updateQueue;
    Bn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? i = u : s.next = u, s = l;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, a = m.lastBaseUpdate, a !== s && (a === null ? m.firstBaseUpdate = u : a.next = u, m.lastBaseUpdate = l))
    }
    if (i !== null) {
        var h = o.baseState;
        s = 0, m = u = l = null, a = i;
        do {
            var c = a.lane,
                f = a.eventTime;
            if ((r & c) === c) {
                m !== null && (m = m.next = {
                    eventTime: f,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e,
                        d = a;
                    switch (c = t, f = n, d.tag) {
                        case 1:
                            if (y = d.payload, typeof y == "function") {
                                h = y.call(f, h, c);
                                break e
                            }
                            h = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = d.payload, c = typeof y == "function" ? y.call(f, h, c) : y, c == null) break e;
                            h = Be({}, h, c);
                            break e;
                        case 2:
                            Bn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, c = o.effects, c === null ? o.effects = [a] : c.push(a))
            } else f = {
                eventTime: f,
                lane: c,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, m === null ? (u = m = f, l = h) : m = m.next = f, s |= c;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                c = a, a = c.next, c.next = null, o.lastBaseUpdate = c, o.shared.pending = null
            }
        } while (!0);
        if (m === null && (l = h), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        Mr |= s, e.lanes = s, e.memoizedState = h
    }
}

function Rf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(ne(191, o));
                o.call(r)
            }
        }
}
var ts = {},
    hn = fr(ts),
    Li = fr(ts),
    Mi = fr(ts);

function Cr(e) {
    if (e === ts) throw Error(ne(174));
    return e
}

function ed(e, t) {
    switch (Ae(Mi, t), Ae(Li, e), Ae(hn, ts), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : mu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = mu(t, e)
    }
    Oe(hn), Ae(hn, t)
}

function Lo() {
    Oe(hn), Oe(Li), Oe(Mi)
}

function Nm(e) {
    Cr(Mi.current);
    var t = Cr(hn.current),
        n = mu(t, e.type);
    t !== n && (Ae(Li, e), Ae(hn, n))
}

function td(e) {
    Li.current === e && (Oe(hn), Oe(Li))
}
var ze = fr(0);

function ma(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ll = [];

function nd() {
    for (var e = 0; e < Ll.length; e++) Ll[e]._workInProgressVersionPrimary = null;
    Ll.length = 0
}
var Us = Rn.ReactCurrentDispatcher,
    Ml = Rn.ReactCurrentBatchConfig,
    Lr = 0,
    Fe = null,
    Ye = null,
    qe = null,
    ga = !1,
    wi = !1,
    Di = 0,
    aw = 0;

function st() {
    throw Error(ne(321))
}

function rd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!tn(e[n], t[n])) return !1;
    return !0
}

function od(e, t, n, r, o, i) {
    if (Lr = i, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Us.current = e === null || e.memoizedState === null ? dw : fw, e = n(r, o), wi) {
        i = 0;
        do {
            if (wi = !1, Di = 0, 25 <= i) throw Error(ne(301));
            i += 1, qe = Ye = null, t.updateQueue = null, Us.current = hw, e = n(r, o)
        } while (wi)
    }
    if (Us.current = va, t = Ye !== null && Ye.next !== null, Lr = 0, qe = Ye = Fe = null, ga = !1, t) throw Error(ne(300));
    return e
}

function id() {
    var e = Di !== 0;
    return Di = 0, e
}

function sn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return qe === null ? Fe.memoizedState = qe = e : qe = qe.next = e, qe
}

function Ht() {
    if (Ye === null) {
        var e = Fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ye.next;
    var t = qe === null ? Fe.memoizedState : qe.next;
    if (t !== null) qe = t, Ye = e;
    else {
        if (e === null) throw Error(ne(310));
        Ye = e, e = {
            memoizedState: Ye.memoizedState,
            baseState: Ye.baseState,
            baseQueue: Ye.baseQueue,
            queue: Ye.queue,
            next: null
        }, qe === null ? Fe.memoizedState = qe = e : qe = qe.next = e
    }
    return qe
}

function zi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Dl(e) {
    var t = Ht(),
        n = t.queue;
    if (n === null) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = Ye,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = i;
        do {
            var m = u.lane;
            if ((Lr & m) === m) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: m,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = h, s = r) : l = l.next = h, Fe.lanes |= m, Mr |= m
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a, tn(r, t.memoizedState) || (bt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, Fe.lanes |= i, Mr |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function zl(e) {
    var t = Ht(),
        n = t.queue;
    if (n === null) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        tn(i, t.memoizedState) || (bt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Pm() {}

function Am(e, t) {
    var n = Fe,
        r = Ht(),
        o = t(),
        i = !tn(r.memoizedState, o);
    if (i && (r.memoizedState = o, bt = !0), r = r.queue, sd(Om.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || qe !== null && qe.memoizedState.tag & 1) {
        if (n.flags |= 2048, Fi(9, jm.bind(null, n, r, o, t), void 0, null), Je === null) throw Error(ne(349));
        Lr & 30 || Rm(n, t, o)
    }
    return o
}

function Rm(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function jm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Im(t) && Lm(e)
}

function Om(e, t, n) {
    return n(function() {
        Im(t) && Lm(e)
    })
}

function Im(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !tn(e, n)
    } catch {
        return !0
    }
}

function Lm(e) {
    var t = Tn(e, 1);
    t !== null && en(t, e, 1, -1)
}

function jf(e) {
    var t = sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = cw.bind(null, Fe, e), [t.memoizedState, e]
}

function Fi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Mm() {
    return Ht().memoizedState
}

function $s(e, t, n, r) {
    var o = sn();
    Fe.flags |= e, o.memoizedState = Fi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Fa(e, t, n, r) {
    var o = Ht();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ye !== null) {
        var s = Ye.memoizedState;
        if (i = s.destroy, r !== null && rd(r, s.deps)) {
            o.memoizedState = Fi(t, n, i, r);
            return
        }
    }
    Fe.flags |= e, o.memoizedState = Fi(1 | t, n, i, r)
}

function Of(e, t) {
    return $s(8390656, 8, e, t)
}

function sd(e, t) {
    return Fa(2048, 8, e, t)
}

function Dm(e, t) {
    return Fa(4, 2, e, t)
}

function zm(e, t) {
    return Fa(4, 4, e, t)
}

function Fm(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Bm(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Fa(4, 4, Fm.bind(null, t, e), n)
}

function ad() {}

function Um(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function $m(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Wm(e, t, n) {
    return Lr & 21 ? (tn(n, t) || (n = Yp(), Fe.lanes |= n, Mr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bt = !0), e.memoizedState = n)
}

function lw(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ml.transition;
    Ml.transition = {};
    try {
        e(!1), t()
    } finally {
        Ce = n, Ml.transition = r
    }
}

function Hm() {
    return Ht().memoizedState
}

function uw(e, t, n) {
    var r = rr(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Vm(e)) Km(t, n);
    else if (n = km(e, t, n, r), n !== null) {
        var o = gt();
        en(n, e, r, o), Gm(n, t, r)
    }
}

function cw(e, t, n) {
    var r = rr(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Vm(e)) Km(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, tn(a, s)) {
                var l = t.interleaved;
                l === null ? (o.next = o, qc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = km(e, t, o, r), n !== null && (o = gt(), en(n, e, r, o), Gm(n, t, r))
    }
}

function Vm(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe
}

function Km(e, t) {
    wi = ga = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Gm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, zc(e, n)
    }
}
var va = {
        readContext: Wt,
        useCallback: st,
        useContext: st,
        useEffect: st,
        useImperativeHandle: st,
        useInsertionEffect: st,
        useLayoutEffect: st,
        useMemo: st,
        useReducer: st,
        useRef: st,
        useState: st,
        useDebugValue: st,
        useDeferredValue: st,
        useTransition: st,
        useMutableSource: st,
        useSyncExternalStore: st,
        useId: st,
        unstable_isNewReconciler: !1
    },
    dw = {
        readContext: Wt,
        useCallback: function(e, t) {
            return sn().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Wt,
        useEffect: Of,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, $s(4194308, 4, Fm.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return $s(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return $s(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = sn();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = sn();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = uw.bind(null, Fe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = sn();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: jf,
        useDebugValue: ad,
        useDeferredValue: function(e) {
            return sn().memoizedState = e
        },
        useTransition: function() {
            var e = jf(!1),
                t = e[0];
            return e = lw.bind(null, e[1]), sn().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Fe,
                o = sn();
            if (De) {
                if (n === void 0) throw Error(ne(407));
                n = n()
            } else {
                if (n = t(), Je === null) throw Error(ne(349));
                Lr & 30 || Rm(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, Of(Om.bind(null, r, i, e), [e]), r.flags |= 2048, Fi(9, jm.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = sn(),
                t = Je.identifierPrefix;
            if (De) {
                var n = _n,
                    r = Sn;
                n = (r & ~(1 << 32 - Jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Di++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = aw++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    fw = {
        readContext: Wt,
        useCallback: Um,
        useContext: Wt,
        useEffect: sd,
        useImperativeHandle: Bm,
        useInsertionEffect: Dm,
        useLayoutEffect: zm,
        useMemo: $m,
        useReducer: Dl,
        useRef: Mm,
        useState: function() {
            return Dl(zi)
        },
        useDebugValue: ad,
        useDeferredValue: function(e) {
            var t = Ht();
            return Wm(t, Ye.memoizedState, e)
        },
        useTransition: function() {
            var e = Dl(zi)[0],
                t = Ht().memoizedState;
            return [e, t]
        },
        useMutableSource: Pm,
        useSyncExternalStore: Am,
        useId: Hm,
        unstable_isNewReconciler: !1
    },
    hw = {
        readContext: Wt,
        useCallback: Um,
        useContext: Wt,
        useEffect: sd,
        useImperativeHandle: Bm,
        useInsertionEffect: Dm,
        useLayoutEffect: zm,
        useMemo: $m,
        useReducer: zl,
        useRef: Mm,
        useState: function() {
            return zl(zi)
        },
        useDebugValue: ad,
        useDeferredValue: function(e) {
            var t = Ht();
            return Ye === null ? t.memoizedState = e : Wm(t, Ye.memoizedState, e)
        },
        useTransition: function() {
            var e = zl(zi)[0],
                t = Ht().memoizedState;
            return [e, t]
        },
        useMutableSource: Pm,
        useSyncExternalStore: Am,
        useId: Hm,
        unstable_isNewReconciler: !1
    };

function Gt(e, t) {
    if (e && e.defaultProps) {
        t = Be({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Mu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ba = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? $r(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = gt(),
            o = rr(e),
            i = Cn(r, o);
        i.payload = t, n != null && (i.callback = n), t = tr(e, i, o), t !== null && (en(t, e, o, r), Bs(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = gt(),
            o = rr(e),
            i = Cn(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = tr(e, i, o), t !== null && (en(t, e, o, r), Bs(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = gt(),
            r = rr(e),
            o = Cn(n, r);
        o.tag = 2, t != null && (o.callback = t), t = tr(e, o, r), t !== null && (en(t, e, r, n), Bs(t, e, r))
    }
};

function If(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ri(n, r) || !Ri(o, i) : !0
}

function Ym(e, t, n) {
    var r = !1,
        o = sr,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Wt(i) : (o = _t(t) ? Or : dt.current, r = t.contextTypes, i = (r = r != null) ? jo(e, o) : sr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ba, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Lf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ba.enqueueReplaceState(t, t.state, null)
}

function Du(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Jc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Wt(i) : (i = _t(t) ? Or : dt.current, o.context = jo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Mu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ba.enqueueReplaceState(o, o.state, null), pa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Mo(e, t) {
    try {
        var n = "",
            r = t;
        do n += Uy(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function Fl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function zu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var pw = typeof WeakMap == "function" ? WeakMap : Map;

function Qm(e, t, n) {
    n = Cn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wa || (wa = !0, Yu = r), zu(e, t)
    }, n
}

function Zm(e, t, n) {
    n = Cn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            zu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        zu(e, t), typeof r != "function" && (nr === null ? nr = new Set([this]) : nr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Mf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new pw;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Nw.bind(null, e, t, n), t.then(e, e))
}

function Df(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function zf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1), t.tag = 2, tr(n, t, 1))), n.lanes |= 1), e)
}
var mw = Rn.ReactCurrentOwner,
    bt = !1;

function pt(e, t, n, r) {
    t.child = e === null ? Em(t, null, n, r) : Io(t, e.child, n, r)
}

function Ff(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return go(t, o), r = od(e, t, n, r, i, o), n = id(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nn(e, t, o)) : (De && n && Kc(t), t.flags |= 1, pt(e, t, r, o), t.child)
}

function Bf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !md(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Xm(e, t, i, r, o)) : (e = Ks(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Ri, n(s, r) && e.ref === t.ref) return Nn(e, t, o)
    }
    return t.flags |= 1, e = or(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Xm(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ri(i, r) && e.ref === t.ref)
            if (bt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (bt = !0);
            else return t.lanes = e.lanes, Nn(e, t, o)
    }
    return Fu(e, t, n, r, o)
}

function qm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Ae(co, Nt), Nt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Ae(co, Nt), Nt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, Ae(co, Nt), Nt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ae(co, Nt), Nt |= r;
    return pt(e, t, o, n), t.child
}

function Jm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Fu(e, t, n, r, o) {
    var i = _t(n) ? Or : dt.current;
    return i = jo(t, i), go(t, o), n = od(e, t, n, r, i, o), r = id(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nn(e, t, o)) : (De && r && Kc(t), t.flags |= 1, pt(e, t, n, o), t.child)
}

function Uf(e, t, n, r, o) {
    if (_t(n)) {
        var i = !0;
        ua(t)
    } else i = !1;
    if (go(t, o), t.stateNode === null) Ws(e, t), Ym(t, n, r), Du(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Wt(u) : (u = _t(n) ? Or : dt.current, u = jo(t, u));
        var m = n.getDerivedStateFromProps,
            h = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Lf(t, s, r, u), Bn = !1;
        var c = t.memoizedState;
        s.state = c, pa(t, r, s, o), l = t.memoizedState, a !== r || c !== l || St.current || Bn ? (typeof m == "function" && (Mu(t, n, m, r), l = t.memoizedState), (a = Bn || If(t, n, a, r, c, l, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Tm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Gt(t.type, a), s.props = u, h = t.pendingProps, c = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Wt(l) : (l = _t(n) ? Or : dt.current, l = jo(t, l));
        var f = n.getDerivedStateFromProps;
        (m = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== h || c !== l) && Lf(t, s, r, l), Bn = !1, c = t.memoizedState, s.state = c, pa(t, r, s, o);
        var y = t.memoizedState;
        a !== h || c !== y || St.current || Bn ? (typeof f == "function" && (Mu(t, n, f, r), y = t.memoizedState), (u = Bn || If(t, n, u, r, c, y, l) || !1) ? (m || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Bu(e, t, n, r, i, o)
}

function Bu(e, t, n, r, o, i) {
    Jm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && kf(t, n, !1), Nn(e, t, i);
    r = t.stateNode, mw.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Io(t, e.child, null, i), t.child = Io(t, null, a, i)) : pt(e, t, a, i), t.memoizedState = r.state, o && kf(t, n, !0), t.child
}

function eg(e) {
    var t = e.stateNode;
    t.pendingContext ? Ef(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ef(e, t.context, !1), ed(e, t.containerInfo)
}

function $f(e, t, n, r, o) {
    return Oo(), Yc(o), t.flags |= 256, pt(e, t, n, r), t.child
}
var Uu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function $u(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function tg(e, t, n) {
    var r = t.pendingProps,
        o = ze.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ae(ze, o & 1), e === null) return Iu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Wa(s, r, 0, null), e = Ar(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = $u(n), t.memoizedState = Uu, e) : ld(t, s));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return gw(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = or(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = or(a, i) : (i = Ar(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? $u(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Uu, r
    }
    return i = e.child, e = i.sibling, r = or(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ld(e, t) {
    return t = Wa({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function bs(e, t, n, r) {
    return r !== null && Yc(r), Io(t, e.child, null, n), e = ld(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function gw(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Fl(Error(ne(422))), bs(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Wa({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Ar(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Io(t, e.child, null, s), t.child.memoizedState = $u(s), t.memoizedState = Uu, i);
    if (!(t.mode & 1)) return bs(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(ne(419)), r = Fl(i, r, void 0), bs(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, bt || a) {
        if (r = Je, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Tn(e, o), en(r, e, o, -1))
        }
        return pd(), r = Fl(Error(ne(421))), bs(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, At = er(o.nextSibling), Rt = t, De = !0, Xt = null, e !== null && (Ft[Bt++] = Sn, Ft[Bt++] = _n, Ft[Bt++] = Ir, Sn = e.id, _n = e.overflow, Ir = t), t = ld(t, r.children), t.flags |= 4096, t)
}

function Wf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Lu(e.return, t, n)
}

function Bl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function ng(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (pt(e, t, r.children, n), r = ze.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Wf(e, n, t);
            else if (e.tag === 19) Wf(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ae(ze, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ma(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ma(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Bl(t, !0, n, null, i);
            break;
        case "together":
            Bl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ws(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(ne(153));
    if (t.child !== null) {
        for (e = t.child, n = or(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = or(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function vw(e, t, n) {
    switch (t.tag) {
        case 3:
            eg(t), Oo();
            break;
        case 5:
            Nm(t);
            break;
        case 1:
            _t(t.type) && ua(t);
            break;
        case 4:
            ed(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Ae(fa, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ae(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tg(e, t, n) : (Ae(ze, ze.current & 1), e = Nn(e, t, n), e !== null ? e.sibling : null);
            Ae(ze, ze.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return ng(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ae(ze, ze.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, qm(e, t, n)
    }
    return Nn(e, t, n)
}
var rg, Wu, og, ig;
rg = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Wu = function() {};
og = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Cr(hn.current);
        var i = null;
        switch (n) {
            case "input":
                o = du(e, o), r = du(e, r), i = [];
                break;
            case "select":
                o = Be({}, o, {
                    value: void 0
                }), r = Be({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = pu(e, o), r = pu(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = aa)
        }
        gu(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ci.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ci.hasOwnProperty(u) ? (l != null && u === "onScroll" && je("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
ig = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ni(e, t) {
    if (!De) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function yw(e, t, n) {
    var r = t.pendingProps;
    switch (Gc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return at(t), null;
        case 1:
            return _t(t.type) && la(), at(t), null;
        case 3:
            return r = t.stateNode, Lo(), Oe(St), Oe(dt), nd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ws(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xt !== null && (Xu(Xt), Xt = null))), Wu(e, t), at(t), null;
        case 5:
            td(t);
            var o = Cr(Mi.current);
            if (n = t.type, e !== null && t.stateNode != null) og(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(ne(166));
                    return at(t), null
                }
                if (e = Cr(hn.current), ws(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[cn] = t, r[Ii] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            je("cancel", r), je("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            je("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < di.length; o++) je(di[o], r);
                            break;
                        case "source":
                            je("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            je("error", r), je("load", r);
                            break;
                        case "details":
                            je("toggle", r);
                            break;
                        case "input":
                            Xd(r, i), je("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, je("invalid", r);
                            break;
                        case "textarea":
                            Jd(r, i), je("invalid", r)
                    }
                    gu(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ys(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ys(r.textContent, a, e), o = ["children", "" + a]) : Ci.hasOwnProperty(s) && a != null && s === "onScroll" && je("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            cs(r), qd(r, i, !0);
                            break;
                        case "textarea":
                            cs(r), ef(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = aa)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Op(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[cn] = t, e[Ii] = r, rg(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = vu(n, r), n) {
                            case "dialog":
                                je("cancel", e), je("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                je("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < di.length; o++) je(di[o], e);
                                o = r;
                                break;
                            case "source":
                                je("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                je("error", e), je("load", e), o = r;
                                break;
                            case "details":
                                je("toggle", e), o = r;
                                break;
                            case "input":
                                Xd(e, r), o = du(e, r), je("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Be({}, r, {
                                    value: void 0
                                }), je("invalid", e);
                                break;
                            case "textarea":
                                Jd(e, r), o = pu(e, r), je("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        gu(n, o),
                        a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? Mp(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ip(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ei(e, l) : typeof l == "number" && Ei(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ci.hasOwnProperty(i) ? l != null && i === "onScroll" && je("scroll", e) : l != null && jc(e, i, l, s))
                            }
                        switch (n) {
                            case "input":
                                cs(e), qd(e, r, !1);
                                break;
                            case "textarea":
                                cs(e), ef(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ir(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? fo(e, !!r.multiple, i, !1) : r.defaultValue != null && fo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = aa)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return at(t), null;
        case 6:
            if (e && t.stateNode != null) ig(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(ne(166));
                if (n = Cr(Mi.current), Cr(hn.current), ws(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[cn] = t, (i = r.nodeValue !== n) && (e = Rt, e !== null)) switch (e.tag) {
                        case 3:
                            ys(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ys(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cn] = t, t.stateNode = r
            }
            return at(t), null;
        case 13:
            if (Oe(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (De && At !== null && t.mode & 1 && !(t.flags & 128)) _m(), Oo(), t.flags |= 98560, i = !1;
                else if (i = ws(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(ne(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(ne(317));
                        i[cn] = t
                    } else Oo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    at(t), i = !1
                } else Xt !== null && (Xu(Xt), Xt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? Qe === 0 && (Qe = 3) : pd())), t.updateQueue !== null && (t.flags |= 4), at(t), null);
        case 4:
            return Lo(), Wu(e, t), e === null && ji(t.stateNode.containerInfo), at(t), null;
        case 10:
            return Xc(t.type._context), at(t), null;
        case 17:
            return _t(t.type) && la(), at(t), null;
        case 19:
            if (Oe(ze), i = t.memoizedState, i === null) return at(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) ni(i, !1);
                else {
                    if (Qe !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = ma(e), s !== null) {
                                for (t.flags |= 128, ni(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return Ae(ze, ze.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && He() > Do && (t.flags |= 128, r = !0, ni(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ma(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ni(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !De) return at(t), null
                    } else 2 * He() - i.renderingStartTime > Do && n !== 1073741824 && (t.flags |= 128, r = !0, ni(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = He(), t.sibling = null, n = ze.current, Ae(ze, r ? n & 1 | 2 : n & 1), t) : (at(t), null);
        case 22:
        case 23:
            return hd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nt & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(ne(156, t.tag))
}

function ww(e, t) {
    switch (Gc(t), t.tag) {
        case 1:
            return _t(t.type) && la(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Lo(), Oe(St), Oe(dt), nd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return td(t), null;
        case 13:
            if (Oe(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(ne(340));
                Oo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Oe(ze), null;
        case 4:
            return Lo(), null;
        case 10:
            return Xc(t.type._context), null;
        case 22:
        case 23:
            return hd(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ss = !1,
    ct = !1,
    xw = typeof WeakSet == "function" ? WeakSet : Set,
    le = null;

function uo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            $e(e, t, r)
        } else n.current = null
}

function Hu(e, t, n) {
    try {
        n()
    } catch (r) {
        $e(e, t, r)
    }
}
var Hf = !1;

function bw(e, t) {
    if (Tu = oa, e = cm(), Vc(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    m = 0,
                    h = e,
                    c = null;
                t: for (;;) {
                    for (var f; h !== n || o !== 0 && h.nodeType !== 3 || (a = s + o), h !== i || r !== 0 && h.nodeType !== 3 || (l = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (f = h.firstChild) !== null;) c = h, h = f;
                    for (;;) {
                        if (h === e) break t;
                        if (c === n && ++u === o && (a = s), c === i && ++m === r && (l = s), (f = h.nextSibling) !== null) break;
                        h = c, c = h.parentNode
                    }
                    h = f
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Nu = {
            focusedElem: e,
            selectionRange: n
        }, oa = !1, le = t; le !== null;)
        if (t = le, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, le = e;
        else
            for (; le !== null;) {
                t = le;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var d = y.memoizedProps,
                                    v = y.memoizedState,
                                    p = t.stateNode,
                                    g = p.getSnapshotBeforeUpdate(t.elementType === t.type ? d : Gt(t.type, d), v);
                                p.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(ne(163))
                    }
                } catch (C) {
                    $e(t, t.return, C)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, le = e;
                    break
                }
                le = t.return
            }
    return y = Hf, Hf = !1, y
}

function xi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Hu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Ua(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Vu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function sg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cn], delete t[Ii], delete t[Ru], delete t[rw], delete t[ow])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ag(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Vf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ag(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ku(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = aa));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ku(e, t, n), e = e.sibling; e !== null;) Ku(e, t, n), e = e.sibling
}

function Gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Gu(e, t, n), e = e.sibling; e !== null;) Gu(e, t, n), e = e.sibling
}
var et = null,
    Zt = !1;

function In(e, t, n) {
    for (n = n.child; n !== null;) lg(e, t, n), n = n.sibling
}

function lg(e, t, n) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
        fn.onCommitFiberUnmount(Oa, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ct || uo(n, t);
        case 6:
            var r = et,
                o = Zt;
            et = null, In(e, t, n), et = r, Zt = o, et !== null && (Zt ? (e = et, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : et.removeChild(n.stateNode));
            break;
        case 18:
            et !== null && (Zt ? (e = et, n = n.stateNode, e.nodeType === 8 ? Ol(e.parentNode, n) : e.nodeType === 1 && Ol(e, n), Pi(e)) : Ol(et, n.stateNode));
            break;
        case 4:
            r = et, o = Zt, et = n.stateNode.containerInfo, Zt = !0, In(e, t, n), et = r, Zt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Hu(n, t, s), o = o.next
                } while (o !== r)
            }
            In(e, t, n);
            break;
        case 1:
            if (!ct && (uo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                $e(n, t, a)
            }
            In(e, t, n);
            break;
        case 21:
            In(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ct = (r = ct) || n.memoizedState !== null, In(e, t, n), ct = r) : In(e, t, n);
            break;
        default:
            In(e, t, n)
    }
}

function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new xw), t.forEach(function(r) {
            var o = Aw.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Vt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            et = a.stateNode, Zt = !1;
                            break e;
                        case 3:
                            et = a.stateNode.containerInfo, Zt = !0;
                            break e;
                        case 4:
                            et = a.stateNode.containerInfo, Zt = !0;
                            break e
                    }
                    a = a.return
                }
                if (et === null) throw Error(ne(160));
                lg(i, s, o), et = null, Zt = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                $e(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) ug(t, e), t = t.sibling
}

function ug(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Vt(t, e), on(e), r & 4) {
                try {
                    xi(3, e, e.return), Ua(3, e)
                } catch (d) {
                    $e(e, e.return, d)
                }
                try {
                    xi(5, e, e.return)
                } catch (d) {
                    $e(e, e.return, d)
                }
            }
            break;
        case 1:
            Vt(t, e), on(e), r & 512 && n !== null && uo(n, n.return);
            break;
        case 5:
            if (Vt(t, e), on(e), r & 512 && n !== null && uo(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Ei(o, "")
                } catch (d) {
                    $e(e, e.return, d)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && Rp(o, i), vu(a, s);
                    var u = vu(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var m = l[s],
                            h = l[s + 1];
                        m === "style" ? Mp(o, h) : m === "dangerouslySetInnerHTML" ? Ip(o, h) : m === "children" ? Ei(o, h) : jc(o, m, h, u)
                    }
                    switch (a) {
                        case "input":
                            fu(o, i);
                            break;
                        case "textarea":
                            jp(o, i);
                            break;
                        case "select":
                            var c = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var f = i.value;
                            f != null ? fo(o, !!i.multiple, f, !1) : c !== !!i.multiple && (i.defaultValue != null ? fo(o, !!i.multiple, i.defaultValue, !0) : fo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ii] = i
                } catch (d) {
                    $e(e, e.return, d)
                }
            }
            break;
        case 6:
            if (Vt(t, e), on(e), r & 4) {
                if (e.stateNode === null) throw Error(ne(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (d) {
                    $e(e, e.return, d)
                }
            }
            break;
        case 3:
            if (Vt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Pi(t.containerInfo)
            } catch (d) {
                $e(e, e.return, d)
            }
            break;
        case 4:
            Vt(t, e), on(e);
            break;
        case 13:
            Vt(t, e), on(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (dd = He())), r & 4 && Kf(e);
            break;
        case 22:
            if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ct = (u = ct) || m, Vt(t, e), ct = u) : Vt(t, e), on(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !m && e.mode & 1)
                    for (le = e, m = e.child; m !== null;) {
                        for (h = le = m; le !== null;) {
                            switch (c = le, f = c.child, c.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    xi(4, c, c.return);
                                    break;
                                case 1:
                                    uo(c, c.return);
                                    var y = c.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = c, n = c.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                        } catch (d) {
                                            $e(r, n, d)
                                        }
                                    }
                                    break;
                                case 5:
                                    uo(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        Yf(h);
                                        continue
                                    }
                            }
                            f !== null ? (f.return = c, le = f) : Yf(h)
                        }
                        m = m.sibling
                    }
                e: for (m = null, h = e;;) {
                    if (h.tag === 5) {
                        if (m === null) {
                            m = h;
                            try {
                                o = h.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode, l = h.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Lp("display", s))
                            } catch (d) {
                                $e(e, e.return, d)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (m === null) try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (d) {
                            $e(e, e.return, d)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        m === h && (m = null), h = h.return
                    }
                    m === h && (m = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Vt(t, e), on(e), r & 4 && Kf(e);
            break;
        case 21:
            break;
        default:
            Vt(t, e), on(e)
    }
}

function on(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ag(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(ne(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Ei(o, ""), r.flags &= -33);
                    var i = Vf(e);
                    Gu(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Vf(e);
                    Ku(e, a, s);
                    break;
                default:
                    throw Error(ne(161))
            }
        }
        catch (l) {
            $e(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Sw(e, t, n) {
    le = e, cg(e)
}

function cg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; le !== null;) {
        var o = le,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ss;
            if (!s) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || ct;
                a = Ss;
                var u = ct;
                if (Ss = s, (ct = l) && !u)
                    for (le = o; le !== null;) s = le, l = s.child, s.tag === 22 && s.memoizedState !== null ? Qf(o) : l !== null ? (l.return = s, le = l) : Qf(o);
                for (; i !== null;) le = i, cg(i), i = i.sibling;
                le = o, Ss = a, ct = u
            }
            Gf(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, le = i) : Gf(e)
    }
}

function Gf(e) {
    for (; le !== null;) {
        var t = le;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ct || Ua(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ct)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Gt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Rf(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Rf(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var m = u.memoizedState;
                                if (m !== null) {
                                    var h = m.dehydrated;
                                    h !== null && Pi(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(ne(163))
                }
                ct || t.flags & 512 && Vu(t)
            } catch (c) {
                $e(t, t.return, c)
            }
        }
        if (t === e) {
            le = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, le = n;
            break
        }
        le = t.return
    }
}

function Yf(e) {
    for (; le !== null;) {
        var t = le;
        if (t === e) {
            le = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, le = n;
            break
        }
        le = t.return
    }
}

function Qf(e) {
    for (; le !== null;) {
        var t = le;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ua(4, t)
                    } catch (l) {
                        $e(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            $e(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        Vu(t)
                    } catch (l) {
                        $e(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Vu(t)
                    } catch (l) {
                        $e(t, s, l)
                    }
            }
        } catch (l) {
            $e(t, t.return, l)
        }
        if (t === e) {
            le = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, le = a;
            break
        }
        le = t.return
    }
}
var _w = Math.ceil,
    ya = Rn.ReactCurrentDispatcher,
    ud = Rn.ReactCurrentOwner,
    $t = Rn.ReactCurrentBatchConfig,
    Se = 0,
    Je = null,
    Ve = null,
    tt = 0,
    Nt = 0,
    co = fr(0),
    Qe = 0,
    Bi = null,
    Mr = 0,
    $a = 0,
    cd = 0,
    bi = null,
    xt = null,
    dd = 0,
    Do = 1 / 0,
    xn = null,
    wa = !1,
    Yu = null,
    nr = null,
    _s = !1,
    Qn = null,
    xa = 0,
    Si = 0,
    Qu = null,
    Hs = -1,
    Vs = 0;

function gt() {
    return Se & 6 ? He() : Hs !== -1 ? Hs : Hs = He()
}

function rr(e) {
    return e.mode & 1 ? Se & 2 && tt !== 0 ? tt & -tt : sw.transition !== null ? (Vs === 0 && (Vs = Yp()), Vs) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tm(e.type)), e) : 1
}

function en(e, t, n, r) {
    if (50 < Si) throw Si = 0, Qu = null, Error(ne(185));
    qi(e, n, r), (!(Se & 2) || e !== Je) && (e === Je && (!(Se & 2) && ($a |= n), Qe === 4 && $n(e, tt)), Ct(e, r), n === 1 && Se === 0 && !(t.mode & 1) && (Do = He() + 500, za && hr()))
}

function Ct(e, t) {
    var n = e.callbackNode;
    s1(e, t);
    var r = ra(e, e === Je ? tt : 0);
    if (r === 0) n !== null && rf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && rf(n), t === 1) e.tag === 0 ? iw(Zf.bind(null, e)) : xm(Zf.bind(null, e)), tw(function() {
            !(Se & 6) && hr()
        }), n = null;
        else {
            switch (Qp(r)) {
                case 1:
                    n = Dc;
                    break;
                case 4:
                    n = Kp;
                    break;
                case 16:
                    n = na;
                    break;
                case 536870912:
                    n = Gp;
                    break;
                default:
                    n = na
            }
            n = yg(n, dg.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function dg(e, t) {
    if (Hs = -1, Vs = 0, Se & 6) throw Error(ne(327));
    var n = e.callbackNode;
    if (vo() && e.callbackNode !== n) return null;
    var r = ra(e, e === Je ? tt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ba(e, r);
    else {
        t = r;
        var o = Se;
        Se |= 2;
        var i = hg();
        (Je !== e || tt !== t) && (xn = null, Do = He() + 500, Pr(e, t));
        do try {
            kw();
            break
        } catch (a) {
            fg(e, a)
        }
        while (!0);
        Zc(), ya.current = i, Se = o, Ve !== null ? t = 0 : (Je = null, tt = 0, t = Qe)
    }
    if (t !== 0) {
        if (t === 2 && (o = Su(e), o !== 0 && (r = o, t = Zu(e, o))), t === 1) throw n = Bi, Pr(e, 0), $n(e, r), Ct(e, He()), n;
        if (t === 6) $n(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Cw(o) && (t = ba(e, r), t === 2 && (i = Su(e), i !== 0 && (r = i, t = Zu(e, i))), t === 1)) throw n = Bi, Pr(e, 0), $n(e, r), Ct(e, He()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(ne(345));
                case 2:
                    yr(e, xt, xn);
                    break;
                case 3:
                    if ($n(e, r), (r & 130023424) === r && (t = dd + 500 - He(), 10 < t)) {
                        if (ra(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            gt(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Au(yr.bind(null, e, xt, xn), t);
                        break
                    }
                    yr(e, xt, xn);
                    break;
                case 4:
                    if ($n(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - Jt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = He() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _w(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Au(yr.bind(null, e, xt, xn), r);
                        break
                    }
                    yr(e, xt, xn);
                    break;
                case 5:
                    yr(e, xt, xn);
                    break;
                default:
                    throw Error(ne(329))
            }
        }
    }
    return Ct(e, He()), e.callbackNode === n ? dg.bind(null, e) : null
}

function Zu(e, t) {
    var n = bi;
    return e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256), e = ba(e, t), e !== 2 && (t = xt, xt = n, t !== null && Xu(t)), e
}

function Xu(e) {
    xt === null ? xt = e : xt.push.apply(xt, e)
}

function Cw(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!tn(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function $n(e, t) {
    for (t &= ~cd, t &= ~$a, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Jt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Zf(e) {
    if (Se & 6) throw Error(ne(327));
    vo();
    var t = ra(e, 0);
    if (!(t & 1)) return Ct(e, He()), null;
    var n = ba(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Su(e);
        r !== 0 && (t = r, n = Zu(e, r))
    }
    if (n === 1) throw n = Bi, Pr(e, 0), $n(e, t), Ct(e, He()), n;
    if (n === 6) throw Error(ne(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, yr(e, xt, xn), Ct(e, He()), null
}

function fd(e, t) {
    var n = Se;
    Se |= 1;
    try {
        return e(t)
    } finally {
        Se = n, Se === 0 && (Do = He() + 500, za && hr())
    }
}

function Dr(e) {
    Qn !== null && Qn.tag === 0 && !(Se & 6) && vo();
    var t = Se;
    Se |= 1;
    var n = $t.transition,
        r = Ce;
    try {
        if ($t.transition = null, Ce = 1, e) return e()
    } finally {
        Ce = r, $t.transition = n, Se = t, !(Se & 6) && hr()
    }
}

function hd() {
    Nt = co.current, Oe(co)
}

function Pr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ew(n)), Ve !== null)
        for (n = Ve.return; n !== null;) {
            var r = n;
            switch (Gc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && la();
                    break;
                case 3:
                    Lo(), Oe(St), Oe(dt), nd();
                    break;
                case 5:
                    td(r);
                    break;
                case 4:
                    Lo();
                    break;
                case 13:
                    Oe(ze);
                    break;
                case 19:
                    Oe(ze);
                    break;
                case 10:
                    Xc(r.type._context);
                    break;
                case 22:
                case 23:
                    hd()
            }
            n = n.return
        }
    if (Je = e, Ve = e = or(e.current, null), tt = Nt = t, Qe = 0, Bi = null, cd = $a = Mr = 0, xt = bi = null, _r !== null) {
        for (t = 0; t < _r.length; t++)
            if (n = _r[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        _r = null
    }
    return e
}

function fg(e, t) {
    do {
        var n = Ve;
        try {
            if (Zc(), Us.current = va, ga) {
                for (var r = Fe.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ga = !1
            }
            if (Lr = 0, qe = Ye = Fe = null, wi = !1, Di = 0, ud.current = null, n === null || n.return === null) {
                Qe = 1, Bi = t, Ve = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = tt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        m = a,
                        h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var c = m.alternate;
                        c ? (m.updateQueue = c.updateQueue, m.memoizedState = c.memoizedState, m.lanes = c.lanes) : (m.updateQueue = null, m.memoizedState = null)
                    }
                    var f = Df(s);
                    if (f !== null) {
                        f.flags &= -257, zf(f, s, a, i, t), f.mode & 1 && Mf(i, u, t), t = f, l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var d = new Set;
                            d.add(l), t.updateQueue = d
                        } else y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Mf(i, u, t), pd();
                            break e
                        }
                        l = Error(ne(426))
                    }
                } else if (De && a.mode & 1) {
                    var v = Df(s);
                    if (v !== null) {
                        !(v.flags & 65536) && (v.flags |= 256), zf(v, s, a, i, t), Yc(Mo(l, a));
                        break e
                    }
                }
                i = l = Mo(l, a),
                Qe !== 4 && (Qe = 2),
                bi === null ? bi = [i] : bi.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var p = Qm(i, l, t);
                            Af(i, p);
                            break e;
                        case 1:
                            a = l;
                            var g = i.type,
                                w = i.stateNode;
                            if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (nr === null || !nr.has(w)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var C = Zm(i, a, t);
                                Af(i, C);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            mg(n)
        } catch (E) {
            t = E, Ve === n && n !== null && (Ve = n = n.return);
            continue
        }
        break
    } while (!0)
}

function hg() {
    var e = ya.current;
    return ya.current = va, e === null ? va : e
}

function pd() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Je === null || !(Mr & 268435455) && !($a & 268435455) || $n(Je, tt)
}

function ba(e, t) {
    var n = Se;
    Se |= 2;
    var r = hg();
    (Je !== e || tt !== t) && (xn = null, Pr(e, t));
    do try {
        Ew();
        break
    } catch (o) {
        fg(e, o)
    }
    while (!0);
    if (Zc(), Se = n, ya.current = r, Ve !== null) throw Error(ne(261));
    return Je = null, tt = 0, Qe
}

function Ew() {
    for (; Ve !== null;) pg(Ve)
}

function kw() {
    for (; Ve !== null && !Xy();) pg(Ve)
}

function pg(e) {
    var t = vg(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? mg(e) : Ve = t, ud.current = null
}

function mg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ww(n, t), n !== null) {
                n.flags &= 32767, Ve = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Qe = 6, Ve = null;
                return
            }
        } else if (n = yw(n, t, Nt), n !== null) {
            Ve = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ve = t;
            return
        }
        Ve = t = e
    } while (t !== null);
    Qe === 0 && (Qe = 5)
}

function yr(e, t, n) {
    var r = Ce,
        o = $t.transition;
    try {
        $t.transition = null, Ce = 1, Tw(e, t, n, r)
    } finally {
        $t.transition = o, Ce = r
    }
    return null
}

function Tw(e, t, n, r) {
    do vo(); while (Qn !== null);
    if (Se & 6) throw Error(ne(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(ne(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (a1(e, i), e === Je && (Ve = Je = null, tt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _s || (_s = !0, yg(na, function() {
            return vo(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = $t.transition, $t.transition = null;
        var s = Ce;
        Ce = 1;
        var a = Se;
        Se |= 4, ud.current = null, bw(e, n), ug(n, e), G1(Nu), oa = !!Tu, Nu = Tu = null, e.current = n, Sw(n), qy(), Se = a, Ce = s, $t.transition = i
    } else e.current = n;
    if (_s && (_s = !1, Qn = e, xa = o), i = e.pendingLanes, i === 0 && (nr = null), t1(n.stateNode), Ct(e, He()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (wa) throw wa = !1, e = Yu, Yu = null, e;
    return xa & 1 && e.tag !== 0 && vo(), i = e.pendingLanes, i & 1 ? e === Qu ? Si++ : (Si = 0, Qu = e) : Si = 0, hr(), null
}

function vo() {
    if (Qn !== null) {
        var e = Qp(xa),
            t = $t.transition,
            n = Ce;
        try {
            if ($t.transition = null, Ce = 16 > e ? 16 : e, Qn === null) var r = !1;
            else {
                if (e = Qn, Qn = null, xa = 0, Se & 6) throw Error(ne(331));
                var o = Se;
                for (Se |= 4, le = e.current; le !== null;) {
                    var i = le,
                        s = i.child;
                    if (le.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (le = u; le !== null;) {
                                    var m = le;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            xi(8, m, i)
                                    }
                                    var h = m.child;
                                    if (h !== null) h.return = m, le = h;
                                    else
                                        for (; le !== null;) {
                                            m = le;
                                            var c = m.sibling,
                                                f = m.return;
                                            if (sg(m), m === u) {
                                                le = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = f, le = c;
                                                break
                                            }
                                            le = f
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var d = y.child;
                                if (d !== null) {
                                    y.child = null;
                                    do {
                                        var v = d.sibling;
                                        d.sibling = null, d = v
                                    } while (d !== null)
                                }
                            }
                            le = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, le = s;
                    else e: for (; le !== null;) {
                        if (i = le, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                xi(9, i, i.return)
                        }
                        var p = i.sibling;
                        if (p !== null) {
                            p.return = i.return, le = p;
                            break e
                        }
                        le = i.return
                    }
                }
                var g = e.current;
                for (le = g; le !== null;) {
                    s = le;
                    var w = s.child;
                    if (s.subtreeFlags & 2064 && w !== null) w.return = s, le = w;
                    else e: for (s = g; le !== null;) {
                        if (a = le, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ua(9, a)
                            }
                        } catch (E) {
                            $e(a, a.return, E)
                        }
                        if (a === s) {
                            le = null;
                            break e
                        }
                        var C = a.sibling;
                        if (C !== null) {
                            C.return = a.return, le = C;
                            break e
                        }
                        le = a.return
                    }
                }
                if (Se = o, hr(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
                    fn.onPostCommitFiberRoot(Oa, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Ce = n, $t.transition = t
        }
    }
    return !1
}

function Xf(e, t, n) {
    t = Mo(n, t), t = Qm(e, t, 1), e = tr(e, t, 1), t = gt(), e !== null && (qi(e, 1, t), Ct(e, t))
}

function $e(e, t, n) {
    if (e.tag === 3) Xf(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Xf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nr === null || !nr.has(r))) {
                    e = Mo(n, e), e = Zm(t, e, 1), t = tr(t, e, 1), e = gt(), t !== null && (qi(t, 1, e), Ct(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Nw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & n, Je === e && (tt & n) === n && (Qe === 4 || Qe === 3 && (tt & 130023424) === tt && 500 > He() - dd ? Pr(e, 0) : cd |= n), Ct(e, t)
}

function gg(e, t) {
    t === 0 && (e.mode & 1 ? (t = hs, hs <<= 1, !(hs & 130023424) && (hs = 4194304)) : t = 1);
    var n = gt();
    e = Tn(e, t), e !== null && (qi(e, t, n), Ct(e, n))
}

function Pw(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), gg(e, n)
}

function Aw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(ne(314))
    }
    r !== null && r.delete(t), gg(e, n)
}
var vg;
vg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || St.current) bt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return bt = !1, vw(e, t, n);
            bt = !!(e.flags & 131072)
        }
    else bt = !1, De && t.flags & 1048576 && bm(t, da, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ws(e, t), e = t.pendingProps;
            var o = jo(t, dt.current);
            go(t, n), o = od(null, t, r, e, o, n);
            var i = id();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _t(r) ? (i = !0, ua(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Jc(t), o.updater = Ba, t.stateNode = o, o._reactInternals = t, Du(t, r, e, n), t = Bu(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Kc(t), pt(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ws(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = jw(r), e = Gt(r, e), o) {
                    case 0:
                        t = Fu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Uf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ff(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Bf(null, t, r, Gt(r.type, e), n);
                        break e
                }
                throw Error(ne(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Fu(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Uf(e, t, r, o, n);
        case 3:
            e: {
                if (eg(t), e === null) throw Error(ne(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Tm(e, t),
                pa(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Mo(Error(ne(423)), t), t = $f(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Mo(Error(ne(424)), t), t = $f(e, t, r, n, o);
                    break e
                } else
                    for (At = er(t.stateNode.containerInfo.firstChild), Rt = t, De = !0, Xt = null, n = Em(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Oo(), r === o) {
                        t = Nn(e, t, n);
                        break e
                    }
                    pt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Nm(t), e === null && Iu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Pu(r, o) ? s = null : i !== null && Pu(r, i) && (t.flags |= 32), Jm(e, t), pt(e, t, s, n), t.child;
        case 6:
            return e === null && Iu(t), null;
        case 13:
            return tg(e, t, n);
        case 4:
            return ed(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Io(t, null, r, n) : pt(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Ff(e, t, r, o, n);
        case 7:
            return pt(e, t, t.pendingProps, n), t.child;
        case 8:
            return pt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return pt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ae(fa, r._currentValue), r._currentValue = s, i !== null)
                    if (tn(i.value, s)) {
                        if (i.children === o.children && !St.current) {
                            t = Nn(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = Cn(-1, n & -n), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var m = u.pending;
                                                m === null ? l.next = l : (l.next = m.next, m.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Lu(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(ne(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Lu(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                pt(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, go(t, n), o = Wt(o), r = r(o), t.flags |= 1, pt(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = Gt(r, t.pendingProps), o = Gt(r.type, o), Bf(e, t, r, o, n);
        case 15:
            return Xm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Ws(e, t), t.tag = 1, _t(r) ? (e = !0, ua(t)) : e = !1, go(t, n), Ym(t, r, o), Du(t, r, o, n), Bu(null, t, r, !0, e, n);
        case 19:
            return ng(e, t, n);
        case 22:
            return qm(e, t, n)
    }
    throw Error(ne(156, t.tag))
};

function yg(e, t) {
    return Vp(e, t)
}

function Rw(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ut(e, t, n, r) {
    return new Rw(e, t, n, r)
}

function md(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function jw(e) {
    if (typeof e == "function") return md(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ic) return 11;
        if (e === Lc) return 14
    }
    return 2
}

function or(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ks(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") md(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case eo:
            return Ar(n.children, o, i, t);
        case Oc:
            s = 8, o |= 8;
            break;
        case au:
            return e = Ut(12, n, t, o | 2), e.elementType = au, e.lanes = i, e;
        case lu:
            return e = Ut(13, n, t, o), e.elementType = lu, e.lanes = i, e;
        case uu:
            return e = Ut(19, n, t, o), e.elementType = uu, e.lanes = i, e;
        case Np:
            return Wa(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case kp:
                    s = 10;
                    break e;
                case Tp:
                    s = 9;
                    break e;
                case Ic:
                    s = 11;
                    break e;
                case Lc:
                    s = 14;
                    break e;
                case Fn:
                    s = 16, r = null;
                    break e
            }
            throw Error(ne(130, e == null ? e : typeof e, ""))
    }
    return t = Ut(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Ar(e, t, n, r) {
    return e = Ut(7, e, r, t), e.lanes = n, e
}

function Wa(e, t, n, r) {
    return e = Ut(22, e, r, t), e.elementType = Np, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ul(e, t, n) {
    return e = Ut(6, e, null, t), e.lanes = n, e
}

function $l(e, t, n) {
    return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ow(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sl(0), this.expirationTimes = Sl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function gd(e, t, n, r, o, i, s, a, l) {
    return e = new Ow(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Jc(i), e
}

function Iw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Jr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function wg(e) {
    if (!e) return sr;
    e = e._reactInternals;
    e: {
        if ($r(e) !== e || e.tag !== 1) throw Error(ne(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (_t(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(ne(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_t(n)) return wm(e, n, t)
    }
    return t
}

function xg(e, t, n, r, o, i, s, a, l) {
    return e = gd(n, r, !0, e, o, i, s, a, l), e.context = wg(null), n = e.current, r = gt(), o = rr(n), i = Cn(r, o), i.callback = t ? ? null, tr(n, i, o), e.current.lanes = o, qi(e, o, r), Ct(e, r), e
}

function Ha(e, t, n, r) {
    var o = t.current,
        i = gt(),
        s = rr(o);
    return n = wg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cn(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tr(o, t, s), e !== null && (en(e, o, s, i), Bs(e, o, s)), s
}

function Sa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function qf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function vd(e, t) {
    qf(e, t), (e = e.alternate) && qf(e, t)
}

function Lw() {
    return null
}
var bg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function yd(e) {
    this._internalRoot = e
}
Va.prototype.render = yd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(ne(409));
    Ha(e, t, null, null)
};
Va.prototype.unmount = yd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dr(function() {
            Ha(null, e, null, null)
        }), t[kn] = null
    }
};

function Va(e) {
    this._internalRoot = e
}
Va.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = qp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++);
        Un.splice(n, 0, e), n === 0 && em(e)
    }
};

function wd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Jf() {}

function Mw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Sa(s);
                i.call(u)
            }
        }
        var s = xg(t, r, e, 0, null, !1, !1, "", Jf);
        return e._reactRootContainer = s, e[kn] = s.current, ji(e.nodeType === 8 ? e.parentNode : e), Dr(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Sa(l);
            a.call(u)
        }
    }
    var l = gd(e, 0, !1, null, null, !1, !1, "", Jf);
    return e._reactRootContainer = l, e[kn] = l.current, ji(e.nodeType === 8 ? e.parentNode : e), Dr(function() {
        Ha(t, l, n, r)
    }), l
}

function Ga(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Sa(s);
                a.call(l)
            }
        }
        Ha(t, s, e, o)
    } else s = Mw(n, t, e, o, r);
    return Sa(s)
}
Zp = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ci(t.pendingLanes);
                n !== 0 && (zc(t, n | 1), Ct(t, He()), !(Se & 6) && (Do = He() + 500, hr()))
            }
            break;
        case 13:
            Dr(function() {
                var r = Tn(e, 1);
                if (r !== null) {
                    var o = gt();
                    en(r, e, 1, o)
                }
            }), vd(e, 1)
    }
};
Fc = function(e) {
    if (e.tag === 13) {
        var t = Tn(e, 134217728);
        if (t !== null) {
            var n = gt();
            en(t, e, 134217728, n)
        }
        vd(e, 134217728)
    }
};
Xp = function(e) {
    if (e.tag === 13) {
        var t = rr(e),
            n = Tn(e, t);
        if (n !== null) {
            var r = gt();
            en(n, e, t, r)
        }
        vd(e, t)
    }
};
qp = function() {
    return Ce
};
Jp = function(e, t) {
    var n = Ce;
    try {
        return Ce = e, t()
    } finally {
        Ce = n
    }
};
wu = function(e, t, n) {
    switch (t) {
        case "input":
            if (fu(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Da(r);
                        if (!o) throw Error(ne(90));
                        Ap(r), fu(r, o)
                    }
                }
            }
            break;
        case "textarea":
            jp(e, n);
            break;
        case "select":
            t = n.value, t != null && fo(e, !!n.multiple, t, !1)
    }
};
Fp = fd;
Bp = Dr;
var Dw = {
        usingClientEntryPoint: !1,
        Events: [es, oo, Da, Dp, zp, fd]
    },
    ri = {
        findFiberByHostInstance: Sr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    zw = {
        bundleType: ri.bundleType,
        version: ri.version,
        rendererPackageName: ri.rendererPackageName,
        rendererConfig: ri.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Rn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Wp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ri.findFiberByHostInstance || Lw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cs.isDisabled && Cs.supportsFiber) try {
        Oa = Cs.inject(zw), fn = Cs
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dw;
Lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!wd(t)) throw Error(ne(200));
    return Iw(e, t, null, n)
};
Lt.createRoot = function(e, t) {
    if (!wd(e)) throw Error(ne(299));
    var n = !1,
        r = "",
        o = bg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = gd(e, 1, !1, null, null, n, !1, r, o), e[kn] = t.current, ji(e.nodeType === 8 ? e.parentNode : e), new yd(t)
};
Lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(ne(188)) : (e = Object.keys(e).join(","), Error(ne(268, e)));
    return e = Wp(t), e = e === null ? null : e.stateNode, e
};
Lt.flushSync = function(e) {
    return Dr(e)
};
Lt.hydrate = function(e, t, n) {
    if (!Ka(t)) throw Error(ne(200));
    return Ga(null, e, t, !0, n)
};
Lt.hydrateRoot = function(e, t, n) {
    if (!wd(e)) throw Error(ne(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = bg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = xg(t, null, e, 1, n ? ? null, o, !1, i, s), e[kn] = t.current, ji(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Va(t)
};
Lt.render = function(e, t, n) {
    if (!Ka(t)) throw Error(ne(200));
    return Ga(null, e, t, !1, n)
};
Lt.unmountComponentAtNode = function(e) {
    if (!Ka(e)) throw Error(ne(40));
    return e._reactRootContainer ? (Dr(function() {
        Ga(null, null, e, !1, function() {
            e._reactRootContainer = null, e[kn] = null
        })
    }), !0) : !1
};
Lt.unstable_batchedUpdates = fd;
Lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ka(n)) throw Error(ne(200));
    if (e == null || e._reactInternals === void 0) throw Error(ne(38));
    return Ga(e, t, n, !1, r)
};
Lt.version = "18.3.1-next-f1338f8080-20240426";

function Sg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sg)
    } catch (e) {
        console.error(e)
    }
}
Sg(), Sp.exports = Lt;
var Wr = Sp.exports;
const _g = Br(Wr);
var Cg, eh = Wr;
Cg = eh.createRoot, eh.hydrateRoot;
const Fw = 1,
    Bw = 1e6;
let Wl = 0;

function Uw() {
    return Wl = (Wl + 1) % Number.MAX_SAFE_INTEGER, Wl.toString()
}
const Hl = new Map,
    th = e => {
        if (Hl.has(e)) return;
        const t = setTimeout(() => {
            Hl.delete(e), _i({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, Bw);
        Hl.set(e, t)
    },
    $w = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, Fw)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? th(n) : e.toasts.forEach(r => {
                        th(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Gs = [];
let Ys = {
    toasts: []
};

function _i(e) {
    Ys = $w(Ys, e), Gs.forEach(t => {
        t(Ys)
    })
}

function Ww({ ...e
}) {
    const t = Uw(),
        n = o => _i({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => _i({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return _i({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function Eg() {
    const [e, t] = _.useState(Ys);
    return _.useEffect(() => (Gs.push(t), () => {
        const n = Gs.indexOf(t);
        n > -1 && Gs.splice(n, 1)
    }), [e]), { ...e,
        toast: Ww,
        dismiss: n => _i({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function xe(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Hw(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function kg(...e) {
    return t => e.forEach(n => Hw(n, t))
}

function We(...e) {
    return _.useCallback(kg(...e), e)
}

function Vw(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = _.createContext(s),
            l = n.length;
        n = [...n, s];

        function u(h) {
            const {
                scope: c,
                children: f,
                ...y
            } = h, d = (c == null ? void 0 : c[e][l]) || a, v = _.useMemo(() => y, Object.values(y));
            return x.jsx(d.Provider, {
                value: v,
                children: f
            })
        }

        function m(h, c) {
            const f = (c == null ? void 0 : c[e][l]) || a,
                y = _.useContext(f);
            if (y) return y;
            if (s !== void 0) return s;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, m]
    }
    const o = () => {
        const i = n.map(s => _.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return _.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, Kw(o, ...t)]
}

function Kw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const h = l(i)[`__scope${u}`];
                return { ...a,
                    ...h
                }
            }, {});
            return _.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var zo = _.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = _.Children.toArray(n), i = o.find(Gw);
    if (i) {
        const s = i.props.children,
            a = o.map(l => l === i ? _.Children.count(s) > 1 ? _.Children.only(null) : _.isValidElement(s) ? s.props.children : null : l);
        return x.jsx(qu, { ...r,
            ref: t,
            children: _.isValidElement(s) ? _.cloneElement(s, void 0, a) : null
        })
    }
    return x.jsx(qu, { ...r,
        ref: t,
        children: n
    })
});
zo.displayName = "Slot";
var qu = _.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (_.isValidElement(n)) {
        const o = Qw(n);
        return _.cloneElement(n, { ...Yw(r, n.props),
            ref: t ? kg(t, o) : o
        })
    }
    return _.Children.count(n) > 1 ? _.Children.only(null) : null
});
qu.displayName = "SlotClone";
var Tg = ({
    children: e
}) => x.jsx(x.Fragment, {
    children: e
});

function Gw(e) {
    return _.isValidElement(e) && e.type === Tg
}

function Yw(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            i(...a), o(...a)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Qw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Ng(e) {
    const t = e + "CollectionProvider",
        [n, r] = Vw(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = f => {
            const {
                scope: y,
                children: d
            } = f, v = se.useRef(null), p = se.useRef(new Map).current;
            return x.jsx(o, {
                scope: y,
                itemMap: p,
                collectionRef: v,
                children: d
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = se.forwardRef((f, y) => {
            const {
                scope: d,
                children: v
            } = f, p = i(a, d), g = We(y, p.collectionRef);
            return x.jsx(zo, {
                ref: g,
                children: v
            })
        });
    l.displayName = a;
    const u = e + "CollectionItemSlot",
        m = "data-radix-collection-item",
        h = se.forwardRef((f, y) => {
            const {
                scope: d,
                children: v,
                ...p
            } = f, g = se.useRef(null), w = We(y, g), C = i(u, d);
            return se.useEffect(() => (C.itemMap.set(g, {
                ref: g,
                ...p
            }), () => void C.itemMap.delete(g))), x.jsx(zo, {
                [m]: "",
                ref: w,
                children: v
            })
        });
    h.displayName = u;

    function c(f) {
        const y = i(e + "CollectionConsumer", f);
        return se.useCallback(() => {
            const v = y.collectionRef.current;
            if (!v) return [];
            const p = Array.from(v.querySelectorAll(`[${m}]`));
            return Array.from(y.itemMap.values()).sort((C, E) => p.indexOf(C.ref.current) - p.indexOf(E.ref.current))
        }, [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: h
    }, c, r]
}

function xd(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = _.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = h => {
            var p;
            const {
                scope: c,
                children: f,
                ...y
            } = h, d = ((p = c == null ? void 0 : c[e]) == null ? void 0 : p[l]) || a, v = _.useMemo(() => y, Object.values(y));
            return x.jsx(d.Provider, {
                value: v,
                children: f
            })
        };
        u.displayName = i + "Provider";

        function m(h, c) {
            var d;
            const f = ((d = c == null ? void 0 : c[e]) == null ? void 0 : d[l]) || a,
                y = _.useContext(f);
            if (y) return y;
            if (s !== void 0) return s;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return [u, m]
    }
    const o = () => {
        const i = n.map(s => _.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return _.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, Zw(o, ...t)]
}

function Zw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const h = l(i)[`__scope${u}`];
                return { ...a,
                    ...h
                }
            }, {});
            return _.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var Xw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Pe = Xw.reduce((e, t) => {
        const n = _.forwardRef((r, o) => {
            const {
                asChild: i,
                ...s
            } = r, a = i ? zo : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), x.jsx(a, { ...s,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function Pg(e, t) {
    e && Wr.flushSync(() => e.dispatchEvent(t))
}

function It(e) {
    const t = _.useRef(e);
    return _.useEffect(() => {
        t.current = e
    }), _.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function qw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e);
    _.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var Jw = "DismissableLayer",
    Ju = "dismissableLayer.update",
    ex = "dismissableLayer.pointerDownOutside",
    tx = "dismissableLayer.focusOutside",
    nh, Ag = _.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Ya = _.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = _.useContext(Ag), [m, h] = _.useState(null), c = (m == null ? void 0 : m.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = _.useState({}), y = We(t, N => h(N)), d = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = d.indexOf(v), g = m ? d.indexOf(m) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= p, E = rx(N => {
            const j = N.target,
                I = [...u.branches].some(B => B.contains(j));
            !C || I || (o == null || o(N), s == null || s(N), N.defaultPrevented || a == null || a())
        }, c), A = ox(N => {
            const j = N.target;
            [...u.branches].some(B => B.contains(j)) || (i == null || i(N), s == null || s(N), N.defaultPrevented || a == null || a())
        }, c);
        return qw(N => {
            g === u.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && a && (N.preventDefault(), a()))
        }, c), _.useEffect(() => {
            if (m) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (nh = c.body.style.pointerEvents, c.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), rh(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = nh)
            }
        }, [m, c, n, u]), _.useEffect(() => () => {
            m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), rh())
        }, [m, u]), _.useEffect(() => {
            const N = () => f({});
            return document.addEventListener(Ju, N), () => document.removeEventListener(Ju, N)
        }, []), x.jsx(Pe.div, { ...l,
            ref: y,
            style: {
                pointerEvents: w ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: xe(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: xe(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: xe(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
Ya.displayName = Jw;
var nx = "DismissableLayerBranch",
    Rg = _.forwardRef((e, t) => {
        const n = _.useContext(Ag),
            r = _.useRef(null),
            o = We(t, r);
        return _.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), x.jsx(Pe.div, { ...e,
            ref: o
        })
    });
Rg.displayName = nx;

function rx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e),
        r = _.useRef(!1),
        o = _.useRef(() => {});
    return _.useEffect(() => {
        const i = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        jg(ex, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function ox(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e),
        r = _.useRef(!1);
    return _.useEffect(() => {
        const o = i => {
            i.target && !r.current && jg(tx, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function rh() {
    const e = new CustomEvent(Ju);
    document.dispatchEvent(e)
}

function jg(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Pg(o, i) : o.dispatchEvent(i)
}
var ix = Ya,
    sx = Rg,
    ft = globalThis != null && globalThis.document ? _.useLayoutEffect : () => {},
    ax = "Portal",
    bd = _.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, i] = _.useState(!1);
        ft(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? _g.createPortal(x.jsx(Pe.div, { ...r,
            ref: t
        }), s) : null
    });
bd.displayName = ax;

function lx(e, t) {
    return _.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Sd = e => {
    const {
        present: t,
        children: n
    } = e, r = ux(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : _.Children.only(n), i = We(r.ref, cx(o));
    return typeof n == "function" || r.isPresent ? _.cloneElement(o, {
        ref: i
    }) : null
};
Sd.displayName = "Presence";

function ux(e) {
    const [t, n] = _.useState(), r = _.useRef({}), o = _.useRef(e), i = _.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = lx(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return _.useEffect(() => {
        const u = Es(r.current);
        i.current = a === "mounted" ? u : "none"
    }, [a]), ft(() => {
        const u = r.current,
            m = o.current;
        if (m !== e) {
            const c = i.current,
                f = Es(u);
            e ? l("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(m && c !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), ft(() => {
        if (t) {
            let u;
            const m = t.ownerDocument.defaultView ? ? window,
                h = f => {
                    const d = Es(r.current).includes(f.animationName);
                    if (f.target === t && d && (l("ANIMATION_END"), !o.current)) {
                        const v = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = m.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v)
                        })
                    }
                },
                c = f => {
                    f.target === t && (i.current = Es(r.current))
                };
            return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
                m.clearTimeout(u), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: _.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function Es(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function cx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function _a({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = dx({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, s = i ? e : r, a = It(n), l = _.useCallback(u => {
        if (i) {
            const h = typeof u == "function" ? u(e) : u;
            h !== e && a(h)
        } else o(u)
    }, [i, e, o, a]);
    return [s, l]
}

function dx({
    defaultProp: e,
    onChange: t
}) {
    const n = _.useState(e),
        [r] = n,
        o = _.useRef(r),
        i = It(t);
    return _.useEffect(() => {
        o.current !== r && (i(r), o.current = r)
    }, [r, o, i]), n
}
var fx = "VisuallyHidden",
    ns = _.forwardRef((e, t) => x.jsx(Pe.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
ns.displayName = fx;
var hx = ns,
    _d = "ToastProvider",
    [Cd, px, mx] = Ng("Toast"),
    [Og, Ck] = xd("Toast", [mx]),
    [gx, Qa] = Og(_d),
    Ig = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [a, l] = _.useState(null), [u, m] = _.useState(0), h = _.useRef(!1), c = _.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${_d}\`. Expected non-empty \`string\`.`), x.jsx(Cd.Provider, {
            scope: t,
            children: x.jsx(gx, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: _.useCallback(() => m(f => f + 1), []),
                onToastRemove: _.useCallback(() => m(f => f - 1), []),
                isFocusedToastEscapeKeyDownRef: h,
                isClosePausedRef: c,
                children: s
            })
        })
    };
Ig.displayName = _d;
var Lg = "ToastViewport",
    vx = ["F8"],
    ec = "toast.viewportPause",
    tc = "toast.viewportResume",
    Mg = _.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = vx,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = Qa(Lg, n), a = px(n), l = _.useRef(null), u = _.useRef(null), m = _.useRef(null), h = _.useRef(null), c = We(t, h, s.onViewportChange), f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = s.toastCount > 0;
        _.useEffect(() => {
            const v = p => {
                var w;
                r.length !== 0 && r.every(C => p[C] || p.code === C) && ((w = h.current) == null || w.focus())
            };
            return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v)
        }, [r]), _.useEffect(() => {
            const v = l.current,
                p = h.current;
            if (y && v && p) {
                const g = () => {
                        if (!s.isClosePausedRef.current) {
                            const A = new CustomEvent(ec);
                            p.dispatchEvent(A), s.isClosePausedRef.current = !0
                        }
                    },
                    w = () => {
                        if (s.isClosePausedRef.current) {
                            const A = new CustomEvent(tc);
                            p.dispatchEvent(A), s.isClosePausedRef.current = !1
                        }
                    },
                    C = A => {
                        !v.contains(A.relatedTarget) && w()
                    },
                    E = () => {
                        v.contains(document.activeElement) || w()
                    };
                return v.addEventListener("focusin", g), v.addEventListener("focusout", C), v.addEventListener("pointermove", g), v.addEventListener("pointerleave", E), window.addEventListener("blur", g), window.addEventListener("focus", w), () => {
                    v.removeEventListener("focusin", g), v.removeEventListener("focusout", C), v.removeEventListener("pointermove", g), v.removeEventListener("pointerleave", E), window.removeEventListener("blur", g), window.removeEventListener("focus", w)
                }
            }
        }, [y, s.isClosePausedRef]);
        const d = _.useCallback(({
            tabbingDirection: v
        }) => {
            const g = a().map(w => {
                const C = w.ref.current,
                    E = [C, ...Ax(C)];
                return v === "forwards" ? E : E.reverse()
            });
            return (v === "forwards" ? g.reverse() : g).flat()
        }, [a]);
        return _.useEffect(() => {
            const v = h.current;
            if (v) {
                const p = g => {
                    var E, A, N;
                    const w = g.altKey || g.ctrlKey || g.metaKey;
                    if (g.key === "Tab" && !w) {
                        const j = document.activeElement,
                            I = g.shiftKey;
                        if (g.target === v && I) {
                            (E = u.current) == null || E.focus();
                            return
                        }
                        const k = d({
                                tabbingDirection: I ? "backwards" : "forwards"
                            }),
                            F = k.findIndex(S => S === j);
                        Vl(k.slice(F + 1)) ? g.preventDefault() : I ? (A = u.current) == null || A.focus() : (N = m.current) == null || N.focus()
                    }
                };
                return v.addEventListener("keydown", p), () => v.removeEventListener("keydown", p)
            }
        }, [a, d]), x.jsxs(sx, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", f),
            tabIndex: -1,
            style: {
                pointerEvents: y ? void 0 : "none"
            },
            children: [y && x.jsx(nc, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const v = d({
                        tabbingDirection: "forwards"
                    });
                    Vl(v)
                }
            }), x.jsx(Cd.Slot, {
                scope: n,
                children: x.jsx(Pe.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: c
                })
            }), y && x.jsx(nc, {
                ref: m,
                onFocusFromOutsideViewport: () => {
                    const v = d({
                        tabbingDirection: "backwards"
                    });
                    Vl(v)
                }
            })]
        })
    });
Mg.displayName = Lg;
var Dg = "ToastFocusProxy",
    nc = _.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = Qa(Dg, n);
        return x.jsx(ns, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r()
            }
        })
    });
nc.displayName = Dg;
var Za = "Toast",
    yx = "toast.swipeStart",
    wx = "toast.swipeMove",
    xx = "toast.swipeCancel",
    bx = "toast.swipeEnd",
    zg = _.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [a = !0, l] = _a({
            prop: r,
            defaultProp: o,
            onChange: i
        });
        return x.jsx(Sd, {
            present: n || a,
            children: x.jsx(Cx, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: It(e.onPause),
                onResume: It(e.onResume),
                onSwipeStart: xe(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: xe(e.onSwipeMove, u => {
                    const {
                        x: m,
                        y: h
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${m}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${h}px`)
                }),
                onSwipeCancel: xe(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: xe(e.onSwipeEnd, u => {
                    const {
                        x: m,
                        y: h
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${m}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${h}px`), l(!1)
                })
            })
        })
    });
zg.displayName = Za;
var [Sx, _x] = Og(Za, {
    onClose() {}
}), Cx = _.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: m,
        onSwipeMove: h,
        onSwipeCancel: c,
        onSwipeEnd: f,
        ...y
    } = e, d = Qa(Za, n), [v, p] = _.useState(null), g = We(t, S => p(S)), w = _.useRef(null), C = _.useRef(null), E = o || d.duration, A = _.useRef(0), N = _.useRef(E), j = _.useRef(0), {
        onToastAdd: I,
        onToastRemove: B
    } = d, G = It(() => {
        var U;
        (v == null ? void 0 : v.contains(document.activeElement)) && ((U = d.viewport) == null || U.focus()), s()
    }), k = _.useCallback(S => {
        !S || S === 1 / 0 || (window.clearTimeout(j.current), A.current = new Date().getTime(), j.current = window.setTimeout(G, S))
    }, [G]);
    _.useEffect(() => {
        const S = d.viewport;
        if (S) {
            const U = () => {
                    k(N.current), u == null || u()
                },
                X = () => {
                    const H = new Date().getTime() - A.current;
                    N.current = N.current - H, window.clearTimeout(j.current), l == null || l()
                };
            return S.addEventListener(ec, X), S.addEventListener(tc, U), () => {
                S.removeEventListener(ec, X), S.removeEventListener(tc, U)
            }
        }
    }, [d.viewport, E, l, u, k]), _.useEffect(() => {
        i && !d.isClosePausedRef.current && k(E)
    }, [i, E, d.isClosePausedRef, k]), _.useEffect(() => (I(), () => B()), [I, B]);
    const F = _.useMemo(() => v ? Vg(v) : null, [v]);
    return d.viewport ? x.jsxs(x.Fragment, {
        children: [F && x.jsx(Ex, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: F
        }), x.jsx(Sx, {
            scope: n,
            onClose: G,
            children: Wr.createPortal(x.jsx(Cd.ItemSlot, {
                scope: n,
                children: x.jsx(ix, {
                    asChild: !0,
                    onEscapeKeyDown: xe(a, () => {
                        d.isFocusedToastEscapeKeyDownRef.current || G(), d.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: x.jsx(Pe.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": d.swipeDirection,
                        ...y,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: xe(e.onKeyDown, S => {
                            S.key === "Escape" && (a == null || a(S.nativeEvent), S.nativeEvent.defaultPrevented || (d.isFocusedToastEscapeKeyDownRef.current = !0, G()))
                        }),
                        onPointerDown: xe(e.onPointerDown, S => {
                            S.button === 0 && (w.current = {
                                x: S.clientX,
                                y: S.clientY
                            })
                        }),
                        onPointerMove: xe(e.onPointerMove, S => {
                            if (!w.current) return;
                            const U = S.clientX - w.current.x,
                                X = S.clientY - w.current.y,
                                H = !!C.current,
                                D = ["left", "right"].includes(d.swipeDirection),
                                z = ["left", "up"].includes(d.swipeDirection) ? Math.min : Math.max,
                                Y = D ? z(0, U) : 0,
                                O = D ? 0 : z(0, X),
                                L = S.pointerType === "touch" ? 10 : 2,
                                te = {
                                    x: Y,
                                    y: O
                                },
                                R = {
                                    originalEvent: S,
                                    delta: te
                                };
                            H ? (C.current = te, ks(wx, h, R, {
                                discrete: !1
                            })) : oh(te, d.swipeDirection, L) ? (C.current = te, ks(yx, m, R, {
                                discrete: !1
                            }), S.target.setPointerCapture(S.pointerId)) : (Math.abs(U) > L || Math.abs(X) > L) && (w.current = null)
                        }),
                        onPointerUp: xe(e.onPointerUp, S => {
                            const U = C.current,
                                X = S.target;
                            if (X.hasPointerCapture(S.pointerId) && X.releasePointerCapture(S.pointerId), C.current = null, w.current = null, U) {
                                const H = S.currentTarget,
                                    D = {
                                        originalEvent: S,
                                        delta: U
                                    };
                                oh(U, d.swipeDirection, d.swipeThreshold) ? ks(bx, f, D, {
                                    discrete: !0
                                }) : ks(xx, c, D, {
                                    discrete: !0
                                }), H.addEventListener("click", z => z.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), d.viewport)
        })]
    }) : null
}), Ex = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Qa(Za, t), [i, s] = _.useState(!1), [a, l] = _.useState(!1);
    return Nx(() => s(!0)), _.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : x.jsx(bd, {
        asChild: !0,
        children: x.jsx(ns, { ...r,
            children: i && x.jsxs(x.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, kx = "ToastTitle", Fg = _.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return x.jsx(Pe.div, { ...r,
        ref: t
    })
});
Fg.displayName = kx;
var Tx = "ToastDescription",
    Bg = _.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return x.jsx(Pe.div, { ...r,
            ref: t
        })
    });
Bg.displayName = Tx;
var Ug = "ToastAction",
    $g = _.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? x.jsx(Hg, {
            altText: n,
            asChild: !0,
            children: x.jsx(Ed, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ug}\`. Expected non-empty \`string\`.`), null)
    });
$g.displayName = Ug;
var Wg = "ToastClose",
    Ed = _.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = _x(Wg, n);
        return x.jsx(Hg, {
            asChild: !0,
            children: x.jsx(Pe.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: xe(e.onClick, o.onClose)
            })
        })
    });
Ed.displayName = Wg;
var Hg = _.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return x.jsx(Pe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function Vg(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Px(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...Vg(r))
        }
    }), t
}

function ks(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Pg(o, i) : o.dispatchEvent(i)
}
var oh = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function Nx(e = () => {}) {
    const t = It(e);
    ft(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function Px(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Ax(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Vl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Rx = Ig,
    Kg = Mg,
    Gg = zg,
    Yg = Fg,
    Qg = Bg,
    Zg = $g,
    Xg = Ed;

function qg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = qg(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Jg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = qg(e)) && (r && (r += " "), r += t);
    return r
}
const ih = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    sh = Jg,
    ev = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return sh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const m = n == null ? void 0 : n[u],
                h = i == null ? void 0 : i[u];
            if (m === null) return null;
            const c = ih(m) || ih(h);
            return o[u][c]
        }), a = n && Object.entries(n).reduce((u, m) => {
            let [h, c] = m;
            return c === void 0 || (u[h] = c), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, m) => {
            let {
                class: h,
                className: c,
                ...f
            } = m;
            return Object.entries(f).every(y => {
                let [d, v] = y;
                return Array.isArray(v) ? v.includes({ ...i,
                    ...a
                }[d]) : { ...i,
                    ...a
                }[d] === v
            }) ? [...u, h, c] : u
        }, []);
        return sh(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    tv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ox = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = _.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
}, l) => _.createElement("svg", {
    ref: l,
    ...Ox,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: tv("lucide", o),
    ...a
}, [...s.map(([u, m]) => _.createElement(u, m)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (e, t) => {
    const n = _.forwardRef(({
        className: r,
        ...o
    }, i) => _.createElement(Ix, {
        ref: i,
        iconNode: t,
        className: tv(`lucide-${jx(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = Ke("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = Ke("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = Ke("ChevronUp", [
    ["path", {
        d: "m18 15-6-6-6 6",
        key: "153udz"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = Ke("CircleCheck", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = Ke("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = Ke("Download", [
    ["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }],
    ["polyline", {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = Ke("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = Ke("EyeOff", [
    ["path", {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f"
    }],
    ["path", {
        d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
        key: "151rxh"
    }],
    ["path", {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a"
    }],
    ["path", {
        d: "m2 2 20 20",
        key: "1ooewy"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = Ke("Eye", [
    ["path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = Ke("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = Ke("Info", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 16v-4",
        key: "1dtifu"
    }],
    ["path", {
        d: "M12 8h.01",
        key: "e9boi3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uh = Ke("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = Ke("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = Ke("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = Ke("Moon", [
    ["path", {
        d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
        key: "a7tn18"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = Ke("Settings", [
    ["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = Ke("Sun", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
    }],
    ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }],
    ["path", {
        d: "M12 20v2",
        key: "1lh1kg"
    }],
    ["path", {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
    }],
    ["path", {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
    }],
    ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }],
    ["path", {
        d: "M20 12h2",
        key: "1q8mjw"
    }],
    ["path", {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
    }],
    ["path", {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = Ke("Upload", [
    ["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }],
    ["polyline", {
        points: "17 8 12 3 7 8",
        key: "t8dd8p"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "3",
        y2: "15",
        key: "widbto"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ov = Ke("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = Ke("Youtube", [
        ["path", {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
            key: "1q2vi4"
        }],
        ["path", {
            d: "m10 15 5-3-5-3z",
            key: "1jp15x"
        }]
    ]),
    Td = "-",
    Vx = e => {
        const t = Gx(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(Td);
                return a[0] === "" && a.length !== 1 && a.shift(), iv(a, t) || Kx(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    },
    iv = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? iv(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Td);
        return (s = t.validators.find(({
            validator: a
        }) => a(i))) == null ? void 0 : s.classGroupId
    },
    ch = /^\[(.+)\]$/,
    Kx = e => {
        if (ch.test(e)) {
            const t = ch.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    Gx = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return Qx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            rc(s, r, i, t)
        }), r
    },
    rc = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : dh(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (Yx(o)) {
                    rc(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                rc(s, dh(t, i), n, r)
            })
        })
    },
    dh = (e, t) => {
        let n = e;
        return t.split(Td).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    Yx = e => e.isThemeGetter,
    Qx = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
        return [n, o]
    }) : e,
    Zx = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    sv = "!",
    Xx = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = a => {
            const l = [];
            let u = 0,
                m = 0,
                h;
            for (let v = 0; v < a.length; v++) {
                let p = a[v];
                if (u === 0) {
                    if (p === o && (r || a.slice(v, v + i) === t)) {
                        l.push(a.slice(m, v)), m = v + i;
                        continue
                    }
                    if (p === "/") {
                        h = v;
                        continue
                    }
                }
                p === "[" ? u++ : p === "]" && u--
            }
            const c = l.length === 0 ? a : a.substring(m),
                f = c.startsWith(sv),
                y = f ? c.substring(1) : c,
                d = h && h > m ? h - m : void 0;
            return {
                modifiers: l,
                hasImportantModifier: f,
                baseClassName: y,
                maybePostfixModifierPosition: d
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    },
    qx = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    Jx = e => ({
        cache: Zx(e.cacheSize),
        parseClassName: Xx(e),
        ...Vx(e)
    }),
    eb = /\s+/,
    tb = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(eb);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l],
                {
                    modifiers: m,
                    hasImportantModifier: h,
                    baseClassName: c,
                    maybePostfixModifierPosition: f
                } = n(u);
            let y = !!f,
                d = r(y ? c.substring(0, f) : c);
            if (!d) {
                if (!y) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (d = r(c), !d) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                y = !1
            }
            const v = qx(m).join(":"),
                p = h ? v + sv : v,
                g = p + d;
            if (i.includes(g)) continue;
            i.push(g);
            const w = o(d, y);
            for (let C = 0; C < w.length; ++C) {
                const E = w[C];
                i.push(p + E)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function nb() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = av(t)) && (r && (r += " "), r += n);
    return r
}
const av = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = av(e[r])) && (n && (n += " "), n += t);
    return n
};

function rb(e, ...t) {
    let n, r, o, i = s;

    function s(l) {
        const u = t.reduce((m, h) => h(m), e());
        return n = Jx(u), r = n.cache.get, o = n.cache.set, i = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const m = tb(l, n);
        return o(l, m), m
    }
    return function() {
        return i(nb.apply(null, arguments))
    }
}
const Re = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    lv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    ob = /^\d+\/\d+$/,
    ib = new Set(["px", "full", "screen"]),
    sb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    ab = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    lb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ub = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    cb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    vn = e => yo(e) || ib.has(e) || ob.test(e),
    Ln = e => Ho(e, "length", yb),
    yo = e => !!e && !Number.isNaN(Number(e)),
    Gl = e => Ho(e, "number", yo),
    oi = e => !!e && Number.isInteger(Number(e)),
    db = e => e.endsWith("%") && yo(e.slice(0, -1)),
    ge = e => lv.test(e),
    Mn = e => sb.test(e),
    fb = new Set(["length", "size", "percentage"]),
    hb = e => Ho(e, fb, uv),
    pb = e => Ho(e, "position", uv),
    mb = new Set(["image", "url"]),
    gb = e => Ho(e, mb, xb),
    vb = e => Ho(e, "", wb),
    ii = () => !0,
    Ho = (e, t, n) => {
        const r = lv.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    yb = e => ab.test(e) && !lb.test(e),
    uv = () => !1,
    wb = e => ub.test(e),
    xb = e => cb.test(e),
    bb = () => {
        const e = Re("colors"),
            t = Re("spacing"),
            n = Re("blur"),
            r = Re("brightness"),
            o = Re("borderColor"),
            i = Re("borderRadius"),
            s = Re("borderSpacing"),
            a = Re("borderWidth"),
            l = Re("contrast"),
            u = Re("grayscale"),
            m = Re("hueRotate"),
            h = Re("invert"),
            c = Re("gap"),
            f = Re("gradientColorStops"),
            y = Re("gradientColorStopPositions"),
            d = Re("inset"),
            v = Re("margin"),
            p = Re("opacity"),
            g = Re("padding"),
            w = Re("saturate"),
            C = Re("scale"),
            E = Re("sepia"),
            A = Re("skew"),
            N = Re("space"),
            j = Re("translate"),
            I = () => ["auto", "contain", "none"],
            B = () => ["auto", "hidden", "clip", "visible", "scroll"],
            G = () => ["auto", ge, t],
            k = () => [ge, t],
            F = () => ["", vn, Ln],
            S = () => ["auto", yo, ge],
            U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            X = () => ["solid", "dashed", "dotted", "double", "none"],
            H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            z = () => ["", "0", ge],
            Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            O = () => [yo, ge];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [ii],
                spacing: [vn, Ln],
                blur: ["none", "", Mn, ge],
                brightness: O(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Mn, ge],
                borderSpacing: k(),
                borderWidth: F(),
                contrast: O(),
                grayscale: z(),
                hueRotate: O(),
                invert: z(),
                gap: k(),
                gradientColorStops: [e],
                gradientColorStopPositions: [db, Ln],
                inset: G(),
                margin: G(),
                opacity: O(),
                padding: k(),
                saturate: O(),
                scale: O(),
                sepia: z(),
                skew: O(),
                space: k(),
                translate: k()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", ge]
                }],
                container: ["container"],
                columns: [{
                    columns: [Mn]
                }],
                "break-after": [{
                    "break-after": Y()
                }],
                "break-before": [{
                    "break-before": Y()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...U(), ge]
                }],
                overflow: [{
                    overflow: B()
                }],
                "overflow-x": [{
                    "overflow-x": B()
                }],
                "overflow-y": [{
                    "overflow-y": B()
                }],
                overscroll: [{
                    overscroll: I()
                }],
                "overscroll-x": [{
                    "overscroll-x": I()
                }],
                "overscroll-y": [{
                    "overscroll-y": I()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [d]
                }],
                "inset-x": [{
                    "inset-x": [d]
                }],
                "inset-y": [{
                    "inset-y": [d]
                }],
                start: [{
                    start: [d]
                }],
                end: [{
                    end: [d]
                }],
                top: [{
                    top: [d]
                }],
                right: [{
                    right: [d]
                }],
                bottom: [{
                    bottom: [d]
                }],
                left: [{
                    left: [d]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", oi, ge]
                }],
                basis: [{
                    basis: G()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", ge]
                }],
                grow: [{
                    grow: z()
                }],
                shrink: [{
                    shrink: z()
                }],
                order: [{
                    order: ["first", "last", "none", oi, ge]
                }],
                "grid-cols": [{
                    "grid-cols": [ii]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", oi, ge]
                    }, ge]
                }],
                "col-start": [{
                    "col-start": S()
                }],
                "col-end": [{
                    "col-end": S()
                }],
                "grid-rows": [{
                    "grid-rows": [ii]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [oi, ge]
                    }, ge]
                }],
                "row-start": [{
                    "row-start": S()
                }],
                "row-end": [{
                    "row-end": S()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", ge]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", ge]
                }],
                gap: [{
                    gap: [c]
                }],
                "gap-x": [{
                    "gap-x": [c]
                }],
                "gap-y": [{
                    "gap-y": [c]
                }],
                "justify-content": [{
                    justify: ["normal", ...D()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...D(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...D(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [g]
                }],
                px: [{
                    px: [g]
                }],
                py: [{
                    py: [g]
                }],
                ps: [{
                    ps: [g]
                }],
                pe: [{
                    pe: [g]
                }],
                pt: [{
                    pt: [g]
                }],
                pr: [{
                    pr: [g]
                }],
                pb: [{
                    pb: [g]
                }],
                pl: [{
                    pl: [g]
                }],
                m: [{
                    m: [v]
                }],
                mx: [{
                    mx: [v]
                }],
                my: [{
                    my: [v]
                }],
                ms: [{
                    ms: [v]
                }],
                me: [{
                    me: [v]
                }],
                mt: [{
                    mt: [v]
                }],
                mr: [{
                    mr: [v]
                }],
                mb: [{
                    mb: [v]
                }],
                ml: [{
                    ml: [v]
                }],
                "space-x": [{
                    "space-x": [N]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [N]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ge, t]
                }],
                "min-w": [{
                    "min-w": [ge, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [ge, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Mn]
                    }, Mn]
                }],
                h: [{
                    h: [ge, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [ge, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Mn, Ln]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gl]
                }],
                "font-family": [{
                    font: [ii]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ge]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", yo, Gl]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vn, ge]
                }],
                "list-image": [{
                    "list-image": ["none", ge]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", ge]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...X(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", vn, Ln]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", vn, ge]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: k()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ge]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ge]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...U(), pb]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", hb]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, gb]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [y]
                }],
                "gradient-via-pos": [{
                    via: [y]
                }],
                "gradient-to-pos": [{
                    to: [y]
                }],
                "gradient-from": [{
                    from: [f]
                }],
                "gradient-via": [{
                    via: [f]
                }],
                "gradient-to": [{
                    to: [f]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...X(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: X()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...X()]
                }],
                "outline-offset": [{
                    "outline-offset": [vn, ge]
                }],
                "outline-w": [{
                    outline: [vn, Ln]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: F()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [vn, Ln]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Mn, vb]
                }],
                "shadow-color": [{
                    shadow: [ii]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...H(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": H()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Mn, ge]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [m]
                }],
                invert: [{
                    invert: [h]
                }],
                saturate: [{
                    saturate: [w]
                }],
                sepia: [{
                    sepia: [E]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [m]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [h]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [w]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [E]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
                }],
                duration: [{
                    duration: O()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", ge]
                }],
                delay: [{
                    delay: O()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", ge]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [C]
                }],
                "scale-x": [{
                    "scale-x": [C]
                }],
                "scale-y": [{
                    "scale-y": [C]
                }],
                rotate: [{
                    rotate: [oi, ge]
                }],
                "translate-x": [{
                    "translate-x": [j]
                }],
                "translate-y": [{
                    "translate-y": [j]
                }],
                "skew-x": [{
                    "skew-x": [A]
                }],
                "skew-y": [{
                    "skew-y": [A]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ge]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ge]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": k()
                }],
                "scroll-mx": [{
                    "scroll-mx": k()
                }],
                "scroll-my": [{
                    "scroll-my": k()
                }],
                "scroll-ms": [{
                    "scroll-ms": k()
                }],
                "scroll-me": [{
                    "scroll-me": k()
                }],
                "scroll-mt": [{
                    "scroll-mt": k()
                }],
                "scroll-mr": [{
                    "scroll-mr": k()
                }],
                "scroll-mb": [{
                    "scroll-mb": k()
                }],
                "scroll-ml": [{
                    "scroll-ml": k()
                }],
                "scroll-p": [{
                    "scroll-p": k()
                }],
                "scroll-px": [{
                    "scroll-px": k()
                }],
                "scroll-py": [{
                    "scroll-py": k()
                }],
                "scroll-ps": [{
                    "scroll-ps": k()
                }],
                "scroll-pe": [{
                    "scroll-pe": k()
                }],
                "scroll-pt": [{
                    "scroll-pt": k()
                }],
                "scroll-pr": [{
                    "scroll-pr": k()
                }],
                "scroll-pb": [{
                    "scroll-pb": k()
                }],
                "scroll-pl": [{
                    "scroll-pl": k()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ge]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [vn, Ln, Gl]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Sb = rb(bb);

function rt(...e) {
    return Sb(Jg(e))
}
const _b = Rx,
    cv = _.forwardRef(({
        className: e,
        ...t
    }, n) => x.jsx(Kg, {
        ref: n,
        className: rt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
cv.displayName = Kg.displayName;
const Cb = ev("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    dv = _.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => x.jsx(Gg, {
        ref: r,
        className: rt(Cb({
            variant: t
        }), e),
        ...n
    }));
dv.displayName = Gg.displayName;
const Eb = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(Zg, {
    ref: n,
    className: rt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Eb.displayName = Zg.displayName;
const fv = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(Xg, {
    ref: n,
    className: rt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: x.jsx(ov, {
        className: "h-4 w-4"
    })
}));
fv.displayName = Xg.displayName;
const hv = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(Yg, {
    ref: n,
    className: rt("text-sm font-semibold", e),
    ...t
}));
hv.displayName = Yg.displayName;
const pv = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(Qg, {
    ref: n,
    className: rt("text-sm opacity-90", e),
    ...t
}));
pv.displayName = Qg.displayName;

function kb() {
    const {
        toasts: e
    } = Eg();
    return x.jsxs(_b, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return x.jsxs(dv, { ...i,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && x.jsx(hv, {
                        children: n
                    }), r && x.jsx(pv, {
                        children: r
                    })]
                }), o, x.jsx(fv, {})]
            }, t)
        }), x.jsx(cv, {})]
    })
}
var fh = ["light", "dark"],
    Tb = "(prefers-color-scheme: dark)",
    Nb = _.createContext(void 0),
    Pb = {
        setTheme: e => {},
        themes: []
    },
    Ab = () => {
        var e;
        return (e = _.useContext(Nb)) != null ? e : Pb
    };
_.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l
}) => {
    let u = i === "system",
        m = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(y=>`'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        h = o ? fh.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        c = (y, d = !1, v = !0) => {
            let p = s ? s[y] : y,
                g = d ? y + "|| ''" : `'${p}'`,
                w = "";
            return o && v && !d && fh.includes(y) && (w += `d.style.colorScheme = '${y}';`), n === "class" ? d || p ? w += `c.add(${g})` : w += "null" : p && (w += `d[s](n,${g})`), w
        },
        f = e ? `!function(){${m}${c(e)}}()` : r ? `!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Tb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}${u?"":"else{"+c(i,!1,!1)+"}"}${h}}catch(e){}}()` : `!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}else{${c(i,!1,!1)};}${h}}catch(t){}}();`;
    return _.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
});
var Rb = e => {
        switch (e) {
            case "success":
                return Ib;
            case "info":
                return Mb;
            case "warning":
                return Lb;
            case "error":
                return Db;
            default:
                return null
        }
    },
    jb = Array(12).fill(0),
    Ob = ({
        visible: e
    }) => se.createElement("div", {
        className: "sonner-loading-wrapper",
        "data-visible": e
    }, se.createElement("div", {
        className: "sonner-spinner"
    }, jb.map((t, n) => se.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    })))),
    Ib = se.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, se.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    Lb = se.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, se.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    Mb = se.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, se.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    Db = se.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, se.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    zb = () => {
        let [e, t] = se.useState(document.hidden);
        return se.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    oc = 1,
    Fb = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : oc++, i = this.toasts.find(a => a.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({ ...a,
                    ...e,
                    id: o,
                    title: n
                }), { ...a,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : a) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0;
                return r.then(async i => {
                    if (Ub(i) && !i.ok) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error,
                            a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: a
                        })
                    } else if (t.success !== void 0) {
                        o = !1;
                        let s = typeof t.success == "function" ? await t.success(i) : t.success,
                            a = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "success",
                            message: s,
                            description: a
                        })
                    }
                }).catch(async i => {
                    if (t.error !== void 0) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(i) : t.error,
                            a = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: a
                        })
                    }
                }).finally(() => {
                    var i;
                    o && (this.dismiss(n), n = void 0), (i = t.finally) == null || i.call(t)
                }), n
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || oc++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.subscribers = [], this.toasts = []
        }
    },
    Tt = new Fb,
    Bb = (e, t) => {
        let n = (t == null ? void 0 : t.id) || oc++;
        return Tt.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    Ub = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    $b = Bb,
    Wb = () => Tt.toasts,
    hh = Object.assign($b, {
        success: Tt.success,
        info: Tt.info,
        warning: Tt.warning,
        error: Tt.error,
        custom: Tt.custom,
        message: Tt.message,
        promise: Tt.promise,
        dismiss: Tt.dismiss,
        loading: Tt.loading
    }, {
        getHistory: Wb
    });

function Hb(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Hb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Ts(e) {
    return e.label !== void 0
}
var Vb = 3,
    Kb = "32px",
    Gb = 4e3,
    Yb = 356,
    Qb = 14,
    Zb = 20,
    Xb = 200;

function qb(...e) {
    return e.filter(Boolean).join(" ")
}
var Jb = e => {
    var t, n, r, o, i, s, a, l, u, m;
    let {
        invert: h,
        toast: c,
        unstyled: f,
        interacting: y,
        setHeights: d,
        visibleToasts: v,
        heights: p,
        index: g,
        toasts: w,
        expanded: C,
        removeToast: E,
        defaultRichColors: A,
        closeButton: N,
        style: j,
        cancelButtonStyle: I,
        actionButtonStyle: B,
        className: G = "",
        descriptionClassName: k = "",
        duration: F,
        position: S,
        gap: U,
        loadingIcon: X,
        expandByDefault: H,
        classNames: D,
        icons: z,
        closeButtonAriaLabel: Y = "Close toast",
        pauseWhenPageIsHidden: O,
        cn: L
    } = e, [te, R] = se.useState(!1), [V, J] = se.useState(!1), [ee, oe] = se.useState(!1), [ue, de] = se.useState(!1), [fe, he] = se.useState(0), [ke, b] = se.useState(0), K = se.useRef(null), W = se.useRef(null), P = g === 0, T = g + 1 <= v, M = c.type, Q = c.dismissible !== !1, q = c.className || "", $ = c.descriptionClassName || "", re = se.useMemo(() => p.findIndex(pe => pe.toastId === c.id) || 0, [p, c.id]), ae = se.useMemo(() => {
        var pe;
        return (pe = c.closeButton) != null ? pe : N
    }, [c.closeButton, N]), ie = se.useMemo(() => c.duration || F || Gb, [c.duration, F]), ce = se.useRef(0), be = se.useRef(0), ye = se.useRef(0), Ge = se.useRef(null), [jn, Dt] = S.split("-"), On = se.useMemo(() => p.reduce((pe, Te, Ee) => Ee >= re ? pe : pe + Te.height, 0), [p, re]), Ie = zb(), Hr = c.invert || h, gr = M === "loading";
    be.current = se.useMemo(() => re * U + On, [re, On]), se.useEffect(() => {
        R(!0)
    }, []), se.useLayoutEffect(() => {
        if (!te) return;
        let pe = W.current,
            Te = pe.style.height;
        pe.style.height = "auto";
        let Ee = pe.getBoundingClientRect().height;
        pe.style.height = Te, b(Ee), d(Et => Et.find(ot => ot.toastId === c.id) ? Et.map(ot => ot.toastId === c.id ? { ...ot,
            height: Ee
        } : ot) : [{
            toastId: c.id,
            height: Ee,
            position: c.position
        }, ...Et])
    }, [te, c.title, c.description, d, c.id]);
    let Xe = se.useCallback(() => {
        J(!0), he(be.current), d(pe => pe.filter(Te => Te.toastId !== c.id)), setTimeout(() => {
            E(c)
        }, Xb)
    }, [c, E, d, be]);
    se.useEffect(() => {
        if (c.promise && M === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
        let pe, Te = ie;
        return C || y || O && Ie ? (() => {
            if (ye.current < ce.current) {
                let Ee = new Date().getTime() - ce.current;
                Te = Te - Ee
            }
            ye.current = new Date().getTime()
        })() : Te !== 1 / 0 && (ce.current = new Date().getTime(), pe = setTimeout(() => {
            var Ee;
            (Ee = c.onAutoClose) == null || Ee.call(c, c), Xe()
        }, Te)), () => clearTimeout(pe)
    }, [C, y, H, c, ie, Xe, c.promise, M, O, Ie]), se.useEffect(() => {
        let pe = W.current;
        if (pe) {
            let Te = pe.getBoundingClientRect().height;
            return b(Te), d(Ee => [{
                toastId: c.id,
                height: Te,
                position: c.position
            }, ...Ee]), () => d(Ee => Ee.filter(Et => Et.toastId !== c.id))
        }
    }, [d, c.id]), se.useEffect(() => {
        c.delete && Xe()
    }, [Xe, c.delete]);

    function is() {
        return z != null && z.loading ? se.createElement("div", {
            className: "sonner-loader",
            "data-visible": M === "loading"
        }, z.loading) : X ? se.createElement("div", {
            className: "sonner-loader",
            "data-visible": M === "loading"
        }, X) : se.createElement(Ob, {
            visible: M === "loading"
        })
    }
    return se.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: W,
        className: L(G, q, D == null ? void 0 : D.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, D == null ? void 0 : D.default, D == null ? void 0 : D[M], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[M]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : A,
        "data-styled": !(c.jsx || c.unstyled || f),
        "data-mounted": te,
        "data-promise": !!c.promise,
        "data-removed": V,
        "data-visible": T,
        "data-y-position": jn,
        "data-x-position": Dt,
        "data-index": g,
        "data-front": P,
        "data-swiping": ee,
        "data-dismissible": Q,
        "data-type": M,
        "data-invert": Hr,
        "data-swipe-out": ue,
        "data-expanded": !!(C || H && te),
        style: {
            "--index": g,
            "--toasts-before": g,
            "--z-index": w.length - g,
            "--offset": `${V?fe:be.current}px`,
            "--initial-height": H ? "auto" : `${ke}px`,
            ...j,
            ...c.style
        },
        onPointerDown: pe => {
            gr || !Q || (K.current = new Date, he(be.current), pe.target.setPointerCapture(pe.pointerId), pe.target.tagName !== "BUTTON" && (oe(!0), Ge.current = {
                x: pe.clientX,
                y: pe.clientY
            }))
        },
        onPointerUp: () => {
            var pe, Te, Ee, Et;
            if (ue || !Q) return;
            Ge.current = null;
            let ot = Number(((pe = W.current) == null ? void 0 : pe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                gn = new Date().getTime() - ((Te = K.current) == null ? void 0 : Te.getTime()),
                fy = Math.abs(ot) / gn;
            if (Math.abs(ot) >= Zb || fy > .11) {
                he(be.current), (Ee = c.onDismiss) == null || Ee.call(c, c), Xe(), de(!0);
                return
            }(Et = W.current) == null || Et.style.setProperty("--swipe-amount", "0px"), oe(!1)
        },
        onPointerMove: pe => {
            var Te;
            if (!Ge.current || !Q) return;
            let Ee = pe.clientY - Ge.current.y,
                Et = pe.clientX - Ge.current.x,
                ot = (jn === "top" ? Math.min : Math.max)(0, Ee),
                gn = pe.pointerType === "touch" ? 10 : 2;
            Math.abs(ot) > gn ? (Te = W.current) == null || Te.style.setProperty("--swipe-amount", `${Ee}px`) : Math.abs(Et) > gn && (Ge.current = null)
        }
    }, ae && !c.jsx ? se.createElement("button", {
        "aria-label": Y,
        "data-disabled": gr,
        "data-close-button": !0,
        onClick: gr || !Q ? () => {} : () => {
            var pe;
            Xe(), (pe = c.onDismiss) == null || pe.call(c, c)
        },
        className: L(D == null ? void 0 : D.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, se.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, se.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), se.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || se.isValidElement(c.title) ? c.jsx || c.title : se.createElement(se.Fragment, null, M || c.icon || c.promise ? se.createElement("div", {
        "data-icon": "",
        className: L(D == null ? void 0 : D.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || is() : null, c.type !== "loading" ? c.icon || (z == null ? void 0 : z[M]) || Rb(M) : null) : null, se.createElement("div", {
        "data-content": "",
        className: L(D == null ? void 0 : D.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, se.createElement("div", {
        "data-title": "",
        className: L(D == null ? void 0 : D.title, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.title)
    }, c.title), c.description ? se.createElement("div", {
        "data-description": "",
        className: L(k, $, D == null ? void 0 : D.description, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.description)
    }, c.description) : null), se.isValidElement(c.cancel) ? c.cancel : c.cancel && Ts(c.cancel) ? se.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || I,
        onClick: pe => {
            var Te, Ee;
            Ts(c.cancel) && Q && ((Ee = (Te = c.cancel).onClick) == null || Ee.call(Te, pe), Xe())
        },
        className: L(D == null ? void 0 : D.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, se.isValidElement(c.action) ? c.action : c.action && Ts(c.action) ? se.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || B,
        onClick: pe => {
            var Te, Ee;
            Ts(c.action) && (pe.defaultPrevented || ((Ee = (Te = c.action).onClick) == null || Ee.call(Te, pe), Xe()))
        },
        className: L(D == null ? void 0 : D.actionButton, (m = c == null ? void 0 : c.classNames) == null ? void 0 : m.actionButton)
    }, c.action.label) : null))
};

function ph() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var e2 = e => {
    let {
        invert: t,
        position: n = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: o,
        closeButton: i,
        className: s,
        offset: a,
        theme: l = "light",
        richColors: u,
        duration: m,
        style: h,
        visibleToasts: c = Vb,
        toastOptions: f,
        dir: y = ph(),
        gap: d = Qb,
        loadingIcon: v,
        icons: p,
        containerAriaLabel: g = "Notifications",
        pauseWhenPageIsHidden: w,
        cn: C = qb
    } = e, [E, A] = se.useState([]), N = se.useMemo(() => Array.from(new Set([n].concat(E.filter(O => O.position).map(O => O.position)))), [E, n]), [j, I] = se.useState([]), [B, G] = se.useState(!1), [k, F] = se.useState(!1), [S, U] = se.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), X = se.useRef(null), H = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), D = se.useRef(null), z = se.useRef(!1), Y = se.useCallback(O => {
        var L;
        (L = E.find(te => te.id === O.id)) != null && L.delete || Tt.dismiss(O.id), A(te => te.filter(({
            id: R
        }) => R !== O.id))
    }, [E]);
    return se.useEffect(() => Tt.subscribe(O => {
        if (O.dismiss) {
            A(L => L.map(te => te.id === O.id ? { ...te,
                delete: !0
            } : te));
            return
        }
        setTimeout(() => {
            _g.flushSync(() => {
                A(L => {
                    let te = L.findIndex(R => R.id === O.id);
                    return te !== -1 ? [...L.slice(0, te), { ...L[te],
                        ...O
                    }, ...L.slice(te + 1)] : [O, ...L]
                })
            })
        })
    }), []), se.useEffect(() => {
        if (l !== "system") {
            U(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
            matches: O
        }) => {
            U(O ? "dark" : "light")
        })
    }, [l]), se.useEffect(() => {
        E.length <= 1 && G(!1)
    }, [E]), se.useEffect(() => {
        let O = L => {
            var te, R;
            r.every(V => L[V] || L.code === V) && (G(!0), (te = X.current) == null || te.focus()), L.code === "Escape" && (document.activeElement === X.current || (R = X.current) != null && R.contains(document.activeElement)) && G(!1)
        };
        return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O)
    }, [r]), se.useEffect(() => {
        if (X.current) return () => {
            D.current && (D.current.focus({
                preventScroll: !0
            }), D.current = null, z.current = !1)
        }
    }, [X.current]), E.length ? se.createElement("section", {
        "aria-label": `${g} ${H}`,
        tabIndex: -1
    }, N.map((O, L) => {
        var te;
        let [R, V] = O.split("-");
        return se.createElement("ol", {
            key: O,
            dir: y === "auto" ? ph() : y,
            tabIndex: -1,
            ref: X,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": S,
            "data-y-position": R,
            "data-x-position": V,
            style: {
                "--front-toast-height": `${((te=j[0])==null?void 0:te.height)||0}px`,
                "--offset": typeof a == "number" ? `${a}px` : a || Kb,
                "--width": `${Yb}px`,
                "--gap": `${d}px`,
                ...h
            },
            onBlur: J => {
                z.current && !J.currentTarget.contains(J.relatedTarget) && (z.current = !1, D.current && (D.current.focus({
                    preventScroll: !0
                }), D.current = null))
            },
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || z.current || (z.current = !0, D.current = J.relatedTarget)
            },
            onMouseEnter: () => G(!0),
            onMouseMove: () => G(!0),
            onMouseLeave: () => {
                k || G(!1)
            },
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || F(!0)
            },
            onPointerUp: () => F(!1)
        }, E.filter(J => !J.position && L === 0 || J.position === O).map((J, ee) => {
            var oe, ue;
            return se.createElement(Jb, {
                key: J.id,
                icons: p,
                index: ee,
                toast: J,
                defaultRichColors: u,
                duration: (oe = f == null ? void 0 : f.duration) != null ? oe : m,
                className: f == null ? void 0 : f.className,
                descriptionClassName: f == null ? void 0 : f.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (ue = f == null ? void 0 : f.closeButton) != null ? ue : i,
                interacting: k,
                position: O,
                style: f == null ? void 0 : f.style,
                unstyled: f == null ? void 0 : f.unstyled,
                classNames: f == null ? void 0 : f.classNames,
                cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
                actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
                removeToast: Y,
                toasts: E.filter(de => de.position == J.position),
                heights: j.filter(de => de.position == J.position),
                setHeights: I,
                expandByDefault: o,
                gap: d,
                loadingIcon: v,
                expanded: B,
                pauseWhenPageIsHidden: w,
                cn: C
            })
        }))
    })) : null
};
const t2 = ({ ...e
}) => {
    const {
        theme: t = "system"
    } = Ab();
    return x.jsx(e2, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
};
var n2 = xp.useId || (() => {}),
    r2 = 0;

function Xa(e) {
    const [t, n] = _.useState(n2());
    return ft(() => {
        n(r => r ? ? String(r2++))
    }, [e]), t ? `radix-${t}` : ""
}
const o2 = ["top", "right", "bottom", "left"],
    ar = Math.min,
    Pt = Math.max,
    Ca = Math.round,
    Ns = Math.floor,
    lr = e => ({
        x: e,
        y: e
    }),
    i2 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    s2 = {
        start: "end",
        end: "start"
    };

function ic(e, t, n) {
    return Pt(e, ar(t, n))
}

function Pn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function An(e) {
    return e.split("-")[0]
}

function Vo(e) {
    return e.split("-")[1]
}

function Nd(e) {
    return e === "x" ? "y" : "x"
}

function Pd(e) {
    return e === "y" ? "height" : "width"
}

function ur(e) {
    return ["top", "bottom"].includes(An(e)) ? "y" : "x"
}

function Ad(e) {
    return Nd(ur(e))
}

function a2(e, t, n) {
    n === void 0 && (n = !1);
    const r = Vo(e),
        o = Ad(e),
        i = Pd(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ea(s)), [s, Ea(s)]
}

function l2(e) {
    const t = Ea(e);
    return [sc(e), t, sc(t)]
}

function sc(e) {
    return e.replace(/start|end/g, t => s2[t])
}

function u2(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return []
    }
}

function c2(e, t, n, r) {
    const o = Vo(e);
    let i = u2(An(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(sc)))), i
}

function Ea(e) {
    return e.replace(/left|right|bottom|top/g, t => i2[t])
}

function d2(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function mv(e) {
    return typeof e != "number" ? d2(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function ka(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function mh(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = ur(t),
        s = Ad(t),
        a = Pd(s),
        l = An(t),
        u = i === "y",
        m = r.x + r.width / 2 - o.width / 2,
        h = r.y + r.height / 2 - o.height / 2,
        c = r[a] / 2 - o[a] / 2;
    let f;
    switch (l) {
        case "top":
            f = {
                x: m,
                y: r.y - o.height
            };
            break;
        case "bottom":
            f = {
                x: m,
                y: r.y + r.height
            };
            break;
        case "right":
            f = {
                x: r.x + r.width,
                y: h
            };
            break;
        case "left":
            f = {
                x: r.x - o.width,
                y: h
            };
            break;
        default:
            f = {
                x: r.x,
                y: r.y
            }
    }
    switch (Vo(t)) {
        case "start":
            f[s] -= c * (n && u ? -1 : 1);
            break;
        case "end":
            f[s] += c * (n && u ? -1 : 1);
            break
    }
    return f
}
const f2 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: m,
            y: h
        } = mh(u, r, l),
        c = r,
        f = {},
        y = 0;
    for (let d = 0; d < a.length; d++) {
        const {
            name: v,
            fn: p
        } = a[d], {
            x: g,
            y: w,
            data: C,
            reset: E
        } = await p({
            x: m,
            y: h,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        m = g ? ? m, h = w ? ? h, f = { ...f,
            [v]: { ...f[v],
                ...C
            }
        }, E && y <= 50 && (y++, typeof E == "object" && (E.placement && (c = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects), {
            x: m,
            y: h
        } = mh(u, c, l)), d = -1)
    }
    return {
        x: m,
        y: h,
        placement: c,
        strategy: o,
        middlewareData: f
    }
};
async function Ui(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: m = "viewport",
        elementContext: h = "floating",
        altBoundary: c = !1,
        padding: f = 0
    } = Pn(t, e), y = mv(f), v = a[c ? h === "floating" ? "reference" : "floating" : h], p = ka(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: m,
        strategy: l
    })), g = h === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = ka(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: g,
        offsetParent: w,
        strategy: l
    }) : g);
    return {
        top: (p.top - E.top + y.top) / C.y,
        bottom: (E.bottom - p.bottom + y.bottom) / C.y,
        left: (p.left - E.left + y.left) / C.x,
        right: (E.right - p.right + y.right) / C.x
    }
}
const h2 = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: m = 0
            } = Pn(e, t) || {};
            if (u == null) return {};
            const h = mv(m),
                c = {
                    x: n,
                    y: r
                },
                f = Ad(o),
                y = Pd(f),
                d = await s.getDimensions(u),
                v = f === "y",
                p = v ? "top" : "left",
                g = v ? "bottom" : "right",
                w = v ? "clientHeight" : "clientWidth",
                C = i.reference[y] + i.reference[f] - c[f] - i.floating[y],
                E = c[f] - i.reference[f],
                A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let N = A ? A[w] : 0;
            (!N || !await (s.isElement == null ? void 0 : s.isElement(A))) && (N = a.floating[w] || i.floating[y]);
            const j = C / 2 - E / 2,
                I = N / 2 - d[y] / 2 - 1,
                B = ar(h[p], I),
                G = ar(h[g], I),
                k = B,
                F = N - d[y] - G,
                S = N / 2 - d[y] / 2 + j,
                U = ic(k, S, F),
                X = !l.arrow && Vo(o) != null && S !== U && i.reference[y] / 2 - (S < k ? B : G) - d[y] / 2 < 0,
                H = X ? S < k ? S - k : S - F : 0;
            return {
                [f]: c[f] + H,
                data: {
                    [f]: U,
                    centerOffset: S - U - H,
                    ...X && {
                        alignmentOffset: H
                    }
                },
                reset: X
            }
        }
    }),
    p2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: m = !0,
                    crossAxis: h = !0,
                    fallbackPlacements: c,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: y = "none",
                    flipAlignment: d = !0,
                    ...v
                } = Pn(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const p = An(o),
                    g = ur(a),
                    w = An(a) === a,
                    C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    E = c || (w || !d ? [Ea(a)] : l2(a)),
                    A = y !== "none";
                !c && A && E.push(...c2(a, d, y, C));
                const N = [a, ...E],
                    j = await Ui(t, v),
                    I = [];
                let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (m && I.push(j[p]), h) {
                    const S = a2(o, s, C);
                    I.push(j[S[0]], j[S[1]])
                }
                if (B = [...B, {
                        placement: o,
                        overflows: I
                    }], !I.every(S => S <= 0)) {
                    var G, k;
                    const S = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1,
                        U = N[S];
                    if (U) return {
                        data: {
                            index: S,
                            overflows: B
                        },
                        reset: {
                            placement: U
                        }
                    };
                    let X = (k = B.filter(H => H.overflows[0] <= 0).sort((H, D) => H.overflows[1] - D.overflows[1])[0]) == null ? void 0 : k.placement;
                    if (!X) switch (f) {
                        case "bestFit":
                            {
                                var F;
                                const H = (F = B.filter(D => {
                                    if (A) {
                                        const z = ur(D.placement);
                                        return z === g || z === "y"
                                    }
                                    return !0
                                }).map(D => [D.placement, D.overflows.filter(z => z > 0).reduce((z, Y) => z + Y, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : F[0];H && (X = H);
                                break
                            }
                        case "initialPlacement":
                            X = a;
                            break
                    }
                    if (o !== X) return {
                        reset: {
                            placement: X
                        }
                    }
                }
                return {}
            }
        }
    };

function gh(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function vh(e) {
    return o2.some(t => e[t] >= 0)
}
const m2 = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Pn(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const i = await Ui(t, { ...o,
                                elementContext: "reference"
                            }),
                            s = gh(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: vh(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const i = await Ui(t, { ...o,
                                altBoundary: !0
                            }),
                            s = gh(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: vh(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function g2(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = An(n), a = Vo(n), l = ur(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, m = i && l ? -1 : 1, h = Pn(t, e);
    let {
        mainAxis: c,
        crossAxis: f,
        alignmentAxis: y
    } = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis
    };
    return a && typeof y == "number" && (f = a === "end" ? y * -1 : y), l ? {
        x: f * m,
        y: c * u
    } : {
        x: c * u,
        y: f * m
    }
}
const v2 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: a
                } = t, l = await g2(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + l.x,
                    y: i + l.y,
                    data: { ...l,
                        placement: s
                    }
                }
            }
        }
    },
    y2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: v => {
                            let {
                                x: p,
                                y: g
                            } = v;
                            return {
                                x: p,
                                y: g
                            }
                        }
                    },
                    ...l
                } = Pn(e, t), u = {
                    x: n,
                    y: r
                }, m = await Ui(t, l), h = ur(An(o)), c = Nd(h);
                let f = u[c],
                    y = u[h];
                if (i) {
                    const v = c === "y" ? "top" : "left",
                        p = c === "y" ? "bottom" : "right",
                        g = f + m[v],
                        w = f - m[p];
                    f = ic(g, f, w)
                }
                if (s) {
                    const v = h === "y" ? "top" : "left",
                        p = h === "y" ? "bottom" : "right",
                        g = y + m[v],
                        w = y - m[p];
                    y = ic(g, y, w)
                }
                const d = a.fn({ ...t,
                    [c]: f,
                    [h]: y
                });
                return { ...d,
                    data: {
                        x: d.x - n,
                        y: d.y - r,
                        enabled: {
                            [c]: i,
                            [h]: s
                        }
                    }
                }
            }
        }
    },
    w2 = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = Pn(e, t), m = {
                    x: n,
                    y: r
                }, h = ur(o), c = Nd(h);
                let f = m[c],
                    y = m[h];
                const d = Pn(a, t),
                    v = typeof d == "number" ? {
                        mainAxis: d,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...d
                    };
                if (l) {
                    const w = c === "y" ? "height" : "width",
                        C = i.reference[c] - i.floating[w] + v.mainAxis,
                        E = i.reference[c] + i.reference[w] - v.mainAxis;
                    f < C ? f = C : f > E && (f = E)
                }
                if (u) {
                    var p, g;
                    const w = c === "y" ? "width" : "height",
                        C = ["top", "left"].includes(An(o)),
                        E = i.reference[h] - i.floating[w] + (C && ((p = s.offset) == null ? void 0 : p[h]) || 0) + (C ? 0 : v.crossAxis),
                        A = i.reference[h] + i.reference[w] + (C ? 0 : ((g = s.offset) == null ? void 0 : g[h]) || 0) - (C ? v.crossAxis : 0);
                    y < E ? y = E : y > A && (y = A)
                }
                return {
                    [c]: f,
                    [h]: y
                }
            }
        }
    },
    x2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = Pn(e, t), m = await Ui(t, u), h = An(o), c = Vo(o), f = ur(o) === "y", {
                    width: y,
                    height: d
                } = i.floating;
                let v, p;
                h === "top" || h === "bottom" ? (v = h, p = c === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = h, v = c === "end" ? "top" : "bottom");
                const g = d - m.top - m.bottom,
                    w = y - m.left - m.right,
                    C = ar(d - m[v], g),
                    E = ar(y - m[p], w),
                    A = !t.middlewareData.shift;
                let N = C,
                    j = E;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = w), (r = t.middlewareData.shift) != null && r.enabled.y && (N = g), A && !c) {
                    const B = Pt(m.left, 0),
                        G = Pt(m.right, 0),
                        k = Pt(m.top, 0),
                        F = Pt(m.bottom, 0);
                    f ? j = y - 2 * (B !== 0 || G !== 0 ? B + G : Pt(m.left, m.right)) : N = d - 2 * (k !== 0 || F !== 0 ? k + F : Pt(m.top, m.bottom))
                }
                await l({ ...t,
                    availableWidth: j,
                    availableHeight: N
                });
                const I = await s.getDimensions(a.floating);
                return y !== I.width || d !== I.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function qa() {
    return typeof window < "u"
}

function Ko(e) {
    return gv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function jt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function mn(e) {
    var t;
    return (t = (gv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function gv(e) {
    return qa() ? e instanceof Node || e instanceof jt(e).Node : !1
}

function nn(e) {
    return qa() ? e instanceof Element || e instanceof jt(e).Element : !1
}

function pn(e) {
    return qa() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1
}

function yh(e) {
    return !qa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot
}

function rs(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = rn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function b2(e) {
    return ["table", "td", "th"].includes(Ko(e))
}

function Ja(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Rd(e) {
    const t = jd(),
        n = nn(e) ? rn(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function S2(e) {
    let t = cr(e);
    for (; pn(t) && !Fo(t);) {
        if (Rd(t)) return t;
        if (Ja(t)) return null;
        t = cr(t)
    }
    return null
}

function jd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Fo(e) {
    return ["html", "body", "#document"].includes(Ko(e))
}

function rn(e) {
    return jt(e).getComputedStyle(e)
}

function el(e) {
    return nn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function cr(e) {
    if (Ko(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || yh(e) && e.host || mn(e);
    return yh(t) ? t.host : t
}

function vv(e) {
    const t = cr(e);
    return Fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && rs(t) ? t : vv(t)
}

function $i(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = vv(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = jt(o);
    if (i) {
        const a = ac(s);
        return t.concat(s, s.visualViewport || [], rs(o) ? o : [], a && n ? $i(a) : [])
    }
    return t.concat(o, $i(o, [], n))
}

function ac(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function yv(e) {
    const t = rn(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = pn(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = Ca(n) !== i || Ca(r) !== s;
    return a && (n = i, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function Od(e) {
    return nn(e) ? e : e.contextElement
}

function wo(e) {
    const t = Od(e);
    if (!pn(t)) return lr(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = yv(t);
    let s = (i ? Ca(n.width) : n.width) / r,
        a = (i ? Ca(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const _2 = lr(0);

function wv(e) {
    const t = jt(e);
    return !jd() || !t.visualViewport ? _2 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function C2(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== jt(e) ? !1 : t
}

function zr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Od(e);
    let s = lr(1);
    t && (r ? nn(r) && (s = wo(r)) : s = wo(e));
    const a = C2(i, n, r) ? wv(i) : lr(0);
    let l = (o.left + a.x) / s.x,
        u = (o.top + a.y) / s.y,
        m = o.width / s.x,
        h = o.height / s.y;
    if (i) {
        const c = jt(i),
            f = r && nn(r) ? jt(r) : r;
        let y = c,
            d = ac(y);
        for (; d && r && f !== y;) {
            const v = wo(d),
                p = d.getBoundingClientRect(),
                g = rn(d),
                w = p.left + (d.clientLeft + parseFloat(g.paddingLeft)) * v.x,
                C = p.top + (d.clientTop + parseFloat(g.paddingTop)) * v.y;
            l *= v.x, u *= v.y, m *= v.x, h *= v.y, l += w, u += C, y = jt(d), d = ac(y)
        }
    }
    return ka({
        width: m,
        height: h,
        x: l,
        y: u
    })
}

function E2(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = mn(r),
        a = t ? Ja(t.floating) : !1;
    if (r === s || a && i) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = lr(1);
    const m = lr(0),
        h = pn(r);
    if ((h || !h && !i) && ((Ko(r) !== "body" || rs(s)) && (l = el(r)), pn(r))) {
        const c = zr(r);
        u = wo(r), m.x = c.x + r.clientLeft, m.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + m.y
    }
}

function k2(e) {
    return Array.from(e.getClientRects())
}

function lc(e, t) {
    const n = el(e).scrollLeft;
    return t ? t.left + n : zr(mn(e)).left + n
}

function T2(e) {
    const t = mn(e),
        n = el(e),
        r = e.ownerDocument.body,
        o = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + lc(e);
    const a = -n.scrollTop;
    return rn(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: a
    }
}

function N2(e, t) {
    const n = jt(e),
        r = mn(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = jd();
        (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}

function P2(e, t) {
    const n = zr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = pn(e) ? wo(e) : lr(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = o * i.x,
        u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}

function wh(e, t, n) {
    let r;
    if (t === "viewport") r = N2(e, n);
    else if (t === "document") r = T2(mn(e));
    else if (nn(t)) r = P2(t, n);
    else {
        const o = wv(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ka(r)
}

function xv(e, t) {
    const n = cr(e);
    return n === t || !nn(n) || Fo(n) ? !1 : rn(n).position === "fixed" || xv(n, t)
}

function A2(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = $i(e, [], !1).filter(a => nn(a) && Ko(a) !== "body"),
        o = null;
    const i = rn(e).position === "fixed";
    let s = i ? cr(e) : e;
    for (; nn(s) && !Fo(s);) {
        const a = rn(s),
            l = Rd(s);
        !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || rs(s) && !l && xv(e, s)) ? r = r.filter(m => m !== s) : o = a, s = cr(s)
    }
    return t.set(e, r), r
}

function R2(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Ja(t) ? [] : A2(t, this._c) : [].concat(n), r],
        a = s[0],
        l = s.reduce((u, m) => {
            const h = wh(t, m, o);
            return u.top = Pt(h.top, u.top), u.right = ar(h.right, u.right), u.bottom = ar(h.bottom, u.bottom), u.left = Pt(h.left, u.left), u
        }, wh(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function j2(e) {
    const {
        width: t,
        height: n
    } = yv(e);
    return {
        width: t,
        height: n
    }
}

function O2(e, t, n) {
    const r = pn(t),
        o = mn(t),
        i = n === "fixed",
        s = zr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = lr(0);
    if (r || !r && !i)
        if ((Ko(t) !== "body" || rs(o)) && (a = el(t)), r) {
            const f = zr(t, !0, i, t);
            l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop
        } else o && (l.x = lc(o));
    let u = 0,
        m = 0;
    if (o && !r && !i) {
        const f = o.getBoundingClientRect();
        m = f.top + a.scrollTop, u = f.left + a.scrollLeft - lc(o, f)
    }
    const h = s.left + a.scrollLeft - l.x - u,
        c = s.top + a.scrollTop - l.y - m;
    return {
        x: h,
        y: c,
        width: s.width,
        height: s.height
    }
}

function Yl(e) {
    return rn(e).position === "static"
}

function xh(e, t) {
    if (!pn(e) || rn(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return mn(e) === n && (n = n.ownerDocument.body), n
}

function bv(e, t) {
    const n = jt(e);
    if (Ja(e)) return n;
    if (!pn(e)) {
        let o = cr(e);
        for (; o && !Fo(o);) {
            if (nn(o) && !Yl(o)) return o;
            o = cr(o)
        }
        return n
    }
    let r = xh(e, t);
    for (; r && b2(r) && Yl(r);) r = xh(r, t);
    return r && Fo(r) && Yl(r) && !Rd(r) ? n : r || S2(e) || n
}
const I2 = async function(e) {
    const t = this.getOffsetParent || bv,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: O2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function L2(e) {
    return rn(e).direction === "rtl"
}
const M2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: E2,
    getDocumentElement: mn,
    getClippingRect: R2,
    getOffsetParent: bv,
    getElementRects: I2,
    getClientRects: k2,
    getDimensions: j2,
    getScale: wo,
    isElement: nn,
    isRTL: L2
};

function D2(e, t) {
    let n = null,
        r;
    const o = mn(e);

    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), i();
        const {
            left: u,
            top: m,
            width: h,
            height: c
        } = e.getBoundingClientRect();
        if (a || t(), !h || !c) return;
        const f = Ns(m),
            y = Ns(o.clientWidth - (u + h)),
            d = Ns(o.clientHeight - (m + c)),
            v = Ns(u),
            g = {
                rootMargin: -f + "px " + -y + "px " + -d + "px " + -v + "px",
                threshold: Pt(0, ar(1, l)) || 1
            };
        let w = !0;

        function C(E) {
            const A = E[0].intersectionRatio;
            if (A !== l) {
                if (!w) return s();
                A ? s(!1, A) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            w = !1
        }
        try {
            n = new IntersectionObserver(C, { ...g,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, g)
        }
        n.observe(e)
    }
    return s(!0), i
}

function z2(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = Od(e), m = o || i ? [...u ? $i(u) : [], ...$i(t)] : [];
    m.forEach(p => {
        o && p.addEventListener("scroll", n, {
            passive: !0
        }), i && p.addEventListener("resize", n)
    });
    const h = u && a ? D2(u, n) : null;
    let c = -1,
        f = null;
    s && (f = new ResizeObserver(p => {
        let [g] = p;
        g && g.target === u && f && (f.unobserve(t), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
            var w;
            (w = f) == null || w.observe(t)
        })), n()
    }), u && !l && f.observe(u), f.observe(t));
    let y, d = l ? zr(e) : null;
    l && v();

    function v() {
        const p = zr(e);
        d && (p.x !== d.x || p.y !== d.y || p.width !== d.width || p.height !== d.height) && n(), d = p, y = requestAnimationFrame(v)
    }
    return n(), () => {
        var p;
        m.forEach(g => {
            o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n)
        }), h == null || h(), (p = f) == null || p.disconnect(), f = null, l && cancelAnimationFrame(y)
    }
}
const F2 = v2,
    B2 = y2,
    U2 = p2,
    $2 = x2,
    W2 = m2,
    bh = h2,
    H2 = w2,
    V2 = (e, t, n) => {
        const r = new Map,
            o = {
                platform: M2,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return f2(e, t, { ...o,
            platform: i
        })
    };
var Qs = typeof document < "u" ? _.useLayoutEffect : _.useEffect;

function Ta(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Ta(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ta(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Sv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Sh(e, t) {
    const n = Sv(e);
    return Math.round(t * n) / n
}

function Ql(e) {
    const t = _.useRef(e);
    return Qs(() => {
        t.current = e
    }), t
}

function K2(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [m, h] = _.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [c, f] = _.useState(r);
    Ta(c, r) || f(r);
    const [y, d] = _.useState(null), [v, p] = _.useState(null), g = _.useCallback(D => {
        D !== A.current && (A.current = D, d(D))
    }, []), w = _.useCallback(D => {
        D !== N.current && (N.current = D, p(D))
    }, []), C = i || y, E = s || v, A = _.useRef(null), N = _.useRef(null), j = _.useRef(m), I = l != null, B = Ql(l), G = Ql(o), k = Ql(u), F = _.useCallback(() => {
        if (!A.current || !N.current) return;
        const D = {
            placement: t,
            strategy: n,
            middleware: c
        };
        G.current && (D.platform = G.current), V2(A.current, N.current, D).then(z => {
            const Y = { ...z,
                isPositioned: k.current !== !1
            };
            S.current && !Ta(j.current, Y) && (j.current = Y, Wr.flushSync(() => {
                h(Y)
            }))
        })
    }, [c, t, n, G, k]);
    Qs(() => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, h(D => ({ ...D,
            isPositioned: !1
        })))
    }, [u]);
    const S = _.useRef(!1);
    Qs(() => (S.current = !0, () => {
        S.current = !1
    }), []), Qs(() => {
        if (C && (A.current = C), E && (N.current = E), C && E) {
            if (B.current) return B.current(C, E, F);
            F()
        }
    }, [C, E, F, B, I]);
    const U = _.useMemo(() => ({
            reference: A,
            floating: N,
            setReference: g,
            setFloating: w
        }), [g, w]),
        X = _.useMemo(() => ({
            reference: C,
            floating: E
        }), [C, E]),
        H = _.useMemo(() => {
            const D = {
                position: n,
                left: 0,
                top: 0
            };
            if (!X.floating) return D;
            const z = Sh(X.floating, m.x),
                Y = Sh(X.floating, m.y);
            return a ? { ...D,
                transform: "translate(" + z + "px, " + Y + "px)",
                ...Sv(X.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: z,
                top: Y
            }
        }, [n, a, X.floating, m.x, m.y]);
    return _.useMemo(() => ({ ...m,
        update: F,
        refs: U,
        elements: X,
        floatingStyles: H
    }), [m, F, U, X, H])
}
const G2 = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? bh({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? bh({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Y2 = (e, t) => ({ ...F2(e),
        options: [e, t]
    }),
    Q2 = (e, t) => ({ ...B2(e),
        options: [e, t]
    }),
    Z2 = (e, t) => ({ ...H2(e),
        options: [e, t]
    }),
    X2 = (e, t) => ({ ...U2(e),
        options: [e, t]
    }),
    q2 = (e, t) => ({ ...$2(e),
        options: [e, t]
    }),
    J2 = (e, t) => ({ ...W2(e),
        options: [e, t]
    }),
    eS = (e, t) => ({ ...G2(e),
        options: [e, t]
    });
var tS = "Arrow",
    _v = _.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return x.jsx(Pe.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : x.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
_v.displayName = tS;
var nS = _v;

function rS(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = _.createContext(s),
            l = n.length;
        n = [...n, s];

        function u(h) {
            const {
                scope: c,
                children: f,
                ...y
            } = h, d = (c == null ? void 0 : c[e][l]) || a, v = _.useMemo(() => y, Object.values(y));
            return x.jsx(d.Provider, {
                value: v,
                children: f
            })
        }

        function m(h, c) {
            const f = (c == null ? void 0 : c[e][l]) || a,
                y = _.useContext(f);
            if (y) return y;
            if (s !== void 0) return s;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, m]
    }
    const o = () => {
        const i = n.map(s => _.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return _.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, oS(o, ...t)]
}

function oS(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const h = l(i)[`__scope${u}`];
                return { ...a,
                    ...h
                }
            }, {});
            return _.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function iS(e) {
    const [t, n] = _.useState(void 0);
    return ft(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize" in i) {
                    const l = i.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize, a = u.blockSize
                } else s = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Id = "Popper",
    [Cv, tl] = rS(Id),
    [sS, Ev] = Cv(Id),
    kv = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = _.useState(null);
        return x.jsx(sS, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    };
kv.displayName = Id;
var Tv = "PopperAnchor",
    Nv = _.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = Ev(Tv, n), s = _.useRef(null), a = We(t, s);
        return _.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : x.jsx(Pe.div, { ...o,
            ref: a
        })
    });
Nv.displayName = Tv;
var Ld = "PopperContent",
    [aS, lS] = Cv(Ld),
    Pv = _.forwardRef((e, t) => {
        var ee, oe, ue, de, fe, he;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: m = 0,
            sticky: h = "partial",
            hideWhenDetached: c = !1,
            updatePositionStrategy: f = "optimized",
            onPlaced: y,
            ...d
        } = e, v = Ev(Ld, n), [p, g] = _.useState(null), w = We(t, ke => g(ke)), [C, E] = _.useState(null), A = iS(C), N = (A == null ? void 0 : A.width) ? ? 0, j = (A == null ? void 0 : A.height) ? ? 0, I = r + (i !== "center" ? "-" + i : ""), B = typeof m == "number" ? m : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...m
        }, G = Array.isArray(u) ? u : [u], k = G.length > 0, F = {
            padding: B,
            boundary: G.filter(cS),
            altBoundary: k
        }, {
            refs: S,
            floatingStyles: U,
            placement: X,
            isPositioned: H,
            middlewareData: D
        } = K2({
            strategy: "fixed",
            placement: I,
            whileElementsMounted: (...ke) => z2(...ke, {
                animationFrame: f === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [Y2({
                mainAxis: o + j,
                alignmentAxis: s
            }), l && Q2({
                mainAxis: !0,
                crossAxis: !1,
                limiter: h === "partial" ? Z2() : void 0,
                ...F
            }), l && X2({ ...F
            }), q2({ ...F,
                apply: ({
                    elements: ke,
                    rects: b,
                    availableWidth: K,
                    availableHeight: W
                }) => {
                    const {
                        width: P,
                        height: T
                    } = b.reference, M = ke.floating.style;
                    M.setProperty("--radix-popper-available-width", `${K}px`), M.setProperty("--radix-popper-available-height", `${W}px`), M.setProperty("--radix-popper-anchor-width", `${P}px`), M.setProperty("--radix-popper-anchor-height", `${T}px`)
                }
            }), C && eS({
                element: C,
                padding: a
            }), dS({
                arrowWidth: N,
                arrowHeight: j
            }), c && J2({
                strategy: "referenceHidden",
                ...F
            })]
        }), [z, Y] = jv(X), O = It(y);
        ft(() => {
            H && (O == null || O())
        }, [H, O]);
        const L = (ee = D.arrow) == null ? void 0 : ee.x,
            te = (oe = D.arrow) == null ? void 0 : oe.y,
            R = ((ue = D.arrow) == null ? void 0 : ue.centerOffset) !== 0,
            [V, J] = _.useState();
        return ft(() => {
            p && J(window.getComputedStyle(p).zIndex)
        }, [p]), x.jsx("div", {
            ref: S.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...U,
                transform: H ? U.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: V,
                "--radix-popper-transform-origin": [(de = D.transformOrigin) == null ? void 0 : de.x, (fe = D.transformOrigin) == null ? void 0 : fe.y].join(" "),
                ...((he = D.hide) == null ? void 0 : he.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: x.jsx(aS, {
                scope: n,
                placedSide: z,
                onArrowChange: E,
                arrowX: L,
                arrowY: te,
                shouldHideArrow: R,
                children: x.jsx(Pe.div, {
                    "data-side": z,
                    "data-align": Y,
                    ...d,
                    ref: w,
                    style: { ...d.style,
                        animation: H ? void 0 : "none"
                    }
                })
            })
        })
    });
Pv.displayName = Ld;
var Av = "PopperArrow",
    uS = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Rv = _.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = lS(Av, r), s = uS[i.placedSide];
        return x.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: x.jsx(nS, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Rv.displayName = Av;

function cS(e) {
    return e !== null
}
var dS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var v, p, g;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, m] = jv(n), h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[m], c = (((p = o.arrow) == null ? void 0 : p.x) ? ? 0) + a / 2, f = (((g = o.arrow) == null ? void 0 : g.y) ? ? 0) + l / 2;
        let y = "",
            d = "";
        return u === "bottom" ? (y = s ? h : `${c}px`, d = `${-l}px`) : u === "top" ? (y = s ? h : `${c}px`, d = `${r.floating.height+l}px`) : u === "right" ? (y = `${-l}px`, d = s ? h : `${f}px`) : u === "left" && (y = `${r.floating.width+l}px`, d = s ? h : `${f}px`), {
            data: {
                x: y,
                y: d
            }
        }
    }
});

function jv(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var Ov = kv,
    Iv = Nv,
    Lv = Pv,
    Mv = Rv,
    [nl, Ek] = xd("Tooltip", [tl]),
    rl = tl(),
    Dv = "TooltipProvider",
    fS = 700,
    uc = "tooltip.open",
    [hS, Md] = nl(Dv),
    zv = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = fS,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
        } = e, [s, a] = _.useState(!0), l = _.useRef(!1), u = _.useRef(0);
        return _.useEffect(() => {
            const m = u.current;
            return () => window.clearTimeout(m)
        }, []), x.jsx(hS, {
            scope: t,
            isOpenDelayed: s,
            delayDuration: n,
            onOpen: _.useCallback(() => {
                window.clearTimeout(u.current), a(!1)
            }, []),
            onClose: _.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => a(!0), r)
            }, [r]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: _.useCallback(m => {
                l.current = m
            }, []),
            disableHoverableContent: o,
            children: i
        })
    };
zv.displayName = Dv;
var ol = "Tooltip",
    [pS, il] = nl(ol),
    Fv = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
        } = e, l = Md(ol, e.__scopeTooltip), u = rl(t), [m, h] = _.useState(null), c = Xa(), f = _.useRef(0), y = s ? ? l.disableHoverableContent, d = a ? ? l.delayDuration, v = _.useRef(!1), [p = !1, g] = _a({
            prop: r,
            defaultProp: o,
            onChange: N => {
                N ? (l.onOpen(), document.dispatchEvent(new CustomEvent(uc))) : l.onClose(), i == null || i(N)
            }
        }), w = _.useMemo(() => p ? v.current ? "delayed-open" : "instant-open" : "closed", [p]), C = _.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, v.current = !1, g(!0)
        }, [g]), E = _.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, g(!1)
        }, [g]), A = _.useCallback(() => {
            window.clearTimeout(f.current), f.current = window.setTimeout(() => {
                v.current = !0, g(!0), f.current = 0
            }, d)
        }, [d, g]);
        return _.useEffect(() => () => {
            f.current && (window.clearTimeout(f.current), f.current = 0)
        }, []), x.jsx(Ov, { ...u,
            children: x.jsx(pS, {
                scope: t,
                contentId: c,
                open: p,
                stateAttribute: w,
                trigger: m,
                onTriggerChange: h,
                onTriggerEnter: _.useCallback(() => {
                    l.isOpenDelayed ? A() : C()
                }, [l.isOpenDelayed, A, C]),
                onTriggerLeave: _.useCallback(() => {
                    y ? E() : (window.clearTimeout(f.current), f.current = 0)
                }, [E, y]),
                onOpen: C,
                onClose: E,
                disableHoverableContent: y,
                children: n
            })
        })
    };
Fv.displayName = ol;
var cc = "TooltipTrigger",
    Bv = _.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = il(cc, n), i = Md(cc, n), s = rl(n), a = _.useRef(null), l = We(t, a, o.onTriggerChange), u = _.useRef(!1), m = _.useRef(!1), h = _.useCallback(() => u.current = !1, []);
        return _.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), x.jsx(Iv, {
            asChild: !0,
            ...s,
            children: x.jsx(Pe.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: xe(e.onPointerMove, c => {
                    c.pointerType !== "touch" && !m.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), m.current = !0)
                }),
                onPointerLeave: xe(e.onPointerLeave, () => {
                    o.onTriggerLeave(), m.current = !1
                }),
                onPointerDown: xe(e.onPointerDown, () => {
                    u.current = !0, document.addEventListener("pointerup", h, {
                        once: !0
                    })
                }),
                onFocus: xe(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: xe(e.onBlur, o.onClose),
                onClick: xe(e.onClick, o.onClose)
            })
        })
    });
Bv.displayName = cc;
var mS = "TooltipPortal",
    [kk, gS] = nl(mS, {
        forceMount: void 0
    }),
    Bo = "TooltipContent",
    Uv = _.forwardRef((e, t) => {
        const n = gS(Bo, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = il(Bo, e.__scopeTooltip);
        return x.jsx(Sd, {
            present: r || s.open,
            children: s.disableHoverableContent ? x.jsx($v, {
                side: o,
                ...i,
                ref: t
            }) : x.jsx(vS, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    vS = _.forwardRef((e, t) => {
        const n = il(Bo, e.__scopeTooltip),
            r = Md(Bo, e.__scopeTooltip),
            o = _.useRef(null),
            i = We(t, o),
            [s, a] = _.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            m = o.current,
            {
                onPointerInTransitChange: h
            } = r,
            c = _.useCallback(() => {
                a(null), h(!1)
            }, [h]),
            f = _.useCallback((y, d) => {
                const v = y.currentTarget,
                    p = {
                        x: y.clientX,
                        y: y.clientY
                    },
                    g = bS(p, v.getBoundingClientRect()),
                    w = SS(p, g),
                    C = _S(d.getBoundingClientRect()),
                    E = ES([...w, ...C]);
                a(E), h(!0)
            }, [h]);
        return _.useEffect(() => () => c(), [c]), _.useEffect(() => {
            if (l && m) {
                const y = v => f(v, m),
                    d = v => f(v, l);
                return l.addEventListener("pointerleave", y), m.addEventListener("pointerleave", d), () => {
                    l.removeEventListener("pointerleave", y), m.removeEventListener("pointerleave", d)
                }
            }
        }, [l, m, f, c]), _.useEffect(() => {
            if (s) {
                const y = d => {
                    const v = d.target,
                        p = {
                            x: d.clientX,
                            y: d.clientY
                        },
                        g = (l == null ? void 0 : l.contains(v)) || (m == null ? void 0 : m.contains(v)),
                        w = !CS(p, s);
                    g ? c() : w && (c(), u())
                };
                return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y)
            }
        }, [l, m, s, u, c]), x.jsx($v, { ...e,
            ref: i
        })
    }),
    [yS, wS] = nl(ol, {
        isInside: !1
    }),
    $v = _.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
        } = e, l = il(Bo, n), u = rl(n), {
            onClose: m
        } = l;
        return _.useEffect(() => (document.addEventListener(uc, m), () => document.removeEventListener(uc, m)), [m]), _.useEffect(() => {
            if (l.trigger) {
                const h = c => {
                    const f = c.target;
                    f != null && f.contains(l.trigger) && m()
                };
                return window.addEventListener("scroll", h, {
                    capture: !0
                }), () => window.removeEventListener("scroll", h, {
                    capture: !0
                })
            }
        }, [l.trigger, m]), x.jsx(Ya, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: h => h.preventDefault(),
            onDismiss: m,
            children: x.jsxs(Lv, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [x.jsx(Tg, {
                    children: r
                }), x.jsx(yS, {
                    scope: n,
                    isInside: !0,
                    children: x.jsx(hx, {
                        id: l.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Uv.displayName = Bo;
var Wv = "TooltipArrow",
    xS = _.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = rl(n);
        return wS(Wv, n).isInside ? null : x.jsx(Mv, { ...o,
            ...r,
            ref: t
        })
    });
xS.displayName = Wv;

function bS(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function SS(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function _S(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function CS(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i].x,
            l = t[i].y,
            u = t[s].x,
            m = t[s].y;
        l > r != m > r && n < (u - a) * (r - l) / (m - l) + a && (o = !o)
    }
    return o
}

function ES(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), kS(t)
}

function kS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var TS = zv,
    NS = Fv,
    PS = Bv,
    Hv = Uv;
const wr = TS,
    Gr = NS,
    Yr = PS,
    xr = _.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => x.jsx(Hv, {
        ref: r,
        sideOffset: t,
        className: rt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
xr.displayName = Hv.displayName;
var sl = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    al = typeof window > "u" || "Deno" in globalThis;

function Yt() {}

function AS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function RS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function jS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function _h(e, t) {
    return typeof e == "function" ? e(t) : e
}

function OS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ch(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: a
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Dd(s, t.options)) return !1
        } else if (!Hi(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}

function Eh(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Wi(t.options.mutationKey) !== Wi(i)) return !1
        } else if (!Hi(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function Dd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Wi)(e)
}

function Wi(e) {
    return JSON.stringify(e, (t, n) => dc(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Hi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Hi(e[n], t[n])) : !1
}

function Vv(e, t) {
    if (e === t) return e;
    const n = kh(e) && kh(t);
    if (n || dc(e) && dc(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            a = n ? [] : {};
        let l = 0;
        for (let u = 0; u < s; u++) {
            const m = n ? u : i[u];
            (!n && r.includes(m) || n) && e[m] === void 0 && t[m] === void 0 ? (a[m] = void 0, l++) : (a[m] = Vv(e[m], t[m]), a[m] === e[m] && e[m] !== void 0 && l++)
        }
        return o === s && l === o ? e : a
    }
    return t
}

function kh(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function dc(e) {
    if (!Th(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Th(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Th(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function IS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function LS(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Vv(e, t) : t
}

function MS(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function DS(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var zd = Symbol();

function Kv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === zd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Er, Wn, So, np, zS = (np = class extends sl {
        constructor() {
            super();
            _e(this, Er);
            _e(this, Wn);
            _e(this, So);
            ve(this, So, t => {
                if (!al && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            Z(this, Wn) || this.setEventListener(Z(this, So))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = Z(this, Wn)) == null || t.call(this), ve(this, Wn, void 0))
        }
        setEventListener(t) {
            var n;
            ve(this, So, t), (n = Z(this, Wn)) == null || n.call(this), ve(this, Wn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            Z(this, Er) !== t && (ve(this, Er, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof Z(this, Er) == "boolean" ? Z(this, Er) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Er = new WeakMap, Wn = new WeakMap, So = new WeakMap, np),
    Gv = new zS,
    _o, Hn, Co, rp, FS = (rp = class extends sl {
        constructor() {
            super();
            _e(this, _o, !0);
            _e(this, Hn);
            _e(this, Co);
            ve(this, Co, t => {
                if (!al && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            Z(this, Hn) || this.setEventListener(Z(this, Co))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = Z(this, Hn)) == null || t.call(this), ve(this, Hn, void 0))
        }
        setEventListener(t) {
            var n;
            ve(this, Co, t), (n = Z(this, Hn)) == null || n.call(this), ve(this, Hn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            Z(this, _o) !== t && (ve(this, _o, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return Z(this, _o)
        }
    }, _o = new WeakMap, Hn = new WeakMap, Co = new WeakMap, rp),
    Na = new FS;

function BS() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function US(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Yv(e) {
    return (e ? ? "online") === "online" ? Na.isOnline() : !0
}
var Qv = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Zl(e) {
    return e instanceof Qv
}

function Zv(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = BS(),
        s = d => {
            var v;
            r || (c(new Qv(d)), (v = e.abort) == null || v.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => Gv.isFocused() && (e.networkMode === "always" || Na.isOnline()) && e.canRun(),
        m = () => Yv(e.networkMode) && e.canRun(),
        h = d => {
            var v;
            r || (r = !0, (v = e.onSuccess) == null || v.call(e, d), o == null || o(), i.resolve(d))
        },
        c = d => {
            var v;
            r || (r = !0, (v = e.onError) == null || v.call(e, d), o == null || o(), i.reject(d))
        },
        f = () => new Promise(d => {
            var v;
            o = p => {
                (r || u()) && d(p)
            }, (v = e.onPause) == null || v.call(e)
        }).then(() => {
            var d;
            o = void 0, r || (d = e.onContinue) == null || d.call(e)
        }),
        y = () => {
            if (r) return;
            let d;
            const v = n === 0 ? e.initialPromise : void 0;
            try {
                d = v ? ? e.fn()
            } catch (p) {
                d = Promise.reject(p)
            }
            Promise.resolve(d).then(h).catch(p => {
                var A;
                if (r) return;
                const g = e.retry ? ? (al ? 0 : 3),
                    w = e.retryDelay ? ? US,
                    C = typeof w == "function" ? w(n, p) : w,
                    E = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, p);
                if (t || !E) {
                    c(p);
                    return
                }
                n++, (A = e.onFail) == null || A.call(e, n, p), IS(C).then(() => u() ? void 0 : f()).then(() => {
                    t ? c(p) : y()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: a,
        continueRetry: l,
        canStart: m,
        start: () => (m() ? y() : f().then(y), i)
    }
}

function $S() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        o = a => setTimeout(a, 0);
    const i = a => {
            t ? e.push(a) : o(() => {
                n(a)
            })
        },
        s = () => {
            const a = e;
            e = [], a.length && o(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || s()
            }
            return l
        },
        batchCalls: a => (...l) => {
            i(() => {
                a(...l)
            })
        },
        schedule: i,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            o = a
        }
    }
}
var mt = $S(),
    kr, op, Xv = (op = class {
        constructor() {
            _e(this, kr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), RS(this.gcTime) && ve(this, kr, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (al ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            Z(this, kr) && (clearTimeout(Z(this, kr)), ve(this, kr, void 0))
        }
    }, kr = new WeakMap, op),
    Eo, ko, zt, lt, Qi, Tr, Qt, wn, ip, WS = (ip = class extends Xv {
        constructor(t) {
            super();
            _e(this, Qt);
            _e(this, Eo);
            _e(this, ko);
            _e(this, zt);
            _e(this, lt);
            _e(this, Qi);
            _e(this, Tr);
            ve(this, Tr, !1), ve(this, Qi, t.defaultOptions), this.setOptions(t.options), this.observers = [], ve(this, zt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ve(this, Eo, VS(this.options)), this.state = t.state ? ? Z(this, Eo), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = Z(this, lt)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...Z(this, Qi),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && Z(this, zt).remove(this)
        }
        setData(t, n) {
            const r = LS(this.state.data, t, this.options);
            return it(this, Qt, wn).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            it(this, Qt, wn).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = Z(this, lt)) == null ? void 0 : r.promise;
            return (o = Z(this, lt)) == null || o.cancel(t), n ? n.then(Yt).catch(Yt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(Z(this, Eo))
        }
        isActive() {
            return this.observers.some(t => OS(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === zd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !jS(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = Z(this, lt)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = Z(this, lt)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), Z(this, zt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (Z(this, lt) && (Z(this, Tr) ? Z(this, lt).cancel({
                revert: !0
            }) : Z(this, lt).cancelRetry()), this.scheduleGc()), Z(this, zt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || it(this, Qt, wn).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var l, u, m;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (Z(this, lt)) return Z(this, lt).continueRetry(), Z(this, lt).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const h = this.observers.find(c => c.options.queryFn);
                h && this.setOptions(h.options)
            }
            const r = new AbortController,
                o = h => {
                    Object.defineProperty(h, "signal", {
                        enumerable: !0,
                        get: () => (ve(this, Tr, !0), r.signal)
                    })
                },
                i = () => {
                    const h = Kv(this.options, n),
                        c = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(c), ve(this, Tr, !1), this.options.persister ? this.options.persister(h, c, this) : h(c)
                },
                s = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: i
                };
            o(s), (l = this.options.behavior) == null || l.onFetch(s, this), ve(this, ko, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && it(this, Qt, wn).call(this, {
                type: "fetch",
                meta: (m = s.fetchOptions) == null ? void 0 : m.meta
            });
            const a = h => {
                var c, f, y, d;
                Zl(h) && h.silent || it(this, Qt, wn).call(this, {
                    type: "error",
                    error: h
                }), Zl(h) || ((f = (c = Z(this, zt).config).onError) == null || f.call(c, h, this), (d = (y = Z(this, zt).config).onSettled) == null || d.call(y, this.state.data, h, this)), this.scheduleGc()
            };
            return ve(this, lt, Zv({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: h => {
                    var c, f, y, d;
                    if (h === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(h)
                    } catch (v) {
                        a(v);
                        return
                    }(f = (c = Z(this, zt).config).onSuccess) == null || f.call(c, h, this), (d = (y = Z(this, zt).config).onSettled) == null || d.call(y, h, this.state.error, this), this.scheduleGc()
                },
                onError: a,
                onFail: (h, c) => {
                    it(this, Qt, wn).call(this, {
                        type: "failed",
                        failureCount: h,
                        error: c
                    })
                },
                onPause: () => {
                    it(this, Qt, wn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    it(this, Qt, wn).call(this, {
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            })), Z(this, lt).start()
        }
    }, Eo = new WeakMap, ko = new WeakMap, zt = new WeakMap, lt = new WeakMap, Qi = new WeakMap, Tr = new WeakMap, Qt = new WeakSet, wn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...HS(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Zl(o) && o.revert && Z(this, ko) ? { ...Z(this, ko),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), mt.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), Z(this, zt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, ip);

function HS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function VS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var an, sp, KS = (sp = class extends sl {
        constructor(t = {}) {
            super();
            _e(this, an);
            this.config = t, ve(this, an, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ? ? Dd(o, n);
            let s = this.get(i);
            return s || (s = new WS({
                cache: this,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            Z(this, an).has(t.queryHash) || (Z(this, an).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = Z(this, an).get(t.queryHash);
            n && (t.destroy(), n === t && Z(this, an).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            mt.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return Z(this, an).get(t)
        }
        getAll() {
            return [...Z(this, an).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Ch(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Ch(t, r)) : n
        }
        notify(t) {
            mt.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            mt.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            mt.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, an = new WeakMap, sp),
    ln, ht, Nr, un, Dn, ap, GS = (ap = class extends Xv {
        constructor(t) {
            super();
            _e(this, un);
            _e(this, ln);
            _e(this, ht);
            _e(this, Nr);
            this.mutationId = t.mutationId, ve(this, ht, t.mutationCache), ve(this, ln, []), this.state = t.state || YS(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            Z(this, ln).includes(t) || (Z(this, ln).push(t), this.clearGcTimeout(), Z(this, ht).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            ve(this, ln, Z(this, ln).filter(n => n !== t)), this.scheduleGc(), Z(this, ht).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            Z(this, ln).length || (this.state.status === "pending" ? this.scheduleGc() : Z(this, ht).remove(this))
        }
        continue () {
            var t;
            return ((t = Z(this, Nr)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, i, s, a, l, u, m, h, c, f, y, d, v, p, g, w, C, E, A, N;
            ve(this, Nr, Zv({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (j, I) => {
                    it(this, un, Dn).call(this, {
                        type: "failed",
                        failureCount: j,
                        error: I
                    })
                },
                onPause: () => {
                    it(this, un, Dn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    it(this, un, Dn).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => Z(this, ht).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !Z(this, Nr).canStart();
            try {
                if (!n) {
                    it(this, un, Dn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((i = (o = Z(this, ht).config).onMutate) == null ? void 0 : i.call(o, t, this));
                    const I = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
                    I !== this.state.context && it(this, un, Dn).call(this, {
                        type: "pending",
                        context: I,
                        variables: t,
                        isPaused: r
                    })
                }
                const j = await Z(this, Nr).start();
                return await ((u = (l = Z(this, ht).config).onSuccess) == null ? void 0 : u.call(l, j, t, this.state.context, this)), await ((h = (m = this.options).onSuccess) == null ? void 0 : h.call(m, j, t, this.state.context)), await ((f = (c = Z(this, ht).config).onSettled) == null ? void 0 : f.call(c, j, null, this.state.variables, this.state.context, this)), await ((d = (y = this.options).onSettled) == null ? void 0 : d.call(y, j, null, t, this.state.context)), it(this, un, Dn).call(this, {
                    type: "success",
                    data: j
                }), j
            } catch (j) {
                try {
                    throw await ((p = (v = Z(this, ht).config).onError) == null ? void 0 : p.call(v, j, t, this.state.context, this)), await ((w = (g = this.options).onError) == null ? void 0 : w.call(g, j, t, this.state.context)), await ((E = (C = Z(this, ht).config).onSettled) == null ? void 0 : E.call(C, void 0, j, this.state.variables, this.state.context, this)), await ((N = (A = this.options).onSettled) == null ? void 0 : N.call(A, void 0, j, t, this.state.context)), j
                } finally {
                    it(this, un, Dn).call(this, {
                        type: "error",
                        error: j
                    })
                }
            } finally {
                Z(this, ht).runNext(this)
            }
        }
    }, ln = new WeakMap, ht = new WeakMap, Nr = new WeakMap, un = new WeakSet, Dn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), mt.batch(() => {
            Z(this, ln).forEach(r => {
                r.onMutationUpdate(t)
            }), Z(this, ht).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, ap);

function YS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var kt, Zi, lp, QS = (lp = class extends sl {
    constructor(t = {}) {
        super();
        _e(this, kt);
        _e(this, Zi);
        this.config = t, ve(this, kt, new Map), ve(this, Zi, Date.now())
    }
    build(t, n, r) {
        const o = new GS({
            mutationCache: this,
            mutationId: ++ss(this, Zi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        const n = Ps(t),
            r = Z(this, kt).get(n) ? ? [];
        r.push(t), Z(this, kt).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ps(t);
        if (Z(this, kt).has(n)) {
            const o = (r = Z(this, kt).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? Z(this, kt).delete(n) : Z(this, kt).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = Z(this, kt).get(Ps(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = Z(this, kt).get(Ps(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        mt.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...Z(this, kt).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Eh(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Eh(t, n))
    }
    notify(t) {
        mt.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return mt.batch(() => Promise.all(t.map(n => n.continue().catch(Yt))))
    }
}, kt = new WeakMap, Zi = new WeakMap, lp);

function Ps(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function Nh(e) {
    return {
        onFetch: (t, n) => {
            var m, h, c, f, y;
            const r = t.options,
                o = (c = (h = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : c.direction,
                i = ((f = t.state.data) == null ? void 0 : f.pages) || [],
                s = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let d = !1;
                const v = w => {
                        Object.defineProperty(w, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? d = !0 : t.signal.addEventListener("abort", () => {
                                d = !0
                            }), t.signal)
                        })
                    },
                    p = Kv(t.options, t.fetchOptions),
                    g = async (w, C, E) => {
                        if (d) return Promise.reject();
                        if (C == null && w.pages.length) return Promise.resolve(w);
                        const A = {
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        v(A);
                        const N = await p(A),
                            {
                                maxPages: j
                            } = t.options,
                            I = E ? DS : MS;
                        return {
                            pages: I(w.pages, N, j),
                            pageParams: I(w.pageParams, C, j)
                        }
                    };
                if (o && i.length) {
                    const w = o === "backward",
                        C = w ? ZS : Ph,
                        E = {
                            pages: i,
                            pageParams: s
                        },
                        A = C(r, E);
                    a = await g(E, A, w)
                } else {
                    const w = e ? ? i.length;
                    do {
                        const C = l === 0 ? s[0] ? ? r.initialPageParam : Ph(r, a);
                        if (l > 0 && C == null) break;
                        a = await g(a, C), l++
                    } while (l < w)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var d, v;
                return (v = (d = t.options).persister) == null ? void 0 : v.call(d, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Ph(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function ZS(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ue, Vn, Kn, To, No, Gn, Po, Ao, up, XS = (up = class {
        constructor(e = {}) {
            _e(this, Ue);
            _e(this, Vn);
            _e(this, Kn);
            _e(this, To);
            _e(this, No);
            _e(this, Gn);
            _e(this, Po);
            _e(this, Ao);
            ve(this, Ue, e.queryCache || new KS), ve(this, Vn, e.mutationCache || new QS), ve(this, Kn, e.defaultOptions || {}), ve(this, To, new Map), ve(this, No, new Map), ve(this, Gn, 0)
        }
        mount() {
            ss(this, Gn)._++, Z(this, Gn) === 1 && (ve(this, Po, Gv.subscribe(async e => {
                e && (await this.resumePausedMutations(), Z(this, Ue).onFocus())
            })), ve(this, Ao, Na.subscribe(async e => {
                e && (await this.resumePausedMutations(), Z(this, Ue).onOnline())
            })))
        }
        unmount() {
            var e, t;
            ss(this, Gn)._--, Z(this, Gn) === 0 && ((e = Z(this, Po)) == null || e.call(this), ve(this, Po, void 0), (t = Z(this, Ao)) == null || t.call(this), ve(this, Ao, void 0))
        }
        isFetching(e) {
            return Z(this, Ue).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return Z(this, Vn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = Z(this, Ue).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = Z(this, Ue).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(_h(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return Z(this, Ue).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = Z(this, Ue).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = AS(t, i);
            if (s !== void 0) return Z(this, Ue).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return mt.batch(() => Z(this, Ue).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = Z(this, Ue).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = Z(this, Ue);
            mt.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = Z(this, Ue),
                r = {
                    type: "active",
                    ...e
                };
            return mt.batch(() => (n.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = mt.batch(() => Z(this, Ue).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(Yt).catch(Yt)
        }
        invalidateQueries(e = {}, t = {}) {
            return mt.batch(() => {
                if (Z(this, Ue).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = mt.batch(() => Z(this, Ue).findAll(e).filter(o => !o.isDisabled()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(Yt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(Yt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = Z(this, Ue).build(this, t);
            return n.isStaleByTime(_h(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Yt).catch(Yt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Nh(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Yt).catch(Yt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Nh(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Na.isOnline() ? Z(this, Vn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return Z(this, Ue)
        }
        getMutationCache() {
            return Z(this, Vn)
        }
        getDefaultOptions() {
            return Z(this, Kn)
        }
        setDefaultOptions(e) {
            ve(this, Kn, e)
        }
        setQueryDefaults(e, t) {
            Z(this, To).set(Wi(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...Z(this, To).values()];
            let n = {};
            return t.forEach(r => {
                Hi(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            Z(this, No).set(Wi(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...Z(this, No).values()];
            let n = {};
            return t.forEach(r => {
                Hi(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...Z(this, Kn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Dd(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === zd && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...Z(this, Kn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            Z(this, Ue).clear(), Z(this, Vn).clear()
        }
    }, Ue = new WeakMap, Vn = new WeakMap, Kn = new WeakMap, To = new WeakMap, No = new WeakMap, Gn = new WeakMap, Po = new WeakMap, Ao = new WeakMap, up),
    qS = _.createContext(void 0),
    JS = ({
        client: e,
        children: t
    }) => (_.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), x.jsx(qS.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vi() {
    return Vi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Vi.apply(this, arguments)
}
var Zn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Zn || (Zn = {}));
const Ah = "popstate";

function e_(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: a
        } = r.location;
        return fc("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : Jv(o)
    }
    return n_(t, n, null, e)
}

function Ze(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function qv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function t_() {
    return Math.random().toString(36).substr(2, 8)
}

function Rh(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function fc(e, t, n, r) {
    return n === void 0 && (n = null), Vi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Go(t) : t, {
        state: n,
        key: t && t.key || r || t_()
    })
}

function Jv(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Go(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function n_(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, a = Zn.Pop, l = null, u = m();
    u == null && (u = 0, s.replaceState(Vi({}, s.state, {
        idx: u
    }), ""));

    function m() {
        return (s.state || {
            idx: null
        }).idx
    }

    function h() {
        a = Zn.Pop;
        let v = m(),
            p = v == null ? null : v - u;
        u = v, l && l({
            action: a,
            location: d.location,
            delta: p
        })
    }

    function c(v, p) {
        a = Zn.Push;
        let g = fc(d.location, v, p);
        u = m() + 1;
        let w = Rh(g, u),
            C = d.createHref(g);
        try {
            s.pushState(w, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            o.location.assign(C)
        }
        i && l && l({
            action: a,
            location: d.location,
            delta: 1
        })
    }

    function f(v, p) {
        a = Zn.Replace;
        let g = fc(d.location, v, p);
        u = m();
        let w = Rh(g, u),
            C = d.createHref(g);
        s.replaceState(w, "", C), i && l && l({
            action: a,
            location: d.location,
            delta: 0
        })
    }

    function y(v) {
        let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
            g = typeof v == "string" ? v : Jv(v);
        return g = g.replace(/ $/, "%20"), Ze(p, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, p)
    }
    let d = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(v) {
            if (l) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Ah, h), l = v, () => {
                o.removeEventListener(Ah, h), l = null
            }
        },
        createHref(v) {
            return t(o, v)
        },
        createURL: y,
        encodeLocation(v) {
            let p = y(v);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: c,
        replace: f,
        go(v) {
            return s.go(v)
        }
    };
    return d
}
var jh;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(jh || (jh = {}));

function r_(e, t, n) {
    return n === void 0 && (n = "/"), o_(e, t, n, !1)
}

function o_(e, t, n, r) {
    let o = typeof t == "string" ? Go(t) : t,
        i = n0(o.pathname || "/", n);
    if (i == null) return null;
    let s = e0(e);
    i_(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = g_(i);
        a = p_(s[l], u, r)
    }
    return a
}

function e0(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (Ze(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Rr([r, l.relativePath]),
            m = n.concat(l);
        i.children && i.children.length > 0 && (Ze(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), e0(i.children, t, m, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: f_(u, i.index),
            routesMeta: m
        })
    };
    return e.forEach((i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
        else
            for (let l of t0(i.path)) o(i, s, l)
    }), t
}

function t0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = t0(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))), o && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function i_(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : h_(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const s_ = /^:[\w-]+$/,
    a_ = 3,
    l_ = 2,
    u_ = 1,
    c_ = 10,
    d_ = -2,
    Oh = e => e === "*";

function f_(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Oh) && (r += d_), t && (r += l_), n.filter(o => !Oh(o)).reduce((o, i) => o + (s_.test(i) ? a_ : i === "" ? u_ : c_), r)
}

function h_(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function p_(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            m = i === "/" ? t : t.slice(i.length) || "/",
            h = Ih({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, m),
            c = l.route;
        if (!h && u && n && !r[r.length - 1].route.index && (h = Ih({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, m)), !h) return null;
        Object.assign(o, h.params), s.push({
            params: o,
            pathname: Rr([i, h.pathname]),
            pathnameBase: S_(Rr([i, h.pathnameBase])),
            route: c
        }), h.pathnameBase !== "/" && (i = Rr([i, h.pathnameBase]))
    }
    return s
}

function Ih(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = m_(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, m, h) => {
            let {
                paramName: c,
                isOptional: f
            } = m;
            if (c === "*") {
                let d = a[h] || "";
                s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[h];
            return f && !y ? u[c] = void 0 : u[c] = (y || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function m_(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), qv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function g_(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return qv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function n0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function v_(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? Go(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : y_(n, t) : t,
        search: __(r),
        hash: C_(o)
    }
}

function y_(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function Xl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function w_(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function x_(e, t) {
    let n = w_(e);
    return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function b_(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Go(e) : (o = Vi({}, e), Ze(!o.pathname || !o.pathname.includes("?"), Xl("?", "pathname", "search", o)), Ze(!o.pathname || !o.pathname.includes("#"), Xl("#", "pathname", "hash", o)), Ze(!o.search || !o.search.includes("#"), Xl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a;
    if (s == null) a = n;
    else {
        let h = t.length - 1;
        if (!r && s.startsWith("..")) {
            let c = s.split("/");
            for (; c[0] === "..";) c.shift(), h -= 1;
            o.pathname = c.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let l = v_(o, a),
        u = s && s !== "/" && s.endsWith("/"),
        m = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || m) && (l.pathname += "/"), l
}
const Rr = e => e.join("/").replace(/\/\/+/g, "/"),
    S_ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    __ = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    C_ = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function E_(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const r0 = ["post", "put", "patch", "delete"];
new Set(r0);
const k_ = ["get", ...r0];
new Set(k_);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ki() {
    return Ki = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ki.apply(this, arguments)
}
const Fd = _.createContext(null),
    T_ = _.createContext(null),
    ll = _.createContext(null),
    ul = _.createContext(null),
    Yo = _.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    o0 = _.createContext(null);

function cl() {
    return _.useContext(ul) != null
}

function dl() {
    return cl() || Ze(!1), _.useContext(ul).location
}

function i0(e) {
    _.useContext(ll).static || _.useLayoutEffect(e)
}

function Bd() {
    let {
        isDataRoute: e
    } = _.useContext(Yo);
    return e ? B_() : N_()
}

function N_() {
    cl() || Ze(!1);
    let e = _.useContext(Fd),
        {
            basename: t,
            future: n,
            navigator: r
        } = _.useContext(ll),
        {
            matches: o
        } = _.useContext(Yo),
        {
            pathname: i
        } = dl(),
        s = JSON.stringify(x_(o, n.v7_relativeSplatPath)),
        a = _.useRef(!1);
    return i0(() => {
        a.current = !0
    }), _.useCallback(function(u, m) {
        if (m === void 0 && (m = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let h = b_(u, JSON.parse(s), i, m.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : Rr([t, h.pathname])), (m.replace ? r.replace : r.push)(h, m.state, m)
    }, [t, r, s, i, e])
}

function P_(e, t) {
    return A_(e, t)
}

function A_(e, t, n, r) {
    cl() || Ze(!1);
    let {
        navigator: o
    } = _.useContext(ll), {
        matches: i
    } = _.useContext(Yo), s = i[i.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = dl(),
        m;
    if (t) {
        var h;
        let v = typeof t == "string" ? Go(t) : t;
        l === "/" || (h = v.pathname) != null && h.startsWith(l) || Ze(!1), m = v
    } else m = u;
    let c = m.pathname || "/",
        f = c;
    if (l !== "/") {
        let v = l.replace(/^\//, "").split("/");
        f = "/" + c.replace(/^\//, "").split("/").slice(v.length).join("/")
    }
    let y = r_(e, {
            pathname: f
        }),
        d = L_(y && y.map(v => Object.assign({}, v, {
            params: Object.assign({}, a, v.params),
            pathname: Rr([l, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase: v.pathnameBase === "/" ? l : Rr([l, o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
        })), i, n, r);
    return t && d ? _.createElement(ul.Provider, {
        value: {
            location: Ki({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, m),
            navigationType: Zn.Pop
        }
    }, d) : d
}

function R_() {
    let e = F_(),
        t = E_(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return _.createElement(_.Fragment, null, _.createElement("h2", null, "Unexpected Application Error!"), _.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? _.createElement("pre", {
        style: o
    }, n) : null, null)
}
const j_ = _.createElement(R_, null);
class O_ extends _.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? _.createElement(Yo.Provider, {
            value: this.props.routeContext
        }, _.createElement(o0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function I_(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = _.useContext(Fd);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), _.createElement(Yo.Provider, {
        value: t
    }, r)
}

function L_(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let m = s.findIndex(h => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        m >= 0 || Ze(!1), s = s.slice(0, Math.min(s.length, m + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let m = 0; m < s.length; m++) {
            let h = s[m];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = m), h.route.id) {
                let {
                    loaderData: c,
                    errors: f
                } = n, y = h.route.loader && c[h.route.id] === void 0 && (!f || f[h.route.id] === void 0);
                if (h.route.lazy || y) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((m, h, c) => {
        let f, y = !1,
            d = null,
            v = null;
        n && (f = a && h.route.id ? a[h.route.id] : void 0, d = h.route.errorElement || j_, l && (u < 0 && c === 0 ? (y = !0, v = null) : u === c && (y = !0, v = h.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, c + 1)),
            g = () => {
                let w;
                return f ? w = d : y ? w = v : h.route.Component ? w = _.createElement(h.route.Component, null) : h.route.element ? w = h.route.element : w = m, _.createElement(I_, {
                    match: h,
                    routeContext: {
                        outlet: m,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: w
                })
            };
        return n && (h.route.ErrorBoundary || h.route.errorElement || c === 0) ? _.createElement(O_, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: f,
            children: g(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : g()
    }, null)
}
var s0 = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(s0 || {}),
    Pa = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Pa || {});

function M_(e) {
    let t = _.useContext(Fd);
    return t || Ze(!1), t
}

function D_(e) {
    let t = _.useContext(T_);
    return t || Ze(!1), t
}

function z_(e) {
    let t = _.useContext(Yo);
    return t || Ze(!1), t
}

function a0(e) {
    let t = z_(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Ze(!1), n.route.id
}

function F_() {
    var e;
    let t = _.useContext(o0),
        n = D_(Pa.UseRouteError),
        r = a0(Pa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function B_() {
    let {
        router: e
    } = M_(s0.UseNavigateStable), t = a0(Pa.UseNavigateStable), n = _.useRef(!1);
    return i0(() => {
        n.current = !0
    }), _.useCallback(function(o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ki({
            fromRouteId: t
        }, i)))
    }, [e, t])
}

function fi(e) {
    Ze(!1)
}

function U_(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Zn.Pop,
        navigator: i,
        static: s = !1,
        future: a
    } = e;
    cl() && Ze(!1);
    let l = t.replace(/^\/*/, "/"),
        u = _.useMemo(() => ({
            basename: l,
            navigator: i,
            static: s,
            future: Ki({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, i, s]);
    typeof r == "string" && (r = Go(r));
    let {
        pathname: m = "/",
        search: h = "",
        hash: c = "",
        state: f = null,
        key: y = "default"
    } = r, d = _.useMemo(() => {
        let v = n0(m, l);
        return v == null ? null : {
            location: {
                pathname: v,
                search: h,
                hash: c,
                state: f,
                key: y
            },
            navigationType: o
        }
    }, [l, m, h, c, f, y, o]);
    return d == null ? null : _.createElement(ll.Provider, {
        value: u
    }, _.createElement(ul.Provider, {
        children: n,
        value: d
    }))
}

function $_(e) {
    let {
        children: t,
        location: n
    } = e;
    return P_(hc(t), n)
}
new Promise(() => {});

function hc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return _.Children.forEach(e, (r, o) => {
        if (!_.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === _.Fragment) {
            n.push.apply(n, hc(r.props.children, i));
            return
        }
        r.type !== fi && Ze(!1), !r.props.index || !r.props.children || Ze(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = hc(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const W_ = "6";
try {
    window.__reactRouterVersion = W_
} catch {}
const H_ = "startTransition",
    Lh = xp[H_];

function V_(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = _.useRef();
    i.current == null && (i.current = e_({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [a, l] = _.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        m = _.useCallback(h => {
            u && Lh ? Lh(() => l(h)) : l(h)
        }, [l, u]);
    return _.useLayoutEffect(() => s.listen(m), [s, m]), _.createElement(U_, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Mh;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Mh || (Mh = {}));
var Dh;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Dh || (Dh = {}));
const l0 = _.createContext(void 0);

function K_({
    children: e,
    defaultTheme: t = "system",
    storageKey: n = "vite-ui-theme",
    ...r
}) {
    const [o, i] = _.useState(() => localStorage.getItem(n) || t);
    _.useEffect(() => {
        const a = window.document.documentElement;
        if (a.classList.remove("light", "dark"), o === "system") {
            const l = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            a.classList.add(l);
            return
        }
        a.classList.add(o)
    }, [o]);
    const s = {
        theme: o,
        setTheme: a => {
            localStorage.setItem(n, a), i(a)
        }
    };
    return x.jsx(l0.Provider, { ...r,
        value: s,
        children: e
    })
}
const G_ = () => {
    const e = _.useContext(l0);
    if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return e
};
var u0 = {
        exports: {}
    },
    Y_ = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Q_ = Y_,
    Z_ = Q_;

function c0() {}

function d0() {}
d0.resetWarningCache = c0;
var X_ = function() {
    function e(r, o, i, s, a, l) {
        if (l !== Z_) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: d0,
        resetWarningCache: c0
    };
    return n.PropTypes = n, n
};
u0.exports = X_();
var q_ = u0.exports;
const Le = Br(q_);

function J_(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
}
var f0 = _,
    eC = J_(f0);

function zh(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function tC(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var nC = !!(typeof window < "u" && window.document && window.document.createElement);

function rC(e, t, n) {
    if (typeof e != "function") throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function") throw new Error("Expected mapStateOnServer to either be undefined or a function.");

    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(i) {
        if (typeof i != "function") throw new Error("Expected WrappedComponent to be a React component.");
        var s = [],
            a;

        function l() {
            a = e(s.map(function(m) {
                return m.props
            })), u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function(m) {
            tC(h, m);

            function h() {
                return m.apply(this, arguments) || this
            }
            h.peek = function() {
                return a
            }, h.rewind = function() {
                if (h.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var y = a;
                return a = void 0, s = [], y
            };
            var c = h.prototype;
            return c.UNSAFE_componentWillMount = function() {
                s.push(this), l()
            }, c.componentDidUpdate = function() {
                l()
            }, c.componentWillUnmount = function() {
                var y = s.indexOf(this);
                s.splice(y, 1), l()
            }, c.render = function() {
                return eC.createElement(i, this.props)
            }, h
        }(f0.PureComponent);
        return zh(u, "displayName", "SideEffect(" + r(i) + ")"), zh(u, "canUseDOM", nC), u
    }
}
var oC = rC;
const iC = Br(oC);
var sC = typeof Element < "u",
    aC = typeof Map == "function",
    lC = typeof Set == "function",
    uC = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function Zs(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Zs(e[r], t[r])) return !1;
            return !0
        }
        var i;
        if (aC && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Zs(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (lC && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (uC && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
        if (sC && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Zs(e[o[r]], t[o[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var cC = function(t, n) {
    try {
        return Zs(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const dC = Br(cC);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Fh = Object.getOwnPropertySymbols,
    fC = Object.prototype.hasOwnProperty,
    hC = Object.prototype.propertyIsEnumerable;

function pC(e) {
    if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}

function mC() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function(i) {
            return t[i]
        });
        if (r.join("") !== "0123456789") return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(i) {
            o[i] = i
        }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var gC = mC() ? Object.assign : function(e, t) {
    for (var n, r = pC(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n) fC.call(n, s) && (r[s] = n[s]);
        if (Fh) {
            o = Fh(n);
            for (var a = 0; a < o.length; a++) hC.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
};
const vC = Br(gC);
var jr = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
    },
    me = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(me).map(function(e) {
    return me[e]
});
var Me = {
        CHARSET: "charset",
        CSS_TEXT: "cssText",
        HREF: "href",
        HTTPEQUIV: "http-equiv",
        INNER_HTML: "innerHTML",
        ITEM_PROP: "itemprop",
        NAME: "name",
        PROPERTY: "property",
        REL: "rel",
        SRC: "src",
        TARGET: "target"
    },
    Aa = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    Gi = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    },
    yC = Object.keys(Aa).reduce(function(e, t) {
        return e[Aa[t]] = t, e
    }, {}),
    wC = [me.NOSCRIPT, me.SCRIPT, me.STYLE],
    qt = "data-react-helmet",
    xC = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    bC = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    SC = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    wt = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _C = function(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    Bh = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    },
    CC = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e
    },
    pc = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    EC = function(t) {
        var n = xo(t, me.TITLE),
            r = xo(t, Gi.TITLE_TEMPLATE);
        if (r && n) return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
        var o = xo(t, Gi.DEFAULT_TITLE);
        return n || o || void 0
    },
    kC = function(t) {
        return xo(t, Gi.ON_CHANGE_CLIENT_STATE) || function() {}
    },
    ql = function(t, n) {
        return n.filter(function(r) {
            return typeof r[t] < "u"
        }).map(function(r) {
            return r[t]
        }).reduce(function(r, o) {
            return wt({}, r, o)
        }, {})
    },
    TC = function(t, n) {
        return n.filter(function(r) {
            return typeof r[me.BASE] < "u"
        }).map(function(r) {
            return r[me.BASE]
        }).reverse().reduce(function(r, o) {
            if (!r.length)
                for (var i = Object.keys(o), s = 0; s < i.length; s++) {
                    var a = i[s],
                        l = a.toLowerCase();
                    if (t.indexOf(l) !== -1 && o[l]) return r.concat(o)
                }
            return r
        }, [])
    },
    si = function(t, n, r) {
        var o = {};
        return r.filter(function(i) {
            return Array.isArray(i[t]) ? !0 : (typeof i[t] < "u" && RC("Helmet: " + t + ' should be of type "Array". Instead found type "' + xC(i[t]) + '"'), !1)
        }).map(function(i) {
            return i[t]
        }).reverse().reduce(function(i, s) {
            var a = {};
            s.filter(function(c) {
                for (var f = void 0, y = Object.keys(c), d = 0; d < y.length; d++) {
                    var v = y[d],
                        p = v.toLowerCase();
                    n.indexOf(p) !== -1 && !(f === Me.REL && c[f].toLowerCase() === "canonical") && !(p === Me.REL && c[p].toLowerCase() === "stylesheet") && (f = p), n.indexOf(v) !== -1 && (v === Me.INNER_HTML || v === Me.CSS_TEXT || v === Me.ITEM_PROP) && (f = v)
                }
                if (!f || !c[f]) return !1;
                var g = c[f].toLowerCase();
                return o[f] || (o[f] = {}), a[f] || (a[f] = {}), o[f][g] ? !1 : (a[f][g] = !0, !0)
            }).reverse().forEach(function(c) {
                return i.push(c)
            });
            for (var l = Object.keys(a), u = 0; u < l.length; u++) {
                var m = l[u],
                    h = vC({}, o[m], a[m]);
                o[m] = h
            }
            return i
        }, []).reverse()
    },
    xo = function(t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            if (o.hasOwnProperty(n)) return o[n]
        }
        return null
    },
    NC = function(t) {
        return {
            baseTag: TC([Me.HREF, Me.TARGET], t),
            bodyAttributes: ql(jr.BODY, t),
            defer: xo(t, Gi.DEFER),
            encode: xo(t, Gi.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: ql(jr.HTML, t),
            linkTags: si(me.LINK, [Me.REL, Me.HREF], t),
            metaTags: si(me.META, [Me.NAME, Me.CHARSET, Me.HTTPEQUIV, Me.PROPERTY, Me.ITEM_PROP], t),
            noscriptTags: si(me.NOSCRIPT, [Me.INNER_HTML], t),
            onChangeClientState: kC(t),
            scriptTags: si(me.SCRIPT, [Me.SRC, Me.INNER_HTML], t),
            styleTags: si(me.STYLE, [Me.CSS_TEXT], t),
            title: EC(t),
            titleAttributes: ql(jr.TITLE, t)
        }
    },
    mc = function() {
        var e = Date.now();
        return function(t) {
            var n = Date.now();
            n - e > 16 ? (e = n, t(n)) : setTimeout(function() {
                mc(t)
            }, 0)
        }
    }(),
    Uh = function(t) {
        return clearTimeout(t)
    },
    PC = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || mc : global.requestAnimationFrame || mc,
    AC = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Uh : global.cancelAnimationFrame || Uh,
    RC = function(t) {
        return console && typeof console.warn == "function" && console.warn(t)
    },
    ai = null,
    jC = function(t) {
        ai && AC(ai), t.defer ? ai = PC(function() {
            $h(t, function() {
                ai = null
            })
        }) : ($h(t), ai = null)
    },
    $h = function(t, n) {
        var r = t.baseTag,
            o = t.bodyAttributes,
            i = t.htmlAttributes,
            s = t.linkTags,
            a = t.metaTags,
            l = t.noscriptTags,
            u = t.onChangeClientState,
            m = t.scriptTags,
            h = t.styleTags,
            c = t.title,
            f = t.titleAttributes;
        gc(me.BODY, o), gc(me.HTML, i), OC(c, f);
        var y = {
                baseTag: Qr(me.BASE, r),
                linkTags: Qr(me.LINK, s),
                metaTags: Qr(me.META, a),
                noscriptTags: Qr(me.NOSCRIPT, l),
                scriptTags: Qr(me.SCRIPT, m),
                styleTags: Qr(me.STYLE, h)
            },
            d = {},
            v = {};
        Object.keys(y).forEach(function(p) {
            var g = y[p],
                w = g.newTags,
                C = g.oldTags;
            w.length && (d[p] = w), C.length && (v[p] = y[p].oldTags)
        }), n && n(), u(t, d, v)
    },
    h0 = function(t) {
        return Array.isArray(t) ? t.join("") : t
    },
    OC = function(t, n) {
        typeof t < "u" && document.title !== t && (document.title = h0(t)), gc(me.TITLE, n)
    },
    gc = function(t, n) {
        var r = document.getElementsByTagName(t)[0];
        if (r) {
            for (var o = r.getAttribute(qt), i = o ? o.split(",") : [], s = [].concat(i), a = Object.keys(n), l = 0; l < a.length; l++) {
                var u = a[l],
                    m = n[u] || "";
                r.getAttribute(u) !== m && r.setAttribute(u, m), i.indexOf(u) === -1 && i.push(u);
                var h = s.indexOf(u);
                h !== -1 && s.splice(h, 1)
            }
            for (var c = s.length - 1; c >= 0; c--) r.removeAttribute(s[c]);
            i.length === s.length ? r.removeAttribute(qt) : r.getAttribute(qt) !== a.join(",") && r.setAttribute(qt, a.join(","))
        }
    },
    Qr = function(t, n) {
        var r = document.head || document.querySelector(me.HEAD),
            o = r.querySelectorAll(t + "[" + qt + "]"),
            i = Array.prototype.slice.call(o),
            s = [],
            a = void 0;
        return n && n.length && n.forEach(function(l) {
            var u = document.createElement(t);
            for (var m in l)
                if (l.hasOwnProperty(m))
                    if (m === Me.INNER_HTML) u.innerHTML = l.innerHTML;
                    else if (m === Me.CSS_TEXT) u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
            else {
                var h = typeof l[m] > "u" ? "" : l[m];
                u.setAttribute(m, h)
            }
            u.setAttribute(qt, "true"), i.some(function(c, f) {
                return a = f, u.isEqualNode(c)
            }) ? i.splice(a, 1) : s.push(u)
        }), i.forEach(function(l) {
            return l.parentNode.removeChild(l)
        }), s.forEach(function(l) {
            return r.appendChild(l)
        }), {
            oldTags: i,
            newTags: s
        }
    },
    p0 = function(t) {
        return Object.keys(t).reduce(function(n, r) {
            var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    },
    IC = function(t, n, r, o) {
        var i = p0(r),
            s = h0(n);
        return i ? "<" + t + " " + qt + '="true" ' + i + ">" + pc(s, o) + "</" + t + ">" : "<" + t + " " + qt + '="true">' + pc(s, o) + "</" + t + ">"
    },
    LC = function(t, n, r) {
        return n.reduce(function(o, i) {
            var s = Object.keys(i).filter(function(u) {
                    return !(u === Me.INNER_HTML || u === Me.CSS_TEXT)
                }).reduce(function(u, m) {
                    var h = typeof i[m] > "u" ? m : m + '="' + pc(i[m], r) + '"';
                    return u ? u + " " + h : h
                }, ""),
                a = i.innerHTML || i.cssText || "",
                l = wC.indexOf(t) === -1;
            return o + "<" + t + " " + qt + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
        }, "")
    },
    m0 = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, o) {
            return r[Aa[o] || o] = t[o], r
        }, n)
    },
    MC = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, o) {
            return r[yC[o] || o] = t[o], r
        }, n)
    },
    DC = function(t, n, r) {
        var o, i = (o = {
                key: n
            }, o[qt] = !0, o),
            s = m0(r, i);
        return [se.createElement(me.TITLE, s, n)]
    },
    zC = function(t, n) {
        return n.map(function(r, o) {
            var i, s = (i = {
                key: o
            }, i[qt] = !0, i);
            return Object.keys(r).forEach(function(a) {
                var l = Aa[a] || a;
                if (l === Me.INNER_HTML || l === Me.CSS_TEXT) {
                    var u = r.innerHTML || r.cssText;
                    s.dangerouslySetInnerHTML = {
                        __html: u
                    }
                } else s[l] = r[a]
            }), se.createElement(t, s)
        })
    },
    yn = function(t, n, r) {
        switch (t) {
            case me.TITLE:
                return {
                    toComponent: function() {
                        return DC(t, n.title, n.titleAttributes)
                    },
                    toString: function() {
                        return IC(t, n.title, n.titleAttributes, r)
                    }
                };
            case jr.BODY:
            case jr.HTML:
                return {
                    toComponent: function() {
                        return m0(n)
                    },
                    toString: function() {
                        return p0(n)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return zC(t, n)
                    },
                    toString: function() {
                        return LC(t, n, r)
                    }
                }
        }
    },
    g0 = function(t) {
        var n = t.baseTag,
            r = t.bodyAttributes,
            o = t.encode,
            i = t.htmlAttributes,
            s = t.linkTags,
            a = t.metaTags,
            l = t.noscriptTags,
            u = t.scriptTags,
            m = t.styleTags,
            h = t.title,
            c = h === void 0 ? "" : h,
            f = t.titleAttributes;
        return {
            base: yn(me.BASE, n, o),
            bodyAttributes: yn(jr.BODY, r, o),
            htmlAttributes: yn(jr.HTML, i, o),
            link: yn(me.LINK, s, o),
            meta: yn(me.META, a, o),
            noscript: yn(me.NOSCRIPT, l, o),
            script: yn(me.SCRIPT, u, o),
            style: yn(me.STYLE, m, o),
            title: yn(me.TITLE, {
                title: c,
                titleAttributes: f
            }, o)
        }
    },
    FC = function(t) {
        var n, r;
        return r = n = function(o) {
            _C(i, o);

            function i() {
                return bC(this, i), CC(this, o.apply(this, arguments))
            }
            return i.prototype.shouldComponentUpdate = function(a) {
                return !dC(this.props, a)
            }, i.prototype.mapNestedChildrenToProps = function(a, l) {
                if (!l) return null;
                switch (a.type) {
                    case me.SCRIPT:
                    case me.NOSCRIPT:
                        return {
                            innerHTML: l
                        };
                    case me.STYLE:
                        return {
                            cssText: l
                        }
                }
                throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }, i.prototype.flattenArrayTypeChildren = function(a) {
                var l, u = a.child,
                    m = a.arrayTypeChildren,
                    h = a.newChildProps,
                    c = a.nestedChildren;
                return wt({}, m, (l = {}, l[u.type] = [].concat(m[u.type] || [], [wt({}, h, this.mapNestedChildrenToProps(u, c))]), l))
            }, i.prototype.mapObjectTypeChildren = function(a) {
                var l, u, m = a.child,
                    h = a.newProps,
                    c = a.newChildProps,
                    f = a.nestedChildren;
                switch (m.type) {
                    case me.TITLE:
                        return wt({}, h, (l = {}, l[m.type] = f, l.titleAttributes = wt({}, c), l));
                    case me.BODY:
                        return wt({}, h, {
                            bodyAttributes: wt({}, c)
                        });
                    case me.HTML:
                        return wt({}, h, {
                            htmlAttributes: wt({}, c)
                        })
                }
                return wt({}, h, (u = {}, u[m.type] = wt({}, c), u))
            }, i.prototype.mapArrayTypeChildrenToProps = function(a, l) {
                var u = wt({}, l);
                return Object.keys(a).forEach(function(m) {
                    var h;
                    u = wt({}, u, (h = {}, h[m] = a[m], h))
                }), u
            }, i.prototype.warnOnInvalidChildren = function(a, l) {
                return !0
            }, i.prototype.mapChildrenToProps = function(a, l) {
                var u = this,
                    m = {};
                return se.Children.forEach(a, function(h) {
                    if (!(!h || !h.props)) {
                        var c = h.props,
                            f = c.children,
                            y = Bh(c, ["children"]),
                            d = MC(y);
                        switch (u.warnOnInvalidChildren(h, f), h.type) {
                            case me.LINK:
                            case me.META:
                            case me.NOSCRIPT:
                            case me.SCRIPT:
                            case me.STYLE:
                                m = u.flattenArrayTypeChildren({
                                    child: h,
                                    arrayTypeChildren: m,
                                    newChildProps: d,
                                    nestedChildren: f
                                });
                                break;
                            default:
                                l = u.mapObjectTypeChildren({
                                    child: h,
                                    newProps: l,
                                    newChildProps: d,
                                    nestedChildren: f
                                });
                                break
                        }
                    }
                }), l = this.mapArrayTypeChildrenToProps(m, l), l
            }, i.prototype.render = function() {
                var a = this.props,
                    l = a.children,
                    u = Bh(a, ["children"]),
                    m = wt({}, u);
                return l && (m = this.mapChildrenToProps(l, m)), se.createElement(t, m)
            }, SC(i, null, [{
                key: "canUseDOM",
                set: function(a) {
                    t.canUseDOM = a
                }
            }]), i
        }(se.Component), n.propTypes = {
            base: Le.object,
            bodyAttributes: Le.object,
            children: Le.oneOfType([Le.arrayOf(Le.node), Le.node]),
            defaultTitle: Le.string,
            defer: Le.bool,
            encodeSpecialCharacters: Le.bool,
            htmlAttributes: Le.object,
            link: Le.arrayOf(Le.object),
            meta: Le.arrayOf(Le.object),
            noscript: Le.arrayOf(Le.object),
            onChangeClientState: Le.func,
            script: Le.arrayOf(Le.object),
            style: Le.arrayOf(Le.object),
            title: Le.string,
            titleAttributes: Le.object,
            titleTemplate: Le.string
        }, n.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        }, n.peek = t.peek, n.rewind = function() {
            var o = t.rewind();
            return o || (o = g0({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })), o
        }, r
    },
    BC = function() {
        return null
    },
    UC = iC(NC, jC, g0)(BC),
    Yi = FC(UC);
Yi.renderStatic = Yi.rewind;
const ut = _.forwardRef(({
    className: e,
    type: t,
    ...n
}, r) => x.jsx("input", {
    type: t,
    className: rt("flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
ut.displayName = "Input";
const $C = ev("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2 rounded-xl",
                sm: "h-9 px-3 rounded-xl",
                lg: "h-11 px-8 rounded-xl",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Ne = _.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? zo : "button";
        return x.jsx(s, {
            className: rt($C({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
Ne.displayName = "Button";

function Wh(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}
var WC = _.createContext(void 0);

function HC(e) {
    const t = _.useContext(WC);
    return e || t || "ltr"
}
var Jl = 0;

function VC() {
    _.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Hh()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Hh()), Jl++, () => {
            Jl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Jl--
        }
    }, [])
}

function Hh() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var eu = "focusScope.autoFocusOnMount",
    tu = "focusScope.autoFocusOnUnmount",
    Vh = {
        bubbles: !1,
        cancelable: !0
    },
    KC = "FocusScope",
    v0 = _.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
        } = e, [a, l] = _.useState(null), u = It(o), m = It(i), h = _.useRef(null), c = We(t, d => l(d)), f = _.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        _.useEffect(() => {
            if (r) {
                let d = function(w) {
                        if (f.paused || !a) return;
                        const C = w.target;
                        a.contains(C) ? h.current = C : zn(h.current, {
                            select: !0
                        })
                    },
                    v = function(w) {
                        if (f.paused || !a) return;
                        const C = w.relatedTarget;
                        C !== null && (a.contains(C) || zn(h.current, {
                            select: !0
                        }))
                    },
                    p = function(w) {
                        if (document.activeElement === document.body)
                            for (const E of w) E.removedNodes.length > 0 && zn(a)
                    };
                document.addEventListener("focusin", d), document.addEventListener("focusout", v);
                const g = new MutationObserver(p);
                return a && g.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", d), document.removeEventListener("focusout", v), g.disconnect()
                }
            }
        }, [r, a, f.paused]), _.useEffect(() => {
            if (a) {
                Gh.add(f);
                const d = document.activeElement;
                if (!a.contains(d)) {
                    const p = new CustomEvent(eu, Vh);
                    a.addEventListener(eu, u), a.dispatchEvent(p), p.defaultPrevented || (GC(qC(y0(a)), {
                        select: !0
                    }), document.activeElement === d && zn(a))
                }
                return () => {
                    a.removeEventListener(eu, u), setTimeout(() => {
                        const p = new CustomEvent(tu, Vh);
                        a.addEventListener(tu, m), a.dispatchEvent(p), p.defaultPrevented || zn(d ? ? document.body, {
                            select: !0
                        }), a.removeEventListener(tu, m), Gh.remove(f)
                    }, 0)
                }
            }
        }, [a, u, m, f]);
        const y = _.useCallback(d => {
            if (!n && !r || f.paused) return;
            const v = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey,
                p = document.activeElement;
            if (v && p) {
                const g = d.currentTarget,
                    [w, C] = YC(g);
                w && C ? !d.shiftKey && p === C ? (d.preventDefault(), n && zn(w, {
                    select: !0
                })) : d.shiftKey && p === w && (d.preventDefault(), n && zn(C, {
                    select: !0
                })) : p === g && d.preventDefault()
            }
        }, [n, r, f.paused]);
        return x.jsx(Pe.div, {
            tabIndex: -1,
            ...s,
            ref: c,
            onKeyDown: y
        })
    });
v0.displayName = KC;

function GC(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (zn(r, {
                select: t
            }), document.activeElement !== n) return
}

function YC(e) {
    const t = y0(e),
        n = Kh(t, e),
        r = Kh(t.reverse(), e);
    return [n, r]
}

function y0(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Kh(e, t) {
    for (const n of e)
        if (!QC(n, {
                upTo: t
            })) return n
}

function QC(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function ZC(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function zn(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && ZC(e) && t && e.select()
    }
}
var Gh = XC();

function XC() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = Yh(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = Yh(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function Yh(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function qC(e) {
    return e.filter(t => t.tagName !== "A")
}

function JC(e) {
    const t = _.useRef({
        value: e,
        previous: e
    });
    return _.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var eE = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    Zr = new WeakMap,
    As = new WeakMap,
    Rs = {},
    nu = 0,
    w0 = function(e) {
        return e && (e.host || w0(e.parentNode))
    },
    tE = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = w0(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    nE = function(e, t, n, r) {
        var o = tE(t, Array.isArray(e) ? e : [e]);
        Rs[n] || (Rs[n] = new WeakMap);
        var i = Rs[n],
            s = [],
            a = new Set,
            l = new Set(o),
            u = function(h) {
                !h || a.has(h) || (a.add(h), u(h.parentNode))
            };
        o.forEach(u);
        var m = function(h) {
            !h || l.has(h) || Array.prototype.forEach.call(h.children, function(c) {
                if (a.has(c)) m(c);
                else try {
                    var f = c.getAttribute(r),
                        y = f !== null && f !== "false",
                        d = (Zr.get(c) || 0) + 1,
                        v = (i.get(c) || 0) + 1;
                    Zr.set(c, d), i.set(c, v), s.push(c), d === 1 && y && As.set(c, !0), v === 1 && c.setAttribute(n, "true"), y || c.setAttribute(r, "true")
                } catch (p) {
                    console.error("aria-hidden: cannot operate on ", c, p)
                }
            })
        };
        return m(t), a.clear(), nu++,
            function() {
                s.forEach(function(h) {
                    var c = Zr.get(h) - 1,
                        f = i.get(h) - 1;
                    Zr.set(h, c), i.set(h, f), c || (As.has(h) || h.removeAttribute(r), As.delete(h)), f || h.removeAttribute(n)
                }), nu--, nu || (Zr = new WeakMap, Zr = new WeakMap, As = new WeakMap, Rs = {})
            }
    },
    rE = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = eE(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), nE(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    dn = function() {
        return dn = Object.assign || function(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, dn.apply(this, arguments)
    };

function x0(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function oE(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Xs = "right-scroll-bar-position",
    qs = "width-before-scroll-bar",
    iE = "with-scroll-bars-hidden",
    sE = "--removed-body-scroll-bar-size";

function ru(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function aE(e, t) {
    var n = _.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var lE = typeof window < "u" ? _.useLayoutEffect : _.useEffect,
    Qh = new WeakMap;

function uE(e, t) {
    var n = aE(null, function(r) {
        return e.forEach(function(o) {
            return ru(o, r)
        })
    });
    return lE(function() {
        var r = Qh.get(n);
        if (r) {
            var o = new Set(r),
                i = new Set(e),
                s = n.current;
            o.forEach(function(a) {
                i.has(a) || ru(a, null)
            }), i.forEach(function(a) {
                o.has(a) || ru(a, s)
            })
        }
        Qh.set(n, e)
    }, [e]), n
}

function cE(e) {
    return e
}

function dE(e, t) {
    t === void 0 && (t = cE);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(i) {
                var s = t(i, r);
                return n.push(s),
                    function() {
                        n = n.filter(function(a) {
                            return a !== s
                        })
                    }
            },
            assignSyncMedium: function(i) {
                for (r = !0; n.length;) {
                    var s = n;
                    n = [], s.forEach(i)
                }
                n = {
                    push: function(a) {
                        return i(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(i) {
                r = !0;
                var s = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(i), s = n
                }
                var l = function() {
                        var m = s;
                        s = [], m.forEach(i)
                    },
                    u = function() {
                        return Promise.resolve().then(l)
                    };
                u(), n = {
                    push: function(m) {
                        s.push(m), u()
                    },
                    filter: function(m) {
                        return s = s.filter(m), n
                    }
                }
            }
        };
    return o
}

function fE(e) {
    e === void 0 && (e = {});
    var t = dE(null);
    return t.options = dn({
        async: !0,
        ssr: !1
    }, e), t
}
var b0 = function(e) {
    var t = e.sideCar,
        n = x0(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return _.createElement(r, dn({}, n))
};
b0.isSideCarExport = !0;

function hE(e, t) {
    return e.useMedium(t), b0
}
var S0 = fE(),
    ou = function() {},
    fl = _.forwardRef(function(e, t) {
        var n = _.useRef(null),
            r = _.useState({
                onScrollCapture: ou,
                onWheelCapture: ou,
                onTouchMoveCapture: ou
            }),
            o = r[0],
            i = r[1],
            s = e.forwardProps,
            a = e.children,
            l = e.className,
            u = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            c = e.sideCar,
            f = e.noIsolation,
            y = e.inert,
            d = e.allowPinchZoom,
            v = e.as,
            p = v === void 0 ? "div" : v,
            g = e.gapMode,
            w = x0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = c,
            E = uE([n, t]),
            A = dn(dn({}, w), o);
        return _.createElement(_.Fragment, null, m && _.createElement(C, {
            sideCar: S0,
            removeScrollBar: u,
            shards: h,
            noIsolation: f,
            inert: y,
            setCallbacks: i,
            allowPinchZoom: !!d,
            lockRef: n,
            gapMode: g
        }), s ? _.cloneElement(_.Children.only(a), dn(dn({}, A), {
            ref: E
        })) : _.createElement(p, dn({}, A, {
            className: l,
            ref: E
        }), a))
    });
fl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
fl.classNames = {
    fullWidth: qs,
    zeroRight: Xs
};
var pE = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function mE() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = pE();
    return t && e.setAttribute("nonce", t), e
}

function gE(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function vE(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var yE = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = mE()) && (gE(t, n), vE(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    wE = function() {
        var e = yE();
        return function(t, n) {
            _.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    _0 = function() {
        var e = wE(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    xE = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    iu = function(e) {
        return parseInt(e || "", 10) || 0
    },
    bE = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [iu(n), iu(r), iu(o)]
    },
    SE = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return xE;
        var t = bE(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    _E = _0(),
    bo = "data-scroll-locked",
    CE = function(e, t, n, r) {
        var o = e.left,
            i = e.top,
            s = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(iE, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(bo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Xs, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(qs, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Xs, " .").concat(Xs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(qs, " .").concat(qs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(bo, `] {
    `).concat(sE, ": ").concat(a, `px;
  }
`)
    },
    Zh = function() {
        var e = parseInt(document.body.getAttribute(bo) || "0", 10);
        return isFinite(e) ? e : 0
    },
    EE = function() {
        _.useEffect(function() {
            return document.body.setAttribute(bo, (Zh() + 1).toString()),
                function() {
                    var e = Zh() - 1;
                    e <= 0 ? document.body.removeAttribute(bo) : document.body.setAttribute(bo, e.toString())
                }
        }, [])
    },
    kE = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        EE();
        var i = _.useMemo(function() {
            return SE(o)
        }, [o]);
        return _.createElement(_E, {
            styles: CE(i, !t, o, n ? "" : "!important")
        })
    },
    vc = !1;
if (typeof window < "u") try {
    var js = Object.defineProperty({}, "passive", {
        get: function() {
            return vc = !0, !0
        }
    });
    window.addEventListener("test", js, js), window.removeEventListener("test", js, js)
} catch {
    vc = !1
}
var Xr = vc ? {
        passive: !1
    } : !1,
    TE = function(e) {
        return e.tagName === "TEXTAREA"
    },
    C0 = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !TE(e) && n[t] === "visible")
    },
    NE = function(e) {
        return C0(e, "overflowY")
    },
    PE = function(e) {
        return C0(e, "overflowX")
    },
    Xh = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = E0(e, r);
            if (o) {
                var i = k0(e, r),
                    s = i[1],
                    a = i[2];
                if (s > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    AE = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    RE = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    E0 = function(e, t) {
        return e === "v" ? NE(t) : PE(t)
    },
    k0 = function(e, t) {
        return e === "v" ? AE(t) : RE(t)
    },
    jE = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    OE = function(e, t, n, r, o) {
        var i = jE(e, window.getComputedStyle(t).direction),
            s = i * r,
            a = n.target,
            l = t.contains(a),
            u = !1,
            m = s > 0,
            h = 0,
            c = 0;
        do {
            var f = k0(e, a),
                y = f[0],
                d = f[1],
                v = f[2],
                p = d - v - i * y;
            (y || p) && E0(e, a) && (h += p, c += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
        } while (!l && a !== document.body || l && (t.contains(a) || t === a));
        return (m && (Math.abs(h) < 1 || !o) || !m && (Math.abs(c) < 1 || !o)) && (u = !0), u
    },
    Os = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    qh = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Jh = function(e) {
        return e && "current" in e ? e.current : e
    },
    IE = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    LE = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    ME = 0,
    qr = [];

function DE(e) {
    var t = _.useRef([]),
        n = _.useRef([0, 0]),
        r = _.useRef(),
        o = _.useState(ME++)[0],
        i = _.useState(_0)[0],
        s = _.useRef(e);
    _.useEffect(function() {
        s.current = e
    }, [e]), _.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var d = oE([e.lockRef.current], (e.shards || []).map(Jh), !0).filter(Boolean);
            return d.forEach(function(v) {
                    return v.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), d.forEach(function(v) {
                        return v.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = _.useCallback(function(d, v) {
            if ("touches" in d && d.touches.length === 2 || d.type === "wheel" && d.ctrlKey) return !s.current.allowPinchZoom;
            var p = Os(d),
                g = n.current,
                w = "deltaX" in d ? d.deltaX : g[0] - p[0],
                C = "deltaY" in d ? d.deltaY : g[1] - p[1],
                E, A = d.target,
                N = Math.abs(w) > Math.abs(C) ? "h" : "v";
            if ("touches" in d && N === "h" && A.type === "range") return !1;
            var j = Xh(N, A);
            if (!j) return !0;
            if (j ? E = N : (E = N === "v" ? "h" : "v", j = Xh(N, A)), !j) return !1;
            if (!r.current && "changedTouches" in d && (w || C) && (r.current = E), !E) return !0;
            var I = r.current || E;
            return OE(I, v, d, I === "h" ? w : C, !0)
        }, []),
        l = _.useCallback(function(d) {
            var v = d;
            if (!(!qr.length || qr[qr.length - 1] !== i)) {
                var p = "deltaY" in v ? qh(v) : Os(v),
                    g = t.current.filter(function(E) {
                        return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && IE(E.delta, p)
                    })[0];
                if (g && g.should) {
                    v.cancelable && v.preventDefault();
                    return
                }
                if (!g) {
                    var w = (s.current.shards || []).map(Jh).filter(Boolean).filter(function(E) {
                            return E.contains(v.target)
                        }),
                        C = w.length > 0 ? a(v, w[0]) : !s.current.noIsolation;
                    C && v.cancelable && v.preventDefault()
                }
            }
        }, []),
        u = _.useCallback(function(d, v, p, g) {
            var w = {
                name: d,
                delta: v,
                target: p,
                should: g,
                shadowParent: zE(p)
            };
            t.current.push(w), setTimeout(function() {
                t.current = t.current.filter(function(C) {
                    return C !== w
                })
            }, 1)
        }, []),
        m = _.useCallback(function(d) {
            n.current = Os(d), r.current = void 0
        }, []),
        h = _.useCallback(function(d) {
            u(d.type, qh(d), d.target, a(d, e.lockRef.current))
        }, []),
        c = _.useCallback(function(d) {
            u(d.type, Os(d), d.target, a(d, e.lockRef.current))
        }, []);
    _.useEffect(function() {
        return qr.push(i), e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: c
            }), document.addEventListener("wheel", l, Xr), document.addEventListener("touchmove", l, Xr), document.addEventListener("touchstart", m, Xr),
            function() {
                qr = qr.filter(function(d) {
                    return d !== i
                }), document.removeEventListener("wheel", l, Xr), document.removeEventListener("touchmove", l, Xr), document.removeEventListener("touchstart", m, Xr)
            }
    }, []);
    var f = e.removeScrollBar,
        y = e.inert;
    return _.createElement(_.Fragment, null, y ? _.createElement(i, {
        styles: LE(o)
    }) : null, f ? _.createElement(kE, {
        gapMode: e.gapMode
    }) : null)
}

function zE(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const FE = hE(S0, DE);
var T0 = _.forwardRef(function(e, t) {
    return _.createElement(fl, dn({}, e, {
        ref: t,
        sideCar: FE
    }))
});
T0.classNames = fl.classNames;
var BE = [" ", "Enter", "ArrowUp", "ArrowDown"],
    UE = [" ", "Enter"],
    os = "Select",
    [hl, pl, $E] = Ng(os),
    [Qo, Tk] = xd(os, [$E, tl]),
    ml = tl(),
    [WE, pr] = Qo(os),
    [HE, VE] = Qo(os),
    N0 = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: u,
            name: m,
            autoComplete: h,
            disabled: c,
            required: f,
            form: y
        } = e, d = ml(t), [v, p] = _.useState(null), [g, w] = _.useState(null), [C, E] = _.useState(!1), A = HC(u), [N = !1, j] = _a({
            prop: r,
            defaultProp: o,
            onChange: i
        }), [I, B] = _a({
            prop: s,
            defaultProp: a,
            onChange: l
        }), G = _.useRef(null), k = v ? y || !!v.closest("form") : !0, [F, S] = _.useState(new Set), U = Array.from(F).map(X => X.props.value).join(";");
        return x.jsx(Ov, { ...d,
            children: x.jsxs(WE, {
                required: f,
                scope: t,
                trigger: v,
                onTriggerChange: p,
                valueNode: g,
                onValueNodeChange: w,
                valueNodeHasChildren: C,
                onValueNodeHasChildrenChange: E,
                contentId: Xa(),
                value: I,
                onValueChange: B,
                open: N,
                onOpenChange: j,
                dir: A,
                triggerPointerDownPosRef: G,
                disabled: c,
                children: [x.jsx(hl.Provider, {
                    scope: t,
                    children: x.jsx(HE, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: _.useCallback(X => {
                            S(H => new Set(H).add(X))
                        }, []),
                        onNativeOptionRemove: _.useCallback(X => {
                            S(H => {
                                const D = new Set(H);
                                return D.delete(X), D
                            })
                        }, []),
                        children: n
                    })
                }), k ? x.jsxs(J0, {
                    "aria-hidden": !0,
                    required: f,
                    tabIndex: -1,
                    name: m,
                    autoComplete: h,
                    value: I,
                    onChange: X => B(X.target.value),
                    disabled: c,
                    form: y,
                    children: [I === void 0 ? x.jsx("option", {
                        value: ""
                    }) : null, Array.from(F)]
                }, U) : null]
            })
        })
    };
N0.displayName = os;
var P0 = "SelectTrigger",
    A0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
        } = e, i = ml(n), s = pr(P0, n), a = s.disabled || r, l = We(t, s.onTriggerChange), u = pl(n), m = _.useRef("touch"), [h, c, f] = ey(d => {
            const v = u().filter(w => !w.disabled),
                p = v.find(w => w.value === s.value),
                g = ty(v, d, p);
            g !== void 0 && s.onValueChange(g.value)
        }), y = d => {
            a || (s.onOpenChange(!0), f()), d && (s.triggerPointerDownPosRef.current = {
                x: Math.round(d.pageX),
                y: Math.round(d.pageY)
            })
        };
        return x.jsx(Iv, {
            asChild: !0,
            ...i,
            children: x.jsx(Pe.button, {
                type: "button",
                role: "combobox",
                "aria-controls": s.contentId,
                "aria-expanded": s.open,
                "aria-required": s.required,
                "aria-autocomplete": "none",
                dir: s.dir,
                "data-state": s.open ? "open" : "closed",
                disabled: a,
                "data-disabled": a ? "" : void 0,
                "data-placeholder": q0(s.value) ? "" : void 0,
                ...o,
                ref: l,
                onClick: xe(o.onClick, d => {
                    d.currentTarget.focus(), m.current !== "mouse" && y(d)
                }),
                onPointerDown: xe(o.onPointerDown, d => {
                    m.current = d.pointerType;
                    const v = d.target;
                    v.hasPointerCapture(d.pointerId) && v.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (y(d), d.preventDefault())
                }),
                onKeyDown: xe(o.onKeyDown, d => {
                    const v = h.current !== "";
                    !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && c(d.key), !(v && d.key === " ") && BE.includes(d.key) && (y(), d.preventDefault())
                })
            })
        })
    });
A0.displayName = P0;
var R0 = "SelectValue",
    j0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
        } = e, l = pr(R0, n), {
            onValueNodeHasChildrenChange: u
        } = l, m = i !== void 0, h = We(t, l.onValueNodeChange);
        return ft(() => {
            u(m)
        }, [u, m]), x.jsx(Pe.span, { ...a,
            ref: h,
            style: {
                pointerEvents: "none"
            },
            children: q0(l.value) ? x.jsx(x.Fragment, {
                children: s
            }) : i
        })
    });
j0.displayName = R0;
var KE = "SelectIcon",
    O0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: r,
            ...o
        } = e;
        return x.jsx(Pe.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: r || "▼"
        })
    });
O0.displayName = KE;
var GE = "SelectPortal",
    I0 = e => x.jsx(bd, {
        asChild: !0,
        ...e
    });
I0.displayName = GE;
var Fr = "SelectContent",
    L0 = _.forwardRef((e, t) => {
        const n = pr(Fr, e.__scopeSelect),
            [r, o] = _.useState();
        if (ft(() => {
                o(new DocumentFragment)
            }, []), !n.open) {
            const i = r;
            return i ? Wr.createPortal(x.jsx(M0, {
                scope: e.__scopeSelect,
                children: x.jsx(hl.Slot, {
                    scope: e.__scopeSelect,
                    children: x.jsx("div", {
                        children: e.children
                    })
                })
            }), i) : null
        }
        return x.jsx(D0, { ...e,
            ref: t
        })
    });
L0.displayName = Fr;
var Kt = 10,
    [M0, mr] = Qo(Fr),
    YE = "SelectContentImpl",
    D0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: m,
            arrowPadding: h,
            collisionBoundary: c,
            collisionPadding: f,
            sticky: y,
            hideWhenDetached: d,
            avoidCollisions: v,
            ...p
        } = e, g = pr(Fr, n), [w, C] = _.useState(null), [E, A] = _.useState(null), N = We(t, ee => C(ee)), [j, I] = _.useState(null), [B, G] = _.useState(null), k = pl(n), [F, S] = _.useState(!1), U = _.useRef(!1);
        _.useEffect(() => {
            if (w) return rE(w)
        }, [w]), VC();
        const X = _.useCallback(ee => {
                const [oe, ...ue] = k().map(he => he.ref.current), [de] = ue.slice(-1), fe = document.activeElement;
                for (const he of ee)
                    if (he === fe || (he == null || he.scrollIntoView({
                            block: "nearest"
                        }), he === oe && E && (E.scrollTop = 0), he === de && E && (E.scrollTop = E.scrollHeight), he == null || he.focus(), document.activeElement !== fe)) return
            }, [k, E]),
            H = _.useCallback(() => X([j, w]), [X, j, w]);
        _.useEffect(() => {
            F && H()
        }, [F, H]);
        const {
            onOpenChange: D,
            triggerPointerDownPosRef: z
        } = g;
        _.useEffect(() => {
            if (w) {
                let ee = {
                    x: 0,
                    y: 0
                };
                const oe = de => {
                        var fe, he;
                        ee = {
                            x: Math.abs(Math.round(de.pageX) - (((fe = z.current) == null ? void 0 : fe.x) ? ? 0)),
                            y: Math.abs(Math.round(de.pageY) - (((he = z.current) == null ? void 0 : he.y) ? ? 0))
                        }
                    },
                    ue = de => {
                        ee.x <= 10 && ee.y <= 10 ? de.preventDefault() : w.contains(de.target) || D(!1), document.removeEventListener("pointermove", oe), z.current = null
                    };
                return z.current !== null && (document.addEventListener("pointermove", oe), document.addEventListener("pointerup", ue, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", oe), document.removeEventListener("pointerup", ue, {
                        capture: !0
                    })
                }
            }
        }, [w, D, z]), _.useEffect(() => {
            const ee = () => D(!1);
            return window.addEventListener("blur", ee), window.addEventListener("resize", ee), () => {
                window.removeEventListener("blur", ee), window.removeEventListener("resize", ee)
            }
        }, [D]);
        const [Y, O] = ey(ee => {
            const oe = k().filter(fe => !fe.disabled),
                ue = oe.find(fe => fe.ref.current === document.activeElement),
                de = ty(oe, ee, ue);
            de && setTimeout(() => de.ref.current.focus())
        }), L = _.useCallback((ee, oe, ue) => {
            const de = !U.current && !ue;
            (g.value !== void 0 && g.value === oe || de) && (I(ee), de && (U.current = !0))
        }, [g.value]), te = _.useCallback(() => w == null ? void 0 : w.focus(), [w]), R = _.useCallback((ee, oe, ue) => {
            const de = !U.current && !ue;
            (g.value !== void 0 && g.value === oe || de) && G(ee)
        }, [g.value]), V = r === "popper" ? yc : z0, J = V === yc ? {
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: m,
            arrowPadding: h,
            collisionBoundary: c,
            collisionPadding: f,
            sticky: y,
            hideWhenDetached: d,
            avoidCollisions: v
        } : {};
        return x.jsx(M0, {
            scope: n,
            content: w,
            viewport: E,
            onViewportChange: A,
            itemRefCallback: L,
            selectedItem: j,
            onItemLeave: te,
            itemTextRefCallback: R,
            focusSelectedItem: H,
            selectedItemText: B,
            position: r,
            isPositioned: F,
            searchRef: Y,
            children: x.jsx(T0, {
                as: zo,
                allowPinchZoom: !0,
                children: x.jsx(v0, {
                    asChild: !0,
                    trapped: g.open,
                    onMountAutoFocus: ee => {
                        ee.preventDefault()
                    },
                    onUnmountAutoFocus: xe(o, ee => {
                        var oe;
                        (oe = g.trigger) == null || oe.focus({
                            preventScroll: !0
                        }), ee.preventDefault()
                    }),
                    children: x.jsx(Ya, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: s,
                        onFocusOutside: ee => ee.preventDefault(),
                        onDismiss: () => g.onOpenChange(!1),
                        children: x.jsx(V, {
                            role: "listbox",
                            id: g.contentId,
                            "data-state": g.open ? "open" : "closed",
                            dir: g.dir,
                            onContextMenu: ee => ee.preventDefault(),
                            ...p,
                            ...J,
                            onPlaced: () => S(!0),
                            ref: N,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...p.style
                            },
                            onKeyDown: xe(p.onKeyDown, ee => {
                                const oe = ee.ctrlKey || ee.altKey || ee.metaKey;
                                if (ee.key === "Tab" && ee.preventDefault(), !oe && ee.key.length === 1 && O(ee.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) {
                                    let de = k().filter(fe => !fe.disabled).map(fe => fe.ref.current);
                                    if (["ArrowUp", "End"].includes(ee.key) && (de = de.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ee.key)) {
                                        const fe = ee.target,
                                            he = de.indexOf(fe);
                                        de = de.slice(he + 1)
                                    }
                                    setTimeout(() => X(de)), ee.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
D0.displayName = YE;
var QE = "SelectItemAlignedPosition",
    z0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: r,
            ...o
        } = e, i = pr(Fr, n), s = mr(Fr, n), [a, l] = _.useState(null), [u, m] = _.useState(null), h = We(t, N => m(N)), c = pl(n), f = _.useRef(!1), y = _.useRef(!0), {
            viewport: d,
            selectedItem: v,
            selectedItemText: p,
            focusSelectedItem: g
        } = s, w = _.useCallback(() => {
            if (i.trigger && i.valueNode && a && u && d && v && p) {
                const N = i.trigger.getBoundingClientRect(),
                    j = u.getBoundingClientRect(),
                    I = i.valueNode.getBoundingClientRect(),
                    B = p.getBoundingClientRect();
                if (i.dir !== "rtl") {
                    const fe = B.left - j.left,
                        he = I.left - fe,
                        ke = N.left - he,
                        b = N.width + ke,
                        K = Math.max(b, j.width),
                        W = window.innerWidth - Kt,
                        P = Wh(he, [Kt, Math.max(Kt, W - K)]);
                    a.style.minWidth = b + "px", a.style.left = P + "px"
                } else {
                    const fe = j.right - B.right,
                        he = window.innerWidth - I.right - fe,
                        ke = window.innerWidth - N.right - he,
                        b = N.width + ke,
                        K = Math.max(b, j.width),
                        W = window.innerWidth - Kt,
                        P = Wh(he, [Kt, Math.max(Kt, W - K)]);
                    a.style.minWidth = b + "px", a.style.right = P + "px"
                }
                const G = c(),
                    k = window.innerHeight - Kt * 2,
                    F = d.scrollHeight,
                    S = window.getComputedStyle(u),
                    U = parseInt(S.borderTopWidth, 10),
                    X = parseInt(S.paddingTop, 10),
                    H = parseInt(S.borderBottomWidth, 10),
                    D = parseInt(S.paddingBottom, 10),
                    z = U + X + F + D + H,
                    Y = Math.min(v.offsetHeight * 5, z),
                    O = window.getComputedStyle(d),
                    L = parseInt(O.paddingTop, 10),
                    te = parseInt(O.paddingBottom, 10),
                    R = N.top + N.height / 2 - Kt,
                    V = k - R,
                    J = v.offsetHeight / 2,
                    ee = v.offsetTop + J,
                    oe = U + X + ee,
                    ue = z - oe;
                if (oe <= R) {
                    const fe = G.length > 0 && v === G[G.length - 1].ref.current;
                    a.style.bottom = "0px";
                    const he = u.clientHeight - d.offsetTop - d.offsetHeight,
                        ke = Math.max(V, J + (fe ? te : 0) + he + H),
                        b = oe + ke;
                    a.style.height = b + "px"
                } else {
                    const fe = G.length > 0 && v === G[0].ref.current;
                    a.style.top = "0px";
                    const ke = Math.max(R, U + d.offsetTop + (fe ? L : 0) + J) + ue;
                    a.style.height = ke + "px", d.scrollTop = oe - R + d.offsetTop
                }
                a.style.margin = `${Kt}px 0`, a.style.minHeight = Y + "px", a.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => f.current = !0)
            }
        }, [c, i.trigger, i.valueNode, a, u, d, v, p, i.dir, r]);
        ft(() => w(), [w]);
        const [C, E] = _.useState();
        ft(() => {
            u && E(window.getComputedStyle(u).zIndex)
        }, [u]);
        const A = _.useCallback(N => {
            N && y.current === !0 && (w(), g == null || g(), y.current = !1)
        }, [w, g]);
        return x.jsx(XE, {
            scope: n,
            contentWrapper: a,
            shouldExpandOnScrollRef: f,
            onScrollButtonChange: A,
            children: x.jsx("div", {
                ref: l,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: C
                },
                children: x.jsx(Pe.div, { ...o,
                    ref: h,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...o.style
                    }
                })
            })
        })
    });
z0.displayName = QE;
var ZE = "SelectPopperPosition",
    yc = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = Kt,
            ...i
        } = e, s = ml(n);
        return x.jsx(Lv, { ...s,
            ...i,
            ref: t,
            align: r,
            collisionPadding: o,
            style: {
                boxSizing: "border-box",
                ...i.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
yc.displayName = ZE;
var [XE, Ud] = Qo(Fr, {}), wc = "SelectViewport", F0 = _.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: r,
        ...o
    } = e, i = mr(wc, n), s = Ud(wc, n), a = We(t, i.onViewportChange), l = _.useRef(0);
    return x.jsxs(x.Fragment, {
        children: [x.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), x.jsx(hl.Slot, {
            scope: n,
            children: x.jsx(Pe.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: xe(o.onScroll, u => {
                    const m = u.currentTarget,
                        {
                            contentWrapper: h,
                            shouldExpandOnScrollRef: c
                        } = s;
                    if (c != null && c.current && h) {
                        const f = Math.abs(l.current - m.scrollTop);
                        if (f > 0) {
                            const y = window.innerHeight - Kt * 2,
                                d = parseFloat(h.style.minHeight),
                                v = parseFloat(h.style.height),
                                p = Math.max(d, v);
                            if (p < y) {
                                const g = p + f,
                                    w = Math.min(y, g),
                                    C = g - w;
                                h.style.height = w + "px", h.style.bottom === "0px" && (m.scrollTop = C > 0 ? C : 0, h.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = m.scrollTop
                })
            })
        })]
    })
});
F0.displayName = wc;
var B0 = "SelectGroup",
    [qE, JE] = Qo(B0),
    ek = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = Xa();
        return x.jsx(qE, {
            scope: n,
            id: o,
            children: x.jsx(Pe.div, {
                role: "group",
                "aria-labelledby": o,
                ...r,
                ref: t
            })
        })
    });
ek.displayName = B0;
var U0 = "SelectLabel",
    $0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = JE(U0, n);
        return x.jsx(Pe.div, {
            id: o.id,
            ...r,
            ref: t
        })
    });
$0.displayName = U0;
var Ra = "SelectItem",
    [tk, W0] = Qo(Ra),
    H0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...s
        } = e, a = pr(Ra, n), l = mr(Ra, n), u = a.value === r, [m, h] = _.useState(i ? ? ""), [c, f] = _.useState(!1), y = We(t, g => {
            var w;
            return (w = l.itemRefCallback) == null ? void 0 : w.call(l, g, r, o)
        }), d = Xa(), v = _.useRef("touch"), p = () => {
            o || (a.onValueChange(r), a.onOpenChange(!1))
        };
        if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return x.jsx(tk, {
            scope: n,
            value: r,
            disabled: o,
            textId: d,
            isSelected: u,
            onItemTextChange: _.useCallback(g => {
                h(w => w || ((g == null ? void 0 : g.textContent) ? ? "").trim())
            }, []),
            children: x.jsx(hl.ItemSlot, {
                scope: n,
                value: r,
                disabled: o,
                textValue: m,
                children: x.jsx(Pe.div, {
                    role: "option",
                    "aria-labelledby": d,
                    "data-highlighted": c ? "" : void 0,
                    "aria-selected": u && c,
                    "data-state": u ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                    ...s,
                    ref: y,
                    onFocus: xe(s.onFocus, () => f(!0)),
                    onBlur: xe(s.onBlur, () => f(!1)),
                    onClick: xe(s.onClick, () => {
                        v.current !== "mouse" && p()
                    }),
                    onPointerUp: xe(s.onPointerUp, () => {
                        v.current === "mouse" && p()
                    }),
                    onPointerDown: xe(s.onPointerDown, g => {
                        v.current = g.pointerType
                    }),
                    onPointerMove: xe(s.onPointerMove, g => {
                        var w;
                        v.current = g.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : v.current === "mouse" && g.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: xe(s.onPointerLeave, g => {
                        var w;
                        g.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l))
                    }),
                    onKeyDown: xe(s.onKeyDown, g => {
                        var C;
                        ((C = l.searchRef) == null ? void 0 : C.current) !== "" && g.key === " " || (UE.includes(g.key) && p(), g.key === " " && g.preventDefault())
                    })
                })
            })
        })
    });
H0.displayName = Ra;
var hi = "SelectItemText",
    V0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
        } = e, s = pr(hi, n), a = mr(hi, n), l = W0(hi, n), u = VE(hi, n), [m, h] = _.useState(null), c = We(t, p => h(p), l.onItemTextChange, p => {
            var g;
            return (g = a.itemTextRefCallback) == null ? void 0 : g.call(a, p, l.value, l.disabled)
        }), f = m == null ? void 0 : m.textContent, y = _.useMemo(() => x.jsx("option", {
            value: l.value,
            disabled: l.disabled,
            children: f
        }, l.value), [l.disabled, l.value, f]), {
            onNativeOptionAdd: d,
            onNativeOptionRemove: v
        } = u;
        return ft(() => (d(y), () => v(y)), [d, v, y]), x.jsxs(x.Fragment, {
            children: [x.jsx(Pe.span, {
                id: l.textId,
                ...i,
                ref: c
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Wr.createPortal(i.children, s.valueNode) : null]
        })
    });
V0.displayName = hi;
var K0 = "SelectItemIndicator",
    G0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e;
        return W0(K0, n).isSelected ? x.jsx(Pe.span, {
            "aria-hidden": !0,
            ...r,
            ref: t
        }) : null
    });
G0.displayName = K0;
var xc = "SelectScrollUpButton",
    Y0 = _.forwardRef((e, t) => {
        const n = mr(xc, e.__scopeSelect),
            r = Ud(xc, e.__scopeSelect),
            [o, i] = _.useState(!1),
            s = We(t, r.onScrollButtonChange);
        return ft(() => {
            if (n.viewport && n.isPositioned) {
                let a = function() {
                    const u = l.scrollTop > 0;
                    i(u)
                };
                const l = n.viewport;
                return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a)
            }
        }, [n.viewport, n.isPositioned]), o ? x.jsx(Z0, { ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: a,
                    selectedItem: l
                } = n;
                a && l && (a.scrollTop = a.scrollTop - l.offsetHeight)
            }
        }) : null
    });
Y0.displayName = xc;
var bc = "SelectScrollDownButton",
    Q0 = _.forwardRef((e, t) => {
        const n = mr(bc, e.__scopeSelect),
            r = Ud(bc, e.__scopeSelect),
            [o, i] = _.useState(!1),
            s = We(t, r.onScrollButtonChange);
        return ft(() => {
            if (n.viewport && n.isPositioned) {
                let a = function() {
                    const u = l.scrollHeight - l.clientHeight,
                        m = Math.ceil(l.scrollTop) < u;
                    i(m)
                };
                const l = n.viewport;
                return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a)
            }
        }, [n.viewport, n.isPositioned]), o ? x.jsx(Z0, { ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: a,
                    selectedItem: l
                } = n;
                a && l && (a.scrollTop = a.scrollTop + l.offsetHeight)
            }
        }) : null
    });
Q0.displayName = bc;
var Z0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: r,
            ...o
        } = e, i = mr("SelectScrollButton", n), s = _.useRef(null), a = pl(n), l = _.useCallback(() => {
            s.current !== null && (window.clearInterval(s.current), s.current = null)
        }, []);
        return _.useEffect(() => () => l(), [l]), ft(() => {
            var m;
            const u = a().find(h => h.ref.current === document.activeElement);
            (m = u == null ? void 0 : u.ref.current) == null || m.scrollIntoView({
                block: "nearest"
            })
        }, [a]), x.jsx(Pe.div, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            style: {
                flexShrink: 0,
                ...o.style
            },
            onPointerDown: xe(o.onPointerDown, () => {
                s.current === null && (s.current = window.setInterval(r, 50))
            }),
            onPointerMove: xe(o.onPointerMove, () => {
                var u;
                (u = i.onItemLeave) == null || u.call(i), s.current === null && (s.current = window.setInterval(r, 50))
            }),
            onPointerLeave: xe(o.onPointerLeave, () => {
                l()
            })
        })
    }),
    nk = "SelectSeparator",
    X0 = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e;
        return x.jsx(Pe.div, {
            "aria-hidden": !0,
            ...r,
            ref: t
        })
    });
X0.displayName = nk;
var Sc = "SelectArrow",
    rk = _.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = ml(n), i = pr(Sc, n), s = mr(Sc, n);
        return i.open && s.position === "popper" ? x.jsx(Mv, { ...o,
            ...r,
            ref: t
        }) : null
    });
rk.displayName = Sc;

function q0(e) {
    return e === "" || e === void 0
}
var J0 = _.forwardRef((e, t) => {
    const {
        value: n,
        ...r
    } = e, o = _.useRef(null), i = We(t, o), s = JC(n);
    return _.useEffect(() => {
        const a = o.current,
            l = window.HTMLSelectElement.prototype,
            m = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== n && m) {
            const h = new Event("change", {
                bubbles: !0
            });
            m.call(a, n), a.dispatchEvent(h)
        }
    }, [s, n]), x.jsx(ns, {
        asChild: !0,
        children: x.jsx("select", { ...r,
            ref: i,
            defaultValue: n
        })
    })
});
J0.displayName = "BubbleSelect";

function ey(e) {
    const t = It(e),
        n = _.useRef(""),
        r = _.useRef(0),
        o = _.useCallback(s => {
            const a = n.current + s;
            t(a),
                function l(u) {
                    n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3))
                }(a)
        }, [t]),
        i = _.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
        }, []);
    return _.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
}

function ty(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1;
    let s = ok(e, Math.max(i, 0));
    o.length === 1 && (s = s.filter(u => u !== n));
    const l = s.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}

function ok(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var ik = N0,
    ny = A0,
    sk = j0,
    ak = O0,
    lk = I0,
    ry = L0,
    uk = F0,
    oy = $0,
    iy = H0,
    ck = V0,
    dk = G0,
    sy = Y0,
    ay = Q0,
    ly = X0;
const ep = ik,
    tp = sk,
    _c = _.forwardRef(({
        className: e,
        children: t,
        ...n
    }, r) => x.jsxs(ny, {
        ref: r,
        className: rt("flex h-10 w-full items-center justify-between rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/40 [&>span]:line-clamp-1", e),
        ...n,
        children: [t, x.jsx(ak, {
            asChild: !0,
            children: x.jsx(kd, {
                className: "h-4 w-4 opacity-50"
            })
        })]
    }));
_c.displayName = ny.displayName;
const uy = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(sy, {
    ref: n,
    className: rt("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: x.jsx(Mx, {
        className: "h-4 w-4"
    })
}));
uy.displayName = sy.displayName;
const cy = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(ay, {
    ref: n,
    className: rt("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: x.jsx(kd, {
        className: "h-4 w-4"
    })
}));
cy.displayName = ay.displayName;
const Cc = _.forwardRef(({
    className: e,
    children: t,
    position: n = "popper",
    ...r
}, o) => x.jsx(lk, {
    children: x.jsxs(ry, {
        ref: o,
        className: rt("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-input bg-background text-foreground shadow-lg shadow-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [x.jsx(uy, {}), x.jsx(uk, {
            className: rt("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), x.jsx(cy, {})]
    })
}));
Cc.displayName = ry.displayName;
const fk = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(oy, {
    ref: n,
    className: rt("py-1.5 pl-4 pr-2 text-sm font-semibold text-foreground", e),
    ...t
}));
fk.displayName = oy.displayName;
const Ec = _.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => x.jsxs(iy, {
    ref: r,
    className: rt("relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm text-foreground outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent/50", e),
    ...n,
    children: [x.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: x.jsx(dk, {
            children: x.jsx(Lx, {
                className: "h-4 w-4"
            })
        })
    }), x.jsx(ck, {
        children: t
    })]
}));
Ec.displayName = iy.displayName;
const hk = _.forwardRef(({
    className: e,
    ...t
}, n) => x.jsx(ly, {
    ref: n,
    className: rt("my-1 h-px bg-muted", e),
    ...t
}));
hk.displayName = ly.displayName;

function pk() {
    const {
        theme: e,
        setTheme: t
    } = G_();
    return x.jsxs(Ne, {
        variant: "ghost",
        size: "icon",
        onClick: () => t(e === "light" ? "dark" : "light"),
        className: "rounded-full w-10 h-10 glass hover-glass",
        children: [x.jsx(Wx, {
            className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        }), x.jsx(Ux, {
            className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        }), x.jsx("span", {
            className: "sr-only",
            children: "Toggle theme"
        })]
    })
}
const $d = () => {
        const e = Bd(),
            [t, n] = _.useState(!1),
            r = () => {
                n(!t)
            };
        return x.jsxs("nav", {
            className: "w-full border-b z-50 bg-background/80 backdrop-blur-xl sticky top-0",
            children: [x.jsxs("div", {
                className: "container flex h-16 items-center justify-between px-4 md:px-6",
                children: [x.jsxs("div", {
                    className: "flex items-center gap-2 md:gap-4",
                    children: [x.jsx("span", {
                        className: "text-base md:text-lg font-semibold whitespace-nowrap",
                        children: "Daisuke Signer"
                    }), x.jsxs("div", {
                        className: "hidden md:flex items-center gap-2",
                        children: [x.jsx(Ne, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => e("/"),
                            className: "text-muted-foreground hover:text-foreground text-sm md:text-base whitespace-nowrap",
                            children: "Home"
                        }), x.jsx(Ne, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => e("/config"),
                            className: "text-muted-foreground hover:text-foreground text-sm md:text-base whitespace-nowrap",
                            children: "Configurations"
                        }), x.jsx(Ne, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => e("/credits"),
                            className: "text-muted-foreground hover:text-foreground text-sm md:text-base whitespace-nowrap",
                            children: "Credits"
                        })]
                    })]
                }), x.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [x.jsx(pk, {}), x.jsx(Ne, {
                        variant: "ghost",
                        size: "icon",
                        className: "md:hidden",
                        onClick: r,
                        children: t ? x.jsx(ov, {
                            className: "h-5 w-5"
                        }) : x.jsx(Fx, {
                            className: "h-5 w-5"
                        })
                    })]
                })]
            }), t && x.jsx("div", {
                className: "md:hidden p-4 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in",
                children: x.jsxs("div", {
                    className: "flex flex-col space-y-3",
                    children: [x.jsx(Ne, {
                        variant: "ghost",
                        onClick: () => {
                            e("/"), n(!1)
                        },
                        className: "justify-start",
                        children: "Home"
                    }), x.jsx(Ne, {
                        variant: "ghost",
                        onClick: () => {
                            e("/config"), n(!1)
                        },
                        className: "justify-start",
                        children: "Configurations"
                    }), x.jsx(Ne, {
                        variant: "ghost",
                        onClick: () => {
                            e("/credits"), n(!1)
                        },
                        className: "justify-start",
                        children: "Credits"
                    })]
                })
            })]
        })
    },
    Wd = () => {
        const n = dl().pathname === "/";
        return x.jsx("footer", {
            className: "mt-6 py-8 bg-background",
            children: x.jsx("div", {
                className: "container mx-auto text-center",
                children: n && x.jsxs(x.Fragment, {
                    children: [x.jsx("p", {
                        className: "text-3xl font-bold text-foreground mb-6",
                        children: "Made by Daisuke"
                    }), x.jsxs("div", {
                        className: "flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8",
                        children: [x.jsxs("a", {
                            href: "https://discord.gg/ipasign",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-3 w-full md:w-64 py-4 px-6 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 hover:border-[#5865F2]/40 transition-all duration-300 group",
                            children: [x.jsx(Bx, {
                                className: "w-8 h-8 text-[#5865F2] group-hover:scale-110 transition-transform duration-300"
                            }), x.jsxs("div", {
                                className: "flex flex-col items-start",
                                children: [x.jsx("span", {
                                    className: "text-lg font-medium text-foreground",
                                    children: "Join our Discord"
                                }), x.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Get help and updates"
                                })]
                            })]
                        }), x.jsxs("a", {
                            href: "https://youtube.com/@dai1228.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-3 w-full md:w-64 py-4 px-6 rounded-xl bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300 group",
                            children: [x.jsx(Hx, {
                                className: "w-8 h-8 text-[#FF0000] group-hover:scale-110 transition-transform duration-300"
                            }), x.jsxs("div", {
                                className: "flex flex-col items-start",
                                children: [x.jsx("span", {
                                    className: "text-lg font-medium text-foreground",
                                    children: "YouTube Channel"
                                }), x.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Watch tutorials"
                                })]
                            })]
                        })]
                    })]
                })
            })
        })
    };

function Is(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var dy = {
    exports: {}
};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, t) {
    (function(n) {
        e.exports = n()
    })(function() {
        return function n(r, o, i) {
            function s(u, m) {
                if (!o[u]) {
                    if (!r[u]) {
                        var h = typeof Is == "function" && Is;
                        if (!m && h) return h(u, !0);
                        if (a) return a(u, !0);
                        var c = new Error("Cannot find module '" + u + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var f = o[u] = {
                        exports: {}
                    };
                    r[u][0].call(f.exports, function(y) {
                        var d = r[u][1][y];
                        return s(d || y)
                    }, f, f.exports, n, r, o, i)
                }
                return o[u].exports
            }
            for (var a = typeof Is == "function" && Is, l = 0; l < i.length; l++) s(i[l]);
            return s
        }({
            1: [function(n, r, o) {
                var i = n("./utils"),
                    s = n("./support"),
                    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                o.encode = function(l) {
                    for (var u, m, h, c, f, y, d, v = [], p = 0, g = l.length, w = g, C = i.getTypeOf(l) !== "string"; p < l.length;) w = g - p, h = C ? (u = l[p++], m = p < g ? l[p++] : 0, p < g ? l[p++] : 0) : (u = l.charCodeAt(p++), m = p < g ? l.charCodeAt(p++) : 0, p < g ? l.charCodeAt(p++) : 0), c = u >> 2, f = (3 & u) << 4 | m >> 4, y = 1 < w ? (15 & m) << 2 | h >> 6 : 64, d = 2 < w ? 63 & h : 64, v.push(a.charAt(c) + a.charAt(f) + a.charAt(y) + a.charAt(d));
                    return v.join("")
                }, o.decode = function(l) {
                    var u, m, h, c, f, y, d = 0,
                        v = 0,
                        p = "data:";
                    if (l.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
                    var g, w = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                    if (l.charAt(l.length - 1) === a.charAt(64) && w--, l.charAt(l.length - 2) === a.charAt(64) && w--, w % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for (g = s.uint8array ? new Uint8Array(0 | w) : new Array(0 | w); d < l.length;) u = a.indexOf(l.charAt(d++)) << 2 | (c = a.indexOf(l.charAt(d++))) >> 4, m = (15 & c) << 4 | (f = a.indexOf(l.charAt(d++))) >> 2, h = (3 & f) << 6 | (y = a.indexOf(l.charAt(d++))), g[v++] = u, f !== 64 && (g[v++] = m), y !== 64 && (g[v++] = h);
                    return g
                }
            }, {
                "./support": 30,
                "./utils": 32
            }],
            2: [function(n, r, o) {
                var i = n("./external"),
                    s = n("./stream/DataWorker"),
                    a = n("./stream/Crc32Probe"),
                    l = n("./stream/DataLengthProbe");

                function u(m, h, c, f, y) {
                    this.compressedSize = m, this.uncompressedSize = h, this.crc32 = c, this.compression = f, this.compressedContent = y
                }
                u.prototype = {
                    getContentWorker: function() {
                        var m = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),
                            h = this;
                        return m.on("end", function() {
                            if (this.streamInfo.data_length !== h.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
                        }), m
                    },
                    getCompressedWorker: function() {
                        return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                    }
                }, u.createWorkerFrom = function(m, h, c) {
                    return m.pipe(new a).pipe(new l("uncompressedSize")).pipe(h.compressWorker(c)).pipe(new l("compressedSize")).withStreamInfo("compression", h)
                }, r.exports = u
            }, {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }],
            3: [function(n, r, o) {
                var i = n("./stream/GenericWorker");
                o.STORE = {
                    magic: "\0\0",
                    compressWorker: function() {
                        return new i("STORE compression")
                    },
                    uncompressWorker: function() {
                        return new i("STORE decompression")
                    }
                }, o.DEFLATE = n("./flate")
            }, {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }],
            4: [function(n, r, o) {
                var i = n("./utils"),
                    s = function() {
                        for (var a, l = [], u = 0; u < 256; u++) {
                            a = u;
                            for (var m = 0; m < 8; m++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
                            l[u] = a
                        }
                        return l
                    }();
                r.exports = function(a, l) {
                    return a !== void 0 && a.length ? i.getTypeOf(a) !== "string" ? function(u, m, h, c) {
                        var f = s,
                            y = c + h;
                        u ^= -1;
                        for (var d = c; d < y; d++) u = u >>> 8 ^ f[255 & (u ^ m[d])];
                        return -1 ^ u
                    }(0 | l, a, a.length, 0) : function(u, m, h, c) {
                        var f = s,
                            y = c + h;
                        u ^= -1;
                        for (var d = c; d < y; d++) u = u >>> 8 ^ f[255 & (u ^ m.charCodeAt(d))];
                        return -1 ^ u
                    }(0 | l, a, a.length, 0) : 0
                }
            }, {
                "./utils": 32
            }],
            5: [function(n, r, o) {
                o.base64 = !1, o.binary = !1, o.dir = !1, o.createFolders = !0, o.date = null, o.compression = null, o.compressionOptions = null, o.comment = null, o.unixPermissions = null, o.dosPermissions = null
            }, {}],
            6: [function(n, r, o) {
                var i = null;
                i = typeof Promise < "u" ? Promise : n("lie"), r.exports = {
                    Promise: i
                }
            }, {
                lie: 37
            }],
            7: [function(n, r, o) {
                var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u",
                    s = n("pako"),
                    a = n("./utils"),
                    l = n("./stream/GenericWorker"),
                    u = i ? "uint8array" : "array";

                function m(h, c) {
                    l.call(this, "FlateWorker/" + h), this._pako = null, this._pakoAction = h, this._pakoOptions = c, this.meta = {}
                }
                o.magic = "\b\0", a.inherits(m, l), m.prototype.processChunk = function(h) {
                    this.meta = h.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(u, h.data), !1)
                }, m.prototype.flush = function() {
                    l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0)
                }, m.prototype.cleanUp = function() {
                    l.prototype.cleanUp.call(this), this._pako = null
                }, m.prototype._createPako = function() {
                    this._pako = new s[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var h = this;
                    this._pako.onData = function(c) {
                        h.push({
                            data: c,
                            meta: h.meta
                        })
                    }
                }, o.compressWorker = function(h) {
                    return new m("Deflate", h)
                }, o.uncompressWorker = function() {
                    return new m("Inflate", {})
                }
            }, {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }],
            8: [function(n, r, o) {
                function i(f, y) {
                    var d, v = "";
                    for (d = 0; d < y; d++) v += String.fromCharCode(255 & f), f >>>= 8;
                    return v
                }

                function s(f, y, d, v, p, g) {
                    var w, C, E = f.file,
                        A = f.compression,
                        N = g !== u.utf8encode,
                        j = a.transformTo("string", g(E.name)),
                        I = a.transformTo("string", u.utf8encode(E.name)),
                        B = E.comment,
                        G = a.transformTo("string", g(B)),
                        k = a.transformTo("string", u.utf8encode(B)),
                        F = I.length !== E.name.length,
                        S = k.length !== B.length,
                        U = "",
                        X = "",
                        H = "",
                        D = E.dir,
                        z = E.date,
                        Y = {
                            crc32: 0,
                            compressedSize: 0,
                            uncompressedSize: 0
                        };
                    y && !d || (Y.crc32 = f.crc32, Y.compressedSize = f.compressedSize, Y.uncompressedSize = f.uncompressedSize);
                    var O = 0;
                    y && (O |= 8), N || !F && !S || (O |= 2048);
                    var L = 0,
                        te = 0;
                    D && (L |= 16), p === "UNIX" ? (te = 798, L |= function(V, J) {
                        var ee = V;
                        return V || (ee = J ? 16893 : 33204), (65535 & ee) << 16
                    }(E.unixPermissions, D)) : (te = 20, L |= function(V) {
                        return 63 & (V || 0)
                    }(E.dosPermissions)), w = z.getUTCHours(), w <<= 6, w |= z.getUTCMinutes(), w <<= 5, w |= z.getUTCSeconds() / 2, C = z.getUTCFullYear() - 1980, C <<= 4, C |= z.getUTCMonth() + 1, C <<= 5, C |= z.getUTCDate(), F && (X = i(1, 1) + i(m(j), 4) + I, U += "up" + i(X.length, 2) + X), S && (H = i(1, 1) + i(m(G), 4) + k, U += "uc" + i(H.length, 2) + H);
                    var R = "";
                    return R += `
\0`, R += i(O, 2), R += A.magic, R += i(w, 2), R += i(C, 2), R += i(Y.crc32, 4), R += i(Y.compressedSize, 4), R += i(Y.uncompressedSize, 4), R += i(j.length, 2), R += i(U.length, 2), {
                        fileRecord: h.LOCAL_FILE_HEADER + R + j + U,
                        dirRecord: h.CENTRAL_FILE_HEADER + i(te, 2) + R + i(G.length, 2) + "\0\0\0\0" + i(L, 4) + i(v, 4) + j + U + G
                    }
                }
                var a = n("../utils"),
                    l = n("../stream/GenericWorker"),
                    u = n("../utf8"),
                    m = n("../crc32"),
                    h = n("../signature");

                function c(f, y, d, v) {
                    l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = d, this.encodeFileName = v, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
                }
                a.inherits(c, l), c.prototype.push = function(f) {
                    var y = f.meta.percent || 0,
                        d = this.entriesCount,
                        v = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, l.prototype.push.call(this, {
                        data: f.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: d ? (y + 100 * (d - v - 1)) / d : 100
                        }
                    }))
                }, c.prototype.openedSource = function(f) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
                    var y = this.streamFiles && !f.file.dir;
                    if (y) {
                        var d = s(f, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: d.fileRecord,
                            meta: {
                                percent: 0
                            }
                        })
                    } else this.accumulate = !0
                }, c.prototype.closedSource = function(f) {
                    this.accumulate = !1;
                    var y = this.streamFiles && !f.file.dir,
                        d = s(f, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if (this.dirRecords.push(d.dirRecord), y) this.push({
                        data: function(v) {
                            return h.DATA_DESCRIPTOR + i(v.crc32, 4) + i(v.compressedSize, 4) + i(v.uncompressedSize, 4)
                        }(f),
                        meta: {
                            percent: 100
                        }
                    });
                    else
                        for (this.push({
                                data: d.fileRecord,
                                meta: {
                                    percent: 0
                                }
                            }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
                    this.currentFile = null
                }, c.prototype.flush = function() {
                    for (var f = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({
                        data: this.dirRecords[y],
                        meta: {
                            percent: 100
                        }
                    });
                    var d = this.bytesWritten - f,
                        v = function(p, g, w, C, E) {
                            var A = a.transformTo("string", E(C));
                            return h.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(p, 2) + i(p, 2) + i(g, 4) + i(w, 4) + i(A.length, 2) + A
                        }(this.dirRecords.length, d, f, this.zipComment, this.encodeFileName);
                    this.push({
                        data: v,
                        meta: {
                            percent: 100
                        }
                    })
                }, c.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
                }, c.prototype.registerPrevious = function(f) {
                    this._sources.push(f);
                    var y = this;
                    return f.on("data", function(d) {
                        y.processChunk(d)
                    }), f.on("end", function() {
                        y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end()
                    }), f.on("error", function(d) {
                        y.error(d)
                    }), this
                }, c.prototype.resume = function() {
                    return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
                }, c.prototype.error = function(f) {
                    var y = this._sources;
                    if (!l.prototype.error.call(this, f)) return !1;
                    for (var d = 0; d < y.length; d++) try {
                        y[d].error(f)
                    } catch {}
                    return !0
                }, c.prototype.lock = function() {
                    l.prototype.lock.call(this);
                    for (var f = this._sources, y = 0; y < f.length; y++) f[y].lock()
                }, r.exports = c
            }, {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }],
            9: [function(n, r, o) {
                var i = n("../compressions"),
                    s = n("./ZipFileWorker");
                o.generateWorker = function(a, l, u) {
                    var m = new s(l.streamFiles, u, l.platform, l.encodeFileName),
                        h = 0;
                    try {
                        a.forEach(function(c, f) {
                            h++;
                            var y = function(g, w) {
                                    var C = g || w,
                                        E = i[C];
                                    if (!E) throw new Error(C + " is not a valid compression method !");
                                    return E
                                }(f.options.compression, l.compression),
                                d = f.options.compressionOptions || l.compressionOptions || {},
                                v = f.dir,
                                p = f.date;
                            f._compressWorker(y, d).withStreamInfo("file", {
                                name: c,
                                dir: v,
                                date: p,
                                comment: f.comment || "",
                                unixPermissions: f.unixPermissions,
                                dosPermissions: f.dosPermissions
                            }).pipe(m)
                        }), m.entriesCount = h
                    } catch (c) {
                        m.error(c)
                    }
                    return m
                }
            }, {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }],
            10: [function(n, r, o) {
                function i() {
                    if (!(this instanceof i)) return new i;
                    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var s = new i;
                        for (var a in this) typeof this[a] != "function" && (s[a] = this[a]);
                        return s
                    }
                }(i.prototype = n("./object")).loadAsync = n("./load"), i.support = n("./support"), i.defaults = n("./defaults"), i.version = "3.10.1", i.loadAsync = function(s, a) {
                    return new i().loadAsync(s, a)
                }, i.external = n("./external"), r.exports = i
            }, {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }],
            11: [function(n, r, o) {
                var i = n("./utils"),
                    s = n("./external"),
                    a = n("./utf8"),
                    l = n("./zipEntries"),
                    u = n("./stream/Crc32Probe"),
                    m = n("./nodejsUtils");

                function h(c) {
                    return new s.Promise(function(f, y) {
                        var d = c.decompressed.getContentWorker().pipe(new u);
                        d.on("error", function(v) {
                            y(v)
                        }).on("end", function() {
                            d.streamInfo.crc32 !== c.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : f()
                        }).resume()
                    })
                }
                r.exports = function(c, f) {
                    var y = this;
                    return f = i.extend(f || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: a.utf8decode
                    }), m.isNode && m.isStream(c) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", c, !0, f.optimizedBinaryString, f.base64).then(function(d) {
                        var v = new l(f);
                        return v.load(d), v
                    }).then(function(d) {
                        var v = [s.Promise.resolve(d)],
                            p = d.files;
                        if (f.checkCRC32)
                            for (var g = 0; g < p.length; g++) v.push(h(p[g]));
                        return s.Promise.all(v)
                    }).then(function(d) {
                        for (var v = d.shift(), p = v.files, g = 0; g < p.length; g++) {
                            var w = p[g],
                                C = w.fileNameStr,
                                E = i.resolve(w.fileNameStr);
                            y.file(E, w.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: w.date,
                                dir: w.dir,
                                comment: w.fileCommentStr.length ? w.fileCommentStr : null,
                                unixPermissions: w.unixPermissions,
                                dosPermissions: w.dosPermissions,
                                createFolders: f.createFolders
                            }), w.dir || (y.file(E).unsafeOriginalName = C)
                        }
                        return v.zipComment.length && (y.comment = v.zipComment), y
                    })
                }
            }, {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }],
            12: [function(n, r, o) {
                var i = n("../utils"),
                    s = n("../stream/GenericWorker");

                function a(l, u) {
                    s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(u)
                }
                i.inherits(a, s), a.prototype._bindStream = function(l) {
                    var u = this;
                    (this._stream = l).pause(), l.on("data", function(m) {
                        u.push({
                            data: m,
                            meta: {
                                percent: 0
                            }
                        })
                    }).on("error", function(m) {
                        u.isPaused ? this.generatedError = m : u.error(m)
                    }).on("end", function() {
                        u.isPaused ? u._upstreamEnded = !0 : u.end()
                    })
                }, a.prototype.pause = function() {
                    return !!s.prototype.pause.call(this) && (this._stream.pause(), !0)
                }, a.prototype.resume = function() {
                    return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                }, r.exports = a
            }, {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }],
            13: [function(n, r, o) {
                var i = n("readable-stream").Readable;

                function s(a, l, u) {
                    i.call(this, l), this._helper = a;
                    var m = this;
                    a.on("data", function(h, c) {
                        m.push(h) || m._helper.pause(), u && u(c)
                    }).on("error", function(h) {
                        m.emit("error", h)
                    }).on("end", function() {
                        m.push(null)
                    })
                }
                n("../utils").inherits(s, i), s.prototype._read = function() {
                    this._helper.resume()
                }, r.exports = s
            }, {
                "../utils": 32,
                "readable-stream": 16
            }],
            14: [function(n, r, o) {
                r.exports = {
                    isNode: typeof Buffer < "u",
                    newBufferFrom: function(i, s) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, s);
                        if (typeof i == "number") throw new Error('The "data" argument must not be a number');
                        return new Buffer(i, s)
                    },
                    allocBuffer: function(i) {
                        if (Buffer.alloc) return Buffer.alloc(i);
                        var s = new Buffer(i);
                        return s.fill(0), s
                    },
                    isBuffer: function(i) {
                        return Buffer.isBuffer(i)
                    },
                    isStream: function(i) {
                        return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function"
                    }
                }
            }, {}],
            15: [function(n, r, o) {
                function i(E, A, N) {
                    var j, I = a.getTypeOf(A),
                        B = a.extend(N || {}, m);
                    B.date = B.date || new Date, B.compression !== null && (B.compression = B.compression.toUpperCase()), typeof B.unixPermissions == "string" && (B.unixPermissions = parseInt(B.unixPermissions, 8)), B.unixPermissions && 16384 & B.unixPermissions && (B.dir = !0), B.dosPermissions && 16 & B.dosPermissions && (B.dir = !0), B.dir && (E = p(E)), B.createFolders && (j = v(E)) && g.call(this, j, !0);
                    var G = I === "string" && B.binary === !1 && B.base64 === !1;
                    N && N.binary !== void 0 || (B.binary = !G), (A instanceof h && A.uncompressedSize === 0 || B.dir || !A || A.length === 0) && (B.base64 = !1, B.binary = !0, A = "", B.compression = "STORE", I = "string");
                    var k = null;
                    k = A instanceof h || A instanceof l ? A : y.isNode && y.isStream(A) ? new d(E, A) : a.prepareContent(E, A, B.binary, B.optimizedBinaryString, B.base64);
                    var F = new c(E, k, B);
                    this.files[E] = F
                }
                var s = n("./utf8"),
                    a = n("./utils"),
                    l = n("./stream/GenericWorker"),
                    u = n("./stream/StreamHelper"),
                    m = n("./defaults"),
                    h = n("./compressedObject"),
                    c = n("./zipObject"),
                    f = n("./generate"),
                    y = n("./nodejsUtils"),
                    d = n("./nodejs/NodejsStreamInputAdapter"),
                    v = function(E) {
                        E.slice(-1) === "/" && (E = E.substring(0, E.length - 1));
                        var A = E.lastIndexOf("/");
                        return 0 < A ? E.substring(0, A) : ""
                    },
                    p = function(E) {
                        return E.slice(-1) !== "/" && (E += "/"), E
                    },
                    g = function(E, A) {
                        return A = A !== void 0 ? A : m.createFolders, E = p(E), this.files[E] || i.call(this, E, null, {
                            dir: !0,
                            createFolders: A
                        }), this.files[E]
                    };

                function w(E) {
                    return Object.prototype.toString.call(E) === "[object RegExp]"
                }
                var C = {
                    load: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    },
                    forEach: function(E) {
                        var A, N, j;
                        for (A in this.files) j = this.files[A], (N = A.slice(this.root.length, A.length)) && A.slice(0, this.root.length) === this.root && E(N, j)
                    },
                    filter: function(E) {
                        var A = [];
                        return this.forEach(function(N, j) {
                            E(N, j) && A.push(j)
                        }), A
                    },
                    file: function(E, A, N) {
                        if (arguments.length !== 1) return E = this.root + E, i.call(this, E, A, N), this;
                        if (w(E)) {
                            var j = E;
                            return this.filter(function(B, G) {
                                return !G.dir && j.test(B)
                            })
                        }
                        var I = this.files[this.root + E];
                        return I && !I.dir ? I : null
                    },
                    folder: function(E) {
                        if (!E) return this;
                        if (w(E)) return this.filter(function(I, B) {
                            return B.dir && E.test(I)
                        });
                        var A = this.root + E,
                            N = g.call(this, A),
                            j = this.clone();
                        return j.root = N.name, j
                    },
                    remove: function(E) {
                        E = this.root + E;
                        var A = this.files[E];
                        if (A || (E.slice(-1) !== "/" && (E += "/"), A = this.files[E]), A && !A.dir) delete this.files[E];
                        else
                            for (var N = this.filter(function(I, B) {
                                    return B.name.slice(0, E.length) === E
                                }), j = 0; j < N.length; j++) delete this.files[N[j].name];
                        return this
                    },
                    generate: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    },
                    generateInternalStream: function(E) {
                        var A, N = {};
                        try {
                            if ((N = a.extend(E || {}, {
                                    streamFiles: !1,
                                    compression: "STORE",
                                    compressionOptions: null,
                                    type: "",
                                    platform: "DOS",
                                    comment: null,
                                    mimeType: "application/zip",
                                    encodeFileName: s.utf8encode
                                })).type = N.type.toLowerCase(), N.compression = N.compression.toUpperCase(), N.type === "binarystring" && (N.type = "string"), !N.type) throw new Error("No output type specified.");
                            a.checkSupport(N.type), N.platform !== "darwin" && N.platform !== "freebsd" && N.platform !== "linux" && N.platform !== "sunos" || (N.platform = "UNIX"), N.platform === "win32" && (N.platform = "DOS");
                            var j = N.comment || this.comment || "";
                            A = f.generateWorker(this, N, j)
                        } catch (I) {
                            (A = new l("error")).error(I)
                        }
                        return new u(A, N.type || "string", N.mimeType)
                    },
                    generateAsync: function(E, A) {
                        return this.generateInternalStream(E).accumulate(A)
                    },
                    generateNodeStream: function(E, A) {
                        return (E = E || {}).type || (E.type = "nodebuffer"), this.generateInternalStream(E).toNodejsStream(A)
                    }
                };
                r.exports = C
            }, {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }],
            16: [function(n, r, o) {
                r.exports = n("stream")
            }, {
                stream: void 0
            }],
            17: [function(n, r, o) {
                var i = n("./DataReader");

                function s(a) {
                    i.call(this, a);
                    for (var l = 0; l < this.data.length; l++) a[l] = 255 & a[l]
                }
                n("../utils").inherits(s, i), s.prototype.byteAt = function(a) {
                    return this.data[this.zero + a]
                }, s.prototype.lastIndexOfSignature = function(a) {
                    for (var l = a.charCodeAt(0), u = a.charCodeAt(1), m = a.charCodeAt(2), h = a.charCodeAt(3), c = this.length - 4; 0 <= c; --c)
                        if (this.data[c] === l && this.data[c + 1] === u && this.data[c + 2] === m && this.data[c + 3] === h) return c - this.zero;
                    return -1
                }, s.prototype.readAndCheckSignature = function(a) {
                    var l = a.charCodeAt(0),
                        u = a.charCodeAt(1),
                        m = a.charCodeAt(2),
                        h = a.charCodeAt(3),
                        c = this.readData(4);
                    return l === c[0] && u === c[1] && m === c[2] && h === c[3]
                }, s.prototype.readData = function(a) {
                    if (this.checkOffset(a), a === 0) return [];
                    var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
                    return this.index += a, l
                }, r.exports = s
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            18: [function(n, r, o) {
                var i = n("../utils");

                function s(a) {
                    this.data = a, this.length = a.length, this.index = 0, this.zero = 0
                }
                s.prototype = {
                    checkOffset: function(a) {
                        this.checkIndex(this.index + a)
                    },
                    checkIndex: function(a) {
                        if (this.length < this.zero + a || a < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?")
                    },
                    setIndex: function(a) {
                        this.checkIndex(a), this.index = a
                    },
                    skip: function(a) {
                        this.setIndex(this.index + a)
                    },
                    byteAt: function() {},
                    readInt: function(a) {
                        var l, u = 0;
                        for (this.checkOffset(a), l = this.index + a - 1; l >= this.index; l--) u = (u << 8) + this.byteAt(l);
                        return this.index += a, u
                    },
                    readString: function(a) {
                        return i.transformTo("string", this.readData(a))
                    },
                    readData: function() {},
                    lastIndexOfSignature: function() {},
                    readAndCheckSignature: function() {},
                    readDate: function() {
                        var a = this.readInt(4);
                        return new Date(Date.UTC(1980 + (a >> 25 & 127), (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1))
                    }
                }, r.exports = s
            }, {
                "../utils": 32
            }],
            19: [function(n, r, o) {
                var i = n("./Uint8ArrayReader");

                function s(a) {
                    i.call(this, a)
                }
                n("../utils").inherits(s, i), s.prototype.readData = function(a) {
                    this.checkOffset(a);
                    var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
                    return this.index += a, l
                }, r.exports = s
            }, {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }],
            20: [function(n, r, o) {
                var i = n("./DataReader");

                function s(a) {
                    i.call(this, a)
                }
                n("../utils").inherits(s, i), s.prototype.byteAt = function(a) {
                    return this.data.charCodeAt(this.zero + a)
                }, s.prototype.lastIndexOfSignature = function(a) {
                    return this.data.lastIndexOf(a) - this.zero
                }, s.prototype.readAndCheckSignature = function(a) {
                    return a === this.readData(4)
                }, s.prototype.readData = function(a) {
                    this.checkOffset(a);
                    var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
                    return this.index += a, l
                }, r.exports = s
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            21: [function(n, r, o) {
                var i = n("./ArrayReader");

                function s(a) {
                    i.call(this, a)
                }
                n("../utils").inherits(s, i), s.prototype.readData = function(a) {
                    if (this.checkOffset(a), a === 0) return new Uint8Array(0);
                    var l = this.data.subarray(this.zero + this.index, this.zero + this.index + a);
                    return this.index += a, l
                }, r.exports = s
            }, {
                "../utils": 32,
                "./ArrayReader": 17
            }],
            22: [function(n, r, o) {
                var i = n("../utils"),
                    s = n("../support"),
                    a = n("./ArrayReader"),
                    l = n("./StringReader"),
                    u = n("./NodeBufferReader"),
                    m = n("./Uint8ArrayReader");
                r.exports = function(h) {
                    var c = i.getTypeOf(h);
                    return i.checkSupport(c), c !== "string" || s.uint8array ? c === "nodebuffer" ? new u(h) : s.uint8array ? new m(i.transformTo("uint8array", h)) : new a(i.transformTo("array", h)) : new l(h)
                }
            }, {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }],
            23: [function(n, r, o) {
                o.LOCAL_FILE_HEADER = "PK", o.CENTRAL_FILE_HEADER = "PK", o.CENTRAL_DIRECTORY_END = "PK", o.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", o.ZIP64_CENTRAL_DIRECTORY_END = "PK", o.DATA_DESCRIPTOR = "PK\x07\b"
            }, {}],
            24: [function(n, r, o) {
                var i = n("./GenericWorker"),
                    s = n("../utils");

                function a(l) {
                    i.call(this, "ConvertWorker to " + l), this.destType = l
                }
                s.inherits(a, i), a.prototype.processChunk = function(l) {
                    this.push({
                        data: s.transformTo(this.destType, l.data),
                        meta: l.meta
                    })
                }, r.exports = a
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            25: [function(n, r, o) {
                var i = n("./GenericWorker"),
                    s = n("../crc32");

                function a() {
                    i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
                }
                n("../utils").inherits(a, i), a.prototype.processChunk = function(l) {
                    this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l)
                }, r.exports = a
            }, {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }],
            26: [function(n, r, o) {
                var i = n("../utils"),
                    s = n("./GenericWorker");

                function a(l) {
                    s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0)
                }
                i.inherits(a, s), a.prototype.processChunk = function(l) {
                    if (l) {
                        var u = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = u + l.data.length
                    }
                    s.prototype.processChunk.call(this, l)
                }, r.exports = a
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            27: [function(n, r, o) {
                var i = n("../utils"),
                    s = n("./GenericWorker");

                function a(l) {
                    s.call(this, "DataWorker");
                    var u = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(m) {
                        u.dataIsReady = !0, u.data = m, u.max = m && m.length || 0, u.type = i.getTypeOf(m), u.isPaused || u._tickAndRepeat()
                    }, function(m) {
                        u.error(m)
                    })
                }
                i.inherits(a, s), a.prototype.cleanUp = function() {
                    s.prototype.cleanUp.call(this), this.data = null
                }, a.prototype.resume = function() {
                    return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0)
                }, a.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
                }, a.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var l = null,
                        u = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch (this.type) {
                        case "string":
                            l = this.data.substring(this.index, u);
                            break;
                        case "uint8array":
                            l = this.data.subarray(this.index, u);
                            break;
                        case "array":
                        case "nodebuffer":
                            l = this.data.slice(this.index, u)
                    }
                    return this.index = u, this.push({
                        data: l,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    })
                }, r.exports = a
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            28: [function(n, r, o) {
                function i(s) {
                    this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null
                }
                i.prototype = {
                    push: function(s) {
                        this.emit("data", s)
                    },
                    end: function() {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0
                        } catch (s) {
                            this.emit("error", s)
                        }
                        return !0
                    },
                    error: function(s) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0)
                    },
                    on: function(s, a) {
                        return this._listeners[s].push(a), this
                    },
                    cleanUp: function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
                    },
                    emit: function(s, a) {
                        if (this._listeners[s])
                            for (var l = 0; l < this._listeners[s].length; l++) this._listeners[s][l].call(this, a)
                    },
                    pipe: function(s) {
                        return s.registerPrevious(this)
                    },
                    registerPrevious: function(s) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
                        var a = this;
                        return s.on("data", function(l) {
                            a.processChunk(l)
                        }), s.on("end", function() {
                            a.end()
                        }), s.on("error", function(l) {
                            a.error(l)
                        }), this
                    },
                    pause: function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
                    },
                    resume: function() {
                        if (!this.isPaused || this.isFinished) return !1;
                        var s = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s
                    },
                    flush: function() {},
                    processChunk: function(s) {
                        this.push(s)
                    },
                    withStreamInfo: function(s, a) {
                        return this.extraStreamInfo[s] = a, this.mergeStreamInfo(), this
                    },
                    mergeStreamInfo: function() {
                        for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s])
                    },
                    lock: function() {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock()
                    },
                    toString: function() {
                        var s = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + s : s
                    }
                }, r.exports = i
            }, {}],
            29: [function(n, r, o) {
                var i = n("../utils"),
                    s = n("./ConvertWorker"),
                    a = n("./GenericWorker"),
                    l = n("../base64"),
                    u = n("../support"),
                    m = n("../external"),
                    h = null;
                if (u.nodestream) try {
                    h = n("../nodejs/NodejsStreamOutputAdapter")
                } catch {}

                function c(y, d) {
                    return new m.Promise(function(v, p) {
                        var g = [],
                            w = y._internalType,
                            C = y._outputType,
                            E = y._mimeType;
                        y.on("data", function(A, N) {
                            g.push(A), d && d(N)
                        }).on("error", function(A) {
                            g = [], p(A)
                        }).on("end", function() {
                            try {
                                var A = function(N, j, I) {
                                    switch (N) {
                                        case "blob":
                                            return i.newBlob(i.transformTo("arraybuffer", j), I);
                                        case "base64":
                                            return l.encode(j);
                                        default:
                                            return i.transformTo(N, j)
                                    }
                                }(C, function(N, j) {
                                    var I, B = 0,
                                        G = null,
                                        k = 0;
                                    for (I = 0; I < j.length; I++) k += j[I].length;
                                    switch (N) {
                                        case "string":
                                            return j.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], j);
                                        case "uint8array":
                                            for (G = new Uint8Array(k), I = 0; I < j.length; I++) G.set(j[I], B), B += j[I].length;
                                            return G;
                                        case "nodebuffer":
                                            return Buffer.concat(j);
                                        default:
                                            throw new Error("concat : unsupported type '" + N + "'")
                                    }
                                }(w, g), E);
                                v(A)
                            } catch (N) {
                                p(N)
                            }
                            g = []
                        }).resume()
                    })
                }

                function f(y, d, v) {
                    var p = d;
                    switch (d) {
                        case "blob":
                        case "arraybuffer":
                            p = "uint8array";
                            break;
                        case "base64":
                            p = "string"
                    }
                    try {
                        this._internalType = p, this._outputType = d, this._mimeType = v, i.checkSupport(p), this._worker = y.pipe(new s(p)), y.lock()
                    } catch (g) {
                        this._worker = new a("error"), this._worker.error(g)
                    }
                }
                f.prototype = {
                    accumulate: function(y) {
                        return c(this, y)
                    },
                    on: function(y, d) {
                        var v = this;
                        return y === "data" ? this._worker.on(y, function(p) {
                            d.call(v, p.data, p.meta)
                        }) : this._worker.on(y, function() {
                            i.delay(d, arguments, v)
                        }), this
                    },
                    resume: function() {
                        return i.delay(this._worker.resume, [], this._worker), this
                    },
                    pause: function() {
                        return this._worker.pause(), this
                    },
                    toNodejsStream: function(y) {
                        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
                        return new h(this, {
                            objectMode: this._outputType !== "nodebuffer"
                        }, y)
                    }
                }, r.exports = f
            }, {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }],
            30: [function(n, r, o) {
                if (o.base64 = !0, o.array = !0, o.string = !0, o.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", o.nodebuffer = typeof Buffer < "u", o.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") o.blob = !1;
                else {
                    var i = new ArrayBuffer(0);
                    try {
                        o.blob = new Blob([i], {
                            type: "application/zip"
                        }).size === 0
                    } catch {
                        try {
                            var s = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            s.append(i), o.blob = s.getBlob("application/zip").size === 0
                        } catch {
                            o.blob = !1
                        }
                    }
                }
                try {
                    o.nodestream = !!n("readable-stream").Readable
                } catch {
                    o.nodestream = !1
                }
            }, {
                "readable-stream": 16
            }],
            31: [function(n, r, o) {
                for (var i = n("./utils"), s = n("./support"), a = n("./nodejsUtils"), l = n("./stream/GenericWorker"), u = new Array(256), m = 0; m < 256; m++) u[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
                u[254] = u[254] = 1;

                function h() {
                    l.call(this, "utf-8 decode"), this.leftOver = null
                }

                function c() {
                    l.call(this, "utf-8 encode")
                }
                o.utf8encode = function(f) {
                    return s.nodebuffer ? a.newBufferFrom(f, "utf-8") : function(y) {
                        var d, v, p, g, w, C = y.length,
                            E = 0;
                        for (g = 0; g < C; g++)(64512 & (v = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (p = y.charCodeAt(g + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), g++), E += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4;
                        for (d = s.uint8array ? new Uint8Array(E) : new Array(E), g = w = 0; w < E; g++)(64512 & (v = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (p = y.charCodeAt(g + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), g++), v < 128 ? d[w++] = v : (v < 2048 ? d[w++] = 192 | v >>> 6 : (v < 65536 ? d[w++] = 224 | v >>> 12 : (d[w++] = 240 | v >>> 18, d[w++] = 128 | v >>> 12 & 63), d[w++] = 128 | v >>> 6 & 63), d[w++] = 128 | 63 & v);
                        return d
                    }(f)
                }, o.utf8decode = function(f) {
                    return s.nodebuffer ? i.transformTo("nodebuffer", f).toString("utf-8") : function(y) {
                        var d, v, p, g, w = y.length,
                            C = new Array(2 * w);
                        for (d = v = 0; d < w;)
                            if ((p = y[d++]) < 128) C[v++] = p;
                            else if (4 < (g = u[p])) C[v++] = 65533, d += g - 1;
                        else {
                            for (p &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && d < w;) p = p << 6 | 63 & y[d++], g--;
                            1 < g ? C[v++] = 65533 : p < 65536 ? C[v++] = p : (p -= 65536, C[v++] = 55296 | p >> 10 & 1023, C[v++] = 56320 | 1023 & p)
                        }
                        return C.length !== v && (C.subarray ? C = C.subarray(0, v) : C.length = v), i.applyFromCharCode(C)
                    }(f = i.transformTo(s.uint8array ? "uint8array" : "array", f))
                }, i.inherits(h, l), h.prototype.processChunk = function(f) {
                    var y = i.transformTo(s.uint8array ? "uint8array" : "array", f.data);
                    if (this.leftOver && this.leftOver.length) {
                        if (s.uint8array) {
                            var d = y;
                            (y = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), y.set(d, this.leftOver.length)
                        } else y = this.leftOver.concat(y);
                        this.leftOver = null
                    }
                    var v = function(g, w) {
                            var C;
                            for ((w = w || g.length) > g.length && (w = g.length), C = w - 1; 0 <= C && (192 & g[C]) == 128;) C--;
                            return C < 0 || C === 0 ? w : C + u[g[C]] > w ? C : w
                        }(y),
                        p = y;
                    v !== y.length && (s.uint8array ? (p = y.subarray(0, v), this.leftOver = y.subarray(v, y.length)) : (p = y.slice(0, v), this.leftOver = y.slice(v, y.length))), this.push({
                        data: o.utf8decode(p),
                        meta: f.meta
                    })
                }, h.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: o.utf8decode(this.leftOver),
                        meta: {}
                    }), this.leftOver = null)
                }, o.Utf8DecodeWorker = h, i.inherits(c, l), c.prototype.processChunk = function(f) {
                    this.push({
                        data: o.utf8encode(f.data),
                        meta: f.meta
                    })
                }, o.Utf8EncodeWorker = c
            }, {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }],
            32: [function(n, r, o) {
                var i = n("./support"),
                    s = n("./base64"),
                    a = n("./nodejsUtils"),
                    l = n("./external");

                function u(d) {
                    return d
                }

                function m(d, v) {
                    for (var p = 0; p < d.length; ++p) v[p] = 255 & d.charCodeAt(p);
                    return v
                }
                n("setimmediate"), o.newBlob = function(d, v) {
                    o.checkSupport("blob");
                    try {
                        return new Blob([d], {
                            type: v
                        })
                    } catch {
                        try {
                            var p = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return p.append(d), p.getBlob(v)
                        } catch {
                            throw new Error("Bug : can't construct the Blob.")
                        }
                    }
                };
                var h = {
                    stringifyByChunk: function(d, v, p) {
                        var g = [],
                            w = 0,
                            C = d.length;
                        if (C <= p) return String.fromCharCode.apply(null, d);
                        for (; w < C;) v === "array" || v === "nodebuffer" ? g.push(String.fromCharCode.apply(null, d.slice(w, Math.min(w + p, C)))) : g.push(String.fromCharCode.apply(null, d.subarray(w, Math.min(w + p, C)))), w += p;
                        return g.join("")
                    },
                    stringifyByChar: function(d) {
                        for (var v = "", p = 0; p < d.length; p++) v += String.fromCharCode(d[p]);
                        return v
                    },
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                            } catch {
                                return !1
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return i.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1
                            } catch {
                                return !1
                            }
                        }()
                    }
                };

                function c(d) {
                    var v = 65536,
                        p = o.getTypeOf(d),
                        g = !0;
                    if (p === "uint8array" ? g = h.applyCanBeUsed.uint8array : p === "nodebuffer" && (g = h.applyCanBeUsed.nodebuffer), g)
                        for (; 1 < v;) try {
                            return h.stringifyByChunk(d, p, v)
                        } catch {
                            v = Math.floor(v / 2)
                        }
                    return h.stringifyByChar(d)
                }

                function f(d, v) {
                    for (var p = 0; p < d.length; p++) v[p] = d[p];
                    return v
                }
                o.applyFromCharCode = c;
                var y = {};
                y.string = {
                    string: u,
                    array: function(d) {
                        return m(d, new Array(d.length))
                    },
                    arraybuffer: function(d) {
                        return y.string.uint8array(d).buffer
                    },
                    uint8array: function(d) {
                        return m(d, new Uint8Array(d.length))
                    },
                    nodebuffer: function(d) {
                        return m(d, a.allocBuffer(d.length))
                    }
                }, y.array = {
                    string: c,
                    array: u,
                    arraybuffer: function(d) {
                        return new Uint8Array(d).buffer
                    },
                    uint8array: function(d) {
                        return new Uint8Array(d)
                    },
                    nodebuffer: function(d) {
                        return a.newBufferFrom(d)
                    }
                }, y.arraybuffer = {
                    string: function(d) {
                        return c(new Uint8Array(d))
                    },
                    array: function(d) {
                        return f(new Uint8Array(d), new Array(d.byteLength))
                    },
                    arraybuffer: u,
                    uint8array: function(d) {
                        return new Uint8Array(d)
                    },
                    nodebuffer: function(d) {
                        return a.newBufferFrom(new Uint8Array(d))
                    }
                }, y.uint8array = {
                    string: c,
                    array: function(d) {
                        return f(d, new Array(d.length))
                    },
                    arraybuffer: function(d) {
                        return d.buffer
                    },
                    uint8array: u,
                    nodebuffer: function(d) {
                        return a.newBufferFrom(d)
                    }
                }, y.nodebuffer = {
                    string: c,
                    array: function(d) {
                        return f(d, new Array(d.length))
                    },
                    arraybuffer: function(d) {
                        return y.nodebuffer.uint8array(d).buffer
                    },
                    uint8array: function(d) {
                        return f(d, new Uint8Array(d.length))
                    },
                    nodebuffer: u
                }, o.transformTo = function(d, v) {
                    if (v = v || "", !d) return v;
                    o.checkSupport(d);
                    var p = o.getTypeOf(v);
                    return y[p][d](v)
                }, o.resolve = function(d) {
                    for (var v = d.split("/"), p = [], g = 0; g < v.length; g++) {
                        var w = v[g];
                        w === "." || w === "" && g !== 0 && g !== v.length - 1 || (w === ".." ? p.pop() : p.push(w))
                    }
                    return p.join("/")
                }, o.getTypeOf = function(d) {
                    return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : i.nodebuffer && a.isBuffer(d) ? "nodebuffer" : i.uint8array && d instanceof Uint8Array ? "uint8array" : i.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0
                }, o.checkSupport = function(d) {
                    if (!i[d.toLowerCase()]) throw new Error(d + " is not supported by this platform")
                }, o.MAX_VALUE_16BITS = 65535, o.MAX_VALUE_32BITS = -1, o.pretty = function(d) {
                    var v, p, g = "";
                    for (p = 0; p < (d || "").length; p++) g += "\\x" + ((v = d.charCodeAt(p)) < 16 ? "0" : "") + v.toString(16).toUpperCase();
                    return g
                }, o.delay = function(d, v, p) {
                    setImmediate(function() {
                        d.apply(p || null, v || [])
                    })
                }, o.inherits = function(d, v) {
                    function p() {}
                    p.prototype = v.prototype, d.prototype = new p
                }, o.extend = function() {
                    var d, v, p = {};
                    for (d = 0; d < arguments.length; d++)
                        for (v in arguments[d]) Object.prototype.hasOwnProperty.call(arguments[d], v) && p[v] === void 0 && (p[v] = arguments[d][v]);
                    return p
                }, o.prepareContent = function(d, v, p, g, w) {
                    return l.Promise.resolve(v).then(function(C) {
                        return i.blob && (C instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(C)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(E, A) {
                            var N = new FileReader;
                            N.onload = function(j) {
                                E(j.target.result)
                            }, N.onerror = function(j) {
                                A(j.target.error)
                            }, N.readAsArrayBuffer(C)
                        }) : C
                    }).then(function(C) {
                        var E = o.getTypeOf(C);
                        return E ? (E === "arraybuffer" ? C = o.transformTo("uint8array", C) : E === "string" && (w ? C = s.decode(C) : p && g !== !0 && (C = function(A) {
                            return m(A, i.uint8array ? new Uint8Array(A.length) : new Array(A.length))
                        }(C))), C) : l.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                    })
                }
            }, {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                setimmediate: 54
            }],
            33: [function(n, r, o) {
                var i = n("./reader/readerFor"),
                    s = n("./utils"),
                    a = n("./signature"),
                    l = n("./zipEntry"),
                    u = n("./support");

                function m(h) {
                    this.files = [], this.loadOptions = h
                }
                m.prototype = {
                    checkSignature: function(h) {
                        if (!this.reader.readAndCheckSignature(h)) {
                            this.reader.index -= 4;
                            var c = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(c) + ", expected " + s.pretty(h) + ")")
                        }
                    },
                    isSignature: function(h, c) {
                        var f = this.reader.index;
                        this.reader.setIndex(h);
                        var y = this.reader.readString(4) === c;
                        return this.reader.setIndex(f), y
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var h = this.reader.readData(this.zipCommentLength),
                            c = u.uint8array ? "uint8array" : "array",
                            f = s.transformTo(c, h);
                        this.zipComment = this.loadOptions.decodeFileName(f)
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for (var h, c, f, y = this.zip64EndOfCentralSize - 44; 0 < y;) h = this.reader.readInt(2), c = this.reader.readInt(4), f = this.reader.readData(c), this.zip64ExtensibleData[h] = {
                            id: h,
                            length: c,
                            value: f
                        }
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
                    },
                    readLocalFiles: function() {
                        var h, c;
                        for (h = 0; h < this.files.length; h++) c = this.files[h], this.reader.setIndex(c.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), c.readLocalPart(this.reader), c.handleUTF8(), c.processAttributes()
                    },
                    readCentralDir: function() {
                        var h;
                        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h = new l({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(h);
                        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                    },
                    readEndOfCentral: function() {
                        var h = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
                        if (h < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                        this.reader.setIndex(h);
                        var c = h;
                        if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, (h = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if (this.reader.setIndex(h), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                        }
                        var f = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
                        var y = c - f;
                        if (0 < y) this.isSignature(c, a.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
                        else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.")
                    },
                    prepareReader: function(h) {
                        this.reader = i(h)
                    },
                    load: function(h) {
                        this.prepareReader(h), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                    }
                }, r.exports = m
            }, {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utils": 32,
                "./zipEntry": 34
            }],
            34: [function(n, r, o) {
                var i = n("./reader/readerFor"),
                    s = n("./utils"),
                    a = n("./compressedObject"),
                    l = n("./crc32"),
                    u = n("./utf8"),
                    m = n("./compressions"),
                    h = n("./support");

                function c(f, y) {
                    this.options = f, this.loadOptions = y
                }
                c.prototype = {
                    isEncrypted: function() {
                        return (1 & this.bitFlag) == 1
                    },
                    useUTF8: function() {
                        return (2048 & this.bitFlag) == 2048
                    },
                    readLocalPart: function(f) {
                        var y, d;
                        if (f.skip(22), this.fileNameLength = f.readInt(2), d = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if ((y = function(v) {
                                for (var p in m)
                                    if (Object.prototype.hasOwnProperty.call(m, p) && m[p].magic === v) return m[p];
                                return null
                            }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
                        this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, y, f.readData(this.compressedSize))
                    },
                    readCentralPart: function(f) {
                        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
                        var y = f.readInt(2);
                        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        f.skip(y), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength)
                    },
                    processAttributes: function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var f = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0)
                    },
                    parseZIP64ExtraField: function() {
                        if (this.extraFields[1]) {
                            var f = i(this.extraFields[1].value);
                            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4))
                        }
                    },
                    readExtraFields: function(f) {
                        var y, d, v, p = f.index + this.extraFieldsLength;
                        for (this.extraFields || (this.extraFields = {}); f.index + 4 < p;) y = f.readInt(2), d = f.readInt(2), v = f.readData(d), this.extraFields[y] = {
                            id: y,
                            length: d,
                            value: v
                        };
                        f.setIndex(p)
                    },
                    handleUTF8: function() {
                        var f = h.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = u.utf8decode(this.fileName), this.fileCommentStr = u.utf8decode(this.fileComment);
                        else {
                            var y = this.findExtraFieldUnicodePath();
                            if (y !== null) this.fileNameStr = y;
                            else {
                                var d = s.transformTo(f, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(d)
                            }
                            var v = this.findExtraFieldUnicodeComment();
                            if (v !== null) this.fileCommentStr = v;
                            else {
                                var p = s.transformTo(f, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(p)
                            }
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var f = this.extraFields[28789];
                        if (f) {
                            var y = i(f.value);
                            return y.readInt(1) !== 1 || l(this.fileName) !== y.readInt(4) ? null : u.utf8decode(y.readData(f.length - 5))
                        }
                        return null
                    },
                    findExtraFieldUnicodeComment: function() {
                        var f = this.extraFields[25461];
                        if (f) {
                            var y = i(f.value);
                            return y.readInt(1) !== 1 || l(this.fileComment) !== y.readInt(4) ? null : u.utf8decode(y.readData(f.length - 5))
                        }
                        return null
                    }
                }, r.exports = c
            }, {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }],
            35: [function(n, r, o) {
                function i(y, d, v) {
                    this.name = y, this.dir = v.dir, this.date = v.date, this.comment = v.comment, this.unixPermissions = v.unixPermissions, this.dosPermissions = v.dosPermissions, this._data = d, this._dataBinary = v.binary, this.options = {
                        compression: v.compression,
                        compressionOptions: v.compressionOptions
                    }
                }
                var s = n("./stream/StreamHelper"),
                    a = n("./stream/DataWorker"),
                    l = n("./utf8"),
                    u = n("./compressedObject"),
                    m = n("./stream/GenericWorker");
                i.prototype = {
                    internalStream: function(y) {
                        var d = null,
                            v = "string";
                        try {
                            if (!y) throw new Error("No output type specified.");
                            var p = (v = y.toLowerCase()) === "string" || v === "text";
                            v !== "binarystring" && v !== "text" || (v = "string"), d = this._decompressWorker();
                            var g = !this._dataBinary;
                            g && !p && (d = d.pipe(new l.Utf8EncodeWorker)), !g && p && (d = d.pipe(new l.Utf8DecodeWorker))
                        } catch (w) {
                            (d = new m("error")).error(w)
                        }
                        return new s(d, v, "")
                    },
                    async: function(y, d) {
                        return this.internalStream(y).accumulate(d)
                    },
                    nodeStream: function(y, d) {
                        return this.internalStream(y || "nodebuffer").toNodejsStream(d)
                    },
                    _compressWorker: function(y, d) {
                        if (this._data instanceof u && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
                        var v = this._decompressWorker();
                        return this._dataBinary || (v = v.pipe(new l.Utf8EncodeWorker)), u.createWorkerFrom(v, y, d)
                    },
                    _decompressWorker: function() {
                        return this._data instanceof u ? this._data.getContentWorker() : this._data instanceof m ? this._data : new a(this._data)
                    }
                };
                for (var h = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], c = function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    }, f = 0; f < h.length; f++) i.prototype[h[f]] = c;
                r.exports = i
            }, {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }],
            36: [function(n, r, o) {
                (function(i) {
                    var s, a, l = i.MutationObserver || i.WebKitMutationObserver;
                    if (l) {
                        var u = 0,
                            m = new l(y),
                            h = i.document.createTextNode("");
                        m.observe(h, {
                            characterData: !0
                        }), s = function() {
                            h.data = u = ++u % 2
                        }
                    } else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
                        var d = i.document.createElement("script");
                        d.onreadystatechange = function() {
                            y(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null
                        }, i.document.documentElement.appendChild(d)
                    } : function() {
                        setTimeout(y, 0)
                    };
                    else {
                        var c = new i.MessageChannel;
                        c.port1.onmessage = y, s = function() {
                            c.port2.postMessage(0)
                        }
                    }
                    var f = [];

                    function y() {
                        var d, v;
                        a = !0;
                        for (var p = f.length; p;) {
                            for (v = f, f = [], d = -1; ++d < p;) v[d]();
                            p = f.length
                        }
                        a = !1
                    }
                    r.exports = function(d) {
                        f.push(d) !== 1 || a || s()
                    }
                }).call(this, typeof as < "u" ? as : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}],
            37: [function(n, r, o) {
                var i = n("immediate");

                function s() {}
                var a = {},
                    l = ["REJECTED"],
                    u = ["FULFILLED"],
                    m = ["PENDING"];

                function h(p) {
                    if (typeof p != "function") throw new TypeError("resolver must be a function");
                    this.state = m, this.queue = [], this.outcome = void 0, p !== s && d(this, p)
                }

                function c(p, g, w) {
                    this.promise = p, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof w == "function" && (this.onRejected = w, this.callRejected = this.otherCallRejected)
                }

                function f(p, g, w) {
                    i(function() {
                        var C;
                        try {
                            C = g(w)
                        } catch (E) {
                            return a.reject(p, E)
                        }
                        C === p ? a.reject(p, new TypeError("Cannot resolve promise with itself")) : a.resolve(p, C)
                    })
                }

                function y(p) {
                    var g = p && p.then;
                    if (p && (typeof p == "object" || typeof p == "function") && typeof g == "function") return function() {
                        g.apply(p, arguments)
                    }
                }

                function d(p, g) {
                    var w = !1;

                    function C(N) {
                        w || (w = !0, a.reject(p, N))
                    }

                    function E(N) {
                        w || (w = !0, a.resolve(p, N))
                    }
                    var A = v(function() {
                        g(E, C)
                    });
                    A.status === "error" && C(A.value)
                }

                function v(p, g) {
                    var w = {};
                    try {
                        w.value = p(g), w.status = "success"
                    } catch (C) {
                        w.status = "error", w.value = C
                    }
                    return w
                }(r.exports = h).prototype.finally = function(p) {
                    if (typeof p != "function") return this;
                    var g = this.constructor;
                    return this.then(function(w) {
                        return g.resolve(p()).then(function() {
                            return w
                        })
                    }, function(w) {
                        return g.resolve(p()).then(function() {
                            throw w
                        })
                    })
                }, h.prototype.catch = function(p) {
                    return this.then(null, p)
                }, h.prototype.then = function(p, g) {
                    if (typeof p != "function" && this.state === u || typeof g != "function" && this.state === l) return this;
                    var w = new this.constructor(s);
                    return this.state !== m ? f(w, this.state === u ? p : g, this.outcome) : this.queue.push(new c(w, p, g)), w
                }, c.prototype.callFulfilled = function(p) {
                    a.resolve(this.promise, p)
                }, c.prototype.otherCallFulfilled = function(p) {
                    f(this.promise, this.onFulfilled, p)
                }, c.prototype.callRejected = function(p) {
                    a.reject(this.promise, p)
                }, c.prototype.otherCallRejected = function(p) {
                    f(this.promise, this.onRejected, p)
                }, a.resolve = function(p, g) {
                    var w = v(y, g);
                    if (w.status === "error") return a.reject(p, w.value);
                    var C = w.value;
                    if (C) d(p, C);
                    else {
                        p.state = u, p.outcome = g;
                        for (var E = -1, A = p.queue.length; ++E < A;) p.queue[E].callFulfilled(g)
                    }
                    return p
                }, a.reject = function(p, g) {
                    p.state = l, p.outcome = g;
                    for (var w = -1, C = p.queue.length; ++w < C;) p.queue[w].callRejected(g);
                    return p
                }, h.resolve = function(p) {
                    return p instanceof this ? p : a.resolve(new this(s), p)
                }, h.reject = function(p) {
                    var g = new this(s);
                    return a.reject(g, p)
                }, h.all = function(p) {
                    var g = this;
                    if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var w = p.length,
                        C = !1;
                    if (!w) return this.resolve([]);
                    for (var E = new Array(w), A = 0, N = -1, j = new this(s); ++N < w;) I(p[N], N);
                    return j;

                    function I(B, G) {
                        g.resolve(B).then(function(k) {
                            E[G] = k, ++A !== w || C || (C = !0, a.resolve(j, E))
                        }, function(k) {
                            C || (C = !0, a.reject(j, k))
                        })
                    }
                }, h.race = function(p) {
                    var g = this;
                    if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var w = p.length,
                        C = !1;
                    if (!w) return this.resolve([]);
                    for (var E = -1, A = new this(s); ++E < w;) N = p[E], g.resolve(N).then(function(j) {
                        C || (C = !0, a.resolve(A, j))
                    }, function(j) {
                        C || (C = !0, a.reject(A, j))
                    });
                    var N;
                    return A
                }
            }, {
                immediate: 36
            }],
            38: [function(n, r, o) {
                var i = {};
                (0, n("./lib/utils/common").assign)(i, n("./lib/deflate"), n("./lib/inflate"), n("./lib/zlib/constants")), r.exports = i
            }, {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }],
            39: [function(n, r, o) {
                var i = n("./zlib/deflate"),
                    s = n("./utils/common"),
                    a = n("./utils/strings"),
                    l = n("./zlib/messages"),
                    u = n("./zlib/zstream"),
                    m = Object.prototype.toString,
                    h = 0,
                    c = -1,
                    f = 0,
                    y = 8;

                function d(p) {
                    if (!(this instanceof d)) return new d(p);
                    this.options = s.assign({
                        level: c,
                        method: y,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: f,
                        to: ""
                    }, p || {});
                    var g = this.options;
                    g.raw && 0 < g.windowBits ? g.windowBits = -g.windowBits : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u, this.strm.avail_out = 0;
                    var w = i.deflateInit2(this.strm, g.level, g.method, g.windowBits, g.memLevel, g.strategy);
                    if (w !== h) throw new Error(l[w]);
                    if (g.header && i.deflateSetHeader(this.strm, g.header), g.dictionary) {
                        var C;
                        if (C = typeof g.dictionary == "string" ? a.string2buf(g.dictionary) : m.call(g.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(g.dictionary) : g.dictionary, (w = i.deflateSetDictionary(this.strm, C)) !== h) throw new Error(l[w]);
                        this._dict_set = !0
                    }
                }

                function v(p, g) {
                    var w = new d(g);
                    if (w.push(p, !0), w.err) throw w.msg || l[w.err];
                    return w.result
                }
                d.prototype.push = function(p, g) {
                    var w, C, E = this.strm,
                        A = this.options.chunkSize;
                    if (this.ended) return !1;
                    C = g === ~~g ? g : g === !0 ? 4 : 0, typeof p == "string" ? E.input = a.string2buf(p) : m.call(p) === "[object ArrayBuffer]" ? E.input = new Uint8Array(p) : E.input = p, E.next_in = 0, E.avail_in = E.input.length;
                    do {
                        if (E.avail_out === 0 && (E.output = new s.Buf8(A), E.next_out = 0, E.avail_out = A), (w = i.deflate(E, C)) !== 1 && w !== h) return this.onEnd(w), !(this.ended = !0);
                        E.avail_out !== 0 && (E.avail_in !== 0 || C !== 4 && C !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(E.output, E.next_out))) : this.onData(s.shrinkBuf(E.output, E.next_out)))
                    } while ((0 < E.avail_in || E.avail_out === 0) && w !== 1);
                    return C === 4 ? (w = i.deflateEnd(this.strm), this.onEnd(w), this.ended = !0, w === h) : C !== 2 || (this.onEnd(h), !(E.avail_out = 0))
                }, d.prototype.onData = function(p) {
                    this.chunks.push(p)
                }, d.prototype.onEnd = function(p) {
                    p === h && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg
                }, o.Deflate = d, o.deflate = v, o.deflateRaw = function(p, g) {
                    return (g = g || {}).raw = !0, v(p, g)
                }, o.gzip = function(p, g) {
                    return (g = g || {}).gzip = !0, v(p, g)
                }
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            40: [function(n, r, o) {
                var i = n("./zlib/inflate"),
                    s = n("./utils/common"),
                    a = n("./utils/strings"),
                    l = n("./zlib/constants"),
                    u = n("./zlib/messages"),
                    m = n("./zlib/zstream"),
                    h = n("./zlib/gzheader"),
                    c = Object.prototype.toString;

                function f(d) {
                    if (!(this instanceof f)) return new f(d);
                    this.options = s.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, d || {});
                    var v = this.options;
                    v.raw && 0 <= v.windowBits && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), !(0 <= v.windowBits && v.windowBits < 16) || d && d.windowBits || (v.windowBits += 32), 15 < v.windowBits && v.windowBits < 48 && !(15 & v.windowBits) && (v.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m, this.strm.avail_out = 0;
                    var p = i.inflateInit2(this.strm, v.windowBits);
                    if (p !== l.Z_OK) throw new Error(u[p]);
                    this.header = new h, i.inflateGetHeader(this.strm, this.header)
                }

                function y(d, v) {
                    var p = new f(v);
                    if (p.push(d, !0), p.err) throw p.msg || u[p.err];
                    return p.result
                }
                f.prototype.push = function(d, v) {
                    var p, g, w, C, E, A, N = this.strm,
                        j = this.options.chunkSize,
                        I = this.options.dictionary,
                        B = !1;
                    if (this.ended) return !1;
                    g = v === ~~v ? v : v === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof d == "string" ? N.input = a.binstring2buf(d) : c.call(d) === "[object ArrayBuffer]" ? N.input = new Uint8Array(d) : N.input = d, N.next_in = 0, N.avail_in = N.input.length;
                    do {
                        if (N.avail_out === 0 && (N.output = new s.Buf8(j), N.next_out = 0, N.avail_out = j), (p = i.inflate(N, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && I && (A = typeof I == "string" ? a.string2buf(I) : c.call(I) === "[object ArrayBuffer]" ? new Uint8Array(I) : I, p = i.inflateSetDictionary(this.strm, A)), p === l.Z_BUF_ERROR && B === !0 && (p = l.Z_OK, B = !1), p !== l.Z_STREAM_END && p !== l.Z_OK) return this.onEnd(p), !(this.ended = !0);
                        N.next_out && (N.avail_out !== 0 && p !== l.Z_STREAM_END && (N.avail_in !== 0 || g !== l.Z_FINISH && g !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (w = a.utf8border(N.output, N.next_out), C = N.next_out - w, E = a.buf2string(N.output, w), N.next_out = C, N.avail_out = j - C, C && s.arraySet(N.output, N.output, w, C, 0), this.onData(E)) : this.onData(s.shrinkBuf(N.output, N.next_out)))), N.avail_in === 0 && N.avail_out === 0 && (B = !0)
                    } while ((0 < N.avail_in || N.avail_out === 0) && p !== l.Z_STREAM_END);
                    return p === l.Z_STREAM_END && (g = l.Z_FINISH), g === l.Z_FINISH ? (p = i.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === l.Z_OK) : g !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(N.avail_out = 0))
                }, f.prototype.onData = function(d) {
                    this.chunks.push(d)
                }, f.prototype.onEnd = function(d) {
                    d === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg
                }, o.Inflate = f, o.inflate = y, o.inflateRaw = function(d, v) {
                    return (v = v || {}).raw = !0, y(d, v)
                }, o.ungzip = y
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            41: [function(n, r, o) {
                var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
                o.assign = function(l) {
                    for (var u = Array.prototype.slice.call(arguments, 1); u.length;) {
                        var m = u.shift();
                        if (m) {
                            if (typeof m != "object") throw new TypeError(m + "must be non-object");
                            for (var h in m) m.hasOwnProperty(h) && (l[h] = m[h])
                        }
                    }
                    return l
                }, o.shrinkBuf = function(l, u) {
                    return l.length === u ? l : l.subarray ? l.subarray(0, u) : (l.length = u, l)
                };
                var s = {
                        arraySet: function(l, u, m, h, c) {
                            if (u.subarray && l.subarray) l.set(u.subarray(m, m + h), c);
                            else
                                for (var f = 0; f < h; f++) l[c + f] = u[m + f]
                        },
                        flattenChunks: function(l) {
                            var u, m, h, c, f, y;
                            for (u = h = 0, m = l.length; u < m; u++) h += l[u].length;
                            for (y = new Uint8Array(h), u = c = 0, m = l.length; u < m; u++) f = l[u], y.set(f, c), c += f.length;
                            return y
                        }
                    },
                    a = {
                        arraySet: function(l, u, m, h, c) {
                            for (var f = 0; f < h; f++) l[c + f] = u[m + f]
                        },
                        flattenChunks: function(l) {
                            return [].concat.apply([], l)
                        }
                    };
                o.setTyped = function(l) {
                    l ? (o.Buf8 = Uint8Array, o.Buf16 = Uint16Array, o.Buf32 = Int32Array, o.assign(o, s)) : (o.Buf8 = Array, o.Buf16 = Array, o.Buf32 = Array, o.assign(o, a))
                }, o.setTyped(i)
            }, {}],
            42: [function(n, r, o) {
                var i = n("./common"),
                    s = !0,
                    a = !0;
                try {
                    String.fromCharCode.apply(null, [0])
                } catch {
                    s = !1
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                } catch {
                    a = !1
                }
                for (var l = new i.Buf8(256), u = 0; u < 256; u++) l[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;

                function m(h, c) {
                    if (c < 65537 && (h.subarray && a || !h.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(h, c));
                    for (var f = "", y = 0; y < c; y++) f += String.fromCharCode(h[y]);
                    return f
                }
                l[254] = l[254] = 1, o.string2buf = function(h) {
                    var c, f, y, d, v, p = h.length,
                        g = 0;
                    for (d = 0; d < p; d++)(64512 & (f = h.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = h.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), g += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
                    for (c = new i.Buf8(g), d = v = 0; v < g; d++)(64512 & (f = h.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = h.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), f < 128 ? c[v++] = f : (f < 2048 ? c[v++] = 192 | f >>> 6 : (f < 65536 ? c[v++] = 224 | f >>> 12 : (c[v++] = 240 | f >>> 18, c[v++] = 128 | f >>> 12 & 63), c[v++] = 128 | f >>> 6 & 63), c[v++] = 128 | 63 & f);
                    return c
                }, o.buf2binstring = function(h) {
                    return m(h, h.length)
                }, o.binstring2buf = function(h) {
                    for (var c = new i.Buf8(h.length), f = 0, y = c.length; f < y; f++) c[f] = h.charCodeAt(f);
                    return c
                }, o.buf2string = function(h, c) {
                    var f, y, d, v, p = c || h.length,
                        g = new Array(2 * p);
                    for (f = y = 0; f < p;)
                        if ((d = h[f++]) < 128) g[y++] = d;
                        else if (4 < (v = l[d])) g[y++] = 65533, f += v - 1;
                    else {
                        for (d &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && f < p;) d = d << 6 | 63 & h[f++], v--;
                        1 < v ? g[y++] = 65533 : d < 65536 ? g[y++] = d : (d -= 65536, g[y++] = 55296 | d >> 10 & 1023, g[y++] = 56320 | 1023 & d)
                    }
                    return m(g, y)
                }, o.utf8border = function(h, c) {
                    var f;
                    for ((c = c || h.length) > h.length && (c = h.length), f = c - 1; 0 <= f && (192 & h[f]) == 128;) f--;
                    return f < 0 || f === 0 ? c : f + l[h[f]] > c ? f : c
                }
            }, {
                "./common": 41
            }],
            43: [function(n, r, o) {
                r.exports = function(i, s, a, l) {
                    for (var u = 65535 & i | 0, m = i >>> 16 & 65535 | 0, h = 0; a !== 0;) {
                        for (a -= h = 2e3 < a ? 2e3 : a; m = m + (u = u + s[l++] | 0) | 0, --h;);
                        u %= 65521, m %= 65521
                    }
                    return u | m << 16 | 0
                }
            }, {}],
            44: [function(n, r, o) {
                r.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                }
            }, {}],
            45: [function(n, r, o) {
                var i = function() {
                    for (var s, a = [], l = 0; l < 256; l++) {
                        s = l;
                        for (var u = 0; u < 8; u++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                        a[l] = s
                    }
                    return a
                }();
                r.exports = function(s, a, l, u) {
                    var m = i,
                        h = u + l;
                    s ^= -1;
                    for (var c = u; c < h; c++) s = s >>> 8 ^ m[255 & (s ^ a[c])];
                    return -1 ^ s
                }
            }, {}],
            46: [function(n, r, o) {
                var i, s = n("../utils/common"),
                    a = n("./trees"),
                    l = n("./adler32"),
                    u = n("./crc32"),
                    m = n("./messages"),
                    h = 0,
                    c = 4,
                    f = 0,
                    y = -2,
                    d = -1,
                    v = 4,
                    p = 2,
                    g = 8,
                    w = 9,
                    C = 286,
                    E = 30,
                    A = 19,
                    N = 2 * C + 1,
                    j = 15,
                    I = 3,
                    B = 258,
                    G = B + I + 1,
                    k = 42,
                    F = 113,
                    S = 1,
                    U = 2,
                    X = 3,
                    H = 4;

                function D(b, K) {
                    return b.msg = m[K], K
                }

                function z(b) {
                    return (b << 1) - (4 < b ? 9 : 0)
                }

                function Y(b) {
                    for (var K = b.length; 0 <= --K;) b[K] = 0
                }

                function O(b) {
                    var K = b.state,
                        W = K.pending;
                    W > b.avail_out && (W = b.avail_out), W !== 0 && (s.arraySet(b.output, K.pending_buf, K.pending_out, W, b.next_out), b.next_out += W, K.pending_out += W, b.total_out += W, b.avail_out -= W, K.pending -= W, K.pending === 0 && (K.pending_out = 0))
                }

                function L(b, K) {
                    a._tr_flush_block(b, 0 <= b.block_start ? b.block_start : -1, b.strstart - b.block_start, K), b.block_start = b.strstart, O(b.strm)
                }

                function te(b, K) {
                    b.pending_buf[b.pending++] = K
                }

                function R(b, K) {
                    b.pending_buf[b.pending++] = K >>> 8 & 255, b.pending_buf[b.pending++] = 255 & K
                }

                function V(b, K) {
                    var W, P, T = b.max_chain_length,
                        M = b.strstart,
                        Q = b.prev_length,
                        q = b.nice_match,
                        $ = b.strstart > b.w_size - G ? b.strstart - (b.w_size - G) : 0,
                        re = b.window,
                        ae = b.w_mask,
                        ie = b.prev,
                        ce = b.strstart + B,
                        be = re[M + Q - 1],
                        ye = re[M + Q];
                    b.prev_length >= b.good_match && (T >>= 2), q > b.lookahead && (q = b.lookahead);
                    do
                        if (re[(W = K) + Q] === ye && re[W + Q - 1] === be && re[W] === re[M] && re[++W] === re[M + 1]) {
                            M += 2, W++;
                            do; while (re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && re[++M] === re[++W] && M < ce);
                            if (P = B - (ce - M), M = ce - B, Q < P) {
                                if (b.match_start = K, q <= (Q = P)) break;
                                be = re[M + Q - 1], ye = re[M + Q]
                            }
                        }
                    while ((K = ie[K & ae]) > $ && --T != 0);
                    return Q <= b.lookahead ? Q : b.lookahead
                }

                function J(b) {
                    var K, W, P, T, M, Q, q, $, re, ae, ie = b.w_size;
                    do {
                        if (T = b.window_size - b.lookahead - b.strstart, b.strstart >= ie + (ie - G)) {
                            for (s.arraySet(b.window, b.window, ie, ie, 0), b.match_start -= ie, b.strstart -= ie, b.block_start -= ie, K = W = b.hash_size; P = b.head[--K], b.head[K] = ie <= P ? P - ie : 0, --W;);
                            for (K = W = ie; P = b.prev[--K], b.prev[K] = ie <= P ? P - ie : 0, --W;);
                            T += ie
                        }
                        if (b.strm.avail_in === 0) break;
                        if (Q = b.strm, q = b.window, $ = b.strstart + b.lookahead, re = T, ae = void 0, ae = Q.avail_in, re < ae && (ae = re), W = ae === 0 ? 0 : (Q.avail_in -= ae, s.arraySet(q, Q.input, Q.next_in, ae, $), Q.state.wrap === 1 ? Q.adler = l(Q.adler, q, ae, $) : Q.state.wrap === 2 && (Q.adler = u(Q.adler, q, ae, $)), Q.next_in += ae, Q.total_in += ae, ae), b.lookahead += W, b.lookahead + b.insert >= I)
                            for (M = b.strstart - b.insert, b.ins_h = b.window[M], b.ins_h = (b.ins_h << b.hash_shift ^ b.window[M + 1]) & b.hash_mask; b.insert && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[M + I - 1]) & b.hash_mask, b.prev[M & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = M, M++, b.insert--, !(b.lookahead + b.insert < I)););
                    } while (b.lookahead < G && b.strm.avail_in !== 0)
                }

                function ee(b, K) {
                    for (var W, P;;) {
                        if (b.lookahead < G) {
                            if (J(b), b.lookahead < G && K === h) return S;
                            if (b.lookahead === 0) break
                        }
                        if (W = 0, b.lookahead >= I && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + I - 1]) & b.hash_mask, W = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart), W !== 0 && b.strstart - W <= b.w_size - G && (b.match_length = V(b, W)), b.match_length >= I)
                            if (P = a._tr_tally(b, b.strstart - b.match_start, b.match_length - I), b.lookahead -= b.match_length, b.match_length <= b.max_lazy_match && b.lookahead >= I) {
                                for (b.match_length--; b.strstart++, b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + I - 1]) & b.hash_mask, W = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart, --b.match_length != 0;);
                                b.strstart++
                            } else b.strstart += b.match_length, b.match_length = 0, b.ins_h = b.window[b.strstart], b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + 1]) & b.hash_mask;
                        else P = a._tr_tally(b, 0, b.window[b.strstart]), b.lookahead--, b.strstart++;
                        if (P && (L(b, !1), b.strm.avail_out === 0)) return S
                    }
                    return b.insert = b.strstart < I - 1 ? b.strstart : I - 1, K === c ? (L(b, !0), b.strm.avail_out === 0 ? X : H) : b.last_lit && (L(b, !1), b.strm.avail_out === 0) ? S : U
                }

                function oe(b, K) {
                    for (var W, P, T;;) {
                        if (b.lookahead < G) {
                            if (J(b), b.lookahead < G && K === h) return S;
                            if (b.lookahead === 0) break
                        }
                        if (W = 0, b.lookahead >= I && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + I - 1]) & b.hash_mask, W = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart), b.prev_length = b.match_length, b.prev_match = b.match_start, b.match_length = I - 1, W !== 0 && b.prev_length < b.max_lazy_match && b.strstart - W <= b.w_size - G && (b.match_length = V(b, W), b.match_length <= 5 && (b.strategy === 1 || b.match_length === I && 4096 < b.strstart - b.match_start) && (b.match_length = I - 1)), b.prev_length >= I && b.match_length <= b.prev_length) {
                            for (T = b.strstart + b.lookahead - I, P = a._tr_tally(b, b.strstart - 1 - b.prev_match, b.prev_length - I), b.lookahead -= b.prev_length - 1, b.prev_length -= 2; ++b.strstart <= T && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + I - 1]) & b.hash_mask, W = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart), --b.prev_length != 0;);
                            if (b.match_available = 0, b.match_length = I - 1, b.strstart++, P && (L(b, !1), b.strm.avail_out === 0)) return S
                        } else if (b.match_available) {
                            if ((P = a._tr_tally(b, 0, b.window[b.strstart - 1])) && L(b, !1), b.strstart++, b.lookahead--, b.strm.avail_out === 0) return S
                        } else b.match_available = 1, b.strstart++, b.lookahead--
                    }
                    return b.match_available && (P = a._tr_tally(b, 0, b.window[b.strstart - 1]), b.match_available = 0), b.insert = b.strstart < I - 1 ? b.strstart : I - 1, K === c ? (L(b, !0), b.strm.avail_out === 0 ? X : H) : b.last_lit && (L(b, !1), b.strm.avail_out === 0) ? S : U
                }

                function ue(b, K, W, P, T) {
                    this.good_length = b, this.max_lazy = K, this.nice_length = W, this.max_chain = P, this.func = T
                }

                function de() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * N), this.dyn_dtree = new s.Buf16(2 * (2 * E + 1)), this.bl_tree = new s.Buf16(2 * (2 * A + 1)), Y(this.dyn_ltree), Y(this.dyn_dtree), Y(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(j + 1), this.heap = new s.Buf16(2 * C + 1), Y(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * C + 1), Y(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                }

                function fe(b) {
                    var K;
                    return b && b.state ? (b.total_in = b.total_out = 0, b.data_type = p, (K = b.state).pending = 0, K.pending_out = 0, K.wrap < 0 && (K.wrap = -K.wrap), K.status = K.wrap ? k : F, b.adler = K.wrap === 2 ? 0 : 1, K.last_flush = h, a._tr_init(K), f) : D(b, y)
                }

                function he(b) {
                    var K = fe(b);
                    return K === f && function(W) {
                        W.window_size = 2 * W.w_size, Y(W.head), W.max_lazy_match = i[W.level].max_lazy, W.good_match = i[W.level].good_length, W.nice_match = i[W.level].nice_length, W.max_chain_length = i[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = I - 1, W.match_available = 0, W.ins_h = 0
                    }(b.state), K
                }

                function ke(b, K, W, P, T, M) {
                    if (!b) return y;
                    var Q = 1;
                    if (K === d && (K = 6), P < 0 ? (Q = 0, P = -P) : 15 < P && (Q = 2, P -= 16), T < 1 || w < T || W !== g || P < 8 || 15 < P || K < 0 || 9 < K || M < 0 || v < M) return D(b, y);
                    P === 8 && (P = 9);
                    var q = new de;
                    return (b.state = q).strm = b, q.wrap = Q, q.gzhead = null, q.w_bits = P, q.w_size = 1 << q.w_bits, q.w_mask = q.w_size - 1, q.hash_bits = T + 7, q.hash_size = 1 << q.hash_bits, q.hash_mask = q.hash_size - 1, q.hash_shift = ~~((q.hash_bits + I - 1) / I), q.window = new s.Buf8(2 * q.w_size), q.head = new s.Buf16(q.hash_size), q.prev = new s.Buf16(q.w_size), q.lit_bufsize = 1 << T + 6, q.pending_buf_size = 4 * q.lit_bufsize, q.pending_buf = new s.Buf8(q.pending_buf_size), q.d_buf = 1 * q.lit_bufsize, q.l_buf = 3 * q.lit_bufsize, q.level = K, q.strategy = M, q.method = W, he(b)
                }
                i = [new ue(0, 0, 0, 0, function(b, K) {
                    var W = 65535;
                    for (W > b.pending_buf_size - 5 && (W = b.pending_buf_size - 5);;) {
                        if (b.lookahead <= 1) {
                            if (J(b), b.lookahead === 0 && K === h) return S;
                            if (b.lookahead === 0) break
                        }
                        b.strstart += b.lookahead, b.lookahead = 0;
                        var P = b.block_start + W;
                        if ((b.strstart === 0 || b.strstart >= P) && (b.lookahead = b.strstart - P, b.strstart = P, L(b, !1), b.strm.avail_out === 0) || b.strstart - b.block_start >= b.w_size - G && (L(b, !1), b.strm.avail_out === 0)) return S
                    }
                    return b.insert = 0, K === c ? (L(b, !0), b.strm.avail_out === 0 ? X : H) : (b.strstart > b.block_start && (L(b, !1), b.strm.avail_out), S)
                }), new ue(4, 4, 8, 4, ee), new ue(4, 5, 16, 8, ee), new ue(4, 6, 32, 32, ee), new ue(4, 4, 16, 16, oe), new ue(8, 16, 32, 32, oe), new ue(8, 16, 128, 128, oe), new ue(8, 32, 128, 256, oe), new ue(32, 128, 258, 1024, oe), new ue(32, 258, 258, 4096, oe)], o.deflateInit = function(b, K) {
                    return ke(b, K, g, 15, 8, 0)
                }, o.deflateInit2 = ke, o.deflateReset = he, o.deflateResetKeep = fe, o.deflateSetHeader = function(b, K) {
                    return b && b.state ? b.state.wrap !== 2 ? y : (b.state.gzhead = K, f) : y
                }, o.deflate = function(b, K) {
                    var W, P, T, M;
                    if (!b || !b.state || 5 < K || K < 0) return b ? D(b, y) : y;
                    if (P = b.state, !b.output || !b.input && b.avail_in !== 0 || P.status === 666 && K !== c) return D(b, b.avail_out === 0 ? -5 : y);
                    if (P.strm = b, W = P.last_flush, P.last_flush = K, P.status === k)
                        if (P.wrap === 2) b.adler = 0, te(P, 31), te(P, 139), te(P, 8), P.gzhead ? (te(P, (P.gzhead.text ? 1 : 0) + (P.gzhead.hcrc ? 2 : 0) + (P.gzhead.extra ? 4 : 0) + (P.gzhead.name ? 8 : 0) + (P.gzhead.comment ? 16 : 0)), te(P, 255 & P.gzhead.time), te(P, P.gzhead.time >> 8 & 255), te(P, P.gzhead.time >> 16 & 255), te(P, P.gzhead.time >> 24 & 255), te(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), te(P, 255 & P.gzhead.os), P.gzhead.extra && P.gzhead.extra.length && (te(P, 255 & P.gzhead.extra.length), te(P, P.gzhead.extra.length >> 8 & 255)), P.gzhead.hcrc && (b.adler = u(b.adler, P.pending_buf, P.pending, 0)), P.gzindex = 0, P.status = 69) : (te(P, 0), te(P, 0), te(P, 0), te(P, 0), te(P, 0), te(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), te(P, 3), P.status = F);
                        else {
                            var Q = g + (P.w_bits - 8 << 4) << 8;
                            Q |= (2 <= P.strategy || P.level < 2 ? 0 : P.level < 6 ? 1 : P.level === 6 ? 2 : 3) << 6, P.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, P.status = F, R(P, Q), P.strstart !== 0 && (R(P, b.adler >>> 16), R(P, 65535 & b.adler)), b.adler = 1
                        }
                    if (P.status === 69)
                        if (P.gzhead.extra) {
                            for (T = P.pending; P.gzindex < (65535 & P.gzhead.extra.length) && (P.pending !== P.pending_buf_size || (P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), O(b), T = P.pending, P.pending !== P.pending_buf_size));) te(P, 255 & P.gzhead.extra[P.gzindex]), P.gzindex++;
                            P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), P.gzindex === P.gzhead.extra.length && (P.gzindex = 0, P.status = 73)
                        } else P.status = 73;
                    if (P.status === 73)
                        if (P.gzhead.name) {
                            T = P.pending;
                            do {
                                if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), O(b), T = P.pending, P.pending === P.pending_buf_size)) {
                                    M = 1;
                                    break
                                }
                                M = P.gzindex < P.gzhead.name.length ? 255 & P.gzhead.name.charCodeAt(P.gzindex++) : 0, te(P, M)
                            } while (M !== 0);
                            P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), M === 0 && (P.gzindex = 0, P.status = 91)
                        } else P.status = 91;
                    if (P.status === 91)
                        if (P.gzhead.comment) {
                            T = P.pending;
                            do {
                                if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), O(b), T = P.pending, P.pending === P.pending_buf_size)) {
                                    M = 1;
                                    break
                                }
                                M = P.gzindex < P.gzhead.comment.length ? 255 & P.gzhead.comment.charCodeAt(P.gzindex++) : 0, te(P, M)
                            } while (M !== 0);
                            P.gzhead.hcrc && P.pending > T && (b.adler = u(b.adler, P.pending_buf, P.pending - T, T)), M === 0 && (P.status = 103)
                        } else P.status = 103;
                    if (P.status === 103 && (P.gzhead.hcrc ? (P.pending + 2 > P.pending_buf_size && O(b), P.pending + 2 <= P.pending_buf_size && (te(P, 255 & b.adler), te(P, b.adler >> 8 & 255), b.adler = 0, P.status = F)) : P.status = F), P.pending !== 0) {
                        if (O(b), b.avail_out === 0) return P.last_flush = -1, f
                    } else if (b.avail_in === 0 && z(K) <= z(W) && K !== c) return D(b, -5);
                    if (P.status === 666 && b.avail_in !== 0) return D(b, -5);
                    if (b.avail_in !== 0 || P.lookahead !== 0 || K !== h && P.status !== 666) {
                        var q = P.strategy === 2 ? function($, re) {
                            for (var ae;;) {
                                if ($.lookahead === 0 && (J($), $.lookahead === 0)) {
                                    if (re === h) return S;
                                    break
                                }
                                if ($.match_length = 0, ae = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++, ae && (L($, !1), $.strm.avail_out === 0)) return S
                            }
                            return $.insert = 0, re === c ? (L($, !0), $.strm.avail_out === 0 ? X : H) : $.last_lit && (L($, !1), $.strm.avail_out === 0) ? S : U
                        }(P, K) : P.strategy === 3 ? function($, re) {
                            for (var ae, ie, ce, be, ye = $.window;;) {
                                if ($.lookahead <= B) {
                                    if (J($), $.lookahead <= B && re === h) return S;
                                    if ($.lookahead === 0) break
                                }
                                if ($.match_length = 0, $.lookahead >= I && 0 < $.strstart && (ie = ye[ce = $.strstart - 1]) === ye[++ce] && ie === ye[++ce] && ie === ye[++ce]) {
                                    be = $.strstart + B;
                                    do; while (ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ie === ye[++ce] && ce < be);
                                    $.match_length = B - (be - ce), $.match_length > $.lookahead && ($.match_length = $.lookahead)
                                }
                                if ($.match_length >= I ? (ae = a._tr_tally($, 1, $.match_length - I), $.lookahead -= $.match_length, $.strstart += $.match_length, $.match_length = 0) : (ae = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++), ae && (L($, !1), $.strm.avail_out === 0)) return S
                            }
                            return $.insert = 0, re === c ? (L($, !0), $.strm.avail_out === 0 ? X : H) : $.last_lit && (L($, !1), $.strm.avail_out === 0) ? S : U
                        }(P, K) : i[P.level].func(P, K);
                        if (q !== X && q !== H || (P.status = 666), q === S || q === X) return b.avail_out === 0 && (P.last_flush = -1), f;
                        if (q === U && (K === 1 ? a._tr_align(P) : K !== 5 && (a._tr_stored_block(P, 0, 0, !1), K === 3 && (Y(P.head), P.lookahead === 0 && (P.strstart = 0, P.block_start = 0, P.insert = 0))), O(b), b.avail_out === 0)) return P.last_flush = -1, f
                    }
                    return K !== c ? f : P.wrap <= 0 ? 1 : (P.wrap === 2 ? (te(P, 255 & b.adler), te(P, b.adler >> 8 & 255), te(P, b.adler >> 16 & 255), te(P, b.adler >> 24 & 255), te(P, 255 & b.total_in), te(P, b.total_in >> 8 & 255), te(P, b.total_in >> 16 & 255), te(P, b.total_in >> 24 & 255)) : (R(P, b.adler >>> 16), R(P, 65535 & b.adler)), O(b), 0 < P.wrap && (P.wrap = -P.wrap), P.pending !== 0 ? f : 1)
                }, o.deflateEnd = function(b) {
                    var K;
                    return b && b.state ? (K = b.state.status) !== k && K !== 69 && K !== 73 && K !== 91 && K !== 103 && K !== F && K !== 666 ? D(b, y) : (b.state = null, K === F ? D(b, -3) : f) : y
                }, o.deflateSetDictionary = function(b, K) {
                    var W, P, T, M, Q, q, $, re, ae = K.length;
                    if (!b || !b.state || (M = (W = b.state).wrap) === 2 || M === 1 && W.status !== k || W.lookahead) return y;
                    for (M === 1 && (b.adler = l(b.adler, K, ae, 0)), W.wrap = 0, ae >= W.w_size && (M === 0 && (Y(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), re = new s.Buf8(W.w_size), s.arraySet(re, K, ae - W.w_size, W.w_size, 0), K = re, ae = W.w_size), Q = b.avail_in, q = b.next_in, $ = b.input, b.avail_in = ae, b.next_in = 0, b.input = K, J(W); W.lookahead >= I;) {
                        for (P = W.strstart, T = W.lookahead - (I - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[P + I - 1]) & W.hash_mask, W.prev[P & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = P, P++, --T;);
                        W.strstart = P, W.lookahead = I - 1, J(W)
                    }
                    return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = I - 1, W.match_available = 0, b.next_in = q, b.input = $, b.avail_in = Q, W.wrap = M, f
                }, o.deflateInfo = "pako deflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }],
            47: [function(n, r, o) {
                r.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                }
            }, {}],
            48: [function(n, r, o) {
                r.exports = function(i, s) {
                    var a, l, u, m, h, c, f, y, d, v, p, g, w, C, E, A, N, j, I, B, G, k, F, S, U;
                    a = i.state, l = i.next_in, S = i.input, u = l + (i.avail_in - 5), m = i.next_out, U = i.output, h = m - (s - i.avail_out), c = m + (i.avail_out - 257), f = a.dmax, y = a.wsize, d = a.whave, v = a.wnext, p = a.window, g = a.hold, w = a.bits, C = a.lencode, E = a.distcode, A = (1 << a.lenbits) - 1, N = (1 << a.distbits) - 1;
                    e: do {
                        w < 15 && (g += S[l++] << w, w += 8, g += S[l++] << w, w += 8), j = C[g & A];
                        t: for (;;) {
                            if (g >>>= I = j >>> 24, w -= I, (I = j >>> 16 & 255) === 0) U[m++] = 65535 & j;
                            else {
                                if (!(16 & I)) {
                                    if (!(64 & I)) {
                                        j = C[(65535 & j) + (g & (1 << I) - 1)];
                                        continue t
                                    }
                                    if (32 & I) {
                                        a.mode = 12;
                                        break e
                                    }
                                    i.msg = "invalid literal/length code", a.mode = 30;
                                    break e
                                }
                                B = 65535 & j, (I &= 15) && (w < I && (g += S[l++] << w, w += 8), B += g & (1 << I) - 1, g >>>= I, w -= I), w < 15 && (g += S[l++] << w, w += 8, g += S[l++] << w, w += 8), j = E[g & N];
                                n: for (;;) {
                                    if (g >>>= I = j >>> 24, w -= I, !(16 & (I = j >>> 16 & 255))) {
                                        if (!(64 & I)) {
                                            j = E[(65535 & j) + (g & (1 << I) - 1)];
                                            continue n
                                        }
                                        i.msg = "invalid distance code", a.mode = 30;
                                        break e
                                    }
                                    if (G = 65535 & j, w < (I &= 15) && (g += S[l++] << w, (w += 8) < I && (g += S[l++] << w, w += 8)), f < (G += g & (1 << I) - 1)) {
                                        i.msg = "invalid distance too far back", a.mode = 30;
                                        break e
                                    }
                                    if (g >>>= I, w -= I, (I = m - h) < G) {
                                        if (d < (I = G - I) && a.sane) {
                                            i.msg = "invalid distance too far back", a.mode = 30;
                                            break e
                                        }
                                        if (F = p, (k = 0) === v) {
                                            if (k += y - I, I < B) {
                                                for (B -= I; U[m++] = p[k++], --I;);
                                                k = m - G, F = U
                                            }
                                        } else if (v < I) {
                                            if (k += y + v - I, (I -= v) < B) {
                                                for (B -= I; U[m++] = p[k++], --I;);
                                                if (k = 0, v < B) {
                                                    for (B -= I = v; U[m++] = p[k++], --I;);
                                                    k = m - G, F = U
                                                }
                                            }
                                        } else if (k += v - I, I < B) {
                                            for (B -= I; U[m++] = p[k++], --I;);
                                            k = m - G, F = U
                                        }
                                        for (; 2 < B;) U[m++] = F[k++], U[m++] = F[k++], U[m++] = F[k++], B -= 3;
                                        B && (U[m++] = F[k++], 1 < B && (U[m++] = F[k++]))
                                    } else {
                                        for (k = m - G; U[m++] = U[k++], U[m++] = U[k++], U[m++] = U[k++], 2 < (B -= 3););
                                        B && (U[m++] = U[k++], 1 < B && (U[m++] = U[k++]))
                                    }
                                    break
                                }
                            }
                            break
                        }
                    } while (l < u && m < c);
                    l -= B = w >> 3, g &= (1 << (w -= B << 3)) - 1, i.next_in = l, i.next_out = m, i.avail_in = l < u ? u - l + 5 : 5 - (l - u), i.avail_out = m < c ? c - m + 257 : 257 - (m - c), a.hold = g, a.bits = w
                }
            }, {}],
            49: [function(n, r, o) {
                var i = n("../utils/common"),
                    s = n("./adler32"),
                    a = n("./crc32"),
                    l = n("./inffast"),
                    u = n("./inftrees"),
                    m = 1,
                    h = 2,
                    c = 0,
                    f = -2,
                    y = 1,
                    d = 852,
                    v = 592;

                function p(k) {
                    return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24)
                }

                function g() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                }

                function w(k) {
                    var F;
                    return k && k.state ? (F = k.state, k.total_in = k.total_out = F.total = 0, k.msg = "", F.wrap && (k.adler = 1 & F.wrap), F.mode = y, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new i.Buf32(d), F.distcode = F.distdyn = new i.Buf32(v), F.sane = 1, F.back = -1, c) : f
                }

                function C(k) {
                    var F;
                    return k && k.state ? ((F = k.state).wsize = 0, F.whave = 0, F.wnext = 0, w(k)) : f
                }

                function E(k, F) {
                    var S, U;
                    return k && k.state ? (U = k.state, F < 0 ? (S = 0, F = -F) : (S = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? f : (U.window !== null && U.wbits !== F && (U.window = null), U.wrap = S, U.wbits = F, C(k))) : f
                }

                function A(k, F) {
                    var S, U;
                    return k ? (U = new g, (k.state = U).window = null, (S = E(k, F)) !== c && (k.state = null), S) : f
                }
                var N, j, I = !0;

                function B(k) {
                    if (I) {
                        var F;
                        for (N = new i.Buf32(512), j = new i.Buf32(32), F = 0; F < 144;) k.lens[F++] = 8;
                        for (; F < 256;) k.lens[F++] = 9;
                        for (; F < 280;) k.lens[F++] = 7;
                        for (; F < 288;) k.lens[F++] = 8;
                        for (u(m, k.lens, 0, 288, N, 0, k.work, {
                                bits: 9
                            }), F = 0; F < 32;) k.lens[F++] = 5;
                        u(h, k.lens, 0, 32, j, 0, k.work, {
                            bits: 5
                        }), I = !1
                    }
                    k.lencode = N, k.lenbits = 9, k.distcode = j, k.distbits = 5
                }

                function G(k, F, S, U) {
                    var X, H = k.state;
                    return H.window === null && (H.wsize = 1 << H.wbits, H.wnext = 0, H.whave = 0, H.window = new i.Buf8(H.wsize)), U >= H.wsize ? (i.arraySet(H.window, F, S - H.wsize, H.wsize, 0), H.wnext = 0, H.whave = H.wsize) : (U < (X = H.wsize - H.wnext) && (X = U), i.arraySet(H.window, F, S - U, X, H.wnext), (U -= X) ? (i.arraySet(H.window, F, S - U, U, 0), H.wnext = U, H.whave = H.wsize) : (H.wnext += X, H.wnext === H.wsize && (H.wnext = 0), H.whave < H.wsize && (H.whave += X))), 0
                }
                o.inflateReset = C, o.inflateReset2 = E, o.inflateResetKeep = w, o.inflateInit = function(k) {
                    return A(k, 15)
                }, o.inflateInit2 = A, o.inflate = function(k, F) {
                    var S, U, X, H, D, z, Y, O, L, te, R, V, J, ee, oe, ue, de, fe, he, ke, b, K, W, P, T = 0,
                        M = new i.Buf8(4),
                        Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0) return f;
                    (S = k.state).mode === 12 && (S.mode = 13), D = k.next_out, X = k.output, Y = k.avail_out, H = k.next_in, U = k.input, z = k.avail_in, O = S.hold, L = S.bits, te = z, R = Y, K = c;
                    e: for (;;) switch (S.mode) {
                        case y:
                            if (S.wrap === 0) {
                                S.mode = 13;
                                break
                            }
                            for (; L < 16;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if (2 & S.wrap && O === 35615) {
                                M[S.check = 0] = 255 & O, M[1] = O >>> 8 & 255, S.check = a(S.check, M, 2, 0), L = O = 0, S.mode = 2;
                                break
                            }
                            if (S.flags = 0, S.head && (S.head.done = !1), !(1 & S.wrap) || (((255 & O) << 8) + (O >> 8)) % 31) {
                                k.msg = "incorrect header check", S.mode = 30;
                                break
                            }
                            if ((15 & O) != 8) {
                                k.msg = "unknown compression method", S.mode = 30;
                                break
                            }
                            if (L -= 4, b = 8 + (15 & (O >>>= 4)), S.wbits === 0) S.wbits = b;
                            else if (b > S.wbits) {
                                k.msg = "invalid window size", S.mode = 30;
                                break
                            }
                            S.dmax = 1 << b, k.adler = S.check = 1, S.mode = 512 & O ? 10 : 12, L = O = 0;
                            break;
                        case 2:
                            for (; L < 16;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if (S.flags = O, (255 & S.flags) != 8) {
                                k.msg = "unknown compression method", S.mode = 30;
                                break
                            }
                            if (57344 & S.flags) {
                                k.msg = "unknown header flags set", S.mode = 30;
                                break
                            }
                            S.head && (S.head.text = O >> 8 & 1), 512 & S.flags && (M[0] = 255 & O, M[1] = O >>> 8 & 255, S.check = a(S.check, M, 2, 0)), L = O = 0, S.mode = 3;
                        case 3:
                            for (; L < 32;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            S.head && (S.head.time = O), 512 & S.flags && (M[0] = 255 & O, M[1] = O >>> 8 & 255, M[2] = O >>> 16 & 255, M[3] = O >>> 24 & 255, S.check = a(S.check, M, 4, 0)), L = O = 0, S.mode = 4;
                        case 4:
                            for (; L < 16;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            S.head && (S.head.xflags = 255 & O, S.head.os = O >> 8), 512 & S.flags && (M[0] = 255 & O, M[1] = O >>> 8 & 255, S.check = a(S.check, M, 2, 0)), L = O = 0, S.mode = 5;
                        case 5:
                            if (1024 & S.flags) {
                                for (; L < 16;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                S.length = O, S.head && (S.head.extra_len = O), 512 & S.flags && (M[0] = 255 & O, M[1] = O >>> 8 & 255, S.check = a(S.check, M, 2, 0)), L = O = 0
                            } else S.head && (S.head.extra = null);
                            S.mode = 6;
                        case 6:
                            if (1024 & S.flags && (z < (V = S.length) && (V = z), V && (S.head && (b = S.head.extra_len - S.length, S.head.extra || (S.head.extra = new Array(S.head.extra_len)), i.arraySet(S.head.extra, U, H, V, b)), 512 & S.flags && (S.check = a(S.check, U, V, H)), z -= V, H += V, S.length -= V), S.length)) break e;
                            S.length = 0, S.mode = 7;
                        case 7:
                            if (2048 & S.flags) {
                                if (z === 0) break e;
                                for (V = 0; b = U[H + V++], S.head && b && S.length < 65536 && (S.head.name += String.fromCharCode(b)), b && V < z;);
                                if (512 & S.flags && (S.check = a(S.check, U, V, H)), z -= V, H += V, b) break e
                            } else S.head && (S.head.name = null);
                            S.length = 0, S.mode = 8;
                        case 8:
                            if (4096 & S.flags) {
                                if (z === 0) break e;
                                for (V = 0; b = U[H + V++], S.head && b && S.length < 65536 && (S.head.comment += String.fromCharCode(b)), b && V < z;);
                                if (512 & S.flags && (S.check = a(S.check, U, V, H)), z -= V, H += V, b) break e
                            } else S.head && (S.head.comment = null);
                            S.mode = 9;
                        case 9:
                            if (512 & S.flags) {
                                for (; L < 16;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                if (O !== (65535 & S.check)) {
                                    k.msg = "header crc mismatch", S.mode = 30;
                                    break
                                }
                                L = O = 0
                            }
                            S.head && (S.head.hcrc = S.flags >> 9 & 1, S.head.done = !0), k.adler = S.check = 0, S.mode = 12;
                            break;
                        case 10:
                            for (; L < 32;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            k.adler = S.check = p(O), L = O = 0, S.mode = 11;
                        case 11:
                            if (S.havedict === 0) return k.next_out = D, k.avail_out = Y, k.next_in = H, k.avail_in = z, S.hold = O, S.bits = L, 2;
                            k.adler = S.check = 1, S.mode = 12;
                        case 12:
                            if (F === 5 || F === 6) break e;
                        case 13:
                            if (S.last) {
                                O >>>= 7 & L, L -= 7 & L, S.mode = 27;
                                break
                            }
                            for (; L < 3;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            switch (S.last = 1 & O, L -= 1, 3 & (O >>>= 1)) {
                                case 0:
                                    S.mode = 14;
                                    break;
                                case 1:
                                    if (B(S), S.mode = 20, F !== 6) break;
                                    O >>>= 2, L -= 2;
                                    break e;
                                case 2:
                                    S.mode = 17;
                                    break;
                                case 3:
                                    k.msg = "invalid block type", S.mode = 30
                            }
                            O >>>= 2, L -= 2;
                            break;
                        case 14:
                            for (O >>>= 7 & L, L -= 7 & L; L < 32;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if ((65535 & O) != (O >>> 16 ^ 65535)) {
                                k.msg = "invalid stored block lengths", S.mode = 30;
                                break
                            }
                            if (S.length = 65535 & O, L = O = 0, S.mode = 15, F === 6) break e;
                        case 15:
                            S.mode = 16;
                        case 16:
                            if (V = S.length) {
                                if (z < V && (V = z), Y < V && (V = Y), V === 0) break e;
                                i.arraySet(X, U, H, V, D), z -= V, H += V, Y -= V, D += V, S.length -= V;
                                break
                            }
                            S.mode = 12;
                            break;
                        case 17:
                            for (; L < 14;) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if (S.nlen = 257 + (31 & O), O >>>= 5, L -= 5, S.ndist = 1 + (31 & O), O >>>= 5, L -= 5, S.ncode = 4 + (15 & O), O >>>= 4, L -= 4, 286 < S.nlen || 30 < S.ndist) {
                                k.msg = "too many length or distance symbols", S.mode = 30;
                                break
                            }
                            S.have = 0, S.mode = 18;
                        case 18:
                            for (; S.have < S.ncode;) {
                                for (; L < 3;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                S.lens[Q[S.have++]] = 7 & O, O >>>= 3, L -= 3
                            }
                            for (; S.have < 19;) S.lens[Q[S.have++]] = 0;
                            if (S.lencode = S.lendyn, S.lenbits = 7, W = {
                                    bits: S.lenbits
                                }, K = u(0, S.lens, 0, 19, S.lencode, 0, S.work, W), S.lenbits = W.bits, K) {
                                k.msg = "invalid code lengths set", S.mode = 30;
                                break
                            }
                            S.have = 0, S.mode = 19;
                        case 19:
                            for (; S.have < S.nlen + S.ndist;) {
                                for (; ue = (T = S.lencode[O & (1 << S.lenbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= L);) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                if (de < 16) O >>>= oe, L -= oe, S.lens[S.have++] = de;
                                else {
                                    if (de === 16) {
                                        for (P = oe + 2; L < P;) {
                                            if (z === 0) break e;
                                            z--, O += U[H++] << L, L += 8
                                        }
                                        if (O >>>= oe, L -= oe, S.have === 0) {
                                            k.msg = "invalid bit length repeat", S.mode = 30;
                                            break
                                        }
                                        b = S.lens[S.have - 1], V = 3 + (3 & O), O >>>= 2, L -= 2
                                    } else if (de === 17) {
                                        for (P = oe + 3; L < P;) {
                                            if (z === 0) break e;
                                            z--, O += U[H++] << L, L += 8
                                        }
                                        L -= oe, b = 0, V = 3 + (7 & (O >>>= oe)), O >>>= 3, L -= 3
                                    } else {
                                        for (P = oe + 7; L < P;) {
                                            if (z === 0) break e;
                                            z--, O += U[H++] << L, L += 8
                                        }
                                        L -= oe, b = 0, V = 11 + (127 & (O >>>= oe)), O >>>= 7, L -= 7
                                    }
                                    if (S.have + V > S.nlen + S.ndist) {
                                        k.msg = "invalid bit length repeat", S.mode = 30;
                                        break
                                    }
                                    for (; V--;) S.lens[S.have++] = b
                                }
                            }
                            if (S.mode === 30) break;
                            if (S.lens[256] === 0) {
                                k.msg = "invalid code -- missing end-of-block", S.mode = 30;
                                break
                            }
                            if (S.lenbits = 9, W = {
                                    bits: S.lenbits
                                }, K = u(m, S.lens, 0, S.nlen, S.lencode, 0, S.work, W), S.lenbits = W.bits, K) {
                                k.msg = "invalid literal/lengths set", S.mode = 30;
                                break
                            }
                            if (S.distbits = 6, S.distcode = S.distdyn, W = {
                                    bits: S.distbits
                                }, K = u(h, S.lens, S.nlen, S.ndist, S.distcode, 0, S.work, W), S.distbits = W.bits, K) {
                                k.msg = "invalid distances set", S.mode = 30;
                                break
                            }
                            if (S.mode = 20, F === 6) break e;
                        case 20:
                            S.mode = 21;
                        case 21:
                            if (6 <= z && 258 <= Y) {
                                k.next_out = D, k.avail_out = Y, k.next_in = H, k.avail_in = z, S.hold = O, S.bits = L, l(k, R), D = k.next_out, X = k.output, Y = k.avail_out, H = k.next_in, U = k.input, z = k.avail_in, O = S.hold, L = S.bits, S.mode === 12 && (S.back = -1);
                                break
                            }
                            for (S.back = 0; ue = (T = S.lencode[O & (1 << S.lenbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= L);) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if (ue && !(240 & ue)) {
                                for (fe = oe, he = ue, ke = de; ue = (T = S.lencode[ke + ((O & (1 << fe + he) - 1) >> fe)]) >>> 16 & 255, de = 65535 & T, !(fe + (oe = T >>> 24) <= L);) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                O >>>= fe, L -= fe, S.back += fe
                            }
                            if (O >>>= oe, L -= oe, S.back += oe, S.length = de, ue === 0) {
                                S.mode = 26;
                                break
                            }
                            if (32 & ue) {
                                S.back = -1, S.mode = 12;
                                break
                            }
                            if (64 & ue) {
                                k.msg = "invalid literal/length code", S.mode = 30;
                                break
                            }
                            S.extra = 15 & ue, S.mode = 22;
                        case 22:
                            if (S.extra) {
                                for (P = S.extra; L < P;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                S.length += O & (1 << S.extra) - 1, O >>>= S.extra, L -= S.extra, S.back += S.extra
                            }
                            S.was = S.length, S.mode = 23;
                        case 23:
                            for (; ue = (T = S.distcode[O & (1 << S.distbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= L);) {
                                if (z === 0) break e;
                                z--, O += U[H++] << L, L += 8
                            }
                            if (!(240 & ue)) {
                                for (fe = oe, he = ue, ke = de; ue = (T = S.distcode[ke + ((O & (1 << fe + he) - 1) >> fe)]) >>> 16 & 255, de = 65535 & T, !(fe + (oe = T >>> 24) <= L);) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                O >>>= fe, L -= fe, S.back += fe
                            }
                            if (O >>>= oe, L -= oe, S.back += oe, 64 & ue) {
                                k.msg = "invalid distance code", S.mode = 30;
                                break
                            }
                            S.offset = de, S.extra = 15 & ue, S.mode = 24;
                        case 24:
                            if (S.extra) {
                                for (P = S.extra; L < P;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                S.offset += O & (1 << S.extra) - 1, O >>>= S.extra, L -= S.extra, S.back += S.extra
                            }
                            if (S.offset > S.dmax) {
                                k.msg = "invalid distance too far back", S.mode = 30;
                                break
                            }
                            S.mode = 25;
                        case 25:
                            if (Y === 0) break e;
                            if (V = R - Y, S.offset > V) {
                                if ((V = S.offset - V) > S.whave && S.sane) {
                                    k.msg = "invalid distance too far back", S.mode = 30;
                                    break
                                }
                                J = V > S.wnext ? (V -= S.wnext, S.wsize - V) : S.wnext - V, V > S.length && (V = S.length), ee = S.window
                            } else ee = X, J = D - S.offset, V = S.length;
                            for (Y < V && (V = Y), Y -= V, S.length -= V; X[D++] = ee[J++], --V;);
                            S.length === 0 && (S.mode = 21);
                            break;
                        case 26:
                            if (Y === 0) break e;
                            X[D++] = S.length, Y--, S.mode = 21;
                            break;
                        case 27:
                            if (S.wrap) {
                                for (; L < 32;) {
                                    if (z === 0) break e;
                                    z--, O |= U[H++] << L, L += 8
                                }
                                if (R -= Y, k.total_out += R, S.total += R, R && (k.adler = S.check = S.flags ? a(S.check, X, R, D - R) : s(S.check, X, R, D - R)), R = Y, (S.flags ? O : p(O)) !== S.check) {
                                    k.msg = "incorrect data check", S.mode = 30;
                                    break
                                }
                                L = O = 0
                            }
                            S.mode = 28;
                        case 28:
                            if (S.wrap && S.flags) {
                                for (; L < 32;) {
                                    if (z === 0) break e;
                                    z--, O += U[H++] << L, L += 8
                                }
                                if (O !== (4294967295 & S.total)) {
                                    k.msg = "incorrect length check", S.mode = 30;
                                    break
                                }
                                L = O = 0
                            }
                            S.mode = 29;
                        case 29:
                            K = 1;
                            break e;
                        case 30:
                            K = -3;
                            break e;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return f
                    }
                    return k.next_out = D, k.avail_out = Y, k.next_in = H, k.avail_in = z, S.hold = O, S.bits = L, (S.wsize || R !== k.avail_out && S.mode < 30 && (S.mode < 27 || F !== 4)) && G(k, k.output, k.next_out, R - k.avail_out) ? (S.mode = 31, -4) : (te -= k.avail_in, R -= k.avail_out, k.total_in += te, k.total_out += R, S.total += R, S.wrap && R && (k.adler = S.check = S.flags ? a(S.check, X, R, k.next_out - R) : s(S.check, X, R, k.next_out - R)), k.data_type = S.bits + (S.last ? 64 : 0) + (S.mode === 12 ? 128 : 0) + (S.mode === 20 || S.mode === 15 ? 256 : 0), (te == 0 && R === 0 || F === 4) && K === c && (K = -5), K)
                }, o.inflateEnd = function(k) {
                    if (!k || !k.state) return f;
                    var F = k.state;
                    return F.window && (F.window = null), k.state = null, c
                }, o.inflateGetHeader = function(k, F) {
                    var S;
                    return k && k.state && 2 & (S = k.state).wrap ? ((S.head = F).done = !1, c) : f
                }, o.inflateSetDictionary = function(k, F) {
                    var S, U = F.length;
                    return k && k.state ? (S = k.state).wrap !== 0 && S.mode !== 11 ? f : S.mode === 11 && s(1, F, U, 0) !== S.check ? -3 : G(k, F, U, U) ? (S.mode = 31, -4) : (S.havedict = 1, c) : f
                }, o.inflateInfo = "pako inflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }],
            50: [function(n, r, o) {
                var i = n("../utils/common"),
                    s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                    a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                    l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                    u = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                r.exports = function(m, h, c, f, y, d, v, p) {
                    var g, w, C, E, A, N, j, I, B, G = p.bits,
                        k = 0,
                        F = 0,
                        S = 0,
                        U = 0,
                        X = 0,
                        H = 0,
                        D = 0,
                        z = 0,
                        Y = 0,
                        O = 0,
                        L = null,
                        te = 0,
                        R = new i.Buf16(16),
                        V = new i.Buf16(16),
                        J = null,
                        ee = 0;
                    for (k = 0; k <= 15; k++) R[k] = 0;
                    for (F = 0; F < f; F++) R[h[c + F]]++;
                    for (X = G, U = 15; 1 <= U && R[U] === 0; U--);
                    if (U < X && (X = U), U === 0) return y[d++] = 20971520, y[d++] = 20971520, p.bits = 1, 0;
                    for (S = 1; S < U && R[S] === 0; S++);
                    for (X < S && (X = S), k = z = 1; k <= 15; k++)
                        if (z <<= 1, (z -= R[k]) < 0) return -1;
                    if (0 < z && (m === 0 || U !== 1)) return -1;
                    for (V[1] = 0, k = 1; k < 15; k++) V[k + 1] = V[k] + R[k];
                    for (F = 0; F < f; F++) h[c + F] !== 0 && (v[V[h[c + F]]++] = F);
                    if (N = m === 0 ? (L = J = v, 19) : m === 1 ? (L = s, te -= 257, J = a, ee -= 257, 256) : (L = l, J = u, -1), k = S, A = d, D = F = O = 0, C = -1, E = (Y = 1 << (H = X)) - 1, m === 1 && 852 < Y || m === 2 && 592 < Y) return 1;
                    for (;;) {
                        for (j = k - D, B = v[F] < N ? (I = 0, v[F]) : v[F] > N ? (I = J[ee + v[F]], L[te + v[F]]) : (I = 96, 0), g = 1 << k - D, S = w = 1 << H; y[A + (O >> D) + (w -= g)] = j << 24 | I << 16 | B | 0, w !== 0;);
                        for (g = 1 << k - 1; O & g;) g >>= 1;
                        if (g !== 0 ? (O &= g - 1, O += g) : O = 0, F++, --R[k] == 0) {
                            if (k === U) break;
                            k = h[c + v[F]]
                        }
                        if (X < k && (O & E) !== C) {
                            for (D === 0 && (D = X), A += S, z = 1 << (H = k - D); H + D < U && !((z -= R[H + D]) <= 0);) H++, z <<= 1;
                            if (Y += 1 << H, m === 1 && 852 < Y || m === 2 && 592 < Y) return 1;
                            y[C = O & E] = X << 24 | H << 16 | A - d | 0
                        }
                    }
                    return O !== 0 && (y[A + O] = k - D << 24 | 64 << 16 | 0), p.bits = X, 0
                }
            }, {
                "../utils/common": 41
            }],
            51: [function(n, r, o) {
                r.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                }
            }, {}],
            52: [function(n, r, o) {
                var i = n("../utils/common"),
                    s = 0,
                    a = 1;

                function l(T) {
                    for (var M = T.length; 0 <= --M;) T[M] = 0
                }
                var u = 0,
                    m = 29,
                    h = 256,
                    c = h + 1 + m,
                    f = 30,
                    y = 19,
                    d = 2 * c + 1,
                    v = 15,
                    p = 16,
                    g = 7,
                    w = 256,
                    C = 16,
                    E = 17,
                    A = 18,
                    N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                    j = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                    I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    G = new Array(2 * (c + 2));
                l(G);
                var k = new Array(2 * f);
                l(k);
                var F = new Array(512);
                l(F);
                var S = new Array(256);
                l(S);
                var U = new Array(m);
                l(U);
                var X, H, D, z = new Array(f);

                function Y(T, M, Q, q, $) {
                    this.static_tree = T, this.extra_bits = M, this.extra_base = Q, this.elems = q, this.max_length = $, this.has_stree = T && T.length
                }

                function O(T, M) {
                    this.dyn_tree = T, this.max_code = 0, this.stat_desc = M
                }

                function L(T) {
                    return T < 256 ? F[T] : F[256 + (T >>> 7)]
                }

                function te(T, M) {
                    T.pending_buf[T.pending++] = 255 & M, T.pending_buf[T.pending++] = M >>> 8 & 255
                }

                function R(T, M, Q) {
                    T.bi_valid > p - Q ? (T.bi_buf |= M << T.bi_valid & 65535, te(T, T.bi_buf), T.bi_buf = M >> p - T.bi_valid, T.bi_valid += Q - p) : (T.bi_buf |= M << T.bi_valid & 65535, T.bi_valid += Q)
                }

                function V(T, M, Q) {
                    R(T, Q[2 * M], Q[2 * M + 1])
                }

                function J(T, M) {
                    for (var Q = 0; Q |= 1 & T, T >>>= 1, Q <<= 1, 0 < --M;);
                    return Q >>> 1
                }

                function ee(T, M, Q) {
                    var q, $, re = new Array(v + 1),
                        ae = 0;
                    for (q = 1; q <= v; q++) re[q] = ae = ae + Q[q - 1] << 1;
                    for ($ = 0; $ <= M; $++) {
                        var ie = T[2 * $ + 1];
                        ie !== 0 && (T[2 * $] = J(re[ie]++, ie))
                    }
                }

                function oe(T) {
                    var M;
                    for (M = 0; M < c; M++) T.dyn_ltree[2 * M] = 0;
                    for (M = 0; M < f; M++) T.dyn_dtree[2 * M] = 0;
                    for (M = 0; M < y; M++) T.bl_tree[2 * M] = 0;
                    T.dyn_ltree[2 * w] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0
                }

                function ue(T) {
                    8 < T.bi_valid ? te(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0
                }

                function de(T, M, Q, q) {
                    var $ = 2 * M,
                        re = 2 * Q;
                    return T[$] < T[re] || T[$] === T[re] && q[M] <= q[Q]
                }

                function fe(T, M, Q) {
                    for (var q = T.heap[Q], $ = Q << 1; $ <= T.heap_len && ($ < T.heap_len && de(M, T.heap[$ + 1], T.heap[$], T.depth) && $++, !de(M, q, T.heap[$], T.depth));) T.heap[Q] = T.heap[$], Q = $, $ <<= 1;
                    T.heap[Q] = q
                }

                function he(T, M, Q) {
                    var q, $, re, ae, ie = 0;
                    if (T.last_lit !== 0)
                        for (; q = T.pending_buf[T.d_buf + 2 * ie] << 8 | T.pending_buf[T.d_buf + 2 * ie + 1], $ = T.pending_buf[T.l_buf + ie], ie++, q === 0 ? V(T, $, M) : (V(T, (re = S[$]) + h + 1, M), (ae = N[re]) !== 0 && R(T, $ -= U[re], ae), V(T, re = L(--q), Q), (ae = j[re]) !== 0 && R(T, q -= z[re], ae)), ie < T.last_lit;);
                    V(T, w, M)
                }

                function ke(T, M) {
                    var Q, q, $, re = M.dyn_tree,
                        ae = M.stat_desc.static_tree,
                        ie = M.stat_desc.has_stree,
                        ce = M.stat_desc.elems,
                        be = -1;
                    for (T.heap_len = 0, T.heap_max = d, Q = 0; Q < ce; Q++) re[2 * Q] !== 0 ? (T.heap[++T.heap_len] = be = Q, T.depth[Q] = 0) : re[2 * Q + 1] = 0;
                    for (; T.heap_len < 2;) re[2 * ($ = T.heap[++T.heap_len] = be < 2 ? ++be : 0)] = 1, T.depth[$] = 0, T.opt_len--, ie && (T.static_len -= ae[2 * $ + 1]);
                    for (M.max_code = be, Q = T.heap_len >> 1; 1 <= Q; Q--) fe(T, re, Q);
                    for ($ = ce; Q = T.heap[1], T.heap[1] = T.heap[T.heap_len--], fe(T, re, 1), q = T.heap[1], T.heap[--T.heap_max] = Q, T.heap[--T.heap_max] = q, re[2 * $] = re[2 * Q] + re[2 * q], T.depth[$] = (T.depth[Q] >= T.depth[q] ? T.depth[Q] : T.depth[q]) + 1, re[2 * Q + 1] = re[2 * q + 1] = $, T.heap[1] = $++, fe(T, re, 1), 2 <= T.heap_len;);
                    T.heap[--T.heap_max] = T.heap[1],
                        function(ye, Ge) {
                            var jn, Dt, On, Ie, Hr, gr, Xe = Ge.dyn_tree,
                                is = Ge.max_code,
                                pe = Ge.stat_desc.static_tree,
                                Te = Ge.stat_desc.has_stree,
                                Ee = Ge.stat_desc.extra_bits,
                                Et = Ge.stat_desc.extra_base,
                                ot = Ge.stat_desc.max_length,
                                gn = 0;
                            for (Ie = 0; Ie <= v; Ie++) ye.bl_count[Ie] = 0;
                            for (Xe[2 * ye.heap[ye.heap_max] + 1] = 0, jn = ye.heap_max + 1; jn < d; jn++) ot < (Ie = Xe[2 * Xe[2 * (Dt = ye.heap[jn]) + 1] + 1] + 1) && (Ie = ot, gn++), Xe[2 * Dt + 1] = Ie, is < Dt || (ye.bl_count[Ie]++, Hr = 0, Et <= Dt && (Hr = Ee[Dt - Et]), gr = Xe[2 * Dt], ye.opt_len += gr * (Ie + Hr), Te && (ye.static_len += gr * (pe[2 * Dt + 1] + Hr)));
                            if (gn !== 0) {
                                do {
                                    for (Ie = ot - 1; ye.bl_count[Ie] === 0;) Ie--;
                                    ye.bl_count[Ie]--, ye.bl_count[Ie + 1] += 2, ye.bl_count[ot]--, gn -= 2
                                } while (0 < gn);
                                for (Ie = ot; Ie !== 0; Ie--)
                                    for (Dt = ye.bl_count[Ie]; Dt !== 0;) is < (On = ye.heap[--jn]) || (Xe[2 * On + 1] !== Ie && (ye.opt_len += (Ie - Xe[2 * On + 1]) * Xe[2 * On], Xe[2 * On + 1] = Ie), Dt--)
                            }
                        }(T, M), ee(re, be, T.bl_count)
                }

                function b(T, M, Q) {
                    var q, $, re = -1,
                        ae = M[1],
                        ie = 0,
                        ce = 7,
                        be = 4;
                    for (ae === 0 && (ce = 138, be = 3), M[2 * (Q + 1) + 1] = 65535, q = 0; q <= Q; q++) $ = ae, ae = M[2 * (q + 1) + 1], ++ie < ce && $ === ae || (ie < be ? T.bl_tree[2 * $] += ie : $ !== 0 ? ($ !== re && T.bl_tree[2 * $]++, T.bl_tree[2 * C]++) : ie <= 10 ? T.bl_tree[2 * E]++ : T.bl_tree[2 * A]++, re = $, be = (ie = 0) === ae ? (ce = 138, 3) : $ === ae ? (ce = 6, 3) : (ce = 7, 4))
                }

                function K(T, M, Q) {
                    var q, $, re = -1,
                        ae = M[1],
                        ie = 0,
                        ce = 7,
                        be = 4;
                    for (ae === 0 && (ce = 138, be = 3), q = 0; q <= Q; q++)
                        if ($ = ae, ae = M[2 * (q + 1) + 1], !(++ie < ce && $ === ae)) {
                            if (ie < be)
                                for (; V(T, $, T.bl_tree), --ie != 0;);
                            else $ !== 0 ? ($ !== re && (V(T, $, T.bl_tree), ie--), V(T, C, T.bl_tree), R(T, ie - 3, 2)) : ie <= 10 ? (V(T, E, T.bl_tree), R(T, ie - 3, 3)) : (V(T, A, T.bl_tree), R(T, ie - 11, 7));
                            re = $, be = (ie = 0) === ae ? (ce = 138, 3) : $ === ae ? (ce = 6, 3) : (ce = 7, 4)
                        }
                }
                l(z);
                var W = !1;

                function P(T, M, Q, q) {
                    R(T, (u << 1) + (q ? 1 : 0), 3),
                        function($, re, ae, ie) {
                            ue($), te($, ae), te($, ~ae), i.arraySet($.pending_buf, $.window, re, ae, $.pending), $.pending += ae
                        }(T, M, Q)
                }
                o._tr_init = function(T) {
                    W || (function() {
                        var M, Q, q, $, re, ae = new Array(v + 1);
                        for ($ = q = 0; $ < m - 1; $++)
                            for (U[$] = q, M = 0; M < 1 << N[$]; M++) S[q++] = $;
                        for (S[q - 1] = $, $ = re = 0; $ < 16; $++)
                            for (z[$] = re, M = 0; M < 1 << j[$]; M++) F[re++] = $;
                        for (re >>= 7; $ < f; $++)
                            for (z[$] = re << 7, M = 0; M < 1 << j[$] - 7; M++) F[256 + re++] = $;
                        for (Q = 0; Q <= v; Q++) ae[Q] = 0;
                        for (M = 0; M <= 143;) G[2 * M + 1] = 8, M++, ae[8]++;
                        for (; M <= 255;) G[2 * M + 1] = 9, M++, ae[9]++;
                        for (; M <= 279;) G[2 * M + 1] = 7, M++, ae[7]++;
                        for (; M <= 287;) G[2 * M + 1] = 8, M++, ae[8]++;
                        for (ee(G, c + 1, ae), M = 0; M < f; M++) k[2 * M + 1] = 5, k[2 * M] = J(M, 5);
                        X = new Y(G, N, h + 1, c, v), H = new Y(k, j, 0, f, v), D = new Y(new Array(0), I, 0, y, g)
                    }(), W = !0), T.l_desc = new O(T.dyn_ltree, X), T.d_desc = new O(T.dyn_dtree, H), T.bl_desc = new O(T.bl_tree, D), T.bi_buf = 0, T.bi_valid = 0, oe(T)
                }, o._tr_stored_block = P, o._tr_flush_block = function(T, M, Q, q) {
                    var $, re, ae = 0;
                    0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(ie) {
                        var ce, be = 4093624447;
                        for (ce = 0; ce <= 31; ce++, be >>>= 1)
                            if (1 & be && ie.dyn_ltree[2 * ce] !== 0) return s;
                        if (ie.dyn_ltree[18] !== 0 || ie.dyn_ltree[20] !== 0 || ie.dyn_ltree[26] !== 0) return a;
                        for (ce = 32; ce < h; ce++)
                            if (ie.dyn_ltree[2 * ce] !== 0) return a;
                        return s
                    }(T)), ke(T, T.l_desc), ke(T, T.d_desc), ae = function(ie) {
                        var ce;
                        for (b(ie, ie.dyn_ltree, ie.l_desc.max_code), b(ie, ie.dyn_dtree, ie.d_desc.max_code), ke(ie, ie.bl_desc), ce = y - 1; 3 <= ce && ie.bl_tree[2 * B[ce] + 1] === 0; ce--);
                        return ie.opt_len += 3 * (ce + 1) + 5 + 5 + 4, ce
                    }(T), $ = T.opt_len + 3 + 7 >>> 3, (re = T.static_len + 3 + 7 >>> 3) <= $ && ($ = re)) : $ = re = Q + 5, Q + 4 <= $ && M !== -1 ? P(T, M, Q, q) : T.strategy === 4 || re === $ ? (R(T, 2 + (q ? 1 : 0), 3), he(T, G, k)) : (R(T, 4 + (q ? 1 : 0), 3), function(ie, ce, be, ye) {
                        var Ge;
                        for (R(ie, ce - 257, 5), R(ie, be - 1, 5), R(ie, ye - 4, 4), Ge = 0; Ge < ye; Ge++) R(ie, ie.bl_tree[2 * B[Ge] + 1], 3);
                        K(ie, ie.dyn_ltree, ce - 1), K(ie, ie.dyn_dtree, be - 1)
                    }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, ae + 1), he(T, T.dyn_ltree, T.dyn_dtree)), oe(T), q && ue(T)
                }, o._tr_tally = function(T, M, Q) {
                    return T.pending_buf[T.d_buf + 2 * T.last_lit] = M >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & M, T.pending_buf[T.l_buf + T.last_lit] = 255 & Q, T.last_lit++, M === 0 ? T.dyn_ltree[2 * Q]++ : (T.matches++, M--, T.dyn_ltree[2 * (S[Q] + h + 1)]++, T.dyn_dtree[2 * L(M)]++), T.last_lit === T.lit_bufsize - 1
                }, o._tr_align = function(T) {
                    R(T, 2, 3), V(T, w, G),
                        function(M) {
                            M.bi_valid === 16 ? (te(M, M.bi_buf), M.bi_buf = 0, M.bi_valid = 0) : 8 <= M.bi_valid && (M.pending_buf[M.pending++] = 255 & M.bi_buf, M.bi_buf >>= 8, M.bi_valid -= 8)
                        }(T)
                }
            }, {
                "../utils/common": 41
            }],
            53: [function(n, r, o) {
                r.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                }
            }, {}],
            54: [function(n, r, o) {
                (function(i) {
                    (function(s, a) {
                        if (!s.setImmediate) {
                            var l, u, m, h, c = 1,
                                f = {},
                                y = !1,
                                d = s.document,
                                v = Object.getPrototypeOf && Object.getPrototypeOf(s);
                            v = v && v.setTimeout ? v : s, l = {}.toString.call(s.process) === "[object process]" ? function(C) {
                                process.nextTick(function() {
                                    g(C)
                                })
                            } : function() {
                                if (s.postMessage && !s.importScripts) {
                                    var C = !0,
                                        E = s.onmessage;
                                    return s.onmessage = function() {
                                        C = !1
                                    }, s.postMessage("", "*"), s.onmessage = E, C
                                }
                            }() ? (h = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", w, !1) : s.attachEvent("onmessage", w), function(C) {
                                s.postMessage(h + C, "*")
                            }) : s.MessageChannel ? ((m = new MessageChannel).port1.onmessage = function(C) {
                                g(C.data)
                            }, function(C) {
                                m.port2.postMessage(C)
                            }) : d && "onreadystatechange" in d.createElement("script") ? (u = d.documentElement, function(C) {
                                var E = d.createElement("script");
                                E.onreadystatechange = function() {
                                    g(C), E.onreadystatechange = null, u.removeChild(E), E = null
                                }, u.appendChild(E)
                            }) : function(C) {
                                setTimeout(g, 0, C)
                            }, v.setImmediate = function(C) {
                                typeof C != "function" && (C = new Function("" + C));
                                for (var E = new Array(arguments.length - 1), A = 0; A < E.length; A++) E[A] = arguments[A + 1];
                                var N = {
                                    callback: C,
                                    args: E
                                };
                                return f[c] = N, l(c), c++
                            }, v.clearImmediate = p
                        }

                        function p(C) {
                            delete f[C]
                        }

                        function g(C) {
                            if (y) setTimeout(g, 0, C);
                            else {
                                var E = f[C];
                                if (E) {
                                    y = !0;
                                    try {
                                        (function(A) {
                                            var N = A.callback,
                                                j = A.args;
                                            switch (j.length) {
                                                case 0:
                                                    N();
                                                    break;
                                                case 1:
                                                    N(j[0]);
                                                    break;
                                                case 2:
                                                    N(j[0], j[1]);
                                                    break;
                                                case 3:
                                                    N(j[0], j[1], j[2]);
                                                    break;
                                                default:
                                                    N.apply(a, j)
                                            }
                                        })(E)
                                    } finally {
                                        p(C), y = !1
                                    }
                                }
                            }
                        }

                        function w(C) {
                            C.source === s && typeof C.data == "string" && C.data.indexOf(h) === 0 && g(+C.data.slice(h.length))
                        }
                    })(typeof self > "u" ? i === void 0 ? this : i : self)
                }).call(this, typeof as < "u" ? as : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}]
        }, {}, [10])(10)
    })
})(dy);
var mk = dy.exports;
const gk = Br(mk),
    vk = () => {
        var Y, O, L, te;
        Bd();
        const {
            toast: e
        } = Eg(), [t, n] = _.useState({
            ipa: null,
            p12: null,
            mobileprovision: null
        }), [r, o] = _.useState({
            p12: "",
            mobileprovision: ""
        }), [i, s] = _.useState(""), [a, l] = _.useState(!1), [u, m] = _.useState(!1), [h, c] = _.useState(""), [f, y] = _.useState({
            appName: "",
            version: "",
            bundleId: "",
            minOsVersion: "",
            iconFile: null,
            tweakFiles: null,
            removeUiDevices: !1,
            removeWatchApps: !1,
            enableDocumentSupport: !1,
            fakesignBinaries: !1,
            thinToArm64: !1,
            removeExtensions: !1,
            ignoreEncryption: !1,
            compressionLevel: "6",
            dylibs: [],
            injectDylibs: !1
        }), [d, v] = _.useState(null), [p, g] = _.useState(0), [w, C] = _.useState(0), [E, A] = _.useState(""), [N, j] = _.useState(!1), [I, B] = _.useState("none"), G = _.useRef(null);
        _.useState(!1);
        const k = [{
                id: "none",
                name: "No permanent link",
                description: "Standard signing without permanent storage"
            }, {
                id: "storj",
                name: "Use perm direct link",
                description: "Be able to have a direct link forever and install your IPA files"
            }],
            F = R => {
                y(V => {
                    const J = V.dylibs.map((ee, oe) => oe === R ? { ...ee,
                        selected: !ee.selected
                    } : ee);
                    return { ...V,
                        dylibs: J
                    }
                })
            };
        _.useEffect(() => {
            const R = sessionStorage.getItem("selectedConfig");
            if (R) {
                const V = JSON.parse(R);
                Promise.all([fetch(V.p12File).then(J => J.blob()), fetch(V.provisionFile).then(J => J.blob())]).then(([J, ee]) => {
                    const oe = new File([J], "certificate.p12", {
                            type: "application/x-pkcs12"
                        }),
                        ue = new File([ee], "profile.mobileprovision", {
                            type: "application/octet-stream"
                        });
                    n(de => ({ ...de,
                        p12: oe,
                        mobileprovision: ue
                    })), o({
                        p12: "certificate.p12",
                        mobileprovision: "profile.mobileprovision"
                    }), s(V.password), sessionStorage.removeItem("selectedConfig")
                }).catch(J => {
                    console.error("Error loading files:", J)
                })
            }
        }, []);
        const S = (t.ipa || h.trim() !== "") && t.p12 && t.mobileprovision,
            U = (R, V) => {
                var J;
                if ((J = R.target.files) != null && J[0]) {
                    const ee = R.target.files[0];
                    n(oe => ({ ...oe,
                        [V]: ee
                    })), (V === "p12" || V === "mobileprovision") && o(oe => ({ ...oe,
                        [V]: ee.name
                    }))
                }
            },
            X = (R, V) => {
                var J;
                V === "iconFile" && ((J = R.target.files) != null && J[0]) ? y(ee => {
                    var oe;
                    return { ...ee,
                        [V]: ((oe = R.target.files) == null ? void 0 : oe[0]) || null
                    }
                }) : V === "tweakFiles" && R.target.files && y(ee => ({ ...ee,
                    [V]: R.target.files || null
                }))
            },
            H = async () => {
                let R = t.ipa;
                if (!R && h.trim() !== "") try {
                    const J = await fetch(h);
                    if (!J.ok) {
                        console.error("Failed to download IPA for scanning:", J.statusText), alert("Error downloading IPA file from direct link for scanning. Please upload the IPA file manually.");
                        return
                    }
                    const ee = await J.blob();
                    R = new File([ee], "downloaded.ipa", {
                        type: "application/octet-stream"
                    }), n(oe => ({ ...oe,
                        ipa: R
                    }))
                } catch (J) {
                    console.error("Error downloading IPA from direct link for scanning:", J), alert("Error downloading IPA file from direct link for scanning. Please upload the IPA file manually.");
                    return
                }
                if (!R) {
                    alert("Please select an IPA file first.");
                    return
                }
                new gk().loadAsync(R).then(J => {
                    const ee = [];
                    J.forEach((oe, ue) => {
                        if (oe.toLowerCase().endsWith(".dylib")) {
                            const de = oe.split("/").pop() || oe;
                            ee.push({
                                name: de,
                                selected: !0
                            })
                        }
                    }), y(oe => ({ ...oe,
                        dylibs: ee
                    }))
                }).catch(J => {
                    console.error("Error scanning IPA for dylibs:", J), alert("Error scanning IPA for dylibs")
                })
            },
            D = () => {
                A(""), g(0), C(0), j(!0);
                const R = new FormData;
                if (t.ipa && R.append("ipa", t.ipa), h.trim() !== "" && R.append("ipa_direct_link", h), t.p12 && R.append("p12", t.p12), t.mobileprovision && R.append("mobileprovision", t.mobileprovision), R.append("p12_password", i), I !== "none" && R.append("use_storj", I), u) {
                    if (f.appName.trim() !== "" && R.append("cyan_name", f.appName), f.version.trim() !== "" && R.append("cyan_version", f.version), f.bundleId.trim() !== "" && R.append("cyan_bundle_id", f.bundleId), f.minOsVersion.trim() !== "" && R.append("cyan_minimum", f.minOsVersion), f.iconFile && R.append("cyan_icon", f.iconFile), f.tweakFiles && Array.from(f.tweakFiles).forEach(J => {
                            R.append("cyan_tweaks", J)
                        }), f.removeUiDevices && R.append("cyan_remove_supported", "on"), f.removeWatchApps && R.append("cyan_no_watch", "on"), f.enableDocumentSupport && R.append("cyan_enable_documents", "on"), f.fakesignBinaries && R.append("cyan_fakesign", "on"), f.thinToArm64 && R.append("cyan_thin", "on"), f.removeExtensions && R.append("cyan_remove_extensions", "on"), f.ignoreEncryption && R.append("cyan_ignore_encrypted", "on"), f.compressionLevel.trim() !== "" && R.append("cyan_compress_level", f.compressionLevel), f.dylibs && f.dylibs.length > 0) {
                        const J = f.dylibs.filter(ee => ee.selected).map(ee => ee.name);
                        J.length > 0 && R.append("remove_dylibs", JSON.stringify(J))
                    }
                    f.injectDylibs && R.append("inject_dylibs", "on")
                }
                const V = new XMLHttpRequest;
                V.open("POST", "/sign", !0), V.upload.onprogress = J => {
                    if (J.lengthComputable) {
                        const ee = J.loaded / J.total * 100;
                        if (g(ee), ee === 100 && !G.current) {
                            let oe = 0;
                            G.current = window.setInterval(() => {
                                oe += 5, oe < 95 ? C(oe) : C(95)
                            }, 500)
                        }
                    }
                }, V.onload = () => {
                    if (G.current && (clearInterval(G.current), G.current = null), V.status === 200) {
                        C(100);
                        try {
                            const J = JSON.parse(V.responseText);
                            v(J)
                        } catch {
                            A("Invalid response from server"), alert("Error: Invalid response from server")
                        }
                    } else {
                        let J;
                        try {
                            J = JSON.parse(V.responseText)
                        } catch {
                            J = {}
                        }
                        const ee = J.error || "Signing failed";
                        A(ee), alert("Error during signing: " + ee)
                    }
                    j(!1)
                }, V.onerror = () => {
                    G.current && (clearInterval(G.current), G.current = null), A("Network error during signing"), alert("Network error during signing"), j(!1)
                }, V.send(R)
            },
            z = async () => {
                if (d && d.installLink) try {
                    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(d.installLink);
                    else {
                        const R = document.createElement("textarea");
                        R.value = d.installLink, R.style.position = "fixed", R.style.left = "-99999px", R.style.top = "-99999px", document.body.appendChild(R), R.focus(), R.select(), document.execCommand("copy"), document.body.removeChild(R)
                    }
                    e({
                        title: "Link copied!",
                        description: "Install link copied to clipboard"
                    })
                } catch (R) {
                    console.error("Failed to copy text: ", R), e({
                        title: "Copy failed",
                        description: "Please copy the link manually",
                        variant: "destructive"
                    })
                }
            };
        return x.jsxs("div", {
            className: "min-h-screen w-full flex flex-col bg-background text-foreground",
            children: [x.jsxs(Yi, {
                children: [x.jsx("meta", {
                    name: "apple-mobile-web-app-capable",
                    content: "yes"
                }), x.jsx("meta", {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent"
                }), x.jsx("meta", {
                    name: "apple-mobile-web-app-title",
                    content: "Daisuke Signer"
                }), x.jsx("link", {
                    rel: "apple-touch-icon",
                    href: "https://ipasign.pro/assets/Cult.png"
                }), x.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, viewport-fit=cover"
                })]
            }), x.jsx($d, {}), x.jsx("main", {
                className: "flex-1 container py-6 md:py-10 px-4 md:px-6",
                children: x.jsxs("div", {
                    className: "w-full max-w-4xl mx-auto space-y-8",
                    children: [x.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [x.jsx("h1", {
                            className: "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
                            children: "Daisuke Signer"
                        }), x.jsx("p", {
                            className: "text-base md:text-lg text-muted-foreground max-w-xl mx-auto",
                            children: "Sign your iOS applications with ease and install them on your devices"
                        })]
                    }), d && x.jsxs("div", {
                        className: "mb-8 text-center glass rounded-2xl p-6 md:p-8 border-border/80 border-2 animate-fade-in shadow-lg",
                        children: [x.jsx("div", {
                            className: "flex items-center justify-center mb-4",
                            children: x.jsx(Kl, {
                                className: "text-green-500 w-12 h-12"
                            })
                        }), x.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 text-foreground",
                            children: [d.displayName, " Signed Successfully"]
                        }), x.jsxs("div", {
                            className: "space-y-6",
                            children: [x.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [x.jsx("a", {
                                    href: d.installLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full sm:w-auto",
                                    children: x.jsxs(Ne, {
                                        variant: "default",
                                        size: "lg",
                                        className: "w-full sm:w-auto gap-2 rounded-full",
                                        children: [x.jsx(ah, {
                                            className: "w-5 h-5"
                                        }), "Install App"]
                                    })
                                }), x.jsx("a", {
                                    href: d.signedIpaUrl,
                                    download: !0,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full sm:w-auto",
                                    children: x.jsxs(Ne, {
                                        variant: "secondary",
                                        size: "lg",
                                        className: "w-full sm:w-auto gap-2 rounded-full",
                                        children: [x.jsx(ah, {
                                            className: "w-5 h-5"
                                        }), "Download IPA"]
                                    })
                                }), x.jsxs(Ne, {
                                    onClick: z,
                                    variant: "secondary",
                                    size: "lg",
                                    className: "w-full sm:w-auto gap-2 rounded-full",
                                    children: [x.jsx(Dx, {
                                        className: "w-5 h-5"
                                    }), "Copy ITMS Link"]
                                }), x.jsx(Ne, {
                                    onClick: () => v(null),
                                    variant: "outline",
                                    size: "lg",
                                    className: "w-full sm:w-auto rounded-full",
                                    children: "Sign Another App"
                                })]
                            }), x.jsx("div", {
                                className: "mt-2 text-sm text-muted-foreground",
                                children: "Add to your iOS device instantly or share the installation link with others"
                            })]
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-6 glass p-7 md:p-9 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-all duration-300",
                        children: [x.jsxs("div", {
                            className: "grid gap-5 md:gap-6 md:grid-cols-2",
                            children: [x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("label", {
                                    className: "text-sm font-medium flex items-center gap-2 text-foreground",
                                    children: ["IPA File", x.jsx(wr, {
                                        children: x.jsxs(Gr, {
                                            children: [x.jsx(Yr, {
                                                asChild: !0,
                                                children: x.jsx(Kr, {
                                                    className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                                })
                                            }), x.jsx(xr, {
                                                children: x.jsx("p", {
                                                    className: "w-[200px] text-xs",
                                                    children: "Upload the iOS application file you want to sign"
                                                })
                                            })]
                                        })
                                    })]
                                }), x.jsxs("div", {
                                    className: "relative group cursor-pointer file-select-button",
                                    onClick: () => {
                                        var R;
                                        return (R = document.getElementById("ipa-input")) == null ? void 0 : R.click()
                                    },
                                    children: [x.jsxs("div", {
                                        className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm hover:border-foreground/30 transition-all duration-200",
                                        children: [x.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: ((Y = t.ipa) == null ? void 0 : Y.name) || "Select IPA file"
                                        }), x.jsx(br, {
                                            className: "w-4 h-4 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                        })]
                                    }), x.jsx(ut, {
                                        id: "ipa-input",
                                        type: "file",
                                        accept: ".ipa",
                                        onChange: R => U(R, "ipa"),
                                        className: "hidden"
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("label", {
                                    className: "text-sm font-medium flex items-center gap-2 text-foreground",
                                    children: ["P12 Certificate", x.jsx(wr, {
                                        children: x.jsxs(Gr, {
                                            children: [x.jsx(Yr, {
                                                asChild: !0,
                                                children: x.jsx(Kr, {
                                                    className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                                })
                                            }), x.jsx(xr, {
                                                children: x.jsx("p", {
                                                    className: "w-[200px] text-xs",
                                                    children: "Your signing certificate exported from Keychain or Developer Portal"
                                                })
                                            })]
                                        })
                                    })]
                                }), x.jsxs("div", {
                                    className: "relative group cursor-pointer file-select-button",
                                    onClick: () => {
                                        var R;
                                        return (R = document.getElementById("p12-input")) == null ? void 0 : R.click()
                                    },
                                    children: [x.jsxs("div", {
                                        className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm hover:border-foreground/30 transition-all duration-200",
                                        children: [x.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: r.p12 || ((O = t.p12) == null ? void 0 : O.name) || "Select P12 certificate"
                                        }), x.jsx(br, {
                                            className: "w-4 h-4 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                        })]
                                    }), x.jsx(ut, {
                                        id: "p12-input",
                                        type: "file",
                                        accept: ".p12",
                                        onChange: R => U(R, "p12"),
                                        className: "hidden"
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("label", {
                                    className: "text-sm font-medium flex items-center gap-2 text-foreground",
                                    children: ["Provisioning Profile", x.jsx(wr, {
                                        children: x.jsxs(Gr, {
                                            children: [x.jsx(Yr, {
                                                asChild: !0,
                                                children: x.jsx(Kr, {
                                                    className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                                })
                                            }), x.jsx(xr, {
                                                children: x.jsx("p", {
                                                    className: "w-[200px] text-xs",
                                                    children: "The mobile provisioning profile that defines which devices can install the app"
                                                })
                                            })]
                                        })
                                    })]
                                }), x.jsxs("div", {
                                    className: "relative group cursor-pointer file-select-button",
                                    onClick: () => {
                                        var R;
                                        return (R = document.getElementById("provision-input")) == null ? void 0 : R.click()
                                    },
                                    children: [x.jsxs("div", {
                                        className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm hover:border-foreground/30 transition-all duration-200",
                                        children: [x.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: r.mobileprovision || ((L = t.mobileprovision) == null ? void 0 : L.name) || "Select provisioning profile"
                                        }), x.jsx(br, {
                                            className: "w-4 h-4 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                        })]
                                    }), x.jsx(ut, {
                                        id: "provision-input",
                                        type: "file",
                                        accept: ".mobileprovision",
                                        onChange: R => U(R, "mobileprovision"),
                                        className: "hidden"
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("label", {
                                    className: "text-sm font-medium flex items-center gap-2 text-foreground",
                                    children: ["Certificate Password", x.jsx(wr, {
                                        children: x.jsxs(Gr, {
                                            children: [x.jsx(Yr, {
                                                asChild: !0,
                                                children: x.jsx(Kr, {
                                                    className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                                })
                                            }), x.jsx(xr, {
                                                children: x.jsx("p", {
                                                    className: "w-[200px] text-xs",
                                                    children: "Enter the password for your P12 certificate if it's password-protected"
                                                })
                                            })]
                                        })
                                    })]
                                }), x.jsxs("div", {
                                    className: "relative",
                                    children: [x.jsx(ut, {
                                        type: a ? "text" : "password",
                                        value: i,
                                        onChange: R => s(R.target.value),
                                        placeholder: "Enter certificate password (if needed)",
                                        className: "rounded-xl pl-3 pr-10 hover:border-foreground/30 transition-all duration-200"
                                    }), x.jsx("button", {
                                        type: "button",
                                        onClick: () => l(!a),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground/80 transition-colors",
                                        children: a ? x.jsx(nv, {
                                            className: "w-4 h-4"
                                        }) : x.jsx(rv, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                })]
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-2 mt-4",
                            children: [x.jsxs("label", {
                                className: "text-sm font-medium flex items-center gap-2 text-foreground",
                                children: ["Direct IPA URL", x.jsx(wr, {
                                    children: x.jsxs(Gr, {
                                        children: [x.jsx(Yr, {
                                            asChild: !0,
                                            children: x.jsx(Kr, {
                                                className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                            })
                                        }), x.jsx(xr, {
                                            children: x.jsx("p", {
                                                className: "w-[220px] text-xs",
                                                children: "You can provide a direct download URL instead of uploading an IPA file"
                                            })
                                        })]
                                    })
                                })]
                            }), x.jsx(ut, {
                                type: "text",
                                value: h,
                                onChange: R => c(R.target.value),
                                placeholder: "Enter direct IPA URL",
                                className: "rounded-xl hover:border-foreground/30 transition-all duration-200"
                            }), x.jsx("p", {
                                className: "text-xs text-muted-foreground ml-1",
                                children: "If provided, the IPA will be downloaded for scanning and signing."
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-2 mt-4",
                            children: [x.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [x.jsx("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Storage Options"
                                }), x.jsx(wr, {
                                    children: x.jsxs(Gr, {
                                        children: [x.jsx(Yr, {
                                            asChild: !0,
                                            children: x.jsx(Kr, {
                                                className: "h-3.5 w-3.5 text-muted-foreground cursor-help"
                                            })
                                        }), x.jsx(xr, {
                                            children: x.jsx("p", {
                                                className: "w-[220px] text-xs",
                                                children: "Choose how your IPA file will be stored and accessed"
                                            })
                                        })]
                                    })
                                })]
                            }), x.jsxs(ep, {
                                value: I,
                                onValueChange: B,
                                children: [x.jsx(_c, {
                                    className: "w-full rounded-xl",
                                    children: x.jsx(tp, {
                                        placeholder: "Select storage option"
                                    })
                                }), x.jsx(Cc, {
                                    children: k.map(R => x.jsx(Ec, {
                                        value: R.id,
                                        children: x.jsxs("div", {
                                            className: "flex flex-col items-start",
                                            children: [x.jsx("span", {
                                                className: "font-medium",
                                                children: R.name
                                            }), x.jsx("span", {
                                                className: "text-xs text-muted-foreground mt-0.5",
                                                children: R.description
                                            })]
                                        })
                                    }, R.id))
                                })]
                            })]
                        }), x.jsx(Ne, {
                            onClick: D,
                            className: `w-full rounded-full text-white mt-4 transition-all duration-300 ${S?"bg-foreground text-background hover:opacity-90 shadow-md hover:shadow-lg":"bg-gray-400 cursor-not-allowed"}`,
                            size: "lg",
                            disabled: !S || N,
                            children: N ? x.jsxs("span", {
                                className: "flex items-center gap-2",
                                children: [x.jsx(uh, {
                                    className: "h-4 w-4 animate-spin"
                                }), "Processing..."]
                            }) : "Sign IPA"
                        }), E && x.jsx("div", {
                            className: "mt-4 p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-center text-sm",
                            children: E
                        }), N && x.jsxs("div", {
                            className: "space-y-6 mt-6 animate-fade-in",
                            children: [x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [x.jsx("p", {
                                        className: "text-sm font-medium text-foreground",
                                        children: "Uploading Files"
                                    }), x.jsxs("span", {
                                        className: "text-sm font-medium",
                                        children: [Math.round(p), "%"]
                                    })]
                                }), x.jsx("div", {
                                    className: "relative w-full h-3 bg-secondary/30 rounded-full overflow-hidden",
                                    children: x.jsx("div", {
                                        className: "absolute top-0 left-0 h-full bg-foreground/80 rounded-full transition-all duration-300 flex items-center justify-end",
                                        style: {
                                            width: `${p}%`
                                        },
                                        children: p === 100 && x.jsx(Kl, {
                                            className: "h-2.5 w-2.5 mr-0.5 text-background"
                                        })
                                    })
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsxs("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [x.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [x.jsx("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Signing IPA"
                                        }), w < 100 && x.jsx(uh, {
                                            className: "h-3.5 w-3.5 text-foreground/70 animate-spin"
                                        })]
                                    }), x.jsxs("span", {
                                        className: "text-sm font-medium",
                                        children: [Math.round(w), "%"]
                                    })]
                                }), x.jsx("div", {
                                    className: "relative w-full h-3 bg-secondary/30 rounded-full overflow-hidden",
                                    children: x.jsx("div", {
                                        className: "absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-300 flex items-center justify-end",
                                        style: {
                                            width: `${w}%`
                                        },
                                        children: w === 100 && x.jsx(Kl, {
                                            className: "h-2.5 w-2.5 mr-0.5 text-white"
                                        })
                                    })
                                })]
                            }), w > 0 && w < 100 && x.jsx("p", {
                                className: "text-xs text-center text-muted-foreground animate-pulse",
                                children: "Please wait while we sign your application..."
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-4",
                            children: [x.jsxs(Ne, {
                                variant: "outline",
                                onClick: () => m(!u),
                                className: "w-full rounded-xl hover:bg-secondary/50 hover:border-foreground/20 transition-all duration-200",
                                children: [x.jsx($x, {
                                    className: "w-4 h-4 mr-2"
                                }), "Advanced Modifications", x.jsx(kd, {
                                    className: `w-4 h-4 ml-2 transition-transform duration-200 ${u?"rotate-180":""}`
                                })]
                            }), u && x.jsxs("div", {
                                className: "space-y-6 border rounded-xl p-6 md:p-8 animate-fade-in border-input bg-background/50 backdrop-blur-sm",
                                children: [x.jsx("h3", {
                                    className: "text-lg font-medium mb-4 text-center text-foreground",
                                    children: "Advanced IPA Modifications"
                                }), x.jsxs("div", {
                                    className: "grid gap-4 md:gap-6 md:grid-cols-2",
                                    children: [x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "New App Name"
                                        }), x.jsx(ut, {
                                            value: f.appName,
                                            onChange: R => y(V => ({ ...V,
                                                appName: R.target.value
                                            })),
                                            placeholder: "Enter new app name",
                                            className: "rounded-xl hover:border-foreground/30 transition-all duration-200"
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "New Version"
                                        }), x.jsx(ut, {
                                            value: f.version,
                                            onChange: R => y(V => ({ ...V,
                                                version: R.target.value
                                            })),
                                            placeholder: "Enter new version",
                                            className: "rounded-xl hover:border-foreground/30 transition-all duration-200"
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "New Bundle ID"
                                        }), x.jsx(ut, {
                                            value: f.bundleId,
                                            onChange: R => y(V => ({ ...V,
                                                bundleId: R.target.value
                                            })),
                                            placeholder: "com.example.app",
                                            className: "rounded-xl hover:border-foreground/30 transition-all duration-200"
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "Minimum OS Version"
                                        }), x.jsx(ut, {
                                            value: f.minOsVersion,
                                            onChange: R => y(V => ({ ...V,
                                                minOsVersion: R.target.value
                                            })),
                                            placeholder: "14.0",
                                            className: "rounded-xl hover:border-foreground/30 transition-all duration-200"
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "New Icon"
                                        }), x.jsxs("div", {
                                            className: "relative group cursor-pointer file-select-button",
                                            onClick: () => {
                                                var R;
                                                return (R = document.getElementById("icon-input")) == null ? void 0 : R.click()
                                            },
                                            children: [x.jsxs("div", {
                                                className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm hover:border-foreground/30 transition-all duration-200",
                                                children: [x.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: ((te = f.iconFile) == null ? void 0 : te.name) || "Select new app icon"
                                                }), x.jsx(br, {
                                                    className: "w-4 h-4 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                                })]
                                            }), x.jsx(ut, {
                                                id: "icon-input",
                                                type: "file",
                                                accept: "image/*",
                                                onChange: R => X(R, "iconFile"),
                                                className: "hidden"
                                            })]
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "Tweak Files"
                                        }), x.jsxs("div", {
                                            className: "relative group cursor-pointer file-select-button",
                                            onClick: () => {
                                                var R;
                                                return (R = document.getElementById("tweak-input")) == null ? void 0 : R.click()
                                            },
                                            children: [x.jsxs("div", {
                                                className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm hover:border-foreground/30 transition-all duration-200",
                                                children: [x.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: f.tweakFiles ? `${f.tweakFiles.length} files selected` : "Select tweak files"
                                                }), x.jsx(br, {
                                                    className: "w-4 h-4 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                                })]
                                            }), x.jsx(ut, {
                                                id: "tweak-input",
                                                type: "file",
                                                multiple: !0,
                                                onChange: R => X(R, "tweakFiles"),
                                                className: "hidden"
                                            })]
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2 md:col-span-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "Dylib Removal"
                                        }), x.jsx(Ne, {
                                            variant: "outline",
                                            onClick: H,
                                            className: "w-full hover:bg-accent/50 transition-all duration-200",
                                            children: "Scan for Dylibs"
                                        }), f.dylibs && f.dylibs.length > 0 && x.jsx("div", {
                                            className: "mt-2 space-y-2",
                                            children: f.dylibs.map((R, V) => x.jsx(Ne, {
                                                variant: "outline",
                                                className: `w-full justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${R.selected?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => F(V),
                                                children: R.name
                                            }, V))
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2",
                                        children: [x.jsx("label", {
                                            className: "text-sm font-medium",
                                            children: "Compression Level"
                                        }), x.jsxs(ep, {
                                            value: f.compressionLevel,
                                            onValueChange: R => y(V => ({ ...V,
                                                compressionLevel: R
                                            })),
                                            children: [x.jsx(_c, {
                                                className: "rounded-xl",
                                                children: x.jsx(tp, {
                                                    placeholder: "Select compression level"
                                                })
                                            }), x.jsx(Cc, {
                                                children: [...Array(10)].map((R, V) => x.jsxs(Ec, {
                                                    value: V.toString(),
                                                    children: [V, " ", V === 6 && "(Default)"]
                                                }, V))
                                            })]
                                        })]
                                    }), x.jsxs("div", {
                                        className: "space-y-2 md:col-span-2",
                                        children: [x.jsx("p", {
                                            className: "text-sm font-medium mb-2",
                                            children: "Additional Options"
                                        }), x.jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                                            children: [x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.removeUiDevices?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    removeUiDevices: !R.removeUiDevices
                                                })),
                                                children: "Remove UISupportedDevices"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.removeWatchApps?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    removeWatchApps: !R.removeWatchApps
                                                })),
                                                children: "Remove watch apps"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.enableDocumentSupport?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    enableDocumentSupport: !R.enableDocumentSupport
                                                })),
                                                children: "Enable document support"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.fakesignBinaries?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    fakesignBinaries: !R.fakesignBinaries
                                                })),
                                                children: "Fakesign all binaries"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.thinToArm64?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    thinToArm64: !R.thinToArm64
                                                })),
                                                children: "Thin to arm64"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.removeExtensions?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    removeExtensions: !R.removeExtensions
                                                })),
                                                children: "Remove all extensions"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.ignoreEncryption?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    ignoreEncryption: !R.ignoreEncryption
                                                })),
                                                children: "Ignore encryption check"
                                            }), x.jsx(Ne, {
                                                variant: "outline",
                                                className: `justify-start rounded-xl transition-all duration-200 hover:bg-accent/50 ${f.injectDylibs?"border-primary/50 bg-primary/5":""}`,
                                                onClick: () => y(R => ({ ...R,
                                                    injectDylibs: !R.injectDylibs
                                                })),
                                                children: "Fix Black screen"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        }), x.jsx("div", {
                            className: "text-center text-sm text-muted-foreground",
                            children: x.jsxs("p", {
                                children: ["Need help?", " ", x.jsx("a", {
                                    href: "/docs.html",
                                    target: "_blank",
                                    className: "text-foreground hover:underline",
                                    children: "Read our documentation"
                                })]
                            })
                        })]
                    })]
                })
            }), x.jsx(Wd, {})]
        })
    },
    yk = () => {
        var m, h;
        const e = Bd(),
            [t, n] = _.useState([]),
            [r, o] = _.useState({
                p12File: null,
                provisionFile: null,
                password: "",
                name: ""
            }),
            [i, s] = _.useState(!1);
        _.useEffect(() => {
            const c = localStorage.getItem("certConfigs");
            c && n(JSON.parse(c))
        }, []);
        const a = (c, f) => {
                var y;
                (y = c.target.files) != null && y[0] && o(d => ({ ...d,
                    [f]: c.target.files[0]
                }))
            },
            l = () => {
                if (!r.p12File || !r.provisionFile || !r.password) {
                    hh.error("Please fill in all required fields");
                    return
                }
                const c = r.name.trim() || `Cert ${t.length+1}`,
                    f = new FileReader,
                    y = new FileReader;
                f.onload = () => {
                    const d = f.result;
                    y.readAsDataURL(r.provisionFile), y.onload = () => {
                        const v = y.result,
                            p = [...t, {
                                id: Date.now().toString(),
                                name: c,
                                p12File: d,
                                provisionFile: v,
                                password: r.password
                            }];
                        n(p), localStorage.setItem("certConfigs", JSON.stringify(p)), hh.success("Configuration saved successfully"), o({
                            p12File: null,
                            provisionFile: null,
                            password: "",
                            name: ""
                        })
                    }
                }, f.readAsDataURL(r.p12File)
            },
            u = c => {
                sessionStorage.setItem("selectedConfig", JSON.stringify({
                    p12File: c.p12File,
                    provisionFile: c.provisionFile,
                    password: c.password
                })), e("/")
            };
        return x.jsxs("div", {
            className: "min-h-screen w-full flex flex-col",
            children: [x.jsxs(Yi, {
                children: [x.jsx("title", {
                    children: "Configurations - Daisuke Signer"
                }), x.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, viewport-fit=cover"
                })]
            }), x.jsx($d, {}), x.jsx("main", {
                className: "flex-1 container py-8",
                children: x.jsxs("div", {
                    className: "w-full space-y-8 animate-fade-in max-w-4xl mx-auto",
                    children: [x.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [x.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight",
                            children: "Certificate Configurations"
                        }), x.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Save your certificate configurations for quick access"
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-8",
                        children: [t.length > 0 && x.jsxs("div", {
                            className: "space-y-4",
                            children: [x.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "Saved Configurations"
                            }), x.jsx("div", {
                                className: "grid gap-4 md:grid-cols-2",
                                children: t.map(c => x.jsxs(Ne, {
                                    variant: "outline",
                                    className: "h-auto p-4 text-left flex flex-col items-start space-y-2 rounded-xl",
                                    onClick: () => u(c),
                                    children: [x.jsx("span", {
                                        className: "font-medium",
                                        children: c.name
                                    }), x.jsx("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Click to use this configuration"
                                    })]
                                }, c.id))
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-6 glass p-8 rounded-xl border",
                            children: [x.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "New Configuration"
                            }), x.jsxs("div", {
                                className: "grid gap-6 md:grid-cols-2",
                                children: [x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx("label", {
                                        className: "text-sm font-medium",
                                        children: "Configuration Name"
                                    }), x.jsx(ut, {
                                        value: r.name,
                                        onChange: c => o(f => ({ ...f,
                                            name: c.target.value
                                        })),
                                        placeholder: "Enter a name (optional)",
                                        className: "rounded-xl focus:ring-0"
                                    })]
                                }), x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx("label", {
                                        className: "text-sm font-medium",
                                        children: "P12 Certificate"
                                    }), x.jsxs("div", {
                                        className: "relative group cursor-pointer",
                                        onClick: () => {
                                            var c;
                                            return (c = document.getElementById("p12-input")) == null ? void 0 : c.click()
                                        },
                                        children: [x.jsxs("div", {
                                            className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm",
                                            children: [x.jsx("span", {
                                                className: "text-muted-foreground",
                                                children: ((m = r.p12File) == null ? void 0 : m.name) || "Select P12 certificate"
                                            }), x.jsx(br, {
                                                className: "w-4 h-4 text-muted-foreground"
                                            })]
                                        }), x.jsx(ut, {
                                            id: "p12-input",
                                            type: "file",
                                            accept: ".p12",
                                            onChange: c => a(c, "p12File"),
                                            className: "hidden"
                                        })]
                                    })]
                                }), x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx("label", {
                                        className: "text-sm font-medium",
                                        children: "Provisioning Profile"
                                    }), x.jsxs("div", {
                                        className: "relative group cursor-pointer",
                                        onClick: () => {
                                            var c;
                                            return (c = document.getElementById("provision-input")) == null ? void 0 : c.click()
                                        },
                                        children: [x.jsxs("div", {
                                            className: "flex items-center justify-between h-10 px-3 rounded-xl border border-input bg-background text-sm",
                                            children: [x.jsx("span", {
                                                className: "text-muted-foreground",
                                                children: ((h = r.provisionFile) == null ? void 0 : h.name) || "Select provisioning profile"
                                            }), x.jsx(br, {
                                                className: "w-4 h-4 text-muted-foreground"
                                            })]
                                        }), x.jsx(ut, {
                                            id: "provision-input",
                                            type: "file",
                                            accept: ".mobileprovision",
                                            onChange: c => a(c, "provisionFile"),
                                            className: "hidden"
                                        })]
                                    })]
                                }), x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx("label", {
                                        className: "text-sm font-medium",
                                        children: "Certificate Password"
                                    }), x.jsxs("div", {
                                        className: "relative",
                                        children: [x.jsx(ut, {
                                            type: i ? "text" : "password",
                                            value: r.password,
                                            onChange: c => o(f => ({ ...f,
                                                password: c.target.value
                                            })),
                                            placeholder: "Enter certificate password",
                                            className: "rounded-xl focus:ring-0"
                                        }), x.jsx("button", {
                                            type: "button",
                                            onClick: () => s(!i),
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                                            children: i ? x.jsx(nv, {
                                                className: "w-4 h-4"
                                            }) : x.jsx(rv, {
                                                className: "w-4 h-4"
                                            })
                                        })]
                                    })]
                                })]
                            }), x.jsx(Ne, {
                                onClick: l,
                                className: "w-full bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white rounded-xl",
                                size: "lg",
                                children: "Save Configuration"
                            })]
                        })]
                    })]
                })
            }), x.jsx(Wd, {})]
        })
    },
    wk = () => x.jsxs("div", {
        className: "min-h-screen w-full flex flex-col bg-background text-foreground",
        children: [x.jsxs(Yi, {
            children: [x.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, viewport-fit=cover"
            }), x.jsx("title", {
                children: "Credits - Daisuke Signer"
            })]
        }), x.jsx($d, {}), x.jsx("main", {
            className: "flex-1 container py-8 md:py-12 px-4 md:px-6",
            children: x.jsxs("div", {
                className: "w-full max-w-5xl mx-auto space-y-10",
                children: [x.jsxs("div", {
                    className: "text-center space-y-4",
                    children: [x.jsx("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in",
                        children: "Daisuke Signer Team"
                    }), x.jsx("p", {
                        className: "text-base md:text-lg text-muted-foreground max-w-xl mx-auto",
                        children: "Meet all the people who made this possible"
                    })]
                }), x.jsxs("div", {
                    className: "grid gap-8 md:grid-cols-3",
                    children: [x.jsxs("div", {
                        className: "glass p-8 rounded-3xl flex flex-col items-center text-center space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-up",
                        style: {
                            animationDelay: "0ms"
                        },
                        children: [x.jsxs("div", {
                            className: "relative group",
                            children: [x.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"
                            }), x.jsx("img", {
                                src: "https://cdn.discordapp.com/avatars/630151942135480370/a5e0a5e61923da95643b447691ca6bca.png?size=1024",
                                alt: "Daisuke",
                                className: "w-24 h-24 rounded-full object-cover relative z-10 ring-2 ring-background shadow-lg"
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-2",
                            children: [x.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: "Daisuke"
                            }), x.jsx("p", {
                                className: "text-primary font-medium",
                                children: "Owner & Backend Developer"
                            }), x.jsx("p", {
                                className: "text-muted-foreground text-sm px-4",
                                children: "Backend engineer who also manages the signer and the Discord server."
                            })]
                        }), x.jsx("div", {
                            className: "flex gap-3 text-muted-foreground",
                            children: x.jsxs("a", {
                                href: "https://github.com/daisuke1227",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-primary transition-colors",
                                children: [x.jsx(zx, {
                                    className: "h-5 w-5"
                                }), x.jsx("span", {
                                    className: "sr-only",
                                    children: "GitHub"
                                })]
                            })
                        })]
                    }), x.jsxs("div", {
                        className: "glass p-8 rounded-3xl flex flex-col items-center text-center space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-up",
                        style: {
                            animationDelay: "150ms"
                        },
                        children: [x.jsxs("div", {
                            className: "relative group",
                            children: [x.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#8B5CF6]/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"
                            }), x.jsx("img", {
                                src: "https://avatars.githubusercontent.com/u/176533579?v=4",
                                alt: "moonydev",
                                className: "w-24 h-24 rounded-full object-cover relative z-10 ring-2 ring-background shadow-lg"
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-2",
                            children: [x.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: "moonydev"
                            }), x.jsx("p", {
                                className: "text-[#8B5CF6] font-medium",
                                children: "Frontend Developer"
                            }), x.jsx("p", {
                                className: "text-muted-foreground text-sm px-4",
                                children: "UI/UX expert, creating intuitive and beautiful interfaces."
                            })]
                        }), x.jsx("div", {
                            className: "flex gap-3 text-muted-foreground",
                            children: x.jsxs("a", {
                                href: "https://moony-dev.xyz",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#8B5CF6] transition-colors flex items-center gap-1",
                                children: [x.jsx(lh, {
                                    className: "h-4 w-4"
                                }), x.jsx("span", {
                                    className: "text-sm",
                                    children: "Portfolio"
                                })]
                            })
                        })]
                    }), x.jsxs("div", {
                        className: "glass p-8 rounded-3xl flex flex-col items-center text-center space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-up",
                        style: {
                            animationDelay: "300ms"
                        },
                        children: [x.jsxs("div", {
                            className: "relative group",
                            children: [x.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-[#F97316]/20 to-[#F97316]/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"
                            }), x.jsx("img", {
                                src: "https://avatars.githubusercontent.com/u/153235983?v=4",
                                alt: "zig.wangles",
                                className: "w-24 h-24 rounded-full object-cover relative z-10 ring-2 ring-background shadow-lg"
                            })]
                        }), x.jsxs("div", {
                            className: "space-y-2",
                            children: [x.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: "zig.wangles"
                            }), x.jsx("p", {
                                className: "text-[#F97316] font-medium",
                                children: "Contributor"
                            }), x.jsx("p", {
                                className: "text-muted-foreground text-sm px-4",
                                children: "Allowed us to add the permanent download install feature."
                            })]
                        }), x.jsx("div", {
                            className: "flex gap-3 text-muted-foreground",
                            children: x.jsxs("a", {
                                href: "https://pirating.xyz",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#F97316] transition-colors flex items-center gap-1",
                                children: [x.jsx(lh, {
                                    className: "h-4 w-4"
                                }), x.jsx("span", {
                                    className: "text-sm",
                                    children: "Portfolio"
                                })]
                            })
                        })]
                    })]
                }), x.jsx("div", {
                    className: "text-center pt-8",
                    children: x.jsxs("p", {
                        className: "text-muted-foreground",
                        children: ["Want to contribute? Join our ", x.jsx("a", {
                            href: "https://discord.gg/ipasign",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary hover:underline",
                            children: "Discord server"
                        }), "."]
                    })
                })]
            })
        }), x.jsx(Wd, {})]
    }),
    xk = () => {
        const e = dl();
        return _.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), x.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: x.jsxs("div", {
                className: "text-center",
                children: [x.jsx("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }), x.jsx("p", {
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }), x.jsx("a", {
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                })]
            })
        })
    },
    bk = new XS,
    Sk = () => x.jsx(JS, {
        client: bk,
        children: x.jsx(K_, {
            defaultTheme: "system",
            storageKey: "theme",
            children: x.jsxs(wr, {
                children: [x.jsx(kb, {}), x.jsx(t2, {}), x.jsx(V_, {
                    children: x.jsxs($_, {
                        children: [x.jsx(fi, {
                            path: "/",
                            element: x.jsx(vk, {})
                        }), x.jsx(fi, {
                            path: "/config",
                            element: x.jsx(yk, {})
                        }), x.jsx(fi, {
                            path: "/credits",
                            element: x.jsx(wk, {})
                        }), x.jsx(fi, {
                            path: "*",
                            element: x.jsx(xk, {})
                        })]
                    })
                })]
            })
        })
    });
Cg(document.getElementById("root")).render(x.jsx(Sk, {}));
