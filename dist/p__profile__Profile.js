(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    '99XK': function(e, t, a) {
      e.exports = {
        'list-bar': 'list-bar___QIuF_',
        'list-item': 'list-item___2DWUI',
        isSelet: 'isSelet___1iWro',
        'children-list': 'children-list___KE9Jk',
        'playlist-item': 'playlist-item___xhRLg',
        active: 'active___2aDTg',
        img: 'img___WlnjJ',
        desc: 'desc___aYrs7',
        count: 'count___rGuJa',
      };
    },
    CTaJ: function(e, t, a) {
      'use strict';
      a.r(t);
      var c = a('o0o1'),
        n = a.n(c),
        l = a('HaE+'),
        r = a('ODXe'),
        i = a('q1tI'),
        s = a.n(i),
        o = a('/MKj'),
        u = a('NPcc'),
        m = a.n(u),
        d = a('PioQ'),
        v = a('jbwE'),
        _ = a('ty2S'),
        f = a('TjV+'),
        b = a.n(f),
        p = a('Vn/K'),
        E = () =>
          s.a.createElement(
            'div',
            { className: ''.concat(b.a['not-login']) },
            s.a.createElement('div', {
              className: ''.concat(b.a['bg']),
              onClick: p['p'],
            }),
          ),
        y = a('99XK'),
        j = a.n(y),
        g = a('Ng/0'),
        N = {
          artistCount: 0,
          createDjRadioCount: 0,
          createdPlaylistCount: 0,
          djRadioCount: 0,
          mvCount: 0,
          newProgramCount: 0,
          programCount: 0,
          subPlaylistCount: 0,
        },
        O = e => {
          var t = Object(i['useState'])(!1),
            a = Object(r['a'])(t, 2),
            c = a[0],
            n = a[1],
            l = Object(i['useState'])(!1),
            o = Object(r['a'])(l, 2),
            u = o[0],
            m = o[1],
            d = e.userCreatePlaylist,
            v = void 0 === d ? [] : d,
            _ = e.userCollectPlaylist,
            f = void 0 === _ ? [] : _,
            b = e.subcountData,
            p = e.changePlayList,
            E = e.selectId;
          b || (b = N);
          var y = { display: c ? 'block' : 'none' },
            g = { display: u ? 'block' : 'none' },
            O = c ? j.a['isSelet'] : '',
            w = u ? j.a['isSelet'] : '';
          return (
            Object(i['useEffect'])(() => {
              v.find(e => e.id === E) && n(!0),
                f.find(e => e.id === E) && m(!0);
            }, [E]),
            s.a.createElement(
              'div',
              { className: ''.concat(j.a['list-bar']) },
              s.a.createElement(
                'div',
                { className: ''.concat(j.a['list-item']) },
                '\u6211\u7684\u6b4c\u624b\uff08',
                b.artistCount,
                '\uff09',
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(j.a['list-item']) },
                '\u6211\u7684\u89c6\u9891\uff08',
                b.subPlaylistCount,
                '\uff09',
              ),
              s.a.createElement(
                'div',
                null,
                s.a.createElement(
                  'div',
                  {
                    className: ''.concat(j.a['list-item']),
                    onClick: () => n(!c),
                  },
                  s.a.createElement('i', {
                    className: ''.concat(O, ' iconfont icon-you'),
                  }),
                  ' \u521b\u5efa\u7684\u6b4c\u5355\uff08',
                  b.createdPlaylistCount,
                  '\uff09',
                ),
                s.a.createElement(
                  'div',
                  { className: ''.concat(j.a['children-list']), style: y },
                  v.map((e, t) =>
                    s.a.createElement(k, {
                      key: t,
                      item: e,
                      changePlayList: p,
                      selectId: E,
                    }),
                  ),
                ),
              ),
              s.a.createElement(
                'div',
                {
                  className: ''.concat(j.a['list-item']),
                  onClick: () => m(!u),
                },
                s.a.createElement('i', {
                  className: ''.concat(w, ' iconfont icon-you'),
                }),
                ' \u6536\u85cf\u7684\u6b4c\u5355\uff08',
                b.subPlaylistCount,
                '\uff09',
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(j.a['children-list']), style: g },
                f.map((e, t) =>
                  s.a.createElement(k, {
                    key: t,
                    item: e,
                    changePlayList: p,
                    selectId: E,
                  }),
                ),
              ),
            )
          );
        },
        k = e => {
          var t = e.item,
            a = e.changePlayList,
            c = e.selectId,
            n = '';
          return (
            c == t.id && (n = j.a['active']),
            s.a.createElement(
              'div',
              {
                className: ''.concat(j.a['playlist-item'], ' click ').concat(n),
                onClick: () => a(t),
              },
              s.a.createElement(
                'div',
                { className: ''.concat(j.a['img'], ' ') },
                s.a.createElement(g['a'], {
                  src: ''.concat(t.coverImgUrl, '?param=40y40'),
                }),
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(j.a['desc']) },
                s.a.createElement(
                  'div',
                  { className: ''.concat(j.a['title'], ' text-row-1') },
                  t.name,
                ),
                s.a.createElement(
                  'div',
                  { className: ''.concat(j.a['count']) },
                  t.trackCount,
                  ' \u9996',
                ),
              ),
            )
          );
        },
        w = a('wOMP'),
        C = a.n(w),
        h = a('imZp'),
        x = a('S8wa'),
        P = a('Ctmj'),
        I = e => {
          var t = e.playListDetail;
          return t
            ? s.a.createElement(
                'div',
                { className: ''.concat(C.a['playlist-content']) },
                s.a.createElement(x['a'], { data: t }),
                s.a.createElement(h['a'], { tracks: t.tracks }),
              )
            : s.a.createElement(P['a'], null);
        },
        S = a('GT+x'),
        L = a.n(S),
        T = e => {
          var t = e.userInfo,
            a = t.level ? t.level.level : 1;
          return s.a.createElement(
            'div',
            { className: ''.concat(L.a['user-info']) },
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['avatar']) },
              s.a.createElement(g['a'], {
                src: ''.concat(t.avatarUrl, '?param=50y50'),
              }),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['info']) },
              s.a.createElement(
                'p',
                { className: ''.concat(L.a['uname']) },
                t.nickname,
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(L.a['lv']) },
                s.a.createElement('span', null, 'Lv.', a),
              ),
            ),
          );
        },
        D = a('9kvl'),
        K = e => {
          var t = e.item;
          return s.a.createElement(
            'div',
            {
              className: ''.concat(L.a['mini-list-item']),
              onClick: () => {
                D['a'].push({ pathname: '/playlist', query: { id: t.id } });
              },
            },
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['pic']) },
              s.a.createElement(g['a'], {
                src: ''.concat(t.coverImgUrl, '?param=50y50'),
              }),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['desc']) },
              s.a.createElement(
                'div',
                { className: ''.concat(L.a['item-name'], ' text-row-1') },
                t.name,
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(L.a['item-count']) },
                t.trackCount,
                ' \u9996\u6b4c',
              ),
            ),
          );
        },
        J = e => {
          var t = e.userInfo,
            a = e.userCollectPlaylist,
            c = e.userCreatePlaylist,
            n = Object(i['useState'])(0),
            l = Object(r['a'])(n, 2),
            o = l[0],
            u = l[1],
            m = {},
            d = Object(i['useRef'])(null);
          c.length > 0 && (m = c[0]);
          var v = [];
          if (d && d.current) {
            var _ = d.current.querySelectorAll('.'.concat(L.a['desc-text']));
            v = [_[0].offsetTop, _[1].offsetTop];
          }
          var f = Object(p['f'])(() => {
            var e =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop;
            !v || v.length <= 0 || u(e);
          }, 500);
          return (
            Object(i['useEffect'])(() => {
              if (v)
                return (
                  window.removeEventListener('scroll', f),
                  window.addEventListener('scroll', f),
                  () => {
                    window.removeEventListener('scroll', f);
                  }
                );
            }, [v]),
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['mini-ui']), ref: d },
              s.a.createElement(T, { userInfo: t }),
              s.a.createElement(G, { likeListItem: m }),
              s.a.createElement(H, { scrolltop: o, offsetTops: v }),
              s.a.createElement(X, { list: c, text: '\u521b\u5efa' }),
              s.a.createElement(X, { list: a, text: '\u6536\u85cf' }),
            )
          );
        },
        G = e =>
          s.a.createElement(
            'div',
            { className: ''.concat(L.a['like-list'], ' ').concat(L.a['bg']) },
            s.a.createElement(K, { item: e.likeListItem }),
          ),
        X = e => {
          var t = e.list,
            a = void 0 === t ? [] : t,
            c = e.text;
          return s.a.createElement(
            'div',
            { className: ''.concat(L.a['like-list'], ' ').concat(L.a['bg']) },
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['desc-text']) },
              c,
              '\u6b4c\u5355\uff08',
              a.length,
              '\u4e2a\uff09',
            ),
            a.map((e, t) =>
              '\u521b\u5efa' == c && 0 == t
                ? null
                : s.a.createElement(K, { item: e, key: t }),
            ),
          );
        },
        H = e => {
          var t,
            a = e.scrolltop,
            c = e.offsetTops,
            n = Object(i['useState'])(16),
            l = Object(r['a'])(n, 2),
            o = l[0],
            u = l[1];
          return (
            Object(i['useEffect'])(() => {
              !c || a < c[1] - 100 ? u(16) : u(66.5);
            }, [a]),
            a > 200 && (t = L.a['position-top']),
            s.a.createElement(
              'div',
              { className: ''.concat(L.a['nav-bar'], ' ').concat(t) },
              s.a.createElement(
                'div',
                {
                  onClick: () => {
                    u(16), Object(p['n'])(c[0] - 100);
                  },
                },
                '\u521b\u5efa\u6b4c\u5355',
              ),
              s.a.createElement('span', null),
              s.a.createElement(
                'div',
                {
                  onClick: () => {
                    Object(p['n'])(c[1] - 100), u(66.5);
                  },
                },
                '\u6536\u85cf\u6b4c\u5355',
              ),
              s.a.createElement('div', {
                className: ''.concat(L.a['active-line']),
                style: { left: o + '%' },
              }),
            )
          );
        },
        U = a('aiZx'),
        V =
          (a('5162'),
          [
            { name: 'mysinger', desc: '\u6211\u7684\u6b4c\u624b' },
            { name: 'myVideo', desc: '\u6211\u7684\u89c6\u9891' },
            { name: 'myPlaylist', desc: '\u521b\u5efa\u7684\u6b4c\u5355' },
            { name: 'myCollectList', desc: '\u521b\u5efa\u7684\u6b4c\u5355' },
          ]),
        Y = e => {
          var t = e.userInfo,
            a = e.isLogin,
            c = e.isH5;
          if (!a)
            return s.a.createElement(
              'div',
              { className: 'page-content content-box' },
              s.a.createElement(E, null),
            );
          var o,
            u = t.userId,
            d = Object(i['useState'])(null),
            f = Object(r['a'])(d, 2),
            b = f[0],
            p = f[1],
            y = Object(i['useState'])([]),
            j = Object(r['a'])(y, 2),
            g = j[0],
            N = j[1],
            k = Object(i['useState'])([]),
            w = Object(r['a'])(k, 2),
            C = w[0],
            h = w[1],
            x = Object(i['useState'])(V[2]['name']),
            P = Object(r['a'])(x, 2),
            S = P[0],
            L = (P[1], Object(i['useState'])(null)),
            T = Object(r['a'])(L, 2),
            D = T[0],
            K = T[1],
            G = () => {
              X(), Y();
            },
            X = (function() {
              var e = Object(l['a'])(
                n.a.mark(function e() {
                  var t;
                  return n.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(v['f'])();
                        case 2:
                          (t = e.sent), 200 == t.code && p(t);
                        case 4:
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
              e.id != D.id && q(e.id);
            },
            Y = (function() {
              var e = Object(l['a'])(
                n.a.mark(function e() {
                  var t, a, c, l;
                  return n.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(v['e'])({ uid: u });
                        case 2:
                          if (((t = e.sent), 200 == t.code)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          (a = t.playlist.filter(e => e.userId == u)),
                            (c = t.playlist.filter(e => e.userId != u)),
                            N(a),
                            h(c),
                            (l = localStorage.getItem(U['f']) || a[0].id),
                            q(l);
                        case 11:
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
              var e = Object(l['a'])(
                n.a.mark(function e(t) {
                  var a;
                  return n.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            localStorage.setItem(U['f'], t),
                            (e.next = 3),
                            Object(_['g'])({ id: t })
                          );
                        case 3:
                          if (((a = e.sent), 200 == a.code)) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt('return');
                        case 6:
                          K(a.playlist);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })(),
            B = D ? D.id : 0;
          if (
            (Object(i['useEffect'])(() => {
              G();
            }, []),
            c)
          )
            return s.a.createElement(
              'div',
              { className: 'page-content content-box' },
              s.a.createElement(J, {
                userInfo: t,
                userCollectPlaylist: C,
                userCreatePlaylist: g,
              }),
            );
          switch (S) {
            case V[2]['name']:
              o = s.a.createElement(I, { playListDetail: D });
              break;
            default:
              break;
          }
          return s.a.createElement(
            'div',
            { className: 'page-content content-box '.concat(m.a['wrap']) },
            s.a.createElement(
              'div',
              { className: ''.concat(m.a['left-content'], ' public-scroll') },
              s.a.createElement(O, {
                userCollectPlaylist: C,
                userCreatePlaylist: g,
                subcountData: b,
                changePlayList: H,
                selectId: B,
              }),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(m.a['right-content'], ' public-scroll') },
              o,
            ),
          );
        };
      t['default'] = Object(o['b'])(d['b'], d['a'])(Y);
    },
    'GT+x': function(e, t, a) {
      e.exports = {
        'user-info': 'user-info___3Hk9w',
        avatar: 'avatar___32xnC',
        info: 'info___2PuaN',
        uname: 'uname___2wYYY',
        lv: 'lv___3Z5TZ',
        bg: 'bg___2B_QK',
        'like-list': 'like-list___zBnrF',
        'mini-ui': 'mini-ui___2TBKb',
        'desc-text': 'desc-text___KtK5c',
        'mini-list-item': 'mini-list-item___1uUm0',
        pic: 'pic___Hgaks',
        'item-name': 'item-name___JMmBX',
        desc: 'desc___1bJAp',
        'item-count': 'item-count___HGhN_',
        'nav-bar': 'nav-bar___f7NGf',
        'active-line': 'active-line___C242o',
      };
    },
    NPcc: function(e, t, a) {
      e.exports = {
        wrap: 'wrap___2V14e',
        'left-content': 'left-content___2tb1c',
        'right-content': 'right-content___3Sbg4',
      };
    },
    'TjV+': function(e, t, a) {
      e.exports = { 'not-login': 'not-login___1NWzC', bg: 'bg___3aGe8' };
    },
    jbwE: function(e, t, a) {
      'use strict';
      a.d(t, 'g', function() {
        return n;
      }),
        a.d(t, 'b', function() {
          return l;
        }),
        a.d(t, 'h', function() {
          return r;
        }),
        a.d(t, 'd', function() {
          return i;
        }),
        a.d(t, 'a', function() {
          return s;
        }),
        a.d(t, 'f', function() {
          return o;
        }),
        a.d(t, 'e', function() {
          return u;
        }),
        a.d(t, 'c', function() {
          return m;
        });
      var c = a('o1iF');
      function n(e) {
        return Object(c['a'])({
          url: '/login/cellphone?time=' + e.time,
          method: 'post',
          data: e,
        });
      }
      function l() {
        var e = Date.parse(new Date()) / 1e3;
        return Object(c['a'])({
          url: '/user/level?time='.concat(e),
          iscookie: !0,
        });
      }
      function r() {
        return Object(c['a'])({ url: '/logout' });
      }
      function i() {
        return Object(c['a'])({ url: '/login/status', iscookie: !0 });
      }
      function s(e) {
        return Object(c['a'])({ url: '/user/detail', params: e, iscookie: !0 });
      }
      function o() {
        return Object(c['a'])({ url: '/user/subcount', iscookie: !0 });
      }
      function u(e) {
        return Object(c['a'])({
          url: '/user/playlist',
          iscookie: !0,
          params: e,
        });
      }
      function m(e) {
        return Object(c['a'])({ url: '/user/record', iscookie: !0, params: e });
      }
    },
    wOMP: function(e, t, a) {
      e.exports = { 'playlist-content': 'playlist-content___qkXrX' };
    },
  },
]);
