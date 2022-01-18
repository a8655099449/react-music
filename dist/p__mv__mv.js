(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '0bdg': function(t, e, n) {
      'use strict';
      var a = n('q1tI');
      e['a'] = Object(a['createContext'])();
    },
    IV40: function(t, e, n) {},
    PioQ: function(t, e, n) {
      'use strict';
      function a(t) {
        return { userInfo: t.userData, isLogin: t.isLogin, isH5: t.isH5 };
      }
      function i(t) {
        return {
          setUserData: e => {
            t({ type: 'setUserInfo', data: e });
          },
          logout: () => {
            t({ type: 'logout' });
          },
          setDevice: e => {
            t({ type: 'setDevice', data: e });
          },
        };
      }
      n.d(e, 'b', function() {
        return a;
      }),
        n.d(e, 'a', function() {
          return i;
        });
    },
    yYma: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n('q1tI'),
        i = n.n(a),
        o = n('/MKj'),
        r = n('PioQ'),
        c = n('IV40'),
        s = n.n(c),
        u = n('0bdg'),
        d = t => {
          var e = t.location.query,
            n = 488910132;
          e.id && !isNaN(e.id) && (n = parseInt(e.id));
          var a = { id: n };
          return i.a.createElement(
            'div',
            {
              className: ''.concat(
                s.a['classname'],
                ' content-box page-content',
              ),
            },
            n,
            i.a.createElement(u['a'].Provider, { value: a }),
          );
        };
      e['default'] = Object(o['b'])(r['b'], r['a'])(d);
    },
  },
]);
