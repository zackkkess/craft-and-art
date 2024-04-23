if (-1 == navigator.userAgent.indexOf("Chrome-Lighthouse")) {
  !(function (e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports
          ? (module.exports = e.document
                ? t(e, !0)
                : function (e) {
                      if (!e.document) throw new Error("jQuery requires a window with a document");
                      return t(e);
                  })
          : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
      "use strict";
      var n = [],
          i = Object.getPrototypeOf,
          r = n.slice,
          s = n.flat
              ? function (e) {
                    return n.flat.call(e);
                }
              : function (e) {
                    return n.concat.apply([], e);
                },
          o = n.push,
          a = n.indexOf,
          l = {},
          c = l.toString,
          u = l.hasOwnProperty,
          f = u.toString,
          h = f.call(Object),
          d = {},
          p = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
          },
          m = function (e) {
              return null != e && e === e.window;
          },
          g = e.document,
          _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function v(e, t, n) {
          var i,
              r,
              s = (n = n || g).createElement("script");
          if (((s.text = e), t)) for (i in _) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && s.setAttribute(i, r);
          n.head.appendChild(s).parentNode.removeChild(s);
      }
      function y(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
      }
      var b = "3.6.0",
          w = function (e, t) {
              return new w.fn.init(e, t);
          };
      function x(e) {
          var t = !!e && "length" in e && e.length,
              n = y(e);
          return !p(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
      }
      (w.fn = w.prototype = {
          jquery: b,
          constructor: w,
          length: 0,
          toArray: function () {
              return r.call(this);
          },
          get: function (e) {
              return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
              var t = w.merge(this.constructor(), e);
              return (t.prevObject = this), t;
          },
          each: function (e) {
              return w.each(this, e);
          },
          map: function (e) {
              return this.pushStack(
                  w.map(this, function (t, n) {
                      return e.call(t, n, t);
                  })
              );
          },
          slice: function () {
              return this.pushStack(r.apply(this, arguments));
          },
          first: function () {
              return this.eq(0);
          },
          last: function () {
              return this.eq(-1);
          },
          even: function () {
              return this.pushStack(
                  w.grep(this, function (e, t) {
                      return (t + 1) % 2;
                  })
              );
          },
          odd: function () {
              return this.pushStack(
                  w.grep(this, function (e, t) {
                      return t % 2;
                  })
              );
          },
          eq: function (e) {
              var t = this.length,
                  n = +e + (e < 0 ? t : 0);
              return this.pushStack(0 <= n && n < t ? [this[n]] : []);
          },
          end: function () {
              return this.prevObject || this.constructor();
          },
          push: o,
          sort: n.sort,
          splice: n.splice,
      }),
          (w.extend = w.fn.extend = function () {
              var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
              for ("boolean" == typeof o && ((c = o), (o = arguments[a] || {}), a++), "object" == typeof o || p(o) || (o = {}), a === l && ((o = this), a--); a < l; a++)
                  if (null != (e = arguments[a]))
                      for (t in e)
                          (i = e[t]),
                              "__proto__" !== t &&
                                  o !== i &&
                                  (c && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                                      ? ((n = o[t]), (s = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}), (r = !1), (o[t] = w.extend(c, s, i)))
                                      : void 0 !== i && (o[t] = i));
              return o;
          }),
          w.extend({
              expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                  throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                  var t, n;
                  return !(!e || "[object Object]" !== c.call(e) || ((t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || f.call(n) !== h)));
              },
              isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
              },
              globalEval: function (e, t, n) {
                  v(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                  var n,
                      i = 0;
                  if (x(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                  else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                  return e;
              },
              makeArray: function (e, t) {
                  var n = t || [];
                  return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                  return null == t ? -1 : a.call(t, e, n);
              },
              merge: function (e, t) {
                  for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                  return (e.length = r), e;
              },
              grep: function (e, t, n) {
                  for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) !== o && i.push(e[r]);
                  return i;
              },
              map: function (e, t, n) {
                  var i,
                      r,
                      o = 0,
                      a = [];
                  if (x(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                  else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                  return s(a);
              },
              guid: 1,
              support: d,
          }),
          "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
          w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
              l["[object " + t + "]"] = t.toLowerCase();
          });
      var T = (function (e) {
          var t,
              n,
              i,
              r,
              s,
              o,
              a,
              l,
              c,
              u,
              f,
              h,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              x = 0,
              T = 0,
              E = le(),
              C = le(),
              k = le(),
              A = le(),
              O = function (e, t) {
                  return e === t && (f = !0), 0;
              },
              S = {}.hasOwnProperty,
              P = [],
              D = P.pop,
              L = P.push,
              R = P.push,
              N = P.slice,
              j = function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                  return -1;
              },
              M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "[\\x20\\t\\r\\n\\f]",
              F = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              q = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
              H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
              B = new RegExp(I + "+", "g"),
              z = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
              X = new RegExp("^" + I + "*," + I + "*"),
              W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
              $ = new RegExp(I + "|>"),
              Y = new RegExp(H),
              U = new RegExp("^" + F + "$"),
              V = {
                  ID: new RegExp("^#(" + F + ")"),
                  CLASS: new RegExp("^\\.(" + F + ")"),
                  TAG: new RegExp("^(" + F + "|[*])"),
                  ATTR: new RegExp("^" + q),
                  PSEUDO: new RegExp("^" + H),
                  CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                  bool: new RegExp("^(?:" + M + ")$", "i"),
                  needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i"),
              },
              Q = /HTML$/i,
              G = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              Z = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
              ne = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                  return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
              },
              se = function () {
                  h();
              },
              oe = be(
                  function (e) {
                      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                  },
                  { dir: "parentNode", next: "legend" }
              );
          try {
              R.apply((P = N.call(w.childNodes)), w.childNodes), P[w.childNodes.length].nodeType;
          } catch (t) {
              R = {
                  apply: P.length
                      ? function (e, t) {
                            L.apply(e, N.call(t));
                        }
                      : function (e, t) {
                            for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                            e.length = n - 1;
                        },
              };
          }
          function ae(e, t, i, r) {
              var s,
                  a,
                  c,
                  u,
                  f,
                  p,
                  _,
                  v = t && t.ownerDocument,
                  w = t ? t.nodeType : 9;
              if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
              if (!r && (h(t), (t = t || d), m)) {
                  if (11 !== w && (f = J.exec(e)))
                      if ((s = f[1])) {
                          if (9 === w) {
                              if (!(c = t.getElementById(s))) return i;
                              if (c.id === s) return i.push(c), i;
                          } else if (v && (c = v.getElementById(s)) && y(t, c) && c.id === s) return i.push(c), i;
                      } else {
                          if (f[2]) return R.apply(i, t.getElementsByTagName(e)), i;
                          if ((s = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(i, t.getElementsByClassName(s)), i;
                      }
                  if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                      if (((_ = e), (v = t), 1 === w && ($.test(e) || W.test(e)))) {
                          for (((v = (ee.test(e) && _e(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, re)) : t.setAttribute("id", (u = b))), a = (p = o(e)).length; a--; )
                              p[a] = (u ? "#" + u : ":scope") + " " + ye(p[a]);
                          _ = p.join(",");
                      }
                      try {
                          return R.apply(i, v.querySelectorAll(_)), i;
                      } catch (t) {
                          A(e, !0);
                      } finally {
                          u === b && t.removeAttribute("id");
                      }
                  }
              }
              return l(e.replace(z, "$1"), t, i, r);
          }
          function le() {
              var e = [];
              return function t(n, r) {
                  return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
              };
          }
          function ce(e) {
              return (e[b] = !0), e;
          }
          function ue(e) {
              var t = d.createElement("fieldset");
              try {
                  return !!e(t);
              } catch (e) {
                  return !1;
              } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
          }
          function fe(e, t) {
              for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
          }
          function he(e, t) {
              var n = t && e,
                  i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
          }
          function de(e) {
              return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
          }
          function pe(e) {
              return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
              };
          }
          function me(e) {
              return function (t) {
                  return "form" in t
                      ? t.parentNode && !1 === t.disabled
                          ? "label" in t
                              ? "label" in t.parentNode
                                  ? t.parentNode.disabled === e
                                  : t.disabled === e
                              : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                          : t.disabled === e
                      : "label" in t && t.disabled === e;
              };
          }
          function ge(e) {
              return ce(function (t) {
                  return (
                      (t = +t),
                      ce(function (n, i) {
                          for (var r, s = e([], n.length, t), o = s.length; o--; ) n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                      })
                  );
              });
          }
          function _e(e) {
              return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (s = ae.isXML = function (e) {
              var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
              return !Q.test(t || (n && n.nodeName) || "HTML");
          }),
          (h = ae.setDocument = function (e) {
              var t,
                  r,
                  o = e ? e.ownerDocument || e : w;
              return (
                  o != d &&
                      9 === o.nodeType &&
                      o.documentElement &&
                      ((p = (d = o).documentElement),
                      (m = !s(d)),
                      w != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)),
                      (n.scope = ue(function (e) {
                          return p.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                      })),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Z.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (p.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n,
                                        i,
                                        r,
                                        s = t.getElementById(e);
                                    if (s) {
                                        if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                        for (r = t.getElementsByName(e), i = 0; (s = r[i++]); ) if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                    }
                                    return [];
                                }
                            })),
                      (i.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    i = [],
                                    r = 0,
                                    s = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return s;
                            }),
                      (i.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                          }),
                      (_ = []),
                      (g = []),
                      (n.qsa = Z.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              var t;
                              (p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + M + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                                  (t = d.createElement("input")).setAttribute("name", ""),
                                  e.appendChild(t),
                                  e.querySelectorAll("[name='']").length || g.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
                                  e.querySelectorAll(":checked").length || g.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]"),
                                  e.querySelectorAll("\\\f"),
                                  g.push("[\\r\\n\\f]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                  (p.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  g.push(",.*:");
                          })),
                      (n.matchesSelector = Z.test((v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = v.call(e, "*")), v.call(e, "[s!='']:x"), _.push("!=", H);
                          }),
                      (g = g.length && new RegExp(g.join("|"))),
                      (_ = _.length && new RegExp(_.join("|"))),
                      (t = Z.test(p.compareDocumentPosition)),
                      (y =
                          t || Z.test(p.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                }
                              : function (e, t) {
                                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                    return !1;
                                }),
                      (O = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    i ||
                                    (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                        ? e == d || (e.ownerDocument == w && y(w, e))
                                            ? -1
                                            : t == d || (t.ownerDocument == w && y(w, t))
                                            ? 1
                                            : u
                                            ? j(u, e) - j(u, t)
                                            : 0
                                        : 4 & i
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    i = 0,
                                    r = e.parentNode,
                                    s = t.parentNode,
                                    o = [e],
                                    a = [t];
                                if (!r || !s) return e == d ? -1 : t == d ? 1 : r ? -1 : s ? 1 : u ? j(u, e) - j(u, t) : 0;
                                if (r === s) return he(e, t);
                                for (n = e; (n = n.parentNode); ) o.unshift(n);
                                for (n = t; (n = n.parentNode); ) a.unshift(n);
                                for (; o[i] === a[i]; ) i++;
                                return i ? he(o[i], a[i]) : o[i] == w ? -1 : a[i] == w ? 1 : 0;
                            })),
                  d
              );
          }),
          (ae.matches = function (e, t) {
              return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
              if ((h(e), n.matchesSelector && m && !A[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))))
                  try {
                      var i = v.call(e, t);
                      if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                  } catch (e) {
                      A(t, !0);
                  }
              return 0 < ae(t, d, null, [e]).length;
          }),
          (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != d && h(e), y(e, t);
          }),
          (ae.attr = function (e, t) {
              (e.ownerDocument || e) != d && h(e);
              var r = i.attrHandle[t.toLowerCase()],
                  s = r && S.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
              return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
          }),
          (ae.escape = function (e) {
              return (e + "").replace(ie, re);
          }),
          (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
              var t,
                  i = [],
                  r = 0,
                  s = 0;
              if (((f = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(O), f)) {
                  for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                  for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
          }),
          (r = ae.getText = function (e) {
              var t,
                  n = "",
                  i = 0,
                  s = e.nodeType;
              if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
          }),
          ((i = ae.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: V,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                  ATTR: function (e) {
                      return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                  },
                  CHILD: function (e) {
                      return (
                          (e[1] = e[1].toLowerCase()),
                          "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                          e
                      );
                  },
                  PSEUDO: function (e) {
                      var t,
                          n = !e[6] && e[2];
                      return V.CHILD.test(e[0])
                          ? null
                          : (e[3] ? (e[2] = e[4] || e[5] || "") : n && Y.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                  },
              },
              filter: {
                  TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e
                          ? function () {
                                return !0;
                            }
                          : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                  },
                  CLASS: function (e) {
                      var t = E[e + " "];
                      return (
                          t ||
                          ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                              E(e, function (e) {
                                  return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                              }))
                      );
                  },
                  ATTR: function (e, t, n) {
                      return function (i) {
                          var r = ae.attr(i, e);
                          return null == r
                              ? "!=" === t
                              : !t ||
                                    ((r += ""),
                                    "=" === t
                                        ? r === n
                                        : "!=" === t
                                        ? r !== n
                                        : "^=" === t
                                        ? n && 0 === r.indexOf(n)
                                        : "*=" === t
                                        ? n && -1 < r.indexOf(n)
                                        : "$=" === t
                                        ? n && r.slice(-n.length) === n
                                        : "~=" === t
                                        ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n)
                                        : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                      };
                  },
                  CHILD: function (e, t, n, i, r) {
                      var s = "nth" !== e.slice(0, 3),
                          o = "last" !== e.slice(-4),
                          a = "of-type" === t;
                      return 1 === i && 0 === r
                          ? function (e) {
                                return !!e.parentNode;
                            }
                          : function (t, n, l) {
                                var c,
                                    u,
                                    f,
                                    h,
                                    d,
                                    p,
                                    m = s !== o ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    _ = a && t.nodeName.toLowerCase(),
                                    v = !l && !a,
                                    y = !1;
                                if (g) {
                                    if (s) {
                                        for (; m; ) {
                                            for (h = t; (h = h[m]); ) if (a ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((p = [o ? g.firstChild : g.lastChild]), o && v)) {
                                        for (
                                            y = (d = (c = (u = (f = (h = g)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], h = d && g.childNodes[d];
                                            (h = (++d && h && h[m]) || (y = d = 0) || p.pop());

                                        )
                                            if (1 === h.nodeType && ++y && h === t) {
                                                u[e] = [x, d, y];
                                                break;
                                            }
                                    } else if ((v && (y = d = (c = (u = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y))
                                        for (
                                            ;
                                            (h = (++d && h && h[m]) || (y = d = 0) || p.pop()) &&
                                            ((a ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++y || (v && ((u = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [x, y]), h !== t));

                                        );
                                    return (y -= r) === i || (y % i == 0 && 0 <= y / i);
                                }
                            };
                  },
                  PSEUDO: function (e, t) {
                      var n,
                          r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                      return r[b]
                          ? r(t)
                          : 1 < r.length
                          ? ((n = [e, e, "", t]),
                            i.setFilters.hasOwnProperty(e.toLowerCase())
                                ? ce(function (e, n) {
                                      for (var i, s = r(e, t), o = s.length; o--; ) e[(i = j(e, s[o]))] = !(n[i] = s[o]);
                                  })
                                : function (e) {
                                      return r(e, 0, n);
                                  })
                          : r;
                  },
              },
              pseudos: {
                  not: ce(function (e) {
                      var t = [],
                          n = [],
                          i = a(e.replace(z, "$1"));
                      return i[b]
                          ? ce(function (e, t, n, r) {
                                for (var s, o = i(e, null, r, []), a = e.length; a--; ) (s = o[a]) && (e[a] = !(t[a] = s));
                            })
                          : function (e, r, s) {
                                return (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop();
                            };
                  }),
                  has: ce(function (e) {
                      return function (t) {
                          return 0 < ae(e, t).length;
                      };
                  }),
                  contains: ce(function (e) {
                      return (
                          (e = e.replace(te, ne)),
                          function (t) {
                              return -1 < (t.textContent || r(t)).indexOf(e);
                          }
                      );
                  }),
                  lang: ce(function (e) {
                      return (
                          U.test(e || "") || ae.error("unsupported lang: " + e),
                          (e = e.replace(te, ne).toLowerCase()),
                          function (t) {
                              var n;
                              do {
                                  if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                              } while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1;
                          }
                      );
                  }),
                  target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                      return e === p;
                  },
                  focus: function (e) {
                      return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                  },
                  selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                  },
                  parent: function (e) {
                      return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                      return K.test(e.nodeName);
                  },
                  input: function (e) {
                      return G.test(e.nodeName);
                  },
                  button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                      var t;
                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                  },
                  first: ge(function () {
                      return [0];
                  }),
                  last: ge(function (e, t) {
                      return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                  }),
                  odd: ge(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                  }),
                  lt: ge(function (e, t, n) {
                      for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                      return e;
                  }),
                  gt: ge(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                      return e;
                  }),
              },
          }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
          function ve() {}
          function ye(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
          }
          function be(e, t, n) {
              var i = t.dir,
                  r = t.next,
                  s = r || i,
                  o = n && "parentNode" === s,
                  a = T++;
              return t.first
                  ? function (t, n, r) {
                        for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
                        return !1;
                    }
                  : function (t, n, l) {
                        var c,
                            u,
                            f,
                            h = [x, a];
                        if (l) {
                            for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                        } else
                            for (; (t = t[i]); )
                                if (1 === t.nodeType || o)
                                    if (((u = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                    else {
                                        if ((c = u[s]) && c[0] === x && c[1] === a) return (h[2] = c[2]);
                                        if (((u[s] = h)[2] = e(t, n, l))) return !0;
                                    }
                        return !1;
                    };
          }
          function we(e) {
              return 1 < e.length
                  ? function (t, n, i) {
                        for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                        return !0;
                    }
                  : e[0];
          }
          function xe(e, t, n, i, r) {
              for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++) (s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
              return o;
          }
          function Te(e, t, n, i, r, s) {
              return (
                  i && !i[b] && (i = Te(i)),
                  r && !r[b] && (r = Te(r, s)),
                  ce(function (s, o, a, l) {
                      var c,
                          u,
                          f,
                          h = [],
                          d = [],
                          p = o.length,
                          m =
                              s ||
                              (function (e, t, n) {
                                  for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                  return n;
                              })(t || "*", a.nodeType ? [a] : a, []),
                          g = !e || (!s && t) ? m : xe(m, h, e, a, l),
                          _ = n ? (r || (s ? e : p || i) ? [] : o) : g;
                      if ((n && n(g, _, a, l), i)) for (c = xe(_, d), i(c, [], a, l), u = c.length; u--; ) (f = c[u]) && (_[d[u]] = !(g[d[u]] = f));
                      if (s) {
                          if (r || e) {
                              if (r) {
                                  for (c = [], u = _.length; u--; ) (f = _[u]) && c.push((g[u] = f));
                                  r(null, (_ = []), c, l);
                              }
                              for (u = _.length; u--; ) (f = _[u]) && -1 < (c = r ? j(s, f) : h[u]) && (s[c] = !(o[c] = f));
                          }
                      } else (_ = xe(_ === o ? _.splice(p, _.length) : _)), r ? r(null, o, _, l) : R.apply(o, _);
                  })
              );
          }
          function Ee(e) {
              for (
                  var t,
                      n,
                      r,
                      s = e.length,
                      o = i.relative[e[0].type],
                      a = o || i.relative[" "],
                      l = o ? 1 : 0,
                      u = be(
                          function (e) {
                              return e === t;
                          },
                          a,
                          !0
                      ),
                      f = be(
                          function (e) {
                              return -1 < j(t, e);
                          },
                          a,
                          !0
                      ),
                      h = [
                          function (e, n, i) {
                              var r = (!o && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                              return (t = null), r;
                          },
                      ];
                  l < s;
                  l++
              )
                  if ((n = i.relative[e[l].type])) h = [be(we(h), n)];
                  else {
                      if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                          for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                          return Te(1 < l && we(h), 1 < l && ye(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, l < r && Ee(e.slice(l, r)), r < s && Ee((e = e.slice(r))), r < s && ye(e));
                      }
                      h.push(n);
                  }
              return we(h);
          }
          return (
              (ve.prototype = i.filters = i.pseudos),
              (i.setFilters = new ve()),
              (o = ae.tokenize = function (e, t) {
                  var n,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u = C[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                      for (o in ((n && !(r = X.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                      (n = !1),
                      (r = W.exec(a)) && ((n = r.shift()), s.push({ value: n, type: r[0].replace(z, " ") }), (a = a.slice(n.length))),
                      i.filter))
                          !(r = V[o].exec(a)) || (c[o] && !(r = c[o](r))) || ((n = r.shift()), s.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                      if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
              }),
              (a = ae.compile = function (e, t) {
                  var n,
                      r,
                      s,
                      a,
                      l,
                      u,
                      f = [],
                      p = [],
                      g = k[e + " "];
                  if (!g) {
                      for (t || (t = o(e)), n = t.length; n--; ) (g = Ee(t[n]))[b] ? f.push(g) : p.push(g);
                      (g = k(
                          e,
                          ((r = p),
                          (a = 0 < (s = f).length),
                          (l = 0 < r.length),
                          (u = function (e, t, n, o, u) {
                              var f,
                                  p,
                                  g,
                                  _ = 0,
                                  v = "0",
                                  y = e && [],
                                  b = [],
                                  w = c,
                                  T = e || (l && i.find.TAG("*", u)),
                                  E = (x += null == w ? 1 : Math.random() || 0.1),
                                  C = T.length;
                              for (u && (c = t == d || t || u); v !== C && null != (f = T[v]); v++) {
                                  if (l && f) {
                                      for (p = 0, t || f.ownerDocument == d || (h(f), (n = !m)); (g = r[p++]); )
                                          if (g(f, t || d, n)) {
                                              o.push(f);
                                              break;
                                          }
                                      u && (x = E);
                                  }
                                  a && ((f = !g && f) && _--, e && y.push(f));
                              }
                              if (((_ += v), a && v !== _)) {
                                  for (p = 0; (g = s[p++]); ) g(y, b, t, n);
                                  if (e) {
                                      if (0 < _) for (; v--; ) y[v] || b[v] || (b[v] = D.call(o));
                                      b = xe(b);
                                  }
                                  R.apply(o, b), u && !e && 0 < b.length && 1 < _ + s.length && ae.uniqueSort(o);
                              }
                              return u && ((x = E), (c = w)), y;
                          }),
                          a ? ce(u) : u)
                      )).selector = e;
                  }
                  return g;
              }),
              (l = ae.select = function (e, t, n, r) {
                  var s,
                      l,
                      c,
                      u,
                      f,
                      h = "function" == typeof e && e,
                      d = !r && o((e = h.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                      if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                          if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                          h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                      }
                      for (s = V.needsContext.test(e) ? 0 : l.length; s-- && ((c = l[s]), !i.relative[(u = c.type)]); )
                          if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), (ee.test(l[0].type) && _e(t.parentNode)) || t))) {
                              if ((l.splice(s, 1), !(e = r.length && ye(l)))) return R.apply(n, r), n;
                              break;
                          }
                  }
                  return (h || a(e, d))(r, t, !m, n, !t || (ee.test(e) && _e(t.parentNode)) || t), n;
              }),
              (n.sortStable = b.split("").sort(O).join("") === b),
              (n.detectDuplicates = !!f),
              h(),
              (n.sortDetached = ue(function (e) {
                  return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
              })),
              ue(function (e) {
                  return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
              }) ||
                  fe("type|href|height|width", function (e, t, n) {
                      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
              (n.attributes &&
                  ue(function (e) {
                      return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                  })) ||
                  fe("value", function (e, t, n) {
                      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                  }),
              ue(function (e) {
                  return null == e.getAttribute("disabled");
              }) ||
                  fe(M, function (e, t, n) {
                      var i;
                      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                  }),
              ae
          );
      })(e);
      (w.find = T), (w.expr = T.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = T.uniqueSort), (w.text = T.getText), (w.isXMLDoc = T.isXML), (w.contains = T.contains), (w.escapeSelector = T.escape);
      var E = function (e, t, n) {
              for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                  if (1 === e.nodeType) {
                      if (r && w(e).is(n)) break;
                      i.push(e);
                  }
              return i;
          },
          C = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
          },
          k = w.expr.match.needsContext;
      function A(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function S(e, t, n) {
          return p(t)
              ? w.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? w.grep(e, function (e) {
                    return (e === t) !== n;
                })
              : "string" != typeof t
              ? w.grep(e, function (e) {
                    return -1 < a.call(t, e) !== n;
                })
              : w.filter(t, e, n);
      }
      (w.filter = function (e, t, n) {
          var i = t[0];
          return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                  ? w.find.matchesSelector(i, e)
                      ? [i]
                      : []
                  : w.find.matches(
                        e,
                        w.grep(t, function (e) {
                            return 1 === e.nodeType;
                        })
                    )
          );
      }),
          w.fn.extend({
              find: function (e) {
                  var t,
                      n,
                      i = this.length,
                      r = this;
                  if ("string" != typeof e)
                      return this.pushStack(
                          w(e).filter(function () {
                              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
                          })
                      );
                  for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
                  return 1 < i ? w.uniqueSort(n) : n;
              },
              filter: function (e) {
                  return this.pushStack(S(this, e || [], !1));
              },
              not: function (e) {
                  return this.pushStack(S(this, e || [], !0));
              },
              is: function (e) {
                  return !!S(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length;
              },
          });
      var P,
          D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((w.fn.init = function (e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || P), "string" == typeof e)) {
              if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (i[1]) {
                  if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), O.test(i[1]) && w.isPlainObject(t))) for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                  return this;
              }
              return (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
          }
          return e.nodeType ? ((this[0] = e), (this.length = 1), this) : p(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
      }).prototype = w.fn),
          (P = w(g));
      var L = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 };
      function N(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
      }
      w.fn.extend({
          has: function (e) {
              var t = w(e, this),
                  n = t.length;
              return this.filter(function () {
                  for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
              });
          },
          closest: function (e, t) {
              var n,
                  i = 0,
                  r = this.length,
                  s = [],
                  o = "string" != typeof e && w(e);
              if (!k.test(e))
                  for (; i < r; i++)
                      for (n = this[i]; n && n !== t; n = n.parentNode)
                          if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                              s.push(n);
                              break;
                          }
              return this.pushStack(1 < s.length ? w.uniqueSort(s) : s);
          },
          index: function (e) {
              return e ? ("string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
          },
          addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
      }),
          w.each(
              {
                  parent: function (e) {
                      var t = e.parentNode;
                      return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                      return E(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                      return E(e, "parentNode", n);
                  },
                  next: function (e) {
                      return N(e, "nextSibling");
                  },
                  prev: function (e) {
                      return N(e, "previousSibling");
                  },
                  nextAll: function (e) {
                      return E(e, "nextSibling");
                  },
                  prevAll: function (e) {
                      return E(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                      return E(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                      return E(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                      return C((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                      return C(e.firstChild);
                  },
                  contents: function (e) {
                      return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                  },
              },
              function (e, t) {
                  w.fn[e] = function (n, i) {
                      var r = w.map(this, t, n);
                      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (R[e] || w.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r);
                  };
              }
          );
      var j = /[^\x20\t\r\n\f]+/g;
      function M(e) {
          return e;
      }
      function I(e) {
          throw e;
      }
      function F(e, t, n, i) {
          var r;
          try {
              e && p((r = e.promise)) ? r.call(e).done(t).fail(n) : e && p((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
          } catch (e) {
              n.apply(void 0, [e]);
          }
      }
      (w.Callbacks = function (e) {
          var t, n;
          e =
              "string" == typeof e
                  ? ((t = e),
                    (n = {}),
                    w.each(t.match(j) || [], function (e, t) {
                        n[t] = !0;
                    }),
                    n)
                  : w.extend({}, e);
          var i,
              r,
              s,
              o,
              a = [],
              l = [],
              c = -1,
              u = function () {
                  for (o = o || e.once, s = i = !0; l.length; c = -1) for (r = l.shift(); ++c < a.length; ) !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && ((c = a.length), (r = !1));
                  e.memory || (r = !1), (i = !1), o && (a = r ? [] : "");
              },
              f = {
                  add: function () {
                      return (
                          a &&
                              (r && !i && ((c = a.length - 1), l.push(r)),
                              (function t(n) {
                                  w.each(n, function (n, i) {
                                      p(i) ? (e.unique && f.has(i)) || a.push(i) : i && i.length && "string" !== y(i) && t(i);
                                  });
                              })(arguments),
                              r && !i && u()),
                          this
                      );
                  },
                  remove: function () {
                      return (
                          w.each(arguments, function (e, t) {
                              for (var n; -1 < (n = w.inArray(t, a, n)); ) a.splice(n, 1), n <= c && c--;
                          }),
                          this
                      );
                  },
                  has: function (e) {
                      return e ? -1 < w.inArray(e, a) : 0 < a.length;
                  },
                  empty: function () {
                      return a && (a = []), this;
                  },
                  disable: function () {
                      return (o = l = []), (a = r = ""), this;
                  },
                  disabled: function () {
                      return !a;
                  },
                  lock: function () {
                      return (o = l = []), r || i || (a = r = ""), this;
                  },
                  locked: function () {
                      return !!o;
                  },
                  fireWith: function (e, t) {
                      return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i || u()), this;
                  },
                  fire: function () {
                      return f.fireWith(this, arguments), this;
                  },
                  fired: function () {
                      return !!s;
                  },
              };
          return f;
      }),
          w.extend({
              Deferred: function (t) {
                  var n = [
                          ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                          ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                          ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                      ],
                      i = "pending",
                      r = {
                          state: function () {
                              return i;
                          },
                          always: function () {
                              return s.done(arguments).fail(arguments), this;
                          },
                          catch: function (e) {
                              return r.then(null, e);
                          },
                          pipe: function () {
                              var e = arguments;
                              return w
                                  .Deferred(function (t) {
                                      w.each(n, function (n, i) {
                                          var r = p(e[i[4]]) && e[i[4]];
                                          s[i[1]](function () {
                                              var e = r && r.apply(this, arguments);
                                              e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
                                          });
                                      }),
                                          (e = null);
                                  })
                                  .promise();
                          },
                          then: function (t, i, r) {
                              var s = 0;
                              function o(t, n, i, r) {
                                  return function () {
                                      var a = this,
                                          l = arguments,
                                          c = function () {
                                              var e, c;
                                              if (!(t < s)) {
                                                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                  (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                      p(c)
                                                          ? r
                                                              ? c.call(e, o(s, n, M, r), o(s, n, I, r))
                                                              : (s++, c.call(e, o(s, n, M, r), o(s, n, I, r), o(s, n, M, n.notifyWith)))
                                                          : (i !== M && ((a = void 0), (l = [e])), (r || n.resolveWith)(a, l));
                                              }
                                          },
                                          u = r
                                              ? c
                                              : function () {
                                                    try {
                                                        c();
                                                    } catch (e) {
                                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), s <= t + 1 && (i !== I && ((a = void 0), (l = [e])), n.rejectWith(a, l));
                                                    }
                                                };
                                      t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
                                  };
                              }
                              return w
                                  .Deferred(function (e) {
                                      n[0][3].add(o(0, e, p(r) ? r : M, e.notifyWith)), n[1][3].add(o(0, e, p(t) ? t : M)), n[2][3].add(o(0, e, p(i) ? i : I));
                                  })
                                  .promise();
                          },
                          promise: function (e) {
                              return null != e ? w.extend(e, r) : r;
                          },
                      },
                      s = {};
                  return (
                      w.each(n, function (e, t) {
                          var o = t[2],
                              a = t[5];
                          (r[t[1]] = o.add),
                              a &&
                                  o.add(
                                      function () {
                                          i = a;
                                      },
                                      n[3 - e][2].disable,
                                      n[3 - e][3].disable,
                                      n[0][2].lock,
                                      n[0][3].lock
                                  ),
                              o.add(t[3].fire),
                              (s[t[0]] = function () {
                                  return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                              }),
                              (s[t[0] + "With"] = o.fireWith);
                      }),
                      r.promise(s),
                      t && t.call(s, s),
                      s
                  );
              },
              when: function (e) {
                  var t = arguments.length,
                      n = t,
                      i = Array(n),
                      s = r.call(arguments),
                      o = w.Deferred(),
                      a = function (e) {
                          return function (n) {
                              (i[e] = this), (s[e] = 1 < arguments.length ? r.call(arguments) : n), --t || o.resolveWith(i, s);
                          };
                      };
                  if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || p(s[n] && s[n].then))) return o.then();
                  for (; n--; ) F(s[n], a(n), o.reject);
                  return o.promise();
              },
          });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (w.Deferred.exceptionHook = function (t, n) {
          e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
      }),
          (w.readyException = function (t) {
              e.setTimeout(function () {
                  throw t;
              });
          });
      var H = w.Deferred();
      function B() {
          g.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready();
      }
      (w.fn.ready = function (e) {
          return (
              H.then(e).catch(function (e) {
                  w.readyException(e);
              }),
              this
          );
      }),
          w.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                  (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || H.resolveWith(g, [w]);
              },
          }),
          (w.ready.then = H.then),
          "complete" === g.readyState || ("loading" !== g.readyState && !g.documentElement.doScroll) ? e.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
      var z = function (e, t, n, i, r, s, o) {
              var a = 0,
                  l = e.length,
                  c = null == n;
              if ("object" === y(n)) for (a in ((r = !0), n)) z(e, t, a, n[a], !0, s, o);
              else if (
                  void 0 !== i &&
                  ((r = !0),
                  p(i) || (o = !0),
                  c &&
                      (o
                          ? (t.call(e, i), (t = null))
                          : ((c = t),
                            (t = function (e, t, n) {
                                return c.call(w(e), n);
                            }))),
                  t)
              )
                  for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
          },
          X = /^-ms-/,
          W = /-([a-z])/g;
      function $(e, t) {
          return t.toUpperCase();
      }
      function Y(e) {
          return e.replace(X, "ms-").replace(W, $);
      }
      var U = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function V() {
          this.expando = w.expando + V.uid++;
      }
      (V.uid = 1),
          (V.prototype = {
              cache: function (e) {
                  var t = e[this.expando];
                  return t || ((t = {}), U(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
              },
              set: function (e, t, n) {
                  var i,
                      r = this.cache(e);
                  if ("string" == typeof t) r[Y(t)] = n;
                  else for (i in t) r[Y(i)] = t[i];
                  return r;
              },
              get: function (e, t) {
                  return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                  return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                  var n,
                      i = e[this.expando];
                  if (void 0 !== i) {
                      if (void 0 !== t) {
                          n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(j) || []).length;
                          for (; n--; ) delete i[t[n]];
                      }
                      (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                  }
              },
              hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !w.isEmptyObject(t);
              },
          });
      var Q = new V(),
          G = new V(),
          K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Z = /[A-Z]/g;
      function J(e, t, n) {
          var i, r;
          if (void 0 === n && 1 === e.nodeType)
              if (((i = "data-" + t.replace(Z, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                  try {
                      n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r));
                  } catch (e) {}
                  G.set(e, t, n);
              } else n = void 0;
          return n;
      }
      w.extend({
          hasData: function (e) {
              return G.hasData(e) || Q.hasData(e);
          },
          data: function (e, t, n) {
              return G.access(e, t, n);
          },
          removeData: function (e, t) {
              G.remove(e, t);
          },
          _data: function (e, t, n) {
              return Q.access(e, t, n);
          },
          _removeData: function (e, t) {
              Q.remove(e, t);
          },
      }),
          w.fn.extend({
              data: function (e, t) {
                  var n,
                      i,
                      r,
                      s = this[0],
                      o = s && s.attributes;
                  if (void 0 === e) {
                      if (this.length && ((r = G.get(s)), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                          for (n = o.length; n--; ) o[n] && 0 === (i = o[n].name).indexOf("data-") && ((i = Y(i.slice(5))), J(s, i, r[i]));
                          Q.set(s, "hasDataAttrs", !0);
                      }
                      return r;
                  }
                  return "object" == typeof e
                      ? this.each(function () {
                            G.set(this, e);
                        })
                      : z(
                            this,
                            function (t) {
                                var n;
                                if (s && void 0 === t) return void 0 !== (n = G.get(s, e)) ? n : void 0 !== (n = J(s, e)) ? n : void 0;
                                this.each(function () {
                                    G.set(this, e, t);
                                });
                            },
                            null,
                            t,
                            1 < arguments.length,
                            null,
                            !0
                        );
              },
              removeData: function (e) {
                  return this.each(function () {
                      G.remove(this, e);
                  });
              },
          }),
          w.extend({
              queue: function (e, t, n) {
                  var i;
                  if (e) return (t = (t || "fx") + "queue"), (i = Q.get(e, t)), n && (!i || Array.isArray(n) ? (i = Q.access(e, t, w.makeArray(n))) : i.push(n)), i || [];
              },
              dequeue: function (e, t) {
                  t = t || "fx";
                  var n = w.queue(e, t),
                      i = n.length,
                      r = n.shift(),
                      s = w._queueHooks(e, t);
                  "inprogress" === r && ((r = n.shift()), i--),
                      r &&
                          ("fx" === t && n.unshift("inprogress"),
                          delete s.stop,
                          r.call(
                              e,
                              function () {
                                  w.dequeue(e, t);
                              },
                              s
                          )),
                      !i && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                      Q.get(e, n) ||
                      Q.access(e, n, {
                          empty: w.Callbacks("once memory").add(function () {
                              Q.remove(e, [t + "queue", n]);
                          }),
                      })
                  );
              },
          }),
          w.fn.extend({
              queue: function (e, t) {
                  var n = 2;
                  return (
                      "string" != typeof e && ((t = e), (e = "fx"), n--),
                      arguments.length < n
                          ? w.queue(this[0], e)
                          : void 0 === t
                          ? this
                          : this.each(function () {
                                var n = w.queue(this, e, t);
                                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                            })
                  );
              },
              dequeue: function (e) {
                  return this.each(function () {
                      w.dequeue(this, e);
                  });
              },
              clearQueue: function (e) {
                  return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                  var n,
                      i = 1,
                      r = w.Deferred(),
                      s = this,
                      o = this.length,
                      a = function () {
                          --i || r.resolveWith(s, [s]);
                      };
                  for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (n = Q.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                  return a(), r.promise(t);
              },
          });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
          ne = ["Top", "Right", "Bottom", "Left"],
          ie = g.documentElement,
          re = function (e) {
              return w.contains(e.ownerDocument, e);
          },
          se = { composed: !0 };
      ie.getRootNode &&
          (re = function (e) {
              return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
          });
      var oe = function (e, t) {
          return "none" === (e = t || e).style.display || ("" === e.style.display && re(e) && "none" === w.css(e, "display"));
      };
      function ae(e, t, n, i) {
          var r,
              s,
              o = 20,
              a = i
                  ? function () {
                        return i.cur();
                    }
                  : function () {
                        return w.css(e, t, "");
                    },
              l = a(),
              c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
              u = e.nodeType && (w.cssNumber[t] || ("px" !== c && +l)) && te.exec(w.css(e, t));
          if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; o--; ) w.style(e, t, u + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0), (u /= s);
              (u *= 2), w.style(e, t, u + c), (n = n || []);
          }
          return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = r))), r;
      }
      var le = {};
      function ce(e, t) {
          for (var n, i, r, s, o, a, l, c = [], u = 0, f = e.length; u < f; u++)
              (i = e[u]).style &&
                  ((n = i.style.display),
                  t
                      ? ("none" === n && ((c[u] = Q.get(i, "display") || null), c[u] || (i.style.display = "")),
                        "" === i.style.display &&
                            oe(i) &&
                            (c[u] =
                                ((l = o = s = void 0),
                                (o = (r = i).ownerDocument),
                                (a = r.nodeName),
                                (l = le[a]) || ((s = o.body.appendChild(o.createElement(a))), (l = w.css(s, "display")), s.parentNode.removeChild(s), "none" === l && (l = "block"), (le[a] = l)))))
                      : "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
          for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
          return e;
      }
      w.fn.extend({
          show: function () {
              return ce(this, !0);
          },
          hide: function () {
              return ce(this);
          },
          toggle: function (e) {
              return "boolean" == typeof e
                  ? e
                      ? this.show()
                      : this.hide()
                  : this.each(function () {
                        oe(this) ? w(this).show() : w(this).hide();
                    });
          },
      });
      var ue,
          fe,
          he = /^(?:checkbox|radio)$/i,
          de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          pe = /^$|^module$|\/(?:java|ecma)script/i;
      (ue = g.createDocumentFragment().appendChild(g.createElement("div"))),
          (fe = g.createElement("input")).setAttribute("type", "radio"),
          fe.setAttribute("checked", "checked"),
          fe.setAttribute("name", "t"),
          ue.appendChild(fe),
          (d.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ue.innerHTML = "<textarea>x</textarea>"),
          (d.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
          (ue.innerHTML = "<option></option>"),
          (d.option = !!ue.lastChild);
      var me = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
      function ge(e, t) {
          var n;
          return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n;
      }
      function _e(e, t) {
          for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
      (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead), (me.th = me.td), d.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
      var ve = /<|&#?\w+;/;
      function ye(e, t, n, i, r) {
          for (var s, o, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
              if ((s = e[d]) || 0 === s)
                  if ("object" === y(s)) w.merge(h, s.nodeType ? [s] : s);
                  else if (ve.test(s)) {
                      for (o = o || f.appendChild(t.createElement("div")), a = (de.exec(s) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, o.innerHTML = l[1] + w.htmlPrefilter(s) + l[2], u = l[0]; u--; ) o = o.lastChild;
                      w.merge(h, o.childNodes), ((o = f.firstChild).textContent = "");
                  } else h.push(t.createTextNode(s));
          for (f.textContent = "", d = 0; (s = h[d++]); )
              if (i && -1 < w.inArray(s, i)) r && r.push(s);
              else if (((c = re(s)), (o = ge(f.appendChild(s), "script")), c && _e(o), n)) for (u = 0; (s = o[u++]); ) pe.test(s.type || "") && n.push(s);
          return f;
      }
      var be = /^([^.]*)(?:\.(.+)|)/;
      function we() {
          return !0;
      }
      function xe() {
          return !1;
      }
      function Te(e, t) {
          return (
              (e ===
                  (function () {
                      try {
                          return g.activeElement;
                      } catch (e) {}
                  })()) ==
              ("focus" === t)
          );
      }
      function Ee(e, t, n, i, r, s) {
          var o, a;
          if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ee(e, a, n, i, t[a], s);
              return e;
          }
          if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = xe;
          else if (!r) return e;
          return (
              1 === s &&
                  ((o = r),
                  ((r = function (e) {
                      return w().off(e), o.apply(this, arguments);
                  }).guid = o.guid || (o.guid = w.guid++))),
              e.each(function () {
                  w.event.add(this, t, r, i, n);
              })
          );
      }
      function Ce(e, t, n) {
          n
              ? (Q.set(e, t, !1),
                w.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                        var i,
                            s,
                            o = Q.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (((o = r.call(arguments)), Q.set(this, t, o), (i = n(this, t)), this[t](), o !== (s = Q.get(this, t)) || i ? Q.set(this, t, !1) : (s = {}), o !== s))
                                return e.stopImmediatePropagation(), e.preventDefault(), s && s.value;
                        } else o.length && (Q.set(this, t, { value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                    },
                }))
              : void 0 === Q.get(e, t) && w.event.add(e, t, we);
      }
      (w.event = {
          global: {},
          add: function (e, t, n, i, r) {
              var s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  f,
                  h,
                  d,
                  p,
                  m,
                  g = Q.get(e);
              if (U(e))
                  for (
                      n.handler && ((n = (s = n).handler), (r = s.selector)),
                          r && w.find.matchesSelector(ie, r),
                          n.guid || (n.guid = w.guid++),
                          (l = g.events) || (l = g.events = Object.create(null)),
                          (o = g.handle) ||
                              (o = g.handle = function (t) {
                                  return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                              }),
                          c = (t = (t || "").match(j) || [""]).length;
                      c--;

                  )
                      (d = m = (a = be.exec(t[c]) || [])[1]),
                          (p = (a[2] || "").split(".").sort()),
                          d &&
                              ((f = w.event.special[d] || {}),
                              (d = (r ? f.delegateType : f.bindType) || d),
                              (f = w.event.special[d] || {}),
                              (u = w.extend({ type: d, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: p.join(".") }, s)),
                              (h = l[d]) || (((h = l[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, i, p, o)) || (e.addEventListener && e.addEventListener(d, o))),
                              f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                              r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                              (w.event.global[d] = !0));
          },
          remove: function (e, t, n, i, r) {
              var s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  f,
                  h,
                  d,
                  p,
                  m,
                  g = Q.hasData(e) && Q.get(e);
              if (g && (l = g.events)) {
                  for (c = (t = (t || "").match(j) || [""]).length; c--; )
                      if (((d = m = (a = be.exec(t[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), d)) {
                          for (f = w.event.special[d] || {}, h = l[(d = (i ? f.delegateType : f.bindType) || d)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--; )
                              (u = h[s]),
                                  (!r && m !== u.origType) ||
                                      (n && n.guid !== u.guid) ||
                                      (a && !a.test(u.namespace)) ||
                                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                      (h.splice(s, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(e, u));
                          o && !h.length && ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) || w.removeEvent(e, d, g.handle), delete l[d]);
                      } else for (d in l) w.event.remove(e, d + t[c], n, i, !0);
                  w.isEmptyObject(l) && Q.remove(e, "handle events");
              }
          },
          dispatch: function (e) {
              var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a = new Array(arguments.length),
                  l = w.event.fix(e),
                  c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                  u = w.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
              if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                  for (o = w.event.handlers.call(this, l, c), t = 0; (r = o[t++]) && !l.isPropagationStopped(); )
                      for (l.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                          (l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace)) ||
                              ((l.handleObj = s), (l.data = s.data), void 0 !== (i = ((w.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                  return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
          },
          handlers: function (e, t) {
              var n,
                  i,
                  r,
                  s,
                  o,
                  a = [],
                  l = t.delegateCount,
                  c = e.target;
              if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                  for (; c !== this; c = c.parentNode || this)
                      if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                          for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[(r = (i = t[n]).selector + " ")] && (o[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), o[r] && s.push(i);
                          s.length && a.push({ elem: c, handlers: s });
                      }
              return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
          },
          addProp: function (e, t) {
              Object.defineProperty(w.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: p(t)
                      ? function () {
                            if (this.originalEvent) return t(this.originalEvent);
                        }
                      : function () {
                            if (this.originalEvent) return this.originalEvent[e];
                        },
                  set: function (t) {
                      Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                  },
              });
          },
          fix: function (e) {
              return e[w.expando] ? e : new w.Event(e);
          },
          special: {
              load: { noBubble: !0 },
              click: {
                  setup: function (e) {
                      var t = this || e;
                      return he.test(t.type) && t.click && A(t, "input") && Ce(t, "click", we), !1;
                  },
                  trigger: function (e) {
                      var t = this || e;
                      return he.test(t.type) && t.click && A(t, "input") && Ce(t, "click"), !0;
                  },
                  _default: function (e) {
                      var t = e.target;
                      return (he.test(t.type) && t.click && A(t, "input") && Q.get(t, "click")) || A(t, "a");
                  },
              },
              beforeunload: {
                  postDispatch: function (e) {
                      void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                  },
              },
          },
      }),
          (w.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
          }),
          (w.Event = function (e, t) {
              if (!(this instanceof w.Event)) return new w.Event(e, t);
              e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : xe),
                    (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && w.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[w.expando] = !0);
          }),
          (w.Event.prototype = {
              constructor: w.Event,
              isDefaultPrevented: xe,
              isPropagationStopped: xe,
              isImmediatePropagationStopped: xe,
              isSimulated: !1,
              preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
              },
          }),
          w.each(
              {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: !0,
              },
              w.event.addProp
          ),
          w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              w.event.special[e] = {
                  setup: function () {
                      return Ce(this, e, Te), !1;
                  },
                  trigger: function () {
                      return Ce(this, e), !0;
                  },
                  _default: function () {
                      return !0;
                  },
                  delegateType: t,
              };
          }),
          w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
              w.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                      var n,
                          i = e.relatedTarget,
                          r = e.handleObj;
                      return (i && (i === this || w.contains(this, i))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                  },
              };
          }),
          w.fn.extend({
              on: function (e, t, n, i) {
                  return Ee(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                  return Ee(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                  var i, r;
                  if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                  if ("object" == typeof e) {
                      for (r in e) this.off(r, t, e[r]);
                      return this;
                  }
                  return (
                      (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                      !1 === n && (n = xe),
                      this.each(function () {
                          w.event.remove(this, e, n, t);
                      })
                  );
              },
          });
      var ke = /<script|<style|<link/i,
          Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Se(e, t) {
          return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
      }
      function Pe(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function De(e) {
          return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
      }
      function Le(e, t) {
          var n, i, r, s, o, a;
          if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events)) for (r in (Q.remove(t, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
              G.hasData(e) && ((s = G.access(e)), (o = w.extend({}, s)), G.set(t, o));
          }
      }
      function Re(e, t, n, i) {
          t = s(t);
          var r,
              o,
              a,
              l,
              c,
              u,
              f = 0,
              h = e.length,
              m = h - 1,
              g = t[0],
              _ = p(g);
          if (_ || (1 < h && "string" == typeof g && !d.checkClone && Ae.test(g)))
              return e.each(function (r) {
                  var s = e.eq(r);
                  _ && (t[0] = g.call(this, r, s.html())), Re(s, t, n, i);
              });
          if (h && ((o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
              for (l = (a = w.map(ge(r, "script"), Pe)).length; f < h; f++) (c = r), f !== m && ((c = w.clone(c, !0, !0)), l && w.merge(a, ge(c, "script"))), n.call(e[f], c, f);
              if (l)
                  for (u = a[a.length - 1].ownerDocument, w.map(a, De), f = 0; f < l; f++)
                      (c = a[f]),
                          pe.test(c.type || "") &&
                              !Q.access(c, "globalEval") &&
                              w.contains(u, c) &&
                              (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : v(c.textContent.replace(Oe, ""), c, u));
          }
          return e;
      }
      function Ne(e, t, n) {
          for (var i, r = t ? w.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || w.cleanData(ge(i)), i.parentNode && (n && re(i) && _e(ge(i, "script")), i.parentNode.removeChild(i));
          return e;
      }
      w.extend({
          htmlPrefilter: function (e) {
              return e;
          },
          clone: function (e, t, n) {
              var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u = e.cloneNode(!0),
                  f = re(e);
              if (!(d.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                  for (o = ge(u), i = 0, r = (s = ge(e)).length; i < r; i++)
                      (a = s[i]), "input" === (c = (l = o[i]).nodeName.toLowerCase()) && he.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
              if (t)
                  if (n) for (s = s || ge(e), o = o || ge(u), i = 0, r = s.length; i < r; i++) Le(s[i], o[i]);
                  else Le(e, u);
              return 0 < (o = ge(u, "script")).length && _e(o, !f && ge(e, "script")), u;
          },
          cleanData: function (e) {
              for (var t, n, i, r = w.event.special, s = 0; void 0 !== (n = e[s]); s++)
                  if (U(n)) {
                      if ((t = n[Q.expando])) {
                          if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                          n[Q.expando] = void 0;
                      }
                      n[G.expando] && (n[G.expando] = void 0);
                  }
          },
      }),
          w.fn.extend({
              detach: function (e) {
                  return Ne(this, e, !0);
              },
              remove: function (e) {
                  return Ne(this, e);
              },
              text: function (e) {
                  return z(
                      this,
                      function (e) {
                          return void 0 === e
                              ? w.text(this)
                              : this.empty().each(function () {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                });
                      },
                      null,
                      e,
                      arguments.length
                  );
              },
              append: function () {
                  return Re(this, arguments, function (e) {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Se(this, e).appendChild(e);
                  });
              },
              prepend: function () {
                  return Re(this, arguments, function (e) {
                      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                          var t = Se(this, e);
                          t.insertBefore(e, t.firstChild);
                      }
                  });
              },
              before: function () {
                  return Re(this, arguments, function (e) {
                      this.parentNode && this.parentNode.insertBefore(e, this);
                  });
              },
              after: function () {
                  return Re(this, arguments, function (e) {
                      this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                  });
              },
              empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
                  return this;
              },
              clone: function (e, t) {
                  return (
                      (e = null != e && e),
                      (t = null == t ? e : t),
                      this.map(function () {
                          return w.clone(this, e, t);
                      })
                  );
              },
              html: function (e) {
                  return z(
                      this,
                      function (e) {
                          var t = this[0] || {},
                              n = 0,
                              i = this.length;
                          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                          if ("string" == typeof e && !ke.test(e) && !me[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                              e = w.htmlPrefilter(e);
                              try {
                                  for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                                  t = 0;
                              } catch (e) {}
                          }
                          t && this.empty().append(e);
                      },
                      null,
                      e,
                      arguments.length
                  );
              },
              replaceWith: function () {
                  var e = [];
                  return Re(
                      this,
                      arguments,
                      function (t) {
                          var n = this.parentNode;
                          w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this));
                      },
                      e
                  );
              },
          }),
          w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
              w.fn[e] = function (e) {
                  for (var n, i = [], r = w(e), s = r.length - 1, a = 0; a <= s; a++) (n = a === s ? this : this.clone(!0)), w(r[a])[t](n), o.apply(i, n.get());
                  return this.pushStack(i);
              };
          });
      var je = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
          Me = function (t) {
              var n = t.ownerDocument.defaultView;
              return (n && n.opener) || (n = e), n.getComputedStyle(t);
          },
          Ie = function (e, t, n) {
              var i,
                  r,
                  s = {};
              for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
              return i;
          },
          Fe = new RegExp(ne.join("|"), "i");
      function qe(e, t, n) {
          var i,
              r,
              s,
              o,
              a = e.style;
          return (
              (n = n || Me(e)) &&
                  ("" !== (o = n.getPropertyValue(t) || n[t]) || re(e) || (o = w.style(e, t)),
                  !d.pixelBoxStyles() && je.test(o) && Fe.test(t) && ((i = a.width), (r = a.minWidth), (s = a.maxWidth), (a.minWidth = a.maxWidth = a.width = o), (o = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = s))),
              void 0 !== o ? o + "" : o
          );
      }
      function He(e, t) {
          return {
              get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
              },
          };
      }
      !(function () {
          function t() {
              if (u) {
                  (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                      (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                      ie.appendChild(c).appendChild(u);
                  var t = e.getComputedStyle(u);
                  (i = "1%" !== t.top),
                      (l = 12 === n(t.marginLeft)),
                      (u.style.right = "60%"),
                      (o = 36 === n(t.right)),
                      (r = 36 === n(t.width)),
                      (u.style.position = "absolute"),
                      (s = 12 === n(u.offsetWidth / 3)),
                      ie.removeChild(c),
                      (u = null);
              }
          }
          function n(e) {
              return Math.round(parseFloat(e));
          }
          var i,
              r,
              s,
              o,
              a,
              l,
              c = g.createElement("div"),
              u = g.createElement("div");
          u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (d.clearCloneStyle = "content-box" === u.style.backgroundClip),
              w.extend(d, {
                  boxSizingReliable: function () {
                      return t(), r;
                  },
                  pixelBoxStyles: function () {
                      return t(), o;
                  },
                  pixelPosition: function () {
                      return t(), i;
                  },
                  reliableMarginLeft: function () {
                      return t(), l;
                  },
                  scrollboxSize: function () {
                      return t(), s;
                  },
                  reliableTrDimensions: function () {
                      var t, n, i, r;
                      return (
                          null == a &&
                              ((t = g.createElement("table")),
                              (n = g.createElement("tr")),
                              (i = g.createElement("div")),
                              (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                              (n.style.cssText = "border:1px solid"),
                              (n.style.height = "1px"),
                              (i.style.height = "9px"),
                              (i.style.display = "block"),
                              ie.appendChild(t).appendChild(n).appendChild(i),
                              (r = e.getComputedStyle(n)),
                              (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight),
                              ie.removeChild(t)),
                          a
                      );
                  },
              }));
      })();
      var Be = ["Webkit", "Moz", "ms"],
          ze = g.createElement("div").style,
          Xe = {};
      function We(e) {
          return (
              w.cssProps[e] ||
              Xe[e] ||
              (e in ze
                  ? e
                  : (Xe[e] =
                        (function (e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--; ) if ((e = Be[n] + t) in ze) return e;
                        })(e) || e))
          );
      }
      var $e = /^(none|table(?!-c[ea]).+)/,
          Ye = /^--/,
          Ue = { position: "absolute", visibility: "hidden", display: "block" },
          Ve = { letterSpacing: "0", fontWeight: "400" };
      function Qe(e, t, n) {
          var i = te.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function Ge(e, t, n, i, r, s) {
          var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; o < 4; o += 2)
              "margin" === n && (l += w.css(e, n + ne[o], !0, r)),
                  i
                      ? ("content" === n && (l -= w.css(e, "padding" + ne[o], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[o] + "Width", !0, r)))
                      : ((l += w.css(e, "padding" + ne[o], !0, r)), "padding" !== n ? (l += w.css(e, "border" + ne[o] + "Width", !0, r)) : (a += w.css(e, "border" + ne[o] + "Width", !0, r)));
          return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5)) || 0), l;
      }
      function Ke(e, t, n) {
          var i = Me(e),
              r = (!d.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
              s = r,
              o = qe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
          if (je.test(o)) {
              if (!n) return o;
              o = "auto";
          }
          return (
              ((!d.boxSizingReliable() && r) || (!d.reliableTrDimensions() && A(e, "tr")) || "auto" === o || (!parseFloat(o) && "inline" === w.css(e, "display", !1, i))) &&
                  e.getClientRects().length &&
                  ((r = "border-box" === w.css(e, "boxSizing", !1, i)), (s = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) + Ge(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
          );
      }
      function Ze(e, t, n, i, r) {
          return new Ze.prototype.init(e, t, n, i, r);
      }
      w.extend({
          cssHooks: {
              opacity: {
                  get: function (e, t) {
                      if (t) {
                          var n = qe(e, "opacity");
                          return "" === n ? "1" : n;
                      }
                  },
              },
          },
          cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var r,
                      s,
                      o,
                      a = Y(t),
                      l = Ye.test(t),
                      c = e.style;
                  if ((l || (t = We(a)), (o = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
                  "string" == (s = typeof n) && (r = te.exec(n)) && r[1] && ((n = ae(e, t, r)), (s = "number")),
                      null != n &&
                          n == n &&
                          ("number" !== s || l || (n += (r && r[3]) || (w.cssNumber[a] ? "" : "px")),
                          d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                          (o && "set" in o && void 0 === (n = o.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
              }
          },
          css: function (e, t, n, i) {
              var r,
                  s,
                  o,
                  a = Y(t);
              return (
                  Ye.test(t) || (t = We(a)),
                  (o = w.cssHooks[t] || w.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)),
                  void 0 === r && (r = qe(e, t, i)),
                  "normal" === r && t in Ve && (r = Ve[t]),
                  "" === n || n ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r) : r
              );
          },
      }),
          w.each(["height", "width"], function (e, t) {
              w.cssHooks[t] = {
                  get: function (e, n, i) {
                      if (n)
                          return !$e.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                              ? Ke(e, t, i)
                              : Ie(e, Ue, function () {
                                    return Ke(e, t, i);
                                });
                  },
                  set: function (e, n, i) {
                      var r,
                          s = Me(e),
                          o = !d.scrollboxSize() && "absolute" === s.position,
                          a = (o || i) && "border-box" === w.css(e, "boxSizing", !1, s),
                          l = i ? Ge(e, t, i, a, s) : 0;
                      return (
                          a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Ge(e, t, "border", !1, s) - 0.5)),
                          l && (r = te.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                          Qe(0, n, l)
                      );
                  },
              };
          }),
          (w.cssHooks.marginLeft = He(d.reliableMarginLeft, function (e, t) {
              if (t)
                  return (
                      (parseFloat(qe(e, "marginLeft")) ||
                          e.getBoundingClientRect().left -
                              Ie(e, { marginLeft: 0 }, function () {
                                  return e.getBoundingClientRect().left;
                              })) + "px"
                  );
          })),
          w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (w.cssHooks[e + t] = {
                  expand: function (n) {
                      for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = s[i] || s[i - 2] || s[0];
                      return r;
                  },
              }),
                  "margin" !== e && (w.cssHooks[e + t].set = Qe);
          }),
          w.fn.extend({
              css: function (e, t) {
                  return z(
                      this,
                      function (e, t, n) {
                          var i,
                              r,
                              s = {},
                              o = 0;
                          if (Array.isArray(t)) {
                              for (i = Me(e), r = t.length; o < r; o++) s[t[o]] = w.css(e, t[o], !1, i);
                              return s;
                          }
                          return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                      },
                      e,
                      t,
                      1 < arguments.length
                  );
              },
          }),
          (((w.Tween = Ze).prototype = {
              constructor: Ze,
              init: function (e, t, n, i, r, s) {
                  (this.elem = e), (this.prop = n), (this.easing = r || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = s || (w.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                  var e = Ze.propHooks[this.prop];
                  return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
              },
              run: function (e) {
                  var t,
                      n = Ze.propHooks[this.prop];
                  return (
                      this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                      (this.now = (this.end - this.start) * t + this.start),
                      this.options.step && this.options.step.call(this.elem, this.now, this),
                      n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                      this
                  );
              },
          }).init.prototype = Ze.prototype),
          ((Ze.propHooks = {
              _default: {
                  get: function (e) {
                      var t;
                      return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                  },
                  set: function (e) {
                      w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[We(e.prop)]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                  },
              },
          }).scrollTop = Ze.propHooks.scrollLeft = {
              set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
              },
          }),
          (w.easing = {
              linear: function (e) {
                  return e;
              },
              swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
          }),
          (w.fx = Ze.prototype.init),
          (w.fx.step = {});
      var Je,
          et,
          tt,
          nt,
          it = /^(?:toggle|show|hide)$/,
          rt = /queueHooks$/;
      function st() {
          et && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick());
      }
      function ot() {
          return (
              e.setTimeout(function () {
                  Je = void 0;
              }),
              (Je = Date.now())
          );
      }
      function at(e, t) {
          var n,
              i = 0,
              r = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
      }
      function lt(e, t, n) {
          for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), s = 0, o = r.length; s < o; s++) if ((i = r[s].call(n, t, e))) return i;
      }
      function ct(e, t, n) {
          var i,
              r,
              s = 0,
              o = ct.prefilters.length,
              a = w.Deferred().always(function () {
                  delete l.elem;
              }),
              l = function () {
                  if (r) return !1;
                  for (var t = Je || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(i);
                  return a.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
              },
              c = a.promise({
                  elem: e,
                  props: w.extend({}, t),
                  opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: Je || ot(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                      var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                      return c.tweens.push(i), i;
                  },
                  stop: function (t) {
                      var n = 0,
                          i = t ? c.tweens.length : 0;
                      if (r) return this;
                      for (r = !0; n < i; n++) c.tweens[n].run(1);
                      return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                  },
              }),
              u = c.props;
          for (
              (function (e, t) {
                  var n, i, r, s, o;
                  for (n in e)
                      if (((r = t[(i = Y(n))]), (s = e[n]), Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])), n !== i && ((e[i] = s), delete e[n]), (o = w.cssHooks[i]) && ("expand" in o)))
                          for (n in ((s = o.expand(s)), delete e[i], s)) (n in e) || ((e[n] = s[n]), (t[n] = r));
                      else t[i] = r;
              })(u, c.opts.specialEasing);
              s < o;
              s++
          )
              if ((i = ct.prefilters[s].call(c, e, u, c.opts))) return p(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
          return (
              w.map(u, lt, c),
              p(c.opts.start) && c.opts.start.call(e, c),
              c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
              w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
              c
          );
      }
      (w.Animation = w.extend(ct, {
          tweeners: {
              "*": [
                  function (e, t) {
                      var n = this.createTween(e, t);
                      return ae(n.elem, e, te.exec(t), n), n;
                  },
              ],
          },
          tweener: function (e, t) {
              p(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
              for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (ct.tweeners[n] = ct.tweeners[n] || []), ct.tweeners[n].unshift(t);
          },
          prefilters: [
              function (e, t, n) {
                  var i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      f = "width" in t || "height" in t,
                      h = this,
                      d = {},
                      p = e.style,
                      m = e.nodeType && oe(e),
                      g = Q.get(e, "fxshow");
                  for (i in (n.queue ||
                      (null == (o = w._queueHooks(e, "fx")).unqueued &&
                          ((o.unqueued = 0),
                          (a = o.empty.fire),
                          (o.empty.fire = function () {
                              o.unqueued || a();
                          })),
                      o.unqueued++,
                      h.always(function () {
                          h.always(function () {
                              o.unqueued--, w.queue(e, "fx").length || o.empty.fire();
                          });
                      })),
                  t))
                      if (((r = t[i]), it.test(r))) {
                          if ((delete t[i], (s = s || "toggle" === r), r === (m ? "hide" : "show"))) {
                              if ("show" !== r || !g || void 0 === g[i]) continue;
                              m = !0;
                          }
                          d[i] = (g && g[i]) || w.style(e, i);
                      }
                  if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                      for (i in (f &&
                          1 === e.nodeType &&
                          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                          null == (c = g && g.display) && (c = Q.get(e, "display")),
                          "none" === (u = w.css(e, "display")) && (c ? (u = c) : (ce([e], !0), (c = e.style.display || c), (u = w.css(e, "display")), ce([e]))),
                          ("inline" === u || ("inline-block" === u && null != c)) &&
                              "none" === w.css(e, "float") &&
                              (l ||
                                  (h.done(function () {
                                      p.display = c;
                                  }),
                                  null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                              (p.display = "inline-block"))),
                      n.overflow &&
                          ((p.overflow = "hidden"),
                          h.always(function () {
                              (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                          })),
                      (l = !1),
                      d))
                          l ||
                              (g ? "hidden" in g && (m = g.hidden) : (g = Q.access(e, "fxshow", { display: c })),
                              s && (g.hidden = !m),
                              m && ce([e], !0),
                              h.done(function () {
                                  for (i in (m || ce([e]), Q.remove(e, "fxshow"), d)) w.style(e, i, d[i]);
                              })),
                              (l = lt(m ? g[i] : 0, i, h)),
                              i in g || ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
              },
          ],
          prefilter: function (e, t) {
              t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
          },
      })),
          (w.speed = function (e, t, n) {
              var i = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (p(e) && e), duration: e, easing: (n && t) || (t && !p(t) && t) };
              return (
                  w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                  (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                  (i.old = i.complete),
                  (i.complete = function () {
                      p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                  }),
                  i
              );
          }),
          w.fn.extend({
              fadeTo: function (e, t, n, i) {
                  return this.filter(oe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                  var r = w.isEmptyObject(e),
                      s = w.speed(t, n, i),
                      o = function () {
                          var t = ct(this, w.extend({}, e), s);
                          (r || Q.get(this, "finish")) && t.stop(!0);
                      };
                  return (o.finish = o), r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
              },
              stop: function (e, t, n) {
                  var i = function (e) {
                      var t = e.stop;
                      delete e.stop, t(n);
                  };
                  return (
                      "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                      t && this.queue(e || "fx", []),
                      this.each(function () {
                          var t = !0,
                              r = null != e && e + "queueHooks",
                              s = w.timers,
                              o = Q.get(this);
                          if (r) o[r] && o[r].stop && i(o[r]);
                          else for (r in o) o[r] && o[r].stop && rt.test(r) && i(o[r]);
                          for (r = s.length; r--; ) s[r].elem !== this || (null != e && s[r].queue !== e) || (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                          (!t && n) || w.dequeue(this, e);
                      })
                  );
              },
              finish: function (e) {
                  return (
                      !1 !== e && (e = e || "fx"),
                      this.each(function () {
                          var t,
                              n = Q.get(this),
                              i = n[e + "queue"],
                              r = n[e + "queueHooks"],
                              s = w.timers,
                              o = i ? i.length : 0;
                          for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                          for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                          delete n.finish;
                      })
                  );
              },
          }),
          w.each(["toggle", "show", "hide"], function (e, t) {
              var n = w.fn[t];
              w.fn[t] = function (e, i, r) {
                  return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, r);
              };
          }),
          w.each({ slideDown: at("show"), slideUp: at("hide"), slideToggle: at("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
              w.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
              };
          }),
          (w.timers = []),
          (w.fx.tick = function () {
              var e,
                  t = 0,
                  n = w.timers;
              for (Je = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || w.fx.stop(), (Je = void 0);
          }),
          (w.fx.timer = function (e) {
              w.timers.push(e), w.fx.start();
          }),
          (w.fx.interval = 13),
          (w.fx.start = function () {
              et || ((et = !0), st());
          }),
          (w.fx.stop = function () {
              et = null;
          }),
          (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (w.fn.delay = function (t, n) {
              return (
                  (t = (w.fx && w.fx.speeds[t]) || t),
                  (n = n || "fx"),
                  this.queue(n, function (n, i) {
                      var r = e.setTimeout(n, t);
                      i.stop = function () {
                          e.clearTimeout(r);
                      };
                  })
              );
          }),
          (tt = g.createElement("input")),
          (nt = g.createElement("select").appendChild(g.createElement("option"))),
          (tt.type = "checkbox"),
          (d.checkOn = "" !== tt.value),
          (d.optSelected = nt.selected),
          ((tt = g.createElement("input")).value = "t"),
          (tt.type = "radio"),
          (d.radioValue = "t" === tt.value);
      var ut,
          ft = w.expr.attrHandle;
      w.fn.extend({
          attr: function (e, t) {
              return z(this, w.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
              return this.each(function () {
                  w.removeAttr(this, e);
              });
          },
      }),
          w.extend({
              attr: function (e, t, n) {
                  var i,
                      r,
                      s = e.nodeType;
                  if (3 !== s && 8 !== s && 2 !== s)
                      return void 0 === e.getAttribute
                          ? w.prop(e, t, n)
                          : ((1 === s && w.isXMLDoc(e)) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ut : void 0)),
                            void 0 !== n
                                ? null === n
                                    ? void w.removeAttr(e, t)
                                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                    ? i
                                    : (e.setAttribute(t, n + ""), n)
                                : r && "get" in r && null !== (i = r.get(e, t))
                                ? i
                                : null == (i = w.find.attr(e, t))
                                ? void 0
                                : i);
              },
              attrHooks: {
                  type: {
                      set: function (e, t) {
                          if (!d.radioValue && "radio" === t && A(e, "input")) {
                              var n = e.value;
                              return e.setAttribute("type", t), n && (e.value = n), t;
                          }
                      },
                  },
              },
              removeAttr: function (e, t) {
                  var n,
                      i = 0,
                      r = t && t.match(j);
                  if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
              },
          }),
          (ut = {
              set: function (e, t, n) {
                  return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
          }),
          w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || w.find.attr;
              ft[t] = function (e, t, i) {
                  var r,
                      s,
                      o = t.toLowerCase();
                  return i || ((s = ft[o]), (ft[o] = r), (r = null != n(e, t, i) ? o : null), (ft[o] = s)), r;
              };
          });
      var ht = /^(?:input|select|textarea|button)$/i,
          dt = /^(?:a|area)$/i;
      function pt(e) {
          return (e.match(j) || []).join(" ");
      }
      function mt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function gt(e) {
          return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
      }
      w.fn.extend({
          prop: function (e, t) {
              return z(this, w.prop, e, t, 1 < arguments.length);
          },
          removeProp: function (e) {
              return this.each(function () {
                  delete this[w.propFix[e] || e];
              });
          },
      }),
          w.extend({
              prop: function (e, t, n) {
                  var i,
                      r,
                      s = e.nodeType;
                  if (3 !== s && 8 !== s && 2 !== s)
                      return (
                          (1 === s && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (r = w.propHooks[t])),
                          void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                      );
              },
              propHooks: {
                  tabIndex: {
                      get: function (e) {
                          var t = w.find.attr(e, "tabindex");
                          return t ? parseInt(t, 10) : ht.test(e.nodeName) || (dt.test(e.nodeName) && e.href) ? 0 : -1;
                      },
                  },
              },
              propFix: { for: "htmlFor", class: "className" },
          }),
          d.optSelected ||
              (w.propHooks.selected = {
                  get: function (e) {
                      var t = e.parentNode;
                      return t && t.parentNode && t.parentNode.selectedIndex, null;
                  },
                  set: function (e) {
                      var t = e.parentNode;
                      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                  },
              }),
          w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
              w.propFix[this.toLowerCase()] = this;
          }),
          w.fn.extend({
              addClass: function (e) {
                  var t,
                      n,
                      i,
                      r,
                      s,
                      o,
                      a,
                      l = 0;
                  if (p(e))
                      return this.each(function (t) {
                          w(this).addClass(e.call(this, t, mt(this)));
                      });
                  if ((t = gt(e)).length)
                      for (; (n = this[l++]); )
                          if (((r = mt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
                              for (o = 0; (s = t[o++]); ) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                              r !== (a = pt(i)) && n.setAttribute("class", a);
                          }
                  return this;
              },
              removeClass: function (e) {
                  var t,
                      n,
                      i,
                      r,
                      s,
                      o,
                      a,
                      l = 0;
                  if (p(e))
                      return this.each(function (t) {
                          w(this).removeClass(e.call(this, t, mt(this)));
                      });
                  if (!arguments.length) return this.attr("class", "");
                  if ((t = gt(e)).length)
                      for (; (n = this[l++]); )
                          if (((r = mt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
                              for (o = 0; (s = t[o++]); ) for (; -1 < i.indexOf(" " + s + " "); ) i = i.replace(" " + s + " ", " ");
                              r !== (a = pt(i)) && n.setAttribute("class", a);
                          }
                  return this;
              },
              toggleClass: function (e, t) {
                  var n = typeof e,
                      i = "string" === n || Array.isArray(e);
                  return "boolean" == typeof t && i
                      ? t
                          ? this.addClass(e)
                          : this.removeClass(e)
                      : p(e)
                      ? this.each(function (n) {
                            w(this).toggleClass(e.call(this, n, mt(this), t), t);
                        })
                      : this.each(function () {
                            var t, r, s, o;
                            if (i) for (r = 0, s = w(this), o = gt(e); (t = o[r++]); ) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                            else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
                        });
              },
              hasClass: function (e) {
                  var t,
                      n,
                      i = 0;
                  for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && -1 < (" " + pt(mt(n)) + " ").indexOf(t)) return !0;
                  return !1;
              },
          });
      var _t = /\r/g;
      w.fn.extend({
          val: function (e) {
              var t,
                  n,
                  i,
                  r = this[0];
              return arguments.length
                  ? ((i = p(e)),
                    this.each(function (n) {
                        var r;
                        1 === this.nodeType &&
                            (null == (r = i ? e.call(this, n, w(this).val()) : e)
                                ? (r = "")
                                : "number" == typeof r
                                ? (r += "")
                                : Array.isArray(r) &&
                                  (r = w.map(r, function (e) {
                                      return null == e ? "" : e + "";
                                  })),
                            ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                    }))
                  : r
                  ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                      ? n
                      : "string" == typeof (n = r.value)
                      ? n.replace(_t, "")
                      : null == n
                      ? ""
                      : n
                  : void 0;
          },
      }),
          w.extend({
              valHooks: {
                  option: {
                      get: function (e) {
                          var t = w.find.attr(e, "value");
                          return null != t ? t : pt(w.text(e));
                      },
                  },
                  select: {
                      get: function (e) {
                          var t,
                              n,
                              i,
                              r = e.options,
                              s = e.selectedIndex,
                              o = "select-one" === e.type,
                              a = o ? null : [],
                              l = o ? s + 1 : r.length;
                          for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                              if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                  if (((t = w(n).val()), o)) return t;
                                  a.push(t);
                              }
                          return a;
                      },
                      set: function (e, t) {
                          for (var n, i, r = e.options, s = w.makeArray(t), o = r.length; o--; ) ((i = r[o]).selected = -1 < w.inArray(w.valHooks.option.get(i), s)) && (n = !0);
                          return n || (e.selectedIndex = -1), s;
                      },
                  },
              },
          }),
          w.each(["radio", "checkbox"], function () {
              (w.valHooks[this] = {
                  set: function (e, t) {
                      if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                  },
              }),
                  d.checkOn ||
                      (w.valHooks[this].get = function (e) {
                          return null === e.getAttribute("value") ? "on" : e.value;
                      });
          }),
          (d.focusin = "onfocusin" in e);
      var vt = /^(?:focusinfocus|focusoutblur)$/,
          yt = function (e) {
              e.stopPropagation();
          };
      w.extend(w.event, {
          trigger: function (t, n, i, r) {
              var s,
                  o,
                  a,
                  l,
                  c,
                  f,
                  h,
                  d,
                  _ = [i || g],
                  v = u.call(t, "type") ? t.type : t,
                  y = u.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                  ((o = d = a = i = i || g),
                  3 !== i.nodeType &&
                      8 !== i.nodeType &&
                      !vt.test(v + w.event.triggered) &&
                      (-1 < v.indexOf(".") && ((v = (y = v.split(".")).shift()), y.sort()),
                      (c = v.indexOf(":") < 0 && "on" + v),
                      ((t = t[w.expando] ? t : new w.Event(v, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                      (t.namespace = y.join(".")),
                      (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                      (t.result = void 0),
                      t.target || (t.target = i),
                      (n = null == n ? [t] : w.makeArray(n, [t])),
                      (h = w.event.special[v] || {}),
                      r || !h.trigger || !1 !== h.trigger.apply(i, n)))
              ) {
                  if (!r && !h.noBubble && !m(i)) {
                      for (l = h.delegateType || v, vt.test(l + v) || (o = o.parentNode); o; o = o.parentNode) _.push(o), (a = o);
                      a === (i.ownerDocument || g) && _.push(a.defaultView || a.parentWindow || e);
                  }
                  for (s = 0; (o = _[s++]) && !t.isPropagationStopped(); )
                      (d = o),
                          (t.type = 1 < s ? l : h.bindType || v),
                          (f = (Q.get(o, "events") || Object.create(null))[t.type] && Q.get(o, "handle")) && f.apply(o, n),
                          (f = c && o[c]) && f.apply && U(o) && ((t.result = f.apply(o, n)), !1 === t.result && t.preventDefault());
                  return (
                      (t.type = v),
                      r ||
                          t.isDefaultPrevented() ||
                          (h._default && !1 !== h._default.apply(_.pop(), n)) ||
                          !U(i) ||
                          (c &&
                              p(i[v]) &&
                              !m(i) &&
                              ((a = i[c]) && (i[c] = null),
                              (w.event.triggered = v),
                              t.isPropagationStopped() && d.addEventListener(v, yt),
                              i[v](),
                              t.isPropagationStopped() && d.removeEventListener(v, yt),
                              (w.event.triggered = void 0),
                              a && (i[c] = a))),
                      t.result
                  );
              }
          },
          simulate: function (e, t, n) {
              var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
              w.event.trigger(i, null, t);
          },
      }),
          w.fn.extend({
              trigger: function (e, t) {
                  return this.each(function () {
                      w.event.trigger(e, t, this);
                  });
              },
              triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return w.event.trigger(e, t, n, !0);
              },
          }),
          d.focusin ||
              w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                      w.event.simulate(t, e.target, w.event.fix(e));
                  };
                  w.event.special[t] = {
                      setup: function () {
                          var i = this.ownerDocument || this.document || this,
                              r = Q.access(i, t);
                          r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
                      },
                      teardown: function () {
                          var i = this.ownerDocument || this.document || this,
                              r = Q.access(i, t) - 1;
                          r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                      },
                  };
              });
      var bt = e.location,
          wt = { guid: Date.now() },
          xt = /\?/;
      w.parseXML = function (t) {
          var n, i;
          if (!t || "string" != typeof t) return null;
          try {
              n = new e.DOMParser().parseFromString(t, "text/xml");
          } catch (t) {}
          return (
              (i = n && n.getElementsByTagName("parsererror")[0]),
              (n && !i) ||
                  w.error(
                      "Invalid XML: " +
                          (i
                              ? w
                                    .map(i.childNodes, function (e) {
                                        return e.textContent;
                                    })
                                    .join("\n")
                              : t)
                  ),
              n
          );
      };
      var Tt = /\[\]$/,
          Et = /\r?\n/g,
          Ct = /^(?:submit|button|image|reset|file)$/i,
          kt = /^(?:input|select|textarea|keygen)/i;
      function At(e, t, n, i) {
          var r;
          if (Array.isArray(t))
              w.each(t, function (t, r) {
                  n || Tt.test(e) ? i(e, r) : At(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
              });
          else if (n || "object" !== y(t)) i(e, t);
          else for (r in t) At(e + "[" + r + "]", t[r], n, i);
      }
      (w.param = function (e, t) {
          var n,
              i = [],
              r = function (e, t) {
                  var n = p(t) ? t() : t;
                  i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
              w.each(e, function () {
                  r(this.name, this.value);
              });
          else for (n in e) At(n, e[n], t, r);
          return i.join("&");
      }),
          w.fn.extend({
              serialize: function () {
                  return w.param(this.serializeArray());
              },
              serializeArray: function () {
                  return this.map(function () {
                      var e = w.prop(this, "elements");
                      return e ? w.makeArray(e) : this;
                  })
                      .filter(function () {
                          var e = this.type;
                          return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Ct.test(e) && (this.checked || !he.test(e));
                      })
                      .map(function (e, t) {
                          var n = w(this).val();
                          return null == n
                              ? null
                              : Array.isArray(n)
                              ? w.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Et, "\r\n") };
                                })
                              : { name: t.name, value: n.replace(Et, "\r\n") };
                      })
                      .get();
              },
          });
      var Ot = /%20/g,
          St = /#.*$/,
          Pt = /([?&])_=[^&]*/,
          Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Lt = /^(?:GET|HEAD)$/,
          Rt = /^\/\//,
          Nt = {},
          jt = {},
          Mt = "*/".concat("*"),
          It = g.createElement("a");
      function Ft(e) {
          return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                  r = 0,
                  s = t.toLowerCase().match(j) || [];
              if (p(n)) for (; (i = s[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
          };
      }
      function qt(e, t, n, i) {
          var r = {},
              s = e === jt;
          function o(a) {
              var l;
              return (
                  (r[a] = !0),
                  w.each(e[a] || [], function (e, a) {
                      var c = a(t, n, i);
                      return "string" != typeof c || s || r[c] ? (s ? !(l = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
                  }),
                  l
              );
          }
          return o(t.dataTypes[0]) || (!r["*"] && o("*"));
      }
      function Ht(e, t) {
          var n,
              i,
              r = w.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && w.extend(!0, e, i), e;
      }
      (It.href = bt.href),
          w.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                  url: bt.href,
                  type: "GET",
                  isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: { "*": Mt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                  contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                  responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                  converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                  flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                  return t ? Ht(Ht(e, w.ajaxSettings), t) : Ht(w.ajaxSettings, e);
              },
              ajaxPrefilter: Ft(Nt),
              ajaxTransport: Ft(jt),
              ajax: function (t, n) {
                  "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                  var i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      f,
                      h,
                      d = w.ajaxSetup({}, n),
                      p = d.context || d,
                      m = d.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                      _ = w.Deferred(),
                      v = w.Callbacks("once memory"),
                      y = d.statusCode || {},
                      b = {},
                      x = {},
                      T = "canceled",
                      E = {
                          readyState: 0,
                          getResponseHeader: function (e) {
                              var t;
                              if (c) {
                                  if (!o) for (o = {}; (t = Dt.exec(s)); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                  t = o[e.toLowerCase() + " "];
                              }
                              return null == t ? null : t.join(", ");
                          },
                          getAllResponseHeaders: function () {
                              return c ? s : null;
                          },
                          setRequestHeader: function (e, t) {
                              return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (b[e] = t)), this;
                          },
                          overrideMimeType: function (e) {
                              return null == c && (d.mimeType = e), this;
                          },
                          statusCode: function (e) {
                              var t;
                              if (e)
                                  if (c) E.always(e[E.status]);
                                  else for (t in e) y[t] = [y[t], e[t]];
                              return this;
                          },
                          abort: function (e) {
                              var t = e || T;
                              return i && i.abort(t), C(0, t), this;
                          },
                      };
                  if (
                      (_.promise(E),
                      (d.url = ((t || d.url || bt.href) + "").replace(Rt, bt.protocol + "//")),
                      (d.type = n.method || n.type || d.method || d.type),
                      (d.dataTypes = (d.dataType || "*").toLowerCase().match(j) || [""]),
                      null == d.crossDomain)
                  ) {
                      l = g.createElement("a");
                      try {
                          (l.href = d.url), (l.href = l.href), (d.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host);
                      } catch (t) {
                          d.crossDomain = !0;
                      }
                  }
                  if ((d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), qt(Nt, d, n, E), c)) return E;
                  for (f in ((u = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                  (d.type = d.type.toUpperCase()),
                  (d.hasContent = !Lt.test(d.type)),
                  (r = d.url.replace(St, "")),
                  d.hasContent
                      ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Ot, "+"))
                      : ((h = d.url.slice(r.length)),
                        d.data && (d.processData || "string" == typeof d.data) && ((r += (xt.test(r) ? "&" : "?") + d.data), delete d.data),
                        !1 === d.cache && ((r = r.replace(Pt, "$1")), (h = (xt.test(r) ? "&" : "?") + "_=" + wt.guid++ + h)),
                        (d.url = r + h)),
                  d.ifModified && (w.lastModified[r] && E.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && E.setRequestHeader("If-None-Match", w.etag[r])),
                  ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) && E.setRequestHeader("Content-Type", d.contentType),
                  E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : d.accepts["*"]),
                  d.headers))
                      E.setRequestHeader(f, d.headers[f]);
                  if (d.beforeSend && (!1 === d.beforeSend.call(p, E, d) || c)) return E.abort();
                  if (((T = "abort"), v.add(d.complete), E.done(d.success), E.fail(d.error), (i = qt(jt, d, n, E)))) {
                      if (((E.readyState = 1), u && m.trigger("ajaxSend", [E, d]), c)) return E;
                      d.async &&
                          0 < d.timeout &&
                          (a = e.setTimeout(function () {
                              E.abort("timeout");
                          }, d.timeout));
                      try {
                          (c = !1), i.send(b, C);
                      } catch (t) {
                          if (c) throw t;
                          C(-1, t);
                      }
                  } else C(-1, "No Transport");
                  function C(t, n, o, l) {
                      var f,
                          h,
                          g,
                          b,
                          x,
                          T = n;
                      c ||
                          ((c = !0),
                          a && e.clearTimeout(a),
                          (i = void 0),
                          (s = l || ""),
                          (E.readyState = 0 < t ? 4 : 0),
                          (f = (200 <= t && t < 300) || 304 === t),
                          o &&
                              (b = (function (e, t, n) {
                                  for (var i, r, s, o, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                  if (i)
                                      for (r in a)
                                          if (a[r] && a[r].test(i)) {
                                              l.unshift(r);
                                              break;
                                          }
                                  if (l[0] in n) s = l[0];
                                  else {
                                      for (r in n) {
                                          if (!l[0] || e.converters[r + " " + l[0]]) {
                                              s = r;
                                              break;
                                          }
                                          o || (o = r);
                                      }
                                      s = s || o;
                                  }
                                  if (s) return s !== l[0] && l.unshift(s), n[s];
                              })(d, E, o)),
                          !f && -1 < w.inArray("script", d.dataTypes) && w.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () {}),
                          (b = (function (e, t, n, i) {
                              var r,
                                  s,
                                  o,
                                  a,
                                  l,
                                  c = {},
                                  u = e.dataTypes.slice();
                              if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                              for (s = u.shift(); s; )
                                  if ((e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = s), (s = u.shift())))
                                      if ("*" === s) s = l;
                                      else if ("*" !== l && l !== s) {
                                          if (!(o = c[l + " " + s] || c["* " + s]))
                                              for (r in c)
                                                  if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                      !0 === o ? (o = c[r]) : !0 !== c[r] && ((s = a[0]), u.unshift(a[1]));
                                                      break;
                                                  }
                                          if (!0 !== o)
                                              if (o && e.throws) t = o(t);
                                              else
                                                  try {
                                                      t = o(t);
                                                  } catch (e) {
                                                      return { state: "parsererror", error: o ? e : "No conversion from " + l + " to " + s };
                                                  }
                                      }
                              return { state: "success", data: t };
                          })(d, b, E, f)),
                          f
                              ? (d.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = E.getResponseHeader("etag")) && (w.etag[r] = x)),
                                204 === t || "HEAD" === d.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = b.state), (h = b.data), (f = !(g = b.error))))
                              : ((g = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                          (E.status = t),
                          (E.statusText = (n || T) + ""),
                          f ? _.resolveWith(p, [h, T, E]) : _.rejectWith(p, [E, T, g]),
                          E.statusCode(y),
                          (y = void 0),
                          u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? h : g]),
                          v.fireWith(p, [E, T]),
                          u && (m.trigger("ajaxComplete", [E, d]), --w.active || w.event.trigger("ajaxStop")));
                  }
                  return E;
              },
              getJSON: function (e, t, n) {
                  return w.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                  return w.get(e, void 0, t, "script");
              },
          }),
          w.each(["get", "post"], function (e, t) {
              w[t] = function (e, n, i, r) {
                  return p(n) && ((r = r || i), (i = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e));
              };
          }),
          w.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }),
          (w._evalUrl = function (e, t, n) {
              return w.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { "text script": function () {} },
                  dataFilter: function (e) {
                      w.globalEval(e, t, n);
                  },
              });
          }),
          w.fn.extend({
              wrapAll: function (e) {
                  var t;
                  return (
                      this[0] &&
                          (p(e) && (e = e.call(this[0])),
                          (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                              .map(function () {
                                  for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                  return e;
                              })
                              .append(this)),
                      this
                  );
              },
              wrapInner: function (e) {
                  return p(e)
                      ? this.each(function (t) {
                            w(this).wrapInner(e.call(this, t));
                        })
                      : this.each(function () {
                            var t = w(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e);
                        });
              },
              wrap: function (e) {
                  var t = p(e);
                  return this.each(function (n) {
                      w(this).wrapAll(t ? e.call(this, n) : e);
                  });
              },
              unwrap: function (e) {
                  return (
                      this.parent(e)
                          .not("body")
                          .each(function () {
                              w(this).replaceWith(this.childNodes);
                          }),
                      this
                  );
              },
          }),
          (w.expr.pseudos.hidden = function (e) {
              return !w.expr.pseudos.visible(e);
          }),
          (w.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (w.ajaxSettings.xhr = function () {
              try {
                  return new e.XMLHttpRequest();
              } catch (e) {}
          });
      var Bt = { 0: 200, 1223: 204 },
          zt = w.ajaxSettings.xhr();
      (d.cors = !!zt && "withCredentials" in zt),
          (d.ajax = zt = !!zt),
          w.ajaxTransport(function (t) {
              var n, i;
              if (d.cors || (zt && !t.crossDomain))
                  return {
                      send: function (r, s) {
                          var o,
                              a = t.xhr();
                          if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                          for (o in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(o, r[o]);
                          (n = function (e) {
                              return function () {
                                  n &&
                                      ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                      "abort" === e
                                          ? a.abort()
                                          : "error" === e
                                          ? "number" != typeof a.status
                                              ? s(0, "error")
                                              : s(a.status, a.statusText)
                                          : s(
                                                Bt[a.status] || a.status,
                                                a.statusText,
                                                "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                a.getAllResponseHeaders()
                                            ));
                              };
                          }),
                              (a.onload = n()),
                              (i = a.onerror = a.ontimeout = n("error")),
                              void 0 !== a.onabort
                                  ? (a.onabort = i)
                                  : (a.onreadystatechange = function () {
                                        4 === a.readyState &&
                                            e.setTimeout(function () {
                                                n && i();
                                            });
                                    }),
                              (n = n("abort"));
                          try {
                              a.send((t.hasContent && t.data) || null);
                          } catch (r) {
                              if (n) throw r;
                          }
                      },
                      abort: function () {
                          n && n();
                      },
                  };
          }),
          w.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
          }),
          w.ajaxSetup({
              accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                  "text script": function (e) {
                      return w.globalEval(e), e;
                  },
              },
          }),
          w.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }),
          w.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                  return {
                      send: function (i, r) {
                          (t = w("<script>")
                              .attr(e.scriptAttrs || {})
                              .prop({ charset: e.scriptCharset, src: e.url })
                              .on(
                                  "load error",
                                  (n = function (e) {
                                      t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                  })
                              )),
                              g.head.appendChild(t[0]);
                      },
                      abort: function () {
                          n && n();
                      },
                  };
          });
      var Xt,
          Wt = [],
          $t = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
              var e = Wt.pop() || w.expando + "_" + wt.guid++;
              return (this[e] = !0), e;
          },
      }),
          w.ajaxPrefilter("json jsonp", function (t, n, i) {
              var r,
                  s,
                  o,
                  a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
              if (a || "jsonp" === t.dataTypes[0])
                  return (
                      (r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                      a ? (t[a] = t[a].replace($t, "$1" + r)) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                      (t.converters["script json"] = function () {
                          return o || w.error(r + " was not called"), o[0];
                      }),
                      (t.dataTypes[0] = "json"),
                      (s = e[r]),
                      (e[r] = function () {
                          o = arguments;
                      }),
                      i.always(function () {
                          void 0 === s ? w(e).removeProp(r) : (e[r] = s), t[r] && ((t.jsonpCallback = n.jsonpCallback), Wt.push(r)), o && p(s) && s(o[0]), (o = s = void 0);
                      }),
                      "script"
                  );
          }),
          (d.createHTMLDocument = (((Xt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Xt.childNodes.length)),
          (w.parseHTML = function (e, t, n) {
              return "string" != typeof e
                  ? []
                  : ("boolean" == typeof t && ((n = t), (t = !1)),
                    t || (d.createHTMLDocument ? (((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href), t.head.appendChild(i)) : (t = g)),
                    (s = !n && []),
                    (r = O.exec(e)) ? [t.createElement(r[1])] : ((r = ye([e], t, s)), s && s.length && w(s).remove(), w.merge([], r.childNodes)));
              var i, r, s;
          }),
          (w.fn.load = function (e, t, n) {
              var i,
                  r,
                  s,
                  o = this,
                  a = e.indexOf(" ");
              return (
                  -1 < a && ((i = pt(e.slice(a))), (e = e.slice(0, a))),
                  p(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                  0 < o.length &&
                      w
                          .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                          .done(function (e) {
                              (s = arguments), o.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                          })
                          .always(
                              n &&
                                  function (e, t) {
                                      o.each(function () {
                                          n.apply(this, s || [e.responseText, t, e]);
                                      });
                                  }
                          ),
                  this
              );
          }),
          (w.expr.pseudos.animated = function (e) {
              return w.grep(w.timers, function (t) {
                  return e === t.elem;
              }).length;
          }),
          (w.offset = {
              setOffset: function (e, t, n) {
                  var i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c = w.css(e, "position"),
                      u = w(e),
                      f = {};
                  "static" === c && (e.style.position = "relative"),
                      (a = u.offset()),
                      (s = w.css(e, "top")),
                      (l = w.css(e, "left")),
                      ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? ((o = (i = u.position()).top), (r = i.left)) : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                      p(t) && (t = t.call(e, n, w.extend({}, a))),
                      null != t.top && (f.top = t.top - a.top + o),
                      null != t.left && (f.left = t.left - a.left + r),
                      "using" in t ? t.using.call(e, f) : u.css(f);
              },
          }),
          w.fn.extend({
              offset: function (e) {
                  if (arguments.length)
                      return void 0 === e
                          ? this
                          : this.each(function (t) {
                                w.offset.setOffset(this, e, t);
                            });
                  var t,
                      n,
                      i = this[0];
                  return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
              },
              position: function () {
                  if (this[0]) {
                      var e,
                          t,
                          n,
                          i = this[0],
                          r = { top: 0, left: 0 };
                      if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                      else {
                          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                          e && e !== i && 1 === e.nodeType && (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (r.left += w.css(e, "borderLeftWidth", !0)));
                      }
                      return { top: t.top - r.top - w.css(i, "marginTop", !0), left: t.left - r.left - w.css(i, "marginLeft", !0) };
                  }
              },
              offsetParent: function () {
                  return this.map(function () {
                      for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                      return e || ie;
                  });
              },
          }),
          w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
              var n = "pageYOffset" === t;
              w.fn[e] = function (i) {
                  return z(
                      this,
                      function (e, i, r) {
                          var s;
                          if ((m(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView), void 0 === r)) return s ? s[t] : e[i];
                          s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : (e[i] = r);
                      },
                      e,
                      i,
                      arguments.length
                  );
              };
          }),
          w.each(["top", "left"], function (e, t) {
              w.cssHooks[t] = He(d.pixelPosition, function (e, n) {
                  if (n) return (n = qe(e, t)), je.test(n) ? w(e).position()[t] + "px" : n;
              });
          }),
          w.each({ Height: "height", Width: "width" }, function (e, t) {
              w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                  w.fn[i] = function (r, s) {
                      var o = arguments.length && (n || "boolean" != typeof r),
                          a = n || (!0 === r || !0 === s ? "margin" : "border");
                      return z(
                          this,
                          function (t, n, r) {
                              var s;
                              return m(t)
                                  ? 0 === i.indexOf("outer")
                                      ? t["inner" + e]
                                      : t.document.documentElement["client" + e]
                                  : 9 === t.nodeType
                                  ? ((s = t.documentElement), Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e]))
                                  : void 0 === r
                                  ? w.css(t, n, a)
                                  : w.style(t, n, r, a);
                          },
                          t,
                          o ? r : void 0,
                          o
                      );
                  };
              });
          }),
          w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
              w.fn[t] = function (e) {
                  return this.on(t, e);
              };
          }),
          w.fn.extend({
              bind: function (e, t, n) {
                  return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                  return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                  return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                  return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
              },
          }),
          w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
              w.fn[t] = function (e, n) {
                  return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
              };
          });
      var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (w.proxy = function (e, t) {
          var n, i, s;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
              return (
                  (i = r.call(arguments, 2)),
                  ((s = function () {
                      return e.apply(t || this, i.concat(r.call(arguments)));
                  }).guid = e.guid = e.guid || w.guid++),
                  s
              );
      }),
          (w.holdReady = function (e) {
              e ? w.readyWait++ : w.ready(!0);
          }),
          (w.isArray = Array.isArray),
          (w.parseJSON = JSON.parse),
          (w.nodeName = A),
          (w.isFunction = p),
          (w.isWindow = m),
          (w.camelCase = Y),
          (w.type = y),
          (w.now = Date.now),
          (w.isNumeric = function (e) {
              var t = w.type(e);
              return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }),
          (w.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "");
          }),
          "function" == typeof define &&
              define.amd &&
              define("jquery", [], function () {
                  return w;
              });
      var Ut = e.jQuery,
          Vt = e.$;
      return (
          (w.noConflict = function (t) {
              return e.$ === w && (e.$ = Vt), t && e.jQuery === w && (e.jQuery = Ut), w;
          }),
          void 0 === t && (e.jQuery = e.$ = w),
          w
      );
  }),
      (function (e, t) {
          "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t());
      })(this, function () {
          "use strict";
          const e = {
                  find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                  findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                  children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
                  parents(e, t) {
                      const n = [];
                      let i = e.parentNode;
                      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; ) i.matches(t) && n.push(i), (i = i.parentNode);
                      return n;
                  },
                  prev(e, t) {
                      let n = e.previousElementSibling;
                      for (; n; ) {
                          if (n.matches(t)) return [n];
                          n = n.previousElementSibling;
                      }
                      return [];
                  },
                  next(e, t) {
                      let n = e.nextElementSibling;
                      for (; n; ) {
                          if (n.matches(t)) return [n];
                          n = n.nextElementSibling;
                      }
                      return [];
                  },
              },
              t = (e) => {
                  do {
                      e += Math.floor(1e6 * Math.random());
                  } while (document.getElementById(e));
                  return e;
              },
              n = (e) => {
                  let t = e.getAttribute("data-bs-target");
                  if (!t || "#" === t) {
                      let n = e.getAttribute("href");
                      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                      n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), (t = n && "#" !== n ? n.trim() : null);
                  }
                  return t;
              },
              i = (e) => {
                  const t = n(e);
                  return t && document.querySelector(t) ? t : null;
              },
              r = (e) => {
                  const t = n(e);
                  return t ? document.querySelector(t) : null;
              },
              s = (e) => {
                  e.dispatchEvent(new Event("transitionend"));
              },
              o = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
              a = (t) => (o(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && t.length > 0 ? e.findOne(t) : null),
              l = (e, t, n) => {
                  Object.keys(n).forEach((i) => {
                      const r = n[i],
                          s = t[i],
                          a =
                              s && o(s)
                                  ? "element"
                                  : null == (l = s)
                                  ? "" + l
                                  : {}.toString
                                        .call(l)
                                        .match(/\s([a-z]+)/i)[1]
                                        .toLowerCase();
                      var l;
                      if (!new RegExp(r).test(a)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`);
                  });
              },
              c = (e) => !(!o(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
              u = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
              f = (e) => {
                  if (!document.documentElement.attachShadow) return null;
                  if ("function" == typeof e.getRootNode) {
                      const t = e.getRootNode();
                      return t instanceof ShadowRoot ? t : null;
                  }
                  return e instanceof ShadowRoot ? e : e.parentNode ? f(e.parentNode) : null;
              },
              h = () => {},
              d = (e) => e.offsetHeight,
              p = () => {
                  const { jQuery: e } = window;
                  return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
              },
              m = [],
              g = () => "rtl" === document.documentElement.dir,
              _ = (e) => {
                  var t;
                  (t = () => {
                      const t = p();
                      if (t) {
                          const n = e.NAME,
                              i = t.fn[n];
                          (t.fn[n] = e.jQueryInterface), (t.fn[n].Constructor = e), (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
                      }
                  }),
                      "loading" === document.readyState
                          ? (m.length ||
                                document.addEventListener("DOMContentLoaded", () => {
                                    m.forEach((e) => e());
                                }),
                            m.push(t))
                          : t();
              },
              v = (e) => {
                  "function" == typeof e && e();
              },
              y = (e, t, n = !0) => {
                  if (!n) return void v(e);
                  const i =
                      ((e) => {
                          if (!e) return 0;
                          let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
                          const i = Number.parseFloat(t),
                              r = Number.parseFloat(n);
                          return i || r ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
                      })(t) + 5;
                  let r = !1;
                  const o = ({ target: n }) => {
                      n === t && ((r = !0), t.removeEventListener("transitionend", o), v(e));
                  };
                  t.addEventListener("transitionend", o),
                      setTimeout(() => {
                          r || s(t);
                      }, i);
              },
              b = (e, t, n, i) => {
                  let r = e.indexOf(t);
                  if (-1 === r) return e[!n && i ? e.length - 1 : 0];
                  const s = e.length;
                  return (r += n ? 1 : -1), i && (r = (r + s) % s), e[Math.max(0, Math.min(r, s - 1))];
              },
              w = /[^.]*(?=\..*)\.|.*/,
              x = /\..*/,
              T = /::\d+$/,
              E = {};
          let C = 1;
          const k = { mouseenter: "mouseover", mouseleave: "mouseout" },
              A = /^(mouseenter|mouseleave)/i,
              O = new Set([
                  "click",
                  "dblclick",
                  "mouseup",
                  "mousedown",
                  "contextmenu",
                  "mousewheel",
                  "DOMMouseScroll",
                  "mouseover",
                  "mouseout",
                  "mousemove",
                  "selectstart",
                  "selectend",
                  "keydown",
                  "keypress",
                  "keyup",
                  "orientationchange",
                  "touchstart",
                  "touchmove",
                  "touchend",
                  "touchcancel",
                  "pointerdown",
                  "pointermove",
                  "pointerup",
                  "pointerleave",
                  "pointercancel",
                  "gesturestart",
                  "gesturechange",
                  "gestureend",
                  "focus",
                  "blur",
                  "change",
                  "reset",
                  "select",
                  "submit",
                  "focusin",
                  "focusout",
                  "load",
                  "unload",
                  "beforeunload",
                  "resize",
                  "move",
                  "DOMContentLoaded",
                  "readystatechange",
                  "error",
                  "abort",
                  "scroll",
              ]);
          function S(e, t) {
              return (t && `${t}::${C++}`) || e.uidEvent || C++;
          }
          function P(e) {
              const t = S(e);
              return (e.uidEvent = t), (E[t] = E[t] || {}), E[t];
          }
          function D(e, t, n = null) {
              const i = Object.keys(e);
              for (let r = 0, s = i.length; r < s; r++) {
                  const s = e[i[r]];
                  if (s.originalHandler === t && s.delegationSelector === n) return s;
              }
              return null;
          }
          function L(e, t, n) {
              const i = "string" == typeof t,
                  r = i ? n : t;
              let s = j(e);
              return O.has(s) || (s = e), [i, r, s];
          }
          function R(e, t, n, i, r) {
              if ("string" != typeof t || !e) return;
              if ((n || ((n = i), (i = null)), A.test(t))) {
                  const e = (e) =>
                      function (t) {
                          if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
                      };
                  i ? (i = e(i)) : (n = e(n));
              }
              const [s, o, a] = L(t, n, i),
                  l = P(e),
                  c = l[a] || (l[a] = {}),
                  u = D(c, o, s ? n : null);
              if (u) return void (u.oneOff = u.oneOff && r);
              const f = S(o, t.replace(w, "")),
                  h = s
                      ? (function (e, t, n) {
                            return function i(r) {
                                const s = e.querySelectorAll(t);
                                for (let { target: o } = r; o && o !== this; o = o.parentNode) for (let a = s.length; a--; ) if (s[a] === o) return (r.delegateTarget = o), i.oneOff && M.off(e, r.type, t, n), n.apply(o, [r]);
                                return null;
                            };
                        })(e, n, i)
                      : (function (e, t) {
                            return function n(i) {
                                return (i.delegateTarget = e), n.oneOff && M.off(e, i.type, t), t.apply(e, [i]);
                            };
                        })(e, n);
              (h.delegationSelector = s ? n : null), (h.originalHandler = o), (h.oneOff = r), (h.uidEvent = f), (c[f] = h), e.addEventListener(a, h, s);
          }
          function N(e, t, n, i, r) {
              const s = D(t[n], i, r);
              s && (e.removeEventListener(n, s, Boolean(r)), delete t[n][s.uidEvent]);
          }
          function j(e) {
              return (e = e.replace(x, "")), k[e] || e;
          }
          const M = {
                  on(e, t, n, i) {
                      R(e, t, n, i, !1);
                  },
                  one(e, t, n, i) {
                      R(e, t, n, i, !0);
                  },
                  off(e, t, n, i) {
                      if ("string" != typeof t || !e) return;
                      const [r, s, o] = L(t, n, i),
                          a = o !== t,
                          l = P(e),
                          c = t.startsWith(".");
                      if (void 0 !== s) {
                          if (!l || !l[o]) return;
                          return void N(e, l, o, s, r ? n : null);
                      }
                      c &&
                          Object.keys(l).forEach((n) => {
                              !(function (e, t, n, i) {
                                  const r = t[n] || {};
                                  Object.keys(r).forEach((s) => {
                                      if (s.includes(i)) {
                                          const i = r[s];
                                          N(e, t, n, i.originalHandler, i.delegationSelector);
                                      }
                                  });
                              })(e, l, n, t.slice(1));
                          });
                      const u = l[o] || {};
                      Object.keys(u).forEach((n) => {
                          const i = n.replace(T, "");
                          if (!a || t.includes(i)) {
                              const t = u[n];
                              N(e, l, o, t.originalHandler, t.delegationSelector);
                          }
                      });
                  },
                  trigger(e, t, n) {
                      if ("string" != typeof t || !e) return null;
                      const i = p(),
                          r = j(t),
                          s = t !== r,
                          o = O.has(r);
                      let a,
                          l = !0,
                          c = !0,
                          u = !1,
                          f = null;
                      return (
                          s && i && ((a = i.Event(t, n)), i(e).trigger(a), (l = !a.isPropagationStopped()), (c = !a.isImmediatePropagationStopped()), (u = a.isDefaultPrevented())),
                          o ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : (f = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                          void 0 !== n &&
                              Object.keys(n).forEach((e) => {
                                  Object.defineProperty(f, e, { get: () => n[e] });
                              }),
                          u && f.preventDefault(),
                          c && e.dispatchEvent(f),
                          f.defaultPrevented && void 0 !== a && a.preventDefault(),
                          f
                      );
                  },
              },
              I = new Map();
          var F = {
              set(e, t, n) {
                  I.has(e) || I.set(e, new Map());
                  const i = I.get(e);
                  i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
              },
              get: (e, t) => (I.has(e) && I.get(e).get(t)) || null,
              remove(e, t) {
                  if (!I.has(e)) return;
                  const n = I.get(e);
                  n.delete(t), 0 === n.size && I.delete(e);
              },
          };
          class q {
              constructor(e) {
                  (e = a(e)) && ((this._element = e), F.set(this._element, this.constructor.DATA_KEY, this));
              }
              dispose() {
                  F.remove(this._element, this.constructor.DATA_KEY),
                      M.off(this._element, this.constructor.EVENT_KEY),
                      Object.getOwnPropertyNames(this).forEach((e) => {
                          this[e] = null;
                      });
              }
              _queueCallback(e, t, n = !0) {
                  y(e, t, n);
              }
              static getInstance(e) {
                  return F.get(e, this.DATA_KEY);
              }
              static getOrCreateInstance(e, t = {}) {
                  return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
              }
              static get VERSION() {
                  return "5.0.2";
              }
              static get NAME() {
                  throw new Error('You have to implement the static method "NAME", for each component!');
              }
              static get DATA_KEY() {
                  return "bs." + this.NAME;
              }
              static get EVENT_KEY() {
                  return "." + this.DATA_KEY;
              }
          }
          class H extends q {
              static get NAME() {
                  return "alert";
              }
              close(e) {
                  const t = e ? this._getRootElement(e) : this._element,
                      n = this._triggerCloseEvent(t);
                  null === n || n.defaultPrevented || this._removeElement(t);
              }
              _getRootElement(e) {
                  return r(e) || e.closest(".alert");
              }
              _triggerCloseEvent(e) {
                  return M.trigger(e, "close.bs.alert");
              }
              _removeElement(e) {
                  e.classList.remove("show");
                  const t = e.classList.contains("fade");
                  this._queueCallback(() => this._destroyElement(e), e, t);
              }
              _destroyElement(e) {
                  e.remove(), M.trigger(e, "closed.bs.alert");
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = H.getOrCreateInstance(this);
                      "close" === e && t[e](this);
                  });
              }
              static handleDismiss(e) {
                  return function (t) {
                      t && t.preventDefault(), e.close(this);
                  };
              }
          }
          M.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H())), _(H);
          class B extends q {
              static get NAME() {
                  return "button";
              }
              toggle() {
                  this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = B.getOrCreateInstance(this);
                      "toggle" === e && t[e]();
                  });
              }
          }
          function z(e) {
              return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
          }
          function X(e) {
              return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
          }
          M.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (e) => {
              e.preventDefault();
              const t = e.target.closest('[data-bs-toggle="button"]');
              B.getOrCreateInstance(t).toggle();
          }),
              _(B);
          const W = {
                  setDataAttribute(e, t, n) {
                      e.setAttribute("data-bs-" + X(t), n);
                  },
                  removeDataAttribute(e, t) {
                      e.removeAttribute("data-bs-" + X(t));
                  },
                  getDataAttributes(e) {
                      if (!e) return {};
                      const t = {};
                      return (
                          Object.keys(e.dataset)
                              .filter((e) => e.startsWith("bs"))
                              .forEach((n) => {
                                  let i = n.replace(/^bs/, "");
                                  (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = z(e.dataset[n]));
                              }),
                          t
                      );
                  },
                  getDataAttribute: (e, t) => z(e.getAttribute("data-bs-" + X(t))),
                  offset(e) {
                      const t = e.getBoundingClientRect();
                      return { top: t.top + document.body.scrollTop, left: t.left + document.body.scrollLeft };
                  },
                  position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
              },
              $ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
              Y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
              U = "next",
              V = "prev",
              Q = "left",
              G = "right",
              K = { ArrowLeft: G, ArrowRight: Q };
          class Z extends q {
              constructor(t, n) {
                  super(t),
                      (this._items = null),
                      (this._interval = null),
                      (this._activeElement = null),
                      (this._isPaused = !1),
                      (this._isSliding = !1),
                      (this.touchTimeout = null),
                      (this.touchStartX = 0),
                      (this.touchDeltaX = 0),
                      (this._config = this._getConfig(n)),
                      (this._indicatorsElement = e.findOne(".carousel-indicators", this._element)),
                      (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                      (this._pointerEvent = Boolean(window.PointerEvent)),
                      this._addEventListeners();
              }
              static get Default() {
                  return $;
              }
              static get NAME() {
                  return "carousel";
              }
              next() {
                  this._slide(U);
              }
              nextWhenVisible() {
                  !document.hidden && c(this._element) && this.next();
              }
              prev() {
                  this._slide(V);
              }
              pause(t) {
                  t || (this._isPaused = !0), e.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
              }
              cycle(e) {
                  e || (this._isPaused = !1),
                      this._interval && (clearInterval(this._interval), (this._interval = null)),
                      this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
              }
              to(t) {
                  this._activeElement = e.findOne(".active.carousel-item", this._element);
                  const n = this._getItemIndex(this._activeElement);
                  if (t > this._items.length - 1 || t < 0) return;
                  if (this._isSliding) return void M.one(this._element, "slid.bs.carousel", () => this.to(t));
                  if (n === t) return this.pause(), void this.cycle();
                  const i = t > n ? U : V;
                  this._slide(i, this._items[t]);
              }
              _getConfig(e) {
                  return (e = { ...$, ...W.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), l("carousel", e, Y), e;
              }
              _handleSwipe() {
                  const e = Math.abs(this.touchDeltaX);
                  if (e <= 40) return;
                  const t = e / this.touchDeltaX;
                  (this.touchDeltaX = 0), t && this._slide(t > 0 ? G : Q);
              }
              _addEventListeners() {
                  this._config.keyboard && M.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
                      "hover" === this._config.pause && (M.on(this._element, "mouseenter.bs.carousel", (e) => this.pause(e)), M.on(this._element, "mouseleave.bs.carousel", (e) => this.cycle(e))),
                      this._config.touch && this._touchSupported && this._addTouchEventListeners();
              }
              _addTouchEventListeners() {
                  const t = (e) => {
                          !this._pointerEvent || ("pen" !== e.pointerType && "touch" !== e.pointerType) ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX) : (this.touchStartX = e.clientX);
                      },
                      n = (e) => {
                          this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
                      },
                      i = (e) => {
                          !this._pointerEvent || ("pen" !== e.pointerType && "touch" !== e.pointerType) || (this.touchDeltaX = e.clientX - this.touchStartX),
                              this._handleSwipe(),
                              "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((e) => this.cycle(e), 500 + this._config.interval)));
                      };
                  e.find(".carousel-item img", this._element).forEach((e) => {
                      M.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
                  }),
                      this._pointerEvent
                          ? (M.on(this._element, "pointerdown.bs.carousel", (e) => t(e)), M.on(this._element, "pointerup.bs.carousel", (e) => i(e)), this._element.classList.add("pointer-event"))
                          : (M.on(this._element, "touchstart.bs.carousel", (e) => t(e)), M.on(this._element, "touchmove.bs.carousel", (e) => n(e)), M.on(this._element, "touchend.bs.carousel", (e) => i(e)));
              }
              _keydown(e) {
                  if (/input|textarea/i.test(e.target.tagName)) return;
                  const t = K[e.key];
                  t && (e.preventDefault(), this._slide(t));
              }
              _getItemIndex(t) {
                  return (this._items = t && t.parentNode ? e.find(".carousel-item", t.parentNode) : []), this._items.indexOf(t);
              }
              _getItemByOrder(e, t) {
                  const n = e === U;
                  return b(this._items, t, n, this._config.wrap);
              }
              _triggerSlideEvent(t, n) {
                  const i = this._getItemIndex(t),
                      r = this._getItemIndex(e.findOne(".active.carousel-item", this._element));
                  return M.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: n, from: r, to: i });
              }
              _setActiveIndicatorElement(t) {
                  if (this._indicatorsElement) {
                      const n = e.findOne(".active", this._indicatorsElement);
                      n.classList.remove("active"), n.removeAttribute("aria-current");
                      const i = e.find("[data-bs-target]", this._indicatorsElement);
                      for (let e = 0; e < i.length; e++)
                          if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                              i[e].classList.add("active"), i[e].setAttribute("aria-current", "true");
                              break;
                          }
                  }
              }
              _updateInterval() {
                  const t = this._activeElement || e.findOne(".active.carousel-item", this._element);
                  if (!t) return;
                  const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                  n ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = n)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
              }
              _slide(t, n) {
                  const i = this._directionToOrder(t),
                      r = e.findOne(".active.carousel-item", this._element),
                      s = this._getItemIndex(r),
                      o = n || this._getItemByOrder(i, r),
                      a = this._getItemIndex(o),
                      l = Boolean(this._interval),
                      c = i === U,
                      u = c ? "carousel-item-start" : "carousel-item-end",
                      f = c ? "carousel-item-next" : "carousel-item-prev",
                      h = this._orderToDirection(i);
                  if (o && o.classList.contains("active")) return void (this._isSliding = !1);
                  if (this._isSliding) return;
                  if (this._triggerSlideEvent(o, h).defaultPrevented) return;
                  if (!r || !o) return;
                  (this._isSliding = !0), l && this.pause(), this._setActiveIndicatorElement(o), (this._activeElement = o);
                  const p = () => {
                      M.trigger(this._element, "slid.bs.carousel", { relatedTarget: o, direction: h, from: s, to: a });
                  };
                  if (this._element.classList.contains("slide")) {
                      o.classList.add(f), d(o), r.classList.add(u), o.classList.add(u);
                      const e = () => {
                          o.classList.remove(u, f), o.classList.add("active"), r.classList.remove("active", f, u), (this._isSliding = !1), setTimeout(p, 0);
                      };
                      this._queueCallback(e, r, !0);
                  } else r.classList.remove("active"), o.classList.add("active"), (this._isSliding = !1), p();
                  l && this.cycle();
              }
              _directionToOrder(e) {
                  return [G, Q].includes(e) ? (g() ? (e === Q ? V : U) : e === Q ? U : V) : e;
              }
              _orderToDirection(e) {
                  return [U, V].includes(e) ? (g() ? (e === V ? Q : G) : e === V ? G : Q) : e;
              }
              static carouselInterface(e, t) {
                  const n = Z.getOrCreateInstance(e, t);
                  let { _config: i } = n;
                  "object" == typeof t && (i = { ...i, ...t });
                  const r = "string" == typeof t ? t : i.slide;
                  if ("number" == typeof t) n.to(t);
                  else if ("string" == typeof r) {
                      if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
                      n[r]();
                  } else i.interval && i.ride && (n.pause(), n.cycle());
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      Z.carouselInterface(this, e);
                  });
              }
              static dataApiClickHandler(e) {
                  const t = r(this);
                  if (!t || !t.classList.contains("carousel")) return;
                  const n = { ...W.getDataAttributes(t), ...W.getDataAttributes(this) },
                      i = this.getAttribute("data-bs-slide-to");
                  i && (n.interval = !1), Z.carouselInterface(t, n), i && Z.getInstance(t).to(i), e.preventDefault();
              }
          }
          M.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler),
              M.on(window, "load.bs.carousel.data-api", () => {
                  const t = e.find('[data-bs-ride="carousel"]');
                  for (let e = 0, n = t.length; e < n; e++) Z.carouselInterface(t[e], Z.getInstance(t[e]));
              }),
              _(Z);
          const J = { toggle: !0, parent: "" },
              ee = { toggle: "boolean", parent: "(string|element)" };
          class te extends q {
              constructor(t, n) {
                  super(t),
                      (this._isTransitioning = !1),
                      (this._config = this._getConfig(n)),
                      (this._triggerArray = e.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`));
                  const r = e.find('[data-bs-toggle="collapse"]');
                  for (let t = 0, n = r.length; t < n; t++) {
                      const n = r[t],
                          s = i(n),
                          o = e.find(s).filter((e) => e === this._element);
                      null !== s && o.length && ((this._selector = s), this._triggerArray.push(n));
                  }
                  (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
              }
              static get Default() {
                  return J;
              }
              static get NAME() {
                  return "collapse";
              }
              toggle() {
                  this._element.classList.contains("show") ? this.hide() : this.show();
              }
              show() {
                  if (this._isTransitioning || this._element.classList.contains("show")) return;
                  let t, n;
                  this._parent &&
                      0 === (t = e.find(".show, .collapsing", this._parent).filter((e) => ("string" == typeof this._config.parent ? e.getAttribute("data-bs-parent") === this._config.parent : e.classList.contains("collapse")))).length &&
                      (t = null);
                  const i = e.findOne(this._selector);
                  if (t) {
                      const e = t.find((e) => i !== e);
                      if ((n = e ? te.getInstance(e) : null) && n._isTransitioning) return;
                  }
                  if (M.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                  t &&
                      t.forEach((e) => {
                          i !== e && te.collapseInterface(e, "hide"), n || F.set(e, "bs.collapse", null);
                      });
                  const r = this._getDimension();
                  this._element.classList.remove("collapse"),
                      this._element.classList.add("collapsing"),
                      (this._element.style[r] = 0),
                      this._triggerArray.length &&
                          this._triggerArray.forEach((e) => {
                              e.classList.remove("collapsed"), e.setAttribute("aria-expanded", !0);
                          }),
                      this.setTransitioning(!0);
                  const s = "scroll" + (r[0].toUpperCase() + r.slice(1));
                  this._queueCallback(
                      () => {
                          this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), (this._element.style[r] = ""), this.setTransitioning(!1), M.trigger(this._element, "shown.bs.collapse");
                      },
                      this._element,
                      !0
                  ),
                      (this._element.style[r] = this._element[s] + "px");
              }
              hide() {
                  if (this._isTransitioning || !this._element.classList.contains("show")) return;
                  if (M.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                  const e = this._getDimension();
                  (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px"), d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                  const t = this._triggerArray.length;
                  if (t > 0)
                      for (let e = 0; e < t; e++) {
                          const t = this._triggerArray[e],
                              n = r(t);
                          n && !n.classList.contains("show") && (t.classList.add("collapsed"), t.setAttribute("aria-expanded", !1));
                      }
                  this.setTransitioning(!0),
                      (this._element.style[e] = ""),
                      this._queueCallback(
                          () => {
                              this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), M.trigger(this._element, "hidden.bs.collapse");
                          },
                          this._element,
                          !0
                      );
              }
              setTransitioning(e) {
                  this._isTransitioning = e;
              }
              _getConfig(e) {
                  return ((e = { ...J, ...e }).toggle = Boolean(e.toggle)), l("collapse", e, ee), e;
              }
              _getDimension() {
                  return this._element.classList.contains("width") ? "width" : "height";
              }
              _getParent() {
                  let { parent: t } = this._config;
                  const n = `[data-bs-toggle="collapse"][data-bs-parent="${(t = a(t))}"]`;
                  return (
                      e.find(n, t).forEach((e) => {
                          const t = r(e);
                          this._addAriaAndCollapsedClass(t, [e]);
                      }),
                      t
                  );
              }
              _addAriaAndCollapsedClass(e, t) {
                  if (!e || !t.length) return;
                  const n = e.classList.contains("show");
                  t.forEach((e) => {
                      n ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", n);
                  });
              }
              static collapseInterface(e, t) {
                  let n = te.getInstance(e);
                  const i = { ...J, ...W.getDataAttributes(e), ...("object" == typeof t && t ? t : {}) };
                  if ((!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new te(e, i)), "string" == typeof t)) {
                      if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                      n[t]();
                  }
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      te.collapseInterface(this, e);
                  });
              }
          }
          M.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
              ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();
              const n = W.getDataAttributes(this),
                  r = i(this);
              e.find(r).forEach((e) => {
                  const t = te.getInstance(e);
                  let i;
                  t ? (null === t._parent && "string" == typeof n.parent && ((t._config.parent = n.parent), (t._parent = t._getParent())), (i = "toggle")) : (i = n), te.collapseInterface(e, i);
              });
          }),
              _(te);
          var ne = "top",
              ie = "bottom",
              re = "right",
              se = "left",
              oe = [ne, ie, re, se],
              ae = oe.reduce(function (e, t) {
                  return e.concat([t + "-start", t + "-end"]);
              }, []),
              le = [].concat(oe, ["auto"]).reduce(function (e, t) {
                  return e.concat([t, t + "-start", t + "-end"]);
              }, []),
              ce = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
          function ue(e) {
              return e ? (e.nodeName || "").toLowerCase() : null;
          }
          function fe(e) {
              if (null == e) return window;
              if ("[object Window]" !== e.toString()) {
                  var t = e.ownerDocument;
                  return (t && t.defaultView) || window;
              }
              return e;
          }
          function he(e) {
              return e instanceof fe(e).Element || e instanceof Element;
          }
          function de(e) {
              return e instanceof fe(e).HTMLElement || e instanceof HTMLElement;
          }
          function pe(e) {
              return "undefined" != typeof ShadowRoot && (e instanceof fe(e).ShadowRoot || e instanceof ShadowRoot);
          }
          var me = {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: function (e) {
                  var t = e.state;
                  Object.keys(t.elements).forEach(function (e) {
                      var n = t.styles[e] || {},
                          i = t.attributes[e] || {},
                          r = t.elements[e];
                      de(r) &&
                          ue(r) &&
                          (Object.assign(r.style, n),
                          Object.keys(i).forEach(function (e) {
                              var t = i[e];
                              !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
                          }));
                  });
              },
              effect: function (e) {
                  var t = e.state,
                      n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                  return (
                      Object.assign(t.elements.popper.style, n.popper),
                      (t.styles = n),
                      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                      function () {
                          Object.keys(t.elements).forEach(function (e) {
                              var i = t.elements[e],
                                  r = t.attributes[e] || {},
                                  s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                                      return (e[t] = ""), e;
                                  }, {});
                              de(i) &&
                                  ue(i) &&
                                  (Object.assign(i.style, s),
                                  Object.keys(r).forEach(function (e) {
                                      i.removeAttribute(e);
                                  }));
                          });
                      }
                  );
              },
              requires: ["computeStyles"],
          };
          function ge(e) {
              return e.split("-")[0];
          }
          function _e(e) {
              var t = e.getBoundingClientRect();
              return { width: t.width, height: t.height, top: t.top, right: t.right, bottom: t.bottom, left: t.left, x: t.left, y: t.top };
          }
          function ve(e) {
              var t = _e(e),
                  n = e.offsetWidth,
                  i = e.offsetHeight;
              return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i };
          }
          function ye(e, t) {
              var n = t.getRootNode && t.getRootNode();
              if (e.contains(t)) return !0;
              if (n && pe(n)) {
                  var i = t;
                  do {
                      if (i && e.isSameNode(i)) return !0;
                      i = i.parentNode || i.host;
                  } while (i);
              }
              return !1;
          }
          function be(e) {
              return fe(e).getComputedStyle(e);
          }
          function we(e) {
              return ["table", "td", "th"].indexOf(ue(e)) >= 0;
          }
          function xe(e) {
              return ((he(e) ? e.ownerDocument : e.document) || window.document).documentElement;
          }
          function Te(e) {
              return "html" === ue(e) ? e : e.assignedSlot || e.parentNode || (pe(e) ? e.host : null) || xe(e);
          }
          function Ee(e) {
              return de(e) && "fixed" !== be(e).position ? e.offsetParent : null;
          }
          function Ce(e) {
              for (var t = fe(e), n = Ee(e); n && we(n) && "static" === be(n).position; ) n = Ee(n);
              return n && ("html" === ue(n) || ("body" === ue(n) && "static" === be(n).position))
                  ? t
                  : n ||
                        (function (e) {
                            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                            if (-1 !== navigator.userAgent.indexOf("Trident") && de(e) && "fixed" === be(e).position) return null;
                            for (var n = Te(e); de(n) && ["html", "body"].indexOf(ue(n)) < 0; ) {
                                var i = be(n);
                                if (
                                    "none" !== i.transform ||
                                    "none" !== i.perspective ||
                                    "paint" === i.contain ||
                                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                                    (t && "filter" === i.willChange) ||
                                    (t && i.filter && "none" !== i.filter)
                                )
                                    return n;
                                n = n.parentNode;
                            }
                            return null;
                        })(e) ||
                        t;
          }
          function ke(e) {
              return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
          }
          var Ae = Math.max,
              Oe = Math.min,
              Se = Math.round;
          function Pe(e, t, n) {
              return Ae(e, Oe(t, n));
          }
          function De(e) {
              return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
          }
          function Le(e, t) {
              return t.reduce(function (t, n) {
                  return (t[n] = e), t;
              }, {});
          }
          var Re = {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                      var t,
                          n = e.state,
                          i = e.name,
                          r = e.options,
                          s = n.elements.arrow,
                          o = n.modifiersData.popperOffsets,
                          a = ge(n.placement),
                          l = ke(a),
                          c = [se, re].indexOf(a) >= 0 ? "height" : "width";
                      if (s && o) {
                          var u = (function (e, t) {
                                  return De("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : Le(e, oe));
                              })(r.padding, n),
                              f = ve(s),
                              h = "y" === l ? ne : se,
                              d = "y" === l ? ie : re,
                              p = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
                              m = o[l] - n.rects.reference[l],
                              g = Ce(s),
                              _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                              v = p / 2 - m / 2,
                              y = u[h],
                              b = _ - f[c] - u[d],
                              w = _ / 2 - f[c] / 2 + v,
                              x = Pe(y, w, b),
                              T = l;
                          n.modifiersData[i] = (((t = {})[T] = x), (t.centerOffset = x - w), t);
                      }
                  },
                  effect: function (e) {
                      var t = e.state,
                          n = e.options.element,
                          i = void 0 === n ? "[data-popper-arrow]" : n;
                      null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && ye(t.elements.popper, i) && (t.elements.arrow = i);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
              },
              Ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function je(e) {
              var t,
                  n = e.popper,
                  i = e.popperRect,
                  r = e.placement,
                  s = e.offsets,
                  o = e.position,
                  a = e.gpuAcceleration,
                  l = e.adaptive,
                  c = e.roundOffsets,
                  u =
                      !0 === c
                          ? (function (e) {
                                var t = e.x,
                                    n = e.y,
                                    i = window.devicePixelRatio || 1;
                                return { x: Se(Se(t * i) / i) || 0, y: Se(Se(n * i) / i) || 0 };
                            })(s)
                          : "function" == typeof c
                          ? c(s)
                          : s,
                  f = u.x,
                  h = void 0 === f ? 0 : f,
                  d = u.y,
                  p = void 0 === d ? 0 : d,
                  m = s.hasOwnProperty("x"),
                  g = s.hasOwnProperty("y"),
                  _ = se,
                  v = ne,
                  y = window;
              if (l) {
                  var b = Ce(n),
                      w = "clientHeight",
                      x = "clientWidth";
                  b === fe(n) && "static" !== be((b = xe(n))).position && ((w = "scrollHeight"), (x = "scrollWidth")),
                      (b = b),
                      r === ne && ((v = ie), (p -= b[w] - i.height), (p *= a ? 1 : -1)),
                      r === se && ((_ = re), (h -= b[x] - i.width), (h *= a ? 1 : -1));
              }
              var T,
                  E = Object.assign({ position: o }, l && Ne);
              return a
                  ? Object.assign({}, E, (((T = {})[v] = g ? "0" : ""), (T[_] = m ? "0" : ""), (T.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)"), T))
                  : Object.assign({}, E, (((t = {})[v] = g ? p + "px" : ""), (t[_] = m ? h + "px" : ""), (t.transform = ""), t));
          }
          var Me = {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                      var t = e.state,
                          n = e.options,
                          i = n.gpuAcceleration,
                          r = void 0 === i || i,
                          s = n.adaptive,
                          o = void 0 === s || s,
                          a = n.roundOffsets,
                          l = void 0 === a || a,
                          c = { placement: ge(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r };
                      null != t.modifiersData.popperOffsets &&
                          (t.styles.popper = Object.assign({}, t.styles.popper, je(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: l })))),
                          null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, je(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                          (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                  },
                  data: {},
              },
              Ie = { passive: !0 },
              Fe = {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                      var t = e.state,
                          n = e.instance,
                          i = e.options,
                          r = i.scroll,
                          s = void 0 === r || r,
                          o = i.resize,
                          a = void 0 === o || o,
                          l = fe(t.elements.popper),
                          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                      return (
                          s &&
                              c.forEach(function (e) {
                                  e.addEventListener("scroll", n.update, Ie);
                              }),
                          a && l.addEventListener("resize", n.update, Ie),
                          function () {
                              s &&
                                  c.forEach(function (e) {
                                      e.removeEventListener("scroll", n.update, Ie);
                                  }),
                                  a && l.removeEventListener("resize", n.update, Ie);
                          }
                      );
                  },
                  data: {},
              },
              qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
          function He(e) {
              return e.replace(/left|right|bottom|top/g, function (e) {
                  return qe[e];
              });
          }
          var Be = { start: "end", end: "start" };
          function ze(e) {
              return e.replace(/start|end/g, function (e) {
                  return Be[e];
              });
          }
          function Xe(e) {
              var t = fe(e);
              return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
          }
          function We(e) {
              return _e(xe(e)).left + Xe(e).scrollLeft;
          }
          function $e(e) {
              var t = be(e),
                  n = t.overflow,
                  i = t.overflowX,
                  r = t.overflowY;
              return /auto|scroll|overlay|hidden/.test(n + r + i);
          }
          function Ye(e, t) {
              var n;
              void 0 === t && (t = []);
              var i = (function e(t) {
                      return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : de(t) && $e(t) ? t : e(Te(t));
                  })(e),
                  r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                  s = fe(i),
                  o = r ? [s].concat(s.visualViewport || [], $e(i) ? i : []) : i,
                  a = t.concat(o);
              return r ? a : a.concat(Ye(Te(o)));
          }
          function Ue(e) {
              return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
          }
          function Ve(e, t) {
              return "viewport" === t
                  ? Ue(
                        (function (e) {
                            var t = fe(e),
                                n = xe(e),
                                i = t.visualViewport,
                                r = n.clientWidth,
                                s = n.clientHeight,
                                o = 0,
                                a = 0;
                            return i && ((r = i.width), (s = i.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((o = i.offsetLeft), (a = i.offsetTop))), { width: r, height: s, x: o + We(e), y: a };
                        })(e)
                    )
                  : de(t)
                  ? (function (e) {
                        var t = _e(e);
                        return (
                            (t.top = t.top + e.clientTop),
                            (t.left = t.left + e.clientLeft),
                            (t.bottom = t.top + e.clientHeight),
                            (t.right = t.left + e.clientWidth),
                            (t.width = e.clientWidth),
                            (t.height = e.clientHeight),
                            (t.x = t.left),
                            (t.y = t.top),
                            t
                        );
                    })(t)
                  : Ue(
                        (function (e) {
                            var t,
                                n = xe(e),
                                i = Xe(e),
                                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                                s = Ae(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                                o = Ae(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                                a = -i.scrollLeft + We(e),
                                l = -i.scrollTop;
                            return "rtl" === be(r || n).direction && (a += Ae(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: a, y: l };
                        })(xe(e))
                    );
          }
          function Qe(e) {
              return e.split("-")[1];
          }
          function Ge(e) {
              var t,
                  n = e.reference,
                  i = e.element,
                  r = e.placement,
                  s = r ? ge(r) : null,
                  o = r ? Qe(r) : null,
                  a = n.x + n.width / 2 - i.width / 2,
                  l = n.y + n.height / 2 - i.height / 2;
              switch (s) {
                  case ne:
                      t = { x: a, y: n.y - i.height };
                      break;
                  case ie:
                      t = { x: a, y: n.y + n.height };
                      break;
                  case re:
                      t = { x: n.x + n.width, y: l };
                      break;
                  case se:
                      t = { x: n.x - i.width, y: l };
                      break;
                  default:
                      t = { x: n.x, y: n.y };
              }
              var c = s ? ke(s) : null;
              if (null != c) {
                  var u = "y" === c ? "height" : "width";
                  switch (o) {
                      case "start":
                          t[c] = t[c] - (n[u] / 2 - i[u] / 2);
                          break;
                      case "end":
                          t[c] = t[c] + (n[u] / 2 - i[u] / 2);
                  }
              }
              return t;
          }
          function Ke(e, t) {
              void 0 === t && (t = {});
              var n = t,
                  i = n.placement,
                  r = void 0 === i ? e.placement : i,
                  s = n.boundary,
                  o = void 0 === s ? "clippingParents" : s,
                  a = n.rootBoundary,
                  l = void 0 === a ? "viewport" : a,
                  c = n.elementContext,
                  u = void 0 === c ? "popper" : c,
                  f = n.altBoundary,
                  h = void 0 !== f && f,
                  d = n.padding,
                  p = void 0 === d ? 0 : d,
                  m = De("number" != typeof p ? p : Le(p, oe)),
                  g = "popper" === u ? "reference" : "popper",
                  _ = e.elements.reference,
                  v = e.rects.popper,
                  y = e.elements[h ? g : u],
                  b = (function (e, t, n) {
                      var i =
                              "clippingParents" === t
                                  ? (function (e) {
                                        var t = Ye(Te(e)),
                                            n = ["absolute", "fixed"].indexOf(be(e).position) >= 0 && de(e) ? Ce(e) : e;
                                        return he(n)
                                            ? t.filter(function (e) {
                                                  return he(e) && ye(e, n) && "body" !== ue(e);
                                              })
                                            : [];
                                    })(e)
                                  : [].concat(t),
                          r = [].concat(i, [n]),
                          s = r[0],
                          o = r.reduce(function (t, n) {
                              var i = Ve(e, n);
                              return (t.top = Ae(i.top, t.top)), (t.right = Oe(i.right, t.right)), (t.bottom = Oe(i.bottom, t.bottom)), (t.left = Ae(i.left, t.left)), t;
                          }, Ve(e, s));
                      return (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o;
                  })(he(y) ? y : y.contextElement || xe(e.elements.popper), o, l),
                  w = _e(_),
                  x = Ge({ reference: w, element: v, strategy: "absolute", placement: r }),
                  T = Ue(Object.assign({}, v, x)),
                  E = "popper" === u ? T : w,
                  C = { top: b.top - E.top + m.top, bottom: E.bottom - b.bottom + m.bottom, left: b.left - E.left + m.left, right: E.right - b.right + m.right },
                  k = e.modifiersData.offset;
              if ("popper" === u && k) {
                  var A = k[r];
                  Object.keys(C).forEach(function (e) {
                      var t = [re, ie].indexOf(e) >= 0 ? 1 : -1,
                          n = [ne, ie].indexOf(e) >= 0 ? "y" : "x";
                      C[e] += A[n] * t;
                  });
              }
              return C;
          }
          var Ze = {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                  var t = e.state,
                      n = e.options,
                      i = e.name;
                  if (!t.modifiersData[i]._skip) {
                      for (
                          var r = n.mainAxis,
                              s = void 0 === r || r,
                              o = n.altAxis,
                              a = void 0 === o || o,
                              l = n.fallbackPlacements,
                              c = n.padding,
                              u = n.boundary,
                              f = n.rootBoundary,
                              h = n.altBoundary,
                              d = n.flipVariations,
                              p = void 0 === d || d,
                              m = n.allowedAutoPlacements,
                              g = t.options.placement,
                              _ = ge(g),
                              v =
                                  l ||
                                  (_ !== g && p
                                      ? (function (e) {
                                            if ("auto" === ge(e)) return [];
                                            var t = He(e);
                                            return [ze(e), t, ze(t)];
                                        })(g)
                                      : [He(g)]),
                              y = [g].concat(v).reduce(function (e, n) {
                                  return e.concat(
                                      "auto" === ge(n)
                                          ? (function (e, t) {
                                                void 0 === t && (t = {});
                                                var n = t,
                                                    i = n.placement,
                                                    r = n.boundary,
                                                    s = n.rootBoundary,
                                                    o = n.padding,
                                                    a = n.flipVariations,
                                                    l = n.allowedAutoPlacements,
                                                    c = void 0 === l ? le : l,
                                                    u = Qe(i),
                                                    f = u
                                                        ? a
                                                            ? ae
                                                            : ae.filter(function (e) {
                                                                  return Qe(e) === u;
                                                              })
                                                        : oe,
                                                    h = f.filter(function (e) {
                                                        return c.indexOf(e) >= 0;
                                                    });
                                                0 === h.length && (h = f);
                                                var d = h.reduce(function (t, n) {
                                                    return (t[n] = Ke(e, { placement: n, boundary: r, rootBoundary: s, padding: o })[ge(n)]), t;
                                                }, {});
                                                return Object.keys(d).sort(function (e, t) {
                                                    return d[e] - d[t];
                                                });
                                            })(t, { placement: n, boundary: u, rootBoundary: f, padding: c, flipVariations: p, allowedAutoPlacements: m })
                                          : n
                                  );
                              }, []),
                              b = t.rects.reference,
                              w = t.rects.popper,
                              x = new Map(),
                              T = !0,
                              E = y[0],
                              C = 0;
                          C < y.length;
                          C++
                      ) {
                          var k = y[C],
                              A = ge(k),
                              O = "start" === Qe(k),
                              S = [ne, ie].indexOf(A) >= 0,
                              P = S ? "width" : "height",
                              D = Ke(t, { placement: k, boundary: u, rootBoundary: f, altBoundary: h, padding: c }),
                              L = S ? (O ? re : se) : O ? ie : ne;
                          b[P] > w[P] && (L = He(L));
                          var R = He(L),
                              N = [];
                          if (
                              (s && N.push(D[A] <= 0),
                              a && N.push(D[L] <= 0, D[R] <= 0),
                              N.every(function (e) {
                                  return e;
                              }))
                          ) {
                              (E = k), (T = !1);
                              break;
                          }
                          x.set(k, N);
                      }
                      if (T)
                          for (
                              var j = function (e) {
                                      var t = y.find(function (t) {
                                          var n = x.get(t);
                                          if (n)
                                              return n.slice(0, e).every(function (e) {
                                                  return e;
                                              });
                                      });
                                      if (t) return (E = t), "break";
                                  },
                                  M = p ? 3 : 1;
                              M > 0 && "break" !== j(M);
                              M--
                          );
                      t.placement !== E && ((t.modifiersData[i]._skip = !0), (t.placement = E), (t.reset = !0));
                  }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
          };
          function Je(e, t, n) {
              return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
          }
          function et(e) {
              return [ne, re, ie, se].some(function (t) {
                  return e[t] >= 0;
              });
          }
          var tt = {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                      var t = e.state,
                          n = e.name,
                          i = t.rects.reference,
                          r = t.rects.popper,
                          s = t.modifiersData.preventOverflow,
                          o = Ke(t, { elementContext: "reference" }),
                          a = Ke(t, { altBoundary: !0 }),
                          l = Je(o, i),
                          c = Je(a, r, s),
                          u = et(l),
                          f = et(c);
                      (t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: f }),
                          (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f }));
                  },
              },
              nt = {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                      var t = e.state,
                          n = e.options,
                          i = e.name,
                          r = n.offset,
                          s = void 0 === r ? [0, 0] : r,
                          o = le.reduce(function (e, n) {
                              return (
                                  (e[n] = (function (e, t, n) {
                                      var i = ge(e),
                                          r = [se, ne].indexOf(i) >= 0 ? -1 : 1,
                                          s = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                                          o = s[0],
                                          a = s[1];
                                      return (o = o || 0), (a = (a || 0) * r), [se, re].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a };
                                  })(n, t.rects, s)),
                                  e
                              );
                          }, {}),
                          a = o[t.placement],
                          l = a.x,
                          c = a.y;
                      null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += c)), (t.modifiersData[i] = o);
                  },
              },
              it = {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                      var t = e.state,
                          n = e.name;
                      t.modifiersData[n] = Ge({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
                  },
                  data: {},
              },
              rt = {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                      var t = e.state,
                          n = e.options,
                          i = e.name,
                          r = n.mainAxis,
                          s = void 0 === r || r,
                          o = n.altAxis,
                          a = void 0 !== o && o,
                          l = n.boundary,
                          c = n.rootBoundary,
                          u = n.altBoundary,
                          f = n.padding,
                          h = n.tether,
                          d = void 0 === h || h,
                          p = n.tetherOffset,
                          m = void 0 === p ? 0 : p,
                          g = Ke(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
                          _ = ge(t.placement),
                          v = Qe(t.placement),
                          y = !v,
                          b = ke(_),
                          w = "x" === b ? "y" : "x",
                          x = t.modifiersData.popperOffsets,
                          T = t.rects.reference,
                          E = t.rects.popper,
                          C = "function" == typeof m ? m(Object.assign({}, t.rects, { placement: t.placement })) : m,
                          k = { x: 0, y: 0 };
                      if (x) {
                          if (s || a) {
                              var A = "y" === b ? ne : se,
                                  O = "y" === b ? ie : re,
                                  S = "y" === b ? "height" : "width",
                                  P = x[b],
                                  D = x[b] + g[A],
                                  L = x[b] - g[O],
                                  R = d ? -E[S] / 2 : 0,
                                  N = "start" === v ? T[S] : E[S],
                                  j = "start" === v ? -E[S] : -T[S],
                                  M = t.elements.arrow,
                                  I = d && M ? ve(M) : { width: 0, height: 0 },
                                  F = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                  q = F[A],
                                  H = F[O],
                                  B = Pe(0, T[S], I[S]),
                                  z = y ? T[S] / 2 - R - B - q - C : N - B - q - C,
                                  X = y ? -T[S] / 2 + R + B + H + C : j + B + H + C,
                                  W = t.elements.arrow && Ce(t.elements.arrow),
                                  $ = W ? ("y" === b ? W.clientTop || 0 : W.clientLeft || 0) : 0,
                                  Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement][b] : 0,
                                  U = x[b] + z - Y - $,
                                  V = x[b] + X - Y;
                              if (s) {
                                  var Q = Pe(d ? Oe(D, U) : D, P, d ? Ae(L, V) : L);
                                  (x[b] = Q), (k[b] = Q - P);
                              }
                              if (a) {
                                  var G = "x" === b ? ne : se,
                                      K = "x" === b ? ie : re,
                                      Z = x[w],
                                      J = Z + g[G],
                                      ee = Z - g[K],
                                      te = Pe(d ? Oe(J, U) : J, Z, d ? Ae(ee, V) : ee);
                                  (x[w] = te), (k[w] = te - Z);
                              }
                          }
                          t.modifiersData[i] = k;
                      }
                  },
                  requiresIfExists: ["offset"],
              };
          function st(e, t, n) {
              void 0 === n && (n = !1);
              var i,
                  r,
                  s = xe(t),
                  o = _e(e),
                  a = de(t),
                  l = { scrollLeft: 0, scrollTop: 0 },
                  c = { x: 0, y: 0 };
              return (
                  (a || (!a && !n)) &&
                      (("body" !== ue(t) || $e(s)) && (l = (i = t) !== fe(i) && de(i) ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop } : Xe(i)),
                      de(t) ? (((c = _e(t)).x += t.clientLeft), (c.y += t.clientTop)) : s && (c.x = We(s))),
                  { x: o.left + l.scrollLeft - c.x, y: o.top + l.scrollTop - c.y, width: o.width, height: o.height }
              );
          }
          var ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function at() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return !t.some(function (e) {
                  return !(e && "function" == typeof e.getBoundingClientRect);
              });
          }
          function lt(e) {
              void 0 === e && (e = {});
              var t = e,
                  n = t.defaultModifiers,
                  i = void 0 === n ? [] : n,
                  r = t.defaultOptions,
                  s = void 0 === r ? ot : r;
              return function (e, t, n) {
                  void 0 === n && (n = s);
                  var r,
                      o,
                      a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ot, s), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                      l = [],
                      c = !1,
                      u = {
                          state: a,
                          setOptions: function (n) {
                              f(), (a.options = Object.assign({}, s, a.options, n)), (a.scrollParents = { reference: he(e) ? Ye(e) : e.contextElement ? Ye(e.contextElement) : [], popper: Ye(t) });
                              var r,
                                  o,
                                  c = (function (e) {
                                      var t = (function (e) {
                                          var t = new Map(),
                                              n = new Set(),
                                              i = [];
                                          return (
                                              e.forEach(function (e) {
                                                  t.set(e.name, e);
                                              }),
                                              e.forEach(function (e) {
                                                  n.has(e.name) ||
                                                      (function e(r) {
                                                          n.add(r.name),
                                                              [].concat(r.requires || [], r.requiresIfExists || []).forEach(function (i) {
                                                                  if (!n.has(i)) {
                                                                      var r = t.get(i);
                                                                      r && e(r);
                                                                  }
                                                              }),
                                                              i.push(r);
                                                      })(e);
                                              }),
                                              i
                                          );
                                      })(e);
                                      return ce.reduce(function (e, n) {
                                          return e.concat(
                                              t.filter(function (e) {
                                                  return e.phase === n;
                                              })
                                          );
                                      }, []);
                                  })(
                                      ((r = [].concat(i, a.options.modifiers)),
                                      (o = r.reduce(function (e, t) {
                                          var n = e[t.name];
                                          return (e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t), e;
                                      }, {})),
                                      Object.keys(o).map(function (e) {
                                          return o[e];
                                      }))
                                  );
                              return (
                                  (a.orderedModifiers = c.filter(function (e) {
                                      return e.enabled;
                                  })),
                                  a.orderedModifiers.forEach(function (e) {
                                      var t = e.name,
                                          n = e.options,
                                          i = void 0 === n ? {} : n,
                                          r = e.effect;
                                      if ("function" == typeof r) {
                                          var s = r({ state: a, name: t, instance: u, options: i });
                                          l.push(s || function () {});
                                      }
                                  }),
                                  u.update()
                              );
                          },
                          forceUpdate: function () {
                              if (!c) {
                                  var e = a.elements,
                                      t = e.reference,
                                      n = e.popper;
                                  if (at(t, n)) {
                                      (a.rects = { reference: st(t, Ce(n), "fixed" === a.options.strategy), popper: ve(n) }),
                                          (a.reset = !1),
                                          (a.placement = a.options.placement),
                                          a.orderedModifiers.forEach(function (e) {
                                              return (a.modifiersData[e.name] = Object.assign({}, e.data));
                                          });
                                      for (var i = 0; i < a.orderedModifiers.length; i++)
                                          if (!0 !== a.reset) {
                                              var r = a.orderedModifiers[i],
                                                  s = r.fn,
                                                  o = r.options,
                                                  l = void 0 === o ? {} : o,
                                                  f = r.name;
                                              "function" == typeof s && (a = s({ state: a, options: l, name: f, instance: u }) || a);
                                          } else (a.reset = !1), (i = -1);
                                  }
                              }
                          },
                          update:
                              ((r = function () {
                                  return new Promise(function (e) {
                                      u.forceUpdate(), e(a);
                                  });
                              }),
                              function () {
                                  return (
                                      o ||
                                          (o = new Promise(function (e) {
                                              Promise.resolve().then(function () {
                                                  (o = void 0), e(r());
                                              });
                                          })),
                                      o
                                  );
                              }),
                          destroy: function () {
                              f(), (c = !0);
                          },
                      };
                  if (!at(e, t)) return u;
                  function f() {
                      l.forEach(function (e) {
                          return e();
                      }),
                          (l = []);
                  }
                  return (
                      u.setOptions(n).then(function (e) {
                          !c && n.onFirstUpdate && n.onFirstUpdate(e);
                      }),
                      u
                  );
              };
          }
          var ct = lt(),
              ut = lt({ defaultModifiers: [Fe, it, Me, me] }),
              ft = lt({ defaultModifiers: [Fe, it, Me, me, nt, Ze, rt, Re, tt] }),
              ht = Object.freeze({
                  __proto__: null,
                  popperGenerator: lt,
                  detectOverflow: Ke,
                  createPopperBase: ct,
                  createPopper: ft,
                  createPopperLite: ut,
                  top: ne,
                  bottom: ie,
                  right: re,
                  left: se,
                  auto: "auto",
                  basePlacements: oe,
                  start: "start",
                  end: "end",
                  clippingParents: "clippingParents",
                  viewport: "viewport",
                  popper: "popper",
                  reference: "reference",
                  variationPlacements: ae,
                  placements: le,
                  beforeRead: "beforeRead",
                  read: "read",
                  afterRead: "afterRead",
                  beforeMain: "beforeMain",
                  main: "main",
                  afterMain: "afterMain",
                  beforeWrite: "beforeWrite",
                  write: "write",
                  afterWrite: "afterWrite",
                  modifierPhases: ce,
                  applyStyles: me,
                  arrow: Re,
                  computeStyles: Me,
                  eventListeners: Fe,
                  flip: Ze,
                  hide: tt,
                  offset: nt,
                  popperOffsets: it,
                  preventOverflow: rt,
              });
          const dt = new RegExp("ArrowUp|ArrowDown|Escape"),
              pt = g() ? "top-end" : "top-start",
              mt = g() ? "top-start" : "top-end",
              gt = g() ? "bottom-end" : "bottom-start",
              _t = g() ? "bottom-start" : "bottom-end",
              vt = g() ? "left-start" : "right-start",
              yt = g() ? "right-start" : "left-start",
              bt = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
              wt = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
          class xt extends q {
              constructor(e, t) {
                  super(e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
              }
              static get Default() {
                  return bt;
              }
              static get DefaultType() {
                  return wt;
              }
              static get NAME() {
                  return "dropdown";
              }
              toggle() {
                  u(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
              }
              show() {
                  if (u(this._element) || this._menu.classList.contains("show")) return;
                  const e = xt.getParentFromElement(this._element),
                      t = { relatedTarget: this._element };
                  if (!M.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                      if (this._inNavbar) W.setDataAttribute(this._menu, "popper", "none");
                      else {
                          if (void 0 === ht) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                          let t = this._element;
                          "parent" === this._config.reference ? (t = e) : o(this._config.reference) ? (t = a(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
                          const n = this._getPopperConfig(),
                              i = n.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
                          (this._popper = ft(t, this._menu, n)), i && W.setDataAttribute(this._menu, "popper", "static");
                      }
                      "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e) => M.on(e, "mouseover", h)),
                          this._element.focus(),
                          this._element.setAttribute("aria-expanded", !0),
                          this._menu.classList.toggle("show"),
                          this._element.classList.toggle("show"),
                          M.trigger(this._element, "shown.bs.dropdown", t);
                  }
              }
              hide() {
                  if (u(this._element) || !this._menu.classList.contains("show")) return;
                  const e = { relatedTarget: this._element };
                  this._completeHide(e);
              }
              dispose() {
                  this._popper && this._popper.destroy(), super.dispose();
              }
              update() {
                  (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
              }
              _addEventListeners() {
                  M.on(this._element, "click.bs.dropdown", (e) => {
                      e.preventDefault(), this.toggle();
                  });
              }
              _completeHide(e) {
                  M.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
                      ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => M.off(e, "mouseover", h)),
                      this._popper && this._popper.destroy(),
                      this._menu.classList.remove("show"),
                      this._element.classList.remove("show"),
                      this._element.setAttribute("aria-expanded", "false"),
                      W.removeDataAttribute(this._menu, "popper"),
                      M.trigger(this._element, "hidden.bs.dropdown", e));
              }
              _getConfig(e) {
                  if (
                      ((e = { ...this.constructor.Default, ...W.getDataAttributes(this._element), ...e }),
                      l("dropdown", e, this.constructor.DefaultType),
                      "object" == typeof e.reference && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                  )
                      throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
                  return e;
              }
              _getMenuElement() {
                  return e.next(this._element, ".dropdown-menu")[0];
              }
              _getPlacement() {
                  const e = this._element.parentNode;
                  if (e.classList.contains("dropend")) return vt;
                  if (e.classList.contains("dropstart")) return yt;
                  const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                  return e.classList.contains("dropup") ? (t ? mt : pt) : t ? _t : gt;
              }
              _detectNavbar() {
                  return null !== this._element.closest(".navbar");
              }
              _getOffset() {
                  const { offset: e } = this._config;
                  return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
              }
              _getPopperConfig() {
                  const e = {
                      placement: this._getPlacement(),
                      modifiers: [
                          { name: "preventOverflow", options: { boundary: this._config.boundary } },
                          { name: "offset", options: { offset: this._getOffset() } },
                      ],
                  };
                  return (
                      "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) }
                  );
              }
              _selectMenuItem({ key: t, target: n }) {
                  const i = e.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
                  i.length && b(i, n, "ArrowDown" === t, !i.includes(n)).focus();
              }
              static dropdownInterface(e, t) {
                  const n = xt.getOrCreateInstance(e, t);
                  if ("string" == typeof t) {
                      if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                      n[t]();
                  }
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      xt.dropdownInterface(this, e);
                  });
              }
              static clearMenus(t) {
                  if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))) return;
                  const n = e.find('[data-bs-toggle="dropdown"]');
                  for (let e = 0, i = n.length; e < i; e++) {
                      const i = xt.getInstance(n[e]);
                      if (!i || !1 === i._config.autoClose) continue;
                      if (!i._element.classList.contains("show")) continue;
                      const r = { relatedTarget: i._element };
                      if (t) {
                          const e = t.composedPath(),
                              n = e.includes(i._menu);
                          if (e.includes(i._element) || ("inside" === i._config.autoClose && !n) || ("outside" === i._config.autoClose && n)) continue;
                          if (i._menu.contains(t.target) && (("keyup" === t.type && "Tab" === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                          "click" === t.type && (r.clickEvent = t);
                      }
                      i._completeHide(r);
                  }
              }
              static getParentFromElement(e) {
                  return r(e) || e.parentNode;
              }
              static dataApiKeydownHandler(t) {
                  if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || ("Escape" !== t.key && (("ArrowDown" !== t.key && "ArrowUp" !== t.key) || t.target.closest(".dropdown-menu"))) : !dt.test(t.key)) return;
                  const n = this.classList.contains("show");
                  if (!n && "Escape" === t.key) return;
                  if ((t.preventDefault(), t.stopPropagation(), u(this))) return;
                  const i = () => (this.matches('[data-bs-toggle="dropdown"]') ? this : e.prev(this, '[data-bs-toggle="dropdown"]')[0]);
                  return "Escape" === t.key
                      ? (i().focus(), void xt.clearMenus())
                      : "ArrowUp" === t.key || "ArrowDown" === t.key
                      ? (n || i().click(), void xt.getInstance(i())._selectMenuItem(t))
                      : void ((n && "Space" !== t.key) || xt.clearMenus());
              }
          }
          M.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', xt.dataApiKeydownHandler),
              M.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", xt.dataApiKeydownHandler),
              M.on(document, "click.bs.dropdown.data-api", xt.clearMenus),
              M.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus),
              M.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (e) {
                  e.preventDefault(), xt.dropdownInterface(this);
              }),
              _(xt);
          class Tt {
              constructor() {
                  this._element = document.body;
              }
              getWidth() {
                  const e = document.documentElement.clientWidth;
                  return Math.abs(window.innerWidth - e);
              }
              hide() {
                  const e = this.getWidth();
                  this._disableOverFlow(),
                      this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
                      this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (t) => t + e),
                      this._setElementAttributes(".sticky-top", "marginRight", (t) => t - e);
              }
              _disableOverFlow() {
                  this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
              }
              _setElementAttributes(e, t, n) {
                  const i = this.getWidth();
                  this._applyManipulationCallback(e, (e) => {
                      if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                      this._saveInitialAttribute(e, t);
                      const r = window.getComputedStyle(e)[t];
                      e.style[t] = n(Number.parseFloat(r)) + "px";
                  });
              }
              reset() {
                  this._resetElementAttributes(this._element, "overflow"),
                      this._resetElementAttributes(this._element, "paddingRight"),
                      this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
                      this._resetElementAttributes(".sticky-top", "marginRight");
              }
              _saveInitialAttribute(e, t) {
                  const n = e.style[t];
                  n && W.setDataAttribute(e, t, n);
              }
              _resetElementAttributes(e, t) {
                  this._applyManipulationCallback(e, (e) => {
                      const n = W.getDataAttribute(e, t);
                      void 0 === n ? e.style.removeProperty(t) : (W.removeDataAttribute(e, t), (e.style[t] = n));
                  });
              }
              _applyManipulationCallback(t, n) {
                  o(t) ? n(t) : e.find(t, this._element).forEach(n);
              }
              isOverflowing() {
                  return this.getWidth() > 0;
              }
          }
          const Et = { isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
              Ct = { isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
          class kt {
              constructor(e) {
                  (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
              }
              show(e) {
                  this._config.isVisible
                      ? (this._append(),
                        this._config.isAnimated && d(this._getElement()),
                        this._getElement().classList.add("show"),
                        this._emulateAnimation(() => {
                            v(e);
                        }))
                      : v(e);
              }
              hide(e) {
                  this._config.isVisible
                      ? (this._getElement().classList.remove("show"),
                        this._emulateAnimation(() => {
                            this.dispose(), v(e);
                        }))
                      : v(e);
              }
              _getElement() {
                  if (!this._element) {
                      const e = document.createElement("div");
                      (e.className = "modal-backdrop"), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                  }
                  return this._element;
              }
              _getConfig(e) {
                  return ((e = { ...Et, ...("object" == typeof e ? e : {}) }).rootElement = a(e.rootElement)), l("backdrop", e, Ct), e;
              }
              _append() {
                  this._isAppended ||
                      (this._config.rootElement.appendChild(this._getElement()),
                      M.on(this._getElement(), "mousedown.bs.backdrop", () => {
                          v(this._config.clickCallback);
                      }),
                      (this._isAppended = !0));
              }
              dispose() {
                  this._isAppended && (M.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), (this._isAppended = !1));
              }
              _emulateAnimation(e) {
                  y(e, this._getElement(), this._config.isAnimated);
              }
          }
          const At = { backdrop: !0, keyboard: !0, focus: !0 },
              Ot = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
          class St extends q {
              constructor(t, n) {
                  super(t),
                      (this._config = this._getConfig(n)),
                      (this._dialog = e.findOne(".modal-dialog", this._element)),
                      (this._backdrop = this._initializeBackDrop()),
                      (this._isShown = !1),
                      (this._ignoreBackdropClick = !1),
                      (this._isTransitioning = !1),
                      (this._scrollBar = new Tt());
              }
              static get Default() {
                  return At;
              }
              static get NAME() {
                  return "modal";
              }
              toggle(e) {
                  return this._isShown ? this.hide() : this.show(e);
              }
              show(e) {
                  this._isShown ||
                      this._isTransitioning ||
                      M.trigger(this._element, "show.bs.modal", { relatedTarget: e }).defaultPrevented ||
                      ((this._isShown = !0),
                      this._isAnimated() && (this._isTransitioning = !0),
                      this._scrollBar.hide(),
                      document.body.classList.add("modal-open"),
                      this._adjustDialog(),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      M.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (e) => this.hide(e)),
                      M.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                          M.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                              e.target === this._element && (this._ignoreBackdropClick = !0);
                          });
                      }),
                      this._showBackdrop(() => this._showElement(e)));
              }
              hide(e) {
                  if ((e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(), !this._isShown || this._isTransitioning)) return;
                  if (M.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                  this._isShown = !1;
                  const t = this._isAnimated();
                  t && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      M.off(document, "focusin.bs.modal"),
                      this._element.classList.remove("show"),
                      M.off(this._element, "click.dismiss.bs.modal"),
                      M.off(this._dialog, "mousedown.dismiss.bs.modal"),
                      this._queueCallback(() => this._hideModal(), this._element, t);
              }
              dispose() {
                  [window, this._dialog].forEach((e) => M.off(e, ".bs.modal")), this._backdrop.dispose(), super.dispose(), M.off(document, "focusin.bs.modal");
              }
              handleUpdate() {
                  this._adjustDialog();
              }
              _initializeBackDrop() {
                  return new kt({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
              }
              _getConfig(e) {
                  return (e = { ...At, ...W.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), l("modal", e, Ot), e;
              }
              _showElement(t) {
                  const n = this._isAnimated(),
                      i = e.findOne(".modal-body", this._dialog);
                  (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                      (this._element.style.display = "block"),
                      this._element.removeAttribute("aria-hidden"),
                      this._element.setAttribute("aria-modal", !0),
                      this._element.setAttribute("role", "dialog"),
                      (this._element.scrollTop = 0),
                      i && (i.scrollTop = 0),
                      n && d(this._element),
                      this._element.classList.add("show"),
                      this._config.focus && this._enforceFocus(),
                      this._queueCallback(
                          () => {
                              this._config.focus && this._element.focus(), (this._isTransitioning = !1), M.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
                          },
                          this._dialog,
                          n
                      );
              }
              _enforceFocus() {
                  M.off(document, "focusin.bs.modal"),
                      M.on(document, "focusin.bs.modal", (e) => {
                          document === e.target || this._element === e.target || this._element.contains(e.target) || this._element.focus();
                      });
              }
              _setEscapeEvent() {
                  this._isShown
                      ? M.on(this._element, "keydown.dismiss.bs.modal", (e) => {
                            this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition();
                        })
                      : M.off(this._element, "keydown.dismiss.bs.modal");
              }
              _setResizeEvent() {
                  this._isShown ? M.on(window, "resize.bs.modal", () => this._adjustDialog()) : M.off(window, "resize.bs.modal");
              }
              _hideModal() {
                  (this._element.style.display = "none"),
                      this._element.setAttribute("aria-hidden", !0),
                      this._element.removeAttribute("aria-modal"),
                      this._element.removeAttribute("role"),
                      (this._isTransitioning = !1),
                      this._backdrop.hide(() => {
                          document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), M.trigger(this._element, "hidden.bs.modal");
                      });
              }
              _showBackdrop(e) {
                  M.on(this._element, "click.dismiss.bs.modal", (e) => {
                      this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
                  }),
                      this._backdrop.show(e);
              }
              _isAnimated() {
                  return this._element.classList.contains("fade");
              }
              _triggerBackdropTransition() {
                  if (M.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                  const { classList: e, scrollHeight: t, style: n } = this._element,
                      i = t > document.documentElement.clientHeight;
                  (!i && "hidden" === n.overflowY) ||
                      e.contains("modal-static") ||
                      (i || (n.overflowY = "hidden"),
                      e.add("modal-static"),
                      this._queueCallback(() => {
                          e.remove("modal-static"),
                              i ||
                                  this._queueCallback(() => {
                                      n.overflowY = "";
                                  }, this._dialog);
                      }, this._dialog),
                      this._element.focus());
              }
              _adjustDialog() {
                  const e = this._element.scrollHeight > document.documentElement.clientHeight,
                      t = this._scrollBar.getWidth(),
                      n = t > 0;
                  ((!n && e && !g()) || (n && !e && g())) && (this._element.style.paddingLeft = t + "px"), ((n && !e && !g()) || (!n && e && g())) && (this._element.style.paddingRight = t + "px");
              }
              _resetAdjustments() {
                  (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
              }
              static jQueryInterface(e, t) {
                  return this.each(function () {
                      const n = St.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                          n[e](t);
                      }
                  });
              }
          }
          M.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
              const t = r(this);
              ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                  M.one(t, "show.bs.modal", (e) => {
                      e.defaultPrevented ||
                          M.one(t, "hidden.bs.modal", () => {
                              c(this) && this.focus();
                          });
                  }),
                  St.getOrCreateInstance(t).toggle(this);
          }),
              _(St);
          const Pt = { backdrop: !0, keyboard: !0, scroll: !1 },
              Dt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
          class Lt extends q {
              constructor(e, t) {
                  super(e), (this._config = this._getConfig(t)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), this._addEventListeners();
              }
              static get NAME() {
                  return "offcanvas";
              }
              static get Default() {
                  return Pt;
              }
              toggle(e) {
                  return this._isShown ? this.hide() : this.show(e);
              }
              show(e) {
                  this._isShown ||
                      M.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented ||
                      ((this._isShown = !0),
                      (this._element.style.visibility = "visible"),
                      this._backdrop.show(),
                      this._config.scroll || (new Tt().hide(), this._enforceFocusOnElement(this._element)),
                      this._element.removeAttribute("aria-hidden"),
                      this._element.setAttribute("aria-modal", !0),
                      this._element.setAttribute("role", "dialog"),
                      this._element.classList.add("show"),
                      this._queueCallback(
                          () => {
                              M.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e });
                          },
                          this._element,
                          !0
                      ));
              }
              hide() {
                  this._isShown &&
                      (M.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                          (M.off(document, "focusin.bs.offcanvas"),
                          this._element.blur(),
                          (this._isShown = !1),
                          this._element.classList.remove("show"),
                          this._backdrop.hide(),
                          this._queueCallback(
                              () => {
                                  this._element.setAttribute("aria-hidden", !0),
                                      this._element.removeAttribute("aria-modal"),
                                      this._element.removeAttribute("role"),
                                      (this._element.style.visibility = "hidden"),
                                      this._config.scroll || new Tt().reset(),
                                      M.trigger(this._element, "hidden.bs.offcanvas");
                              },
                              this._element,
                              !0
                          )));
              }
              dispose() {
                  this._backdrop.dispose(), super.dispose(), M.off(document, "focusin.bs.offcanvas");
              }
              _getConfig(e) {
                  return (e = { ...Pt, ...W.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), l("offcanvas", e, Dt), e;
              }
              _initializeBackDrop() {
                  return new kt({ isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
              }
              _enforceFocusOnElement(e) {
                  M.off(document, "focusin.bs.offcanvas"),
                      M.on(document, "focusin.bs.offcanvas", (t) => {
                          document === t.target || e === t.target || e.contains(t.target) || e.focus();
                      }),
                      e.focus();
              }
              _addEventListeners() {
                  M.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()),
                      M.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                          this._config.keyboard && "Escape" === e.key && this.hide();
                      });
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = Lt.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                          t[e](this);
                      }
                  });
              }
          }
          M.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
              const n = r(this);
              if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this))) return;
              M.one(n, "hidden.bs.offcanvas", () => {
                  c(this) && this.focus();
              });
              const i = e.findOne(".offcanvas.show");
              i && i !== n && Lt.getInstance(i).hide(), Lt.getOrCreateInstance(n).toggle(this);
          }),
              M.on(window, "load.bs.offcanvas.data-api", () => e.find(".offcanvas.show").forEach((e) => Lt.getOrCreateInstance(e).show())),
              _(Lt);
          const Rt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
              Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
              jt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
              Mt = (e, t) => {
                  const n = e.nodeName.toLowerCase();
                  if (t.includes(n)) return !Rt.has(n) || Boolean(Nt.test(e.nodeValue) || jt.test(e.nodeValue));
                  const i = t.filter((e) => e instanceof RegExp);
                  for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
                  return !1;
              };
          function It(e, t, n) {
              if (!e.length) return e;
              if (n && "function" == typeof n) return n(e);
              const i = new window.DOMParser().parseFromString(e, "text/html"),
                  r = Object.keys(t),
                  s = [].concat(...i.body.querySelectorAll("*"));
              for (let e = 0, n = s.length; e < n; e++) {
                  const n = s[e],
                      i = n.nodeName.toLowerCase();
                  if (!r.includes(i)) {
                      n.remove();
                      continue;
                  }
                  const o = [].concat(...n.attributes),
                      a = [].concat(t["*"] || [], t[i] || []);
                  o.forEach((e) => {
                      Mt(e, a) || n.removeAttribute(e.nodeName);
                  });
              }
              return i.body.innerHTML;
          }
          const Ft = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
              qt = new Set(["sanitize", "allowList", "sanitizeFn"]),
              Ht = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(array|string|function)",
                  container: "(string|element|boolean)",
                  fallbackPlacements: "array",
                  boundary: "(string|element)",
                  customClass: "(string|function)",
                  sanitize: "boolean",
                  sanitizeFn: "(null|function)",
                  allowList: "object",
                  popperConfig: "(null|object|function)",
              },
              Bt = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" },
              zt = {
                  animation: !0,
                  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                  trigger: "hover focus",
                  title: "",
                  delay: 0,
                  html: !1,
                  selector: !1,
                  placement: "top",
                  offset: [0, 0],
                  container: !1,
                  fallbackPlacements: ["top", "right", "bottom", "left"],
                  boundary: "clippingParents",
                  customClass: "",
                  sanitize: !0,
                  sanitizeFn: null,
                  allowList: {
                      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                      a: ["target", "href", "title", "rel"],
                      area: [],
                      b: [],
                      br: [],
                      col: [],
                      code: [],
                      div: [],
                      em: [],
                      hr: [],
                      h1: [],
                      h2: [],
                      h3: [],
                      h4: [],
                      h5: [],
                      h6: [],
                      i: [],
                      img: ["src", "srcset", "alt", "title", "width", "height"],
                      li: [],
                      ol: [],
                      p: [],
                      pre: [],
                      s: [],
                      small: [],
                      span: [],
                      sub: [],
                      sup: [],
                      strong: [],
                      u: [],
                      ul: [],
                  },
                  popperConfig: null,
              },
              Xt = {
                  HIDE: "hide.bs.tooltip",
                  HIDDEN: "hidden.bs.tooltip",
                  SHOW: "show.bs.tooltip",
                  SHOWN: "shown.bs.tooltip",
                  INSERTED: "inserted.bs.tooltip",
                  CLICK: "click.bs.tooltip",
                  FOCUSIN: "focusin.bs.tooltip",
                  FOCUSOUT: "focusout.bs.tooltip",
                  MOUSEENTER: "mouseenter.bs.tooltip",
                  MOUSELEAVE: "mouseleave.bs.tooltip",
              };
          class Wt extends q {
              constructor(e, t) {
                  if (void 0 === ht) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                  super(e), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(t)), (this.tip = null), this._setListeners();
              }
              static get Default() {
                  return zt;
              }
              static get NAME() {
                  return "tooltip";
              }
              static get Event() {
                  return Xt;
              }
              static get DefaultType() {
                  return Ht;
              }
              enable() {
                  this._isEnabled = !0;
              }
              disable() {
                  this._isEnabled = !1;
              }
              toggleEnabled() {
                  this._isEnabled = !this._isEnabled;
              }
              toggle(e) {
                  if (this._isEnabled)
                      if (e) {
                          const t = this._initializeOnDelegatedTarget(e);
                          (t._activeTrigger.click = !t._activeTrigger.click), t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
                      } else {
                          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                          this._enter(null, this);
                      }
              }
              dispose() {
                  clearTimeout(this._timeout), M.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
              }
              show() {
                  if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                  if (!this.isWithContent() || !this._isEnabled) return;
                  const e = M.trigger(this._element, this.constructor.Event.SHOW),
                      n = f(this._element),
                      i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                  if (e.defaultPrevented || !i) return;
                  const r = this.getTipElement(),
                      s = t(this.constructor.NAME);
                  r.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this._config.animation && r.classList.add("fade");
                  const o = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement,
                      a = this._getAttachment(o);
                  this._addAttachmentClass(a);
                  const { container: l } = this._config;
                  F.set(r, this.constructor.DATA_KEY, this),
                      this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(r), M.trigger(this._element, this.constructor.Event.INSERTED)),
                      this._popper ? this._popper.update() : (this._popper = ft(this._element, r, this._getPopperConfig(a))),
                      r.classList.add("show");
                  const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
                  c && r.classList.add(...c.split(" ")),
                      "ontouchstart" in document.documentElement &&
                          [].concat(...document.body.children).forEach((e) => {
                              M.on(e, "mouseover", h);
                          });
                  const u = this.tip.classList.contains("fade");
                  this._queueCallback(
                      () => {
                          const e = this._hoverState;
                          (this._hoverState = null), M.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this);
                      },
                      this.tip,
                      u
                  );
              }
              hide() {
                  if (!this._popper) return;
                  const e = this.getTipElement();
                  if (M.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                  e.classList.remove("show"),
                      "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => M.off(e, "mouseover", h)),
                      (this._activeTrigger.click = !1),
                      (this._activeTrigger.focus = !1),
                      (this._activeTrigger.hover = !1);
                  const t = this.tip.classList.contains("fade");
                  this._queueCallback(
                      () => {
                          this._isWithActiveTrigger() ||
                              ("show" !== this._hoverState && e.remove(),
                              this._cleanTipClass(),
                              this._element.removeAttribute("aria-describedby"),
                              M.trigger(this._element, this.constructor.Event.HIDDEN),
                              this._popper && (this._popper.destroy(), (this._popper = null)));
                      },
                      this.tip,
                      t
                  ),
                      (this._hoverState = "");
              }
              update() {
                  null !== this._popper && this._popper.update();
              }
              isWithContent() {
                  return Boolean(this.getTitle());
              }
              getTipElement() {
                  if (this.tip) return this.tip;
                  const e = document.createElement("div");
                  return (e.innerHTML = this._config.template), (this.tip = e.children[0]), this.tip;
              }
              setContent() {
                  const t = this.getTipElement();
                  this.setElementContent(e.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
              }
              setElementContent(e, t) {
                  if (null !== e)
                      return o(t)
                          ? ((t = a(t)), void (this._config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t)) : (e.textContent = t.textContent)))
                          : void (this._config.html ? (this._config.sanitize && (t = It(t, this._config.allowList, this._config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
              }
              getTitle() {
                  let e = this._element.getAttribute("data-bs-original-title");
                  return e || (e = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), e;
              }
              updateAttachment(e) {
                  return "right" === e ? "end" : "left" === e ? "start" : e;
              }
              _initializeOnDelegatedTarget(e, t) {
                  const n = this.constructor.DATA_KEY;
                  return (t = t || F.get(e.delegateTarget, n)) || ((t = new this.constructor(e.delegateTarget, this._getDelegateConfig())), F.set(e.delegateTarget, n, t)), t;
              }
              _getOffset() {
                  const { offset: e } = this._config;
                  return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
              }
              _getPopperConfig(e) {
                  const t = {
                      placement: e,
                      modifiers: [
                          { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                          { name: "offset", options: { offset: this._getOffset() } },
                          { name: "preventOverflow", options: { boundary: this._config.boundary } },
                          { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                          { name: "onChange", enabled: !0, phase: "afterWrite", fn: (e) => this._handlePopperPlacementChange(e) },
                      ],
                      onFirstUpdate: (e) => {
                          e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
                      },
                  };
                  return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
              }
              _addAttachmentClass(e) {
                  this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e));
              }
              _getAttachment(e) {
                  return Bt[e.toUpperCase()];
              }
              _setListeners() {
                  this._config.trigger.split(" ").forEach((e) => {
                      if ("click" === e) M.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) => this.toggle(e));
                      else if ("manual" !== e) {
                          const t = "hover" === e ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                              n = "hover" === e ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                          M.on(this._element, t, this._config.selector, (e) => this._enter(e)), M.on(this._element, n, this._config.selector, (e) => this._leave(e));
                      }
                  }),
                      (this._hideModalHandler = () => {
                          this._element && this.hide();
                      }),
                      M.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                      this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
              }
              _fixTitle() {
                  const e = this._element.getAttribute("title"),
                      t = typeof this._element.getAttribute("data-bs-original-title");
                  (e || "string" !== t) &&
                      (this._element.setAttribute("data-bs-original-title", e || ""),
                      !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
                      this._element.setAttribute("title", ""));
              }
              _enter(e, t) {
                  (t = this._initializeOnDelegatedTarget(e, t)),
                      e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
                      t.getTipElement().classList.contains("show") || "show" === t._hoverState
                          ? (t._hoverState = "show")
                          : (clearTimeout(t._timeout),
                            (t._hoverState = "show"),
                            t._config.delay && t._config.delay.show
                                ? (t._timeout = setTimeout(() => {
                                      "show" === t._hoverState && t.show();
                                  }, t._config.delay.show))
                                : t.show());
              }
              _leave(e, t) {
                  (t = this._initializeOnDelegatedTarget(e, t)),
                      e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)),
                      t._isWithActiveTrigger() ||
                          (clearTimeout(t._timeout),
                          (t._hoverState = "out"),
                          t._config.delay && t._config.delay.hide
                              ? (t._timeout = setTimeout(() => {
                                    "out" === t._hoverState && t.hide();
                                }, t._config.delay.hide))
                              : t.hide());
              }
              _isWithActiveTrigger() {
                  for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                  return !1;
              }
              _getConfig(e) {
                  const t = W.getDataAttributes(this._element);
                  return (
                      Object.keys(t).forEach((e) => {
                          qt.has(e) && delete t[e];
                      }),
                      ((e = { ...this.constructor.Default, ...t, ...("object" == typeof e && e ? e : {}) }).container = !1 === e.container ? document.body : a(e.container)),
                      "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                      "number" == typeof e.title && (e.title = e.title.toString()),
                      "number" == typeof e.content && (e.content = e.content.toString()),
                      l("tooltip", e, this.constructor.DefaultType),
                      e.sanitize && (e.template = It(e.template, e.allowList, e.sanitizeFn)),
                      e
                  );
              }
              _getDelegateConfig() {
                  const e = {};
                  if (this._config) for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                  return e;
              }
              _cleanTipClass() {
                  const e = this.getTipElement(),
                      t = e.getAttribute("class").match(Ft);
                  null !== t && t.length > 0 && t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
              }
              _handlePopperPlacementChange(e) {
                  const { state: t } = e;
                  t && ((this.tip = t.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = Wt.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                          t[e]();
                      }
                  });
              }
          }
          _(Wt);
          const $t = new RegExp("(^|\\s)bs-popover\\S+", "g"),
              Yt = {
                  ...Wt.Default,
                  placement: "right",
                  offset: [0, 8],
                  trigger: "click",
                  content: "",
                  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              },
              Ut = { ...Wt.DefaultType, content: "(string|element|function)" },
              Vt = {
                  HIDE: "hide.bs.popover",
                  HIDDEN: "hidden.bs.popover",
                  SHOW: "show.bs.popover",
                  SHOWN: "shown.bs.popover",
                  INSERTED: "inserted.bs.popover",
                  CLICK: "click.bs.popover",
                  FOCUSIN: "focusin.bs.popover",
                  FOCUSOUT: "focusout.bs.popover",
                  MOUSEENTER: "mouseenter.bs.popover",
                  MOUSELEAVE: "mouseleave.bs.popover",
              };
          class Qt extends Wt {
              static get Default() {
                  return Yt;
              }
              static get NAME() {
                  return "popover";
              }
              static get Event() {
                  return Vt;
              }
              static get DefaultType() {
                  return Ut;
              }
              isWithContent() {
                  return this.getTitle() || this._getContent();
              }
              getTipElement() {
                  return this.tip || ((this.tip = super.getTipElement()), this.getTitle() || e.findOne(".popover-header", this.tip).remove(), this._getContent() || e.findOne(".popover-body", this.tip).remove()), this.tip;
              }
              setContent() {
                  const t = this.getTipElement();
                  this.setElementContent(e.findOne(".popover-header", t), this.getTitle());
                  let n = this._getContent();
                  "function" == typeof n && (n = n.call(this._element)), this.setElementContent(e.findOne(".popover-body", t), n), t.classList.remove("fade", "show");
              }
              _addAttachmentClass(e) {
                  this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e));
              }
              _getContent() {
                  return this._element.getAttribute("data-bs-content") || this._config.content;
              }
              _cleanTipClass() {
                  const e = this.getTipElement(),
                      t = e.getAttribute("class").match($t);
                  null !== t && t.length > 0 && t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = Qt.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                          t[e]();
                      }
                  });
              }
          }
          _(Qt);
          const Gt = { offset: 10, method: "auto", target: "" },
              Kt = { offset: "number", method: "string", target: "(string|element)" };
          class Zt extends q {
              constructor(e, t) {
                  super(e),
                      (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                      (this._config = this._getConfig(t)),
                      (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
                      (this._offsets = []),
                      (this._targets = []),
                      (this._activeTarget = null),
                      (this._scrollHeight = 0),
                      M.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
                      this.refresh(),
                      this._process();
              }
              static get Default() {
                  return Gt;
              }
              static get NAME() {
                  return "scrollspy";
              }
              refresh() {
                  const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                      n = "auto" === this._config.method ? t : this._config.method,
                      r = "position" === n ? this._getScrollTop() : 0;
                  (this._offsets = []),
                      (this._targets = []),
                      (this._scrollHeight = this._getScrollHeight()),
                      e
                          .find(this._selector)
                          .map((t) => {
                              const s = i(t),
                                  o = s ? e.findOne(s) : null;
                              if (o) {
                                  const e = o.getBoundingClientRect();
                                  if (e.width || e.height) return [W[n](o).top + r, s];
                              }
                              return null;
                          })
                          .filter((e) => e)
                          .sort((e, t) => e[0] - t[0])
                          .forEach((e) => {
                              this._offsets.push(e[0]), this._targets.push(e[1]);
                          });
              }
              dispose() {
                  M.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
              }
              _getConfig(e) {
                  if ("string" != typeof (e = { ...Gt, ...W.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }).target && o(e.target)) {
                      let { id: n } = e.target;
                      n || ((n = t("scrollspy")), (e.target.id = n)), (e.target = "#" + n);
                  }
                  return l("scrollspy", e, Kt), e;
              }
              _getScrollTop() {
                  return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
              }
              _getScrollHeight() {
                  return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              }
              _getOffsetHeight() {
                  return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
              }
              _process() {
                  const e = this._getScrollTop() + this._config.offset,
                      t = this._getScrollHeight(),
                      n = this._config.offset + t - this._getOffsetHeight();
                  if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                      const e = this._targets[this._targets.length - 1];
                      this._activeTarget !== e && this._activate(e);
                  } else {
                      if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                      for (let t = this._offsets.length; t--; ) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]);
                  }
              }
              _activate(t) {
                  (this._activeTarget = t), this._clear();
                  const n = this._selector.split(",").map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                      i = e.findOne(n.join(","));
                  i.classList.contains("dropdown-item")
                      ? (e.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active"))
                      : (i.classList.add("active"),
                        e.parents(i, ".nav, .list-group").forEach((t) => {
                            e.prev(t, ".nav-link, .list-group-item").forEach((e) => e.classList.add("active")),
                                e.prev(t, ".nav-item").forEach((t) => {
                                    e.children(t, ".nav-link").forEach((e) => e.classList.add("active"));
                                });
                        })),
                      M.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t });
              }
              _clear() {
                  e.find(this._selector)
                      .filter((e) => e.classList.contains("active"))
                      .forEach((e) => e.classList.remove("active"));
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = Zt.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                          t[e]();
                      }
                  });
              }
          }
          M.on(window, "load.bs.scrollspy.data-api", () => {
              e.find('[data-bs-spy="scroll"]').forEach((e) => new Zt(e));
          }),
              _(Zt);
          class Jt extends q {
              static get NAME() {
                  return "tab";
              }
              show() {
                  if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
                  let t;
                  const n = r(this._element),
                      i = this._element.closest(".nav, .list-group");
                  if (i) {
                      const n = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                      t = (t = e.find(n, i))[t.length - 1];
                  }
                  const s = t ? M.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null;
                  if (M.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || (null !== s && s.defaultPrevented)) return;
                  this._activate(this._element, i);
                  const o = () => {
                      M.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), M.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
                  };
                  n ? this._activate(n, n.parentNode, o) : o();
              }
              _activate(t, n, i) {
                  const r = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? e.children(n, ".active") : e.find(":scope > li > .active", n))[0],
                      s = i && r && r.classList.contains("fade"),
                      o = () => this._transitionComplete(t, r, i);
                  r && s ? (r.classList.remove("show"), this._queueCallback(o, t, !0)) : o();
              }
              _transitionComplete(t, n, i) {
                  if (n) {
                      n.classList.remove("active");
                      const t = e.findOne(":scope > .dropdown-menu .active", n.parentNode);
                      t && t.classList.remove("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                  }
                  t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains("fade") && t.classList.add("show");
                  let r = t.parentNode;
                  if ((r && "LI" === r.nodeName && (r = r.parentNode), r && r.classList.contains("dropdown-menu"))) {
                      const n = t.closest(".dropdown");
                      n && e.find(".dropdown-toggle", n).forEach((e) => e.classList.add("active")), t.setAttribute("aria-expanded", !0);
                  }
                  i && i();
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = Jt.getOrCreateInstance(this);
                      if ("string" == typeof e) {
                          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                          t[e]();
                      }
                  });
              }
          }
          M.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (e) {
              ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this) || Jt.getOrCreateInstance(this).show();
          }),
              _(Jt);
          const en = { animation: "boolean", autohide: "boolean", delay: "number" },
              tn = { animation: !0, autohide: !0, delay: 5e3 };
          class nn extends q {
              constructor(e, t) {
                  super(e), (this._config = this._getConfig(t)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
              }
              static get DefaultType() {
                  return en;
              }
              static get Default() {
                  return tn;
              }
              static get NAME() {
                  return "toast";
              }
              show() {
                  M.trigger(this._element, "show.bs.toast").defaultPrevented ||
                      (this._clearTimeout(),
                      this._config.animation && this._element.classList.add("fade"),
                      this._element.classList.remove("hide"),
                      d(this._element),
                      this._element.classList.add("showing"),
                      this._queueCallback(
                          () => {
                              this._element.classList.remove("showing"), this._element.classList.add("show"), M.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                          },
                          this._element,
                          this._config.animation
                      ));
              }
              hide() {
                  this._element.classList.contains("show") &&
                      (M.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                          (this._element.classList.remove("show"),
                          this._queueCallback(
                              () => {
                                  this._element.classList.add("hide"), M.trigger(this._element, "hidden.bs.toast");
                              },
                              this._element,
                              this._config.animation
                          )));
              }
              dispose() {
                  this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
              }
              _getConfig(e) {
                  return (e = { ...tn, ...W.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }), l("toast", e, this.constructor.DefaultType), e;
              }
              _maybeScheduleHide() {
                  this._config.autohide &&
                      (this._hasMouseInteraction ||
                          this._hasKeyboardInteraction ||
                          (this._timeout = setTimeout(() => {
                              this.hide();
                          }, this._config.delay)));
              }
              _onInteraction(e, t) {
                  switch (e.type) {
                      case "mouseover":
                      case "mouseout":
                          this._hasMouseInteraction = t;
                          break;
                      case "focusin":
                      case "focusout":
                          this._hasKeyboardInteraction = t;
                  }
                  if (t) return void this._clearTimeout();
                  const n = e.relatedTarget;
                  this._element === n || this._element.contains(n) || this._maybeScheduleHide();
              }
              _setListeners() {
                  M.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()),
                      M.on(this._element, "mouseover.bs.toast", (e) => this._onInteraction(e, !0)),
                      M.on(this._element, "mouseout.bs.toast", (e) => this._onInteraction(e, !1)),
                      M.on(this._element, "focusin.bs.toast", (e) => this._onInteraction(e, !0)),
                      M.on(this._element, "focusout.bs.toast", (e) => this._onInteraction(e, !1));
              }
              _clearTimeout() {
                  clearTimeout(this._timeout), (this._timeout = null);
              }
              static jQueryInterface(e) {
                  return this.each(function () {
                      const t = nn.getOrCreateInstance(this, e);
                      if ("string" == typeof e) {
                          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                          t[e](this);
                      }
                  });
              }
          }
          return _(nn), { Alert: H, Button: B, Carousel: Z, Collapse: te, Dropdown: xt, Modal: St, Offcanvas: Lt, Popover: Qt, ScrollSpy: Zt, Tab: Jt, Toast: nn, Tooltip: Wt };
      }),
      (function (e, t) {
          "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).ScrollReveal = t());
      })(this, function () {
          "use strict";
          var e = {
                  delay: 0,
                  distance: "0",
                  duration: 600,
                  easing: "cubic-bezier(0.5, 0, 0, 1)",
                  interval: 0,
                  opacity: 0,
                  origin: "bottom",
                  rotate: { x: 0, y: 0, z: 0 },
                  scale: 1,
                  cleanup: !1,
                  container: document.documentElement,
                  desktop: !0,
                  mobile: !0,
                  reset: !1,
                  useDelay: "always",
                  viewFactor: 0,
                  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
                  afterReset: function () {},
                  afterReveal: function () {},
                  beforeReset: function () {},
                  beforeReveal: function () {},
              },
              t = {
                  success: function () {
                      document.documentElement.classList.add("sr"),
                          document.body
                              ? (document.body.style.height = "100%")
                              : document.addEventListener("DOMContentLoaded", function () {
                                    document.body.style.height = "100%";
                                });
                  },
                  failure: function () {
                      return (
                          document.documentElement.classList.remove("sr"),
                          {
                              clean: function () {},
                              destroy: function () {},
                              reveal: function () {},
                              sync: function () {},
                              get noop() {
                                  return !0;
                              },
                          }
                      );
                  },
              };
          function n(e) {
              return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
          }
          function i(e, t) {
              if ((void 0 === t && (t = document), e instanceof Array)) return e.filter(n);
              if (n(e)) return [e];
              if (
                  ((i = e),
                  (r = Object.prototype.toString.call(i)),
                  "object" == typeof window.NodeList
                      ? i instanceof window.NodeList
                      : null !== i && "object" == typeof i && "number" == typeof i.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(r) && (0 === i.length || n(i[0])))
              )
                  return Array.prototype.slice.call(e);
              var i, r;
              if ("string" == typeof e)
                  try {
                      var s = t.querySelectorAll(e);
                      return Array.prototype.slice.call(s);
                  } catch (e) {
                      return [];
                  }
              return [];
          }
          function r(e) {
              return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e));
          }
          function s(e, t) {
              if (r(e))
                  return Object.keys(e).forEach(function (n) {
                      return t(e[n], n, e);
                  });
              if (e instanceof Array)
                  return e.forEach(function (n, i) {
                      return t(n, i, e);
                  });
              throw new TypeError("Expected either an array or object literal.");
          }
          function o(e) {
              for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
              if (this.constructor.debug && console) {
                  var i = "%cScrollReveal: " + e;
                  t.forEach(function (e) {
                      return (i += "\n â€” " + e);
                  }),
                      console.log(i, "color: #ea654b;");
              }
          }
          function a() {
              var e = this,
                  t = { active: [], stale: [] },
                  n = { active: [], stale: [] },
                  r = { active: [], stale: [] };
              try {
                  s(i("[data-sr-id]"), function (e) {
                      var n = parseInt(e.getAttribute("data-sr-id"));
                      t.active.push(n);
                  });
              } catch (e) {
                  throw e;
              }
              s(this.store.elements, function (e) {
                  -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
              }),
                  s(t.stale, function (t) {
                      return delete e.store.elements[t];
                  }),
                  s(this.store.elements, function (e) {
                      -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === n.active.indexOf(e.sequence.id) && n.active.push(e.sequence.id);
                  }),
                  s(this.store.containers, function (e) {
                      -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
                  }),
                  s(r.stale, function (t) {
                      var n = e.store.containers[t].node;
                      n.removeEventListener("scroll", e.delegate), n.removeEventListener("resize", e.delegate), delete e.store.containers[t];
                  }),
                  s(this.store.sequences, function (e) {
                      -1 === n.active.indexOf(e.id) && n.stale.push(e.id);
                  }),
                  s(n.stale, function (t) {
                      return delete e.store.sequences[t];
                  });
          }
          function l(e) {
              if (e.constructor !== Array) throw new TypeError("Expected array.");
              if (16 === e.length) return e;
              if (6 === e.length) {
                  var t = c();
                  return (t[0] = e[0]), (t[1] = e[1]), (t[4] = e[2]), (t[5] = e[3]), (t[12] = e[4]), (t[13] = e[5]), t;
              }
              throw new RangeError("Expected array with either 6 or 16 values.");
          }
          function c() {
              for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
              return e;
          }
          function u(e, t) {
              for (var n = l(e), i = l(t), r = [], s = 0; s < 4; s++)
                  for (var o = [n[s], n[s + 4], n[s + 8], n[s + 12]], a = 0; a < 4; a++) {
                      var c = 4 * a,
                          u = [i[c], i[c + 1], i[c + 2], i[c + 3]],
                          f = o[0] * u[0] + o[1] * u[1] + o[2] * u[2] + o[3] * u[3];
                      r[s + c] = f;
                  }
              return r;
          }
          function f(e) {
              if ("string" == typeof e) {
                  var t = e.match(/matrix(3d)?\(([^)]+)\)/);
                  if (t) return l(t[2].split(", ").map(parseFloat));
              }
              return c();
          }
          function h(e, t) {
              var n = c();
              return (n[0] = e), (n[5] = "number" == typeof t ? t : e), n;
          }
          var d = (function () {
              var e = {},
                  t = document.documentElement.style;
              function n(n, i) {
                  if ((void 0 === i && (i = t), n && "string" == typeof n)) {
                      if (e[n]) return e[n];
                      if ("string" == typeof i[n]) return (e[n] = n);
                      if ("string" == typeof i["-webkit-" + n]) return (e[n] = "-webkit-" + n);
                      throw new RangeError('Unable to find "' + n + '" style property.');
                  }
                  throw new TypeError("Expected a string.");
              }
              return (
                  (n.clearCache = function () {
                      return (e = {});
                  }),
                  n
              );
          })();
          function p(e) {
              var t = window.getComputedStyle(e.node),
                  n = t.position,
                  i = e.config,
                  r = {},
                  s = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
              (r.computed = s
                  ? s
                        .map(function (e) {
                            return e.trim();
                        })
                        .join("; ") + ";"
                  : ""),
                  (r.generated = s.some(function (e) {
                      return e.match(/visibility\s?:\s?visible/i);
                  })
                      ? r.computed
                      : s
                            .concat(["visibility: visible"])
                            .map(function (e) {
                                return e.trim();
                            })
                            .join("; ") + ";");
              var o,
                  a,
                  l,
                  p = parseFloat(t.opacity),
                  m = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity),
                  g = { computed: p !== m ? "opacity: " + p + ";" : "", generated: p !== m ? "opacity: " + m + ";" : "" },
                  _ = [];
              if (parseFloat(i.distance)) {
                  var v = "top" === i.origin || "bottom" === i.origin ? "Y" : "X",
                      y = i.distance;
                  ("top" !== i.origin && "left" !== i.origin) || (y = /^-/.test(y) ? y.substr(1) : "-" + y);
                  var b = y.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
                      w = b[0];
                  switch (b[1]) {
                      case "em":
                          y = parseInt(t.fontSize) * w;
                          break;
                      case "px":
                          y = w;
                          break;
                      case "%":
                          y = "Y" === v ? (e.node.getBoundingClientRect().height * w) / 100 : (e.node.getBoundingClientRect().width * w) / 100;
                          break;
                      default:
                          throw new RangeError("Unrecognized or missing distance unit.");
                  }
                  "Y" === v
                      ? _.push(
                            (function (e) {
                                var t = c();
                                return (t[13] = e), t;
                            })(y)
                        )
                      : _.push(
                            (function (e) {
                                var t = c();
                                return (t[12] = e), t;
                            })(y)
                        );
              }
              i.rotate.x && _.push(((o = i.rotate.x), (a = (Math.PI / 180) * o), ((l = c())[5] = l[10] = Math.cos(a)), (l[6] = l[9] = Math.sin(a)), (l[9] *= -1), l)),
                  i.rotate.y &&
                      _.push(
                          (function (e) {
                              var t = (Math.PI / 180) * e,
                                  n = c();
                              return (n[0] = n[10] = Math.cos(t)), (n[2] = n[8] = Math.sin(t)), (n[2] *= -1), n;
                          })(i.rotate.y)
                      ),
                  i.rotate.z &&
                      _.push(
                          (function (e) {
                              var t = (Math.PI / 180) * e,
                                  n = c();
                              return (n[0] = n[5] = Math.cos(t)), (n[1] = n[4] = Math.sin(t)), (n[4] *= -1), n;
                          })(i.rotate.z)
                      ),
                  1 !== i.scale && (0 === i.scale ? _.push(h(2e-4)) : _.push(h(i.scale)));
              var x = {};
              if (_.length) {
                  (x.property = d("transform")), (x.computed = { raw: t[x.property], matrix: f(t[x.property]) }), _.unshift(x.computed.matrix);
                  var T = _.reduce(u);
                  x.generated = { initial: x.property + ": matrix3d(" + T.join(", ") + ");", final: x.property + ": matrix3d(" + x.computed.matrix.join(", ") + ");" };
              } else x.generated = { initial: "", final: "" };
              var E = {};
              if (g.generated || x.generated.initial) {
                  (E.property = d("transition")), (E.computed = t[E.property]), (E.fragments = []);
                  var C = i.delay,
                      k = i.duration,
                      A = i.easing;
                  g.generated && E.fragments.push({ delayed: "opacity " + k / 1e3 + "s " + A + " " + C / 1e3 + "s", instant: "opacity " + k / 1e3 + "s " + A + " 0s" }),
                      x.generated.initial && E.fragments.push({ delayed: x.property + " " + k / 1e3 + "s " + A + " " + C / 1e3 + "s", instant: x.property + " " + k / 1e3 + "s " + A + " 0s" }),
                      E.computed && !E.computed.match(/all 0s|none 0s/) && E.fragments.unshift({ delayed: E.computed, instant: E.computed });
                  var O = E.fragments.reduce(
                      function (e, t, n) {
                          return (e.delayed += 0 === n ? t.delayed : ", " + t.delayed), (e.instant += 0 === n ? t.instant : ", " + t.instant), e;
                      },
                      { delayed: "", instant: "" }
                  );
                  E.generated = { delayed: E.property + ": " + O.delayed + ";", instant: E.property + ": " + O.instant + ";" };
              } else E.generated = { delayed: "", instant: "" };
              return { inline: r, opacity: g, position: n, transform: x, transition: E };
          }
          function m(e, t) {
              t.split(";").forEach(function (t) {
                  var n = t.split(":"),
                      i = n[0],
                      r = n.slice(1);
                  i && r && (e.style[i.trim()] = r.join(":"));
              });
          }
          function g(e) {
              var t,
                  n = this;
              try {
                  s(i(e), function (e) {
                      var i = e.getAttribute("data-sr-id");
                      if (null !== i) {
                          t = !0;
                          var r = n.store.elements[i];
                          r.callbackTimer && window.clearTimeout(r.callbackTimer.clock), m(r.node, r.styles.inline.generated), e.removeAttribute("data-sr-id"), delete n.store.elements[i];
                      }
                  });
              } catch (e) {
                  return o.call(this, "Clean failed.", e.message);
              }
              if (t)
                  try {
                      a.call(this);
                  } catch (e) {
                      return o.call(this, "Clean failed.", e.message);
                  }
          }
          function _(e) {
              for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
              if (r(e))
                  return (
                      s(t, function (t) {
                          s(t, function (t, n) {
                              r(t) ? ((e[n] && r(e[n])) || (e[n] = {}), _(e[n], t)) : (e[n] = t);
                          });
                      }),
                      e
                  );
              throw new TypeError("Target must be an object literal.");
          }
          function v(e) {
              return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
          }
          var y,
              b =
                  ((y = 0),
                  function () {
                      return y++;
                  });
          function w() {
              var e = this;
              a.call(this),
                  s(this.store.elements, function (e) {
                      var t = [e.styles.inline.generated];
                      e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), (e.revealed = !0)) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), (e.revealed = !1)),
                          m(
                              e.node,
                              t
                                  .filter(function (e) {
                                      return "" !== e;
                                  })
                                  .join(" ")
                          );
                  }),
                  s(this.store.containers, function (t) {
                      var n = t.node === document.documentElement ? window : t.node;
                      n.addEventListener("scroll", e.delegate), n.addEventListener("resize", e.delegate);
                  }),
                  this.delegate(),
                  (this.initTimeout = null);
          }
          function x(e, t) {
              void 0 === t && (t = {});
              var n = t.pristine || this.pristine,
                  i = "always" === e.config.useDelay || ("onload" === e.config.useDelay && n) || ("once" === e.config.useDelay && !e.seen),
                  r = e.visible && !e.revealed,
                  s = !e.visible && e.revealed && e.config.reset;
              return t.reveal || r
                  ? function (e, t) {
                        var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
                        t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant),
                            (e.revealed = e.seen = !0),
                            m(
                                e.node,
                                n
                                    .filter(function (e) {
                                        return "" !== e;
                                    })
                                    .join(" ")
                            ),
                            T.call(this, e, t);
                    }.call(this, e, i)
                  : t.reset || s
                  ? function (e) {
                        var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
                        (e.revealed = !1),
                            m(
                                e.node,
                                t
                                    .filter(function (e) {
                                        return "" !== e;
                                    })
                                    .join(" ")
                            ),
                            T.call(this, e);
                    }.call(this, e)
                  : void 0;
          }
          function T(e, t) {
              var n = this,
                  i = t ? e.config.duration + e.config.delay : e.config.duration,
                  r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
                  s = e.revealed ? e.config.afterReveal : e.config.afterReset,
                  o = 0;
              e.callbackTimer && ((o = Date.now() - e.callbackTimer.start), window.clearTimeout(e.callbackTimer.clock)),
                  r(e.node),
                  (e.callbackTimer = {
                      start: Date.now(),
                      clock: window.setTimeout(function () {
                          s(e.node), (e.callbackTimer = null), e.revealed && !e.config.reset && e.config.cleanup && g.call(n, e.node);
                      }, i - o),
                  });
          }
          function E(e, t) {
              if ((void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset)) return x.call(this, e, { reset: !0 });
              var n = this.store.sequences[e.sequence.id],
                  i = e.sequence.index;
              if (n) {
                  var r = new k(n, "visible", this.store),
                      s = new k(n, "revealed", this.store);
                  if (((n.models = { visible: r, revealed: s }), !s.body.length)) {
                      var o = n.members[r.body[0]],
                          a = this.store.elements[o];
                      if (a) return A.call(this, n, r.body[0], -1, t), A.call(this, n, r.body[0], 1, t), x.call(this, a, { reveal: !0, pristine: t });
                  }
                  if (!n.blocked.head && i === [].concat(s.head).pop() && i >= [].concat(r.body).shift()) return A.call(this, n, i, -1, t), x.call(this, e, { reveal: !0, pristine: t });
                  if (!n.blocked.foot && i === [].concat(s.foot).shift() && i <= [].concat(r.body).pop()) return A.call(this, n, i, 1, t), x.call(this, e, { reveal: !0, pristine: t });
              }
          }
          function C(e) {
              var t = Math.abs(e);
              if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
              (this.id = b()), (this.interval = Math.max(t, 16)), (this.members = []), (this.models = {}), (this.blocked = { head: !1, foot: !1 });
          }
          function k(e, t, n) {
              var i = this;
              (this.head = []),
                  (this.body = []),
                  (this.foot = []),
                  s(e.members, function (e, r) {
                      var s = n.elements[e];
                      s && s[t] && i.body.push(r);
                  }),
                  this.body.length &&
                      s(e.members, function (e, r) {
                          var s = n.elements[e];
                          s && !s[t] && (r < i.body[0] ? i.head.push(r) : i.foot.push(r));
                      });
          }
          function A(e, t, n, i) {
              var r = this,
                  s = ["head", null, "foot"][1 + n],
                  o = e.members[t + n],
                  a = this.store.elements[o];
              (e.blocked[s] = !0),
                  setTimeout(function () {
                      (e.blocked[s] = !1), a && E.call(r, a, i);
                  }, e.interval);
          }
          function O(t, n, r) {
              var a = this;
              void 0 === n && (n = {}), void 0 === r && (r = !1);
              var l,
                  c = [],
                  u = n.interval || e.interval;
              try {
                  u && (l = new C(u));
                  var f = i(t);
                  if (!f.length) throw new Error("Invalid reveal target.");
                  var h = f.reduce(function (e, t) {
                      var r = {},
                          o = t.getAttribute("data-sr-id");
                      o ? (_(r, a.store.elements[o]), m(r.node, r.styles.inline.computed)) : ((r.id = b()), (r.node = t), (r.seen = !1), (r.revealed = !1), (r.visible = !1));
                      var u = _({}, r.config || a.defaults, n);
                      if ((!u.mobile && v()) || (!u.desktop && !v())) return o && g.call(a, r), e;
                      var f,
                          h = i(u.container)[0];
                      if (!h) throw new Error("Invalid container.");
                      return h.contains(t)
                          ? (null ===
                                (f = (function (e) {
                                    for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                                    var i = null;
                                    return (
                                        s(t, function (t) {
                                            s(t, function (t) {
                                                null === i && t.node === e && (i = t.id);
                                            });
                                        }),
                                        i
                                    );
                                })(h, c, a.store.containers)) && ((f = b()), c.push({ id: f, node: h })),
                            (r.config = u),
                            (r.containerId = f),
                            (r.styles = p(r)),
                            l && ((r.sequence = { id: l.id, index: l.members.length }), l.members.push(r.id)),
                            e.push(r),
                            e)
                          : e;
                  }, []);
                  s(h, function (e) {
                      (a.store.elements[e.id] = e), e.node.setAttribute("data-sr-id", e.id);
                  });
              } catch (e) {
                  return o.call(this, "Reveal failed.", e.message);
              }
              s(c, function (e) {
                  a.store.containers[e.id] = { id: e.id, node: e.node };
              }),
                  l && (this.store.sequences[l.id] = l),
                  !0 !== r && (this.store.history.push({ target: t, options: n }), this.initTimeout && window.clearTimeout(this.initTimeout), (this.initTimeout = window.setTimeout(w.bind(this), 0)));
          }
          var S,
              P =
                  Math.sign ||
                  function (e) {
                      return (e > 0) - (e < 0) || +e;
                  },
              D =
                  ((S = Date.now()),
                  function (e) {
                      var t = Date.now();
                      t - S > 16
                          ? ((S = t), e(t))
                          : setTimeout(function () {
                                return D(e);
                            }, 0);
                  }),
              L = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || D;
          function R(e, t) {
              var n = t ? e.node.clientHeight : e.node.offsetHeight,
                  i = t ? e.node.clientWidth : e.node.offsetWidth,
                  r = 0,
                  s = 0,
                  o = e.node;
              do {
                  isNaN(o.offsetTop) || (r += o.offsetTop), isNaN(o.offsetLeft) || (s += o.offsetLeft), (o = o.offsetParent);
              } while (o);
              return { bounds: { top: r, right: s + i, bottom: r + n, left: s }, height: n, width: i };
          }
          var N,
              j,
              M,
              I,
              F,
              q,
              H,
              B,
              z = "4.0.9";
          function X(n) {
              var r;
              if ((void 0 === n && (n = {}), void 0 === this || Object.getPrototypeOf(this) !== X.prototype)) return new X(n);
              if (!X.isSupported()) return o.call(this, "Instantiation failed.", "This browser is not supported."), t.failure();
              try {
                  r = _({}, q || e, n);
              } catch (e) {
                  return o.call(this, "Invalid configuration.", e.message), t.failure();
              }
              try {
                  if (!i(r.container)[0]) throw new Error("Invalid container.");
              } catch (e) {
                  return o.call(this, e.message), t.failure();
              }
              return (!(q = r).mobile && v()) || (!q.desktop && !v())
                  ? (o.call(this, "This device is disabled.", "desktop: " + q.desktop, "mobile: " + q.mobile), t.failure())
                  : (t.success(),
                    (this.store = { containers: {}, elements: {}, history: [], sequences: {} }),
                    (this.pristine = !0),
                    (N =
                        N ||
                        function (e, t) {
                            var n = this;
                            void 0 === e && (e = { type: "init" }),
                                void 0 === t && (t = this.store.elements),
                                L(function () {
                                    var i = "init" === e.type || "resize" === e.type;
                                    s(n.store.containers, function (e) {
                                        i && (e.geometry = R.call(n, e, !0));
                                        var t = function (e) {
                                            var t, n;
                                            return e.node === document.documentElement ? ((t = window.pageYOffset), (n = window.pageXOffset)) : ((t = e.node.scrollTop), (n = e.node.scrollLeft)), { top: t, left: n };
                                        }.call(n, e);
                                        e.scroll && (e.direction = { x: P(t.left - e.scroll.left), y: P(t.top - e.scroll.top) }), (e.scroll = t);
                                    }),
                                        s(t, function (e) {
                                            (i || void 0 === e.geometry) && (e.geometry = R.call(n, e)),
                                                (e.visible = function (e) {
                                                    void 0 === e && (e = {});
                                                    var t = this.store.containers[e.containerId];
                                                    if (t) {
                                                        var n = Math.max(0, Math.min(1, e.config.viewFactor)),
                                                            i = e.config.viewOffset,
                                                            r = e.geometry.bounds.top + e.geometry.height * n,
                                                            s = e.geometry.bounds.right - e.geometry.width * n,
                                                            o = e.geometry.bounds.bottom - e.geometry.height * n,
                                                            a = e.geometry.bounds.left + e.geometry.width * n,
                                                            l = t.geometry.bounds.top + t.scroll.top + i.top,
                                                            c = t.geometry.bounds.right + t.scroll.left - i.right,
                                                            u = t.geometry.bounds.bottom + t.scroll.top - i.bottom,
                                                            f = t.geometry.bounds.left + t.scroll.left + i.left;
                                                        return (r < u && s > f && o > l && a < c) || "fixed" === e.styles.position;
                                                    }
                                                }.call(n, e));
                                        }),
                                        s(t, function (e) {
                                            e.sequence ? E.call(n, e) : x.call(n, e);
                                        }),
                                        (n.pristine = !1);
                                });
                        }.bind(this)),
                    (j =
                        j ||
                        function () {
                            var e = this;
                            s(this.store.elements, function (e) {
                                m(e.node, e.styles.inline.generated), e.node.removeAttribute("data-sr-id");
                            }),
                                s(this.store.containers, function (t) {
                                    var n = t.node === document.documentElement ? window : t.node;
                                    n.removeEventListener("scroll", e.delegate), n.removeEventListener("resize", e.delegate);
                                }),
                                (this.store = { containers: {}, elements: {}, history: [], sequences: {} });
                        }.bind(this)),
                    (M = M || O.bind(this)),
                    (I = I || g.bind(this)),
                    (F =
                        F ||
                        function () {
                            var e = this;
                            s(this.store.history, function (t) {
                                O.call(e, t.target, t.options, !0);
                            }),
                                w.call(this);
                        }.bind(this)),
                    Object.defineProperty(this, "delegate", {
                        get: function () {
                            return N;
                        },
                    }),
                    Object.defineProperty(this, "destroy", {
                        get: function () {
                            return j;
                        },
                    }),
                    Object.defineProperty(this, "reveal", {
                        get: function () {
                            return M;
                        },
                    }),
                    Object.defineProperty(this, "clean", {
                        get: function () {
                            return I;
                        },
                    }),
                    Object.defineProperty(this, "sync", {
                        get: function () {
                            return F;
                        },
                    }),
                    Object.defineProperty(this, "defaults", {
                        get: function () {
                            return q;
                        },
                    }),
                    Object.defineProperty(this, "version", {
                        get: function () {
                            return z;
                        },
                    }),
                    Object.defineProperty(this, "noop", {
                        get: function () {
                            return !1;
                        },
                    }),
                    B || (B = this));
          }
          return (
              (X.isSupported = function () {
                  return (
                      ("transform" in (e = document.documentElement.style) || "WebkitTransform" in e) &&
                      (function () {
                          var e = document.documentElement.style;
                          return "transition" in e || "WebkitTransition" in e;
                      })()
                  );
                  var e;
              }),
              Object.defineProperty(X, "debug", {
                  get: function () {
                      return H || !1;
                  },
                  set: function (e) {
                      return (H = "boolean" == typeof e ? e : H);
                  },
              }),
              X(),
              X
          );
      });
  var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
      "use strict";
      var e, t, n, i, r, s, o, a, l, c, u, f, h, d, p, m;
      _gsScope._gsDefine(
          "TweenMax",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function (e, t, n) {
              var i = function (e) {
                      var t,
                          n = [],
                          i = e.length;
                      for (t = 0; t !== i; n.push(e[t++]));
                      return n;
                  },
                  r = function (e, t, n) {
                      var i,
                          r,
                          s = e.cycle;
                      for (i in s) (r = s[i]), (e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length]);
                      delete e.cycle;
                  },
                  s = function (e) {
                      if ("function" == typeof e) return e;
                      var t = "object" == typeof e ? e : { each: e },
                          n = t.ease,
                          i = t.from || 0,
                          r = t.base || 0,
                          s = {},
                          o = isNaN(i),
                          a = t.axis,
                          l = { center: 0.5, end: 1 }[i] || 0;
                      return function (e, c, u) {
                          var f,
                              h,
                              d,
                              p,
                              m,
                              g,
                              _,
                              v,
                              y,
                              b = (u || t).length,
                              w = s[b];
                          if (!w) {
                              if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                  for (_ = -1 / 0; _ < (_ = u[y++].getBoundingClientRect().left) && b > y; );
                                  y--;
                              }
                              for (w = s[b] = [], f = o ? Math.min(y, b) * l - 0.5 : i % y, h = o ? (b * l) / y - 0.5 : (i / y) | 0, _ = 0, v = 1 / 0, g = 0; b > g; g++)
                                  (d = (g % y) - f), (p = h - ((g / y) | 0)), (w[g] = m = a ? Math.abs("y" === a ? p : d) : Math.sqrt(d * d + p * p)), m > _ && (_ = m), v > m && (v = m);
                              (w.max = _ - v), (w.min = v), (w.v = b = t.amount || t.each * (y > b ? b - 1 : a ? ("y" === a ? b / y : y) : Math.max(y, b / y)) || 0), (w.b = 0 > b ? r - b : r);
                          }
                          return (b = (w[e] - w.min) / w.max), w.b + (n ? n.getRatio(b) : b) * w.v;
                      };
                  },
                  o = function (e, t, i) {
                      n.call(this, e, t, i),
                          (this._cycle = 0),
                          (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                          (this._repeat = this.vars.repeat || 0),
                          (this._repeatDelay = this.vars.repeatDelay || 0),
                          this._repeat && this._uncache(!0),
                          (this.render = o.prototype.render);
                  },
                  a = 1e-8,
                  l = n._internals,
                  c = l.isSelector,
                  u = l.isArray,
                  f = (o.prototype = n.to({}, 0.1, {})),
                  h = [];
              (o.version = "2.1.3"),
                  (f.constructor = o),
                  (f.kill()._gc = !1),
                  (o.killTweensOf = o.killDelayedCallsTo = n.killTweensOf),
                  (o.getTweensOf = n.getTweensOf),
                  (o.lagSmoothing = n.lagSmoothing),
                  (o.ticker = n.ticker),
                  (o.render = n.render),
                  (o.distribute = s),
                  (f.invalidate = function () {
                      return (
                          (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                          (this._repeat = this.vars.repeat || 0),
                          (this._repeatDelay = this.vars.repeatDelay || 0),
                          (this._yoyoEase = null),
                          this._uncache(!0),
                          n.prototype.invalidate.call(this)
                      );
                  }),
                  (f.updateTo = function (e, t) {
                      var i,
                          r = this,
                          s = r.ratio,
                          o = r.vars.immediateRender || e.immediateRender;
                      for (i in (t && r._startTime < r._timeline._time && ((r._startTime = r._timeline._time), r._uncache(!1), r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay)), e)) r.vars[i] = e[i];
                      if (r._initted || o)
                          if (t) (r._initted = !1), o && r.render(0, !0, !0);
                          else if ((r._gc && r._enabled(!0, !1), r._notifyPluginsOfEnabled && r._firstPT && n._onPluginEvent("_onDisable", r), r._time / r._duration > 0.998)) {
                              var a = r._totalTime;
                              r.render(0, !0, !1), (r._initted = !1), r.render(a, !0, !1);
                          } else if (((r._initted = !1), r._init(), r._time > 0 || o)) for (var l, c = 1 / (1 - s), u = r._firstPT; u; ) (l = u.s + u.c), (u.c *= c), (u.s = l - u.c), (u = u._next);
                      return r;
                  }),
                  (f.render = function (e, t, i) {
                      this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                      var r,
                          s,
                          o,
                          c,
                          u,
                          f,
                          h,
                          d,
                          p,
                          m = this,
                          g = m._dirty ? m.totalDuration() : m._totalDuration,
                          _ = m._time,
                          v = m._totalTime,
                          y = m._cycle,
                          b = m._duration,
                          w = m._rawPrevTime;
                      if (
                          (e >= g - a && e >= 0
                              ? ((m._totalTime = g),
                                (m._cycle = m._repeat),
                                m._yoyo && 0 != (1 & m._cycle) ? ((m._time = 0), (m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0)) : ((m._time = b), (m.ratio = m._ease._calcEnd ? m._ease.getRatio(1) : 1)),
                                m._reversed || ((r = !0), (s = "onComplete"), (i = i || m._timeline.autoRemoveChildren)),
                                0 === b &&
                                    (m._initted || !m.vars.lazy || i) &&
                                    (m._startTime === m._timeline._duration && (e = 0),
                                    (0 > w || (0 >= e && e >= -a) || (w === a && "isPause" !== m.data)) && w !== e && ((i = !0), w > a && (s = "onReverseComplete")),
                                    (m._rawPrevTime = d = !t || e || w === e ? e : a)))
                              : a > e
                              ? ((m._totalTime = m._time = m._cycle = 0),
                                (m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0),
                                (0 !== v || (0 === b && w > 0)) && ((s = "onReverseComplete"), (r = m._reversed)),
                                e > -a ? (e = 0) : 0 > e && ((m._active = !1), 0 === b && (m._initted || !m.vars.lazy || i) && (w >= 0 && (i = !0), (m._rawPrevTime = d = !t || e || w === e ? e : a))),
                                m._initted || (i = !0))
                              : ((m._totalTime = m._time = e),
                                0 !== m._repeat &&
                                    ((c = b + m._repeatDelay),
                                    (m._cycle = (m._totalTime / c) >> 0),
                                    0 !== m._cycle && m._cycle === m._totalTime / c && e >= v && m._cycle--,
                                    (m._time = m._totalTime - m._cycle * c),
                                    m._yoyo &&
                                        0 != (1 & m._cycle) &&
                                        ((m._time = b - m._time),
                                        (p = m._yoyoEase || m.vars.yoyoEase) &&
                                            (m._yoyoEase ||
                                                (!0 !== p || m._initted
                                                    ? (m._yoyoEase = p = !0 === p ? m._ease : p instanceof Ease ? p : Ease.map[p])
                                                    : ((p = m.vars.ease), (m._yoyoEase = p = p ? (p instanceof Ease ? p : "function" == typeof p ? new Ease(p, m.vars.easeParams) : Ease.map[p] || n.defaultEase) : n.defaultEase))),
                                            (m.ratio = p ? 1 - p.getRatio((b - m._time) / b) : 0))),
                                    m._time > b ? (m._time = b) : m._time < 0 && (m._time = 0)),
                                m._easeType && !p
                                    ? ((u = m._time / b),
                                      (1 === (f = m._easeType) || (3 === f && u >= 0.5)) && (u = 1 - u),
                                      3 === f && (u *= 2),
                                      1 === (h = m._easePower) ? (u *= u) : 2 === h ? (u *= u * u) : 3 === h ? (u *= u * u * u) : 4 === h && (u *= u * u * u * u),
                                      (m.ratio = 1 === f ? 1 - u : 2 === f ? u : m._time / b < 0.5 ? u / 2 : 1 - u / 2))
                                    : p || (m.ratio = m._ease.getRatio(m._time / b))),
                          _ !== m._time || i || y !== m._cycle)
                      ) {
                          if (!m._initted) {
                              if ((m._init(), !m._initted || m._gc)) return;
                              if (!i && m._firstPT && ((!1 !== m.vars.lazy && m._duration) || (m.vars.lazy && !m._duration)))
                                  return (m._time = _), (m._totalTime = v), (m._rawPrevTime = w), (m._cycle = y), l.lazyTweens.push(m), void (m._lazy = [e, t]);
                              !m._time || r || p ? r && this._ease._calcEnd && !p && (m.ratio = m._ease.getRatio(0 === m._time ? 0 : 1)) : (m.ratio = m._ease.getRatio(m._time / b));
                          }
                          for (
                              !1 !== m._lazy && (m._lazy = !1),
                                  m._active || (!m._paused && m._time !== _ && e >= 0 && (m._active = !0)),
                                  0 === v &&
                                      (2 === m._initted && e > 0 && m._init(),
                                      m._startAt && (e >= 0 ? m._startAt.render(e, !0, i) : s || (s = "_dummyGS")),
                                      m.vars.onStart && (0 !== m._totalTime || 0 === b) && (t || m._callback("onStart"))),
                                  o = m._firstPT;
                              o;

                          )
                              o.f ? o.t[o.p](o.c * m.ratio + o.s) : (o.t[o.p] = o.c * m.ratio + o.s), (o = o._next);
                          m._onUpdate && (0 > e && m._startAt && m._startTime && m._startAt.render(e, !0, i), t || ((m._totalTime !== v || s) && m._callback("onUpdate"))),
                              m._cycle !== y && (t || m._gc || (m.vars.onRepeat && m._callback("onRepeat"))),
                              s &&
                                  (!m._gc || i) &&
                                  (0 > e && m._startAt && !m._onUpdate && m._startTime && m._startAt.render(e, !0, i),
                                  r && (m._timeline.autoRemoveChildren && m._enabled(!1, !1), (m._active = !1)),
                                  !t && m.vars[s] && m._callback(s),
                                  0 === b && m._rawPrevTime === a && d !== a && (m._rawPrevTime = 0));
                      } else v !== m._totalTime && m._onUpdate && (t || m._callback("onUpdate"));
                  }),
                  (o.to = function (e, t, n) {
                      return new o(e, t, n);
                  }),
                  (o.from = function (e, t, n) {
                      return (n.runBackwards = !0), (n.immediateRender = 0 != n.immediateRender), new o(e, t, n);
                  }),
                  (o.fromTo = function (e, t, n, i) {
                      return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), new o(e, t, i);
                  }),
                  (o.staggerTo = o.allTo = function (e, t, a, l, f, d, p) {
                      var m,
                          g,
                          _,
                          v,
                          y = [],
                          b = s(a.stagger || l),
                          w = a.cycle,
                          x = (a.startAt || h).cycle;
                      for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), c(e) && (e = i(e))), m = (e = e || []).length - 1, _ = 0; m >= _; _++) {
                          for (v in ((g = {}), a)) g[v] = a[v];
                          if ((w && (r(g, e, _), null != g.duration && ((t = g.duration), delete g.duration)), x)) {
                              for (v in ((x = g.startAt = {}), a.startAt)) x[v] = a.startAt[v];
                              r(g.startAt, e, _);
                          }
                          (g.delay = b(_, e[_], e) + (g.delay || 0)),
                              _ === m &&
                                  f &&
                                  (g.onComplete = function () {
                                      a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), f.apply(p || a.callbackScope || this, d || h);
                                  }),
                              (y[_] = new o(e[_], t, g));
                      }
                      return y;
                  }),
                  (o.staggerFrom = o.allFrom = function (e, t, n, i, r, s, a) {
                      return (n.runBackwards = !0), (n.immediateRender = 0 != n.immediateRender), o.staggerTo(e, t, n, i, r, s, a);
                  }),
                  (o.staggerFromTo = o.allFromTo = function (e, t, n, i, r, s, a, l) {
                      return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), o.staggerTo(e, t, i, r, s, a, l);
                  }),
                  (o.delayedCall = function (e, t, n, i, r) {
                      return new o(t, 0, { delay: e, onComplete: t, onCompleteParams: n, callbackScope: i, onReverseComplete: t, onReverseCompleteParams: n, immediateRender: !1, useFrames: r, overwrite: 0 });
                  }),
                  (o.set = function (e, t) {
                      return new o(e, 0, t);
                  }),
                  (o.isTweening = function (e) {
                      return n.getTweensOf(e, !0).length > 0;
                  });
              var d = function (e, t) {
                      for (var i = [], r = 0, s = e._first; s; ) s instanceof n ? (i[r++] = s) : (t && (i[r++] = s), (r = (i = i.concat(d(s, t))).length)), (s = s._next);
                      return i;
                  },
                  p = (o.getAllTweens = function (t) {
                      return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t));
                  });
              (o.killAll = function (e, n, i, r) {
                  null == n && (n = !0), null == i && (i = !0);
                  var s,
                      o,
                      a,
                      l = p(0 != r),
                      c = l.length,
                      u = n && i && r;
                  for (a = 0; c > a; a++) (o = l[a]), (u || o instanceof t || ((s = o.target === o.vars.onComplete) && i) || (n && !s)) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1));
              }),
                  (o.killChildTweensOf = function (e, t) {
                      if (null != e) {
                          var r,
                              s,
                              a,
                              f,
                              h,
                              d = l.tweenLookup;
                          if (("string" == typeof e && (e = n.selector(e) || e), c(e) && (e = i(e)), u(e))) for (f = e.length; --f > -1; ) o.killChildTweensOf(e[f], t);
                          else {
                              for (a in ((r = []), d)) for (s = d[a].target.parentNode; s; ) s === e && (r = r.concat(d[a].tweens)), (s = s.parentNode);
                              for (h = r.length, f = 0; h > f; f++) t && r[f].totalTime(r[f].totalDuration()), r[f]._enabled(!1, !1);
                          }
                      }
                  });
              var m = function (e, n, i, r) {
                  (n = !1 !== n), (i = !1 !== i);
                  for (var s, o, a = p((r = !1 !== r)), l = n && i && r, c = a.length; --c > -1; ) (o = a[c]), (l || o instanceof t || ((s = o.target === o.vars.onComplete) && i) || (n && !s)) && o.paused(e);
              };
              return (
                  (o.pauseAll = function (e, t, n) {
                      m(!0, e, t, n);
                  }),
                  (o.resumeAll = function (e, t, n) {
                      m(!1, e, t, n);
                  }),
                  (o.globalTimeScale = function (t) {
                      var i = e._rootTimeline,
                          r = n.ticker.time;
                      return arguments.length
                          ? ((t = t || a),
                            (i._startTime = r - ((r - i._startTime) * i._timeScale) / t),
                            (i = e._rootFramesTimeline),
                            (r = n.ticker.frame),
                            (i._startTime = r - ((r - i._startTime) * i._timeScale) / t),
                            (i._timeScale = e._rootTimeline._timeScale = t),
                            t)
                          : i._timeScale;
                  }),
                  (f.progress = function (e, t) {
                      return arguments.length
                          ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t)
                          : this.duration()
                          ? this._time / this._duration
                          : this.ratio;
                  }),
                  (f.totalProgress = function (e, t) {
                      return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration();
                  }),
                  (f.time = function (e, t) {
                      if (!arguments.length) return this._time;
                      this._dirty && this.totalDuration();
                      var n = this._duration,
                          i = this._cycle,
                          r = i * (n + this._repeatDelay);
                      return e > n && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t);
                  }),
                  (f.duration = function (t) {
                      return arguments.length ? e.prototype.duration.call(this, t) : this._duration;
                  }),
                  (f.totalDuration = function (e) {
                      return arguments.length
                          ? -1 === this._repeat
                              ? this
                              : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
                          : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                  }),
                  (f.repeat = function (e) {
                      return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
                  }),
                  (f.repeatDelay = function (e) {
                      return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
                  }),
                  (f.yoyo = function (e) {
                      return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
                  }),
                  o
              );
          },
          !0
      ),
          _gsScope._gsDefine(
              "TimelineLite",
              ["core.Animation", "core.SimpleTimeline", "TweenLite"],
              function (e, t, n) {
                  var i = function (e) {
                          t.call(this, e);
                          var n,
                              i,
                              r = this,
                              s = r.vars;
                          for (i in ((r._labels = {}), (r.autoRemoveChildren = !!s.autoRemoveChildren), (r.smoothChildTiming = !!s.smoothChildTiming), (r._sortChildren = !0), (r._onUpdate = s.onUpdate), s))
                              (n = s[i]), l(n) && -1 !== n.join("").indexOf("{self}") && (s[i] = r._swapSelfInParams(n));
                          l(s.tweens) && r.add(s.tweens, 0, s.align, s.stagger);
                      },
                      r = 1e-8,
                      s = n._internals,
                      o = (i._internals = {}),
                      a = s.isSelector,
                      l = s.isArray,
                      c = s.lazyTweens,
                      u = s.lazyRender,
                      f = _gsScope._gsDefine.globals,
                      h = function (e) {
                          var t,
                              n = {};
                          for (t in e) n[t] = e[t];
                          return n;
                      },
                      d = function (e, t, n) {
                          var i,
                              r,
                              s = e.cycle;
                          for (i in s) (r = s[i]), (e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length]);
                          delete e.cycle;
                      },
                      p = (o.pauseCallback = function () {}),
                      m = function (e, t, n, i) {
                          var r = "immediateRender";
                          return r in t || (t[r] = !((n && !1 === n[r]) || i)), t;
                      },
                      g = function (e) {
                          if ("function" == typeof e) return e;
                          var t = "object" == typeof e ? e : { each: e },
                              n = t.ease,
                              i = t.from || 0,
                              r = t.base || 0,
                              s = {},
                              o = isNaN(i),
                              a = t.axis,
                              l = { center: 0.5, end: 1 }[i] || 0;
                          return function (e, c, u) {
                              var f,
                                  h,
                                  d,
                                  p,
                                  m,
                                  g,
                                  _,
                                  v,
                                  y,
                                  b = (u || t).length,
                                  w = s[b];
                              if (!w) {
                                  if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                      for (_ = -1 / 0; _ < (_ = u[y++].getBoundingClientRect().left) && b > y; );
                                      y--;
                                  }
                                  for (w = s[b] = [], f = o ? Math.min(y, b) * l - 0.5 : i % y, h = o ? (b * l) / y - 0.5 : (i / y) | 0, _ = 0, v = 1 / 0, g = 0; b > g; g++)
                                      (d = (g % y) - f), (p = h - ((g / y) | 0)), (w[g] = m = a ? Math.abs("y" === a ? p : d) : Math.sqrt(d * d + p * p)), m > _ && (_ = m), v > m && (v = m);
                                  (w.max = _ - v), (w.min = v), (w.v = b = t.amount || t.each * (y > b ? b - 1 : a ? ("y" === a ? b / y : y) : Math.max(y, b / y)) || 0), (w.b = 0 > b ? r - b : r);
                              }
                              return (b = (w[e] - w.min) / w.max), w.b + (n ? n.getRatio(b) : b) * w.v;
                          };
                      },
                      _ = (i.prototype = new t());
                  return (
                      (i.version = "2.1.3"),
                      (i.distribute = g),
                      (_.constructor = i),
                      (_.kill()._gc = _._forcingPlayhead = _._hasPause = !1),
                      (_.to = function (e, t, i, r) {
                          var s = (i.repeat && f.TweenMax) || n;
                          return t ? this.add(new s(e, t, i), r) : this.set(e, i, r);
                      }),
                      (_.from = function (e, t, i, r) {
                          return this.add(((i.repeat && f.TweenMax) || n).from(e, t, m(0, i)), r);
                      }),
                      (_.fromTo = function (e, t, i, r, s) {
                          var o = (r.repeat && f.TweenMax) || n;
                          return (r = m(0, r, i)), t ? this.add(o.fromTo(e, t, i, r), s) : this.set(e, r, s);
                      }),
                      (_.staggerTo = function (e, t, r, s, o, l, c, u) {
                          var f,
                              p,
                              m = new i({ onComplete: l, onCompleteParams: c, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
                              _ = g(r.stagger || s),
                              v = r.startAt,
                              y = r.cycle;
                          for (
                              "string" == typeof e && (e = n.selector(e) || e),
                                  a((e = e || [])) &&
                                      (e = (function (e) {
                                          var t,
                                              n = [],
                                              i = e.length;
                                          for (t = 0; t !== i; n.push(e[t++]));
                                          return n;
                                      })(e)),
                                  p = 0;
                              p < e.length;
                              p++
                          )
                              (f = h(r)), v && ((f.startAt = h(v)), v.cycle && d(f.startAt, e, p)), y && (d(f, e, p), null != f.duration && ((t = f.duration), delete f.duration)), m.to(e[p], t, f, _(p, e[p], e));
                          return this.add(m, o);
                      }),
                      (_.staggerFrom = function (e, t, n, i, r, s, o, a) {
                          return (n.runBackwards = !0), this.staggerTo(e, t, m(0, n), i, r, s, o, a);
                      }),
                      (_.staggerFromTo = function (e, t, n, i, r, s, o, a, l) {
                          return (i.startAt = n), this.staggerTo(e, t, m(0, i, n), r, s, o, a, l);
                      }),
                      (_.call = function (e, t, i, r) {
                          return this.add(n.delayedCall(0, e, t, i), r);
                      }),
                      (_.set = function (e, t, i) {
                          return this.add(new n(e, 0, m(0, t, null, !0)), i);
                      }),
                      (i.exportRoot = function (e, t) {
                          null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                          var r,
                              s,
                              o,
                              a,
                              l = new i(e),
                              c = l._timeline;
                          for (null == t && (t = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, o = c._first; o; )
                              (a = o._next), (t && o instanceof n && o.target === o.vars.onComplete) || (0 > (s = o._startTime - o._delay) && (r = 1), l.add(o, s)), (o = a);
                          return c.add(l, 0), r && l.totalDuration(), l;
                      }),
                      (_.add = function (r, s, o, a) {
                          var c,
                              u,
                              f,
                              h,
                              d,
                              p,
                              m = this;
                          if (("number" != typeof s && (s = m._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof e))) {
                              if (r instanceof Array || (r && r.push && l(r))) {
                                  for (o = o || "normal", a = a || 0, c = s, u = r.length, f = 0; u > f; f++)
                                      l((h = r[f])) && (h = new i({ tweens: h })),
                                          m.add(h, c),
                                          "string" != typeof h && "function" != typeof h && ("sequence" === o ? (c = h._startTime + h.totalDuration() / h._timeScale) : "start" === o && (h._startTime -= h.delay())),
                                          (c += a);
                                  return m._uncache(!0);
                              }
                              if ("string" == typeof r) return m.addLabel(r, s);
                              if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                              r = n.delayedCall(0, r);
                          }
                          if (
                              (t.prototype.add.call(m, r, s),
                              (r._time || (!r._duration && r._initted)) &&
                                  ((c = (m.rawTime() - r._startTime) * r._timeScale), (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), c))) - r._totalTime > 1e-5) && r.render(c, !1, !1)),
                              (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
                          )
                              for (p = (d = m).rawTime() > r._startTime; d._timeline; ) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), (d = d._timeline);
                          return m;
                      }),
                      (_.remove = function (t) {
                          if (t instanceof e) {
                              this._remove(t, !1);
                              var n = (t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline);
                              return (t._startTime = (t._paused ? t._pauseTime : n._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale), this;
                          }
                          if (t instanceof Array || (t && t.push && l(t))) {
                              for (var i = t.length; --i > -1; ) this.remove(t[i]);
                              return this;
                          }
                          return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t);
                      }),
                      (_._remove = function (e, n) {
                          return (
                              t.prototype._remove.call(this, e, n),
                              this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                              this
                          );
                      }),
                      (_.append = function (e, t) {
                          return this.add(e, this._parseTimeOrLabel(null, t, !0, e));
                      }),
                      (_.insert = _.insertMultiple = function (e, t, n, i) {
                          return this.add(e, t || 0, n, i);
                      }),
                      (_.appendMultiple = function (e, t, n, i) {
                          return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i);
                      }),
                      (_.addLabel = function (e, t) {
                          return (this._labels[e] = this._parseTimeOrLabel(t)), this;
                      }),
                      (_.addPause = function (e, t, i, r) {
                          var s = n.delayedCall(0, p, i, r || this);
                          return (s.vars.onComplete = s.vars.onReverseComplete = t), (s.data = "isPause"), (this._hasPause = !0), this.add(s, e);
                      }),
                      (_.removeLabel = function (e) {
                          return delete this._labels[e], this;
                      }),
                      (_.getLabelTime = function (e) {
                          return null != this._labels[e] ? this._labels[e] : -1;
                      }),
                      (_._parseTimeOrLabel = function (t, n, i, r) {
                          var s, o;
                          if (r instanceof e && r.timeline === this) this.remove(r);
                          else if (r && (r instanceof Array || (r.push && l(r)))) for (o = r.length; --o > -1; ) r[o] instanceof e && r[o].timeline === this && this.remove(r[o]);
                          if (((s = "number" != typeof t || n ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof n))
                              return this._parseTimeOrLabel(n, i && "number" == typeof t && null == this._labels[n] ? t - s : 0, i);
                          if (((n = n || 0), "string" != typeof t || (!isNaN(t) && null == this._labels[t]))) null == t && (t = s);
                          else {
                              if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? (i ? (this._labels[t] = s + n) : n) : this._labels[t] + n;
                              (n = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1))), (t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : s);
                          }
                          return Number(t) + n;
                      }),
                      (_.seek = function (e, t) {
                          return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t);
                      }),
                      (_.stop = function () {
                          return this.paused(!0);
                      }),
                      (_.gotoAndPlay = function (e, t) {
                          return this.play(e, t);
                      }),
                      (_.gotoAndStop = function (e, t) {
                          return this.pause(e, t);
                      }),
                      (_.render = function (e, t, n) {
                          this._gc && this._enabled(!0, !1);
                          var i,
                              s,
                              o,
                              a,
                              l,
                              f,
                              h,
                              d,
                              p = this,
                              m = p._time,
                              g = p._dirty ? p.totalDuration() : p._totalDuration,
                              _ = p._startTime,
                              v = p._timeScale,
                              y = p._paused;
                          if ((m !== p._time && (e += p._time - m), p._hasPause && !p._forcingPlayhead && !t)) {
                              if (e > m) for (i = p._first; i && i._startTime <= e && !f; ) i._duration || "isPause" !== i.data || i.ratio || (0 === i._startTime && 0 === p._rawPrevTime) || (f = i), (i = i._next);
                              else for (i = p._last; i && i._startTime >= e && !f; ) i._duration || ("isPause" === i.data && i._rawPrevTime > 0 && (f = i)), (i = i._prev);
                              f && ((p._time = p._totalTime = e = f._startTime), (d = p._startTime + (p._reversed ? p._duration - e : e) / p._timeScale));
                          }
                          if (e >= g - r && e >= 0)
                              (p._totalTime = p._time = g),
                                  p._reversed ||
                                      p._hasPausedChild() ||
                                      ((s = !0),
                                      (a = "onComplete"),
                                      (l = !!p._timeline.autoRemoveChildren),
                                      0 === p._duration && ((0 >= e && e >= -r) || p._rawPrevTime < 0 || p._rawPrevTime === r) && p._rawPrevTime !== e && p._first && ((l = !0), p._rawPrevTime > r && (a = "onReverseComplete"))),
                                  (p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : r),
                                  (e = g + 1e-4);
                          else if (r > e)
                              if (
                                  ((p._totalTime = p._time = 0),
                                  e > -r && (e = 0),
                                  (0 !== m || (0 === p._duration && p._rawPrevTime !== r && (p._rawPrevTime > 0 || (0 > e && p._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (s = p._reversed)),
                                  0 > e)
                              )
                                  (p._active = !1), p._timeline.autoRemoveChildren && p._reversed ? ((l = s = !0), (a = "onReverseComplete")) : p._rawPrevTime >= 0 && p._first && (l = !0), (p._rawPrevTime = e);
                              else {
                                  if (((p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : r), 0 === e && s)) for (i = p._first; i && 0 === i._startTime; ) i._duration || (s = !1), (i = i._next);
                                  (e = 0), p._initted || (l = !0);
                              }
                          else p._totalTime = p._time = p._rawPrevTime = e;
                          if ((p._time !== m && p._first) || n || l || f) {
                              if (
                                  (p._initted || (p._initted = !0),
                                  p._active || (!p._paused && p._time !== m && e > 0 && (p._active = !0)),
                                  0 === m && p.vars.onStart && ((0 === p._time && p._duration) || t || p._callback("onStart")),
                                  (h = p._time) >= m)
                              )
                                  for (i = p._first; i && ((o = i._next), h === p._time && (!p._paused || y)); )
                                      (i._active || (i._startTime <= h && !i._paused && !i._gc)) &&
                                          (f === i && (p.pause(), (p._pauseTime = d)),
                                          i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)),
                                          (i = o);
                              else
                                  for (i = p._last; i && ((o = i._prev), h === p._time && (!p._paused || y)); ) {
                                      if (i._active || (i._startTime <= m && !i._paused && !i._gc)) {
                                          if (f === i) {
                                              for (f = i._prev; f && f.endTime() > p._time; ) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, n), (f = f._prev);
                                              (f = null), p.pause(), (p._pauseTime = d);
                                          }
                                          i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n);
                                      }
                                      i = o;
                                  }
                              p._onUpdate && (t || (c.length && u(), p._callback("onUpdate"))),
                                  a &&
                                      (p._gc ||
                                          ((_ === p._startTime || v !== p._timeScale) &&
                                              (0 === p._time || g >= p.totalDuration()) &&
                                              (s && (c.length && u(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), (p._active = !1)), !t && p.vars[a] && p._callback(a))));
                          }
                      }),
                      (_._hasPausedChild = function () {
                          for (var e = this._first; e; ) {
                              if (e._paused || (e instanceof i && e._hasPausedChild())) return !0;
                              e = e._next;
                          }
                          return !1;
                      }),
                      (_.getChildren = function (e, t, i, r) {
                          r = r || -9999999999;
                          for (var s = [], o = this._first, a = 0; o; )
                              o._startTime < r || (o instanceof n ? !1 !== t && (s[a++] = o) : (!1 !== i && (s[a++] = o), !1 !== e && (a = (s = s.concat(o.getChildren(!0, t, i))).length))), (o = o._next);
                          return s;
                      }),
                      (_.getTweensOf = function (e, t) {
                          var i,
                              r,
                              s = this._gc,
                              o = [],
                              a = 0;
                          for (s && this._enabled(!0, !0), r = (i = n.getTweensOf(e)).length; --r > -1; ) (i[r].timeline === this || (t && this._contains(i[r]))) && (o[a++] = i[r]);
                          return s && this._enabled(!1, !0), o;
                      }),
                      (_.recent = function () {
                          return this._recent;
                      }),
                      (_._contains = function (e) {
                          for (var t = e.timeline; t; ) {
                              if (t === this) return !0;
                              t = t.timeline;
                          }
                          return !1;
                      }),
                      (_.shiftChildren = function (e, t, n) {
                          n = n || 0;
                          for (var i, r = this._first, s = this._labels; r; ) r._startTime >= n && (r._startTime += e), (r = r._next);
                          if (t) for (i in s) s[i] >= n && (s[i] += e);
                          return this._uncache(!0);
                      }),
                      (_._kill = function (e, t) {
                          if (!e && !t) return this._enabled(!1, !1);
                          for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1; ) n[i]._kill(e, t) && (r = !0);
                          return r;
                      }),
                      (_.clear = function (e) {
                          var t = this.getChildren(!1, !0, !0),
                              n = t.length;
                          for (this._time = this._totalTime = 0; --n > -1; ) t[n]._enabled(!1, !1);
                          return !1 !== e && (this._labels = {}), this._uncache(!0);
                      }),
                      (_.invalidate = function () {
                          for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                          return e.prototype.invalidate.call(this);
                      }),
                      (_._enabled = function (e, n) {
                          if (e === this._gc) for (var i = this._first; i; ) i._enabled(e, !0), (i = i._next);
                          return t.prototype._enabled.call(this, e, n);
                      }),
                      (_.totalTime = function (t, n, i) {
                          this._forcingPlayhead = !0;
                          var r = e.prototype.totalTime.apply(this, arguments);
                          return (this._forcingPlayhead = !1), r;
                      }),
                      (_.duration = function (e) {
                          return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration);
                      }),
                      (_.totalDuration = function (e) {
                          if (!arguments.length) {
                              if (this._dirty) {
                                  for (var t, n, i = 0, r = this, s = r._last, o = 999999999999; s; )
                                      (t = s._prev),
                                          s._dirty && s.totalDuration(),
                                          s._startTime > o && r._sortChildren && !s._paused && !r._calculatingDuration ? ((r._calculatingDuration = 1), r.add(s, s._startTime - s._delay), (r._calculatingDuration = 0)) : (o = s._startTime),
                                          s._startTime < 0 &&
                                              !s._paused &&
                                              ((i -= s._startTime),
                                              r._timeline.smoothChildTiming && ((r._startTime += s._startTime / r._timeScale), (r._time -= s._startTime), (r._totalTime -= s._startTime), (r._rawPrevTime -= s._startTime)),
                                              r.shiftChildren(-s._startTime, !1, -9999999999),
                                              (o = 0)),
                                          (n = s._startTime + s._totalDuration / s._timeScale) > i && (i = n),
                                          (s = t);
                                  (r._duration = r._totalDuration = i), (r._dirty = !1);
                              }
                              return this._totalDuration;
                          }
                          return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
                      }),
                      (_.paused = function (t) {
                          if (!1 === t && this._paused) for (var n = this._first; n; ) n._startTime === this._time && "isPause" === n.data && (n._rawPrevTime = 0), (n = n._next);
                          return e.prototype.paused.apply(this, arguments);
                      }),
                      (_.usesFrames = function () {
                          for (var t = this._timeline; t._timeline; ) t = t._timeline;
                          return t === e._rootFramesTimeline;
                      }),
                      (_.rawTime = function (e) {
                          return e && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                              ? this._totalTime % (this._duration + this._repeatDelay)
                              : this._paused
                              ? this._totalTime
                              : (this._timeline.rawTime(e) - this._startTime) * this._timeScale;
                      }),
                      i
                  );
              },
              !0
          ),
          _gsScope._gsDefine(
              "TimelineMax",
              ["TimelineLite", "TweenLite", "easing.Ease"],
              function (e, t, n) {
                  var i = function (t) {
                          e.call(this, t), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !!this.vars.yoyo), (this._dirty = !0);
                      },
                      r = 1e-8,
                      s = t._internals,
                      o = s.lazyTweens,
                      a = s.lazyRender,
                      l = _gsScope._gsDefine.globals,
                      c = new n(null, null, 1, 0),
                      u = (i.prototype = new e());
                  return (
                      (u.constructor = i),
                      (u.kill()._gc = !1),
                      (i.version = "2.1.3"),
                      (u.invalidate = function () {
                          return (this._yoyo = !!this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), e.prototype.invalidate.call(this);
                      }),
                      (u.addCallback = function (e, n, i, r) {
                          return this.add(t.delayedCall(0, e, i, r), n);
                      }),
                      (u.removeCallback = function (e, t) {
                          if (e)
                              if (null == t) this._kill(null, e);
                              else for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); --i > -1; ) n[i]._startTime === r && n[i]._enabled(!1, !1);
                          return this;
                      }),
                      (u.removePause = function (t) {
                          return this.removeCallback(e._internals.pauseCallback, t);
                      }),
                      (u.tweenTo = function (e, n) {
                          n = n || {};
                          var i,
                              r,
                              s,
                              o = { ease: c, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                              a = (n.repeat && l.TweenMax) || t;
                          for (r in n) o[r] = n[r];
                          return (
                              (o.time = this._parseTimeOrLabel(e)),
                              (i = Math.abs(Number(o.time) - this._time) / this._timeScale || 0.001),
                              (s = new a(this, i, o)),
                              (o.onStart = function () {
                                  s.target.paused(!0),
                                      s.vars.time === s.target.time() || i !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0),
                                      n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || s, n.onStartParams || []);
                              }),
                              s
                          );
                      }),
                      (u.tweenFromTo = function (e, t, n) {
                          (n = n || {}), (e = this._parseTimeOrLabel(e)), (n.startAt = { onComplete: this.seek, onCompleteParams: [e], callbackScope: this }), (n.immediateRender = !1 !== n.immediateRender);
                          var i = this.tweenTo(t, n);
                          return (i.isFromTo = 1), i.duration(Math.abs(i.vars.time - e) / this._timeScale || 0.001);
                      }),
                      (u.render = function (e, t, n) {
                          this._gc && this._enabled(!0, !1);
                          var i,
                              s,
                              l,
                              c,
                              u,
                              f,
                              h,
                              d,
                              p,
                              m = this,
                              g = m._time,
                              _ = m._dirty ? m.totalDuration() : m._totalDuration,
                              v = m._duration,
                              y = m._totalTime,
                              b = m._startTime,
                              w = m._timeScale,
                              x = m._rawPrevTime,
                              T = m._paused,
                              E = m._cycle;
                          if ((g !== m._time && (e += m._time - g), e >= _ - r && e >= 0))
                              m._locked || ((m._totalTime = _), (m._cycle = m._repeat)),
                                  m._reversed ||
                                      m._hasPausedChild() ||
                                      ((s = !0),
                                      (c = "onComplete"),
                                      (u = !!m._timeline.autoRemoveChildren),
                                      0 === m._duration && ((0 >= e && e >= -r) || 0 > x || x === r) && x !== e && m._first && ((u = !0), x > r && (c = "onReverseComplete"))),
                                  (m._rawPrevTime = m._duration || !t || e || m._rawPrevTime === e ? e : r),
                                  m._yoyo && 1 & m._cycle ? (m._time = e = 0) : ((m._time = v), (e = v + 1e-4));
                          else if (r > e)
                              if (
                                  (m._locked || (m._totalTime = m._cycle = 0),
                                  (m._time = 0),
                                  e > -r && (e = 0),
                                  (0 !== g || (0 === v && x !== r && (x > 0 || (0 > e && x >= 0)) && !m._locked)) && ((c = "onReverseComplete"), (s = m._reversed)),
                                  0 > e)
                              )
                                  (m._active = !1), m._timeline.autoRemoveChildren && m._reversed ? ((u = s = !0), (c = "onReverseComplete")) : x >= 0 && m._first && (u = !0), (m._rawPrevTime = e);
                              else {
                                  if (((m._rawPrevTime = v || !t || e || m._rawPrevTime === e ? e : r), 0 === e && s)) for (i = m._first; i && 0 === i._startTime; ) i._duration || (s = !1), (i = i._next);
                                  (e = 0), m._initted || (u = !0);
                              }
                          else
                              0 === v && 0 > x && (u = !0),
                                  (m._time = m._rawPrevTime = e),
                                  m._locked ||
                                      ((m._totalTime = e),
                                      0 !== m._repeat &&
                                          ((f = v + m._repeatDelay),
                                          (m._cycle = (m._totalTime / f) >> 0),
                                          m._cycle && m._cycle === m._totalTime / f && e >= y && m._cycle--,
                                          (m._time = m._totalTime - m._cycle * f),
                                          m._yoyo && 1 & m._cycle && (m._time = v - m._time),
                                          m._time > v ? ((m._time = v), (e = v + 1e-4)) : m._time < 0 ? (m._time = e = 0) : (e = m._time)));
                          if (m._hasPause && !m._forcingPlayhead && !t) {
                              if ((e = m._time) > g || (m._repeat && E !== m._cycle))
                                  for (i = m._first; i && i._startTime <= e && !h; ) i._duration || "isPause" !== i.data || i.ratio || (0 === i._startTime && 0 === m._rawPrevTime) || (h = i), (i = i._next);
                              else for (i = m._last; i && i._startTime >= e && !h; ) i._duration || ("isPause" === i.data && i._rawPrevTime > 0 && (h = i)), (i = i._prev);
                              h &&
                                  ((p = m._startTime + (m._reversed ? m._duration - h._startTime : h._startTime) / m._timeScale),
                                  h._startTime < v && ((m._time = m._rawPrevTime = e = h._startTime), (m._totalTime = e + m._cycle * (m._totalDuration + m._repeatDelay))));
                          }
                          if (m._cycle !== E && !m._locked) {
                              var C = m._yoyo && 0 != (1 & E),
                                  k = C === (m._yoyo && 0 != (1 & m._cycle)),
                                  A = m._totalTime,
                                  O = m._cycle,
                                  S = m._rawPrevTime,
                                  P = m._time;
                              if (
                                  ((m._totalTime = E * v),
                                  m._cycle < E ? (C = !C) : (m._totalTime += v),
                                  (m._time = g),
                                  (m._rawPrevTime = 0 === v ? x - 1e-4 : x),
                                  (m._cycle = E),
                                  (m._locked = !0),
                                  (g = C ? 0 : v),
                                  m.render(g, t, 0 === v),
                                  t || m._gc || (m.vars.onRepeat && ((m._cycle = O), (m._locked = !1), m._callback("onRepeat"))),
                                  g !== m._time)
                              )
                                  return;
                              if ((k && ((m._cycle = E), (m._locked = !0), (g = C ? v + 1e-4 : -1e-4), m.render(g, !0, !1)), (m._locked = !1), m._paused && !T)) return;
                              (m._time = P), (m._totalTime = A), (m._cycle = O), (m._rawPrevTime = S);
                          }
                          if ((m._time !== g && m._first) || n || u || h) {
                              if (
                                  (m._initted || (m._initted = !0),
                                  m._active || (!m._paused && m._totalTime !== y && e > 0 && (m._active = !0)),
                                  0 === y && m.vars.onStart && ((0 === m._totalTime && m._totalDuration) || t || m._callback("onStart")),
                                  (d = m._time) >= g)
                              )
                                  for (i = m._first; i && ((l = i._next), d === m._time && (!m._paused || T)); )
                                      (i._active || (i._startTime <= m._time && !i._paused && !i._gc)) &&
                                          (h === i && (m.pause(), (m._pauseTime = p)),
                                          i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)),
                                          (i = l);
                              else
                                  for (i = m._last; i && ((l = i._prev), d === m._time && (!m._paused || T)); ) {
                                      if (i._active || (i._startTime <= g && !i._paused && !i._gc)) {
                                          if (h === i) {
                                              for (h = i._prev; h && h.endTime() > m._time; ) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, n), (h = h._prev);
                                              (h = null), m.pause(), (m._pauseTime = p);
                                          }
                                          i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n);
                                      }
                                      i = l;
                                  }
                              m._onUpdate && (t || (o.length && a(), m._callback("onUpdate"))),
                                  c &&
                                      (m._locked ||
                                          m._gc ||
                                          ((b === m._startTime || w !== m._timeScale) &&
                                              (0 === m._time || _ >= m.totalDuration()) &&
                                              (s && (o.length && a(), m._timeline.autoRemoveChildren && m._enabled(!1, !1), (m._active = !1)), !t && m.vars[c] && m._callback(c))));
                          } else y !== m._totalTime && m._onUpdate && (t || m._callback("onUpdate"));
                      }),
                      (u.getActive = function (e, t, n) {
                          var i,
                              r,
                              s = [],
                              o = this.getChildren(e || null == e, t || null == e, !!n),
                              a = 0,
                              l = o.length;
                          for (i = 0; l > i; i++) (r = o[i]).isActive() && (s[a++] = r);
                          return s;
                      }),
                      (u.getLabelAfter = function (e) {
                          e || (0 !== e && (e = this._time));
                          var t,
                              n = this.getLabelsArray(),
                              i = n.length;
                          for (t = 0; i > t; t++) if (n[t].time > e) return n[t].name;
                          return null;
                      }),
                      (u.getLabelBefore = function (e) {
                          null == e && (e = this._time);
                          for (var t = this.getLabelsArray(), n = t.length; --n > -1; ) if (t[n].time < e) return t[n].name;
                          return null;
                      }),
                      (u.getLabelsArray = function () {
                          var e,
                              t = [],
                              n = 0;
                          for (e in this._labels) t[n++] = { time: this._labels[e], name: e };
                          return (
                              t.sort(function (e, t) {
                                  return e.time - t.time;
                              }),
                              t
                          );
                      }),
                      (u.invalidate = function () {
                          return (this._locked = !1), e.prototype.invalidate.call(this);
                      }),
                      (u.progress = function (e, t) {
                          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0;
                      }),
                      (u.totalProgress = function (e, t) {
                          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0;
                      }),
                      (u.totalDuration = function (t) {
                          return arguments.length
                              ? -1 !== this._repeat && t
                                  ? this.timeScale(this.totalDuration() / t)
                                  : this
                              : (this._dirty && (e.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)),
                                this._totalDuration);
                      }),
                      (u.time = function (e, t) {
                          if (!arguments.length) return this._time;
                          this._dirty && this.totalDuration();
                          var n = this._duration,
                              i = this._cycle,
                              r = i * (n + this._repeatDelay);
                          return e > n && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t);
                      }),
                      (u.repeat = function (e) {
                          return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
                      }),
                      (u.repeatDelay = function (e) {
                          return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
                      }),
                      (u.yoyo = function (e) {
                          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
                      }),
                      (u.currentLabel = function (e) {
                          return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + r);
                      }),
                      i
                  );
              },
              !0
          ),
          (e = 180 / Math.PI),
          (t = []),
          (n = []),
          (i = []),
          (r = {}),
          (s = _gsScope._gsDefine.globals),
          (o = function (e, t, n, i) {
              n === i && (n = i - (i - t) / 1e6), e === t && (t = e + (n - e) / 1e6), (this.a = e), (this.b = t), (this.c = n), (this.d = i), (this.da = i - e), (this.ca = n - e), (this.ba = t - e);
          }),
          (a = function (e, t, n, i) {
              var r = { a: e },
                  s = {},
                  o = {},
                  a = { c: i },
                  l = (e + t) / 2,
                  c = (t + n) / 2,
                  u = (n + i) / 2,
                  f = (l + c) / 2,
                  h = (c + u) / 2,
                  d = (h - f) / 8;
              return (r.b = l + (e - l) / 4), (s.b = f + d), (r.c = s.a = (r.b + s.b) / 2), (s.c = o.a = (f + h) / 2), (o.b = h - d), (a.b = u + (i - u) / 4), (o.c = a.a = (o.b + a.b) / 2), [r, s, o, a];
          }),
          (l = function (e, r, s, o, l) {
              var c,
                  u,
                  f,
                  h,
                  d,
                  p,
                  m,
                  g,
                  _,
                  v,
                  y,
                  b,
                  w,
                  x = e.length - 1,
                  T = 0,
                  E = e[0].a;
              for (c = 0; x > c; c++)
                  (u = (d = e[T]).a),
                      (f = d.d),
                      (h = e[T + 1].d),
                      l
                          ? ((y = t[c]),
                            (w = (((b = n[c]) + y) * r * 0.25) / (o ? 0.5 : i[c] || 0.5)),
                            (g = f - ((p = f - (f - u) * (o ? 0.5 * r : 0 !== y ? w / y : 0)) + ((((m = f + (h - f) * (o ? 0.5 * r : 0 !== b ? w / b : 0)) - p) * ((3 * y) / (y + b) + 0.5)) / 4 || 0))))
                          : (g = f - ((p = f - (f - u) * r * 0.5) + (m = f + (h - f) * r * 0.5)) / 2),
                      (p += g),
                      (m += g),
                      (d.c = _ = p),
                      (d.b = 0 !== c ? E : (E = d.a + 0.6 * (d.c - d.a))),
                      (d.da = f - u),
                      (d.ca = _ - u),
                      (d.ba = E - u),
                      s ? ((v = a(u, E, _, f)), e.splice(T, 1, v[0], v[1], v[2], v[3]), (T += 4)) : T++,
                      (E = m);
              ((d = e[T]).b = E), (d.c = E + 0.4 * (d.d - E)), (d.da = d.d - d.a), (d.ca = d.c - d.a), (d.ba = E - d.a), s && ((v = a(d.a, E, d.c, d.d)), e.splice(T, 1, v[0], v[1], v[2], v[3]));
          }),
          (c = function (e, i, r, s) {
              var a,
                  l,
                  c,
                  u,
                  f,
                  h,
                  d = [];
              if (s) for (l = (e = [s].concat(e)).length; --l > -1; ) "string" == typeof (h = e[l][i]) && "=" === h.charAt(1) && (e[l][i] = s[i] + Number(h.charAt(0) + h.substr(2)));
              if (0 > (a = e.length - 2)) return (d[0] = new o(e[0][i], 0, 0, e[0][i])), d;
              for (l = 0; a > l; l++) (c = e[l][i]), (u = e[l + 1][i]), (d[l] = new o(c, 0, 0, u)), r && ((f = e[l + 2][i]), (t[l] = (t[l] || 0) + (u - c) * (u - c)), (n[l] = (n[l] || 0) + (f - u) * (f - u)));
              return (d[l] = new o(e[l][i], 0, 0, e[l + 1][i])), d;
          }),
          (u = function (e, s, o, a, u, f) {
              var h,
                  d,
                  p,
                  m,
                  g,
                  _,
                  v,
                  y,
                  b = {},
                  w = [],
                  x = f || e[0];
              for (d in ((u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
              null == s && (s = 1),
              e[0]))
                  w.push(d);
              if (e.length > 1) {
                  for (y = e[e.length - 1], v = !0, h = w.length; --h > -1; )
                      if (((d = w[h]), Math.abs(x[d] - y[d]) > 0.05)) {
                          v = !1;
                          break;
                      }
                  v && ((e = e.concat()), f && e.unshift(f), e.push(e[1]), (f = e[e.length - 3]));
              }
              for (t.length = n.length = i.length = 0, h = w.length; --h > -1; ) (d = w[h]), (r[d] = -1 !== u.indexOf("," + d + ",")), (b[d] = c(e, d, r[d], f));
              for (h = t.length; --h > -1; ) (t[h] = Math.sqrt(t[h])), (n[h] = Math.sqrt(n[h]));
              if (!a) {
                  for (h = w.length; --h > -1; ) if (r[d]) for (_ = (p = b[w[h]]).length - 1, m = 0; _ > m; m++) (g = p[m + 1].da / n[m] + p[m].da / t[m] || 0), (i[m] = (i[m] || 0) + g * g);
                  for (h = i.length; --h > -1; ) i[h] = Math.sqrt(i[h]);
              }
              for (h = w.length, m = o ? 4 : 1; --h > -1; ) (p = b[(d = w[h])]), l(p, s, o, a, r[d]), v && (p.splice(0, m), p.splice(p.length - m, m));
              return b;
          }),
          (f = function (e, t, n) {
              var i,
                  r,
                  s,
                  a,
                  l,
                  c,
                  u,
                  f,
                  h,
                  d,
                  p,
                  m = {},
                  g = "cubic" === (t = t || "soft") ? 3 : 2,
                  _ = "soft" === t,
                  v = [];
              if ((_ && n && (e = [n].concat(e)), null == e || e.length < g + 1)) throw "invalid Bezier data";
              for (h in e[0]) v.push(h);
              for (c = v.length; --c > -1; ) {
                  for (m[(h = v[c])] = l = [], d = 0, f = e.length, u = 0; f > u; u++)
                      (i = null == n ? e[u][h] : "string" == typeof (p = e[u][h]) && "=" === p.charAt(1) ? n[h] + Number(p.charAt(0) + p.substr(2)) : Number(p)), _ && u > 1 && f - 1 > u && (l[d++] = (i + l[d - 2]) / 2), (l[d++] = i);
                  for (f = d - g + 1, d = 0, u = 0; f > u; u += g) (i = l[u]), (r = l[u + 1]), (s = l[u + 2]), (a = 2 === g ? 0 : l[u + 3]), (l[d++] = p = 3 === g ? new o(i, r, s, a) : new o(i, (2 * r + i) / 3, (2 * r + s) / 3, s));
                  l.length = d;
              }
              return m;
          }),
          (h = function (e, t, n) {
              for (var i, r, s, o, a, l, c, u, f, h, d, p = 1 / n, m = e.length; --m > -1; )
                  for (s = (h = e[m]).a, o = h.d - s, a = h.c - s, l = h.b - s, i = r = 0, u = 1; n >= u; u++) (i = r - (r = ((c = p * u) * c * o + 3 * (f = 1 - c) * (c * a + f * l)) * c)), (t[(d = m * n + u - 1)] = (t[d] || 0) + i * i);
          }),
          (d = function (e, t) {
              var n,
                  i,
                  r,
                  s,
                  o = [],
                  a = [],
                  l = 0,
                  c = 0,
                  u = (t = t >> 0 || 6) - 1,
                  f = [],
                  d = [];
              for (n in e) h(e[n], o, t);
              for (r = o.length, i = 0; r > i; i++) (l += Math.sqrt(o[i])), (d[(s = i % t)] = l), s === u && ((c += l), (f[(s = (i / t) >> 0)] = d), (a[s] = c), (l = 0), (d = []));
              return { length: c, lengths: a, segments: f };
          }),
          (p = _gsScope._gsDefine.plugin({
              propName: "bezier",
              priority: -1,
              version: "1.3.9",
              API: 2,
              global: !0,
              init: function (e, t, n) {
                  (this._target = e), t instanceof Array && (t = { values: t }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10));
                  var i,
                      r,
                      s,
                      o,
                      a,
                      l = t.values || [],
                      c = {},
                      h = l[0],
                      p = t.autoRotate || n.vars.orientToBezier;
                  for (i in ((this._autoRotate = p ? (p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]]) : null), h)) this._props.push(i);
                  for (s = this._props.length; --s > -1; )
                      (i = this._props[s]),
                          this._overwriteProps.push(i),
                          (r = this._func[i] = "function" == typeof e[i]),
                          (c[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i])),
                          a || (c[i] !== l[0][i] && (a = c));
                  if (
                      ((this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : f(l, t.type, c)),
                      (this._segCount = this._beziers[i].length),
                      this._timeRes)
                  ) {
                      var m = d(this._beziers, this._timeRes);
                      (this._length = m.length),
                          (this._lengths = m.lengths),
                          (this._segments = m.segments),
                          (this._l1 = this._li = this._s1 = this._si = 0),
                          (this._l2 = this._lengths[0]),
                          (this._curSeg = this._segments[0]),
                          (this._s2 = this._curSeg[0]),
                          (this._prec = 1 / this._curSeg.length);
                  }
                  if ((p = this._autoRotate))
                      for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1; ) {
                          for (o = 0; 3 > o; o++) (i = p[s][o]), (this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]);
                          (i = p[s][2]), (this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0), this._overwriteProps.push(i);
                      }
                  return (this._startRatio = n.vars.runBackwards ? 1 : 0), !0;
              },
              set: function (t) {
                  var n,
                      i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      f,
                      h,
                      d = this._segCount,
                      p = this._func,
                      m = this._target,
                      g = t !== this._startRatio;
                  if (this._timeRes) {
                      if (((u = this._lengths), (f = this._curSeg), (h = t * this._length), (r = this._li), h > this._l2 && d - 1 > r)) {
                          for (c = d - 1; c > r && (this._l2 = u[++r]) <= h; );
                          (this._l1 = u[r - 1]), (this._li = r), (this._curSeg = f = this._segments[r]), (this._s2 = f[(this._s1 = this._si = 0)]);
                      } else if (h < this._l1 && r > 0) {
                          for (; r > 0 && (this._l1 = u[--r]) >= h; );
                          0 === r && h < this._l1 ? (this._l1 = 0) : r++, (this._l2 = u[r]), (this._li = r), (this._curSeg = f = this._segments[r]), (this._s1 = f[(this._si = f.length - 1) - 1] || 0), (this._s2 = f[this._si]);
                      }
                      if (((n = r), (h -= this._l1), (r = this._si), h > this._s2 && r < f.length - 1)) {
                          for (c = f.length - 1; c > r && (this._s2 = f[++r]) <= h; );
                          (this._s1 = f[r - 1]), (this._si = r);
                      } else if (h < this._s1 && r > 0) {
                          for (; r > 0 && (this._s1 = f[--r]) >= h; );
                          0 === r && h < this._s1 ? (this._s1 = 0) : r++, (this._s2 = f[r]), (this._si = r);
                      }
                      a = 1 === t ? 1 : (r + (h - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                  } else a = (t - (n = 0 > t ? 0 : t >= 1 ? d - 1 : (d * t) >> 0) * (1 / d)) * d;
                  for (i = 1 - a, r = this._props.length; --r > -1; )
                      (s = this._props[r]), (l = (a * a * (o = this._beziers[s][n]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a), this._mod[s] && (l = this._mod[s](l, m)), p[s] ? m[s](l) : (m[s] = l);
                  if (this._autoRotate) {
                      var _,
                          v,
                          y,
                          b,
                          w,
                          x,
                          T,
                          E = this._autoRotate;
                      for (r = E.length; --r > -1; )
                          (s = E[r][2]),
                              (x = E[r][3] || 0),
                              (T = !0 === E[r][4] ? 1 : e),
                              (o = this._beziers[E[r][0]]),
                              (_ = this._beziers[E[r][1]]),
                              o &&
                                  _ &&
                                  ((o = o[n]),
                                  (_ = _[n]),
                                  (v = o.a + (o.b - o.a) * a),
                                  (v += ((b = o.b + (o.c - o.b) * a) - v) * a),
                                  (b += (o.c + (o.d - o.c) * a - b) * a),
                                  (y = _.a + (_.b - _.a) * a),
                                  (y += ((w = _.b + (_.c - _.b) * a) - y) * a),
                                  (w += (_.c + (_.d - _.c) * a - w) * a),
                                  (l = g ? Math.atan2(w - y, b - v) * T + x : this._initialRotations[r]),
                                  this._mod[s] && (l = this._mod[s](l, m)),
                                  p[s] ? m[s](l) : (m[s] = l));
                  }
              },
          })),
          (m = p.prototype),
          (p.bezierThrough = u),
          (p.cubicToQuadratic = a),
          (p._autoCSS = !0),
          (p.quadraticToCubic = function (e, t, n) {
              return new o(e, (2 * t + e) / 3, (2 * t + n) / 3, n);
          }),
          (p._cssRegister = function () {
              var e = s.CSSPlugin;
              if (e) {
                  var t = e._internals,
                      n = t._parseToProxy,
                      i = t._setPluginRatio,
                      r = t.CSSPropTween;
                  t._registerComplexSpecialProp("bezier", {
                      parser: function (e, t, s, o, a, l) {
                          t instanceof Array && (t = { values: t }), (l = new p());
                          var c,
                              u,
                              f,
                              h = t.values,
                              d = h.length - 1,
                              m = [],
                              g = {};
                          if (0 > d) return a;
                          for (c = 0; d >= c; c++) (f = n(e, h[c], o, a, l, d !== c)), (m[c] = f.end);
                          for (u in t) g[u] = t[u];
                          return (
                              (g.values = m),
                              ((a = new r(e, "bezier", 0, 0, f.pt, 2)).data = f),
                              (a.plugin = l),
                              (a.setRatio = i),
                              0 === g.autoRotate && (g.autoRotate = !0),
                              !g.autoRotate ||
                                  g.autoRotate instanceof Array ||
                                  ((c = !0 === g.autoRotate ? 0 : Number(g.autoRotate)), (g.autoRotate = null != f.end.left ? [["left", "top", "rotation", c, !1]] : null != f.end.x && [["x", "y", "rotation", c, !1]])),
                              g.autoRotate && (o._transform || o._enableTransforms(!1), (f.autoRotate = o._target._gsTransform), (f.proxy.rotation = f.autoRotate.rotation || 0), o._overwriteProps.push("rotation")),
                              l._onInitTween(f.proxy, g, o._tween),
                              a
                          );
                      },
                  });
              }
          }),
          (m._mod = function (e) {
              for (var t, n = this._overwriteProps, i = n.length; --i > -1; ) (t = e[n[i]]) && "function" == typeof t && (this._mod[n[i]] = t);
          }),
          (m._kill = function (e) {
              var t,
                  n,
                  i = this._props;
              for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], n = i.length; --n > -1; ) i[n] === t && i.splice(n, 1);
              if ((i = this._autoRotate)) for (n = i.length; --n > -1; ) e[i[n][2]] && i.splice(n, 1);
              return this._super._kill.call(this, e);
          }),
          _gsScope._gsDefine(
              "plugins.CSSPlugin",
              ["plugins.TweenPlugin", "TweenLite"],
              function (e, t) {
                  var n,
                      i,
                      r,
                      s,
                      o = function () {
                          e.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                      },
                      a = _gsScope._gsDefine.globals,
                      l = {},
                      c = (o.prototype = new e("css"));
                  (c.constructor = o),
                      (o.version = "2.1.3"),
                      (o.API = 2),
                      (o.defaultTransformPerspective = 0),
                      (o.defaultSkewType = "compensated"),
                      (o.defaultSmoothOrigin = !0),
                      (c = "px"),
                      (o.suffixMap = { top: c, right: c, bottom: c, left: c, width: c, height: c, fontSize: c, padding: c, margin: c, perspective: c, lineHeight: "" });
                  var u,
                      f,
                      h,
                      d,
                      p,
                      m,
                      g,
                      _,
                      v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                      y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                      b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                      w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                      x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                      T = /(?:\d|\-|\+|=|#|\.)*/g,
                      E = /opacity *= *([^)]*)/i,
                      C = /opacity:([^;]*)/i,
                      k = /alpha\(opacity *=.+?\)/i,
                      A = /^(rgb|hsl)/,
                      O = /([A-Z])/g,
                      S = /-([a-z])/gi,
                      P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                      D = function (e, t) {
                          return t.toUpperCase();
                      },
                      L = /(?:Left|Right|Width)/i,
                      R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                      N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                      j = /,(?=[^\)]*(?:\(|$))/gi,
                      M = /[\s,\(]/i,
                      I = Math.PI / 180,
                      F = 180 / Math.PI,
                      q = {},
                      H = { style: {} },
                      B = _gsScope.document || {
                          createElement: function () {
                              return H;
                          },
                      },
                      z = function (e, t) {
                          var n = B.createElementNS ? B.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : B.createElement(e);
                          return n.style ? n : B.createElement(e);
                      },
                      X = z("div"),
                      W = z("img"),
                      $ = (o._internals = { _specialProps: l }),
                      Y = (_gsScope.navigator || {}).userAgent || "",
                      U = (function () {
                          var e = Y.indexOf("Android"),
                              t = z("a");
                          return (
                              (h = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === e || parseFloat(Y.substr(e + 8, 2)) > 3)),
                              (p = h && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6),
                              (d = -1 !== Y.indexOf("Firefox")),
                              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)),
                              !!t && ((t.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(t.style.opacity))
                          );
                      })(),
                      V = function (e) {
                          return E.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                      },
                      Q = function (e) {
                          _gsScope.console && console.log(e);
                      },
                      G = "",
                      K = "",
                      Z = function (e, t) {
                          var n,
                              i,
                              r = (t = t || X).style;
                          if (void 0 !== r[e]) return e;
                          for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + e]; );
                          return i >= 0 ? ((G = "-" + (K = 3 === i ? "ms" : n[i]).toLowerCase() + "-"), K + e) : null;
                      },
                      J = "undefined" != typeof window ? window : B.defaultView || { getComputedStyle: function () {} },
                      ee = function (e) {
                          return J.getComputedStyle(e);
                      },
                      te = (o.getStyle = function (e, t, n, i, r) {
                          var s;
                          return U || "opacity" !== t
                              ? (!i && e.style[t] ? (s = e.style[t]) : (n = n || ee(e)) ? (s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(O, "-$1").toLowerCase())) : e.currentStyle && (s = e.currentStyle[t]),
                                null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                              : V(e);
                      }),
                      ne = ($.convertToPixels = function (e, n, i, r, s) {
                          if ("px" === r || (!r && "lineHeight" !== n)) return i;
                          if ("auto" === r || !i) return 0;
                          var a,
                              l,
                              c,
                              u = L.test(n),
                              f = e,
                              h = X.style,
                              d = 0 > i,
                              p = 1 === i;
                          if ((d && (i = -i), p && (i *= 100), "lineHeight" !== n || r))
                              if ("%" === r && -1 !== n.indexOf("border")) a = (i / 100) * (u ? e.clientWidth : e.clientHeight);
                              else {
                                  if (((h.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;"), "%" !== r && f.appendChild && "v" !== r.charAt(0) && "rem" !== r))
                                      h[u ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                                  else {
                                      if (((f = e.parentNode || B.body), -1 !== te(f, "display").indexOf("flex") && (h.position = "absolute"), (l = f._gsCache), (c = t.ticker.frame), l && u && l.time === c)) return (l.width * i) / 100;
                                      h[u ? "width" : "height"] = i + r;
                                  }
                                  f.appendChild(X),
                                      (a = parseFloat(X[u ? "offsetWidth" : "offsetHeight"])),
                                      f.removeChild(X),
                                      u && "%" === r && !1 !== o.cacheWidths && (((l = f._gsCache = f._gsCache || {}).time = c), (l.width = (a / i) * 100)),
                                      0 !== a || s || (a = ne(e, n, i, r, !0));
                              }
                          else (l = ee(e).lineHeight), (e.style.lineHeight = i), (a = parseFloat(ee(e).lineHeight)), (e.style.lineHeight = l);
                          return p && (a /= 100), d ? -a : a;
                      }),
                      ie = ($.calculateOffset = function (e, t, n) {
                          if ("absolute" !== te(e, "position", n)) return 0;
                          var i = "left" === t ? "Left" : "Top",
                              r = te(e, "margin" + i, n);
                          return e["offset" + i] - (ne(e, t, parseFloat(r), r.replace(T, "")) || 0);
                      }),
                      re = function (e, t) {
                          var n,
                              i,
                              r,
                              s = {};
                          if ((t = t || ee(e)))
                              if ((n = t.length)) for (; --n > -1; ) (-1 === (r = t[n]).indexOf("-transform") || De === r) && (s[r.replace(S, D)] = t.getPropertyValue(r));
                              else for (n in t) (-1 === n.indexOf("Transform") || Pe === n) && (s[n] = t[n]);
                          else if ((t = e.currentStyle || e.style)) for (n in t) "string" == typeof n && void 0 === s[n] && (s[n.replace(S, D)] = t[n]);
                          return (
                              U || (s.opacity = V(e)),
                              (i = We(e, t, !1)),
                              (s.rotation = i.rotation),
                              (s.skewX = i.skewX),
                              (s.scaleX = i.scaleX),
                              (s.scaleY = i.scaleY),
                              (s.x = i.x),
                              (s.y = i.y),
                              Re && ((s.z = i.z), (s.rotationX = i.rotationX), (s.rotationY = i.rotationY), (s.scaleZ = i.scaleZ)),
                              s.filters && delete s.filters,
                              s
                          );
                      },
                      se = function (e, t, n, i, r) {
                          var s,
                              o,
                              a,
                              l = {},
                              c = e.style;
                          for (o in n)
                              "cssText" !== o &&
                                  "length" !== o &&
                                  isNaN(o) &&
                                  (t[o] !== (s = n[o]) || (r && r[o])) &&
                                  -1 === o.indexOf("Origin") &&
                                  ("number" == typeof s || "string" == typeof s) &&
                                  ((l[o] = "auto" !== s || ("left" !== o && "top" !== o) ? (("" !== s && "auto" !== s && "none" !== s) || "string" != typeof t[o] || "" === t[o].replace(x, "") ? s : 0) : ie(e, o)),
                                  void 0 !== c[o] && (a = new be(c, o, c[o], a)));
                          if (i) for (o in i) "className" !== o && (l[o] = i[o]);
                          return { difs: l, firstMPT: a };
                      },
                      oe = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                      ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                      le = function (e, t, n) {
                          if ("svg" === (e.nodeName + "").toLowerCase()) return (n || ee(e))[t] || 0;
                          if (e.getCTM && Be(e)) return e.getBBox()[t] || 0;
                          var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                              r = oe[t],
                              s = r.length;
                          for (n = n || ee(e); --s > -1; ) (i -= parseFloat(te(e, "padding" + r[s], n, !0)) || 0), (i -= parseFloat(te(e, "border" + r[s] + "Width", n, !0)) || 0);
                          return i;
                      },
                      ce = function (e, t) {
                          if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                          (null == e || "" === e) && (e = "0 0");
                          var n,
                              i = e.split(" "),
                              r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                              s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                          if (i.length > 3 && !t) {
                              for (i = e.split(", ").join(",").split(","), e = [], n = 0; n < i.length; n++) e.push(ce(i[n]));
                              return e.join(",");
                          }
                          return (
                              null == s ? (s = "center" === r ? "50%" : "0") : "center" === s && (s = "50%"),
                              ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                              (e = r + " " + s + (i.length > 2 ? " " + i[2] : "")),
                              t &&
                                  ((t.oxp = -1 !== r.indexOf("%")),
                                  (t.oyp = -1 !== s.indexOf("%")),
                                  (t.oxr = "=" === r.charAt(1)),
                                  (t.oyr = "=" === s.charAt(1)),
                                  (t.ox = parseFloat(r.replace(x, ""))),
                                  (t.oy = parseFloat(s.replace(x, ""))),
                                  (t.v = e)),
                              t || e
                          );
                      },
                      ue = function (e, t) {
                          return "function" == typeof e && (e = e(_, g)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0;
                      },
                      fe = function (e, t) {
                          "function" == typeof e && (e = e(_, g));
                          var n = "string" == typeof e && "=" === e.charAt(1);
                          return (
                              "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (n ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100)),
                              null == e ? t : n ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                          );
                      },
                      he = function (e, t, n, i) {
                          var r, s, o, a, l;
                          return (
                              "function" == typeof e && (e = e(_, g)),
                              null == e
                                  ? (a = t)
                                  : "number" == typeof e
                                  ? (a = e)
                                  : ((r = 360),
                                    (s = e.split("_")),
                                    (o = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : F) - (l ? 0 : t)),
                                    s.length &&
                                        (i && (i[n] = t + o),
                                        -1 !== e.indexOf("short") && (o %= r) != o % 180 && (o = 0 > o ? o + r : o - r),
                                        -1 !== e.indexOf("_cw") && 0 > o ? (o = ((o + 9999999999 * r) % r) - ((o / r) | 0) * r) : -1 !== e.indexOf("ccw") && o > 0 && (o = ((o - 9999999999 * r) % r) - ((o / r) | 0) * r)),
                                    (a = t + o)),
                              1e-6 > a && a > -1e-6 && (a = 0),
                              a
                          );
                      },
                      de = {
                          aqua: [0, 255, 255],
                          lime: [0, 255, 0],
                          silver: [192, 192, 192],
                          black: [0, 0, 0],
                          maroon: [128, 0, 0],
                          teal: [0, 128, 128],
                          blue: [0, 0, 255],
                          navy: [0, 0, 128],
                          white: [255, 255, 255],
                          fuchsia: [255, 0, 255],
                          olive: [128, 128, 0],
                          yellow: [255, 255, 0],
                          orange: [255, 165, 0],
                          gray: [128, 128, 128],
                          purple: [128, 0, 128],
                          green: [0, 128, 0],
                          red: [255, 0, 0],
                          pink: [255, 192, 203],
                          cyan: [0, 255, 255],
                          transparent: [255, 255, 255, 0],
                      },
                      pe = function (e, t, n) {
                          return (255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + (n - t) * e * 6 : 0.5 > e ? n : 2 > 3 * e ? t + (n - t) * (2 / 3 - e) * 6 : t) + 0.5) | 0;
                      },
                      me = (o.parseColor = function (e, t) {
                          var n, i, r, s, o, a, l, c, u, f, h;
                          if (e)
                              if ("number" == typeof e) n = [e >> 16, (e >> 8) & 255, 255 & e];
                              else {
                                  if (("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), de[e])) n = de[e];
                                  else if ("#" === e.charAt(0))
                                      4 === e.length && ((i = e.charAt(1)), (r = e.charAt(2)), (s = e.charAt(3)), (e = "#" + i + i + r + r + s + s)), (n = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & 255, 255 & e]);
                                  else if ("hsl" === e.substr(0, 3))
                                      if (((n = h = e.match(v)), t)) {
                                          if (-1 !== e.indexOf("=")) return e.match(y);
                                      } else
                                          (o = (Number(n[0]) % 360) / 360),
                                              (a = Number(n[1]) / 100),
                                              (i = 2 * (l = Number(n[2]) / 100) - (r = 0.5 >= l ? l * (a + 1) : l + a - l * a)),
                                              n.length > 3 && (n[3] = Number(n[3])),
                                              (n[0] = pe(o + 1 / 3, i, r)),
                                              (n[1] = pe(o, i, r)),
                                              (n[2] = pe(o - 1 / 3, i, r));
                                  else n = e.match(v) || de.transparent;
                                  (n[0] = Number(n[0])), (n[1] = Number(n[1])), (n[2] = Number(n[2])), n.length > 3 && (n[3] = Number(n[3]));
                              }
                          else n = de.black;
                          return (
                              t &&
                                  !h &&
                                  ((i = n[0] / 255),
                                  (r = n[1] / 255),
                                  (s = n[2] / 255),
                                  (l = ((c = Math.max(i, r, s)) + (u = Math.min(i, r, s))) / 2),
                                  c === u ? (o = a = 0) : ((f = c - u), (a = l > 0.5 ? f / (2 - c - u) : f / (c + u)), (o = c === i ? (r - s) / f + (s > r ? 6 : 0) : c === r ? (s - i) / f + 2 : (i - r) / f + 4), (o *= 60)),
                                  (n[0] = (o + 0.5) | 0),
                                  (n[1] = (100 * a + 0.5) | 0),
                                  (n[2] = (100 * l + 0.5) | 0)),
                              n
                          );
                      }),
                      ge = function (e, t) {
                          var n,
                              i,
                              r,
                              s = e.match(_e) || [],
                              o = 0,
                              a = "";
                          if (!s.length) return e;
                          for (n = 0; n < s.length; n++)
                              (i = s[n]),
                                  (o += (r = e.substr(o, e.indexOf(i, o) - o)).length + i.length),
                                  3 === (i = me(i, t)).length && i.push(1),
                                  (a += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")");
                          return a + e.substr(o);
                      },
                      _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                  for (c in de) _e += "|" + c + "\\b";
                  (_e = new RegExp(_e + ")", "gi")),
                      (o.colorStringFilter = function (e) {
                          var t,
                              n = e[0] + " " + e[1];
                          _e.test(n) && ((t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla(")), (e[0] = ge(e[0], t)), (e[1] = ge(e[1], t))), (_e.lastIndex = 0);
                      }),
                      t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
                  var ve = function (e, t, n, i) {
                          if (null == e)
                              return function (e) {
                                  return e;
                              };
                          var r,
                              s = t ? (e.match(_e) || [""])[0] : "",
                              o = e.split(s).join("").match(b) || [],
                              a = e.substr(0, e.indexOf(o[0])),
                              l = ")" === e.charAt(e.length - 1) ? ")" : "",
                              c = -1 !== e.indexOf(" ") ? " " : ",",
                              u = o.length,
                              f = u > 0 ? o[0].replace(v, "") : "";
                          return u
                              ? (r = t
                                    ? function (e) {
                                          var t, h, d, p;
                                          if ("number" == typeof e) e += f;
                                          else if (i && j.test(e)) {
                                              for (p = e.replace(j, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                                              return p.join(",");
                                          }
                                          if (((t = (e.match(_e) || [s])[0]), (d = (h = e.split(t).join("").match(b) || []).length), u > d--)) for (; ++d < u; ) h[d] = n ? h[((d - 1) / 2) | 0] : o[d];
                                          return a + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "");
                                      }
                                    : function (e) {
                                          var t, s, h;
                                          if ("number" == typeof e) e += f;
                                          else if (i && j.test(e)) {
                                              for (s = e.replace(j, "|").split("|"), h = 0; h < s.length; h++) s[h] = r(s[h]);
                                              return s.join(",");
                                          }
                                          if (((h = (t = e.match("," === c ? b : w) || []).length), u > h--)) for (; ++h < u; ) t[h] = n ? t[((h - 1) / 2) | 0] : o[h];
                                          return ((a && "none" !== e && e.substr(0, e.indexOf(t[0]))) || a) + t.join(c) + l;
                                      })
                              : function (e) {
                                    return e;
                                };
                      },
                      ye = function (e) {
                          return (
                              (e = e.split(",")),
                              function (t, n, i, r, s, o, a) {
                                  var l,
                                      c = (n + "").split(" ");
                                  for (a = {}, l = 0; 4 > l; l++) a[e[l]] = c[l] = c[l] || c[((l - 1) / 2) >> 0];
                                  return r.parse(t, a, s, o);
                              }
                          );
                      },
                      be =
                          (($._setPluginRatio = function (e) {
                              this.plugin.setRatio(e);
                              for (var t, n, i, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l; ) (t = a[l.v]), l.r ? (t = l.r(t)) : 1e-6 > t && t > -1e-6 && (t = 0), (l.t[l.p] = t), (l = l._next);
                              if ((o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === e || 0 === e))
                                  for (l = o.firstMPT, s = 1 === e ? "e" : "b"; l; ) {
                                      if ((n = l.t).type) {
                                          if (1 === n.type) {
                                              for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                              n[s] = r;
                                          }
                                      } else n[s] = n.s + n.xs0;
                                      l = l._next;
                                  }
                          }),
                          function (e, t, n, i, r) {
                              (this.t = e), (this.p = t), (this.v = n), (this.r = r), i && ((i._prev = this), (this._next = i));
                          }),
                      we =
                          (($._parseToProxy = function (e, t, n, i, r, s) {
                              var o,
                                  a,
                                  l,
                                  c,
                                  u,
                                  f = i,
                                  h = {},
                                  d = {},
                                  p = n._transform,
                                  m = q;
                              for (n._transform = null, q = t, i = u = n.parse(e, t, i, r), q = m, s && ((n._transform = p), f && ((f._prev = null), f._prev && (f._prev._next = null))); i && i !== f; ) {
                                  if (i.type <= 1 && ((d[(a = i.p)] = i.s + i.c), (h[a] = i.s), s || ((c = new be(i, "s", a, c, i.r)), (i.c = 0)), 1 === i.type))
                                      for (o = i.l; --o > 0; ) (l = "xn" + o), (d[(a = i.p + "_" + l)] = i.data[l]), (h[a] = i[l]), s || (c = new be(i, l, a, c, i.rxp[l]));
                                  i = i._next;
                              }
                              return { proxy: h, end: d, firstMPT: c, pt: u };
                          }),
                          ($.CSSPropTween = function (e, t, i, r, o, a, l, c, u, f, h) {
                              (this.t = e),
                                  (this.p = t),
                                  (this.s = i),
                                  (this.c = r),
                                  (this.n = l || t),
                                  e instanceof we || s.push(this.n),
                                  (this.r = c ? ("function" == typeof c ? c : Math.round) : c),
                                  (this.type = a || 0),
                                  u && ((this.pr = u), (n = !0)),
                                  (this.b = void 0 === f ? i : f),
                                  (this.e = void 0 === h ? i + r : h),
                                  o && ((this._next = o), (o._prev = this));
                          })),
                      xe = function (e, t, n, i, r, s) {
                          var o = new we(e, t, n, i - n, r, -1, s);
                          return (o.b = n), (o.e = o.xs0 = i), o;
                      },
                      Te = (o.parseComplex = function (e, t, n, i, r, s, a, l, c, f) {
                          (n = n || s || ""),
                              "function" == typeof i && (i = i(_, g)),
                              (a = new we(e, t, 0, 0, a, f ? 2 : 1, null, !1, l, n, i)),
                              (i += ""),
                              r && _e.test(i + n) && ((i = [n, i]), o.colorStringFilter(i), (n = i[0]), (i = i[1]));
                          var h,
                              d,
                              p,
                              m,
                              b,
                              w,
                              x,
                              T,
                              E,
                              C,
                              k,
                              A,
                              O,
                              S = n.split(", ").join(",").split(" "),
                              P = i.split(", ").join(",").split(" "),
                              D = S.length,
                              L = !1 !== u;
                          for (
                              (-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) &&
                                  (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl")
                                      ? ((S = S.join(" ").replace(j, ", ").split(" ")), (P = P.join(" ").replace(j, ", ").split(" ")))
                                      : ((S = S.join(" ").split(",").join(", ").split(" ")), (P = P.join(" ").split(",").join(", ").split(" "))),
                                  (D = S.length)),
                                  D !== P.length && (D = (S = (s || "").split(" ")).length),
                                  a.plugin = c,
                                  a.setRatio = f,
                                  _e.lastIndex = 0,
                                  h = 0;
                              D > h;
                              h++
                          )
                              if (((m = S[h]), (b = P[h] + ""), (T = parseFloat(m)) || 0 === T)) a.appendXtra("", T, ue(b, T), b.replace(y, ""), !(!L || -1 === b.indexOf("px")) && Math.round, !0);
                              else if (r && _e.test(m))
                                  (A = ")" + ((A = b.indexOf(")") + 1) ? b.substr(A) : "")),
                                      (O = -1 !== b.indexOf("hsl") && U),
                                      (C = b),
                                      (m = me(m, O)),
                                      (b = me(b, O)),
                                      (E = m.length + b.length > 6) && !U && 0 === b[3]
                                          ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(P[h]).join("transparent")))
                                          : (U || (E = !1),
                                            O
                                                ? a
                                                      .appendXtra(C.substr(0, C.indexOf("hsl")) + (E ? "hsla(" : "hsl("), m[0], ue(b[0], m[0]), ",", !1, !0)
                                                      .appendXtra("", m[1], ue(b[1], m[1]), "%,", !1)
                                                      .appendXtra("", m[2], ue(b[2], m[2]), E ? "%," : "%" + A, !1)
                                                : a
                                                      .appendXtra(C.substr(0, C.indexOf("rgb")) + (E ? "rgba(" : "rgb("), m[0], b[0] - m[0], ",", Math.round, !0)
                                                      .appendXtra("", m[1], b[1] - m[1], ",", Math.round)
                                                      .appendXtra("", m[2], b[2] - m[2], E ? "," : A, Math.round),
                                            E && ((m = m.length < 4 ? 1 : m[3]), a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, A, !1))),
                                      (_e.lastIndex = 0);
                              else if ((w = m.match(v))) {
                                  if (!(x = b.match(y)) || x.length !== w.length) return a;
                                  for (p = 0, d = 0; d < w.length; d++)
                                      (k = w[d]), (C = m.indexOf(k, p)), a.appendXtra(m.substr(p, C - p), Number(k), ue(x[d], k), "", !(!L || "px" !== m.substr(C + k.length, 2)) && Math.round, 0 === d), (p = C + k.length);
                                  a["xs" + a.l] += m.substr(p);
                              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                          if (-1 !== i.indexOf("=") && a.data) {
                              for (A = a.xs0 + a.data.s, h = 1; h < a.l; h++) A += a["xs" + h] + a.data["xn" + h];
                              a.e = A + a["xs" + h];
                          }
                          return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                      }),
                      Ee = 9;
                  for ((c = we.prototype).l = c.pr = 0; --Ee > 0; ) (c["xn" + Ee] = 0), (c["xs" + Ee] = "");
                  (c.xs0 = ""),
                      (c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null),
                      (c.appendXtra = function (e, t, n, i, r, s) {
                          var o = this,
                              a = o.l;
                          return (
                              (o["xs" + a] += s && (a || o["xs" + a]) ? " " + e : e || ""),
                              n || 0 === a || o.plugin
                                  ? (o.l++,
                                    (o.type = o.setRatio ? 2 : 1),
                                    (o["xs" + o.l] = i || ""),
                                    a > 0
                                        ? ((o.data["xn" + a] = t + n), (o.rxp["xn" + a] = r), (o["xn" + a] = t), o.plugin || ((o.xfirst = new we(o, "xn" + a, t, n, o.xfirst || o, 0, o.n, r, o.pr)), (o.xfirst.xs0 = 0)), o)
                                        : ((o.data = { s: t + n }), (o.rxp = {}), (o.s = t), (o.c = n), (o.r = r), o))
                                  : ((o["xs" + a] += t + (i || "")), o)
                          );
                      });
                  var Ce = function (e, t) {
                          (t = t || {}),
                              (this.p = (t.prefix && Z(e)) || e),
                              (l[e] = l[this.p] = this),
                              (this.format = t.formatter || ve(t.defaultValue, t.color, t.collapsible, t.multi)),
                              t.parser && (this.parse = t.parser),
                              (this.clrs = t.color),
                              (this.multi = t.multi),
                              (this.keyword = t.keyword),
                              (this.dflt = t.defaultValue),
                              (this.allowFunc = t.allowFunc),
                              (this.pr = t.priority || 0);
                      },
                      ke = ($._registerComplexSpecialProp = function (e, t, n) {
                          "object" != typeof t && (t = { parser: n });
                          var i,
                              r = e.split(","),
                              s = t.defaultValue;
                          for (n = n || [s], i = 0; i < r.length; i++) (t.prefix = 0 === i && t.prefix), (t.defaultValue = n[i] || s), new Ce(r[i], t);
                      }),
                      Ae = ($._registerPluginProp = function (e) {
                          if (!l[e]) {
                              var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                              ke(e, {
                                  parser: function (e, n, i, r, s, o, c) {
                                      var u = a.com.greensock.plugins[t];
                                      return u ? (u._cssRegister(), l[i].parse(e, n, i, r, s, o, c)) : (Q("Error: " + t + " js file not loaded."), s);
                                  },
                              });
                          }
                      });
                  ((c = Ce.prototype).parseComplex = function (e, t, n, i, r, s) {
                      var o,
                          a,
                          l,
                          c,
                          u,
                          f,
                          h = this.keyword;
                      if ((this.multi && (j.test(n) || j.test(t) ? ((a = t.replace(j, "|").split("|")), (l = n.replace(j, "|").split("|"))) : h && ((a = [t]), (l = [n]))), l)) {
                          for (c = l.length > a.length ? l.length : a.length, o = 0; c > o; o++)
                              (t = a[o] = a[o] || this.dflt), (n = l[o] = l[o] || this.dflt), h && (u = t.indexOf(h)) !== (f = n.indexOf(h)) && (-1 === f ? (a[o] = a[o].split(h).join("")) : -1 === u && (a[o] += " " + h));
                          (t = a.join(", ")), (n = l.join(", "));
                      }
                      return Te(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, s);
                  }),
                      (c.parse = function (e, t, n, i, s, o, a) {
                          return this.parseComplex(e.style, this.format(te(e, this.p, r, !1, this.dflt)), this.format(t), s, o);
                      }),
                      (o.registerSpecialProp = function (e, t, n) {
                          ke(e, {
                              parser: function (e, i, r, s, o, a, l) {
                                  var c = new we(e, r, 0, 0, o, 2, r, !1, n);
                                  return (c.plugin = a), (c.setRatio = t(e, i, s._tween, r)), c;
                              },
                              priority: n,
                          });
                      }),
                      (o.useSVGTransformAttr = !0);
                  var Oe,
                      Se = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                      Pe = Z("transform"),
                      De = G + "transform",
                      Le = Z("transformOrigin"),
                      Re = null !== Z("perspective"),
                      Ne = ($.Transform = function () {
                          (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = !(!1 === o.defaultForce3D || !Re) && (o.defaultForce3D || "auto"));
                      }),
                      je = _gsScope.SVGElement,
                      Me = function (e, t, n) {
                          var i,
                              r = B.createElementNS("http://www.w3.org/2000/svg", e),
                              s = /([a-z])([A-Z])/g;
                          for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
                          return t.appendChild(r), r;
                      },
                      Ie = B.documentElement || {},
                      Fe = (function () {
                          var e,
                              t,
                              n,
                              i = m || (/Android/i.test(Y) && !_gsScope.chrome);
                          return (
                              B.createElementNS &&
                                  Ie.appendChild &&
                                  !i &&
                                  ((e = Me("svg", Ie)),
                                  (n = (t = Me("rect", e, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                                  (t.style[Le] = "50% 50%"),
                                  (t.style[Pe] = "scaleX(0.5)"),
                                  (i = n === t.getBoundingClientRect().width && !(d && Re)),
                                  Ie.removeChild(e)),
                              i
                          );
                      })(),
                      qe = function (e, t, n, i, r, s) {
                          var a,
                              l,
                              c,
                              u,
                              f,
                              h,
                              d,
                              p,
                              m,
                              g,
                              _,
                              v,
                              y,
                              b,
                              w = e._gsTransform,
                              x = Xe(e, !0);
                          w && ((y = w.xOrigin), (b = w.yOrigin)),
                              (!i || (a = i.split(" ")).length < 2) &&
                                  (0 === (d = e.getBBox()).x &&
                                      0 === d.y &&
                                      d.width + d.height === 0 &&
                                      (d = {
                                          x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                                          y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                                          width: 0,
                                          height: 0,
                                      }),
                                  (a = [
                                      (-1 !== (t = ce(t).split(" "))[0].indexOf("%") ? (parseFloat(t[0]) / 100) * d.width : parseFloat(t[0])) + d.x,
                                      (-1 !== t[1].indexOf("%") ? (parseFloat(t[1]) / 100) * d.height : parseFloat(t[1])) + d.y,
                                  ])),
                              (n.xOrigin = u = parseFloat(a[0])),
                              (n.yOrigin = f = parseFloat(a[1])),
                              i &&
                                  x !== ze &&
                                  ((h = x[0]),
                                  (d = x[1]),
                                  (p = x[2]),
                                  (m = x[3]),
                                  (g = x[4]),
                                  (_ = x[5]),
                                  (v = h * m - d * p) && ((l = u * (m / v) + f * (-p / v) + (p * _ - m * g) / v), (c = u * (-d / v) + f * (h / v) - (h * _ - d * g) / v), (u = n.xOrigin = a[0] = l), (f = n.yOrigin = a[1] = c))),
                              w &&
                                  (s && ((n.xOffset = w.xOffset), (n.yOffset = w.yOffset), (w = n)),
                                  r || (!1 !== r && !1 !== o.defaultSmoothOrigin) ? ((l = u - y), (c = f - b), (w.xOffset += l * x[0] + c * x[2] - l), (w.yOffset += l * x[1] + c * x[3] - c)) : (w.xOffset = w.yOffset = 0)),
                              s || e.setAttribute("data-svg-origin", a.join(" "));
                      },
                      He = function (e) {
                          var t,
                              n = z("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                              i = this.parentNode,
                              r = this.nextSibling,
                              s = this.style.cssText;
                          if ((Ie.appendChild(n), n.appendChild(this), (this.style.display = "block"), e))
                              try {
                                  (t = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = He);
                              } catch (e) {}
                          else this._originalGetBBox && (t = this._originalGetBBox());
                          return r ? i.insertBefore(this, r) : i.appendChild(this), Ie.removeChild(n), (this.style.cssText = s), t;
                      },
                      Be = function (e) {
                          return !(
                              !je ||
                              !e.getCTM ||
                              (e.parentNode && !e.ownerSVGElement) ||
                              !(function (e) {
                                  try {
                                      return e.getBBox();
                                  } catch (t) {
                                      return He.call(e, !0);
                                  }
                              })(e)
                          );
                      },
                      ze = [1, 0, 0, 1, 0, 0],
                      Xe = function (e, t) {
                          var n,
                              i,
                              r,
                              s,
                              o,
                              a,
                              l,
                              c = e._gsTransform || new Ne(),
                              u = e.style;
                          if (
                              (Pe
                                  ? (i = te(e, De, null, !0))
                                  : e.currentStyle && (i = (i = e.currentStyle.filter.match(R)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), c.x || 0, c.y || 0].join(",") : ""),
                              (n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                              Pe &&
                                  n &&
                                  !e.offsetParent &&
                                  e !== Ie &&
                                  ((s = u.display),
                                  (u.display = "block"),
                                  ((l = e.parentNode) && e.offsetParent) || ((o = 1), (a = e.nextSibling), Ie.appendChild(e)),
                                  (n = !(i = te(e, De, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                                  s ? (u.display = s) : Ve(u, "display"),
                                  o && (a ? l.insertBefore(e, a) : l ? l.appendChild(e) : Ie.removeChild(e))),
                              (c.svg || (e.getCTM && Be(e))) &&
                                  (n && -1 !== (u[Pe] + "").indexOf("matrix") && ((i = u[Pe]), (n = 0)),
                                  (r = e.getAttribute("transform")),
                                  n && r && ((i = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")"), (n = 0))),
                              n)
                          )
                              return ze;
                          for (r = (i || "").match(v) || [], Ee = r.length; --Ee > -1; ) (s = Number(r[Ee])), (r[Ee] = (o = s - (s |= 0)) ? ((1e5 * o + (0 > o ? -0.5 : 0.5)) | 0) / 1e5 + s : s);
                          return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
                      },
                      We = ($.getTransform = function (e, n, i, r) {
                          if (e._gsTransform && i && !r) return e._gsTransform;
                          var s,
                              a,
                              l,
                              c,
                              u,
                              f,
                              h = (i && e._gsTransform) || new Ne(),
                              d = h.scaleX < 0,
                              p = 2e-5,
                              m = 1e5,
                              g = (Re && (parseFloat(te(e, Le, n, !1, "0 0 0").split(" ")[2]) || h.zOrigin)) || 0,
                              _ = parseFloat(o.defaultTransformPerspective) || 0;
                          if (((h.svg = !(!e.getCTM || !Be(e))), h.svg && (qe(e, te(e, Le, n, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), (Oe = o.useSVGTransformAttr || Fe)), (s = Xe(e)) !== ze)) {
                              if (16 === s.length) {
                                  var v,
                                      y,
                                      b,
                                      w,
                                      x,
                                      T = s[0],
                                      E = s[1],
                                      C = s[2],
                                      k = s[3],
                                      A = s[4],
                                      O = s[5],
                                      S = s[6],
                                      P = s[7],
                                      D = s[8],
                                      L = s[9],
                                      R = s[10],
                                      N = s[12],
                                      j = s[13],
                                      M = s[14],
                                      I = s[11],
                                      q = Math.atan2(S, R);
                                  h.zOrigin && ((N = D * (M = -h.zOrigin) - s[12]), (j = L * M - s[13]), (M = R * M + h.zOrigin - s[14])),
                                      (h.rotationX = q * F),
                                      q &&
                                          ((v = A * (w = Math.cos(-q)) + D * (x = Math.sin(-q))),
                                          (y = O * w + L * x),
                                          (b = S * w + R * x),
                                          (D = A * -x + D * w),
                                          (L = O * -x + L * w),
                                          (R = S * -x + R * w),
                                          (I = P * -x + I * w),
                                          (A = v),
                                          (O = y),
                                          (S = b)),
                                      (q = Math.atan2(-C, R)),
                                      (h.rotationY = q * F),
                                      q && ((y = E * (w = Math.cos(-q)) - L * (x = Math.sin(-q))), (b = C * w - R * x), (L = E * x + L * w), (R = C * x + R * w), (I = k * x + I * w), (T = v = T * w - D * x), (E = y), (C = b)),
                                      (q = Math.atan2(E, T)),
                                      (h.rotation = q * F),
                                      q && ((v = T * (w = Math.cos(q)) + E * (x = Math.sin(q))), (y = A * w + O * x), (b = D * w + L * x), (E = E * w - T * x), (O = O * w - A * x), (L = L * w - D * x), (T = v), (A = y), (D = b)),
                                      h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && ((h.rotationX = h.rotation = 0), (h.rotationY = 180 - h.rotationY)),
                                      (q = Math.atan2(A, O)),
                                      (h.scaleX = ((Math.sqrt(T * T + E * E + C * C) * m + 0.5) | 0) / m),
                                      (h.scaleY = ((Math.sqrt(O * O + S * S) * m + 0.5) | 0) / m),
                                      (h.scaleZ = ((Math.sqrt(D * D + L * L + R * R) * m + 0.5) | 0) / m),
                                      (T /= h.scaleX),
                                      (A /= h.scaleY),
                                      (E /= h.scaleX),
                                      (O /= h.scaleY),
                                      Math.abs(q) > p ? ((h.skewX = q * F), (A = 0), "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(q))) : (h.skewX = 0),
                                      (h.perspective = I ? 1 / (0 > I ? -I : I) : 0),
                                      (h.x = N),
                                      (h.y = j),
                                      (h.z = M),
                                      h.svg && ((h.x -= h.xOrigin - (h.xOrigin * T - h.yOrigin * A)), (h.y -= h.yOrigin - (h.yOrigin * E - h.xOrigin * O)));
                              } else if (!Re || r || !s.length || h.x !== s[4] || h.y !== s[5] || (!h.rotationX && !h.rotationY)) {
                                  var H = s.length >= 6,
                                      B = H ? s[0] : 1,
                                      z = s[1] || 0,
                                      X = s[2] || 0,
                                      W = H ? s[3] : 1;
                                  (h.x = s[4] || 0),
                                      (h.y = s[5] || 0),
                                      (l = Math.sqrt(B * B + z * z)),
                                      (c = Math.sqrt(W * W + X * X)),
                                      (u = B || z ? Math.atan2(z, B) * F : h.rotation || 0),
                                      (f = X || W ? Math.atan2(X, W) * F + u : h.skewX || 0),
                                      (h.scaleX = l),
                                      (h.scaleY = c),
                                      (h.rotation = u),
                                      (h.skewX = f),
                                      Re && ((h.rotationX = h.rotationY = h.z = 0), (h.perspective = _), (h.scaleZ = 1)),
                                      h.svg && ((h.x -= h.xOrigin - (h.xOrigin * B + h.yOrigin * X)), (h.y -= h.yOrigin - (h.xOrigin * z + h.yOrigin * W)));
                              }
                              for (a in (Math.abs(h.skewX) > 90 &&
                                  Math.abs(h.skewX) < 270 &&
                                  (d ? ((h.scaleX *= -1), (h.skewX += h.rotation <= 0 ? 180 : -180), (h.rotation += h.rotation <= 0 ? 180 : -180)) : ((h.scaleY *= -1), (h.skewX += h.skewX <= 0 ? 180 : -180))),
                              (h.zOrigin = g),
                              h))
                                  h[a] < p && h[a] > -p && (h[a] = 0);
                          }
                          return (
                              i &&
                                  ((e._gsTransform = h),
                                  h.svg &&
                                      (Oe && e.style[Pe]
                                          ? t.delayedCall(0.001, function () {
                                                Ve(e.style, Pe);
                                            })
                                          : !Oe &&
                                            e.getAttribute("transform") &&
                                            t.delayedCall(0.001, function () {
                                                e.removeAttribute("transform");
                                            }))),
                              h
                          );
                      }),
                      $e = function (e) {
                          var t,
                              n,
                              i = this.data,
                              r = -i.rotation * I,
                              s = r + i.skewX * I,
                              o = 1e5,
                              a = ((Math.cos(r) * i.scaleX * o) | 0) / o,
                              l = ((Math.sin(r) * i.scaleX * o) | 0) / o,
                              c = ((Math.sin(s) * -i.scaleY * o) | 0) / o,
                              u = ((Math.cos(s) * i.scaleY * o) | 0) / o,
                              f = this.t.style,
                              h = this.t.currentStyle;
                          if (h) {
                              (n = l), (l = -c), (c = -n), (t = h.filter), (f.filter = "");
                              var d,
                                  p,
                                  g = this.t.offsetWidth,
                                  _ = this.t.offsetHeight,
                                  v = "absolute" !== h.position,
                                  y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                  b = i.x + (g * i.xPercent) / 100,
                                  w = i.y + (_ * i.yPercent) / 100;
                              if (
                                  (null != i.ox && ((b += (d = (i.oxp ? g * i.ox * 0.01 : i.ox) - g / 2) - (d * a + (p = (i.oyp ? _ * i.oy * 0.01 : i.oy) - _ / 2) * l)), (w += p - (d * c + p * u))),
                                  (y += v ? ", Dx=" + ((d = g / 2) - (d * a + (p = _ / 2) * l) + b) + ", Dy=" + (p - (d * c + p * u) + w) + ")" : ", sizingMethod='auto expand')"),
                                  -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? (f.filter = t.replace(N, y)) : (f.filter = y + " " + t),
                                  (0 === e || 1 === e) &&
                                      1 === a &&
                                      0 === l &&
                                      0 === c &&
                                      1 === u &&
                                      ((v && -1 === y.indexOf("Dx=0, Dy=0")) || (E.test(t) && 100 !== parseFloat(RegExp.$1)) || (-1 === t.indexOf(t.indexOf("Alpha")) && f.removeAttribute("filter"))),
                                  !v)
                              ) {
                                  var x,
                                      C,
                                      k,
                                      A = 8 > m ? 1 : -1;
                                  for (
                                      d = i.ieOffsetX || 0,
                                          p = i.ieOffsetY || 0,
                                          i.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + b),
                                          i.ieOffsetY = Math.round((_ - ((0 > u ? -u : u) * _ + (0 > c ? -c : c) * g)) / 2 + w),
                                          Ee = 0;
                                      4 > Ee;
                                      Ee++
                                  )
                                      (k =
                                          (n = -1 !== (x = h[(C = ae[Ee])]).indexOf("px") ? parseFloat(x) : ne(this.t, C, parseFloat(x), x.replace(T, "")) || 0) !== i[C]
                                              ? 2 > Ee
                                                  ? -i.ieOffsetX
                                                  : -i.ieOffsetY
                                              : 2 > Ee
                                              ? d - i.ieOffsetX
                                              : p - i.ieOffsetY),
                                          (f[C] = (i[C] = Math.round(n - k * (0 === Ee || 2 === Ee ? 1 : A))) + "px");
                              }
                          }
                      },
                      Ye = ($.set3DTransformRatio = $.setTransformRatio = function (e) {
                          var t,
                              n,
                              i,
                              r,
                              s,
                              o,
                              a,
                              l,
                              c,
                              u,
                              f,
                              h,
                              p,
                              m,
                              g,
                              _,
                              v,
                              y,
                              b,
                              w,
                              x,
                              T,
                              E,
                              C = this.data,
                              k = this.t.style,
                              A = C.rotation,
                              O = C.rotationX,
                              S = C.rotationY,
                              P = C.scaleX,
                              D = C.scaleY,
                              L = C.scaleZ,
                              R = C.x,
                              N = C.y,
                              j = C.z,
                              M = C.svg,
                              F = C.perspective,
                              q = C.force3D,
                              H = C.skewY,
                              B = C.skewX;
                          if (
                              (H && ((B += H), (A += H)),
                              !((((1 !== e && 0 !== e) || "auto" !== q || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && q) || j || F || S || O || 1 !== L) || (Oe && M) || !Re)
                          )
                              A || B || M
                                  ? ((A *= I),
                                    (T = B * I),
                                    (E = 1e5),
                                    (n = Math.cos(A) * P),
                                    (s = Math.sin(A) * P),
                                    (i = Math.sin(A - T) * -D),
                                    (o = Math.cos(A - T) * D),
                                    T && "simple" === C.skewType && ((t = Math.tan(T - H * I)), (i *= t = Math.sqrt(1 + t * t)), (o *= t), H && ((t = Math.tan(H * I)), (n *= t = Math.sqrt(1 + t * t)), (s *= t))),
                                    M &&
                                        ((R += C.xOrigin - (C.xOrigin * n + C.yOrigin * i) + C.xOffset),
                                        (N += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset),
                                        Oe && (C.xPercent || C.yPercent) && ((g = this.t.getBBox()), (R += 0.01 * C.xPercent * g.width), (N += 0.01 * C.yPercent * g.height)),
                                        (g = 1e-6) > R && R > -g && (R = 0),
                                        g > N && N > -g && (N = 0)),
                                    (b = ((n * E) | 0) / E + "," + ((s * E) | 0) / E + "," + ((i * E) | 0) / E + "," + ((o * E) | 0) / E + "," + R + "," + N + ")"),
                                    M && Oe ? this.t.setAttribute("transform", "matrix(" + b) : (k[Pe] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b))
                                  : (k[Pe] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + D + "," + R + "," + N + ")");
                          else {
                              if ((d && ((g = 1e-4) > P && P > -g && (P = L = 2e-5), g > D && D > -g && (D = L = 2e-5), !F || C.z || C.rotationX || C.rotationY || (F = 0)), A || B))
                                  (A *= I),
                                      (_ = n = Math.cos(A)),
                                      (v = s = Math.sin(A)),
                                      B &&
                                          ((A -= B * I),
                                          (_ = Math.cos(A)),
                                          (v = Math.sin(A)),
                                          "simple" === C.skewType && ((t = Math.tan((B - H) * I)), (_ *= t = Math.sqrt(1 + t * t)), (v *= t), C.skewY && ((t = Math.tan(H * I)), (n *= t = Math.sqrt(1 + t * t)), (s *= t)))),
                                      (i = -v),
                                      (o = _);
                              else {
                                  if (!(S || O || 1 !== L || F || M))
                                      return void (k[Pe] =
                                          (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") +
                                          R +
                                          "px," +
                                          N +
                                          "px," +
                                          j +
                                          "px)" +
                                          (1 !== P || 1 !== D ? " scale(" + P + "," + D + ")" : ""));
                                  (n = o = 1), (i = s = 0);
                              }
                              (u = 1),
                                  (r = a = l = c = f = h = 0),
                                  (p = F ? -1 / F : 0),
                                  (m = C.zOrigin),
                                  (g = 1e-6),
                                  (w = ","),
                                  (x = "0"),
                                  (A = S * I) && ((_ = Math.cos(A)), (l = -(v = Math.sin(A))), (f = p * -v), (r = n * v), (a = s * v), (u = _), (p *= _), (n *= _), (s *= _)),
                                  (A = O * I) && ((t = i * (_ = Math.cos(A)) + r * (v = Math.sin(A))), (y = o * _ + a * v), (c = u * v), (h = p * v), (r = i * -v + r * _), (a = o * -v + a * _), (u *= _), (p *= _), (i = t), (o = y)),
                                  1 !== L && ((r *= L), (a *= L), (u *= L), (p *= L)),
                                  1 !== D && ((i *= D), (o *= D), (c *= D), (h *= D)),
                                  1 !== P && ((n *= P), (s *= P), (l *= P), (f *= P)),
                                  (m || M) &&
                                      (m && ((R += r * -m), (N += a * -m), (j += u * -m + m)),
                                      M && ((R += C.xOrigin - (C.xOrigin * n + C.yOrigin * i) + C.xOffset), (N += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset)),
                                      g > R && R > -g && (R = x),
                                      g > N && N > -g && (N = x),
                                      g > j && j > -g && (j = 0)),
                                  (b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d("),
                                  (b += (g > n && n > -g ? x : n) + w + (g > s && s > -g ? x : s) + w + (g > l && l > -g ? x : l)),
                                  (b += w + (g > f && f > -g ? x : f) + w + (g > i && i > -g ? x : i) + w + (g > o && o > -g ? x : o)),
                                  O || S || 1 !== L
                                      ? ((b += w + (g > c && c > -g ? x : c) + w + (g > h && h > -g ? x : h) + w + (g > r && r > -g ? x : r)),
                                        (b += w + (g > a && a > -g ? x : a) + w + (g > u && u > -g ? x : u) + w + (g > p && p > -g ? x : p) + w))
                                      : (b += ",0,0,0,0,1,0,"),
                                  (b += R + w + N + w + j + w + (F ? 1 + -j / F : 1) + ")"),
                                  (k[Pe] = b);
                          }
                      });
                  ((c = Ne.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0),
                      (c.scaleX = c.scaleY = c.scaleZ = 1),
                      ke(
                          "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                          {
                              parser: function (e, t, n, i, s, a, l) {
                                  if (i._lastParsedTransform === l) return s;
                                  i._lastParsedTransform = l;
                                  var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                  c && (l.scale = c(_, e));
                                  var u,
                                      f,
                                      h,
                                      d,
                                      p,
                                      m,
                                      v,
                                      y,
                                      b,
                                      w = e._gsTransform,
                                      x = e.style,
                                      T = Se.length,
                                      E = l,
                                      C = {},
                                      k = "transformOrigin",
                                      A = We(e, r, !0, E.parseTransform),
                                      O = E.transform && ("function" == typeof E.transform ? E.transform(_, g) : E.transform);
                                  if (((A.skewType = E.skewType || A.skewType || o.defaultSkewType), (i._transform = A), "rotationZ" in E && (E.rotation = E.rotationZ), O && "string" == typeof O && Pe))
                                      ((f = X.style)[Pe] = O),
                                          (f.display = "block"),
                                          (f.position = "absolute"),
                                          -1 !== O.indexOf("%") && ((f.width = te(e, "width")), (f.height = te(e, "height"))),
                                          B.body.appendChild(X),
                                          (u = We(X, null, !1)),
                                          "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * I)),
                                          A.svg &&
                                              ((m = A.xOrigin),
                                              (v = A.yOrigin),
                                              (u.x -= A.xOffset),
                                              (u.y -= A.yOffset),
                                              (E.transformOrigin || E.svgOrigin) &&
                                                  ((O = {}), qe(e, ce(E.transformOrigin), O, E.svgOrigin, E.smoothOrigin, !0), (m = O.xOrigin), (v = O.yOrigin), (u.x -= O.xOffset - A.xOffset), (u.y -= O.yOffset - A.yOffset)),
                                              (m || v) && ((y = Xe(X, !0)), (u.x -= m - (m * y[0] + v * y[2])), (u.y -= v - (m * y[1] + v * y[3])))),
                                          B.body.removeChild(X),
                                          u.perspective || (u.perspective = A.perspective),
                                          null != E.xPercent && (u.xPercent = fe(E.xPercent, A.xPercent)),
                                          null != E.yPercent && (u.yPercent = fe(E.yPercent, A.yPercent));
                                  else if ("object" == typeof E) {
                                      if (
                                          ((u = {
                                              scaleX: fe(null != E.scaleX ? E.scaleX : E.scale, A.scaleX),
                                              scaleY: fe(null != E.scaleY ? E.scaleY : E.scale, A.scaleY),
                                              scaleZ: fe(E.scaleZ, A.scaleZ),
                                              x: fe(E.x, A.x),
                                              y: fe(E.y, A.y),
                                              z: fe(E.z, A.z),
                                              xPercent: fe(E.xPercent, A.xPercent),
                                              yPercent: fe(E.yPercent, A.yPercent),
                                              perspective: fe(E.transformPerspective, A.perspective),
                                          }),
                                          null != (p = E.directionalRotation))
                                      )
                                          if ("object" == typeof p) for (f in p) E[f] = p[f];
                                          else E.rotation = p;
                                      "string" == typeof E.x && -1 !== E.x.indexOf("%") && ((u.x = 0), (u.xPercent = fe(E.x, A.xPercent))),
                                          "string" == typeof E.y && -1 !== E.y.indexOf("%") && ((u.y = 0), (u.yPercent = fe(E.y, A.yPercent))),
                                          (u.rotation = he("rotation" in E ? E.rotation : "shortRotation" in E ? E.shortRotation + "_short" : A.rotation, A.rotation, "rotation", C)),
                                          Re &&
                                              ((u.rotationX = he("rotationX" in E ? E.rotationX : "shortRotationX" in E ? E.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", C)),
                                              (u.rotationY = he("rotationY" in E ? E.rotationY : "shortRotationY" in E ? E.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", C))),
                                          (u.skewX = he(E.skewX, A.skewX)),
                                          (u.skewY = he(E.skewY, A.skewY));
                                  }
                                  for (
                                      Re && null != E.force3D && ((A.force3D = E.force3D), (d = !0)),
                                          (h = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == E.scale || (u.scaleZ = 1);
                                      --T > -1;

                                  )
                                      ((O = u[(b = Se[T])] - A[b]) > 1e-6 || -1e-6 > O || null != E[b] || null != q[b]) &&
                                          ((d = !0), (s = new we(A, b, A[b], O, s)), b in C && (s.e = C[b]), (s.xs0 = 0), (s.plugin = a), i._overwriteProps.push(s.n));
                                  return (
                                      (O = "function" == typeof E.transformOrigin ? E.transformOrigin(_, g) : E.transformOrigin),
                                      A.svg &&
                                          (O || E.svgOrigin) &&
                                          ((m = A.xOffset),
                                          (v = A.yOffset),
                                          qe(e, ce(O), u, E.svgOrigin, E.smoothOrigin),
                                          (s = xe(A, "xOrigin", (w ? A : u).xOrigin, u.xOrigin, s, k)),
                                          (s = xe(A, "yOrigin", (w ? A : u).yOrigin, u.yOrigin, s, k)),
                                          (m !== A.xOffset || v !== A.yOffset) && ((s = xe(A, "xOffset", w ? m : A.xOffset, A.xOffset, s, k)), (s = xe(A, "yOffset", w ? v : A.yOffset, A.yOffset, s, k))),
                                          (O = "0px 0px")),
                                      (O || (Re && h && A.zOrigin)) &&
                                          (Pe
                                              ? ((d = !0),
                                                (b = Le),
                                                O || (O = (O = (te(e, b, r, !1, "50% 50%") + "").split(" "))[0] + " " + O[1] + " " + A.zOrigin + "px"),
                                                (O += ""),
                                                ((s = new we(x, b, 0, 0, s, -1, k)).b = x[b]),
                                                (s.plugin = a),
                                                Re
                                                    ? ((f = A.zOrigin),
                                                      (O = O.split(" ")),
                                                      (A.zOrigin = (O.length > 2 ? parseFloat(O[2]) : f) || 0),
                                                      (s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px"),
                                                      ((s = new we(A, "zOrigin", 0, 0, s, -1, s.n)).b = f),
                                                      (s.xs0 = s.e = A.zOrigin))
                                                    : (s.xs0 = s.e = O))
                                              : ce(O + "", A)),
                                      d && (i._transformType = (A.svg && Oe) || (!h && 3 !== this._transformType) ? 2 : 3),
                                      c && (l.scale = c),
                                      s
                                  );
                              },
                              allowFunc: !0,
                              prefix: !0,
                          }
                      ),
                      ke("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                      ke("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: ve("inset(0% 0% 0% 0%)", !1, !0) }),
                      ke("borderRadius", {
                          defaultValue: "0px",
                          parser: function (e, t, n, s, o, a) {
                              t = this.format(t);
                              var l,
                                  c,
                                  u,
                                  f,
                                  h,
                                  d,
                                  p,
                                  m,
                                  g,
                                  _,
                                  v,
                                  y,
                                  b,
                                  w,
                                  x,
                                  T,
                                  E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                  C = e.style;
                              for (g = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < E.length; c++)
                                  this.p.indexOf("border") && (E[c] = Z(E[c])),
                                      -1 !== (h = f = te(e, E[c], r, !1, "0px")).indexOf(" ") && ((f = h.split(" ")), (h = f[0]), (f = f[1])),
                                      (d = u = l[c]),
                                      (p = parseFloat(h)),
                                      (y = h.substr((p + "").length)),
                                      (b = "=" === d.charAt(1))
                                          ? ((m = parseInt(d.charAt(0) + "1", 10)), (d = d.substr(2)), (m *= parseFloat(d)), (v = d.substr((m + "").length - (0 > m ? 1 : 0)) || ""))
                                          : ((m = parseFloat(d)), (v = d.substr((m + "").length))),
                                      "" === v && (v = i[n] || y),
                                      v !== y &&
                                          ((w = ne(e, "borderLeft", p, y)),
                                          (x = ne(e, "borderTop", p, y)),
                                          "%" === v ? ((h = (w / g) * 100 + "%"), (f = (x / _) * 100 + "%")) : "em" === v ? ((h = w / (T = ne(e, "borderLeft", 1, "em")) + "em"), (f = x / T + "em")) : ((h = w + "px"), (f = x + "px")),
                                          b && ((d = parseFloat(h) + m + v), (u = parseFloat(f) + m + v))),
                                      (o = Te(C, E[c], h + " " + f, d + " " + u, !1, "0px", o));
                              return o;
                          },
                          prefix: !0,
                          formatter: ve("0px 0px 0px 0px", !1, !0),
                      }),
                      ke("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                          defaultValue: "0px",
                          parser: function (e, t, n, i, s, o) {
                              return Te(e.style, n, this.format(te(e, n, r, !1, "0px 0px")), this.format(t), !1, "0px", s);
                          },
                          prefix: !0,
                          formatter: ve("0px 0px", !1, !0),
                      }),
                      ke("backgroundPosition", {
                          defaultValue: "0 0",
                          parser: function (e, t, n, i, s, o) {
                              var a,
                                  l,
                                  c,
                                  u,
                                  f,
                                  h,
                                  d = "background-position",
                                  p = r || ee(e),
                                  g = this.format(
                                      (p ? (m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d)) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"
                                  ),
                                  _ = this.format(t);
                              if ((-1 !== g.indexOf("%")) != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (h = te(e, "backgroundImage").replace(P, "")) && "none" !== h) {
                                  for (a = g.split(" "), l = _.split(" "), W.setAttribute("src", h), c = 2; --c > -1; )
                                      (u = -1 !== (g = a[c]).indexOf("%")) != (-1 !== l[c].indexOf("%")) &&
                                          ((f = 0 === c ? e.offsetWidth - W.width : e.offsetHeight - W.height), (a[c] = u ? (parseFloat(g) / 100) * f + "px" : (parseFloat(g) / f) * 100 + "%"));
                                  g = a.join(" ");
                              }
                              return this.parseComplex(e.style, g, _, s, o);
                          },
                          formatter: ce,
                      }),
                      ke("backgroundSize", {
                          defaultValue: "0 0",
                          formatter: function (e) {
                              return "co" === (e += "").substr(0, 2) ? e : ce(-1 === e.indexOf(" ") ? e + " " + e : e);
                          },
                      }),
                      ke("perspective", { defaultValue: "0px", prefix: !0 }),
                      ke("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                      ke("transformStyle", { prefix: !0 }),
                      ke("backfaceVisibility", { prefix: !0 }),
                      ke("userSelect", { prefix: !0 }),
                      ke("margin", { parser: ye("marginTop,marginRight,marginBottom,marginLeft") }),
                      ke("padding", { parser: ye("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                      ke("clip", {
                          defaultValue: "rect(0px,0px,0px,0px)",
                          parser: function (e, t, n, i, s, o) {
                              var a, l, c;
                              return (
                                  9 > m
                                      ? ((l = e.currentStyle), (c = 8 > m ? " " : ","), (a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")"), (t = this.format(t).split(",").join(c)))
                                      : ((a = this.format(te(e, this.p, r, !1, this.dflt))), (t = this.format(t))),
                                  this.parseComplex(e.style, a, t, s, o)
                              );
                          },
                      }),
                      ke("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                      ke("autoRound,strictUnits", {
                          parser: function (e, t, n, i, r) {
                              return r;
                          },
                      }),
                      ke("border", {
                          defaultValue: "0px solid #000",
                          parser: function (e, t, n, i, s, o) {
                              var a = te(e, "borderTopWidth", r, !1, "0px"),
                                  l = this.format(t).split(" "),
                                  c = l[0].replace(T, "");
                              return (
                                  "px" !== c && (a = parseFloat(a) / ne(e, "borderTopWidth", 1, c) + c),
                                  this.parseComplex(e.style, this.format(a + " " + te(e, "borderTopStyle", r, !1, "solid") + " " + te(e, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                              );
                          },
                          color: !0,
                          formatter: function (e) {
                              var t = e.split(" ");
                              return t[0] + " " + (t[1] || "solid") + " " + (e.match(_e) || ["#000"])[0];
                          },
                      }),
                      ke("borderWidth", { parser: ye("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                      ke("float,cssFloat,styleFloat", {
                          parser: function (e, t, n, i, r, s) {
                              var o = e.style,
                                  a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                              return new we(o, a, 0, 0, r, -1, n, !1, 0, o[a], t);
                          },
                      });
                  var Ue = function (e) {
                      var t,
                          n = this.t,
                          i = n.filter || te(this.data, "filter") || "",
                          r = (this.s + this.c * e) | 0;
                      100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), (t = !te(this.data, "filter"))) : ((n.filter = i.replace(k, "")), (t = !0))),
                          t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? (0 === r && this.xn1) || (n.filter = i + " alpha(opacity=" + r + ")") : (n.filter = i.replace(E, "opacity=" + r)));
                  };
                  ke("opacity,alpha,autoAlpha", {
                      defaultValue: "1",
                      parser: function (e, t, n, i, s, o) {
                          var a = parseFloat(te(e, "opacity", r, !1, "1")),
                              l = e.style,
                              c = "autoAlpha" === n;
                          return (
                              "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a),
                              c && 1 === a && "hidden" === te(e, "visibility", r) && 0 !== t && (a = 0),
                              U
                                  ? (s = new we(l, "opacity", a, t - a, s))
                                  : (((s = new we(l, "opacity", 100 * a, 100 * (t - a), s)).xn1 = c ? 1 : 0),
                                    (l.zoom = 1),
                                    (s.type = 2),
                                    (s.b = "alpha(opacity=" + s.s + ")"),
                                    (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                                    (s.data = e),
                                    (s.plugin = o),
                                    (s.setRatio = Ue)),
                              c && (((s = new we(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"), i._overwriteProps.push(s.n), i._overwriteProps.push(n)),
                              s
                          );
                      },
                  });
                  var Ve = function (e, t) {
                          t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(O, "-$1").toLowerCase())) : e.removeAttribute(t));
                      },
                      Qe = function (e) {
                          if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
                              this.t.setAttribute("class", 0 === e ? this.b : this.e);
                              for (var t = this.data, n = this.t.style; t; ) t.v ? (n[t.p] = t.v) : Ve(n, t.p), (t = t._next);
                              1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                          } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                      };
                  ke("className", {
                      parser: function (e, t, i, s, o, a, l) {
                          var c,
                              u,
                              f,
                              h,
                              d,
                              p = e.getAttribute("class") || "",
                              m = e.style.cssText;
                          if ((((o = s._classNamePT = new we(e, i, 0, 0, o, 2)).setRatio = Qe), (o.pr = -11), (n = !0), (o.b = p), (u = re(e, r)), (f = e._gsClassPT))) {
                              for (h = {}, d = f.data; d; ) (h[d.p] = 1), (d = d._next);
                              f.setRatio(1);
                          }
                          return (
                              (e._gsClassPT = o),
                              (o.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "")),
                              e.setAttribute("class", o.e),
                              (c = se(e, u, re(e), l, h)),
                              e.setAttribute("class", p),
                              (o.data = c.firstMPT),
                              e.style.cssText !== m && (e.style.cssText = m),
                              (o.xfirst = s.parse(e, c.difs, o, a))
                          );
                      },
                  });
                  var Ge = function (e) {
                      if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                          var t,
                              n,
                              i,
                              r,
                              s,
                              o = this.t.style,
                              a = l.transform.parse;
                          if ("all" === this.e) (o.cssText = ""), (r = !0);
                          else for (i = (t = this.e.split(" ").join("").split(",")).length; --i > -1; ) (n = t[i]), l[n] && (l[n].parse === a ? (r = !0) : (n = "transformOrigin" === n ? Le : l[n].p)), Ve(o, n);
                          r && (Ve(o, Pe), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                      }
                  };
                  for (
                      ke("clearProps", {
                          parser: function (e, t, i, r, s) {
                              return ((s = new we(e, i, 0, 0, s, 2)).setRatio = Ge), (s.e = t), (s.pr = -10), (s.data = r._tween), (n = !0), s;
                          },
                      }),
                          c = "bezier,throwProps,physicsProps,physics2D".split(","),
                          Ee = c.length;
                      Ee--;

                  )
                      Ae(c[Ee]);
                  ((c = o.prototype)._firstPT = c._lastParsedTransform = c._transform = null),
                      (c._onInitTween = function (e, t, a, c) {
                          if (!e.nodeType) return !1;
                          (this._target = g = e), (this._tween = a), (this._vars = t), (_ = c), (u = t.autoRound), (n = !1), (i = t.suffixMap || o.suffixMap), (r = ee(e)), (s = this._overwriteProps);
                          var d,
                              m,
                              v,
                              y,
                              b,
                              w,
                              x,
                              T,
                              E,
                              k = e.style;
                          if (
                              (f && "" === k.zIndex && ("auto" === (d = te(e, "zIndex", r)) || "" === d) && this._addLazySet(k, "zIndex", 0),
                              "string" == typeof t && ((y = k.cssText), (d = re(e, r)), (k.cssText = y + ";" + t), (d = se(e, d, re(e)).difs), !U && C.test(t) && (d.opacity = parseFloat(RegExp.$1)), (t = d), (k.cssText = y)),
                              t.className ? (this._firstPT = m = l.className.parse(e, t.className, "className", this, null, null, t)) : (this._firstPT = m = this.parse(e, t, null)),
                              this._transformType)
                          ) {
                              for (
                                  E = 3 === this._transformType,
                                      Pe
                                          ? h &&
                                            ((f = !0),
                                            "" === k.zIndex && ("auto" === (x = te(e, "zIndex", r)) || "" === x) && this._addLazySet(k, "zIndex", 0),
                                            p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (E ? "visible" : "hidden")))
                                          : (k.zoom = 1),
                                      v = m;
                                  v && v._next;

                              )
                                  v = v._next;
                              (T = new we(e, "transform", 0, 0, null, 2)), this._linkCSSP(T, null, v), (T.setRatio = Pe ? Ye : $e), (T.data = this._transform || We(e, r, !0)), (T.tween = a), (T.pr = -1), s.pop();
                          }
                          if (n) {
                              for (; m; ) {
                                  for (w = m._next, v = y; v && v.pr > m.pr; ) v = v._next;
                                  (m._prev = v ? v._prev : b) ? (m._prev._next = m) : (y = m), (m._next = v) ? (v._prev = m) : (b = m), (m = w);
                              }
                              this._firstPT = y;
                          }
                          return !0;
                      }),
                      (c.parse = function (e, t, n, s) {
                          var o,
                              a,
                              c,
                              f,
                              h,
                              d,
                              p,
                              m,
                              v,
                              y,
                              b = e.style;
                          for (o in t) {
                              if (((d = t[o]), (a = l[o]), "function" != typeof d || (a && a.allowFunc) || (d = d(_, g)), a)) n = a.parse(e, d, o, this, n, s, t);
                              else {
                                  if ("--" === o.substr(0, 2)) {
                                      this._tween._propLookup[o] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(o) + "", d + "", o, !1, o);
                                      continue;
                                  }
                                  (h = te(e, o, r) + ""),
                                      (v = "string" == typeof d),
                                      "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || (v && A.test(d))
                                          ? (v || (d = ((d = me(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), (n = Te(b, o, h, d, !0, "transparent", n, 0, s)))
                                          : v && M.test(d)
                                          ? (n = Te(b, o, h, d, !0, null, n, 0, s))
                                          : ((p = (c = parseFloat(h)) || 0 === c ? h.substr((c + "").length) : ""),
                                            ("" === h || "auto" === h) &&
                                                ("width" === o || "height" === o ? ((c = le(e, o, r)), (p = "px")) : "left" === o || "top" === o ? ((c = ie(e, o, r)), (p = "px")) : ((c = "opacity" !== o ? 0 : 1), (p = ""))),
                                            (y = v && "=" === d.charAt(1))
                                                ? ((f = parseInt(d.charAt(0) + "1", 10)), (d = d.substr(2)), (f *= parseFloat(d)), (m = d.replace(T, "")))
                                                : ((f = parseFloat(d)), (m = v ? d.replace(T, "") : "")),
                                            "" === m && (m = o in i ? i[o] : p),
                                            (d = f || 0 === f ? (y ? f + c : f) + m : t[o]),
                                            p !== m &&
                                                ("" !== m || "lineHeight" === o) &&
                                                (f || 0 === f) &&
                                                c &&
                                                ((c = ne(e, o, c, p)),
                                                "%" === m
                                                    ? ((c /= ne(e, o, 100, "%") / 100), !0 !== t.strictUnits && (h = c + "%"))
                                                    : "em" === m || "rem" === m || "vw" === m || "vh" === m
                                                    ? (c /= ne(e, o, 1, m))
                                                    : "px" !== m && ((f = ne(e, o, f, m)), (m = "px")),
                                                y && (f || 0 === f) && (d = f + c + m)),
                                            y && (f += c),
                                            (!c && 0 !== c) || (!f && 0 !== f)
                                                ? void 0 !== b[o] && (d || (d + "" != "NaN" && null != d))
                                                    ? ((n = new we(b, o, f || c || 0, 0, n, -1, o, !1, 0, h, d)).xs0 = "none" !== d || ("display" !== o && -1 === o.indexOf("Style")) ? d : h)
                                                    : Q("invalid " + o + " tween value: " + t[o])
                                                : ((n = new we(b, o, c, f - c, n, 0, o, !1 !== u && ("px" === m || "zIndex" === o), 0, h, d)).xs0 = m));
                              }
                              s && n && !n.plugin && (n.plugin = s);
                          }
                          return n;
                      }),
                      (c.setRatio = function (e) {
                          var t,
                              n,
                              i,
                              r = this._firstPT;
                          if (1 !== e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                              if (e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                  for (; r; ) {
                                      if (((t = r.c * e + r.s), r.r ? (t = r.r(t)) : 1e-6 > t && t > -1e-6 && (t = 0), r.type))
                                          if (1 === r.type)
                                              if (2 === (i = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                              else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                              else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                              else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                              else {
                                                  for (n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                  r.t[r.p] = n;
                                              }
                                          else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(e);
                                      else r.t[r.p] = t + r.xs0;
                                      r = r._next;
                                  }
                              else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(e), (r = r._next);
                          else
                              for (; r; ) {
                                  if (2 !== r.type)
                                      if (r.r && -1 !== r.type)
                                          if (((t = r.r(r.s + r.c)), r.type)) {
                                              if (1 === r.type) {
                                                  for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                  r.t[r.p] = n;
                                              }
                                          } else r.t[r.p] = t + r.xs0;
                                      else r.t[r.p] = r.e;
                                  else r.setRatio(e);
                                  r = r._next;
                              }
                      }),
                      (c._enableTransforms = function (e) {
                          (this._transform = this._transform || We(this._target, r, !0)), (this._transformType = (this._transform.svg && Oe) || (!e && 3 !== this._transformType) ? 2 : 3);
                      });
                  var Ke = function (e) {
                      (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                  };
                  (c._addLazySet = function (e, t, n) {
                      var i = (this._firstPT = new we(e, t, 0, 0, this._firstPT, 2));
                      (i.e = n), (i.setRatio = Ke), (i.data = this);
                  }),
                      (c._linkCSSP = function (e, t, n, i) {
                          return (
                              e &&
                                  (t && (t._prev = e),
                                  e._next && (e._next._prev = e._prev),
                                  e._prev ? (e._prev._next = e._next) : this._firstPT === e && ((this._firstPT = e._next), (i = !0)),
                                  n ? (n._next = e) : i || null !== this._firstPT || (this._firstPT = e),
                                  (e._next = t),
                                  (e._prev = n)),
                              e
                          );
                      }),
                      (c._mod = function (e) {
                          for (var t = this._firstPT; t; ) "function" == typeof e[t.p] && (t.r = e[t.p]), (t = t._next);
                      }),
                      (c._kill = function (t) {
                          var n,
                              i,
                              r,
                              s = t;
                          if (t.autoAlpha || t.alpha) {
                              for (i in ((s = {}), t)) s[i] = t[i];
                              (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                          }
                          for (
                              t.className &&
                                  (n = this._classNamePT) &&
                                  ((r = n.xfirst) && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next),
                                  n._next && this._linkCSSP(n._next, n._next._next, r._prev),
                                  (this._classNamePT = null)),
                                  n = this._firstPT;
                              n;

                          )
                              n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(t), (i = n.plugin)), (n = n._next);
                          return e.prototype._kill.call(this, s);
                      });
                  var Ze = function (e, t, n) {
                      var i, r, s, o;
                      if (e.slice) for (r = e.length; --r > -1; ) Ze(e[r], t, n);
                      else for (r = (i = e.childNodes).length; --r > -1; ) (o = (s = i[r]).type), s.style && (t.push(re(s)), n && n.push(s)), (1 !== o && 9 !== o && 11 !== o) || !s.childNodes.length || Ze(s, t, n);
                  };
                  return (
                      (o.cascadeTo = function (e, n, i) {
                          var r,
                              s,
                              o,
                              a,
                              l = t.to(e, n, i),
                              c = [l],
                              u = [],
                              f = [],
                              h = [],
                              d = t._internals.reservedProps;
                          for (e = l._targets || l.target, Ze(e, u, h), l.render(n, !0, !0), Ze(e, f), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1; )
                              if ((s = se(h[r], u[r], f[r])).firstMPT) {
                                  for (o in ((s = s.difs), i)) d[o] && (s[o] = i[o]);
                                  for (o in ((a = {}), s)) a[o] = u[r][o];
                                  c.push(t.fromTo(h[r], n, a, s));
                              }
                          return c;
                      }),
                      e.activate([o]),
                      o
                  );
              },
              !0
          ),
          (function () {
              var e = _gsScope._gsDefine.plugin({
                      propName: "roundProps",
                      version: "1.7.0",
                      priority: -1,
                      API: 2,
                      init: function (e, t, n) {
                          return (this._tween = n), !0;
                      },
                  }),
                  t = function (e) {
                      var t = 1 > e ? Math.pow(10, (e + "").length - 2) : 1;
                      return function (n) {
                          return ((Math.round(n / e) * e * t) | 0) / t;
                      };
                  },
                  n = function (e, t) {
                      for (; e; ) e.f || e.blob || (e.m = t || Math.round), (e = e._next);
                  },
                  i = e.prototype;
              (i._onInitAllProps = function () {
                  var e,
                      i,
                      r,
                      s,
                      o = this._tween,
                      a = o.vars.roundProps,
                      l = {},
                      c = o._propLookup.roundProps;
                  if ("object" != typeof a || a.push) for ("string" == typeof a && (a = a.split(",")), r = a.length; --r > -1; ) l[a[r]] = Math.round;
                  else for (s in a) l[s] = t(a[s]);
                  for (s in l)
                      for (e = o._firstPT; e; )
                          (i = e._next),
                              e.pg
                                  ? e.t._mod(l)
                                  : e.n === s &&
                                    (2 === e.f && e.t
                                        ? n(e.t._firstPT, l[s])
                                        : (this._add(e.t, s, e.s, e.c, l[s]), i && (i._prev = e._prev), e._prev ? (e._prev._next = i) : o._firstPT === e && (o._firstPT = i), (e._next = e._prev = null), (o._propLookup[s] = c))),
                              (e = i);
                  return !1;
              }),
                  (i._add = function (e, t, n, i, r) {
                      this._addTween(e, t, n, n + i, t, r || Math.round), this._overwriteProps.push(t);
                  });
          })(),
          _gsScope._gsDefine.plugin({
              propName: "attr",
              API: 2,
              version: "0.6.1",
              init: function (e, t, n, i) {
                  var r, s;
                  if ("function" != typeof e.setAttribute) return !1;
                  for (r in t) "function" == typeof (s = t[r]) && (s = s(i, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                  return !0;
              },
          }),
          (_gsScope._gsDefine.plugin({
              propName: "directionalRotation",
              version: "0.3.1",
              API: 2,
              init: function (e, t, n, i) {
                  "object" != typeof t && (t = { rotation: t }), (this.finals = {});
                  var r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u = !0 === t.useRadians ? 2 * Math.PI : 360;
                  for (r in t)
                      "useRadians" !== r &&
                          ("function" == typeof (a = t[r]) && (a = a(i, e)),
                          (s = (c = (a + "").split("_"))[0]),
                          (o = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]())),
                          (l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o),
                          c.length &&
                              (-1 !== (s = c.join("_")).indexOf("short") && (l %= u) != l % (u / 2) && (l = 0 > l ? l + u : l - u),
                              -1 !== s.indexOf("_cw") && 0 > l ? (l = ((l + 9999999999 * u) % u) - ((l / u) | 0) * u) : -1 !== s.indexOf("ccw") && l > 0 && (l = ((l - 9999999999 * u) % u) - ((l / u) | 0) * u)),
                          (l > 1e-6 || -1e-6 > l) && (this._addTween(e, r, o, o + l, r), this._overwriteProps.push(r)));
                  return !0;
              },
              set: function (e) {
                  var t;
                  if (1 !== e) this._super.setRatio.call(this, e);
                  else for (t = this._firstPT; t; ) t.f ? t.t[t.p](this.finals[t.p]) : (t.t[t.p] = this.finals[t.p]), (t = t._next);
              },
          })._autoCSS = !0),
          _gsScope._gsDefine(
              "easing.Back",
              ["easing.Ease"],
              function (e) {
                  var t,
                      n,
                      i,
                      r,
                      s = _gsScope.GreenSockGlobals || _gsScope,
                      o = s.com.greensock,
                      a = 2 * Math.PI,
                      l = Math.PI / 2,
                      c = o._class,
                      u = function (t, n) {
                          var i = c("easing." + t, function () {}, !0),
                              r = (i.prototype = new e());
                          return (r.constructor = i), (r.getRatio = n), i;
                      },
                      f = e.register || function () {},
                      h = function (e, t, n, i, r) {
                          var s = c("easing." + e, { easeOut: new t(), easeIn: new n(), easeInOut: new i() }, !0);
                          return f(s, e), s;
                      },
                      d = function (e, t, n) {
                          (this.t = e), (this.v = t), n && ((this.next = n), (n.prev = this), (this.c = n.v - t), (this.gap = n.t - e));
                      },
                      p = function (t, n) {
                          var i = c(
                                  "easing." + t,
                                  function (e) {
                                      (this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1);
                                  },
                                  !0
                              ),
                              r = (i.prototype = new e());
                          return (
                              (r.constructor = i),
                              (r.getRatio = n),
                              (r.config = function (e) {
                                  return new i(e);
                              }),
                              i
                          );
                      },
                      m = h(
                          "Back",
                          p("BackOut", function (e) {
                              return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
                          }),
                          p("BackIn", function (e) {
                              return e * e * ((this._p1 + 1) * e - this._p1);
                          }),
                          p("BackInOut", function (e) {
                              return (e *= 2) < 1 ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
                          })
                      ),
                      g = c(
                          "easing.SlowMo",
                          function (e, t, n) {
                              (t = t || 0 === t ? t : 0.7), null == e ? (e = 0.7) : e > 1 && (e = 1), (this._p = 1 !== e ? t : 0), (this._p1 = (1 - e) / 2), (this._p2 = e), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === n);
                          },
                          !0
                      ),
                      _ = (g.prototype = new e());
                  return (
                      (_.constructor = g),
                      (_.getRatio = function (e) {
                          var t = e + (0.5 - e) * this._p;
                          return e < this._p1
                              ? this._calcEnd
                                  ? 1 - (e = 1 - e / this._p1) * e
                                  : t - (e = 1 - e / this._p1) * e * e * e * t
                              : e > this._p3
                              ? this._calcEnd
                                  ? 1 === e
                                      ? 0
                                      : 1 - (e = (e - this._p3) / this._p1) * e
                                  : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
                              : this._calcEnd
                              ? 1
                              : t;
                      }),
                      (g.ease = new g(0.7, 0.7)),
                      (_.config = g.config = function (e, t, n) {
                          return new g(e, t, n);
                      }),
                      ((_ = (t = c(
                          "easing.SteppedEase",
                          function (e, t) {
                              (e = e || 1), (this._p1 = 1 / e), (this._p2 = e + (t ? 0 : 1)), (this._p3 = t ? 1 : 0);
                          },
                          !0
                      )).prototype = new e()).constructor = t),
                      (_.getRatio = function (e) {
                          return 0 > e ? (e = 0) : e >= 1 && (e = 0.999999999), (((this._p2 * e) | 0) + this._p3) * this._p1;
                      }),
                      (_.config = t.config = function (e, n) {
                          return new t(e, n);
                      }),
                      ((_ = (n = c(
                          "easing.ExpoScaleEase",
                          function (e, t, n) {
                              (this._p1 = Math.log(t / e)), (this._p2 = t - e), (this._p3 = e), (this._ease = n);
                          },
                          !0
                      )).prototype = new e()).constructor = n),
                      (_.getRatio = function (e) {
                          return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2;
                      }),
                      (_.config = n.config = function (e, t, i) {
                          return new n(e, t, i);
                      }),
                      ((_ = (i = c(
                          "easing.RoughEase",
                          function (t) {
                              for (
                                  var n,
                                      i,
                                      r,
                                      s,
                                      o,
                                      a,
                                      l = (t = t || {}).taper || "none",
                                      c = [],
                                      u = 0,
                                      f = 0 | (t.points || 20),
                                      h = f,
                                      p = !1 !== t.randomize,
                                      m = !0 === t.clamp,
                                      g = t.template instanceof e ? t.template : null,
                                      _ = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                                  --h > -1;

                              )
                                  (n = p ? Math.random() : (1 / f) * h),
                                      (i = g ? g.getRatio(n) : n),
                                      (r = "none" === l ? _ : "out" === l ? (s = 1 - n) * s * _ : "in" === l ? n * n * _ : 0.5 > n ? (s = 2 * n) * s * 0.5 * _ : (s = 2 * (1 - n)) * s * 0.5 * _),
                                      p ? (i += Math.random() * r - 0.5 * r) : h % 2 ? (i += 0.5 * r) : (i -= 0.5 * r),
                                      m && (i > 1 ? (i = 1) : 0 > i && (i = 0)),
                                      (c[u++] = { x: n, y: i });
                              for (
                                  c.sort(function (e, t) {
                                      return e.x - t.x;
                                  }),
                                      a = new d(1, 1, null),
                                      h = f;
                                  --h > -1;

                              )
                                  (o = c[h]), (a = new d(o.x, o.y, a));
                              this._prev = new d(0, 0, 0 !== a.t ? a : a.next);
                          },
                          !0
                      )).prototype = new e()).constructor = i),
                      (_.getRatio = function (e) {
                          var t = this._prev;
                          if (e > t.t) {
                              for (; t.next && e >= t.t; ) t = t.next;
                              t = t.prev;
                          } else for (; t.prev && e <= t.t; ) t = t.prev;
                          return (this._prev = t), t.v + ((e - t.t) / t.gap) * t.c;
                      }),
                      (_.config = function (e) {
                          return new i(e);
                      }),
                      (i.ease = new i()),
                      h(
                          "Bounce",
                          u("BounceOut", function (e) {
                              return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                          }),
                          u("BounceIn", function (e) {
                              return (e = 1 - e) < 1 / 2.75
                                  ? 1 - 7.5625 * e * e
                                  : 2 / 2.75 > e
                                  ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                                  : 2.5 / 2.75 > e
                                  ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                                  : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                          }),
                          u("BounceInOut", function (e) {
                              var t = 0.5 > e;
                              return (
                                  (e =
                                      1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1)
                                          ? 7.5625 * e * e
                                          : 2 / 2.75 > e
                                          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                                          : 2.5 / 2.75 > e
                                          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                                          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
                                  t ? 0.5 * (1 - e) : 0.5 * e + 0.5
                              );
                          })
                      ),
                      h(
                          "Circ",
                          u("CircOut", function (e) {
                              return Math.sqrt(1 - (e -= 1) * e);
                          }),
                          u("CircIn", function (e) {
                              return -(Math.sqrt(1 - e * e) - 1);
                          }),
                          u("CircInOut", function (e) {
                              return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                          })
                      ),
                      h(
                          "Elastic",
                          (r = function (t, n, i) {
                              var r = c(
                                      "easing." + t,
                                      function (e, t) {
                                          (this._p1 = e >= 1 ? e : 1), (this._p2 = (t || i) / (1 > e ? e : 1)), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0)), (this._p2 = a / this._p2);
                                      },
                                      !0
                                  ),
                                  s = (r.prototype = new e());
                              return (
                                  (s.constructor = r),
                                  (s.getRatio = n),
                                  (s.config = function (e, t) {
                                      return new r(e, t);
                                  }),
                                  r
                              );
                          })(
                              "ElasticOut",
                              function (e) {
                                  return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1;
                              },
                              0.3
                          ),
                          r(
                              "ElasticIn",
                              function (e) {
                                  return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2);
                              },
                              0.3
                          ),
                          r(
                              "ElasticInOut",
                              function (e) {
                                  return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
                              },
                              0.45
                          )
                      ),
                      h(
                          "Expo",
                          u("ExpoOut", function (e) {
                              return 1 - Math.pow(2, -10 * e);
                          }),
                          u("ExpoIn", function (e) {
                              return Math.pow(2, 10 * (e - 1)) - 0.001;
                          }),
                          u("ExpoInOut", function (e) {
                              return (e *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
                          })
                      ),
                      h(
                          "Sine",
                          u("SineOut", function (e) {
                              return Math.sin(e * l);
                          }),
                          u("SineIn", function (e) {
                              return 1 - Math.cos(e * l);
                          }),
                          u("SineInOut", function (e) {
                              return -0.5 * (Math.cos(Math.PI * e) - 1);
                          })
                      ),
                      c(
                          "easing.EaseLookup",
                          {
                              find: function (t) {
                                  return e.map[t];
                              },
                          },
                          !0
                      ),
                      f(s.SlowMo, "SlowMo", "ease,"),
                      f(i, "RoughEase", "ease,"),
                      f(t, "SteppedEase", "ease,"),
                      m
                  );
              },
              !0
          );
  }),
      _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
      (function (e, t) {
          "use strict";
          var n = {},
              i = e.document,
              r = (e.GreenSockGlobals = e.GreenSockGlobals || e),
              s = r[t];
          if (s) return "undefined" != typeof module && module.exports && (module.exports = s), s;
          var o,
              a,
              l,
              c,
              u,
              f = function (e) {
                  var t,
                      n = e.split("."),
                      i = r;
                  for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
                  return i;
              },
              h = f("com.greensock"),
              d = 1e-8,
              p = function (e) {
                  var t,
                      n = [],
                      i = e.length;
                  for (t = 0; t !== i; n.push(e[t++]));
                  return n;
              },
              m = function () {},
              g = (function () {
                  var e = Object.prototype.toString,
                      t = e.call([]);
                  return function (n) {
                      return null != n && (n instanceof Array || ("object" == typeof n && !!n.push && e.call(n) === t));
                  };
              })(),
              _ = {},
              v = function (i, s, o, a) {
                  (this.sc = _[i] ? _[i].sc : []), (_[i] = this), (this.gsClass = null), (this.func = o);
                  var l = [];
                  (this.check = function (c) {
                      for (var u, h, d, p, m = s.length, g = m; --m > -1; ) (u = _[s[m]] || new v(s[m], [])).gsClass ? ((l[m] = u.gsClass), g--) : c && u.sc.push(this);
                      if (0 === g && o) {
                          if (((d = (h = ("com.greensock." + i).split(".")).pop()), (p = f(h.join("."))[d] = this.gsClass = o.apply(o, l)), a))
                              if (((r[d] = n[d] = p), "undefined" != typeof module && module.exports))
                                  if (i === t) for (m in ((module.exports = n[t] = p), n)) p[m] = n[m];
                                  else n[t] && (n[t][d] = p);
                              else
                                  "function" == typeof define &&
                                      define.amd &&
                                      define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
                                          return p;
                                      });
                          for (m = 0; m < this.sc.length; m++) this.sc[m].check();
                      }
                  }),
                      this.check(!0);
              },
              y = (e._gsDefine = function (e, t, n, i) {
                  return new v(e, t, n, i);
              }),
              b = (h._class = function (e, t, n) {
                  return (
                      (t = t || function () {}),
                      y(
                          e,
                          [],
                          function () {
                              return t;
                          },
                          n
                      ),
                      t
                  );
              });
          y.globals = r;
          var w = [0, 0, 1, 1],
              x = b(
                  "easing.Ease",
                  function (e, t, n, i) {
                      (this._func = e), (this._type = n || 0), (this._power = i || 0), (this._params = t ? w.concat(t) : w);
                  },
                  !0
              ),
              T = (x.map = {}),
              E = (x.register = function (e, t, n, i) {
                  for (var r, s, o, a, l = t.split(","), c = l.length, u = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
                      for (s = l[c], r = i ? b("easing." + s, null, !0) : h.easing[s] || {}, o = u.length; --o > -1; ) (a = u[o]), (T[s + "." + a] = T[a + s] = r[a] = e.getRatio ? e : e[a] || new e());
              });
          for (
              (l = x.prototype)._calcEnd = !1,
                  l.getRatio = function (e) {
                      if (this._func) return (this._params[0] = e), this._func.apply(null, this._params);
                      var t = this._type,
                          n = this._power,
                          i = 1 === t ? 1 - e : 2 === t ? e : 0.5 > e ? 2 * e : 2 * (1 - e);
                      return 1 === n ? (i *= i) : 2 === n ? (i *= i * i) : 3 === n ? (i *= i * i * i) : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : 0.5 > e ? i / 2 : 1 - i / 2;
                  },
                  a = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
              --a > -1;

          )
              (l = o[a] + ",Power" + a), E(new x(null, null, 1, a), l, "easeOut", !0), E(new x(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), E(new x(null, null, 3, a), l, "easeInOut");
          (T.linear = h.easing.Linear.easeIn), (T.swing = h.easing.Quad.easeInOut);
          var C = b("events.EventDispatcher", function (e) {
              (this._listeners = {}), (this._eventTarget = e || this);
          });
          ((l = C.prototype).addEventListener = function (e, t, n, i, r) {
              r = r || 0;
              var s,
                  o,
                  a = this._listeners[e],
                  l = 0;
              for (this !== c || u || c.wake(), null == a && (this._listeners[e] = a = []), o = a.length; --o > -1; ) (s = a[o]).c === t && s.s === n ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
              a.splice(l, 0, { c: t, s: n, up: i, pr: r });
          }),
              (l.removeEventListener = function (e, t) {
                  var n,
                      i = this._listeners[e];
                  if (i) for (n = i.length; --n > -1; ) if (i[n].c === t) return void i.splice(n, 1);
              }),
              (l.dispatchEvent = function (e) {
                  var t,
                      n,
                      i,
                      r = this._listeners[e];
                  if (r) for ((t = r.length) > 1 && (r = r.slice(0)), n = this._eventTarget; --t > -1; ) (i = r[t]) && (i.up ? i.c.call(i.s || n, { type: e, target: n }) : i.c.call(i.s || n));
              });
          var k = e.requestAnimationFrame,
              A = e.cancelAnimationFrame,
              O =
                  Date.now ||
                  function () {
                      return new Date().getTime();
                  },
              S = O();
          for (a = (o = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !k; ) (k = e[o[a] + "RequestAnimationFrame"]), (A = e[o[a] + "CancelAnimationFrame"] || e[o[a] + "CancelRequestAnimationFrame"]);
          b("Ticker", function (e, t) {
              var n,
                  r,
                  s,
                  o,
                  a,
                  l = this,
                  f = O(),
                  h = !(!1 === t || !k) && "auto",
                  d = 500,
                  p = 33,
                  g = function (e) {
                      var t,
                          i,
                          c = O() - S;
                      c > d && (f += c - p),
                          (S += c),
                          (l.time = (S - f) / 1e3),
                          (t = l.time - a),
                          (!n || t > 0 || !0 === e) && (l.frame++, (a += t + (t >= o ? 0.004 : o - t)), (i = !0)),
                          !0 !== e && (s = r(g)),
                          i && l.dispatchEvent("tick");
                  };
              C.call(l),
                  (l.time = l.frame = 0),
                  (l.tick = function () {
                      g(!0);
                  }),
                  (l.lagSmoothing = function (e, t) {
                      return arguments.length ? ((d = e || 1e8), void (p = Math.min(t, d, 0))) : 1e8 > d;
                  }),
                  (l.sleep = function () {
                      null != s && (h && A ? A(s) : clearTimeout(s), (r = m), (s = null), l === c && (u = !1));
                  }),
                  (l.wake = function (e) {
                      null !== s ? l.sleep() : e ? (f += -S + (S = O())) : l.frame > 10 && (S = O() - d + 5),
                          (r =
                              0 === n
                                  ? m
                                  : h && k
                                  ? k
                                  : function (e) {
                                        return setTimeout(e, (1e3 * (a - l.time) + 1) | 0);
                                    }),
                          l === c && (u = !0),
                          g(2);
                  }),
                  (l.fps = function (e) {
                      return arguments.length ? ((o = 1 / ((n = e) || 60)), (a = this.time + o), void l.wake()) : n;
                  }),
                  (l.useRAF = function (e) {
                      return arguments.length ? (l.sleep(), (h = e), void l.fps(n)) : h;
                  }),
                  l.fps(e),
                  setTimeout(function () {
                      "auto" === h && l.frame < 5 && "hidden" !== (i || {}).visibilityState && l.useRAF(!1);
                  }, 1500);
          }),
              ((l = h.Ticker.prototype = new h.events.EventDispatcher()).constructor = h.Ticker);
          var P = b("core.Animation", function (e, t) {
              if (
                  ((this.vars = t = t || {}),
                  (this._duration = this._totalDuration = e || 0),
                  (this._delay = Number(t.delay) || 0),
                  (this._timeScale = 1),
                  (this._active = !!t.immediateRender),
                  (this.data = t.data),
                  (this._reversed = !!t.reversed),
                  G)
              ) {
                  u || c.wake();
                  var n = this.vars.useFrames ? Q : G;
                  n.add(this, n._time), this.vars.paused && this.paused(!0);
              }
          });
          (c = P.ticker = new h.Ticker()),
              ((l = P.prototype)._dirty = l._gc = l._initted = l._paused = !1),
              (l._totalTime = l._time = 0),
              (l._rawPrevTime = -1),
              (l._next = l._last = l._onUpdate = l._timeline = l.timeline = null),
              (l._paused = !1);
          var D = function () {
              u && O() - S > 2e3 && ("hidden" !== (i || {}).visibilityState || !c.lagSmoothing()) && c.wake();
              var e = setTimeout(D, 2e3);
              e.unref && e.unref();
          };
          D(),
              (l.play = function (e, t) {
                  return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
              }),
              (l.pause = function (e, t) {
                  return null != e && this.seek(e, t), this.paused(!0);
              }),
              (l.resume = function (e, t) {
                  return null != e && this.seek(e, t), this.paused(!1);
              }),
              (l.seek = function (e, t) {
                  return this.totalTime(Number(e), !1 !== t);
              }),
              (l.restart = function (e, t) {
                  return this.reversed(!1)
                      .paused(!1)
                      .totalTime(e ? -this._delay : 0, !1 !== t, !0);
              }),
              (l.reverse = function (e, t) {
                  return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
              }),
              (l.render = function (e, t, n) {}),
              (l.invalidate = function () {
                  return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
              }),
              (l.isActive = function () {
                  var e,
                      t = this._timeline,
                      n = this._startTime;
                  return !t || (!this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - d);
              }),
              (l._enabled = function (e, t) {
                  return (
                      u || c.wake(),
                      (this._gc = !e),
                      (this._active = this.isActive()),
                      !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
                      !1
                  );
              }),
              (l._kill = function (e, t) {
                  return this._enabled(!1, !1);
              }),
              (l.kill = function (e, t) {
                  return this._kill(e, t), this;
              }),
              (l._uncache = function (e) {
                  for (var t = e ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline);
                  return this;
              }),
              (l._swapSelfInParams = function (e) {
                  for (var t = e.length, n = e.concat(); --t > -1; ) "{self}" === e[t] && (n[t] = this);
                  return n;
              }),
              (l._callback = function (e) {
                  var t = this.vars,
                      n = t[e],
                      i = t[e + "Params"],
                      r = t[e + "Scope"] || t.callbackScope || this;
                  switch (i ? i.length : 0) {
                      case 0:
                          n.call(r);
                          break;
                      case 1:
                          n.call(r, i[0]);
                          break;
                      case 2:
                          n.call(r, i[0], i[1]);
                          break;
                      default:
                          n.apply(r, i);
                  }
              }),
              (l.eventCallback = function (e, t, n, i) {
                  if ("on" === (e || "").substr(0, 2)) {
                      var r = this.vars;
                      if (1 === arguments.length) return r[e];
                      null == t ? delete r[e] : ((r[e] = t), (r[e + "Params"] = g(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n), (r[e + "Scope"] = i)), "onUpdate" === e && (this._onUpdate = t);
                  }
                  return this;
              }),
              (l.delay = function (e) {
                  return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay;
              }),
              (l.duration = function (e) {
                  return arguments.length
                      ? ((this._duration = this._totalDuration = e),
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
                        this)
                      : ((this._dirty = !1), this._duration);
              }),
              (l.totalDuration = function (e) {
                  return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration;
              }),
              (l.time = function (e, t) {
                  return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time;
              }),
              (l.totalTime = function (e, t, n) {
                  if ((u || c.wake(), !arguments.length)) return this._totalTime;
                  if (this._timeline) {
                      if ((0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming)) {
                          this._dirty && this.totalDuration();
                          var i = this._totalDuration,
                              r = this._timeline;
                          if ((e > i && !n && (e = i), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                              for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                      }
                      this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (j.length && Z(), this.render(e, t, !1), j.length && Z());
                  }
                  return this;
              }),
              (l.progress = l.totalProgress = function (e, t) {
                  var n = this.duration();
                  return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio;
              }),
              (l.startTime = function (e) {
                  return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime;
              }),
              (l.endTime = function (e) {
                  return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale;
              }),
              (l.timeScale = function (e) {
                  if (!arguments.length) return this._timeScale;
                  var t, n;
                  for (
                      e = e || d,
                          this._timeline && this._timeline.smoothChildTiming && ((n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime()), (this._startTime = n - ((n - this._startTime) * this._timeScale) / e)),
                          this._timeScale = e,
                          n = this.timeline;
                      n && n.timeline;

                  )
                      (n._dirty = !0), n.totalDuration(), (n = n.timeline);
                  return this;
              }),
              (l.reversed = function (e) {
                  return arguments.length
                      ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                      : this._reversed;
              }),
              (l.paused = function (e) {
                  if (!arguments.length) return this._paused;
                  var t,
                      n,
                      i = this._timeline;
                  return (
                      e != this._paused &&
                          i &&
                          (u || e || c.wake(),
                          (n = (t = i.rawTime()) - this._pauseTime),
                          !e && i.smoothChildTiming && ((this._startTime += n), this._uncache(!1)),
                          (this._pauseTime = e ? t : null),
                          (this._paused = e),
                          (this._active = this.isActive()),
                          !e && 0 !== n && this._initted && this.duration() && ((t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale), this.render(t, t === this._totalTime, !0))),
                      this._gc && !e && this._enabled(!0, !1),
                      this
                  );
              });
          var L = b("core.SimpleTimeline", function (e) {
              P.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((l = L.prototype = new P()).constructor = L),
              (l.kill()._gc = !1),
              (l._first = l._last = l._recent = null),
              (l._sortChildren = !1),
              (l.add = l.insert = function (e, t, n, i) {
                  var r, s;
                  if (
                      ((e._startTime = Number(t || 0) + e._delay),
                      e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)),
                      e.timeline && e.timeline._remove(e, !0),
                      (e.timeline = e._timeline = this),
                      e._gc && e._enabled(!0, !0),
                      (r = this._last),
                      this._sortChildren)
                  )
                      for (s = e._startTime; r && r._startTime > s; ) r = r._prev;
                  return (
                      r ? ((e._next = r._next), (r._next = e)) : ((e._next = this._first), (this._first = e)), e._next ? (e._next._prev = e) : (this._last = e), (e._prev = r), (this._recent = e), this._timeline && this._uncache(!0), this
                  );
              }),
              (l._remove = function (e, t) {
                  return (
                      e.timeline === this &&
                          (t || e._enabled(!1, !0),
                          e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next),
                          e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev),
                          (e._next = e._prev = e.timeline = null),
                          e === this._recent && (this._recent = this._last),
                          this._timeline && this._uncache(!0)),
                      this
                  );
              }),
              (l.render = function (e, t, n) {
                  var i,
                      r = this._first;
                  for (this._totalTime = this._time = this._rawPrevTime = e; r; )
                      (i = r._next),
                          (r._active || (e >= r._startTime && !r._paused && !r._gc)) &&
                              (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)),
                          (r = i);
              }),
              (l.rawTime = function () {
                  return u || c.wake(), this._totalTime;
              });
          var R = b(
                  "TweenLite",
                  function (t, n, i) {
                      if ((P.call(this, n, i), (this.render = R.prototype.render), null == t)) throw "Cannot tween a null target.";
                      this.target = t = "string" != typeof t ? t : R.selector(t) || t;
                      var r,
                          s,
                          o,
                          a = t.jquery || (t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
                          l = this.vars.overwrite;
                      if (((this._overwrite = l = null == l ? V[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l]), (a || t instanceof Array || (t.push && g(t))) && "number" != typeof t[0]))
                          for (this._targets = o = p(t), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)
                              (s = o[r])
                                  ? "string" != typeof s
                                      ? s.length && s !== e && s[0] && (s[0] === e || (s[0].nodeType && s[0].style && !s.nodeType))
                                          ? (o.splice(r--, 1), (this._targets = o = o.concat(p(s))))
                                          : ((this._siblings[r] = J(s, this, !1)), 1 === l && this._siblings[r].length > 1 && te(s, this, null, 1, this._siblings[r]))
                                      : "string" == typeof (s = o[r--] = R.selector(s)) && o.splice(r + 1, 1)
                                  : o.splice(r--, 1);
                      else (this._propLookup = {}), (this._siblings = J(t, this, !1)), 1 === l && this._siblings.length > 1 && te(t, this, null, 1, this._siblings);
                      (this.vars.immediateRender || (0 === n && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -d), this.render(Math.min(0, -this._delay)));
                  },
                  !0
              ),
              N = function (t) {
                  return t && t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType));
              };
          ((l = R.prototype = new P()).constructor = R),
              (l.kill()._gc = !1),
              (l.ratio = 0),
              (l._firstPT = l._targets = l._overwrittenProps = l._startAt = null),
              (l._notifyPluginsOfEnabled = l._lazy = !1),
              (R.version = "2.1.3"),
              (R.defaultEase = l._ease = new x(null, null, 1, 1)),
              (R.defaultOverwrite = "auto"),
              (R.ticker = c),
              (R.autoSleep = 120),
              (R.lagSmoothing = function (e, t) {
                  c.lagSmoothing(e, t);
              }),
              (R.selector =
                  e.$ ||
                  e.jQuery ||
                  function (t) {
                      var n = e.$ || e.jQuery;
                      return n ? ((R.selector = n), n(t)) : (i || (i = e.document), i ? (i.querySelectorAll ? i.querySelectorAll(t) : i.getElementById("#" === t.charAt(0) ? t.substr(1) : t)) : t);
                  });
          var j = [],
              M = {},
              I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
              F = /[\+-]=-?[\.\d]/,
              q = function (e) {
                  for (var t, n = this._firstPT; n; )
                      (t = n.blob ? (1 === e && null != this.end ? this.end : e ? this.join("") : this.start) : n.c * e + n.s),
                          n.m ? (t = n.m.call(this._tween, t, this._target || n.t, this._tween)) : 1e-6 > t && t > -1e-6 && !n.blob && (t = 0),
                          n.f ? (n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t)) : (n.t[n.p] = t),
                          (n = n._next);
              },
              H = function (e) {
                  return ((1e3 * e) | 0) / 1e3 + "";
              },
              B = function (e, t, n, i) {
                  var r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      f = [],
                      h = 0,
                      d = "",
                      p = 0;
                  for (
                      f.start = e,
                          f.end = t,
                          e = f[0] = e + "",
                          t = f[1] = t + "",
                          n && (n(f), (e = f[0]), (t = f[1])),
                          f.length = 0,
                          r = e.match(I) || [],
                          s = t.match(I) || [],
                          i && ((i._next = null), (i.blob = 1), (f._firstPT = f._applyPT = i)),
                          l = s.length,
                          a = 0;
                      l > a;
                      a++
                  )
                      (u = s[a]),
                          (d += (c = t.substr(h, t.indexOf(u, h) - h)) || !a ? c : ","),
                          (h += c.length),
                          p ? (p = (p + 1) % 5) : "rgba(" === c.substr(-5) && (p = 1),
                          u === r[a] || r.length <= a
                              ? (d += u)
                              : (d && (f.push(d), (d = "")),
                                (o = parseFloat(r[a])),
                                f.push(o),
                                (f._firstPT = {
                                    _next: f._firstPT,
                                    t: f,
                                    p: f.length - 1,
                                    s: o,
                                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                                    f: 0,
                                    m: p && 4 > p ? Math.round : H,
                                })),
                          (h += u.length);
                  return (d += t.substr(h)) && f.push(d), (f.setRatio = q), F.test(t) && (f.end = null), f;
              },
              z = function (e, t, n, i, r, s, o, a, l) {
                  "function" == typeof i && (i = i(l || 0, e));
                  var c = typeof e[t],
                      u = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                      f = "get" !== n ? n : u ? (o ? e[u](o) : e[u]()) : e[t],
                      h = "string" == typeof i && "=" === i.charAt(1),
                      d = { t: e, p: t, s: f, f: "function" === c, pg: 0, n: r || t, m: s ? ("function" == typeof s ? s : Math.round) : 0, pr: 0, c: h ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - f || 0 };
                  return (
                      ("number" != typeof f || ("number" != typeof i && !h)) &&
                          (o || isNaN(f) || (!h && isNaN(i)) || "boolean" == typeof f || "boolean" == typeof i
                              ? ((d.fp = o), (d = { t: B(f, h ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : i, a || R.defaultStringFilter, d), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || t, pr: 0, m: 0 }))
                              : ((d.s = parseFloat(f)), h || (d.c = parseFloat(i) - d.s || 0))),
                      d.c ? ((d._next = this._firstPT) && (d._next._prev = d), (this._firstPT = d), d) : void 0
                  );
              },
              X = (R._internals = { isArray: g, isSelector: N, lazyTweens: j, blobDif: B }),
              W = (R._plugins = {}),
              $ = (X.tweenLookup = {}),
              Y = 0,
              U = (X.reservedProps = {
                  ease: 1,
                  delay: 1,
                  overwrite: 1,
                  onComplete: 1,
                  onCompleteParams: 1,
                  onCompleteScope: 1,
                  useFrames: 1,
                  runBackwards: 1,
                  startAt: 1,
                  onUpdate: 1,
                  onUpdateParams: 1,
                  onUpdateScope: 1,
                  onStart: 1,
                  onStartParams: 1,
                  onStartScope: 1,
                  onReverseComplete: 1,
                  onReverseCompleteParams: 1,
                  onReverseCompleteScope: 1,
                  onRepeat: 1,
                  onRepeatParams: 1,
                  onRepeatScope: 1,
                  easeParams: 1,
                  yoyo: 1,
                  immediateRender: 1,
                  repeat: 1,
                  repeatDelay: 1,
                  data: 1,
                  paused: 1,
                  reversed: 1,
                  autoCSS: 1,
                  lazy: 1,
                  onOverwrite: 1,
                  callbackScope: 1,
                  stringFilter: 1,
                  id: 1,
                  yoyoEase: 1,
                  stagger: 1,
              }),
              V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
              Q = (P._rootFramesTimeline = new L()),
              G = (P._rootTimeline = new L()),
              K = 30,
              Z = (X.lazyRender = function () {
                  var e,
                      t,
                      n = j.length;
                  for (M = {}, e = 0; n > e; e++) (t = j[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                  j.length = 0;
              });
          (G._startTime = c.time),
              (Q._startTime = c.frame),
              (G._active = Q._active = !0),
              setTimeout(Z, 1),
              (P._updateRoot = R.render = function () {
                  var e, t, n;
                  if ((j.length && Z(), G.render((c.time - G._startTime) * G._timeScale, !1, !1), Q.render((c.frame - Q._startTime) * Q._timeScale, !1, !1), j.length && Z(), c.frame >= K)) {
                      for (n in ((K = c.frame + (parseInt(R.autoSleep, 10) || 120)), $)) {
                          for (e = (t = $[n].tweens).length; --e > -1; ) t[e]._gc && t.splice(e, 1);
                          0 === t.length && delete $[n];
                      }
                      if ((!(n = G._first) || n._paused) && R.autoSleep && !Q._first && 1 === c._listeners.tick.length) {
                          for (; n && n._paused; ) n = n._next;
                          n || c.sleep();
                      }
                  }
              }),
              c.addEventListener("tick", P._updateRoot);
          var J = function (e, t, n) {
                  var i,
                      r,
                      s = e._gsTweenID;
                  if (($[s || (e._gsTweenID = s = "t" + Y++)] || ($[s] = { target: e, tweens: [] }), t && (((i = $[s].tweens)[(r = i.length)] = t), n))) for (; --r > -1; ) i[r] === t && i.splice(r, 1);
                  return $[s].tweens;
              },
              ee = function (e, t, n, i) {
                  var r,
                      s,
                      o = e.vars.onOverwrite;
                  return o && (r = o(e, t, n, i)), (o = R.onOverwrite) && (s = o(e, t, n, i)), !1 !== r && !1 !== s;
              },
              te = function (e, t, n, i, r) {
                  var s, o, a, l;
                  if (1 === i || i >= 4) {
                      for (l = r.length, s = 0; l > s; s++)
                          if ((a = r[s]) !== t) a._gc || (a._kill(null, e, t) && (o = !0));
                          else if (5 === i) break;
                      return o;
                  }
                  var c,
                      u = t._startTime + d,
                      f = [],
                      h = 0,
                      p = 0 === t._duration;
                  for (s = r.length; --s > -1; )
                      (a = r[s]) === t ||
                          a._gc ||
                          a._paused ||
                          (a._timeline !== t._timeline
                              ? ((c = c || ne(t, 0, p)), 0 === ne(a, c, p) && (f[h++] = a))
                              : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && (((p || !a._initted) && u - a._startTime <= 2 * d) || (f[h++] = a)));
                  for (s = h; --s > -1; )
                      if (((l = (a = f[s])._firstPT), 2 === i && a._kill(n, e, t) && (o = !0), 2 !== i || (!a._firstPT && a._initted && l))) {
                          if (2 !== i && !ee(a, t)) continue;
                          a._enabled(!1, !1) && (o = !0);
                      }
                  return o;
              },
              ne = function (e, t, n) {
                  for (var i = e._timeline, r = i._timeScale, s = e._startTime; i._timeline; ) {
                      if (((s += i._startTime), (r *= i._timeScale), i._paused)) return -100;
                      i = i._timeline;
                  }
                  return (s /= r) > t ? s - t : (n && s === t) || (!e._initted && 2 * d > s - t) ? d : (s += e.totalDuration() / e._timeScale / r) > t + d ? 0 : s - t - d;
              };
          (l._init = function () {
              var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  o = this.vars,
                  a = this._overwrittenProps,
                  l = this._duration,
                  c = !!o.immediateRender,
                  u = o.ease,
                  f = this._startAt;
              if (o.startAt) {
                  for (i in (f && (f.render(-1, !0), f.kill()), (r = {}), o.startAt)) r[i] = o.startAt[i];
                  if (
                      ((r.data = "isStart"),
                      (r.overwrite = !1),
                      (r.immediateRender = !0),
                      (r.lazy = c && !1 !== o.lazy),
                      (r.startAt = r.delay = null),
                      (r.onUpdate = o.onUpdate),
                      (r.onUpdateParams = o.onUpdateParams),
                      (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                      (this._startAt = R.to(this.target || {}, 0, r)),
                      c)
                  )
                      if (this._time > 0) this._startAt = null;
                      else if (0 !== l) return;
              } else if (o.runBackwards && 0 !== l)
                  if (f) f.render(-1, !0), f.kill(), (this._startAt = null);
                  else {
                      for (i in (0 !== this._time && (c = !1), (n = {}), o)) (U[i] && "autoCSS" !== i) || (n[i] = o[i]);
                      if (((n.overwrite = 0), (n.data = "isFromStart"), (n.lazy = c && !1 !== o.lazy), (n.immediateRender = c), (this._startAt = R.to(this.target, 0, n)), c)) {
                          if (0 === this._time) return;
                      } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                  }
              if (
                  ((this._ease = u = u ? (u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : T[u] || R.defaultEase) : R.defaultEase),
                  o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)),
                  (this._easeType = this._ease._type),
                  (this._easePower = this._ease._power),
                  (this._firstPT = null),
                  this._targets)
              )
                  for (s = this._targets.length, e = 0; s > e; e++) this._initProps(this._targets[e], (this._propLookup[e] = {}), this._siblings[e], a ? a[e] : null, e) && (t = !0);
              else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
              if ((t && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), o.runBackwards))
                  for (n = this._firstPT; n; ) (n.s += n.c), (n.c = -n.c), (n = n._next);
              (this._onUpdate = o.onUpdate), (this._initted = !0);
          }),
              (l._initProps = function (t, n, i, r, s) {
                  var o, a, l, c, u, f;
                  if (null == t) return !1;
                  for (o in (M[t._gsTweenID] && Z(),
                  this.vars.css ||
                      (t.style &&
                          t !== e &&
                          t.nodeType &&
                          W.css &&
                          !1 !== this.vars.autoCSS &&
                          (function (e, t) {
                              var n,
                                  i = {};
                              for (n in e)
                                  U[n] ||
                                      (n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n) ||
                                      !(!W[n] || (W[n] && W[n]._autoCSS)) ||
                                      ((i[n] = e[n]), delete e[n]);
                              e.css = i;
                          })(this.vars, t)),
                  this.vars))
                      if (((f = this.vars[o]), U[o])) f && (f instanceof Array || (f.push && g(f))) && -1 !== f.join("").indexOf("{self}") && (this.vars[o] = f = this._swapSelfInParams(f, this));
                      else if (W[o] && (c = new W[o]())._onInitTween(t, this.vars[o], this, s)) {
                          for (this._firstPT = u = { _next: this._firstPT, t: c, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: c._priority, m: 0 }, a = c._overwriteProps.length; --a > -1; ) n[c._overwriteProps[a]] = this._firstPT;
                          (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
                      } else n[o] = z.call(this, t, o, "get", f, o, 0, null, this.vars.stringFilter, s);
                  return r && this._kill(r, t)
                      ? this._initProps(t, n, i, r, s)
                      : this._overwrite > 1 && this._firstPT && i.length > 1 && te(t, this, n, this._overwrite, i)
                      ? (this._kill(n, t), this._initProps(t, n, i, r, s))
                      : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (M[t._gsTweenID] = !0), l);
              }),
              (l.render = function (e, t, n) {
                  var i,
                      r,
                      s,
                      o,
                      a = this,
                      l = a._time,
                      c = a._duration,
                      u = a._rawPrevTime;
                  if (e >= c - d && e >= 0)
                      (a._totalTime = a._time = c),
                          (a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1),
                          a._reversed || ((i = !0), (r = "onComplete"), (n = n || a._timeline.autoRemoveChildren)),
                          0 === c &&
                              (a._initted || !a.vars.lazy || n) &&
                              (a._startTime === a._timeline._duration && (e = 0),
                              (0 > u || (0 >= e && e >= -d) || (u === d && "isPause" !== a.data)) && u !== e && ((n = !0), u > d && (r = "onReverseComplete")),
                              (a._rawPrevTime = o = !t || e || u === e ? e : d));
                  else if (d > e)
                      (a._totalTime = a._time = 0),
                          (a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0),
                          (0 !== l || (0 === c && u > 0)) && ((r = "onReverseComplete"), (i = a._reversed)),
                          e > -d ? (e = 0) : 0 > e && ((a._active = !1), 0 === c && (a._initted || !a.vars.lazy || n) && (u >= 0 && (u !== d || "isPause" !== a.data) && (n = !0), (a._rawPrevTime = o = !t || e || u === e ? e : d))),
                          (!a._initted || (a._startAt && a._startAt.progress())) && (n = !0);
                  else if (((a._totalTime = a._time = e), a._easeType)) {
                      var f = e / c,
                          h = a._easeType,
                          p = a._easePower;
                      (1 === h || (3 === h && f >= 0.5)) && (f = 1 - f),
                          3 === h && (f *= 2),
                          1 === p ? (f *= f) : 2 === p ? (f *= f * f) : 3 === p ? (f *= f * f * f) : 4 === p && (f *= f * f * f * f),
                          (a.ratio = 1 === h ? 1 - f : 2 === h ? f : 0.5 > e / c ? f / 2 : 1 - f / 2);
                  } else a.ratio = a._ease.getRatio(e / c);
                  if (a._time !== l || n) {
                      if (!a._initted) {
                          if ((a._init(), !a._initted || a._gc)) return;
                          if (!n && a._firstPT && ((!1 !== a.vars.lazy && a._duration) || (a.vars.lazy && !a._duration))) return (a._time = a._totalTime = l), (a._rawPrevTime = u), j.push(a), void (a._lazy = [e, t]);
                          a._time && !i ? (a.ratio = a._ease.getRatio(a._time / c)) : i && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1));
                      }
                      for (
                          !1 !== a._lazy && (a._lazy = !1),
                              a._active || (!a._paused && a._time !== l && e >= 0 && (a._active = !0)),
                              0 === l && (a._startAt && (e >= 0 ? a._startAt.render(e, !0, n) : r || (r = "_dummyGS")), a.vars.onStart && (0 !== a._time || 0 === c) && (t || a._callback("onStart"))),
                              s = a._firstPT;
                          s;

                      )
                          s.f ? s.t[s.p](s.c * a.ratio + s.s) : (s.t[s.p] = s.c * a.ratio + s.s), (s = s._next);
                      a._onUpdate && (0 > e && a._startAt && -1e-4 !== e && a._startAt.render(e, !0, n), t || ((a._time !== l || i || n) && a._callback("onUpdate"))),
                          r &&
                              (!a._gc || n) &&
                              (0 > e && a._startAt && !a._onUpdate && -1e-4 !== e && a._startAt.render(e, !0, n),
                              i && (a._timeline.autoRemoveChildren && a._enabled(!1, !1), (a._active = !1)),
                              !t && a.vars[r] && a._callback(r),
                              0 === c && a._rawPrevTime === d && o !== d && (a._rawPrevTime = 0));
                  }
              }),
              (l._kill = function (e, t, n) {
                  if (("all" === e && (e = null), null == e && (null == t || t === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                  t = "string" != typeof t ? t || this._targets || this.target : R.selector(t) || t;
                  var i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      f,
                      h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                      d = this._firstPT;
                  if ((g(t) || N(t)) && "number" != typeof t[0]) for (i = t.length; --i > -1; ) this._kill(e, t[i], n) && (l = !0);
                  else {
                      if (this._targets) {
                          for (i = this._targets.length; --i > -1; )
                              if (t === this._targets[i]) {
                                  (a = this._propLookup[i] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all");
                                  break;
                              }
                      } else {
                          if (t !== this.target) return !1;
                          (a = this._propLookup), (r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all");
                      }
                      if (a) {
                          if (((c = e || a), (u = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill)), n && (R.onOverwrite || this.vars.onOverwrite))) {
                              for (s in c) a[s] && (f || (f = []), f.push(s));
                              if ((f || !e) && !ee(this, n, t, f)) return !1;
                          }
                          for (s in c)
                              (o = a[s]) &&
                                  (h && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                                  o.pg && o.t._kill(c) && (l = !0),
                                  (o.pg && 0 !== o.t._overwriteProps.length) || (o._prev ? (o._prev._next = o._next) : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), (o._next = o._prev = null)),
                                  delete a[s]),
                                  u && (r[s] = 1);
                          !this._firstPT && this._initted && d && this._enabled(!1, !1);
                      }
                  }
                  return l;
              }),
              (l.invalidate = function () {
                  this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this);
                  var e = this._time;
                  return (
                      (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                      (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                      (this._propLookup = this._targets ? {} : []),
                      P.prototype.invalidate.call(this),
                      this.vars.immediateRender && ((this._time = -d), this.render(e, !1, !1 !== this.vars.lazy)),
                      this
                  );
              }),
              (l._enabled = function (e, t) {
                  if ((u || c.wake(), e && this._gc)) {
                      var n,
                          i = this._targets;
                      if (i) for (n = i.length; --n > -1; ) this._siblings[n] = J(i[n], this, !0);
                      else this._siblings = J(this.target, this, !0);
                  }
                  return P.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(e ? "_onEnable" : "_onDisable", this);
              }),
              (R.to = function (e, t, n) {
                  return new R(e, t, n);
              }),
              (R.from = function (e, t, n) {
                  return (n.runBackwards = !0), (n.immediateRender = 0 != n.immediateRender), new R(e, t, n);
              }),
              (R.fromTo = function (e, t, n, i) {
                  return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), new R(e, t, i);
              }),
              (R.delayedCall = function (e, t, n, i, r) {
                  return new R(t, 0, { delay: e, onComplete: t, onCompleteParams: n, callbackScope: i, onReverseComplete: t, onReverseCompleteParams: n, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
              }),
              (R.set = function (e, t) {
                  return new R(e, 0, t);
              }),
              (R.getTweensOf = function (e, t) {
                  if (null == e) return [];
                  var n, i, r, s;
                  if (((e = "string" != typeof e ? e : R.selector(e) || e), (g(e) || N(e)) && "number" != typeof e[0])) {
                      for (n = e.length, i = []; --n > -1; ) i = i.concat(R.getTweensOf(e[n], t));
                      for (n = i.length; --n > -1; ) for (s = i[n], r = n; --r > -1; ) s === i[r] && i.splice(n, 1);
                  } else if (e._gsTweenID) for (n = (i = J(e).concat()).length; --n > -1; ) (i[n]._gc || (t && !i[n].isActive())) && i.splice(n, 1);
                  return i || [];
              }),
              (R.killTweensOf = R.killDelayedCallsTo = function (e, t, n) {
                  "object" == typeof t && ((n = t), (t = !1));
                  for (var i = R.getTweensOf(e, t), r = i.length; --r > -1; ) i[r]._kill(n, e);
              });
          var ie = b(
              "plugins.TweenPlugin",
              function (e, t) {
                  (this._overwriteProps = (e || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = ie.prototype);
              },
              !0
          );
          if (
              ((l = ie.prototype),
              (ie.version = "1.19.0"),
              (ie.API = 2),
              (l._firstPT = null),
              (l._addTween = z),
              (l.setRatio = q),
              (l._kill = function (e) {
                  var t,
                      n = this._overwriteProps,
                      i = this._firstPT;
                  if (null != e[this._propName]) this._overwriteProps = [];
                  else for (t = n.length; --t > -1; ) null != e[n[t]] && n.splice(t, 1);
                  for (; i; ) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? ((i._prev._next = i._next), (i._prev = null)) : this._firstPT === i && (this._firstPT = i._next)), (i = i._next);
                  return !1;
              }),
              (l._mod = l._roundProps = function (e) {
                  for (var t, n = this._firstPT; n; ) (t = e[this._propName] || (null != n.n && e[n.n.split(this._propName + "_").join("")])) && "function" == typeof t && (2 === n.f ? (n.t._applyPT.m = t) : (n.m = t)), (n = n._next);
              }),
              (R._onPluginEvent = function (e, t) {
                  var n,
                      i,
                      r,
                      s,
                      o,
                      a = t._firstPT;
                  if ("_onInitAllProps" === e) {
                      for (; a; ) {
                          for (o = a._next, i = r; i && i.pr > a.pr; ) i = i._next;
                          (a._prev = i ? i._prev : s) ? (a._prev._next = a) : (r = a), (a._next = i) ? (i._prev = a) : (s = a), (a = o);
                      }
                      a = t._firstPT = r;
                  }
                  for (; a; ) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), (a = a._next);
                  return n;
              }),
              (ie.activate = function (e) {
                  for (var t = e.length; --t > -1; ) e[t].API === ie.API && (W[new e[t]()._propName] = e[t]);
                  return !0;
              }),
              (y.plugin = function (e) {
                  if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                  var t,
                      n = e.propName,
                      i = e.priority || 0,
                      r = e.overwriteProps,
                      s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                      o = b(
                          "plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin",
                          function () {
                              ie.call(this, n, i), (this._overwriteProps = r || []);
                          },
                          !0 === e.global
                      ),
                      a = (o.prototype = new ie(n));
                  for (t in ((a.constructor = o), (o.API = e.API), s)) "function" == typeof e[t] && (a[s[t]] = e[t]);
                  return (o.version = e.version), ie.activate([o]), o;
              }),
              (o = e._gsQueue))
          ) {
              for (a = 0; a < o.length; a++) o[a]();
              for (l in _) _[l].func || e.console.log("GSAP encountered missing dependency: " + l);
          }
          u = !1;
      })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
  //     (window.onscroll = function () {
  //         myFunction();
  //     }),
  //     (window.onscroll = function () {
  //         myFunction();
  //     });
  // var header = document.getElementById("myHeader"),
  //     sticky = header.offsetTop;
  // function myFunction() {
  //     window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");
  // }
  jQuery("input").focus(function () {
      jQuery(this).parents(".form-group").addClass("focused");
  }),
      jQuery("textarea").focus(function () {
          jQuery(this).parents(".form-group").addClass("focused");
      }),
      jQuery("textarea").blur(function () {
          "" == jQuery(this).val() ? (jQuery(this).removeClass("filled"), jQuery(this).parents(".form-group").removeClass("focused")) : jQuery(this).addClass("filled");
      }),
      jQuery("input").blur(function () {
          "" == jQuery(this).val() ? (jQuery(this).removeClass("filled"), jQuery(this).parents(".form-group").removeClass("focused")) : jQuery(this).addClass("filled");
      }),
      jQuery(document).mousemove(function (e) {
          var t = e.clientX / jQuery(window).width() - 0.5,
              n = e.clientY / jQuery(window).height() - 0.5,
              i = jQuery(".box");
          jQuery(".coordinates");
          TweenLite.to(i, 0.6, { rotationY: 5 * t, rotationX: 5 * n, ease: Power1.easeOut, transformPerspective: 1500, transformOrigin: "center" });
      }),
      jQuery(window).scroll(function () {
          var e = $(window).scrollTop();
          jQuery(".zoom").css({ backgroundSize: 100 + e / 5 + "%", top: -e / 10 + "%" });
      }),
      $(window).scroll(function () {
          $(window).scrollTop() >= 100 ? $(".mainBannerBox").addClass("darkHeader") : $(".mainBannerBox").removeClass("darkHeader");
      });
  var cursor = $(".cursor"),
      follower = $(".cursor-follower"),
      posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;
  TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
          (posX += (mouseX - posX) / 9), (posY += (mouseY - posY) / 9), TweenMax.set(follower, { css: { left: posX - 12, top: posY - 12 } }), TweenMax.set(cursor, { css: { left: mouseX, top: mouseY } });
      },
  }),
      $(document).on("mousemove", function (e) {
          (mouseX = e.clientX), (mouseY = e.clientY);
      }),
      $(".link").on("mouseenter", function () {
          cursor.addClass("active"), follower.addClass("active");
      }),
      $(".link").on("mouseleave", function () {
          cursor.removeClass("active"), follower.removeClass("active");
      });
  const e = document.querySelector(".btn-bars"),
      t = document.querySelector(".btn-close"),
      n = document.querySelector(".navbar-collapse");
  e.addEventListener("click", () => {
      n.classList.add("showMenu");
  }),
      t.addEventListener("click", () => {
          n.classList.remove("showMenu");
      }),
      ScrollReveal({ reset: !0 }),
      ScrollReveal().reveal(".slide-up", { duration: 900, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0.3, scale: 0.9 }),
      ScrollReveal().reveal(".slide-right", { duration: 3e3, origin: "left", distance: "300px", easing: "ease-in-out" }),
      ScrollReveal().reveal(".slide-left", { duration: 3e3, origin: "right", distance: "300px", easing: "ease-in-out" }),
      ScrollReveal().reveal(".scaleUp", { duration: 4e3, scale: 0.85 }),
      ScrollReveal().reveal(".flip", { delay: 500, duration: 2e3, rotate: { x: 20, z: 20 } });
}

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('header').outerHeight();
jQuery(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = jQuery(this).scrollTop();
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        jQuery('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

$(document).ready(function () {
//   $("#fold").click(function () {
//       $("#fold_p").fadeOut(function () {
//           $("#fold_p").text(($("#fold_p").text() == 'Read Less -') ? 'Read More +' : 'Read Less -').fadeIn();
//       })
//   })
	$(".fold").click(function () {
		var fold_child = $(this).children('.fold_p').eq(0)
		var fold_child_text = fold_child.text()	
		
		fold_child.fadeOut(function () {
			fold_child.text((fold_child_text == 'Read Less -') ? 'Read More +' : 'Read Less -').fadeIn();			
		})		
      
  })
});