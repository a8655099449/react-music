(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    '1Jq7': function(e, t, n) {
      e.exports = {
        list: 'list___1Hq3l',
        'list-item': 'list-item___2L4fe',
        singer: 'singer___1Xw6G',
        'song-data': 'song-data___1t24v',
        'icon-box': 'icon-box___qM9pk',
      };
    },
    '6mnD': function(e, t, n) {
      e.exports = { 'base-image': 'base-image___3KPub' };
    },
    '8P1l': function(e, t, n) {
      'use strict';
      var a = n('o0o1'),
        c = n.n(a),
        i = n('HaE+'),
        s = n('ODXe'),
        r = n('q1tI'),
        o = n.n(r),
        l = n('aqos'),
        m = n.n(l),
        u = n('Vn/K'),
        d = n('Ng/0'),
        g = n('sOOk'),
        p = n('/MKj'),
        h = n('PioQ'),
        b = n('v5AT'),
        f = e => {
          var t = e.item,
            n = e.isLogin,
            a = e.type,
            l = void 0 === a ? -1 : a,
            p = e.id,
            h = void 0 === p ? -1 : p;
          h = parseInt(h);
          var f = Object(r['useState'])(t.liked),
            v = Object(s['a'])(f, 2),
            _ = v[0],
            E = v[1],
            y = Object(r['useState'])(t.likedCount),
            N = Object(s['a'])(y, 2),
            w = N[0],
            x = N[1],
            k = (function() {
              var e = Object(i['a'])(
                c.a.mark(function e() {
                  var a, i, s;
                  return c.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (n) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', Object(u['p'])());
                        case 2:
                          if (-1 != l && -1 != h) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return');
                        case 4:
                          return (
                            (a = _ ? 0 : 1),
                            (i = { type: l, id: h, cid: t.commentId, t: a }),
                            (e.next = 8),
                            Object(b['b'])(i)
                          );
                        case 8:
                          (s = e.sent),
                            200 === s.code &&
                              (_
                                ? (Object(u['r'])(
                                    '\u53d6\u6d88\u70b9\u8d5e\u6210\u529f',
                                  ),
                                  x(w - 1))
                                : (Object(u['r'])('\u70b9\u8d5e\u6210\u529f'),
                                  x(w + 1)),
                              E(!_));
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
            O = Object(u['h'])(new Date(t.time), 'yyyy\u5e74MM\u6708dd\u65e5');
          t.commentId;
          var I = null;
          return (
            t.beReplied &&
              t.beReplied.length > 0 &&
              (I = t.beReplied.map((e, t) =>
                o.a.createElement(
                  'div',
                  { className: ''.concat(m.a['reply']), key: t },
                  o.a.createElement(
                    'span',
                    { className: ''.concat(m.a['nick-name'], ' underline') },
                    e.user.nickname,
                  ),
                  ' ',
                  '\uff1a',
                  e.content,
                ),
              )),
            o.a.createElement(
              'div',
              { className: ''.concat(m.a['comment-item']) },
              o.a.createElement(
                'div',
                {
                  className: ''.concat(m.a['avatar']),
                  title: t.user.nickname,
                  onClick: () => Object(g['f'])(t.user.userId),
                },
                o.a.createElement(d['a'], {
                  src: t.user.avatarUrl + '?param=50y50',
                  alt: t.user.nickname,
                }),
              ),
              o.a.createElement(
                'div',
                { className: ''.concat(m.a['comment-content']) },
                o.a.createElement(
                  'div',
                  { className: ''.concat(m.a['top']) },
                  o.a.createElement(
                    'span',
                    {
                      className: 'underline',
                      onClick: () => Object(g['f'])(t.user.userId),
                    },
                    t.user.nickname,
                  ),
                  ' ',
                  ':',
                  t.content,
                ),
                I,
                o.a.createElement(
                  'div',
                  { className: ''.concat(m.a['bottom']) },
                  o.a.createElement(
                    'div',
                    { className: ''.concat(m.a['time']) },
                    O,
                  ),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(
                      'span',
                      { className: 'underline', onClick: k },
                      o.a.createElement('i', {
                        className: 'icon-dianzan iconfont',
                        style: {
                          color: _ ? 'var(--main-color)' : 'var(--link-color)',
                        },
                      }),
                      ' ',
                      '(',
                      w,
                      ')',
                    ),
                    o.a.createElement(
                      'span',
                      { className: ''.concat(m.a['center-line']) },
                      ' |',
                    ),
                    o.a.createElement(
                      'span',
                      {
                        className: 'underline',
                        onClick: () =>
                          Object(u['s'])('\u656c\u8bf7\u671f\u5f85!'),
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
      t['a'] = Object(p['b'])(h['b'], h['a'])(f);
    },
    '8cX2': function(e, t, n) {
      'use strict';
      var a = n('q1tI'),
        c = n.n(a);
      n('tAOl');
      t['a'] = e => {
        var t = e.title,
          n = void 0 === t ? '\u9ed8\u8ba4\u6807\u9898' : t;
        return c.a.createElement(
          'div',
          {
            style: {
              borderBottom: '1px solid #cccccc',
              paddingBottom: '7px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#000',
            },
          },
          n,
        );
      };
    },
    FYYq: function(e, t, n) {
      e.exports = {
        header: 'header___3DNpH',
        'commnet-inp': 'commnet-inp___2VBi2',
        avatar: 'avatar___3v9P1',
        'inp-box': 'inp-box___1I78H',
        mask: 'mask___3hVFB',
        'comment-btn': 'comment-btn___6l31G',
      };
    },
    FoL2: function(e, t, n) {
      e.exports = {
        'rec-playlist': 'rec-playlist___3P7YG',
        list: 'list___3G_LZ',
        'list-item': 'list-item___3iPBW',
        'img-box': 'img-box___Loar-',
        'desc-box': 'desc-box___1nfg6',
      };
    },
    HbN3: function(e, t, n) {
      e.exports = {
        content: 'content___3MixN',
        'left-content': 'left-content___2mGmv',
        'right-content': 'right-content___1PiSt',
      };
    },
    'Ng/0': function(e, t, n) {
      'use strict';
      var a = n('ODXe'),
        c = n('q1tI'),
        i = n.n(c),
        s = n('6mnD'),
        r = n.n(s);
      t['a'] = e => {
        var t = e.src,
          n = e.alt,
          s = void 0 === n ? '\u56fe\u7247\u63cf\u8ff0' : n,
          o = e.height,
          l = e.width,
          m = Object(c['useState'])(!1),
          u = Object(a['a'])(m, 2),
          d = u[0],
          g = u[1],
          p = '//photo.tuituisoft.com/picgo/20210114103900.png',
          h = { height: o, width: l, display: d ? 'block' : 'none' },
          b = { height: o, width: l, display: d ? 'none' : 'block' };
        function f() {
          g(!0);
        }
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement('img', {
            src: p,
            alt: '\u5360\u4f4d\u56fe\u7247',
            style: b,
            className: ''.concat(r.a['base-image']),
          }),
          i.a.createElement('img', {
            src: t,
            alt: s,
            style: h,
            className: ''.concat(r.a['base-image']),
            onLoad: f,
          }),
        );
      };
    },
    PioQ: function(e, t, n) {
      'use strict';
      function a(e) {
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
      n.d(t, 'b', function() {
        return a;
      }),
        n.d(t, 'a', function() {
          return c;
        });
    },
    'Vn/K': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return u;
      }),
        n.d(t, 'q', function() {
          return g;
        }),
        n.d(t, 'g', function() {
          return p;
        }),
        n.d(t, 'd', function() {
          return h;
        }),
        n.d(t, 'k', function() {
          return b;
        }),
        n.d(t, 'o', function() {
          return f;
        }),
        n.d(t, 'i', function() {
          return v;
        }),
        n.d(t, 'j', function() {
          return _;
        }),
        n.d(t, 'h', function() {
          return E;
        }),
        n.d(t, 'e', function() {
          return y;
        }),
        n.d(t, 'f', function() {
          return N;
        }),
        n.d(t, 'p', function() {
          return w;
        }),
        n.d(t, 'b', function() {
          return x;
        }),
        n.d(t, 'm', function() {
          return k;
        }),
        n.d(t, 'n', function() {
          return O;
        }),
        n.d(t, 'c', function() {
          return I;
        }),
        n.d(t, 'a', function() {
          return S;
        }),
        n.d(t, 'r', function() {
          return L;
        }),
        n.d(t, 's', function() {
          return j;
        });
      n('miYZ');
      var a = n('tsqr'),
        c = n('VTBJ'),
        i = (n('2qtc'), n('kLXV')),
        s = n('q1tI'),
        r = n.n(s),
        o = n('x5H0'),
        l = n('vu0G'),
        m = i['a'].confirm;
      function u(e) {
        var t = parseInt(e / 60);
        t = t < 10 ? '0' + t : t;
        var n = parseInt(e - 60 * t);
        return (n = n < 10 ? '0' + n : n), t + ':' + n;
      }
      var d = {
        title: '\u9ed8\u8ba4\u6807\u9898',
        content: '\u9ed8\u8ba4\u5185\u5bb9',
        okText: '\u786e\u5b9a',
        cancelText: '\u53d6\u6d88',
      };
      function g(e) {
        for (var t in d) e[t] || (e[t] = d[t]);
        return new Promise((t, n) => {
          m(
            Object(c['a'])(
              Object(c['a'])({}, e),
              {},
              {
                onOk() {
                  t();
                },
                onCancel() {
                  n();
                },
              },
            ),
          );
        });
      }
      function p() {
        (document.documentElement.style.overflow = 'hidden'),
          (document.body.style.position = 'fixed'),
          (document.body.style.top = '0px'),
          (document.body.style.width = '100%');
      }
      function h() {
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
      function f(e, t) {
        var n = Date.parse(new Date()) / 1e3,
          a = { data: t, time: n };
        window.localStorage.setItem(e, JSON.stringify(a));
      }
      function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = Date.parse(new Date()) / 1e3,
          a = JSON.parse(window.localStorage.getItem(e));
        return !!((a && t && n - t < a.time) || (a && 0 === t)) && a.data;
      }
      function _(e) {
        for (var t = e.split(/\n/), n = 0; n < t.length; n++) {
          var a = '',
            c = '',
            i = !1;
          t[n] &&
            ((a = t[n].split(']')[0].split('[')[1]),
            (a = a.slice(0, 5)),
            (c = t[n].split(']')[1])),
            (t[n] = { time: a, content: c, select: i });
        }
        return t;
      }
      var E = (e, t) => {
        if (!e) return 'is not time';
        if (('number' == typeof e && (e = new Date(e)), /(y+)/.test(t))) {
          var n = e.getFullYear() + '';
          t = t.replace(RegExp.$1, n.substr(4 - RegExp.$1.length));
        }
        var a = {
          'M+': e.getMonth() + 1,
          'd+': e.getDate(),
          'h+': e.getHours(),
          'm+': e.getMinutes(),
          's+': e.getSeconds(),
        };
        for (var c in a)
          if (new RegExp('('.concat(c, ')')).test(t)) {
            var i = a[c] + '';
            t = t.replace(
              RegExp.$1,
              1 == RegExp.$1.length ? i : ('00' + i).substr(i.length),
            );
          }
        return t;
      };
      function y(e) {
        if (isNaN(e)) return [];
        for (var t = [], n = 0; n < e; n++) t.push(n);
        return t;
      }
      var N = (e, t) => {
          var n = null;
          return function() {
            clearTimeout(n),
              (n = setTimeout(() => {
                e.apply(this, arguments);
              }, t));
          };
        },
        w = () => o['a'].emit(l['e']),
        x = e => o['a'].emit(l['b'], e),
        k = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'playSong';
          return o['a'].emit(l['a'], e, t);
        },
        O = e => {
          window.scrollTo({ behavior: 'smooth', top: e });
        },
        I = (e, t) => {
          var n = new RegExp(e, 'is');
          return t.replace(n, '<b>$&</b>');
        },
        S = e => {
          var t = e.type;
          return 1 == t
            ? r.a.createElement('i', { className: 'iconfont icon-nan' })
            : 2 == t
            ? r.a.createElement('i', { className: 'iconfont icon-nv' })
            : r.a.createElement('i', {
                className: 'iconfont icon-siglyphalien',
              });
        },
        L = e => {
          a['default'].success(e);
        },
        j = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '\u656c\u8bf7\u671f\u5f85\uff01';
          a['default'].warning(e);
        };
    },
    YaPe: function(e, t, n) {
      e.exports = {
        header: 'header___eTWb1',
        'commnet-inp': 'commnet-inp___8ORER',
        avatar: 'avatar___13-mc',
        'inp-box': 'inp-box___2TcCK',
        mask: 'mask___3L-L2',
        'comment-btn': 'comment-btn___3G3YS',
      };
    },
    aiZx: function(e, t, n) {
      'use strict';
      n.d(t, 'h', function() {
        return a;
      }),
        n.d(t, 'b', function() {
          return c;
        }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'e', function() {
          return s;
        }),
        n.d(t, 'd', function() {
          return r;
        }),
        n.d(t, 'c', function() {
          return o;
        }),
        n.d(t, 'f', function() {
          return l;
        }),
        n.d(t, 'g', function() {
          return m;
        });
      var a = 'USER_DATA',
        c = 'HOME_DATA',
        i = 'COOKIE',
        s = 'PLAY_SONG_NAME',
        r = 'NOW_PLAY_ID',
        o = 'NEW_DVDS',
        l = 'PROFILE_PALYLIST_ID',
        m = 'SEARCH_KEYWORDS';
    },
    aqos: function(e, t, n) {
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
    fbcc: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('VTBJ'),
        c = n('o0o1'),
        i = n.n(c),
        s = n('HaE+'),
        r = n('q1tI'),
        o = n.n(r),
        l = n('HbN3'),
        m = n.n(l),
        u = n('sOOk'),
        d = n('wJgg'),
        g = n.n(d),
        p = e => {
          var t,
            n,
            a = e.songData,
            c = e.commentCount,
            i = e.lrcMen,
            s = e.lrcArr,
            r = e.clickPlay,
            l = e.showMoreLrc,
            m = e.lrcLen,
            d = e.isMore;
          return a
            ? ((n =
                0 === s.lrcLen
                  ? null
                  : d
                  ? o.a.createElement(
                      'div',
                      { className: ''.concat(g.a['show-more']), onClick: l },
                      o.a.createElement(
                        'span',
                        { className: 'underline' },
                        '\u6536\u8d77',
                      ),
                      ' ',
                      o.a.createElement('i', {
                        className: 'icon-xia-down iconfont turn',
                      }),
                    )
                  : o.a.createElement(
                      'div',
                      { className: ''.concat(g.a['show-more']), onClick: l },
                      o.a.createElement(
                        'span',
                        { className: 'underline' },
                        '\u5c55\u5f00',
                      ),
                      ' ',
                      o.a.createElement('i', {
                        className: 'icon-xia-down iconfont',
                      }),
                    )),
              (t = i.nickname
                ? o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['gx-men'], ' ') },
                    '\u8d21\u732e\u6b4c\u8bcd:',
                    ' ',
                    o.a.createElement(
                      'span',
                      {
                        className: 'underline',
                        onClick: () => Object(u['f'])(i.userid),
                      },
                      i.nickname,
                    ),
                  )
                : null),
              o.a.createElement(
                'div',
                { className: ''.concat(g.a['detail-content']) },
                o.a.createElement(
                  'div',
                  { className: ''.concat(g.a['img-box']), title: a.name },
                  o.a.createElement('div', { className: ''.concat(g.a['bg']) }),
                  o.a.createElement('img', {
                    src: a.al.picUrl,
                    alt: a.name,
                    className: 'img-auto',
                  }),
                ),
                o.a.createElement(
                  'div',
                  { className: ''.concat(g.a['desc-box']) },
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['name']) },
                    o.a.createElement('div', {
                      className: ''.concat(g.a['tag']),
                    }),
                    o.a.createElement(
                      'div',
                      { className: ''.concat(g.a['name-text']) },
                      a.name,
                    ),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['singer']) },
                    '\u6b4c\u624b :',
                    ' ',
                    o.a.createElement(
                      'span',
                      {
                        className: 'underline',
                        onClick: () => Object(u['d'])(a.singer.id),
                      },
                      a.singer.name,
                    ),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['singer']) },
                    '\u6240\u5c5e\u4e13\u8f91 :',
                    ' ',
                    o.a.createElement(
                      'span',
                      {
                        className: 'underline',
                        onClick: () => Object(u['a'])(a.al.id),
                      },
                      a.al.name,
                    ),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['btn-box']) },
                    o.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(g.a['btn-item'], ' ')
                          .concat(g.a['play'], ' btn btn-blue '),
                        onClick: r,
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-ziyuan',
                      }),
                      ' \u64ad\u653e',
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(g.a['btn-item'], ' btn-gray btn'),
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-shoucang1',
                      }),
                      ' \u6536\u85cf',
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(g.a['btn-item'], ' btn-gray btn'),
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-zhuanfafasong-3',
                      }),
                      '\u5206\u4eab',
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(g.a['btn-item'], ' btn-gray btn'),
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-xiazai',
                      }),
                      ' \u4e0b\u8f7d',
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(g.a['btn-item'], ' btn-gray btn'),
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-pinglunzhuanhuan',
                      }),
                      ' \uff08',
                      c,
                      '\uff09',
                    ),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['geci']) },
                    o.a.createElement(
                      'ul',
                      {
                        className: ''.concat(
                          g.a['geci-list'],
                          ' public-scroll',
                        ),
                      },
                      s.map((e, t) => {
                        if (m > t)
                          return o.a.createElement(
                            'li',
                            { key: t },
                            ' ',
                            e.content,
                            ' ',
                          );
                      }),
                    ),
                    n,
                    t,
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(g.a['mini-btn']) },
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(g.a['play'], ' btn btn-blue '),
                        onClick: r,
                      },
                      o.a.createElement('i', {
                        className: 'iconfont icon-ziyuan',
                      }),
                      ' \u7acb\u5373\u64ad\u653e',
                    ),
                  ),
                ),
              ))
            : o.a.createElement('div', null, 'loading');
        },
        h = n('FoL2'),
        b = n.n(h),
        f = n('8cX2'),
        v = e => {
          var t = e.recPlayList,
            n = e.goPlayList;
          return o.a.createElement(
            'div',
            { className: ''.concat(b.a['rec-playlist']) },
            o.a.createElement(f['a'], {
              title: '\u5305\u542b\u8fd9\u9996\u6b4c\u7684\u6b4c\u5355',
            }),
            o.a.createElement(
              'div',
              { className: ''.concat(b.a['list']) },
              t.map((e, t) =>
                o.a.createElement(
                  'div',
                  { className: ''.concat(b.a['list-item']), key: e.id },
                  o.a.createElement(
                    'div',
                    { className: ''.concat(b.a['img-box']) },
                    o.a.createElement('img', {
                      src: e.coverImgUrl,
                      alt:
                        '\u90a3\u4e9b\u597d\u542c\u5230\u7206\u4e86\u7684\u6b4c',
                    }),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(b.a['desc-box']) },
                    o.a.createElement(
                      'p',
                      {
                        className: ''.concat(
                          b.a['name'],
                          ' underline text-row-1',
                        ),
                        onClick: () => {
                          n(e);
                        },
                      },
                      e.name,
                    ),
                    o.a.createElement(
                      'div',
                      { className: 'text-row-1' },
                      'by',
                      ' ',
                      o.a.createElement(
                        'span',
                        {
                          className: 'underline',
                          onClick: () => Object(u['f'])(e.userId),
                        },
                        e.creator.nickname,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        _ = n('1Jq7'),
        E = n.n(_),
        y = e => {
          var t = e.simiSongs,
            n = e.changeSongData;
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(f['a'], { title: '\u76f8\u4f3c\u6b4c\u66f2' }),
            o.a.createElement(
              'div',
              { className: ''.concat(E.a['list']) },
              t.map((e, t) =>
                o.a.createElement(
                  'div',
                  { className: ''.concat(E.a['list-item']), key: t },
                  o.a.createElement(
                    'div',
                    { className: ''.concat(E.a['song-data']) },
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(
                          E.a['song-name'],
                          ' text-row-1 underline',
                        ),
                        onClick: () => {
                          n(e, 'changeSong');
                        },
                      },
                      e.name,
                    ),
                    o.a.createElement(
                      'div',
                      {
                        className: ''.concat(
                          E.a['singer'],
                          ' text-row-1 underline',
                        ),
                      },
                      e.artists[0].name,
                    ),
                  ),
                  o.a.createElement(
                    'div',
                    { className: ''.concat(E.a['icon-box']) },
                    o.a.createElement('i', {
                      className: 'iconfont icon-icon_play click',
                      title: '\u64ad\u653e',
                      onClick: () => {
                        n(e, 'playSong');
                      },
                    }),
                    o.a.createElement('i', {
                      className: 'iconfont icon-jiahaocu click',
                      title: '\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868',
                      onClick: () => {
                        n(e, 'addPlayList');
                      },
                    }),
                  ),
                ),
              ),
            ),
          );
        },
        N = n('9kvl'),
        w = n('x5H0'),
        x = (n('YaPe'), n('8P1l')),
        k = n('uG9E'),
        O = e => {
          var t = e.hotComments,
            n = e.commentCount,
            a = e.newComments,
            c = e.id;
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(k['a'], { commentCount: n }),
            o.a.createElement(f['a'], { title: '\u7cbe\u5f69\u8bc4\u8bba' }),
            t.map((e, t) =>
              o.a.createElement(x['a'], { item: e, key: t, type: 0, id: c }),
            ),
            o.a.createElement('div', { style: { height: '10px' } }),
            o.a.createElement(f['a'], { title: '\u6700\u65b0\u8bc4\u8bba' }),
            a.map((e, t) =>
              o.a.createElement(x['a'], { item: e, key: t, type: 0, id: c }),
            ),
          );
        },
        I = n('/MKj'),
        S = n('PioQ'),
        L = n('Vn/K'),
        j = n('v5AT'),
        C = n('ty2S');
      class D extends o.a.Component {
        constructor(e) {
          super(e),
            (this.songId = 411214279),
            (this.limitData = { pageNo: 1, pageSize: 10, type: 0 }),
            (this.state = {
              songData: null,
              commentCount: 0,
              lrcArr: [],
              lrcMen: {},
              recPlayList: [],
              simiSongs: [],
              hotComments: [],
              lrcLen: 5,
              isMore: !1,
              newComments: [],
              seletPage: 1,
              pageSize: 0,
              isReq: !0,
            }),
            (this.handleScroll = () => {
              clearTimeout(this.scrollTimer),
                (this.scrollTimer = setTimeout(() => {
                  var e =
                      document.documentElement.scrollHeight ||
                      document.body.scrollHeight,
                    t =
                      window.innerHeight ||
                      document.documentElement.clientHeight ||
                      document.body.clientHeight,
                    n =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop;
                  t + n + 600 >= e &&
                    !this.state.isReq &&
                    (this.limitData.pageNo++, this._getMusicNewComment());
                }, 100));
            }),
            (this.showMoreLrc = () => {
              var e = !this.state.isMore,
                t = e ? this.state.lrcArr.length : 5;
              this.setState({ lrcLen: t, isMore: e });
            }),
            (this.unlisten = N['a'].listen((e, t) => {
              '/songdetail' === e.pathname &&
                e.query.songId &&
                ((this.songId = e.query.songId), this.init());
            })),
            (this.changeSongData = (e, t) => {
              switch (t) {
                case 'changeSong':
                  N['a'].push({
                    pathname: '/songdetail',
                    query: { songId: e.id },
                  });
                  break;
                case 'playSong':
                case 'addPlayList':
                  var n = {
                    singerName: e.artists[0].name,
                    songId: e.id,
                    songName: e.name,
                    dt: e.duration,
                  };
                  Object(L['m'])(n, t);
                  break;
              }
            }),
            (this.goPlayList = e => {
              N['a'].push({ pathname: '/playlist', query: { id: e.id } });
            }),
            (this.clickPlay = () => {
              var e = this.songs.name,
                t = this.songs.id,
                n = this.songs.ar[0].name,
                a = this.songs.dt;
              Object(L['m'])({ singerName: n, songId: t, songName: e, dt: a });
            }),
            (this.showLogin = () => {
              w['a'].emit('showLogin');
            }),
            (this.changePage = e => {
              e <= 0 ||
                e > this.state.pageSize ||
                (e != this.state.seletPage &&
                  ((this.limitData.pageNo = e),
                  this._getMusicNewComment(),
                  this.setState({ seletPage: e })));
            });
          var t = e.location.query;
          (this.songId = t.songId || 411214279), this.init();
        }
        init() {
          this._getMusicDatail(),
            this._getMusicHotComment(),
            this._getMusicLyric(),
            this._getPlayListForSongID(),
            this._getSimiSong(),
            this._getMusicNewComment(),
            Object(L['n'])(0);
        }
        _getMusicDatail() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, a, c, s, r;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(C['a'])({ ids: e.songId });
                    case 2:
                      (n = t.sent),
                        200 === n.code &&
                          ((a = n.songs[0]),
                          (e.songs = a),
                          (c = a.name),
                          (s = a.al),
                          (r = a.ar[0]),
                          (document.title = ''.concat(c, ' - \u5355\u66f2')),
                          e.setState({
                            songData: { singer: r, name: c, al: s },
                          }));
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
        }
        componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        }
        _getMusicHotComment() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, a, c;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.state.isReq = !0),
                        (t.next = 3),
                        Object(j['a'])({
                          id: e.songId,
                          sortType: 2,
                          pageNo: 1,
                          pageSize: 10,
                          type: 0,
                        })
                      );
                    case 3:
                      (n = t.sent),
                        200 === n.code &&
                          ((e.state.isReq = !1),
                          (a = n.data.comments),
                          (c = n.data.totalCount),
                          e.setState({
                            commentCount: c,
                            hotComments: a,
                            isReq: !1,
                          }));
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        _getMusicNewComment() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, c, s, r;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = null),
                        (c = e.state.newComments),
                        e.limitData.pageNo > 1 && (n = c[c.length - 1].time),
                        (t.next = 5),
                        Object(j['a'])(
                          Object(a['a'])(
                            { id: e.songId, sortType: 3, cursor: n },
                            e.limitData,
                          ),
                        )
                      );
                    case 5:
                      (s = t.sent),
                        200 === s.code &&
                          (c.push(...s.data.comments),
                          (r = Math.ceil(s.data.totalCount / 30)),
                          e.setState({ newComments: c, pageSize: r }));
                    case 7:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        _getMusicLyric() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, a, c;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(C['b'])({ id: e.songId });
                    case 2:
                      (n = t.sent),
                        200 === n.code &&
                          !n.nolyric &&
                          n.lrc &&
                          ((a = Object(L['j'])(n.lrc.lyric)),
                          (c = {}),
                          n.lyricUser && (c = n.lyricUser),
                          e.setState({ lrcArr: a, lrcMen: c }));
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        _getPlayListForSongID() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, a;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(C['e'])({ id: e.songId });
                    case 2:
                      (n = t.sent),
                        (a = n.playlists),
                        e.setState({ recPlayList: a });
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        _getSimiSong() {
          var e = this;
          return Object(s['a'])(
            i.a.mark(function t() {
              var n, a;
              return i.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(C['f'])({ id: e.songId });
                    case 2:
                      (n = t.sent), (a = n.songs), e.setState({ simiSongs: a });
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        render() {
          var e = this.props,
            t = e.userInfo,
            n = e.isLogin;
          return o.a.createElement(
            'div',
            { className: 'page-content content-box '.concat(m.a['content']) },
            o.a.createElement(
              'div',
              { className: ''.concat(m.a['left-content']) },
              o.a.createElement(p, {
                songData: this.state.songData,
                commentCount: this.state.commentCount,
                lrcMen: this.state.lrcMen,
                lrcArr: this.state.lrcArr,
                lrcLen: this.state.lrcLen,
                isMore: this.state.isMore,
                clickPlay: this.clickPlay,
                showMoreLrc: this.showMoreLrc,
              }),
              o.a.createElement(
                'div',
                { className: 'ismini' },
                o.a.createElement(v, {
                  recPlayList: this.state.recPlayList,
                  goPlayList: this.goPlayList,
                }),
                o.a.createElement(y, {
                  simiSongs: this.state.simiSongs,
                  changeSongData: this.changeSongData,
                }),
              ),
              o.a.createElement(O, {
                hotComments: this.state.hotComments,
                commentCount: this.state.commentCount,
                newComments: this.state.newComments,
                isLogin: n,
                userInfo: t,
                showLogin: this.showLogin,
                id: this.songId,
              }),
            ),
            o.a.createElement(
              'div',
              { className: ''.concat(m.a['right-content'], ' isweb') },
              o.a.createElement(v, {
                recPlayList: this.state.recPlayList,
                goPlayList: this.goPlayList,
              }),
              o.a.createElement(y, {
                simiSongs: this.state.simiSongs,
                changeSongData: this.changeSongData,
              }),
            ),
          );
        }
      }
      t['default'] = Object(I['b'])(S['b'], S['a'])(D);
    },
    o1iF: function(e, t, n) {
      'use strict';
      var a = n('vDqi'),
        c = n.n(a),
        i = n('aiZx'),
        s = 'http://47.107.81.99:3000';
      function r(e) {
        if (e.iscookie && localStorage.getItem(i['a'])) {
          var t = 'cookie='.concat(localStorage.getItem(i['a'])),
            n = /=/.test(e.url) ? '&' : '?';
          e.url += ''.concat(n).concat(t);
        }
        var a = c.a.create({ baseURL: s, timeout: 1e4, withCredentials: !1 });
        return (
          a.interceptors.response.use(
            e => e.data,
            e => e,
          ),
          a(e)
        );
      }
      t['a'] = r;
    },
    sOOk: function(e, t, n) {
      'use strict';
      n.d(t, 'e', function() {
        return c;
      }),
        n.d(t, 'f', function() {
          return i;
        }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'd', function() {
          return r;
        }),
        n.d(t, 'b', function() {
          return o;
        }),
        n.d(t, 'c', function() {
          return l;
        });
      var a = n('9kvl'),
        c = e => {
          a['a'].push({ pathname: '/songDetail', query: { songId: e } });
        },
        i = e => {
          a['a'].push({ pathname: '/userDetail', query: { id: e } });
        },
        s = e => {
          a['a'].push({ pathname: '/album', query: { id: e } });
        },
        r = e => {
          a['a'].push({ pathname: '/singer', query: { id: e } });
        },
        o = e => {
          a['a'].push({ pathname: '/mv', query: { id: e } });
        },
        l = e => {
          a['a'].push({ pathname: '/playlist', query: { id: e } });
        };
    },
    tAOl: function(e, t, n) {},
    ty2S: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return c;
      }),
        n.d(t, 'c', function() {
          return i;
        }),
        n.d(t, 'b', function() {
          return s;
        }),
        n.d(t, 'g', function() {
          return r;
        }),
        n.d(t, 'h', function() {
          return o;
        }),
        n.d(t, 'd', function() {
          return l;
        }),
        n.d(t, 'e', function() {
          return m;
        }),
        n.d(t, 'f', function() {
          return u;
        });
      var a = n('o1iF');
      function c(e) {
        return Object(a['a'])({ url: '/song/detail', params: e });
      }
      function i(e) {
        return Object(a['a'])({ url: '/song/url', params: e, iscookie: !0 });
      }
      function s(e) {
        return Object(a['a'])({ url: '/lyric', params: e });
      }
      function r(e) {
        return Object(a['a'])({
          url: '/playlist/detail',
          params: e,
          iscookie: !0,
        });
      }
      function o(e) {
        return Object(a['a'])({
          url: '/related/playlist',
          params: e,
          iscookie: !0,
        });
      }
      function l(e) {
        return Object(a['a'])({
          url: '/album/newest',
          params: e,
          iscookie: !0,
        });
      }
      function m(e) {
        return Object(a['a'])({ url: '/simi/playlist', params: e });
      }
      function u(e) {
        return Object(a['a'])({ url: '/simi/song', params: e });
      }
    },
    uG9E: function(e, t, n) {
      'use strict';
      var a = n('q1tI'),
        c = n.n(a),
        i = n('/MKj'),
        s = n('PioQ'),
        r = n('FYYq'),
        o = n.n(r),
        l = (n('x5H0'), n('Vn/K'));
      class m extends c.a.Component {
        render() {
          var e = this.props,
            t = e.userInfo,
            n = e.isLogin,
            a = e.commentCount,
            i = void 0 === a ? 0 : a,
            s =
              'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50',
            r = { display: n ? 'none' : 'block' },
            m = { display: n ? 'block' : 'none' },
            u = n ? t.avatarUrl + '?param=50y50' : s;
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
                i,
                ' \u6761\u8bc4\u8bba',
              ),
            ),
            c.a.createElement(
              'div',
              { className: ''.concat(o.a['commnet-inp']) },
              c.a.createElement(
                'div',
                { className: ''.concat(o.a['avatar']) },
                c.a.createElement('img', { src: u, alt: '\u5934\u50cf' }),
              ),
              c.a.createElement(
                'div',
                { className: ''.concat(o.a['inp-box']) },
                c.a.createElement(
                  'div',
                  {
                    className: ''.concat(o.a['mask'], ' '),
                    style: r,
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
                    style: m,
                  },
                  '\u8bc4\u8bba',
                ),
              ),
            ),
          );
        }
      }
      t['a'] = Object(i['b'])(s['b'], s['a'])(m);
    },
    v5AT: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return c;
      }),
        n.d(t, 'a', function() {
          return i;
        });
      var a = n('o1iF'),
        c = e =>
          Object(a['a'])({ url: '/comment/like', params: e, iscookie: !0 }),
        i = e =>
          Object(a['a'])({ url: '/comment/new', params: e, iscookie: !0 });
    },
    vu0G: function(e, t, n) {
      'use strict';
      n.d(t, 'e', function() {
        return a;
      }),
        n.d(t, 'd', function() {
          return c;
        }),
        n.d(t, 'c', function() {
          return i;
        }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return r;
        });
      var a = 'SHOW_LOGIN',
        c = 'SHOW_LOADING',
        i = 'HIDE_LOADING',
        s = 'addNewSong',
        r = 'addPlayList';
    },
    wJgg: function(e, t, n) {
      e.exports = {
        'detail-content': 'detail-content___3p0sk',
        'img-box': 'img-box___2ChSA',
        bg: 'bg___2IrgT',
        'desc-box': 'desc-box___24Zuu',
        name: 'name___1N3Wx',
        tag: 'tag___2VBKL',
        'name-text': 'name-text___1kdJZ',
        singer: 'singer___3DmmU',
        'btn-box': 'btn-box___WlyyT',
        'btn-item': 'btn-item___2eMV-',
        'geci-list': 'geci-list___izl5V',
        'gx-men': 'gx-men___NvDZo',
        'show-more': 'show-more___qjEI2',
        'mini-btn': 'mini-btn___2Ur69',
        geci: 'geci___3oZlx',
        play: 'play___lTGpj',
      };
    },
    x5H0: function(e, t, n) {
      'use strict';
      class a {
        constructor() {
          this.subscribers = [];
        }
        on(e, t) {
          if ('function' === typeof t) {
            var n = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== n) {
              var a = this.subscribers[n].events.findIndex(e => t === e);
              -1 === a && this.subscribers[n].events.push(t);
            } else {
              var c = { funName: e, events: [t] };
              this.subscribers.push(c);
            }
          }
        }
        once(e, t) {
          if ('function' === typeof t) {
            var n = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== n)
              this.subscribers[n].events.push({ event: t, isonce: !0 });
            else {
              var a = { funName: e, events: [{ event: t, isonce: !0 }] };
              this.subscribers.push(a);
            }
          }
        }
        emit() {
          if (0 !== arguments.length) {
            var e = this.subscribers.findIndex(e => e.funName === arguments[0]);
            if (-1 !== e && 0 !== this.subscribers[e].events.length) {
              var t = [...arguments];
              t.splice(0, 1);
              var n = -1;
              this.subscribers[e].events.forEach((e, a) => {
                e.isonce ? ((n = a), e.event(...t)) : e(...t);
              }),
                -1 !== n && this.subscribers[e].events.splice(n, 1);
            }
          }
        }
        off(e, t) {
          if ('function' === typeof t) {
            var n = this.subscribers.findIndex(t => t.funName === e);
            if (-1 !== n) {
              var a = this.subscribers[n].events.findIndex(
                e => t === e || t === e.event,
              );
              -1 !== a && this.subscribers[n].events.splice(a, 1);
            }
          }
        }
      }
      t['a'] = new a();
    },
  },
]);
