!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addQuarters"),
        require("date-fns/addYears"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subQuarters"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/endOfYear"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper"),
        require("date-fns/set"),
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addQuarters",
          "date-fns/addYears",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subQuarters",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/endOfYear",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
          "date-fns/set",
        ],
        t,
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addQuarters,
        e.addYears,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subQuarters,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        e.endOfMonth,
        e.endOfYear,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper,
        e.set,
      );
})(
  this,
  function (
    e,
    t,
    r,
    a,
    n,
    o,
    s,
    i,
    p,
    l,
    c,
    d,
    u,
    f,
    h,
    m,
    y,
    v,
    D,
    g,
    w,
    k,
    b,
    S,
    C,
    _,
    M,
    E,
    P,
    N,
    Y,
    x,
    O,
    I,
    T,
    R,
    L,
    F,
    A,
    q,
    Q,
    K,
    B,
    W,
    H,
    j,
    V,
    U,
    z,
    $,
    G,
    J,
    X,
    Z,
    ee,
    te,
    re,
    ae,
    ne,
    oe,
    se,
    ie,
    pe,
    le,
  ) {
    "use strict";
    function ce(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var de = ce(t),
      ue = ce(a),
      fe = ce(n),
      he = ce(o),
      me = ce(s),
      ye = ce(i),
      ve = ce(p),
      De = ce(l),
      ge = ce(c),
      we = ce(d),
      ke = ce(u),
      be = ce(f),
      Se = ce(h),
      Ce = ce(m),
      _e = ce(y),
      Me = ce(v),
      Ee = ce(D),
      Pe = ce(g),
      Ne = ce(w),
      Ye = ce(k),
      xe = ce(b),
      Oe = ce(S),
      Ie = ce(C),
      Te = ce(_),
      Re = ce(M),
      Le = ce(E),
      Fe = ce(P),
      Ae = ce(N),
      qe = ce(Y),
      Qe = ce(x),
      Ke = ce(O),
      Be = ce(I),
      We = ce(T),
      He = ce(R),
      je = ce(L),
      Ve = ce(F),
      Ue = ce(A),
      ze = ce(q),
      $e = ce(Q),
      Ge = ce(K),
      Je = ce(B),
      Xe = ce(W),
      Ze = ce(H),
      et = ce(j),
      tt = ce(U),
      rt = ce(z),
      at = ce($),
      nt = ce(G),
      ot = ce(J),
      st = ce(X),
      it = ce(Z),
      pt = ce(ee),
      lt = ce(te),
      ct = ce(re),
      dt = ce(ae),
      ut = ce(ne),
      ft = ce(oe),
      ht = ce(se),
      mt = ce(ie),
      yt = ce(le);
    function vt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function Dt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vt(Object(r), !0).forEach(function (t) {
              St(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : vt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
      }
      return e;
    }
    function gt(e) {
      return (
        (gt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        gt(e)
      );
    }
    function wt(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function kt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, Ot(a.key), a);
      }
    }
    function bt(e, t, r) {
      return (
        t && kt(e.prototype, t),
        r && kt(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function St(e, t, r) {
      return (
        (t = Ot(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function Ct() {
      return (
        (Ct = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }),
        Ct.apply(this, arguments)
      );
    }
    function _t(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && Et(e, t);
    }
    function Mt(e) {
      return (
        (Mt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Mt(e)
      );
    }
    function Et(e, t) {
      return (
        (Et = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Et(e, t)
      );
    }
    function Pt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function Nt(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          a = Mt(e);
        if (t) {
          var n = Mt(this).constructor;
          r = Reflect.construct(a, arguments, n);
        } else r = a.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Pt(e);
        })(this, r);
      };
    }
    function Yt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return xt(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return xt(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return xt(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function xt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function Ot(e) {
      var t = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var a = r.call(e, t || "default");
          if ("object" != typeof a) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : String(t);
    }
    var It = function (e, t) {
        switch (e) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          default:
            return t.date({ width: "full" });
        }
      },
      Tt = function (e, t) {
        switch (e) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          default:
            return t.time({ width: "full" });
        }
      },
      Rt = {
        p: Tt,
        P: function (e, t) {
          var r,
            a = e.match(/(P+)(p+)?/) || [],
            n = a[1],
            o = a[2];
          if (!o) return It(e, t);
          switch (n) {
            case "P":
              r = t.dateTime({ width: "short" });
              break;
            case "PP":
              r = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              r = t.dateTime({ width: "long" });
              break;
            default:
              r = t.dateTime({ width: "full" });
          }
          return r.replace("{{date}}", It(n, t)).replace("{{time}}", Tt(o, t));
        },
      },
      Lt = 12,
      Ft = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function At(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? ft.default(e)
          : dt.default(e)
        : new Date();
      return qt(t) ? t : null;
    }
    function qt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), he.default(e) && !lt.default(e, t)
      );
    }
    function Qt(e, t, r) {
      if ("en" === r) return me.default(e, t, { awareOfUnicodeTokens: !0 });
      var a = tr(r);
      return (
        r &&
          !a &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              r,
              '"].',
            ),
          ),
        !a && er() && tr(er()) && (a = tr(er())),
        me.default(e, t, { locale: a || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Kt(e, t) {
      var r = t.dateFormat,
        a = t.locale;
      return (e && Qt(e, Array.isArray(r) ? r[0] : r, a)) || "";
    }
    function Bt(e, t) {
      var r = t.hour,
        a = void 0 === r ? 0 : r,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        i = void 0 === s ? 0 : s;
      return Qe.default(qe.default(Ae.default(e, i), o), a);
    }
    function Wt(e, t, r) {
      var a = tr(t || er());
      return Ge.default(e, { locale: a, weekStartsOn: r });
    }
    function Ht(e) {
      return Je.default(e);
    }
    function jt(e) {
      return Ze.default(e);
    }
    function Vt(e) {
      return Xe.default(e);
    }
    function Ut() {
      return $e.default(At());
    }
    function zt(e, t) {
      return e && t ? st.default(e, t) : !e && !t;
    }
    function $t(e, t) {
      return e && t ? ot.default(e, t) : !e && !t;
    }
    function Gt(e, t) {
      return e && t ? it.default(e, t) : !e && !t;
    }
    function Jt(e, t) {
      return e && t ? nt.default(e, t) : !e && !t;
    }
    function Xt(e, t) {
      return e && t ? at.default(e, t) : !e && !t;
    }
    function Zt(e, t, r) {
      var a,
        n = $e.default(t),
        o = et.default(r);
      try {
        a = ct.default(e, { start: n, end: o });
      } catch (e) {
        a = !1;
      }
      return a;
    }
    function er() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function tr(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function rr(e, t) {
      return Qt(Ke.default(At(), e), "LLLL", t);
    }
    function ar(e, t) {
      return Qt(Ke.default(At(), e), "LLL", t);
    }
    function nr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        i = t.includeDateIntervals,
        p = t.filterDate;
      return (
        ur(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return Jt(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var r = t.start,
              a = t.end;
            return ct.default(e, { start: r, end: a });
          })) ||
        (s &&
          !s.some(function (t) {
            return Jt(e, t);
          })) ||
        (i &&
          !i.some(function (t) {
            var r = t.start,
              a = t.end;
            return ct.default(e, { start: r, end: a });
          })) ||
        (p && !p(At(e))) ||
        !1
      );
    }
    function or(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeDates,
        a = t.excludeDateIntervals;
      return a && a.length > 0
        ? a.some(function (t) {
            var r = t.start,
              a = t.end;
            return ct.default(e, { start: r, end: a });
          })
        : (r &&
            r.some(function (t) {
              return Jt(e, t);
            })) ||
            !1;
    }
    function sr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ur(e, { minDate: Je.default(r), maxDate: tt.default(a) }) ||
        (n &&
          n.some(function (t) {
            return $t(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return $t(e, t);
          })) ||
        (s && !s(At(e))) ||
        !1
      );
    }
    function ir(e, t, r, a) {
      var n = Le.default(e),
        o = Te.default(e),
        s = Le.default(t),
        i = Te.default(t),
        p = Le.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function pr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ur(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return Gt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Gt(e, t);
          })) ||
        (s && !s(At(e))) ||
        !1
      );
    }
    function lr(e, t, r) {
      if (!he.default(t) || !he.default(r)) return !1;
      var a = Le.default(t),
        n = Le.default(r);
      return a <= e && n >= e;
    }
    function cr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate,
        i = new Date(e, 0, 1);
      return (
        ur(i, { minDate: Ze.default(r), maxDate: rt.default(a) }) ||
        (n &&
          n.some(function (e) {
            return zt(i, e);
          })) ||
        (o &&
          !o.some(function (e) {
            return zt(i, e);
          })) ||
        (s && !s(At(i))) ||
        !1
      );
    }
    function dr(e, t, r, a) {
      var n = Le.default(e),
        o = Re.default(e),
        s = Le.default(t),
        i = Re.default(t),
        p = Le.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function ur(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate;
      return (r && Ve.default(e, r) < 0) || (a && Ve.default(e, a) > 0);
    }
    function fr(e, t) {
      return t.some(function (t) {
        return (
          Ye.default(t) === Ye.default(e) && Ne.default(t) === Ne.default(e)
        );
      });
    }
    function hr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeTimes,
        a = t.includeTimes,
        n = t.filterTime;
      return (r && fr(e, r)) || (a && !fr(e, a)) || (n && !n(e)) || !1;
    }
    function mr(e, t) {
      var r = t.minTime,
        a = t.maxTime;
      if (!r || !a) throw new Error("Both minTime and maxTime props required");
      var n,
        o = At(),
        s = Qe.default(qe.default(o, Ne.default(e)), Ye.default(e)),
        i = Qe.default(qe.default(o, Ne.default(r)), Ye.default(r)),
        p = Qe.default(qe.default(o, Ne.default(a)), Ye.default(a));
      try {
        n = !ct.default(s, { start: i, end: p });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function yr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = _e.default(e, 1);
      return (
        (r && Ue.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Ue.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function vr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = we.default(e, 1);
      return (
        (r && Ue.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Ue.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Dr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = Ee.default(e, 1);
      return (
        (r && ze.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return ze.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function gr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = be.default(e, 1);
      return (
        (r && ze.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return ze.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function wr(e) {
      var t = e.minDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return Ve.default(e, t) >= 0;
        });
        return He.default(a);
      }
      return r ? He.default(r) : t;
    }
    function kr(e) {
      var t = e.maxDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return Ve.default(e, t) <= 0;
        });
        return je.default(a);
      }
      return r ? je.default(r) : t;
    }
    function br() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          r = new Map(),
          a = 0,
          n = e.length;
        a < n;
        a++
      ) {
        var o = e[a];
        if (fe.default(o)) {
          var s = Qt(o, "MM.dd.yyyy"),
            i = r.get(s) || [];
          i.includes(t) || (i.push(t), r.set(s, i));
        } else if ("object" === gt(o)) {
          var p = Object.keys(o),
            l = p[0],
            c = o[p[0]];
          if ("string" == typeof l && c.constructor === Array)
            for (var d = 0, u = c.length; d < u; d++) {
              var f = Qt(c[d], "MM.dd.yyyy"),
                h = r.get(f) || [];
              h.includes(l) || (h.push(l), r.set(f, h));
            }
        }
      }
      return r;
    }
    function Sr() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "react-datepicker__day--holidays",
        r = new Map();
      return (
        e.forEach(function (e) {
          var a = e.date,
            n = e.holidayName;
          if (fe.default(a)) {
            var o = Qt(a, "MM.dd.yyyy"),
              s = r.get(o) || {};
            if (
              !("className" in s) ||
              s.className !== t ||
              ((i = s.holidayNames),
              (p = [n]),
              i.length !== p.length ||
                !i.every(function (e, t) {
                  return e === p[t];
                }))
            ) {
              var i, p;
              s.className = t;
              var l = s.holidayNames;
              (s.holidayNames = l ? [].concat(Yt(l), [n]) : [n]), r.set(o, s);
            }
          }
        }),
        r
      );
    }
    function Cr(e, t, r, a, n) {
      for (var o = n.length, s = [], i = 0; i < o; i++) {
        var p = ye.default(ve.default(e, Ye.default(n[i])), Ne.default(n[i])),
          l = ye.default(e, (r + 1) * a);
        pt.default(p, t) && lt.default(p, l) && s.push(n[i]);
      }
      return s;
    }
    function _r(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function Mr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lt,
        r = Math.ceil(Le.default(e) / t) * t;
      return { startPeriod: r - (t - 1), endPeriod: r };
    }
    function Er(e) {
      var t = e.getSeconds(),
        r = e.getMilliseconds();
      return dt.default(e.getTime() - 1e3 * t - r);
    }
    function Pr(e, t, r, a) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          i = !0;
        r && (i = Le.default(r) <= s),
          a && i && (i = Le.default(a) >= s),
          i && n.push(s);
      }
      return n;
    }
    var Nr = (function (e) {
        _t(a, e);
        var r = Nt(a);
        function a(e) {
          var n;
          wt(this, a),
            St(Pt((n = r.call(this, e))), "renderOptions", function () {
              var e = n.props.year,
                t = n.state.yearsList.map(function (t) {
                  return de.default.createElement(
                    "div",
                    {
                      className:
                        e === t
                          ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                          : "react-datepicker__year-option",
                      key: t,
                      onClick: n.onChange.bind(Pt(n), t),
                      "aria-selected": e === t ? "true" : void 0,
                    },
                    e === t
                      ? de.default.createElement(
                          "span",
                          {
                            className:
                              "react-datepicker__year-option--selected",
                          },
                          "✓",
                        )
                      : "",
                    t,
                  );
                }),
                r = n.props.minDate ? Le.default(n.props.minDate) : null,
                a = n.props.maxDate ? Le.default(n.props.maxDate) : null;
              return (
                (a &&
                  n.state.yearsList.find(function (e) {
                    return e === a;
                  })) ||
                  t.unshift(
                    de.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "upcoming",
                        onClick: n.incrementYears,
                      },
                      de.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                      }),
                    ),
                  ),
                (r &&
                  n.state.yearsList.find(function (e) {
                    return e === r;
                  })) ||
                  t.push(
                    de.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "previous",
                        onClick: n.decrementYears,
                      },
                      de.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                      }),
                    ),
                  ),
                t
              );
            }),
            St(Pt(n), "onChange", function (e) {
              n.props.onChange(e);
            }),
            St(Pt(n), "handleClickOutside", function () {
              n.props.onCancel();
            }),
            St(Pt(n), "shiftYears", function (e) {
              var t = n.state.yearsList.map(function (t) {
                return t + e;
              });
              n.setState({ yearsList: t });
            }),
            St(Pt(n), "incrementYears", function () {
              return n.shiftYears(1);
            }),
            St(Pt(n), "decrementYears", function () {
              return n.shiftYears(-1);
            });
          var o = e.yearDropdownItemNumber,
            s = e.scrollableYearDropdown,
            i = o || (s ? 10 : 5);
          return (
            (n.state = {
              yearsList: Pr(n.props.year, i, n.props.minDate, n.props.maxDate),
            }),
            (n.dropdownRef = t.createRef()),
            n
          );
        }
        return (
          bt(a, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.dropdownRef.current;
                if (e) {
                  var t = e.children ? Array.from(e.children) : null,
                    r = t
                      ? t.find(function (e) {
                          return e.ariaSelected;
                        })
                      : null;
                  e.scrollTop = r
                    ? r.offsetTop + (r.clientHeight - e.clientHeight) / 2
                    : (e.scrollHeight - e.clientHeight) / 2;
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = ue.default({
                  "react-datepicker__year-dropdown": !0,
                  "react-datepicker__year-dropdown--scrollable":
                    this.props.scrollableYearDropdown,
                });
                return de.default.createElement(
                  "div",
                  { className: e, ref: this.dropdownRef },
                  this.renderOptions(),
                );
              },
            },
          ]),
          a
        );
      })(de.default.Component),
      Yr = ht.default(Nr),
      xr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            St(Pt(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Le.default(e.props.minDate) : 1900,
                  r = e.props.maxDate ? Le.default(e.props.maxDate) : 2100,
                  a = [],
                  n = t;
                n <= r;
                n++
              )
                a.push(
                  de.default.createElement("option", { key: n, value: n }, n),
                );
              return a;
            }),
            St(Pt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            St(Pt(e), "renderSelectMode", function () {
              return de.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            St(Pt(e), "renderReadView", function (t) {
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                de.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year,
                ),
              );
            }),
            St(Pt(e), "renderDropdown", function () {
              return de.default.createElement(Yr, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            St(Pt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            St(Pt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            St(Pt(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                },
              );
            }),
            St(Pt(e), "handleYearChange", function (t, r) {
              e.onSelect(t, r), e.setOpen();
            }),
            St(Pt(e), "onSelect", function (t, r) {
              e.props.onSelect && e.props.onSelect(t, r);
            }),
            St(Pt(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Or = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(
              Pt((e = t.call.apply(t, [this].concat(n)))),
              "isSelectedMonth",
              function (t) {
                return e.props.month === t;
              },
            ),
            St(Pt(e), "renderOptions", function () {
              return e.props.monthNames.map(function (t, r) {
                return de.default.createElement(
                  "div",
                  {
                    className: e.isSelectedMonth(r)
                      ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                      : "react-datepicker__month-option",
                    key: t,
                    onClick: e.onChange.bind(Pt(e), r),
                    "aria-selected": e.isSelectedMonth(r) ? "true" : void 0,
                  },
                  e.isSelectedMonth(r)
                    ? de.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected",
                        },
                        "✓",
                      )
                    : "",
                  t,
                );
              });
            }),
            St(Pt(e), "onChange", function (t) {
              return e.props.onChange(t);
            }),
            St(Pt(e), "handleClickOutside", function () {
              return e.props.onCancel();
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__month-dropdown" },
                  this.renderOptions(),
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Ir = ht.default(Or),
      Tr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            St(Pt(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return de.default.createElement(
                  "option",
                  { key: t, value: t },
                  e,
                );
              });
            }),
            St(Pt(e), "renderSelectMode", function (t) {
              return de.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t),
              );
            }),
            St(Pt(e), "renderReadView", function (t, r) {
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                de.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  r[e.props.month],
                ),
              );
            }),
            St(Pt(e), "renderDropdown", function (t) {
              return de.default.createElement(Ir, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            St(Pt(e), "renderScrollMode", function (t) {
              var r = e.state.dropdownVisible,
                a = [e.renderReadView(!r, t)];
              return r && a.unshift(e.renderDropdown(t)), a;
            }),
            St(Pt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            St(Pt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return ar(e, t.props.locale);
                        }
                      : function (e) {
                          return rr(e, t.props.locale);
                        },
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(r);
                    break;
                  case "select":
                    e = this.renderSelectMode(r);
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component);
    function Rr(e, t) {
      for (var r = [], a = Ht(e), n = Ht(t); !pt.default(a, n); )
        r.push(At(a)), (a = we.default(a, 1));
      return r;
    }
    var Lr,
      Fr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(Pt((a = t.call(this, e))), "renderOptions", function () {
              return a.state.monthYearsList.map(function (e) {
                var t = Fe.default(e),
                  r = zt(a.props.date, e) && $t(a.props.date, e);
                return de.default.createElement(
                  "div",
                  {
                    className: r
                      ? "react-datepicker__month-year-option--selected_month-year"
                      : "react-datepicker__month-year-option",
                    key: t,
                    onClick: a.onChange.bind(Pt(a), t),
                    "aria-selected": r ? "true" : void 0,
                  },
                  r
                    ? de.default.createElement(
                        "span",
                        {
                          className:
                            "react-datepicker__month-year-option--selected",
                        },
                        "✓",
                      )
                    : "",
                  Qt(e, a.props.dateFormat, a.props.locale),
                );
              });
            }),
            St(Pt(a), "onChange", function (e) {
              return a.props.onChange(e);
            }),
            St(Pt(a), "handleClickOutside", function () {
              a.props.onCancel();
            }),
            (a.state = {
              monthYearsList: Rr(a.props.minDate, a.props.maxDate),
            }),
            a
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                var e = ue.default({
                  "react-datepicker__month-year-dropdown": !0,
                  "react-datepicker__month-year-dropdown--scrollable":
                    this.props.scrollableMonthYearDropdown,
                });
                return de.default.createElement(
                  "div",
                  { className: e },
                  this.renderOptions(),
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Ar = ht.default(Fr),
      qr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            St(Pt(e), "renderSelectOptions", function () {
              for (
                var t = Ht(e.props.minDate), r = Ht(e.props.maxDate), a = [];
                !pt.default(t, r);

              ) {
                var n = Fe.default(t);
                a.push(
                  de.default.createElement(
                    "option",
                    { key: n, value: n },
                    Qt(t, e.props.dateFormat, e.props.locale),
                  ),
                ),
                  (t = we.default(t, 1));
              }
              return a;
            }),
            St(Pt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            St(Pt(e), "renderSelectMode", function () {
              return de.default.createElement(
                "select",
                {
                  value: Fe.default(Ht(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            St(Pt(e), "renderReadView", function (t) {
              var r = Qt(e.props.date, e.props.dateFormat, e.props.locale);
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                de.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  r,
                ),
              );
            }),
            St(Pt(e), "renderDropdown", function () {
              return de.default.createElement(Ar, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            St(Pt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            St(Pt(e), "onChange", function (t) {
              e.toggleDropdown();
              var r = At(parseInt(t));
              (zt(e.props.date, r) && $t(e.props.date, r)) ||
                e.props.onChange(r);
            }),
            St(Pt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Qr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(
              Pt((e = t.call.apply(t, [this].concat(n)))),
              "dayEl",
              de.default.createRef(),
            ),
            St(Pt(e), "handleClick", function (t) {
              !e.isDisabled() && e.props.onClick && e.props.onClick(t);
            }),
            St(Pt(e), "handleMouseEnter", function (t) {
              !e.isDisabled() &&
                e.props.onMouseEnter &&
                e.props.onMouseEnter(t);
            }),
            St(Pt(e), "handleOnKeyDown", function (t) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                e.props.handleOnKeyDown(t);
            }),
            St(Pt(e), "isSameDay", function (t) {
              return Jt(e.props.day, t);
            }),
            St(Pt(e), "isKeyboardSelected", function () {
              return (
                !e.props.disabledKeyboardNavigation &&
                !e.isSameDay(e.props.selected) &&
                e.isSameDay(e.props.preSelection)
              );
            }),
            St(Pt(e), "isDisabled", function () {
              return nr(e.props.day, e.props);
            }),
            St(Pt(e), "isExcluded", function () {
              return or(e.props.day, e.props);
            }),
            St(Pt(e), "getHighLightedClass", function () {
              var t = e.props,
                r = t.day,
                a = t.highlightDates;
              if (!a) return !1;
              var n = Qt(r, "MM.dd.yyyy");
              return a.get(n);
            }),
            St(Pt(e), "getHolidaysClass", function () {
              var t = e.props,
                r = t.day,
                a = t.holidays;
              if (!a) return !1;
              var n = Qt(r, "MM.dd.yyyy");
              return a.has(n) ? [a.get(n).className] : void 0;
            }),
            St(Pt(e), "isInRange", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Zt(r, a, n);
            }),
            St(Pt(e), "isInSelectingRange", function () {
              var t,
                r = e.props,
                a = r.day,
                n = r.selectsStart,
                o = r.selectsEnd,
                s = r.selectsRange,
                i = r.selectsDisabledDaysInRange,
                p = r.startDate,
                l = r.endDate,
                c =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return (
                !(!(n || o || s) || !c || (!i && e.isDisabled())) &&
                (n && l && (lt.default(c, l) || Xt(c, l))
                  ? Zt(a, c, l)
                  : ((o && p && (pt.default(c, p) || Xt(c, p))) ||
                      !(!s || !p || l || (!pt.default(c, p) && !Xt(c, p)))) &&
                    Zt(a, p, c))
              );
            }),
            St(Pt(e), "isSelectingRangeStart", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.selectsStart,
                s =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return Jt(a, o ? s : n);
            }),
            St(Pt(e), "isSelectingRangeEnd", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.endDate,
                o = r.selectsEnd,
                s = r.selectsRange,
                i =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return Jt(a, o || s ? i : n);
            }),
            St(Pt(e), "isRangeStart", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Jt(a, r);
            }),
            St(Pt(e), "isRangeEnd", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Jt(n, r);
            }),
            St(Pt(e), "isWeekend", function () {
              var t = xe.default(e.props.day);
              return 0 === t || 6 === t;
            }),
            St(Pt(e), "isAfterMonth", function () {
              return (
                void 0 !== e.props.month &&
                (e.props.month + 1) % 12 === Te.default(e.props.day)
              );
            }),
            St(Pt(e), "isBeforeMonth", function () {
              return (
                void 0 !== e.props.month &&
                (Te.default(e.props.day) + 1) % 12 === e.props.month
              );
            }),
            St(Pt(e), "isCurrentDay", function () {
              return e.isSameDay(At());
            }),
            St(Pt(e), "isSelected", function () {
              return e.isSameDay(e.props.selected);
            }),
            St(Pt(e), "getClassNames", function (t) {
              var r,
                a = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
              return ue.default(
                "react-datepicker__day",
                a,
                "react-datepicker__day--" + Qt(e.props.day, "ddd", r),
                {
                  "react-datepicker__day--disabled": e.isDisabled(),
                  "react-datepicker__day--excluded": e.isExcluded(),
                  "react-datepicker__day--selected": e.isSelected(),
                  "react-datepicker__day--keyboard-selected":
                    e.isKeyboardSelected(),
                  "react-datepicker__day--range-start": e.isRangeStart(),
                  "react-datepicker__day--range-end": e.isRangeEnd(),
                  "react-datepicker__day--in-range": e.isInRange(),
                  "react-datepicker__day--in-selecting-range":
                    e.isInSelectingRange(),
                  "react-datepicker__day--selecting-range-start":
                    e.isSelectingRangeStart(),
                  "react-datepicker__day--selecting-range-end":
                    e.isSelectingRangeEnd(),
                  "react-datepicker__day--today": e.isCurrentDay(),
                  "react-datepicker__day--weekend": e.isWeekend(),
                  "react-datepicker__day--outside-month":
                    e.isAfterMonth() || e.isBeforeMonth(),
                },
                e.getHighLightedClass("react-datepicker__day--highlighted"),
                e.getHolidaysClass(),
              );
            }),
            St(Pt(e), "getAriaLabel", function () {
              var t = e.props,
                r = t.day,
                a = t.ariaLabelPrefixWhenEnabled,
                n = void 0 === a ? "Choose" : a,
                o = t.ariaLabelPrefixWhenDisabled,
                s = void 0 === o ? "Not available" : o,
                i = e.isDisabled() || e.isExcluded() ? s : n;
              return "".concat(i, " ").concat(Qt(r, "PPPP", e.props.locale));
            }),
            St(Pt(e), "getTitle", function () {
              var t = e.props,
                r = t.day,
                a = t.holidays,
                n = void 0 === a ? new Map() : a,
                o = Qt(r, "MM.dd.yyyy");
              return n.has(o) && n.get(o).holidayNames.length > 0
                ? n.get(o).holidayNames.join(", ")
                : "";
            }),
            St(Pt(e), "getTabIndex", function (t, r) {
              var a = t || e.props.selected,
                n = r || e.props.preSelection;
              return e.isKeyboardSelected() || (e.isSameDay(a) && Jt(n, a))
                ? 0
                : -1;
            }),
            St(Pt(e), "handleFocusDay", function () {
              var t,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a = !1;
              0 === e.getTabIndex() &&
                !r.isInputFocused &&
                e.isSameDay(e.props.preSelection) &&
                ((document.activeElement &&
                  document.activeElement !== document.body) ||
                  (a = !0),
                e.props.inline && !e.props.shouldFocusDayInline && (a = !1),
                e.props.containerRef &&
                  e.props.containerRef.current &&
                  e.props.containerRef.current.contains(
                    document.activeElement,
                  ) &&
                  document.activeElement.classList.contains(
                    "react-datepicker__day",
                  ) &&
                  (a = !0),
                e.props.monthShowsDuplicateDaysEnd &&
                  e.isAfterMonth() &&
                  (a = !1),
                e.props.monthShowsDuplicateDaysStart &&
                  e.isBeforeMonth() &&
                  (a = !1)),
                a &&
                  (null === (t = e.dayEl.current) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }));
            }),
            St(Pt(e), "renderDayContents", function () {
              return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
                (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
                ? null
                : e.props.renderDayContents
                ? e.props.renderDayContents(
                    Oe.default(e.props.day),
                    e.props.day,
                  )
                : Oe.default(e.props.day);
            }),
            St(Pt(e), "render", function () {
              return de.default.createElement(
                "div",
                {
                  ref: e.dayEl,
                  className: e.getClassNames(e.props.day),
                  onKeyDown: e.handleOnKeyDown,
                  onClick: e.handleClick,
                  onMouseEnter: e.handleMouseEnter,
                  tabIndex: e.getTabIndex(),
                  "aria-label": e.getAriaLabel(),
                  role: "option",
                  title: e.getTitle(),
                  "aria-disabled": e.isDisabled(),
                  "aria-current": e.isCurrentDay() ? "date" : void 0,
                  "aria-selected": e.isSelected() || e.isInRange(),
                },
                e.renderDayContents(),
                "" !== e.getTitle() &&
                  de.default.createElement(
                    "span",
                    { className: "holiday-overlay" },
                    e.getTitle(),
                  ),
              );
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.handleFocusDay();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.handleFocusDay(e);
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Kr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(
              Pt((e = t.call.apply(t, [this].concat(n)))),
              "handleClick",
              function (t) {
                e.props.onClick && e.props.onClick(t);
              },
            ),
            e
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.weekNumber,
                    r = e.ariaLabelPrefix,
                    a = void 0 === r ? "week " : r,
                    n = {
                      "react-datepicker__week-number": !0,
                      "react-datepicker__week-number--clickable": !!e.onClick,
                    };
                  return de.default.createElement(
                    "div",
                    {
                      className: ue.default(n),
                      "aria-label": ""
                        .concat(a, " ")
                        .concat(this.props.weekNumber),
                      onClick: this.handleClick,
                    },
                    t,
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { ariaLabelPrefix: "week " };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      Br = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(
              Pt((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, r) {
                e.props.onDayClick && e.props.onDayClick(t, r);
              },
            ),
            St(Pt(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            St(Pt(e), "handleWeekClick", function (t, r, a) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, r, a),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            St(Pt(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : (function (e, t) {
                    var r = (t && tr(t)) || (er() && tr(er()));
                    return Ie.default(e, r ? { locale: r } : null);
                  })(t);
            }),
            St(Pt(e), "renderDays", function () {
              var t = Wt(e.props.day, e.props.locale, e.props.calendarStartDay),
                r = [],
                a = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(Pt(e), t, a)
                  : void 0;
                r.push(
                  de.default.createElement(Kr, {
                    key: "W",
                    weekNumber: a,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  }),
                );
              }
              return r.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                  var a = De.default(t, r);
                  return de.default.createElement(Qr, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a.valueOf(),
                    day: a,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(Pt(e), a),
                    onMouseEnter: e.handleDayMouseEnter.bind(Pt(e), a),
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    highlightDates: e.props.highlightDates,
                    holidays: e.props.holidays,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    renderDayContents: e.props.renderDayContents,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                    locale: e.props.locale,
                  });
                }),
              );
            }),
            e
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return de.default.createElement(
                    "div",
                    { className: "react-datepicker__week" },
                    this.renderDays(),
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { shouldCloseOnSelect: !0 };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      Wr = "two_columns",
      Hr = "three_columns",
      jr = "four_columns",
      Vr =
        (St((Lr = {}), Wr, {
          grid: [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9],
            [10, 11],
          ],
          verticalNavigationOffset: 2,
        }),
        St(Lr, Hr, {
          grid: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11],
          ],
          verticalNavigationOffset: 3,
        }),
        St(Lr, jr, {
          grid: [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
          ],
          verticalNavigationOffset: 4,
        }),
        Lr);
    function Ur(e, t) {
      return e ? jr : t ? Wr : Hr;
    }
    var zr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(
              Pt((e = t.call.apply(t, [this].concat(n)))),
              "MONTH_REFS",
              Yt(Array(12)).map(function () {
                return de.default.createRef();
              }),
            ),
            St(
              Pt(e),
              "QUARTER_REFS",
              Yt(Array(4)).map(function () {
                return de.default.createRef();
              }),
            ),
            St(Pt(e), "isDisabled", function (t) {
              return nr(t, e.props);
            }),
            St(Pt(e), "isExcluded", function (t) {
              return or(t, e.props);
            }),
            St(Pt(e), "handleDayClick", function (t, r) {
              e.props.onDayClick &&
                e.props.onDayClick(t, r, e.props.orderInDisplay);
            }),
            St(Pt(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            St(Pt(e), "handleMouseLeave", function () {
              e.props.onMouseLeave && e.props.onMouseLeave();
            }),
            St(Pt(e), "isRangeStartMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && $t(Ke.default(a, t), n);
            }),
            St(Pt(e), "isRangeStartQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Gt(Be.default(a, t), n);
            }),
            St(Pt(e), "isRangeEndMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && $t(Ke.default(a, t), o);
            }),
            St(Pt(e), "isRangeEndQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Gt(Be.default(a, t), o);
            }),
            St(Pt(e), "isInSelectingRangeMonth", function (t) {
              var r,
                a = e.props,
                n = a.day,
                o = a.selectsStart,
                s = a.selectsEnd,
                i = a.selectsRange,
                p = a.startDate,
                l = a.endDate,
                c =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return (
                !(!(o || s || i) || !c) &&
                (o && l
                  ? ir(c, l, t, n)
                  : ((s && p) || !(!i || !p || l)) && ir(p, c, t, n))
              );
            }),
            St(Pt(e), "isSelectingMonthRangeStart", function (t) {
              var r;
              if (!e.isInSelectingRangeMonth(t)) return !1;
              var a = e.props,
                n = a.day,
                o = a.startDate,
                s = a.selectsStart,
                i = Ke.default(n, t),
                p =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return $t(i, s ? p : o);
            }),
            St(Pt(e), "isSelectingMonthRangeEnd", function (t) {
              var r;
              if (!e.isInSelectingRangeMonth(t)) return !1;
              var a = e.props,
                n = a.day,
                o = a.endDate,
                s = a.selectsEnd,
                i = a.selectsRange,
                p = Ke.default(n, t),
                l =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return $t(p, s || i ? l : o);
            }),
            St(Pt(e), "isInSelectingRangeQuarter", function (t) {
              var r,
                a = e.props,
                n = a.day,
                o = a.selectsStart,
                s = a.selectsEnd,
                i = a.selectsRange,
                p = a.startDate,
                l = a.endDate,
                c =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return (
                !(!(o || s || i) || !c) &&
                (o && l
                  ? dr(c, l, t, n)
                  : ((s && p) || !(!i || !p || l)) && dr(p, c, t, n))
              );
            }),
            St(Pt(e), "isWeekInMonth", function (t) {
              var r = e.props.day,
                a = De.default(t, 6);
              return $t(t, r) || $t(a, r);
            }),
            St(Pt(e), "isCurrentMonth", function (e, t) {
              return (
                Le.default(e) === Le.default(At()) && t === Te.default(At())
              );
            }),
            St(Pt(e), "isCurrentQuarter", function (e, t) {
              return (
                Le.default(e) === Le.default(At()) && t === Re.default(At())
              );
            }),
            St(Pt(e), "isSelectedMonth", function (e, t, r) {
              return Te.default(r) === t && Le.default(e) === Le.default(r);
            }),
            St(Pt(e), "isSelectedQuarter", function (e, t, r) {
              return Re.default(e) === t && Le.default(e) === Le.default(r);
            }),
            St(Pt(e), "renderWeeks", function () {
              for (
                var t = [],
                  r = e.props.fixedHeight,
                  a = 0,
                  n = !1,
                  o = Wt(
                    Ht(e.props.day),
                    e.props.locale,
                    e.props.calendarStartDay,
                  );
                t.push(
                  de.default.createElement(Br, {
                    ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                    chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a,
                    day: o,
                    month: Te.default(e.props.day),
                    onDayClick: e.handleDayClick,
                    onDayMouseEnter: e.handleDayMouseEnter,
                    onWeekSelect: e.props.onWeekSelect,
                    formatWeekNumber: e.props.formatWeekNumber,
                    locale: e.props.locale,
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    highlightDates: e.props.highlightDates,
                    holidays: e.props.holidays,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    showWeekNumber: e.props.showWeekNumbers,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    setOpen: e.props.setOpen,
                    shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    renderDayContents: e.props.renderDayContents,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    calendarStartDay: e.props.calendarStartDay,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                  }),
                ),
                  !n;

              ) {
                a++, (o = ge.default(o, 1));
                var s = r && a >= 6,
                  i = !r && !e.isWeekInMonth(o);
                if (s || i) {
                  if (!e.props.peekNextMonth) break;
                  n = !0;
                }
              }
              return t;
            }),
            St(Pt(e), "onMonthClick", function (t, r) {
              e.handleDayClick(Ht(Ke.default(e.props.day, r)), t);
            }),
            St(Pt(e), "onMonthMouseEnter", function (t) {
              e.handleDayMouseEnter(Ht(Ke.default(e.props.day, t)));
            }),
            St(Pt(e), "handleMonthNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
            }),
            St(Pt(e), "onMonthKeyDown", function (t, r) {
              var a = e.props,
                n = a.selected,
                o = a.preSelection,
                s = a.disabledKeyboardNavigation,
                i = a.showTwoColumnMonthYearPicker,
                p = a.showFourColumnMonthYearPicker,
                l = a.setPreSelection,
                c = t.key;
              if (("Tab" !== c && t.preventDefault(), !s)) {
                var d = Ur(p, i),
                  u = Vr[d].verticalNavigationOffset,
                  f = Vr[d].grid;
                switch (c) {
                  case "Enter":
                    e.onMonthClick(t, r), l(n);
                    break;
                  case "ArrowRight":
                    e.handleMonthNavigation(
                      11 === r ? 0 : r + 1,
                      we.default(o, 1),
                    );
                    break;
                  case "ArrowLeft":
                    e.handleMonthNavigation(
                      0 === r ? 11 : r - 1,
                      _e.default(o, 1),
                    );
                    break;
                  case "ArrowUp":
                    e.handleMonthNavigation(
                      f[0].includes(r) ? r + 12 - u : r - u,
                      _e.default(o, u),
                    );
                    break;
                  case "ArrowDown":
                    e.handleMonthNavigation(
                      f[f.length - 1].includes(r) ? r - 12 + u : r + u,
                      we.default(o, u),
                    );
                }
              }
            }),
            St(Pt(e), "onQuarterClick", function (t, r) {
              e.handleDayClick(Vt(Be.default(e.props.day, r)), t);
            }),
            St(Pt(e), "onQuarterMouseEnter", function (t) {
              e.handleDayMouseEnter(Vt(Be.default(e.props.day, t)));
            }),
            St(Pt(e), "handleQuarterNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.QUARTER_REFS[t - 1].current &&
                  e.QUARTER_REFS[t - 1].current.focus());
            }),
            St(Pt(e), "onQuarterKeyDown", function (t, r) {
              var a = t.key;
              if (!e.props.disabledKeyboardNavigation)
                switch (a) {
                  case "Enter":
                    e.onQuarterClick(t, r),
                      e.props.setPreSelection(e.props.selected);
                    break;
                  case "ArrowRight":
                    e.handleQuarterNavigation(
                      4 === r ? 1 : r + 1,
                      ke.default(e.props.preSelection, 1),
                    );
                    break;
                  case "ArrowLeft":
                    e.handleQuarterNavigation(
                      1 === r ? 4 : r - 1,
                      Me.default(e.props.preSelection, 1),
                    );
                }
            }),
            St(Pt(e), "getMonthClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate,
                l = r.preSelection,
                c = r.monthClassName,
                d = r.excludeDates,
                u = r.includeDates,
                f = c ? c(Ke.default(a, t)) : void 0,
                h = Ke.default(a, t);
              return ue.default(
                "react-datepicker__month-text",
                "react-datepicker__month-".concat(t),
                f,
                {
                  "react-datepicker__month-text--disabled":
                    (i || p || d || u) && sr(h, e.props),
                  "react-datepicker__month-text--selected": e.isSelectedMonth(
                    a,
                    t,
                    s,
                  ),
                  "react-datepicker__month-text--keyboard-selected":
                    !e.props.disabledKeyboardNavigation && Te.default(l) === t,
                  "react-datepicker__month-text--in-selecting-range":
                    e.isInSelectingRangeMonth(t),
                  "react-datepicker__month-text--in-range": ir(n, o, t, a),
                  "react-datepicker__month-text--range-start":
                    e.isRangeStartMonth(t),
                  "react-datepicker__month-text--range-end":
                    e.isRangeEndMonth(t),
                  "react-datepicker__month-text--selecting-range-start":
                    e.isSelectingMonthRangeStart(t),
                  "react-datepicker__month-text--selecting-range-end":
                    e.isSelectingMonthRangeEnd(t),
                  "react-datepicker__month-text--today": e.isCurrentMonth(a, t),
                },
              );
            }),
            St(Pt(e), "getTabIndex", function (t) {
              var r = Te.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            St(Pt(e), "getQuarterTabIndex", function (t) {
              var r = Re.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            St(Pt(e), "getAriaLabel", function (t) {
              var r = e.props,
                a = r.chooseDayAriaLabelPrefix,
                n = void 0 === a ? "Choose" : a,
                o = r.disabledDayAriaLabelPrefix,
                s = void 0 === o ? "Not available" : o,
                i = r.day,
                p = Ke.default(i, t),
                l = e.isDisabled(p) || e.isExcluded(p) ? s : n;
              return "".concat(l, " ").concat(Qt(p, "MMMM yyyy"));
            }),
            St(Pt(e), "getQuarterClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate,
                l = r.preSelection;
              return ue.default(
                "react-datepicker__quarter-text",
                "react-datepicker__quarter-".concat(t),
                {
                  "react-datepicker__quarter-text--disabled":
                    (i || p) && pr(Be.default(a, t), e.props),
                  "react-datepicker__quarter-text--selected":
                    e.isSelectedQuarter(a, t, s),
                  "react-datepicker__quarter-text--keyboard-selected":
                    Re.default(l) === t,
                  "react-datepicker__quarter-text--in-selecting-range":
                    e.isInSelectingRangeQuarter(t),
                  "react-datepicker__quarter-text--in-range": dr(n, o, t, a),
                  "react-datepicker__quarter-text--range-start":
                    e.isRangeStartQuarter(t),
                  "react-datepicker__quarter-text--range-end":
                    e.isRangeEndQuarter(t),
                },
              );
            }),
            St(Pt(e), "getMonthContent", function (t) {
              var r = e.props,
                a = r.showFullMonthYearPicker,
                n = r.renderMonthContent,
                o = r.locale,
                s = ar(t, o),
                i = rr(t, o);
              return n ? n(t, s, i) : a ? i : s;
            }),
            St(Pt(e), "getQuarterContent", function (t) {
              var r = e.props,
                a = r.renderQuarterContent,
                n = (function (e, t) {
                  return Qt(Be.default(At(), e), "QQQ", t);
                })(t, r.locale);
              return a ? a(t, n) : n;
            }),
            St(Pt(e), "renderMonths", function () {
              var t = e.props,
                r = t.showTwoColumnMonthYearPicker,
                a = t.showFourColumnMonthYearPicker,
                n = t.day,
                o = t.selected;
              return Vr[Ur(a, r)].grid.map(function (t, r) {
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: r },
                  t.map(function (t, r) {
                    return de.default.createElement(
                      "div",
                      {
                        ref: e.MONTH_REFS[t],
                        key: r,
                        onClick: function (r) {
                          e.onMonthClick(r, t);
                        },
                        onKeyDown: function (r) {
                          e.onMonthKeyDown(r, t);
                        },
                        onMouseEnter: function () {
                          return e.onMonthMouseEnter(t);
                        },
                        tabIndex: e.getTabIndex(t),
                        className: e.getMonthClassNames(t),
                        role: "option",
                        "aria-label": e.getAriaLabel(t),
                        "aria-current": e.isCurrentMonth(n, t)
                          ? "date"
                          : void 0,
                        "aria-selected": e.isSelectedMonth(n, t, o),
                      },
                      e.getMonthContent(t),
                    );
                  }),
                );
              });
            }),
            St(Pt(e), "renderQuarters", function () {
              var t = e.props,
                r = t.day,
                a = t.selected;
              return de.default.createElement(
                "div",
                { className: "react-datepicker__quarter-wrapper" },
                [1, 2, 3, 4].map(function (t, n) {
                  return de.default.createElement(
                    "div",
                    {
                      key: n,
                      ref: e.QUARTER_REFS[n],
                      role: "option",
                      onClick: function (r) {
                        e.onQuarterClick(r, t);
                      },
                      onKeyDown: function (r) {
                        e.onQuarterKeyDown(r, t);
                      },
                      onMouseEnter: function () {
                        return e.onQuarterMouseEnter(t);
                      },
                      className: e.getQuarterClassNames(t),
                      "aria-selected": e.isSelectedQuarter(r, t, a),
                      tabIndex: e.getQuarterTabIndex(t),
                      "aria-current": e.isCurrentQuarter(r, t)
                        ? "date"
                        : void 0,
                    },
                    e.getQuarterContent(t),
                  );
                }),
              );
            }),
            St(Pt(e), "getClassNames", function () {
              var t = e.props,
                r = t.selectingDate,
                a = t.selectsStart,
                n = t.selectsEnd,
                o = t.showMonthYearPicker,
                s = t.showQuarterYearPicker;
              return ue.default(
                "react-datepicker__month",
                { "react-datepicker__month--selecting-range": r && (a || n) },
                { "react-datepicker__monthPicker": o },
                { "react-datepicker__quarterPicker": s },
              );
            }),
            e
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.showMonthYearPicker,
                  r = e.showQuarterYearPicker,
                  a = e.day,
                  n = e.ariaLabelPrefix,
                  o = void 0 === n ? "month " : n;
                return de.default.createElement(
                  "div",
                  {
                    className: this.getClassNames(),
                    onMouseLeave: this.handleMouseLeave,
                    "aria-label": "".concat(o, " ").concat(Qt(a, "yyyy-MM")),
                    role: "listbox",
                  },
                  t
                    ? this.renderMonths()
                    : r
                    ? this.renderQuarters()
                    : this.renderWeeks(),
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      $r = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          var e;
          wt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            St(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              height: null,
            }),
            St(Pt(e), "handleClick", function (t) {
              ((e.props.minTime || e.props.maxTime) && mr(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  hr(t, e.props)) ||
                e.props.onChange(t);
            }),
            St(Pt(e), "isSelectedTime", function (t) {
              return (
                e.props.selected &&
                ((r = e.props.selected),
                (a = t),
                Er(r).getTime() === Er(a).getTime())
              );
              var r, a;
            }),
            St(Pt(e), "liClasses", function (t) {
              var r = [
                "react-datepicker__time-list-item",
                e.props.timeClassName ? e.props.timeClassName(t) : void 0,
              ];
              return (
                e.isSelectedTime(t) &&
                  r.push("react-datepicker__time-list-item--selected"),
                (((e.props.minTime || e.props.maxTime) && mr(t, e.props)) ||
                  ((e.props.excludeTimes ||
                    e.props.includeTimes ||
                    e.props.filterTime) &&
                    hr(t, e.props))) &&
                  r.push("react-datepicker__time-list-item--disabled"),
                e.props.injectTimes &&
                  (60 * Ye.default(t) + Ne.default(t)) % e.props.intervals !=
                    0 &&
                  r.push("react-datepicker__time-list-item--injected"),
                r.join(" ")
              );
            }),
            St(Pt(e), "handleOnKeyDown", function (t, r) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                ("ArrowUp" !== t.key && "ArrowLeft" !== t.key) ||
                  !t.target.previousSibling ||
                  (t.preventDefault(), t.target.previousSibling.focus()),
                ("ArrowDown" !== t.key && "ArrowRight" !== t.key) ||
                  !t.target.nextSibling ||
                  (t.preventDefault(), t.target.nextSibling.focus()),
                "Enter" === t.key && e.handleClick(r),
                e.props.handleOnKeyDown(t);
            }),
            St(Pt(e), "renderTimes", function () {
              for (
                var t,
                  r = [],
                  a = e.props.format ? e.props.format : "p",
                  n = e.props.intervals,
                  o = e.props.selected || e.props.openToDate || At(),
                  s = ((t = o), $e.default(t)),
                  i =
                    e.props.injectTimes &&
                    e.props.injectTimes.sort(function (e, t) {
                      return e - t;
                    }),
                  p =
                    60 *
                    (function (e) {
                      var t = new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate(),
                        ),
                        r = new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate(),
                          24,
                        );
                      return Math.round((+r - +t) / 36e5);
                    })(o),
                  l = p / n,
                  c = 0;
                c < l;
                c++
              ) {
                var d = ye.default(s, c * n);
                if ((r.push(d), i)) {
                  var u = Cr(s, d, c, n, i);
                  r = r.concat(u);
                }
              }
              var f = r.reduce(function (e, t) {
                return t.getTime() <= o.getTime() ? t : e;
              }, r[0]);
              return r.map(function (t, r) {
                return de.default.createElement(
                  "li",
                  {
                    key: r,
                    onClick: e.handleClick.bind(Pt(e), t),
                    className: e.liClasses(t),
                    ref: function (r) {
                      t === f && (e.centerLi = r);
                    },
                    onKeyDown: function (r) {
                      e.handleOnKeyDown(r, t);
                    },
                    tabIndex: t === f ? 0 : -1,
                    role: "option",
                    "aria-selected": e.isSelectedTime(t) ? "true" : void 0,
                  },
                  Qt(t, a, e.props.locale),
                );
              });
            }),
            e
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  (this.list.scrollTop =
                    this.centerLi &&
                    r.calcCenterPosition(
                      this.props.monthRef
                        ? this.props.monthRef.clientHeight -
                            this.header.clientHeight
                        : this.list.clientHeight,
                      this.centerLi,
                    )),
                    this.props.monthRef &&
                      this.header &&
                      this.setState({
                        height:
                          this.props.monthRef.clientHeight -
                          this.header.clientHeight,
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.height;
                  return de.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__time-container ".concat(
                        this.props.todayButton
                          ? "react-datepicker__time-container--with-today-button"
                          : "",
                      ),
                    },
                    de.default.createElement(
                      "div",
                      {
                        className:
                          "react-datepicker__header react-datepicker__header--time ".concat(
                            this.props.showTimeSelectOnly
                              ? "react-datepicker__header--time--only"
                              : "",
                          ),
                        ref: function (t) {
                          e.header = t;
                        },
                      },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker-time__header" },
                        this.props.timeCaption,
                      ),
                    ),
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker__time" },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker__time-box" },
                        de.default.createElement(
                          "ul",
                          {
                            className: "react-datepicker__time-list",
                            ref: function (t) {
                              e.list = t;
                            },
                            style: t ? { height: t } : {},
                            role: "listbox",
                            "aria-label": this.props.timeCaption,
                          },
                          this.renderTimes(),
                        ),
                      ),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    intervals: 30,
                    onTimeChange: function () {},
                    todayButton: null,
                    timeCaption: "Time",
                  };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component);
    St($r, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    });
    var Gr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(
              Pt((a = t.call(this, e))),
              "YEAR_REFS",
              Yt(Array(a.props.yearItemNumber)).map(function () {
                return de.default.createRef();
              }),
            ),
            St(Pt(a), "isDisabled", function (e) {
              return nr(e, a.props);
            }),
            St(Pt(a), "isExcluded", function (e) {
              return or(e, a.props);
            }),
            St(Pt(a), "selectingDate", function () {
              var e;
              return null !== (e = a.props.selectingDate) && void 0 !== e
                ? e
                : a.props.preSelection;
            }),
            St(Pt(a), "updateFocusOnPaginate", function (e) {
              var t = function () {
                this.YEAR_REFS[e].current.focus();
              }.bind(Pt(a));
              window.requestAnimationFrame(t);
            }),
            St(Pt(a), "handleYearClick", function (e, t) {
              a.props.onDayClick && a.props.onDayClick(e, t);
            }),
            St(Pt(a), "handleYearNavigation", function (e, t) {
              var r = a.props,
                n = r.date,
                o = r.yearItemNumber,
                s = Mr(n, o).startPeriod;
              a.isDisabled(t) ||
                a.isExcluded(t) ||
                (a.props.setPreSelection(t),
                e - s == -1
                  ? a.updateFocusOnPaginate(o - 1)
                  : e - s === o
                  ? a.updateFocusOnPaginate(0)
                  : a.YEAR_REFS[e - s].current.focus());
            }),
            St(Pt(a), "isSameDay", function (e, t) {
              return Jt(e, t);
            }),
            St(Pt(a), "isCurrentYear", function (e) {
              return e === Le.default(At());
            }),
            St(Pt(a), "isRangeStart", function (e) {
              return (
                a.props.startDate &&
                a.props.endDate &&
                zt(We.default(At(), e), a.props.startDate)
              );
            }),
            St(Pt(a), "isRangeEnd", function (e) {
              return (
                a.props.startDate &&
                a.props.endDate &&
                zt(We.default(At(), e), a.props.endDate)
              );
            }),
            St(Pt(a), "isInRange", function (e) {
              return lr(e, a.props.startDate, a.props.endDate);
            }),
            St(Pt(a), "isInSelectingRange", function (e) {
              var t = a.props,
                r = t.selectsStart,
                n = t.selectsEnd,
                o = t.selectsRange,
                s = t.startDate,
                i = t.endDate;
              return (
                !(!(r || n || o) || !a.selectingDate()) &&
                (r && i
                  ? lr(e, a.selectingDate(), i)
                  : ((n && s) || !(!o || !s || i)) &&
                    lr(e, s, a.selectingDate()))
              );
            }),
            St(Pt(a), "isSelectingRangeStart", function (e) {
              if (!a.isInSelectingRange(e)) return !1;
              var t = a.props,
                r = t.startDate,
                n = t.selectsStart,
                o = We.default(At(), e);
              return zt(o, n ? a.selectingDate() : r);
            }),
            St(Pt(a), "isSelectingRangeEnd", function (e) {
              if (!a.isInSelectingRange(e)) return !1;
              var t = a.props,
                r = t.endDate,
                n = t.selectsEnd,
                o = t.selectsRange,
                s = We.default(At(), e);
              return zt(s, n || o ? a.selectingDate() : r);
            }),
            St(Pt(a), "isKeyboardSelected", function (e) {
              var t = jt(We.default(a.props.date, e));
              return (
                !a.props.disabledKeyboardNavigation &&
                !a.props.inline &&
                !Jt(t, jt(a.props.selected)) &&
                Jt(t, jt(a.props.preSelection))
              );
            }),
            St(Pt(a), "onYearClick", function (e, t) {
              var r = a.props.date;
              a.handleYearClick(jt(We.default(r, t)), e);
            }),
            St(Pt(a), "onYearKeyDown", function (e, t) {
              var r = e.key;
              if (!a.props.disabledKeyboardNavigation)
                switch (r) {
                  case "Enter":
                    a.onYearClick(e, t),
                      a.props.setPreSelection(a.props.selected);
                    break;
                  case "ArrowRight":
                    a.handleYearNavigation(
                      t + 1,
                      be.default(a.props.preSelection, 1),
                    );
                    break;
                  case "ArrowLeft":
                    a.handleYearNavigation(
                      t - 1,
                      Ee.default(a.props.preSelection, 1),
                    );
                }
            }),
            St(Pt(a), "getYearClassNames", function (e) {
              var t = a.props,
                r = t.minDate,
                n = t.maxDate,
                o = t.selected,
                s = t.excludeDates,
                i = t.includeDates,
                p = t.filterDate;
              return ue.default("react-datepicker__year-text", {
                "react-datepicker__year-text--selected": e === Le.default(o),
                "react-datepicker__year-text--disabled":
                  (r || n || s || i || p) && cr(e, a.props),
                "react-datepicker__year-text--keyboard-selected":
                  a.isKeyboardSelected(e),
                "react-datepicker__year-text--range-start": a.isRangeStart(e),
                "react-datepicker__year-text--range-end": a.isRangeEnd(e),
                "react-datepicker__year-text--in-range": a.isInRange(e),
                "react-datepicker__year-text--in-selecting-range":
                  a.isInSelectingRange(e),
                "react-datepicker__year-text--selecting-range-start":
                  a.isSelectingRangeStart(e),
                "react-datepicker__year-text--selecting-range-end":
                  a.isSelectingRangeEnd(e),
                "react-datepicker__year-text--today": a.isCurrentYear(e),
              });
            }),
            St(Pt(a), "getYearTabIndex", function (e) {
              return a.props.disabledKeyboardNavigation
                ? "-1"
                : e === Le.default(a.props.preSelection)
                ? "0"
                : "-1";
            }),
            St(Pt(a), "getYearContainerClassNames", function () {
              var e = a.props,
                t = e.selectingDate,
                r = e.selectsStart,
                n = e.selectsEnd,
                o = e.selectsRange;
              return ue.default("react-datepicker__year", {
                "react-datepicker__year--selecting-range": t && (r || n || o),
              });
            }),
            St(Pt(a), "getYearContent", function (e) {
              return a.props.renderYearContent
                ? a.props.renderYearContent(e)
                : e;
            }),
            a
          );
        }
        return (
          bt(r, [
            {
              key: "render",
              value: function () {
                for (
                  var e = this,
                    t = [],
                    r = this.props,
                    a = r.date,
                    n = r.yearItemNumber,
                    o = r.onYearMouseEnter,
                    s = r.onYearMouseLeave,
                    i = Mr(a, n),
                    p = i.startPeriod,
                    l = i.endPeriod,
                    c = function (r) {
                      t.push(
                        de.default.createElement(
                          "div",
                          {
                            ref: e.YEAR_REFS[r - p],
                            onClick: function (t) {
                              e.onYearClick(t, r);
                            },
                            onKeyDown: function (t) {
                              e.onYearKeyDown(t, r);
                            },
                            tabIndex: e.getYearTabIndex(r),
                            className: e.getYearClassNames(r),
                            onMouseEnter: function (e) {
                              return o(e, r);
                            },
                            onMouseLeave: function (e) {
                              return s(e, r);
                            },
                            key: r,
                            "aria-current": e.isCurrentYear(r)
                              ? "date"
                              : void 0,
                          },
                          e.getYearContent(r),
                        ),
                      );
                    },
                    d = p;
                  d <= l;
                  d++
                )
                  c(d);
                return de.default.createElement(
                  "div",
                  { className: this.getYearContainerClassNames() },
                  de.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-wrapper",
                      onMouseLeave: this.props.clearSelectingDate,
                    },
                    t,
                  ),
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Jr = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(Pt((a = t.call(this, e))), "onTimeChange", function (e) {
              a.setState({ time: e });
              var t = new Date();
              t.setHours(e.split(":")[0]),
                t.setMinutes(e.split(":")[1]),
                a.props.onChange(t);
            }),
            St(Pt(a), "renderTimeInput", function () {
              var e = a.state.time,
                t = a.props,
                r = t.date,
                n = t.timeString,
                o = t.customTimeInput;
              return o
                ? de.default.cloneElement(o, {
                    date: r,
                    value: e,
                    onChange: a.onTimeChange,
                  })
                : de.default.createElement("input", {
                    type: "time",
                    className: "react-datepicker-time__input",
                    placeholder: "Time",
                    name: "time-input",
                    required: !0,
                    value: e,
                    onChange: function (e) {
                      a.onTimeChange(e.target.value || n);
                    },
                  });
            }),
            (a.state = { time: a.props.timeString }),
            a
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return de.default.createElement(
                    "div",
                    { className: "react-datepicker__input-time-container" },
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker-time__caption" },
                      this.props.timeInputLabel,
                    ),
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input-container" },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker-time__input" },
                        this.renderTimeInput(),
                      ),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return e.timeString !== t.time
                    ? { time: e.timeString }
                    : null;
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component);
    function Xr(e) {
      var t = e.className,
        r = e.children,
        a = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return de.default.createElement(
        "div",
        { className: t },
        a &&
          de.default.createElement(
            "div",
            Ct({ className: "react-datepicker__triangle" }, o),
          ),
        r,
      );
    }
    var Zr = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      ea = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(Pt((a = t.call(this, e))), "handleClickOutside", function (e) {
              a.props.onClickOutside(e);
            }),
            St(Pt(a), "setClickOutsideRef", function () {
              return a.containerRef.current;
            }),
            St(Pt(a), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return Zr.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && a.props.onDropdownFocus();
            }),
            St(Pt(a), "getDateInView", function () {
              var e = a.props,
                t = e.preSelection,
                r = e.selected,
                n = e.openToDate,
                o = wr(a.props),
                s = kr(a.props),
                i = At(),
                p = n || r || t;
              return (
                p || (o && lt.default(i, o) ? o : s && pt.default(i, s) ? s : i)
              );
            }),
            St(Pt(a), "increaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: we.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "decreaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: _e.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "handleDayClick", function (e, t, r) {
              a.props.onSelect(e, t, r),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            St(Pt(a), "handleDayMouseEnter", function (e) {
              a.setState({ selectingDate: e }),
                a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
            }),
            St(Pt(a), "handleMonthMouseLeave", function () {
              a.setState({ selectingDate: null }),
                a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
            }),
            St(Pt(a), "handleYearMouseEnter", function (e, t) {
              a.setState({ selectingDate: We.default(At(), t) }),
                a.props.onYearMouseEnter && a.props.onYearMouseEnter(e, t);
            }),
            St(Pt(a), "handleYearMouseLeave", function (e, t) {
              a.props.onYearMouseLeave && a.props.onYearMouseLeave(e, t);
            }),
            St(Pt(a), "handleYearChange", function (e) {
              a.props.onYearChange &&
                (a.props.onYearChange(e),
                a.setState({ isRenderAriaLiveMessage: !0 })),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            St(Pt(a), "handleMonthChange", function (e) {
              a.handleCustomMonthChange(e),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            St(Pt(a), "handleCustomMonthChange", function (e) {
              a.props.onMonthChange &&
                (a.props.onMonthChange(e),
                a.setState({ isRenderAriaLiveMessage: !0 }));
            }),
            St(Pt(a), "handleMonthYearChange", function (e) {
              a.handleYearChange(e), a.handleMonthChange(e);
            }),
            St(Pt(a), "changeYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: We.default(r, e) };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "changeMonth", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: Ke.default(r, e) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "changeMonthYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return {
                    date: We.default(
                      Ke.default(r, Te.default(e)),
                      Le.default(e),
                    ),
                  };
                },
                function () {
                  return a.handleMonthYearChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "header", function () {
              var e = Wt(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                  a.props.locale,
                  a.props.calendarStartDay,
                ),
                t = [];
              return (
                a.props.showWeekNumbers &&
                  t.push(
                    de.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      a.props.weekLabel || "#",
                    ),
                  ),
                t.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (t) {
                    var r = De.default(e, t),
                      n = a.formatWeekday(r, a.props.locale),
                      o = a.props.weekDayClassName
                        ? a.props.weekDayClassName(r)
                        : void 0;
                    return de.default.createElement(
                      "div",
                      {
                        key: t,
                        className: ue.default("react-datepicker__day-name", o),
                      },
                      n,
                    );
                  }),
                )
              );
            }),
            St(Pt(a), "formatWeekday", function (e, t) {
              return a.props.formatWeekDay
                ? (function (e, t, r) {
                    return t(Qt(e, "EEEE", r));
                  })(e, a.props.formatWeekDay, t)
                : a.props.useWeekdaysShort
                ? (function (e, t) {
                    return Qt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return Qt(e, "EEEEEE", t);
                  })(e, t);
            }),
            St(Pt(a), "decreaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Ee.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "clearSelectingDate", function () {
              a.setState({ selectingDate: null });
            }),
            St(Pt(a), "renderPreviousButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = Dr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.minDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Lt : a,
                        o = Mr(jt(Ee.default(e, n)), n).endPeriod,
                        s = r && Le.default(r);
                      return (s && s > o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = yr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    r = a.decreaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.decreaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled",
                      ),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.previousMonthButtonLabel,
                    i = o.previousYearButtonLabel,
                    p = a.props,
                    l = p.previousMonthAriaLabel,
                    c =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : l,
                    d = p.previousYearAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof i
                          ? i
                          : "Previous Year"
                        : d;
                  return de.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : c,
                    },
                    de.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? a.props.previousYearButtonLabel
                        : a.props.previousMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            St(Pt(a), "increaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: be.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                },
              );
            }),
            St(Pt(a), "renderNextButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = gr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.maxDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Lt : a,
                        o = Mr(be.default(e, n), n).startPeriod,
                        s = r && Le.default(r);
                      return (s && s < o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = vr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  a.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    a.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button",
                      );
                  var r = a.increaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.increaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.nextMonthButtonLabel,
                    i = o.nextYearButtonLabel,
                    p = a.props,
                    l = p.nextMonthAriaLabel,
                    c =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : l,
                    d = p.nextYearAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof i
                          ? i
                          : "Next Year"
                        : d;
                  return de.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : c,
                    },
                    de.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? a.props.nextYearButtonLabel
                        : a.props.nextMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            St(Pt(a), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = ["react-datepicker__current-month"];
              return (
                a.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                a.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                a.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown",
                  ),
                de.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  Qt(e, a.props.dateFormat, a.props.locale),
                )
              );
            }),
            St(Pt(a), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showYearDropdown && !e)
                return de.default.createElement(xr, {
                  adjustDateOnChange: a.props.adjustDateOnChange,
                  date: a.state.date,
                  onSelect: a.props.onSelect,
                  setOpen: a.props.setOpen,
                  dropdownMode: a.props.dropdownMode,
                  onChange: a.changeYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  year: Le.default(a.state.date),
                  scrollableYearDropdown: a.props.scrollableYearDropdown,
                  yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                });
            }),
            St(Pt(a), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthDropdown && !e)
                return de.default.createElement(Tr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  onChange: a.changeMonth,
                  month: Te.default(a.state.date),
                  useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                });
            }),
            St(Pt(a), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthYearDropdown && !e)
                return de.default.createElement(qr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  dateFormat: a.props.dateFormat,
                  onChange: a.changeMonthYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  date: a.state.date,
                  scrollableMonthYearDropdown:
                    a.props.scrollableMonthYearDropdown,
                });
            }),
            St(Pt(a), "handleTodayButtonClick", function (e) {
              a.props.onSelect(Ut(), e),
                a.props.setPreSelection && a.props.setPreSelection(Ut());
            }),
            St(Pt(a), "renderTodayButton", function () {
              if (a.props.todayButton && !a.props.showTimeSelectOnly)
                return de.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return a.handleTodayButtonClick(e);
                    },
                  },
                  a.props.todayButton,
                );
            }),
            St(Pt(a), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                r = e.i;
              return de.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    a.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : "",
                  ),
                },
                a.renderCurrentMonth(t),
                de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        a.props.dropdownMode,
                      ),
                    onFocus: a.handleDropdownFocus,
                  },
                  a.renderMonthDropdown(0 !== r),
                  a.renderMonthYearDropdown(0 !== r),
                  a.renderYearDropdown(0 !== r),
                ),
                de.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  a.header(t),
                ),
              );
            }),
            St(Pt(a), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                r = e.i;
              if (
                (a.props.showTimeSelect && !a.state.monthContainer) ||
                a.props.showTimeSelectOnly
              )
                return null;
              var n = yr(a.state.date, a.props),
                o = vr(a.state.date, a.props),
                s = Dr(a.state.date, a.props),
                i = gr(a.state.date, a.props),
                p =
                  !a.props.showMonthYearPicker &&
                  !a.props.showQuarterYearPicker &&
                  !a.props.showYearPicker;
              return de.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: a.props.onDropdownFocus,
                },
                a.props.renderCustomHeader(
                  Dt(
                    Dt({}, a.state),
                    {},
                    {
                      customHeaderCount: r,
                      monthDate: t,
                      changeMonth: a.changeMonth,
                      changeYear: a.changeYear,
                      decreaseMonth: a.decreaseMonth,
                      increaseMonth: a.increaseMonth,
                      decreaseYear: a.decreaseYear,
                      increaseYear: a.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: i,
                    },
                  ),
                ),
                p &&
                  de.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    a.header(t),
                  ),
              );
            }),
            St(Pt(a), "renderYearHeader", function () {
              var e = a.state.date,
                t = a.props,
                r = t.showYearPicker,
                n = Mr(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return de.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                r ? "".concat(o, " - ").concat(s) : Le.default(e),
              );
            }),
            St(Pt(a), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== a.props.renderCustomHeader:
                  return a.renderCustomHeader(e);
                case a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker:
                  return a.renderYearHeader(e);
                default:
                  return a.renderDefaultHeader(e);
              }
            }),
            St(Pt(a), "renderMonths", function () {
              var e;
              if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
                for (
                  var t = [],
                    r = a.props.showPreviousMonths
                      ? a.props.monthsShown - 1
                      : 0,
                    n = _e.default(a.state.date, r),
                    o =
                      null !== (e = a.props.monthSelectedIn) && void 0 !== e
                        ? e
                        : r,
                    s = 0;
                  s < a.props.monthsShown;
                  ++s
                ) {
                  var i = s - o + r,
                    p = we.default(n, i),
                    l = "month-".concat(s),
                    c = s < a.props.monthsShown - 1,
                    d = s > 0;
                  t.push(
                    de.default.createElement(
                      "div",
                      {
                        key: l,
                        ref: function (e) {
                          a.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      a.renderHeader({ monthDate: p, i: s }),
                      de.default.createElement(zr, {
                        chooseDayAriaLabelPrefix:
                          a.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          a.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                        ariaLabelPrefix: a.props.monthAriaLabelPrefix,
                        onChange: a.changeMonthYear,
                        day: p,
                        dayClassName: a.props.dayClassName,
                        calendarStartDay: a.props.calendarStartDay,
                        monthClassName: a.props.monthClassName,
                        onDayClick: a.handleDayClick,
                        handleOnKeyDown: a.props.handleOnDayKeyDown,
                        onDayMouseEnter: a.handleDayMouseEnter,
                        onMouseLeave: a.handleMonthMouseLeave,
                        onWeekSelect: a.props.onWeekSelect,
                        orderInDisplay: s,
                        formatWeekNumber: a.props.formatWeekNumber,
                        locale: a.props.locale,
                        minDate: a.props.minDate,
                        maxDate: a.props.maxDate,
                        excludeDates: a.props.excludeDates,
                        excludeDateIntervals: a.props.excludeDateIntervals,
                        highlightDates: a.props.highlightDates,
                        holidays: a.props.holidays,
                        selectingDate: a.state.selectingDate,
                        includeDates: a.props.includeDates,
                        includeDateIntervals: a.props.includeDateIntervals,
                        inline: a.props.inline,
                        shouldFocusDayInline: a.props.shouldFocusDayInline,
                        fixedHeight: a.props.fixedHeight,
                        filterDate: a.props.filterDate,
                        preSelection: a.props.preSelection,
                        setPreSelection: a.props.setPreSelection,
                        selected: a.props.selected,
                        selectsStart: a.props.selectsStart,
                        selectsEnd: a.props.selectsEnd,
                        selectsRange: a.props.selectsRange,
                        selectsDisabledDaysInRange:
                          a.props.selectsDisabledDaysInRange,
                        showWeekNumbers: a.props.showWeekNumbers,
                        startDate: a.props.startDate,
                        endDate: a.props.endDate,
                        peekNextMonth: a.props.peekNextMonth,
                        setOpen: a.props.setOpen,
                        shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                        renderDayContents: a.props.renderDayContents,
                        renderMonthContent: a.props.renderMonthContent,
                        renderQuarterContent: a.props.renderQuarterContent,
                        renderYearContent: a.props.renderYearContent,
                        disabledKeyboardNavigation:
                          a.props.disabledKeyboardNavigation,
                        showMonthYearPicker: a.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          a.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          a.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          a.props.showFourColumnMonthYearPicker,
                        showYearPicker: a.props.showYearPicker,
                        showQuarterYearPicker: a.props.showQuarterYearPicker,
                        isInputFocused: a.props.isInputFocused,
                        containerRef: a.containerRef,
                        monthShowsDuplicateDaysEnd: c,
                        monthShowsDuplicateDaysStart: d,
                      }),
                    ),
                  );
                }
                return t;
              }
            }),
            St(Pt(a), "renderYears", function () {
              if (!a.props.showTimeSelectOnly)
                return a.props.showYearPicker
                  ? de.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      a.renderHeader(),
                      de.default.createElement(
                        Gr,
                        Ct(
                          {
                            onDayClick: a.handleDayClick,
                            selectingDate: a.state.selectingDate,
                            clearSelectingDate: a.clearSelectingDate,
                            date: a.state.date,
                          },
                          a.props,
                          {
                            onYearMouseEnter: a.handleYearMouseEnter,
                            onYearMouseLeave: a.handleYearMouseLeave,
                          },
                        ),
                      ),
                    )
                  : void 0;
            }),
            St(Pt(a), "renderTimeSection", function () {
              if (
                a.props.showTimeSelect &&
                (a.state.monthContainer || a.props.showTimeSelectOnly)
              )
                return de.default.createElement($r, {
                  selected: a.props.selected,
                  openToDate: a.props.openToDate,
                  onChange: a.props.onTimeChange,
                  timeClassName: a.props.timeClassName,
                  format: a.props.timeFormat,
                  includeTimes: a.props.includeTimes,
                  intervals: a.props.timeIntervals,
                  minTime: a.props.minTime,
                  maxTime: a.props.maxTime,
                  excludeTimes: a.props.excludeTimes,
                  filterTime: a.props.filterTime,
                  timeCaption: a.props.timeCaption,
                  todayButton: a.props.todayButton,
                  showMonthDropdown: a.props.showMonthDropdown,
                  showMonthYearDropdown: a.props.showMonthYearDropdown,
                  showYearDropdown: a.props.showYearDropdown,
                  withPortal: a.props.withPortal,
                  monthRef: a.state.monthContainer,
                  injectTimes: a.props.injectTimes,
                  locale: a.props.locale,
                  handleOnKeyDown: a.props.handleOnKeyDown,
                  showTimeSelectOnly: a.props.showTimeSelectOnly,
                });
            }),
            St(Pt(a), "renderInputTimeSection", function () {
              var e = new Date(a.props.selected),
                t =
                  qt(e) && Boolean(a.props.selected)
                    ? ""
                        .concat(_r(e.getHours()), ":")
                        .concat(_r(e.getMinutes()))
                    : "";
              if (a.props.showTimeInput)
                return de.default.createElement(Jr, {
                  date: e,
                  timeString: t,
                  timeInputLabel: a.props.timeInputLabel,
                  onChange: a.props.onTimeChange,
                  customTimeInput: a.props.customTimeInput,
                });
            }),
            St(Pt(a), "renderAriaLiveRegion", function () {
              var e,
                t = Mr(a.state.date, a.props.yearItemNumber),
                r = t.startPeriod,
                n = t.endPeriod;
              return (
                (e = a.props.showYearPicker
                  ? "".concat(r, " - ").concat(n)
                  : a.props.showMonthYearPicker || a.props.showQuarterYearPicker
                  ? Le.default(a.state.date)
                  : ""
                      .concat(rr(Te.default(a.state.date), a.props.locale), " ")
                      .concat(Le.default(a.state.date))),
                de.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  a.state.isRenderAriaLiveMessage && e,
                )
              );
            }),
            St(Pt(a), "renderChildren", function () {
              if (a.props.children)
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  a.props.children,
                );
            }),
            (a.containerRef = de.default.createRef()),
            (a.state = {
              date: a.getDateInView(),
              selectingDate: null,
              monthContainer: null,
              isRenderAriaLiveMessage: !1,
            }),
            a
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this;
                  if (
                    !this.props.preSelection ||
                    (Jt(this.props.preSelection, e.preSelection) &&
                      this.props.monthSelectedIn === e.monthSelectedIn)
                  )
                    this.props.openToDate &&
                      !Jt(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                  else {
                    var r = !$t(this.state.date, this.props.preSelection);
                    this.setState(
                      { date: this.props.preSelection },
                      function () {
                        return r && t.handleCustomMonthChange(t.state.date);
                      },
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || Xr;
                  return de.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    de.default.createElement(
                      e,
                      {
                        className: ue.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          },
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderAriaLiveRegion(),
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.renderChildren(),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: Lt,
                  };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      ta = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            ((a = t.call(this, e)).el = document.createElement("div")),
            a
          );
        }
        return (
          bt(r, [
            {
              key: "componentDidMount",
              value: function () {
                (this.portalRoot = (
                  this.props.portalHost || document
                ).getElementById(this.props.portalId)),
                  this.portalRoot ||
                    ((this.portalRoot = document.createElement("div")),
                    this.portalRoot.setAttribute("id", this.props.portalId),
                    (this.props.portalHost || document.body).appendChild(
                      this.portalRoot,
                    )),
                  this.portalRoot.appendChild(this.el);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.portalRoot.removeChild(this.el);
              },
            },
            {
              key: "render",
              value: function () {
                return mt.default.createPortal(this.props.children, this.el);
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      ra = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      aa = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(Pt((a = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  a.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea",
                  ),
                  1,
                  -1,
                )
                .filter(ra);
            }),
            St(Pt(a), "handleFocusStart", function () {
              var e = a.getTabChildren();
              e && e.length > 1 && e[e.length - 1].focus();
            }),
            St(Pt(a), "handleFocusEnd", function () {
              var e = a.getTabChildren();
              e && e.length > 1 && e[0].focus();
            }),
            (a.tabLoopRef = de.default.createRef()),
            a
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? de.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        de.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        de.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        }),
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      na = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r() {
          return wt(this, r), t.apply(this, arguments);
        }
        return (
          bt(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    r = t.className,
                    a = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    i = t.popperPlacement,
                    p = t.popperProps,
                    l = t.targetComponent,
                    c = t.enableTabLoop,
                    d = t.popperOnKeyDown,
                    u = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = ue.default("react-datepicker-popper", r);
                    e = de.default.createElement(
                      pe.Popper,
                      Ct({ modifiers: s, placement: i }, p),
                      function (e) {
                        var t = e.ref,
                          r = e.style,
                          a = e.placement,
                          n = e.arrowProps;
                        return de.default.createElement(
                          aa,
                          { enableTabLoop: c },
                          de.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: r,
                              className: h,
                              "data-placement": a,
                              onKeyDown: d,
                            },
                            de.default.cloneElement(o, { arrowProps: n }),
                          ),
                        );
                      },
                    );
                  }
                  this.props.popperContainer &&
                    (e = de.default.createElement(
                      this.props.popperContainer,
                      {},
                      e,
                    )),
                    u &&
                      !n &&
                      (e = de.default.createElement(
                        ta,
                        { portalId: u, portalHost: f },
                        e,
                      ));
                  var m = ue.default("react-datepicker-wrapper", a);
                  return de.default.createElement(
                    pe.Manager,
                    { className: "react-datepicker-manager" },
                    de.default.createElement(pe.Reference, null, function (e) {
                      var t = e.ref;
                      return de.default.createElement(
                        "div",
                        { ref: t, className: m },
                        l,
                      );
                    }),
                    e,
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      oa = "react-datepicker-ignore-onclickoutside",
      sa = ht.default(ea);
    var ia = "Date input not valid.",
      pa = (function (e) {
        _t(r, e);
        var t = Nt(r);
        function r(e) {
          var a;
          return (
            wt(this, r),
            St(Pt((a = t.call(this, e))), "getPreSelection", function () {
              return a.props.openToDate
                ? a.props.openToDate
                : a.props.selectsEnd && a.props.startDate
                ? a.props.startDate
                : a.props.selectsStart && a.props.endDate
                ? a.props.endDate
                : At();
            }),
            St(Pt(a), "calcInitialState", function () {
              var e,
                t,
                r =
                  null === (e = a.props.holidays) || void 0 === e
                    ? void 0
                    : e.reduce(function (e, t) {
                        var r = new Date(t.date);
                        return he.default(r)
                          ? [].concat(Yt(e), [Dt(Dt({}, t), {}, { date: r })])
                          : e;
                      }, []),
                n = a.getPreSelection(),
                o = wr(a.props),
                s = kr(a.props),
                i =
                  o && lt.default(n, $e.default(o))
                    ? o
                    : s && pt.default(n, et.default(s))
                    ? s
                    : n;
              return {
                open: a.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (t = a.props.selectsRange
                      ? a.props.startDate
                      : a.props.selected) && void 0 !== t
                    ? t
                    : i,
                highlightDates: br(a.props.highlightDates),
                holidays: Sr(r),
                focused: !1,
                shouldFocusDayInline: !1,
                isRenderAriaLiveMessage: !1,
              };
            }),
            St(Pt(a), "clearPreventFocusTimeout", function () {
              a.preventFocusTimeout && clearTimeout(a.preventFocusTimeout);
            }),
            St(Pt(a), "setFocus", function () {
              a.input && a.input.focus && a.input.focus({ preventScroll: !0 });
            }),
            St(Pt(a), "setBlur", function () {
              a.input && a.input.blur && a.input.blur(), a.cancelFocusInput();
            }),
            St(Pt(a), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              a.setState(
                {
                  open: e,
                  preSelection:
                    e && a.state.open
                      ? a.state.preSelection
                      : a.calcInitialState().preSelection,
                  lastPreSelectChange: ca,
                },
                function () {
                  e ||
                    a.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && a.setBlur(), a.setState({ inputValue: null });
                      },
                    );
                },
              );
            }),
            St(Pt(a), "inputOk", function () {
              return fe.default(a.state.preSelection);
            }),
            St(Pt(a), "isCalendarOpen", function () {
              return void 0 === a.props.open
                ? a.state.open && !a.props.disabled && !a.props.readOnly
                : a.props.open;
            }),
            St(Pt(a), "handleFocus", function (e) {
              a.state.preventFocus ||
                (a.props.onFocus(e),
                a.props.preventOpenOnFocus ||
                  a.props.readOnly ||
                  a.setOpen(!0)),
                a.setState({ focused: !0 });
            }),
            St(Pt(a), "cancelFocusInput", function () {
              clearTimeout(a.inputFocusTimeout), (a.inputFocusTimeout = null);
            }),
            St(Pt(a), "deferFocusInput", function () {
              a.cancelFocusInput(),
                (a.inputFocusTimeout = setTimeout(function () {
                  return a.setFocus();
                }, 1));
            }),
            St(Pt(a), "handleDropdownFocus", function () {
              a.cancelFocusInput();
            }),
            St(Pt(a), "handleBlur", function (e) {
              (!a.state.open || a.props.withPortal || a.props.showTimeInput) &&
                a.props.onBlur(e),
                a.setState({ focused: !1 });
            }),
            St(Pt(a), "handleCalendarClickOutside", function (e) {
              a.props.inline || a.setOpen(!1),
                a.props.onClickOutside(e),
                a.props.withPortal && e.preventDefault();
            }),
            St(Pt(a), "handleChange", function () {
              for (
                var e, t, r = arguments.length, n = new Array(r), o = 0;
                o < r;
                o++
              )
                n[o] = arguments[o];
              var s = n[0],
                i = void 0;
              if (
                !a.props.onChangeRaw ||
                ((i = a.props.onChangeRaw.apply(Pt(a), n)),
                "function" == typeof s.isDefaultPrevented &&
                  !s.isDefaultPrevented())
              ) {
                a.setState({
                  inputValue:
                    null !== (e = i) && void 0 !== e ? e : s.target.value,
                  lastPreSelectChange: la,
                });
                var p,
                  l,
                  c,
                  d,
                  u,
                  f,
                  h,
                  m,
                  y =
                    ((p =
                      null !== (t = i) && void 0 !== t ? t : s.target.value),
                    (l = a.props.dateFormat),
                    (c = a.props.locale),
                    (d = a.props.strictParsing),
                    (u = a.props.minDate),
                    (f = null),
                    (h = tr(c) || tr(er())),
                    (m = !0),
                    Array.isArray(l)
                      ? (l.forEach(function (e) {
                          var t = ut.default(p, e, new Date(), { locale: h });
                          d && (m = qt(t, u) && p === Qt(t, e, c)),
                            qt(t, u) && m && (f = t);
                        }),
                        f)
                      : ((f = ut.default(p, l, new Date(), { locale: h })),
                        d
                          ? (m = qt(f) && p === Qt(f, l, c))
                          : qt(f) ||
                            ((l = l
                              .match(Ft)
                              .map(function (e) {
                                var t = e[0];
                                return "p" === t || "P" === t
                                  ? h
                                    ? (0, Rt[t])(e, h.formatLong)
                                    : t
                                  : e;
                              })
                              .join("")),
                            p.length > 0 &&
                              (f = ut.default(
                                p,
                                l.slice(0, p.length),
                                new Date(),
                              )),
                            qt(f) || (f = new Date(p))),
                        qt(f) && m ? f : null));
                a.props.showTimeSelectOnly &&
                  a.props.selected &&
                  !Jt(y, a.props.selected) &&
                  (y =
                    null == y
                      ? yt.default(a.props.selected, {
                          hours: Ye.default(a.props.selected),
                          minutes: Ne.default(a.props.selected),
                          seconds: Pe.default(a.props.selected),
                        })
                      : yt.default(a.props.selected, {
                          hours: Ye.default(y),
                          minutes: Ne.default(y),
                          seconds: Pe.default(y),
                        })),
                  (!y && s.target.value) || a.setSelected(y, s, !0);
              }
            }),
            St(Pt(a), "handleSelect", function (e, t, r) {
              if (
                (a.setState({ preventFocus: !0 }, function () {
                  return (
                    (a.preventFocusTimeout = setTimeout(function () {
                      return a.setState({ preventFocus: !1 });
                    }, 50)),
                    a.preventFocusTimeout
                  );
                }),
                a.props.onChangeRaw && a.props.onChangeRaw(t),
                a.setSelected(e, t, !1, r),
                a.props.showDateSelect &&
                  a.setState({ isRenderAriaLiveMessage: !0 }),
                !a.props.shouldCloseOnSelect || a.props.showTimeSelect)
              )
                a.setPreSelection(e);
              else if (!a.props.inline) {
                a.props.selectsRange || a.setOpen(!1);
                var n = a.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || lt.default(e, o) || a.setOpen(!1);
              }
            }),
            St(Pt(a), "setSelected", function (e, t, r, n) {
              var o = e;
              if (a.props.showYearPicker) {
                if (null !== o && cr(Le.default(o), a.props)) return;
              } else if (a.props.showMonthYearPicker) {
                if (null !== o && sr(o, a.props)) return;
              } else if (null !== o && nr(o, a.props)) return;
              var s = a.props,
                i = s.onChange,
                p = s.selectsRange,
                l = s.startDate,
                c = s.endDate;
              if (!Xt(a.props.selected, o) || a.props.allowSameDay || p)
                if (
                  (null !== o &&
                    (!a.props.selected ||
                      (r &&
                        (a.props.showTimeSelect ||
                          a.props.showTimeSelectOnly ||
                          a.props.showTimeInput)) ||
                      (o = Bt(o, {
                        hour: Ye.default(a.props.selected),
                        minute: Ne.default(a.props.selected),
                        second: Pe.default(a.props.selected),
                      })),
                    a.props.inline || a.setState({ preSelection: o }),
                    a.props.focusSelectedMonth ||
                      a.setState({ monthSelectedIn: n })),
                  p)
                ) {
                  var d = l && !c,
                    u = l && c;
                  !l && !c
                    ? i([o, null], t)
                    : d && (lt.default(o, l) ? i([o, null], t) : i([l, o], t)),
                    u && i([o, null], t);
                } else i(o, t);
              r || (a.props.onSelect(o, t), a.setState({ inputValue: null }));
            }),
            St(Pt(a), "setPreSelection", function (e) {
              var t = void 0 !== a.props.minDate,
                r = void 0 !== a.props.maxDate,
                n = !0;
              if (e) {
                var o = $e.default(e);
                if (t && r) n = Zt(e, a.props.minDate, a.props.maxDate);
                else if (t) {
                  var s = $e.default(a.props.minDate);
                  n = pt.default(e, s) || Xt(o, s);
                } else if (r) {
                  var i = et.default(a.props.maxDate);
                  n = lt.default(e, i) || Xt(o, i);
                }
              }
              n && a.setState({ preSelection: e });
            }),
            St(Pt(a), "handleTimeChange", function (e) {
              var t = a.props.selected ? a.props.selected : a.getPreSelection(),
                r = a.props.selected
                  ? e
                  : Bt(t, { hour: Ye.default(e), minute: Ne.default(e) });
              a.setState({ preSelection: r }),
                a.props.onChange(r),
                a.props.shouldCloseOnSelect && a.setOpen(!1),
                a.props.showTimeInput && a.setOpen(!0),
                (a.props.showTimeSelectOnly || a.props.showTimeSelect) &&
                  a.setState({ isRenderAriaLiveMessage: !0 }),
                a.setState({ inputValue: null });
            }),
            St(Pt(a), "onInputClick", function () {
              a.props.disabled || a.props.readOnly || a.setOpen(!0),
                a.props.onInputClick();
            }),
            St(Pt(a), "onInputKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key;
              if (
                a.state.open ||
                a.props.inline ||
                a.props.preventOpenOnFocus
              ) {
                if (a.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var r =
                      a.calendar.componentNode &&
                      a.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]',
                      );
                    return void (r && r.focus({ preventScroll: !0 }));
                  }
                  var n = At(a.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      a.inputOk() && a.state.lastPreSelectChange === ca
                        ? (a.handleSelect(n, e),
                          !a.props.shouldCloseOnSelect && a.setPreSelection(n))
                        : a.setOpen(!1))
                    : "Escape" === t
                    ? (e.preventDefault(), a.setOpen(!1))
                    : "Tab" === t && a.setOpen(!1),
                    a.inputOk() || a.props.onInputError({ code: 1, msg: ia });
                }
              } else
                ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) ||
                  a.onInputClick();
            }),
            St(Pt(a), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            St(Pt(a), "onDayKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key,
                r = At(a.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  a.handleSelect(r, e),
                  !a.props.shouldCloseOnSelect && a.setPreSelection(r);
              else if ("Escape" === t)
                e.preventDefault(),
                  a.setOpen(!1),
                  a.inputOk() || a.props.onInputError({ code: 1, msg: ia });
              else if (!a.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = Se.default(r, 1);
                    break;
                  case "ArrowRight":
                    n = De.default(r, 1);
                    break;
                  case "ArrowUp":
                    n = Ce.default(r, 1);
                    break;
                  case "ArrowDown":
                    n = ge.default(r, 1);
                    break;
                  case "PageUp":
                    n = _e.default(r, 1);
                    break;
                  case "PageDown":
                    n = we.default(r, 1);
                    break;
                  case "Home":
                    n = Ee.default(r, 1);
                    break;
                  case "End":
                    n = be.default(r, 1);
                }
                if (!n)
                  return void (
                    a.props.onInputError &&
                    a.props.onInputError({ code: 1, msg: ia })
                  );
                if (
                  (e.preventDefault(),
                  a.setState({ lastPreSelectChange: ca }),
                  a.props.adjustDateOnChange && a.setSelected(n),
                  a.setPreSelection(n),
                  a.props.inline)
                ) {
                  var o = Te.default(r),
                    s = Te.default(n),
                    i = Le.default(r),
                    p = Le.default(n);
                  o !== s || i !== p
                    ? a.setState({ shouldFocusDayInline: !0 })
                    : a.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            St(Pt(a), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            St(Pt(a), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                a.props.selectsRange
                  ? a.props.onChange([null, null], e)
                  : a.props.onChange(null, e),
                a.setState({ inputValue: null });
            }),
            St(Pt(a), "clear", function () {
              a.onClearClick();
            }),
            St(Pt(a), "onScroll", function (e) {
              "boolean" == typeof a.props.closeOnScroll && a.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  a.setOpen(!1)
                : "function" == typeof a.props.closeOnScroll &&
                  a.props.closeOnScroll(e) &&
                  a.setOpen(!1);
            }),
            St(Pt(a), "renderCalendar", function () {
              return a.props.inline || a.isCalendarOpen()
                ? de.default.createElement(
                    sa,
                    {
                      ref: function (e) {
                        a.calendar = e;
                      },
                      locale: a.props.locale,
                      calendarStartDay: a.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        a.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        a.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                      monthAriaLabelPrefix: a.props.monthAriaLabelPrefix,
                      adjustDateOnChange: a.props.adjustDateOnChange,
                      setOpen: a.setOpen,
                      shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                      dateFormat: a.props.dateFormatCalendar,
                      useWeekdaysShort: a.props.useWeekdaysShort,
                      formatWeekDay: a.props.formatWeekDay,
                      dropdownMode: a.props.dropdownMode,
                      selected: a.props.selected,
                      preSelection: a.state.preSelection,
                      onSelect: a.handleSelect,
                      onWeekSelect: a.props.onWeekSelect,
                      openToDate: a.props.openToDate,
                      minDate: a.props.minDate,
                      maxDate: a.props.maxDate,
                      selectsStart: a.props.selectsStart,
                      selectsEnd: a.props.selectsEnd,
                      selectsRange: a.props.selectsRange,
                      startDate: a.props.startDate,
                      endDate: a.props.endDate,
                      excludeDates: a.props.excludeDates,
                      excludeDateIntervals: a.props.excludeDateIntervals,
                      filterDate: a.props.filterDate,
                      onClickOutside: a.handleCalendarClickOutside,
                      formatWeekNumber: a.props.formatWeekNumber,
                      highlightDates: a.state.highlightDates,
                      holidays: a.state.holidays,
                      includeDates: a.props.includeDates,
                      includeDateIntervals: a.props.includeDateIntervals,
                      includeTimes: a.props.includeTimes,
                      injectTimes: a.props.injectTimes,
                      inline: a.props.inline,
                      shouldFocusDayInline: a.state.shouldFocusDayInline,
                      peekNextMonth: a.props.peekNextMonth,
                      showMonthDropdown: a.props.showMonthDropdown,
                      showPreviousMonths: a.props.showPreviousMonths,
                      useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                      showMonthYearDropdown: a.props.showMonthYearDropdown,
                      showWeekNumbers: a.props.showWeekNumbers,
                      showYearDropdown: a.props.showYearDropdown,
                      withPortal: a.props.withPortal,
                      forceShowMonthNavigation:
                        a.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        a.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: a.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        a.props.scrollableMonthYearDropdown,
                      todayButton: a.props.todayButton,
                      weekLabel: a.props.weekLabel,
                      outsideClickIgnoreClass: oa,
                      fixedHeight: a.props.fixedHeight,
                      monthsShown: a.props.monthsShown,
                      monthSelectedIn: a.state.monthSelectedIn,
                      onDropdownFocus: a.handleDropdownFocus,
                      onMonthChange: a.props.onMonthChange,
                      onYearChange: a.props.onYearChange,
                      dayClassName: a.props.dayClassName,
                      weekDayClassName: a.props.weekDayClassName,
                      monthClassName: a.props.monthClassName,
                      timeClassName: a.props.timeClassName,
                      showDateSelect: a.props.showDateSelect,
                      showTimeSelect: a.props.showTimeSelect,
                      showTimeSelectOnly: a.props.showTimeSelectOnly,
                      onTimeChange: a.handleTimeChange,
                      timeFormat: a.props.timeFormat,
                      timeIntervals: a.props.timeIntervals,
                      minTime: a.props.minTime,
                      maxTime: a.props.maxTime,
                      excludeTimes: a.props.excludeTimes,
                      filterTime: a.props.filterTime,
                      timeCaption: a.props.timeCaption,
                      className: a.props.calendarClassName,
                      container: a.props.calendarContainer,
                      yearItemNumber: a.props.yearItemNumber,
                      yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: a.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        a.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: a.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: a.props.nextMonthButtonLabel,
                      previousYearAriaLabel: a.props.previousYearAriaLabel,
                      previousYearButtonLabel: a.props.previousYearButtonLabel,
                      nextYearAriaLabel: a.props.nextYearAriaLabel,
                      nextYearButtonLabel: a.props.nextYearButtonLabel,
                      timeInputLabel: a.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        a.props.disabledKeyboardNavigation,
                      renderCustomHeader: a.props.renderCustomHeader,
                      popperProps: a.props.popperProps,
                      renderDayContents: a.props.renderDayContents,
                      renderMonthContent: a.props.renderMonthContent,
                      renderQuarterContent: a.props.renderQuarterContent,
                      renderYearContent: a.props.renderYearContent,
                      onDayMouseEnter: a.props.onDayMouseEnter,
                      onMonthMouseLeave: a.props.onMonthMouseLeave,
                      onYearMouseEnter: a.props.onYearMouseEnter,
                      onYearMouseLeave: a.props.onYearMouseLeave,
                      selectsDisabledDaysInRange:
                        a.props.selectsDisabledDaysInRange,
                      showTimeInput: a.props.showTimeInput,
                      showMonthYearPicker: a.props.showMonthYearPicker,
                      showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        a.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        a.props.showFourColumnMonthYearPicker,
                      showYearPicker: a.props.showYearPicker,
                      showQuarterYearPicker: a.props.showQuarterYearPicker,
                      showPopperArrow: a.props.showPopperArrow,
                      excludeScrollbar: a.props.excludeScrollbar,
                      handleOnKeyDown: a.props.onKeyDown,
                      handleOnDayKeyDown: a.onDayKeyDown,
                      isInputFocused: a.state.focused,
                      customTimeInput: a.props.customTimeInput,
                      setPreSelection: a.setPreSelection,
                    },
                    a.props.children,
                  )
                : null;
            }),
            St(Pt(a), "renderAriaLiveRegion", function () {
              var e,
                t = a.props,
                r = t.dateFormat,
                n = t.locale,
                o =
                  a.props.showTimeInput || a.props.showTimeSelect
                    ? "PPPPp"
                    : "PPPP";
              return (
                (e = a.props.selectsRange
                  ? "Selected start date: "
                      .concat(
                        Kt(a.props.startDate, { dateFormat: o, locale: n }),
                        ". ",
                      )
                      .concat(
                        a.props.endDate
                          ? "End date: " +
                              Kt(a.props.endDate, { dateFormat: o, locale: n })
                          : "",
                      )
                  : a.props.showTimeSelectOnly
                  ? "Selected time: ".concat(
                      Kt(a.props.selected, { dateFormat: r, locale: n }),
                    )
                  : a.props.showYearPicker
                  ? "Selected year: ".concat(
                      Kt(a.props.selected, { dateFormat: "yyyy", locale: n }),
                    )
                  : a.props.showMonthYearPicker
                  ? "Selected month: ".concat(
                      Kt(a.props.selected, {
                        dateFormat: "MMMM yyyy",
                        locale: n,
                      }),
                    )
                  : a.props.showQuarterYearPicker
                  ? "Selected quarter: ".concat(
                      Kt(a.props.selected, {
                        dateFormat: "yyyy, QQQ",
                        locale: n,
                      }),
                    )
                  : "Selected date: ".concat(
                      Kt(a.props.selected, { dateFormat: o, locale: n }),
                    )),
                de.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  e,
                )
              );
            }),
            St(Pt(a), "renderDateInput", function () {
              var e,
                t = ue.default(a.props.className, St({}, oa, a.state.open)),
                r =
                  a.props.customInput ||
                  de.default.createElement("input", { type: "text" }),
                n = a.props.customInputRef || "ref",
                o =
                  "string" == typeof a.props.value
                    ? a.props.value
                    : "string" == typeof a.state.inputValue
                    ? a.state.inputValue
                    : a.props.selectsRange
                    ? (function (e, t, r) {
                        if (!e) return "";
                        var a = Kt(e, r),
                          n = t ? Kt(t, r) : "";
                        return "".concat(a, " - ").concat(n);
                      })(a.props.startDate, a.props.endDate, a.props)
                    : Kt(a.props.selected, a.props);
              return de.default.cloneElement(
                r,
                (St((e = {}), n, function (e) {
                  a.input = e;
                }),
                St(e, "value", o),
                St(e, "onBlur", a.handleBlur),
                St(e, "onChange", a.handleChange),
                St(e, "onClick", a.onInputClick),
                St(e, "onFocus", a.handleFocus),
                St(e, "onKeyDown", a.onInputKeyDown),
                St(e, "id", a.props.id),
                St(e, "name", a.props.name),
                St(e, "form", a.props.form),
                St(e, "autoFocus", a.props.autoFocus),
                St(e, "placeholder", a.props.placeholderText),
                St(e, "disabled", a.props.disabled),
                St(e, "autoComplete", a.props.autoComplete),
                St(e, "className", ue.default(r.props.className, t)),
                St(e, "title", a.props.title),
                St(e, "readOnly", a.props.readOnly),
                St(e, "required", a.props.required),
                St(e, "tabIndex", a.props.tabIndex),
                St(e, "aria-describedby", a.props.ariaDescribedBy),
                St(e, "aria-invalid", a.props.ariaInvalid),
                St(e, "aria-labelledby", a.props.ariaLabelledBy),
                St(e, "aria-required", a.props.ariaRequired),
                e),
              );
            }),
            St(Pt(a), "renderClearButton", function () {
              var e = a.props,
                t = e.isClearable,
                r = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                i = e.clearButtonClassName,
                p = void 0 === i ? "" : i,
                l = e.ariaLabelClose,
                c = void 0 === l ? "Close" : l;
              return !t || (null == r && null == n && null == o)
                ? null
                : de.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(p).trim(),
                    "aria-label": c,
                    onClick: a.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (a.state = a.calcInitialState()),
            a
          );
        }
        return (
          bt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var r, a;
                  e.inline &&
                    ((r = e.selected),
                    (a = this.props.selected),
                    r && a
                      ? Te.default(r) !== Te.default(a) ||
                        Le.default(r) !== Le.default(a)
                      : r !== a) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: br(this.props.highlightDates),
                      }),
                    t.focused ||
                      Xt(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  var e = this.props.showIcon;
                  return de.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__input-container".concat(
                        e ? " react-datepicker__view-calendar-icon" : "",
                      ),
                    },
                    e &&
                      de.default.createElement(
                        "svg",
                        {
                          className: "react-datepicker__calendar-icon",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 448 512",
                        },
                        de.default.createElement("path", {
                          d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
                        }),
                      ),
                    this.state.isRenderAriaLiveMessage &&
                      this.renderAriaLiveRegion(),
                    this.renderDateInput(),
                    this.renderClearButton(),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? de.default.createElement(
                          aa,
                          { enableTabLoop: this.props.enableTabLoop },
                          de.default.createElement(
                            "div",
                            {
                              className: "react-datepicker__portal",
                              tabIndex: -1,
                              onKeyDown: this.onPortalKeyDown,
                            },
                            e,
                          ),
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = de.default.createElement(
                          ta,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t,
                        )),
                      de.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t,
                      )
                    );
                  }
                  return de.default.createElement(na, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    portalHost: this.props.portalHost,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Lt,
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ],
          ),
          r
        );
      })(de.default.Component),
      la = "input",
      ca = "navigate";
    (e.CalendarContainer = Xr),
      (e.default = pa),
      (e.getDefaultLocale = er),
      (e.registerLocale = function (e, t) {
        var r = "undefined" != typeof window ? window : globalThis;
        r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  },
);
