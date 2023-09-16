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
    a,
    r,
    n,
    o,
    s,
    l,
    i,
    d,
    u,
    p,
    c,
    f,
    h,
    m,
    D,
    y,
    g,
    v,
    b,
    w,
    k,
    S,
    C,
    M,
    _,
    O,
    P,
    N,
    x,
    E,
    Y,
    T,
    I,
    R,
    L,
    F,
    A,
    q,
    B,
    W,
    K,
    j,
    Q,
    H,
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
    ae,
    re,
    ne,
    oe,
    se,
    le,
    ie,
    de,
  ) {
    "use strict";
    function ue(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var pe = ue(t),
      ce = ue(a),
      fe = ue(r),
      he = ue(n),
      me = ue(o),
      De = ue(s),
      ye = ue(l),
      ge = ue(i),
      ve = ue(d),
      be = ue(u),
      we = ue(p),
      ke = ue(c),
      Se = ue(f),
      Ce = ue(h),
      Me = ue(m),
      _e = ue(D),
      Oe = ue(y),
      Pe = ue(g),
      Ne = ue(v),
      xe = ue(b),
      Ee = ue(w),
      Ye = ue(k),
      Te = ue(S),
      Ie = ue(C),
      Re = ue(M),
      Le = ue(_),
      Fe = ue(O),
      Ae = ue(P),
      qe = ue(N),
      Be = ue(x),
      We = ue(E),
      Ke = ue(Y),
      je = ue(T),
      Qe = ue(I),
      He = ue(R),
      Ve = ue(L),
      Ue = ue(F),
      ze = ue(A),
      $e = ue(q),
      Ge = ue(B),
      Je = ue(W),
      Xe = ue(K),
      Ze = ue(j),
      et = ue(Q),
      tt = ue(H),
      at = ue(U),
      rt = ue(z),
      nt = ue($),
      ot = ue(G),
      st = ue(J),
      lt = ue(X),
      it = ue(Z),
      dt = ue(ee),
      ut = ue(te),
      pt = ue(ae),
      ct = ue(re),
      ft = ue(ne),
      ht = ue(oe),
      mt = ue(se),
      Dt = ue(le),
      yt = ue(de);
    function gt(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          a.push.apply(a, r);
      }
      return a;
    }
    function vt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gt(Object(a), !0).forEach(function (t) {
              Ct(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : gt(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t),
              );
            });
      }
      return e;
    }
    function bt(e) {
      return (
        (bt =
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
        bt(e)
      );
    }
    function wt(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function kt(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, Tt(r.key), r);
      }
    }
    function St(e, t, a) {
      return (
        t && kt(e.prototype, t),
        a && kt(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Ct(e, t, a) {
      return (
        (t = Tt(t)) in e
          ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = a),
        e
      );
    }
    function Mt() {
      return (
        (Mt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }),
        Mt.apply(this, arguments)
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
        t && Pt(e, t);
    }
    function Ot(e) {
      return (
        (Ot = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ot(e)
      );
    }
    function Pt(e, t) {
      return (
        (Pt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Pt(e, t)
      );
    }
    function Nt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function xt(e) {
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
        var a,
          r = Ot(e);
        if (t) {
          var n = Ot(this).constructor;
          a = Reflect.construct(r, arguments, n);
        } else a = r.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Nt(e);
        })(this, a);
      };
    }
    function Et(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Yt(e);
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
          if ("string" == typeof e) return Yt(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === a && e.constructor && (a = e.constructor.name);
          if ("Map" === a || "Set" === a) return Array.from(e);
          if (
            "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return Yt(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function Yt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Tt(e) {
      var t = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
          var r = a.call(e, t || "default");
          if ("object" != typeof r) return r;
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
      Rt = function (e, t) {
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
      Lt = {
        p: Rt,
        P: function (e, t) {
          var a,
            r = e.match(/(P+)(p+)?/) || [],
            n = r[1],
            o = r[2];
          if (!o) return It(e, t);
          switch (n) {
            case "P":
              a = t.dateTime({ width: "short" });
              break;
            case "PP":
              a = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              a = t.dateTime({ width: "long" });
              break;
            default:
              a = t.dateTime({ width: "full" });
          }
          return a.replace("{{date}}", It(n, t)).replace("{{time}}", Rt(o, t));
        },
      },
      Ft = 12,
      At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function qt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? ht.default(e)
          : ct.default(e)
        : new Date();
      return Bt(t) ? t : null;
    }
    function Bt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), me.default(e) && !ut.default(e, t)
      );
    }
    function Wt(e, t, a) {
      if ("en" === a) return De.default(e, t, { awareOfUnicodeTokens: !0 });
      var r = aa(a);
      return (
        a &&
          !r &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              a,
              '"].',
            ),
          ),
        !r && ta() && aa(ta()) && (r = aa(ta())),
        De.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Kt(e, t) {
      var a = t.dateFormat,
        r = t.locale;
      return (e && Wt(e, Array.isArray(a) ? a[0] : a, r)) || "";
    }
    function jt(e, t) {
      var a = t.hour,
        r = void 0 === a ? 0 : a,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        l = void 0 === s ? 0 : s;
      return We.default(Be.default(qe.default(e, l), o), r);
    }
    function Qt(e, t, a) {
      var r = aa(t || ta());
      return Je.default(e, { locale: r, weekStartsOn: a });
    }
    function Ht(e) {
      return Xe.default(e);
    }
    function Vt(e) {
      return et.default(e);
    }
    function Ut(e) {
      return Ze.default(e);
    }
    function zt() {
      return Ge.default(qt());
    }
    function $t(e, t) {
      return e && t ? lt.default(e, t) : !e && !t;
    }
    function Gt(e, t) {
      return e && t ? st.default(e, t) : !e && !t;
    }
    function Jt(e, t) {
      return e && t ? it.default(e, t) : !e && !t;
    }
    function Xt(e, t) {
      return e && t ? ot.default(e, t) : !e && !t;
    }
    function Zt(e, t) {
      return e && t ? nt.default(e, t) : !e && !t;
    }
    function ea(e, t, a) {
      var r,
        n = Ge.default(t),
        o = tt.default(a);
      try {
        r = pt.default(e, { start: n, end: o });
      } catch (e) {
        r = !1;
      }
      return r;
    }
    function ta() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function aa(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function ra(e, t) {
      return Wt(Ke.default(qt(), e), "LLLL", t);
    }
    function na(e, t) {
      return Wt(Ke.default(qt(), e), "LLL", t);
    }
    function oa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        l = t.includeDateIntervals,
        i = t.filterDate;
      return (
        fa(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return Xt(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var a = t.start,
              r = t.end;
            return pt.default(e, { start: a, end: r });
          })) ||
        (s &&
          !s.some(function (t) {
            return Xt(e, t);
          })) ||
        (l &&
          !l.some(function (t) {
            var a = t.start,
              r = t.end;
            return pt.default(e, { start: a, end: r });
          })) ||
        (i && !i(qt(e))) ||
        !1
      );
    }
    function sa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeDates,
        r = t.excludeDateIntervals;
      return r && r.length > 0
        ? r.some(function (t) {
            var a = t.start,
              r = t.end;
            return pt.default(e, { start: a, end: r });
          })
        : (a &&
            a.some(function (t) {
              return Xt(e, t);
            })) ||
            !1;
    }
    function la(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        fa(e, { minDate: Xe.default(a), maxDate: at.default(r) }) ||
        (n &&
          n.some(function (t) {
            return Gt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Gt(e, t);
          })) ||
        (s && !s(qt(e))) ||
        !1
      );
    }
    function ia(e, t, a, r) {
      var n = Fe.default(e),
        o = Re.default(e),
        s = Fe.default(t),
        l = Re.default(t),
        i = Fe.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function da(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        fa(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return Jt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Jt(e, t);
          })) ||
        (s && !s(qt(e))) ||
        !1
      );
    }
    function ua(e, t, a) {
      if (!me.default(t) || !me.default(a)) return !1;
      var r = Fe.default(t),
        n = Fe.default(a);
      return r <= e && n >= e;
    }
    function pa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate,
        l = new Date(e, 0, 1);
      return (
        fa(l, { minDate: et.default(a), maxDate: rt.default(r) }) ||
        (n &&
          n.some(function (e) {
            return $t(l, e);
          })) ||
        (o &&
          !o.some(function (e) {
            return $t(l, e);
          })) ||
        (s && !s(qt(l))) ||
        !1
      );
    }
    function ca(e, t, a, r) {
      var n = Fe.default(e),
        o = Le.default(e),
        s = Fe.default(t),
        l = Le.default(t),
        i = Fe.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function fa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate;
      return (a && Ue.default(e, a) < 0) || (r && Ue.default(e, r) > 0);
    }
    function ha(e, t) {
      return t.some(function (t) {
        return (
          Ee.default(t) === Ee.default(e) && xe.default(t) === xe.default(e)
        );
      });
    }
    function ma(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeTimes,
        r = t.includeTimes,
        n = t.filterTime;
      return (a && ha(e, a)) || (r && !ha(e, r)) || (n && !n(e)) || !1;
    }
    function Da(e, t) {
      var a = t.minTime,
        r = t.maxTime;
      if (!a || !r) throw new Error("Both minTime and maxTime props required");
      var n,
        o = qt(),
        s = We.default(Be.default(o, xe.default(e)), Ee.default(e)),
        l = We.default(Be.default(o, xe.default(a)), Ee.default(a)),
        i = We.default(Be.default(o, xe.default(r)), Ee.default(r));
      try {
        n = !pt.default(s, { start: l, end: i });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function ya(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = _e.default(e, 1);
      return (
        (a && ze.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return ze.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ga(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = we.default(e, 1);
      return (
        (a && ze.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return ze.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function va(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = Pe.default(e, 1);
      return (
        (a && $e.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ba(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = Se.default(e, 1);
      return (
        (a && $e.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function wa(e) {
      var t = e.minDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Ue.default(e, t) >= 0;
        });
        return He.default(r);
      }
      return a ? He.default(a) : t;
    }
    function ka(e) {
      var t = e.maxDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Ue.default(e, t) <= 0;
        });
        return Ve.default(r);
      }
      return a ? Ve.default(a) : t;
    }
    function Sa() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          a = new Map(),
          r = 0,
          n = e.length;
        r < n;
        r++
      ) {
        var o = e[r];
        if (he.default(o)) {
          var s = Wt(o, "MM.dd.yyyy"),
            l = a.get(s) || [];
          l.includes(t) || (l.push(t), a.set(s, l));
        } else if ("object" === bt(o)) {
          var i = Object.keys(o),
            d = i[0],
            u = o[i[0]];
          if ("string" == typeof d && u.constructor === Array)
            for (var p = 0, c = u.length; p < c; p++) {
              var f = Wt(u[p], "MM.dd.yyyy"),
                h = a.get(f) || [];
              h.includes(d) || (h.push(d), a.set(f, h));
            }
        }
      }
      return a;
    }
    function Ca() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "react-datepicker__day--holidays",
        a = new Map();
      return (
        e.forEach(function (e) {
          var r = e.date,
            n = e.holidayName;
          if (he.default(r)) {
            var o = Wt(r, "MM.dd.yyyy"),
              s = a.get(o) || {};
            if (
              !("className" in s) ||
              s.className !== t ||
              ((l = s.holidayNames),
              (i = [n]),
              l.length !== i.length ||
                !l.every(function (e, t) {
                  return e === i[t];
                }))
            ) {
              var l, i;
              s.className = t;
              var d = s.holidayNames;
              (s.holidayNames = d ? [].concat(Et(d), [n]) : [n]), a.set(o, s);
            }
          }
        }),
        a
      );
    }
    function Ma(e, t, a, r, n) {
      for (var o = n.length, s = [], l = 0; l < o; l++) {
        var i = ye.default(ge.default(e, Ee.default(n[l])), xe.default(n[l])),
          d = ye.default(e, (a + 1) * r);
        dt.default(i, t) && ut.default(i, d) && s.push(n[l]);
      }
      return s;
    }
    function _a(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function Oa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ft,
        a = Math.ceil(Fe.default(e) / t) * t;
      return { startPeriod: a - (t - 1), endPeriod: a };
    }
    function Pa(e) {
      var t = e.getSeconds(),
        a = e.getMilliseconds();
      return ct.default(e.getTime() - 1e3 * t - a);
    }
    function Na(e, t, a, r) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          l = !0;
        a && (l = Fe.default(a) <= s),
          r && l && (l = Fe.default(r) >= s),
          l && n.push(s);
      }
      return n;
    }
    var xa = (function (e) {
      _t(r, e);
      var a = xt(r);
      function r(e) {
        var n;
        wt(this, r),
          Ct(Nt((n = a.call(this, e))), "renderOptions", function () {
            var e = n.props.year,
              t = n.state.yearsList.map(function (t) {
                return pe.default.createElement(
                  "div",
                  {
                    className:
                      e === t
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: t,
                    onClick: n.onChange.bind(Nt(n), t),
                    "aria-selected": e === t ? "true" : void 0,
                  },
                  e === t
                    ? pe.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "✓",
                      )
                    : "",
                  t,
                );
              }),
              a = n.props.minDate ? Fe.default(n.props.minDate) : null,
              r = n.props.maxDate ? Fe.default(n.props.maxDate) : null;
            return (
              (r &&
                n.state.yearsList.find(function (e) {
                  return e === r;
                })) ||
                t.unshift(
                  pe.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: n.incrementYears,
                    },
                    pe.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                    }),
                  ),
                ),
              (a &&
                n.state.yearsList.find(function (e) {
                  return e === a;
                })) ||
                t.push(
                  pe.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: n.decrementYears,
                    },
                    pe.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    }),
                  ),
                ),
              t
            );
          }),
          Ct(Nt(n), "onChange", function (e) {
            n.props.onChange(e);
          }),
          Ct(Nt(n), "handleClickOutside", function () {
            n.props.onCancel();
          }),
          Ct(Nt(n), "shiftYears", function (e) {
            var t = n.state.yearsList.map(function (t) {
              return t + e;
            });
            n.setState({ yearsList: t });
          }),
          Ct(Nt(n), "incrementYears", function () {
            return n.shiftYears(1);
          }),
          Ct(Nt(n), "decrementYears", function () {
            return n.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          l = o || (s ? 10 : 5);
        return (
          (n.state = {
            yearsList: Na(n.props.year, l, n.props.minDate, n.props.maxDate),
          }),
          (n.dropdownRef = t.createRef()),
          n
        );
      }
      return (
        St(r, [
          {
            key: "componentDidMount",
            value: function () {
              var e = this.dropdownRef.current;
              if (e) {
                var t = e.children ? Array.from(e.children) : null,
                  a = t
                    ? t.find(function (e) {
                        return e.ariaSelected;
                      })
                    : null;
                e.scrollTop = a
                  ? a.offsetTop + (a.clientHeight - e.clientHeight) / 2
                  : (e.scrollHeight - e.clientHeight) / 2;
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = fe.default({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return pe.default.createElement(
                "div",
                { className: e, ref: this.dropdownRef },
                this.renderOptions(),
              );
            },
          },
        ]),
        r
      );
    })(pe.default.Component);
    Ct(xa, "propTypes", {
      minDate: ce.default.instanceOf(Date),
      maxDate: ce.default.instanceOf(Date),
      onCancel: ce.default.func.isRequired,
      onChange: ce.default.func.isRequired,
      scrollableYearDropdown: ce.default.bool,
      year: ce.default.number.isRequired,
      yearDropdownItemNumber: ce.default.number,
    });
    var Ea = mt.default(xa),
      Ya = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a() {
          var e;
          wt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Nt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Nt(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Fe.default(e.props.minDate) : 1900,
                  a = e.props.maxDate ? Fe.default(e.props.maxDate) : 2100,
                  r = [],
                  n = t;
                n <= a;
                n++
              )
                r.push(
                  pe.default.createElement("option", { key: n, value: n }, n),
                );
              return r;
            }),
            Ct(Nt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Ct(Nt(e), "renderSelectMode", function () {
              return pe.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            Ct(Nt(e), "renderReadView", function (t) {
              return pe.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                pe.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                pe.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year,
                ),
              );
            }),
            Ct(Nt(e), "renderDropdown", function () {
              return pe.default.createElement(Ea, {
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
            Ct(Nt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            Ct(Nt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            Ct(Nt(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                },
              );
            }),
            Ct(Nt(e), "handleYearChange", function (t, a) {
              e.onSelect(t, a), e.setOpen();
            }),
            Ct(Nt(e), "onSelect", function (t, a) {
              e.props.onSelect && e.props.onSelect(t, a);
            }),
            Ct(Nt(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          St(a, [
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
                return pe.default.createElement(
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
          a
        );
      })(pe.default.Component);
    Ct(Ya, "propTypes", {
      adjustDateOnChange: ce.default.bool,
      dropdownMode: ce.default.oneOf(["scroll", "select"]).isRequired,
      maxDate: ce.default.instanceOf(Date),
      minDate: ce.default.instanceOf(Date),
      onChange: ce.default.func.isRequired,
      scrollableYearDropdown: ce.default.bool,
      year: ce.default.number.isRequired,
      yearDropdownItemNumber: ce.default.number,
      date: ce.default.instanceOf(Date),
      onSelect: ce.default.func,
      setOpen: ce.default.func,
    });
    var Ta = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a() {
        var e;
        wt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Nt((e = t.call.apply(t, [this].concat(n)))),
            "isSelectedMonth",
            function (t) {
              return e.props.month === t;
            },
          ),
          Ct(Nt(e), "renderOptions", function () {
            return e.props.monthNames.map(function (t, a) {
              return pe.default.createElement(
                "div",
                {
                  className: e.isSelectedMonth(a)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: t,
                  onClick: e.onChange.bind(Nt(e), a),
                  "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
                },
                e.isSelectedMonth(a)
                  ? pe.default.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓",
                    )
                  : "",
                t,
              );
            });
          }),
          Ct(Nt(e), "onChange", function (t) {
            return e.props.onChange(t);
          }),
          Ct(Nt(e), "handleClickOutside", function () {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        St(a, [
          {
            key: "render",
            value: function () {
              return pe.default.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions(),
              );
            },
          },
        ]),
        a
      );
    })(pe.default.Component);
    Ct(Ta, "propTypes", {
      onCancel: ce.default.func.isRequired,
      onChange: ce.default.func.isRequired,
      month: ce.default.number.isRequired,
      monthNames: ce.default.arrayOf(ce.default.string.isRequired).isRequired,
    });
    var Ia = mt.default(Ta),
      Ra = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a() {
          var e;
          wt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Nt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Nt(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return pe.default.createElement(
                  "option",
                  { key: t, value: t },
                  e,
                );
              });
            }),
            Ct(Nt(e), "renderSelectMode", function (t) {
              return pe.default.createElement(
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
            Ct(Nt(e), "renderReadView", function (t, a) {
              return pe.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                pe.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                pe.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  a[e.props.month],
                ),
              );
            }),
            Ct(Nt(e), "renderDropdown", function (t) {
              return pe.default.createElement(Ia, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            Ct(Nt(e), "renderScrollMode", function (t) {
              var a = e.state.dropdownVisible,
                r = [e.renderReadView(!a, t)];
              return a && r.unshift(e.renderDropdown(t)), r;
            }),
            Ct(Nt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            Ct(Nt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          St(a, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return na(e, t.props.locale);
                        }
                      : function (e) {
                          return ra(e, t.props.locale);
                        },
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(a);
                    break;
                  case "select":
                    e = this.renderSelectMode(a);
                }
                return pe.default.createElement(
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
          a
        );
      })(pe.default.Component);
    function La(e, t) {
      for (var a = [], r = Ht(e), n = Ht(t); !dt.default(r, n); )
        a.push(qt(r)), (r = we.default(r, 1));
      return a;
    }
    Ct(Ra, "propTypes", {
      dropdownMode: ce.default.oneOf(["scroll", "select"]).isRequired,
      locale: ce.default.string,
      month: ce.default.number.isRequired,
      onChange: ce.default.func.isRequired,
      useShortMonthInDropdown: ce.default.bool,
    });
    var Fa = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          wt(this, a),
          Ct(Nt((r = t.call(this, e))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (e) {
              var t = Ae.default(e),
                a = $t(r.props.date, e) && Gt(r.props.date, e);
              return pe.default.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: t,
                  onClick: r.onChange.bind(Nt(r), t),
                  "aria-selected": a ? "true" : void 0,
                },
                a
                  ? pe.default.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓",
                    )
                  : "",
                Wt(e, r.props.dateFormat, r.props.locale),
              );
            });
          }),
          Ct(Nt(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          Ct(Nt(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: La(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        St(a, [
          {
            key: "render",
            value: function () {
              var e = fe.default({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return pe.default.createElement(
                "div",
                { className: e },
                this.renderOptions(),
              );
            },
          },
        ]),
        a
      );
    })(pe.default.Component);
    Ct(Fa, "propTypes", {
      minDate: ce.default.instanceOf(Date).isRequired,
      maxDate: ce.default.instanceOf(Date).isRequired,
      onCancel: ce.default.func.isRequired,
      onChange: ce.default.func.isRequired,
      scrollableMonthYearDropdown: ce.default.bool,
      date: ce.default.instanceOf(Date).isRequired,
      dateFormat: ce.default.string.isRequired,
      locale: ce.default.string,
    });
    var Aa = mt.default(Fa),
      qa = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a() {
          var e;
          wt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Nt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Nt(e), "renderSelectOptions", function () {
              for (
                var t = Ht(e.props.minDate), a = Ht(e.props.maxDate), r = [];
                !dt.default(t, a);

              ) {
                var n = Ae.default(t);
                r.push(
                  pe.default.createElement(
                    "option",
                    { key: n, value: n },
                    Wt(t, e.props.dateFormat, e.props.locale),
                  ),
                ),
                  (t = we.default(t, 1));
              }
              return r;
            }),
            Ct(Nt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Ct(Nt(e), "renderSelectMode", function () {
              return pe.default.createElement(
                "select",
                {
                  value: Ae.default(Ht(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            Ct(Nt(e), "renderReadView", function (t) {
              var a = Wt(e.props.date, e.props.dateFormat, e.props.locale);
              return pe.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                pe.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                pe.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  a,
                ),
              );
            }),
            Ct(Nt(e), "renderDropdown", function () {
              return pe.default.createElement(Aa, {
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
            Ct(Nt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            Ct(Nt(e), "onChange", function (t) {
              e.toggleDropdown();
              var a = qt(parseInt(t));
              ($t(e.props.date, a) && Gt(e.props.date, a)) ||
                e.props.onChange(a);
            }),
            Ct(Nt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          St(a, [
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
                return pe.default.createElement(
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
          a
        );
      })(pe.default.Component);
    Ct(qa, "propTypes", {
      dropdownMode: ce.default.oneOf(["scroll", "select"]).isRequired,
      dateFormat: ce.default.string.isRequired,
      locale: ce.default.string,
      maxDate: ce.default.instanceOf(Date).isRequired,
      minDate: ce.default.instanceOf(Date).isRequired,
      date: ce.default.instanceOf(Date).isRequired,
      onChange: ce.default.func.isRequired,
      scrollableMonthYearDropdown: ce.default.bool,
    });
    var Ba = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a() {
        var e;
        wt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Nt((e = t.call.apply(t, [this].concat(n)))),
            "dayEl",
            pe.default.createRef(),
          ),
          Ct(Nt(e), "handleClick", function (t) {
            !e.isDisabled() && e.props.onClick && e.props.onClick(t);
          }),
          Ct(Nt(e), "handleMouseEnter", function (t) {
            !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
          }),
          Ct(Nt(e), "handleOnKeyDown", function (t) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              e.props.handleOnKeyDown(t);
          }),
          Ct(Nt(e), "isSameDay", function (t) {
            return Xt(e.props.day, t);
          }),
          Ct(Nt(e), "isKeyboardSelected", function () {
            return (
              !e.props.disabledKeyboardNavigation &&
              !e.isSameDay(e.props.selected) &&
              e.isSameDay(e.props.preSelection)
            );
          }),
          Ct(Nt(e), "isDisabled", function () {
            return oa(e.props.day, e.props);
          }),
          Ct(Nt(e), "isExcluded", function () {
            return sa(e.props.day, e.props);
          }),
          Ct(Nt(e), "getHighLightedClass", function () {
            var t = e.props,
              a = t.day,
              r = t.highlightDates;
            if (!r) return !1;
            var n = Wt(a, "MM.dd.yyyy");
            return r.get(n);
          }),
          Ct(Nt(e), "getHolidaysClass", function () {
            var t = e.props,
              a = t.day,
              r = t.holidays;
            if (!r) return !1;
            var n = Wt(a, "MM.dd.yyyy");
            return r.has(n) ? [r.get(n).className] : void 0;
          }),
          Ct(Nt(e), "isInRange", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && ea(a, r, n);
          }),
          Ct(Nt(e), "isInSelectingRange", function () {
            var t,
              a = e.props,
              r = a.day,
              n = a.selectsStart,
              o = a.selectsEnd,
              s = a.selectsRange,
              l = a.selectsDisabledDaysInRange,
              i = a.startDate,
              d = a.endDate,
              u =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return (
              !(!(n || o || s) || !u || (!l && e.isDisabled())) &&
              (n && d && (ut.default(u, d) || Zt(u, d))
                ? ea(r, u, d)
                : ((o && i && (dt.default(u, i) || Zt(u, i))) ||
                    !(!s || !i || d || (!dt.default(u, i) && !Zt(u, i)))) &&
                  ea(r, i, u))
            );
          }),
          Ct(Nt(e), "isSelectingRangeStart", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.selectsStart,
              s =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return Xt(r, o ? s : n);
          }),
          Ct(Nt(e), "isSelectingRangeEnd", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.endDate,
              o = a.selectsEnd,
              s = a.selectsRange,
              l =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return Xt(r, o || s ? l : n);
          }),
          Ct(Nt(e), "isRangeStart", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && Xt(r, a);
          }),
          Ct(Nt(e), "isRangeEnd", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && Xt(n, a);
          }),
          Ct(Nt(e), "isWeekend", function () {
            var t = Ye.default(e.props.day);
            return 0 === t || 6 === t;
          }),
          Ct(Nt(e), "isAfterMonth", function () {
            return (
              void 0 !== e.props.month &&
              (e.props.month + 1) % 12 === Re.default(e.props.day)
            );
          }),
          Ct(Nt(e), "isBeforeMonth", function () {
            return (
              void 0 !== e.props.month &&
              (Re.default(e.props.day) + 1) % 12 === e.props.month
            );
          }),
          Ct(Nt(e), "isCurrentDay", function () {
            return e.isSameDay(qt());
          }),
          Ct(Nt(e), "isSelected", function () {
            return e.isSameDay(e.props.selected);
          }),
          Ct(Nt(e), "getClassNames", function (t) {
            var a,
              r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
            return fe.default(
              "react-datepicker__day",
              r,
              "react-datepicker__day--" + Wt(e.props.day, "ddd", a),
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
          Ct(Nt(e), "getAriaLabel", function () {
            var t = e.props,
              a = t.day,
              r = t.ariaLabelPrefixWhenEnabled,
              n = void 0 === r ? "Choose" : r,
              o = t.ariaLabelPrefixWhenDisabled,
              s = void 0 === o ? "Not available" : o,
              l = e.isDisabled() || e.isExcluded() ? s : n;
            return "".concat(l, " ").concat(Wt(a, "PPPP", e.props.locale));
          }),
          Ct(Nt(e), "getTitle", function () {
            var t = e.props,
              a = t.day,
              r = t.holidays,
              n = void 0 === r ? new Map() : r,
              o = Wt(a, "MM.dd.yyyy");
            return n.has(o) && n.get(o).holidayNames.length > 0
              ? n.get(o).holidayNames.join(", ")
              : "";
          }),
          Ct(Nt(e), "getTabIndex", function (t, a) {
            var r = t || e.props.selected,
              n = a || e.props.preSelection;
            return e.isKeyboardSelected() || (e.isSameDay(r) && Xt(n, r))
              ? 0
              : -1;
          }),
          Ct(Nt(e), "handleFocusDay", function () {
            var t,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = !1;
            0 === e.getTabIndex() &&
              !a.isInputFocused &&
              e.isSameDay(e.props.preSelection) &&
              ((document.activeElement &&
                document.activeElement !== document.body) ||
                (r = !0),
              e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
              e.props.containerRef &&
                e.props.containerRef.current &&
                e.props.containerRef.current.contains(document.activeElement) &&
                document.activeElement.classList.contains(
                  "react-datepicker__day",
                ) &&
                (r = !0),
              e.props.monthShowsDuplicateDaysEnd &&
                e.isAfterMonth() &&
                (r = !1),
              e.props.monthShowsDuplicateDaysStart &&
                e.isBeforeMonth() &&
                (r = !1)),
              r &&
                (null === (t = e.dayEl.current) ||
                  void 0 === t ||
                  t.focus({ preventScroll: !0 }));
          }),
          Ct(Nt(e), "renderDayContents", function () {
            return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
              (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
              ? null
              : e.props.renderDayContents
              ? e.props.renderDayContents(Te.default(e.props.day), e.props.day)
              : Te.default(e.props.day);
          }),
          Ct(Nt(e), "render", function () {
            return pe.default.createElement(
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
                pe.default.createElement(
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
        St(a, [
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
        a
      );
    })(pe.default.Component);
    Ct(Ba, "propTypes", {
      ariaLabelPrefixWhenEnabled: ce.default.string,
      ariaLabelPrefixWhenDisabled: ce.default.string,
      disabledKeyboardNavigation: ce.default.bool,
      day: ce.default.instanceOf(Date).isRequired,
      dayClassName: ce.default.func,
      endDate: ce.default.instanceOf(Date),
      highlightDates: ce.default.instanceOf(Map),
      holidays: ce.default.instanceOf(Map),
      inline: ce.default.bool,
      shouldFocusDayInline: ce.default.bool,
      month: ce.default.number,
      onClick: ce.default.func,
      onMouseEnter: ce.default.func,
      preSelection: ce.default.instanceOf(Date),
      selected: ce.default.object,
      selectingDate: ce.default.instanceOf(Date),
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      selectsDisabledDaysInRange: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      renderDayContents: ce.default.func,
      handleOnKeyDown: ce.default.func,
      containerRef: ce.default.oneOfType([
        ce.default.func,
        ce.default.shape({ current: ce.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: ce.default.bool,
      monthShowsDuplicateDaysStart: ce.default.bool,
      locale: ce.default.oneOfType([
        ce.default.string,
        ce.default.shape({ locale: ce.default.object }),
      ]),
    });
    var Wa = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a() {
        var e;
        wt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Nt((e = t.call.apply(t, [this].concat(n)))),
            "handleClick",
            function (t) {
              e.props.onClick && e.props.onClick(t);
            },
          ),
          e
        );
      }
      return (
        St(
          a,
          [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.weekNumber,
                  a = e.ariaLabelPrefix,
                  r = void 0 === a ? "week " : a,
                  n = {
                    "react-datepicker__week-number": !0,
                    "react-datepicker__week-number--clickable": !!e.onClick,
                  };
                return pe.default.createElement(
                  "div",
                  {
                    className: fe.default(n),
                    "aria-label": ""
                      .concat(r, " ")
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
        a
      );
    })(pe.default.Component);
    Ct(Wa, "propTypes", {
      weekNumber: ce.default.number.isRequired,
      onClick: ce.default.func,
      ariaLabelPrefix: ce.default.string,
    });
    var Ka,
      ja = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a() {
          var e;
          wt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(
              Nt((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, a) {
                e.props.onDayClick && e.props.onDayClick(t, a);
              },
            ),
            Ct(Nt(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            Ct(Nt(e), "handleWeekClick", function (t, a, r) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, a, r),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            Ct(Nt(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : (function (e, t) {
                    var a = (t && aa(t)) || (ta() && aa(ta()));
                    return Ie.default(e, a ? { locale: a } : null);
                  })(t);
            }),
            Ct(Nt(e), "renderDays", function () {
              var t = Qt(e.props.day, e.props.locale, e.props.calendarStartDay),
                a = [],
                r = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(Nt(e), t, r)
                  : void 0;
                a.push(
                  pe.default.createElement(Wa, {
                    key: "W",
                    weekNumber: r,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  }),
                );
              }
              return a.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (a) {
                  var r = ve.default(t, a);
                  return pe.default.createElement(Ba, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: r.valueOf(),
                    day: r,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(Nt(e), r),
                    onMouseEnter: e.handleDayMouseEnter.bind(Nt(e), r),
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
          St(
            a,
            [
              {
                key: "render",
                value: function () {
                  return pe.default.createElement(
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
          a
        );
      })(pe.default.Component);
    Ct(ja, "propTypes", {
      ariaLabelPrefix: ce.default.string,
      disabledKeyboardNavigation: ce.default.bool,
      day: ce.default.instanceOf(Date).isRequired,
      dayClassName: ce.default.func,
      disabledDayAriaLabelPrefix: ce.default.string,
      chooseDayAriaLabelPrefix: ce.default.string,
      endDate: ce.default.instanceOf(Date),
      excludeDates: ce.default.array,
      excludeDateIntervals: ce.default.arrayOf(
        ce.default.shape({
          start: ce.default.instanceOf(Date),
          end: ce.default.instanceOf(Date),
        }),
      ),
      filterDate: ce.default.func,
      formatWeekNumber: ce.default.func,
      highlightDates: ce.default.instanceOf(Map),
      holidays: ce.default.instanceOf(Map),
      includeDates: ce.default.array,
      includeDateIntervals: ce.default.array,
      inline: ce.default.bool,
      shouldFocusDayInline: ce.default.bool,
      locale: ce.default.oneOfType([
        ce.default.string,
        ce.default.shape({ locale: ce.default.object }),
      ]),
      maxDate: ce.default.instanceOf(Date),
      calendarStartDay: ce.default.number,
      minDate: ce.default.instanceOf(Date),
      month: ce.default.number,
      onDayClick: ce.default.func,
      onDayMouseEnter: ce.default.func,
      onWeekSelect: ce.default.func,
      preSelection: ce.default.instanceOf(Date),
      selected: ce.default.instanceOf(Date),
      selectingDate: ce.default.instanceOf(Date),
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      selectsDisabledDaysInRange: ce.default.bool,
      showWeekNumber: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      setOpen: ce.default.func,
      shouldCloseOnSelect: ce.default.bool,
      renderDayContents: ce.default.func,
      handleOnKeyDown: ce.default.func,
      isInputFocused: ce.default.bool,
      containerRef: ce.default.oneOfType([
        ce.default.func,
        ce.default.shape({ current: ce.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: ce.default.bool,
      monthShowsDuplicateDaysStart: ce.default.bool,
    });
    var Qa = "two_columns",
      Ha = "three_columns",
      Va = "four_columns",
      Ua =
        (Ct((Ka = {}), Qa, {
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
        Ct(Ka, Ha, {
          grid: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11],
          ],
          verticalNavigationOffset: 3,
        }),
        Ct(Ka, Va, {
          grid: [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
          ],
          verticalNavigationOffset: 4,
        }),
        Ka);
    function za(e, t) {
      return e ? Va : t ? Qa : Ha;
    }
    var $a = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a() {
        var e;
        wt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Nt((e = t.call.apply(t, [this].concat(n)))),
            "MONTH_REFS",
            Et(Array(12)).map(function () {
              return pe.default.createRef();
            }),
          ),
          Ct(
            Nt(e),
            "QUARTER_REFS",
            Et(Array(4)).map(function () {
              return pe.default.createRef();
            }),
          ),
          Ct(Nt(e), "isDisabled", function (t) {
            return oa(t, e.props);
          }),
          Ct(Nt(e), "isExcluded", function (t) {
            return sa(t, e.props);
          }),
          Ct(Nt(e), "handleDayClick", function (t, a) {
            e.props.onDayClick &&
              e.props.onDayClick(t, a, e.props.orderInDisplay);
          }),
          Ct(Nt(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          Ct(Nt(e), "handleMouseLeave", function () {
            e.props.onMouseLeave && e.props.onMouseLeave();
          }),
          Ct(Nt(e), "isRangeStartMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Gt(Ke.default(r, t), n);
          }),
          Ct(Nt(e), "isRangeStartQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Jt(je.default(r, t), n);
          }),
          Ct(Nt(e), "isRangeEndMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Gt(Ke.default(r, t), o);
          }),
          Ct(Nt(e), "isRangeEndQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Jt(je.default(r, t), o);
          }),
          Ct(Nt(e), "isInSelectingRangeMonth", function (t) {
            var a,
              r = e.props,
              n = r.day,
              o = r.selectsStart,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = r.startDate,
              d = r.endDate,
              u =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return (
              !(!(o || s || l) || !u) &&
              (o && d
                ? ia(u, d, t, n)
                : ((s && i) || !(!l || !i || d)) && ia(i, u, t, n))
            );
          }),
          Ct(Nt(e), "isSelectingMonthRangeStart", function (t) {
            var a;
            if (!e.isInSelectingRangeMonth(t)) return !1;
            var r = e.props,
              n = r.day,
              o = r.startDate,
              s = r.selectsStart,
              l = Ke.default(n, t),
              i =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return Gt(l, s ? i : o);
          }),
          Ct(Nt(e), "isSelectingMonthRangeEnd", function (t) {
            var a;
            if (!e.isInSelectingRangeMonth(t)) return !1;
            var r = e.props,
              n = r.day,
              o = r.endDate,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = Ke.default(n, t),
              d =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return Gt(i, s || l ? d : o);
          }),
          Ct(Nt(e), "isInSelectingRangeQuarter", function (t) {
            var a,
              r = e.props,
              n = r.day,
              o = r.selectsStart,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = r.startDate,
              d = r.endDate,
              u =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return (
              !(!(o || s || l) || !u) &&
              (o && d
                ? ca(u, d, t, n)
                : ((s && i) || !(!l || !i || d)) && ca(i, u, t, n))
            );
          }),
          Ct(Nt(e), "isWeekInMonth", function (t) {
            var a = e.props.day,
              r = ve.default(t, 6);
            return Gt(t, a) || Gt(r, a);
          }),
          Ct(Nt(e), "isCurrentMonth", function (e, t) {
            return Fe.default(e) === Fe.default(qt()) && t === Re.default(qt());
          }),
          Ct(Nt(e), "isCurrentQuarter", function (e, t) {
            return Fe.default(e) === Fe.default(qt()) && t === Le.default(qt());
          }),
          Ct(Nt(e), "isSelectedMonth", function (e, t, a) {
            return Re.default(a) === t && Fe.default(e) === Fe.default(a);
          }),
          Ct(Nt(e), "isSelectedQuarter", function (e, t, a) {
            return Le.default(e) === t && Fe.default(e) === Fe.default(a);
          }),
          Ct(Nt(e), "renderWeeks", function () {
            for (
              var t = [],
                a = e.props.fixedHeight,
                r = 0,
                n = !1,
                o = Qt(
                  Ht(e.props.day),
                  e.props.locale,
                  e.props.calendarStartDay,
                );
              t.push(
                pe.default.createElement(ja, {
                  ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                  chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r,
                  day: o,
                  month: Re.default(e.props.day),
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
              r++, (o = be.default(o, 1));
              var s = a && r >= 6,
                l = !a && !e.isWeekInMonth(o);
              if (s || l) {
                if (!e.props.peekNextMonth) break;
                n = !0;
              }
            }
            return t;
          }),
          Ct(Nt(e), "onMonthClick", function (t, a) {
            e.handleDayClick(Ht(Ke.default(e.props.day, a)), t);
          }),
          Ct(Nt(e), "onMonthMouseEnter", function (t) {
            e.handleDayMouseEnter(Ht(Ke.default(e.props.day, t)));
          }),
          Ct(Nt(e), "handleMonthNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
          }),
          Ct(Nt(e), "onMonthKeyDown", function (t, a) {
            var r = e.props,
              n = r.selected,
              o = r.preSelection,
              s = r.disabledKeyboardNavigation,
              l = r.showTwoColumnMonthYearPicker,
              i = r.showFourColumnMonthYearPicker,
              d = r.setPreSelection,
              u = t.key;
            if (("Tab" !== u && t.preventDefault(), !s)) {
              var p = za(i, l),
                c = Ua[p].verticalNavigationOffset,
                f = Ua[p].grid;
              switch (u) {
                case "Enter":
                  e.onMonthClick(t, a), d(n);
                  break;
                case "ArrowRight":
                  e.handleMonthNavigation(
                    11 === a ? 0 : a + 1,
                    we.default(o, 1),
                  );
                  break;
                case "ArrowLeft":
                  e.handleMonthNavigation(
                    0 === a ? 11 : a - 1,
                    _e.default(o, 1),
                  );
                  break;
                case "ArrowUp":
                  e.handleMonthNavigation(
                    f[0].includes(a) ? a + 12 - c : a - c,
                    _e.default(o, c),
                  );
                  break;
                case "ArrowDown":
                  e.handleMonthNavigation(
                    f[f.length - 1].includes(a) ? a - 12 + c : a + c,
                    we.default(o, c),
                  );
              }
            }
          }),
          Ct(Nt(e), "onQuarterClick", function (t, a) {
            e.handleDayClick(Ut(je.default(e.props.day, a)), t);
          }),
          Ct(Nt(e), "onQuarterMouseEnter", function (t) {
            e.handleDayMouseEnter(Ut(je.default(e.props.day, t)));
          }),
          Ct(Nt(e), "handleQuarterNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.QUARTER_REFS[t - 1].current &&
                e.QUARTER_REFS[t - 1].current.focus());
          }),
          Ct(Nt(e), "onQuarterKeyDown", function (t, a) {
            var r = t.key;
            if (!e.props.disabledKeyboardNavigation)
              switch (r) {
                case "Enter":
                  e.onQuarterClick(t, a),
                    e.props.setPreSelection(e.props.selected);
                  break;
                case "ArrowRight":
                  e.handleQuarterNavigation(
                    4 === a ? 1 : a + 1,
                    ke.default(e.props.preSelection, 1),
                  );
                  break;
                case "ArrowLeft":
                  e.handleQuarterNavigation(
                    1 === a ? 4 : a - 1,
                    Oe.default(e.props.preSelection, 1),
                  );
              }
          }),
          Ct(Nt(e), "getMonthClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection,
              u = a.monthClassName,
              p = a.excludeDates,
              c = a.includeDates,
              f = u ? u(Ke.default(r, t)) : void 0,
              h = Ke.default(r, t);
            return fe.default(
              "react-datepicker__month-text",
              "react-datepicker__month-".concat(t),
              f,
              {
                "react-datepicker__month-text--disabled":
                  (l || i || p || c) && la(h, e.props),
                "react-datepicker__month-text--selected": e.isSelectedMonth(
                  r,
                  t,
                  s,
                ),
                "react-datepicker__month-text--keyboard-selected":
                  !e.props.disabledKeyboardNavigation && Re.default(d) === t,
                "react-datepicker__month-text--in-selecting-range":
                  e.isInSelectingRangeMonth(t),
                "react-datepicker__month-text--in-range": ia(n, o, t, r),
                "react-datepicker__month-text--range-start":
                  e.isRangeStartMonth(t),
                "react-datepicker__month-text--range-end": e.isRangeEndMonth(t),
                "react-datepicker__month-text--selecting-range-start":
                  e.isSelectingMonthRangeStart(t),
                "react-datepicker__month-text--selecting-range-end":
                  e.isSelectingMonthRangeEnd(t),
                "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
              },
            );
          }),
          Ct(Nt(e), "getTabIndex", function (t) {
            var a = Re.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          Ct(Nt(e), "getQuarterTabIndex", function (t) {
            var a = Le.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          Ct(Nt(e), "getAriaLabel", function (t) {
            var a = e.props,
              r = a.chooseDayAriaLabelPrefix,
              n = void 0 === r ? "Choose" : r,
              o = a.disabledDayAriaLabelPrefix,
              s = void 0 === o ? "Not available" : o,
              l = a.day,
              i = Ke.default(l, t),
              d = e.isDisabled(i) || e.isExcluded(i) ? s : n;
            return "".concat(d, " ").concat(Wt(i, "MMMM yyyy"));
          }),
          Ct(Nt(e), "getQuarterClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection;
            return fe.default(
              "react-datepicker__quarter-text",
              "react-datepicker__quarter-".concat(t),
              {
                "react-datepicker__quarter-text--disabled":
                  (l || i) && da(je.default(r, t), e.props),
                "react-datepicker__quarter-text--selected": e.isSelectedQuarter(
                  r,
                  t,
                  s,
                ),
                "react-datepicker__quarter-text--keyboard-selected":
                  Le.default(d) === t,
                "react-datepicker__quarter-text--in-selecting-range":
                  e.isInSelectingRangeQuarter(t),
                "react-datepicker__quarter-text--in-range": ca(n, o, t, r),
                "react-datepicker__quarter-text--range-start":
                  e.isRangeStartQuarter(t),
                "react-datepicker__quarter-text--range-end":
                  e.isRangeEndQuarter(t),
              },
            );
          }),
          Ct(Nt(e), "getMonthContent", function (t) {
            var a = e.props,
              r = a.showFullMonthYearPicker,
              n = a.renderMonthContent,
              o = a.locale,
              s = na(t, o),
              l = ra(t, o);
            return n ? n(t, s, l) : r ? l : s;
          }),
          Ct(Nt(e), "getQuarterContent", function (t) {
            var a = e.props,
              r = a.renderQuarterContent,
              n = (function (e, t) {
                return Wt(je.default(qt(), e), "QQQ", t);
              })(t, a.locale);
            return r ? r(t, n) : n;
          }),
          Ct(Nt(e), "renderMonths", function () {
            var t = e.props,
              a = t.showTwoColumnMonthYearPicker,
              r = t.showFourColumnMonthYearPicker,
              n = t.day,
              o = t.selected;
            return Ua[za(r, a)].grid.map(function (t, a) {
              return pe.default.createElement(
                "div",
                { className: "react-datepicker__month-wrapper", key: a },
                t.map(function (t, a) {
                  return pe.default.createElement(
                    "div",
                    {
                      ref: e.MONTH_REFS[t],
                      key: a,
                      onClick: function (a) {
                        e.onMonthClick(a, t);
                      },
                      onKeyDown: function (a) {
                        e.onMonthKeyDown(a, t);
                      },
                      onMouseEnter: function () {
                        return e.onMonthMouseEnter(t);
                      },
                      tabIndex: e.getTabIndex(t),
                      className: e.getMonthClassNames(t),
                      role: "option",
                      "aria-label": e.getAriaLabel(t),
                      "aria-current": e.isCurrentMonth(n, t) ? "date" : void 0,
                      "aria-selected": e.isSelectedMonth(n, t, o),
                    },
                    e.getMonthContent(t),
                  );
                }),
              );
            });
          }),
          Ct(Nt(e), "renderQuarters", function () {
            var t = e.props,
              a = t.day,
              r = t.selected;
            return pe.default.createElement(
              "div",
              { className: "react-datepicker__quarter-wrapper" },
              [1, 2, 3, 4].map(function (t, n) {
                return pe.default.createElement(
                  "div",
                  {
                    key: n,
                    ref: e.QUARTER_REFS[n],
                    role: "option",
                    onClick: function (a) {
                      e.onQuarterClick(a, t);
                    },
                    onKeyDown: function (a) {
                      e.onQuarterKeyDown(a, t);
                    },
                    onMouseEnter: function () {
                      return e.onQuarterMouseEnter(t);
                    },
                    className: e.getQuarterClassNames(t),
                    "aria-selected": e.isSelectedQuarter(a, t, r),
                    tabIndex: e.getQuarterTabIndex(t),
                    "aria-current": e.isCurrentQuarter(a, t) ? "date" : void 0,
                  },
                  e.getQuarterContent(t),
                );
              }),
            );
          }),
          Ct(Nt(e), "getClassNames", function () {
            var t = e.props,
              a = t.selectingDate,
              r = t.selectsStart,
              n = t.selectsEnd,
              o = t.showMonthYearPicker,
              s = t.showQuarterYearPicker;
            return fe.default(
              "react-datepicker__month",
              { "react-datepicker__month--selecting-range": a && (r || n) },
              { "react-datepicker__monthPicker": o },
              { "react-datepicker__quarterPicker": s },
            );
          }),
          e
        );
      }
      return (
        St(a, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.showMonthYearPicker,
                a = e.showQuarterYearPicker,
                r = e.day,
                n = e.ariaLabelPrefix,
                o = void 0 === n ? "month " : n;
              return pe.default.createElement(
                "div",
                {
                  className: this.getClassNames(),
                  onMouseLeave: this.handleMouseLeave,
                  "aria-label": "".concat(o, " ").concat(Wt(r, "yyyy-MM")),
                  role: "listbox",
                },
                t
                  ? this.renderMonths()
                  : a
                  ? this.renderQuarters()
                  : this.renderWeeks(),
              );
            },
          },
        ]),
        a
      );
    })(pe.default.Component);
    Ct($a, "propTypes", {
      ariaLabelPrefix: ce.default.string,
      chooseDayAriaLabelPrefix: ce.default.string,
      disabledDayAriaLabelPrefix: ce.default.string,
      disabledKeyboardNavigation: ce.default.bool,
      day: ce.default.instanceOf(Date).isRequired,
      dayClassName: ce.default.func,
      monthClassName: ce.default.func,
      endDate: ce.default.instanceOf(Date),
      orderInDisplay: ce.default.number,
      excludeDates: ce.default.array,
      excludeDateIntervals: ce.default.arrayOf(
        ce.default.shape({
          start: ce.default.instanceOf(Date),
          end: ce.default.instanceOf(Date),
        }),
      ),
      filterDate: ce.default.func,
      fixedHeight: ce.default.bool,
      formatWeekNumber: ce.default.func,
      highlightDates: ce.default.instanceOf(Map),
      holidays: ce.default.PropTypes.instanceOf(Map),
      includeDates: ce.default.array,
      includeDateIntervals: ce.default.array,
      inline: ce.default.bool,
      shouldFocusDayInline: ce.default.bool,
      locale: ce.default.oneOfType([
        ce.default.string,
        ce.default.shape({ locale: ce.default.object }),
      ]),
      maxDate: ce.default.instanceOf(Date),
      minDate: ce.default.instanceOf(Date),
      onDayClick: ce.default.func,
      onDayMouseEnter: ce.default.func,
      onMouseLeave: ce.default.func,
      onWeekSelect: ce.default.func,
      peekNextMonth: ce.default.bool,
      preSelection: ce.default.instanceOf(Date),
      setPreSelection: ce.default.func,
      selected: ce.default.instanceOf(Date),
      selectingDate: ce.default.instanceOf(Date),
      calendarStartDay: ce.default.number,
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      selectsDisabledDaysInRange: ce.default.bool,
      showWeekNumbers: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      setOpen: ce.default.func,
      shouldCloseOnSelect: ce.default.bool,
      renderDayContents: ce.default.func,
      renderMonthContent: ce.default.func,
      renderQuarterContent: ce.default.func,
      showMonthYearPicker: ce.default.bool,
      showFullMonthYearPicker: ce.default.bool,
      showTwoColumnMonthYearPicker: ce.default.bool,
      showFourColumnMonthYearPicker: ce.default.bool,
      showQuarterYearPicker: ce.default.bool,
      handleOnKeyDown: ce.default.func,
      isInputFocused: ce.default.bool,
      weekAriaLabelPrefix: ce.default.string,
      containerRef: ce.default.oneOfType([
        ce.default.func,
        ce.default.shape({ current: ce.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: ce.default.bool,
      monthShowsDuplicateDaysStart: ce.default.bool,
    });
    var Ga = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a() {
        var e;
        wt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(Nt((e = t.call.apply(t, [this].concat(n)))), "state", {
            height: null,
          }),
          Ct(Nt(e), "handleClick", function (t) {
            ((e.props.minTime || e.props.maxTime) && Da(t, e.props)) ||
              ((e.props.excludeTimes ||
                e.props.includeTimes ||
                e.props.filterTime) &&
                ma(t, e.props)) ||
              e.props.onChange(t);
          }),
          Ct(Nt(e), "isSelectedTime", function (t) {
            return (
              e.props.selected &&
              ((a = e.props.selected),
              (r = t),
              Pa(a).getTime() === Pa(r).getTime())
            );
            var a, r;
          }),
          Ct(Nt(e), "liClasses", function (t) {
            var a = [
              "react-datepicker__time-list-item",
              e.props.timeClassName ? e.props.timeClassName(t) : void 0,
            ];
            return (
              e.isSelectedTime(t) &&
                a.push("react-datepicker__time-list-item--selected"),
              (((e.props.minTime || e.props.maxTime) && Da(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  ma(t, e.props))) &&
                a.push("react-datepicker__time-list-item--disabled"),
              e.props.injectTimes &&
                (60 * Ee.default(t) + xe.default(t)) % e.props.intervals != 0 &&
                a.push("react-datepicker__time-list-item--injected"),
              a.join(" ")
            );
          }),
          Ct(Nt(e), "handleOnKeyDown", function (t, a) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              ("ArrowUp" !== t.key && "ArrowLeft" !== t.key) ||
                !t.target.previousSibling ||
                (t.preventDefault(), t.target.previousSibling.focus()),
              ("ArrowDown" !== t.key && "ArrowRight" !== t.key) ||
                !t.target.nextSibling ||
                (t.preventDefault(), t.target.nextSibling.focus()),
              "Enter" === t.key && e.handleClick(a),
              e.props.handleOnKeyDown(t);
          }),
          Ct(Nt(e), "renderTimes", function () {
            for (
              var t,
                a = [],
                r = e.props.format ? e.props.format : "p",
                n = e.props.intervals,
                o = e.props.selected || e.props.openToDate || qt(),
                s = ((t = o), Ge.default(t)),
                l =
                  e.props.injectTimes &&
                  e.props.injectTimes.sort(function (e, t) {
                    return e - t;
                  }),
                i =
                  60 *
                  (function (e) {
                    var t = new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                      ),
                      a = new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                        24,
                      );
                    return Math.round((+a - +t) / 36e5);
                  })(o),
                d = i / n,
                u = 0;
              u < d;
              u++
            ) {
              var p = ye.default(s, u * n);
              if ((a.push(p), l)) {
                var c = Ma(s, p, u, n, l);
                a = a.concat(c);
              }
            }
            var f = a.reduce(function (e, t) {
              return t.getTime() <= o.getTime() ? t : e;
            }, a[0]);
            return a.map(function (t, a) {
              return pe.default.createElement(
                "li",
                {
                  key: a,
                  onClick: e.handleClick.bind(Nt(e), t),
                  className: e.liClasses(t),
                  ref: function (a) {
                    t === f && (e.centerLi = a);
                  },
                  onKeyDown: function (a) {
                    e.handleOnKeyDown(a, t);
                  },
                  tabIndex: t === f ? 0 : -1,
                  role: "option",
                  "aria-selected": e.isSelectedTime(t) ? "true" : void 0,
                },
                Wt(t, r, e.props.locale),
              );
            });
          }),
          e
        );
      }
      return (
        St(
          a,
          [
            {
              key: "componentDidMount",
              value: function () {
                (this.list.scrollTop =
                  this.centerLi &&
                  a.calcCenterPosition(
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
                return pe.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__time-container ".concat(
                      this.props.todayButton
                        ? "react-datepicker__time-container--with-today-button"
                        : "",
                    ),
                  },
                  pe.default.createElement(
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
                    pe.default.createElement(
                      "div",
                      { className: "react-datepicker-time__header" },
                      this.props.timeCaption,
                    ),
                  ),
                  pe.default.createElement(
                    "div",
                    { className: "react-datepicker__time" },
                    pe.default.createElement(
                      "div",
                      { className: "react-datepicker__time-box" },
                      pe.default.createElement(
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
        a
      );
    })(pe.default.Component);
    Ct(Ga, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
      Ct(Ga, "propTypes", {
        format: ce.default.string,
        includeTimes: ce.default.array,
        intervals: ce.default.number,
        selected: ce.default.instanceOf(Date),
        openToDate: ce.default.instanceOf(Date),
        onChange: ce.default.func,
        timeClassName: ce.default.func,
        todayButton: ce.default.node,
        minTime: ce.default.instanceOf(Date),
        maxTime: ce.default.instanceOf(Date),
        excludeTimes: ce.default.array,
        filterTime: ce.default.func,
        monthRef: ce.default.object,
        timeCaption: ce.default.string,
        injectTimes: ce.default.array,
        handleOnKeyDown: ce.default.func,
        locale: ce.default.oneOfType([
          ce.default.string,
          ce.default.shape({ locale: ce.default.object }),
        ]),
        showTimeSelectOnly: ce.default.bool,
      });
    var Ja = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          wt(this, a),
          Ct(
            Nt((r = t.call(this, e))),
            "YEAR_REFS",
            Et(Array(r.props.yearItemNumber)).map(function () {
              return pe.default.createRef();
            }),
          ),
          Ct(Nt(r), "isDisabled", function (e) {
            return oa(e, r.props);
          }),
          Ct(Nt(r), "isExcluded", function (e) {
            return sa(e, r.props);
          }),
          Ct(Nt(r), "selectingDate", function () {
            var e;
            return null !== (e = r.props.selectingDate) && void 0 !== e
              ? e
              : r.props.preSelection;
          }),
          Ct(Nt(r), "updateFocusOnPaginate", function (e) {
            var t = function () {
              this.YEAR_REFS[e].current.focus();
            }.bind(Nt(r));
            window.requestAnimationFrame(t);
          }),
          Ct(Nt(r), "handleYearClick", function (e, t) {
            r.props.onDayClick && r.props.onDayClick(e, t);
          }),
          Ct(Nt(r), "handleYearNavigation", function (e, t) {
            var a = r.props,
              n = a.date,
              o = a.yearItemNumber,
              s = Oa(n, o).startPeriod;
            r.isDisabled(t) ||
              r.isExcluded(t) ||
              (r.props.setPreSelection(t),
              e - s == -1
                ? r.updateFocusOnPaginate(o - 1)
                : e - s === o
                ? r.updateFocusOnPaginate(0)
                : r.YEAR_REFS[e - s].current.focus());
          }),
          Ct(Nt(r), "isSameDay", function (e, t) {
            return Xt(e, t);
          }),
          Ct(Nt(r), "isCurrentYear", function (e) {
            return e === Fe.default(qt());
          }),
          Ct(Nt(r), "isRangeStart", function (e) {
            return (
              r.props.startDate &&
              r.props.endDate &&
              $t(Qe.default(qt(), e), r.props.startDate)
            );
          }),
          Ct(Nt(r), "isRangeEnd", function (e) {
            return (
              r.props.startDate &&
              r.props.endDate &&
              $t(Qe.default(qt(), e), r.props.endDate)
            );
          }),
          Ct(Nt(r), "isInRange", function (e) {
            return ua(e, r.props.startDate, r.props.endDate);
          }),
          Ct(Nt(r), "isInSelectingRange", function (e) {
            var t = r.props,
              a = t.selectsStart,
              n = t.selectsEnd,
              o = t.selectsRange,
              s = t.startDate,
              l = t.endDate;
            return (
              !(!(a || n || o) || !r.selectingDate()) &&
              (a && l
                ? ua(e, r.selectingDate(), l)
                : ((n && s) || !(!o || !s || l)) && ua(e, s, r.selectingDate()))
            );
          }),
          Ct(Nt(r), "isSelectingRangeStart", function (e) {
            if (!r.isInSelectingRange(e)) return !1;
            var t = r.props,
              a = t.startDate,
              n = t.selectsStart,
              o = Qe.default(qt(), e);
            return $t(o, n ? r.selectingDate() : a);
          }),
          Ct(Nt(r), "isSelectingRangeEnd", function (e) {
            if (!r.isInSelectingRange(e)) return !1;
            var t = r.props,
              a = t.endDate,
              n = t.selectsEnd,
              o = t.selectsRange,
              s = Qe.default(qt(), e);
            return $t(s, n || o ? r.selectingDate() : a);
          }),
          Ct(Nt(r), "isKeyboardSelected", function (e) {
            var t = Vt(Qe.default(r.props.date, e));
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !Xt(t, Vt(r.props.selected)) &&
              Xt(t, Vt(r.props.preSelection))
            );
          }),
          Ct(Nt(r), "onYearClick", function (e, t) {
            var a = r.props.date;
            r.handleYearClick(Vt(Qe.default(a, t)), e);
          }),
          Ct(Nt(r), "onYearKeyDown", function (e, t) {
            var a = e.key;
            if (!r.props.disabledKeyboardNavigation)
              switch (a) {
                case "Enter":
                  r.onYearClick(e, t),
                    r.props.setPreSelection(r.props.selected);
                  break;
                case "ArrowRight":
                  r.handleYearNavigation(
                    t + 1,
                    Se.default(r.props.preSelection, 1),
                  );
                  break;
                case "ArrowLeft":
                  r.handleYearNavigation(
                    t - 1,
                    Pe.default(r.props.preSelection, 1),
                  );
              }
          }),
          Ct(Nt(r), "getYearClassNames", function (e) {
            var t = r.props,
              a = t.minDate,
              n = t.maxDate,
              o = t.selected,
              s = t.excludeDates,
              l = t.includeDates,
              i = t.filterDate;
            return fe.default("react-datepicker__year-text", {
              "react-datepicker__year-text--selected": e === Fe.default(o),
              "react-datepicker__year-text--disabled":
                (a || n || s || l || i) && pa(e, r.props),
              "react-datepicker__year-text--keyboard-selected":
                r.isKeyboardSelected(e),
              "react-datepicker__year-text--range-start": r.isRangeStart(e),
              "react-datepicker__year-text--range-end": r.isRangeEnd(e),
              "react-datepicker__year-text--in-range": r.isInRange(e),
              "react-datepicker__year-text--in-selecting-range":
                r.isInSelectingRange(e),
              "react-datepicker__year-text--selecting-range-start":
                r.isSelectingRangeStart(e),
              "react-datepicker__year-text--selecting-range-end":
                r.isSelectingRangeEnd(e),
              "react-datepicker__year-text--today": r.isCurrentYear(e),
            });
          }),
          Ct(Nt(r), "getYearTabIndex", function (e) {
            return r.props.disabledKeyboardNavigation
              ? "-1"
              : e === Fe.default(r.props.preSelection)
              ? "0"
              : "-1";
          }),
          Ct(Nt(r), "getYearContainerClassNames", function () {
            var e = r.props,
              t = e.selectingDate,
              a = e.selectsStart,
              n = e.selectsEnd,
              o = e.selectsRange;
            return fe.default("react-datepicker__year", {
              "react-datepicker__year--selecting-range": t && (a || n || o),
            });
          }),
          Ct(Nt(r), "getYearContent", function (e) {
            return r.props.renderYearContent ? r.props.renderYearContent(e) : e;
          }),
          r
        );
      }
      return (
        St(a, [
          {
            key: "render",
            value: function () {
              for (
                var e = this,
                  t = [],
                  a = this.props,
                  r = a.date,
                  n = a.yearItemNumber,
                  o = a.onYearMouseEnter,
                  s = a.onYearMouseLeave,
                  l = Oa(r, n),
                  i = l.startPeriod,
                  d = l.endPeriod,
                  u = function (a) {
                    t.push(
                      pe.default.createElement(
                        "div",
                        {
                          ref: e.YEAR_REFS[a - i],
                          onClick: function (t) {
                            e.onYearClick(t, a);
                          },
                          onKeyDown: function (t) {
                            e.onYearKeyDown(t, a);
                          },
                          tabIndex: e.getYearTabIndex(a),
                          className: e.getYearClassNames(a),
                          onMouseEnter: function (e) {
                            return o(e, a);
                          },
                          onMouseLeave: function (e) {
                            return s(e, a);
                          },
                          key: a,
                          "aria-current": e.isCurrentYear(a) ? "date" : void 0,
                        },
                        e.getYearContent(a),
                      ),
                    );
                  },
                  p = i;
                p <= d;
                p++
              )
                u(p);
              return pe.default.createElement(
                "div",
                { className: this.getYearContainerClassNames() },
                pe.default.createElement(
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
        a
      );
    })(pe.default.Component);
    Ct(Ja, "propTypes", {
      clearSelectingDate: ce.default.func,
      date: ce.default.instanceOf(Date),
      disabledKeyboardNavigation: ce.default.bool,
      endDate: ce.default.instanceOf(Date),
      onDayClick: ce.default.func,
      preSelection: ce.default.instanceOf(Date),
      setPreSelection: ce.default.func,
      selected: ce.default.object,
      inline: ce.default.bool,
      maxDate: ce.default.instanceOf(Date),
      minDate: ce.default.instanceOf(Date),
      onYearMouseEnter: ce.default.func.isRequired,
      onYearMouseLeave: ce.default.func.isRequired,
      selectingDate: ce.default.instanceOf(Date),
      renderYearContent: ce.default.func,
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      excludeDates: ce.default.array,
      includeDates: ce.default.array,
      filterDate: ce.default.func,
      yearItemNumber: ce.default.number,
    });
    var Xa = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          wt(this, a),
          Ct(Nt((r = t.call(this, e))), "onTimeChange", function (e) {
            r.setState({ time: e });
            var t = new Date();
            t.setHours(e.split(":")[0]),
              t.setMinutes(e.split(":")[1]),
              r.props.onChange(t);
          }),
          Ct(Nt(r), "renderTimeInput", function () {
            var e = r.state.time,
              t = r.props,
              a = t.date,
              n = t.timeString,
              o = t.customTimeInput;
            return o
              ? pe.default.cloneElement(o, {
                  date: a,
                  value: e,
                  onChange: r.onTimeChange,
                })
              : pe.default.createElement("input", {
                  type: "time",
                  className: "react-datepicker-time__input",
                  placeholder: "Time",
                  name: "time-input",
                  required: !0,
                  value: e,
                  onChange: function (e) {
                    r.onTimeChange(e.target.value || n);
                  },
                });
          }),
          (r.state = { time: r.props.timeString }),
          r
        );
      }
      return (
        St(
          a,
          [
            {
              key: "render",
              value: function () {
                return pe.default.createElement(
                  "div",
                  { className: "react-datepicker__input-time-container" },
                  pe.default.createElement(
                    "div",
                    { className: "react-datepicker-time__caption" },
                    this.props.timeInputLabel,
                  ),
                  pe.default.createElement(
                    "div",
                    { className: "react-datepicker-time__input-container" },
                    pe.default.createElement(
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
                return e.timeString !== t.time ? { time: e.timeString } : null;
              },
            },
          ],
        ),
        a
      );
    })(pe.default.Component);
    function Za(e) {
      var t = e.className,
        a = e.children,
        r = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return pe.default.createElement(
        "div",
        { className: t },
        r &&
          pe.default.createElement(
            "div",
            Mt({ className: "react-datepicker__triangle" }, o),
          ),
        a,
      );
    }
    Ct(Xa, "propTypes", {
      onChange: ce.default.func,
      date: ce.default.instanceOf(Date),
      timeString: ce.default.string,
      timeInputLabel: ce.default.string,
      customTimeInput: ce.default.element,
    }),
      (Za.propTypes = {
        className: ce.default.string,
        children: ce.default.node,
        arrowProps: ce.default.object,
        showPopperArrow: ce.default.bool,
      });
    var er = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      tr = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            wt(this, a),
            Ct(Nt((r = t.call(this, e))), "handleClickOutside", function (e) {
              r.props.onClickOutside(e);
            }),
            Ct(Nt(r), "setClickOutsideRef", function () {
              return r.containerRef.current;
            }),
            Ct(Nt(r), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return er.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && r.props.onDropdownFocus();
            }),
            Ct(Nt(r), "getDateInView", function () {
              var e = r.props,
                t = e.preSelection,
                a = e.selected,
                n = e.openToDate,
                o = wa(r.props),
                s = ka(r.props),
                l = qt(),
                i = n || a || t;
              return (
                i || (o && ut.default(l, o) ? o : s && dt.default(l, s) ? s : l)
              );
            }),
            Ct(Nt(r), "increaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: we.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "decreaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: _e.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "handleDayClick", function (e, t, a) {
              r.props.onSelect(e, t, a),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Nt(r), "handleDayMouseEnter", function (e) {
              r.setState({ selectingDate: e }),
                r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
            }),
            Ct(Nt(r), "handleMonthMouseLeave", function () {
              r.setState({ selectingDate: null }),
                r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
            }),
            Ct(Nt(r), "handleYearMouseEnter", function (e, t) {
              r.setState({ selectingDate: Qe.default(qt(), t) }),
                r.props.onYearMouseEnter && r.props.onYearMouseEnter(e, t);
            }),
            Ct(Nt(r), "handleYearMouseLeave", function (e, t) {
              r.props.onYearMouseLeave && r.props.onYearMouseLeave(e, t);
            }),
            Ct(Nt(r), "handleYearChange", function (e) {
              r.props.onYearChange &&
                (r.props.onYearChange(e),
                r.setState({ isRenderAriaLiveMessage: !0 })),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Nt(r), "handleMonthChange", function (e) {
              r.handleCustomMonthChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Nt(r), "handleCustomMonthChange", function (e) {
              r.props.onMonthChange &&
                (r.props.onMonthChange(e),
                r.setState({ isRenderAriaLiveMessage: !0 }));
            }),
            Ct(Nt(r), "handleMonthYearChange", function (e) {
              r.handleYearChange(e), r.handleMonthChange(e);
            }),
            Ct(Nt(r), "changeYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Qe.default(a, e) };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "changeMonth", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Ke.default(a, e) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "changeMonthYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return {
                    date: Qe.default(
                      Ke.default(a, Re.default(e)),
                      Fe.default(e),
                    ),
                  };
                },
                function () {
                  return r.handleMonthYearChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "header", function () {
              var e = Qt(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                  r.props.locale,
                  r.props.calendarStartDay,
                ),
                t = [];
              return (
                r.props.showWeekNumbers &&
                  t.push(
                    pe.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      r.props.weekLabel || "#",
                    ),
                  ),
                t.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (t) {
                    var a = ve.default(e, t),
                      n = r.formatWeekday(a, r.props.locale),
                      o = r.props.weekDayClassName
                        ? r.props.weekDayClassName(a)
                        : void 0;
                    return pe.default.createElement(
                      "div",
                      {
                        key: t,
                        className: fe.default("react-datepicker__day-name", o),
                      },
                      n,
                    );
                  }),
                )
              );
            }),
            Ct(Nt(r), "formatWeekday", function (e, t) {
              return r.props.formatWeekDay
                ? (function (e, t, a) {
                    return t(Wt(e, "EEEE", a));
                  })(e, r.props.formatWeekDay, t)
                : r.props.useWeekdaysShort
                ? (function (e, t) {
                    return Wt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return Wt(e, "EEEEEE", t);
                  })(e, t);
            }),
            Ct(Nt(r), "decreaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Pe.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "clearSelectingDate", function () {
              r.setState({ selectingDate: null });
            }),
            Ct(Nt(r), "renderPreviousButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = va(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.minDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Ft : r,
                        o = Oa(Vt(Pe.default(e, n)), n).endPeriod,
                        s = a && Fe.default(a);
                      return (s && s > o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ya(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    a = r.decreaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.decreaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled",
                      ),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.previousMonthButtonLabel,
                    l = o.previousYearButtonLabel,
                    i = r.props,
                    d = i.previousMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : d,
                    p = i.previousYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Previous Year"
                        : p;
                  return pe.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    pe.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? r.props.previousYearButtonLabel
                        : r.props.previousMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            Ct(Nt(r), "increaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Se.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            Ct(Nt(r), "renderNextButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = ba(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.maxDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Ft : r,
                        o = Oa(Se.default(e, n), n).startPeriod,
                        s = a && Fe.default(a);
                      return (s && s < o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ga(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  r.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    r.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button",
                      );
                  var a = r.increaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.increaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.nextMonthButtonLabel,
                    l = o.nextYearButtonLabel,
                    i = r.props,
                    d = i.nextMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : d,
                    p = i.nextYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Next Year"
                        : p;
                  return pe.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    pe.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? r.props.nextYearButtonLabel
                        : r.props.nextMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            Ct(Nt(r), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                t = ["react-datepicker__current-month"];
              return (
                r.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                r.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                r.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown",
                  ),
                pe.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  Wt(e, r.props.dateFormat, r.props.locale),
                )
              );
            }),
            Ct(Nt(r), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showYearDropdown && !e)
                return pe.default.createElement(Ya, {
                  adjustDateOnChange: r.props.adjustDateOnChange,
                  date: r.state.date,
                  onSelect: r.props.onSelect,
                  setOpen: r.props.setOpen,
                  dropdownMode: r.props.dropdownMode,
                  onChange: r.changeYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  year: Fe.default(r.state.date),
                  scrollableYearDropdown: r.props.scrollableYearDropdown,
                  yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                });
            }),
            Ct(Nt(r), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthDropdown && !e)
                return pe.default.createElement(Ra, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  onChange: r.changeMonth,
                  month: Re.default(r.state.date),
                  useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                });
            }),
            Ct(Nt(r), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthYearDropdown && !e)
                return pe.default.createElement(qa, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  dateFormat: r.props.dateFormat,
                  onChange: r.changeMonthYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  date: r.state.date,
                  scrollableMonthYearDropdown:
                    r.props.scrollableMonthYearDropdown,
                });
            }),
            Ct(Nt(r), "handleTodayButtonClick", function (e) {
              r.props.onSelect(zt(), e),
                r.props.setPreSelection && r.props.setPreSelection(zt());
            }),
            Ct(Nt(r), "renderTodayButton", function () {
              if (r.props.todayButton && !r.props.showTimeSelectOnly)
                return pe.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return r.handleTodayButtonClick(e);
                    },
                  },
                  r.props.todayButton,
                );
            }),
            Ct(Nt(r), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                a = e.i;
              return pe.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    r.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : "",
                  ),
                },
                r.renderCurrentMonth(t),
                pe.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        r.props.dropdownMode,
                      ),
                    onFocus: r.handleDropdownFocus,
                  },
                  r.renderMonthDropdown(0 !== a),
                  r.renderMonthYearDropdown(0 !== a),
                  r.renderYearDropdown(0 !== a),
                ),
                pe.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  r.header(t),
                ),
              );
            }),
            Ct(Nt(r), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                a = e.i;
              if (
                (r.props.showTimeSelect && !r.state.monthContainer) ||
                r.props.showTimeSelectOnly
              )
                return null;
              var n = ya(r.state.date, r.props),
                o = ga(r.state.date, r.props),
                s = va(r.state.date, r.props),
                l = ba(r.state.date, r.props),
                i =
                  !r.props.showMonthYearPicker &&
                  !r.props.showQuarterYearPicker &&
                  !r.props.showYearPicker;
              return pe.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: r.props.onDropdownFocus,
                },
                r.props.renderCustomHeader(
                  vt(
                    vt({}, r.state),
                    {},
                    {
                      customHeaderCount: a,
                      monthDate: t,
                      changeMonth: r.changeMonth,
                      changeYear: r.changeYear,
                      decreaseMonth: r.decreaseMonth,
                      increaseMonth: r.increaseMonth,
                      decreaseYear: r.decreaseYear,
                      increaseYear: r.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: l,
                    },
                  ),
                ),
                i &&
                  pe.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    r.header(t),
                  ),
              );
            }),
            Ct(Nt(r), "renderYearHeader", function () {
              var e = r.state.date,
                t = r.props,
                a = t.showYearPicker,
                n = Oa(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return pe.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                a ? "".concat(o, " - ").concat(s) : Fe.default(e),
              );
            }),
            Ct(Nt(r), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== r.props.renderCustomHeader:
                  return r.renderCustomHeader(e);
                case r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker:
                  return r.renderYearHeader(e);
                default:
                  return r.renderDefaultHeader(e);
              }
            }),
            Ct(Nt(r), "renderMonths", function () {
              var e;
              if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
                for (
                  var t = [],
                    a = r.props.showPreviousMonths
                      ? r.props.monthsShown - 1
                      : 0,
                    n = _e.default(r.state.date, a),
                    o =
                      null !== (e = r.props.monthSelectedIn) && void 0 !== e
                        ? e
                        : a,
                    s = 0;
                  s < r.props.monthsShown;
                  ++s
                ) {
                  var l = s - o + a,
                    i = we.default(n, l),
                    d = "month-".concat(s),
                    u = s < r.props.monthsShown - 1,
                    p = s > 0;
                  t.push(
                    pe.default.createElement(
                      "div",
                      {
                        key: d,
                        ref: function (e) {
                          r.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      r.renderHeader({ monthDate: i, i: s }),
                      pe.default.createElement($a, {
                        chooseDayAriaLabelPrefix:
                          r.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          r.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                        ariaLabelPrefix: r.props.monthAriaLabelPrefix,
                        onChange: r.changeMonthYear,
                        day: i,
                        dayClassName: r.props.dayClassName,
                        calendarStartDay: r.props.calendarStartDay,
                        monthClassName: r.props.monthClassName,
                        onDayClick: r.handleDayClick,
                        handleOnKeyDown: r.props.handleOnDayKeyDown,
                        onDayMouseEnter: r.handleDayMouseEnter,
                        onMouseLeave: r.handleMonthMouseLeave,
                        onWeekSelect: r.props.onWeekSelect,
                        orderInDisplay: s,
                        formatWeekNumber: r.props.formatWeekNumber,
                        locale: r.props.locale,
                        minDate: r.props.minDate,
                        maxDate: r.props.maxDate,
                        excludeDates: r.props.excludeDates,
                        excludeDateIntervals: r.props.excludeDateIntervals,
                        highlightDates: r.props.highlightDates,
                        holidays: r.props.holidays,
                        selectingDate: r.state.selectingDate,
                        includeDates: r.props.includeDates,
                        includeDateIntervals: r.props.includeDateIntervals,
                        inline: r.props.inline,
                        shouldFocusDayInline: r.props.shouldFocusDayInline,
                        fixedHeight: r.props.fixedHeight,
                        filterDate: r.props.filterDate,
                        preSelection: r.props.preSelection,
                        setPreSelection: r.props.setPreSelection,
                        selected: r.props.selected,
                        selectsStart: r.props.selectsStart,
                        selectsEnd: r.props.selectsEnd,
                        selectsRange: r.props.selectsRange,
                        selectsDisabledDaysInRange:
                          r.props.selectsDisabledDaysInRange,
                        showWeekNumbers: r.props.showWeekNumbers,
                        startDate: r.props.startDate,
                        endDate: r.props.endDate,
                        peekNextMonth: r.props.peekNextMonth,
                        setOpen: r.props.setOpen,
                        shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                        renderDayContents: r.props.renderDayContents,
                        renderMonthContent: r.props.renderMonthContent,
                        renderQuarterContent: r.props.renderQuarterContent,
                        renderYearContent: r.props.renderYearContent,
                        disabledKeyboardNavigation:
                          r.props.disabledKeyboardNavigation,
                        showMonthYearPicker: r.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          r.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          r.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          r.props.showFourColumnMonthYearPicker,
                        showYearPicker: r.props.showYearPicker,
                        showQuarterYearPicker: r.props.showQuarterYearPicker,
                        isInputFocused: r.props.isInputFocused,
                        containerRef: r.containerRef,
                        monthShowsDuplicateDaysEnd: u,
                        monthShowsDuplicateDaysStart: p,
                      }),
                    ),
                  );
                }
                return t;
              }
            }),
            Ct(Nt(r), "renderYears", function () {
              if (!r.props.showTimeSelectOnly)
                return r.props.showYearPicker
                  ? pe.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      r.renderHeader(),
                      pe.default.createElement(
                        Ja,
                        Mt(
                          {
                            onDayClick: r.handleDayClick,
                            selectingDate: r.state.selectingDate,
                            clearSelectingDate: r.clearSelectingDate,
                            date: r.state.date,
                          },
                          r.props,
                          {
                            onYearMouseEnter: r.handleYearMouseEnter,
                            onYearMouseLeave: r.handleYearMouseLeave,
                          },
                        ),
                      ),
                    )
                  : void 0;
            }),
            Ct(Nt(r), "renderTimeSection", function () {
              if (
                r.props.showTimeSelect &&
                (r.state.monthContainer || r.props.showTimeSelectOnly)
              )
                return pe.default.createElement(Ga, {
                  selected: r.props.selected,
                  openToDate: r.props.openToDate,
                  onChange: r.props.onTimeChange,
                  timeClassName: r.props.timeClassName,
                  format: r.props.timeFormat,
                  includeTimes: r.props.includeTimes,
                  intervals: r.props.timeIntervals,
                  minTime: r.props.minTime,
                  maxTime: r.props.maxTime,
                  excludeTimes: r.props.excludeTimes,
                  filterTime: r.props.filterTime,
                  timeCaption: r.props.timeCaption,
                  todayButton: r.props.todayButton,
                  showMonthDropdown: r.props.showMonthDropdown,
                  showMonthYearDropdown: r.props.showMonthYearDropdown,
                  showYearDropdown: r.props.showYearDropdown,
                  withPortal: r.props.withPortal,
                  monthRef: r.state.monthContainer,
                  injectTimes: r.props.injectTimes,
                  locale: r.props.locale,
                  handleOnKeyDown: r.props.handleOnKeyDown,
                  showTimeSelectOnly: r.props.showTimeSelectOnly,
                });
            }),
            Ct(Nt(r), "renderInputTimeSection", function () {
              var e = new Date(r.props.selected),
                t =
                  Bt(e) && Boolean(r.props.selected)
                    ? ""
                        .concat(_a(e.getHours()), ":")
                        .concat(_a(e.getMinutes()))
                    : "";
              if (r.props.showTimeInput)
                return pe.default.createElement(Xa, {
                  date: e,
                  timeString: t,
                  timeInputLabel: r.props.timeInputLabel,
                  onChange: r.props.onTimeChange,
                  customTimeInput: r.props.customTimeInput,
                });
            }),
            Ct(Nt(r), "renderAriaLiveRegion", function () {
              var e,
                t = Oa(r.state.date, r.props.yearItemNumber),
                a = t.startPeriod,
                n = t.endPeriod;
              return (
                (e = r.props.showYearPicker
                  ? "".concat(a, " - ").concat(n)
                  : r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                  ? Fe.default(r.state.date)
                  : ""
                      .concat(ra(Re.default(r.state.date), r.props.locale), " ")
                      .concat(Fe.default(r.state.date))),
                pe.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  r.state.isRenderAriaLiveMessage && e,
                )
              );
            }),
            Ct(Nt(r), "renderChildren", function () {
              if (r.props.children)
                return pe.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  r.props.children,
                );
            }),
            (r.containerRef = pe.default.createRef()),
            (r.state = {
              date: r.getDateInView(),
              selectingDate: null,
              monthContainer: null,
              isRenderAriaLiveMessage: !1,
            }),
            r
          );
        }
        return (
          St(
            a,
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
                    (Xt(this.props.preSelection, e.preSelection) &&
                      this.props.monthSelectedIn === e.monthSelectedIn)
                  )
                    this.props.openToDate &&
                      !Xt(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                  else {
                    var a = !Gt(this.state.date, this.props.preSelection);
                    this.setState(
                      { date: this.props.preSelection },
                      function () {
                        return a && t.handleCustomMonthChange(t.state.date);
                      },
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || Za;
                  return pe.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    pe.default.createElement(
                      e,
                      {
                        className: fe.default(
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
                    yearItemNumber: Ft,
                  };
                },
              },
            ],
          ),
          a
        );
      })(pe.default.Component);
    Ct(tr, "propTypes", {
      adjustDateOnChange: ce.default.bool,
      arrowProps: ce.default.object,
      chooseDayAriaLabelPrefix: ce.default.string,
      className: ce.default.string,
      children: ce.default.node,
      container: ce.default.func,
      dateFormat: ce.default.oneOfType([ce.default.string, ce.default.array])
        .isRequired,
      dayClassName: ce.default.func,
      weekDayClassName: ce.default.func,
      disabledDayAriaLabelPrefix: ce.default.string,
      monthClassName: ce.default.func,
      timeClassName: ce.default.func,
      disabledKeyboardNavigation: ce.default.bool,
      calendarStartDay: ce.default.number,
      dropdownMode: ce.default.oneOf(["scroll", "select"]),
      endDate: ce.default.instanceOf(Date),
      excludeDates: ce.default.array,
      excludeDateIntervals: ce.default.arrayOf(
        ce.default.shape({
          start: ce.default.instanceOf(Date),
          end: ce.default.instanceOf(Date),
        }),
      ),
      filterDate: ce.default.func,
      fixedHeight: ce.default.bool,
      formatWeekNumber: ce.default.func,
      highlightDates: ce.default.instanceOf(Map),
      holidays: ce.default.instanceOf(Map),
      includeDates: ce.default.array,
      includeDateIntervals: ce.default.arrayOf(
        ce.default.shape({
          start: ce.default.instanceOf(Date),
          end: ce.default.instanceOf(Date),
        }),
      ),
      includeTimes: ce.default.array,
      injectTimes: ce.default.array,
      inline: ce.default.bool,
      shouldFocusDayInline: ce.default.bool,
      locale: ce.default.oneOfType([
        ce.default.string,
        ce.default.shape({ locale: ce.default.object }),
      ]),
      maxDate: ce.default.instanceOf(Date),
      minDate: ce.default.instanceOf(Date),
      monthsShown: ce.default.number,
      monthSelectedIn: ce.default.number,
      nextMonthAriaLabel: ce.default.string,
      nextYearAriaLabel: ce.default.string,
      onClickOutside: ce.default.func.isRequired,
      onMonthChange: ce.default.func,
      onYearChange: ce.default.func,
      forceShowMonthNavigation: ce.default.bool,
      onDropdownFocus: ce.default.func,
      onSelect: ce.default.func.isRequired,
      onWeekSelect: ce.default.func,
      showTimeSelect: ce.default.bool,
      showTimeInput: ce.default.bool,
      showMonthYearPicker: ce.default.bool,
      showFullMonthYearPicker: ce.default.bool,
      showTwoColumnMonthYearPicker: ce.default.bool,
      showFourColumnMonthYearPicker: ce.default.bool,
      showYearPicker: ce.default.bool,
      showQuarterYearPicker: ce.default.bool,
      showTimeSelectOnly: ce.default.bool,
      timeFormat: ce.default.string,
      timeIntervals: ce.default.number,
      onTimeChange: ce.default.func,
      timeInputLabel: ce.default.string,
      minTime: ce.default.instanceOf(Date),
      maxTime: ce.default.instanceOf(Date),
      excludeTimes: ce.default.array,
      filterTime: ce.default.func,
      timeCaption: ce.default.string,
      openToDate: ce.default.instanceOf(Date),
      peekNextMonth: ce.default.bool,
      previousMonthAriaLabel: ce.default.string,
      previousYearAriaLabel: ce.default.string,
      scrollableYearDropdown: ce.default.bool,
      scrollableMonthYearDropdown: ce.default.bool,
      preSelection: ce.default.instanceOf(Date),
      selected: ce.default.instanceOf(Date),
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      selectsDisabledDaysInRange: ce.default.bool,
      showMonthDropdown: ce.default.bool,
      showPreviousMonths: ce.default.bool,
      showMonthYearDropdown: ce.default.bool,
      showWeekNumbers: ce.default.bool,
      showYearDropdown: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      todayButton: ce.default.string,
      useWeekdaysShort: ce.default.bool,
      formatWeekDay: ce.default.func,
      withPortal: ce.default.bool,
      weekLabel: ce.default.string,
      yearItemNumber: ce.default.number,
      yearDropdownItemNumber: ce.default.number,
      setOpen: ce.default.func,
      shouldCloseOnSelect: ce.default.bool,
      useShortMonthInDropdown: ce.default.bool,
      showDisabledMonthNavigation: ce.default.bool,
      previousMonthButtonLabel: ce.default.oneOfType([
        ce.default.string,
        ce.default.node,
      ]),
      nextMonthButtonLabel: ce.default.oneOfType([
        ce.default.string,
        ce.default.node,
      ]),
      previousYearButtonLabel: ce.default.string,
      nextYearButtonLabel: ce.default.string,
      renderCustomHeader: ce.default.func,
      renderDayContents: ce.default.func,
      renderMonthContent: ce.default.func,
      renderQuarterContent: ce.default.func,
      renderYearContent: ce.default.func,
      onDayMouseEnter: ce.default.func,
      onMonthMouseLeave: ce.default.func,
      onYearMouseEnter: ce.default.func,
      onYearMouseLeave: ce.default.func,
      showPopperArrow: ce.default.bool,
      handleOnKeyDown: ce.default.func,
      handleOnDayKeyDown: ce.default.func,
      isInputFocused: ce.default.bool,
      customTimeInput: ce.default.element,
      weekAriaLabelPrefix: ce.default.string,
      monthAriaLabelPrefix: ce.default.string,
      setPreSelection: ce.default.func,
    });
    var ar = (function (e) {
      _t(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          wt(this, a),
          ((r = t.call(this, e)).el = document.createElement("div")),
          r
        );
      }
      return (
        St(a, [
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
              return Dt.default.createPortal(this.props.children, this.el);
            },
          },
        ]),
        a
      );
    })(pe.default.Component);
    Ct(ar, "propTypes", {
      children: ce.default.any,
      portalId: ce.default.string,
      portalHost: ce.default.instanceOf(ShadowRoot),
    });
    var rr = []
        .concat(["top", "bottom", "right", "left"], ["auto"])
        .reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
      nr = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      or = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            wt(this, a),
            Ct(Nt((r = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  r.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea",
                  ),
                  1,
                  -1,
                )
                .filter(nr);
            }),
            Ct(Nt(r), "handleFocusStart", function () {
              var e = r.getTabChildren();
              e && e.length > 1 && e[e.length - 1].focus();
            }),
            Ct(Nt(r), "handleFocusEnd", function () {
              var e = r.getTabChildren();
              e && e.length > 1 && e[0].focus();
            }),
            (r.tabLoopRef = pe.default.createRef()),
            r
          );
        }
        return (
          St(
            a,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? pe.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        pe.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        pe.default.createElement("div", {
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
          a
        );
      })(pe.default.Component);
    Ct(or, "propTypes", {
      children: ce.default.any,
      enableTabLoop: ce.default.bool,
    });
    var sr = rr,
      lr = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a() {
          return wt(this, a), t.apply(this, arguments);
        }
        return (
          St(
            a,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    a = t.className,
                    r = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    l = t.popperPlacement,
                    i = t.popperProps,
                    d = t.targetComponent,
                    u = t.enableTabLoop,
                    p = t.popperOnKeyDown,
                    c = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = fe.default("react-datepicker-popper", a);
                    e = pe.default.createElement(
                      ie.Popper,
                      Mt({ modifiers: s, placement: l }, i),
                      function (e) {
                        var t = e.ref,
                          a = e.style,
                          r = e.placement,
                          n = e.arrowProps;
                        return pe.default.createElement(
                          or,
                          { enableTabLoop: u },
                          pe.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: a,
                              className: h,
                              "data-placement": r,
                              onKeyDown: p,
                            },
                            pe.default.cloneElement(o, { arrowProps: n }),
                          ),
                        );
                      },
                    );
                  }
                  this.props.popperContainer &&
                    (e = pe.default.createElement(
                      this.props.popperContainer,
                      {},
                      e,
                    )),
                    c &&
                      !n &&
                      (e = pe.default.createElement(
                        ar,
                        { portalId: c, portalHost: f },
                        e,
                      ));
                  var m = fe.default("react-datepicker-wrapper", r);
                  return pe.default.createElement(
                    ie.Manager,
                    { className: "react-datepicker-manager" },
                    pe.default.createElement(ie.Reference, null, function (e) {
                      var t = e.ref;
                      return pe.default.createElement(
                        "div",
                        { ref: t, className: m },
                        d,
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
          a
        );
      })(pe.default.Component);
    Ct(lr, "propTypes", {
      className: ce.default.string,
      wrapperClassName: ce.default.string,
      hidePopper: ce.default.bool,
      popperComponent: ce.default.element,
      popperModifiers: ce.default.arrayOf(ce.default.object),
      popperPlacement: ce.default.oneOf(sr),
      popperContainer: ce.default.func,
      popperProps: ce.default.object,
      targetComponent: ce.default.element,
      enableTabLoop: ce.default.bool,
      popperOnKeyDown: ce.default.func,
      portalId: ce.default.string,
      portalHost: ce.default.instanceOf(ShadowRoot),
    });
    var ir = "react-datepicker-ignore-onclickoutside",
      dr = mt.default(tr);
    var ur = "Date input not valid.",
      pr = (function (e) {
        _t(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            wt(this, a),
            Ct(Nt((r = t.call(this, e))), "getPreSelection", function () {
              return r.props.openToDate
                ? r.props.openToDate
                : r.props.selectsEnd && r.props.startDate
                ? r.props.startDate
                : r.props.selectsStart && r.props.endDate
                ? r.props.endDate
                : qt();
            }),
            Ct(Nt(r), "calcInitialState", function () {
              var e,
                t,
                a =
                  null === (e = r.props.holidays) || void 0 === e
                    ? void 0
                    : e.reduce(function (e, t) {
                        var a = new Date(t.date);
                        return me.default(a)
                          ? [].concat(Et(e), [vt(vt({}, t), {}, { date: a })])
                          : e;
                      }, []),
                n = r.getPreSelection(),
                o = wa(r.props),
                s = ka(r.props),
                l =
                  o && ut.default(n, Ge.default(o))
                    ? o
                    : s && dt.default(n, tt.default(s))
                    ? s
                    : n;
              return {
                open: r.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (t = r.props.selectsRange
                      ? r.props.startDate
                      : r.props.selected) && void 0 !== t
                    ? t
                    : l,
                highlightDates: Sa(r.props.highlightDates),
                holidays: Ca(a),
                focused: !1,
                shouldFocusDayInline: !1,
                isRenderAriaLiveMessage: !1,
              };
            }),
            Ct(Nt(r), "clearPreventFocusTimeout", function () {
              r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
            }),
            Ct(Nt(r), "setFocus", function () {
              r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
            }),
            Ct(Nt(r), "setBlur", function () {
              r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
            }),
            Ct(Nt(r), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              r.setState(
                {
                  open: e,
                  preSelection:
                    e && r.state.open
                      ? r.state.preSelection
                      : r.calcInitialState().preSelection,
                  lastPreSelectChange: fr,
                },
                function () {
                  e ||
                    r.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && r.setBlur(), r.setState({ inputValue: null });
                      },
                    );
                },
              );
            }),
            Ct(Nt(r), "inputOk", function () {
              return he.default(r.state.preSelection);
            }),
            Ct(Nt(r), "isCalendarOpen", function () {
              return void 0 === r.props.open
                ? r.state.open && !r.props.disabled && !r.props.readOnly
                : r.props.open;
            }),
            Ct(Nt(r), "handleFocus", function (e) {
              r.state.preventFocus ||
                (r.props.onFocus(e),
                r.props.preventOpenOnFocus ||
                  r.props.readOnly ||
                  r.setOpen(!0)),
                r.setState({ focused: !0 });
            }),
            Ct(Nt(r), "cancelFocusInput", function () {
              clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
            }),
            Ct(Nt(r), "deferFocusInput", function () {
              r.cancelFocusInput(),
                (r.inputFocusTimeout = setTimeout(function () {
                  return r.setFocus();
                }, 1));
            }),
            Ct(Nt(r), "handleDropdownFocus", function () {
              r.cancelFocusInput();
            }),
            Ct(Nt(r), "handleBlur", function (e) {
              (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
                r.props.onBlur(e),
                r.setState({ focused: !1 });
            }),
            Ct(Nt(r), "handleCalendarClickOutside", function (e) {
              r.props.inline || r.setOpen(!1),
                r.props.onClickOutside(e),
                r.props.withPortal && e.preventDefault();
            }),
            Ct(Nt(r), "handleChange", function () {
              for (
                var e, t, a = arguments.length, n = new Array(a), o = 0;
                o < a;
                o++
              )
                n[o] = arguments[o];
              var s = n[0],
                l = void 0;
              if (
                !r.props.onChangeRaw ||
                ((l = r.props.onChangeRaw.apply(Nt(r), n)),
                "function" == typeof s.isDefaultPrevented &&
                  !s.isDefaultPrevented())
              ) {
                r.setState({
                  inputValue:
                    null !== (e = l) && void 0 !== e ? e : s.target.value,
                  lastPreSelectChange: cr,
                });
                var i,
                  d,
                  u,
                  p,
                  c,
                  f,
                  h,
                  m,
                  D =
                    ((i =
                      null !== (t = l) && void 0 !== t ? t : s.target.value),
                    (d = r.props.dateFormat),
                    (u = r.props.locale),
                    (p = r.props.strictParsing),
                    (c = r.props.minDate),
                    (f = null),
                    (h = aa(u) || aa(ta())),
                    (m = !0),
                    Array.isArray(d)
                      ? (d.forEach(function (e) {
                          var t = ft.default(i, e, new Date(), { locale: h });
                          p && (m = Bt(t, c) && i === Wt(t, e, u)),
                            Bt(t, c) && m && (f = t);
                        }),
                        f)
                      : ((f = ft.default(i, d, new Date(), { locale: h })),
                        p
                          ? (m = Bt(f) && i === Wt(f, d, u))
                          : Bt(f) ||
                            ((d = d
                              .match(At)
                              .map(function (e) {
                                var t = e[0];
                                return "p" === t || "P" === t
                                  ? h
                                    ? (0, Lt[t])(e, h.formatLong)
                                    : t
                                  : e;
                              })
                              .join("")),
                            i.length > 0 &&
                              (f = ft.default(
                                i,
                                d.slice(0, i.length),
                                new Date(),
                              )),
                            Bt(f) || (f = new Date(i))),
                        Bt(f) && m ? f : null));
                r.props.showTimeSelectOnly &&
                  r.props.selected &&
                  !Xt(D, r.props.selected) &&
                  (D =
                    null == D
                      ? yt.default(r.props.selected, {
                          hours: Ee.default(r.props.selected),
                          minutes: xe.default(r.props.selected),
                          seconds: Ne.default(r.props.selected),
                        })
                      : yt.default(r.props.selected, {
                          hours: Ee.default(D),
                          minutes: xe.default(D),
                          seconds: Ne.default(D),
                        })),
                  (!D && s.target.value) || r.setSelected(D, s, !0);
              }
            }),
            Ct(Nt(r), "handleSelect", function (e, t, a) {
              if (
                (r.setState({ preventFocus: !0 }, function () {
                  return (
                    (r.preventFocusTimeout = setTimeout(function () {
                      return r.setState({ preventFocus: !1 });
                    }, 50)),
                    r.preventFocusTimeout
                  );
                }),
                r.props.onChangeRaw && r.props.onChangeRaw(t),
                r.setSelected(e, t, !1, a),
                r.props.showDateSelect &&
                  r.setState({ isRenderAriaLiveMessage: !0 }),
                !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
              )
                r.setPreSelection(e);
              else if (!r.props.inline) {
                r.props.selectsRange || r.setOpen(!1);
                var n = r.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || ut.default(e, o) || r.setOpen(!1);
              }
            }),
            Ct(Nt(r), "setSelected", function (e, t, a, n) {
              var o = e;
              if (r.props.showYearPicker) {
                if (null !== o && pa(Fe.default(o), r.props)) return;
              } else if (r.props.showMonthYearPicker) {
                if (null !== o && la(o, r.props)) return;
              } else if (null !== o && oa(o, r.props)) return;
              var s = r.props,
                l = s.onChange,
                i = s.selectsRange,
                d = s.startDate,
                u = s.endDate;
              if (!Zt(r.props.selected, o) || r.props.allowSameDay || i)
                if (
                  (null !== o &&
                    (!r.props.selected ||
                      (a &&
                        (r.props.showTimeSelect ||
                          r.props.showTimeSelectOnly ||
                          r.props.showTimeInput)) ||
                      (o = jt(o, {
                        hour: Ee.default(r.props.selected),
                        minute: xe.default(r.props.selected),
                        second: Ne.default(r.props.selected),
                      })),
                    r.props.inline || r.setState({ preSelection: o }),
                    r.props.focusSelectedMonth ||
                      r.setState({ monthSelectedIn: n })),
                  i)
                ) {
                  var p = d && !u,
                    c = d && u;
                  !d && !u
                    ? l([o, null], t)
                    : p && (ut.default(o, d) ? l([o, null], t) : l([d, o], t)),
                    c && l([o, null], t);
                } else l(o, t);
              a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
            }),
            Ct(Nt(r), "setPreSelection", function (e) {
              var t = void 0 !== r.props.minDate,
                a = void 0 !== r.props.maxDate,
                n = !0;
              if (e) {
                var o = Ge.default(e);
                if (t && a) n = ea(e, r.props.minDate, r.props.maxDate);
                else if (t) {
                  var s = Ge.default(r.props.minDate);
                  n = dt.default(e, s) || Zt(o, s);
                } else if (a) {
                  var l = tt.default(r.props.maxDate);
                  n = ut.default(e, l) || Zt(o, l);
                }
              }
              n && r.setState({ preSelection: e });
            }),
            Ct(Nt(r), "handleTimeChange", function (e) {
              var t = r.props.selected ? r.props.selected : r.getPreSelection(),
                a = r.props.selected
                  ? e
                  : jt(t, { hour: Ee.default(e), minute: xe.default(e) });
              r.setState({ preSelection: a }),
                r.props.onChange(a),
                r.props.shouldCloseOnSelect && r.setOpen(!1),
                r.props.showTimeInput && r.setOpen(!0),
                (r.props.showTimeSelectOnly || r.props.showTimeSelect) &&
                  r.setState({ isRenderAriaLiveMessage: !0 }),
                r.setState({ inputValue: null });
            }),
            Ct(Nt(r), "onInputClick", function () {
              r.props.disabled || r.props.readOnly || r.setOpen(!0),
                r.props.onInputClick();
            }),
            Ct(Nt(r), "onInputKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key;
              if (
                r.state.open ||
                r.props.inline ||
                r.props.preventOpenOnFocus
              ) {
                if (r.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var a =
                      r.calendar.componentNode &&
                      r.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]',
                      );
                    return void (a && a.focus({ preventScroll: !0 }));
                  }
                  var n = qt(r.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      r.inputOk() && r.state.lastPreSelectChange === fr
                        ? (r.handleSelect(n, e),
                          !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                        : r.setOpen(!1))
                    : "Escape" === t
                    ? (e.preventDefault(), r.setOpen(!1))
                    : "Tab" === t && r.setOpen(!1),
                    r.inputOk() || r.props.onInputError({ code: 1, msg: ur });
                }
              } else
                ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) ||
                  r.onInputClick();
            }),
            Ct(Nt(r), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Ct(Nt(r), "onDayKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key,
                a = qt(r.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  r.handleSelect(a, e),
                  !r.props.shouldCloseOnSelect && r.setPreSelection(a);
              else if ("Escape" === t)
                e.preventDefault(),
                  r.setOpen(!1),
                  r.inputOk() || r.props.onInputError({ code: 1, msg: ur });
              else if (!r.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = Ce.default(a, 1);
                    break;
                  case "ArrowRight":
                    n = ve.default(a, 1);
                    break;
                  case "ArrowUp":
                    n = Me.default(a, 1);
                    break;
                  case "ArrowDown":
                    n = be.default(a, 1);
                    break;
                  case "PageUp":
                    n = _e.default(a, 1);
                    break;
                  case "PageDown":
                    n = we.default(a, 1);
                    break;
                  case "Home":
                    n = Pe.default(a, 1);
                    break;
                  case "End":
                    n = Se.default(a, 1);
                }
                if (!n)
                  return void (
                    r.props.onInputError &&
                    r.props.onInputError({ code: 1, msg: ur })
                  );
                if (
                  (e.preventDefault(),
                  r.setState({ lastPreSelectChange: fr }),
                  r.props.adjustDateOnChange && r.setSelected(n),
                  r.setPreSelection(n),
                  r.props.inline)
                ) {
                  var o = Re.default(a),
                    s = Re.default(n),
                    l = Fe.default(a),
                    i = Fe.default(n);
                  o !== s || l !== i
                    ? r.setState({ shouldFocusDayInline: !0 })
                    : r.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            Ct(Nt(r), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Ct(Nt(r), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                r.props.selectsRange
                  ? r.props.onChange([null, null], e)
                  : r.props.onChange(null, e),
                r.setState({ inputValue: null });
            }),
            Ct(Nt(r), "clear", function () {
              r.onClearClick();
            }),
            Ct(Nt(r), "onScroll", function (e) {
              "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  r.setOpen(!1)
                : "function" == typeof r.props.closeOnScroll &&
                  r.props.closeOnScroll(e) &&
                  r.setOpen(!1);
            }),
            Ct(Nt(r), "renderCalendar", function () {
              return r.props.inline || r.isCalendarOpen()
                ? pe.default.createElement(
                    dr,
                    {
                      ref: function (e) {
                        r.calendar = e;
                      },
                      locale: r.props.locale,
                      calendarStartDay: r.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        r.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        r.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                      monthAriaLabelPrefix: r.props.monthAriaLabelPrefix,
                      adjustDateOnChange: r.props.adjustDateOnChange,
                      setOpen: r.setOpen,
                      shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                      dateFormat: r.props.dateFormatCalendar,
                      useWeekdaysShort: r.props.useWeekdaysShort,
                      formatWeekDay: r.props.formatWeekDay,
                      dropdownMode: r.props.dropdownMode,
                      selected: r.props.selected,
                      preSelection: r.state.preSelection,
                      onSelect: r.handleSelect,
                      onWeekSelect: r.props.onWeekSelect,
                      openToDate: r.props.openToDate,
                      minDate: r.props.minDate,
                      maxDate: r.props.maxDate,
                      selectsStart: r.props.selectsStart,
                      selectsEnd: r.props.selectsEnd,
                      selectsRange: r.props.selectsRange,
                      startDate: r.props.startDate,
                      endDate: r.props.endDate,
                      excludeDates: r.props.excludeDates,
                      excludeDateIntervals: r.props.excludeDateIntervals,
                      filterDate: r.props.filterDate,
                      onClickOutside: r.handleCalendarClickOutside,
                      formatWeekNumber: r.props.formatWeekNumber,
                      highlightDates: r.state.highlightDates,
                      holidays: r.state.holidays,
                      includeDates: r.props.includeDates,
                      includeDateIntervals: r.props.includeDateIntervals,
                      includeTimes: r.props.includeTimes,
                      injectTimes: r.props.injectTimes,
                      inline: r.props.inline,
                      shouldFocusDayInline: r.state.shouldFocusDayInline,
                      peekNextMonth: r.props.peekNextMonth,
                      showMonthDropdown: r.props.showMonthDropdown,
                      showPreviousMonths: r.props.showPreviousMonths,
                      useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                      showMonthYearDropdown: r.props.showMonthYearDropdown,
                      showWeekNumbers: r.props.showWeekNumbers,
                      showYearDropdown: r.props.showYearDropdown,
                      withPortal: r.props.withPortal,
                      forceShowMonthNavigation:
                        r.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        r.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: r.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        r.props.scrollableMonthYearDropdown,
                      todayButton: r.props.todayButton,
                      weekLabel: r.props.weekLabel,
                      outsideClickIgnoreClass: ir,
                      fixedHeight: r.props.fixedHeight,
                      monthsShown: r.props.monthsShown,
                      monthSelectedIn: r.state.monthSelectedIn,
                      onDropdownFocus: r.handleDropdownFocus,
                      onMonthChange: r.props.onMonthChange,
                      onYearChange: r.props.onYearChange,
                      dayClassName: r.props.dayClassName,
                      weekDayClassName: r.props.weekDayClassName,
                      monthClassName: r.props.monthClassName,
                      timeClassName: r.props.timeClassName,
                      showDateSelect: r.props.showDateSelect,
                      showTimeSelect: r.props.showTimeSelect,
                      showTimeSelectOnly: r.props.showTimeSelectOnly,
                      onTimeChange: r.handleTimeChange,
                      timeFormat: r.props.timeFormat,
                      timeIntervals: r.props.timeIntervals,
                      minTime: r.props.minTime,
                      maxTime: r.props.maxTime,
                      excludeTimes: r.props.excludeTimes,
                      filterTime: r.props.filterTime,
                      timeCaption: r.props.timeCaption,
                      className: r.props.calendarClassName,
                      container: r.props.calendarContainer,
                      yearItemNumber: r.props.yearItemNumber,
                      yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: r.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        r.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                      previousYearAriaLabel: r.props.previousYearAriaLabel,
                      previousYearButtonLabel: r.props.previousYearButtonLabel,
                      nextYearAriaLabel: r.props.nextYearAriaLabel,
                      nextYearButtonLabel: r.props.nextYearButtonLabel,
                      timeInputLabel: r.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        r.props.disabledKeyboardNavigation,
                      renderCustomHeader: r.props.renderCustomHeader,
                      popperProps: r.props.popperProps,
                      renderDayContents: r.props.renderDayContents,
                      renderMonthContent: r.props.renderMonthContent,
                      renderQuarterContent: r.props.renderQuarterContent,
                      renderYearContent: r.props.renderYearContent,
                      onDayMouseEnter: r.props.onDayMouseEnter,
                      onMonthMouseLeave: r.props.onMonthMouseLeave,
                      onYearMouseEnter: r.props.onYearMouseEnter,
                      onYearMouseLeave: r.props.onYearMouseLeave,
                      selectsDisabledDaysInRange:
                        r.props.selectsDisabledDaysInRange,
                      showTimeInput: r.props.showTimeInput,
                      showMonthYearPicker: r.props.showMonthYearPicker,
                      showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        r.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        r.props.showFourColumnMonthYearPicker,
                      showYearPicker: r.props.showYearPicker,
                      showQuarterYearPicker: r.props.showQuarterYearPicker,
                      showPopperArrow: r.props.showPopperArrow,
                      excludeScrollbar: r.props.excludeScrollbar,
                      handleOnKeyDown: r.props.onKeyDown,
                      handleOnDayKeyDown: r.onDayKeyDown,
                      isInputFocused: r.state.focused,
                      customTimeInput: r.props.customTimeInput,
                      setPreSelection: r.setPreSelection,
                    },
                    r.props.children,
                  )
                : null;
            }),
            Ct(Nt(r), "renderAriaLiveRegion", function () {
              var e,
                t = r.props,
                a = t.dateFormat,
                n = t.locale,
                o =
                  r.props.showTimeInput || r.props.showTimeSelect
                    ? "PPPPp"
                    : "PPPP";
              return (
                (e = r.props.selectsRange
                  ? "Selected start date: "
                      .concat(
                        Kt(r.props.startDate, { dateFormat: o, locale: n }),
                        ". ",
                      )
                      .concat(
                        r.props.endDate
                          ? "End date: " +
                              Kt(r.props.endDate, { dateFormat: o, locale: n })
                          : "",
                      )
                  : r.props.showTimeSelectOnly
                  ? "Selected time: ".concat(
                      Kt(r.props.selected, { dateFormat: a, locale: n }),
                    )
                  : r.props.showYearPicker
                  ? "Selected year: ".concat(
                      Kt(r.props.selected, { dateFormat: "yyyy", locale: n }),
                    )
                  : r.props.showMonthYearPicker
                  ? "Selected month: ".concat(
                      Kt(r.props.selected, {
                        dateFormat: "MMMM yyyy",
                        locale: n,
                      }),
                    )
                  : r.props.showQuarterYearPicker
                  ? "Selected quarter: ".concat(
                      Kt(r.props.selected, {
                        dateFormat: "yyyy, QQQ",
                        locale: n,
                      }),
                    )
                  : "Selected date: ".concat(
                      Kt(r.props.selected, { dateFormat: o, locale: n }),
                    )),
                pe.default.createElement(
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
            Ct(Nt(r), "renderDateInput", function () {
              var e,
                t = fe.default(r.props.className, Ct({}, ir, r.state.open)),
                a =
                  r.props.customInput ||
                  pe.default.createElement("input", { type: "text" }),
                n = r.props.customInputRef || "ref",
                o =
                  "string" == typeof r.props.value
                    ? r.props.value
                    : "string" == typeof r.state.inputValue
                    ? r.state.inputValue
                    : r.props.selectsRange
                    ? (function (e, t, a) {
                        if (!e) return "";
                        var r = Kt(e, a),
                          n = t ? Kt(t, a) : "";
                        return "".concat(r, " - ").concat(n);
                      })(r.props.startDate, r.props.endDate, r.props)
                    : Kt(r.props.selected, r.props);
              return pe.default.cloneElement(
                a,
                (Ct((e = {}), n, function (e) {
                  r.input = e;
                }),
                Ct(e, "value", o),
                Ct(e, "onBlur", r.handleBlur),
                Ct(e, "onChange", r.handleChange),
                Ct(e, "onClick", r.onInputClick),
                Ct(e, "onFocus", r.handleFocus),
                Ct(e, "onKeyDown", r.onInputKeyDown),
                Ct(e, "id", r.props.id),
                Ct(e, "name", r.props.name),
                Ct(e, "form", r.props.form),
                Ct(e, "autoFocus", r.props.autoFocus),
                Ct(e, "placeholder", r.props.placeholderText),
                Ct(e, "disabled", r.props.disabled),
                Ct(e, "autoComplete", r.props.autoComplete),
                Ct(e, "className", fe.default(a.props.className, t)),
                Ct(e, "title", r.props.title),
                Ct(e, "readOnly", r.props.readOnly),
                Ct(e, "required", r.props.required),
                Ct(e, "tabIndex", r.props.tabIndex),
                Ct(e, "aria-describedby", r.props.ariaDescribedBy),
                Ct(e, "aria-invalid", r.props.ariaInvalid),
                Ct(e, "aria-labelledby", r.props.ariaLabelledBy),
                Ct(e, "aria-required", r.props.ariaRequired),
                e),
              );
            }),
            Ct(Nt(r), "renderClearButton", function () {
              var e = r.props,
                t = e.isClearable,
                a = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                l = e.clearButtonClassName,
                i = void 0 === l ? "" : l,
                d = e.ariaLabelClose,
                u = void 0 === d ? "Close" : d;
              return !t || (null == a && null == n && null == o)
                ? null
                : pe.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(i).trim(),
                    "aria-label": u,
                    onClick: r.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (r.state = r.calcInitialState()),
            r
          );
        }
        return (
          St(
            a,
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
                  var a, r;
                  e.inline &&
                    ((a = e.selected),
                    (r = this.props.selected),
                    a && r
                      ? Re.default(a) !== Re.default(r) ||
                        Fe.default(a) !== Fe.default(r)
                      : a !== r) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: Sa(this.props.highlightDates),
                      }),
                    t.focused ||
                      Zt(e.selected, this.props.selected) ||
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
                  return pe.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__input-container".concat(
                        e ? " react-datepicker__view-calendar-icon" : "",
                      ),
                    },
                    e &&
                      pe.default.createElement(
                        "svg",
                        {
                          className: "react-datepicker__calendar-icon",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 448 512",
                        },
                        pe.default.createElement("path", {
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
                      ? pe.default.createElement(
                          or,
                          { enableTabLoop: this.props.enableTabLoop },
                          pe.default.createElement(
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
                        (t = pe.default.createElement(
                          ar,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t,
                        )),
                      pe.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t,
                      )
                    );
                  }
                  return pe.default.createElement(lr, {
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
                    yearItemNumber: Ft,
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
          a
        );
      })(pe.default.Component);
    Ct(pr, "propTypes", {
      adjustDateOnChange: ce.default.bool,
      allowSameDay: ce.default.bool,
      ariaDescribedBy: ce.default.string,
      ariaInvalid: ce.default.string,
      ariaLabelClose: ce.default.string,
      ariaLabelledBy: ce.default.string,
      ariaRequired: ce.default.string,
      autoComplete: ce.default.string,
      autoFocus: ce.default.bool,
      calendarClassName: ce.default.string,
      calendarContainer: ce.default.func,
      children: ce.default.node,
      chooseDayAriaLabelPrefix: ce.default.string,
      closeOnScroll: ce.default.oneOfType([ce.default.bool, ce.default.func]),
      className: ce.default.string,
      customInput: ce.default.element,
      customInputRef: ce.default.string,
      calendarStartDay: ce.default.number,
      dateFormat: ce.default.oneOfType([ce.default.string, ce.default.array]),
      dateFormatCalendar: ce.default.string,
      dayClassName: ce.default.func,
      weekDayClassName: ce.default.func,
      disabledDayAriaLabelPrefix: ce.default.string,
      monthClassName: ce.default.func,
      timeClassName: ce.default.func,
      disabled: ce.default.bool,
      disabledKeyboardNavigation: ce.default.bool,
      dropdownMode: ce.default.oneOf(["scroll", "select"]).isRequired,
      endDate: ce.default.instanceOf(Date),
      excludeDates: ce.default.array,
      excludeDateIntervals: ce.default.arrayOf(
        ce.default.shape({
          start: ce.default.instanceOf(Date),
          end: ce.default.instanceOf(Date),
        }),
      ),
      filterDate: ce.default.func,
      fixedHeight: ce.default.bool,
      form: ce.default.string,
      formatWeekNumber: ce.default.func,
      highlightDates: ce.default.array,
      holidays: ce.default.array,
      id: ce.default.string,
      includeDates: ce.default.array,
      includeDateIntervals: ce.default.array,
      includeTimes: ce.default.array,
      injectTimes: ce.default.array,
      inline: ce.default.bool,
      isClearable: ce.default.bool,
      showIcon: ce.default.bool,
      locale: ce.default.oneOfType([
        ce.default.string,
        ce.default.shape({ locale: ce.default.object }),
      ]),
      maxDate: ce.default.instanceOf(Date),
      minDate: ce.default.instanceOf(Date),
      monthsShown: ce.default.number,
      name: ce.default.string,
      onBlur: ce.default.func,
      onChange: ce.default.func.isRequired,
      onSelect: ce.default.func,
      onWeekSelect: ce.default.func,
      onClickOutside: ce.default.func,
      onChangeRaw: ce.default.func,
      onFocus: ce.default.func,
      onInputClick: ce.default.func,
      onKeyDown: ce.default.func,
      onMonthChange: ce.default.func,
      onYearChange: ce.default.func,
      onInputError: ce.default.func,
      open: ce.default.bool,
      onCalendarOpen: ce.default.func,
      onCalendarClose: ce.default.func,
      openToDate: ce.default.instanceOf(Date),
      peekNextMonth: ce.default.bool,
      placeholderText: ce.default.string,
      popperContainer: ce.default.func,
      popperClassName: ce.default.string,
      popperModifiers: ce.default.arrayOf(ce.default.object),
      popperPlacement: ce.default.oneOf(sr),
      popperProps: ce.default.object,
      preventOpenOnFocus: ce.default.bool,
      readOnly: ce.default.bool,
      required: ce.default.bool,
      scrollableYearDropdown: ce.default.bool,
      scrollableMonthYearDropdown: ce.default.bool,
      selected: ce.default.instanceOf(Date),
      selectsEnd: ce.default.bool,
      selectsStart: ce.default.bool,
      selectsRange: ce.default.bool,
      selectsDisabledDaysInRange: ce.default.bool,
      showMonthDropdown: ce.default.bool,
      showPreviousMonths: ce.default.bool,
      showMonthYearDropdown: ce.default.bool,
      showWeekNumbers: ce.default.bool,
      showYearDropdown: ce.default.bool,
      strictParsing: ce.default.bool,
      forceShowMonthNavigation: ce.default.bool,
      showDisabledMonthNavigation: ce.default.bool,
      startDate: ce.default.instanceOf(Date),
      startOpen: ce.default.bool,
      tabIndex: ce.default.number,
      timeCaption: ce.default.string,
      title: ce.default.string,
      todayButton: ce.default.node,
      useWeekdaysShort: ce.default.bool,
      formatWeekDay: ce.default.func,
      value: ce.default.string,
      weekLabel: ce.default.string,
      withPortal: ce.default.bool,
      portalId: ce.default.string,
      portalHost: ce.default.instanceOf(ShadowRoot),
      yearItemNumber: ce.default.number,
      yearDropdownItemNumber: ce.default.number,
      shouldCloseOnSelect: ce.default.bool,
      showTimeInput: ce.default.bool,
      showMonthYearPicker: ce.default.bool,
      showFullMonthYearPicker: ce.default.bool,
      showTwoColumnMonthYearPicker: ce.default.bool,
      showFourColumnMonthYearPicker: ce.default.bool,
      showYearPicker: ce.default.bool,
      showQuarterYearPicker: ce.default.bool,
      showDateSelect: ce.default.bool,
      showTimeSelect: ce.default.bool,
      showTimeSelectOnly: ce.default.bool,
      timeFormat: ce.default.string,
      timeIntervals: ce.default.number,
      minTime: ce.default.instanceOf(Date),
      maxTime: ce.default.instanceOf(Date),
      excludeTimes: ce.default.array,
      filterTime: ce.default.func,
      useShortMonthInDropdown: ce.default.bool,
      clearButtonTitle: ce.default.string,
      clearButtonClassName: ce.default.string,
      previousMonthAriaLabel: ce.default.string,
      previousMonthButtonLabel: ce.default.oneOfType([
        ce.default.string,
        ce.default.node,
      ]),
      nextMonthAriaLabel: ce.default.string,
      nextMonthButtonLabel: ce.default.oneOfType([
        ce.default.string,
        ce.default.node,
      ]),
      previousYearAriaLabel: ce.default.string,
      previousYearButtonLabel: ce.default.string,
      nextYearAriaLabel: ce.default.string,
      nextYearButtonLabel: ce.default.string,
      timeInputLabel: ce.default.string,
      renderCustomHeader: ce.default.func,
      renderDayContents: ce.default.func,
      renderMonthContent: ce.default.func,
      renderQuarterContent: ce.default.func,
      renderYearContent: ce.default.func,
      wrapperClassName: ce.default.string,
      focusSelectedMonth: ce.default.bool,
      onDayMouseEnter: ce.default.func,
      onMonthMouseLeave: ce.default.func,
      onYearMouseEnter: ce.default.func,
      onYearMouseLeave: ce.default.func,
      showPopperArrow: ce.default.bool,
      excludeScrollbar: ce.default.bool,
      enableTabLoop: ce.default.bool,
      customTimeInput: ce.default.element,
      weekAriaLabelPrefix: ce.default.string,
      monthAriaLabelPrefix: ce.default.string,
    });
    var cr = "input",
      fr = "navigate";
    (e.CalendarContainer = Za),
      (e.default = pr),
      (e.getDefaultLocale = ta),
      (e.registerLocale = function (e, t) {
        var a = "undefined" != typeof window ? window : globalThis;
        a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  },
);
