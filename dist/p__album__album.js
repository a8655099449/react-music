(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
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
    '6mnD': function(e, t, a) {
      e.exports = { 'base-image': 'base-image___3KPub' };
    },
    '8P1l': function(e, t, a) {
      'use strict';
      var n = a('o0o1'),
        c = a.n(n),
        r = a('HaE+'),
        i = a('ODXe'),
        s = a('q1tI'),
        o = a.n(s),
        l = a('aqos'),
        u = a.n(l),
        m = a('Vn/K'),
        d = a('Ng/0'),
        p = a('sOOk'),
        b = a('/MKj'),
        f = a('PioQ'),
        v = a('v5AT'),
        _ = e => {
          var t = e.item,
            a = e.isLogin,
            n = e.type,
            l = void 0 === n ? -1 : n,
            b = e.id,
            f = void 0 === b ? -1 : b;
          f = parseInt(f);
          var _ = Object(s['useState'])(t.liked),
            h = Object(i['a'])(_, 2),
            E = h[0],
            g = h[1],
            y = Object(s['useState'])(t.likedCount),
            N = Object(i['a'])(y, 2),
            O = N[0],
            k = N[1],
            w = (function() {
              var e = Object(r['a'])(
                c.a.mark(function e() {
                  var n, r, i;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (a) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', Object(m['p'])());
                        case 2:
                          if (-1 != l && -1 != f) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return');
                        case 4:
                          return (
                            (n = E ? 0 : 1),
                            (r = { type: l, id: f, cid: t.commentId, t: n }),
                            (e.next = 8),
                            Object(v['b'])(r)
                          );
                        case 8:
                          (i = e.sent),
                            200 === i.code &&
                              (E
                                ? (Object(m['r'])(
                                    '\u53d6\u6d88\u70b9\u8d5e\u6210\u529f',
                                  ),
                                  k(O - 1))
                                : (Object(m['r'])('\u70b9\u8d5e\u6210\u529f'),
                                  k(O + 1)),
                              g(!E));
                        case 10:
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
            x = Object(m['h'])(new Date(t.time), 'yyyy\u5e74MM\u6708dd\u65e5');
          t.commentId;
          var j = null;
          return (
            t.beReplied &&
              t.beReplied.length > 0 &&
              (j = t.beReplied.map((e, t) =>
                o.a.createElement(
                  'div',
                  { className: ''.concat(u.a['reply']), key: t },
                  o.a.createElement(
                    'span',
                    { className: ''.concat(u.a['nick-name'], ' underline') },
                    e.user.nickname,
                  ),
                  ' ',
                  '\uff1a',
                  e.content,
                ),
              )),
            o.a.createElement(
              'div',
              { className: ''.concat(u.a['comment-item']) },
              o.a.createElement(
                'div',
                {
                  className: ''.concat(u.a['avatar']),
                  title: t.user.nickname,
                  onClick: () => Object(p['f'])(t.user.userId),
                },
                o.a.createElement(d['a'], {
                  src: t.user.avatarUrl + '?param=50y50',
                  alt: t.user.nickname,
                }),
              ),
              o.a.createElement(
                'div',
                { className: ''.concat(u.a['comment-content']) },
                o.a.createElement(
                  'div',
                  { className: ''.concat(u.a['top']) },
                  o.a.createElement(
                    'span',
                    {
                      className: 'underline',
                      onClick: () => Object(p['f'])(t.user.userId),
                    },
                    t.user.nickname,
                  ),
                  ' ',
                  ':',
                  t.content,
                ),
                j,
                o.a.createElement(
                  'div',
                  { className: ''.concat(u.a['bottom']) },
                  o.a.createElement(
                    'div',
                    { className: ''.concat(u.a['time']) },
                    x,
                  ),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(
                      'span',
                      { className: 'underline', onClick: w },
                      o.a.createElement('i', {
                        className: 'icon-dianzan iconfont',
                        style: {
                          color: E ? 'var(--main-color)' : 'var(--link-color)',
                        },
                      }),
                      ' ',
                      '(',
                      O,
                      ')',
                    ),
                    o.a.createElement(
                      'span',
                      { className: ''.concat(u.a['center-line']) },
                      ' |',
                    ),
                    o.a.createElement(
                      'span',
                      {
                        className: 'underline',
                        onClick: () =>
                          Object(m['s'])('\u656c\u8bf7\u671f\u5f85!'),
                      },
                      '\u56de\u590d',
                    ),
                    ' ',
                  ),
                ),
              ),
            )
          );
        };
      t['a'] = Object(b['b'])(f['b'], f['a'])(_);
    },
    EeXm: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('VTBJ'),
        c = a('o0o1'),
        r = a.n(c),
        i = a('HaE+'),
        s = a('ODXe'),
        o = a('q1tI'),
        l = a.n(o),
        u = a('/MKj'),
        m = a('PioQ'),
        d = a('Kf0N'),
        p = a.n(d),
        b = a('0bdg'),
        f = a('Ng/0'),
        v = a('Ctmj'),
        _ = a('Vn/K'),
        h = a('sOOk'),
        E = l.a.createElement(
          'div',
          { style: { height: '400px' } },
          l.a.createElement(v['a'], null),
        ),
        g = e => {
          var t = Object(o['useContext'])(b['a']),
            a = (t.id, t.albumInfo),
            n = t.songs;
          if (!a) return E;
          var c = Object(_['h'])(a.publishTime, 'yyyy-MM-dd'),
            r = () => {
              var e = n.map(e => ({
                singerName: e.ar[0].name,
                songId: e.id,
                songName: e.name,
                dt: e.dt,
              }));
              Object(_['b'])(e);
            };
          return l.a.createElement(
            'div',
            { className: ''.concat(p.a['album-info']) },
            l.a.createElement(
              'div',
              { className: ''.concat(p.a['pic']) },
              l.a.createElement(f['a'], {
                src: ''.concat(a.picUrl, '?param=177y177'),
              }),
            ),
            l.a.createElement(
              'div',
              { className: ''.concat(p.a['desc']) },
              l.a.createElement(
                'header',
                null,
                l.a.createElement('div', { className: ''.concat(p.a['tag']) }),
                l.a.createElement(
                  'div',
                  { className: ''.concat(p.a['name'], ' text-row-1') },
                  a.name,
                ),
              ),
              l.a.createElement(
                'ul',
                { className: ''.concat(p.a['desclist']) },
                l.a.createElement(
                  'li',
                  null,
                  '\u6b4c\u624b :',
                  ' ',
                  l.a.createElement(
                    'span',
                    {
                      className: 'underline',
                      onClick: () => Object(h['d'])(a.artist.id),
                    },
                    a.artist.name,
                  ),
                ),
                l.a.createElement('li', null, '\u53d1\u884c\u65f6\u95f4 : ', c),
                l.a.createElement(
                  'li',
                  null,
                  '\u53d1\u884c\u516c\u53f8 : ',
                  a.company || '\u6682\u65e0',
                ),
              ),
              l.a.createElement(
                'div',
                { className: ''.concat(p.a['btn-wrap']) },
                l.a.createElement(
                  'div',
                  {
                    className: ''.concat(p.a['play'], ' btn btn-blue'),
                    onClick: r,
                  },
                  l.a.createElement('i', { className: 'iconfont icon-ziyuan' }),
                  ' \u64ad\u653e',
                ),
                l.a.createElement(
                  'div',
                  { className: ''.concat(p.a['play'], ' btn btn-gray') },
                  l.a.createElement('i', {
                    className: 'iconfont icon-shoucang1',
                  }),
                  ' \u6536\u85cf',
                ),
                l.a.createElement(
                  'div',
                  { className: ''.concat(p.a['play'], ' btn btn-gray') },
                  l.a.createElement('i', { className: 'iconfont icon-xiazai' }),
                  '\u4e0b\u8f7d',
                ),
              ),
            ),
            l.a.createElement(
              'div',
              { className: ''.concat(p.a['desc-text']) },
              l.a.createElement('div', null, '\u4e13\u8f91\u4ecb\u7ecd'),
              l.a.createElement('p', null, a.description),
            ),
          );
        },
        y = g,
        N = a('imZp'),
        O = a('uG9E'),
        k = a('o1iF'),
        w = e => Object(k['a'])({ url: '/album', params: e }),
        x = a('v5AT'),
        j = a('8P1l'),
        I = e => {
          var t = e.location.query,
            a = 488910132;
          t.id && !isNaN(t.id) && (a = parseInt(t.id));
          var c = Object(o['useState'])(null),
            u = Object(s['a'])(c, 2),
            m = u[0],
            d = u[1],
            f = Object(o['useState'])([]),
            v = Object(s['a'])(f, 2),
            h = v[0],
            E = v[1],
            g = Object(o['useState'])([]),
            k = Object(s['a'])(g, 2),
            I = k[0],
            D = k[1],
            S = { sortType: 2, pageSize: 30, pageNo: 1, type: 3 },
            q = (function() {
              var e = Object(i['a'])(
                r.a.mark(function e() {
                  var t;
                  return r.a.wrap(function(e) {
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
                          d(t.album),
                            E(t.songs),
                            (document.title = ''.concat(
                              t.album.name,
                              ' - \u4e13\u8f91',
                            ));
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
            C = (function() {
              var e = Object(i['a'])(
                r.a.mark(function e() {
                  var t;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Object(x['a'])(
                              Object(n['a'])(
                                Object(n['a'])({}, S),
                                {},
                                { id: a },
                              ),
                            )
                          );
                        case 2:
                          if (((t = e.sent), 200 === t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          D(t.data.comments);
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
          Object(o['useEffect'])(() => {
            q(), C(), Object(_['n'])(0);
          }, []);
          var L = { id: a, albumInfo: m, songs: h };
          return l.a.createElement(
            'div',
            {
              className: ''.concat(
                p.a['album-page'],
                ' content-box page-content',
              ),
            },
            l.a.createElement(
              b['a'].Provider,
              { value: L },
              l.a.createElement(y, null),
              l.a.createElement(N['a'], { tracks: h }),
              l.a.createElement(O['a'], null),
              I.map((e, t) =>
                l.a.createElement(j['a'], { item: e, key: t, id: a, type: 3 }),
              ),
            ),
          );
        };
      t['default'] = Object(u['b'])(m['b'], m['a'])(I);
    },
    FYYq: function(e, t, a) {
      e.exports = {
        header: 'header___3DNpH',
        'commnet-inp': 'commnet-inp___2VBi2',
        avatar: 'avatar___3v9P1',
        'inp-box': 'inp-box___1I78H',
        mask: 'mask___3hVFB',
        'comment-btn': 'comment-btn___6l31G',
      };
    },
    Kf0N: function(e, t, a) {
      e.exports = {
        'album-info': 'album-info___2DM7D',
        pic: 'pic___1bQXl',
        desc: 'desc___2lVlx',
        tag: 'tag___1b4dV',
        name: 'name___1qX0d',
        desclist: 'desclist___1poIw',
        'btn-wrap': 'btn-wrap___2y6K-',
        'desc-text': 'desc-text___2GOR6',
        'album-page': 'album-page___2zdEO',
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
          l = e.width,
          u = Object(c['useState'])(!1),
          m = Object(n['a'])(u, 2),
          d = m[0],
          p = m[1],
          b = '//photo.tuituisoft.com/picgo/20210114103900.png',
          f = { height: o, width: l, display: d ? 'block' : 'none' },
          v = { height: o, width: l, display: d ? 'none' : 'block' };
        function _() {
          p(!0);
        }
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement('img', {
            src: b,
            alt: '\u5360\u4f4d\u56fe\u7247',
            style: v,
            className: ''.concat(s.a['base-image']),
          }),
          r.a.createElement('img', {
            src: t,
            alt: i,
            style: f,
            className: ''.concat(s.a['base-image']),
            onLoad: _,
          }),
        );
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
    'Vn/K': function(e, t, a) {
      'use strict';
      a.d(t, 'l', function() {
        return m;
      }),
        a.d(t, 'q', function() {
          return p;
        }),
        a.d(t, 'g', function() {
          return b;
        }),
        a.d(t, 'd', function() {
          return f;
        }),
        a.d(t, 'k', function() {
          return v;
        }),
        a.d(t, 'o', function() {
          return _;
        }),
        a.d(t, 'i', function() {
          return h;
        }),
        a.d(t, 'j', function() {
          return E;
        }),
        a.d(t, 'h', function() {
          return g;
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
          return k;
        }),
        a.d(t, 'm', function() {
          return w;
        }),
        a.d(t, 'n', function() {
          return x;
        }),
        a.d(t, 'c', function() {
          return j;
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
        l = a('vu0G'),
        u = r['a'].confirm;
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
          u(
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
      function b() {
        (document.documentElement.style.overflow = 'hidden'),
          (document.body.style.position = 'fixed'),
          (document.body.style.top = '0px'),
          (document.body.style.width = '100%');
      }
      function f() {
        (document.documentElement.style.overflowY = 'scroll'),
          (document.body.style.position = 'static');
      }
      function v(e) {
        return (
          (e = parseInt(e)),
          e <= 1e4
            ? e
            : e > 1e4 && e < 99999999
            ? parseInt(e / 1e4) + ' \u4e07'
            : parseInt(e / 1e8) + ' \u4ebf'
        );
      }
      function _(e, t) {
        var a = Date.parse(new Date()) / 1e3,
          n = { data: t, time: a };
        window.localStorage.setItem(e, JSON.stringify(n));
      }
      function h(e) {
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
      var g = (e, t) => {
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
        O = () => o['a'].emit(l['e']),
        k = e => o['a'].emit(l['b'], e),
        w = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'playSong';
          return o['a'].emit(l['a'], e, t);
        },
        x = e => {
          window.scrollTo({ behavior: 'smooth', top: e });
        },
        j = (e, t) => {
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
          return l;
        }),
        a.d(t, 'g', function() {
          return u;
        });
      var n = 'USER_DATA',
        c = 'HOME_DATA',
        r = 'COOKIE',
        i = 'PLAY_SONG_NAME',
        s = 'NOW_PLAY_ID',
        o = 'NEW_DVDS',
        l = 'PROFILE_PALYLIST_ID',
        u = 'SEARCH_KEYWORDS';
    },
    aqos: function(e, t, a) {
      e.exports = {
        'comment-item': 'comment-item___1wXaB',
        avatar: 'avatar___2D6qn',
        'comment-content': 'comment-content___1IbqR',
        top: 'top___7vBbc',
        bottom: 'bottom___1yEJ1',
        time: 'time___1IWhU',
        'center-line': 'center-line___30ESF',
        reply: 'reply___2IoXz',
        'nick-name': 'nick-name___u5Xig',
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
        l = [
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
          u = e.showSinger,
          m = void 0 === u || u,
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
              l.map((e, t) =>
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
          return l;
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
        l = e => {
          n['a'].push({ pathname: '/playlist', query: { id: e } });
        };
    },
    uG9E: function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('/MKj'),
        i = a('PioQ'),
        s = a('FYYq'),
        o = a.n(s),
        l = (a('x5H0'), a('Vn/K'));
      class u extends c.a.Component {
        render() {
          var e = this.props,
            t = e.userInfo,
            a = e.isLogin,
            n = e.commentCount,
            r = void 0 === n ? 0 : n,
            i =
              'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50',
            s = { display: a ? 'none' : 'block' },
            u = { display: a ? 'block' : 'none' },
            m = a ? t.avatarUrl + '?param=50y50' : i;
          return c.a.createElement(
            'div',
            null,
            c.a.createElement(
              'header',
              { className: ''.concat(o.a['header']) },
              '\u8bc4\u8bba ',
              c.a.createElement(
                'span',
                null,
                '\u5171 ',
                r,
                ' \u6761\u8bc4\u8bba',
              ),
            ),
            c.a.createElement(
              'div',
              { className: ''.concat(o.a['commnet-inp']) },
              c.a.createElement(
                'div',
                { className: ''.concat(o.a['avatar']) },
                c.a.createElement('img', { src: m, alt: '\u5934\u50cf' }),
              ),
              c.a.createElement(
                'div',
                { className: ''.concat(o.a['inp-box']) },
                c.a.createElement(
                  'div',
                  {
                    className: ''.concat(o.a['mask'], ' '),
                    style: s,
                    onClick: l['p'],
                  },
                  '\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u53d1\u8868\u8bc4\u8bba',
                ),
                c.a.createElement('textarea', {
                  className: 'public-scroll',
                  placeholder: '\u8bc4\u8bba',
                }),
                c.a.createElement(
                  'button',
                  {
                    className: ''.concat(o.a['comment-btn'], ' btn btn-blue'),
                    style: u,
                  },
                  '\u8bc4\u8bba',
                ),
              ),
            ),
          );
        }
      }
      t['a'] = Object(r['b'])(i['b'], i['a'])(u);
    },
    v5AT: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return c;
      }),
        a.d(t, 'a', function() {
          return r;
        });
      var n = a('o1iF'),
        c = e =>
          Object(n['a'])({ url: '/comment/like', params: e, iscookie: !0 }),
        r = e =>
          Object(n['a'])({ url: '/comment/new', params: e, iscookie: !0 });
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
