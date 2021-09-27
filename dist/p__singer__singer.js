(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    '0bdg': function(e, t, a) {
      'use strict';
      var n = a('q1tI');
      t['a'] = Object(n['createContext'])();
    },
    '0vtl': function(e, t, a) {
      e.exports = {
        'song-list': 'song-list___nlzxi',
        head: 'head___14JBe',
        left: 'left___2Njjf',
        right: 'right___1fYZU',
        'list-head': 'list-head___3X3kj',
        'head-item': 'head-item___2GoQy',
        'list-warp': 'list-warp___3WdsB',
        warp: 'warp___28LbG',
        item: 'item___3J9xe',
      };
    },
    '2yZ0': function(e, t, a) {
      e.exports = { nothing: 'nothing___21qjH' };
    },
    '3eJK': function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('cmjm'),
        i = a.n(r),
        s = a('Ng/0'),
        o = a('sOOk'),
        u = a('Vn/K'),
        l = e => {
          var t = e.item,
            a = e.width,
            n = void 0 === a ? 100 : a,
            r = e.showtime,
            l = void 0 !== r && r,
            m = null;
          if (l) {
            var d = Object(u['h'])(t.publishTime, 'yyyy-MM-dd');
            m = c.a.createElement(
              'div',
              { className: ''.concat(i.a['time']) },
              d,
            );
          }
          return c.a.createElement(
            'div',
            {
              className: ''.concat(i.a['dvd-item'], ' '),
              title: t.name,
              onClick: () => Object(o['a'])(t.id),
            },
            c.a.createElement(
              'div',
              { className: ''.concat(i.a['bg']) },
              c.a.createElement('i', {
                className: ''.concat(
                  i.a['classname'],
                  ' iconfont icon-bofang1',
                ),
              }),
              c.a.createElement(s['a'], {
                src: ''
                  .concat(t.picUrl, '?param=')
                  .concat(n, 'y')
                  .concat(n),
                alt: t.name,
              }),
            ),
            c.a.createElement(
              'p',
              { className: ''.concat(i.a['dvd-name'], ' text-row-1') },
              t.name,
            ),
            c.a.createElement(
              'p',
              { className: ''.concat(i.a['singer'], ' text-row-1') },
              t.artists[0].name,
            ),
            m,
          );
        };
      t['a'] = l;
    },
    '6mnD': function(e, t, a) {
      e.exports = { 'base-image': 'base-image___3KPub' };
    },
    '7Ecz': function(e, t, a) {
      e.exports = {
        cover: 'cover___3kXW_',
        'play-count': 'play-count___ZF9Ea',
        time: 'time___2CX6R',
        'mv-item': 'mv-item___GHq0Z',
        name: 'name___1vCwP',
      };
    },
    F9YG: function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('2yZ0'),
        i = a.n(r),
        s = a('Ng/0');
      t['a'] = e => {
        var t = e.hintText;
        return c.a.createElement(
          'div',
          { className: ''.concat(i.a['nothing']) },
          c.a.createElement(s['a'], {
            src: '//image.woai996.com/picGo/20210210092240.png',
          }),
          c.a.createElement('h3', { dangerouslySetInnerHTML: { __html: t } }),
        );
      };
    },
    'Ng/0': function(e, t, a) {
      'use strict';
      var n = a('ODXe'),
        c = a('q1tI'),
        r = a.n(c),
        i = a('6mnD'),
        s = a.n(i);
      t['a'] = e => {
        var t = e.src,
          a = e.alt,
          i = void 0 === a ? '\u56fe\u7247\u63cf\u8ff0' : a,
          o = e.height,
          u = e.width,
          l = Object(c['useState'])(!1),
          m = Object(n['a'])(l, 2),
          d = m[0],
          p = m[1],
          v = '//photo.tuituisoft.com/picgo/20210114103900.png',
          f = { height: o, width: u, display: d ? 'block' : 'none' },
          b = { height: o, width: u, display: d ? 'none' : 'block' };
        function h() {
          p(!0);
        }
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement('img', {
            src: v,
            alt: '\u5360\u4f4d\u56fe\u7247',
            style: b,
            className: ''.concat(s.a['base-image']),
          }),
          r.a.createElement('img', {
            src: t,
            alt: i,
            style: f,
            className: ''.concat(s.a['base-image']),
            onLoad: h,
          }),
        );
      };
    },
    OvdA: function(e, t, a) {
      e.exports = {
        'singer-page': 'singer-page___WGUER',
        'left-content': 'left-content___3ieIr',
        'right-content': 'right-content___3z9Ca',
        pic: 'pic___3olSn',
        'pic-img': 'pic-img___O_lZJ',
        'btn-wrap': 'btn-wrap___2rkgI',
        'flex-warp': 'flex-warp___36Nvy',
        item: 'item___2aGbw',
        desc: 'desc___209ok',
        name: 'name___bMJE7',
      };
    },
    PioQ: function(e, t, a) {
      'use strict';
      function n(e) {
        return { userInfo: e.userData, isLogin: e.isLogin, isH5: e.isH5 };
      }
      function c(e) {
        return {
          setUserData: t => {
            e({ type: 'setUserInfo', data: t });
          },
          logout: () => {
            e({ type: 'logout' });
          },
          setDevice: t => {
            e({ type: 'setDevice', data: t });
          },
        };
      }
      a.d(t, 'b', function() {
        return n;
      }),
        a.d(t, 'a', function() {
          return c;
        });
    },
    U5YR: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('o0o1'),
        c = a.n(n),
        r = a('HaE+'),
        i = a('ODXe'),
        s = a('q1tI'),
        o = a.n(s),
        u = a('/MKj'),
        l = a('0bdg'),
        m = a('PioQ'),
        d = a('OvdA'),
        p = a.n(d),
        v = a('Ctmj'),
        f = a('3eJK'),
        b = o.a.createElement(
          'div',
          { style: { height: '400px' } },
          o.a.createElement(v['a'], null),
        ),
        h = e => {
          var t = Object(s['useContext'])(l['a']),
            a = t.albums,
            n = void 0 === a ? [] : a;
          return 0 == n.length
            ? b
            : o.a.createElement(
                'div',
                { className: ''.concat(p.a['flex-warp']) },
                n.map((e, t) =>
                  o.a.createElement(
                    'div',
                    { className: ''.concat(p.a['item']), key: t },
                    o.a.createElement(f['a'], { item: e, showtime: !0 }),
                  ),
                ),
              );
        },
        g = h,
        E = a('imZp'),
        _ = o.a.createElement(
          'div',
          { style: { height: '400px' } },
          o.a.createElement(v['a'], null),
        ),
        y = e => {
          var t = Object(s['useContext'])(l['a']),
            a = t.hotsongs,
            n = void 0 === a ? [] : a;
          return n === []
            ? _
            : o.a.createElement(
                'div',
                null,
                o.a.createElement(E['a'], {
                  tracks: n,
                  showHead: !1,
                  showSinger: !1,
                }),
              );
        },
        N = y,
        O = a('o1iF'),
        w = e => Object(O['a'])({ url: '/artist/detail', params: e }),
        x = e => Object(O['a'])({ url: '/artist/desc', params: e }),
        j = e => Object(O['a'])({ url: '/artist/top/song', params: e }),
        k = e => Object(O['a'])({ url: '/artist/album', params: e }),
        I = e => Object(O['a'])({ url: '/artist/mv', params: e }),
        D = a('YGkd'),
        S = a('F9YG'),
        C = o.a.createElement(
          'div',
          { style: { height: '400px' } },
          o.a.createElement(v['a'], null),
        ),
        q = e => {
          var t = Object(s['useContext'])(l['a']),
            a = t.id,
            n = Object(s['useState'])([]),
            u = Object(i['a'])(n, 2),
            m = u[0],
            d = u[1],
            v = Object(s['useState'])(!0),
            f = Object(i['a'])(v, 2),
            b = f[0],
            h = f[1],
            g = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return h(!0), (e.next = 3), I({ id: a, limit: 30 });
                        case 3:
                          if (((t = e.sent), E(), 200 === t.code)) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt('return');
                        case 7:
                          d(t.mvs);
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            E = () => {
              setTimeout(() => {
                h(!1);
              }, 50);
            };
          return (
            Object(s['useEffect'])(() => {
              g();
            }, []),
            b
              ? C
              : 0 === m.length
              ? o.a.createElement(S['a'], { hintText: '\u6682\u65e0MV' })
              : o.a.createElement(
                  'div',
                  { className: ''.concat(p.a['flex-warp']) },
                  m.map((e, t) =>
                    o.a.createElement(
                      'div',
                      { key: t, className: ''.concat(p.a['item']) },
                      o.a.createElement(D['a'], {
                        item: e,
                        src: 'imgurl',
                        type: 'mv',
                      }),
                    ),
                  ),
                )
          );
        },
        H = q,
        L = o.a.createElement(
          'div',
          { style: { height: '400px' } },
          o.a.createElement(v['a'], null),
        ),
        T = e => {
          var t = Object(s['useContext'])(l['a']),
            a = t.id,
            n = t.singerData,
            u = Object(s['useState'])(null),
            m = Object(i['a'])(u, 2),
            d = m[0],
            v = m[1],
            f = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), x({ id: a });
                        case 2:
                          if (((t = e.sent), 200 === t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          v(t);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(s['useEffect'])(() => {
              f();
            }, []),
            d && n
              ? o.a.createElement(
                  'div',
                  { className: ''.concat(p.a['desc']) },
                  o.a.createElement(
                    'header',
                    null,
                    o.a.createElement(
                      'h3',
                      { className: ''.concat(p.a['name']) },
                      ' ',
                      n.artist.name,
                      '\u7b80\u4ecb ',
                    ),
                    o.a.createElement('p', null, d.briefDesc),
                  ),
                  d.introduction.map((e, t) =>
                    o.a.createElement(A, { item: e, key: t }),
                  ),
                )
              : L
          );
        },
        A = e => {
          var t = e.item,
            a = t.txt.replace(/\n/g, '<br>');
          return o.a.createElement(
            'div',
            { className: ''.concat(p.a['desc-item']) },
            o.a.createElement('h3', null, t.ti),
            o.a.createElement('p', { dangerouslySetInnerHTML: { __html: a } }),
          );
        },
        G = T,
        R = [
          { name: '\u70ed\u95e8\u4f5c\u54c1', content: N },
          { name: '\u6240\u6709\u4e13\u8f91', content: g },
          { name: '\u76f8\u5173mv', content: H },
          { name: '\u827a\u4eba\u4ecb\u7ecd', content: G },
        ],
        Y = a('9kvl'),
        M = a('Ng/0'),
        Z = a('sOOk'),
        J = o.a.createElement(
          'div',
          { style: { height: '400px' } },
          o.a.createElement(v['a'], null),
        ),
        K =
          'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
        P = e => {
          var t = Object(s['useContext'])(l['a']),
            a = t.singerData;
          return a
            ? o.a.createElement(
                'div',
                { className: ''.concat(p.a['pic']) },
                o.a.createElement(
                  'header',
                  null,
                  a.artist.name,
                  ' ',
                  o.a.createElement('span', null),
                ),
                o.a.createElement(
                  'div',
                  { className: ''.concat(p.a['pic-img']) },
                  o.a.createElement(M['a'], {
                    src: ''.concat(a.artist.cover || K, '?param=640y300'),
                    alt: '\u534e\u6668\u5b87',
                  }),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(p.a['btn-wrap']) },
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(
                          p.a['classname'],
                          ' btn btn-black',
                        ),
                        style: { display: a.user ? 'flex' : 'none' },
                        onClick: () => {
                          Object(Z['f'])(a.user.userId);
                        },
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-yonghu1',
                      }),
                      ' \u4e2a\u4eba\u4e3b\u9875',
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(
                          p.a['classname'],
                          ' btn btn-black',
                        ),
                      },
                      o.a.createElement('i', {
                        className: 'icon-jiahaocu iconfont',
                      }),
                      '\u6536\u85cf',
                    ),
                  ),
                ),
              )
            : J;
        },
        V = P,
        F = a('a4uv'),
        U = a.n(F),
        W = e => {
          var t = e.list,
            a = void 0 === t ? [] : t,
            n = e.activeIndex,
            c = void 0 === n ? 0 : n,
            r = e.changeNav;
          return o.a.createElement(
            'div',
            { className: ''.concat(U.a['base-option-nav']) },
            a.map((e, t) =>
              o.a.createElement(
                'div',
                {
                  item: e,
                  key: t,
                  className: c === t ? U.a['active'] : '',
                  onClick: () => {
                    t != c && r(t);
                  },
                },
                e,
              ),
            ),
          );
        },
        z = W,
        X = a('Vn/K'),
        $ = e => {
          var t = e.location.query,
            a = 861777,
            n = 0;
          t.id && !isNaN(t.id) && (a = parseInt(t.id)),
            t.type &&
              !isNaN(t.type) &&
              t.type < R.length &&
              (n = parseInt(t.type));
          var u = Object(s['useState'])(d),
            m = Object(i['a'])(u, 2),
            d = m[0],
            v = m[1],
            f = Object(s['useState'])(n),
            b = Object(i['a'])(f, 2),
            h = b[0],
            g = b[1],
            E = Object(s['useState'])([]),
            _ = Object(i['a'])(E, 2),
            y = _[0],
            N = _[1],
            O = Object(s['useState'])([]),
            x = Object(i['a'])(O, 2),
            I = x[0],
            D = x[1],
            S = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), w({ id: a });
                        case 2:
                          if (((t = e.sent), 200 === t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          v(t.data),
                            (document.title = ''.concat(
                              t.data.artist.name,
                              ' - \u6b4c\u624b',
                            ));
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            C = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), j({ id: a });
                        case 2:
                          if (((t = e.sent), 200 === t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          N(t.songs);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            q = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), k({ id: a });
                        case 2:
                          if (((t = e.sent), 200 === t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          D(t.hotAlbums);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            H = e => {
              if ('/singer' === e.pathname) {
                var t = parseInt(e.query.type);
                !isNaN(t) && t < R.length && g(parseInt(t));
              }
            };
          Object(s['useEffect'])(() => {
            S(), C(), q(), Object(X['n'])(0);
          }, []),
            Y['a'].listen(H);
          var L = R[h].content,
            T = { id: a, singerData: d, hotsongs: y, albums: I };
          return o.a.createElement(
            'div',
            {
              className: ''.concat(
                p.a['singer-page'],
                ' content-box page-content',
              ),
            },
            o.a.createElement(
              l['a'].Provider,
              { value: T },
              o.a.createElement(
                'div',
                { className: ''.concat(p.a['left-content']) },
                o.a.createElement(V, null),
                o.a.createElement(z, {
                  list: R.map(e => e.name),
                  activeIndex: h,
                  changeNav: e => {
                    Y['a'].replace({
                      pathname: '/singer',
                      query: { id: a, type: e },
                    });
                  },
                }),
                o.a.createElement(
                  'div',
                  { className: ''.concat(p.a['option-content']) },
                  o.a.createElement(L, null),
                ),
              ),
              o.a.createElement('div', {
                className: ''.concat(p.a['right-content']),
              }),
            ),
          );
        };
      t['default'] = Object(u['b'])(m['b'], m['a'])($);
    },
    'Vn/K': function(e, t, a) {
      'use strict';
      a.d(t, 'l', function() {
        return m;
      }),
        a.d(t, 'q', function() {
          return p;
        }),
        a.d(t, 'g', function() {
          return v;
        }),
        a.d(t, 'd', function() {
          return f;
        }),
        a.d(t, 'k', function() {
          return b;
        }),
        a.d(t, 'o', function() {
          return h;
        }),
        a.d(t, 'i', function() {
          return g;
        }),
        a.d(t, 'j', function() {
          return E;
        }),
        a.d(t, 'h', function() {
          return _;
        }),
        a.d(t, 'e', function() {
          return y;
        }),
        a.d(t, 'f', function() {
          return N;
        }),
        a.d(t, 'p', function() {
          return O;
        }),
        a.d(t, 'b', function() {
          return w;
        }),
        a.d(t, 'm', function() {
          return x;
        }),
        a.d(t, 'n', function() {
          return j;
        }),
        a.d(t, 'c', function() {
          return k;
        }),
        a.d(t, 'a', function() {
          return I;
        }),
        a.d(t, 'r', function() {
          return D;
        }),
        a.d(t, 's', function() {
          return S;
        });
      a('miYZ');
      var n = a('tsqr'),
        c = a('VTBJ'),
        r = (a('2qtc'), a('kLXV')),
        i = a('q1tI'),
        s = a.n(i),
        o = a('x5H0'),
        u = a('vu0G'),
        l = r['a'].confirm;
      function m(e) {
        var t = parseInt(e / 60);
        t = t < 10 ? '0' + t : t;
        var a = parseInt(e - 60 * t);
        return (a = a < 10 ? '0' + a : a), t + ':' + a;
      }
      var d = {
        title: '\u9ed8\u8ba4\u6807\u9898',
        content: '\u9ed8\u8ba4\u5185\u5bb9',
        okText: '\u786e\u5b9a',
        cancelText: '\u53d6\u6d88',
      };
      function p(e) {
        for (var t in d) e[t] || (e[t] = d[t]);
        return new Promise((t, a) => {
          l(
            Object(c['a'])(
              Object(c['a'])({}, e),
              {},
              {
                onOk() {
                  t();
                },
                onCancel() {
                  a();
                },
              },
            ),
          );
        });
      }
      function v() {
        (document.documentElement.style.overflow = 'hidden'),
          (document.body.style.position = 'fixed'),
          (document.body.style.top = '0px'),
          (document.body.style.width = '100%');
      }
      function f() {
        (document.documentElement.style.overflowY = 'scroll'),
          (document.body.style.position = 'static');
      }
      function b(e) {
        return (
          (e = parseInt(e)),
          e <= 1e4
            ? e
            : e > 1e4 && e < 99999999
            ? parseInt(e / 1e4) + ' \u4e07'
            : parseInt(e / 1e8) + ' \u4ebf'
        );
      }
      function h(e, t) {
        var a = Date.parse(new Date()) / 1e3,
          n = { data: t, time: a };
        window.localStorage.setItem(e, JSON.stringify(n));
      }
      function g(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = Date.parse(new Date()) / 1e3,
          n = JSON.parse(window.localStorage.getItem(e));
        return !!((n && t && a - t < n.time) || (n && 0 === t)) && n.data;
      }
      function E(e) {
        for (var t = e.split(/\n/), a = 0; a < t.length; a++) {
          var n = '',
            c = '',
            r = !1;
          t[a] &&
            ((n = t[a].split(']')[0].split('[')[1]),
            (n = n.slice(0, 5)),
            (c = t[a].split(']')[1])),
            (t[a] = { time: n, content: c, select: r });
        }
        return t;
      }
      var _ = (e, t) => {
        if (!e) return 'is not time';
        if (('number' == typeof e && (e = new Date(e)), /(y+)/.test(t))) {
          var a = e.getFullYear() + '';
          t = t.replace(RegExp.$1, a.substr(4 - RegExp.$1.length));
        }
        var n = {
          'M+': e.getMonth() + 1,
          'd+': e.getDate(),
          'h+': e.getHours(),
          'm+': e.getMinutes(),
          's+': e.getSeconds(),
        };
        for (var c in n)
          if (new RegExp('('.concat(c, ')')).test(t)) {
            var r = n[c] + '';
            t = t.replace(
              RegExp.$1,
              1 == RegExp.$1.length ? r : ('00' + r).substr(r.length),
            );
          }
        return t;
      };
      function y(e) {
        if (isNaN(e)) return [];
        for (var t = [], a = 0; a < e; a++) t.push(a);
        return t;
      }
      var N = (e, t) => {
          var a = null;
          return function() {
            clearTimeout(a),
              (a = setTimeout(() => {
                e.apply(this, arguments);
              }, t));
          };
        },
        O = () => o['a'].emit(u['e']),
        w = e => o['a'].emit(u['b'], e),
        x = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'playSong';
          return o['a'].emit(u['a'], e, t);
        },
        j = e => {
          window.scrollTo({ behavior: 'smooth', top: e });
        },
        k = (e, t) => {
          var a = new RegExp(e, 'is');
          return t.replace(a, '<b>$&</b>');
        },
        I = e => {
          var t = e.type;
          return 1 == t
            ? s.a.createElement('i', { className: 'iconfont icon-nan' })
            : 2 == t
            ? s.a.createElement('i', { className: 'iconfont icon-nv' })
            : s.a.createElement('i', {
                className: 'iconfont icon-siglyphalien',
              });
        },
        D = e => {
          n['default'].success(e);
        },
        S = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '\u656c\u8bf7\u671f\u5f85\uff01';
          n['default'].warning(e);
        };
    },
    YGkd: function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('7Ecz'),
        i = a.n(r),
        s = a('Ng/0'),
        o = a('Vn/K'),
        u = a('sOOk'),
        l = e => {
          var t = e.item,
            a = e.src,
            n = void 0 === a ? 'cover' : a,
            r = (e.type, Object(o['k'])(t.playCount)),
            l = Object(o['l'])(t.duration / 1e3);
          return c.a.createElement(
            'div',
            {
              className: ''.concat(i.a['mv-item']),
              onClick: () => Object(u['b'])(t.id),
            },
            c.a.createElement(
              'div',
              { className: ''.concat(i.a['cover']) },
              c.a.createElement(s['a'], { src: t[n] + '?param=159y120' }),
              c.a.createElement(
                'div',
                { className: ''.concat(i.a['play-count']) },
                c.a.createElement('i', {
                  className: ''.concat(
                    i.a['classname'],
                    ' icon-ziyuan iconfont',
                  ),
                }),
                r,
              ),
              c.a.createElement(
                'div',
                { className: ''.concat(i.a['time']) },
                l,
              ),
            ),
            c.a.createElement(
              'div',
              { className: ''.concat(i.a['name'], ' text-row-2') },
              t.name,
            ),
          );
        };
      t['a'] = l;
    },
    a4uv: function(e, t, a) {
      e.exports = {
        'base-option-nav': 'base-option-nav___3RuYC',
        active: 'active___3AB6F',
      };
    },
    aiZx: function(e, t, a) {
      'use strict';
      a.d(t, 'h', function() {
        return n;
      }),
        a.d(t, 'b', function() {
          return c;
        }),
        a.d(t, 'a', function() {
          return r;
        }),
        a.d(t, 'e', function() {
          return i;
        }),
        a.d(t, 'd', function() {
          return s;
        }),
        a.d(t, 'c', function() {
          return o;
        }),
        a.d(t, 'f', function() {
          return u;
        }),
        a.d(t, 'g', function() {
          return l;
        });
      var n = 'USER_DATA',
        c = 'HOME_DATA',
        r = 'COOKIE',
        i = 'PLAY_SONG_NAME',
        s = 'NOW_PLAY_ID',
        o = 'NEW_DVDS',
        u = 'PROFILE_PALYLIST_ID',
        l = 'SEARCH_KEYWORDS';
    },
    cmjm: function(e, t, a) {
      e.exports = {
        singer: 'singer___c7Fsn',
        bg: 'bg___VZsH1',
        time: 'time___dkc-E',
      };
    },
    imZp: function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('0vtl'),
        i = a.n(r),
        s = a('Vn/K'),
        o = a('sOOk'),
        u = [
          '',
          '\u6b4c\u66f2\u6807\u9898',
          '\u65f6\u957f',
          '\u6b4c\u624b',
          '\u4e13\u8f91',
        ];
      t['a'] = e => {
        var t = e.tracks,
          a = void 0 === t ? [] : t,
          n = e.showHead,
          r = void 0 === n || n,
          l = e.showSinger,
          m = void 0 === l || l,
          d = { display: r ? 'block' : 'none' };
        return c.a.createElement(
          'div',
          { className: ''.concat(i.a['song-list']) },
          c.a.createElement(
            'div',
            { style: d },
            c.a.createElement(
              'div',
              {
                className: ''.concat(i.a['list-head'], ' ').concat(i.a['warp']),
              },
              u.map((e, t) =>
                c.a.createElement(
                  'div',
                  {
                    className: ''
                      .concat(i.a['head-item'], ' ')
                      .concat(i.a['item']),
                    key: t,
                  },
                  e,
                ),
              ),
            ),
          ),
          c.a.createElement(
            'ul',
            {
              className: ''.concat(i.a['list-warp']),
              style: { borderTop: r ? 'none' : '1px solid #d9d9d9' },
            },
            a.map((e, t) => {
              var a = '',
                n = Object(s['l'])(e.dt / 1e3);
              return (
                e.alia[0] && (a = '- ('.concat(e.alia[0], ')')),
                c.a.createElement(
                  'li',
                  { className: ''.concat(i.a['warp']), key: t },
                  c.a.createElement(
                    'div',
                    {
                      className: ''.concat(i.a['item']),
                      onClick: () => {
                        Object(s['m'])({
                          singerName: e.ar[0].name,
                          songId: e.id,
                          songName: e.name,
                          dt: e.dt,
                        });
                      },
                    },
                    t + 1,
                    c.a.createElement('i', {
                      className: 'iconfont icon-ziyuan',
                    }),
                  ),
                  c.a.createElement(
                    'div',
                    {
                      className: ''.concat(
                        i.a['item'],
                        ' text-row-1 underline',
                      ),
                      onClick: () => Object(o['e'])(e.id),
                      title: ''.concat(e.name).concat(a, ' '),
                    },
                    e.name,
                    ' ',
                    c.a.createElement('span', null, a),
                  ),
                  c.a.createElement(
                    'div',
                    { className: ''.concat(i.a['item']) },
                    n,
                  ),
                  c.a.createElement(
                    'div',
                    {
                      className: ''.concat(
                        i.a['item'],
                        ' text-row-1 underline',
                      ),
                      onClick: () => Object(o['d'])(e.ar[0].id),
                      style: { display: m ? 'block' : 'none' },
                    },
                    e.ar[0].name,
                  ),
                  c.a.createElement(
                    'div',
                    {
                      className: ''.concat(
                        i.a['item'],
                        ' text-row-1 underline',
                      ),
                      onClick: () => Object(o['a'])(e.al.id),
                      title: e.al.name,
                    },
                    e.al.name,
                  ),
                )
              );
            }),
          ),
        );
      };
    },
    o1iF: function(e, t, a) {
      'use strict';
      var n = a('vDqi'),
        c = a.n(n),
        r = a('aiZx'),
        i = 'http://121.37.195.155:3000';
      function s(e) {
        if (e.iscookie && localStorage.getItem(r['a'])) {
          var t = 'cookie='.concat(localStorage.getItem(r['a'])),
            a = /=/.test(e.url) ? '&' : '?';
          e.url += ''.concat(a).concat(t);
        }
        var n = c.a.create({ baseURL: i, timeout: 1e4, withCredentials: !1 });
        return (
          n.interceptors.response.use(
            e => e.data,
            e => e,
          ),
          n(e)
        );
      }
      t['a'] = s;
    },
    sOOk: function(e, t, a) {
      'use strict';
      a.d(t, 'e', function() {
        return c;
      }),
        a.d(t, 'f', function() {
          return r;
        }),
        a.d(t, 'a', function() {
          return i;
        }),
        a.d(t, 'd', function() {
          return s;
        }),
        a.d(t, 'b', function() {
          return o;
        }),
        a.d(t, 'c', function() {
          return u;
        });
      var n = a('9kvl'),
        c = e => {
          n['a'].push({ pathname: '/songDetail', query: { songId: e } });
        },
        r = e => {
          n['a'].push({ pathname: '/userDetail', query: { id: e } });
        },
        i = e => {
          n['a'].push({ pathname: '/album', query: { id: e } });
        },
        s = e => {
          n['a'].push({ pathname: '/singer', query: { id: e } });
        },
        o = e => {
          n['a'].push({ pathname: '/mv', query: { id: e } });
        },
        u = e => {
          n['a'].push({ pathname: '/playlist', query: { id: e } });
        };
    },
    vu0G: function(e, t, a) {
      'use strict';
      a.d(t, 'e', function() {
        return n;
      }),
        a.d(t, 'd', function() {
          return c;
        }),
        a.d(t, 'c', function() {
          return r;
        }),
        a.d(t, 'a', function() {
          return i;
        }),
        a.d(t, 'b', function() {
          return s;
        });
      var n = 'SHOW_LOGIN',
        c = 'SHOW_LOADING',
        r = 'HIDE_LOADING',
        i = 'addNewSong',
        s = 'addPlayList';
    },
    x5H0: function(e, t, a) {
      'use strict';
      class n {
        constructor() {
          this.subscribers = [];
        }
        on(e, t) {
          if ('function' === typeof t) {
            var a = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== a) {
              var n = this.subscribers[a].events.findIndex(e => t === e);
              -1 === n && this.subscribers[a].events.push(t);
            } else {
              var c = { funName: e, events: [t] };
              this.subscribers.push(c);
            }
          }
        }
        once(e, t) {
          if ('function' === typeof t) {
            var a = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== a)
              this.subscribers[a].events.push({ event: t, isonce: !0 });
            else {
              var n = { funName: e, events: [{ event: t, isonce: !0 }] };
              this.subscribers.push(n);
            }
          }
        }
        emit() {
          if (0 !== arguments.length) {
            var e = this.subscribers.findIndex(e => e.funName === arguments[0]);
            if (-1 !== e && 0 !== this.subscribers[e].events.length) {
              var t = [...arguments];
              t.splice(0, 1);
              var a = -1;
              this.subscribers[e].events.forEach((e, n) => {
                e.isonce ? ((a = n), e.event(...t)) : e(...t);
              }),
                -1 !== a && this.subscribers[e].events.splice(a, 1);
            }
          }
        }
        off(e, t) {
          if ('function' === typeof t) {
            var a = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== a) {
              var n = this.subscribers[a].events.findIndex(
                e => t === e || t === e.event,
              );
              -1 !== n && this.subscribers[a].events.splice(n, 1);
            }
          }
        }
      }
      t['a'] = new n();
    },
  },
]);
