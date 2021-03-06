!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(t, n) {
    var h = []
      , p = h.slice
      , Se = h.concat
      , te = h.push
      , Te = h.indexOf
      , M = {}
      , Yt = M.toString
      , E = M.hasOwnProperty
      , U = "".trim
      , i = {}
      , De = "1.11.0"
      , e = function(t, n) {
        return new e.fn.init(t,n)
    }
      , Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , tn = /^-ms-/
      , en = /-([\da-z])/gi
      , Zt = function(e, t) {
        return t.toUpperCase()
    }
    ;
    e.fn = e.prototype = {
        jquery: De,
        constructor: e,
        selector: "",
        length: 0,
        toArray: function() {
            return p.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : p.call(this)
        },
        pushStack: function(t) {
            var n = e.merge(this.constructor(), t);
            return n.prevObject = this,
            n.context = this.context,
            n
        },
        each: function(t, n) {
            return e.each(this, t, n)
        },
        map: function(t) {
            return this.pushStack(e.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(p.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var n = this.length
              , t = +e + (0 > e ? n : 0);
            return this.pushStack(t >= 0 && n > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: te,
        sort: h.sort,
        splice: h.splice
    },
    e.extend = e.fn.extend = function() {
        var r, u, n, o, s, l, t = arguments[0] || {}, i = 1, c = arguments.length, a = !1;
        for ("boolean" == typeof t && (a = t,
        t = arguments[i] || {},
        i++),
        "object" == typeof t || e.isFunction(t) || (t = {}),
        i === c && (t = this,
        i--); c > i; i++)
            if (null != (s = arguments[i]))
                for (o in s)
                    r = t[o],
                    n = s[o],
                    t !== n && (a && n && (e.isPlainObject(n) || (u = e.isArray(n))) ? (u ? (u = !1,
                    l = r && e.isArray(r) ? r : []) : l = r && e.isPlainObject(r) ? r : {},
                    t[o] = e.extend(a, l, n)) : void 0 !== n && (t[o] = n));
        return t
    }
    ,
    e.extend({
        expando: "jQuery" + (De + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === e.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === e.type(t)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var r;
            if (!t || "object" !== e.type(t) || t.nodeType || e.isWindow(t))
                return !1;
            try {
                if (t.constructor && !E.call(t, "constructor") && !E.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            ;if (i.ownLast)
                for (r in t)
                    return E.call(t, r);
            for (r in t)
                ;
            return void 0 === r || E.call(t, r)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? M[Yt.call(e)] || "object" : typeof e
        },
        globalEval: function(n) {
            n && e.trim(n) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(n)
        },
        camelCase: function(e) {
            return e.replace(tn, "ms-").replace(en, Zt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, a = e.length, o = ie(e);
            if (n) {
                if (o) {
                    for (; a > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (o) {
                for (; a > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: U && !U.call("\ufeff\xa0") ? function(e) {
            return null == e ? "" : U.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(Kt, "")
        }
        ,
        makeArray: function(t, n) {
            var i = n || [];
            return null != t && (ie(Object(t)) ? e.merge(i, "string" == typeof t ? [t] : t) : te.call(i, t)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Te)
                    return Te.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            ;return -1
        },
        merge: function(e, t) {
            var r = +t.length
              , n = 0
              , i = e.length;
            while (r > n)
                e[i++] = t[n++];
            if (r !== r)
                while (void 0 !== t[n])
                    e[i++] = t[n++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, s = e.length, a = !n; s > i; i++)
                r = !t(e[i], i),
                r !== a && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var r, i = 0, s = e.length, a = ie(e), o = [];
            if (a)
                for (; s > i; i++)
                    r = t(e[i], i, n),
                    null != r && o.push(r);
            else
                for (i in e)
                    r = t(e[i], i, n),
                    null != r && o.push(r);
            return Se.apply([], o)
        },
        guid: 1,
        proxy: function(t, n) {
            var o, i, r;
            return "string" == typeof n && (r = t[n],
            n = t,
            t = r),
            e.isFunction(t) ? (o = p.call(arguments, 2),
            i = function() {
                return t.apply(n || this, o.concat(p.call(arguments)))
            }
            ,
            i.guid = t.guid = t.guid || e.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: i
    }),
    e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        M["[object " + t + "]"] = t.toLowerCase()
    });
    function ie(t) {
        var n = t.length
          , i = e.type(t);
        return "function" === i || e.isWindow(t) ? !1 : 1 === t.nodeType && n ? !0 : "array" === i || 0 === n || "number" == typeof n && n > 0 && n - 1 in t
    }
    ;var k = function(e) {
        var E, i, t, L, oe, U, M, g, k, b, s, h, p, l, w, H, D, a = "sizzle" + -new Date, d = e.document, f = 0, de = 0, re = R(), ie = R(), te = R(), W = function(e, t) {
            return e === t && (k = !0),
            0
        }
        , N = "undefined", ne = 1 << 31, ve = {}.hasOwnProperty, y = [], Ce = y.pop, Ne = y.push, m = y.push, se = y.slice, C = y.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", n = "[\\x20\\t\\r\\n\\f]", S = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ee = S.replace("w", "w#"), ae = "\\[" + n + "*(" + S + ")" + n + "*(?:([*^$|!~]?=)" + n + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + n + "*\\]", G = ":(" + S + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", B = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$","g"), xe = new RegExp("^" + n + "*," + n + "*"), Ee = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"), we = new RegExp("=" + n + "*([^\\]'\"]*?)" + n + "*\\]","g"), ge = new RegExp(G), ce = new RegExp("^" + ee + "$"), j = {
            ID: new RegExp("^#(" + S + ")"),
            CLASS: new RegExp("^\\.(" + S + ")"),
            TAG: new RegExp("^(" + S.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + G),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)","i")
        }, ue = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, A = /^[^{]+\{\s*\[native \w/, pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, V = /[+~]/, Te = /'|\\/g, x = new RegExp("\\\\([\\da-f]{1,6}" + n + "?|(" + n + ")|.)","ig"), v = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }
        ;
        try {
            m.apply(y = se.call(d.childNodes), d.childNodes),
            y[d.childNodes.length].nodeType
        } catch (o) {
            m = {
                apply: y.length ? function(e, t) {
                    Ne.apply(e, se.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , i = 0;
                    while (e[n++] = t[i++])
                        ;
                    e.length = n - 1
                }
            }
        }
        ;function r(e, t, n, r) {
            var w, u, c, g, x, h, y, f, T, v;
            if ((t ? t.ownerDocument || t : d) !== s && b(t),
            t = t || s,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (g = t.nodeType) && 9 !== g)
                return [];
            if (p && !r) {
                if (w = pe.exec(e))
                    if (c = w[1]) {
                        if (9 === g) {
                            if (u = t.getElementById(c),
                            !u || !u.parentNode)
                                return n;
                            if (u.id === c)
                                return n.push(u),
                                n
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(c)) && D(t, u) && u.id === c)
                            return n.push(u),
                            n
                    } else {
                        if (w[2])
                            return m.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((c = w[3]) && i.getElementsByClassName && t.getElementsByClassName)
                            return m.apply(n, t.getElementsByClassName(c)),
                            n
                    }
                ;if (i.qsa && (!l || !l.test(e))) {
                    if (f = y = a,
                    T = t,
                    v = 9 === g && e,
                    1 === g && "object" !== t.nodeName.toLowerCase()) {
                        h = O(e),
                        (y = t.getAttribute("id")) ? f = y.replace(Te, "\\$&") : t.setAttribute("id", f),
                        f = "[id='" + f + "'] ",
                        x = h.length;
                        while (x--)
                            h[x] = f + F(h[x]);
                        T = V.test(e) && Q(t.parentNode) || t,
                        v = h.join(",")
                    }
                    ;if (v)
                        try {
                            return m.apply(n, T.querySelectorAll(v)),
                            n
                        } catch (o) {} finally {
                            y || t.removeAttribute("id")
                        }
                }
            }
            ;return he(e.replace(B, "$1"), t, n, r)
        }
        ;function R() {
            var n = [];
            function e(i, r) {
                return n.push(i + " ") > t.cacheLength && delete e[n.shift()],
                e[i + " "] = r
            }
            ;return e
        }
        ;function u(e) {
            return e[a] = !0,
            e
        }
        ;function c(e) {
            var n = s.createElement("div");
            try {
                return !!e(n)
            } catch (t) {
                return !1
            } finally {
                n.parentNode && n.parentNode.removeChild(n),
                n = null
            }
        }
        ;function P(e, n) {
            var r = e.split("|")
              , i = e.length;
            while (i--)
                t.attrHandle[r[i]] = n
        }
        ;function K(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || ne) - (~e.sourceIndex || ne);
            if (i)
                return i;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        ;function be(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        ;function ye(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        ;function T(e) {
            return u(function(t) {
                return t = +t,
                u(function(n, i) {
                    var r, a = e([], n.length, t), o = a.length;
                    while (o--)
                        n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        ;function Q(e) {
            return e && typeof e.getElementsByTagName !== N && e
        }
        ;i = r.support = {},
        oe = r.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        b = r.setDocument = function(e) {
            var u, r = e ? e.ownerDocument || e : d, o = r.defaultView;
            return r !== s && 9 === r.nodeType && r.documentElement ? (s = r,
            h = r.documentElement,
            p = !oe(r),
            o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                b()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                b()
            })),
            i.attributes = c(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            i.getElementsByTagName = c(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            i.getElementsByClassName = A.test(r.getElementsByClassName) && c(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            i.getById = c(function(e) {
                return h.appendChild(e).id = a,
                !r.getElementsByName || !r.getElementsByName(a).length
            }),
            i.getById ? (t.find.ID = function(e, t) {
                if (typeof t.getElementById !== N && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            t.filter.ID = function(e) {
                var t = e.replace(x, v);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(e) {
                var t = e.replace(x, v);
                return function(e) {
                    var n = typeof e.getAttributeNode !== N && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            t.find.TAG = i.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== N ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = r[o++])
                        1 === n.nodeType && i.push(n);
                    return i
                }
                ;return r
            }
            ,
            t.find.CLASS = i.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== N && p ? t.getElementsByClassName(e) : void 0
            }
            ,
            w = [],
            l = [],
            (i.qsa = A.test(r.querySelectorAll)) && (c(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && l.push("[*^$]=" + n + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || l.push("\\[" + n + "*(?:value|" + J + ")"),
                e.querySelectorAll(":checked").length || l.push(":checked")
            }),
            c(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && l.push("name" + n + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || l.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                l.push(",.*:")
            })),
            (i.matchesSelector = A.test(H = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && c(function(e) {
                i.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                w.push("!=", G)
            }),
            l = l.length && new RegExp(l.join("|")),
            w = w.length && new RegExp(w.join("|")),
            u = A.test(h.compareDocumentPosition),
            D = u || A.test(h.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            W = u ? function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === d && D(d, e) ? -1 : t === r || t.ownerDocument === d && D(d, t) ? 1 : g ? C.call(g, e) - C.call(g, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var i, n = 0, l = e.parentNode, s = t.parentNode, a = [e], o = [t];
                if (!l || !s)
                    return e === r ? -1 : t === r ? 1 : l ? -1 : s ? 1 : g ? C.call(g, e) - C.call(g, t) : 0;
                if (l === s)
                    return K(e, t);
                i = e;
                while (i = i.parentNode)
                    a.unshift(i);
                i = t;
                while (i = i.parentNode)
                    o.unshift(i);
                while (a[n] === o[n])
                    n++;
                return n ? K(a[n], o[n]) : a[n] === d ? -1 : o[n] === d ? 1 : 0
            }
            ,
            r) : s
        }
        ,
        r.matches = function(e, t) {
            return r(e, null , null , t)
        }
        ,
        r.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== s && b(e),
            t = t.replace(we, "='$1']"),
            !(!i.matchesSelector || !p || w && w.test(t) || l && l.test(t)))
                try {
                    var o = H.call(e, t);
                    if (o || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return o
                } catch (n) {}
            ;return r(t, s, null , [e]).length > 0
        }
        ,
        r.contains = function(e, t) {
            return (e.ownerDocument || e) !== s && b(e),
            D(e, t)
        }
        ,
        r.attr = function(e, n) {
            (e.ownerDocument || e) !== s && b(e);
            var o = t.attrHandle[n.toLowerCase()]
              , r = o && ve.call(t.attrHandle, n.toLowerCase()) ? o(e, n, !p) : void 0;
            return void 0 !== r ? r : i.attributes || !p ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null
        }
        ,
        r.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        r.uniqueSort = function(e) {
            var o, r = [], n = 0, t = 0;
            if (k = !i.detectDuplicates,
            g = !i.sortStable && e.slice(0),
            e.sort(W),
            k) {
                while (o = e[t++])
                    o === e[t] && (n = r.push(t));
                while (n--)
                    e.splice(r[n], 1)
            }
            ;return g = null ,
            e
        }
        ,
        L = r.getText = function(e) {
            var i, n = "", r = 0, t = e.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += L(e)
                } else if (3 === t || 4 === t)
                    return e.nodeValue
            } else
                while (i = e[r++])
                    n += L(i);
            return n
        }
        ,
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: u,
            match: j,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(x, v),
                    e[3] = (e[4] || e[5] || "").replace(x, v),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, t = !e[5] && e[2];
                    return j.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : t && ge.test(t) && (n = O(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n),
                    e[2] = t.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(x, v).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = re[e + " "];
                    return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && re(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== N && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = r.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var l = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , o = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var h, y, c, d, p, v, g = l !== s ? "nextSibling" : "previousSibling", m = t.parentNode, x = o && t.nodeName.toLowerCase(), b = !u && !o;
                        if (m) {
                            if (l) {
                                while (g) {
                                    c = t;
                                    while (c = c[g])
                                        if (o ? c.nodeName.toLowerCase() === x : 1 === c.nodeType)
                                            return !1;
                                    v = g = "only" === e && !v && "nextSibling"
                                }
                                ;return !0
                            }
                            ;if (v = [s ? m.firstChild : m.lastChild],
                            s && b) {
                                y = m[a] || (m[a] = {}),
                                h = y[e] || [],
                                p = h[0] === f && h[1],
                                d = h[0] === f && h[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[g] || (d = p = 0) || v.pop())
                                    if (1 === c.nodeType && ++d && c === t) {
                                        y[e] = [f, p, d];
                                        break
                                    }
                            } else if (b && (h = (t[a] || (t[a] = {}))[e]) && h[0] === f)
                                d = h[1];
                            else
                                while (c = ++p && c && c[g] || (d = p = 0) || v.pop())
                                    if ((o ? c.nodeName.toLowerCase() === x : 1 === c.nodeType) && ++d && (b && ((c[a] || (c[a] = {}))[e] = [f, d]),
                                    c === t))
                                        break;
                            return d -= r,
                            d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
                    return i[a] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                    t.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                        var o, a = i(e, n), r = a.length;
                        while (r--)
                            o = C.call(e, a[r]),
                            e[o] = !(t[o] = a[r])
                    }) : function(e) {
                        return i(e, 0, o)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: u(function(e) {
                    var n = []
                      , i = []
                      , t = U(e.replace(B, "$1"));
                    return t[a] ? u(function(e, n, i, r) {
                        var a, s = t(e, null , r, []), o = e.length;
                        while (o--)
                            (a = s[o]) && (e[o] = !(n[o] = a))
                    }) : function(e, r, o) {
                        return n[0] = e,
                        t(n, null , o, i),
                        !i.pop()
                    }
                }),
                has: u(function(e) {
                    return function(t) {
                        return r(e, t).length > 0
                    }
                }),
                contains: u(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || L(t)).indexOf(e) > -1
                    }
                }),
                lang: u(function(e) {
                    return ce.test(e || "") || r.error("unsupported lang: " + e),
                    e = e.replace(x, v).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !t.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return ue.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: T(function() {
                    return [0]
                }),
                last: T(function(e, t) {
                    return [t - 1]
                }),
                eq: T(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: T(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: T(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: T(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: T(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        t.pseudos.nth = t.pseudos.eq;
        for (E in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[E] = be(E);
        for (E in {
            submit: !0,
            reset: !0
        })
            t.pseudos[E] = ye(E);
        function Z() {}
        ;Z.prototype = t.filters = t.pseudos,
        t.setFilters = new Z;
        function O(e, n) {
            var a, o, u, s, i, c, l, d = ie[e + " "];
            if (d)
                return n ? 0 : d.slice(0);
            i = e,
            c = [],
            l = t.preFilter;
            while (i) {
                (!a || (o = xe.exec(i))) && (o && (i = i.slice(o[0].length) || i),
                c.push(u = [])),
                a = !1,
                (o = Ee.exec(i)) && (a = o.shift(),
                u.push({
                    value: a,
                    type: o[0].replace(B, " ")
                }),
                i = i.slice(a.length));
                for (s in t.filter)
                    !(o = j[s].exec(i)) || l[s] && !(o = l[s](o)) || (a = o.shift(),
                    u.push({
                        value: a,
                        type: s,
                        matches: o
                    }),
                    i = i.slice(a.length));
                if (!a)
                    break
            }
            ;return n ? i.length : i ? r.error(e) : ie(e, c).slice(0)
        }
        ;function F(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++)
                n += e[t].value;
            return n
        }
        ;function Y(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = de++;
            return t.first ? function(t, n, o) {
                while (t = t[i])
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var l, c, u = [f, o];
                if (s) {
                    while (t = t[i])
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    while (t = t[i])
                        if (1 === t.nodeType || r) {
                            if (c = t[a] || (t[a] = {}),
                            (l = c[i]) && l[0] === f && l[1] === o)
                                return u[2] = l[2];
                            if (c[i] = u,
                            u[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        ;function z(e) {
            return e.length > 1 ? function(t, n, i) {
                var r = e.length;
                while (r--)
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        ;function q(e, t, n, i, r) {
            for (var a, s = [], o = 0, u = e.length, l = null != t; u > o; o++)
                (a = e[o]) && (!n || n(a, i, r)) && (s.push(a),
                l && t.push(o));
            return s
        }
        ;function I(e, t, n, i, r, o) {
            return i && !i[a] && (i = I(i)),
            r && !r[a] && (r = I(r, o)),
            u(function(o, a, s, l) {
                var d, c, f, g = [], h = [], y = a.length, v = o || me(t || "*", s.nodeType ? [s] : s, []), p = !e || !o && t ? v : q(v, g, e, s, l), u = n ? r || (o ? e : y || i) ? [] : a : p;
                if (n && n(p, u, s, l),
                i) {
                    d = q(u, h),
                    i(d, [], s, l),
                    c = d.length;
                    while (c--)
                        (f = d[c]) && (u[h[c]] = !(p[h[c]] = f))
                }
                ;if (o) {
                    if (r || e) {
                        if (r) {
                            d = [],
                            c = u.length;
                            while (c--)
                                (f = u[c]) && d.push(p[c] = f);
                            r(null , u = [], d, l)
                        }
                        ;c = u.length;
                        while (c--)
                            (f = u[c]) && (d = r ? C.call(o, f) : g[c]) > -1 && (o[d] = !(a[d] = f))
                    }
                } else
                    u = q(u === a ? u.splice(y, u.length) : u),
                    r ? r(null , a, u, l) : m.apply(a, u)
            })
        }
        ;function X(e) {
            for (var u, r, i, s = e.length, l = t.relative[e[0].type], c = l || t.relative[" "], n = l ? 1 : 0, d = Y(function(e) {
                return e === u
            }, c, !0), f = Y(function(e) {
                return C.call(u, e) > -1
            }, c, !0), o = [function(e, t, n) {
                return !l && (n || t !== M) || ((u = t).nodeType ? d(e, t, n) : f(e, t, n))
            }
            ]; s > n; n++)
                if (r = t.relative[e[n].type])
                    o = [Y(z(o), r)];
                else {
                    if (r = t.filter[e[n].type].apply(null , e[n].matches),
                    r[a]) {
                        for (i = ++n; s > i; i++)
                            if (t.relative[e[i].type])
                                break;
                        return I(n > 1 && z(o), n > 1 && F(e.slice(0, n - 1).concat({
                            value: " " === e[n - 2].type ? "*" : ""
                        })).replace(B, "$1"), r, i > n && X(e.slice(n, i)), s > i && X(e = e.slice(i)), s > i && F(e))
                    }
                    ;o.push(r)
                }
            ;return z(o)
        }
        ;function fe(e, n) {
            var i = n.length > 0
              , a = e.length > 0
              , o = function(o, l, u, c, d) {
                var h, b, v, y = 0, p = "0", x = o && [], g = [], T = M, C = o || a && t.find.TAG("*", d), w = f += null == T ? 1 : Math.random() || .1, N = C.length;
                for (d && (M = l !== s && l); p !== N && null != (h = C[p]); p++) {
                    if (a && h) {
                        b = 0;
                        while (v = e[b++])
                            if (v(h, l, u)) {
                                c.push(h);
                                break
                            }
                        ;d && (f = w)
                    }
                    ;i && ((h = !v && h) && y--,
                    o && x.push(h))
                }
                ;if (y += p,
                i && p !== y) {
                    b = 0;
                    while (v = n[b++])
                        v(x, g, l, u);
                    if (o) {
                        if (y > 0)
                            while (p--)
                                x[p] || g[p] || (g[p] = Ce.call(c));
                        g = q(g)
                    }
                    ;m.apply(c, g),
                    d && !o && g.length > 0 && y + n.length > 1 && r.uniqueSort(c)
                }
                ;return d && (f = w,
                M = T),
                x
            }
            ;
            return i ? u(o) : o
        }
        ;U = r.compile = function(e, t) {
            var i, r = [], o = [], n = te[e + " "];
            if (!n) {
                t || (t = O(e)),
                i = t.length;
                while (i--)
                    n = X(t[i]),
                    n[a] ? r.push(n) : o.push(n);
                n = te(e, fe(o, r))
            }
            ;return n
        }
        ;
        function me(e, t, n) {
            for (var i = 0, o = t.length; o > i; i++)
                r(e, t[i], n);
            return n
        }
        ;function he(e, n, r, o) {
            var u, a, s, c, d, l = O(e);
            if (!o && 1 === l.length) {
                if (a = l[0] = l[0].slice(0),
                a.length > 2 && "ID" === (s = a[0]).type && i.getById && 9 === n.nodeType && p && t.relative[a[1].type]) {
                    if (n = (t.find.ID(s.matches[0].replace(x, v), n) || [])[0],
                    !n)
                        return r;
                    e = e.slice(a.shift().value.length)
                }
                ;u = j.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    if (s = a[u],
                    t.relative[c = s.type])
                        break;
                    if ((d = t.find[c]) && (o = d(s.matches[0].replace(x, v), V.test(a[0].type) && Q(n.parentNode) || n))) {
                        if (a.splice(u, 1),
                        e = o.length && F(a),
                        !e)
                            return m.apply(r, o),
                            r;
                        break
                    }
                }
            }
            ;return U(e, l)(o, n, !p, r, V.test(e) && Q(n.parentNode) || n),
            r
        }
        ;return i.sortStable = a.split("").sort(W).join("") === a,
        i.detectDuplicates = !!k,
        b(),
        i.sortDetached = c(function(e) {
            return 1 & e.compareDocumentPosition(s.createElement("div"))
        }),
        c(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || P("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        i.attributes && c(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || P("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        c(function(e) {
            return null == e.getAttribute("disabled")
        }) || P(J, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        r
    }(t);
    e.find = k,
    e.expr = k.selectors,
    e.expr[":"] = e.expr.pseudos,
    e.unique = k.uniqueSort,
    e.text = k.getText,
    e.isXMLDoc = k.isXML,
    e.contains = k.contains;
    var xe = e.expr.match.needsContext
      , je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , Tt = /^.[^:#\[\.,]*$/;
    function le(t, n, i) {
        if (e.isFunction(n))
            return e.grep(t, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
        if (n.nodeType)
            return e.grep(t, function(e) {
                return e === n !== i
            });
        if ("string" == typeof n) {
            if (Tt.test(n))
                return e.filter(n, t, i);
            n = e.filter(n, t)
        }
        ;return e.grep(t, function(t) {
            return e.inArray(t, n) >= 0 !== i
        })
    }
    ;e.filter = function(t, n, i) {
        var r = n[0];
        return i && (t = ":not(" + t + ")"),
        1 === n.length && 1 === r.nodeType ? e.find.matchesSelector(r, t) ? [r] : [] : e.find.matches(t, e.grep(n, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    e.fn.extend({
        find: function(t) {
            var n, i = [], o = this, r = o.length;
            if ("string" != typeof t)
                return this.pushStack(e(t).filter(function() {
                    for (n = 0; r > n; n++)
                        if (e.contains(o[n], this))
                            return !0
                }));
            for (n = 0; r > n; n++)
                e.find(t, o[n], i);
            return i = this.pushStack(r > 1 ? e.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t : t,
            i
        },
        filter: function(e) {
            return this.pushStack(le(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(le(this, e || [], !0))
        },
        is: function(t) {
            return !!le(this, "string" == typeof t && xe.test(t) ? e(t) : t || [], !1).length
        }
    });
    var j, r = t.document, dn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, cn = e.fn.init = function(t, n) {
        var i, o;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null , t, null ] : dn.exec(t),
            !i || !i[1] && n)
                return !n || n.jquery ? (n || j).find(t) : this.constructor(n).find(t);
            if (i[1]) {
                if (n = n instanceof e ? n[0] : n,
                e.merge(this, e.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : r, !0)),
                je.test(i[1]) && e.isPlainObject(n))
                    for (i in n)
                        e.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            ;if (o = r.getElementById(i[2]),
            o && o.parentNode) {
                if (o.id !== i[2])
                    return j.find(t);
                this.length = 1,
                this[0] = o
            }
            ;return this.context = r,
            this.selector = t,
            this
        }
        ;return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : e.isFunction(t) ? "undefined" != typeof j.ready ? j.ready(t) : t(e) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        e.makeArray(t, this))
    }
    ;
    cn.prototype = e.fn,
    j = e(r);
    var ln = /^(?:parents|prev(?:Until|All))/
      , un = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.extend({
        dir: function(t, n, i) {
            var o = []
              , r = t[n];
            while (r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !e(r).is(i)))
                1 === r.nodeType && o.push(r),
                r = r[n];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    e.fn.extend({
        has: function(t) {
            var n, i = e(t, this), r = i.length;
            return this.filter(function() {
                for (n = 0; r > n; n++)
                    if (e.contains(this, i[n]))
                        return !0
            })
        },
        closest: function(t, n) {
            for (var i, o = 0, s = this.length, r = [], a = xe.test(t) || "string" != typeof t ? e(t, n || this.context) : 0; s > o; o++)
                for (i = this[o]; i && i !== n; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && e.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            ;return this.pushStack(r.length > 1 ? e.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? e.inArray(this[0], e(t)) : e.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, n) {
            return this.pushStack(e.unique(e.merge(this.get(), e(t, n))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function de(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    ;e.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(t) {
            return e.dir(t, "parentNode")
        },
        parentsUntil: function(t, n, i) {
            return e.dir(t, "parentNode", i)
        },
        next: function(e) {
            return de(e, "nextSibling")
        },
        prev: function(e) {
            return de(e, "previousSibling")
        },
        nextAll: function(t) {
            return e.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return e.dir(t, "previousSibling")
        },
        nextUntil: function(t, n, i) {
            return e.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, n, i) {
            return e.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return e.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return e.sibling(t.firstChild)
        },
        contents: function(t) {
            return e.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : e.merge([], t.childNodes)
        }
    }, function(t, n) {
        e.fn[t] = function(i, r) {
            var o = e.map(this, n, i);
            return "Until" !== t.slice(-5) && (r = i),
            r && "string" == typeof r && (o = e.filter(r, o)),
            this.length > 1 && (un[t] || (o = e.unique(o)),
            ln.test(t) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var c = /\S+/g
      , fe = {};
    function pn(t) {
        var n = fe[t] = {};
        return e.each(t.match(c) || [], function(e, t) {
            n[t] = !0
        }),
        n
    }
    ;e.Callbacks = function(t) {
        t = "string" == typeof t ? fe[t] || pn(t) : e.extend({}, t);
        var s, r, c, a, o, d, n = [], i = !t.once && [], u = function(e) {
            for (r = t.memory && e,
            c = !0,
            o = d || 0,
            d = 0,
            a = n.length,
            s = !0; n && a > o; o++)
                if (n[o].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                    r = !1;
                    break
                }
            ;s = !1,
            n && (i ? i.length && u(i.shift()) : r ? n = [] : l.disable())
        }
        , l = {
            add: function() {
                if (n) {
                    var i = n.length;
                    !function o(i) {
                        e.each(i, function(i, r) {
                            var a = e.type(r);
                            "function" === a ? t.unique && l.has(r) || n.push(r) : r && r.length && "string" !== a && o(r)
                        })
                    }(arguments),
                    s ? a = n.length : r && (d = i,
                    u(r))
                }
                ;return this
            },
            remove: function() {
                return n && e.each(arguments, function(t, i) {
                    var r;
                    while ((r = e.inArray(i, n, r)) > -1)
                        n.splice(r, 1),
                        s && (a >= r && a--,
                        o >= r && o--)
                }),
                this
            },
            has: function(t) {
                return t ? e.inArray(t, n) > -1 : !(!n || !n.length)
            },
            empty: function() {
                return n = [],
                a = 0,
                this
            },
            disable: function() {
                return n = i = r = void 0,
                this
            },
            disabled: function() {
                return !n
            },
            lock: function() {
                return i = void 0,
                r || l.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(e, t) {
                return !n || c && !i || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                s ? i.push(t) : u(t)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return l
    }
    ,
    e.extend({
        Deferred: function(t) {
            var r = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]]
              , o = "pending"
              , i = {
                state: function() {
                    return o
                },
                always: function() {
                    return n.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return e.Deferred(function(o) {
                        e.each(r, function(r, a) {
                            var s = e.isFunction(t[r]) && t[r];
                            n[a[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && e.isFunction(t.promise) ? t.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[a[0] + "With"](this === i ? o.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? e.extend(t, i) : i
                }
            }
              , n = {};
            return i.pipe = i.then,
            e.each(r, function(e, t) {
                var a = t[2]
                  , s = t[3];
                i[t[1]] = a.add,
                s && a.add(function() {
                    o = s
                }, r[1 ^ e][2].disable, r[2][2].lock),
                n[t[0]] = function() {
                    return n[t[0] + "With"](this === n ? i : this, arguments),
                    this
                }
                ,
                n[t[0] + "With"] = a.fireWith
            }),
            i.promise(n),
            t && t.call(n, n),
            n
        },
        when: function(t) {
            var n = 0, r = p.call(arguments), i = r.length, a = 1 !== i || t && e.isFunction(t.promise) ? i : 0, o = 1 === a ? t : e.Deferred(), u = function(e, t, n) {
                return function(i) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? p.call(arguments) : i,
                    n === l ? o.notifyWith(t, n) : --a || o.resolveWith(t, n)
                }
            }
            , l, c, s;
            if (i > 1)
                for (l = new Array(i),
                c = new Array(i),
                s = new Array(i); i > n; n++)
                    r[n] && e.isFunction(r[n].promise) ? r[n].promise().done(u(n, s, r)).fail(o.reject).progress(u(n, c, l)) : --a;
            return a || o.resolveWith(s, r),
            o.promise()
        }
    });
    var q;
    e.fn.ready = function(t) {
        return e.ready.promise().done(t),
        this
    }
    ,
    e.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? e.readyWait++ : e.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--e.readyWait : !e.isReady) {
                if (!r.body)
                    return setTimeout(e.ready);
                e.isReady = !0,
                t !== !0 && --e.readyWait > 0 || (q.resolveWith(r, [e]),
                e.fn.trigger && e(r).trigger("ready").off("ready"))
            }
        }
    });
    function it() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", d, !1),
        t.removeEventListener("load", d, !1)) : (r.detachEvent("onreadystatechange", d),
        t.detachEvent("onload", d))
    }
    ;function d() {
        (r.addEventListener || "load" === event.type || "complete" === r.readyState) && (it(),
        e.ready())
    }
    ;e.ready.promise = function(n) {
        if (!q)
            if (q = e.Deferred(),
            "complete" === r.readyState)
                setTimeout(e.ready);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", d, !1),
                t.addEventListener("load", d, !1);
            else {
                r.attachEvent("onreadystatechange", d),
                t.attachEvent("onload", d);
                var o = !1;
                try {
                    o = null == t.frameElement && r.documentElement
                } catch (i) {}
                ;o && o.doScroll && !function a() {
                    if (!e.isReady) {
                        try {
                            o.doScroll("left")
                        } catch (t) {
                            return setTimeout(a, 50)
                        }
                        ;it(),
                        e.ready()
                    }
                }()
            }
        ;return q.promise(n)
    }
    ;
    var u = "undefined", ve;
    for (ve in e(i))
        break;
    i.ownLast = "0" !== ve,
    i.inlineBlockNeedsLayout = !1,
    e(function() {
        var t, e, n = r.getElementsByTagName("body")[0];
        n && (t = r.createElement("div"),
        t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        e = r.createElement("div"),
        n.appendChild(t).appendChild(e),
        typeof e.style.zoom !== u && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        (i.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)),
        n.removeChild(t),
        t = e = null )
    }),
    function() {
        var t = r.createElement("div");
        if (null == i.deleteExpando) {
            i.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                i.deleteExpando = !1
            }
        }
        ;t = null
    }(),
    e.acceptData = function(t) {
        var n = e.noData[(t.nodeName + " ").toLowerCase()]
          , i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !n || n !== !0 && t.getAttribute("classid") === n
    }
    ;
    var Xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ut = /([A-Z])/g;
    function ce(t, n, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var o = "data-" + n.replace(Ut, "-$1").toLowerCase();
            if (i = t.getAttribute(o),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Xt.test(i) ? e.parseJSON(i) : i
                } catch (r) {}
                ;e.data(t, n, i)
            } else
                i = void 0
        }
        ;return i
    }
    ;function se(t) {
        var n;
        for (n in t)
            if (("data" !== n || !e.isEmptyObject(t[n])) && "toJSON" !== n)
                return !1;
        return !0
    }
    ;function we(t, n, i, r) {
        if (e.acceptData(t)) {
            var l, a, u = e.expando, c = t.nodeType, s = c ? e.cache : t, o = c ? t[u] : t[u] && u;
            if (o && s[o] && (r || s[o].data) || void 0 !== i || "string" != typeof n)
                return o || (o = c ? t[u] = h.pop() || e.guid++ : u),
                s[o] || (s[o] = c ? {} : {
                    toJSON: e.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (r ? s[o] = e.extend(s[o], n) : s[o].data = e.extend(s[o].data, n)),
                a = s[o],
                r || (a.data || (a.data = {}),
                a = a.data),
                void 0 !== i && (a[e.camelCase(n)] = i),
                "string" == typeof n ? (l = a[n],
                null == l && (l = a[e.camelCase(n)])) : l = a,
                l
        }
    }
    ;function Ee(t, n, r) {
        if (e.acceptData(t)) {
            var s, l, u = t.nodeType, o = u ? e.cache : t, a = u ? t[e.expando] : e.expando;
            if (o[a]) {
                if (n && (s = r ? o[a] : o[a].data)) {
                    e.isArray(n) ? n = n.concat(e.map(n, e.camelCase)) : n in s ? n = [n] : (n = e.camelCase(n),
                    n = n in s ? [n] : n.split(" ")),
                    l = n.length;
                    while (l--)
                        delete s[n[l]];
                    if (r ? !se(s) : !e.isEmptyObject(s))
                        return
                }
                (r || (delete o[a].data,
                se(o[a]))) && (u ? e.cleanData([t], !0) : i.deleteExpando || o != o.window ? delete o[a] : o[a] = null )
            }
        }
    }
    ;e.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? e.cache[t[e.expando]] : t[e.expando],
            !!t && !se(t)
        },
        data: function(e, t, n) {
            return we(e, t, n)
        },
        removeData: function(e, t) {
            return Ee(e, t)
        },
        _data: function(e, t, n) {
            return we(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return Ee(e, t, !0)
        }
    }),
    e.fn.extend({
        data: function(t, n) {
            var a, r, o, i = this[0], s = i && i.attributes;
            if (void 0 === t) {
                if (this.length && (o = e.data(i),
                1 === i.nodeType && !e._data(i, "parsedAttrs"))) {
                    a = s.length;
                    while (a--)
                        r = s[a].name,
                        0 === r.indexOf("data-") && (r = e.camelCase(r.slice(5)),
                        ce(i, r, o[r]));
                    e._data(i, "parsedAttrs", !0)
                }
                ;return o
            }
            ;return "object" == typeof t ? this.each(function() {
                e.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                e.data(this, t, n)
            }) : i ? ce(i, t, e.data(i, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                e.removeData(this, t)
            })
        }
    }),
    e.extend({
        queue: function(t, n, i) {
            var r;
            return t ? (n = (n || "fx") + "queue",
            r = e._data(t, n),
            i && (!r || e.isArray(i) ? r = e._data(t, n, e.makeArray(i)) : r.push(i)),
            r || []) : void 0
        },
        dequeue: function(t, n) {
            n = n || "fx";
            var r = e.queue(t, n)
              , a = r.length
              , i = r.shift()
              , o = e._queueHooks(t, n)
              , s = function() {
                e.dequeue(t, n)
            }
            ;
            "inprogress" === i && (i = r.shift(),
            a--),
            i && ("fx" === n && r.unshift("inprogress"),
            delete o.stop,
            i.call(t, s, o)),
            !a && o && o.empty.fire()
        },
        _queueHooks: function(t, n) {
            var i = n + "queueHooks";
            return e._data(t, i) || e._data(t, i, {
                empty: e.Callbacks("once memory").add(function() {
                    e._removeData(t, n + "queue"),
                    e._removeData(t, i)
                })
            })
        }
    }),
    e.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            i--),
            arguments.length < i ? e.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var i = e.queue(this, t, n);
                e._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && e.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                e.dequeue(this, t)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(t, n) {
            var i, s = 1, l = e.Deferred(), r = this, a = this.length, o = function() {
                --s || l.resolveWith(r, [r])
            }
            ;
            "string" != typeof t && (n = t,
            t = void 0),
            t = t || "fx";
            while (a--)
                i = e._data(r[a], t + "queueHooks"),
                i && i.empty && (s++,
                i.empty.add(o));
            return o(),
            l.promise(n)
        }
    });
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , g = ["Top", "Right", "Bottom", "Left"]
      , L = function(t, n) {
        return t = n || t,
        "none" === e.css(t, "display") || !e.contains(t.ownerDocument, t)
    }
      , x = e.access = function(t, n, i, r, o, l, u) {
        var a = 0
          , c = t.length
          , s = null == i;
        if ("object" === e.type(i)) {
            o = !0;
            for (a in i)
                e.access(t, n, a, i[a], !0, l, u)
        } else if (void 0 !== r && (o = !0,
        e.isFunction(r) || (u = !0),
        s && (u ? (n.call(t, r),
        n = null ) : (s = n,
        n = function(t, n, i) {
            return s.call(e(t), i)
        }
        )),
        n))
            for (; c > a; a++)
                n(t[a], i, u ? r : r.call(t[a], a, n(t[a], i)));
        return o ? t : s ? n.call(t) : c ? n(t[0], i) : l
    }
      , I = /^(?:checkbox|radio)$/i;
    !function() {
        var o = r.createDocumentFragment()
          , t = r.createElement("div")
          , n = r.createElement("input");
        if (t.setAttribute("className", "t"),
        t.innerHTML = "<link/><table></table><a href='/a'>a</a>",
        i.leadingWhitespace = 3 === t.firstChild.nodeType,
        i.tbody = !t.getElementsByTagName("tbody").length,
        i.htmlSerialize = !!t.getElementsByTagName("link").length,
        i.html5Clone = "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        o.appendChild(n),
        i.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        i.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        o.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        i.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        i.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            i.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == i.deleteExpando) {
            i.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                i.deleteExpando = !1
            }
        }
        ;o = t = n = null
    }(),
    function() {
        var e, n, o = r.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (i[e + "Bubbles"] = n in t) || (o.setAttribute(n, "t"),
            i[e + "Bubbles"] = o.attributes[n].expando === !1);
        o = null
    }();
    var Q = /^(?:input|select|textarea)$/i
      , Lt = /^key/
      , Dt = /^(?:mouse|contextmenu)|click/
      , Fe = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function B() {
        return !0
    }
    ;function C() {
        return !1
    }
    ;function Ne() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    ;e.event = {
        global: {},
        add: function(t, n, i, r, o) {
            var g, m, y, h, s, l, f, d, a, v, b, p = e._data(t);
            if (p) {
                i.handler && (h = i,
                i = h.handler,
                o = h.selector),
                i.guid || (i.guid = e.guid++),
                (m = p.events) || (m = p.events = {}),
                (l = p.handle) || (l = p.handle = function(t) {
                    return typeof e === u || t && e.event.triggered === t.type ? void 0 : e.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = t),
                n = (n || "").match(c) || [""],
                y = n.length;
                while (y--)
                    g = rt.exec(n[y]) || [],
                    a = b = g[1],
                    v = (g[2] || "").split(".").sort(),
                    a && (s = e.event.special[a] || {},
                    a = (o ? s.delegateType : s.bindType) || a,
                    s = e.event.special[a] || {},
                    f = e.extend({
                        type: a,
                        origType: b,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && e.expr.match.needsContext.test(o),
                        namespace: v.join(".")
                    }, h),
                    (d = m[a]) || (d = m[a] = [],
                    d.delegateCount = 0,
                    s.setup && s.setup.call(t, r, v, l) !== !1 || (t.addEventListener ? t.addEventListener(a, l, !1) : t.attachEvent && t.attachEvent("on" + a, l))),
                    s.add && (s.add.call(t, f),
                    f.handler.guid || (f.handler.guid = i.guid)),
                    o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                    e.event.global[a] = !0);
                t = null
            }
        },
        remove: function(t, n, i, r, o) {
            var m, s, u, v, h, p, l, d, a, g, y, f = e.hasData(t) && e._data(t);
            if (f && (p = f.events)) {
                n = (n || "").match(c) || [""],
                h = n.length;
                while (h--)
                    if (u = rt.exec(n[h]) || [],
                    a = y = u[1],
                    g = (u[2] || "").split(".").sort(),
                    a) {
                        l = e.event.special[a] || {},
                        a = (r ? l.delegateType : l.bindType) || a,
                        d = p[a] || [],
                        u = u[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        v = m = d.length;
                        while (m--)
                            s = d[m],
                            !o && y !== s.origType || i && i.guid !== s.guid || u && !u.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (d.splice(m, 1),
                            s.selector && d.delegateCount--,
                            l.remove && l.remove.call(t, s));
                        v && !d.length && (l.teardown && l.teardown.call(t, g, f.handle) !== !1 || e.removeEvent(t, a, f.handle),
                        delete p[a])
                    } else
                        for (a in p)
                            e.event.remove(t, a + n[h], i, r, !0);
                e.isEmptyObject(p) && (delete f.handle,
                e._removeData(t, "events"))
            }
        },
        trigger: function(n, i, o, a) {
            var f, p, u, g, d, c, v, m = [o || r], l = E.call(n, "type") ? n.type : n, h = E.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = c = o = o || r,
            3 !== o.nodeType && 8 !== o.nodeType && !Fe.test(l + e.event.triggered) && (l.indexOf(".") >= 0 && (h = l.split("."),
            l = h.shift(),
            h.sort()),
            p = l.indexOf(":") < 0 && "on" + l,
            n = n[e.expando] ? n : new e.Event(l,"object" == typeof n && n),
            n.isTrigger = a ? 2 : 3,
            n.namespace = h.join("."),
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            n.result = void 0,
            n.target || (n.target = o),
            i = null == i ? [n] : e.makeArray(i, [n]),
            d = e.event.special[l] || {},
            a || !d.trigger || d.trigger.apply(o, i) !== !1)) {
                if (!a && !d.noBubble && !e.isWindow(o)) {
                    for (g = d.delegateType || l,
                    Fe.test(g + l) || (u = u.parentNode); u; u = u.parentNode)
                        m.push(u),
                        c = u;
                    c === (o.ownerDocument || r) && m.push(c.defaultView || c.parentWindow || t)
                }
                ;v = 0;
                while ((u = m[v++]) && !n.isPropagationStopped())
                    n.type = v > 1 ? g : d.bindType || l,
                    f = (e._data(u, "events") || {})[n.type] && e._data(u, "handle"),
                    f && f.apply(u, i),
                    f = p && u[p],
                    f && f.apply && e.acceptData(u) && (n.result = f.apply(u, i),
                    n.result === !1 && n.preventDefault());
                if (n.type = l,
                !a && !n.isDefaultPrevented() && (!d._default || d._default.apply(m.pop(), i) === !1) && e.acceptData(o) && p && o[l] && !e.isWindow(o)) {
                    c = o[p],
                    c && (o[p] = null ),
                    e.event.triggered = l;
                    try {
                        o[l]()
                    } catch (s) {}
                    ;e.event.triggered = void 0,
                    c && (o[p] = c)
                }
                ;return n.result
            }
        },
        dispatch: function(t) {
            t = e.event.fix(t);
            var a, o, n, r, u, l = [], s = p.call(arguments), c = (e._data(this, "events") || {})[t.type] || [], i = e.event.special[t.type] || {};
            if (s[0] = t,
            t.delegateTarget = this,
            !i.preDispatch || i.preDispatch.call(this, t) !== !1) {
                l = e.event.handlers.call(this, t, c),
                a = 0;
                while ((r = l[a++]) && !t.isPropagationStopped()) {
                    t.currentTarget = r.elem,
                    u = 0;
                    while ((n = r.handlers[u++]) && !t.isImmediatePropagationStopped())
                        (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n,
                        t.data = n.data,
                        o = ((e.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, s),
                        void 0 !== o && (t.result = o) === !1 && (t.preventDefault(),
                        t.stopPropagation()))
                }
                ;return i.postDispatch && i.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, n) {
            var o, l, r, s, u = [], a = n.delegateCount, i = t.target;
            if (a && i.nodeType && (!t.button || "click" !== t.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== t.type)) {
                        for (r = [],
                        s = 0; a > s; s++)
                            l = n[s],
                            o = l.selector + " ",
                            void 0 === r[o] && (r[o] = l.needsContext ? e(o, this).index(i) >= 0 : e.find(o, this, null , [i]).length),
                            r[o] && r.push(l);
                        r.length && u.push({
                            elem: i,
                            handlers: r
                        })
                    }
            ;return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }),
            u
        },
        fix: function(t) {
            if (t[e.expando])
                return t;
            var s, l, a, i = t.type, o = t, n = this.fixHooks[i];
            n || (this.fixHooks[i] = n = Dt.test(i) ? this.mouseHooks : Lt.test(i) ? this.keyHooks : {}),
            a = n.props ? this.props.concat(n.props) : this.props,
            t = new e.Event(o),
            s = a.length;
            while (s--)
                l = a[s],
                t[l] = o[l];
            return t.target || (t.target = o.srcElement || r),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            n.filter ? n.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, s, n, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (s = e.target.ownerDocument || r,
                n = s.documentElement,
                i = s.body,
                e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ne() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Ne() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return e.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return e.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(t, n, i, r) {
            var o = e.extend(new e.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? e.event.trigger(o, null , n) : e.event.dispatch.call(n, o),
            o.isDefaultPrevented() && i.preventDefault()
        }
    },
    e.removeEvent = r.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === u && (e[i] = null ),
        e.detachEvent(i, n))
    }
    ,
    e.Event = function(t, n) {
        return this instanceof e.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? B : C) : this.type = t,
        n && e.extend(this, n),
        this.timeStamp = t && t.timeStamp || e.now(),
        void (this[e.expando] = !0)) : new e.Event(t,n)
    }
    ,
    e.Event.prototype = {
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = B,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = B,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = B,
            this.stopPropagation()
        }
    },
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, n) {
        e.event.special[t] = {
            delegateType: n,
            bindType: n,
            handle: function(t) {
                var a, o = this, i = t.relatedTarget, r = t.handleObj;
                return (!i || i !== o && !e.contains(o, i)) && (t.type = r.origType,
                a = r.handler.apply(this, arguments),
                t.type = n),
                a
            }
        }
    }),
    i.submitBubbles || (e.event.special.submit = {
        setup: function() {
            return e.nodeName(this, "form") ? !1 : void e.event.add(this, "click._submit keypress._submit", function(t) {
                var i = t.target
                  , n = e.nodeName(i, "input") || e.nodeName(i, "button") ? i.form : void 0;
                n && !e._data(n, "submitBubbles") && (e.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                e._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && e.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return e.nodeName(this, "form") ? !1 : void e.event.remove(this, "._submit")
        }
    }),
    i.changeBubbles || (e.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (e.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            e.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                e.event.simulate("change", this, t, !0)
            })),
            !1) : void e.event.add(this, "beforeactivate._change", function(t) {
                var n = t.target;
                Q.test(n.nodeName) && !e._data(n, "changeBubbles") && (e.event.add(n, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || e.event.simulate("change", this.parentNode, t, !0)
                }),
                e._data(n, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return e.event.remove(this, "._change"),
            !Q.test(this.nodeName)
        }
    }),
    i.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, n) {
        var i = function(t) {
            e.event.simulate(n, t.target, e.event.fix(t), !0)
        }
        ;
        e.event.special[n] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , o = e._data(r, n);
                o || r.addEventListener(t, i, !0),
                e._data(r, n, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , o = e._data(r, n) - 1;
                o ? e._data(r, n, o) : (r.removeEventListener(t, i, !0),
                e._removeData(r, n))
            }
        }
    }),
    e.fn.extend({
        on: function(t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n,
                n = void 0);
                for (s in t)
                    this.on(s, n, i, t[s], o);
                return this
            }
            ;if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
            i = void 0) : (r = i,
            i = n,
            n = void 0)),
            r === !1)
                r = C;
            else if (!r)
                return this;
            return 1 === o && (a = r,
            r = function(t) {
                return e().off(t),
                a.apply(this, arguments)
            }
            ,
            r.guid = a.guid || (a.guid = e.guid++)),
            this.each(function() {
                e.event.add(this, t, r, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(t, n, i) {
            var r, o;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj,
                e(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, n, t[o]);
                return this
            }
            ;return (n === !1 || "function" == typeof n) && (i = n,
            n = void 0),
            i === !1 && (i = C),
            this.each(function() {
                e.event.remove(this, t, i, n)
            })
        },
        trigger: function(t, n) {
            return this.each(function() {
                e.event.trigger(t, n, this)
            })
        },
        triggerHandler: function(t, n) {
            var i = this[0];
            return i ? e.event.trigger(t, n, i, !0) : void 0
        }
    });
    function Ae(e) {
        var n = Re.split("|")
          , t = e.createDocumentFragment();
        if (t.createElement)
            while (n.length)
                t.createElement(n.pop());
        return t
    }
    ;var Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , kt = / jQuery\d+="(?:null|\d+)"/g
      , ze = new RegExp("<(?:" + Re + ")[\\s/>]","i")
      , V = /^\s+/
      , Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Ke = /<([\w:]+)/
      , nt = /<tbody/i
      , Et = /<|&#?\w+;/
      , Nt = /<(?:script|style|link)/i
      , Ct = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ct = /^$|\/(?:java|ecma)script/i
      , St = /^true\/(.*)/
      , At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , l = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: i.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = Ae(r)
      , K = jt.appendChild(r.createElement("div"));
    l.optgroup = l.option,
    l.tbody = l.tfoot = l.colgroup = l.caption = l.thead,
    l.th = l.td;
    function a(t, n) {
        var o, r, s = 0, i = typeof t.getElementsByTagName !== u ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== u ? t.querySelectorAll(n || "*") : void 0;
        if (!i)
            for (i = [],
            o = t.childNodes || t; null != (r = o[s]); s++)
                !n || e.nodeName(r, n) ? i.push(r) : e.merge(i, a(r, n));
        return void 0 === n || n && e.nodeName(t, n) ? e.merge([t], i) : i
    }
    ;function pt(e) {
        I.test(e.type) && (e.defaultChecked = e.checked)
    }
    ;function He(t, n) {
        return e.nodeName(t, "table") && e.nodeName(11 !== n.nodeType ? n : n.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    ;function Le(t) {
        return t.type = (null !== e.find.attr(t, "type")) + "/" + t.type,
        t
    }
    ;function Me(e) {
        var t = St.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    ;function J(t, n) {
        for (var r, i = 0; null != (r = t[i]); i++)
            e._data(r, "globalEval", !n || e._data(n[i], "globalEval"))
    }
    ;function ue(t, n) {
        if (1 === n.nodeType && e.hasData(t)) {
            var a, o, s, l = e._data(t), i = e._data(n, l), r = l.events;
            if (r) {
                delete i.handle,
                i.events = {};
                for (a in r)
                    for (o = 0,
                    s = r[a].length; s > o; o++)
                        e.event.add(n, a, r[a][o])
            }
            ;i.data && (i.data = e.extend({}, i.data))
        }
    }
    ;function xt(t, n) {
        var r, a, o;
        if (1 === n.nodeType) {
            if (r = n.nodeName.toLowerCase(),
            !i.noCloneEvent && n[e.expando]) {
                o = e._data(n);
                for (a in o.events)
                    e.removeEvent(n, a, o.handle);
                n.removeAttribute(e.expando)
            }
            ;"script" === r && n.text !== t.text ? (Le(n).text = t.text,
            Me(n)) : "object" === r ? (n.parentNode && (n.outerHTML = t.outerHTML),
            i.html5Clone && t.innerHTML && !e.trim(n.innerHTML) && (n.innerHTML = t.innerHTML)) : "input" === r && I.test(t.type) ? (n.defaultChecked = n.checked = t.checked,
            n.value !== t.value && (n.value = t.value)) : "option" === r ? n.defaultSelected = n.selected = t.defaultSelected : ("input" === r || "textarea" === r) && (n.defaultValue = t.defaultValue)
        }
    }
    ;e.extend({
        clone: function(t, n, r) {
            var o, c, l, s, u, d = e.contains(t.ownerDocument, t);
            if (i.html5Clone || e.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? l = t.cloneNode(!0) : (K.innerHTML = t.outerHTML,
            K.removeChild(l = K.firstChild)),
            !(i.noCloneEvent && i.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || e.isXMLDoc(t)))
                for (o = a(l),
                u = a(t),
                s = 0; null != (c = u[s]); ++s)
                    o[s] && xt(c, o[s]);
            if (n)
                if (r)
                    for (u = u || a(t),
                    o = o || a(l),
                    s = 0; null != (c = u[s]); s++)
                        ue(c, o[s]);
                else
                    ue(t, l);
            return o = a(l, "script"),
            o.length > 0 && J(o, !d && a(t, "script")),
            o = u = c = null ,
            l
        },
        buildFragment: function(t, n, r, o) {
            for (var c, s, v, u, m, g, h, y = t.length, p = Ae(n), d = [], f = 0; y > f; f++)
                if (s = t[f],
                s || 0 === s)
                    if ("object" === e.type(s))
                        e.merge(d, s.nodeType ? [s] : s);
                    else if (Et.test(s)) {
                        u = u || p.appendChild(n.createElement("div")),
                        m = (Ke.exec(s) || ["", ""])[1].toLowerCase(),
                        h = l[m] || l._default,
                        u.innerHTML = h[1] + s.replace(Ze, "<$1></$2>") + h[2],
                        c = h[0];
                        while (c--)
                            u = u.lastChild;
                        if (!i.leadingWhitespace && V.test(s) && d.push(n.createTextNode(V.exec(s)[0])),
                        !i.tbody) {
                            s = "table" !== m || nt.test(s) ? "<table>" !== h[1] || nt.test(s) ? 0 : u : u.firstChild,
                            c = s && s.childNodes.length;
                            while (c--)
                                e.nodeName(g = s.childNodes[c], "tbody") && !g.childNodes.length && s.removeChild(g)
                        }
                        ;e.merge(d, u.childNodes),
                        u.textContent = "";
                        while (u.firstChild)
                            u.removeChild(u.firstChild);
                        u = p.lastChild
                    } else
                        d.push(n.createTextNode(s));
            u && p.removeChild(u),
            i.appendChecked || e.grep(a(d, "input"), pt),
            f = 0;
            while (s = d[f++])
                if ((!o || -1 === e.inArray(s, o)) && (v = e.contains(s.ownerDocument, s),
                u = a(p.appendChild(s), "script"),
                v && J(u),
                r)) {
                    c = 0;
                    while (s = u[c++])
                        ct.test(s.type || "") && r.push(s)
                }
            ;return u = null ,
            p
        },
        cleanData: function(t, n) {
            for (var r, l, o, s, d = 0, a = e.expando, c = e.cache, p = i.deleteExpando, f = e.event.special; null != (r = t[d]); d++)
                if ((n || e.acceptData(r)) && (o = r[a],
                s = o && c[o])) {
                    if (s.events)
                        for (l in s.events)
                            f[l] ? e.event.remove(r, l) : e.removeEvent(r, l, s.handle);
                    c[o] && (delete c[o],
                    p ? delete r[a] : typeof r.removeAttribute !== u ? r.removeAttribute(a) : r[a] = null ,
                    h.push(o))
                }
        }
    }),
    e.fn.extend({
        text: function(t) {
            return x(this, function(t) {
                return void 0 === t ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(t))
            }, null , t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = He(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(t, n) {
            for (var i, o = t ? e.filter(t, this) : this, r = 0; null != (i = o[r]); r++)
                n || 1 !== i.nodeType || e.cleanData(a(i)),
                i.parentNode && (n && e.contains(i.ownerDocument, i) && J(a(i, "script")),
                i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, n = 0; null != (t = this[n]); n++) {
                1 === t.nodeType && e.cleanData(a(t, !1));
                while (t.firstChild)
                    t.removeChild(t.firstChild);
                t.options && e.nodeName(t, "select") && (t.options.length = 0)
            }
            ;return this
        },
        clone: function(t, n) {
            return t = null == t ? !1 : t,
            n = null == n ? t : n,
            this.map(function() {
                return e.clone(this, t, n)
            })
        },
        html: function(t) {
            return x(this, function(t) {
                var r = this[0] || {}
                  , o = 0
                  , s = this.length;
                if (void 0 === t)
                    return 1 === r.nodeType ? r.innerHTML.replace(kt, "") : void 0;
                if (!("string" != typeof t || Nt.test(t) || !i.htmlSerialize && ze.test(t) || !i.leadingWhitespace && V.test(t) || l[(Ke.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Ze, "<$1></$2>");
                    try {
                        for (; s > o; o++)
                            r = this[o] || {},
                            1 === r.nodeType && (e.cleanData(a(r, !1)),
                            r.innerHTML = t);
                        r = 0
                    } catch (n) {}
                }
                ;r && this.empty().append(t)
            }, null , t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(n) {
                t = this.parentNode,
                e.cleanData(a(this)),
                t && t.replaceChild(n, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(t, n) {
            t = Se.apply([], t);
            var d, r, f, l, h, s, o = 0, u = this.length, m = this, g = u - 1, c = t[0], p = e.isFunction(c);
            if (p || u > 1 && "string" == typeof c && !i.checkClone && Ct.test(c))
                return this.each(function(e) {
                    var i = m.eq(e);
                    p && (t[0] = c.call(this, e, i.html())),
                    i.domManip(t, n)
                });
            if (u && (s = e.buildFragment(t, this[0].ownerDocument, !1, this),
            d = s.firstChild,
            1 === s.childNodes.length && (s = d),
            d)) {
                for (l = e.map(a(s, "script"), Le),
                f = l.length; u > o; o++)
                    r = s,
                    o !== g && (r = e.clone(r, !0, !0),
                    f && e.merge(l, a(r, "script"))),
                    n.call(this[o], r, o);
                if (f)
                    for (h = l[l.length - 1].ownerDocument,
                    e.map(l, Me),
                    o = 0; f > o; o++)
                        r = l[o],
                        ct.test(r.type || "") && !e._data(r, "globalEval") && e.contains(h, r) && (r.src ? e._evalUrl && e._evalUrl(r.src) : e.globalEval((r.text || r.textContent || r.innerHTML || "").replace(At, "")));
                s = d = null
            }
            ;return this
        }
    }),
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, n) {
        e.fn[t] = function(t) {
            for (var r, i = 0, a = [], s = e(t), o = s.length - 1; o >= i; i++)
                r = i === o ? this : this.clone(!0),
                e(s[i])[n](r),
                te.apply(a, r.get());
            return this.pushStack(a)
        }
    });
    var D, Pe = {};
    function be(n, i) {
        var r = e(i.createElement(n)).appendTo(i.body)
          , o = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(r[0]).display : e.css(r[0], "display");
        return r.detach(),
        o
    }
    ;function pe(t) {
        var i = r
          , n = Pe[t];
        return n || (n = be(t, i),
        "none" !== n && n || (D = (D || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement),
        i = (D[0].contentWindow || D[0].contentDocument).document,
        i.write(),
        i.close(),
        n = be(t, i),
        D.detach()),
        Pe[t] = n),
        n
    }
    ;!function() {
        var t, n, e = r.createElement("div"), o = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        e.innerHTML = "<link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = e.getElementsByTagName("a")[0],
        t.style.cssText = "float:left;opacity:.5",
        i.opacity = /^0.5/.test(t.style.opacity),
        i.cssFloat = !!t.style.cssFloat,
        e.style.backgroundClip = "content-box",
        e.cloneNode(!0).style.backgroundClip = "",
        i.clearCloneStyle = "content-box" === e.style.backgroundClip,
        t = e = null ,
        i.shrinkWrapBlocks = function() {
            var t, i, e, a;
            if (null == n) {
                if (t = r.getElementsByTagName("body")[0],
                !t)
                    return;
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                i = r.createElement("div"),
                e = r.createElement("div"),
                t.appendChild(i).appendChild(e),
                n = !1,
                typeof e.style.zoom !== u && (e.style.cssText = o + ";width:1px;padding:1px;zoom:1",
                e.innerHTML = "<div></div>",
                e.firstChild.style.width = "5px",
                n = 3 !== e.offsetWidth),
                t.removeChild(i),
                t = i = e = null
            }
            ;return n
        }
    }();
    var Xe = /^margin/, P = new RegExp("^(" + R + ")(?!px)[a-z%]+$","i"), b, v, Ht = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (b = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null )
    }
    ,
    v = function(t, n, i) {
        var a, s, l, o, r = t.style;
        return i = i || b(t),
        o = i ? i.getPropertyValue(n) || i[n] : void 0,
        i && ("" !== o || e.contains(t.ownerDocument, t) || (o = e.style(t, n)),
        P.test(o) && Xe.test(n) && (a = r.width,
        s = r.minWidth,
        l = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = o,
        o = i.width,
        r.width = a,
        r.minWidth = s,
        r.maxWidth = l)),
        void 0 === o ? o : o + ""
    }
    ) : r.documentElement.currentStyle && (b = function(e) {
        return e.currentStyle
    }
    ,
    v = function(e, t, n) {
        var s, o, a, i, r = e.style;
        return n = n || b(e),
        i = n ? n[t] : void 0,
        null == i && r && r[t] && (i = r[t]),
        P.test(i) && !Ht.test(t) && (s = r.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        r.left = "fontSize" === t ? "1em" : i,
        i = r.pixelLeft + "px",
        r.left = s,
        a && (o.left = a)),
        void 0 === i ? i : i + "" || "auto"
    }
    );
    function ge(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    ;!function() {
        var o, u, f, l, s, a, n = r.createElement("div"), d = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", p = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "<link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        o = n.getElementsByTagName("a")[0],
        o.style.cssText = "float:left;opacity:.5",
        i.opacity = /^0.5/.test(o.style.opacity),
        i.cssFloat = !!o.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        i.clearCloneStyle = "content-box" === n.style.backgroundClip,
        o = n = null ,
        e.extend(i, {
            reliableHiddenOffsets: function() {
                if (null != u)
                    return u;
                var i, t, o, e = r.createElement("div"), n = r.getElementsByTagName("body")[0];
                if (n)
                    return e.setAttribute("className", "t"),
                    e.innerHTML = "<link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    i = r.createElement("div"),
                    i.style.cssText = d,
                    n.appendChild(i).appendChild(e),
                    e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    t = e.getElementsByTagName("td"),
                    t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    o = 0 === t[0].offsetHeight,
                    t[0].style.display = "",
                    t[1].style.display = "none",
                    u = o && 0 === t[0].offsetHeight,
                    n.removeChild(i),
                    e = n = null ,
                    u
            },
            boxSizing: function() {
                return null == f && c(),
                f
            },
            boxSizingReliable: function() {
                return null == l && c(),
                l
            },
            pixelPosition: function() {
                return null == s && c(),
                s
            },
            reliableMarginRight: function() {
                var o, i, n, e;
                if (null == a && t.getComputedStyle) {
                    if (o = r.getElementsByTagName("body")[0],
                    !o)
                        return;
                    i = r.createElement("div"),
                    n = r.createElement("div"),
                    i.style.cssText = d,
                    o.appendChild(i).appendChild(n),
                    e = n.appendChild(r.createElement("div")),
                    e.style.cssText = n.style.cssText = p,
                    e.style.marginRight = e.style.width = "0",
                    n.style.width = "1px",
                    a = !parseFloat((t.getComputedStyle(e, null ) || {}).marginRight),
                    o.removeChild(i)
                }
                ;return a
            }
        });
        function c() {
            var o, n, i = r.getElementsByTagName("body")[0];
            i && (o = r.createElement("div"),
            n = r.createElement("div"),
            o.style.cssText = d,
            i.appendChild(o).appendChild(n),
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
            e.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                f = 4 === n.offsetWidth
            }),
            l = !0,
            s = !1,
            a = !0,
            t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(n, null ) || {}).top,
            l = "4px" === (t.getComputedStyle(n, null ) || {
                width: "4px"
            }).width),
            i.removeChild(o),
            n = i = null )
        }
    }(),
    e.swap = function(e, t, n, i) {
        var a, r, o = {};
        for (r in t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        a = n.apply(e, i || []);
        for (r in t)
            e.style[r] = o[r];
        return a
    }
    ;
    var ne = /alpha\([^)]*\)/i
      , Mt = /opacity\s*=\s*([^)]*)/
      , Pt = /^(none|table(?!-c[ea]).+)/
      , Rt = new RegExp("^(" + R + ")(.*)$","i")
      , It = new RegExp("^([+-])=(" + R + ")","i")
      , zt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , Ge = ["Webkit", "O", "Moz", "ms"];
    function he(e, t) {
        if (t in e)
            return t;
        var i = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , n = Ge.length;
        while (n--)
            if (t = Ge[n] + i,
            t in e)
                return t;
        return r
    }
    ;function me(t, n) {
        for (var o, i, s, a = [], r = 0, l = t.length; l > r; r++)
            i = t[r],
            i.style && (a[r] = e._data(i, "olddisplay"),
            o = i.style.display,
            n ? (a[r] || "none" !== o || (i.style.display = ""),
            "" === i.style.display && L(i) && (a[r] = e._data(i, "olddisplay", pe(i.nodeName)))) : a[r] || (s = L(i),
            (o && "none" !== o || !s) && e._data(i, "olddisplay", s ? o : e.css(i, "display"))));
        for (r = 0; l > r; r++)
            i = t[r],
            i.style && (n && "none" !== i.style.display && "" !== i.style.display || (i.style.display = n ? a[r] || "" : "none"));
        return t
    }
    ;function et(e, t, n) {
        var i = Rt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    ;function tt(t, n, i, r, o) {
        for (var a = i === (r ? "border" : "content") ? 4 : "width" === n ? 1 : 0, s = 0; 4 > a; a += 2)
            "margin" === i && (s += e.css(t, i + g[a], !0, o)),
            r ? ("content" === i && (s -= e.css(t, "padding" + g[a], !0, o)),
            "margin" !== i && (s -= e.css(t, "border" + g[a] + "Width", !0, o))) : (s += e.css(t, "padding" + g[a], !0, o),
            "padding" !== i && (s += e.css(t, "border" + g[a] + "Width", !0, o)));
        return s
    }
    ;function lt(t, n, r) {
        var l = !0
          , o = "width" === n ? t.offsetWidth : t.offsetHeight
          , a = b(t)
          , s = i.boxSizing() && "border-box" === e.css(t, "boxSizing", !1, a);
        if (0 >= o || null == o) {
            if (o = v(t, n, a),
            (0 > o || null == o) && (o = t.style[n]),
            P.test(o))
                return o;
            l = s && (i.boxSizingReliable() || o === t.style[n]),
            o = parseFloat(o) || 0
        }
        ;return o + tt(t, n, r || (s ? "border" : "content"), l, a) + "px"
    }
    ;e.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = v(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": i.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, r, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var u, d, s, c = e.camelCase(n), l = t.style;
                if (n = e.cssProps[c] || (e.cssProps[c] = he(l, c)),
                s = e.cssHooks[n] || e.cssHooks[c],
                void 0 === r)
                    return s && "get"in s && void 0 !== (u = s.get(t, !1, o)) ? u : l[n];
                if (d = typeof r,
                "string" === d && (u = It.exec(r)) && (r = (u[1] + 1) * u[2] + parseFloat(e.css(t, n)),
                d = "number"),
                null != r && r === r && ("number" !== d || e.cssNumber[c] || (r += "px"),
                i.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"),
                !(s && "set"in s && void 0 === (r = s.set(t, r, o)))))
                    try {
                        l[n] = "",
                        l[n] = r
                    } catch (a) {}
            }
        },
        css: function(t, n, i, r) {
            var l, o, s, a = e.camelCase(n);
            return n = e.cssProps[a] || (e.cssProps[a] = he(t.style, a)),
            s = e.cssHooks[n] || e.cssHooks[a],
            s && "get"in s && (o = s.get(t, !0, i)),
            void 0 === o && (o = v(t, n, r)),
            "normal" === o && n in Qe && (o = Qe[n]),
            "" === i || i ? (l = parseFloat(o),
            i === !0 || e.isNumeric(l) ? l || 0 : o) : o
        }
    }),
    e.each(["height", "width"], function(t, n) {
        e.cssHooks[n] = {
            get: function(t, i, r) {
                return i ? 0 === t.offsetWidth && Pt.test(e.css(t, "display")) ? e.swap(t, zt, function() {
                    return lt(t, n, r)
                }) : lt(t, n, r) : void 0
            },
            set: function(t, r, o) {
                var a = o && b(t);
                return et(t, r, o ? tt(t, n, o, i.boxSizing() && "border-box" === e.css(t, "boxSizing", !1, a), a) : 0)
            }
        }
    }),
    i.opacity || (e.cssHooks.opacity = {
        get: function(e, t) {
            return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(t, n) {
            var i = t.style
              , r = t.currentStyle
              , a = e.isNumeric(n) ? "alpha(opacity=" + 100 * n + ")" : ""
              , o = r && r.filter || i.filter || "";
            i.zoom = 1,
            (n >= 1 || "" === n) && "" === e.trim(o.replace(ne, "")) && i.removeAttribute && (i.removeAttribute("filter"),
            "" === n || r && !r.filter) || (i.filter = ne.test(o) ? o.replace(ne, a) : o + " " + a)
        }
    }),
    e.cssHooks.marginRight = ge(i.reliableMarginRight, function(t, n) {
        return n ? e.swap(t, {
            display: "inline-block"
        }, v, [t, "marginRight"]) : void 0
    }),
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, n) {
        e.cssHooks[t + n] = {
            expand: function(e) {
                for (var i = 0, o = {}, r = "string" == typeof e ? e.split(" ") : [e]; 4 > i; i++)
                    o[t + g[i] + n] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        Xe.test(t) || (e.cssHooks[t + n].set = et)
    }),
    e.fn.extend({
        css: function(t, n) {
            return x(this, function(t, n, i) {
                var a, s, o = {}, r = 0;
                if (e.isArray(n)) {
                    for (a = b(t),
                    s = n.length; s > r; r++)
                        o[n[r]] = e.css(t, n[r], !1, a);
                    return o
                }
                ;return void 0 !== i ? e.style(t, n, i) : e.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return me(this, !0)
        },
        hide: function() {
            return me(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                L(this) ? e(this).show() : e(this).hide()
            })
        }
    });
    function s(e, t, n, i, r) {
        return new s.prototype.init(e,t,n,i,r)
    }
    ;e.Tween = s,
    s.prototype = {
        constructor: s,
        init: function(t, n, i, r, o, a) {
            this.elem = t,
            this.prop = i,
            this.easing = o || "swing",
            this.options = n,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (e.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = s.propHooks[this.prop];
            return e && e.get ? e.get(this) : s.propHooks._default.get(this)
        },
        run: function(t) {
            var i, n = s.propHooks[this.prop];
            return this.pos = i = this.options.duration ? e.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * i + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : s.propHooks._default.set(this),
            this
        }
    },
    s.prototype.init.prototype = s.prototype,
    s.propHooks = {
        _default: {
            get: function(t) {
                var n;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (n = e.css(t.elem, t.prop, ""),
                n && "auto" !== n ? n : 0) : t.elem[t.prop]
            },
            set: function(t) {
                e.fx.step[t.prop] ? e.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[e.cssProps[t.prop]] || e.cssHooks[t.prop]) ? e.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    e.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    e.fx = s.prototype.init,
    e.fx.step = {};
    var T, H, Bt = /^(?:toggle|show|hide)$/, Ve = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$","i"), Ot = /queueHooks$/, F = [ft], S = {
        "*": [function(t, n) {
            var o = this.createTween(t, n)
              , l = o.cur()
              , r = Ve.exec(n)
              , a = r && r[3] || (e.cssNumber[t] ? "" : "px")
              , i = (e.cssNumber[t] || "px" !== a && +l) && Ve.exec(e.css(o.elem, t))
              , s = 1
              , u = 20;
            if (i && i[3] !== a) {
                a = a || i[3],
                r = r || [],
                i = +l || 1;
                do
                    s = s || ".5",
                    i /= s,
                    e.style(o.elem, t, i + a);
                while (s !== (s = o.cur() / l) && 1 !== s && --u)
            }
            ;return r && (i = o.start = +i || +l || 0,
            o.unit = a,
            o.end = r[1] ? i + (r[1] + 1) * r[2] : +r[2]),
            o
        }
        ]
    };
    function dt() {
        return setTimeout(function() {
            T = void 0
        }),
        T = e.now()
    }
    ;function O(e, t) {
        var r, n = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            r = g[i],
            n["margin" + r] = n["padding" + r] = e;
        return t && (n.opacity = n.width = e),
        n
    }
    ;function ut(e, t, n) {
        for (var r, o = (S[t] || []).concat(S["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    ;function ft(t, n, r) {
        var o, d, g, f, l, v, h, m, c = this, p = {}, s = t.style, u = t.nodeType && L(t), a = e._data(t, "fxshow");
        r.queue || (l = e._queueHooks(t, "fx"),
        null == l.unqueued && (l.unqueued = 0,
        v = l.empty.fire,
        l.empty.fire = function() {
            l.unqueued || v()
        }
        ),
        l.unqueued++,
        c.always(function() {
            c.always(function() {
                l.unqueued--,
                e.queue(t, "fx").length || l.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in n || "width"in n) && (r.overflow = [s.overflow, s.overflowX, s.overflowY],
        h = e.css(t, "display"),
        m = pe(t.nodeName),
        "none" === h && (h = m),
        "inline" === h && "none" === e.css(t, "float") && (i.inlineBlockNeedsLayout && "inline" !== m ? s.zoom = 1 : s.display = "inline-block")),
        r.overflow && (s.overflow = "hidden",
        i.shrinkWrapBlocks() || c.always(function() {
            s.overflow = r.overflow[0],
            s.overflowX = r.overflow[1],
            s.overflowY = r.overflow[2]
        }));
        for (o in n)
            if (d = n[o],
            Bt.exec(d)) {
                if (delete n[o],
                g = g || "toggle" === d,
                d === (u ? "hide" : "show")) {
                    if ("show" !== d || !a || void 0 === a[o])
                        continue;u = !0
                }
                ;p[o] = a && a[o] || e.style(t, o)
            }
        ;if (!e.isEmptyObject(p)) {
            a ? "hidden"in a && (u = a.hidden) : a = e._data(t, "fxshow", {}),
            g && (a.hidden = !u),
            u ? e(t).show() : c.done(function() {
                e(t).hide()
            }),
            c.done(function() {
                var n;
                e._removeData(t, "fxshow");
                for (n in p)
                    e.style(t, n, p[n])
            });
            for (o in p)
                f = ut(u ? a[o] : 0, o, c),
                o in a || (a[o] = f.start,
                u && (f.end = f.start,
                f.start = "width" === o || "height" === o ? 1 : 0))
        }
    }
    ;function gt(t, n) {
        var i, o, s, r, a;
        for (i in t)
            if (o = e.camelCase(i),
            s = n[o],
            r = t[i],
            e.isArray(r) && (s = r[1],
            r = t[i] = r[0]),
            i !== o && (t[o] = r,
            delete t[i]),
            a = e.cssHooks[o],
            a && "expand"in a) {
                r = a.expand(r),
                delete t[o];
                for (i in r)
                    i in t || (t[i] = r[i],
                    n[i] = s)
            } else
                n[o] = s
    }
    ;function Oe(t, n, i) {
        var u, l, s = 0, d = F.length, o = e.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (l)
                return !1;
            for (var u = T || dt(), n = Math.max(0, r.startTime + r.duration - u), s = n / r.duration || 0, e = 1 - s, i = 0, a = r.tweens.length; a > i; i++)
                r.tweens[i].run(e);
            return o.notifyWith(t, [r, e, n]),
            1 > e && a ? n : (o.resolveWith(t, [r]),
            !1)
        }
        , r = o.promise({
            elem: t,
            props: e.extend({}, n),
            opts: e.extend(!0, {
                specialEasing: {}
            }, i),
            originalProperties: n,
            originalOptions: i,
            startTime: T || dt(),
            duration: i.duration,
            tweens: [],
            createTween: function(n, i) {
                var o = e.Tween(t, r.opts, n, i, r.opts.specialEasing[n] || r.opts.easing);
                return r.tweens.push(o),
                o
            },
            stop: function(e) {
                var n = 0
                  , i = e ? r.tweens.length : 0;
                if (l)
                    return this;
                for (l = !0; i > n; n++)
                    r.tweens[n].run(1);
                return e ? o.resolveWith(t, [r, e]) : o.rejectWith(t, [r, e]),
                this
            }
        }), a = r.props;
        for (gt(a, r.opts.specialEasing); d > s; s++)
            if (u = F[s].call(r, t, a, r.opts))
                return u;
        return e.map(a, ut, r),
        e.isFunction(r.opts.start) && r.opts.start.call(t, r),
        e.fx.timer(e.extend(c, {
            elem: t,
            anim: r,
            queue: r.opts.queue
        })),
        r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
    }
    ;e.Animation = e.extend(Oe, {
        tweener: function(t, n) {
            e.isFunction(t) ? (n = t,
            t = ["*"]) : t = t.split(" ");
            for (var i, r = 0, o = t.length; o > r; r++)
                i = t[r],
                S[i] = S[i] || [],
                S[i].unshift(n)
        },
        prefilter: function(e, t) {
            t ? F.unshift(e) : F.push(e)
        }
    }),
    e.speed = function(t, n, i) {
        var r = t && "object" == typeof t ? e.extend({}, t) : {
            complete: i || !i && n || e.isFunction(t) && t,
            duration: t,
            easing: i && n || n && !e.isFunction(n) && n
        };
        return r.duration = e.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in e.fx.speeds ? e.fx.speeds[r.duration] : e.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            e.isFunction(r.old) && r.old.call(this),
            r.queue && e.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    e.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(L).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, n, i, r) {
            var s = e.isEmptyObject(t)
              , a = e.speed(n, i, r)
              , o = function() {
                var n = Oe(this, e.extend({}, t), a);
                (s || e._data(this, "finish")) && n.stop(!0)
            }
            ;
            return o.finish = o,
            s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(t, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            ;
            return "string" != typeof t && (i = n,
            n = t,
            t = void 0),
            n && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var s = !0
                  , n = null != t && t + "queueHooks"
                  , a = e.timers
                  , o = e._data(this);
                if (n)
                    o[n] && o[n].stop && r(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Ot.test(n) && r(o[n]);
                for (n = a.length; n--; )
                    a[n].elem !== this || null != t && a[n].queue !== t || (a[n].anim.stop(i),
                    s = !1,
                    a.splice(n, 1));
                (s || !i) && e.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var n, o = e._data(this), r = o[t + "queue"], a = o[t + "queueHooks"], i = e.timers, s = r ? r.length : 0;
                for (o.finish = !0,
                e.queue(this, t, []),
                a && a.stop && a.stop.call(this, !0),
                n = i.length; n--; )
                    i[n].elem === this && i[n].queue === t && (i[n].anim.stop(!0),
                    i.splice(n, 1));
                for (n = 0; s > n; n++)
                    r[n] && r[n].finish && r[n].finish.call(this);
                delete o.finish
            })
        }
    }),
    e.each(["toggle", "show", "hide"], function(t, n) {
        var i = e.fn[n];
        e.fn[n] = function(e, t, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(O(n, !0), e, t, r)
        }
    }),
    e.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        e.fn[t] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }),
    e.timers = [],
    e.fx.tick = function() {
        var i, n = e.timers, t = 0;
        for (T = e.now(); t < n.length; t++)
            i = n[t],
            i() || n[t] !== i || n.splice(t--, 1);
        n.length || e.fx.stop(),
        T = void 0
    }
    ,
    e.fx.timer = function(t) {
        e.timers.push(t),
        t() ? e.fx.start() : e.timers.pop()
    }
    ,
    e.fx.interval = 13,
    e.fx.start = function() {
        H || (H = setInterval(e.fx.tick, e.fx.interval))
    }
    ,
    e.fx.stop = function() {
        clearInterval(H),
        H = null
    }
    ,
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    e.fn.delay = function(t, n) {
        return t = e.fx ? e.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var n, e, o, a, t = r.createElement("div");
        t.setAttribute("className", "t"),
        t.innerHTML = "<link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = t.getElementsByTagName("a")[0],
        o = r.createElement("select"),
        a = o.appendChild(r.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        n.style.cssText = "top:1px",
        i.getSetAttribute = "t" !== t.className,
        i.style = /top/.test(n.getAttribute("style")),
        i.hrefNormalized = "/a" === n.getAttribute("href"),
        i.checkOn = !!e.value,
        i.optSelected = a.selected,
        i.enctype = !!r.createElement("form").enctype,
        o.disabled = !0,
        i.optDisabled = !a.disabled,
        e = r.createElement("input"),
        e.setAttribute("value", ""),
        i.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        i.radioValue = "t" === e.value,
        n = e = o = a = t = null
    }();
    var rn = /\r/g;
    e.fn.extend({
        val: function(t) {
            var n, i, o, r = this[0];
            {
                if (arguments.length)
                    return o = e.isFunction(t),
                    this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = o ? t.call(this, i, e(this).val()) : t,
                        null == r ? r = "" : "number" == typeof r ? r += "" : e.isArray(r) && (r = e.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                        n && "set"in n && void 0 !== n.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return n = e.valHooks[r.type] || e.valHooks[r.nodeName.toLowerCase()],
                    n && "get"in n && void 0 !== (i = n.get(r, "value")) ? i : (i = r.value,
                    "string" == typeof i ? i.replace(rn, "") : null == i ? "" : i)
            }
        }
    }),
    e.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var n = e.find.attr(t, "value");
                    return null != n ? n : e.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var s, n, c = t.options, r = t.selectedIndex, a = "select-one" === t.type || 0 > r, u = a ? null : [], l = a ? r + 1 : c.length, o = 0 > r ? l : a ? r : 0; l > o; o++)
                        if (n = c[o],
                        !(!n.selected && o !== r || (i.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && e.nodeName(n.parentNode, "optgroup"))) {
                            if (s = e(n).val(),
                            a)
                                return s;
                            u.push(s)
                        }
                    ;return u
                },
                set: function(t, n) {
                    var s, r, o = t.options, l = e.makeArray(n), a = o.length;
                    while (a--)
                        if (r = o[a],
                        e.inArray(e.valHooks.option.get(r), l) >= 0)
                            try {
                                r.selected = s = !0
                            } catch (i) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return s || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            set: function(t, n) {
                return e.isArray(n) ? t.checked = e.inArray(e(t).val(), n) >= 0 : void 0
            }
        },
        i.checkOn || (e.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var N, Ye, m = e.expr.attrHandle, oe = /^(?:checked|selected)$/i, y = i.getSetAttribute, z = i.input;
    e.fn.extend({
        attr: function(t, n) {
            return x(this, e.attr, t, n, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                e.removeAttr(this, t)
            })
        }
    }),
    e.extend({
        attr: function(t, n, i) {
            var r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return typeof t.getAttribute === u ? e.prop(t, n, i) : (1 === a && e.isXMLDoc(t) || (n = n.toLowerCase(),
                r = e.attrHooks[n] || (e.expr.match.bool.test(n) ? Ye : N)),
                void 0 === i ? r && "get"in r && null !== (o = r.get(t, n)) ? o : (o = e.find.attr(t, n),
                null == o ? void 0 : o) : null !== i ? r && "set"in r && void 0 !== (o = r.set(t, i, n)) ? o : (t.setAttribute(n, i + ""),
                i) : void e.removeAttr(t, n))
        },
        removeAttr: function(t, n) {
            var i, r, a = 0, o = n && n.match(c);
            if (o && 1 === t.nodeType)
                while (i = o[a++])
                    r = e.propFix[i] || i,
                    e.expr.match.bool.test(i) ? z && y || !oe.test(i) ? t[r] = !1 : t[e.camelCase("default-" + i)] = t[r] = !1 : e.attr(t, i, ""),
                    t.removeAttribute(y ? i : r)
        },
        attrHooks: {
            type: {
                set: function(t, n) {
                    if (!i.radioValue && "radio" === n && e.nodeName(t, "input")) {
                        var r = t.value;
                        return t.setAttribute("type", n),
                        r && (t.value = r),
                        n
                    }
                }
            }
        }
    }),
    Ye = {
        set: function(t, n, i) {
            return n === !1 ? e.removeAttr(t, i) : z && y || !oe.test(i) ? t.setAttribute(!y && e.propFix[i] || i, i) : t[e.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    e.each(e.expr.match.bool.source.match(/\w+/g), function(t, n) {
        var i = m[n] || e.find.attr;
        m[n] = z && y || !oe.test(n) ? function(e, t, n) {
            var r, o;
            return n || (o = m[t],
            m[t] = r,
            r = null != i(e, t, n) ? t.toLowerCase() : null ,
            m[t] = o),
            r
        }
        : function(t, n, i) {
            return i ? void 0 : t[e.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    z && y || (e.attrHooks.value = {
        set: function(t, n, i) {
            return e.nodeName(t, "input") ? void (t.defaultValue = n) : N && N.set(t, n, i)
        }
    }),
    y || (N = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    m.id = m.name = m.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    e.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: N.set
    },
    e.attrHooks.contenteditable = {
        set: function(e, t, n) {
            N.set(e, "" === t ? !1 : t, n)
        }
    },
    e.each(["width", "height"], function(t, n) {
        e.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"),
                t) : void 0
            }
        }
    })),
    i.style || (e.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Wt = /^(?:input|select|textarea|button|object)$/i
      , Ft = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function(t, n) {
            return x(this, e.prop, t, n, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = e.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    e.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, n, i) {
            var a, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !e.isXMLDoc(t),
                s && (n = e.propFix[n] || n,
                r = e.propHooks[n]),
                void 0 !== i ? r && "set"in r && void 0 !== (a = r.set(t, i, n)) ? a : t[n] = i : r && "get"in r && null !== (a = r.get(t, n)) ? a : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = e.find.attr(t, "tabindex");
                    return n ? parseInt(n, 10) : Wt.test(t.nodeName) || Ft.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    i.hrefNormalized || e.each(["href", "src"], function(t, n) {
        e.propHooks[n] = {
            get: function(e) {
                return e.getAttribute(n, 4)
            }
        }
    }),
    i.optSelected || (e.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    e.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        e.propFix[this.toLowerCase()] = this
    }),
    i.enctype || (e.propFix.enctype = "encoding");
    var Y = /[\t\r\n\f]/g;
    e.fn.extend({
        addClass: function(t) {
            var l, n, i, a, s, o, r = 0, d = this.length, u = "string" == typeof t && t;
            if (e.isFunction(t))
                return this.each(function(n) {
                    e(this).addClass(t.call(this, n, this.className))
                });
            if (u)
                for (l = (t || "").match(c) || []; d > r; r++)
                    if (n = this[r],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Y, " ") : " ")) {
                        s = 0;
                        while (a = l[s++])
                            i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        o = e.trim(i),
                        n.className !== o && (n.className = o)
                    }
            ;return this
        },
        removeClass: function(t) {
            var l, n, i, a, s, o, r = 0, d = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (e.isFunction(t))
                return this.each(function(n) {
                    e(this).removeClass(t.call(this, n, this.className))
                });
            if (u)
                for (l = (t || "").match(c) || []; d > r; r++)
                    if (n = this[r],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Y, " ") : "")) {
                        s = 0;
                        while (a = l[s++])
                            while (i.indexOf(" " + a + " ") >= 0)
                                i = i.replace(" " + a + " ", " ");
                        o = t ? e.trim(i) : "",
                        n.className !== o && (n.className = o)
                    }
            ;return this
        },
        toggleClass: function(t, n) {
            var i = typeof t;
            return "boolean" == typeof n && "string" === i ? n ? this.addClass(t) : this.removeClass(t) : this.each(e.isFunction(t) ? function(i) {
                e(this).toggleClass(t.call(this, i, this.className, n), n)
            }
            : function() {
                if ("string" === i) {
                    var n, a = 0, r = e(this), o = t.match(c) || [];
                    while (n = o[a++])
                        r.hasClass(n) ? r.removeClass(n) : r.addClass(n)
                } else
                    (i === u || "boolean" === i) && (this.className && e._data(this, "__className__", this.className),
                    this.className = this.className || t === !1 ? "" : e._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var i = " " + e + " ", t = 0, n = this.length; n > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(Y, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    }),
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null , e, t) : this.trigger(n)
        }
    }),
    e.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Z = e.now()
      , X = /\?/
      , qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    e.parseJSON = function(n) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(n + "");
        var o, i = null , r = e.trim(n + "");
        return r && !e.trim(r.replace(qt, function(e, t, n, r) {
            return o && t && (i = 0),
            0 === i ? e : (o = n || t,
            i += !r - !n,
            "")
        })) ? Function("return " + r)() : e.error("Invalid JSON: " + n)
    }
    ,
    e.parseXML = function(n) {
        var r, o;
        if (!n || "string" != typeof n)
            return null ;
        try {
            t.DOMParser ? (o = new DOMParser,
            r = o.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(n))
        } catch (i) {
            r = void 0
        }
        ;return r && r.documentElement && !r.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + n),
        r
    }
    ;
    var w, f, nn = /#.*$/, ye = /([?&])_=[^&]*/, fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, on = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, an = /^(?:GET|HEAD)$/, sn = /^\/\//, We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ot = {}, G = {}, at = "*/".concat("*");
    try {
        f = location.href
    } catch (o) {
        f = r.createElement("a"),
        f.href = "",
        f = f.href
    }
    ;w = We.exec(f.toLowerCase()) || [];
    function Be(t) {
        return function(n, i) {
            "string" != typeof n && (i = n,
            n = "*");
            var r, a = 0, o = n.toLowerCase().match(c) || [];
            if (e.isFunction(i))
                while (r = o[a++])
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (t[r] = t[r] || []).unshift(i)) : (t[r] = t[r] || []).push(i)
        }
    }
    ;function Ie(t, n, i, r) {
        var o = {}
          , s = t === G;
        function a(l) {
            var u;
            return o[l] = !0,
            e.each(t[l] || [], function(e, t) {
                var l = t(n, i, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (n.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        ;return a(n.dataTypes[0]) || !o["*"] && a("*")
    }
    ;function ae(t, n) {
        var r, i, o = e.ajaxSettings.flatOptions || {};
        for (i in n)
            void 0 !== n[i] && ((o[i] ? t : r || (r = {}))[i] = n[i]);
        return r && e.extend(!0, t, r),
        t
    }
    ;function yt(e, t, n) {
        var s, a, r, o, l = e.contents, i = e.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (o in l)
                if (l[o] && l[o].test(a)) {
                    i.unshift(o);
                    break
                }
        ;if (i[0]in n)
            r = i[0];
        else {
            for (o in n) {
                if (!i[0] || e.converters[o + " " + i[0]]) {
                    r = o;
                    break
                }
                ;s || (s = o)
            }
            ;r = r || s
        }
        ;return r ? (r !== i[0] && i.unshift(r),
        n[r]) : void 0
    }
    ;function bt(e, t, n, i) {
        var c, o, a, u, l, s = {}, d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters)
                s[a.toLowerCase()] = e.converters[a];
        o = d.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = d.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = s[l + " " + o] || s["* " + o],
                    !a)
                        for (c in s)
                            if (u = c.split(" "),
                            u[1] === o && (a = s[l + " " + u[0]] || s["* " + u[0]])) {
                                a === !0 ? a = s[c] : s[c] !== !0 && (o = u[0],
                                d.unshift(u[1]));
                                break
                            }
                    ;if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (r) {
                                return {
                                    state: "parsererror",
                                    error: a ? r : "No conversion from " + l + " to " + o
                                }
                            }
                }
        ;return {
            state: "success",
            data: t
        }
    }
    ;e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: f,
            type: "GET",
            isLocal: on.test(w[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": at,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, n) {
            return n ? ae(ae(t, e.ajaxSettings), n) : ae(e.ajaxSettings, t)
        },
        ajaxPrefilter: Be(ot),
        ajaxTransport: Be(G),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var u, d, a, x, y, p, h, v, i = e.ajaxSetup({}, n), l = i.context || i, b = i.context && (l.nodeType || l.jquery) ? e(l) : e.event, T = e.Deferred(), k = e.Callbacks("once memory"), g = i.statusCode || {}, C = {}, N = {}, s = 0, E = "canceled", r = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === s) {
                        if (!v) {
                            v = {};
                            while (t = fn.exec(x))
                                v[t[1].toLowerCase()] = t[2]
                        }
                        ;t = v[e.toLowerCase()]
                    }
                    ;return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === s ? x : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return s || (e = N[n] = N[n] || e,
                    C[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return s || (i.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > s)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            r.always(e[r.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return h && h.abort(t),
                    m(0, t),
                    this
                }
            };
            if (T.promise(r).complete = k.add,
            r.success = r.done,
            r.error = r.fail,
            i.url = ((t || i.url || f) + "").replace(nn, "").replace(sn, w[1] + "//"),
            i.type = n.method || n.type || i.method || i.type,
            i.dataTypes = e.trim(i.dataType || "*").toLowerCase().match(c) || [""],
            null == i.crossDomain && (u = We.exec(i.url.toLowerCase()),
            i.crossDomain = !(!u || u[1] === w[1] && u[2] === w[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (w[3] || ("http:" === w[1] ? "80" : "443")))),
            i.data && i.processData && "string" != typeof i.data && (i.data = e.param(i.data, i.traditional)),
            Ie(ot, i, n, r),
            2 === s)
                return r;
            p = i.global,
            p && 0 === e.active++ && e.event.trigger("ajaxStart"),
            i.type = i.type.toUpperCase(),
            i.hasContent = !an.test(i.type),
            a = i.url,
            i.hasContent || (i.data && (a = i.url += (X.test(a) ? "&" : "?") + i.data,
            delete i.data),
            i.cache === !1 && (i.url = ye.test(a) ? a.replace(ye, "$1_=" + Z++) : a + (X.test(a) ? "&" : "?") + "_=" + Z++)),
            i.ifModified && (e.lastModified[a] && r.setRequestHeader("If-Modified-Since", e.lastModified[a]),
            e.etag[a] && r.setRequestHeader("If-None-Match", e.etag[a])),
            (i.data && i.hasContent && i.contentType !== !1 || n.contentType) && r.setRequestHeader("Content-Type", i.contentType),
            r.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + ("*" !== i.dataTypes[0] ? ", " + at + "; q=0.01" : "") : i.accepts["*"]);
            for (d in i.headers)
                r.setRequestHeader(d, i.headers[d]);
            if (i.beforeSend && (i.beforeSend.call(l, r, i) === !1 || 2 === s))
                return r.abort();
            E = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                r[d](i[d]);
            if (h = Ie(G, i, n, r)) {
                r.readyState = 1,
                p && b.trigger("ajaxSend", [r, i]),
                i.async && i.timeout > 0 && (y = setTimeout(function() {
                    r.abort("timeout")
                }, i.timeout));
                try {
                    s = 1,
                    h.send(C, m)
                } catch (o) {
                    if (!(2 > s))
                        throw o;
                    m(-1, o)
                }
            } else
                m(-1, "No Transport");
            function m(t, n, o, u) {
                var d, w, v, m, f, c = n;
                2 !== s && (s = 2,
                y && clearTimeout(y),
                h = void 0,
                x = u || "",
                r.readyState = t > 0 ? 4 : 0,
                d = t >= 200 && 300 > t || 304 === t,
                o && (m = yt(i, r, o)),
                m = bt(i, m, r, d),
                d ? (i.ifModified && (f = r.getResponseHeader("Last-Modified"),
                f && (e.lastModified[a] = f),
                f = r.getResponseHeader("etag"),
                f && (e.etag[a] = f)),
                204 === t || "HEAD" === i.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = m.state,
                w = m.data,
                v = m.error,
                d = !v)) : (v = c,
                (t || !c) && (c = "error",
                0 > t && (t = 0))),
                r.status = t,
                r.statusText = (n || c) + "",
                d ? T.resolveWith(l, [w, c, r]) : T.rejectWith(l, [r, c, v]),
                r.statusCode(g),
                g = void 0,
                p && b.trigger(d ? "ajaxSuccess" : "ajaxError", [r, i, d ? w : v]),
                k.fireWith(l, [r, c]),
                p && (b.trigger("ajaxComplete", [r, i]),
                --e.active || e.event.trigger("ajaxStop")))
            }
            ;return r
        },
        getJSON: function(t, n, i) {
            return e.get(t, n, i, "json")
        },
        getScript: function(t, n) {
            return e.get(t, void 0, n, "script")
        }
    }),
    e.each(["get", "post"], function(t, n) {
        e[n] = function(t, i, r, o) {
            return e.isFunction(i) && (o = o || r,
            r = i,
            i = void 0),
            e.ajax({
                url: t,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }),
    e.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, n) {
        e.fn[n] = function(e) {
            return this.on(n, e)
        }
    }),
    e._evalUrl = function(t) {
        return e.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    e.fn.extend({
        wrapAll: function(t) {
            if (e.isFunction(t))
                return this.each(function(n) {
                    e(this).wrapAll(t.call(this, n))
                });
            if (this[0]) {
                var n = e(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && n.insertBefore(this[0]),
                n.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            ;return this
        },
        wrapInner: function(t) {
            return this.each(e.isFunction(t) ? function(n) {
                e(this).wrapInner(t.call(this, n))
            }
            : function() {
                var i = e(this)
                  , n = i.contents();
                n.length ? n.wrapAll(t) : i.append(t)
            }
            )
        },
        wrap: function(t) {
            var n = e.isFunction(t);
            return this.each(function(i) {
                e(this).wrapAll(n ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    e.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !i.reliableHiddenOffsets() && "none" === (t.style && t.style.display || e.css(t, "display"))
    }
    ,
    e.expr.filters.visible = function(t) {
        return !e.expr.filters.hidden(t)
    }
    ;
    var Qt = /%20/g
      , Vt = /\[\]$/
      , Ce = /\r?\n/g
      , Jt = /^(?:submit|button|image|reset|file)$/i
      , Gt = /^(?:input|select|textarea|keygen)/i;
    function re(t, n, i, r) {
        var o;
        if (e.isArray(n))
            e.each(n, function(e, n) {
                i || Vt.test(t) ? r(t, n) : re(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, r)
            });
        else if (i || "object" !== e.type(n))
            r(t, n);
        else
            for (o in n)
                re(t + "[" + o + "]", n[o], i, r)
    }
    ;e.param = function(t, n) {
        var r, i = [], o = function(t, n) {
            n = e.isFunction(n) ? n() : null == n ? "" : n,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }
        ;
        if (void 0 === n && (n = e.ajaxSettings && e.ajaxSettings.traditional),
        e.isArray(t) || t.jquery && !e.isPlainObject(t))
            e.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (r in t)
                re(r, t[r], n, o);
        return i.join("&").replace(Qt, "+")
    }
    ,
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = e.prop(this, "elements");
                return t ? e.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !e(this).is(":disabled") && Gt.test(this.nodeName) && !Jt.test(t) && (this.checked || !I.test(t))
            }).map(function(t, n) {
                var i = e(this).val();
                return null == i ? null : e.isArray(i) ? e.map(i, function(e) {
                    return {
                        name: n.name,
                        value: e.replace(Ce, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: i.replace(Ce, "\r\n")
                }
            }).get()
        }
    }),
    e.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Je() || wt()
    }
    : Je;
    var ht = 0
      , W = {}
      , A = e.ajaxSettings.xhr();
    t.ActiveXObject && e(t).on("unload", function() {
        for (var e in W)
            W[e](void 0, !0)
    }),
    i.cors = !!A && "withCredentials"in A,
    A = i.ajax = !!A,
    A && e.ajaxTransport(function(t) {
        if (!t.crossDomain || i.cors) {
            var n;
            return {
                send: function(i, r) {
                    var a, o = t.xhr(), s = ++ht;
                    if (o.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            o[a] = t.xhrFields[a];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                    o.send(t.hasContent && t.data || null ),
                    n = function(i, a) {
                        var u, d, c;
                        if (n && (a || 4 === o.readyState))
                            if (delete W[s],
                            n = void 0,
                            o.onreadystatechange = e.noop,
                            a)
                                4 !== o.readyState && o.abort();
                            else {
                                c = {},
                                u = o.status,
                                "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    d = o.statusText
                                } catch (l) {
                                    d = ""
                                }
                                ;u || !t.isLocal || t.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                            }
                        ;c && r(u, d, c, o.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === o.readyState ? setTimeout(n) : o.onreadystatechange = W[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    });
    function Je() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    ;function wt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    ;e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return e.globalEval(t),
                t
            }
        }
    }),
    e.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    e.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = r.head || e("head")[0] || r.documentElement;
            return {
                send: function(e, o) {
                    n = r.createElement("script"),
                    n.async = !0,
                    t.scriptCharset && (n.charset = t.scriptCharset),
                    n.src = t.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null ,
                        t || o(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(void 0, !0)
                }
            }
        }
    });
    var ke = []
      , ee = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ke.pop() || e.expando + "_" + Z++;
            return this[t] = !0,
            t
        }
    }),
    e.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, l = n.jsonp !== !1 && (ee.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && ee.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = e.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(ee, "$1" + o) : n.jsonp !== !1 && (n.url += (X.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return a || e.error(o + " was not called"),
            a[0]
        }
        ,
        n.dataTypes[0] = "json",
        s = t[o],
        t[o] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            t[o] = s,
            n[o] && (n.jsonpCallback = i.jsonpCallback,
            ke.push(o)),
            a && e.isFunction(s) && s(a[0]),
            a = s = void 0
        }),
        "script") : void 0
    }),
    e.parseHTML = function(t, n, i) {
        if (!t || "string" != typeof t)
            return null ;
        "boolean" == typeof n && (i = n,
        n = !1),
        n = n || r;
        var a = je.exec(t)
          , o = !i && [];
        return a ? [n.createElement(a[1])] : (a = e.buildFragment([t], n, o),
        o && o.length && e(o).remove(),
        e.merge([], a.childNodes))
    }
    ;
    var qe = e.fn.load;
    e.fn.load = function(t, n, i) {
        if ("string" != typeof t && qe)
            return qe.apply(this, arguments);
        var a, s, l, o = this, r = t.indexOf(" ");
        return r >= 0 && (a = t.slice(r, t.length),
        t = t.slice(0, r)),
        e.isFunction(n) ? (i = n,
        n = void 0) : n && "object" == typeof n && (l = "POST"),
        o.length > 0 && e.ajax({
            url: t,
            type: l,
            dataType: "html",
            data: n
        }).done(function(t) {
            s = arguments,
            o.html(a ? e("<div>").append(e.parseHTML(t)).find(a) : t)
        }).complete(i && function(e, t) {
            o.each(i, s || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    e.expr.filters.animated = function(t) {
        return e.grep(e.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var st = t.document.documentElement;
    function Ue(t) {
        return e.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    ;e.offset = {
        setOffset: function(t, n, i) {
            var c, d, f, u, r, a, p, l = e.css(t, "position"), s = e(t), o = {};
            "static" === l && (t.style.position = "relative"),
            r = s.offset(),
            f = e.css(t, "top"),
            a = e.css(t, "left"),
            p = ("absolute" === l || "fixed" === l) && e.inArray("auto", [f, a]) > -1,
            p ? (c = s.position(),
            u = c.top,
            d = c.left) : (u = parseFloat(f) || 0,
            d = parseFloat(a) || 0),
            e.isFunction(n) && (n = n.call(t, i, r)),
            null != n.top && (o.top = n.top - r.top + u),
            null != n.left && (o.left = n.left - r.left + d),
            "using"in n ? n.using.call(t, o) : s.css(o)
        }
    },
    e.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(n) {
                    e.offset.setOffset(this, t, n)
                });
            var n, a, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            if (o)
                return n = o.documentElement,
                e.contains(n, i) ? (typeof i.getBoundingClientRect !== u && (r = i.getBoundingClientRect()),
                a = Ue(o),
                {
                    top: r.top + (a.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: r.left + (a.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === e.css(i, "position") ? r = i.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                e.nodeName(n[0], "html") || (t = n.offset()),
                t.top += e.css(n[0], "borderTopWidth", !0),
                t.left += e.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - e.css(i, "marginTop", !0),
                    left: r.left - t.left - e.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var t = this.offsetParent || st;
                while (t && !e.nodeName(t, "html") && "static" === e.css(t, "position"))
                    t = t.offsetParent;
                return t || st
            })
        }
    }),
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        e.fn[t] = function(r) {
            return x(this, function(t, r, o) {
                var a = Ue(t);
                return void 0 === o ? a ? n in a ? a[n] : a.document.documentElement[r] : t[r] : void (a ? a.scrollTo(i ? e(a).scrollLeft() : o, i ? o : e(a).scrollTop()) : t[r] = o)
            }, t, r, arguments.length, null )
        }
    }),
    e.each(["top", "left"], function(t, n) {
        e.cssHooks[n] = ge(i.pixelPosition, function(t, i) {
            return i ? (i = v(t, n),
            P.test(i) ? e(t).position()[n] + "px" : i) : void 0
        })
    }),
    e.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        e.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, r) {
            e.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r)
                  , a = i || (r === !0 || o === !0 ? "margin" : "border");
                return x(this, function(n, i, r) {
                    var o;
                    return e.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? e.css(n, i, a) : e.style(n, i, r, a)
                }, n, s ? r : void 0, s, null )
            }
        })
    }),
    e.fn.size = function() {
        return this.length
    }
    ,
    e.fn.andSelf = e.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return e
    });
    var mt = t.jQuery
      , vt = t.$;
    return e.noConflict = function(n) {
        return t.$ === e && (t.$ = vt),
        n && t.jQuery === e && (t.jQuery = mt),
        e
    }
    ,
    typeof n === u && (t.jQuery = t.$ = e),
    e
});
$(document).ready(function() {

    $(".bx_show_lang").click(function() {
        $(".hd_ctn_lang").toggleClass("active");
        $(".bx_select_lang").slideToggle("fast")
    });

    $("#hd_search_form,#hd_search_form_mb").submit(function(e) {
        e.preventDefault();
        if ($(this).find(".hd_inp_search").val().trim() == "") {
            var t = "กรุณาป้อนข้อมูลคำที่จะค้นหา";
            if (LANG == "eng") {
                t = "Please input keyword to search"
            }
            ;alert(t)
        } else {
            var n = $(this).find(".hd_inp_search").val();
            location.href = BASE_LANG + "search/" + n
        }
    });
    $(".btn_mobile_search").click(function() {
        $(this).toggleClass("active");
        $("#main_search_mobile").slideToggle("fast")
    });
    $(".hd_ctn_menu").click(function() {
        closeSearch();
        $("#main_menu").stop();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".hd_show_search").hide()
        } else {
            $(".hd_show_search").show()
        }
        ;$("#main_menu").slideToggle().toggleClass("active");
        setBodyMenuActive()
    });
    $("#main_menu .list_menu a").bind("touchstart mouseenter", function(e) {
        $(this).addClass("hover_effect")
    });
    $("#main_menu .list_menu a").bind("touchend mouseleave", function(e) {
        $(this).removeClass("hover_effect")
    });
    setSizeLeftMenu();
    $(window).resize(function() {
        setSizeLeftMenu()
    });
    $(".hd_inp_search").placeholder()
});
var placeholder;
placeholder = $.fn.placeholder = function(e) {
    return !1
}
;

;function closeSearch() {
    if ($(".btn_mobile_search").hasClass("active")) {
        $(".btn_mobile_search").removeClass("active");
        $("#main_search_mobile").hide()
    }
}
;function setBodyMenuActive() {
    if ($("#main_menu").hasClass("active")) {
        var e = $(window).height()
          , t = 57
          , i = e - t
          , n = $("#main_menu ul").height();
        if ((n + t) > e) {
            $("body").addClass("menu_active")
        } else {
            $("body").removeClass("menu_active")
        }
    } else {
        $("body").removeClass("menu_active")
    }
}
;function setSizeLeftMenu() {
    if ($(window).width() < 768) {
        var e = $(window).height()
          , t = 57
          , i = e - t
          , n = $("#main_menu ul").height();
        if ((n + t) > e) {
            $("#main_menu").height(i);
            $("#main_menu").css("overflow-y", "scroll");
            setBodyMenuActive()
        } else {
            $("#main_menu").css("height", "auto");
            $("#main_menu").css("overflow-y", "auto");
            setBodyMenuActive()
        }
    } else {
        $("body").removeClass("menu_active");
        $("#main_menu").attr("style", "");
        $(".hd_ctn_menu").removeClass("active");
        $("#main_search_mobile").hide();
        $("#hd_inp_search").val("")
    }
}

;function DetectMobile() {
    var e = !1;
    if (navigator.userAgent.match(/iPad/i)) {
        e = !0;
        actionPc = !0
    }
    ;if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/Android/i)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/BlackBerry/i)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/webOS/i)) {
        e = !0;
        actionPc = !1
    }
    ;return e
}
;function fbs_click() {
    u = location.href;
    t = document.title;
    window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", "toolbar=0,status=0,width=626,height=436");
    return !1
}
;function ls_click() {
    u = location.href;
    t = document.title;
    window.open("http://line.me/R/msg/text/?" + encodeURIComponent(u), "sharer", "toolbar=0,status=0,width=626,height=436");
    return !1
}
;function popup(e, t, n, i) {
    myleft = (screen.width) ? (screen.width - n) / 2 : 100;
    mytop = (screen.height) ? (screen.height - i) / 2 : 100;
    properties = "width=" + n + ",height=" + i;
    properties += ",scrollbars=yes, top=" + mytop + ",left=" + myleft;
    window.open(e, t, properties)
}
;