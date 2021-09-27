(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '0vtl': function(e, t, n) {
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
    '6mnD': function(e, t, n) {
      e.exports = { 'base-image': 'base-image___3KPub' };
    },
    'Ng/0': function(e, t, n) {
      'use strict';
      var a = n('ODXe'),
        r = n('q1tI'),
        c = n.n(r),
        i = n('6mnD'),
        s = n.n(i);
      t['a'] = e => {
        var t = e.src,
          n = e.alt,
          i = void 0 === n ? '\u56fe\u7247\u63cf\u8ff0' : n,
          o = e.height,
          u = e.width,
          l = Object(r['useState'])(!1),
          m = Object(a['a'])(l, 2),
          d = m[0],
          f = m[1],
          p = '//photo.tuituisoft.com/picgo/20210114103900.png',
          v = { height: o, width: u, display: d ? 'block' : 'none' },
          b = { height: o, width: u, display: d ? 'none' : 'block' };
        function _() {
          f(!0);
        }
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement('img', {
            src: p,
            alt: '\u5360\u4f4d\u56fe\u7247',
            style: b,
            className: ''.concat(s.a['base-image']),
          }),
          c.a.createElement('img', {
            src: t,
            alt: i,
            style: v,
            className: ''.concat(s.a['base-image']),
            onLoad: _,
          }),
        );
      };
    },
    PioQ: function(e, t, n) {
      'use strict';
      function a(e) {
        return { userInfo: e.userData, isLogin: e.isLogin, isH5: e.isH5 };
      }
      function r(e) {
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
          return r;
        });
    },
    S8wa: function(e, t, n) {
      'use strict';
      var a = n('q1tI'),
        r = n.n(a),
        c = n('W/zT'),
        i = n.n(c),
        s = n('Vn/K'),
        o = n('Ng/0'),
        u = n('sOOk'),
        l = e => {
          var t = e.map(e => ({
            songName: e.name,
            singerName: e.ar[0].name,
            songId: e.id,
            dt: e.dt,
          }));
          Object(s['b'])(t);
        };
      t['a'] = e => {
        var t = e.data;
        if (!t) return r.a.createElement('div', null, '\u52a0\u8f7d\u4e2d....');
        var n = t.description,
          a = t.subscribedCount,
          c = t.commentCount,
          f = t.name,
          p = t.shareCount,
          v = t.creator,
          b = t.tags,
          _ = void 0 === b ? [] : b,
          g = t.createTime;
        return v
          ? ((g = Object(s['h'])(g, 'yyyy-MM-dd')),
            (n = n ? n.split(/\n/) : []),
            (a = Object(s['k'])(a)),
            (p = Object(s['k'])(p)),
            (c = Object(s['k'])(c)),
            r.a.createElement(
              'div',
              { className: ''.concat(i.a['detali']) },
              r.a.createElement(
                'div',
                { className: ''.concat(i.a['img-box']) },
                r.a.createElement(o['a'], {
                  src: t.coverImgUrl + '?param=200y200',
                }),
              ),
              r.a.createElement(
                'div',
                { className: ''.concat(i.a['detali-text']) },
                r.a.createElement(
                  'div',
                  { className: ''.concat(i.a['head']) },
                  r.a.createElement('div', {
                    className: ''.concat(i.a['tag'], ' ').concat(i.a['bg1']),
                  }),
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['list-name']) },
                    f,
                  ),
                ),
                r.a.createElement(
                  'div',
                  { className: ''.concat(i.a['creator']) },
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['avatar']) },
                    r.a.createElement('img', {
                      src: v.avatarUrl,
                      alt: '',
                      title: v.nickname,
                    }),
                  ),
                  r.a.createElement(
                    'span',
                    {
                      className: ''.concat(i.a['creator-name'], ' underline'),
                      onClick: () => Object(u['f'])(v.userId),
                    },
                    v.nickname,
                  ),
                  r.a.createElement(
                    'span',
                    { className: ''.concat(i.a['creator-time']) },
                    g,
                    ' \u521b\u5efa',
                  ),
                ),
                r.a.createElement(
                  'div',
                  { className: ''.concat(i.a['btn-box']) },
                  r.a.createElement(
                    'div',
                    {
                      className: ''
                        .concat(i.a['btn-item'], ' ')
                        .concat(i.a['play'], ' btn play'),
                      onClick: () => {
                        l(t.tracks);
                      },
                    },
                    r.a.createElement('i', {
                      className: 'iconfont icon-ziyuan',
                    }),
                    ' \u64ad\u653e',
                  ),
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['btn-item'], ' btn') },
                    r.a.createElement('i', {
                      className: 'iconfont icon-shoucang1',
                    }),
                    ' \uff08',
                    a,
                    '\uff09',
                  ),
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['btn-item'], ' btn') },
                    r.a.createElement('i', {
                      className: 'iconfont icon-xiazai',
                    }),
                    ' \uff08\u4e0b\u8f7d\uff09',
                  ),
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['btn-item'], ' btn') },
                    r.a.createElement('i', {
                      className: 'iconfont icon-pinglunzhuanhuan',
                    }),
                    ' \uff08',
                    c,
                    '\uff09',
                  ),
                ),
                r.a.createElement(d, { tags: _ }),
                r.a.createElement(m, { description: n }),
                r.a.createElement(
                  'div',
                  { className: ''.concat(i.a['mini-desc'], ' text-row-2') },
                  n.map((e, t) => r.a.createElement('span', { key: t }, e)),
                ),
              ),
            ))
          : null;
      };
      var m = e => {
          var t,
            n = { props: e };
          return (
            (t =
              n.length > 0
                ? r.a.createElement(
                    'ul',
                    null,
                    n.map((e, t) => r.a.createElement('li', { key: t }, e)),
                  )
                : r.a.createElement('span', null, '\u6682\u65e0\u63cf\u8ff0')),
            r.a.createElement(
              'div',
              { className: ''.concat(i.a['desc-box']) },
              r.a.createElement('div', null, '\u4ecb\u7ecd:'),
              r.a.createElement(
                'div',
                { className: ''.concat(i.a['desc-content'], ' public-scroll') },
                t,
              ),
            )
          );
        },
        d = e => {
          var t = e.tags,
            n = void 0 === t ? [] : t;
          return 0 == n.length
            ? null
            : r.a.createElement(
                'div',
                { className: ''.concat(i.a['tag-box']) },
                r.a.createElement('div', null, '\u6807\u7b7e:'),
                n.map((e, t) =>
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['tag-item'], ' click'), key: t },
                    e,
                  ),
                ),
              );
        };
    },
    'Vn/K': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return m;
      }),
        n.d(t, 'q', function() {
          return f;
        }),
        n.d(t, 'g', function() {
          return p;
        }),
        n.d(t, 'd', function() {
          return v;
        }),
        n.d(t, 'k', function() {
          return b;
        }),
        n.d(t, 'o', function() {
          return _;
        }),
        n.d(t, 'i', function() {
          return g;
        }),
        n.d(t, 'j', function() {
          return h;
        }),
        n.d(t, 'h', function() {
          return E;
        }),
        n.d(t, 'e', function() {
          return N;
        }),
        n.d(t, 'f', function() {
          return y;
        }),
        n.d(t, 'p', function() {
          return x;
        }),
        n.d(t, 'b', function() {
          return w;
        }),
        n.d(t, 'm', function() {
          return O;
        }),
        n.d(t, 'n', function() {
          return k;
        }),
        n.d(t, 'c', function() {
          return I;
        }),
        n.d(t, 'a', function() {
          return j;
        }),
        n.d(t, 'r', function() {
          return D;
        }),
        n.d(t, 's', function() {
          return S;
        });
      n('miYZ');
      var a = n('tsqr'),
        r = n('VTBJ'),
        c = (n('2qtc'), n('kLXV')),
        i = n('q1tI'),
        s = n.n(i),
        o = n('x5H0'),
        u = n('vu0G'),
        l = c['a'].confirm;
      function m(e) {
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
      function f(e) {
        for (var t in d) e[t] || (e[t] = d[t]);
        return new Promise((t, n) => {
          l(
            Object(r['a'])(
              Object(r['a'])({}, e),
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
      function v() {
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
      function _(e, t) {
        var n = Date.parse(new Date()) / 1e3,
          a = { data: t, time: n };
        window.localStorage.setItem(e, JSON.stringify(a));
      }
      function g(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = Date.parse(new Date()) / 1e3,
          a = JSON.parse(window.localStorage.getItem(e));
        return !!((a && t && n - t < a.time) || (a && 0 === t)) && a.data;
      }
      function h(e) {
        for (var t = e.split(/\n/), n = 0; n < t.length; n++) {
          var a = '',
            r = '',
            c = !1;
          t[n] &&
            ((a = t[n].split(']')[0].split('[')[1]),
            (a = a.slice(0, 5)),
            (r = t[n].split(']')[1])),
            (t[n] = { time: a, content: r, select: c });
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
        for (var r in a)
          if (new RegExp('('.concat(r, ')')).test(t)) {
            var c = a[r] + '';
            t = t.replace(
              RegExp.$1,
              1 == RegExp.$1.length ? c : ('00' + c).substr(c.length),
            );
          }
        return t;
      };
      function N(e) {
        if (isNaN(e)) return [];
        for (var t = [], n = 0; n < e; n++) t.push(n);
        return t;
      }
      var y = (e, t) => {
          var n = null;
          return function() {
            clearTimeout(n),
              (n = setTimeout(() => {
                e.apply(this, arguments);
              }, t));
          };
        },
        x = () => o['a'].emit(u['e']),
        w = e => o['a'].emit(u['b'], e),
        O = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'playSong';
          return o['a'].emit(u['a'], e, t);
        },
        k = e => {
          window.scrollTo({ behavior: 'smooth', top: e });
        },
        I = (e, t) => {
          var n = new RegExp(e, 'is');
          return t.replace(n, '<b>$&</b>');
        },
        j = e => {
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
          a['default'].success(e);
        },
        S = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '\u656c\u8bf7\u671f\u5f85\uff01';
          a['default'].warning(e);
        };
    },
    'W/zT': function(e, t, n) {
      e.exports = {
        detali: 'detali___A5vtA',
        'img-box': 'img-box___2O_gD',
        'detali-text': 'detali-text___wvhxb',
        head: 'head___2mKkA',
        tag: 'tag___2hC9d',
        'list-name': 'list-name___3J8wK',
        creator: 'creator___2TbI_',
        'creator-name': 'creator-name___1RwF_',
        avatar: 'avatar___qGorD',
        'btn-box': 'btn-box___1c9Wg',
        'btn-item': 'btn-item___15PT5',
        play: 'play___1DCxi',
        'tag-box': 'tag-box___3WX62',
        'tag-item': 'tag-item___32Z9P',
        'desc-box': 'desc-box___3VnZk',
        'desc-content': 'desc-content___tUwUT',
        'mini-desc': 'mini-desc___1iu0I',
        bg1: 'bg1___mkzjp',
        'creator-time': 'creator-time___iz8Qj',
      };
    },
    aiZx: function(e, t, n) {
      'use strict';
      n.d(t, 'h', function() {
        return a;
      }),
        n.d(t, 'b', function() {
          return r;
        }),
        n.d(t, 'a', function() {
          return c;
        }),
        n.d(t, 'e', function() {
          return i;
        }),
        n.d(t, 'd', function() {
          return s;
        }),
        n.d(t, 'c', function() {
          return o;
        }),
        n.d(t, 'f', function() {
          return u;
        }),
        n.d(t, 'g', function() {
          return l;
        });
      var a = 'USER_DATA',
        r = 'HOME_DATA',
        c = 'COOKIE',
        i = 'PLAY_SONG_NAME',
        s = 'NOW_PLAY_ID',
        o = 'NEW_DVDS',
        u = 'PROFILE_PALYLIST_ID',
        l = 'SEARCH_KEYWORDS';
    },
    imZp: function(e, t, n) {
      'use strict';
      var a = n('q1tI'),
        r = n.n(a),
        c = n('0vtl'),
        i = n.n(c),
        s = n('Vn/K'),
        o = n('sOOk'),
        u = [
          '',
          '\u6b4c\u66f2\u6807\u9898',
          '\u65f6\u957f',
          '\u6b4c\u624b',
          '\u4e13\u8f91',
        ];
      t['a'] = e => {
        var t = e.tracks,
          n = void 0 === t ? [] : t,
          a = e.showHead,
          c = void 0 === a || a,
          l = e.showSinger,
          m = void 0 === l || l,
          d = { display: c ? 'block' : 'none' };
        return r.a.createElement(
          'div',
          { className: ''.concat(i.a['song-list']) },
          r.a.createElement(
            'div',
            { style: d },
            r.a.createElement(
              'div',
              {
                className: ''.concat(i.a['list-head'], ' ').concat(i.a['warp']),
              },
              u.map((e, t) =>
                r.a.createElement(
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
          r.a.createElement(
            'ul',
            {
              className: ''.concat(i.a['list-warp']),
              style: { borderTop: c ? 'none' : '1px solid #d9d9d9' },
            },
            n.map((e, t) => {
              var n = '',
                a = Object(s['l'])(e.dt / 1e3);
              return (
                e.alia[0] && (n = '- ('.concat(e.alia[0], ')')),
                r.a.createElement(
                  'li',
                  { className: ''.concat(i.a['warp']), key: t },
                  r.a.createElement(
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
                    r.a.createElement('i', {
                      className: 'iconfont icon-ziyuan',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    {
                      className: ''.concat(
                        i.a['item'],
                        ' text-row-1 underline',
                      ),
                      onClick: () => Object(o['e'])(e.id),
                      title: ''.concat(e.name).concat(n, ' '),
                    },
                    e.name,
                    ' ',
                    r.a.createElement('span', null, n),
                  ),
                  r.a.createElement(
                    'div',
                    { className: ''.concat(i.a['item']) },
                    a,
                  ),
                  r.a.createElement(
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
                  r.a.createElement(
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
    o1iF: function(e, t, n) {
      'use strict';
      var a = n('vDqi'),
        r = n.n(a),
        c = n('aiZx'),
        i = 'http://47.107.81.99:3000';
      function s(e) {
        if (e.iscookie && localStorage.getItem(c['a'])) {
          var t = 'cookie='.concat(localStorage.getItem(c['a'])),
            n = /=/.test(e.url) ? '&' : '?';
          e.url += ''.concat(n).concat(t);
        }
        var a = r.a.create({ baseURL: i, timeout: 1e4, withCredentials: !1 });
        return (
          a.interceptors.response.use(
            e => e.data,
            e => e,
          ),
          a(e)
        );
      }
      t['a'] = s;
    },
    sOOk: function(e, t, n) {
      'use strict';
      n.d(t, 'e', function() {
        return r;
      }),
        n.d(t, 'f', function() {
          return c;
        }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'd', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return o;
        }),
        n.d(t, 'c', function() {
          return u;
        });
      var a = n('9kvl'),
        r = e => {
          a['a'].push({ pathname: '/songDetail', query: { songId: e } });
        },
        c = e => {
          a['a'].push({ pathname: '/userDetail', query: { id: e } });
        },
        i = e => {
          a['a'].push({ pathname: '/album', query: { id: e } });
        },
        s = e => {
          a['a'].push({ pathname: '/singer', query: { id: e } });
        },
        o = e => {
          a['a'].push({ pathname: '/mv', query: { id: e } });
        },
        u = e => {
          a['a'].push({ pathname: '/playlist', query: { id: e } });
        };
    },
    ty2S: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      }),
        n.d(t, 'c', function() {
          return c;
        }),
        n.d(t, 'b', function() {
          return i;
        }),
        n.d(t, 'g', function() {
          return s;
        }),
        n.d(t, 'h', function() {
          return o;
        }),
        n.d(t, 'd', function() {
          return u;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'f', function() {
          return m;
        });
      var a = n('o1iF');
      function r(e) {
        return Object(a['a'])({ url: '/song/detail', params: e });
      }
      function c(e) {
        return Object(a['a'])({ url: '/song/url', params: e, iscookie: !0 });
      }
      function i(e) {
        return Object(a['a'])({ url: '/lyric', params: e });
      }
      function s(e) {
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
      function u(e) {
        return Object(a['a'])({
          url: '/album/newest',
          params: e,
          iscookie: !0,
        });
      }
      function l(e) {
        return Object(a['a'])({ url: '/simi/playlist', params: e });
      }
      function m(e) {
        return Object(a['a'])({ url: '/simi/song', params: e });
      }
    },
    vu0G: function(e, t, n) {
      'use strict';
      n.d(t, 'e', function() {
        return a;
      }),
        n.d(t, 'd', function() {
          return r;
        }),
        n.d(t, 'c', function() {
          return c;
        }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'b', function() {
          return s;
        });
      var a = 'SHOW_LOGIN',
        r = 'SHOW_LOADING',
        c = 'HIDE_LOADING',
        i = 'addNewSong',
        s = 'addPlayList';
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
              var r = { funName: e, events: [t] };
              this.subscribers.push(r);
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
