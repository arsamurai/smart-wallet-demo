(self["webpackChunkfutornoi_pug_starter"] = self["webpackChunkfutornoi_pug_starter"] || []).push([[792],{

/***/ 354:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/js/libs/aos.js
var aos = __webpack_require__(839);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
;// ./src/js/modules/aosConfig.js
var aosConfig = {
  delay: 0,
  offset: 0,
  once: true,
  duration: 1000,
  easing: 'show-easing',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate'
};
/* harmony default export */ var modules_aosConfig = (aosConfig);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 92 modules
var swiper_esm = __webpack_require__(175);
;// ./src/js/modules/swiper.js





var swipers = {
  downloadImagesSwiper: function downloadImagesSwiper() {
    return new swiper_esm/* default */.Ay('.download-images__swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4000
      },
      disableOnInteraction: false,
      effect: 'coverflow',
      direction: 'vertical',
      modules: [swiper_esm/* EffectCoverflow */.t9, swiper_esm/* Autoplay */.Ij],
      coverflowEffect: {
        scale: 0.8,
        stretch: 160,
        depth: 50,
        rotate: 0,
        slideShadows: false,
        modifier: 1
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          direction: 'horizontal'
        },
        1500: {
          slidesPerView: 2,
          direction: 'horizontal',
          coverflowEffect: {
            scale: 0.8,
            stretch: 260,
            depth: 50,
            rotate: 0,
            slideShadows: false,
            modifier: 1
          }
        }
      }
    });
  },
  downloadItemsSwiper: function downloadItemsSwiper() {
    return new swiper_esm/* default */.Ay('.download-items__swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [swiper_esm/* Pagination */.dK],
      pagination: {
        el: '.download-items__swiper-pagination.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
  }
};
/* harmony default export */ var swiper = (swipers);
;// ./src/js/app.js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var getModal = function getModal(name) {
  var _document;
  return (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector("[data-modal-".concat(name, "]"));
};
var setModalState = function setModalState(modal, activate) {
  var action = activate ? 'add' : 'remove';
  modal === null || modal === void 0 || modal.classList[action]('active');
};
addEventListener('load', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var headerContainer, callback, observer, termsOpenBtn, termsModal, termsCloseBtn;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        // AOS
        aos_default().init(modules_aosConfig);

        // Header
        headerContainer = document.getElementById('header');
        if (window.location.pathname.includes('privacy')) {
          headerContainer.classList.add('active');
        } else {
          callback = function callback(entries) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) {
                headerContainer.classList.add('active');
              } else {
                headerContainer.classList.remove('active');
              }
            });
          };
          observer = new IntersectionObserver(callback, {
            rootMargin: '0px',
            threshold: 0
          });
          observer.observe(document.getElementById('headerAnchor'));
        }

        // Terms
        termsOpenBtn = document.querySelector('[data-terms-btn]');
        termsModal = getModal('terms');
        termsCloseBtn = document.querySelector('[data-terms-close]');
        termsOpenBtn === null || termsOpenBtn === void 0 || termsOpenBtn.addEventListener('click', function () {
          setModalState(termsModal, true);
        });
        termsCloseBtn === null || termsCloseBtn === void 0 || termsCloseBtn.addEventListener('click', function () {
          setModalState(termsModal, false);
        });
        termsModal.addEventListener('click', function (e) {
          if (e.target === termsModal) {
            setModalState(termsModal, false);
          }
        });

        // Swipers
        swiper.downloadImagesSwiper();
        swiper.downloadItemsSwiper();
      case 1:
        return _context.a(2);
    }
  }, _callee);
})));

/***/ }),

/***/ 726:
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  'object' == ( false ? 0 : _typeof(exports)) && 'object' == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = 'dist/', t(0);
  }([function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
      r = n(1),
      a = (o(r), n(6)),
      u = o(a),
      c = n(7),
      f = o(c),
      s = n(8),
      d = o(s),
      l = n(9),
      p = o(l),
      m = n(10),
      b = o(m),
      v = n(11),
      y = o(v),
      g = n(14),
      h = o(g),
      w = [],
      k = !1,
      x = window,
      j = {
        offset: 120,
        delay: 0,
        easing: 'ease',
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: 'DOMContentLoaded',
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1,
        scrollContainer: ''
      },
      O = function O() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once, x), w;
      },
      S = function S() {
        ;
        w = (0, h.default)(), O();
      },
      _ = function _() {
        w.forEach(function (e, t) {
          e.node.removeAttribute('data-aos'), e.node.removeAttribute('data-aos-easing'), e.node.removeAttribute('data-aos-duration'), e.node.removeAttribute('data-aos-delay');
        });
      },
      z = function z(e) {
        return e === !0 || 'mobile' === e && p.default.mobile() || 'phone' === e && p.default.phone() || 'tablet' === e && p.default.tablet() || 'function' == typeof e && e() === !0;
      },
      M = function M(e) {
        ;
        j = i(j, e), j.scrollContainer && (x = window.document.querySelector(j.scrollContainer)), w = (0, h.default)();
        var t = document.all && !window.atob;
        return z(j.disable) || t ? _() : (document.querySelector('body').setAttribute('data-aos-easing', j.easing), document.querySelector('body').setAttribute('data-aos-duration', j.duration), document.querySelector('body').setAttribute('data-aos-delay', j.delay), 'DOMContentLoaded' === j.startEvent && ['complete', 'interactive'].indexOf(document.readyState) > -1 ? O(!0) : 'load' === j.startEvent ? x.addEventListener(j.startEvent, function () {
          O(!0);
        }) : document.addEventListener(j.startEvent, function () {
          O(!0);
        }), x.addEventListener('resize', (0, f.default)(O, j.debounceDelay, !0)), x.addEventListener('orientationchange', (0, f.default)(O, j.debounceDelay, !0)), x.addEventListener('scroll', (0, u.default)(function () {
          ;
          (0, b.default)(w, j.once, x);
        }, j.throttleDelay)), j.disableMutationObserver || (0, d.default)('[data-aos]', S), w);
      };
    e.exports = {
      init: M,
      refresh: O,
      refreshHard: S
    };
  }, function (e, t) {},,,,, function (e, t) {
    ;
    (function (t) {
      'use strict';

      function n(e, t, n) {
        function o(t) {
          var n = b,
            o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }
        function r(e) {
          return k = e, h = setTimeout(s, t), S ? o(e) : g;
        }
        function a(e) {
          var n = e - w,
            o = e - k,
            i = t - n;
          return _ ? j(i, y - o) : i;
        }
        function c(e) {
          var n = e - w,
            o = e - k;
          return void 0 === w || n >= t || n < 0 || _ && o >= y;
        }
        function s() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
        }
        function d(e) {
          return h = void 0, z && b ? o(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(O());
        }
        function m() {
          var e = O(),
            n = c(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (_) return h = setTimeout(s, t), o(w);
          }
          return void 0 === h && (h = setTimeout(s, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          k = 0,
          S = !1,
          _ = !1,
          z = !0;
        if ('function' != typeof e) throw new TypeError(f);
        return t = u(t) || 0, i(n) && (S = !!n.leading, _ = 'maxWait' in n, y = _ ? x(u(n.maxWait) || 0, t) : y, z = 'trailing' in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }
      function o(e, t, o) {
        var r = !0,
          a = !0;
        if ('function' != typeof e) throw new TypeError(f);
        return i(o) && (r = 'leading' in o ? !!o.leading : r, a = 'trailing' in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }
      function i(e) {
        var t = 'undefined' == typeof e ? 'undefined' : c(e);
        return !!e && ('object' == t || 'function' == t);
      }
      function r(e) {
        return !!e && 'object' == ('undefined' == typeof e ? 'undefined' : c(e));
      }
      function a(e) {
        return 'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) || r(e) && k.call(e) == d;
      }
      function u(e) {
        if ('number' == typeof e) return e;
        if (a(e)) return s;
        if (i(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, '');
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
      }
      var c = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : _typeof(e);
        },
        f = 'Expected a function',
        s = NaN,
        d = '[object Symbol]',
        l = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        b = /^0o[0-7]+$/i,
        v = parseInt,
        y = 'object' == ('undefined' == typeof t ? 'undefined' : c(t)) && t && t.Object === Object && t,
        g = 'object' == ('undefined' == typeof self ? 'undefined' : c(self)) && self && self.Object === Object && self,
        h = y || g || Function('return this')(),
        w = Object.prototype,
        k = w.toString,
        x = Math.max,
        j = Math.min,
        O = function O() {
          return h.Date.now();
        };
      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    ;
    (function (t) {
      'use strict';

      function n(e, t, n) {
        function i(t) {
          var n = b,
            o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }
        function r(e) {
          return O = e, h = setTimeout(s, t), S ? i(e) : g;
        }
        function u(e) {
          var n = e - w,
            o = e - O,
            i = t - n;
          return _ ? x(i, y - o) : i;
        }
        function f(e) {
          var n = e - w,
            o = e - O;
          return void 0 === w || n >= t || n < 0 || _ && o >= y;
        }
        function s() {
          var e = j();
          return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
        }
        function d(e) {
          return h = void 0, z && b ? i(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(j());
        }
        function m() {
          var e = j(),
            n = f(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (_) return h = setTimeout(s, t), i(w);
          }
          return void 0 === h && (h = setTimeout(s, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          O = 0,
          S = !1,
          _ = !1,
          z = !0;
        if ('function' != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (S = !!n.leading, _ = 'maxWait' in n, y = _ ? k(a(n.maxWait) || 0, t) : y, z = 'trailing' in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }
      function o(e) {
        var t = 'undefined' == typeof e ? 'undefined' : u(e);
        return !!e && ('object' == t || 'function' == t);
      }
      function i(e) {
        return !!e && 'object' == ('undefined' == typeof e ? 'undefined' : u(e));
      }
      function r(e) {
        return 'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) || i(e) && w.call(e) == s;
      }
      function a(e) {
        if ('number' == typeof e) return e;
        if (r(e)) return f;
        if (o(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, '');
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
      }
      var u = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : _typeof(e);
        },
        c = 'Expected a function',
        f = NaN,
        s = '[object Symbol]',
        d = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        b = parseInt,
        v = 'object' == ('undefined' == typeof t ? 'undefined' : u(t)) && t && t.Object === Object && t,
        y = 'object' == ('undefined' == typeof self ? 'undefined' : u(self)) && self && self.Object === Object && self,
        g = v || y || Function('return this')(),
        h = Object.prototype,
        w = h.toString,
        k = Math.max,
        x = Math.min,
        j = function j() {
          return g.Date.now();
        };
      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    'use strict';

    function n(e) {
      var t = void 0,
        o = void 0,
        i = void 0;
      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }
      return !1;
    }
    function o(e, t) {
      var n = window.document,
        o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        a = new o(i);
      r = t, a.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }
    function i(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          o = Array.prototype.slice.call(e.removedNodes),
          i = t.concat(o);
        if (n(i)) return r();
      });
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var r = function r() {};
    t.default = o;
  }, function (e, t) {
    'use strict';

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || '';
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }(),
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      f = function () {
        function e() {
          n(this, e);
        }
        return i(e, [{
          key: 'phone',
          value: function value() {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)));
          }
        }, {
          key: 'mobile',
          value: function value() {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)));
          }
        }, {
          key: 'tablet',
          value: function value() {
            return this.mobile() && !this.phone();
          }
        }]), e;
      }();
    t.default = new f();
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var n = function n(e, t, _n, o) {
        var i = e.node.getAttribute('data-aos-once');
        t > e.position - o ? e.node.classList.add('aos-animate') : 'undefined' != typeof i && ('false' === i || !_n && 'true' !== i) && e.node.classList.remove('aos-animate');
      },
      o = function o(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
          i = null,
          r = null,
          a = 0;
        o == window ? (i = window.pageYOffset, r = window.innerHeight) : (i = o.scrollTop, r = o.offsetHeight, a = o.offsetTop), e.forEach(function (e, o) {
          n(e, r + i, t, a);
        });
      };
    t.default = o;
  }, function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var i = n(12),
      r = o(i),
      a = function a(e, t) {
        return e.forEach(function (e, n) {
          e.node.classList.add('aos-init'), e.position = (0, r.default)(e.node, t.offset);
        }), e;
      };
    t.default = a;
  }, function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var i = n(13),
      r = o(i),
      a = function a(e, t) {
        var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
            offset: e.getAttribute('data-aos-offset'),
            anchor: e.getAttribute('data-aos-anchor'),
            anchorPlacement: e.getAttribute('data-aos-anchor-placement')
          };
        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case 'top-bottom':
            break;
          case 'center-bottom':
            n += e.offsetHeight / 2;
            break;
          case 'bottom-bottom':
            n += e.offsetHeight;
            break;
          case 'top-center':
            n += i / 2;
            break;
          case 'bottom-center':
            n += i / 2 + e.offsetHeight;
            break;
          case 'center-center':
            n += i / 2 + e.offsetHeight / 2;
            break;
          case 'top-top':
            n += i;
            break;
          case 'bottom-top':
            n += e.offsetHeight + i;
            break;
          case 'center-top':
            n += e.offsetHeight / 2 + i;
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
      };
    t.default = a;
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      return {
        top: n,
        left: t
      };
    };
    t.default = n;
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var n = function n(e) {
      return e = e || document.querySelectorAll('[data-aos]'), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };
    t.default = n;
  }]);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [96], function() { return __webpack_exec__(354), __webpack_exec__(726); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.59d66463d1a4c4d37954.js.map