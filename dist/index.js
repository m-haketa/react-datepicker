"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  t = require("prop-types"),
  a = require("classnames"),
  r = require("date-fns/isDate"),
  n = require("date-fns/isValid"),
  o = require("date-fns/format"),
  s = require("date-fns/addMinutes"),
  l = require("date-fns/addHours"),
  i = require("date-fns/addDays"),
  u = require("date-fns/addWeeks"),
  d = require("date-fns/addMonths"),
  p = require("date-fns/addQuarters"),
  c = require("date-fns/addYears"),
  f = require("date-fns/subDays"),
  h = require("date-fns/subWeeks"),
  m = require("date-fns/subMonths"),
  D = require("date-fns/subQuarters"),
  y = require("date-fns/subYears"),
  g = require("date-fns/getSeconds"),
  v = require("date-fns/getMinutes"),
  b = require("date-fns/getHours"),
  w = require("date-fns/getDay"),
  k = require("date-fns/getDate"),
  S = require("date-fns/getISOWeek"),
  C = require("date-fns/getMonth"),
  M = require("date-fns/getQuarter"),
  _ = require("date-fns/getYear"),
  O = require("date-fns/getTime"),
  P = require("date-fns/setSeconds"),
  N = require("date-fns/setMinutes"),
  x = require("date-fns/setHours"),
  E = require("date-fns/setMonth"),
  T = require("date-fns/setQuarter"),
  Y = require("date-fns/setYear"),
  I = require("date-fns/min"),
  R = require("date-fns/max"),
  L = require("date-fns/differenceInCalendarDays"),
  F = require("date-fns/differenceInCalendarMonths"),
  A = require("date-fns/differenceInCalendarYears"),
  q = require("date-fns/startOfDay"),
  K = require("date-fns/startOfWeek"),
  B = require("date-fns/startOfMonth"),
  j = require("date-fns/startOfQuarter"),
  W = require("date-fns/startOfYear"),
  Q = require("date-fns/endOfDay");
require("date-fns/endOfWeek");
var H = require("date-fns/endOfMonth"),
  V = require("date-fns/endOfYear"),
  U = require("date-fns/isEqual"),
  z = require("date-fns/isSameDay"),
  $ = require("date-fns/isSameMonth"),
  G = require("date-fns/isSameYear"),
  J = require("date-fns/isSameQuarter"),
  X = require("date-fns/isAfter"),
  Z = require("date-fns/isBefore"),
  ee = require("date-fns/isWithinInterval"),
  te = require("date-fns/toDate"),
  ae = require("date-fns/parse"),
  re = require("date-fns/parseISO"),
  ne = require("react-onclickoutside"),
  oe = require("react-dom"),
  se = require("react-popper"),
  le = require("date-fns/set");
function ie(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var ue = ie(e),
  de = ie(t),
  pe = ie(a),
  ce = ie(r),
  fe = ie(n),
  he = ie(o),
  me = ie(s),
  De = ie(l),
  ye = ie(i),
  ge = ie(u),
  ve = ie(d),
  be = ie(p),
  we = ie(c),
  ke = ie(f),
  Se = ie(h),
  Ce = ie(m),
  Me = ie(D),
  _e = ie(y),
  Oe = ie(g),
  Pe = ie(v),
  Ne = ie(b),
  xe = ie(w),
  Ee = ie(k),
  Te = ie(S),
  Ye = ie(C),
  Ie = ie(M),
  Re = ie(_),
  Le = ie(O),
  Fe = ie(P),
  Ae = ie(N),
  qe = ie(x),
  Ke = ie(E),
  Be = ie(T),
  je = ie(Y),
  We = ie(I),
  Qe = ie(R),
  He = ie(L),
  Ve = ie(F),
  Ue = ie(A),
  ze = ie(q),
  $e = ie(K),
  Ge = ie(B),
  Je = ie(j),
  Xe = ie(W),
  Ze = ie(Q),
  et = ie(H),
  tt = ie(V),
  at = ie(U),
  rt = ie(z),
  nt = ie($),
  ot = ie(G),
  st = ie(J),
  lt = ie(X),
  it = ie(Z),
  ut = ie(ee),
  dt = ie(te),
  pt = ie(ae),
  ct = ie(re),
  ft = ie(ne),
  ht = ie(oe),
  mt = ie(le);
function Dt(e, t) {
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
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Dt(Object(a), !0).forEach(function (t) {
          kt(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : Dt(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
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
function vt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bt(e, t) {
  for (var a = 0; a < t.length; a++) {
    var r = t[a];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Et(r.key), r);
  }
}
function wt(e, t, a) {
  return (
    t && bt(e.prototype, t),
    a && bt(e, a),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kt(e, t, a) {
  return (
    (t = Et(t)) in e
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
function St() {
  return (
    (St = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        }),
    St.apply(this, arguments)
  );
}
function Ct(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _t(e, t);
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
function _t(e, t) {
  return (
    (_t = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    _t(e, t)
  );
}
function Ot(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Pt(e) {
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
      r = Mt(e);
    if (t) {
      var n = Mt(this).constructor;
      a = Reflect.construct(r, arguments, n);
    } else a = r.apply(this, arguments);
    return (function (e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined",
        );
      return Ot(e);
    })(this, a);
  };
}
function Nt(e) {
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
      var a = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === a && e.constructor && (a = e.constructor.name);
      if ("Map" === a || "Set" === a) return Array.from(e);
      if (
        "Arguments" === a ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
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
  for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
  return r;
}
function Et(e) {
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
var Tt = function (e, t) {
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
  Yt = function (e, t) {
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
  It = {
    p: Yt,
    P: function (e, t) {
      var a,
        r = e.match(/(P+)(p+)?/) || [],
        n = r[1],
        o = r[2];
      if (!o) return Tt(e, t);
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
      return a.replace("{{date}}", Tt(n, t)).replace("{{time}}", Yt(o, t));
    },
  },
  Rt = 12,
  Lt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ft(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? ct.default(e)
      : dt.default(e)
    : new Date();
  return At(t) ? t : null;
}
function At(e, t) {
  return (t = t || new Date("1/1/1000")), fe.default(e) && !it.default(e, t);
}
function qt(e, t, a) {
  if ("en" === a) return he.default(e, t, { awareOfUnicodeTokens: !0 });
  var r = ea(a);
  return (
    a &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          a,
          '"].',
        ),
      ),
    !r && Zt() && ea(Zt()) && (r = ea(Zt())),
    he.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
  );
}
function Kt(e, t) {
  var a = t.dateFormat,
    r = t.locale;
  return (e && qt(e, Array.isArray(a) ? a[0] : a, r)) || "";
}
function Bt(e, t) {
  var a = t.hour,
    r = void 0 === a ? 0 : a,
    n = t.minute,
    o = void 0 === n ? 0 : n,
    s = t.second,
    l = void 0 === s ? 0 : s;
  return qe.default(Ae.default(Fe.default(e, l), o), r);
}
function jt(e, t, a) {
  var r = ea(t || Zt());
  return $e.default(e, { locale: r, weekStartsOn: a });
}
function Wt(e) {
  return Ge.default(e);
}
function Qt(e) {
  return Xe.default(e);
}
function Ht(e) {
  return Je.default(e);
}
function Vt() {
  return ze.default(Ft());
}
function Ut(e, t) {
  return e && t ? ot.default(e, t) : !e && !t;
}
function zt(e, t) {
  return e && t ? nt.default(e, t) : !e && !t;
}
function $t(e, t) {
  return e && t ? st.default(e, t) : !e && !t;
}
function Gt(e, t) {
  return e && t ? rt.default(e, t) : !e && !t;
}
function Jt(e, t) {
  return e && t ? at.default(e, t) : !e && !t;
}
function Xt(e, t, a) {
  var r,
    n = ze.default(t),
    o = Ze.default(a);
  try {
    r = ut.default(e, { start: n, end: o });
  } catch (e) {
    r = !1;
  }
  return r;
}
function Zt() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function ea(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function ta(e, t) {
  return qt(Ke.default(Ft(), e), "LLLL", t);
}
function aa(e, t) {
  return qt(Ke.default(Ft(), e), "LLL", t);
}
function ra(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.excludeDateIntervals,
    s = t.includeDates,
    l = t.includeDateIntervals,
    i = t.filterDate;
  return (
    pa(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return Gt(e, t);
      })) ||
    (o &&
      o.some(function (t) {
        var a = t.start,
          r = t.end;
        return ut.default(e, { start: a, end: r });
      })) ||
    (s &&
      !s.some(function (t) {
        return Gt(e, t);
      })) ||
    (l &&
      !l.some(function (t) {
        var a = t.start,
          r = t.end;
        return ut.default(e, { start: a, end: r });
      })) ||
    (i && !i(Ft(e))) ||
    !1
  );
}
function na(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeDates,
    r = t.excludeDateIntervals;
  return r && r.length > 0
    ? r.some(function (t) {
        var a = t.start,
          r = t.end;
        return ut.default(e, { start: a, end: r });
      })
    : (a &&
        a.some(function (t) {
          return Gt(e, t);
        })) ||
        !1;
}
function oa(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    pa(e, { minDate: Ge.default(a), maxDate: et.default(r) }) ||
    (n &&
      n.some(function (t) {
        return zt(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return zt(e, t);
      })) ||
    (s && !s(Ft(e))) ||
    !1
  );
}
function sa(e, t, a, r) {
  var n = Re.default(e),
    o = Ye.default(e),
    s = Re.default(t),
    l = Ye.default(t),
    i = Re.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function la(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    pa(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return $t(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return $t(e, t);
      })) ||
    (s && !s(Ft(e))) ||
    !1
  );
}
function ia(e, t, a) {
  if (!fe.default(t) || !fe.default(a)) return !1;
  var r = Re.default(t),
    n = Re.default(a);
  return r <= e && n >= e;
}
function ua(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate,
    l = new Date(e, 0, 1);
  return (
    pa(l, { minDate: Xe.default(a), maxDate: tt.default(r) }) ||
    (n &&
      n.some(function (e) {
        return Ut(l, e);
      })) ||
    (o &&
      !o.some(function (e) {
        return Ut(l, e);
      })) ||
    (s && !s(Ft(l))) ||
    !1
  );
}
function da(e, t, a, r) {
  var n = Re.default(e),
    o = Ie.default(e),
    s = Re.default(t),
    l = Ie.default(t),
    i = Re.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function pa(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate;
  return (a && He.default(e, a) < 0) || (r && He.default(e, r) > 0);
}
function ca(e, t) {
  return t.some(function (t) {
    return Ne.default(t) === Ne.default(e) && Pe.default(t) === Pe.default(e);
  });
}
function fa(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeTimes,
    r = t.includeTimes,
    n = t.filterTime;
  return (a && ca(e, a)) || (r && !ca(e, r)) || (n && !n(e)) || !1;
}
function ha(e, t) {
  var a = t.minTime,
    r = t.maxTime;
  if (!a || !r) throw new Error("Both minTime and maxTime props required");
  var n,
    o = Ft(),
    s = qe.default(Ae.default(o, Pe.default(e)), Ne.default(e)),
    l = qe.default(Ae.default(o, Pe.default(a)), Ne.default(a)),
    i = qe.default(Ae.default(o, Pe.default(r)), Ne.default(r));
  try {
    n = !ut.default(s, { start: l, end: i });
  } catch (e) {
    n = !1;
  }
  return n;
}
function ma(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = Ce.default(e, 1);
  return (
    (a && Ve.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return Ve.default(e, n) > 0;
      })) ||
    !1
  );
}
function Da(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = ve.default(e, 1);
  return (
    (a && Ve.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return Ve.default(n, e) > 0;
      })) ||
    !1
  );
}
function ya(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = _e.default(e, 1);
  return (
    (a && Ue.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return Ue.default(e, n) > 0;
      })) ||
    !1
  );
}
function ga(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = we.default(e, 1);
  return (
    (a && Ue.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return Ue.default(n, e) > 0;
      })) ||
    !1
  );
}
function va(e) {
  var t = e.minDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return He.default(e, t) >= 0;
    });
    return We.default(r);
  }
  return a ? We.default(a) : t;
}
function ba(e) {
  var t = e.maxDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return He.default(e, t) <= 0;
    });
    return Qe.default(r);
  }
  return a ? Qe.default(a) : t;
}
function wa() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
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
    if (ce.default(o)) {
      var s = qt(o, "MM.dd.yyyy"),
        l = a.get(s) || [];
      l.includes(t) || (l.push(t), a.set(s, l));
    } else if ("object" === gt(o)) {
      var i = Object.keys(o),
        u = i[0],
        d = o[i[0]];
      if ("string" == typeof u && d.constructor === Array)
        for (var p = 0, c = d.length; p < c; p++) {
          var f = qt(d[p], "MM.dd.yyyy"),
            h = a.get(f) || [];
          h.includes(u) || (h.push(u), a.set(f, h));
        }
    }
  }
  return a;
}
function ka() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "react-datepicker__day--holidays",
    a = new Map();
  return (
    e.forEach(function (e) {
      var r = e.date,
        n = e.holidayName;
      if (ce.default(r)) {
        var o = qt(r, "MM.dd.yyyy"),
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
          var u = s.holidayNames;
          (s.holidayNames = u ? [].concat(Nt(u), [n]) : [n]), a.set(o, s);
        }
      }
    }),
    a
  );
}
function Sa(e, t, a, r, n) {
  for (var o = n.length, s = [], l = 0; l < o; l++) {
    var i = me.default(De.default(e, Ne.default(n[l])), Pe.default(n[l])),
      u = me.default(e, (a + 1) * r);
    lt.default(i, t) && it.default(i, u) && s.push(n[l]);
  }
  return s;
}
function Ca(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function Ma(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rt,
    a = Math.ceil(Re.default(e) / t) * t;
  return { startPeriod: a - (t - 1), endPeriod: a };
}
function _a(e) {
  var t = e.getSeconds(),
    a = e.getMilliseconds();
  return dt.default(e.getTime() - 1e3 * t - a);
}
function Oa(e, t, a, r) {
  for (var n = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      l = !0;
    a && (l = Re.default(a) <= s),
      r && l && (l = Re.default(r) >= s),
      l && n.push(s);
  }
  return n;
}
var Pa = (function (t) {
  Ct(r, ue["default"].Component);
  var a = Pt(r);
  function r(t) {
    var n;
    vt(this, r),
      kt(Ot((n = a.call(this, t))), "renderOptions", function () {
        var e = n.props.year,
          t = n.state.yearsList.map(function (t) {
            return ue.default.createElement(
              "div",
              {
                className:
                  e === t
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: t,
                onClick: n.onChange.bind(Ot(n), t),
                "aria-selected": e === t ? "true" : void 0,
              },
              e === t
                ? ue.default.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓",
                  )
                : "",
              t,
            );
          }),
          a = n.props.minDate ? Re.default(n.props.minDate) : null,
          r = n.props.maxDate ? Re.default(n.props.maxDate) : null;
        return (
          (r &&
            n.state.yearsList.find(function (e) {
              return e === r;
            })) ||
            t.unshift(
              ue.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: n.incrementYears,
                },
                ue.default.createElement("a", {
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
              ue.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: n.decrementYears,
                },
                ue.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                }),
              ),
            ),
          t
        );
      }),
      kt(Ot(n), "onChange", function (e) {
        n.props.onChange(e);
      }),
      kt(Ot(n), "handleClickOutside", function () {
        n.props.onCancel();
      }),
      kt(Ot(n), "shiftYears", function (e) {
        var t = n.state.yearsList.map(function (t) {
          return t + e;
        });
        n.setState({ yearsList: t });
      }),
      kt(Ot(n), "incrementYears", function () {
        return n.shiftYears(1);
      }),
      kt(Ot(n), "decrementYears", function () {
        return n.shiftYears(-1);
      });
    var o = t.yearDropdownItemNumber,
      s = t.scrollableYearDropdown,
      l = o || (s ? 10 : 5);
    return (
      (n.state = {
        yearsList: Oa(n.props.year, l, n.props.minDate, n.props.maxDate),
      }),
      (n.dropdownRef = e.createRef()),
      n
    );
  }
  return (
    wt(r, [
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
          var e = pe.default({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable":
              this.props.scrollableYearDropdown,
          });
          return ue.default.createElement(
            "div",
            { className: e, ref: this.dropdownRef },
            this.renderOptions(),
          );
        },
      },
    ]),
    r
  );
})();
kt(Pa, "propTypes", {
  minDate: de.default.instanceOf(Date),
  maxDate: de.default.instanceOf(Date),
  onCancel: de.default.func.isRequired,
  onChange: de.default.func.isRequired,
  scrollableYearDropdown: de.default.bool,
  year: de.default.number.isRequired,
  yearDropdownItemNumber: de.default.number,
});
var Na = ft.default(Pa),
  xa = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a() {
      var e;
      vt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        kt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        kt(Ot(e), "renderSelectOptions", function () {
          for (
            var t = e.props.minDate ? Re.default(e.props.minDate) : 1900,
              a = e.props.maxDate ? Re.default(e.props.maxDate) : 2100,
              r = [],
              n = t;
            n <= a;
            n++
          )
            r.push(ue.default.createElement("option", { key: n, value: n }, n));
          return r;
        }),
        kt(Ot(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        kt(Ot(e), "renderSelectMode", function () {
          return ue.default.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions(),
          );
        }),
        kt(Ot(e), "renderReadView", function (t) {
          return ue.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ue.default.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            ue.default.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year,
            ),
          );
        }),
        kt(Ot(e), "renderDropdown", function () {
          return ue.default.createElement(Na, {
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
        kt(Ot(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        kt(Ot(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        kt(Ot(e), "toggleDropdown", function (t) {
          e.setState(
            { dropdownVisible: !e.state.dropdownVisible },
            function () {
              e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
            },
          );
        }),
        kt(Ot(e), "handleYearChange", function (t, a) {
          e.onSelect(t, a), e.setOpen();
        }),
        kt(Ot(e), "onSelect", function (t, a) {
          e.props.onSelect && e.props.onSelect(t, a);
        }),
        kt(Ot(e), "setOpen", function () {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      wt(a, [
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
            return ue.default.createElement(
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
  })();
kt(xa, "propTypes", {
  adjustDateOnChange: de.default.bool,
  dropdownMode: de.default.oneOf(["scroll", "select"]).isRequired,
  maxDate: de.default.instanceOf(Date),
  minDate: de.default.instanceOf(Date),
  onChange: de.default.func.isRequired,
  scrollableYearDropdown: de.default.bool,
  year: de.default.number.isRequired,
  yearDropdownItemNumber: de.default.number,
  date: de.default.instanceOf(Date),
  onSelect: de.default.func,
  setOpen: de.default.func,
});
var Ea = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a() {
    var e;
    vt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      kt(
        Ot((e = t.call.apply(t, [this].concat(n)))),
        "isSelectedMonth",
        function (t) {
          return e.props.month === t;
        },
      ),
      kt(Ot(e), "renderOptions", function () {
        return e.props.monthNames.map(function (t, a) {
          return ue.default.createElement(
            "div",
            {
              className: e.isSelectedMonth(a)
                ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                : "react-datepicker__month-option",
              key: t,
              onClick: e.onChange.bind(Ot(e), a),
              "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
            },
            e.isSelectedMonth(a)
              ? ue.default.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓",
                )
              : "",
            t,
          );
        });
      }),
      kt(Ot(e), "onChange", function (t) {
        return e.props.onChange(t);
      }),
      kt(Ot(e), "handleClickOutside", function () {
        return e.props.onCancel();
      }),
      e
    );
  }
  return (
    wt(a, [
      {
        key: "render",
        value: function () {
          return ue.default.createElement(
            "div",
            { className: "react-datepicker__month-dropdown" },
            this.renderOptions(),
          );
        },
      },
    ]),
    a
  );
})();
kt(Ea, "propTypes", {
  onCancel: de.default.func.isRequired,
  onChange: de.default.func.isRequired,
  month: de.default.number.isRequired,
  monthNames: de.default.arrayOf(de.default.string.isRequired).isRequired,
});
var Ta = ft.default(Ea),
  Ya = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a() {
      var e;
      vt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        kt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        kt(Ot(e), "renderSelectOptions", function (e) {
          return e.map(function (e, t) {
            return ue.default.createElement("option", { key: t, value: t }, e);
          });
        }),
        kt(Ot(e), "renderSelectMode", function (t) {
          return ue.default.createElement(
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
        kt(Ot(e), "renderReadView", function (t, a) {
          return ue.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown,
            },
            ue.default.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            ue.default.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              a[e.props.month],
            ),
          );
        }),
        kt(Ot(e), "renderDropdown", function (t) {
          return ue.default.createElement(Ta, {
            key: "dropdown",
            month: e.props.month,
            monthNames: t,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
          });
        }),
        kt(Ot(e), "renderScrollMode", function (t) {
          var a = e.state.dropdownVisible,
            r = [e.renderReadView(!a, t)];
          return a && r.unshift(e.renderDropdown(t)), r;
        }),
        kt(Ot(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        kt(Ot(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      wt(a, [
        {
          key: "render",
          value: function () {
            var e,
              t = this,
              a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return aa(e, t.props.locale);
                    }
                  : function (e) {
                      return ta(e, t.props.locale);
                    },
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(a);
                break;
              case "select":
                e = this.renderSelectMode(a);
            }
            return ue.default.createElement(
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
  })();
function Ia(e, t) {
  for (var a = [], r = Wt(e), n = Wt(t); !lt.default(r, n); )
    a.push(Ft(r)), (r = ve.default(r, 1));
  return a;
}
kt(Ya, "propTypes", {
  dropdownMode: de.default.oneOf(["scroll", "select"]).isRequired,
  locale: de.default.string,
  month: de.default.number.isRequired,
  onChange: de.default.func.isRequired,
  useShortMonthInDropdown: de.default.bool,
});
var Ra = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a(e) {
    var r;
    return (
      vt(this, a),
      kt(Ot((r = t.call(this, e))), "renderOptions", function () {
        return r.state.monthYearsList.map(function (e) {
          var t = Le.default(e),
            a = Ut(r.props.date, e) && zt(r.props.date, e);
          return ue.default.createElement(
            "div",
            {
              className: a
                ? "react-datepicker__month-year-option--selected_month-year"
                : "react-datepicker__month-year-option",
              key: t,
              onClick: r.onChange.bind(Ot(r), t),
              "aria-selected": a ? "true" : void 0,
            },
            a
              ? ue.default.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected",
                  },
                  "✓",
                )
              : "",
            qt(e, r.props.dateFormat, r.props.locale),
          );
        });
      }),
      kt(Ot(r), "onChange", function (e) {
        return r.props.onChange(e);
      }),
      kt(Ot(r), "handleClickOutside", function () {
        r.props.onCancel();
      }),
      (r.state = { monthYearsList: Ia(r.props.minDate, r.props.maxDate) }),
      r
    );
  }
  return (
    wt(a, [
      {
        key: "render",
        value: function () {
          var e = pe.default({
            "react-datepicker__month-year-dropdown": !0,
            "react-datepicker__month-year-dropdown--scrollable":
              this.props.scrollableMonthYearDropdown,
          });
          return ue.default.createElement(
            "div",
            { className: e },
            this.renderOptions(),
          );
        },
      },
    ]),
    a
  );
})();
kt(Ra, "propTypes", {
  minDate: de.default.instanceOf(Date).isRequired,
  maxDate: de.default.instanceOf(Date).isRequired,
  onCancel: de.default.func.isRequired,
  onChange: de.default.func.isRequired,
  scrollableMonthYearDropdown: de.default.bool,
  date: de.default.instanceOf(Date).isRequired,
  dateFormat: de.default.string.isRequired,
  locale: de.default.string,
});
var La = ft.default(Ra),
  Fa = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a() {
      var e;
      vt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        kt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        kt(Ot(e), "renderSelectOptions", function () {
          for (
            var t = Wt(e.props.minDate), a = Wt(e.props.maxDate), r = [];
            !lt.default(t, a);

          ) {
            var n = Le.default(t);
            r.push(
              ue.default.createElement(
                "option",
                { key: n, value: n },
                qt(t, e.props.dateFormat, e.props.locale),
              ),
            ),
              (t = ve.default(t, 1));
          }
          return r;
        }),
        kt(Ot(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        kt(Ot(e), "renderSelectMode", function () {
          return ue.default.createElement(
            "select",
            {
              value: Le.default(Wt(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions(),
          );
        }),
        kt(Ot(e), "renderReadView", function (t) {
          var a = qt(e.props.date, e.props.dateFormat, e.props.locale);
          return ue.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ue.default.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            ue.default.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              a,
            ),
          );
        }),
        kt(Ot(e), "renderDropdown", function () {
          return ue.default.createElement(La, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown,
            locale: e.props.locale,
          });
        }),
        kt(Ot(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        kt(Ot(e), "onChange", function (t) {
          e.toggleDropdown();
          var a = Ft(parseInt(t));
          (Ut(e.props.date, a) && zt(e.props.date, a)) || e.props.onChange(a);
        }),
        kt(Ot(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      wt(a, [
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
            return ue.default.createElement(
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
  })();
kt(Fa, "propTypes", {
  dropdownMode: de.default.oneOf(["scroll", "select"]).isRequired,
  dateFormat: de.default.string.isRequired,
  locale: de.default.string,
  maxDate: de.default.instanceOf(Date).isRequired,
  minDate: de.default.instanceOf(Date).isRequired,
  date: de.default.instanceOf(Date).isRequired,
  onChange: de.default.func.isRequired,
  scrollableMonthYearDropdown: de.default.bool,
});
var Aa = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a() {
    var e;
    vt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      kt(
        Ot((e = t.call.apply(t, [this].concat(n)))),
        "dayEl",
        ue.default.createRef(),
      ),
      kt(Ot(e), "handleClick", function (t) {
        !e.isDisabled() && e.props.onClick && e.props.onClick(t);
      }),
      kt(Ot(e), "handleMouseEnter", function (t) {
        !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
      }),
      kt(Ot(e), "handleOnKeyDown", function (t) {
        " " === t.key && (t.preventDefault(), (t.key = "Enter")),
          e.props.handleOnKeyDown(t);
      }),
      kt(Ot(e), "isSameDay", function (t) {
        return Gt(e.props.day, t);
      }),
      kt(Ot(e), "isKeyboardSelected", function () {
        return (
          !e.props.disabledKeyboardNavigation &&
          !e.isSameDay(e.props.selected) &&
          e.isSameDay(e.props.preSelection)
        );
      }),
      kt(Ot(e), "isDisabled", function () {
        return ra(e.props.day, e.props);
      }),
      kt(Ot(e), "isExcluded", function () {
        return na(e.props.day, e.props);
      }),
      kt(Ot(e), "getHighLightedClass", function () {
        var t = e.props,
          a = t.day,
          r = t.highlightDates;
        if (!r) return !1;
        var n = qt(a, "MM.dd.yyyy");
        return r.get(n);
      }),
      kt(Ot(e), "getHolidaysClass", function () {
        var t = e.props,
          a = t.day,
          r = t.holidays;
        if (!r) return !1;
        var n = qt(a, "MM.dd.yyyy");
        return r.has(n) ? [r.get(n).className] : void 0;
      }),
      kt(Ot(e), "isInRange", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Xt(a, r, n);
      }),
      kt(Ot(e), "isInSelectingRange", function () {
        var t,
          a = e.props,
          r = a.day,
          n = a.selectsStart,
          o = a.selectsEnd,
          s = a.selectsRange,
          l = a.selectsDisabledDaysInRange,
          i = a.startDate,
          u = a.endDate,
          d =
            null !== (t = e.props.selectingDate) && void 0 !== t
              ? t
              : e.props.preSelection;
        return (
          !(!(n || o || s) || !d || (!l && e.isDisabled())) &&
          (n && u && (it.default(d, u) || Jt(d, u))
            ? Xt(r, d, u)
            : ((o && i && (lt.default(d, i) || Jt(d, i))) ||
                !(!s || !i || u || (!lt.default(d, i) && !Jt(d, i)))) &&
              Xt(r, i, d))
        );
      }),
      kt(Ot(e), "isSelectingRangeStart", function () {
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
        return Gt(r, o ? s : n);
      }),
      kt(Ot(e), "isSelectingRangeEnd", function () {
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
        return Gt(r, o || s ? l : n);
      }),
      kt(Ot(e), "isRangeStart", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Gt(r, a);
      }),
      kt(Ot(e), "isRangeEnd", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Gt(n, a);
      }),
      kt(Ot(e), "isWeekend", function () {
        var t = xe.default(e.props.day);
        return 0 === t || 6 === t;
      }),
      kt(Ot(e), "isAfterMonth", function () {
        return (
          void 0 !== e.props.month &&
          (e.props.month + 1) % 12 === Ye.default(e.props.day)
        );
      }),
      kt(Ot(e), "isBeforeMonth", function () {
        return (
          void 0 !== e.props.month &&
          (Ye.default(e.props.day) + 1) % 12 === e.props.month
        );
      }),
      kt(Ot(e), "isCurrentDay", function () {
        return e.isSameDay(Ft());
      }),
      kt(Ot(e), "isSelected", function () {
        return e.isSameDay(e.props.selected);
      }),
      kt(Ot(e), "getClassNames", function (t) {
        var a,
          r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
        return pe.default(
          "react-datepicker__day",
          r,
          "react-datepicker__day--" + qt(e.props.day, "ddd", a),
          {
            "react-datepicker__day--disabled": e.isDisabled(),
            "react-datepicker__day--excluded": e.isExcluded(),
            "react-datepicker__day--selected": e.isSelected(),
            "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
            "react-datepicker__day--range-start": e.isRangeStart(),
            "react-datepicker__day--range-end": e.isRangeEnd(),
            "react-datepicker__day--in-range": e.isInRange(),
            "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
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
      kt(Ot(e), "getAriaLabel", function () {
        var t = e.props,
          a = t.day,
          r = t.ariaLabelPrefixWhenEnabled,
          n = void 0 === r ? "Choose" : r,
          o = t.ariaLabelPrefixWhenDisabled,
          s = void 0 === o ? "Not available" : o,
          l = e.isDisabled() || e.isExcluded() ? s : n;
        return "".concat(l, " ").concat(qt(a, "PPPP", e.props.locale));
      }),
      kt(Ot(e), "getTitle", function () {
        var t = e.props,
          a = t.day,
          r = t.holidays,
          n = void 0 === r ? new Map() : r,
          o = qt(a, "MM.dd.yyyy");
        return n.has(o) && n.get(o).holidayNames.length > 0
          ? n.get(o).holidayNames.join(", ")
          : "";
      }),
      kt(Ot(e), "getTabIndex", function (t, a) {
        var r = t || e.props.selected,
          n = a || e.props.preSelection;
        return e.isKeyboardSelected() || (e.isSameDay(r) && Gt(n, r)) ? 0 : -1;
      }),
      kt(Ot(e), "handleFocusDay", function () {
        var t,
          a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
          e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth() && (r = !1),
          e.props.monthShowsDuplicateDaysStart &&
            e.isBeforeMonth() &&
            (r = !1)),
          r &&
            (null === (t = e.dayEl.current) ||
              void 0 === t ||
              t.focus({ preventScroll: !0 }));
      }),
      kt(Ot(e), "renderDayContents", function () {
        return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
          (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
          ? null
          : e.props.renderDayContents
          ? e.props.renderDayContents(Ee.default(e.props.day), e.props.day)
          : Ee.default(e.props.day);
      }),
      kt(Ot(e), "render", function () {
        return ue.default.createElement(
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
            ue.default.createElement(
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
    wt(a, [
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
})();
kt(Aa, "propTypes", {
  ariaLabelPrefixWhenEnabled: de.default.string,
  ariaLabelPrefixWhenDisabled: de.default.string,
  disabledKeyboardNavigation: de.default.bool,
  day: de.default.instanceOf(Date).isRequired,
  dayClassName: de.default.func,
  endDate: de.default.instanceOf(Date),
  highlightDates: de.default.instanceOf(Map),
  holidays: de.default.instanceOf(Map),
  inline: de.default.bool,
  shouldFocusDayInline: de.default.bool,
  month: de.default.number,
  onClick: de.default.func,
  onMouseEnter: de.default.func,
  preSelection: de.default.instanceOf(Date),
  selected: de.default.object,
  selectingDate: de.default.instanceOf(Date),
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  selectsDisabledDaysInRange: de.default.bool,
  startDate: de.default.instanceOf(Date),
  renderDayContents: de.default.func,
  handleOnKeyDown: de.default.func,
  containerRef: de.default.oneOfType([
    de.default.func,
    de.default.shape({ current: de.default.object }),
  ]),
  monthShowsDuplicateDaysEnd: de.default.bool,
  monthShowsDuplicateDaysStart: de.default.bool,
  locale: de.default.oneOfType([
    de.default.string,
    de.default.shape({ locale: de.default.object }),
  ]),
});
var qa = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a() {
    var e;
    vt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      kt(
        Ot((e = t.call.apply(t, [this].concat(n)))),
        "handleClick",
        function (t) {
          e.props.onClick && e.props.onClick(t);
        },
      ),
      e
    );
  }
  return (
    wt(
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
            return ue.default.createElement(
              "div",
              {
                className: pe.default(n),
                "aria-label": "".concat(r, " ").concat(this.props.weekNumber),
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
})();
kt(qa, "propTypes", {
  weekNumber: de.default.number.isRequired,
  onClick: de.default.func,
  ariaLabelPrefix: de.default.string,
});
var Ka,
  Ba = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a() {
      var e;
      vt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        kt(
          Ot((e = t.call.apply(t, [this].concat(n)))),
          "handleDayClick",
          function (t, a) {
            e.props.onDayClick && e.props.onDayClick(t, a);
          },
        ),
        kt(Ot(e), "handleDayMouseEnter", function (t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        kt(Ot(e), "handleWeekClick", function (t, a, r) {
          "function" == typeof e.props.onWeekSelect &&
            e.props.onWeekSelect(t, a, r),
            e.props.shouldCloseOnSelect && e.props.setOpen(!1);
        }),
        kt(Ot(e), "formatWeekNumber", function (t) {
          return e.props.formatWeekNumber
            ? e.props.formatWeekNumber(t)
            : (function (e, t) {
                var a = (t && ea(t)) || (Zt() && ea(Zt()));
                return Te.default(e, a ? { locale: a } : null);
              })(t);
        }),
        kt(Ot(e), "renderDays", function () {
          var t = jt(e.props.day, e.props.locale, e.props.calendarStartDay),
            a = [],
            r = e.formatWeekNumber(t);
          if (e.props.showWeekNumber) {
            var n = e.props.onWeekSelect
              ? e.handleWeekClick.bind(Ot(e), t, r)
              : void 0;
            a.push(
              ue.default.createElement(qa, {
                key: "W",
                weekNumber: r,
                onClick: n,
                ariaLabelPrefix: e.props.ariaLabelPrefix,
              }),
            );
          }
          return a.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (a) {
              var r = ye.default(t, a);
              return ue.default.createElement(Aa, {
                ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                key: r.valueOf(),
                day: r,
                month: e.props.month,
                onClick: e.handleDayClick.bind(Ot(e), r),
                onMouseEnter: e.handleDayMouseEnter.bind(Ot(e), r),
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
                selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                renderDayContents: e.props.renderDayContents,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef,
                inline: e.props.inline,
                shouldFocusDayInline: e.props.shouldFocusDayInline,
                monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
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
      wt(
        a,
        [
          {
            key: "render",
            value: function () {
              return ue.default.createElement(
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
  })();
kt(Ba, "propTypes", {
  ariaLabelPrefix: de.default.string,
  disabledKeyboardNavigation: de.default.bool,
  day: de.default.instanceOf(Date).isRequired,
  dayClassName: de.default.func,
  disabledDayAriaLabelPrefix: de.default.string,
  chooseDayAriaLabelPrefix: de.default.string,
  endDate: de.default.instanceOf(Date),
  excludeDates: de.default.array,
  excludeDateIntervals: de.default.arrayOf(
    de.default.shape({
      start: de.default.instanceOf(Date),
      end: de.default.instanceOf(Date),
    }),
  ),
  filterDate: de.default.func,
  formatWeekNumber: de.default.func,
  highlightDates: de.default.instanceOf(Map),
  holidays: de.default.instanceOf(Map),
  includeDates: de.default.array,
  includeDateIntervals: de.default.array,
  inline: de.default.bool,
  shouldFocusDayInline: de.default.bool,
  locale: de.default.oneOfType([
    de.default.string,
    de.default.shape({ locale: de.default.object }),
  ]),
  maxDate: de.default.instanceOf(Date),
  calendarStartDay: de.default.number,
  minDate: de.default.instanceOf(Date),
  month: de.default.number,
  onDayClick: de.default.func,
  onDayMouseEnter: de.default.func,
  onWeekSelect: de.default.func,
  preSelection: de.default.instanceOf(Date),
  selected: de.default.instanceOf(Date),
  selectingDate: de.default.instanceOf(Date),
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  selectsDisabledDaysInRange: de.default.bool,
  showWeekNumber: de.default.bool,
  startDate: de.default.instanceOf(Date),
  setOpen: de.default.func,
  shouldCloseOnSelect: de.default.bool,
  renderDayContents: de.default.func,
  handleOnKeyDown: de.default.func,
  isInputFocused: de.default.bool,
  containerRef: de.default.oneOfType([
    de.default.func,
    de.default.shape({ current: de.default.object }),
  ]),
  monthShowsDuplicateDaysEnd: de.default.bool,
  monthShowsDuplicateDaysStart: de.default.bool,
});
var ja = "two_columns",
  Wa = "three_columns",
  Qa = "four_columns",
  Ha =
    (kt((Ka = {}), ja, {
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
    kt(Ka, Wa, {
      grid: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ],
      verticalNavigationOffset: 3,
    }),
    kt(Ka, Qa, {
      grid: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
      ],
      verticalNavigationOffset: 4,
    }),
    Ka);
function Va(e, t) {
  return e ? Qa : t ? ja : Wa;
}
var Ua = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a() {
    var e;
    vt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      kt(
        Ot((e = t.call.apply(t, [this].concat(n)))),
        "MONTH_REFS",
        Nt(Array(12)).map(function () {
          return ue.default.createRef();
        }),
      ),
      kt(
        Ot(e),
        "QUARTER_REFS",
        Nt(Array(4)).map(function () {
          return ue.default.createRef();
        }),
      ),
      kt(Ot(e), "isDisabled", function (t) {
        return ra(t, e.props);
      }),
      kt(Ot(e), "isExcluded", function (t) {
        return na(t, e.props);
      }),
      kt(Ot(e), "handleDayClick", function (t, a) {
        e.props.onDayClick && e.props.onDayClick(t, a, e.props.orderInDisplay);
      }),
      kt(Ot(e), "handleDayMouseEnter", function (t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      kt(Ot(e), "handleMouseLeave", function () {
        e.props.onMouseLeave && e.props.onMouseLeave();
      }),
      kt(Ot(e), "isRangeStartMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && zt(Ke.default(r, t), n);
      }),
      kt(Ot(e), "isRangeStartQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && $t(Be.default(r, t), n);
      }),
      kt(Ot(e), "isRangeEndMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && zt(Ke.default(r, t), o);
      }),
      kt(Ot(e), "isRangeEndQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && $t(Be.default(r, t), o);
      }),
      kt(Ot(e), "isInSelectingRangeMonth", function (t) {
        var a,
          r = e.props,
          n = r.day,
          o = r.selectsStart,
          s = r.selectsEnd,
          l = r.selectsRange,
          i = r.startDate,
          u = r.endDate,
          d =
            null !== (a = e.props.selectingDate) && void 0 !== a
              ? a
              : e.props.preSelection;
        return (
          !(!(o || s || l) || !d) &&
          (o && u
            ? sa(d, u, t, n)
            : ((s && i) || !(!l || !i || u)) && sa(i, d, t, n))
        );
      }),
      kt(Ot(e), "isSelectingMonthRangeStart", function (t) {
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
        return zt(l, s ? i : o);
      }),
      kt(Ot(e), "isSelectingMonthRangeEnd", function (t) {
        var a;
        if (!e.isInSelectingRangeMonth(t)) return !1;
        var r = e.props,
          n = r.day,
          o = r.endDate,
          s = r.selectsEnd,
          l = r.selectsRange,
          i = Ke.default(n, t),
          u =
            null !== (a = e.props.selectingDate) && void 0 !== a
              ? a
              : e.props.preSelection;
        return zt(i, s || l ? u : o);
      }),
      kt(Ot(e), "isInSelectingRangeQuarter", function (t) {
        var a,
          r = e.props,
          n = r.day,
          o = r.selectsStart,
          s = r.selectsEnd,
          l = r.selectsRange,
          i = r.startDate,
          u = r.endDate,
          d =
            null !== (a = e.props.selectingDate) && void 0 !== a
              ? a
              : e.props.preSelection;
        return (
          !(!(o || s || l) || !d) &&
          (o && u
            ? da(d, u, t, n)
            : ((s && i) || !(!l || !i || u)) && da(i, d, t, n))
        );
      }),
      kt(Ot(e), "isWeekInMonth", function (t) {
        var a = e.props.day,
          r = ye.default(t, 6);
        return zt(t, a) || zt(r, a);
      }),
      kt(Ot(e), "isCurrentMonth", function (e, t) {
        return Re.default(e) === Re.default(Ft()) && t === Ye.default(Ft());
      }),
      kt(Ot(e), "isCurrentQuarter", function (e, t) {
        return Re.default(e) === Re.default(Ft()) && t === Ie.default(Ft());
      }),
      kt(Ot(e), "isSelectedMonth", function (e, t, a) {
        return Ye.default(a) === t && Re.default(e) === Re.default(a);
      }),
      kt(Ot(e), "isSelectedQuarter", function (e, t, a) {
        return Ie.default(e) === t && Re.default(e) === Re.default(a);
      }),
      kt(Ot(e), "renderWeeks", function () {
        for (
          var t = [],
            a = e.props.fixedHeight,
            r = 0,
            n = !1,
            o = jt(Wt(e.props.day), e.props.locale, e.props.calendarStartDay);
          t.push(
            ue.default.createElement(Ba, {
              ariaLabelPrefix: e.props.weekAriaLabelPrefix,
              chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
              disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
              key: r,
              day: o,
              month: Ye.default(e.props.day),
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
              selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
              showWeekNumber: e.props.showWeekNumbers,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              setOpen: e.props.setOpen,
              shouldCloseOnSelect: e.props.shouldCloseOnSelect,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              renderDayContents: e.props.renderDayContents,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              calendarStartDay: e.props.calendarStartDay,
              monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                e.props.monthShowsDuplicateDaysStart,
            }),
          ),
            !n;

        ) {
          r++, (o = ge.default(o, 1));
          var s = a && r >= 6,
            l = !a && !e.isWeekInMonth(o);
          if (s || l) {
            if (!e.props.peekNextMonth) break;
            n = !0;
          }
        }
        return t;
      }),
      kt(Ot(e), "onMonthClick", function (t, a) {
        e.handleDayClick(Wt(Ke.default(e.props.day, a)), t);
      }),
      kt(Ot(e), "onMonthMouseEnter", function (t) {
        e.handleDayMouseEnter(Wt(Ke.default(e.props.day, t)));
      }),
      kt(Ot(e), "handleMonthNavigation", function (t, a) {
        e.isDisabled(a) ||
          e.isExcluded(a) ||
          (e.props.setPreSelection(a),
          e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
      }),
      kt(Ot(e), "onMonthKeyDown", function (t, a) {
        var r = e.props,
          n = r.selected,
          o = r.preSelection,
          s = r.disabledKeyboardNavigation,
          l = r.showTwoColumnMonthYearPicker,
          i = r.showFourColumnMonthYearPicker,
          u = r.setPreSelection,
          d = t.key;
        if (("Tab" !== d && t.preventDefault(), !s)) {
          var p = Va(i, l),
            c = Ha[p].verticalNavigationOffset,
            f = Ha[p].grid;
          switch (d) {
            case "Enter":
              e.onMonthClick(t, a), u(n);
              break;
            case "ArrowRight":
              e.handleMonthNavigation(11 === a ? 0 : a + 1, ve.default(o, 1));
              break;
            case "ArrowLeft":
              e.handleMonthNavigation(0 === a ? 11 : a - 1, Ce.default(o, 1));
              break;
            case "ArrowUp":
              e.handleMonthNavigation(
                f[0].includes(a) ? a + 12 - c : a - c,
                Ce.default(o, c),
              );
              break;
            case "ArrowDown":
              e.handleMonthNavigation(
                f[f.length - 1].includes(a) ? a - 12 + c : a + c,
                ve.default(o, c),
              );
          }
        }
      }),
      kt(Ot(e), "onQuarterClick", function (t, a) {
        e.handleDayClick(Ht(Be.default(e.props.day, a)), t);
      }),
      kt(Ot(e), "onQuarterMouseEnter", function (t) {
        e.handleDayMouseEnter(Ht(Be.default(e.props.day, t)));
      }),
      kt(Ot(e), "handleQuarterNavigation", function (t, a) {
        e.isDisabled(a) ||
          e.isExcluded(a) ||
          (e.props.setPreSelection(a),
          e.QUARTER_REFS[t - 1].current &&
            e.QUARTER_REFS[t - 1].current.focus());
      }),
      kt(Ot(e), "onQuarterKeyDown", function (t, a) {
        var r = t.key;
        if (!e.props.disabledKeyboardNavigation)
          switch (r) {
            case "Enter":
              e.onQuarterClick(t, a), e.props.setPreSelection(e.props.selected);
              break;
            case "ArrowRight":
              e.handleQuarterNavigation(
                4 === a ? 1 : a + 1,
                be.default(e.props.preSelection, 1),
              );
              break;
            case "ArrowLeft":
              e.handleQuarterNavigation(
                1 === a ? 4 : a - 1,
                Me.default(e.props.preSelection, 1),
              );
          }
      }),
      kt(Ot(e), "getMonthClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate,
          u = a.preSelection,
          d = a.monthClassName,
          p = a.excludeDates,
          c = a.includeDates,
          f = d ? d(Ke.default(r, t)) : void 0,
          h = Ke.default(r, t);
        return pe.default(
          "react-datepicker__month-text",
          "react-datepicker__month-".concat(t),
          f,
          {
            "react-datepicker__month-text--disabled":
              (l || i || p || c) && oa(h, e.props),
            "react-datepicker__month-text--selected": e.isSelectedMonth(
              r,
              t,
              s,
            ),
            "react-datepicker__month-text--keyboard-selected":
              !e.props.disabledKeyboardNavigation && Ye.default(u) === t,
            "react-datepicker__month-text--in-selecting-range":
              e.isInSelectingRangeMonth(t),
            "react-datepicker__month-text--in-range": sa(n, o, t, r),
            "react-datepicker__month-text--range-start": e.isRangeStartMonth(t),
            "react-datepicker__month-text--range-end": e.isRangeEndMonth(t),
            "react-datepicker__month-text--selecting-range-start":
              e.isSelectingMonthRangeStart(t),
            "react-datepicker__month-text--selecting-range-end":
              e.isSelectingMonthRangeEnd(t),
            "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
          },
        );
      }),
      kt(Ot(e), "getTabIndex", function (t) {
        var a = Ye.default(e.props.preSelection);
        return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
      }),
      kt(Ot(e), "getQuarterTabIndex", function (t) {
        var a = Ie.default(e.props.preSelection);
        return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
      }),
      kt(Ot(e), "getAriaLabel", function (t) {
        var a = e.props,
          r = a.chooseDayAriaLabelPrefix,
          n = void 0 === r ? "Choose" : r,
          o = a.disabledDayAriaLabelPrefix,
          s = void 0 === o ? "Not available" : o,
          l = a.day,
          i = Ke.default(l, t),
          u = e.isDisabled(i) || e.isExcluded(i) ? s : n;
        return "".concat(u, " ").concat(qt(i, "MMMM yyyy"));
      }),
      kt(Ot(e), "getQuarterClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate,
          u = a.preSelection;
        return pe.default(
          "react-datepicker__quarter-text",
          "react-datepicker__quarter-".concat(t),
          {
            "react-datepicker__quarter-text--disabled":
              (l || i) && la(Be.default(r, t), e.props),
            "react-datepicker__quarter-text--selected": e.isSelectedQuarter(
              r,
              t,
              s,
            ),
            "react-datepicker__quarter-text--keyboard-selected":
              Ie.default(u) === t,
            "react-datepicker__quarter-text--in-selecting-range":
              e.isInSelectingRangeQuarter(t),
            "react-datepicker__quarter-text--in-range": da(n, o, t, r),
            "react-datepicker__quarter-text--range-start":
              e.isRangeStartQuarter(t),
            "react-datepicker__quarter-text--range-end": e.isRangeEndQuarter(t),
          },
        );
      }),
      kt(Ot(e), "getMonthContent", function (t) {
        var a = e.props,
          r = a.showFullMonthYearPicker,
          n = a.renderMonthContent,
          o = a.locale,
          s = aa(t, o),
          l = ta(t, o);
        return n ? n(t, s, l) : r ? l : s;
      }),
      kt(Ot(e), "getQuarterContent", function (t) {
        var a = e.props,
          r = a.renderQuarterContent,
          n = (function (e, t) {
            return qt(Be.default(Ft(), e), "QQQ", t);
          })(t, a.locale);
        return r ? r(t, n) : n;
      }),
      kt(Ot(e), "renderMonths", function () {
        var t = e.props,
          a = t.showTwoColumnMonthYearPicker,
          r = t.showFourColumnMonthYearPicker,
          n = t.day,
          o = t.selected;
        return Ha[Va(r, a)].grid.map(function (t, a) {
          return ue.default.createElement(
            "div",
            { className: "react-datepicker__month-wrapper", key: a },
            t.map(function (t, a) {
              return ue.default.createElement(
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
      kt(Ot(e), "renderQuarters", function () {
        var t = e.props,
          a = t.day,
          r = t.selected;
        return ue.default.createElement(
          "div",
          { className: "react-datepicker__quarter-wrapper" },
          [1, 2, 3, 4].map(function (t, n) {
            return ue.default.createElement(
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
      kt(Ot(e), "getClassNames", function () {
        var t = e.props,
          a = t.selectingDate,
          r = t.selectsStart,
          n = t.selectsEnd,
          o = t.showMonthYearPicker,
          s = t.showQuarterYearPicker;
        return pe.default(
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
    wt(a, [
      {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.showMonthYearPicker,
            a = e.showQuarterYearPicker,
            r = e.day,
            n = e.ariaLabelPrefix,
            o = void 0 === n ? "month " : n;
          return ue.default.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              "aria-label": "".concat(o, " ").concat(qt(r, "yyyy-MM")),
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
})();
kt(Ua, "propTypes", {
  ariaLabelPrefix: de.default.string,
  chooseDayAriaLabelPrefix: de.default.string,
  disabledDayAriaLabelPrefix: de.default.string,
  disabledKeyboardNavigation: de.default.bool,
  day: de.default.instanceOf(Date).isRequired,
  dayClassName: de.default.func,
  monthClassName: de.default.func,
  endDate: de.default.instanceOf(Date),
  orderInDisplay: de.default.number,
  excludeDates: de.default.array,
  excludeDateIntervals: de.default.arrayOf(
    de.default.shape({
      start: de.default.instanceOf(Date),
      end: de.default.instanceOf(Date),
    }),
  ),
  filterDate: de.default.func,
  fixedHeight: de.default.bool,
  formatWeekNumber: de.default.func,
  highlightDates: de.default.instanceOf(Map),
  holidays: de.default.PropTypes.instanceOf(Map),
  includeDates: de.default.array,
  includeDateIntervals: de.default.array,
  inline: de.default.bool,
  shouldFocusDayInline: de.default.bool,
  locale: de.default.oneOfType([
    de.default.string,
    de.default.shape({ locale: de.default.object }),
  ]),
  maxDate: de.default.instanceOf(Date),
  minDate: de.default.instanceOf(Date),
  onDayClick: de.default.func,
  onDayMouseEnter: de.default.func,
  onMouseLeave: de.default.func,
  onWeekSelect: de.default.func,
  peekNextMonth: de.default.bool,
  preSelection: de.default.instanceOf(Date),
  setPreSelection: de.default.func,
  selected: de.default.instanceOf(Date),
  selectingDate: de.default.instanceOf(Date),
  calendarStartDay: de.default.number,
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  selectsDisabledDaysInRange: de.default.bool,
  showWeekNumbers: de.default.bool,
  startDate: de.default.instanceOf(Date),
  setOpen: de.default.func,
  shouldCloseOnSelect: de.default.bool,
  renderDayContents: de.default.func,
  renderMonthContent: de.default.func,
  renderQuarterContent: de.default.func,
  showMonthYearPicker: de.default.bool,
  showFullMonthYearPicker: de.default.bool,
  showTwoColumnMonthYearPicker: de.default.bool,
  showFourColumnMonthYearPicker: de.default.bool,
  showQuarterYearPicker: de.default.bool,
  handleOnKeyDown: de.default.func,
  isInputFocused: de.default.bool,
  weekAriaLabelPrefix: de.default.string,
  containerRef: de.default.oneOfType([
    de.default.func,
    de.default.shape({ current: de.default.object }),
  ]),
  monthShowsDuplicateDaysEnd: de.default.bool,
  monthShowsDuplicateDaysStart: de.default.bool,
});
var za = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a() {
    var e;
    vt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      kt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
        height: null,
      }),
      kt(Ot(e), "handleClick", function (t) {
        ((e.props.minTime || e.props.maxTime) && ha(t, e.props)) ||
          ((e.props.excludeTimes ||
            e.props.includeTimes ||
            e.props.filterTime) &&
            fa(t, e.props)) ||
          e.props.onChange(t);
      }),
      kt(Ot(e), "isSelectedTime", function (t) {
        return (
          e.props.selected &&
          ((a = e.props.selected), (r = t), _a(a).getTime() === _a(r).getTime())
        );
        var a, r;
      }),
      kt(Ot(e), "liClasses", function (t) {
        var a = [
          "react-datepicker__time-list-item",
          e.props.timeClassName ? e.props.timeClassName(t) : void 0,
        ];
        return (
          e.isSelectedTime(t) &&
            a.push("react-datepicker__time-list-item--selected"),
          (((e.props.minTime || e.props.maxTime) && ha(t, e.props)) ||
            ((e.props.excludeTimes ||
              e.props.includeTimes ||
              e.props.filterTime) &&
              fa(t, e.props))) &&
            a.push("react-datepicker__time-list-item--disabled"),
          e.props.injectTimes &&
            (60 * Ne.default(t) + Pe.default(t)) % e.props.intervals != 0 &&
            a.push("react-datepicker__time-list-item--injected"),
          a.join(" ")
        );
      }),
      kt(Ot(e), "handleOnKeyDown", function (t, a) {
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
      kt(Ot(e), "renderTimes", function () {
        for (
          var t,
            a = [],
            r = e.props.format ? e.props.format : "p",
            n = e.props.intervals,
            o = e.props.selected || e.props.openToDate || Ft(),
            s = ((t = o), ze.default(t)),
            l =
              e.props.injectTimes &&
              e.props.injectTimes.sort(function (e, t) {
                return e - t;
              }),
            i =
              60 *
              (function (e) {
                var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
                  a = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
                return Math.round((+a - +t) / 36e5);
              })(o),
            u = i / n,
            d = 0;
          d < u;
          d++
        ) {
          var p = me.default(s, d * n);
          if ((a.push(p), l)) {
            var c = Sa(s, p, d, n, l);
            a = a.concat(c);
          }
        }
        var f = a.reduce(function (e, t) {
          return t.getTime() <= o.getTime() ? t : e;
        }, a[0]);
        return a.map(function (t, a) {
          return ue.default.createElement(
            "li",
            {
              key: a,
              onClick: e.handleClick.bind(Ot(e), t),
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
            qt(t, r, e.props.locale),
          );
        });
      }),
      e
    );
  }
  return (
    wt(
      a,
      [
        {
          key: "componentDidMount",
          value: function () {
            (this.list.scrollTop =
              this.centerLi &&
              a.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi,
              )),
              this.props.monthRef &&
                this.header &&
                this.setState({
                  height:
                    this.props.monthRef.clientHeight - this.header.clientHeight,
                });
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.state.height;
            return ue.default.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : "",
                ),
              },
              ue.default.createElement(
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
                ue.default.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  this.props.timeCaption,
                ),
              ),
              ue.default.createElement(
                "div",
                { className: "react-datepicker__time" },
                ue.default.createElement(
                  "div",
                  { className: "react-datepicker__time-box" },
                  ue.default.createElement(
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
})();
kt(za, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
}),
  kt(za, "propTypes", {
    format: de.default.string,
    includeTimes: de.default.array,
    intervals: de.default.number,
    selected: de.default.instanceOf(Date),
    openToDate: de.default.instanceOf(Date),
    onChange: de.default.func,
    timeClassName: de.default.func,
    todayButton: de.default.node,
    minTime: de.default.instanceOf(Date),
    maxTime: de.default.instanceOf(Date),
    excludeTimes: de.default.array,
    filterTime: de.default.func,
    monthRef: de.default.object,
    timeCaption: de.default.string,
    injectTimes: de.default.array,
    handleOnKeyDown: de.default.func,
    locale: de.default.oneOfType([
      de.default.string,
      de.default.shape({ locale: de.default.object }),
    ]),
    showTimeSelectOnly: de.default.bool,
  });
var $a = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a(e) {
    var r;
    return (
      vt(this, a),
      kt(
        Ot((r = t.call(this, e))),
        "YEAR_REFS",
        Nt(Array(r.props.yearItemNumber)).map(function () {
          return ue.default.createRef();
        }),
      ),
      kt(Ot(r), "isDisabled", function (e) {
        return ra(e, r.props);
      }),
      kt(Ot(r), "isExcluded", function (e) {
        return na(e, r.props);
      }),
      kt(Ot(r), "selectingDate", function () {
        var e;
        return null !== (e = r.props.selectingDate) && void 0 !== e
          ? e
          : r.props.preSelection;
      }),
      kt(Ot(r), "updateFocusOnPaginate", function (e) {
        var t = function () {
          this.YEAR_REFS[e].current.focus();
        }.bind(Ot(r));
        window.requestAnimationFrame(t);
      }),
      kt(Ot(r), "handleYearClick", function (e, t) {
        r.props.onDayClick && r.props.onDayClick(e, t);
      }),
      kt(Ot(r), "handleYearNavigation", function (e, t) {
        var a = r.props,
          n = a.date,
          o = a.yearItemNumber,
          s = Ma(n, o).startPeriod;
        r.isDisabled(t) ||
          r.isExcluded(t) ||
          (r.props.setPreSelection(t),
          e - s == -1
            ? r.updateFocusOnPaginate(o - 1)
            : e - s === o
            ? r.updateFocusOnPaginate(0)
            : r.YEAR_REFS[e - s].current.focus());
      }),
      kt(Ot(r), "isSameDay", function (e, t) {
        return Gt(e, t);
      }),
      kt(Ot(r), "isCurrentYear", function (e) {
        return e === Re.default(Ft());
      }),
      kt(Ot(r), "isRangeStart", function (e) {
        return (
          r.props.startDate &&
          r.props.endDate &&
          Ut(je.default(Ft(), e), r.props.startDate)
        );
      }),
      kt(Ot(r), "isRangeEnd", function (e) {
        return (
          r.props.startDate &&
          r.props.endDate &&
          Ut(je.default(Ft(), e), r.props.endDate)
        );
      }),
      kt(Ot(r), "isInRange", function (e) {
        return ia(e, r.props.startDate, r.props.endDate);
      }),
      kt(Ot(r), "isInSelectingRange", function (e) {
        var t = r.props,
          a = t.selectsStart,
          n = t.selectsEnd,
          o = t.selectsRange,
          s = t.startDate,
          l = t.endDate;
        return (
          !(!(a || n || o) || !r.selectingDate()) &&
          (a && l
            ? ia(e, r.selectingDate(), l)
            : ((n && s) || !(!o || !s || l)) && ia(e, s, r.selectingDate()))
        );
      }),
      kt(Ot(r), "isSelectingRangeStart", function (e) {
        if (!r.isInSelectingRange(e)) return !1;
        var t = r.props,
          a = t.startDate,
          n = t.selectsStart,
          o = je.default(Ft(), e);
        return Ut(o, n ? r.selectingDate() : a);
      }),
      kt(Ot(r), "isSelectingRangeEnd", function (e) {
        if (!r.isInSelectingRange(e)) return !1;
        var t = r.props,
          a = t.endDate,
          n = t.selectsEnd,
          o = t.selectsRange,
          s = je.default(Ft(), e);
        return Ut(s, n || o ? r.selectingDate() : a);
      }),
      kt(Ot(r), "isKeyboardSelected", function (e) {
        var t = Qt(je.default(r.props.date, e));
        return (
          !r.props.disabledKeyboardNavigation &&
          !r.props.inline &&
          !Gt(t, Qt(r.props.selected)) &&
          Gt(t, Qt(r.props.preSelection))
        );
      }),
      kt(Ot(r), "onYearClick", function (e, t) {
        var a = r.props.date;
        r.handleYearClick(Qt(je.default(a, t)), e);
      }),
      kt(Ot(r), "onYearKeyDown", function (e, t) {
        var a = e.key;
        if (!r.props.disabledKeyboardNavigation)
          switch (a) {
            case "Enter":
              r.onYearClick(e, t), r.props.setPreSelection(r.props.selected);
              break;
            case "ArrowRight":
              r.handleYearNavigation(
                t + 1,
                we.default(r.props.preSelection, 1),
              );
              break;
            case "ArrowLeft":
              r.handleYearNavigation(
                t - 1,
                _e.default(r.props.preSelection, 1),
              );
          }
      }),
      kt(Ot(r), "getYearClassNames", function (e) {
        var t = r.props,
          a = t.minDate,
          n = t.maxDate,
          o = t.selected,
          s = t.excludeDates,
          l = t.includeDates,
          i = t.filterDate;
        return pe.default("react-datepicker__year-text", {
          "react-datepicker__year-text--selected": e === Re.default(o),
          "react-datepicker__year-text--disabled":
            (a || n || s || l || i) && ua(e, r.props),
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
      kt(Ot(r), "getYearTabIndex", function (e) {
        return r.props.disabledKeyboardNavigation
          ? "-1"
          : e === Re.default(r.props.preSelection)
          ? "0"
          : "-1";
      }),
      kt(Ot(r), "getYearContainerClassNames", function () {
        var e = r.props,
          t = e.selectingDate,
          a = e.selectsStart,
          n = e.selectsEnd,
          o = e.selectsRange;
        return pe.default("react-datepicker__year", {
          "react-datepicker__year--selecting-range": t && (a || n || o),
        });
      }),
      kt(Ot(r), "getYearContent", function (e) {
        return r.props.renderYearContent ? r.props.renderYearContent(e) : e;
      }),
      r
    );
  }
  return (
    wt(a, [
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
              l = Ma(r, n),
              i = l.startPeriod,
              u = l.endPeriod,
              d = function (a) {
                t.push(
                  ue.default.createElement(
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
            p <= u;
            p++
          )
            d(p);
          return ue.default.createElement(
            "div",
            { className: this.getYearContainerClassNames() },
            ue.default.createElement(
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
})();
kt($a, "propTypes", {
  clearSelectingDate: de.default.func,
  date: de.default.instanceOf(Date),
  disabledKeyboardNavigation: de.default.bool,
  endDate: de.default.instanceOf(Date),
  onDayClick: de.default.func,
  preSelection: de.default.instanceOf(Date),
  setPreSelection: de.default.func,
  selected: de.default.object,
  inline: de.default.bool,
  maxDate: de.default.instanceOf(Date),
  minDate: de.default.instanceOf(Date),
  onYearMouseEnter: de.default.func.isRequired,
  onYearMouseLeave: de.default.func.isRequired,
  selectingDate: de.default.instanceOf(Date),
  renderYearContent: de.default.func,
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  startDate: de.default.instanceOf(Date),
  excludeDates: de.default.array,
  includeDates: de.default.array,
  filterDate: de.default.func,
  yearItemNumber: de.default.number,
});
var Ga = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a(e) {
    var r;
    return (
      vt(this, a),
      kt(Ot((r = t.call(this, e))), "onTimeChange", function (e) {
        r.setState({ time: e });
        var t = new Date();
        t.setHours(e.split(":")[0]),
          t.setMinutes(e.split(":")[1]),
          r.props.onChange(t);
      }),
      kt(Ot(r), "renderTimeInput", function () {
        var e = r.state.time,
          t = r.props,
          a = t.date,
          n = t.timeString,
          o = t.customTimeInput;
        return o
          ? ue.default.cloneElement(o, {
              date: a,
              value: e,
              onChange: r.onTimeChange,
            })
          : ue.default.createElement("input", {
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
    wt(
      a,
      [
        {
          key: "render",
          value: function () {
            return ue.default.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              ue.default.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel,
              ),
              ue.default.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                ue.default.createElement(
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
})();
function Ja(e) {
  var t = e.className,
    a = e.children,
    r = e.showPopperArrow,
    n = e.arrowProps,
    o = void 0 === n ? {} : n;
  return ue.default.createElement(
    "div",
    { className: t },
    r &&
      ue.default.createElement(
        "div",
        St({ className: "react-datepicker__triangle" }, o),
      ),
    a,
  );
}
kt(Ga, "propTypes", {
  onChange: de.default.func,
  date: de.default.instanceOf(Date),
  timeString: de.default.string,
  timeInputLabel: de.default.string,
  customTimeInput: de.default.element,
}),
  (Ja.propTypes = {
    className: de.default.string,
    children: de.default.node,
    arrowProps: de.default.object,
    showPopperArrow: de.default.bool,
  });
var Xa = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  Za = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a(e) {
      var r;
      return (
        vt(this, a),
        kt(Ot((r = t.call(this, e))), "handleClickOutside", function (e) {
          r.props.onClickOutside(e);
        }),
        kt(Ot(r), "setClickOutsideRef", function () {
          return r.containerRef.current;
        }),
        kt(Ot(r), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Xa.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && r.props.onDropdownFocus();
        }),
        kt(Ot(r), "getDateInView", function () {
          var e = r.props,
            t = e.preSelection,
            a = e.selected,
            n = e.openToDate,
            o = va(r.props),
            s = ba(r.props),
            l = Ft(),
            i = n || a || t;
          return (
            i || (o && it.default(l, o) ? o : s && lt.default(l, s) ? s : l)
          );
        }),
        kt(Ot(r), "increaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: ve.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            },
          );
        }),
        kt(Ot(r), "decreaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: Ce.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            },
          );
        }),
        kt(Ot(r), "handleDayClick", function (e, t, a) {
          r.props.onSelect(e, t, a),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        kt(Ot(r), "handleDayMouseEnter", function (e) {
          r.setState({ selectingDate: e }),
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
        }),
        kt(Ot(r), "handleMonthMouseLeave", function () {
          r.setState({ selectingDate: null }),
            r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
        }),
        kt(Ot(r), "handleYearMouseEnter", function (e, t) {
          r.setState({ selectingDate: je.default(Ft(), t) }),
            r.props.onYearMouseEnter && r.props.onYearMouseEnter(e, t);
        }),
        kt(Ot(r), "handleYearMouseLeave", function (e, t) {
          r.props.onYearMouseLeave && r.props.onYearMouseLeave(e, t);
        }),
        kt(Ot(r), "handleYearChange", function (e) {
          r.props.onYearChange &&
            (r.props.onYearChange(e),
            r.setState({ isRenderAriaLiveMessage: !0 })),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        kt(Ot(r), "handleMonthChange", function (e) {
          r.handleCustomMonthChange(e),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        kt(Ot(r), "handleCustomMonthChange", function (e) {
          r.props.onMonthChange &&
            (r.props.onMonthChange(e),
            r.setState({ isRenderAriaLiveMessage: !0 }));
        }),
        kt(Ot(r), "handleMonthYearChange", function (e) {
          r.handleYearChange(e), r.handleMonthChange(e);
        }),
        kt(Ot(r), "changeYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return { date: je.default(a, e) };
            },
            function () {
              return r.handleYearChange(r.state.date);
            },
          );
        }),
        kt(Ot(r), "changeMonth", function (e) {
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
        kt(Ot(r), "changeMonthYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return {
                date: je.default(Ke.default(a, Ye.default(e)), Re.default(e)),
              };
            },
            function () {
              return r.handleMonthYearChange(r.state.date);
            },
          );
        }),
        kt(Ot(r), "header", function () {
          var e = jt(
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
                ue.default.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  r.props.weekLabel || "#",
                ),
              ),
            t.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (t) {
                var a = ye.default(e, t),
                  n = r.formatWeekday(a, r.props.locale),
                  o = r.props.weekDayClassName
                    ? r.props.weekDayClassName(a)
                    : void 0;
                return ue.default.createElement(
                  "div",
                  {
                    key: t,
                    className: pe.default("react-datepicker__day-name", o),
                  },
                  n,
                );
              }),
            )
          );
        }),
        kt(Ot(r), "formatWeekday", function (e, t) {
          return r.props.formatWeekDay
            ? (function (e, t, a) {
                return t(qt(e, "EEEE", a));
              })(e, r.props.formatWeekDay, t)
            : r.props.useWeekdaysShort
            ? (function (e, t) {
                return qt(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return qt(e, "EEEEEE", t);
              })(e, t);
        }),
        kt(Ot(r), "decreaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: _e.default(
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
        kt(Ot(r), "clearSelectingDate", function () {
          r.setState({ selectingDate: null });
        }),
        kt(Ot(r), "renderPreviousButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = ya(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.minDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? Rt : r,
                    o = Ma(Qt(_e.default(e, n)), n).endPeriod,
                    s = a && Re.default(a);
                  return (s && s > o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = ma(r.state.date, r.props);
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
                  (t.push("react-datepicker__navigation--previous--disabled"),
                  (a = null));
              var n =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                o = r.props,
                s = o.previousMonthButtonLabel,
                l = o.previousYearButtonLabel,
                i = r.props,
                u = i.previousMonthAriaLabel,
                d =
                  void 0 === u
                    ? "string" == typeof s
                      ? s
                      : "Previous Month"
                    : u,
                p = i.previousYearAriaLabel,
                c =
                  void 0 === p
                    ? "string" == typeof l
                      ? l
                      : "Previous Year"
                    : p;
              return ue.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                ue.default.createElement(
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
        kt(Ot(r), "increaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: we.default(
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
        kt(Ot(r), "renderNextButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = ga(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.maxDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? Rt : r,
                    o = Ma(we.default(e, n), n).startPeriod,
                    s = a && Re.default(a);
                  return (s && s < o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = Da(r.state.date, r.props);
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
                u = i.nextMonthAriaLabel,
                d =
                  void 0 === u ? ("string" == typeof s ? s : "Next Month") : u,
                p = i.nextYearAriaLabel,
                c = void 0 === p ? ("string" == typeof l ? l : "Next Year") : p;
              return ue.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                ue.default.createElement(
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
        kt(Ot(r), "renderCurrentMonth", function () {
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
              t.push("react-datepicker__current-month--hasMonthYearDropdown"),
            ue.default.createElement(
              "div",
              { className: t.join(" ") },
              qt(e, r.props.dateFormat, r.props.locale),
            )
          );
        }),
        kt(Ot(r), "renderYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showYearDropdown && !e)
            return ue.default.createElement(xa, {
              adjustDateOnChange: r.props.adjustDateOnChange,
              date: r.state.date,
              onSelect: r.props.onSelect,
              setOpen: r.props.setOpen,
              dropdownMode: r.props.dropdownMode,
              onChange: r.changeYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              year: Re.default(r.state.date),
              scrollableYearDropdown: r.props.scrollableYearDropdown,
              yearDropdownItemNumber: r.props.yearDropdownItemNumber,
            });
        }),
        kt(Ot(r), "renderMonthDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthDropdown && !e)
            return ue.default.createElement(Ya, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              onChange: r.changeMonth,
              month: Ye.default(r.state.date),
              useShortMonthInDropdown: r.props.useShortMonthInDropdown,
            });
        }),
        kt(Ot(r), "renderMonthYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthYearDropdown && !e)
            return ue.default.createElement(Fa, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              dateFormat: r.props.dateFormat,
              onChange: r.changeMonthYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              date: r.state.date,
              scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown,
            });
        }),
        kt(Ot(r), "handleTodayButtonClick", function (e) {
          r.props.onSelect(Vt(), e),
            r.props.setPreSelection && r.props.setPreSelection(Vt());
        }),
        kt(Ot(r), "renderTodayButton", function () {
          if (r.props.todayButton && !r.props.showTimeSelectOnly)
            return ue.default.createElement(
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
        kt(Ot(r), "renderDefaultHeader", function (e) {
          var t = e.monthDate,
            a = e.i;
          return ue.default.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                r.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : "",
              ),
            },
            r.renderCurrentMonth(t),
            ue.default.createElement(
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
            ue.default.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              r.header(t),
            ),
          );
        }),
        kt(Ot(r), "renderCustomHeader", function () {
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
          var n = ma(r.state.date, r.props),
            o = Da(r.state.date, r.props),
            s = ya(r.state.date, r.props),
            l = ga(r.state.date, r.props),
            i =
              !r.props.showMonthYearPicker &&
              !r.props.showQuarterYearPicker &&
              !r.props.showYearPicker;
          return ue.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: r.props.onDropdownFocus,
            },
            r.props.renderCustomHeader(
              yt(
                yt({}, r.state),
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
              ue.default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                r.header(t),
              ),
          );
        }),
        kt(Ot(r), "renderYearHeader", function () {
          var e = r.state.date,
            t = r.props,
            a = t.showYearPicker,
            n = Ma(e, t.yearItemNumber),
            o = n.startPeriod,
            s = n.endPeriod;
          return ue.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            a ? "".concat(o, " - ").concat(s) : Re.default(e),
          );
        }),
        kt(Ot(r), "renderHeader", function (e) {
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
        kt(Ot(r), "renderMonths", function () {
          var e;
          if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
            for (
              var t = [],
                a = r.props.showPreviousMonths ? r.props.monthsShown - 1 : 0,
                n = Ce.default(r.state.date, a),
                o =
                  null !== (e = r.props.monthSelectedIn) && void 0 !== e
                    ? e
                    : a,
                s = 0;
              s < r.props.monthsShown;
              ++s
            ) {
              var l = s - o + a,
                i = ve.default(n, l),
                u = "month-".concat(s),
                d = s < r.props.monthsShown - 1,
                p = s > 0;
              t.push(
                ue.default.createElement(
                  "div",
                  {
                    key: u,
                    ref: function (e) {
                      r.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  r.renderHeader({ monthDate: i, i: s }),
                  ue.default.createElement(Ua, {
                    chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
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
                    showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      r.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      r.props.showFourColumnMonthYearPicker,
                    showYearPicker: r.props.showYearPicker,
                    showQuarterYearPicker: r.props.showQuarterYearPicker,
                    isInputFocused: r.props.isInputFocused,
                    containerRef: r.containerRef,
                    monthShowsDuplicateDaysEnd: d,
                    monthShowsDuplicateDaysStart: p,
                  }),
                ),
              );
            }
            return t;
          }
        }),
        kt(Ot(r), "renderYears", function () {
          if (!r.props.showTimeSelectOnly)
            return r.props.showYearPicker
              ? ue.default.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  r.renderHeader(),
                  ue.default.createElement(
                    $a,
                    St(
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
        kt(Ot(r), "renderTimeSection", function () {
          if (
            r.props.showTimeSelect &&
            (r.state.monthContainer || r.props.showTimeSelectOnly)
          )
            return ue.default.createElement(za, {
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
        kt(Ot(r), "renderInputTimeSection", function () {
          var e = new Date(r.props.selected),
            t =
              At(e) && Boolean(r.props.selected)
                ? "".concat(Ca(e.getHours()), ":").concat(Ca(e.getMinutes()))
                : "";
          if (r.props.showTimeInput)
            return ue.default.createElement(Ga, {
              date: e,
              timeString: t,
              timeInputLabel: r.props.timeInputLabel,
              onChange: r.props.onTimeChange,
              customTimeInput: r.props.customTimeInput,
            });
        }),
        kt(Ot(r), "renderAriaLiveRegion", function () {
          var e,
            t = Ma(r.state.date, r.props.yearItemNumber),
            a = t.startPeriod,
            n = t.endPeriod;
          return (
            (e = r.props.showYearPicker
              ? "".concat(a, " - ").concat(n)
              : r.props.showMonthYearPicker || r.props.showQuarterYearPicker
              ? Re.default(r.state.date)
              : ""
                  .concat(ta(Ye.default(r.state.date), r.props.locale), " ")
                  .concat(Re.default(r.state.date))),
            ue.default.createElement(
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
        kt(Ot(r), "renderChildren", function () {
          if (r.props.children)
            return ue.default.createElement(
              "div",
              { className: "react-datepicker__children-container" },
              r.props.children,
            );
        }),
        (r.containerRef = ue.default.createRef()),
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
      wt(
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
                (Gt(this.props.preSelection, e.preSelection) &&
                  this.props.monthSelectedIn === e.monthSelectedIn)
              )
                this.props.openToDate &&
                  !Gt(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
              else {
                var a = !zt(this.state.date, this.props.preSelection);
                this.setState({ date: this.props.preSelection }, function () {
                  return a && t.handleCustomMonthChange(t.state.date);
                });
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props.container || Ja;
              return ue.default.createElement(
                "div",
                { ref: this.containerRef },
                ue.default.createElement(
                  e,
                  {
                    className: pe.default(
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
                yearItemNumber: Rt,
              };
            },
          },
        ],
      ),
      a
    );
  })();
kt(Za, "propTypes", {
  adjustDateOnChange: de.default.bool,
  arrowProps: de.default.object,
  chooseDayAriaLabelPrefix: de.default.string,
  className: de.default.string,
  children: de.default.node,
  container: de.default.func,
  dateFormat: de.default.oneOfType([de.default.string, de.default.array])
    .isRequired,
  dayClassName: de.default.func,
  weekDayClassName: de.default.func,
  disabledDayAriaLabelPrefix: de.default.string,
  monthClassName: de.default.func,
  timeClassName: de.default.func,
  disabledKeyboardNavigation: de.default.bool,
  calendarStartDay: de.default.number,
  dropdownMode: de.default.oneOf(["scroll", "select"]),
  endDate: de.default.instanceOf(Date),
  excludeDates: de.default.array,
  excludeDateIntervals: de.default.arrayOf(
    de.default.shape({
      start: de.default.instanceOf(Date),
      end: de.default.instanceOf(Date),
    }),
  ),
  filterDate: de.default.func,
  fixedHeight: de.default.bool,
  formatWeekNumber: de.default.func,
  highlightDates: de.default.instanceOf(Map),
  holidays: de.default.instanceOf(Map),
  includeDates: de.default.array,
  includeDateIntervals: de.default.arrayOf(
    de.default.shape({
      start: de.default.instanceOf(Date),
      end: de.default.instanceOf(Date),
    }),
  ),
  includeTimes: de.default.array,
  injectTimes: de.default.array,
  inline: de.default.bool,
  shouldFocusDayInline: de.default.bool,
  locale: de.default.oneOfType([
    de.default.string,
    de.default.shape({ locale: de.default.object }),
  ]),
  maxDate: de.default.instanceOf(Date),
  minDate: de.default.instanceOf(Date),
  monthsShown: de.default.number,
  monthSelectedIn: de.default.number,
  nextMonthAriaLabel: de.default.string,
  nextYearAriaLabel: de.default.string,
  onClickOutside: de.default.func.isRequired,
  onMonthChange: de.default.func,
  onYearChange: de.default.func,
  forceShowMonthNavigation: de.default.bool,
  onDropdownFocus: de.default.func,
  onSelect: de.default.func.isRequired,
  onWeekSelect: de.default.func,
  showTimeSelect: de.default.bool,
  showTimeInput: de.default.bool,
  showMonthYearPicker: de.default.bool,
  showFullMonthYearPicker: de.default.bool,
  showTwoColumnMonthYearPicker: de.default.bool,
  showFourColumnMonthYearPicker: de.default.bool,
  showYearPicker: de.default.bool,
  showQuarterYearPicker: de.default.bool,
  showTimeSelectOnly: de.default.bool,
  timeFormat: de.default.string,
  timeIntervals: de.default.number,
  onTimeChange: de.default.func,
  timeInputLabel: de.default.string,
  minTime: de.default.instanceOf(Date),
  maxTime: de.default.instanceOf(Date),
  excludeTimes: de.default.array,
  filterTime: de.default.func,
  timeCaption: de.default.string,
  openToDate: de.default.instanceOf(Date),
  peekNextMonth: de.default.bool,
  previousMonthAriaLabel: de.default.string,
  previousYearAriaLabel: de.default.string,
  scrollableYearDropdown: de.default.bool,
  scrollableMonthYearDropdown: de.default.bool,
  preSelection: de.default.instanceOf(Date),
  selected: de.default.instanceOf(Date),
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  selectsDisabledDaysInRange: de.default.bool,
  showMonthDropdown: de.default.bool,
  showPreviousMonths: de.default.bool,
  showMonthYearDropdown: de.default.bool,
  showWeekNumbers: de.default.bool,
  showYearDropdown: de.default.bool,
  startDate: de.default.instanceOf(Date),
  todayButton: de.default.string,
  useWeekdaysShort: de.default.bool,
  formatWeekDay: de.default.func,
  withPortal: de.default.bool,
  weekLabel: de.default.string,
  yearItemNumber: de.default.number,
  yearDropdownItemNumber: de.default.number,
  setOpen: de.default.func,
  shouldCloseOnSelect: de.default.bool,
  useShortMonthInDropdown: de.default.bool,
  showDisabledMonthNavigation: de.default.bool,
  previousMonthButtonLabel: de.default.oneOfType([
    de.default.string,
    de.default.node,
  ]),
  nextMonthButtonLabel: de.default.oneOfType([
    de.default.string,
    de.default.node,
  ]),
  previousYearButtonLabel: de.default.string,
  nextYearButtonLabel: de.default.string,
  renderCustomHeader: de.default.func,
  renderDayContents: de.default.func,
  renderMonthContent: de.default.func,
  renderQuarterContent: de.default.func,
  renderYearContent: de.default.func,
  onDayMouseEnter: de.default.func,
  onMonthMouseLeave: de.default.func,
  onYearMouseEnter: de.default.func,
  onYearMouseLeave: de.default.func,
  showPopperArrow: de.default.bool,
  handleOnKeyDown: de.default.func,
  handleOnDayKeyDown: de.default.func,
  isInputFocused: de.default.bool,
  customTimeInput: de.default.element,
  weekAriaLabelPrefix: de.default.string,
  monthAriaLabelPrefix: de.default.string,
  setPreSelection: de.default.func,
});
var er = (function (e) {
  Ct(a, ue["default"].Component);
  var t = Pt(a);
  function a(e) {
    var r;
    return (
      vt(this, a), ((r = t.call(this, e)).el = document.createElement("div")), r
    );
  }
  return (
    wt(a, [
      {
        key: "componentDidMount",
        value: function () {
          (this.portalRoot = (this.props.portalHost || document).getElementById(
            this.props.portalId,
          )),
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
          return ht.default.createPortal(this.props.children, this.el);
        },
      },
    ]),
    a
  );
})();
kt(er, "propTypes", {
  children: de.default.any,
  portalId: de.default.string,
  portalHost: de.default.instanceOf(ShadowRoot),
});
var tr = []
    .concat(["top", "bottom", "right", "left"], ["auto"])
    .reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
  ar = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  rr = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a(e) {
      var r;
      return (
        vt(this, a),
        kt(Ot((r = t.call(this, e))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              r.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea",
              ),
              1,
              -1,
            )
            .filter(ar);
        }),
        kt(Ot(r), "handleFocusStart", function () {
          var e = r.getTabChildren();
          e && e.length > 1 && e[e.length - 1].focus();
        }),
        kt(Ot(r), "handleFocusEnd", function () {
          var e = r.getTabChildren();
          e && e.length > 1 && e[0].focus();
        }),
        (r.tabLoopRef = ue.default.createRef()),
        r
      );
    }
    return (
      wt(
        a,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? ue.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    ue.default.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    ue.default.createElement("div", {
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
  })();
kt(rr, "propTypes", {
  children: de.default.any,
  enableTabLoop: de.default.bool,
});
var nr = tr,
  or = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a() {
      return vt(this, a), t.apply(this, arguments);
    }
    return (
      wt(
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
                u = t.targetComponent,
                d = t.enableTabLoop,
                p = t.popperOnKeyDown,
                c = t.portalId,
                f = t.portalHost;
              if (!n) {
                var h = pe.default("react-datepicker-popper", a);
                e = ue.default.createElement(
                  se.Popper,
                  St({ modifiers: s, placement: l }, i),
                  function (e) {
                    var t = e.ref,
                      a = e.style,
                      r = e.placement,
                      n = e.arrowProps;
                    return ue.default.createElement(
                      rr,
                      { enableTabLoop: d },
                      ue.default.createElement(
                        "div",
                        {
                          ref: t,
                          style: a,
                          className: h,
                          "data-placement": r,
                          onKeyDown: p,
                        },
                        ue.default.cloneElement(o, { arrowProps: n }),
                      ),
                    );
                  },
                );
              }
              this.props.popperContainer &&
                (e = ue.default.createElement(
                  this.props.popperContainer,
                  {},
                  e,
                )),
                c &&
                  !n &&
                  (e = ue.default.createElement(
                    er,
                    { portalId: c, portalHost: f },
                    e,
                  ));
              var m = pe.default("react-datepicker-wrapper", r);
              return ue.default.createElement(
                se.Manager,
                { className: "react-datepicker-manager" },
                ue.default.createElement(se.Reference, null, function (e) {
                  var t = e.ref;
                  return ue.default.createElement(
                    "div",
                    { ref: t, className: m },
                    u,
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
  })();
kt(or, "propTypes", {
  className: de.default.string,
  wrapperClassName: de.default.string,
  hidePopper: de.default.bool,
  popperComponent: de.default.element,
  popperModifiers: de.default.arrayOf(de.default.object),
  popperPlacement: de.default.oneOf(nr),
  popperContainer: de.default.func,
  popperProps: de.default.object,
  targetComponent: de.default.element,
  enableTabLoop: de.default.bool,
  popperOnKeyDown: de.default.func,
  portalId: de.default.string,
  portalHost: de.default.instanceOf(ShadowRoot),
});
var sr = "react-datepicker-ignore-onclickoutside",
  lr = ft.default(Za);
var ir = "Date input not valid.",
  ur = (function (e) {
    Ct(a, ue["default"].Component);
    var t = Pt(a);
    function a(e) {
      var r;
      return (
        vt(this, a),
        kt(Ot((r = t.call(this, e))), "getPreSelection", function () {
          return r.props.openToDate
            ? r.props.openToDate
            : r.props.selectsEnd && r.props.startDate
            ? r.props.startDate
            : r.props.selectsStart && r.props.endDate
            ? r.props.endDate
            : Ft();
        }),
        kt(Ot(r), "calcInitialState", function () {
          var e,
            t,
            a =
              null === (e = r.props.holidays) || void 0 === e
                ? void 0
                : e.reduce(function (e, t) {
                    var a = new Date(t.date);
                    return fe.default(a)
                      ? [].concat(Nt(e), [yt(yt({}, t), {}, { date: a })])
                      : e;
                  }, []),
            n = r.getPreSelection(),
            o = va(r.props),
            s = ba(r.props),
            l =
              o && it.default(n, ze.default(o))
                ? o
                : s && lt.default(n, Ze.default(s))
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
            highlightDates: wa(r.props.highlightDates),
            holidays: ka(a),
            focused: !1,
            shouldFocusDayInline: !1,
            isRenderAriaLiveMessage: !1,
          };
        }),
        kt(Ot(r), "clearPreventFocusTimeout", function () {
          r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
        }),
        kt(Ot(r), "setFocus", function () {
          r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
        }),
        kt(Ot(r), "setBlur", function () {
          r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
        }),
        kt(Ot(r), "setOpen", function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          r.setState(
            {
              open: e,
              preSelection:
                e && r.state.open
                  ? r.state.preSelection
                  : r.calcInitialState().preSelection,
              lastPreSelectChange: pr,
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
        kt(Ot(r), "inputOk", function () {
          return ce.default(r.state.preSelection);
        }),
        kt(Ot(r), "isCalendarOpen", function () {
          return void 0 === r.props.open
            ? r.state.open && !r.props.disabled && !r.props.readOnly
            : r.props.open;
        }),
        kt(Ot(r), "handleFocus", function (e) {
          r.state.preventFocus ||
            (r.props.onFocus(e),
            r.props.preventOpenOnFocus || r.props.readOnly || r.setOpen(!0)),
            r.setState({ focused: !0 });
        }),
        kt(Ot(r), "cancelFocusInput", function () {
          clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
        }),
        kt(Ot(r), "deferFocusInput", function () {
          r.cancelFocusInput(),
            (r.inputFocusTimeout = setTimeout(function () {
              return r.setFocus();
            }, 1));
        }),
        kt(Ot(r), "handleDropdownFocus", function () {
          r.cancelFocusInput();
        }),
        kt(Ot(r), "handleBlur", function (e) {
          (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
            r.props.onBlur(e),
            r.setState({ focused: !1 });
        }),
        kt(Ot(r), "handleCalendarClickOutside", function (e) {
          r.props.inline || r.setOpen(!1),
            r.props.onClickOutside(e),
            r.props.withPortal && e.preventDefault();
        }),
        kt(Ot(r), "handleChange", function () {
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
            ((l = r.props.onChangeRaw.apply(Ot(r), n)),
            "function" == typeof s.isDefaultPrevented &&
              !s.isDefaultPrevented())
          ) {
            r.setState({
              inputValue: null !== (e = l) && void 0 !== e ? e : s.target.value,
              lastPreSelectChange: dr,
            });
            var i,
              u,
              d,
              p,
              c,
              f,
              h,
              m,
              D =
                ((i = null !== (t = l) && void 0 !== t ? t : s.target.value),
                (u = r.props.dateFormat),
                (d = r.props.locale),
                (p = r.props.strictParsing),
                (c = r.props.minDate),
                (f = null),
                (h = ea(d) || ea(Zt())),
                (m = !0),
                Array.isArray(u)
                  ? (u.forEach(function (e) {
                      var t = pt.default(i, e, new Date(), { locale: h });
                      p && (m = At(t, c) && i === qt(t, e, d)),
                        At(t, c) && m && (f = t);
                    }),
                    f)
                  : ((f = pt.default(i, u, new Date(), { locale: h })),
                    p
                      ? (m = At(f) && i === qt(f, u, d))
                      : At(f) ||
                        ((u = u
                          .match(Lt)
                          .map(function (e) {
                            var t = e[0];
                            return "p" === t || "P" === t
                              ? h
                                ? (0, It[t])(e, h.formatLong)
                                : t
                              : e;
                          })
                          .join("")),
                        i.length > 0 &&
                          (f = pt.default(i, u.slice(0, i.length), new Date())),
                        At(f) || (f = new Date(i))),
                    At(f) && m ? f : null));
            r.props.showTimeSelectOnly &&
              r.props.selected &&
              !Gt(D, r.props.selected) &&
              (D =
                null == D
                  ? mt.default(r.props.selected, {
                      hours: Ne.default(r.props.selected),
                      minutes: Pe.default(r.props.selected),
                      seconds: Oe.default(r.props.selected),
                    })
                  : mt.default(r.props.selected, {
                      hours: Ne.default(D),
                      minutes: Pe.default(D),
                      seconds: Oe.default(D),
                    })),
              (!D && s.target.value) || r.setSelected(D, s, !0);
          }
        }),
        kt(Ot(r), "handleSelect", function (e, t, a) {
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
            !o || s || it.default(e, o) || r.setOpen(!1);
          }
        }),
        kt(Ot(r), "setSelected", function (e, t, a, n) {
          var o = e;
          if (r.props.showYearPicker) {
            if (null !== o && ua(Re.default(o), r.props)) return;
          } else if (r.props.showMonthYearPicker) {
            if (null !== o && oa(o, r.props)) return;
          } else if (null !== o && ra(o, r.props)) return;
          var s = r.props,
            l = s.onChange,
            i = s.selectsRange,
            u = s.startDate,
            d = s.endDate;
          if (!Jt(r.props.selected, o) || r.props.allowSameDay || i)
            if (
              (null !== o &&
                (!r.props.selected ||
                  (a &&
                    (r.props.showTimeSelect ||
                      r.props.showTimeSelectOnly ||
                      r.props.showTimeInput)) ||
                  (o = Bt(o, {
                    hour: Ne.default(r.props.selected),
                    minute: Pe.default(r.props.selected),
                    second: Oe.default(r.props.selected),
                  })),
                r.props.inline || r.setState({ preSelection: o }),
                r.props.focusSelectedMonth ||
                  r.setState({ monthSelectedIn: n })),
              i)
            ) {
              var p = u && !d,
                c = u && d;
              !u && !d
                ? l([o, null], t)
                : p && (it.default(o, u) ? l([o, null], t) : l([u, o], t)),
                c && l([o, null], t);
            } else l(o, t);
          a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
        }),
        kt(Ot(r), "setPreSelection", function (e) {
          var t = void 0 !== r.props.minDate,
            a = void 0 !== r.props.maxDate,
            n = !0;
          if (e) {
            var o = ze.default(e);
            if (t && a) n = Xt(e, r.props.minDate, r.props.maxDate);
            else if (t) {
              var s = ze.default(r.props.minDate);
              n = lt.default(e, s) || Jt(o, s);
            } else if (a) {
              var l = Ze.default(r.props.maxDate);
              n = it.default(e, l) || Jt(o, l);
            }
          }
          n && r.setState({ preSelection: e });
        }),
        kt(Ot(r), "handleTimeChange", function (e) {
          var t = r.props.selected ? r.props.selected : r.getPreSelection(),
            a = r.props.selected
              ? e
              : Bt(t, { hour: Ne.default(e), minute: Pe.default(e) });
          r.setState({ preSelection: a }),
            r.props.onChange(a),
            r.props.shouldCloseOnSelect && r.setOpen(!1),
            r.props.showTimeInput && r.setOpen(!0),
            (r.props.showTimeSelectOnly || r.props.showTimeSelect) &&
              r.setState({ isRenderAriaLiveMessage: !0 }),
            r.setState({ inputValue: null });
        }),
        kt(Ot(r), "onInputClick", function () {
          r.props.disabled || r.props.readOnly || r.setOpen(!0),
            r.props.onInputClick();
        }),
        kt(Ot(r), "onInputKeyDown", function (e) {
          r.props.onKeyDown(e);
          var t = e.key;
          if (r.state.open || r.props.inline || r.props.preventOpenOnFocus) {
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
              var n = Ft(r.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  r.inputOk() && r.state.lastPreSelectChange === pr
                    ? (r.handleSelect(n, e),
                      !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                    : r.setOpen(!1))
                : "Escape" === t
                ? (e.preventDefault(), r.setOpen(!1))
                : "Tab" === t && r.setOpen(!1),
                r.inputOk() || r.props.onInputError({ code: 1, msg: ir });
            }
          } else
            ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) ||
              r.onInputClick();
        }),
        kt(Ot(r), "onPortalKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            r.setState({ preventFocus: !0 }, function () {
              r.setOpen(!1),
                setTimeout(function () {
                  r.setFocus(), r.setState({ preventFocus: !1 });
                });
            }));
        }),
        kt(Ot(r), "onDayKeyDown", function (e) {
          r.props.onKeyDown(e);
          var t = e.key,
            a = Ft(r.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              r.handleSelect(a, e),
              !r.props.shouldCloseOnSelect && r.setPreSelection(a);
          else if ("Escape" === t)
            e.preventDefault(),
              r.setOpen(!1),
              r.inputOk() || r.props.onInputError({ code: 1, msg: ir });
          else if (!r.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = ke.default(a, 1);
                break;
              case "ArrowRight":
                n = ye.default(a, 1);
                break;
              case "ArrowUp":
                n = Se.default(a, 1);
                break;
              case "ArrowDown":
                n = ge.default(a, 1);
                break;
              case "PageUp":
                n = Ce.default(a, 1);
                break;
              case "PageDown":
                n = ve.default(a, 1);
                break;
              case "Home":
                n = _e.default(a, 1);
                break;
              case "End":
                n = we.default(a, 1);
            }
            if (!n)
              return void (
                r.props.onInputError &&
                r.props.onInputError({ code: 1, msg: ir })
              );
            if (
              (e.preventDefault(),
              r.setState({ lastPreSelectChange: pr }),
              r.props.adjustDateOnChange && r.setSelected(n),
              r.setPreSelection(n),
              r.props.inline)
            ) {
              var o = Ye.default(a),
                s = Ye.default(n),
                l = Re.default(a),
                i = Re.default(n);
              o !== s || l !== i
                ? r.setState({ shouldFocusDayInline: !0 })
                : r.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        kt(Ot(r), "onPopperKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            r.setState({ preventFocus: !0 }, function () {
              r.setOpen(!1),
                setTimeout(function () {
                  r.setFocus(), r.setState({ preventFocus: !1 });
                });
            }));
        }),
        kt(Ot(r), "onClearClick", function (e) {
          e && e.preventDefault && e.preventDefault(),
            r.props.selectsRange
              ? r.props.onChange([null, null], e)
              : r.props.onChange(null, e),
            r.setState({ inputValue: null });
        }),
        kt(Ot(r), "clear", function () {
          r.onClearClick();
        }),
        kt(Ot(r), "onScroll", function (e) {
          "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
            ? (e.target !== document &&
                e.target !== document.documentElement &&
                e.target !== document.body) ||
              r.setOpen(!1)
            : "function" == typeof r.props.closeOnScroll &&
              r.props.closeOnScroll(e) &&
              r.setOpen(!1);
        }),
        kt(Ot(r), "renderCalendar", function () {
          return r.props.inline || r.isCalendarOpen()
            ? ue.default.createElement(
                lr,
                {
                  ref: function (e) {
                    r.calendar = e;
                  },
                  locale: r.props.locale,
                  calendarStartDay: r.props.calendarStartDay,
                  chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
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
                  forceShowMonthNavigation: r.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    r.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: r.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    r.props.scrollableMonthYearDropdown,
                  todayButton: r.props.todayButton,
                  weekLabel: r.props.weekLabel,
                  outsideClickIgnoreClass: sr,
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
                  previousMonthButtonLabel: r.props.previousMonthButtonLabel,
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
        kt(Ot(r), "renderAriaLiveRegion", function () {
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
                  Kt(r.props.selected, { dateFormat: "MMMM yyyy", locale: n }),
                )
              : r.props.showQuarterYearPicker
              ? "Selected quarter: ".concat(
                  Kt(r.props.selected, { dateFormat: "yyyy, QQQ", locale: n }),
                )
              : "Selected date: ".concat(
                  Kt(r.props.selected, { dateFormat: o, locale: n }),
                )),
            ue.default.createElement(
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
        kt(Ot(r), "renderDateInput", function () {
          var e,
            t = pe.default(r.props.className, kt({}, sr, r.state.open)),
            a =
              r.props.customInput ||
              ue.default.createElement("input", { type: "text" }),
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
          return ue.default.cloneElement(
            a,
            (kt((e = {}), n, function (e) {
              r.input = e;
            }),
            kt(e, "value", o),
            kt(e, "onBlur", r.handleBlur),
            kt(e, "onChange", r.handleChange),
            kt(e, "onClick", r.onInputClick),
            kt(e, "onFocus", r.handleFocus),
            kt(e, "onKeyDown", r.onInputKeyDown),
            kt(e, "id", r.props.id),
            kt(e, "name", r.props.name),
            kt(e, "form", r.props.form),
            kt(e, "autoFocus", r.props.autoFocus),
            kt(e, "placeholder", r.props.placeholderText),
            kt(e, "disabled", r.props.disabled),
            kt(e, "autoComplete", r.props.autoComplete),
            kt(e, "className", pe.default(a.props.className, t)),
            kt(e, "title", r.props.title),
            kt(e, "readOnly", r.props.readOnly),
            kt(e, "required", r.props.required),
            kt(e, "tabIndex", r.props.tabIndex),
            kt(e, "aria-describedby", r.props.ariaDescribedBy),
            kt(e, "aria-invalid", r.props.ariaInvalid),
            kt(e, "aria-labelledby", r.props.ariaLabelledBy),
            kt(e, "aria-required", r.props.ariaRequired),
            e),
          );
        }),
        kt(Ot(r), "renderClearButton", function () {
          var e = r.props,
            t = e.isClearable,
            a = e.selected,
            n = e.startDate,
            o = e.endDate,
            s = e.clearButtonTitle,
            l = e.clearButtonClassName,
            i = void 0 === l ? "" : l,
            u = e.ariaLabelClose,
            d = void 0 === u ? "Close" : u;
          return !t || (null == a && null == n && null == o)
            ? null
            : ue.default.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon ".concat(i).trim(),
                "aria-label": d,
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
      wt(
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
                  ? Ye.default(a) !== Ye.default(r) ||
                    Re.default(a) !== Re.default(r)
                  : a !== r) &&
                this.setPreSelection(this.props.selected),
                void 0 !== this.state.monthSelectedIn &&
                  e.monthsShown !== this.props.monthsShown &&
                  this.setState({ monthSelectedIn: 0 }),
                e.highlightDates !== this.props.highlightDates &&
                  this.setState({
                    highlightDates: wa(this.props.highlightDates),
                  }),
                t.focused ||
                  Jt(e.selected, this.props.selected) ||
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
              return ue.default.createElement(
                "div",
                {
                  className: "react-datepicker__input-container".concat(
                    e ? " react-datepicker__view-calendar-icon" : "",
                  ),
                },
                e &&
                  ue.default.createElement(
                    "svg",
                    {
                      className: "react-datepicker__calendar-icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 448 512",
                    },
                    ue.default.createElement("path", {
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
                  ? ue.default.createElement(
                      rr,
                      { enableTabLoop: this.props.enableTabLoop },
                      ue.default.createElement(
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
                    (t = ue.default.createElement(
                      er,
                      {
                        portalId: this.props.portalId,
                        portalHost: this.props.portalHost,
                      },
                      t,
                    )),
                  ue.default.createElement(
                    "div",
                    null,
                    this.renderInputContainer(),
                    t,
                  )
                );
              }
              return ue.default.createElement(or, {
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
                yearItemNumber: Rt,
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
  })();
kt(ur, "propTypes", {
  adjustDateOnChange: de.default.bool,
  allowSameDay: de.default.bool,
  ariaDescribedBy: de.default.string,
  ariaInvalid: de.default.string,
  ariaLabelClose: de.default.string,
  ariaLabelledBy: de.default.string,
  ariaRequired: de.default.string,
  autoComplete: de.default.string,
  autoFocus: de.default.bool,
  calendarClassName: de.default.string,
  calendarContainer: de.default.func,
  children: de.default.node,
  chooseDayAriaLabelPrefix: de.default.string,
  closeOnScroll: de.default.oneOfType([de.default.bool, de.default.func]),
  className: de.default.string,
  customInput: de.default.element,
  customInputRef: de.default.string,
  calendarStartDay: de.default.number,
  dateFormat: de.default.oneOfType([de.default.string, de.default.array]),
  dateFormatCalendar: de.default.string,
  dayClassName: de.default.func,
  weekDayClassName: de.default.func,
  disabledDayAriaLabelPrefix: de.default.string,
  monthClassName: de.default.func,
  timeClassName: de.default.func,
  disabled: de.default.bool,
  disabledKeyboardNavigation: de.default.bool,
  dropdownMode: de.default.oneOf(["scroll", "select"]).isRequired,
  endDate: de.default.instanceOf(Date),
  excludeDates: de.default.array,
  excludeDateIntervals: de.default.arrayOf(
    de.default.shape({
      start: de.default.instanceOf(Date),
      end: de.default.instanceOf(Date),
    }),
  ),
  filterDate: de.default.func,
  fixedHeight: de.default.bool,
  form: de.default.string,
  formatWeekNumber: de.default.func,
  highlightDates: de.default.array,
  holidays: de.default.array,
  id: de.default.string,
  includeDates: de.default.array,
  includeDateIntervals: de.default.array,
  includeTimes: de.default.array,
  injectTimes: de.default.array,
  inline: de.default.bool,
  isClearable: de.default.bool,
  showIcon: de.default.bool,
  locale: de.default.oneOfType([
    de.default.string,
    de.default.shape({ locale: de.default.object }),
  ]),
  maxDate: de.default.instanceOf(Date),
  minDate: de.default.instanceOf(Date),
  monthsShown: de.default.number,
  name: de.default.string,
  onBlur: de.default.func,
  onChange: de.default.func.isRequired,
  onSelect: de.default.func,
  onWeekSelect: de.default.func,
  onClickOutside: de.default.func,
  onChangeRaw: de.default.func,
  onFocus: de.default.func,
  onInputClick: de.default.func,
  onKeyDown: de.default.func,
  onMonthChange: de.default.func,
  onYearChange: de.default.func,
  onInputError: de.default.func,
  open: de.default.bool,
  onCalendarOpen: de.default.func,
  onCalendarClose: de.default.func,
  openToDate: de.default.instanceOf(Date),
  peekNextMonth: de.default.bool,
  placeholderText: de.default.string,
  popperContainer: de.default.func,
  popperClassName: de.default.string,
  popperModifiers: de.default.arrayOf(de.default.object),
  popperPlacement: de.default.oneOf(nr),
  popperProps: de.default.object,
  preventOpenOnFocus: de.default.bool,
  readOnly: de.default.bool,
  required: de.default.bool,
  scrollableYearDropdown: de.default.bool,
  scrollableMonthYearDropdown: de.default.bool,
  selected: de.default.instanceOf(Date),
  selectsEnd: de.default.bool,
  selectsStart: de.default.bool,
  selectsRange: de.default.bool,
  selectsDisabledDaysInRange: de.default.bool,
  showMonthDropdown: de.default.bool,
  showPreviousMonths: de.default.bool,
  showMonthYearDropdown: de.default.bool,
  showWeekNumbers: de.default.bool,
  showYearDropdown: de.default.bool,
  strictParsing: de.default.bool,
  forceShowMonthNavigation: de.default.bool,
  showDisabledMonthNavigation: de.default.bool,
  startDate: de.default.instanceOf(Date),
  startOpen: de.default.bool,
  tabIndex: de.default.number,
  timeCaption: de.default.string,
  title: de.default.string,
  todayButton: de.default.node,
  useWeekdaysShort: de.default.bool,
  formatWeekDay: de.default.func,
  value: de.default.string,
  weekLabel: de.default.string,
  withPortal: de.default.bool,
  portalId: de.default.string,
  portalHost: de.default.instanceOf(ShadowRoot),
  yearItemNumber: de.default.number,
  yearDropdownItemNumber: de.default.number,
  shouldCloseOnSelect: de.default.bool,
  showTimeInput: de.default.bool,
  showMonthYearPicker: de.default.bool,
  showFullMonthYearPicker: de.default.bool,
  showTwoColumnMonthYearPicker: de.default.bool,
  showFourColumnMonthYearPicker: de.default.bool,
  showYearPicker: de.default.bool,
  showQuarterYearPicker: de.default.bool,
  showDateSelect: de.default.bool,
  showTimeSelect: de.default.bool,
  showTimeSelectOnly: de.default.bool,
  timeFormat: de.default.string,
  timeIntervals: de.default.number,
  minTime: de.default.instanceOf(Date),
  maxTime: de.default.instanceOf(Date),
  excludeTimes: de.default.array,
  filterTime: de.default.func,
  useShortMonthInDropdown: de.default.bool,
  clearButtonTitle: de.default.string,
  clearButtonClassName: de.default.string,
  previousMonthAriaLabel: de.default.string,
  previousMonthButtonLabel: de.default.oneOfType([
    de.default.string,
    de.default.node,
  ]),
  nextMonthAriaLabel: de.default.string,
  nextMonthButtonLabel: de.default.oneOfType([
    de.default.string,
    de.default.node,
  ]),
  previousYearAriaLabel: de.default.string,
  previousYearButtonLabel: de.default.string,
  nextYearAriaLabel: de.default.string,
  nextYearButtonLabel: de.default.string,
  timeInputLabel: de.default.string,
  renderCustomHeader: de.default.func,
  renderDayContents: de.default.func,
  renderMonthContent: de.default.func,
  renderQuarterContent: de.default.func,
  renderYearContent: de.default.func,
  wrapperClassName: de.default.string,
  focusSelectedMonth: de.default.bool,
  onDayMouseEnter: de.default.func,
  onMonthMouseLeave: de.default.func,
  onYearMouseEnter: de.default.func,
  onYearMouseLeave: de.default.func,
  showPopperArrow: de.default.bool,
  excludeScrollbar: de.default.bool,
  enableTabLoop: de.default.bool,
  customTimeInput: de.default.element,
  weekAriaLabelPrefix: de.default.string,
  monthAriaLabelPrefix: de.default.string,
});
var dr = "input",
  pr = "navigate";
(exports.CalendarContainer = Ja),
  (exports.default = ur),
  (exports.getDefaultLocale = Zt),
  (exports.registerLocale = function (e, t) {
    var a = "undefined" != typeof window ? window : globalThis;
    a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function (e) {
    ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
  });
