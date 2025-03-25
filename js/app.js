(() => {
  var __webpack_modules__ = {
      448: module => {
          !function(e, t) {
              true ? module.exports = t() : 0;
          }(window, (function() {
              return function(e) {
                  var t = {};
                  function n(a) {
                      if (t[a]) return t[a].exports;
                      var r = t[a] = {
                          i: a,
                          l: !1,
                          exports: {}
                      };
                      return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                  }
                  return n.m = e, n.c = t, n.d = function(e, t, a) {
                      n.o(e, t) || Object.defineProperty(e, t, {
                          enumerable: !0,
                          get: a
                      });
                  }, n.r = function(e) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module"
                      }), Object.defineProperty(e, "__esModule", {
                          value: !0
                      });
                  }, n.t = function(e, t) {
                      if (1 & t && (e = n(e)), 8 & t) return e;
                      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                      var a = Object.create(null);
                      if (n.r(a), Object.defineProperty(a, "default", {
                          enumerable: !0,
                          value: e
                      }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
                          return e[t];
                      }.bind(null, r));
                      return a;
                  }, n.n = function(e) {
                      var t = e && e.__esModule ? function() {
                          return e.default;
                      } : function() {
                          return e;
                      };
                      return n.d(t, "a", t), t;
                  }, n.o = function(e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                  }, n.p = "", n(n.s = 0);
              }([ function(e, t, n) {
                  "use strict";
                  n.r(t);
                  var a = [], r = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], i = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], o = {
                      t: "top",
                      r: "right",
                      b: "bottom",
                      l: "left",
                      c: "centered"
                  };
                  function s() {}
                  var l = [ "click", "focusin", "keydown", "input" ];
                  function d(e) {
                      l.forEach((function(t) {
                          e.addEventListener(t, e === document ? L : Y);
                      }));
                  }
                  function c(e) {
                      return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function(t, n) {
                          return t[n] = c(e[n]), t;
                      }), {}) : e;
                  }
                  function u(e, t) {
                      var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                      t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [ h(t, e, a), f(t, e, a), v(e, a) ].join(""), 
                      a && window.requestAnimationFrame((function() {
                          M(!0, e);
                      }));
                  }
                  function h(e, t, n) {
                      return [ '<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>" ].join("");
                  }
                  function f(e, t, n) {
                      var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                      p.setMonth(p.getMonth() + 1), p.setDate(0);
                      var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                      S += (w + b) % 7 ? 7 : 0;
                      for (var M = 1; M <= S; M++) {
                          var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, O = j ? C < 1 ? -1 : 1 : 0, P = j && !l, k = P ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                          Y && !P && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), 
                          N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !P && (A += " qs-disabled"), 
                          +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), 
                          +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), 
                          P && (A += " qs-empty", k = ""), q.push('<div class="' + A + '" data-direction="' + O + '">' + k + "</div>");
                      }
                      var R = d.map((function(e) {
                          return '<div class="qs-square qs-day">' + e + "</div>";
                      })).concat(q);
                      return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), 
                      R.join("");
                  }
                  function v(e, t) {
                      var n = e.overlayPlaceholder, a = e.overlayButton;
                      return [ '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) {
                          return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                      })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>" ].join("");
                  }
                  function m(e, t, n) {
                      var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                      (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), 
                      r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), 
                      n || q(t), o && (y({
                          instance: t,
                          deselect: n
                      }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, 
                      o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                  }
                  function y(e) {
                      var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                      t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, 
                      t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                  }
                  function p(e, t, n) {
                      if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                  }
                  function w(e, t, n, a) {
                      n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 
                      12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, 
                      t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                  }
                  function D(e) {
                      if (!e.noPosition) {
                          var t = e.position.top, n = e.position.right;
                          if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                          var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                          e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                      }
                  }
                  function b(e) {
                      return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                  }
                  function g(e) {
                      if (b(e) || "number" == typeof e && !isNaN(e)) {
                          var t = new Date(+e);
                          return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                      }
                  }
                  function q(e) {
                      e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), 
                      e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                  }
                  function S(e) {
                      e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), 
                      D(e), e.onShow(e));
                  }
                  function M(e, t) {
                      var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                      e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), 
                      r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), 
                      r.focus());
                  }
                  function E(e, t, n, a) {
                      var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                      if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                  }
                  function x(e) {
                      return {}.toString.call(e);
                  }
                  function C(e) {
                      a.forEach((function(t) {
                          t !== e && q(t);
                      }));
                  }
                  function L(e) {
                      if (!e.__qs_shadow_dom) {
                          var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function(e) {
                              return e.calendar.contains(r) || e.el === r;
                          }))[0], l = s && s.calendar.contains(r);
                          if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                              if (!s) return a.forEach(q);
                              if (s.disabled) return;
                              var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                              if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                  if (o.contains("qs-disabled")) return;
                                  if (o.contains("qs-num")) {
                                      var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                      if (g) {
                                          s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], 
                                          u(s);
                                          for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L; ) {
                                              var O = Y[j];
                                              O.textContent === b && (L = O), j++;
                                          }
                                          r = L;
                                      }
                                      return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                  }
                                  o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                              }
                          } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                              var P = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                              13 === t && P && l ? E(e, r, s) : 27 === t && P && l && M(!0, s);
                          } else if ("input" === n) {
                              if (!s || !s.calendar.contains(r)) return;
                              var k = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function(e, t) {
                                  return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                              }), "").slice(0, 4);
                              r.value = N, k.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                          }
                      }
                  }
                  function Y(e) {
                      L(e), e.__qs_shadow_dom = !0;
                  }
                  function j(e, t) {
                      l.forEach((function(n) {
                          e.removeEventListener(n, t);
                      }));
                  }
                  function O() {
                      S(this);
                  }
                  function P() {
                      q(this);
                  }
                  function k(e, t) {
                      var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                      if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                          instance: this,
                          deselect: !0
                      }), u(i)), u(this), this;
                      if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                      if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                      this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), 
                      this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                          instance: this
                      }), u(i));
                      var o = a === n.getFullYear() && r === n.getMonth();
                      return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                  }
                  function N(e) {
                      return I(this, e, !0);
                  }
                  function _(e) {
                      return I(this, e);
                  }
                  function I(e, t, n) {
                      var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                      function c() {
                          return "original" + d + "Date";
                      }
                      function h() {
                          return d.toLowerCase() + "Date";
                      }
                      function f() {
                          return "set" + d;
                      }
                      function v() {
                          throw new Error("Out-of-range date passed to " + f());
                      }
                      if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, 
                      i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, 
                      i.maxDate = void 0)) : e[h()] = void 0; else {
                          if (!b(t)) throw new Error("Invalid date passed to " + f());
                          i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), 
                          e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, 
                          i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                      }
                      return i && u(i), u(e), e;
                  }
                  function A() {
                      var e = this.first ? this : this.sibling, t = e.sibling;
                      return {
                          start: e.dateSelected,
                          end: t.dateSelected
                      };
                  }
                  function R() {
                      var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                      this.inlinePosition && (a.some((function(e) {
                          return e !== i && e.positionedEl === t;
                      })) || t.style.setProperty("position", null));
                      n.remove(), a = a.filter((function(e) {
                          return e !== i;
                      })), r && delete r.sibling, a.length || j(document, L);
                      var o = a.some((function(t) {
                          return t.shadowDom === e;
                      }));
                      for (var s in e && !o && j(e, Y), this) delete this[s];
                      a.length || l.forEach((function(e) {
                          document.removeEventListener(e, L);
                      }));
                  }
                  function F(e, t) {
                      var n = new Date(e);
                      if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                      this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                  }
                  function B() {
                      var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                      e && M(t, this);
                  }
                  t.default = function(e, t) {
                      var n = function(e, t) {
                          var n, l, d = function(e) {
                              var t = c(e);
                              t.events && (t.events = t.events.reduce((function(e, t) {
                                  if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                  return e[+g(t)] = !0, e;
                              }), {}));
                              [ "startDate", "dateSelected", "minDate", "maxDate" ].forEach((function(e) {
                                  var n = t[e];
                                  if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                  t[e] = g(n);
                              }));
                              var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                              if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) {
                                  var n = +g(t);
                                  if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                  if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                  return e[n] = 1, e;
                              }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                              if (null != v) {
                                  var m = a.filter((function(e) {
                                      return e.id === v;
                                  }));
                                  if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                  m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                              }
                              var y = [ "tr", "tl", "br", "bl", "c" ].some((function(e) {
                                  return n === e;
                              }));
                              if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                              function p(e) {
                                  throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                              }
                              if (t.position = function(e) {
                                  var t = e[0], n = e[1], a = {};
                                  a[o[t]] = 1, n && (a[o[n]] = 1);
                                  return a;
                              }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                              d && (l > d && p("min"), i < d && p());
                              if ([ "onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler" ].forEach((function(e) {
                                  "function" != typeof t[e] && (t[e] = s);
                              })), [ "customDays", "customMonths", "customOverlayMonths" ].forEach((function(e, n) {
                                  var a = t[e], r = n ? 12 : 7;
                                  if (a) {
                                      if (!Array.isArray(a) || a.length !== r || a.some((function(e) {
                                          return "string" != typeof e;
                                      }))) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                      t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                  }
                              })), f && f > 0 && f < 7) {
                                  var w = (t.customDays || r).slice(), D = w.splice(0, f);
                                  t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [ w.length - 1, w.length ];
                              } else t.startDay = 0, t.weekendIndices = [ 6, 0 ];
                              "string" != typeof u && delete t.overlayPlaceholder;
                              "string" != typeof h && delete t.overlayButton;
                              var q = t.defaultView;
                              if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                              return t.defaultView = q || "calendar", t;
                          }(t || {
                              startDate: g(new Date),
                              position: "bl",
                              defaultView: "calendar"
                          }), u = e;
                          if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                              if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                              for (var h, f = u.parentNode; !h; ) {
                                  var v = x(f);
                                  "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, 
                                  n = f, l = f.host) : f = f.parentNode;
                              }
                          }
                          if (!u) throw new Error("No selector / element found.");
                          if (a.some((function(e) {
                              return e.el === u;
                          }))) throw new Error("A datepicker already exists on that element.");
                          var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                          D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                          var M = {
                              shadowDom: n,
                              customElement: l,
                              positionedEl: w,
                              el: u,
                              parent: y,
                              nonInput: "INPUT" !== u.nodeName,
                              noPosition: m,
                              position: !m && d.position,
                              startDate: d.startDate,
                              dateSelected: d.dateSelected,
                              disabledDates: d.disabledDates,
                              minDate: d.minDate,
                              maxDate: d.maxDate,
                              noWeekends: !!d.noWeekends,
                              weekendIndices: d.weekendIndices,
                              calendarContainer: D,
                              calendar: q,
                              currentMonth: (d.startDate || d.dateSelected).getMonth(),
                              currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                              currentYear: (d.startDate || d.dateSelected).getFullYear(),
                              events: d.events || {},
                              defaultView: d.defaultView,
                              setDate: k,
                              remove: R,
                              setMin: N,
                              setMax: _,
                              show: O,
                              hide: P,
                              navigate: F,
                              toggleOverlay: B,
                              onSelect: d.onSelect,
                              onShow: d.onShow,
                              onHide: d.onHide,
                              onMonthChange: d.onMonthChange,
                              formatter: d.formatter,
                              disabler: d.disabler,
                              months: d.months || i,
                              days: d.customDays || r,
                              startDay: d.startDay,
                              overlayMonths: d.overlayMonths || (d.months || i).map((function(e) {
                                  return e.slice(0, 3);
                              })),
                              overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                              overlayButton: d.overlayButton || "Submit",
                              disableYearOverlay: !!d.disableYearOverlay,
                              disableMobile: !!d.disableMobile,
                              isMobile: "ontouchstart" in window,
                              alwaysShow: !!d.alwaysShow,
                              id: d.id,
                              showAllDates: !!d.showAllDates,
                              respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                              first: d.first,
                              second: d.second
                          };
                          if (d.sibling) {
                              var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                              C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, 
                              E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, 
                              E.getRange = A, C.getRange = A;
                          }
                          d.dateSelected && p(u, M);
                          var j = getComputedStyle(w).position;
                          m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                          var I = a.filter((function(e) {
                              return e.positionedEl === M.positionedEl;
                          }));
                          I.some((function(e) {
                              return e.inlinePosition;
                          })) && (M.inlinePosition = !0, I.forEach((function(e) {
                              e.inlinePosition = !0;
                          })));
                          D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                          return M;
                      }(e, t);
                      if (a.length || d(document), n.shadowDom && (a.some((function(e) {
                          return e.shadowDom === n.shadowDom;
                      })) || d(n.shadowDom)), a.push(n), n.second) {
                          var l = n.sibling;
                          y({
                              instance: n,
                              deselect: !n.dateSelected
                          }), y({
                              instance: l,
                              deselect: !l.dateSelected
                          }), u(l);
                      }
                      return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                  };
              } ]).default;
          }));
      }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== void 0) return cachedModule.exports;
      var module = __webpack_module_cache__[moduleId] = {
          exports: {}
      };
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      return module.exports;
  }
  (() => {
      "use strict";
      const modules_flsModules = {};
      function isWebp() {
          function testWebP(callback) {
              let webP = new Image;
              webP.onload = webP.onerror = function() {
                  callback(webP.height == 2);
              };
              webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
          }
          testWebP((function(support) {
              let className = support === true ? "webp" : "no-webp";
              document.documentElement.classList.add(className);
          }));
      }
      let isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
              return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
          }
      };
      function addTouchClass() {
          if (isMobile.any()) document.documentElement.classList.add("touch");
      }
      function addLoadedClass() {
          if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
              setTimeout((function() {
                  document.documentElement.classList.add("loaded");
              }), 0);
          }));
      }
      function getHash() {
          if (location.hash) return location.hash.replace("#", "");
      }
      function setHash(hash) {
          hash = hash ? `#${hash}` : window.location.href.split("#")[0];
          history.pushState("", "", hash);
      }
      let _slideUp = (target, duration = 500, showmore = 0) => {
          if (!target.classList.contains("_slide")) {
              target.classList.add("_slide");
              target.style.transitionProperty = "height, margin, padding";
              target.style.transitionDuration = duration + "ms";
              target.style.height = `${target.offsetHeight}px`;
              target.offsetHeight;
              target.style.overflow = "hidden";
              target.style.height = showmore ? `${showmore}px` : `0px`;
              target.style.paddingTop = 0;
              target.style.paddingBottom = 0;
              target.style.marginTop = 0;
              target.style.marginBottom = 0;
              window.setTimeout((() => {
                  target.hidden = !showmore ? true : false;
                  !showmore ? target.style.removeProperty("height") : null;
                  target.style.removeProperty("padding-top");
                  target.style.removeProperty("padding-bottom");
                  target.style.removeProperty("margin-top");
                  target.style.removeProperty("margin-bottom");
                  !showmore ? target.style.removeProperty("overflow") : null;
                  target.style.removeProperty("transition-duration");
                  target.style.removeProperty("transition-property");
                  target.classList.remove("_slide");
                  document.dispatchEvent(new CustomEvent("slideUpDone", {
                      detail: {
                          target
                      }
                  }));
              }), duration);
          }
      };
      let _slideDown = (target, duration = 500, showmore = 0) => {
          if (!target.classList.contains("_slide")) {
              target.classList.add("_slide");
              target.hidden = target.hidden ? false : null;
              showmore ? target.style.removeProperty("height") : null;
              let height = target.offsetHeight;
              target.style.overflow = "hidden";
              target.style.height = showmore ? `${showmore}px` : `0px`;
              target.style.paddingTop = 0;
              target.style.paddingBottom = 0;
              target.style.marginTop = 0;
              target.style.marginBottom = 0;
              target.offsetHeight;
              target.style.transitionProperty = "height, margin, padding";
              target.style.transitionDuration = duration + "ms";
              target.style.height = height + "px";
              target.style.removeProperty("padding-top");
              target.style.removeProperty("padding-bottom");
              target.style.removeProperty("margin-top");
              target.style.removeProperty("margin-bottom");
              window.setTimeout((() => {
                  target.style.removeProperty("height");
                  target.style.removeProperty("overflow");
                  target.style.removeProperty("transition-duration");
                  target.style.removeProperty("transition-property");
                  target.classList.remove("_slide");
                  document.dispatchEvent(new CustomEvent("slideDownDone", {
                      detail: {
                          target
                      }
                  }));
              }), duration);
          }
      };
      let _slideToggle = (target, duration = 500) => {
          if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
      };
      let bodyLockStatus = true;
      let bodyLockToggle = (delay = 500) => {
          if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
      };
      let bodyUnlock = (delay = 500) => {
          let body = document.querySelector("body");
          if (bodyLockStatus) {
              let lock_padding = document.querySelectorAll("[data-lp]");
              setTimeout((() => {
                  for (let index = 0; index < lock_padding.length; index++) {
                      const el = lock_padding[index];
                      el.style.paddingRight = "0px";
                  }
                  body.style.paddingRight = "0px";
                  document.documentElement.classList.remove("lock");
              }), delay);
              bodyLockStatus = false;
              setTimeout((function() {
                  bodyLockStatus = true;
              }), delay);
          }
      };
      let bodyLock = (delay = 500) => {
          let body = document.querySelector("body");
          if (bodyLockStatus) {
              let lock_padding = document.querySelectorAll("[data-lp]");
              for (let index = 0; index < lock_padding.length; index++) {
                  const el = lock_padding[index];
                  el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
              }
              body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
              document.documentElement.classList.add("lock");
              bodyLockStatus = false;
              setTimeout((function() {
                  bodyLockStatus = true;
              }), delay);
          }
      };
      function spollers() {
          const spollersArray = document.querySelectorAll("[data-spollers]");
          if (spollersArray.length > 0) {
              document.addEventListener("click", setSpollerAction);
              const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                  return !item.dataset.spollers.split(",")[0];
              }));
              if (spollersRegular.length) initSpollers(spollersRegular);
              let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
              if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                  mdQueriesItem.matchMedia.addEventListener("change", (function() {
                      initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                  }));
                  initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
              }));
              function initSpollers(spollersArray, matchMedia = false) {
                  spollersArray.forEach((spollersBlock => {
                      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                      if (matchMedia.matches || !matchMedia) {
                          spollersBlock.classList.add("_spoller-init");
                          initSpollerBody(spollersBlock);
                      } else {
                          spollersBlock.classList.remove("_spoller-init");
                          initSpollerBody(spollersBlock, false);
                      }
                  }));
              }
              function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                  let spollerItems = spollersBlock.querySelectorAll("details");
                  if (spollerItems.length) spollerItems.forEach((spollerItem => {
                      let spollerTitle = spollerItem.querySelector("summary");
                      if (hideSpollerBody) {
                          spollerTitle.removeAttribute("tabindex");
                          if (!spollerItem.hasAttribute("data-open")) {
                              spollerItem.open = false;
                              spollerTitle.nextElementSibling.hidden = true;
                          } else {
                              spollerTitle.classList.add("_spoller-active");
                              spollerItem.open = true;
                          }
                      } else {
                          spollerTitle.setAttribute("tabindex", "-1");
                          spollerTitle.classList.remove("_spoller-active");
                          spollerItem.open = true;
                          spollerTitle.nextElementSibling.hidden = false;
                      }
                  }));
              }
              function setSpollerAction(e) {
                  const el = e.target;
                  if (el.closest("summary") && el.closest("[data-spollers]")) {
                      e.preventDefault();
                      if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                          const spollerTitle = el.closest("summary");
                          const spollerBlock = spollerTitle.closest("details");
                          const spollersBlock = spollerTitle.closest("[data-spollers]");
                          const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                          const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                          const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                          if (!spollersBlock.querySelectorAll("._slide").length) {
                              if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                              !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                  spollerBlock.open = false;
                              }), spollerSpeed);
                              spollerTitle.classList.toggle("_spoller-active");
                              _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                              if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                  const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                  const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                  const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                  window.scrollTo({
                                      top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                      behavior: "smooth"
                                  });
                              }
                          }
                      }
                  }
                  if (!el.closest("[data-spollers]")) {
                      const spollersClose = document.querySelectorAll("[data-spoller-close]");
                      if (spollersClose.length) spollersClose.forEach((spollerClose => {
                          const spollersBlock = spollerClose.closest("[data-spollers]");
                          const spollerCloseBlock = spollerClose.parentNode;
                          if (spollersBlock.classList.contains("_spoller-init")) {
                              const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                              spollerClose.classList.remove("_spoller-active");
                              _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                              setTimeout((() => {
                                  spollerCloseBlock.open = false;
                              }), spollerSpeed);
                          }
                      }));
                  }
              }
              function hideSpollersBody(spollersBlock) {
                  const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                  if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                      const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                      const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                      spollerActiveTitle.classList.remove("_spoller-active");
                      _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                      setTimeout((() => {
                          spollerActiveBlock.open = false;
                      }), spollerSpeed);
                  }
              }
          }
      }
      function tabs() {
          const tabs = document.querySelectorAll("[data-tabs]");
          let tabsActiveHash = [];
          if (tabs.length > 0) {
              const hash = getHash();
              if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
              tabs.forEach(((tabsBlock, index) => {
                  tabsBlock.classList.add("_tab-init");
                  tabsBlock.setAttribute("data-tabs-index", index);
                  tabsBlock.addEventListener("click", setTabsAction);
                  initTabs(tabsBlock);
              }));
              let mdQueriesArray = dataMediaQueries(tabs, "tabs");
              if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                  mdQueriesItem.matchMedia.addEventListener("change", (function() {
                      setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                  }));
                  setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
              }));
          }
          function setTitlePosition(tabsMediaArray, matchMedia) {
              tabsMediaArray.forEach((tabsMediaItem => {
                  tabsMediaItem = tabsMediaItem.item;
                  let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                  let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                  let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                  let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                  tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                  tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                  tabsContentItems.forEach(((tabsContentItem, index) => {
                      if (matchMedia.matches) {
                          tabsContent.append(tabsTitleItems[index]);
                          tabsContent.append(tabsContentItem);
                          tabsMediaItem.classList.add("_tab-spoller");
                      } else {
                          tabsTitles.append(tabsTitleItems[index]);
                          tabsMediaItem.classList.remove("_tab-spoller");
                      }
                  }));
              }));
          }
          function initTabs(tabsBlock) {
              let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
              let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
              const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
              const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
              if (tabsActiveHashBlock) {
                  const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                  tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
              }
              if (tabsContent.length) tabsContent.forEach(((tabsContentItem, index) => {
                  tabsTitles[index].setAttribute("data-tabs-title", "");
                  tabsContentItem.setAttribute("data-tabs-item", "");
                  if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                  tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
              }));
          }
          function setTabsStatus(tabsBlock) {
              let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
              let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
              const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
              function isTabsAnamate(tabsBlock) {
                  if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
              }
              const tabsBlockAnimate = isTabsAnamate(tabsBlock);
              if (tabsContent.length > 0) {
                  const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                  tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                  tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                  tabsContent.forEach(((tabsContentItem, index) => {
                      if (tabsTitles[index].classList.contains("_tab-active")) {
                          if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                          if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                      } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                  }));
              }
          }
          function setTabsAction(e) {
              const el = e.target;
              if (el.closest("[data-tabs-title]")) {
                  const tabTitle = el.closest("[data-tabs-title]");
                  const tabsBlock = tabTitle.closest("[data-tabs]");
                  if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                      let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                      tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                      tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                      tabTitle.classList.add("_tab-active");
                      setTabsStatus(tabsBlock);
                  }
                  e.preventDefault();
              }
          }
      }
      function menuInit() {
          if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
              if (bodyLockStatus && e.target.closest(".icon-menu")) {
                  bodyLockToggle();
                  document.documentElement.classList.toggle("menu-open");
              }
          }));
      }
      function menuClose() {
          bodyUnlock();
          document.documentElement.classList.remove("menu-open");
      }
      function showMore() {
          window.addEventListener("load", (function(e) {
              const showMoreBlocks = document.querySelectorAll("[data-showmore]");
              let showMoreBlocksRegular;
              let mdQueriesArray;
              if (showMoreBlocks.length) {
                  showMoreBlocksRegular = Array.from(showMoreBlocks).filter((function(item, index, self) {
                      return !item.dataset.showmoreMedia;
                  }));
                  showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                  document.addEventListener("click", showMoreActions);
                  window.addEventListener("resize", showMoreActions);
                  mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
                  if (mdQueriesArray && mdQueriesArray.length) {
                      mdQueriesArray.forEach((mdQueriesItem => {
                          mdQueriesItem.matchMedia.addEventListener("change", (function() {
                              initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                          }));
                      }));
                      initItemsMedia(mdQueriesArray);
                  }
              }
              function initItemsMedia(mdQueriesArray) {
                  mdQueriesArray.forEach((mdQueriesItem => {
                      initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                  }));
              }
              function initItems(showMoreBlocks, matchMedia) {
                  showMoreBlocks.forEach((showMoreBlock => {
                      initItem(showMoreBlock, matchMedia);
                  }));
              }
              function initItem(showMoreBlock, matchMedia = false) {
                  showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
                  let showMoreContent = showMoreBlock.querySelectorAll("[data-showmore-content]");
                  let showMoreButton = showMoreBlock.querySelectorAll("[data-showmore-button]");
                  showMoreContent = Array.from(showMoreContent).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                  showMoreButton = Array.from(showMoreButton).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                  const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                  if (matchMedia.matches || !matchMedia) if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                      _slideUp(showMoreContent, 0, showMoreBlock.classList.contains("_showmore-active") ? getOriginalHeight(showMoreContent) : hiddenHeight);
                      showMoreButton.hidden = false;
                  } else {
                      _slideDown(showMoreContent, 0, hiddenHeight);
                      showMoreButton.hidden = true;
                  } else {
                      _slideDown(showMoreContent, 0, hiddenHeight);
                      showMoreButton.hidden = true;
                  }
              }
              function getHeight(showMoreBlock, showMoreContent) {
                  let hiddenHeight = 0;
                  const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : "size";
                  const rowGap = parseFloat(getComputedStyle(showMoreContent).rowGap) ? parseFloat(getComputedStyle(showMoreContent).rowGap) : 0;
                  if (showMoreType === "items") {
                      const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
                      const showMoreItems = showMoreContent.children;
                      for (let index = 1; index < showMoreItems.length; index++) {
                          const showMoreItem = showMoreItems[index - 1];
                          const marginTop = parseFloat(getComputedStyle(showMoreItem).marginTop) ? parseFloat(getComputedStyle(showMoreItem).marginTop) : 0;
                          const marginBottom = parseFloat(getComputedStyle(showMoreItem).marginBottom) ? parseFloat(getComputedStyle(showMoreItem).marginBottom) : 0;
                          hiddenHeight += showMoreItem.offsetHeight + marginTop;
                          if (index == showMoreTypeValue) break;
                          hiddenHeight += marginBottom;
                      }
                      rowGap ? hiddenHeight += (showMoreTypeValue - 1) * rowGap : null;
                  } else {
                      const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
                      hiddenHeight = showMoreTypeValue;
                  }
                  return hiddenHeight;
              }
              function getOriginalHeight(showMoreContent) {
                  let parentHidden;
                  let hiddenHeight = showMoreContent.offsetHeight;
                  showMoreContent.style.removeProperty("height");
                  if (showMoreContent.closest(`[hidden]`)) {
                      parentHidden = showMoreContent.closest(`[hidden]`);
                      parentHidden.hidden = false;
                  }
                  let originalHeight = showMoreContent.offsetHeight;
                  parentHidden ? parentHidden.hidden = true : null;
                  showMoreContent.style.height = `${hiddenHeight}px`;
                  return originalHeight;
              }
              function showMoreActions(e) {
                  const targetEvent = e.target;
                  const targetType = e.type;
                  if (targetType === "click") {
                      if (targetEvent.closest("[data-showmore-button]")) {
                          const showMoreButton = targetEvent.closest("[data-showmore-button]");
                          const showMoreBlock = showMoreButton.closest("[data-showmore]");
                          const showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                          const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : "500";
                          const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                          if (!showMoreContent.classList.contains("_slide")) {
                              showMoreBlock.classList.contains("_showmore-active") ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                              showMoreBlock.classList.toggle("_showmore-active");
                          }
                      }
                  } else if (targetType === "resize") {
                      showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                      mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
                  }
              }
          }));
      }
      function functions_FLS(message) {
          setTimeout((() => {
              if (window.FLS) console.log(message);
          }), 0);
      }
      function uniqArray(array) {
          return array.filter((function(item, index, self) {
              return self.indexOf(item) === index;
          }));
      }
      function dataMediaQueries(array, dataSetValue) {
          const media = Array.from(array).filter((function(item, index, self) {
              if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
          }));
          if (media.length) {
              const breakpointsArray = [];
              media.forEach((item => {
                  const params = item.dataset[dataSetValue];
                  const breakpoint = {};
                  const paramsArray = params.split(",");
                  breakpoint.value = paramsArray[0];
                  breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                  breakpoint.item = item;
                  breakpointsArray.push(breakpoint);
              }));
              let mdQueries = breakpointsArray.map((function(item) {
                  return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
              }));
              mdQueries = uniqArray(mdQueries);
              const mdQueriesArray = [];
              if (mdQueries.length) {
                  mdQueries.forEach((breakpoint => {
                      const paramsArray = breakpoint.split(",");
                      const mediaBreakpoint = paramsArray[1];
                      const mediaType = paramsArray[2];
                      const matchMedia = window.matchMedia(paramsArray[0]);
                      const itemsArray = breakpointsArray.filter((function(item) {
                          if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                      }));
                      mdQueriesArray.push({
                          itemsArray,
                          matchMedia
                      });
                  }));
                  return mdQueriesArray;
              }
          }
      }
      !function(e) {
          "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e();
      }((function() {
          "use strict";
          var o = [ "decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo" ];
          function w(e) {
              return e.split("").reverse().join("");
          }
          function h(e, t) {
              return e.substring(0, t.length) === t;
          }
          function f(e, t, n) {
              if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
          }
          function x(e) {
              return "number" == typeof e && isFinite(e);
          }
          function n(e, t, n, r, i, o, f, u, s, c, a, p) {
              var d, l, h, g = p, v = "", m = "";
              return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), 
              p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function(e, t) {
                  return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t);
              }(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, 
              t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), 
              d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m);
          }
          function r(e, t, n, r, i, o, f, u, s, c, a, p) {
              var d, l = "";
              return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), 
              d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), 
              d = !0), i && function(e, t) {
                  return e.slice(-1 * t.length) === t;
              }(p, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), 
              d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), 
              f && (l = f(l)), !!x(l) && l));
          }
          function i(e, t, n) {
              var r, i = [];
              for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
              return i.push(n), t.apply("", i);
          }
          return function e(t) {
              if (!(this instanceof e)) return new e(t);
              "object" == typeof t && (t = function(e) {
                  var t, n, r, i = {};
                  for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1) if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) {
                      if (!(0 <= r && r < 8)) throw new Error(n);
                      i[n] = r;
                  } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                      if ("function" != typeof r) throw new Error(n);
                      i[n] = r;
                  } else {
                      if ("string" != typeof r) throw new Error(n);
                      i[n] = r;
                  }
                  return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), 
                  i;
              }(t), this.to = function(e) {
                  return i(t, n, e);
              }, this.from = function(e) {
                  return i(t, r, e);
              });
          };
      }));
      class Popup {
          constructor(options) {
              let config = {
                  logging: true,
                  init: true,
                  attributeOpenButton: "data-popup",
                  attributeCloseButton: "data-close",
                  fixElementSelector: "[data-lp]",
                  youtubeAttribute: "data-popup-youtube",
                  youtubePlaceAttribute: "data-popup-youtube-place",
                  setAutoplayYoutube: true,
                  classes: {
                      popup: "popup",
                      popupContent: "popup__content",
                      popupActive: "popup_show",
                      bodyActive: "popup-show"
                  },
                  focusCatch: true,
                  closeEsc: true,
                  bodyLock: true,
                  hashSettings: {
                      location: true,
                      goHash: true
                  },
                  on: {
                      beforeOpen: function() {},
                      afterOpen: function() {},
                      beforeClose: function() {},
                      afterClose: function() {}
                  }
              };
              this.youTubeCode;
              this.isOpen = false;
              this.targetOpen = {
                  selector: false,
                  element: false
              };
              this.previousOpen = {
                  selector: false,
                  element: false
              };
              this.lastClosed = {
                  selector: false,
                  element: false
              };
              this._dataValue = false;
              this.hash = false;
              this._reopen = false;
              this._selectorOpen = false;
              this.lastFocusEl = false;
              this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
              this.options = {
                  ...config,
                  ...options,
                  classes: {
                      ...config.classes,
                      ...options?.classes
                  },
                  hashSettings: {
                      ...config.hashSettings,
                      ...options?.hashSettings
                  },
                  on: {
                      ...config.on,
                      ...options?.on
                  }
              };
              this.bodyLock = false;
              this.options.init ? this.initPopups() : null;
          }
          initPopups() {
              this.popupLogging(`Прокинувся`);
              this.eventsPopup();
          }
          eventsPopup() {
              document.addEventListener("click", function(e) {
                  const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                  if (buttonOpen) {
                      e.preventDefault();
                      this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                      this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                      if (this._dataValue !== "error") {
                          if (!this.isOpen) this.lastFocusEl = buttonOpen;
                          this.targetOpen.selector = `${this._dataValue}`;
                          this._selectorOpen = true;
                          this.open();
                          return;
                      } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                      return;
                  }
                  const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                  if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                      e.preventDefault();
                      this.close();
                      return;
                  }
              }.bind(this));
              document.addEventListener("keydown", function(e) {
                  if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                      e.preventDefault();
                      this.close();
                      return;
                  }
                  if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                      this._focusCatch(e);
                      return;
                  }
              }.bind(this));
              if (this.options.hashSettings.goHash) {
                  window.addEventListener("hashchange", function() {
                      if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                  }.bind(this));
                  window.addEventListener("load", function() {
                      if (window.location.hash) this._openToHash();
                  }.bind(this));
              }
          }
          open(selectorValue) {
              if (bodyLockStatus) {
                  this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                  if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                      this.targetOpen.selector = selectorValue;
                      this._selectorOpen = true;
                  }
                  if (this.isOpen) {
                      this._reopen = true;
                      this.close();
                  }
                  if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                  if (!this._reopen) this.previousActiveElement = document.activeElement;
                  this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                  if (this.targetOpen.element) {
                      if (this.youTubeCode) {
                          const codeVideo = this.youTubeCode;
                          const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                          const iframe = document.createElement("iframe");
                          iframe.setAttribute("allowfullscreen", "");
                          const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                          iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                          iframe.setAttribute("src", urlVideo);
                          if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                              this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                          }
                          this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                      }
                      if (this.options.hashSettings.location) {
                          this._getHash();
                          this._setHash();
                      }
                      this.options.on.beforeOpen(this);
                      document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                          detail: {
                              popup: this
                          }
                      }));
                      this.targetOpen.element.classList.add(this.options.classes.popupActive);
                      document.documentElement.classList.add(this.options.classes.bodyActive);
                      if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                      this.targetOpen.element.setAttribute("aria-hidden", "false");
                      this.previousOpen.selector = this.targetOpen.selector;
                      this.previousOpen.element = this.targetOpen.element;
                      this._selectorOpen = false;
                      this.isOpen = true;
                      setTimeout((() => {
                          this._focusTrap();
                      }), 50);
                      this.options.on.afterOpen(this);
                      document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                          detail: {
                              popup: this
                          }
                      }));
                      this.popupLogging(`Відкрив попап`);
                  } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
              }
          }
          close(selectorValue) {
              if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
              if (!this.isOpen || !bodyLockStatus) return;
              this.options.on.beforeClose(this);
              document.dispatchEvent(new CustomEvent("beforePopupClose", {
                  detail: {
                      popup: this
                  }
              }));
              if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
              this.previousOpen.element.classList.remove(this.options.classes.popupActive);
              this.previousOpen.element.setAttribute("aria-hidden", "true");
              if (!this._reopen) {
                  document.documentElement.classList.remove(this.options.classes.bodyActive);
                  !this.bodyLock ? bodyUnlock() : null;
                  this.isOpen = false;
              }
              this._removeHash();
              if (this._selectorOpen) {
                  this.lastClosed.selector = this.previousOpen.selector;
                  this.lastClosed.element = this.previousOpen.element;
              }
              this.options.on.afterClose(this);
              document.dispatchEvent(new CustomEvent("afterPopupClose", {
                  detail: {
                      popup: this
                  }
              }));
              setTimeout((() => {
                  this._focusTrap();
              }), 50);
              this.popupLogging(`Закрив попап`);
          }
          _getHash() {
              if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
          }
          _openToHash() {
              let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
              const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
              this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
              if (buttons && classInHash) this.open(classInHash);
          }
          _setHash() {
              history.pushState("", "", this.hash);
          }
          _removeHash() {
              history.pushState("", "", window.location.href.split("#")[0]);
          }
          _focusCatch(e) {
              const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
              const focusArray = Array.prototype.slice.call(focusable);
              const focusedIndex = focusArray.indexOf(document.activeElement);
              if (e.shiftKey && focusedIndex === 0) {
                  focusArray[focusArray.length - 1].focus();
                  e.preventDefault();
              }
              if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                  focusArray[0].focus();
                  e.preventDefault();
              }
          }
          _focusTrap() {
              const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
              if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
          }
          popupLogging(message) {
              this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
          }
      }
      modules_flsModules.popup = new Popup({});
      let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
          const targetBlockElement = document.querySelector(targetBlock);
          if (targetBlockElement) {
              let headerItem = "";
              let headerItemHeight = 0;
              if (noHeader) {
                  headerItem = "header.header";
                  const headerElement = document.querySelector(headerItem);
                  if (!headerElement.classList.contains("_header-scroll")) {
                      headerElement.style.cssText = `transition-duration: 0s;`;
                      headerElement.classList.add("_header-scroll");
                      headerItemHeight = headerElement.offsetHeight;
                      headerElement.classList.remove("_header-scroll");
                      setTimeout((() => {
                          headerElement.style.cssText = ``;
                      }), 0);
                  } else headerItemHeight = headerElement.offsetHeight;
              }
              let options = {
                  speedAsDuration: true,
                  speed,
                  header: headerItem,
                  offset: offsetTop,
                  easing: "easeOutQuad"
              };
              document.documentElement.classList.contains("menu-open") ? menuClose() : null;
              if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                  let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                  targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                  targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                  window.scrollTo({
                      top: targetBlockElementPosition,
                      behavior: "smooth"
                  });
              }
              functions_FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
          } else functions_FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
      };
      let formValidate = {
          getErrors(form) {
              let error = 0;
              let formRequiredItems = form.querySelectorAll("*[data-required]");
              if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                  if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
              }));
              return error;
          },
          validateInput(formRequiredItem) {
              let error = 0;
              if (formRequiredItem.dataset.required === "email") {
                  formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                  if (this.emailTest(formRequiredItem)) {
                      this.addError(formRequiredItem);
                      error++;
                  } else this.removeError(formRequiredItem);
              } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                  this.addError(formRequiredItem);
                  error++;
              } else if (!formRequiredItem.value.trim()) {
                  this.addError(formRequiredItem);
                  error++;
              } else this.removeError(formRequiredItem);
              return error;
          },
          addError(formRequiredItem) {
              formRequiredItem.classList.add("_form-error");
              formRequiredItem.parentElement.classList.add("_form-error");
              let inputError = formRequiredItem.parentElement.querySelector(".form__error");
              if (inputError) formRequiredItem.parentElement.removeChild(inputError);
              if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
          },
          removeError(formRequiredItem) {
              formRequiredItem.classList.remove("_form-error");
              formRequiredItem.parentElement.classList.remove("_form-error");
              if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
          },
          formClean(form) {
              form.reset();
              setTimeout((() => {
                  let inputs = form.querySelectorAll("input,textarea");
                  for (let index = 0; index < inputs.length; index++) {
                      const el = inputs[index];
                      el.parentElement.classList.remove("_form-focus");
                      el.classList.remove("_form-focus");
                      formValidate.removeError(el);
                  }
                  let checkboxes = form.querySelectorAll(".checkbox__input");
                  if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                      const checkbox = checkboxes[index];
                      checkbox.checked = false;
                  }
                  if (modules_flsModules.select) {
                      let selects = form.querySelectorAll(".select");
                      if (selects.length) for (let index = 0; index < selects.length; index++) {
                          const select = selects[index].querySelector("select");
                          modules_flsModules.select.selectBuild(select);
                      }
                  }
              }), 0);
          },
          emailTest(formRequiredItem) {
              return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
          }
      };
      function formRating() {
          const ratings = document.querySelectorAll(".rating");
          if (ratings.length > 0) initRatings();
          function initRatings() {
              let ratingActive, ratingValue;
              for (let index = 0; index < ratings.length; index++) {
                  const rating = ratings[index];
                  initRating(rating);
              }
              function initRating(rating) {
                  initRatingVars(rating);
                  setRatingActiveWidth();
                  if (rating.classList.contains("rating_set")) setRating(rating);
              }
              function initRatingVars(rating) {
                  ratingActive = rating.querySelector(".rating__active");
                  ratingValue = rating.querySelector(".rating__value");
              }
              function setRatingActiveWidth(index = ratingValue.value) {
                  const ratingActiveWidth = index / .05;
                  ratingActive.style.width = `${ratingActiveWidth}%`;
              }
              function setRating(rating) {
                  const ratingItems = rating.querySelectorAll(".rating__item");
                  for (let index = 0; index < ratingItems.length; index++) {
                      const ratingItem = ratingItems[index];
                      ratingItem.addEventListener("mouseenter", (function(e) {
                          initRatingVars(rating);
                          setRatingActiveWidth(ratingItem.value);
                      }));
                      ratingItem.addEventListener("mouseleave", (function(e) {
                          setRatingActiveWidth();
                      }));
                      ratingItem.addEventListener("click", (function(e) {
                          initRatingVars(rating);
                          if (rating.dataset.ajax) setRatingValue(ratingItem.value, rating); else {
                              ratingValue.value = index + 1;
                              setRatingActiveWidth();
                          }
                      }));
                  }
              }
              async function setRatingValue(value, rating) {
                  if (!rating.classList.contains("rating_sending")) {
                      rating.classList.add("rating_sending");
                      let response = await fetch("rating.json", {
                          method: "GET"
                      });
                      if (response.ok) {
                          const result = await response.json();
                          const newRating = result.newRating;
                          ratingValue.value = newRating;
                          setRatingActiveWidth();
                          rating.classList.remove("rating_sending");
                      } else {
                          alert("Помилка");
                          rating.classList.remove("rating_sending");
                      }
                  }
              }
          }
      }
      class SelectConstructor {
          constructor(props, data = null) {
              let defaultConfig = {
                  init: true,
                  logging: true,
                  speed: 150
              };
              this.config = Object.assign(defaultConfig, props);
              this.selectClasses = {
                  classSelect: "select",
                  classSelectBody: "select__body",
                  classSelectTitle: "select__title",
                  classSelectValue: "select__value",
                  classSelectLabel: "select__label",
                  classSelectInput: "select__input",
                  classSelectText: "select__text",
                  classSelectLink: "select__link",
                  classSelectOptions: "select__options",
                  classSelectOptionsScroll: "select__scroll",
                  classSelectOption: "select__option",
                  classSelectContent: "select__content",
                  classSelectRow: "select__row",
                  classSelectData: "select__asset",
                  classSelectDisabled: "_select-disabled",
                  classSelectTag: "_select-tag",
                  classSelectOpen: "_select-open",
                  classSelectActive: "_select-active",
                  classSelectFocus: "_select-focus",
                  classSelectMultiple: "_select-multiple",
                  classSelectCheckBox: "_select-checkbox",
                  classSelectOptionSelected: "_select-selected",
                  classSelectPseudoLabel: "_select-pseudo-label"
              };
              this._this = this;
              if (this.config.init) {
                  const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                  if (selectItems.length) {
                      this.selectsInit(selectItems);
                      this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                  } else this.setLogging("Сплю, немає жодного select");
              }
          }
          getSelectClass(className) {
              return `.${className}`;
          }
          getSelectElement(selectItem, className) {
              return {
                  originalSelect: selectItem.querySelector("select"),
                  selectElement: selectItem.querySelector(this.getSelectClass(className))
              };
          }
          selectsInit(selectItems) {
              selectItems.forEach(((originalSelect, index) => {
                  this.selectInit(originalSelect, index + 1);
              }));
              document.addEventListener("click", function(e) {
                  this.selectsActions(e);
              }.bind(this));
              document.addEventListener("keydown", function(e) {
                  this.selectsActions(e);
              }.bind(this));
              document.addEventListener("focusin", function(e) {
                  this.selectsActions(e);
              }.bind(this));
              document.addEventListener("focusout", function(e) {
                  this.selectsActions(e);
              }.bind(this));
          }
          selectInit(originalSelect, index) {
              const _this = this;
              let selectItem = document.createElement("div");
              selectItem.classList.add(this.selectClasses.classSelect);
              originalSelect.parentNode.insertBefore(selectItem, originalSelect);
              selectItem.appendChild(originalSelect);
              originalSelect.hidden = true;
              index ? originalSelect.dataset.id = index : null;
              if (this.getSelectPlaceholder(originalSelect)) {
                  originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                  if (this.getSelectPlaceholder(originalSelect).label.show) {
                      const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                      selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                  }
              }
              selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
              this.selectBuild(originalSelect);
              originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
              this.config.speed = +originalSelect.dataset.speed;
              originalSelect.addEventListener("change", (function(e) {
                  _this.selectChange(e);
              }));
          }
          selectBuild(originalSelect) {
              const selectItem = originalSelect.parentElement;
              selectItem.dataset.id = originalSelect.dataset.id;
              originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
              originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
              originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
              this.setSelectTitleValue(selectItem, originalSelect);
              this.setOptions(selectItem, originalSelect);
              originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
              originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
              this.selectDisabled(selectItem, originalSelect);
          }
          selectsActions(e) {
              const targetElement = e.target;
              const targetType = e.type;
              if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                  const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                  const originalSelect = this.getSelectElement(selectItem).originalSelect;
                  if (targetType === "click") {
                      if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                          const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                          const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                          this.optionAction(selectItem, originalSelect, optionItem);
                      } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                          const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                          this.optionAction(selectItem, originalSelect, optionItem);
                      }
                  } else if (targetType === "focusin" || targetType === "focusout") {
                      if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                  } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
              } else this.selectsСlose();
          }
          selectsСlose(selectOneGroup) {
              const selectsGroup = selectOneGroup ? selectOneGroup : document;
              const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
              if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                  this.selectСlose(selectActiveItem);
              }));
          }
          selectСlose(selectItem) {
              const originalSelect = this.getSelectElement(selectItem).originalSelect;
              const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
              if (!selectOptions.classList.contains("_slide")) {
                  selectItem.classList.remove(this.selectClasses.classSelectOpen);
                  _slideUp(selectOptions, originalSelect.dataset.speed);
                  setTimeout((() => {
                      selectItem.style.zIndex = "";
                  }), originalSelect.dataset.speed);
              }
          }
          selectAction(selectItem) {
              const originalSelect = this.getSelectElement(selectItem).originalSelect;
              const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
              const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : originalSelect.dataset.id++;
              this.setOptionsPosition(selectItem);
              if (originalSelect.closest("[data-one-select]")) {
                  const selectOneGroup = originalSelect.closest("[data-one-select]");
                  this.selectsСlose(selectOneGroup);
              }
              setTimeout((() => {
                  if (!selectOptions.classList.contains("_slide")) {
                      selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                      _slideToggle(selectOptions, originalSelect.dataset.speed);
                      if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                          selectItem.style.zIndex = "";
                      }), originalSelect.dataset.speed);
                  }
              }), 0);
          }
          setSelectTitleValue(selectItem, originalSelect) {
              const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
              const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
              if (selectItemTitle) selectItemTitle.remove();
              selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
              originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
          }
          getSelectTitleValue(selectItem, originalSelect) {
              let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
              if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                  selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                  if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                      document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                      if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                  }
              }
              selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
              let pseudoAttribute = "";
              let pseudoAttributeClass = "";
              if (originalSelect.hasAttribute("data-pseudo-label")) {
                  pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                  pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
              }
              this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
              if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                  const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                  return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
              }
          }
          getSelectElementContent(selectOption) {
              const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
              const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
              let selectOptionContentHTML = ``;
              selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
              selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
              selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
              selectOptionContentHTML += selectOptionData ? `</span>` : "";
              selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
              selectOptionContentHTML += selectOption.textContent;
              selectOptionContentHTML += selectOptionData ? `</span>` : "";
              selectOptionContentHTML += selectOptionData ? `</span>` : "";
              return selectOptionContentHTML;
          }
          getSelectPlaceholder(originalSelect) {
              const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
              if (selectPlaceholder) return {
                  value: selectPlaceholder.textContent,
                  show: selectPlaceholder.hasAttribute("data-show"),
                  label: {
                      show: selectPlaceholder.hasAttribute("data-label"),
                      text: selectPlaceholder.dataset.label
                  }
              };
          }
          getSelectedOptionsData(originalSelect, type) {
              let selectedOptions = [];
              if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
              return {
                  elements: selectedOptions.map((option => option)),
                  values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                  html: selectedOptions.map((option => this.getSelectElementContent(option)))
              };
          }
          getOptions(originalSelect) {
              const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
              const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
              let selectOptions = Array.from(originalSelect.options);
              if (selectOptions.length > 0) {
                  let selectOptionsHTML = ``;
                  if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                  selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                  selectOptions.forEach((selectOption => {
                      selectOptionsHTML += this.getOption(selectOption, originalSelect);
                  }));
                  selectOptionsHTML += `</div>`;
                  return selectOptionsHTML;
              }
          }
          getOption(selectOption, originalSelect) {
              const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
              const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
              const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
              const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
              const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
              let selectOptionHTML = ``;
              selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
              selectOptionHTML += this.getSelectElementContent(selectOption);
              selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
              return selectOptionHTML;
          }
          setOptions(selectItem, originalSelect) {
              const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
              selectItemOptions.innerHTML = this.getOptions(originalSelect);
          }
          setOptionsPosition(selectItem) {
              const originalSelect = this.getSelectElement(selectItem).originalSelect;
              const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
              const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
              const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
              const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
              if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                  selectOptions.hidden = false;
                  const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                  const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                  const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                  selectOptions.hidden = true;
                  const selectItemHeight = selectItem.offsetHeight;
                  const selectItemPos = selectItem.getBoundingClientRect().top;
                  const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                  const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                  if (selectItemResult < 0) {
                      const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                      if (newMaxHeightValue < 100) {
                          selectItem.classList.add("select--show-top");
                          selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                      } else {
                          selectItem.classList.remove("select--show-top");
                          selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                      }
                  }
              } else setTimeout((() => {
                  selectItem.classList.remove("select--show-top");
                  selectItemScroll.style.maxHeight = customMaxHeightValue;
              }), +originalSelect.dataset.speed);
          }
          optionAction(selectItem, originalSelect, optionItem) {
              const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
              if (!selectOptions.classList.contains("_slide")) {
                  if (originalSelect.multiple) {
                      optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                      const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                      originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                          originalSelectSelectedItem.removeAttribute("selected");
                      }));
                      const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                      selectSelectedItems.forEach((selectSelectedItems => {
                          originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                      }));
                  } else {
                      if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                          if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                          optionItem.hidden = true;
                      }), this.config.speed);
                      originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                      this.selectAction(selectItem);
                  }
                  this.setSelectTitleValue(selectItem, originalSelect);
                  this.setSelectChange(originalSelect);
              }
          }
          selectChange(e) {
              const originalSelect = e.target;
              this.selectBuild(originalSelect);
              this.setSelectChange(originalSelect);
          }
          setSelectChange(originalSelect) {
              if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
              if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                  let tempButton = document.createElement("button");
                  tempButton.type = "submit";
                  originalSelect.closest("form").append(tempButton);
                  tempButton.click();
                  tempButton.remove();
              }
              const selectItem = originalSelect.parentElement;
              this.selectCallback(selectItem, originalSelect);
          }
          selectDisabled(selectItem, originalSelect) {
              if (originalSelect.disabled) {
                  selectItem.classList.add(this.selectClasses.classSelectDisabled);
                  this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
              } else {
                  selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                  this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
              }
          }
          searchActions(selectItem) {
              this.getSelectElement(selectItem).originalSelect;
              const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
              const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
              const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
              const _this = this;
              selectInput.addEventListener("input", (function() {
                  selectOptionsItems.forEach((selectOptionsItem => {
                      if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                  }));
                  selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
              }));
          }
          selectCallback(selectItem, originalSelect) {
              document.dispatchEvent(new CustomEvent("selectCallback", {
                  detail: {
                      select: originalSelect
                  }
              }));
          }
          setLogging(message) {
              this.config.logging ? functions_FLS(`[select]: ${message} `) : null;
          }
      }
      modules_flsModules.select = new SelectConstructor({});
      // const datepicker_min = __webpack_require__(448);

      // const startDatepicker = datepicker_min("#datepic", {
      //     customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      //     customMonths: [
      //         "Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"
      //     ],
      //     overlayButton: "Застосувати",
      //     overlayPlaceholder: "Рік (4 цифри)",
      //     startDay: 1,
      //     formatter: (input, date, instance) => {
      //         const value = date.toLocaleDateString();
      //         input.value = value;
      //     },
      //     onSelect: function (selectedDate, instance, datepicker) {
      //         // This function is called when a date is selected
      
      //         // Assuming you have a corresponding input for end date
      //         const endDateInput = document.querySelector("#datepic2");
      
      //         if (endDateInput) {
      //             // Set the minimum date for the end date to be the selected start date
      //             endDateInput.removeAttribute("disabled");
      //             datepicker.setOptions({
      //                 maxDate: null, // Reset the maxDate to allow any date to be selected
      //             });
      //             endDateInput.focus();
      //         }
      //     },
      // });
      
      // const endDatepicker = datepicker_min("#datepic2", {
      //     customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      //     customMonths: [
      //         "Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"
      //     ],
      //     overlayButton: "Застосувати",
      //     overlayPlaceholder: "Рік (4 цифри)",
      //     startDay: 1,
      //     formatter: (input, date, instance) => {
      //         const value = date.toLocaleDateString();
      //         input.value = value;
      //     },
      // });
      
      // modules_flsModules.startDatepicker = startDatepicker;
      // modules_flsModules.endDatepicker = endDatepicker;
      
      
      
      var PipsMode;
      (function(PipsMode) {
          PipsMode["Range"] = "range";
          PipsMode["Steps"] = "steps";
          PipsMode["Positions"] = "positions";
          PipsMode["Count"] = "count";
          PipsMode["Values"] = "values";
      })(PipsMode || (PipsMode = {}));
      var PipsType;
      (function(PipsType) {
          PipsType[PipsType["None"] = -1] = "None";
          PipsType[PipsType["NoValue"] = 0] = "NoValue";
          PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
          PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
      })(PipsType || (PipsType = {}));
      function isValidFormatter(entry) {
          return isValidPartialFormatter(entry) && typeof entry.from === "function";
      }
      function isValidPartialFormatter(entry) {
          return typeof entry === "object" && typeof entry.to === "function";
      }
      function removeElement(el) {
          el.parentElement.removeChild(el);
      }
      function isSet(value) {
          return value !== null && value !== void 0;
      }
      function preventDefault(e) {
          e.preventDefault();
      }
      function unique(array) {
          return array.filter((function(a) {
              return !this[a] ? this[a] = true : false;
          }), {});
      }
      function closest(value, to) {
          return Math.round(value / to) * to;
      }
      function offset(elem, orientation) {
          var rect = elem.getBoundingClientRect();
          var doc = elem.ownerDocument;
          var docElem = doc.documentElement;
          var pageOffset = getPageOffset(doc);
          if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
          return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
      }
      function isNumeric(a) {
          return typeof a === "number" && !isNaN(a) && isFinite(a);
      }
      function addClassFor(element, className, duration) {
          if (duration > 0) {
              addClass(element, className);
              setTimeout((function() {
                  removeClass(element, className);
              }), duration);
          }
      }
      function limit(a) {
          return Math.max(Math.min(a, 100), 0);
      }
      function asArray(a) {
          return Array.isArray(a) ? a : [ a ];
      }
      function countDecimals(numStr) {
          numStr = String(numStr);
          var pieces = numStr.split(".");
          return pieces.length > 1 ? pieces[1].length : 0;
      }
      function addClass(el, className) {
          if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
      }
      function removeClass(el, className) {
          if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
      function hasClass(el, className) {
          return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
      }
      function getPageOffset(doc) {
          var supportPageOffset = window.pageXOffset !== void 0;
          var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
          var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
          var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
          return {
              x,
              y
          };
      }
      function getActions() {
          return window.navigator.pointerEnabled ? {
              start: "pointerdown",
              move: "pointermove",
              end: "pointerup"
          } : window.navigator.msPointerEnabled ? {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp"
          } : {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend"
          };
      }
      function getSupportsPassive() {
          var supportsPassive = false;
          try {
              var opts = Object.defineProperty({}, "passive", {
                  get: function() {
                      supportsPassive = true;
                  }
              });
              window.addEventListener("test", null, opts);
          } catch (e) {}
          return supportsPassive;
      }
      function getSupportsTouchActionNone() {
          return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
      }
      function subRangeRatio(pa, pb) {
          return 100 / (pb - pa);
      }
      function fromPercentage(range, value, startRange) {
          return value * 100 / (range[startRange + 1] - range[startRange]);
      }
      function toPercentage(range, value) {
          return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
      }
      function isPercentage(range, value) {
          return value * (range[1] - range[0]) / 100 + range[0];
      }
      function getJ(value, arr) {
          var j = 1;
          while (value >= arr[j]) j += 1;
          return j;
      }
      function toStepping(xVal, xPct, value) {
          if (value >= xVal.slice(-1)[0]) return 100;
          var j = getJ(value, xVal);
          var va = xVal[j - 1];
          var vb = xVal[j];
          var pa = xPct[j - 1];
          var pb = xPct[j];
          return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
      }
      function fromStepping(xVal, xPct, value) {
          if (value >= 100) return xVal.slice(-1)[0];
          var j = getJ(value, xPct);
          var va = xVal[j - 1];
          var vb = xVal[j];
          var pa = xPct[j - 1];
          var pb = xPct[j];
          return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
      }
      function getStep(xPct, xSteps, snap, value) {
          if (value === 100) return value;
          var j = getJ(value, xPct);
          var a = xPct[j - 1];
          var b = xPct[j];
          if (snap) {
              if (value - a > (b - a) / 2) return b;
              return a;
          }
          if (!xSteps[j - 1]) return value;
          return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
      }
      var Spectrum = function() {
          function Spectrum(entry, snap, singleStep) {
              this.xPct = [];
              this.xVal = [];
              this.xSteps = [];
              this.xNumSteps = [];
              this.xHighestCompleteStep = [];
              this.xSteps = [ singleStep || false ];
              this.xNumSteps = [ false ];
              this.snap = snap;
              var index;
              var ordered = [];
              Object.keys(entry).forEach((function(index) {
                  ordered.push([ asArray(entry[index]), index ]);
              }));
              ordered.sort((function(a, b) {
                  return a[0][0] - b[0][0];
              }));
              for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
              this.xNumSteps = this.xSteps.slice(0);
              for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
          }
          Spectrum.prototype.getDistance = function(value) {
              var distances = [];
              for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
              return distances;
          };
          Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
              var xPct_index = 0;
              if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
              if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
              if (distances === null) distances = [];
              var start_factor;
              var rest_factor = 1;
              var rest_rel_distance = distances[xPct_index];
              var range_pct = 0;
              var rel_range_distance = 0;
              var abs_distance_counter = 0;
              var range_counter = 0;
              if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
              while (rest_rel_distance > 0) {
                  range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                  if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                      rel_range_distance = range_pct * start_factor;
                      rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                      start_factor = 1;
                  } else {
                      rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                      rest_factor = 0;
                  }
                  if (direction) {
                      abs_distance_counter -= rel_range_distance;
                      if (this.xPct.length + range_counter >= 1) range_counter--;
                  } else {
                      abs_distance_counter += rel_range_distance;
                      if (this.xPct.length - range_counter >= 1) range_counter++;
                  }
                  rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
              }
              return value + abs_distance_counter;
          };
          Spectrum.prototype.toStepping = function(value) {
              value = toStepping(this.xVal, this.xPct, value);
              return value;
          };
          Spectrum.prototype.fromStepping = function(value) {
              return fromStepping(this.xVal, this.xPct, value);
          };
          Spectrum.prototype.getStep = function(value) {
              value = getStep(this.xPct, this.xSteps, this.snap, value);
              return value;
          };
          Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
              var j = getJ(value, this.xPct);
              if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
              return (this.xVal[j] - this.xVal[j - 1]) / size;
          };
          Spectrum.prototype.getNearbySteps = function(value) {
              var j = getJ(value, this.xPct);
              return {
                  stepBefore: {
                      startValue: this.xVal[j - 2],
                      step: this.xNumSteps[j - 2],
                      highestStep: this.xHighestCompleteStep[j - 2]
                  },
                  thisStep: {
                      startValue: this.xVal[j - 1],
                      step: this.xNumSteps[j - 1],
                      highestStep: this.xHighestCompleteStep[j - 1]
                  },
                  stepAfter: {
                      startValue: this.xVal[j],
                      step: this.xNumSteps[j],
                      highestStep: this.xHighestCompleteStep[j]
                  }
              };
          };
          Spectrum.prototype.countStepDecimals = function() {
              var stepDecimals = this.xNumSteps.map(countDecimals);
              return Math.max.apply(null, stepDecimals);
          };
          Spectrum.prototype.hasNoSize = function() {
              return this.xVal[0] === this.xVal[this.xVal.length - 1];
          };
          Spectrum.prototype.convert = function(value) {
              return this.getStep(this.toStepping(value));
          };
          Spectrum.prototype.handleEntryPoint = function(index, value) {
              var percentage;
              if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
              if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
              this.xPct.push(percentage);
              this.xVal.push(value[0]);
              var value1 = Number(value[1]);
              if (!percentage) {
                  if (!isNaN(value1)) this.xSteps[0] = value1;
              } else this.xSteps.push(isNaN(value1) ? false : value1);
              this.xHighestCompleteStep.push(0);
          };
          Spectrum.prototype.handleStepPoint = function(i, n) {
              if (!n) return;
              if (this.xVal[i] === this.xVal[i + 1]) {
                  this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                  return;
              }
              this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
              var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
              var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
              var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
              this.xHighestCompleteStep[i] = step;
          };
          return Spectrum;
      }();
      var defaultFormatter = {
          to: function(value) {
              return value === void 0 ? "" : value.toFixed(2);
          },
          from: Number
      };
      var cssClasses = {
          target: "target",
          base: "base",
          origin: "origin",
          handle: "handle",
          handleLower: "handle-lower",
          handleUpper: "handle-upper",
          touchArea: "touch-area",
          horizontal: "horizontal",
          vertical: "vertical",
          background: "background",
          connect: "connect",
          connects: "connects",
          ltr: "ltr",
          rtl: "rtl",
          textDirectionLtr: "txt-dir-ltr",
          textDirectionRtl: "txt-dir-rtl",
          draggable: "draggable",
          drag: "state-drag",
          tap: "state-tap",
          active: "active",
          tooltip: "tooltip",
          pips: "pips",
          pipsHorizontal: "pips-horizontal",
          pipsVertical: "pips-vertical",
          marker: "marker",
          markerHorizontal: "marker-horizontal",
          markerVertical: "marker-vertical",
          markerNormal: "marker-normal",
          markerLarge: "marker-large",
          markerSub: "marker-sub",
          value: "value",
          valueHorizontal: "value-horizontal",
          valueVertical: "value-vertical",
          valueNormal: "value-normal",
          valueLarge: "value-large",
          valueSub: "value-sub"
      };
      var INTERNAL_EVENT_NS = {
          tooltips: ".__tooltips",
          aria: ".__aria"
      };
      function testStep(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
          parsed.singleStep = entry;
      }
      function testKeyboardPageMultiplier(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
          parsed.keyboardPageMultiplier = entry;
      }
      function testKeyboardMultiplier(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
          parsed.keyboardMultiplier = entry;
      }
      function testKeyboardDefaultStep(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
          parsed.keyboardDefaultStep = entry;
      }
      function testRange(parsed, entry) {
          if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
          if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
          parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
      }
      function testStart(parsed, entry) {
          entry = asArray(entry);
          if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
          parsed.handles = entry.length;
          parsed.start = entry;
      }
      function testSnap(parsed, entry) {
          if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
          parsed.snap = entry;
      }
      function testAnimate(parsed, entry) {
          if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
          parsed.animate = entry;
      }
      function testAnimationDuration(parsed, entry) {
          if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
          parsed.animationDuration = entry;
      }
      function testConnect(parsed, entry) {
          var connect = [ false ];
          var i;
          if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
          if (entry === true || entry === false) {
              for (i = 1; i < parsed.handles; i++) connect.push(entry);
              connect.push(false);
          } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
          parsed.connect = connect;
      }
      function testOrientation(parsed, entry) {
          switch (entry) {
            case "horizontal":
              parsed.ort = 0;
              break;

            case "vertical":
              parsed.ort = 1;
              break;

            default:
              throw new Error("noUiSlider: 'orientation' option is invalid.");
          }
      }
      function testMargin(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
          if (entry === 0) return;
          parsed.margin = parsed.spectrum.getDistance(entry);
      }
      function testLimit(parsed, entry) {
          if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
          parsed.limit = parsed.spectrum.getDistance(entry);
          if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
      }
      function testPadding(parsed, entry) {
          var index;
          if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
          if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
          if (entry === 0) return;
          if (!Array.isArray(entry)) entry = [ entry, entry ];
          parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
          for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
          var totalPadding = entry[0] + entry[1];
          var firstValue = parsed.spectrum.xVal[0];
          var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
          if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
      function testDirection(parsed, entry) {
          switch (entry) {
            case "ltr":
              parsed.dir = 0;
              break;

            case "rtl":
              parsed.dir = 1;
              break;

            default:
              throw new Error("noUiSlider: 'direction' option was not recognized.");
          }
      }
      function testBehaviour(parsed, entry) {
          if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
          var tap = entry.indexOf("tap") >= 0;
          var drag = entry.indexOf("drag") >= 0;
          var fixed = entry.indexOf("fixed") >= 0;
          var snap = entry.indexOf("snap") >= 0;
          var hover = entry.indexOf("hover") >= 0;
          var unconstrained = entry.indexOf("unconstrained") >= 0;
          var dragAll = entry.indexOf("drag-all") >= 0;
          var smoothSteps = entry.indexOf("smooth-steps") >= 0;
          if (fixed) {
              if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
              testMargin(parsed, parsed.start[1] - parsed.start[0]);
          }
          if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
          parsed.events = {
              tap: tap || snap,
              drag,
              dragAll,
              smoothSteps,
              fixed,
              snap,
              hover,
              unconstrained
          };
      }
      function testTooltips(parsed, entry) {
          if (entry === false) return;
          if (entry === true || isValidPartialFormatter(entry)) {
              parsed.tooltips = [];
              for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
          } else {
              entry = asArray(entry);
              if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
              entry.forEach((function(formatter) {
                  if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
              }));
              parsed.tooltips = entry;
          }
      }
      function testHandleAttributes(parsed, entry) {
          if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
          parsed.handleAttributes = entry;
      }
      function testAriaFormat(parsed, entry) {
          if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
          parsed.ariaFormat = entry;
      }
      function testFormat(parsed, entry) {
          if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
          parsed.format = entry;
      }
      function testKeyboardSupport(parsed, entry) {
          if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
          parsed.keyboardSupport = entry;
      }
      function testDocumentElement(parsed, entry) {
          parsed.documentElement = entry;
      }
      function testCssPrefix(parsed, entry) {
          if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
          parsed.cssPrefix = entry;
      }
      function testCssClasses(parsed, entry) {
          if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
          if (typeof parsed.cssPrefix === "string") {
              parsed.cssClasses = {};
              Object.keys(entry).forEach((function(key) {
                  parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
              }));
          } else parsed.cssClasses = entry;
      }
      function testOptions(options) {
          var parsed = {
              margin: null,
              limit: null,
              padding: null,
              animate: true,
              animationDuration: 300,
              ariaFormat: defaultFormatter,
              format: defaultFormatter
          };
          var tests = {
              step: {
                  r: false,
                  t: testStep
              },
              keyboardPageMultiplier: {
                  r: false,
                  t: testKeyboardPageMultiplier
              },
              keyboardMultiplier: {
                  r: false,
                  t: testKeyboardMultiplier
              },
              keyboardDefaultStep: {
                  r: false,
                  t: testKeyboardDefaultStep
              },
              start: {
                  r: true,
                  t: testStart
              },
              connect: {
                  r: true,
                  t: testConnect
              },
              direction: {
                  r: true,
                  t: testDirection
              },
              snap: {
                  r: false,
                  t: testSnap
              },
              animate: {
                  r: false,
                  t: testAnimate
              },
              animationDuration: {
                  r: false,
                  t: testAnimationDuration
              },
              range: {
                  r: true,
                  t: testRange
              },
              orientation: {
                  r: false,
                  t: testOrientation
              },
              margin: {
                  r: false,
                  t: testMargin
              },
              limit: {
                  r: false,
                  t: testLimit
              },
              padding: {
                  r: false,
                  t: testPadding
              },
              behaviour: {
                  r: true,
                  t: testBehaviour
              },
              ariaFormat: {
                  r: false,
                  t: testAriaFormat
              },
              format: {
                  r: false,
                  t: testFormat
              },
              tooltips: {
                  r: false,
                  t: testTooltips
              },
              keyboardSupport: {
                  r: true,
                  t: testKeyboardSupport
              },
              documentElement: {
                  r: false,
                  t: testDocumentElement
              },
              cssPrefix: {
                  r: true,
                  t: testCssPrefix
              },
              cssClasses: {
                  r: true,
                  t: testCssClasses
              },
              handleAttributes: {
                  r: false,
                  t: testHandleAttributes
              }
          };
          var defaults = {
              connect: false,
              direction: "ltr",
              behaviour: "tap",
              orientation: "horizontal",
              keyboardSupport: true,
              cssPrefix: "noUi-",
              cssClasses,
              keyboardPageMultiplier: 5,
              keyboardMultiplier: 1,
              keyboardDefaultStep: 10
          };
          if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
          Object.keys(tests).forEach((function(name) {
              if (!isSet(options[name]) && defaults[name] === void 0) {
                  if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                  return;
              }
              tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
          }));
          parsed.pips = options.pips;
          var d = document.createElement("div");
          var msPrefix = d.style.msTransform !== void 0;
          var noPrefix = d.style.transform !== void 0;
          parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
          var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
          parsed.style = styles[parsed.dir][parsed.ort];
          return parsed;
      }
      function scope(target, options, originalOptions) {
          var actions = getActions();
          var supportsTouchActionNone = getSupportsTouchActionNone();
          var supportsPassive = supportsTouchActionNone && getSupportsPassive();
          var scope_Target = target;
          var scope_Base;
          var scope_Handles;
          var scope_Connects;
          var scope_Pips;
          var scope_Tooltips;
          var scope_Spectrum = options.spectrum;
          var scope_Values = [];
          var scope_Locations = [];
          var scope_HandleNumbers = [];
          var scope_ActiveHandlesCount = 0;
          var scope_Events = {};
          var scope_Document = target.ownerDocument;
          var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
          var scope_Body = scope_Document.body;
          var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
          function addNodeTo(addTarget, className) {
              var div = scope_Document.createElement("div");
              if (className) addClass(div, className);
              addTarget.appendChild(div);
              return div;
          }
          function addOrigin(base, handleNumber) {
              var origin = addNodeTo(base, options.cssClasses.origin);
              var handle = addNodeTo(origin, options.cssClasses.handle);
              addNodeTo(handle, options.cssClasses.touchArea);
              handle.setAttribute("data-handle", String(handleNumber));
              if (options.keyboardSupport) {
                  handle.setAttribute("tabindex", "0");
                  handle.addEventListener("keydown", (function(event) {
                      return eventKeydown(event, handleNumber);
                  }));
              }
              if (options.handleAttributes !== void 0) {
                  var attributes_1 = options.handleAttributes[handleNumber];
                  Object.keys(attributes_1).forEach((function(attribute) {
                      handle.setAttribute(attribute, attributes_1[attribute]);
                  }));
              }
              handle.setAttribute("role", "slider");
              handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
              if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
              origin.handle = handle;
              return origin;
          }
          function addConnect(base, add) {
              if (!add) return false;
              return addNodeTo(base, options.cssClasses.connect);
          }
          function addElements(connectOptions, base) {
              var connectBase = addNodeTo(base, options.cssClasses.connects);
              scope_Handles = [];
              scope_Connects = [];
              scope_Connects.push(addConnect(connectBase, connectOptions[0]));
              for (var i = 0; i < options.handles; i++) {
                  scope_Handles.push(addOrigin(base, i));
                  scope_HandleNumbers[i] = i;
                  scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
              }
          }
          function addSlider(addTarget) {
              addClass(addTarget, options.cssClasses.target);
              if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
              if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
              var textDirection = getComputedStyle(addTarget).direction;
              if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
              return addNodeTo(addTarget, options.cssClasses.base);
          }
          function addTooltip(handle, handleNumber) {
              if (!options.tooltips || !options.tooltips[handleNumber]) return false;
              return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
          }
          function isSliderDisabled() {
              return scope_Target.hasAttribute("disabled");
          }
          function isHandleDisabled(handleNumber) {
              var handleOrigin = scope_Handles[handleNumber];
              return handleOrigin.hasAttribute("disabled");
          }
          function disable(handleNumber) {
              if (handleNumber !== null && handleNumber !== void 0) {
                  scope_Handles[handleNumber].setAttribute("disabled", "");
                  scope_Handles[handleNumber].handle.removeAttribute("tabindex");
              } else {
                  scope_Target.setAttribute("disabled", "");
                  scope_Handles.forEach((function(handle) {
                      handle.handle.removeAttribute("tabindex");
                  }));
              }
          }
          function enable(handleNumber) {
              if (handleNumber !== null && handleNumber !== void 0) {
                  scope_Handles[handleNumber].removeAttribute("disabled");
                  scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
              } else {
                  scope_Target.removeAttribute("disabled");
                  scope_Handles.forEach((function(handle) {
                      handle.removeAttribute("disabled");
                      handle.handle.setAttribute("tabindex", "0");
                  }));
              }
          }
          function removeTooltips() {
              if (scope_Tooltips) {
                  removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                  scope_Tooltips.forEach((function(tooltip) {
                      if (tooltip) removeElement(tooltip);
                  }));
                  scope_Tooltips = null;
              }
          }
          function tooltips() {
              removeTooltips();
              scope_Tooltips = scope_Handles.map(addTooltip);
              bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                  if (!scope_Tooltips || !options.tooltips) return;
                  if (scope_Tooltips[handleNumber] === false) return;
                  var formattedValue = values[handleNumber];
                  if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                  scope_Tooltips[handleNumber].innerHTML = formattedValue;
              }));
          }
          function aria() {
              removeEvent("update" + INTERNAL_EVENT_NS.aria);
              bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                  scope_HandleNumbers.forEach((function(index) {
                      var handle = scope_Handles[index];
                      var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                      var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                      var now = positions[index];
                      var text = String(options.ariaFormat.to(unencoded[index]));
                      min = scope_Spectrum.fromStepping(min).toFixed(1);
                      max = scope_Spectrum.fromStepping(max).toFixed(1);
                      now = scope_Spectrum.fromStepping(now).toFixed(1);
                      handle.children[0].setAttribute("aria-valuemin", min);
                      handle.children[0].setAttribute("aria-valuemax", max);
                      handle.children[0].setAttribute("aria-valuenow", now);
                      handle.children[0].setAttribute("aria-valuetext", text);
                  }));
              }));
          }
          function getGroup(pips) {
              if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
              if (pips.mode === PipsMode.Count) {
                  if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                  var interval = pips.values - 1;
                  var spread = 100 / interval;
                  var values = [];
                  while (interval--) values[interval] = interval * spread;
                  values.push(100);
                  return mapToRange(values, pips.stepped);
              }
              if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
              if (pips.mode === PipsMode.Values) {
                  if (pips.stepped) return pips.values.map((function(value) {
                      return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                  }));
                  return pips.values;
              }
              return [];
          }
          function mapToRange(values, stepped) {
              return values.map((function(value) {
                  return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
              }));
          }
          function generateSpread(pips) {
              function safeIncrement(value, increment) {
                  return Number((value + increment).toFixed(7));
              }
              var group = getGroup(pips);
              var indexes = {};
              var firstInRange = scope_Spectrum.xVal[0];
              var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
              var ignoreFirst = false;
              var ignoreLast = false;
              var prevPct = 0;
              group = unique(group.slice().sort((function(a, b) {
                  return a - b;
              })));
              if (group[0] !== firstInRange) {
                  group.unshift(firstInRange);
                  ignoreFirst = true;
              }
              if (group[group.length - 1] !== lastInRange) {
                  group.push(lastInRange);
                  ignoreLast = true;
              }
              group.forEach((function(current, index) {
                  var step;
                  var i;
                  var q;
                  var low = current;
                  var high = group[index + 1];
                  var newPct;
                  var pctDifference;
                  var pctPos;
                  var type;
                  var steps;
                  var realSteps;
                  var stepSize;
                  var isSteps = pips.mode === PipsMode.Steps;
                  if (isSteps) step = scope_Spectrum.xNumSteps[index];
                  if (!step) step = high - low;
                  if (high === void 0) high = low;
                  step = Math.max(step, 1e-7);
                  for (i = low; i <= high; i = safeIncrement(i, step)) {
                      newPct = scope_Spectrum.toStepping(i);
                      pctDifference = newPct - prevPct;
                      steps = pctDifference / (pips.density || 1);
                      realSteps = Math.round(steps);
                      stepSize = pctDifference / realSteps;
                      for (q = 1; q <= realSteps; q += 1) {
                          pctPos = prevPct + q * stepSize;
                          indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                      }
                      type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                      if (!index && ignoreFirst && i !== high) type = 0;
                      if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                      prevPct = newPct;
                  }
              }));
              return indexes;
          }
          function addMarking(spread, filterFunc, formatter) {
              var _a, _b;
              var element = scope_Document.createElement("div");
              var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
              _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
              _a);
              var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
              _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
              _b);
              var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
              var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
              addClass(element, options.cssClasses.pips);
              addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
              function getClasses(type, source) {
                  var a = source === options.cssClasses.value;
                  var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                  var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                  return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
              }
              function addSpread(offset, value, type) {
                  type = filterFunc ? filterFunc(value, type) : type;
                  if (type === PipsType.None) return;
                  var node = addNodeTo(element, false);
                  node.className = getClasses(type, options.cssClasses.marker);
                  node.style[options.style] = offset + "%";
                  if (type > PipsType.NoValue) {
                      node = addNodeTo(element, false);
                      node.className = getClasses(type, options.cssClasses.value);
                      node.setAttribute("data-value", String(value));
                      node.style[options.style] = offset + "%";
                      node.innerHTML = String(formatter.to(value));
                  }
              }
              Object.keys(spread).forEach((function(offset) {
                  addSpread(offset, spread[offset][0], spread[offset][1]);
              }));
              return element;
          }
          function removePips() {
              if (scope_Pips) {
                  removeElement(scope_Pips);
                  scope_Pips = null;
              }
          }
          function pips(pips) {
              removePips();
              var spread = generateSpread(pips);
              var filter = pips.filter;
              var format = pips.format || {
                  to: function(value) {
                      return String(Math.round(value));
                  }
              };
              scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
              return scope_Pips;
          }
          function baseSize() {
              var rect = scope_Base.getBoundingClientRect();
              var alt = "offset" + [ "Width", "Height" ][options.ort];
              return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
          }
          function attachEvent(events, element, callback, data) {
              var method = function(event) {
                  var e = fixEvent(event, data.pageOffset, data.target || element);
                  if (!e) return false;
                  if (isSliderDisabled() && !data.doNotReject) return false;
                  if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                  if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                  if (data.hover && e.buttons) return false;
                  if (!supportsPassive) e.preventDefault();
                  e.calcPoint = e.points[options.ort];
                  callback(e, data);
                  return;
              };
              var methods = [];
              events.split(" ").forEach((function(eventName) {
                  element.addEventListener(eventName, method, supportsPassive ? {
                      passive: true
                  } : false);
                  methods.push([ eventName, method ]);
              }));
              return methods;
          }
          function fixEvent(e, pageOffset, eventTarget) {
              var touch = e.type.indexOf("touch") === 0;
              var mouse = e.type.indexOf("mouse") === 0;
              var pointer = e.type.indexOf("pointer") === 0;
              var x = 0;
              var y = 0;
              if (e.type.indexOf("MSPointer") === 0) pointer = true;
              if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
              if (touch) {
                  var isTouchOnTarget = function(checkTouch) {
                      var target = checkTouch.target;
                      return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                  };
                  if (e.type === "touchstart") {
                      var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                      if (targetTouches.length > 1) return false;
                      x = targetTouches[0].pageX;
                      y = targetTouches[0].pageY;
                  } else {
                      var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                      if (!targetTouch) return false;
                      x = targetTouch.pageX;
                      y = targetTouch.pageY;
                  }
              }
              pageOffset = pageOffset || getPageOffset(scope_Document);
              if (mouse || pointer) {
                  x = e.clientX + pageOffset.x;
                  y = e.clientY + pageOffset.y;
              }
              e.pageOffset = pageOffset;
              e.points = [ x, y ];
              e.cursor = mouse || pointer;
              return e;
          }
          function calcPointToPercentage(calcPoint) {
              var location = calcPoint - offset(scope_Base, options.ort);
              var proposal = location * 100 / baseSize();
              proposal = limit(proposal);
              return options.dir ? 100 - proposal : proposal;
          }
          function getClosestHandle(clickedPosition) {
              var smallestDifference = 100;
              var handleNumber = false;
              scope_Handles.forEach((function(handle, index) {
                  if (isHandleDisabled(index)) return;
                  var handlePosition = scope_Locations[index];
                  var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                  var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                  var isCloser = differenceWithThisHandle < smallestDifference;
                  var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                  if (isCloser || isCloserAfter || clickAtEdge) {
                      handleNumber = index;
                      smallestDifference = differenceWithThisHandle;
                  }
              }));
              return handleNumber;
          }
          function documentLeave(event, data) {
              if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
          }
          function eventMove(event, data) {
              if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
              var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
              var proposal = movement * 100 / data.baseSize;
              moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
          }
          function eventEnd(event, data) {
              if (data.handle) {
                  removeClass(data.handle, options.cssClasses.active);
                  scope_ActiveHandlesCount -= 1;
              }
              data.listeners.forEach((function(c) {
                  scope_DocumentElement.removeEventListener(c[0], c[1]);
              }));
              if (scope_ActiveHandlesCount === 0) {
                  removeClass(scope_Target, options.cssClasses.drag);
                  setZindex();
                  if (event.cursor) {
                      scope_Body.style.cursor = "";
                      scope_Body.removeEventListener("selectstart", preventDefault);
                  }
              }
              if (options.events.smoothSteps) {
                  data.handleNumbers.forEach((function(handleNumber) {
                      setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                  }));
                  data.handleNumbers.forEach((function(handleNumber) {
                      fireEvent("update", handleNumber);
                  }));
              }
              data.handleNumbers.forEach((function(handleNumber) {
                  fireEvent("change", handleNumber);
                  fireEvent("set", handleNumber);
                  fireEvent("end", handleNumber);
              }));
          }
          function eventStart(event, data) {
              if (data.handleNumbers.some(isHandleDisabled)) return;
              var handle;
              if (data.handleNumbers.length === 1) {
                  var handleOrigin = scope_Handles[data.handleNumbers[0]];
                  handle = handleOrigin.children[0];
                  scope_ActiveHandlesCount += 1;
                  addClass(handle, options.cssClasses.active);
              }
              event.stopPropagation();
              var listeners = [];
              var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                  target: event.target,
                  handle,
                  connect: data.connect,
                  listeners,
                  startCalcPoint: event.calcPoint,
                  baseSize: baseSize(),
                  pageOffset: event.pageOffset,
                  handleNumbers: data.handleNumbers,
                  buttonsProperty: event.buttons,
                  locations: scope_Locations.slice()
              });
              var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                  target: event.target,
                  handle,
                  listeners,
                  doNotReject: true,
                  handleNumbers: data.handleNumbers
              });
              var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                  target: event.target,
                  handle,
                  listeners,
                  doNotReject: true,
                  handleNumbers: data.handleNumbers
              });
              listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
              if (event.cursor) {
                  scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                  if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                  scope_Body.addEventListener("selectstart", preventDefault, false);
              }
              data.handleNumbers.forEach((function(handleNumber) {
                  fireEvent("start", handleNumber);
              }));
          }
          function eventTap(event) {
              event.stopPropagation();
              var proposal = calcPointToPercentage(event.calcPoint);
              var handleNumber = getClosestHandle(proposal);
              if (handleNumber === false) return;
              if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
              setHandle(handleNumber, proposal, true, true);
              setZindex();
              fireEvent("slide", handleNumber, true);
              fireEvent("update", handleNumber, true);
              if (!options.events.snap) {
                  fireEvent("change", handleNumber, true);
                  fireEvent("set", handleNumber, true);
              } else eventStart(event, {
                  handleNumbers: [ handleNumber ]
              });
          }
          function eventHover(event) {
              var proposal = calcPointToPercentage(event.calcPoint);
              var to = scope_Spectrum.getStep(proposal);
              var value = scope_Spectrum.fromStepping(to);
              Object.keys(scope_Events).forEach((function(targetEvent) {
                  if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                      callback.call(scope_Self, value);
                  }));
              }));
          }
          function eventKeydown(event, handleNumber) {
              if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
              var horizontalKeys = [ "Left", "Right" ];
              var verticalKeys = [ "Down", "Up" ];
              var largeStepKeys = [ "PageDown", "PageUp" ];
              var edgeKeys = [ "Home", "End" ];
              if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                  verticalKeys.reverse();
                  largeStepKeys.reverse();
              }
              var key = event.key.replace("Arrow", "");
              var isLargeDown = key === largeStepKeys[0];
              var isLargeUp = key === largeStepKeys[1];
              var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
              var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
              var isMin = key === edgeKeys[0];
              var isMax = key === edgeKeys[1];
              if (!isDown && !isUp && !isMin && !isMax) return true;
              event.preventDefault();
              var to;
              if (isUp || isDown) {
                  var direction = isDown ? 0 : 1;
                  var steps = getNextStepsForHandle(handleNumber);
                  var step = steps[direction];
                  if (step === null) return false;
                  if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                  if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                  step = Math.max(step, 1e-7);
                  step *= isDown ? -1 : 1;
                  to = scope_Values[handleNumber] + step;
              } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
              setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
              fireEvent("slide", handleNumber);
              fireEvent("update", handleNumber);
              fireEvent("change", handleNumber);
              fireEvent("set", handleNumber);
              return false;
          }
          function bindSliderEvents(behaviour) {
              if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                  attachEvent(actions.start, handle.children[0], eventStart, {
                      handleNumbers: [ index ]
                  });
              }));
              if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
              if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                  hover: true
              });
              if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                  if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                  var handleBefore = scope_Handles[index - 1];
                  var handleAfter = scope_Handles[index];
                  var eventHolders = [ connect ];
                  var handlesToDrag = [ handleBefore, handleAfter ];
                  var handleNumbersToDrag = [ index - 1, index ];
                  addClass(connect, options.cssClasses.draggable);
                  if (behaviour.fixed) {
                      eventHolders.push(handleBefore.children[0]);
                      eventHolders.push(handleAfter.children[0]);
                  }
                  if (behaviour.dragAll) {
                      handlesToDrag = scope_Handles;
                      handleNumbersToDrag = scope_HandleNumbers;
                  }
                  eventHolders.forEach((function(eventHolder) {
                      attachEvent(actions.start, eventHolder, eventStart, {
                          handles: handlesToDrag,
                          handleNumbers: handleNumbersToDrag,
                          connect
                      });
                  }));
              }));
          }
          function bindEvent(namespacedEvent, callback) {
              scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
              scope_Events[namespacedEvent].push(callback);
              if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                  fireEvent("update", index);
              }));
          }
          function isInternalNamespace(namespace) {
              return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
          }
          function removeEvent(namespacedEvent) {
              var event = namespacedEvent && namespacedEvent.split(".")[0];
              var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
              Object.keys(scope_Events).forEach((function(bind) {
                  var tEvent = bind.split(".")[0];
                  var tNamespace = bind.substring(tEvent.length);
                  if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
              }));
          }
          function fireEvent(eventName, handleNumber, tap) {
              Object.keys(scope_Events).forEach((function(targetEvent) {
                  var eventType = targetEvent.split(".")[0];
                  if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                      callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                  }));
              }));
          }
          function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
              var distance;
              if (scope_Handles.length > 1 && !options.events.unconstrained) {
                  if (lookBackward && handleNumber > 0) {
                      distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                      to = Math.max(to, distance);
                  }
                  if (lookForward && handleNumber < scope_Handles.length - 1) {
                      distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                      to = Math.min(to, distance);
                  }
              }
              if (scope_Handles.length > 1 && options.limit) {
                  if (lookBackward && handleNumber > 0) {
                      distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                      to = Math.min(to, distance);
                  }
                  if (lookForward && handleNumber < scope_Handles.length - 1) {
                      distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                      to = Math.max(to, distance);
                  }
              }
              if (options.padding) {
                  if (handleNumber === 0) {
                      distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                      to = Math.max(to, distance);
                  }
                  if (handleNumber === scope_Handles.length - 1) {
                      distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                      to = Math.min(to, distance);
                  }
              }
              if (!smoothSteps) to = scope_Spectrum.getStep(to);
              to = limit(to);
              if (to === reference[handleNumber] && !getValue) return false;
              return to;
          }
          function inRuleOrder(v, a) {
              var o = options.ort;
              return (o ? a : v) + ", " + (o ? v : a);
          }
          function moveHandles(upward, proposal, locations, handleNumbers, connect) {
              var proposals = locations.slice();
              var firstHandle = handleNumbers[0];
              var smoothSteps = options.events.smoothSteps;
              var b = [ !upward, upward ];
              var f = [ upward, !upward ];
              handleNumbers = handleNumbers.slice();
              if (upward) handleNumbers.reverse();
              if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                  var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                  if (to === false) proposal = 0; else {
                      proposal = to - proposals[handleNumber];
                      proposals[handleNumber] = to;
                  }
              })); else b = f = [ true ];
              var state = false;
              handleNumbers.forEach((function(handleNumber, o) {
                  state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
              }));
              if (state) {
                  handleNumbers.forEach((function(handleNumber) {
                      fireEvent("update", handleNumber);
                      fireEvent("slide", handleNumber);
                  }));
                  if (connect != void 0) fireEvent("drag", firstHandle);
              }
          }
          function transformDirection(a, b) {
              return options.dir ? 100 - a - b : a;
          }
          function updateHandlePosition(handleNumber, to) {
              scope_Locations[handleNumber] = to;
              scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
              var translation = transformDirection(to, 0) - scope_DirOffset;
              var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
              scope_Handles[handleNumber].style[options.transformRule] = translateRule;
              updateConnect(handleNumber);
              updateConnect(handleNumber + 1);
          }
          function setZindex() {
              scope_HandleNumbers.forEach((function(handleNumber) {
                  var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                  var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                  scope_Handles[handleNumber].style.zIndex = String(zIndex);
              }));
          }
          function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
              if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
              if (to === false) return false;
              updateHandlePosition(handleNumber, to);
              return true;
          }
          function updateConnect(index) {
              if (!scope_Connects[index]) return;
              var l = 0;
              var h = 100;
              if (index !== 0) l = scope_Locations[index - 1];
              if (index !== scope_Connects.length - 1) h = scope_Locations[index];
              var connectWidth = h - l;
              var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
              var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
              scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
          }
          function resolveToValue(to, handleNumber) {
              if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
              if (typeof to === "number") to = String(to);
              to = options.format.from(to);
              if (to !== false) to = scope_Spectrum.toStepping(to);
              if (to === false || isNaN(to)) return scope_Locations[handleNumber];
              return to;
          }
          function valueSet(input, fireSetEvent, exactInput) {
              var values = asArray(input);
              var isInit = scope_Locations[0] === void 0;
              fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
              if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
              scope_HandleNumbers.forEach((function(handleNumber) {
                  setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
              }));
              var i = scope_HandleNumbers.length === 1 ? 0 : 1;
              if (isInit && scope_Spectrum.hasNoSize()) {
                  exactInput = true;
                  scope_Locations[0] = 0;
                  if (scope_HandleNumbers.length > 1) {
                      var space_1 = 100 / (scope_HandleNumbers.length - 1);
                      scope_HandleNumbers.forEach((function(handleNumber) {
                          scope_Locations[handleNumber] = handleNumber * space_1;
                      }));
                  }
              }
              for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                  setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
              }));
              setZindex();
              scope_HandleNumbers.forEach((function(handleNumber) {
                  fireEvent("update", handleNumber);
                  if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
              }));
          }
          function valueReset(fireSetEvent) {
              valueSet(options.start, fireSetEvent);
          }
          function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
              handleNumber = Number(handleNumber);
              if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
              setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
              fireEvent("update", handleNumber);
              if (fireSetEvent) fireEvent("set", handleNumber);
          }
          function valueGet(unencoded) {
              if (unencoded === void 0) unencoded = false;
              if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
              var values = scope_Values.map(options.format.to);
              if (values.length === 1) return values[0];
              return values;
          }
          function destroy() {
              removeEvent(INTERNAL_EVENT_NS.aria);
              removeEvent(INTERNAL_EVENT_NS.tooltips);
              Object.keys(options.cssClasses).forEach((function(key) {
                  removeClass(scope_Target, options.cssClasses[key]);
              }));
              while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
              delete scope_Target.noUiSlider;
          }
          function getNextStepsForHandle(handleNumber) {
              var location = scope_Locations[handleNumber];
              var nearbySteps = scope_Spectrum.getNearbySteps(location);
              var value = scope_Values[handleNumber];
              var increment = nearbySteps.thisStep.step;
              var decrement = null;
              if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
              if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
              if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
              if (location === 100) increment = null; else if (location === 0) decrement = null;
              var stepDecimals = scope_Spectrum.countStepDecimals();
              if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
              if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
              return [ decrement, increment ];
          }
          function getNextSteps() {
              return scope_HandleNumbers.map(getNextStepsForHandle);
          }
          function updateOptions(optionsToUpdate, fireSetEvent) {
              var v = valueGet();
              var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
              updateAble.forEach((function(name) {
                  if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
              }));
              var newOptions = testOptions(originalOptions);
              updateAble.forEach((function(name) {
                  if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
              }));
              scope_Spectrum = newOptions.spectrum;
              options.margin = newOptions.margin;
              options.limit = newOptions.limit;
              options.padding = newOptions.padding;
              if (options.pips) pips(options.pips); else removePips();
              if (options.tooltips) tooltips(); else removeTooltips();
              scope_Locations = [];
              valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
          }
          function setupSlider() {
              scope_Base = addSlider(scope_Target);
              addElements(options.connect, scope_Base);
              bindSliderEvents(options.events);
              valueSet(options.start);
              if (options.pips) pips(options.pips);
              if (options.tooltips) tooltips();
              aria();
          }
          setupSlider();
          var scope_Self = {
              destroy,
              steps: getNextSteps,
              on: bindEvent,
              off: removeEvent,
              get: valueGet,
              set: valueSet,
              setHandle: valueSetHandle,
              reset: valueReset,
              disable,
              enable,
              __moveHandles: function(upward, proposal, handleNumbers) {
                  moveHandles(upward, proposal, scope_Locations, handleNumbers);
              },
              options: originalOptions,
              updateOptions,
              target: scope_Target,
              removePips,
              removeTooltips,
              getPositions: function() {
                  return scope_Locations.slice();
              },
              getTooltips: function() {
                  return scope_Tooltips;
              },
              getOrigins: function() {
                  return scope_Handles;
              },
              pips
          };
          return scope_Self;
      }
      function initialize(target, originalOptions) {
          if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
          if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
          var options = testOptions(originalOptions);
          var api = scope(target, options, originalOptions);
          target.noUiSlider = api;
          return api;
      }
      function rangeInit() {
          var stepsSlider = document.getElementById("steps-slider");
          var input0 = document.getElementById("input-with-keypress-0");
          var input1 = document.getElementById("input-with-keypress-1");
          var inputs = [ input0, input1 ];
          if (stepsSlider) {
              if (stepsSlider.noUiSlider) stepsSlider.noUiSlider.destroy();
              initialize(stepsSlider, {
                  start: [ 2e3, 15e3 ],
                  connect: true,
                  range: {
                      min: 0,
                      max: 8e4
                  },
                  step: 500
              });
              stepsSlider.noUiSlider.on("update", (function(values, handle) {
                  inputs[handle].value = parseInt(values[handle]) + " грн";
              }));
              inputs.forEach((function(input, handle) {
                  input.addEventListener("change", (function() {
                      var value = this.value.replace(/\D/g, "");
                      stepsSlider.noUiSlider.setHandle(handle, value);
                  }));
                  input.addEventListener("keydown", (function(e) {
                      var values = stepsSlider.noUiSlider.get();
                      var value = parseInt(values[handle]);
                      var step = 1e3;
                      switch (e.which) {
                        case 13:
                          stepsSlider.noUiSlider.setHandle(handle, this.value.replace(/\D/g, ""));
                          break;

                        case 38:
                          stepsSlider.noUiSlider.setHandle(handle, value + step);
                          break;

                        case 40:
                          stepsSlider.noUiSlider.setHandle(handle, value - step);
                          break;
                      }
                  }));
              }));
          }
      }
      rangeInit();
      function getWindow_getWindow(node) {
          if (node == null) return window;
          if (node.toString() !== "[object Window]") {
              var ownerDocument = node.ownerDocument;
              return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
      }
      function isElement(node) {
          var OwnElement = getWindow_getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
          var OwnElement = getWindow_getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
          if (typeof ShadowRoot === "undefined") return false;
          var OwnElement = getWindow_getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var math_max = Math.max;
      var math_min = Math.min;
      var round = Math.round;
      function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
              return item.brand + "/" + item.version;
          })).join(" ");
          return navigator.userAgent;
      }
      function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) includeScale = false;
          if (isFixedStrategy === void 0) isFixedStrategy = false;
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement(element)) {
              scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
              scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow_getWindow(element) : window, visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
              width,
              height,
              top: y,
              right: x + width,
              bottom: y + height,
              left: x,
              x,
              y
          };
      }
      function getWindowScroll(node) {
          var win = getWindow_getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
              scrollLeft,
              scrollTop
          };
      }
      function getHTMLElementScroll(element) {
          return {
              scrollLeft: element.scrollLeft,
              scrollTop: element.scrollTop
          };
      }
      function getNodeScroll(node) {
          if (node === getWindow_getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
      }
      function getNodeName(element) {
          return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
          return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle_getComputedStyle(element) {
          return getWindow_getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
          var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) isFixed = false;
          var isOffsetParentAnElement = isHTMLElement(offsetParent);
          var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
              scrollLeft: 0,
              scrollTop: 0
          };
          var offsets = {
              x: 0,
              y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
              if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
              if (isHTMLElement(offsetParent)) {
                  offsets = getBoundingClientRect(offsetParent, true);
                  offsets.x += offsetParent.clientLeft;
                  offsets.y += offsetParent.clientTop;
              } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
          }
          return {
              x: rect.left + scroll.scrollLeft - offsets.x,
              y: rect.top + scroll.scrollTop - offsets.y,
              width: rect.width,
              height: rect.height
          };
      }
      function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element);
          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
          if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
          return {
              x: element.offsetLeft,
              y: element.offsetTop,
              width,
              height
          };
      }
      function getParentNode(element) {
          if (getNodeName(element) === "html") return element;
          return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
      }
      function getScrollParent(node) {
          if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
          if (isHTMLElement(node) && isScrollParent(node)) return node;
          return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) list = [];
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow_getWindow(scrollParent);
          var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
      }
      function isTableElement(element) {
          return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
          if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
          return element.offsetParent;
      }
      function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement(element)) {
              var elementCss = getComputedStyle_getComputedStyle(element);
              if (elementCss.position === "fixed") return null;
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) currentNode = currentNode.host;
          while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
              var css = getComputedStyle_getComputedStyle(currentNode);
              if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
          }
          return null;
      }
      function getOffsetParent(element) {
          var window = getWindow_getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
          if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
          return offsetParent || getContainingBlock(element) || window;
      }
      var enums_top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [ enums_top, bottom, right, left ];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = basePlacements.reduce((function(acc, placement) {
          return acc.concat([ placement + "-" + start, placement + "-" + end ]);
      }), []);
      var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
          return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
      }), []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
      function order(modifiers) {
          var map = new Map;
          var visited = new Set;
          var result = [];
          modifiers.forEach((function(modifier) {
              map.set(modifier.name, modifier);
          }));
          function sort(modifier) {
              visited.add(modifier.name);
              var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
              requires.forEach((function(dep) {
                  if (!visited.has(dep)) {
                      var depModifier = map.get(dep);
                      if (depModifier) sort(depModifier);
                  }
              }));
              result.push(modifier);
          }
          modifiers.forEach((function(modifier) {
              if (!visited.has(modifier.name)) sort(modifier);
          }));
          return result;
      }
      function orderModifiers(modifiers) {
          var orderedModifiers = order(modifiers);
          return modifierPhases.reduce((function(acc, phase) {
              return acc.concat(orderedModifiers.filter((function(modifier) {
                  return modifier.phase === phase;
              })));
          }), []);
      }
      function debounce(fn) {
          var pending;
          return function() {
              if (!pending) pending = new Promise((function(resolve) {
                  Promise.resolve().then((function() {
                      pending = void 0;
                      resolve(fn());
                  }));
              }));
              return pending;
          };
      }
      function mergeByName(modifiers) {
          var merged = modifiers.reduce((function(merged, current) {
              var existing = merged[current.name];
              merged[current.name] = existing ? Object.assign({}, existing, current, {
                  options: Object.assign({}, existing.options, current.options),
                  data: Object.assign({}, existing.data, current.data)
              }) : current;
              return merged;
          }), {});
          return Object.keys(merged).map((function(key) {
              return merged[key];
          }));
      }
      var DEFAULT_OPTIONS = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
      };
      function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
          return !args.some((function(element) {
              return !(element && typeof element.getBoundingClientRect === "function");
          }));
      }
      function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) generatorOptions = {};
          var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
              if (options === void 0) options = defaultOptions;
              var state = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                  modifiersData: {},
                  elements: {
                      reference,
                      popper
                  },
                  attributes: {},
                  styles: {}
              };
              var effectCleanupFns = [];
              var isDestroyed = false;
              var instance = {
                  state,
                  setOptions: function setOptions(setOptionsAction) {
                      var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                      cleanupModifierEffects();
                      state.options = Object.assign({}, defaultOptions, state.options, options);
                      state.scrollParents = {
                          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                          popper: listScrollParents(popper)
                      };
                      var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                      state.orderedModifiers = orderedModifiers.filter((function(m) {
                          return m.enabled;
                      }));
                      runModifierEffects();
                      return instance.update();
                  },
                  forceUpdate: function forceUpdate() {
                      if (isDestroyed) return;
                      var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                      if (!areValidElements(reference, popper)) return;
                      state.rects = {
                          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                          popper: getLayoutRect(popper)
                      };
                      state.reset = false;
                      state.placement = state.options.placement;
                      state.orderedModifiers.forEach((function(modifier) {
                          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                      }));
                      for (var index = 0; index < state.orderedModifiers.length; index++) {
                          if (state.reset === true) {
                              state.reset = false;
                              index = -1;
                              continue;
                          }
                          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                          if (typeof fn === "function") state = fn({
                              state,
                              options: _options,
                              name,
                              instance
                          }) || state;
                      }
                  },
                  update: debounce((function() {
                      return new Promise((function(resolve) {
                          instance.forceUpdate();
                          resolve(state);
                      }));
                  })),
                  destroy: function destroy() {
                      cleanupModifierEffects();
                      isDestroyed = true;
                  }
              };
              if (!areValidElements(reference, popper)) return instance;
              instance.setOptions(options).then((function(state) {
                  if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
              }));
              function runModifierEffects() {
                  state.orderedModifiers.forEach((function(_ref) {
                      var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                      if (typeof effect === "function") {
                          var cleanupFn = effect({
                              state,
                              name,
                              instance,
                              options
                          });
                          var noopFn = function noopFn() {};
                          effectCleanupFns.push(cleanupFn || noopFn);
                      }
                  }));
              }
              function cleanupModifierEffects() {
                  effectCleanupFns.forEach((function(fn) {
                      return fn();
                  }));
                  effectCleanupFns = [];
              }
              return instance;
          };
      }
      null && popperGenerator();
      var passive = {
          passive: true
      };
      function effect(_ref) {
          var state = _ref.state, instance = _ref.instance, options = _ref.options;
          var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow_getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) scrollParents.forEach((function(scrollParent) {
              scrollParent.addEventListener("scroll", instance.update, passive);
          }));
          if (resize) window.addEventListener("resize", instance.update, passive);
          return function() {
              if (scroll) scrollParents.forEach((function(scrollParent) {
                  scrollParent.removeEventListener("scroll", instance.update, passive);
              }));
              if (resize) window.removeEventListener("resize", instance.update, passive);
          };
      }
      const eventListeners = {
          name: "eventListeners",
          enabled: true,
          phase: "write",
          fn: function fn() {},
          effect,
          data: {}
      };
      function getBasePlacement(placement) {
          return placement.split("-")[0];
      }
      function getVariation(placement) {
          return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
          return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
          var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
            case enums_top:
              offsets = {
                  x: commonX,
                  y: reference.y - element.height
              };
              break;

            case bottom:
              offsets = {
                  x: commonX,
                  y: reference.y + reference.height
              };
              break;

            case right:
              offsets = {
                  x: reference.x + reference.width,
                  y: commonY
              };
              break;

            case left:
              offsets = {
                  x: reference.x - element.width,
                  y: commonY
              };
              break;

            default:
              offsets = {
                  x: reference.x,
                  y: reference.y
              };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
              var len = mainAxis === "y" ? "height" : "width";
              switch (variation) {
                case start:
                  offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                  break;

                case end:
                  offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                  break;

                default:
              }
          }
          return offsets;
      }
      function popperOffsets(_ref) {
          var state = _ref.state, name = _ref.name;
          state.modifiersData[name] = computeOffsets({
              reference: state.rects.reference,
              element: state.rects.popper,
              strategy: "absolute",
              placement: state.placement
          });
      }
      const modifiers_popperOffsets = {
          name: "popperOffsets",
          enabled: true,
          phase: "read",
          fn: popperOffsets,
          data: {}
      };
      var unsetSides = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
      };
      function roundOffsetsByDPR(_ref, win) {
          var x = _ref.x, y = _ref.y;
          var dpr = win.devicePixelRatio || 1;
          return {
              x: round(x * dpr) / dpr || 0,
              y: round(y * dpr) / dpr || 0
          };
      }
      function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
              x,
              y
          }) : {
              x,
              y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty("x");
          var hasY = offsets.hasOwnProperty("y");
          var sideX = left;
          var sideY = enums_top;
          var win = window;
          if (adaptive) {
              var offsetParent = getOffsetParent(popper);
              var heightProp = "clientHeight";
              var widthProp = "clientWidth";
              if (offsetParent === getWindow_getWindow(popper)) {
                  offsetParent = getDocumentElement(popper);
                  if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                      heightProp = "scrollHeight";
                      widthProp = "scrollWidth";
                  }
              }
              offsetParent;
              if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                  sideY = bottom;
                  var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                  y -= offsetY - popperRect.height;
                  y *= gpuAcceleration ? 1 : -1;
              }
              if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                  sideX = right;
                  var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                  x -= offsetX - popperRect.width;
                  x *= gpuAcceleration ? 1 : -1;
              }
          }
          var commonStyles = Object.assign({
              position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
              x,
              y
          }, getWindow_getWindow(popper)) : {
              x,
              y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
              var _Object$assign;
              return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
              _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
              _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
          _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref5) {
          var state = _ref5.state, options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
              placement: getBasePlacement(state.placement),
              variation: getVariation(state.placement),
              popper: state.elements.popper,
              popperRect: state.rects.popper,
              gpuAcceleration,
              isFixed: state.options.strategy === "fixed"
          };
          if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive,
              roundOffsets
          })));
          if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: "absolute",
              adaptive: false,
              roundOffsets
          })));
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
              "data-popper-placement": state.placement
          });
      }
      const modifiers_computeStyles = {
          name: "computeStyles",
          enabled: true,
          phase: "beforeWrite",
          fn: computeStyles,
          data: {}
      };
      function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach((function(name) {
              var style = state.styles[name] || {};
              var attributes = state.attributes[name] || {};
              var element = state.elements[name];
              if (!isHTMLElement(element) || !getNodeName(element)) return;
              Object.assign(element.style, style);
              Object.keys(attributes).forEach((function(name) {
                  var value = attributes[name];
                  if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
              }));
          }));
      }
      function applyStyles_effect(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
              popper: {
                  position: state.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0"
              },
              arrow: {
                  position: "absolute"
              },
              reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
          return function() {
              Object.keys(state.elements).forEach((function(name) {
                  var element = state.elements[name];
                  var attributes = state.attributes[name] || {};
                  var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                  var style = styleProperties.reduce((function(style, property) {
                      style[property] = "";
                      return style;
                  }), {});
                  if (!isHTMLElement(element) || !getNodeName(element)) return;
                  Object.assign(element.style, style);
                  Object.keys(attributes).forEach((function(attribute) {
                      element.removeAttribute(attribute);
                  }));
              }));
          };
      }
      const modifiers_applyStyles = {
          name: "applyStyles",
          enabled: true,
          phase: "write",
          fn: applyStyles,
          effect: applyStyles_effect,
          requires: [ "computeStyles" ]
      };
      function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
              placement
          })) : offset, skidding = _ref[0], distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [ left, right ].indexOf(basePlacement) >= 0 ? {
              x: distance,
              y: skidding
          } : {
              x: skidding,
              y: distance
          };
      }
      function offset_offset(_ref2) {
          var state = _ref2.state, options = _ref2.options, name = _ref2.name;
          var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
          var data = enums_placements.reduce((function(acc, placement) {
              acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
              return acc;
          }), {});
          var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
              state.modifiersData.popperOffsets.x += x;
              state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
      }
      const modifiers_offset = {
          name: "offset",
          enabled: true,
          phase: "main",
          requires: [ "popperOffsets" ],
          fn: offset_offset
      };
      var hash = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
      function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, (function(matched) {
              return hash[matched];
          }));
      }
      var getOppositeVariationPlacement_hash = {
          start: "end",
          end: "start"
      };
      function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, (function(matched) {
              return getOppositeVariationPlacement_hash[matched];
          }));
      }
      function getViewportRect(element, strategy) {
          var win = getWindow_getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
              width = visualViewport.width;
              height = visualViewport.height;
              var layoutViewport = isLayoutViewport();
              if (layoutViewport || !layoutViewport && strategy === "fixed") {
                  x = visualViewport.offsetLeft;
                  y = visualViewport.offsetTop;
              }
          }
          return {
              width,
              height,
              x: x + getWindowScrollBarX(element),
              y
          };
      }
      function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
          return {
              width,
              height,
              x,
              y
          };
      }
      function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode();
          if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
              var next = child;
              do {
                  if (next && parent.isSameNode(next)) return true;
                  next = next.parentNode || next.host;
              } while (next);
          }
          return false;
      }
      function rectToClientRect(rect) {
          return Object.assign({}, rect, {
              left: rect.x,
              top: rect.y,
              right: rect.x + rect.width,
              bottom: rect.y + rect.height
          });
      }
      function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === "fixed");
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
      }
      function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) return [];
          return clippingParents.filter((function(clippingParent) {
              return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
          }));
      }
      function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
              var rect = getClientRectFromMixedType(element, clippingParent, strategy);
              accRect.top = math_max(rect.top, accRect.top);
              accRect.right = math_min(rect.right, accRect.right);
              accRect.bottom = math_min(rect.bottom, accRect.bottom);
              accRect.left = math_max(rect.left, accRect.left);
              return accRect;
          }), getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
      }
      function getFreshSideObject() {
          return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          };
      }
      function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
          return keys.reduce((function(hashMap, key) {
              hashMap[key] = value;
              return hashMap;
          }), {});
      }
      function detectOverflow(state, options) {
          if (options === void 0) options = {};
          var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
              reference: referenceClientRect,
              element: popperRect,
              strategy: "absolute",
              placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
          var overflowOffsets = {
              top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
              bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
              left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
              right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset;
          if (elementContext === popper && offsetData) {
              var offset = offsetData[placement];
              Object.keys(overflowOffsets).forEach((function(key) {
                  var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                  var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                  overflowOffsets[key] += offset[axis] * multiply;
              }));
          }
          return overflowOffsets;
      }
      function computeAutoPlacement(state, options) {
          if (options === void 0) options = {};
          var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
              return getVariation(placement) === variation;
          })) : basePlacements;
          var allowedPlacements = placements.filter((function(placement) {
              return allowedAutoPlacements.indexOf(placement) >= 0;
          }));
          if (allowedPlacements.length === 0) allowedPlacements = placements;
          var overflows = allowedPlacements.reduce((function(acc, placement) {
              acc[placement] = detectOverflow(state, {
                  placement,
                  boundary,
                  rootBoundary,
                  padding
              })[getBasePlacement(placement)];
              return acc;
          }), {});
          return Object.keys(overflows).sort((function(a, b) {
              return overflows[a] - overflows[b];
          }));
      }
      function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) return [];
          var oppositePlacement = getOppositePlacement(placement);
          return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
      }
      function flip(_ref) {
          var state = _ref.state, options = _ref.options, name = _ref.name;
          if (state.modifiersData[name]._skip) return;
          var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
              return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                  placement,
                  boundary,
                  rootBoundary,
                  padding,
                  flipVariations,
                  allowedAutoPlacements
              }) : placement);
          }), []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map;
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
              var placement = placements[i];
              var _basePlacement = getBasePlacement(placement);
              var isStartVariation = getVariation(placement) === start;
              var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
              var len = isVertical ? "width" : "height";
              var overflow = detectOverflow(state, {
                  placement,
                  boundary,
                  rootBoundary,
                  altBoundary,
                  padding
              });
              var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
              if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
              var altVariationSide = getOppositePlacement(mainVariationSide);
              var checks = [];
              if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
              if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
              if (checks.every((function(check) {
                  return check;
              }))) {
                  firstFittingPlacement = placement;
                  makeFallbackChecks = false;
                  break;
              }
              checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
              var numberOfChecks = flipVariations ? 3 : 1;
              var _loop = function _loop(_i) {
                  var fittingPlacement = placements.find((function(placement) {
                      var checks = checksMap.get(placement);
                      if (checks) return checks.slice(0, _i).every((function(check) {
                          return check;
                      }));
                  }));
                  if (fittingPlacement) {
                      firstFittingPlacement = fittingPlacement;
                      return "break";
                  }
              };
              for (var _i = numberOfChecks; _i > 0; _i--) {
                  var _ret = _loop(_i);
                  if (_ret === "break") break;
              }
          }
          if (state.placement !== firstFittingPlacement) {
              state.modifiersData[name]._skip = true;
              state.placement = firstFittingPlacement;
              state.reset = true;
          }
      }
      const modifiers_flip = {
          name: "flip",
          enabled: true,
          phase: "main",
          fn: flip,
          requiresIfExists: [ "offset" ],
          data: {
              _skip: false
          }
      };
      function getAltAxis(axis) {
          return axis === "x" ? "y" : "x";
      }
      function within(min, value, max) {
          return math_max(min, math_min(value, max));
      }
      function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
      }
      function preventOverflow(_ref) {
          var state = _ref.state, options = _ref.options, name = _ref.name;
          var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
              boundary,
              rootBoundary,
              padding,
              altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
              placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
              mainAxis: tetherOffsetValue,
              altAxis: tetherOffsetValue
          } : Object.assign({
              mainAxis: 0,
              altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
              x: 0,
              y: 0
          };
          if (!popperOffsets) return;
          if (checkMainAxis) {
              var _offsetModifierState$;
              var mainSide = mainAxis === "y" ? enums_top : left;
              var altSide = mainAxis === "y" ? bottom : right;
              var len = mainAxis === "y" ? "height" : "width";
              var offset = popperOffsets[mainAxis];
              var min = offset + overflow[mainSide];
              var max = offset - overflow[altSide];
              var additive = tether ? -popperRect[len] / 2 : 0;
              var minLen = variation === start ? referenceRect[len] : popperRect[len];
              var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
              var arrowElement = state.elements.arrow;
              var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                  width: 0,
                  height: 0
              };
              var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
              var arrowPaddingMin = arrowPaddingObject[mainSide];
              var arrowPaddingMax = arrowPaddingObject[altSide];
              var arrowLen = within(0, referenceRect[len], arrowRect[len]);
              var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
              var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
              var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
              var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
              var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
              var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
              var tetherMax = offset + maxOffset - offsetModifierValue;
              var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
              popperOffsets[mainAxis] = preventedOffset;
              data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
              var _offsetModifierState$2;
              var _mainSide = mainAxis === "x" ? enums_top : left;
              var _altSide = mainAxis === "x" ? bottom : right;
              var _offset = popperOffsets[altAxis];
              var _len = altAxis === "y" ? "height" : "width";
              var _min = _offset + overflow[_mainSide];
              var _max = _offset - overflow[_altSide];
              var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
              var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
              var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
              var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
              var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
              popperOffsets[altAxis] = _preventedOffset;
              data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
      }
      const modifiers_preventOverflow = {
          name: "preventOverflow",
          enabled: true,
          phase: "main",
          fn: preventOverflow,
          requiresIfExists: [ "offset" ]
      };
      var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
              placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state, name = _ref.name, options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
          var len = isVertical ? "height" : "width";
          if (!arrowElement || !popperOffsets) return;
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === "y" ? enums_top : left;
          var maxProp = axis === "y" ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2;
          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max);
          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
          _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
      }
      function arrow_effect(_ref2) {
          var state = _ref2.state, options = _ref2.options;
          var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
          if (arrowElement == null) return;
          if (typeof arrowElement === "string") {
              arrowElement = state.elements.popper.querySelector(arrowElement);
              if (!arrowElement) return;
          }
          if (!contains(state.elements.popper, arrowElement)) return;
          state.elements.arrow = arrowElement;
      }
      const modifiers_arrow = {
          name: "arrow",
          enabled: true,
          phase: "main",
          fn: arrow,
          effect: arrow_effect,
          requires: [ "popperOffsets" ],
          requiresIfExists: [ "preventOverflow" ]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) preventedOffsets = {
              x: 0,
              y: 0
          };
          return {
              top: overflow.top - rect.height - preventedOffsets.y,
              right: overflow.right - rect.width + preventedOffsets.x,
              bottom: overflow.bottom - rect.height + preventedOffsets.y,
              left: overflow.left - rect.width - preventedOffsets.x
          };
      }
      function isAnySideFullyClipped(overflow) {
          return [ enums_top, right, bottom, left ].some((function(side) {
              return overflow[side] >= 0;
          }));
      }
      function hide(_ref) {
          var state = _ref.state, name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
              elementContext: "reference"
          });
          var popperAltOverflow = detectOverflow(state, {
              altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
              referenceClippingOffsets,
              popperEscapeOffsets,
              isReferenceHidden,
              hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
              "data-popper-reference-hidden": isReferenceHidden,
              "data-popper-escaped": hasPopperEscaped
          });
      }
      const modifiers_hide = {
          name: "hide",
          enabled: true,
          phase: "main",
          requiresIfExists: [ "preventOverflow" ],
          fn: hide
      };
      var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
      var popper_createPopper = popperGenerator({
          defaultModifiers
      });
      var BOX_CLASS = "tippy-box";
      var CONTENT_CLASS = "tippy-content";
      var BACKDROP_CLASS = "tippy-backdrop";
      var ARROW_CLASS = "tippy-arrow";
      var SVG_ARROW_CLASS = "tippy-svg-arrow";
      var TOUCH_OPTIONS = {
          passive: true,
          capture: true
      };
      var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
          return document.body;
      };
      function getValueAtIndexOrReturn(value, index, defaultValue) {
          if (Array.isArray(value)) {
              var v = value[index];
              return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
          }
          return value;
      }
      function isType(value, type) {
          var str = {}.toString.call(value);
          return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
      }
      function invokeWithArgsOrReturn(value, args) {
          return typeof value === "function" ? value.apply(void 0, args) : value;
      }
      function tippy_esm_debounce(fn, ms) {
          if (ms === 0) return fn;
          var timeout;
          return function(arg) {
              clearTimeout(timeout);
              timeout = setTimeout((function() {
                  fn(arg);
              }), ms);
          };
      }
      function splitBySpaces(value) {
          return value.split(/\s+/).filter(Boolean);
      }
      function normalizeToArray(value) {
          return [].concat(value);
      }
      function pushIfUnique(arr, value) {
          if (arr.indexOf(value) === -1) arr.push(value);
      }
      function tippy_esm_unique(arr) {
          return arr.filter((function(item, index) {
              return arr.indexOf(item) === index;
          }));
      }
      function tippy_esm_getBasePlacement(placement) {
          return placement.split("-")[0];
      }
      function arrayFrom(value) {
          return [].slice.call(value);
      }
      function removeUndefinedProps(obj) {
          return Object.keys(obj).reduce((function(acc, key) {
              if (obj[key] !== void 0) acc[key] = obj[key];
              return acc;
          }), {});
      }
      function div() {
          return document.createElement("div");
      }
      function tippy_esm_isElement(value) {
          return [ "Element", "Fragment" ].some((function(type) {
              return isType(value, type);
          }));
      }
      function isNodeList(value) {
          return isType(value, "NodeList");
      }
      function isMouseEvent(value) {
          return isType(value, "MouseEvent");
      }
      function isReferenceElement(value) {
          return !!(value && value._tippy && value._tippy.reference === value);
      }
      function getArrayOfElements(value) {
          if (tippy_esm_isElement(value)) return [ value ];
          if (isNodeList(value)) return arrayFrom(value);
          if (Array.isArray(value)) return value;
          return arrayFrom(document.querySelectorAll(value));
      }
      function setTransitionDuration(els, value) {
          els.forEach((function(el) {
              if (el) el.style.transitionDuration = value + "ms";
          }));
      }
      function setVisibilityState(els, state) {
          els.forEach((function(el) {
              if (el) el.setAttribute("data-state", state);
          }));
      }
      function getOwnerDocument(elementOrElements) {
          var _element$ownerDocumen;
          var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
          return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
      }
      function isCursorOutsideInteractiveBorder(popperTreeData, event) {
          var clientX = event.clientX, clientY = event.clientY;
          return popperTreeData.every((function(_ref) {
              var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
              var interactiveBorder = props.interactiveBorder;
              var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
              var offsetData = popperState.modifiersData.offset;
              if (!offsetData) return true;
              var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
              var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
              var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
              var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
              var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
              var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
              var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
              var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
              return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
          }));
      }
      function updateTransitionEndListener(box, action, listener) {
          var method = action + "EventListener";
          [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
              box[method](event, listener);
          }));
      }
      function actualContains(parent, child) {
          var target = child;
          while (target) {
              var _target$getRootNode;
              if (parent.contains(target)) return true;
              target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
          }
          return false;
      }
      var currentInput = {
          isTouch: false
      };
      var lastMouseMoveTime = 0;
      function onDocumentTouchStart() {
          if (currentInput.isTouch) return;
          currentInput.isTouch = true;
          if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
      }
      function onDocumentMouseMove() {
          var now = performance.now();
          if (now - lastMouseMoveTime < 20) {
              currentInput.isTouch = false;
              document.removeEventListener("mousemove", onDocumentMouseMove);
          }
          lastMouseMoveTime = now;
      }
      function onWindowBlur() {
          var activeElement = document.activeElement;
          if (isReferenceElement(activeElement)) {
              var instance = activeElement._tippy;
              if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
          }
      }
      function bindGlobalEventListeners() {
          document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
          window.addEventListener("blur", onWindowBlur);
      }
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      var isIE11 = isBrowser ? !!window.msCrypto : false;
      if (false) ;
      var pluginProps = {
          animateFill: false,
          followCursor: false,
          inlinePositioning: false,
          sticky: false
      };
      var renderProps = {
          allowHTML: false,
          animation: "fade",
          arrow: true,
          content: "",
          inertia: false,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999
      };
      var defaultProps = Object.assign({
          appendTo: TIPPY_DEFAULT_APPEND_TO,
          aria: {
              content: "auto",
              expanded: "auto"
          },
          delay: 0,
          duration: [ 300, 250 ],
          getReferenceClientRect: null,
          hideOnClick: true,
          ignoreAttributes: false,
          interactive: false,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [ 0, 10 ],
          onAfterUpdate: function onAfterUpdate() {},
          onBeforeUpdate: function onBeforeUpdate() {},
          onCreate: function onCreate() {},
          onDestroy: function onDestroy() {},
          onHidden: function onHidden() {},
          onHide: function onHide() {},
          onMount: function onMount() {},
          onShow: function onShow() {},
          onShown: function onShown() {},
          onTrigger: function onTrigger() {},
          onUntrigger: function onUntrigger() {},
          onClickOutside: function onClickOutside() {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: false,
          touch: true,
          trigger: "mouseenter focus",
          triggerTarget: null
      }, pluginProps, renderProps);
      var defaultKeys = Object.keys(defaultProps);
      var setDefaultProps = function setDefaultProps(partialProps) {
          if (false) ;
          var keys = Object.keys(partialProps);
          keys.forEach((function(key) {
              defaultProps[key] = partialProps[key];
          }));
      };
      function getExtendedPassedProps(passedProps) {
          var plugins = passedProps.plugins || [];
          var pluginProps = plugins.reduce((function(acc, plugin) {
              var name = plugin.name, defaultValue = plugin.defaultValue;
              if (name) {
                  var _name;
                  acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
              }
              return acc;
          }), {});
          return Object.assign({}, passedProps, pluginProps);
      }
      function getDataAttributeProps(reference, plugins) {
          var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
              plugins
          }))) : defaultKeys;
          var props = propKeys.reduce((function(acc, key) {
              var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
              if (!valueAsString) return acc;
              if (key === "content") acc[key] = valueAsString; else try {
                  acc[key] = JSON.parse(valueAsString);
              } catch (e) {
                  acc[key] = valueAsString;
              }
              return acc;
          }), {});
          return props;
      }
      function evaluateProps(reference, props) {
          var out = Object.assign({}, props, {
              content: invokeWithArgsOrReturn(props.content, [ reference ])
          }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
          out.aria = Object.assign({}, defaultProps.aria, out.aria);
          out.aria = {
              expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
              content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
          };
          return out;
      }
      var innerHTML = function innerHTML() {
          return "innerHTML";
      };
      function dangerouslySetInnerHTML(element, html) {
          element[innerHTML()] = html;
      }
      function createArrowElement(value) {
          var arrow = div();
          if (value === true) arrow.className = ARROW_CLASS; else {
              arrow.className = SVG_ARROW_CLASS;
              if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
          }
          return arrow;
      }
      function setContent(content, props) {
          if (tippy_esm_isElement(props.content)) {
              dangerouslySetInnerHTML(content, "");
              content.appendChild(props.content);
          } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
      }
      function getChildren(popper) {
          var box = popper.firstElementChild;
          var boxChildren = arrayFrom(box.children);
          return {
              box,
              content: boxChildren.find((function(node) {
                  return node.classList.contains(CONTENT_CLASS);
              })),
              arrow: boxChildren.find((function(node) {
                  return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
              })),
              backdrop: boxChildren.find((function(node) {
                  return node.classList.contains(BACKDROP_CLASS);
              }))
          };
      }
      function render(instance) {
          var popper = div();
          var box = div();
          box.className = BOX_CLASS;
          box.setAttribute("data-state", "hidden");
          box.setAttribute("tabindex", "-1");
          var content = div();
          content.className = CONTENT_CLASS;
          content.setAttribute("data-state", "hidden");
          setContent(content, instance.props);
          popper.appendChild(box);
          box.appendChild(content);
          onUpdate(instance.props, instance.props);
          function onUpdate(prevProps, nextProps) {
              var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
              if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
              if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
              if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
              box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
              if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
              if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
              if (nextProps.arrow) {
                  if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                      box.removeChild(arrow);
                      box.appendChild(createArrowElement(nextProps.arrow));
                  }
              } else if (arrow) box.removeChild(arrow);
          }
          return {
              popper,
              onUpdate
          };
      }
      render.$$tippy = true;
      var idCounter = 1;
      var mouseMoveListeners = [];
      var mountedInstances = [];
      function createTippy(reference, passedProps) {
          var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
          var showTimeout;
          var hideTimeout;
          var scheduleHideAnimationFrame;
          var isVisibleFromClick = false;
          var didHideDueToDocumentMouseDown = false;
          var didTouchMove = false;
          var ignoreOnFirstUpdate = false;
          var lastTriggerEvent;
          var currentTransitionEndListener;
          var onFirstUpdate;
          var listeners = [];
          var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
          var currentTarget;
          var id = idCounter++;
          var popperInstance = null;
          var plugins = tippy_esm_unique(props.plugins);
          var state = {
              isEnabled: true,
              isVisible: false,
              isDestroyed: false,
              isMounted: false,
              isShown: false
          };
          var instance = {
              id,
              reference,
              popper: div(),
              popperInstance,
              props,
              state,
              plugins,
              clearDelayTimeouts,
              setProps,
              setContent,
              show,
              hide,
              hideWithInteractivity,
              enable,
              disable,
              unmount,
              destroy
          };
          if (!props.render) {
              if (false) ;
              return instance;
          }
          var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
          popper.setAttribute("data-tippy-root", "");
          popper.id = "tippy-" + instance.id;
          instance.popper = popper;
          reference._tippy = instance;
          popper._tippy = instance;
          var pluginsHooks = plugins.map((function(plugin) {
              return plugin.fn(instance);
          }));
          var hasAriaExpanded = reference.hasAttribute("aria-expanded");
          addListeners();
          handleAriaExpandedAttribute();
          handleStyles();
          invokeHook("onCreate", [ instance ]);
          if (props.showOnCreate) scheduleShow();
          popper.addEventListener("mouseenter", (function() {
              if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
          }));
          popper.addEventListener("mouseleave", (function() {
              if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
          }));
          return instance;
          function getNormalizedTouchSettings() {
              var touch = instance.props.touch;
              return Array.isArray(touch) ? touch : [ touch, 0 ];
          }
          function getIsCustomTouchBehavior() {
              return getNormalizedTouchSettings()[0] === "hold";
          }
          function getIsDefaultRenderFn() {
              var _instance$props$rende;
              return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
          }
          function getCurrentTarget() {
              return currentTarget || reference;
          }
          function getDocument() {
              var parent = getCurrentTarget().parentNode;
              return parent ? getOwnerDocument(parent) : document;
          }
          function getDefaultTemplateChildren() {
              return getChildren(popper);
          }
          function getDelay(isShow) {
              if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
              return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
          }
          function handleStyles(fromHide) {
              if (fromHide === void 0) fromHide = false;
              popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
              popper.style.zIndex = "" + instance.props.zIndex;
          }
          function invokeHook(hook, args, shouldInvokePropsHook) {
              if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
              pluginsHooks.forEach((function(pluginHooks) {
                  if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
              }));
              if (shouldInvokePropsHook) {
                  var _instance$props;
                  (_instance$props = instance.props)[hook].apply(_instance$props, args);
              }
          }
          function handleAriaContentAttribute() {
              var aria = instance.props.aria;
              if (!aria.content) return;
              var attr = "aria-" + aria.content;
              var id = popper.id;
              var nodes = normalizeToArray(instance.props.triggerTarget || reference);
              nodes.forEach((function(node) {
                  var currentValue = node.getAttribute(attr);
                  if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
                      var nextValue = currentValue && currentValue.replace(id, "").trim();
                      if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
                  }
              }));
          }
          function handleAriaExpandedAttribute() {
              if (hasAriaExpanded || !instance.props.aria.expanded) return;
              var nodes = normalizeToArray(instance.props.triggerTarget || reference);
              nodes.forEach((function(node) {
                  if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
              }));
          }
          function cleanupInteractiveMouseListeners() {
              getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
              mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
                  return listener !== debouncedOnMouseMove;
              }));
          }
          function onDocumentPress(event) {
              if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
              var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
              if (instance.props.interactive && actualContains(popper, actualTarget)) return;
              if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
                  return actualContains(el, actualTarget);
              }))) {
                  if (currentInput.isTouch) return;
                  if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
              } else invokeHook("onClickOutside", [ instance, event ]);
              if (instance.props.hideOnClick === true) {
                  instance.clearDelayTimeouts();
                  instance.hide();
                  didHideDueToDocumentMouseDown = true;
                  setTimeout((function() {
                      didHideDueToDocumentMouseDown = false;
                  }));
                  if (!instance.state.isMounted) removeDocumentPress();
              }
          }
          function onTouchMove() {
              didTouchMove = true;
          }
          function onTouchStart() {
              didTouchMove = false;
          }
          function addDocumentPress() {
              var doc = getDocument();
              doc.addEventListener("mousedown", onDocumentPress, true);
              doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
              doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
              doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
          }
          function removeDocumentPress() {
              var doc = getDocument();
              doc.removeEventListener("mousedown", onDocumentPress, true);
              doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
              doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
              doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
          }
          function onTransitionedOut(duration, callback) {
              onTransitionEnd(duration, (function() {
                  if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
              }));
          }
          function onTransitionedIn(duration, callback) {
              onTransitionEnd(duration, callback);
          }
          function onTransitionEnd(duration, callback) {
              var box = getDefaultTemplateChildren().box;
              function listener(event) {
                  if (event.target === box) {
                      updateTransitionEndListener(box, "remove", listener);
                      callback();
                  }
              }
              if (duration === 0) return callback();
              updateTransitionEndListener(box, "remove", currentTransitionEndListener);
              updateTransitionEndListener(box, "add", listener);
              currentTransitionEndListener = listener;
          }
          function on(eventType, handler, options) {
              if (options === void 0) options = false;
              var nodes = normalizeToArray(instance.props.triggerTarget || reference);
              nodes.forEach((function(node) {
                  node.addEventListener(eventType, handler, options);
                  listeners.push({
                      node,
                      eventType,
                      handler,
                      options
                  });
              }));
          }
          function addListeners() {
              if (getIsCustomTouchBehavior()) {
                  on("touchstart", onTrigger, {
                      passive: true
                  });
                  on("touchend", onMouseLeave, {
                      passive: true
                  });
              }
              splitBySpaces(instance.props.trigger).forEach((function(eventType) {
                  if (eventType === "manual") return;
                  on(eventType, onTrigger);
                  switch (eventType) {
                    case "mouseenter":
                      on("mouseleave", onMouseLeave);
                      break;

                    case "focus":
                      on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                      break;

                    case "focusin":
                      on("focusout", onBlurOrFocusOut);
                      break;
                  }
              }));
          }
          function removeListeners() {
              listeners.forEach((function(_ref) {
                  var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
                  node.removeEventListener(eventType, handler, options);
              }));
              listeners = [];
          }
          function onTrigger(event) {
              var _lastTriggerEvent;
              var shouldScheduleClickHide = false;
              if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
              var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
              lastTriggerEvent = event;
              currentTarget = event.currentTarget;
              handleAriaExpandedAttribute();
              if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
                  return listener(event);
              }));
              if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
              if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
              if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
          }
          function onMouseMove(event) {
              var target = event.target;
              var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
              if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
              var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
                  var _instance$popperInsta;
                  var instance = popper._tippy;
                  var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                  if (state) return {
                      popperRect: popper.getBoundingClientRect(),
                      popperState: state,
                      props
                  };
                  return null;
              })).filter(Boolean);
              if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
                  cleanupInteractiveMouseListeners();
                  scheduleHide(event);
              }
          }
          function onMouseLeave(event) {
              var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
              if (shouldBail) return;
              if (instance.props.interactive) {
                  instance.hideWithInteractivity(event);
                  return;
              }
              scheduleHide(event);
          }
          function onBlurOrFocusOut(event) {
              if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
              if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
              scheduleHide(event);
          }
          function isEventListenerStopped(event) {
              return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
          }
          function createPopperInstance() {
              destroyPopperInstance();
              var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
              var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
              var computedReference = getReferenceClientRect ? {
                  getBoundingClientRect: getReferenceClientRect,
                  contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
              } : reference;
              var tippyModifier = {
                  name: "$$tippy",
                  enabled: true,
                  phase: "beforeWrite",
                  requires: [ "computeStyles" ],
                  fn: function fn(_ref2) {
                      var state = _ref2.state;
                      if (getIsDefaultRenderFn()) {
                          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                          [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                              if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                          }));
                          state.attributes.popper = {};
                      }
                  }
              };
              var modifiers = [ {
                  name: "offset",
                  options: {
                      offset
                  }
              }, {
                  name: "preventOverflow",
                  options: {
                      padding: {
                          top: 2,
                          bottom: 2,
                          left: 5,
                          right: 5
                      }
                  }
              }, {
                  name: "flip",
                  options: {
                      padding: 5
                  }
              }, {
                  name: "computeStyles",
                  options: {
                      adaptive: !moveTransition
                  }
              }, tippyModifier ];
              if (getIsDefaultRenderFn() && arrow) modifiers.push({
                  name: "arrow",
                  options: {
                      element: arrow,
                      padding: 3
                  }
              });
              modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
              instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                  placement,
                  onFirstUpdate,
                  modifiers
              }));
          }
          function destroyPopperInstance() {
              if (instance.popperInstance) {
                  instance.popperInstance.destroy();
                  instance.popperInstance = null;
              }
          }
          function mount() {
              var appendTo = instance.props.appendTo;
              var parentNode;
              var node = getCurrentTarget();
              if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
              if (!parentNode.contains(popper)) parentNode.appendChild(popper);
              instance.state.isMounted = true;
              createPopperInstance();
              if (false) ;
          }
          function getNestedPopperTree() {
              return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
          }
          function scheduleShow(event) {
              instance.clearDelayTimeouts();
              if (event) invokeHook("onTrigger", [ instance, event ]);
              addDocumentPress();
              var delay = getDelay(true);
              var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
              if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
              if (delay) showTimeout = setTimeout((function() {
                  instance.show();
              }), delay); else instance.show();
          }
          function scheduleHide(event) {
              instance.clearDelayTimeouts();
              invokeHook("onUntrigger", [ instance, event ]);
              if (!instance.state.isVisible) {
                  removeDocumentPress();
                  return;
              }
              if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
              var delay = getDelay(false);
              if (delay) hideTimeout = setTimeout((function() {
                  if (instance.state.isVisible) instance.hide();
              }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
                  instance.hide();
              }));
          }
          function enable() {
              instance.state.isEnabled = true;
          }
          function disable() {
              instance.hide();
              instance.state.isEnabled = false;
          }
          function clearDelayTimeouts() {
              clearTimeout(showTimeout);
              clearTimeout(hideTimeout);
              cancelAnimationFrame(scheduleHideAnimationFrame);
          }
          function setProps(partialProps) {
              if (false) ;
              if (instance.state.isDestroyed) return;
              invokeHook("onBeforeUpdate", [ instance, partialProps ]);
              removeListeners();
              var prevProps = instance.props;
              var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                  ignoreAttributes: true
              }));
              instance.props = nextProps;
              addListeners();
              if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
                  cleanupInteractiveMouseListeners();
                  debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
              }
              if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
                  node.removeAttribute("aria-expanded");
              })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
              handleAriaExpandedAttribute();
              handleStyles();
              if (onUpdate) onUpdate(prevProps, nextProps);
              if (instance.popperInstance) {
                  createPopperInstance();
                  getNestedPopperTree().forEach((function(nestedPopper) {
                      requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                  }));
              }
              invokeHook("onAfterUpdate", [ instance, partialProps ]);
          }
          function setContent(content) {
              instance.setProps({
                  content
              });
          }
          function show() {
              if (false) ;
              var isAlreadyVisible = instance.state.isVisible;
              var isDestroyed = instance.state.isDestroyed;
              var isDisabled = !instance.state.isEnabled;
              var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
              var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
              if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
              if (getCurrentTarget().hasAttribute("disabled")) return;
              invokeHook("onShow", [ instance ], false);
              if (instance.props.onShow(instance) === false) return;
              instance.state.isVisible = true;
              if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
              handleStyles();
              addDocumentPress();
              if (!instance.state.isMounted) popper.style.transition = "none";
              if (getIsDefaultRenderFn()) {
                  var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
                  setTransitionDuration([ box, content ], 0);
              }
              onFirstUpdate = function onFirstUpdate() {
                  var _instance$popperInsta2;
                  if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
                  ignoreOnFirstUpdate = true;
                  void popper.offsetHeight;
                  popper.style.transition = instance.props.moveTransition;
                  if (getIsDefaultRenderFn() && instance.props.animation) {
                      var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                      setTransitionDuration([ _box, _content ], duration);
                      setVisibilityState([ _box, _content ], "visible");
                  }
                  handleAriaContentAttribute();
                  handleAriaExpandedAttribute();
                  pushIfUnique(mountedInstances, instance);
                  (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                  invokeHook("onMount", [ instance ]);
                  if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                      instance.state.isShown = true;
                      invokeHook("onShown", [ instance ]);
                  }));
              };
              mount();
          }
          function hide() {
              if (false) ;
              var isAlreadyHidden = !instance.state.isVisible;
              var isDestroyed = instance.state.isDestroyed;
              var isDisabled = !instance.state.isEnabled;
              var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
              if (isAlreadyHidden || isDestroyed || isDisabled) return;
              invokeHook("onHide", [ instance ], false);
              if (instance.props.onHide(instance) === false) return;
              instance.state.isVisible = false;
              instance.state.isShown = false;
              ignoreOnFirstUpdate = false;
              isVisibleFromClick = false;
              if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
              cleanupInteractiveMouseListeners();
              removeDocumentPress();
              handleStyles(true);
              if (getIsDefaultRenderFn()) {
                  var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
                  if (instance.props.animation) {
                      setTransitionDuration([ box, content ], duration);
                      setVisibilityState([ box, content ], "hidden");
                  }
              }
              handleAriaContentAttribute();
              handleAriaExpandedAttribute();
              if (instance.props.animation) {
                  if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
              } else instance.unmount();
          }
          function hideWithInteractivity(event) {
              if (false) ;
              getDocument().addEventListener("mousemove", debouncedOnMouseMove);
              pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
              debouncedOnMouseMove(event);
          }
          function unmount() {
              if (false) ;
              if (instance.state.isVisible) instance.hide();
              if (!instance.state.isMounted) return;
              destroyPopperInstance();
              getNestedPopperTree().forEach((function(nestedPopper) {
                  nestedPopper._tippy.unmount();
              }));
              if (popper.parentNode) popper.parentNode.removeChild(popper);
              mountedInstances = mountedInstances.filter((function(i) {
                  return i !== instance;
              }));
              instance.state.isMounted = false;
              invokeHook("onHidden", [ instance ]);
          }
          function destroy() {
              if (false) ;
              if (instance.state.isDestroyed) return;
              instance.clearDelayTimeouts();
              instance.unmount();
              removeListeners();
              delete reference._tippy;
              instance.state.isDestroyed = true;
              invokeHook("onDestroy", [ instance ]);
          }
      }
      function tippy(targets, optionalProps) {
          if (optionalProps === void 0) optionalProps = {};
          var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
          if (false) ;
          bindGlobalEventListeners();
          var passedProps = Object.assign({}, optionalProps, {
              plugins
          });
          var elements = getArrayOfElements(targets);
          if (false) ;
          var instances = elements.reduce((function(acc, reference) {
              var instance = reference && createTippy(reference, passedProps);
              if (instance) acc.push(instance);
              return acc;
          }), []);
          return tippy_esm_isElement(targets) ? instances[0] : instances;
      }
      tippy.defaultProps = defaultProps;
      tippy.setDefaultProps = setDefaultProps;
      tippy.currentInput = currentInput;
      Object.assign({}, modifiers_applyStyles, {
          effect: function effect(_ref) {
              var state = _ref.state;
              var initialStyles = {
                  popper: {
                      position: state.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0"
                  },
                  arrow: {
                      position: "absolute"
                  },
                  reference: {}
              };
              Object.assign(state.elements.popper.style, initialStyles.popper);
              state.styles = initialStyles;
              if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
      });
      tippy.setDefaultProps({
          render
      });
      const tippy_esm = tippy;
      modules_flsModules.tippy = tippy_esm(".more-info-icon", {
          content(reference) {
              const id = reference.getAttribute("data-template");
              const template = document.getElementById(id);
              return template.innerHTML;
          },
          animation: "fade",
          placement: "top-end",
          allowHTML: true
      });
      function ssr_window_esm_isObject(obj) {
          return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
      }
      function extend(target, src) {
          if (target === void 0) target = {};
          if (src === void 0) src = {};
          Object.keys(src).forEach((key => {
              if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
          }));
      }
      const ssrDocument = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: {
              blur() {},
              nodeName: ""
          },
          querySelector() {
              return null;
          },
          querySelectorAll() {
              return [];
          },
          getElementById() {
              return null;
          },
          createEvent() {
              return {
                  initEvent() {}
              };
          },
          createElement() {
              return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute() {},
                  getElementsByTagName() {
                      return [];
                  }
              };
          },
          createElementNS() {
              return {};
          },
          importNode() {
              return null;
          },
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          }
      };
      function ssr_window_esm_getDocument() {
          const doc = typeof document !== "undefined" ? document : {};
          extend(doc, ssrDocument);
          return doc;
      }
      const ssrWindow = {
          document: ssrDocument,
          navigator: {
              userAgent: ""
          },
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          },
          history: {
              replaceState() {},
              pushState() {},
              go() {},
              back() {}
          },
          CustomEvent: function CustomEvent() {
              return this;
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle() {
              return {
                  getPropertyValue() {
                      return "";
                  }
              };
          },
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia() {
              return {};
          },
          requestAnimationFrame(callback) {
              if (typeof setTimeout === "undefined") {
                  callback();
                  return null;
              }
              return setTimeout(callback, 0);
          },
          cancelAnimationFrame(id) {
              if (typeof setTimeout === "undefined") return;
              clearTimeout(id);
          }
      };
      function ssr_window_esm_getWindow() {
          const win = typeof window !== "undefined" ? window : {};
          extend(win, ssrWindow);
          return win;
      }
      function deleteProps(obj) {
          const object = obj;
          Object.keys(object).forEach((key => {
              try {
                  object[key] = null;
              } catch (e) {}
              try {
                  delete object[key];
              } catch (e) {}
          }));
      }
      function utils_nextTick(callback, delay) {
          if (delay === void 0) delay = 0;
          return setTimeout(callback, delay);
      }
      function utils_now() {
          return Date.now();
      }
      function utils_getComputedStyle(el) {
          const window = ssr_window_esm_getWindow();
          let style;
          if (window.getComputedStyle) style = window.getComputedStyle(el, null);
          if (!style && el.currentStyle) style = el.currentStyle;
          if (!style) style = el.style;
          return style;
      }
      function utils_getTranslate(el, axis) {
          if (axis === void 0) axis = "x";
          const window = ssr_window_esm_getWindow();
          let matrix;
          let curTransform;
          let transformMatrix;
          const curStyle = utils_getComputedStyle(el);
          if (window.WebKitCSSMatrix) {
              curTransform = curStyle.transform || curStyle.webkitTransform;
              if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
              transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
          } else {
              transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
              matrix = transformMatrix.toString().split(",");
          }
          if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
          if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
          return curTransform || 0;
      }
      function utils_isObject(o) {
          return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
      }
      function isNode(node) {
          if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
          return node && (node.nodeType === 1 || node.nodeType === 11);
      }
      function utils_extend() {
          const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
          const noExtend = [ "__proto__", "constructor", "prototype" ];
          for (let i = 1; i < arguments.length; i += 1) {
              const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
              if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                  const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                  for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                      const nextKey = keysArray[nextIndex];
                      const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                      if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                          to[nextKey] = {};
                          if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                      } else to[nextKey] = nextSource[nextKey];
                  }
              }
          }
          return to;
      }
      function utils_setCSSProperty(el, varName, varValue) {
          el.style.setProperty(varName, varValue);
      }
      function animateCSSModeScroll(_ref) {
          let {swiper, targetPosition, side} = _ref;
          const window = ssr_window_esm_getWindow();
          const startPosition = -swiper.translate;
          let startTime = null;
          let time;
          const duration = swiper.params.speed;
          swiper.wrapperEl.style.scrollSnapType = "none";
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          const dir = targetPosition > startPosition ? "next" : "prev";
          const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
          const animate = () => {
              time = (new Date).getTime();
              if (startTime === null) startTime = time;
              const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
              const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
              let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
              if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
              swiper.wrapperEl.scrollTo({
                  [side]: currentPosition
              });
              if (isOutOfBound(currentPosition, targetPosition)) {
                  swiper.wrapperEl.style.overflow = "hidden";
                  swiper.wrapperEl.style.scrollSnapType = "";
                  setTimeout((() => {
                      swiper.wrapperEl.style.overflow = "";
                      swiper.wrapperEl.scrollTo({
                          [side]: currentPosition
                      });
                  }));
                  window.cancelAnimationFrame(swiper.cssModeFrameID);
                  return;
              }
              swiper.cssModeFrameID = window.requestAnimationFrame(animate);
          };
          animate();
      }
      function utils_elementChildren(element, selector) {
          if (selector === void 0) selector = "";
          return [ ...element.children ].filter((el => el.matches(selector)));
      }
      function utils_createElement(tag, classes) {
          if (classes === void 0) classes = [];
          const el = document.createElement(tag);
          el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
          return el;
      }
      function utils_elementOffset(el) {
          const window = ssr_window_esm_getWindow();
          const document = ssr_window_esm_getDocument();
          const box = el.getBoundingClientRect();
          const body = document.body;
          const clientTop = el.clientTop || body.clientTop || 0;
          const clientLeft = el.clientLeft || body.clientLeft || 0;
          const scrollTop = el === window ? window.scrollY : el.scrollTop;
          const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
          return {
              top: box.top + scrollTop - clientTop,
              left: box.left + scrollLeft - clientLeft
          };
      }
      function elementPrevAll(el, selector) {
          const prevEls = [];
          while (el.previousElementSibling) {
              const prev = el.previousElementSibling;
              if (selector) {
                  if (prev.matches(selector)) prevEls.push(prev);
              } else prevEls.push(prev);
              el = prev;
          }
          return prevEls;
      }
      function elementNextAll(el, selector) {
          const nextEls = [];
          while (el.nextElementSibling) {
              const next = el.nextElementSibling;
              if (selector) {
                  if (next.matches(selector)) nextEls.push(next);
              } else nextEls.push(next);
              el = next;
          }
          return nextEls;
      }
      function elementStyle(el, prop) {
          const window = ssr_window_esm_getWindow();
          return window.getComputedStyle(el, null).getPropertyValue(prop);
      }
      function utils_elementIndex(el) {
          let child = el;
          let i;
          if (child) {
              i = 0;
              while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
              return i;
          }
          return;
      }
      function utils_elementParents(el, selector) {
          const parents = [];
          let parent = el.parentElement;
          while (parent) {
              if (selector) {
                  if (parent.matches(selector)) parents.push(parent);
              } else parents.push(parent);
              parent = parent.parentElement;
          }
          return parents;
      }
      function elementOuterSize(el, size, includeMargins) {
          const window = ssr_window_esm_getWindow();
          if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
          return el.offsetWidth;
      }
      let support;
      function calcSupport() {
          const window = ssr_window_esm_getWindow();
          const document = ssr_window_esm_getDocument();
          return {
              smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
              touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
          };
      }
      function getSupport() {
          if (!support) support = calcSupport();
          return support;
      }
      let deviceCached;
      function calcDevice(_temp) {
          let {userAgent} = _temp === void 0 ? {} : _temp;
          const support = getSupport();
          const window = ssr_window_esm_getWindow();
          const platform = window.navigator.platform;
          const ua = userAgent || window.navigator.userAgent;
          const device = {
              ios: false,
              android: false
          };
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
          let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          const windows = platform === "Win32";
          let macos = platform === "MacIntel";
          const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
          if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
              ipad = ua.match(/(Version)\/([\d.]+)/);
              if (!ipad) ipad = [ 0, 1, "13_0_0" ];
              macos = false;
          }
          if (android && !windows) {
              device.os = "android";
              device.android = true;
          }
          if (ipad || iphone || ipod) {
              device.os = "ios";
              device.ios = true;
          }
          return device;
      }
      function getDevice(overrides) {
          if (overrides === void 0) overrides = {};
          if (!deviceCached) deviceCached = calcDevice(overrides);
          return deviceCached;
      }
      let browser;
      function calcBrowser() {
          const window = ssr_window_esm_getWindow();
          let needPerspectiveFix = false;
          function isSafari() {
              const ua = window.navigator.userAgent.toLowerCase();
              return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
          }
          if (isSafari()) {
              const ua = String(window.navigator.userAgent);
              if (ua.includes("Version/")) {
                  const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                  needPerspectiveFix = major < 16 || major === 16 && minor < 2;
              }
          }
          return {
              isSafari: needPerspectiveFix || isSafari(),
              needPerspectiveFix,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
          };
      }
      function getBrowser() {
          if (!browser) browser = calcBrowser();
          return browser;
      }
      function Resize(_ref) {
          let {swiper, on, emit} = _ref;
          const window = ssr_window_esm_getWindow();
          let observer = null;
          let animationFrame = null;
          const resizeHandler = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              emit("beforeResize");
              emit("resize");
          };
          const createObserver = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              observer = new ResizeObserver((entries => {
                  animationFrame = window.requestAnimationFrame((() => {
                      const {width, height} = swiper;
                      let newWidth = width;
                      let newHeight = height;
                      entries.forEach((_ref2 => {
                          let {contentBoxSize, contentRect, target} = _ref2;
                          if (target && target !== swiper.el) return;
                          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                      }));
                      if (newWidth !== width || newHeight !== height) resizeHandler();
                  }));
              }));
              observer.observe(swiper.el);
          };
          const removeObserver = () => {
              if (animationFrame) window.cancelAnimationFrame(animationFrame);
              if (observer && observer.unobserve && swiper.el) {
                  observer.unobserve(swiper.el);
                  observer = null;
              }
          };
          const orientationChangeHandler = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              emit("orientationchange");
          };
          on("init", (() => {
              if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                  createObserver();
                  return;
              }
              window.addEventListener("resize", resizeHandler);
              window.addEventListener("orientationchange", orientationChangeHandler);
          }));
          on("destroy", (() => {
              removeObserver();
              window.removeEventListener("resize", resizeHandler);
              window.removeEventListener("orientationchange", orientationChangeHandler);
          }));
      }
      function Observer(_ref) {
          let {swiper, extendParams, on, emit} = _ref;
          const observers = [];
          const window = ssr_window_esm_getWindow();
          const attach = function(target, options) {
              if (options === void 0) options = {};
              const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
              const observer = new ObserverFunc((mutations => {
                  if (swiper.__preventObserver__) return;
                  if (mutations.length === 1) {
                      emit("observerUpdate", mutations[0]);
                      return;
                  }
                  const observerUpdate = function observerUpdate() {
                      emit("observerUpdate", mutations[0]);
                  };
                  if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
              }));
              observer.observe(target, {
                  attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                  childList: typeof options.childList === "undefined" ? true : options.childList,
                  characterData: typeof options.characterData === "undefined" ? true : options.characterData
              });
              observers.push(observer);
          };
          const init = () => {
              if (!swiper.params.observer) return;
              if (swiper.params.observeParents) {
                  const containerParents = utils_elementParents(swiper.hostEl);
                  for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
              }
              attach(swiper.hostEl, {
                  childList: swiper.params.observeSlideChildren
              });
              attach(swiper.wrapperEl, {
                  attributes: false
              });
          };
          const destroy = () => {
              observers.forEach((observer => {
                  observer.disconnect();
              }));
              observers.splice(0, observers.length);
          };
          extendParams({
              observer: false,
              observeParents: false,
              observeSlideChildren: false
          });
          on("init", init);
          on("destroy", destroy);
      }
      var eventsEmitter = {
          on(events, handler, priority) {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (typeof handler !== "function") return self;
              const method = priority ? "unshift" : "push";
              events.split(" ").forEach((event => {
                  if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                  self.eventsListeners[event][method](handler);
              }));
              return self;
          },
          once(events, handler, priority) {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (typeof handler !== "function") return self;
              function onceHandler() {
                  self.off(events, onceHandler);
                  if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                  handler.apply(self, args);
              }
              onceHandler.__emitterProxy = handler;
              return self.on(events, onceHandler, priority);
          },
          onAny(handler, priority) {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (typeof handler !== "function") return self;
              const method = priority ? "unshift" : "push";
              if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
              return self;
          },
          offAny(handler) {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (!self.eventsAnyListeners) return self;
              const index = self.eventsAnyListeners.indexOf(handler);
              if (index >= 0) self.eventsAnyListeners.splice(index, 1);
              return self;
          },
          off(events, handler) {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (!self.eventsListeners) return self;
              events.split(" ").forEach((event => {
                  if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                      if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                  }));
              }));
              return self;
          },
          emit() {
              const self = this;
              if (!self.eventsListeners || self.destroyed) return self;
              if (!self.eventsListeners) return self;
              let events;
              let data;
              let context;
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
              if (typeof args[0] === "string" || Array.isArray(args[0])) {
                  events = args[0];
                  data = args.slice(1, args.length);
                  context = self;
              } else {
                  events = args[0].events;
                  data = args[0].data;
                  context = args[0].context || self;
              }
              data.unshift(context);
              const eventsArray = Array.isArray(events) ? events : events.split(" ");
              eventsArray.forEach((event => {
                  if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                      eventHandler.apply(context, [ event, ...data ]);
                  }));
                  if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                      eventHandler.apply(context, data);
                  }));
              }));
              return self;
          }
      };
      function updateSize() {
          const swiper = this;
          let width;
          let height;
          const el = swiper.el;
          if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
          if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
          if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
          width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
          height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
          if (Number.isNaN(width)) width = 0;
          if (Number.isNaN(height)) height = 0;
          Object.assign(swiper, {
              width,
              height,
              size: swiper.isHorizontal() ? width : height
          });
      }
      function updateSlides() {
          const swiper = this;
          function getDirectionLabel(property) {
              if (swiper.isHorizontal()) return property;
              return {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom"
              }[property];
          }
          function getDirectionPropertyValue(node, label) {
              return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
          }
          const params = swiper.params;
          const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
          const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
          const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
          let snapGrid = [];
          const slidesGrid = [];
          const slidesSizesGrid = [];
          let offsetBefore = params.slidesOffsetBefore;
          if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
          let offsetAfter = params.slidesOffsetAfter;
          if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
          const previousSnapGridLength = swiper.snapGrid.length;
          const previousSlidesGridLength = swiper.slidesGrid.length;
          let spaceBetween = params.spaceBetween;
          let slidePosition = -offsetBefore;
          let prevSlideSize = 0;
          let index = 0;
          if (typeof swiperSize === "undefined") return;
          if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
          swiper.virtualSize = -spaceBetween;
          slides.forEach((slideEl => {
              if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
              slideEl.style.marginBottom = "";
              slideEl.style.marginTop = "";
          }));
          if (params.centeredSlides && params.cssMode) {
              utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
              utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
          }
          const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
          if (gridEnabled) swiper.grid.initSlides(slidesLength);
          let slideSize;
          const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
          for (let i = 0; i < slidesLength; i += 1) {
              slideSize = 0;
              let slide;
              if (slides[i]) slide = slides[i];
              if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
              if (slides[i] && elementStyle(slide, "display") === "none") continue;
              if (params.slidesPerView === "auto") {
                  if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                  const slideStyles = getComputedStyle(slide);
                  const currentTransform = slide.style.transform;
                  const currentWebKitTransform = slide.style.webkitTransform;
                  if (currentTransform) slide.style.transform = "none";
                  if (currentWebKitTransform) slide.style.webkitTransform = "none";
                  if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                      const width = getDirectionPropertyValue(slideStyles, "width");
                      const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                      const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                      const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                      const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                      const boxSizing = slideStyles.getPropertyValue("box-sizing");
                      if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                          const {clientWidth, offsetWidth} = slide;
                          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                      }
                  }
                  if (currentTransform) slide.style.transform = currentTransform;
                  if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                  if (params.roundLengths) slideSize = Math.floor(slideSize);
              } else {
                  slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                  if (params.roundLengths) slideSize = Math.floor(slideSize);
                  if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
              }
              if (slides[i]) slides[i].swiperSlideSize = slideSize;
              slidesSizesGrid.push(slideSize);
              if (params.centeredSlides) {
                  slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                  if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                  if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                  if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                  if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                  if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                  slidesGrid.push(slidePosition);
              } else {
                  if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                  if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                  slidesGrid.push(slidePosition);
                  slidePosition = slidePosition + slideSize + spaceBetween;
              }
              swiper.virtualSize += slideSize + spaceBetween;
              prevSlideSize = slideSize;
              index += 1;
          }
          swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
          if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
          if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
          if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
          if (!params.centeredSlides) {
              const newSlidesGrid = [];
              for (let i = 0; i < snapGrid.length; i += 1) {
                  let slidesGridItem = snapGrid[i];
                  if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                  if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
              }
              snapGrid = newSlidesGrid;
              if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
          }
          if (isVirtual && params.loop) {
              const size = slidesSizesGrid[0] + spaceBetween;
              if (params.slidesPerGroup > 1) {
                  const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                  const groupSize = size * params.slidesPerGroup;
                  for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
              }
              for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                  if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                  slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                  swiper.virtualSize += size;
              }
          }
          if (snapGrid.length === 0) snapGrid = [ 0 ];
          if (spaceBetween !== 0) {
              const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
              slides.filter(((_, slideIndex) => {
                  if (!params.cssMode || params.loop) return true;
                  if (slideIndex === slides.length - 1) return false;
                  return true;
              })).forEach((slideEl => {
                  slideEl.style[key] = `${spaceBetween}px`;
              }));
          }
          if (params.centeredSlides && params.centeredSlidesBounds) {
              let allSlidesSize = 0;
              slidesSizesGrid.forEach((slideSizeValue => {
                  allSlidesSize += slideSizeValue + (spaceBetween || 0);
              }));
              allSlidesSize -= spaceBetween;
              const maxSnap = allSlidesSize - swiperSize;
              snapGrid = snapGrid.map((snap => {
                  if (snap <= 0) return -offsetBefore;
                  if (snap > maxSnap) return maxSnap + offsetAfter;
                  return snap;
              }));
          }
          if (params.centerInsufficientSlides) {
              let allSlidesSize = 0;
              slidesSizesGrid.forEach((slideSizeValue => {
                  allSlidesSize += slideSizeValue + (spaceBetween || 0);
              }));
              allSlidesSize -= spaceBetween;
              if (allSlidesSize < swiperSize) {
                  const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                  snapGrid.forEach(((snap, snapIndex) => {
                      snapGrid[snapIndex] = snap - allSlidesOffset;
                  }));
                  slidesGrid.forEach(((snap, snapIndex) => {
                      slidesGrid[snapIndex] = snap + allSlidesOffset;
                  }));
              }
          }
          Object.assign(swiper, {
              slides,
              snapGrid,
              slidesGrid,
              slidesSizesGrid
          });
          if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
              utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
              utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
              const addToSnapGrid = -swiper.snapGrid[0];
              const addToSlidesGrid = -swiper.slidesGrid[0];
              swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
              swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
          }
          if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
          if (snapGrid.length !== previousSnapGridLength) {
              if (swiper.params.watchOverflow) swiper.checkOverflow();
              swiper.emit("snapGridLengthChange");
          }
          if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
          if (params.watchSlidesProgress) swiper.updateSlidesOffset();
          if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
              const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
              const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
              if (slidesLength <= params.maxBackfaceHiddenSlides) {
                  if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
              } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
          }
      }
      function updateAutoHeight(speed) {
          const swiper = this;
          const activeSlides = [];
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          let newHeight = 0;
          let i;
          if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
          const getSlideByIndex = index => {
              if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
              return swiper.slides[index];
          };
          if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
              activeSlides.push(slide);
          })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
              const index = swiper.activeIndex + i;
              if (index > swiper.slides.length && !isVirtual) break;
              activeSlides.push(getSlideByIndex(index));
          } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
          for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
              const height = activeSlides[i].offsetHeight;
              newHeight = height > newHeight ? height : newHeight;
          }
          if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
      }
      function updateSlidesOffset() {
          const swiper = this;
          const slides = swiper.slides;
          const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
          for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
      }
      function updateSlidesProgress(translate) {
          if (translate === void 0) translate = this && this.translate || 0;
          const swiper = this;
          const params = swiper.params;
          const {slides, rtlTranslate: rtl, snapGrid} = swiper;
          if (slides.length === 0) return;
          if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
          let offsetCenter = -translate;
          if (rtl) offsetCenter = translate;
          slides.forEach((slideEl => {
              slideEl.classList.remove(params.slideVisibleClass);
          }));
          swiper.visibleSlidesIndexes = [];
          swiper.visibleSlides = [];
          let spaceBetween = params.spaceBetween;
          if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
          for (let i = 0; i < slides.length; i += 1) {
              const slide = slides[i];
              let slideOffset = slide.swiperSlideOffset;
              if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
              const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
              const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
              const slideBefore = -(offsetCenter - slideOffset);
              const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
              const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
              if (isVisible) {
                  swiper.visibleSlides.push(slide);
                  swiper.visibleSlidesIndexes.push(i);
                  slides[i].classList.add(params.slideVisibleClass);
              }
              slide.progress = rtl ? -slideProgress : slideProgress;
              slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
          }
      }
      function updateProgress(translate) {
          const swiper = this;
          if (typeof translate === "undefined") {
              const multiplier = swiper.rtlTranslate ? -1 : 1;
              translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
          }
          const params = swiper.params;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          let {progress, isBeginning, isEnd, progressLoop} = swiper;
          const wasBeginning = isBeginning;
          const wasEnd = isEnd;
          if (translatesDiff === 0) {
              progress = 0;
              isBeginning = true;
              isEnd = true;
          } else {
              progress = (translate - swiper.minTranslate()) / translatesDiff;
              const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
              const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
              isBeginning = isBeginningRounded || progress <= 0;
              isEnd = isEndRounded || progress >= 1;
              if (isBeginningRounded) progress = 0;
              if (isEndRounded) progress = 1;
          }
          if (params.loop) {
              const firstSlideIndex = swiper.getSlideIndexByData(0);
              const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
              const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
              const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
              const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
              const translateAbs = Math.abs(translate);
              if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
              if (progressLoop > 1) progressLoop -= 1;
          }
          Object.assign(swiper, {
              progress,
              progressLoop,
              isBeginning,
              isEnd
          });
          if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
          if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
          if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
          if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
          swiper.emit("progress", progress);
      }
      function updateSlidesClasses() {
          const swiper = this;
          const {slides, params, slidesEl, activeIndex} = swiper;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
          slides.forEach((slideEl => {
              slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          }));
          let activeSlide;
          if (isVirtual) if (params.loop) {
              let slideIndex = activeIndex - swiper.virtual.slidesBefore;
              if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
              if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
              activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
          } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
          if (activeSlide) {
              activeSlide.classList.add(params.slideActiveClass);
              let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
              if (params.loop && !nextSlide) nextSlide = slides[0];
              if (nextSlide) nextSlide.classList.add(params.slideNextClass);
              let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
              if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
              if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
          }
          swiper.emitSlidesClasses();
      }
      const processLazyPreloader = (swiper, imageEl) => {
          if (!swiper || swiper.destroyed || !swiper.params) return;
          const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
          const slideEl = imageEl.closest(slideSelector());
          if (slideEl) {
              let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                  if (slideEl.shadowRoot) {
                      lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                      if (lazyEl) lazyEl.remove();
                  }
              }));
              if (lazyEl) lazyEl.remove();
          }
      };
      const unlazy = (swiper, index) => {
          if (!swiper.slides[index]) return;
          const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
          if (imageEl) imageEl.removeAttribute("loading");
      };
      const preload = swiper => {
          if (!swiper || swiper.destroyed || !swiper.params) return;
          let amount = swiper.params.lazyPreloadPrevNext;
          const len = swiper.slides.length;
          if (!len || !amount || amount < 0) return;
          amount = Math.min(amount, len);
          const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
          const activeIndex = swiper.activeIndex;
          if (swiper.params.grid && swiper.params.grid.rows > 1) {
              const activeColumn = activeIndex;
              const preloadColumns = [ activeColumn - amount ];
              preloadColumns.push(...Array.from({
                  length: amount
              }).map(((_, i) => activeColumn + slidesPerView + i)));
              swiper.slides.forEach(((slideEl, i) => {
                  if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
              }));
              return;
          }
          const slideIndexLastInView = activeIndex + slidesPerView - 1;
          if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
              const realIndex = (i % len + len) % len;
              if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
          } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
      };
      function getActiveIndexByTranslate(swiper) {
          const {slidesGrid, params} = swiper;
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
          let activeIndex;
          for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
              if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
          } else if (translate >= slidesGrid[i]) activeIndex = i;
          if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
          return activeIndex;
      }
      function updateActiveIndex(newActiveIndex) {
          const swiper = this;
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
          const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
          let activeIndex = newActiveIndex;
          let snapIndex;
          const getVirtualRealIndex = aIndex => {
              let realIndex = aIndex - swiper.virtual.slidesBefore;
              if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
              if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
              return realIndex;
          };
          if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
          if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
              const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
              snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
          }
          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
          if (activeIndex === previousIndex) {
              if (snapIndex !== previousSnapIndex) {
                  swiper.snapIndex = snapIndex;
                  swiper.emit("snapIndexChange");
              }
              if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
              return;
          }
          let realIndex;
          if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
          Object.assign(swiper, {
              previousSnapIndex,
              snapIndex,
              previousRealIndex,
              realIndex,
              previousIndex,
              activeIndex
          });
          if (swiper.initialized) preload(swiper);
          swiper.emit("activeIndexChange");
          swiper.emit("snapIndexChange");
          if (swiper.initialized || swiper.params.runCallbacksOnInit) {
              if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
              swiper.emit("slideChange");
          }
      }
      function updateClickedSlide(el, path) {
          const swiper = this;
          const params = swiper.params;
          let slide = el.closest(`.${params.slideClass}, swiper-slide`);
          if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
              if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
          }));
          let slideFound = false;
          let slideIndex;
          if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
              slideFound = true;
              slideIndex = i;
              break;
          }
          if (slide && slideFound) {
              swiper.clickedSlide = slide;
              if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
          } else {
              swiper.clickedSlide = void 0;
              swiper.clickedIndex = void 0;
              return;
          }
          if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
      }
      var update = {
          updateSize,
          updateSlides,
          updateAutoHeight,
          updateSlidesOffset,
          updateSlidesProgress,
          updateProgress,
          updateSlidesClasses,
          updateActiveIndex,
          updateClickedSlide
      };
      function getSwiperTranslate(axis) {
          if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
          const swiper = this;
          const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
          if (params.virtualTranslate) return rtl ? -translate : translate;
          if (params.cssMode) return translate;
          let currentTranslate = utils_getTranslate(wrapperEl, axis);
          currentTranslate += swiper.cssOverflowAdjustment();
          if (rtl) currentTranslate = -currentTranslate;
          return currentTranslate || 0;
      }
      function setTranslate(translate, byController) {
          const swiper = this;
          const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
          let x = 0;
          let y = 0;
          const z = 0;
          if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
          if (params.roundLengths) {
              x = Math.floor(x);
              y = Math.floor(y);
          }
          swiper.previousTranslate = swiper.translate;
          swiper.translate = swiper.isHorizontal() ? x : y;
          if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
              if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
              wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
          }
          let newProgress;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
          if (newProgress !== progress) swiper.updateProgress(translate);
          swiper.emit("setTranslate", swiper.translate, byController);
      }
      function minTranslate() {
          return -this.snapGrid[0];
      }
      function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
      }
      function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
          if (translate === void 0) translate = 0;
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          if (translateBounds === void 0) translateBounds = true;
          const swiper = this;
          const {params, wrapperEl} = swiper;
          if (swiper.animating && params.preventInteractionOnTransition) return false;
          const minTranslate = swiper.minTranslate();
          const maxTranslate = swiper.maxTranslate();
          let newTranslate;
          if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
          swiper.updateProgress(newTranslate);
          if (params.cssMode) {
              const isH = swiper.isHorizontal();
              if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                  if (!swiper.support.smoothScroll) {
                      animateCSSModeScroll({
                          swiper,
                          targetPosition: -newTranslate,
                          side: isH ? "left" : "top"
                      });
                      return true;
                  }
                  wrapperEl.scrollTo({
                      [isH ? "left" : "top"]: -newTranslate,
                      behavior: "smooth"
                  });
              }
              return true;
          }
          if (speed === 0) {
              swiper.setTransition(0);
              swiper.setTranslate(newTranslate);
              if (runCallbacks) {
                  swiper.emit("beforeTransitionStart", speed, internal);
                  swiper.emit("transitionEnd");
              }
          } else {
              swiper.setTransition(speed);
              swiper.setTranslate(newTranslate);
              if (runCallbacks) {
                  swiper.emit("beforeTransitionStart", speed, internal);
                  swiper.emit("transitionStart");
              }
              if (!swiper.animating) {
                  swiper.animating = true;
                  if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                      if (!swiper || swiper.destroyed) return;
                      if (e.target !== this) return;
                      swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                      swiper.onTranslateToWrapperTransitionEnd = null;
                      delete swiper.onTranslateToWrapperTransitionEnd;
                      if (runCallbacks) swiper.emit("transitionEnd");
                  };
                  swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
              }
          }
          return true;
      }
      var translate = {
          getTranslate: getSwiperTranslate,
          setTranslate,
          minTranslate,
          maxTranslate,
          translateTo
      };
      function setTransition(duration, byController) {
          const swiper = this;
          if (!swiper.params.cssMode) {
              swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
              swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
          }
          swiper.emit("setTransition", duration, byController);
      }
      function transitionEmit(_ref) {
          let {swiper, runCallbacks, direction, step} = _ref;
          const {activeIndex, previousIndex} = swiper;
          let dir = direction;
          if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
          swiper.emit(`transition${step}`);
          if (runCallbacks && activeIndex !== previousIndex) {
              if (dir === "reset") {
                  swiper.emit(`slideResetTransition${step}`);
                  return;
              }
              swiper.emit(`slideChangeTransition${step}`);
              if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
          }
      }
      function transitionStart(runCallbacks, direction) {
          if (runCallbacks === void 0) runCallbacks = true;
          const swiper = this;
          const {params} = swiper;
          if (params.cssMode) return;
          if (params.autoHeight) swiper.updateAutoHeight();
          transitionEmit({
              swiper,
              runCallbacks,
              direction,
              step: "Start"
          });
      }
      function transitionEnd(runCallbacks, direction) {
          if (runCallbacks === void 0) runCallbacks = true;
          const swiper = this;
          const {params} = swiper;
          swiper.animating = false;
          if (params.cssMode) return;
          swiper.setTransition(0);
          transitionEmit({
              swiper,
              runCallbacks,
              direction,
              step: "End"
          });
      }
      var transition = {
          setTransition,
          transitionStart,
          transitionEnd
      };
      function slideTo(index, speed, runCallbacks, internal, initial) {
          if (index === void 0) index = 0;
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          if (typeof index === "string") index = parseInt(index, 10);
          const swiper = this;
          let slideIndex = index;
          if (slideIndex < 0) slideIndex = 0;
          const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
          if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
          const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
          let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
          const translate = -snapGrid[snapIndex];
          if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
              const normalizedTranslate = -Math.floor(translate * 100);
              const normalizedGrid = Math.floor(slidesGrid[i] * 100);
              const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
              if (typeof slidesGrid[i + 1] !== "undefined") {
                  if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
              } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
          }
          if (swiper.initialized && slideIndex !== activeIndex) {
              if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
              if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
          }
          if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
          swiper.updateProgress(translate);
          let direction;
          if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
          if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
              swiper.updateActiveIndex(slideIndex);
              if (params.autoHeight) swiper.updateAutoHeight();
              swiper.updateSlidesClasses();
              if (params.effect !== "slide") swiper.setTranslate(translate);
              if (direction !== "reset") {
                  swiper.transitionStart(runCallbacks, direction);
                  swiper.transitionEnd(runCallbacks, direction);
              }
              return false;
          }
          if (params.cssMode) {
              const isH = swiper.isHorizontal();
              const t = rtl ? translate : -translate;
              if (speed === 0) {
                  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                  if (isVirtual) {
                      swiper.wrapperEl.style.scrollSnapType = "none";
                      swiper._immediateVirtual = true;
                  }
                  if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                      swiper._cssModeVirtualInitialSet = true;
                      requestAnimationFrame((() => {
                          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                      }));
                  } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                  if (isVirtual) requestAnimationFrame((() => {
                      swiper.wrapperEl.style.scrollSnapType = "";
                      swiper._immediateVirtual = false;
                  }));
              } else {
                  if (!swiper.support.smoothScroll) {
                      animateCSSModeScroll({
                          swiper,
                          targetPosition: t,
                          side: isH ? "left" : "top"
                      });
                      return true;
                  }
                  wrapperEl.scrollTo({
                      [isH ? "left" : "top"]: t,
                      behavior: "smooth"
                  });
              }
              return true;
          }
          swiper.setTransition(speed);
          swiper.setTranslate(translate);
          swiper.updateActiveIndex(slideIndex);
          swiper.updateSlidesClasses();
          swiper.emit("beforeTransitionStart", speed, internal);
          swiper.transitionStart(runCallbacks, direction);
          if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
              swiper.animating = true;
              if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                  if (!swiper || swiper.destroyed) return;
                  if (e.target !== this) return;
                  swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                  swiper.onSlideToWrapperTransitionEnd = null;
                  delete swiper.onSlideToWrapperTransitionEnd;
                  swiper.transitionEnd(runCallbacks, direction);
              };
              swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          }
          return true;
      }
      function slideToLoop(index, speed, runCallbacks, internal) {
          if (index === void 0) index = 0;
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          if (typeof index === "string") {
              const indexAsNumber = parseInt(index, 10);
              index = indexAsNumber;
          }
          const swiper = this;
          let newIndex = index;
          if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
          return swiper.slideTo(newIndex, speed, runCallbacks, internal);
      }
      function slideNext(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          const swiper = this;
          const {enabled, params, animating} = swiper;
          if (!enabled) return swiper;
          let perGroup = params.slidesPerGroup;
          if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
          const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          if (params.loop) {
              if (animating && !isVirtual && params.loopPreventsSliding) return false;
              swiper.loopFix({
                  direction: "next"
              });
              swiper._clientLeft = swiper.wrapperEl.clientLeft;
              if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                  requestAnimationFrame((() => {
                      swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                  }));
                  return true;
              }
          }
          if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
          return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      }
      function slidePrev(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          const swiper = this;
          const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
          if (!enabled) return swiper;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          if (params.loop) {
              if (animating && !isVirtual && params.loopPreventsSliding) return false;
              swiper.loopFix({
                  direction: "prev"
              });
              swiper._clientLeft = swiper.wrapperEl.clientLeft;
          }
          const translate = rtlTranslate ? swiper.translate : -swiper.translate;
          function normalize(val) {
              if (val < 0) return -Math.floor(Math.abs(val));
              return Math.floor(val);
          }
          const normalizedTranslate = normalize(translate);
          const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
          let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
          if (typeof prevSnap === "undefined" && params.cssMode) {
              let prevSnapIndex;
              snapGrid.forEach(((snap, snapIndex) => {
                  if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
              }));
              if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
          }
          let prevIndex = 0;
          if (typeof prevSnap !== "undefined") {
              prevIndex = slidesGrid.indexOf(prevSnap);
              if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
              if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                  prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                  prevIndex = Math.max(prevIndex, 0);
              }
          }
          if (params.rewind && swiper.isBeginning) {
              const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
              return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
          } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
              requestAnimationFrame((() => {
                  swiper.slideTo(prevIndex, speed, runCallbacks, internal);
              }));
              return true;
          }
          return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      }
      function slideReset(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          const swiper = this;
          return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
      }
      function slideToClosest(speed, runCallbacks, internal, threshold) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;
          if (threshold === void 0) threshold = .5;
          const swiper = this;
          let index = swiper.activeIndex;
          const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
          const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
          if (translate >= swiper.snapGrid[snapIndex]) {
              const currentSnap = swiper.snapGrid[snapIndex];
              const nextSnap = swiper.snapGrid[snapIndex + 1];
              if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
          } else {
              const prevSnap = swiper.snapGrid[snapIndex - 1];
              const currentSnap = swiper.snapGrid[snapIndex];
              if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
          }
          index = Math.max(index, 0);
          index = Math.min(index, swiper.slidesGrid.length - 1);
          return swiper.slideTo(index, speed, runCallbacks, internal);
      }
      function slideToClickedSlide() {
          const swiper = this;
          const {params, slidesEl} = swiper;
          const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
          let slideToIndex = swiper.clickedIndex;
          let realIndex;
          const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
          if (params.loop) {
              if (swiper.animating) return;
              realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
              if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                  swiper.loopFix();
                  slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                  utils_nextTick((() => {
                      swiper.slideTo(slideToIndex);
                  }));
              } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                  swiper.loopFix();
                  slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                  utils_nextTick((() => {
                      swiper.slideTo(slideToIndex);
                  }));
              } else swiper.slideTo(slideToIndex);
          } else swiper.slideTo(slideToIndex);
      }
      var slide = {
          slideTo,
          slideToLoop,
          slideNext,
          slidePrev,
          slideReset,
          slideToClosest,
          slideToClickedSlide
      };
      function loopCreate(slideRealIndex) {
          const swiper = this;
          const {params, slidesEl} = swiper;
          if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
          const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
          slides.forEach(((el, index) => {
              el.setAttribute("data-swiper-slide-index", index);
          }));
          swiper.loopFix({
              slideRealIndex,
              direction: params.centeredSlides ? void 0 : "next"
          });
      }
      function loopFix(_temp) {
          let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
          const swiper = this;
          if (!swiper.params.loop) return;
          swiper.emit("beforeLoopFix");
          const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
          swiper.allowSlidePrev = true;
          swiper.allowSlideNext = true;
          if (swiper.virtual && params.virtual.enabled) {
              if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
              swiper.allowSlidePrev = allowSlidePrev;
              swiper.allowSlideNext = allowSlideNext;
              swiper.emit("loopFix");
              return;
          }
          const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
          let loopedSlides = params.loopedSlides || slidesPerView;
          if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
          swiper.loopedSlides = loopedSlides;
          const prependSlidesIndexes = [];
          const appendSlidesIndexes = [];
          let activeIndex = swiper.activeIndex;
          if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
          const isNext = direction === "next" || !direction;
          const isPrev = direction === "prev" || !direction;
          let slidesPrepended = 0;
          let slidesAppended = 0;
          if (activeSlideIndex < loopedSlides) {
              slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
              for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                  const index = i - Math.floor(i / slides.length) * slides.length;
                  prependSlidesIndexes.push(slides.length - index - 1);
              }
          } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
              slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
              for (let i = 0; i < slidesAppended; i += 1) {
                  const index = i - Math.floor(i / slides.length) * slides.length;
                  appendSlidesIndexes.push(index);
              }
          }
          if (isPrev) prependSlidesIndexes.forEach((index => {
              swiper.slides[index].swiperLoopMoveDOM = true;
              slidesEl.prepend(swiper.slides[index]);
              swiper.slides[index].swiperLoopMoveDOM = false;
          }));
          if (isNext) appendSlidesIndexes.forEach((index => {
              swiper.slides[index].swiperLoopMoveDOM = true;
              slidesEl.append(swiper.slides[index]);
              swiper.slides[index].swiperLoopMoveDOM = false;
          }));
          swiper.recalcSlides();
          if (params.slidesPerView === "auto") swiper.updateSlides();
          if (params.watchSlidesProgress) swiper.updateSlidesOffset();
          if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
              if (typeof slideRealIndex === "undefined") {
                  const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                  const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                  const diff = newSlideTranslate - currentSlideTranslate;
                  if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                      swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                      if (setTranslate) {
                          swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                          swiper.touchEventsData.currentTranslate = swiper.translate;
                      }
                  }
              } else if (setTranslate) {
                  swiper.slideToLoop(slideRealIndex, 0, false, true);
                  swiper.touchEventsData.currentTranslate = swiper.translate;
              }
          } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
              const currentSlideTranslate = swiper.slidesGrid[activeIndex];
              const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
              const diff = newSlideTranslate - currentSlideTranslate;
              if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                  swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                  if (setTranslate) {
                      swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                      swiper.touchEventsData.currentTranslate = swiper.translate;
                  }
              }
          } else swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;
          if (swiper.controller && swiper.controller.control && !byController) {
              const loopParams = {
                  slideRealIndex,
                  direction,
                  setTranslate,
                  activeSlideIndex,
                  byController: true
              };
              if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                  if (!c.destroyed && c.params.loop) c.loopFix({
                      ...loopParams,
                      slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                  });
              })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                  ...loopParams,
                  slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
              });
          }
          swiper.emit("loopFix");
      }
      function loopDestroy() {
          const swiper = this;
          const {params, slidesEl} = swiper;
          if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
          swiper.recalcSlides();
          const newSlidesOrder = [];
          swiper.slides.forEach((slideEl => {
              const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
              newSlidesOrder[index] = slideEl;
          }));
          swiper.slides.forEach((slideEl => {
              slideEl.removeAttribute("data-swiper-slide-index");
          }));
          newSlidesOrder.forEach((slideEl => {
              slidesEl.append(slideEl);
          }));
          swiper.recalcSlides();
          swiper.slideTo(swiper.realIndex, 0);
      }
      var loop = {
          loopCreate,
          loopFix,
          loopDestroy
      };
      function setGrabCursor(moving) {
          const swiper = this;
          if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
          const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
          if (swiper.isElement) swiper.__preventObserver__ = true;
          el.style.cursor = "move";
          el.style.cursor = moving ? "grabbing" : "grab";
          if (swiper.isElement) requestAnimationFrame((() => {
              swiper.__preventObserver__ = false;
          }));
      }
      function unsetGrabCursor() {
          const swiper = this;
          if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
          if (swiper.isElement) swiper.__preventObserver__ = true;
          swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
          if (swiper.isElement) requestAnimationFrame((() => {
              swiper.__preventObserver__ = false;
          }));
      }
      var grabCursor = {
          setGrabCursor,
          unsetGrabCursor
      };
      function closestElement(selector, base) {
          if (base === void 0) base = this;
          function __closestFrom(el) {
              if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
              if (el.assignedSlot) el = el.assignedSlot;
              const found = el.closest(selector);
              if (!found && !el.getRootNode) return null;
              return found || __closestFrom(el.getRootNode().host);
          }
          return __closestFrom(base);
      }
      function onTouchStart(event) {
          const swiper = this;
          const document = ssr_window_esm_getDocument();
          const window = ssr_window_esm_getWindow();
          const data = swiper.touchEventsData;
          data.evCache.push(event);
          const {params, touches, enabled} = swiper;
          if (!enabled) return;
          if (!params.simulateTouch && event.pointerType === "mouse") return;
          if (swiper.animating && params.preventInteractionOnTransition) return;
          if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
          let targetEl = e.target;
          if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
          if ("which" in e && e.which === 3) return;
          if ("button" in e && e.button > 0) return;
          if (data.isTouched && data.isMoved) return;
          const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
          const eventPath = event.composedPath ? event.composedPath() : event.path;
          if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
          const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
          const isTargetShadow = !!(e.target && e.target.shadowRoot);
          if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
              swiper.allowClick = true;
              return;
          }
          if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
          touches.currentX = e.pageX;
          touches.currentY = e.pageY;
          const startX = touches.currentX;
          const startY = touches.currentY;
          const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
          const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
          if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
          Object.assign(data, {
              isTouched: true,
              isMoved: false,
              allowTouchCallbacks: true,
              isScrolling: void 0,
              startMoving: void 0
          });
          touches.startX = startX;
          touches.startY = startY;
          data.touchStartTime = utils_now();
          swiper.allowClick = true;
          swiper.updateSize();
          swiper.swipeDirection = void 0;
          if (params.threshold > 0) data.allowThresholdMove = false;
          let preventDefault = true;
          if (targetEl.matches(data.focusableElements)) {
              preventDefault = false;
              if (targetEl.nodeName === "SELECT") data.isTouched = false;
          }
          if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
          const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
          if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
          if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
          swiper.emit("touchStart", e);
      }
      function onTouchMove(event) {
          const document = ssr_window_esm_getDocument();
          const swiper = this;
          const data = swiper.touchEventsData;
          const {params, touches, rtlTranslate: rtl, enabled} = swiper;
          if (!enabled) return;
          if (!params.simulateTouch && event.pointerType === "mouse") return;
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
          if (!data.isTouched) {
              if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
              return;
          }
          const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
          if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
          const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
          const pageX = targetTouch.pageX;
          const pageY = targetTouch.pageY;
          if (e.preventedByNestedSwiper) {
              touches.startX = pageX;
              touches.startY = pageY;
              return;
          }
          if (!swiper.allowTouchMove) {
              if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
              if (data.isTouched) {
                  Object.assign(touches, {
                      startX: pageX,
                      startY: pageY,
                      prevX: swiper.touches.currentX,
                      prevY: swiper.touches.currentY,
                      currentX: pageX,
                      currentY: pageY
                  });
                  data.touchStartTime = utils_now();
              }
              return;
          }
          if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
              if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                  data.isTouched = false;
                  data.isMoved = false;
                  return;
              }
          } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
          if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
              data.isMoved = true;
              swiper.allowClick = false;
              return;
          }
          if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
          if (e.targetTouches && e.targetTouches.length > 1) return;
          touches.currentX = pageX;
          touches.currentY = pageY;
          const diffX = touches.currentX - touches.startX;
          const diffY = touches.currentY - touches.startY;
          if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
          if (typeof data.isScrolling === "undefined") {
              let touchAngle;
              if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                  touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                  data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
              }
          }
          if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
          if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
          if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
              data.isTouched = false;
              return;
          }
          if (!data.startMoving) return;
          swiper.allowClick = false;
          if (!params.cssMode && e.cancelable) e.preventDefault();
          if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
          let diff = swiper.isHorizontal() ? diffX : diffY;
          let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
          if (params.oneWayMovement) {
              diff = Math.abs(diff) * (rtl ? 1 : -1);
              touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
          }
          touches.diff = diff;
          diff *= params.touchRatio;
          if (rtl) {
              diff = -diff;
              touchesDiff = -touchesDiff;
          }
          const prevTouchesDirection = swiper.touchesDirection;
          swiper.swipeDirection = diff > 0 ? "prev" : "next";
          swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
          const isLoop = swiper.params.loop && !params.cssMode;
          const allowLoopFix = swiper.swipeDirection === "next" && swiper.allowSlideNext || swiper.swipeDirection === "prev" && swiper.allowSlidePrev;
          if (!data.isMoved) {
              if (isLoop && allowLoopFix) swiper.loopFix({
                  direction: swiper.swipeDirection
              });
              data.startTranslate = swiper.getTranslate();
              swiper.setTransition(0);
              if (swiper.animating) {
                  const evt = new window.CustomEvent("transitionend", {
                      bubbles: true,
                      cancelable: true
                  });
                  swiper.wrapperEl.dispatchEvent(evt);
              }
              data.allowMomentumBounce = false;
              if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
              swiper.emit("sliderFirstMove", e);
          }
          let loopFixed;
          if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
              swiper.loopFix({
                  direction: swiper.swipeDirection,
                  setTranslate: true
              });
              loopFixed = true;
          }
          swiper.emit("sliderMove", e);
          data.isMoved = true;
          data.currentTranslate = diff + data.startTranslate;
          let disableParentSwiper = true;
          let resistanceRatio = params.resistanceRatio;
          if (params.touchReleaseOnEdges) resistanceRatio = 0;
          if (diff > 0) {
              if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                  direction: "prev",
                  setTranslate: true,
                  activeSlideIndex: 0
              });
              if (data.currentTranslate > swiper.minTranslate()) {
                  disableParentSwiper = false;
                  if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
              }
          } else if (diff < 0) {
              if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                  direction: "next",
                  setTranslate: true,
                  activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
              });
              if (data.currentTranslate < swiper.maxTranslate()) {
                  disableParentSwiper = false;
                  if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
              }
          }
          if (disableParentSwiper) e.preventedByNestedSwiper = true;
          if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
          if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
          if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
          if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
              if (!data.allowThresholdMove) {
                  data.allowThresholdMove = true;
                  touches.startX = touches.currentX;
                  touches.startY = touches.currentY;
                  data.currentTranslate = data.startTranslate;
                  touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                  return;
              }
          } else {
              data.currentTranslate = data.startTranslate;
              return;
          }
          if (!params.followFinger || params.cssMode) return;
          if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
          }
          if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
          swiper.updateProgress(data.currentTranslate);
          swiper.setTranslate(data.currentTranslate);
      }
      function onTouchEnd(event) {
          const swiper = this;
          const data = swiper.touchEventsData;
          const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
          if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
          if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(event.type)) {
              const proceed = [ "pointercancel", "contextmenu" ].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
              if (!proceed) return;
          }
          const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
          if (!enabled) return;
          if (!params.simulateTouch && event.pointerType === "mouse") return;
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
          if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
          data.allowTouchCallbacks = false;
          if (!data.isTouched) {
              if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
              data.isMoved = false;
              data.startMoving = false;
              return;
          }
          if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
          const touchEndTime = utils_now();
          const timeDiff = touchEndTime - data.touchStartTime;
          if (swiper.allowClick) {
              const pathTree = e.path || e.composedPath && e.composedPath();
              swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
              swiper.emit("tap click", e);
              if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
          }
          data.lastClickTime = utils_now();
          utils_nextTick((() => {
              if (!swiper.destroyed) swiper.allowClick = true;
          }));
          if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
              data.isTouched = false;
              data.isMoved = false;
              data.startMoving = false;
              return;
          }
          data.isTouched = false;
          data.isMoved = false;
          data.startMoving = false;
          let currentPos;
          if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
          if (params.cssMode) return;
          if (params.freeMode && params.freeMode.enabled) {
              swiper.freeMode.onTouchEnd({
                  currentPos
              });
              return;
          }
          let stopIndex = 0;
          let groupSize = swiper.slidesSizesGrid[0];
          for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
              const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
              if (typeof slidesGrid[i + increment] !== "undefined") {
                  if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                      stopIndex = i;
                      groupSize = slidesGrid[i + increment] - slidesGrid[i];
                  }
              } else if (currentPos >= slidesGrid[i]) {
                  stopIndex = i;
                  groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
              }
          }
          let rewindFirstIndex = null;
          let rewindLastIndex = null;
          if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
          const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
          const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
          if (timeDiff > params.longSwipesMs) {
              if (!params.longSwipes) {
                  swiper.slideTo(swiper.activeIndex);
                  return;
              }
              if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
              if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
          } else {
              if (!params.shortSwipes) {
                  swiper.slideTo(swiper.activeIndex);
                  return;
              }
              const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
              if (!isNavButtonTarget) {
                  if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                  if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
              } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
          }
      }
      function onResize() {
          const swiper = this;
          const {params, el} = swiper;
          if (el && el.offsetWidth === 0) return;
          if (params.breakpoints) swiper.setBreakpoint();
          const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          swiper.allowSlideNext = true;
          swiper.allowSlidePrev = true;
          swiper.updateSize();
          swiper.updateSlides();
          swiper.updateSlidesClasses();
          const isVirtualLoop = isVirtual && params.loop;
          if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
          if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
              clearTimeout(swiper.autoplay.resizeTimeout);
              swiper.autoplay.resizeTimeout = setTimeout((() => {
                  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
              }), 500);
          }
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;
          if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
      }
      function onClick(e) {
          const swiper = this;
          if (!swiper.enabled) return;
          if (!swiper.allowClick) {
              if (swiper.params.preventClicks) e.preventDefault();
              if (swiper.params.preventClicksPropagation && swiper.animating) {
                  e.stopPropagation();
                  e.stopImmediatePropagation();
              }
          }
      }
      function onScroll() {
          const swiper = this;
          const {wrapperEl, rtlTranslate, enabled} = swiper;
          if (!enabled) return;
          swiper.previousTranslate = swiper.translate;
          if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
          if (swiper.translate === 0) swiper.translate = 0;
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          let newProgress;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
          if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
          swiper.emit("setTranslate", swiper.translate, false);
      }
      function onLoad(e) {
          const swiper = this;
          processLazyPreloader(swiper, e.target);
          if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
          swiper.update();
      }
      let dummyEventAttached = false;
      function dummyEventListener() {}
      const events = (swiper, method) => {
          const document = ssr_window_esm_getDocument();
          const {params, el, wrapperEl, device} = swiper;
          const capture = !!params.nested;
          const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
          const swiperMethod = method;
          el[domMethod]("pointerdown", swiper.onTouchStart, {
              passive: false
          });
          document[domMethod]("pointermove", swiper.onTouchMove, {
              passive: false,
              capture
          });
          document[domMethod]("pointerup", swiper.onTouchEnd, {
              passive: true
          });
          document[domMethod]("pointercancel", swiper.onTouchEnd, {
              passive: true
          });
          document[domMethod]("pointerout", swiper.onTouchEnd, {
              passive: true
          });
          document[domMethod]("pointerleave", swiper.onTouchEnd, {
              passive: true
          });
          document[domMethod]("contextmenu", swiper.onTouchEnd, {
              passive: true
          });
          if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
          if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
          if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
          el[domMethod]("load", swiper.onLoad, {
              capture: true
          });
      };
      function attachEvents() {
          const swiper = this;
          const document = ssr_window_esm_getDocument();
          const {params} = swiper;
          swiper.onTouchStart = onTouchStart.bind(swiper);
          swiper.onTouchMove = onTouchMove.bind(swiper);
          swiper.onTouchEnd = onTouchEnd.bind(swiper);
          if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
          swiper.onClick = onClick.bind(swiper);
          swiper.onLoad = onLoad.bind(swiper);
          if (!dummyEventAttached) {
              document.addEventListener("touchstart", dummyEventListener);
              dummyEventAttached = true;
          }
          events(swiper, "on");
      }
      function detachEvents() {
          const swiper = this;
          events(swiper, "off");
      }
      var events$1 = {
          attachEvents,
          detachEvents
      };
      const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
      function setBreakpoint() {
          const swiper = this;
          const {realIndex, initialized, params, el} = swiper;
          const breakpoints = params.breakpoints;
          if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
          const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
          if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
          const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
          const breakpointParams = breakpointOnlyParams || swiper.originalParams;
          const wasMultiRow = isGridEnabled(swiper, params);
          const isMultiRow = isGridEnabled(swiper, breakpointParams);
          const wasEnabled = params.enabled;
          if (wasMultiRow && !isMultiRow) {
              el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
              swiper.emitContainerClasses();
          } else if (!wasMultiRow && isMultiRow) {
              el.classList.add(`${params.containerModifierClass}grid`);
              if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
              swiper.emitContainerClasses();
          }
          [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
              if (typeof breakpointParams[prop] === "undefined") return;
              const wasModuleEnabled = params[prop] && params[prop].enabled;
              const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
              if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
              if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
          }));
          const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
          const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
          const wasLoop = params.loop;
          if (directionChanged && initialized) swiper.changeDirection();
          utils_extend(swiper.params, breakpointParams);
          const isEnabled = swiper.params.enabled;
          const hasLoop = swiper.params.loop;
          Object.assign(swiper, {
              allowTouchMove: swiper.params.allowTouchMove,
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev
          });
          if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
          swiper.currentBreakpoint = breakpoint;
          swiper.emit("_beforeBreakpoint", breakpointParams);
          if (initialized) if (needsReLoop) {
              swiper.loopDestroy();
              swiper.loopCreate(realIndex);
              swiper.updateSlides();
          } else if (!wasLoop && hasLoop) {
              swiper.loopCreate(realIndex);
              swiper.updateSlides();
          } else if (wasLoop && !hasLoop) swiper.loopDestroy();
          swiper.emit("breakpoint", breakpointParams);
      }
      function getBreakpoint(breakpoints, base, containerEl) {
          if (base === void 0) base = "window";
          if (!breakpoints || base === "container" && !containerEl) return;
          let breakpoint = false;
          const window = ssr_window_esm_getWindow();
          const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
          const points = Object.keys(breakpoints).map((point => {
              if (typeof point === "string" && point.indexOf("@") === 0) {
                  const minRatio = parseFloat(point.substr(1));
                  const value = currentHeight * minRatio;
                  return {
                      value,
                      point
                  };
              }
              return {
                  value: point,
                  point
              };
          }));
          points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
          for (let i = 0; i < points.length; i += 1) {
              const {point, value} = points[i];
              if (base === "window") {
                  if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
              } else if (value <= containerEl.clientWidth) breakpoint = point;
          }
          return breakpoint || "max";
      }
      var breakpoints = {
          setBreakpoint,
          getBreakpoint
      };
      function prepareClasses(entries, prefix) {
          const resultClasses = [];
          entries.forEach((item => {
              if (typeof item === "object") Object.keys(item).forEach((classNames => {
                  if (item[classNames]) resultClasses.push(prefix + classNames);
              })); else if (typeof item === "string") resultClasses.push(prefix + item);
          }));
          return resultClasses;
      }
      function addClasses() {
          const swiper = this;
          const {classNames, params, rtl, el, device} = swiper;
          const suffixes = prepareClasses([ "initialized", params.direction, {
              "free-mode": swiper.params.freeMode && params.freeMode.enabled
          }, {
              autoheight: params.autoHeight
          }, {
              rtl
          }, {
              grid: params.grid && params.grid.rows > 1
          }, {
              "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
          }, {
              android: device.android
          }, {
              ios: device.ios
          }, {
              "css-mode": params.cssMode
          }, {
              centered: params.cssMode && params.centeredSlides
          }, {
              "watch-progress": params.watchSlidesProgress
          } ], params.containerModifierClass);
          classNames.push(...suffixes);
          el.classList.add(...classNames);
          swiper.emitContainerClasses();
      }
      function swiper_core_removeClasses() {
          const swiper = this;
          const {el, classNames} = swiper;
          el.classList.remove(...classNames);
          swiper.emitContainerClasses();
      }
      var classes = {
          addClasses,
          removeClasses: swiper_core_removeClasses
      };
      function checkOverflow() {
          const swiper = this;
          const {isLocked: wasLocked, params} = swiper;
          const {slidesOffsetBefore} = params;
          if (slidesOffsetBefore) {
              const lastSlideIndex = swiper.slides.length - 1;
              const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
              swiper.isLocked = swiper.size > lastSlideRightEdge;
          } else swiper.isLocked = swiper.snapGrid.length === 1;
          if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
          if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
          if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
          if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
      }
      var checkOverflow$1 = {
          checkOverflow
      };
      var defaults = {
          init: true,
          direction: "horizontal",
          oneWayMovement: false,
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: false,
          updateOnWindowResize: true,
          resizeObserver: true,
          nested: false,
          createElements: false,
          enabled: true,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: false,
          userAgent: null,
          url: null,
          edgeSwipeDetection: false,
          edgeSwipeThreshold: 20,
          autoHeight: false,
          setWrapperSize: false,
          virtualTranslate: false,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: false,
          centeredSlides: false,
          centeredSlidesBounds: false,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: true,
          centerInsufficientSlides: false,
          watchOverflow: true,
          roundLengths: false,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: true,
          allowTouchMove: true,
          threshold: 5,
          touchMoveStopPropagation: false,
          touchStartPreventDefault: true,
          touchStartForcePreventDefault: false,
          touchReleaseOnEdges: false,
          uniqueNavElements: true,
          resistance: true,
          resistanceRatio: .85,
          watchSlidesProgress: false,
          grabCursor: false,
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,
          loop: false,
          loopedSlides: null,
          loopPreventsSliding: true,
          rewind: false,
          allowSlidePrev: true,
          allowSlideNext: true,
          swipeHandler: null,
          noSwiping: true,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: true,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: true,
          _emitClasses: false
      };
      function moduleExtendParams(params, allModulesParams) {
          return function extendParams(obj) {
              if (obj === void 0) obj = {};
              const moduleParamName = Object.keys(obj)[0];
              const moduleParams = obj[moduleParamName];
              if (typeof moduleParams !== "object" || moduleParams === null) {
                  utils_extend(allModulesParams, obj);
                  return;
              }
              if (params[moduleParamName] === true) params[moduleParamName] = {
                  enabled: true
              };
              if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
              if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
              if (!(moduleParamName in params && "enabled" in moduleParams)) {
                  utils_extend(allModulesParams, obj);
                  return;
              }
              if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
              if (!params[moduleParamName]) params[moduleParamName] = {
                  enabled: false
              };
              utils_extend(allModulesParams, obj);
          };
      }
      const prototypes = {
          eventsEmitter,
          update,
          translate,
          transition,
          slide,
          loop,
          grabCursor,
          events: events$1,
          breakpoints,
          checkOverflow: checkOverflow$1,
          classes
      };
      const extendedDefaults = {};
      class swiper_core_Swiper {
          constructor() {
              let el;
              let params;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
              if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
              if (!params) params = {};
              params = utils_extend({}, params);
              if (el && !params.el) params.el = el;
              const document = ssr_window_esm_getDocument();
              if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                  const swipers = [];
                  document.querySelectorAll(params.el).forEach((containerEl => {
                      const newParams = utils_extend({}, params, {
                          el: containerEl
                      });
                      swipers.push(new swiper_core_Swiper(newParams));
                  }));
                  return swipers;
              }
              const swiper = this;
              swiper.__swiper__ = true;
              swiper.support = getSupport();
              swiper.device = getDevice({
                  userAgent: params.userAgent
              });
              swiper.browser = getBrowser();
              swiper.eventsListeners = {};
              swiper.eventsAnyListeners = [];
              swiper.modules = [ ...swiper.__modules__ ];
              if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
              const allModulesParams = {};
              swiper.modules.forEach((mod => {
                  mod({
                      params,
                      swiper,
                      extendParams: moduleExtendParams(params, allModulesParams),
                      on: swiper.on.bind(swiper),
                      once: swiper.once.bind(swiper),
                      off: swiper.off.bind(swiper),
                      emit: swiper.emit.bind(swiper)
                  });
              }));
              const swiperParams = utils_extend({}, defaults, allModulesParams);
              swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
              swiper.originalParams = utils_extend({}, swiper.params);
              swiper.passedParams = utils_extend({}, params);
              if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                  swiper.on(eventName, swiper.params.on[eventName]);
              }));
              if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
              Object.assign(swiper, {
                  enabled: swiper.params.enabled,
                  el,
                  classNames: [],
                  slides: [],
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal() {
                      return swiper.params.direction === "horizontal";
                  },
                  isVertical() {
                      return swiper.params.direction === "vertical";
                  },
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: true,
                  isEnd: false,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: false,
                  cssOverflowAdjustment() {
                      return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                  },
                  allowSlideNext: swiper.params.allowSlideNext,
                  allowSlidePrev: swiper.params.allowSlidePrev,
                  touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      focusableElements: swiper.params.focusableElements,
                      lastClickTime: 0,
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      startMoving: void 0,
                      evCache: []
                  },
                  allowClick: true,
                  allowTouchMove: swiper.params.allowTouchMove,
                  touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
              });
              swiper.emit("_swiper");
              if (swiper.params.init) swiper.init();
              return swiper;
          }
          getSlideIndex(slideEl) {
              const {slidesEl, params} = this;
              const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
              const firstSlideIndex = utils_elementIndex(slides[0]);
              return utils_elementIndex(slideEl) - firstSlideIndex;
          }
          getSlideIndexByData(index) {
              return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
          }
          recalcSlides() {
              const swiper = this;
              const {slidesEl, params} = swiper;
              swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
          }
          enable() {
              const swiper = this;
              if (swiper.enabled) return;
              swiper.enabled = true;
              if (swiper.params.grabCursor) swiper.setGrabCursor();
              swiper.emit("enable");
          }
          disable() {
              const swiper = this;
              if (!swiper.enabled) return;
              swiper.enabled = false;
              if (swiper.params.grabCursor) swiper.unsetGrabCursor();
              swiper.emit("disable");
          }
          setProgress(progress, speed) {
              const swiper = this;
              progress = Math.min(Math.max(progress, 0), 1);
              const min = swiper.minTranslate();
              const max = swiper.maxTranslate();
              const current = (max - min) * progress + min;
              swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
          }
          emitContainerClasses() {
              const swiper = this;
              if (!swiper.params._emitClasses || !swiper.el) return;
              const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
              swiper.emit("_containerClasses", cls.join(" "));
          }
          getSlideClasses(slideEl) {
              const swiper = this;
              if (swiper.destroyed) return "";
              return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
          }
          emitSlidesClasses() {
              const swiper = this;
              if (!swiper.params._emitClasses || !swiper.el) return;
              const updates = [];
              swiper.slides.forEach((slideEl => {
                  const classNames = swiper.getSlideClasses(slideEl);
                  updates.push({
                      slideEl,
                      classNames
                  });
                  swiper.emit("_slideClass", slideEl, classNames);
              }));
              swiper.emit("_slideClasses", updates);
          }
          slidesPerViewDynamic(view, exact) {
              if (view === void 0) view = "current";
              if (exact === void 0) exact = false;
              const swiper = this;
              const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
              let spv = 1;
              if (typeof params.slidesPerView === "number") return params.slidesPerView;
              if (params.centeredSlides) {
                  let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                  let breakLoop;
                  for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                      slideSize += slides[i].swiperSlideSize;
                      spv += 1;
                      if (slideSize > swiperSize) breakLoop = true;
                  }
                  for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                      slideSize += slides[i].swiperSlideSize;
                      spv += 1;
                      if (slideSize > swiperSize) breakLoop = true;
                  }
              } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                  const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                  if (slideInView) spv += 1;
              } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                  const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                  if (slideInView) spv += 1;
              }
              return spv;
          }
          update() {
              const swiper = this;
              if (!swiper || swiper.destroyed) return;
              const {snapGrid, params} = swiper;
              if (params.breakpoints) swiper.setBreakpoint();
              [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                  if (imageEl.complete) processLazyPreloader(swiper, imageEl);
              }));
              swiper.updateSize();
              swiper.updateSlides();
              swiper.updateProgress();
              swiper.updateSlidesClasses();
              function setTranslate() {
                  const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                  const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                  swiper.setTranslate(newTranslate);
                  swiper.updateActiveIndex();
                  swiper.updateSlidesClasses();
              }
              let translated;
              if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                  setTranslate();
                  if (params.autoHeight) swiper.updateAutoHeight();
              } else {
                  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                      const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                      translated = swiper.slideTo(slides.length - 1, 0, false, true);
                  } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                  if (!translated) setTranslate();
              }
              if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
              swiper.emit("update");
          }
          changeDirection(newDirection, needUpdate) {
              if (needUpdate === void 0) needUpdate = true;
              const swiper = this;
              const currentDirection = swiper.params.direction;
              if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
              if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
              swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
              swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
              swiper.emitContainerClasses();
              swiper.params.direction = newDirection;
              swiper.slides.forEach((slideEl => {
                  if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
              }));
              swiper.emit("changeDirection");
              if (needUpdate) swiper.update();
              return swiper;
          }
          changeLanguageDirection(direction) {
              const swiper = this;
              if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
              swiper.rtl = direction === "rtl";
              swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
              if (swiper.rtl) {
                  swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                  swiper.el.dir = "rtl";
              } else {
                  swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                  swiper.el.dir = "ltr";
              }
              swiper.update();
          }
          mount(element) {
              const swiper = this;
              if (swiper.mounted) return true;
              let el = element || swiper.params.el;
              if (typeof el === "string") el = document.querySelector(el);
              if (!el) return false;
              el.swiper = swiper;
              if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
              const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
              const getWrapper = () => {
                  if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                      const res = el.shadowRoot.querySelector(getWrapperSelector());
                      return res;
                  }
                  return utils_elementChildren(el, getWrapperSelector())[0];
              };
              let wrapperEl = getWrapper();
              if (!wrapperEl && swiper.params.createElements) {
                  wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                  el.append(wrapperEl);
                  utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                      wrapperEl.append(slideEl);
                  }));
              }
              Object.assign(swiper, {
                  el,
                  wrapperEl,
                  slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                  hostEl: swiper.isElement ? el.parentNode.host : el,
                  mounted: true,
                  rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                  rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                  wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
              });
              return true;
          }
          init(el) {
              const swiper = this;
              if (swiper.initialized) return swiper;
              const mounted = swiper.mount(el);
              if (mounted === false) return swiper;
              swiper.emit("beforeInit");
              if (swiper.params.breakpoints) swiper.setBreakpoint();
              swiper.addClasses();
              swiper.updateSize();
              swiper.updateSlides();
              if (swiper.params.watchOverflow) swiper.checkOverflow();
              if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
              if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
              if (swiper.params.loop) swiper.loopCreate();
              swiper.attachEvents();
              const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
              if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
              lazyElements.forEach((imageEl => {
                  if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                      processLazyPreloader(swiper, e.target);
                  }));
              }));
              preload(swiper);
              swiper.initialized = true;
              preload(swiper);
              swiper.emit("init");
              swiper.emit("afterInit");
              return swiper;
          }
          destroy(deleteInstance, cleanStyles) {
              if (deleteInstance === void 0) deleteInstance = true;
              if (cleanStyles === void 0) cleanStyles = true;
              const swiper = this;
              const {params, el, wrapperEl, slides} = swiper;
              if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
              swiper.emit("beforeDestroy");
              swiper.initialized = false;
              swiper.detachEvents();
              if (params.loop) swiper.loopDestroy();
              if (cleanStyles) {
                  swiper.removeClasses();
                  el.removeAttribute("style");
                  wrapperEl.removeAttribute("style");
                  if (slides && slides.length) slides.forEach((slideEl => {
                      slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                      slideEl.removeAttribute("style");
                      slideEl.removeAttribute("data-swiper-slide-index");
                  }));
              }
              swiper.emit("destroy");
              Object.keys(swiper.eventsListeners).forEach((eventName => {
                  swiper.off(eventName);
              }));
              if (deleteInstance !== false) {
                  swiper.el.swiper = null;
                  deleteProps(swiper);
              }
              swiper.destroyed = true;
              return null;
          }
          static extendDefaults(newDefaults) {
              utils_extend(extendedDefaults, newDefaults);
          }
          static get extendedDefaults() {
              return extendedDefaults;
          }
          static get defaults() {
              return defaults;
          }
          static installModule(mod) {
              if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
              const modules = swiper_core_Swiper.prototype.__modules__;
              if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
          }
          static use(module) {
              if (Array.isArray(module)) {
                  module.forEach((m => swiper_core_Swiper.installModule(m)));
                  return swiper_core_Swiper;
              }
              swiper_core_Swiper.installModule(module);
              return swiper_core_Swiper;
          }
      }
      Object.keys(prototypes).forEach((prototypeGroup => {
          Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
              swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }));
      }));
      swiper_core_Swiper.use([ Resize, Observer ]);
      function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
          if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
              if (!params[key] && params.auto === true) {
                  let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                  if (!element) {
                      element = utils_createElement("div", checkProps[key]);
                      element.className = checkProps[key];
                      swiper.el.append(element);
                  }
                  params[key] = element;
                  originalParams[key] = element;
              }
          }));
          return params;
      }
      function Navigation(_ref) {
          let {swiper, extendParams, on, emit} = _ref;
          extendParams({
              navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: false,
                  disabledClass: "swiper-button-disabled",
                  hiddenClass: "swiper-button-hidden",
                  lockClass: "swiper-button-lock",
                  navigationDisabledClass: "swiper-navigation-disabled"
              }
          });
          swiper.navigation = {
              nextEl: null,
              prevEl: null
          };
          const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
          function getEl(el) {
              let res;
              if (el && typeof el === "string" && swiper.isElement) {
                  res = swiper.el.querySelector(el);
                  if (res) return res;
              }
              if (el) {
                  if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                  if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
              }
              if (el && !res) return el;
              return res;
          }
          function toggleEl(el, disabled) {
              const params = swiper.params.navigation;
              el = makeElementsArray(el);
              el.forEach((subEl => {
                  if (subEl) {
                      subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                      if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                      if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                  }
              }));
          }
          function update() {
              const {nextEl, prevEl} = swiper.navigation;
              if (swiper.params.loop) {
                  toggleEl(prevEl, false);
                  toggleEl(nextEl, false);
                  return;
              }
              toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
              toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
          }
          function onPrevClick(e) {
              e.preventDefault();
              if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
              swiper.slidePrev();
              emit("navigationPrev");
          }
          function onNextClick(e) {
              e.preventDefault();
              if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
              swiper.slideNext();
              emit("navigationNext");
          }
          function init() {
              const params = swiper.params.navigation;
              swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                  nextEl: "swiper-button-next",
                  prevEl: "swiper-button-prev"
              });
              if (!(params.nextEl || params.prevEl)) return;
              let nextEl = getEl(params.nextEl);
              let prevEl = getEl(params.prevEl);
              Object.assign(swiper.navigation, {
                  nextEl,
                  prevEl
              });
              nextEl = makeElementsArray(nextEl);
              prevEl = makeElementsArray(prevEl);
              const initButton = (el, dir) => {
                  if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                  if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
              };
              nextEl.forEach((el => initButton(el, "next")));
              prevEl.forEach((el => initButton(el, "prev")));
          }
          function destroy() {
              let {nextEl, prevEl} = swiper.navigation;
              nextEl = makeElementsArray(nextEl);
              prevEl = makeElementsArray(prevEl);
              const destroyButton = (el, dir) => {
                  el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                  el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
              };
              nextEl.forEach((el => destroyButton(el, "next")));
              prevEl.forEach((el => destroyButton(el, "prev")));
          }
          on("init", (() => {
              if (swiper.params.navigation.enabled === false) disable(); else {
                  init();
                  update();
              }
          }));
          on("toEdge fromEdge lock unlock", (() => {
              update();
          }));
          on("destroy", (() => {
              destroy();
          }));
          on("enable disable", (() => {
              let {nextEl, prevEl} = swiper.navigation;
              nextEl = makeElementsArray(nextEl);
              prevEl = makeElementsArray(prevEl);
              if (swiper.enabled) {
                  update();
                  return;
              }
              [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
          }));
          on("click", ((_s, e) => {
              let {nextEl, prevEl} = swiper.navigation;
              nextEl = makeElementsArray(nextEl);
              prevEl = makeElementsArray(prevEl);
              const targetEl = e.target;
              if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                  if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                  let isHidden;
                  if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                  if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                  [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
              }
          }));
          const enable = () => {
              swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
              init();
              update();
          };
          const disable = () => {
              swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
              destroy();
          };
          Object.assign(swiper.navigation, {
              enable,
              disable,
              update,
              init,
              destroy
          });
      }
      function classes_to_selector_classesToSelector(classes) {
          if (classes === void 0) classes = "";
          return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
      }
      function Pagination(_ref) {
          let {swiper, extendParams, on, emit} = _ref;
          const pfx = "swiper-pagination";
          extendParams({
              pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: false,
                  hideOnClick: false,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: false,
                  type: "bullets",
                  dynamicBullets: false,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: number => number,
                  formatFractionTotal: number => number,
                  bulletClass: `${pfx}-bullet`,
                  bulletActiveClass: `${pfx}-bullet-active`,
                  modifierClass: `${pfx}-`,
                  currentClass: `${pfx}-current`,
                  totalClass: `${pfx}-total`,
                  hiddenClass: `${pfx}-hidden`,
                  progressbarFillClass: `${pfx}-progressbar-fill`,
                  progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                  clickableClass: `${pfx}-clickable`,
                  lockClass: `${pfx}-lock`,
                  horizontalClass: `${pfx}-horizontal`,
                  verticalClass: `${pfx}-vertical`,
                  paginationDisabledClass: `${pfx}-disabled`
              }
          });
          swiper.pagination = {
              el: null,
              bullets: []
          };
          let bulletSize;
          let dynamicBulletIndex = 0;
          const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
          function isPaginationDisabled() {
              return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
          }
          function setSideBullets(bulletEl, position) {
              const {bulletActiveClass} = swiper.params.pagination;
              if (!bulletEl) return;
              bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
              if (bulletEl) {
                  bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                  bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                  if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
              }
          }
          function onBulletClick(e) {
              const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
              if (!bulletEl) return;
              e.preventDefault();
              const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
              if (swiper.params.loop) {
                  if (swiper.realIndex === index) return;
                  const realIndex = swiper.realIndex;
                  const newSlideIndex = swiper.getSlideIndexByData(index);
                  const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                  const loopFix = dir => {
                      const indexBeforeLoopFix = swiper.activeIndex;
                      swiper.loopFix({
                          direction: dir,
                          activeSlideIndex: newSlideIndex,
                          slideTo: false
                      });
                      const indexAfterFix = swiper.activeIndex;
                      if (indexBeforeLoopFix === indexAfterFix) swiper.slideToLoop(realIndex, 0, false, true);
                  };
                  if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) loopFix(newSlideIndex > currentSlideIndex ? "next" : "prev"); else if (swiper.params.centeredSlides) {
                      const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                      if (newSlideIndex < Math.floor(slidesPerView / 2)) loopFix("prev");
                  }
                  swiper.slideToLoop(index);
              } else swiper.slideTo(index);
          }
          function update() {
              const rtl = swiper.rtl;
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              let el = swiper.pagination.el;
              el = makeElementsArray(el);
              let current;
              let previousIndex;
              const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
              const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
              if (swiper.params.loop) {
                  previousIndex = swiper.previousRealIndex || 0;
                  current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
              } else if (typeof swiper.snapIndex !== "undefined") {
                  current = swiper.snapIndex;
                  previousIndex = swiper.previousSnapIndex;
              } else {
                  previousIndex = swiper.previousIndex || 0;
                  current = swiper.activeIndex || 0;
              }
              if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                  const bullets = swiper.pagination.bullets;
                  let firstIndex;
                  let lastIndex;
                  let midIndex;
                  if (params.dynamicBullets) {
                      bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                      el.forEach((subEl => {
                          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                      }));
                      if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                          dynamicBulletIndex += current - (previousIndex || 0);
                          if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                      }
                      firstIndex = Math.max(current - dynamicBulletIndex, 0);
                      lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                      midIndex = (lastIndex + firstIndex) / 2;
                  }
                  bullets.forEach((bulletEl => {
                      const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                      bulletEl.classList.remove(...classesToRemove);
                  }));
                  if (el.length > 1) bullets.forEach((bullet => {
                      const bulletIndex = utils_elementIndex(bullet);
                      if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                      if (params.dynamicBullets) {
                          if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                          if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                          if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                      }
                  })); else {
                      const bullet = bullets[current];
                      if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                      if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                          bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                      }));
                      if (params.dynamicBullets) {
                          const firstDisplayedBullet = bullets[firstIndex];
                          const lastDisplayedBullet = bullets[lastIndex];
                          for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                          setSideBullets(firstDisplayedBullet, "prev");
                          setSideBullets(lastDisplayedBullet, "next");
                      }
                  }
                  if (params.dynamicBullets) {
                      const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                      const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                      const offsetProp = rtl ? "right" : "left";
                      bullets.forEach((bullet => {
                          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                      }));
                  }
              }
              el.forEach(((subEl, subElIndex) => {
                  if (params.type === "fraction") {
                      subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                          fractionEl.textContent = params.formatFractionCurrent(current + 1);
                      }));
                      subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                          totalEl.textContent = params.formatFractionTotal(total);
                      }));
                  }
                  if (params.type === "progressbar") {
                      let progressbarDirection;
                      if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                      const scale = (current + 1) / total;
                      let scaleX = 1;
                      let scaleY = 1;
                      if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                      subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                      }));
                  }
                  if (params.type === "custom" && params.renderCustom) {
                      subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                      if (subElIndex === 0) emit("paginationRender", subEl);
                  } else {
                      if (subElIndex === 0) emit("paginationRender", subEl);
                      emit("paginationUpdate", subEl);
                  }
                  if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
              }));
          }
          function render() {
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
              let el = swiper.pagination.el;
              el = makeElementsArray(el);
              let paginationHTML = "";
              if (params.type === "bullets") {
                  let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                  if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                  for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
              }
              if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
              if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
              swiper.pagination.bullets = [];
              el.forEach((subEl => {
                  if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                  if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
              }));
              if (params.type !== "custom") emit("paginationRender", el[0]);
          }
          function init() {
              swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                  el: "swiper-pagination"
              });
              const params = swiper.params.pagination;
              if (!params.el) return;
              let el;
              if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
              if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
              if (!el) el = params.el;
              if (!el || el.length === 0) return;
              if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                  el = [ ...swiper.el.querySelectorAll(params.el) ];
                  if (el.length > 1) el = el.filter((subEl => {
                      if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                      return true;
                  }))[0];
              }
              if (Array.isArray(el) && el.length === 1) el = el[0];
              Object.assign(swiper.pagination, {
                  el
              });
              el = makeElementsArray(el);
              el.forEach((subEl => {
                  if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                  subEl.classList.add(params.modifierClass + params.type);
                  subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                  if (params.type === "bullets" && params.dynamicBullets) {
                      subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                      dynamicBulletIndex = 0;
                      if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                  }
                  if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                  if (params.clickable) subEl.addEventListener("click", onBulletClick);
                  if (!swiper.enabled) subEl.classList.add(params.lockClass);
              }));
          }
          function destroy() {
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              let el = swiper.pagination.el;
              if (el) {
                  el = makeElementsArray(el);
                  el.forEach((subEl => {
                      subEl.classList.remove(params.hiddenClass);
                      subEl.classList.remove(params.modifierClass + params.type);
                      subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                      if (params.clickable) {
                          subEl.classList.remove(...(params.clickableClass || "").split(" "));
                          subEl.removeEventListener("click", onBulletClick);
                      }
                  }));
              }
              if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
          }
          on("changeDirection", (() => {
              if (!swiper.pagination || !swiper.pagination.el) return;
              const params = swiper.params.pagination;
              let {el} = swiper.pagination;
              el = makeElementsArray(el);
              el.forEach((subEl => {
                  subEl.classList.remove(params.horizontalClass, params.verticalClass);
                  subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
              }));
          }));
          on("init", (() => {
              if (swiper.params.pagination.enabled === false) disable(); else {
                  init();
                  render();
                  update();
              }
          }));
          on("activeIndexChange", (() => {
              if (typeof swiper.snapIndex === "undefined") update();
          }));
          on("snapIndexChange", (() => {
              update();
          }));
          on("snapGridLengthChange", (() => {
              render();
              update();
          }));
          on("destroy", (() => {
              destroy();
          }));
          on("enable disable", (() => {
              let {el} = swiper.pagination;
              if (el) {
                  el = makeElementsArray(el);
                  el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
              }
          }));
          on("lock unlock", (() => {
              update();
          }));
          on("click", ((_s, e) => {
              const targetEl = e.target;
              const el = makeElementsArray(swiper.pagination.el);
              if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                  if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                  const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                  if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                  el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
              }
          }));
          const enable = () => {
              swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
              let {el} = swiper.pagination;
              if (el) {
                  el = makeElementsArray(el);
                  el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
              }
              init();
              render();
              update();
          };
          const disable = () => {
              swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
              let {el} = swiper.pagination;
              if (el) {
                  el = makeElementsArray(el);
                  el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
              }
              destroy();
          };
          Object.assign(swiper.pagination, {
              enable,
              disable,
              render,
              update,
              init,
              destroy
          });
      }
      function Scrollbar(_ref) {
          let {swiper, extendParams, on, emit} = _ref;
          const document = ssr_window_esm_getDocument();
          let isTouched = false;
          let timeout = null;
          let dragTimeout = null;
          let dragStartPos;
          let dragSize;
          let trackSize;
          let divider;
          extendParams({
              scrollbar: {
                  el: null,
                  dragSize: "auto",
                  hide: false,
                  draggable: false,
                  snapOnRelease: true,
                  lockClass: "swiper-scrollbar-lock",
                  dragClass: "swiper-scrollbar-drag",
                  scrollbarDisabledClass: "swiper-scrollbar-disabled",
                  horizontalClass: `swiper-scrollbar-horizontal`,
                  verticalClass: `swiper-scrollbar-vertical`
              }
          });
          swiper.scrollbar = {
              el: null,
              dragEl: null
          };
          function setTranslate() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              const {scrollbar, rtlTranslate: rtl} = swiper;
              const {dragEl, el} = scrollbar;
              const params = swiper.params.scrollbar;
              const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
              let newSize = dragSize;
              let newPos = (trackSize - dragSize) * progress;
              if (rtl) {
                  newPos = -newPos;
                  if (newPos > 0) {
                      newSize = dragSize - newPos;
                      newPos = 0;
                  } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
              } else if (newPos < 0) {
                  newSize = dragSize + newPos;
                  newPos = 0;
              } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
              if (swiper.isHorizontal()) {
                  dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
                  dragEl.style.width = `${newSize}px`;
              } else {
                  dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
                  dragEl.style.height = `${newSize}px`;
              }
              if (params.hide) {
                  clearTimeout(timeout);
                  el.style.opacity = 1;
                  timeout = setTimeout((() => {
                      el.style.opacity = 0;
                      el.style.transitionDuration = "400ms";
                  }), 1e3);
              }
          }
          function setTransition(duration) {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
          }
          function updateSize() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              const {scrollbar} = swiper;
              const {dragEl, el} = scrollbar;
              dragEl.style.width = "";
              dragEl.style.height = "";
              trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
              divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
              if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider; else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
              if (swiper.isHorizontal()) dragEl.style.width = `${dragSize}px`; else dragEl.style.height = `${dragSize}px`;
              if (divider >= 1) el.style.display = "none"; else el.style.display = "";
              if (swiper.params.scrollbar.hide) el.style.opacity = 0;
              if (swiper.params.watchOverflow && swiper.enabled) scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
          }
          function getPointerPosition(e) {
              return swiper.isHorizontal() ? e.clientX : e.clientY;
          }
          function setDragPosition(e) {
              const {scrollbar, rtlTranslate: rtl} = swiper;
              const {el} = scrollbar;
              let positionRatio;
              positionRatio = (getPointerPosition(e) - utils_elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
              positionRatio = Math.max(Math.min(positionRatio, 1), 0);
              if (rtl) positionRatio = 1 - positionRatio;
              const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
              swiper.updateProgress(position);
              swiper.setTranslate(position);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
          }
          function onDragStart(e) {
              const params = swiper.params.scrollbar;
              const {scrollbar, wrapperEl} = swiper;
              const {el, dragEl} = scrollbar;
              isTouched = true;
              dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
              e.preventDefault();
              e.stopPropagation();
              wrapperEl.style.transitionDuration = "100ms";
              dragEl.style.transitionDuration = "100ms";
              setDragPosition(e);
              clearTimeout(dragTimeout);
              el.style.transitionDuration = "0ms";
              if (params.hide) el.style.opacity = 1;
              if (swiper.params.cssMode) swiper.wrapperEl.style["scroll-snap-type"] = "none";
              emit("scrollbarDragStart", e);
          }
          function onDragMove(e) {
              const {scrollbar, wrapperEl} = swiper;
              const {el, dragEl} = scrollbar;
              if (!isTouched) return;
              if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
              setDragPosition(e);
              wrapperEl.style.transitionDuration = "0ms";
              el.style.transitionDuration = "0ms";
              dragEl.style.transitionDuration = "0ms";
              emit("scrollbarDragMove", e);
          }
          function onDragEnd(e) {
              const params = swiper.params.scrollbar;
              const {scrollbar, wrapperEl} = swiper;
              const {el} = scrollbar;
              if (!isTouched) return;
              isTouched = false;
              if (swiper.params.cssMode) {
                  swiper.wrapperEl.style["scroll-snap-type"] = "";
                  wrapperEl.style.transitionDuration = "";
              }
              if (params.hide) {
                  clearTimeout(dragTimeout);
                  dragTimeout = utils_nextTick((() => {
                      el.style.opacity = 0;
                      el.style.transitionDuration = "400ms";
                  }), 1e3);
              }
              emit("scrollbarDragEnd", e);
              if (params.snapOnRelease) swiper.slideToClosest();
          }
          function events(method) {
              const {scrollbar, params} = swiper;
              const el = scrollbar.el;
              if (!el) return;
              const target = el;
              const activeListener = params.passiveListeners ? {
                  passive: false,
                  capture: false
              } : false;
              const passiveListener = params.passiveListeners ? {
                  passive: true,
                  capture: false
              } : false;
              if (!target) return;
              const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
              target[eventMethod]("pointerdown", onDragStart, activeListener);
              document[eventMethod]("pointermove", onDragMove, activeListener);
              document[eventMethod]("pointerup", onDragEnd, passiveListener);
          }
          function enableDraggable() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              events("on");
          }
          function disableDraggable() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              events("off");
          }
          function init() {
              const {scrollbar, el: swiperEl} = swiper;
              swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                  el: "swiper-scrollbar"
              });
              const params = swiper.params.scrollbar;
              if (!params.el) return;
              let el;
              if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
              if (!el && typeof params.el === "string") el = document.querySelectorAll(params.el); else if (!el) el = params.el;
              if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) el = swiperEl.querySelector(params.el);
              if (el.length > 0) el = el[0];
              el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
              let dragEl;
              if (el) {
                  dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
                  if (!dragEl) {
                      dragEl = utils_createElement("div", swiper.params.scrollbar.dragClass);
                      el.append(dragEl);
                  }
              }
              Object.assign(scrollbar, {
                  el,
                  dragEl
              });
              if (params.draggable) enableDraggable();
              if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
          }
          function destroy() {
              const params = swiper.params.scrollbar;
              const el = swiper.scrollbar.el;
              if (el) el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
              disableDraggable();
          }
          on("init", (() => {
              if (swiper.params.scrollbar.enabled === false) disable(); else {
                  init();
                  updateSize();
                  setTranslate();
              }
          }));
          on("update resize observerUpdate lock unlock", (() => {
              updateSize();
          }));
          on("setTranslate", (() => {
              setTranslate();
          }));
          on("setTransition", ((_s, duration) => {
              setTransition(duration);
          }));
          on("enable disable", (() => {
              const {el} = swiper.scrollbar;
              if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
          }));
          on("destroy", (() => {
              destroy();
          }));
          const enable = () => {
              swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
              if (swiper.scrollbar.el) swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
              init();
              updateSize();
              setTranslate();
          };
          const disable = () => {
              swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
              if (swiper.scrollbar.el) swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
              destroy();
          };
          Object.assign(swiper.scrollbar, {
              enable,
              disable,
              updateSize,
              setTranslate,
              init,
              destroy
          });
      }
      function Autoplay(_ref) {
          let {swiper, extendParams, on, emit, params} = _ref;
          swiper.autoplay = {
              running: false,
              paused: false,
              timeLeft: 0
          };
          extendParams({
              autoplay: {
                  enabled: false,
                  delay: 3e3,
                  waitForTransition: true,
                  disableOnInteraction: true,
                  stopOnLastSlide: false,
                  reverseDirection: false,
                  pauseOnMouseEnter: false
              }
          });
          let timeout;
          let raf;
          let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
          let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
          let autoplayTimeLeft;
          let autoplayStartTime = (new Date).getTime;
          let wasPaused;
          let isTouched;
          let pausedByTouch;
          let touchStartTimeout;
          let slideChanged;
          let pausedByInteraction;
          function onTransitionEnd(e) {
              if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
              if (e.target !== swiper.wrapperEl) return;
              swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
              resume();
          }
          const calcTimeLeft = () => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                  autoplayDelayCurrent = autoplayTimeLeft;
                  wasPaused = false;
              }
              const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
              swiper.autoplay.timeLeft = timeLeft;
              emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
              raf = requestAnimationFrame((() => {
                  calcTimeLeft();
              }));
          };
          const getSlideDelay = () => {
              let activeSlideEl;
              if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
              if (!activeSlideEl) return;
              const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
              return currentSlideDelay;
          };
          const run = delayForce => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              cancelAnimationFrame(raf);
              calcTimeLeft();
              let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
              autoplayDelayTotal = swiper.params.autoplay.delay;
              autoplayDelayCurrent = swiper.params.autoplay.delay;
              const currentSlideDelay = getSlideDelay();
              if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                  delay = currentSlideDelay;
                  autoplayDelayTotal = currentSlideDelay;
                  autoplayDelayCurrent = currentSlideDelay;
              }
              autoplayTimeLeft = delay;
              const speed = swiper.params.speed;
              const proceed = () => {
                  if (!swiper || swiper.destroyed) return;
                  if (swiper.params.autoplay.reverseDirection) {
                      if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                          swiper.slidePrev(speed, true, true);
                          emit("autoplay");
                      } else if (!swiper.params.autoplay.stopOnLastSlide) {
                          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                          emit("autoplay");
                      }
                  } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                      swiper.slideNext(speed, true, true);
                      emit("autoplay");
                  } else if (!swiper.params.autoplay.stopOnLastSlide) {
                      swiper.slideTo(0, speed, true, true);
                      emit("autoplay");
                  }
                  if (swiper.params.cssMode) {
                      autoplayStartTime = (new Date).getTime();
                      requestAnimationFrame((() => {
                          run();
                      }));
                  }
              };
              if (delay > 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout((() => {
                      proceed();
                  }), delay);
              } else requestAnimationFrame((() => {
                  proceed();
              }));
              return delay;
          };
          const start = () => {
              swiper.autoplay.running = true;
              run();
              emit("autoplayStart");
          };
          const stop = () => {
              swiper.autoplay.running = false;
              clearTimeout(timeout);
              cancelAnimationFrame(raf);
              emit("autoplayStop");
          };
          const pause = (internal, reset) => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              clearTimeout(timeout);
              if (!internal) pausedByInteraction = true;
              const proceed = () => {
                  emit("autoplayPause");
                  if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
              };
              swiper.autoplay.paused = true;
              if (reset) {
                  if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                  slideChanged = false;
                  proceed();
                  return;
              }
              const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
              autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
              if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
              if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
              proceed();
          };
          const resume = () => {
              if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
              autoplayStartTime = (new Date).getTime();
              if (pausedByInteraction) {
                  pausedByInteraction = false;
                  run(autoplayTimeLeft);
              } else run();
              swiper.autoplay.paused = false;
              emit("autoplayResume");
          };
          const onVisibilityChange = () => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              const document = ssr_window_esm_getDocument();
              if (document.visibilityState === "hidden") {
                  pausedByInteraction = true;
                  pause(true);
              }
              if (document.visibilityState === "visible") resume();
          };
          const onPointerEnter = e => {
              if (e.pointerType !== "mouse") return;
              pausedByInteraction = true;
              if (swiper.animating || swiper.autoplay.paused) return;
              pause(true);
          };
          const onPointerLeave = e => {
              if (e.pointerType !== "mouse") return;
              if (swiper.autoplay.paused) resume();
          };
          const attachMouseEvents = () => {
              if (swiper.params.autoplay.pauseOnMouseEnter) {
                  swiper.el.addEventListener("pointerenter", onPointerEnter);
                  swiper.el.addEventListener("pointerleave", onPointerLeave);
              }
          };
          const detachMouseEvents = () => {
              swiper.el.removeEventListener("pointerenter", onPointerEnter);
              swiper.el.removeEventListener("pointerleave", onPointerLeave);
          };
          const attachDocumentEvents = () => {
              const document = ssr_window_esm_getDocument();
              document.addEventListener("visibilitychange", onVisibilityChange);
          };
          const detachDocumentEvents = () => {
              const document = ssr_window_esm_getDocument();
              document.removeEventListener("visibilitychange", onVisibilityChange);
          };
          on("init", (() => {
              if (swiper.params.autoplay.enabled) {
                  attachMouseEvents();
                  attachDocumentEvents();
                  autoplayStartTime = (new Date).getTime();
                  start();
              }
          }));
          on("destroy", (() => {
              detachMouseEvents();
              detachDocumentEvents();
              if (swiper.autoplay.running) stop();
          }));
          on("beforeTransitionStart", ((_s, speed, internal) => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
          }));
          on("sliderFirstMove", (() => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              if (swiper.params.autoplay.disableOnInteraction) {
                  stop();
                  return;
              }
              isTouched = true;
              pausedByTouch = false;
              pausedByInteraction = false;
              touchStartTimeout = setTimeout((() => {
                  pausedByInteraction = true;
                  pausedByTouch = true;
                  pause(true);
              }), 200);
          }));
          on("touchEnd", (() => {
              if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
              clearTimeout(touchStartTimeout);
              clearTimeout(timeout);
              if (swiper.params.autoplay.disableOnInteraction) {
                  pausedByTouch = false;
                  isTouched = false;
                  return;
              }
              if (pausedByTouch && swiper.params.cssMode) resume();
              pausedByTouch = false;
              isTouched = false;
          }));
          on("slideChange", (() => {
              if (swiper.destroyed || !swiper.autoplay.running) return;
              slideChanged = true;
          }));
          Object.assign(swiper.autoplay, {
              start,
              stop,
              pause,
              resume
          });
      }
      function initSliders() {
          if (document.querySelector(".swiper")) {
              new swiper_core_Swiper(".partners__slider", {
                  modules: [ Navigation, Pagination, Autoplay ],
                  observer: true,
                  loop: true,
                  observeParents: true,
                  speed: 800,
                  effect: "fade",
                  autoplay: {
                      delay: 3e3,
                      disableOnInteraction: false
                  },
                  pagination: {
                      el: ".partners .swiper-pagination",
                      clickable: true,
                      dynamicBullets: true
                  },
                  navigation: {
                      prevEl: ".partners .swiper-button-prev",
                      nextEl: ".partners .swiper-button-next"
                  },
                  breakpoints: {
                      320: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          slidesPerGroup: 2
                      },
                      480: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          slidesPerGroup: 2
                      },
                      640: {
                          slidesPerView: 2.2,
                          slidesPerGroup: 2.2,
                          spaceBetween: 20,
                          autoHeight: true
                      },
                      768: {
                          slidesPerView: 2.5,
                          spaceBetween: 25,
                          slidesPerGroup: 2.5
                      },
                      992: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                          spaceBetween: 48
                      }
                  },
                  on: {}
              });
              new swiper_core_Swiper(".reviews__slider", {
                  modules: [ Navigation, Scrollbar ],
                  observer: true,
                  observeParents: true,
                  speed: 800,
                  scrollbar: {
                      el: ".reviews .swiper-scrollbar",
                      draggable: true
                  },
                  breakpoints: {
                      320: {
                          slidesPerView: 1,
                          spaceBetween: 20
                      },
                      480: {
                          spaceBetween: 20,
                          slidesPerView: 1.5
                      },
                      640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          autoHeight: true
                      },
                      768: {
                          slidesPerView: 2.5,
                          spaceBetween: 25
                      },
                      992: {
                          slidesPerView: 3,
                          spaceBetween: 48
                      }
                  }
              });
          }
      }
      window.addEventListener("load", (function(e) {
          initSliders();
      }));
      let addWindowScrollEvent = false;
      function pageNavigation() {
          document.addEventListener("click", pageNavigationAction);
          document.addEventListener("watcherCallback", pageNavigationAction);
          function pageNavigationAction(e) {
              if (e.type === "click") {
                  const targetElement = e.target;
                  if (targetElement.closest("[data-goto]")) {
                      const gotoLink = targetElement.closest("[data-goto]");
                      const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                      const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                      const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                      const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                      if (modules_flsModules.fullpage) {
                          const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                          const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                          if (fullpageSectionId !== null) {
                              modules_flsModules.fullpage.switchingSection(fullpageSectionId);
                              document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                          }
                      } else gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                      e.preventDefault();
                  }
              } else if (e.type === "watcherCallback" && e.detail) {
                  const entry = e.detail.entry;
                  const targetElement = entry.target;
                  if (targetElement.dataset.watch === "navigator") {
                      document.querySelector(`[data-goto]._navigator-active`);
                      let navigatorCurrentItem;
                      if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                          const element = targetElement.classList[index];
                          if (document.querySelector(`[data-goto=".${element}"]`)) {
                              navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                              break;
                          }
                      }
                      if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                  }
              }
          }
          if (getHash()) {
              let goToHash;
              if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
              goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
          }
      }
      function headerScroll() {
          addWindowScrollEvent = true;
          const header = document.querySelector("header.header");
          const headerShow = header.hasAttribute("data-scroll-show");
          const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
          const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
          let scrollDirection = 0;
          let timer;
          document.addEventListener("windowScroll", (function(e) {
              const scrollTop = window.scrollY;
              clearTimeout(timer);
              if (scrollTop >= startPoint) {
                  !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                  if (headerShow) {
                      if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                      timer = setTimeout((() => {
                          !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                      }), headerShowTimer);
                  }
              } else {
                  header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                  if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
              }
              scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
          }));
      }
      setTimeout((() => {
          if (addWindowScrollEvent) {
              let windowScroll = new Event("windowScroll");
              window.addEventListener("scroll", (function(e) {
                  document.dispatchEvent(windowScroll);
              }));
          }
      }), 0);
      const functionHeaderMenu = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const menuContainer = document.querySelector('.header__menu');
    
            const toggleSubmenu = function (submenu) {
                const submenuUl = submenu.querySelector("ul.submenu");
    
                // Close all other submenus
                const allSubmenus = document.querySelectorAll(".submenu.show");
                allSubmenus.forEach(function (openSubmenu) {
                    openSubmenu.classList.remove("show");
                    openSubmenu.parentElement.classList.remove('active');
                });
    
                if (submenuUl.classList.contains("show")) {
                    submenuUl.classList.remove("show");
                    submenu.classList.remove('active');
                } else {
                    // Open the clicked submenu
                    submenuUl.classList.add("show");
                    submenu.classList.add('active');
                }
            };
    
            const createArrow = function (element, className) {
                const arrow = document.createElement("span");
                arrow.classList.add(className);
                element.appendChild(arrow);
                return arrow;
            };
    
            menuContainer.addEventListener("click", function (event) {
                const target = event.target;
                const parentElement = target.parentElement;
    
                if (parentElement.classList.contains("menu-item-has-children") && !parentElement.classList.contains("submenu")) {
                    // Click on arrow for non-submenu item
                    const submenu = parentElement.querySelector("ul.submenu");
                    if (submenu) {
                        toggleSubmenu(parentElement);
                    }
                } else if (parentElement.classList.contains("submenu") && target.classList.contains("arrow-submenu")) {
                    // Click on arrow-submenu for submenu item
                    toggleSubmenu(parentElement);
                }
            });
    
            // Создание span.arrow для каждого подменю
            const submenuLinks = document.querySelectorAll(".menu-item-has-children > a");
    
            submenuLinks.forEach(function (link) {
                const parentElement = link.parentElement;
    
                if (!parentElement.classList.contains("submenu")) {
                    // If it's not a submenu, create arrow
                    const arrow = createArrow(parentElement, "arrow");
                    arrow.addEventListener("click", function (event) {
                        event.stopPropagation();
                        const submenu = parentElement.querySelector("ul.submenu");
                        if (submenu) {
                            toggleSubmenu(parentElement);
                        }
                    });
                } else {
                    // If it's a submenu, create arrow-submenu and attach toggleSubmenu function
                    const arrowSubmenu = createArrow(parentElement, "arrow-submenu");
                    arrowSubmenu.addEventListener("click", function (event) {
                        event.stopPropagation();
                        toggleSubmenu(parentElement);
                    });
                }
            });
        });
    };
    
    
    
    
      functionHeaderMenu();
      window["FLS"] = true;
      isWebp();
      addTouchClass();
      addLoadedClass();
      menuInit();
      spollers();
      tabs();
      showMore();
      formRating();
      pageNavigation();
      headerScroll();
  })();
})();


function formRating() {
  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
      initRatings();
  }
  // Основна функція
  function initRatings() {
      let ratingActive, ratingValue;
      // "Бігаємо" по всіх рейтингах на сторінці
      for (let index = 0; index < ratings.length; index++) {
          const rating = ratings[index];
          initRating(rating);
      }
      // Ініціалізуємо конкретний рейтинг
      function initRating(rating) {
          initRatingVars(rating);

          setRatingActiveWidth();

          if (rating.classList.contains('rating_set')) {
              setRating(rating);
          }
      }
      // Ініціалізація змінних
      function initRatingVars(rating) {
          ratingActive = rating.querySelector('.rating__active');
          ratingValue = rating.querySelector('.rating__value');
      }
      // Змінюємо ширину активних зірок
      function setRatingActiveWidth(index = ratingValue.value) {
          const ratingActiveWidth = index / 0.05;
          ratingActive.style.width = `${ratingActiveWidth}%`;
      }
      // Можливість вказати оцінку
      function setRating(rating) {
          const ratingItems = rating.querySelectorAll('.rating__item');
          for (let index = 0; index < ratingItems.length; index++) {
              const ratingItem = ratingItems[index];
              ratingItem.addEventListener("mouseenter", function (e) {
                  // Оновлення змінних
                  initRatingVars(rating);
                  // Оновлення активних зірок
                  setRatingActiveWidth(ratingItem.value);
              });
              ratingItem.addEventListener("mouseleave", function (e) {
                  // Оновлення активних зірок
                  setRatingActiveWidth();
              });
              ratingItem.addEventListener("click", function (e) {
                  // Оновлення змінних
                  initRatingVars(rating);

                  if (rating.dataset.ajax) {
                      // "Надіслати" на сервер
                      setRatingValue(ratingItem.value, rating);
                  } else {
                      // Відобразити вказану оцінку
                      ratingValue.value = index + 1;
                      setRatingActiveWidth();
                  }
              });
          }
      }
      async function setRatingValue(value, rating) {
          if (!rating.classList.contains('rating_sending')) {
              rating.classList.add('rating_sending');

              // Надсилання даних (value) на сервер
              let response = await fetch('rating.json', {
                  method: 'GET',

                  //body: JSON.stringify({
                  //	userRating: value
                  //}),
                  //headers: {
                  //	'content-type': 'application/json'
                  //}

              });
              if (response.ok) {
                  const result = await response.json();

                  // Отримуємо новий рейтинг
                  const newRating = result.newRating;

                  // Виведення нового середнього результату
                  ratingValue.value = newRating;

                  // Оновлення активних зірок
                  setRatingActiveWidth();

                  rating.classList.remove('rating_sending');
              } else {
                  alert("Помилка");

                  rating.classList.remove('rating_sending');
              }
          }
      }
  }
}

document.addEventListener('DOMContentLoaded', function () {
const formLines = document.querySelectorAll('.form__line');

formLines.forEach(formLine => {
  const formCols = formLine.querySelectorAll('.form__col');
  console.log(formCols);

  if (formCols.length > 0) {
    formCols.forEach(formCol => {
      const input = formCol.querySelector('input[type="text"], input[type="tel"], input[type="date"], input[type="email"]');
      const customSelect = formCol.querySelector('.select');
      if(formCol.querySelector('label')) {
        formCol.classList.add('col-with-label');
      } else {
        formCol.classList.remove('col-with-label');
      }
      const updateClass = () => {
        if (input && input.value.trim() !== '') {
          formCol.classList.add('input--checked');
        } else {
          formCol.classList.remove('input--checked');
        }
      };

      if (input) {
        input.addEventListener('input', updateClass);
        input.addEventListener('focusout', updateClass);
      }

      if (customSelect) {
        customSelect.addEventListener('click', function () {
          formCol.classList.add('input--checked', 'input--checked-select');
        });

        customSelect.addEventListener('blur', function () {
          formCol.classList.remove('input--checked', 'input--checked-select');
        });
      }

      // Initial class check
      window.setTimeout(updateClass, 0);
    });
  } else {
    const inputsAndSelects = formLine.querySelectorAll('input[type="text"], input[type="tel"], input[type="date"], input[type="email"], select');

    inputsAndSelects.forEach(inputOrSelect => {
      inputOrSelect.addEventListener('input', function () {
        if (inputOrSelect.value.trim() !== '') {
          formLine.classList.add('input--checked');
        } else {
          formLine.classList.remove('input--checked');
        }
      });

      inputOrSelect.addEventListener('focusout', function () {
        if (inputOrSelect.value.trim() !== '') {
          formLine.classList.add('input--checked');
        } else {
          formLine.classList.remove('input--checked');
        }
      });

      // Initial class check
      window.setTimeout(() => {
        if (inputOrSelect.value.trim() !== '') {
          formLine.classList.add('input--checked');
        } else {
          formLine.classList.remove('input--checked');
        }
      }, 0);
    });

    // Custom select
    const customSelect = formLine.querySelector('.select');
    if (customSelect) {
      customSelect.addEventListener('click', function () {
        formLine.classList.add('input--checked', 'input--checked-select');
      });

      customSelect.addEventListener('blur', function () {
        formLine.classList.remove('input--checked', 'input--checked-select');
      });
    }
  }
});
});


document.addEventListener('DOMContentLoaded', function () {
const numInputs = document.querySelectorAll('.num');

numInputs.forEach(numInput => {
  numInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Оставляем только цифры
    event.target.value = sanitizedValue;
  });
});
});





formRating();
