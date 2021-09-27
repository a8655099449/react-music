(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '6mnD': function(e, t, a) {
      e.exports = { 'base-image': 'base-image___3KPub' };
    },
    ExBf: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('o0o1'),
        c = a.n(n),
        r = a('HaE+'),
        i = a('q1tI'),
        s = a.n(i),
        l = a('o1iF');
      function o() {
        return Object(l['a'])({ url: '/homepage/block/page' });
      }
      var u = a('ty2S'),
        m = a('aiZx'),
        d = a('Vn/K'),
        v = a('o7/9'),
        p = a.n(v),
        _ = a('nY+d'),
        f = a.n(_);
      class E extends s.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              list: [
                { name: '\u63a8\u8350' },
                { name: '\u6392\u884c\u699c' },
                { name: '\u6b4c\u5355' },
              ],
            });
        }
        render() {
          var e = this.state.list.map((e, t) =>
            s.a.createElement(
              'div',
              { className: f.a['nav-item'] + ' click', key: t },
              e.name,
            ),
          );
          return s.a.createElement(
            'div',
            { className: f.a['top-bar'] },
            s.a.createElement(
              'div',
              { className: f.a['content'] + ' content-box' },
              e,
            ),
          );
        }
      }
      var b = E,
        g = (a('fV52'), a('3I+P')),
        h = a('PZE1'),
        w = a.n(h),
        N = a('9kvl'),
        x = a('sOOk');
      class y extends s.a.Component {
        constructor() {
          super(...arguments),
            (this.state = { activeIndex: 0 }),
            (this.next = () => {
              this.refs.banner.next();
            }),
            (this.prov = () => {
              this.refs.banner.prev();
            }),
            (this.beforeChange = (e, t) => {
              this.setState({ activeIndex: t });
            }),
            (this.bannerClick = e => {
              var t = e.targetType;
              switch ((console.log(e), t)) {
                case 1:
                  N['a'].push('/songdetail?songId='.concat(e.song.id));
                  break;
                case 10:
                  Object(x['a'])(e.targetId);
                  break;
                case 3e3:
                  window.open(e.url, 'block');
                  break;
                case 1e3:
                  Object(x['c'])(e.targetId);
                  break;
              }
            });
        }
        render() {
          var e = this.props.banners,
            t = e.map((e, t) =>
              s.a.createElement(
                'div',
                {
                  key: t,
                  onClick: () => {
                    this.bannerClick(e);
                  },
                },
                s.a.createElement('img', {
                  src: e.pic,
                  alt: '\u8f6e\u64ad\u56fe\u7bc7',
                }),
              ),
            ),
            a = e[this.state.activeIndex] ? e[this.state.activeIndex].pic : '',
            n = { backgroundImage: 'url('.concat(a, ')') };
          return s.a.createElement(
            'div',
            { className: w.a['banner-warp'] },
            s.a.createElement('div', {
              style: n,
              className: ''.concat(w.a['bannerBg'], ' fill'),
            }),
            s.a.createElement(
              'div',
              { className: w.a['main-banner'] + ' content-box' },
              s.a.createElement('div', {
                className: ''.concat(
                  w.a['next-item'],
                  ' iconfont icon-you click',
                ),
                onClick: this.prov,
              }),
              s.a.createElement('div', {
                className: ''
                  .concat(w.a['next-item'], ' iconfont icon-you click ')
                  .concat(w.a['prov']),
                onClick: this.next,
              }),
              s.a.createElement(
                g['a'],
                {
                  autoplay: !0,
                  ref: 'banner',
                  beforeChange: this.beforeChange,
                },
                t,
              ),
            ),
          );
        }
      }
      var O = y,
        k = a('UCXR'),
        D = a.n(k),
        I = e => {
          var t = e.type,
            a = void 0 === t ? 0 : t,
            n = e.title,
            c = e.icon,
            r = void 0 === c ? 'icon-changpian2' : c,
            i = 'type-'.concat(a),
            l = null;
          return (
            e.children &&
              (l = s.a.createElement(
                'div',
                { className: 'click' },
                e.children,
              )),
            s.a.createElement(
              'div',
              { className: ''.concat(D.a['item-tit'], ' ').concat(D.a[i]) },
              s.a.createElement(
                'div',
                null,
                s.a.createElement(
                  'div',
                  { className: ''.concat(D.a['left-ui']) },
                  s.a.createElement('i', { className: 'iconfont '.concat(r) }),
                  s.a.createElement(
                    'div',
                    { className: ''.concat(D.a['title-text'], ' text-row-1') },
                    n,
                  ),
                ),
                l,
              ),
            )
          );
        },
        L = a('ZLdy'),
        C = a.n(L),
        j = a('bTu8'),
        S = a('Ng/0'),
        T = a('Ctmj'),
        M = s.a.createElement(
          'div',
          { style: { height: '400px' } },
          s.a.createElement(T['a'], null),
        ),
        A = e => {
          var t,
            a,
            n = e.baseData;
          if (!n) return M;
          var c,
            r,
            l,
            o = e => {
              new j['a']('.' + C.a['swiper-container'], {
                slidesPerView: 'auto',
              });
            };
          (Object(i['useEffect'])(o, [n]),
          console.log(n.uiElement),
          null === (t = n.uiElement) ||
          void 0 === t ||
          null === (a = t.mainTitle) ||
          void 0 === a
            ? void 0
            : a.title)
            ? (c =
                (null === (r = n.uiElement) ||
                void 0 === r ||
                null === (l = r.mainTitle) ||
                void 0 === l
                  ? void 0
                  : l.title) +
                ' / ' +
                n.uiElement.subTitle.title)
            : (c = n.uiElement.subTitle.title);
          var u = n.creatives,
            m = () => {
              for (var e = [], t = 0; t < u.length; t++) {
                var a = u[t].resources.map(e => ({
                  singerName: e.resourceExtInfo.songData.artists[0].name,
                  songId: e.resourceExtInfo.songData.id,
                  songName: e.resourceExtInfo.songData.name,
                  dt: e.resourceExtInfo.songData.duration,
                }));
                e.push(...a);
              }
              Object(d['b'])(e);
            };
          return s.a.createElement(
            'div',
            { className: ''.concat(C.a['customize']) },
            s.a.createElement(
              I,
              { title: c, type: 1, icon: 'icon-headphones1179248easyiconnet' },
              s.a.createElement(
                'div',
                {
                  className: ''.concat(C.a['play-btn']),
                  onClick: m,
                  title: '\u64ad\u653e\u5168\u90e8',
                },
                s.a.createElement('i', {
                  className: 'iconfont icon-icon_play',
                }),
                ' \u64ad\u653e',
              ),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(C.a['swiper-container']) },
              s.a.createElement(
                'div',
                { className: ' swiper-wrapper '.concat(C.a['swiper-wrapper']) },
                s.a.createElement(H, { list: u }),
              ),
            ),
          );
        },
        H = e => {
          var t = e.list;
          return t.map((e, t) =>
            s.a.createElement(
              'div',
              { className: ''.concat(C.a['content'], ' swiper-slide'), key: t },
              e.resources.map((e, t) => {
                var a = e.resourceExtInfo.songData.name,
                  n = e.resourceExtInfo.artists[0].name,
                  c = e.uiElement.subTitle
                    ? e.uiElement.subTitle.title
                    : e.uiElement.mainTitle.title;
                return s.a.createElement(
                  'div',
                  { className: ''.concat(C.a['list-item']), key: t },
                  s.a.createElement(
                    'div',
                    {
                      className: ''.concat(C.a['img-warp']),
                      onClick: () =>
                        Object(x['e'])(e.resourceExtInfo.songData.id),
                    },
                    s.a.createElement(S['a'], {
                      src: e.uiElement.image.imageUrl + '?param=50y50',
                      alt: a,
                    }),
                  ),
                  s.a.createElement(
                    'div',
                    { className: ''.concat(C.a['desc']) },
                    s.a.createElement(
                      'div',
                      {
                        className: ''.concat(C.a['song-title'], ' text-row-2 '),
                      },
                      s.a.createElement(
                        'span',
                        {
                          className: 'underline '.concat(C.a['songname']),
                          onClick: () =>
                            Object(x['e'])(e.resourceExtInfo.songData.id),
                        },
                        a,
                      ),
                      ' ',
                      '-',
                      s.a.createElement(
                        'span',
                        {
                          className: ''.concat(C.a['album-name']),
                          onClick: () =>
                            Object(x['d'])(e.resourceExtInfo.artists[0].id),
                        },
                        n,
                      ),
                    ),
                    s.a.createElement(
                      'div',
                      {
                        className: ''.concat(C.a['desc-bottom'], ' text-row-1'),
                      },
                      c,
                    ),
                  ),
                );
              }),
            ),
          );
        },
        P = a('W/M8'),
        q = a.n(P),
        G =
          (a('x5H0'),
          e => {
            var t,
              a = e.userInfo,
              n = e.isLogin;
            if (n) {
              var c,
                r = null !== (c = a.level.level) && void 0 !== c ? c : 3;
              t = s.a.createElement(
                'div',
                { className: ''.concat(q.a['islogin-warp']) },
                s.a.createElement(
                  'div',
                  { className: ''.concat(q.a['top']) },
                  s.a.createElement(
                    'div',
                    { className: ''.concat(q.a['left']) },
                    s.a.createElement('img', { src: a.avatarUrl, alt: '' }),
                  ),
                  s.a.createElement(
                    'div',
                    { className: ''.concat(q.a['right']) },
                    s.a.createElement(
                      'div',
                      { className: ''.concat(q.a['name-box']) },
                      a.nickname,
                    ),
                    s.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(q.a['public-bg'], ' ')
                          .concat(q.a['level-box']),
                      },
                      ' ',
                      r,
                      s.a.createElement('span', {
                        className: ''.concat(q.a['public-bg']),
                      }),
                    ),
                    s.a.createElement(
                      'div',
                      { className: ''.concat(q.a['qd-btn'], ' btn btn-blue') },
                      '\u7b7e\u5230',
                    ),
                  ),
                ),
                s.a.createElement(
                  'div',
                  { className: ''.concat(q.a['fans']) },
                  s.a.createElement(
                    'div',
                    { className: ''.concat(q.a['item']) },
                    s.a.createElement('div', null, a.eventCount),
                    s.a.createElement('div', null, '\u52a8\u6001'),
                  ),
                  s.a.createElement(
                    'div',
                    { className: ''.concat(q.a['item']) },
                    s.a.createElement('div', null, a.follows),
                    s.a.createElement('div', null, '\u5173\u6ce8'),
                  ),
                  s.a.createElement(
                    'div',
                    { className: ''.concat(q.a['item']) },
                    s.a.createElement('div', null, a.followeds),
                    s.a.createElement('div', null, '\u7c89\u4e1d'),
                  ),
                ),
              );
            } else
              t = s.a.createElement(
                'div',
                null,
                s.a.createElement(
                  'p',
                  null,
                  '\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a',
                ),
                s.a.createElement(
                  'div',
                  {
                    className: ''.concat(q.a['login-btn'], ' btn-main btn'),
                    onClick: d['p'],
                  },
                  '\u7528\u6237\u767b\u5f55',
                ),
              );
            return s.a.createElement(
              'div',
              { className: ''.concat(q.a['login']) },
              t,
            );
          }),
        R = a('OLXv'),
        U = a.n(R),
        V = e => {
          var t = e.newDVDs;
          return (
            Object(i['useEffect'])(() => {
              new j['a']('.' + U.a['listwarp'], { slidesPerView: 'auto' });
            }, [t]),
            s.a.createElement(
              'div',
              { className: ''.concat(U.a['new-dvd']) },
              s.a.createElement(I, {
                title: '\u65b0\u789f\u4e0a\u67b6',
                type: 0,
              }),
              s.a.createElement(
                'div',
                { className: ''.concat(U.a['content']) },
                s.a.createElement(
                  'div',
                  {
                    className: ''.concat(
                      U.a['listwarp'],
                      '  swiper-container ',
                    ),
                  },
                  s.a.createElement(
                    'div',
                    {
                      className: ''.concat(U.a['listbox'], '  swiper-wrapper '),
                    },
                    t.map((e, t) =>
                      s.a.createElement(
                        'div',
                        {
                          className: ''.concat(
                            U.a['dvd-item'],
                            ' swiper-slide',
                          ),
                          key: t,
                          onClick: () => Object(x['a'])(e.id),
                        },
                        s.a.createElement(
                          'div',
                          { className: ''.concat(U.a['bg']) },
                          s.a.createElement(S['a'], {
                            src: e.picUrl + '?param=100y100',
                            alt: e.name,
                          }),
                        ),
                        s.a.createElement(
                          'p',
                          {
                            className: ''.concat(
                              U.a['dvd-name'],
                              ' text-row-1',
                            ),
                          },
                          e.name,
                        ),
                        s.a.createElement(
                          'p',
                          {
                            className: ''.concat(U.a['singer'], ' text-row-1'),
                          },
                          e.artists[0].name,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        B = a('uOER'),
        K = a.n(B),
        Y = s.a.createElement(
          'div',
          { style: { height: '400px' } },
          s.a.createElement(T['a'], null),
        ),
        W = e => {
          var t = e.calendars;
          if (!t) return Y;
          var a = t.creatives;
          return s.a.createElement(
            'div',
            null,
            s.a.createElement(I, {
              title: '\u97f3\u4e50\u65e5\u5386',
              type: 1,
              icon: 'icon-tianchongxing-',
            }),
            a.map((e, t) => s.a.createElement(X, { item: e, key: t })),
          );
        },
        X = e => {
          var t = e.item,
            a = t.resources[0].uiElement.labelTexts
              ? s.a.createElement(
                  'span',
                  null,
                  t.resources[0].uiElement.labelTexts[0],
                )
              : null;
          return s.a.createElement(
            'div',
            { className: ''.concat(K.a['calendars-item']) },
            s.a.createElement(
              'div',
              { className: ''.concat(K.a['left-content']) },
              s.a.createElement('div', null, '\u4eca\u5929 ', a),
              s.a.createElement(
                'div',
                { className: ''.concat(K.a['classname'], ' text-row-1') },
                t.resources[0].uiElement.mainTitle.title,
              ),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(K.a['rigth-content']) },
              s.a.createElement(S['a'], {
                src: ''.concat(
                  t.resources[0].uiElement.image.imageUrl,
                  '?param=60y60',
                ),
              }),
            ),
          );
        },
        F = a('F5qy'),
        Q = a('OHTo'),
        Z = a.n(Q),
        z = e => {
          var t = e.recData;
          return s.a.createElement(
            'div',
            null,
            s.a.createElement(I, { title: t.uiElement.subTitle.title }),
            s.a.createElement(
              'div',
              { className: ''.concat(Z.a['list-warp']) },
              t.creatives.map((e, t) => {
                var a = {
                  coverImgUrl: e.uiElement.image.imageUrl,
                  name: e.uiElement.mainTitle.title,
                  playCount: e.resources[0].resourceExtInfo.playCount,
                  id: e.creativeId,
                };
                return s.a.createElement(
                  'div',
                  { className: ''.concat(Z.a['list-item']), key: t },
                  s.a.createElement(F['a'], { item: a }),
                );
              }),
            ),
          );
        },
        J = a('/MKj'),
        $ = a('PioQ'),
        ee = a('ODXe'),
        te = a('xqva'),
        ae = a('Ndxo'),
        ne =
          (a('ycHL'),
          a('u+OR'),
          s.a.createElement(
            'div',
            { style: { height: '400px' } },
            s.a.createElement(T['a'], null),
          )),
        ce = [
          {
            title: '\u65b0\u6b4c',
            dataList: [],
            content: null,
            code: 'NEW_SONG_HOMEPAGE',
          },
          {
            title: '\u65b0\u789f',
            dataList: [],
            content: null,
            code: 'NEW_ALBUM_HOMEPAGE',
          },
          {
            title: '\u6570\u5b57\u4e13\u8f91',
            dataList: [],
            content: null,
            code: 'DIGITAL_ALBUM_HOMEPAGE',
          },
        ],
        re = e => {
          var t = e.newSong,
            a = Object(i['useState'])(0),
            n = Object(ee['a'])(a, 2),
            c = n[0],
            r = n[1];
          if (!t) return ne;
          ce.forEach(e => {
            var a = [];
            t.creatives.forEach(t => {
              t.creativeType === e.code && a.push(t);
            }),
              (e.dataList = a),
              a.length > 0 &&
                (e.content = s.a.createElement(
                  te['a'],
                  { slidesPerView: 'auto' },
                  e.dataList.map((e, t) =>
                    s.a.createElement(
                      ae['a'],
                      { key: t },
                      e.resources.map((e, t) =>
                        s.a.createElement(se, { item: e, key: t }),
                      ),
                    ),
                  ),
                ));
          });
          ae['a'], ''.concat(p.a['wrap']);
          return s.a.createElement(
            'div',
            { className: ''.concat(p.a['new-song'], ' new-song') },
            s.a.createElement(
              'header',
              null,
              ce.map((e, t) =>
                s.a.createElement(
                  'div',
                  {
                    item: e,
                    key: t,
                    className: c == t ? p.a['active'] : '',
                    onClick: () => r(t),
                  },
                  e.title,
                ),
              ),
            ),
            s.a.createElement(
              'div',
              { className: ''.concat(p.a['content']) },
              ce[c].content,
            ),
          );
        },
        ie = e => {
          switch (e.resourceType) {
            case 'song':
              Object(x['e'])(e.resourceId);
              break;
            case 'album':
              Object(x['a'])(e.resourceId);
              break;
            default:
              Object(d['s'])();
              break;
          }
        },
        se = e => {
          var t = e.item,
            a = '';
          return (
            t.uiElement.subTitle &&
              t.uiElement.subTitle.title &&
              (a = t.uiElement.subTitle.title),
            s.a.createElement(
              'div',
              { className: ''.concat(p.a['list-item']), onClick: () => ie(t) },
              s.a.createElement(
                'div',
                { className: ''.concat(p.a['pic']) },
                s.a.createElement(S['a'], {
                  src: ''.concat(t.uiElement.image.imageUrl, '?param=60y60'),
                }),
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(p.a['desc']) },
                s.a.createElement(
                  'h3',
                  { className: 'text-row-1' },
                  t.uiElement.mainTitle.title,
                ),
                s.a.createElement('div', { className: 'text-row-1' }, a),
              ),
            )
          );
        },
        le = re;
      class oe extends s.a.Component {
        constructor() {
          super(...arguments),
            (this.saveTime = 10800),
            (this.state = {
              banners: [],
              contentList: [],
              recListData: null,
              newDVDs: [],
              calendars: null,
              newSong: null,
            });
        }
        componentDidMount() {
          this._getHomeData(), this._getNewDVD();
        }
        _getNewDVD() {
          var e = this;
          return Object(r['a'])(
            c.a.mark(function t() {
              var a, n;
              return c.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = Object(d['i'])(m['c'], e.saveTime) || []),
                        0 !== a.length)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), Object(u['d'])();
                    case 4:
                      (n = t.sent), (a = n.albums), Object(d['o'])(m['c'], a);
                    case 7:
                      e.setState({ newDVDs: a });
                    case 8:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        }
        _getHomeData() {
          var e = this;
          return Object(r['a'])(
            c.a.mark(function t() {
              var a, n, r, i, s, l, u, v, p;
              return c.a.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = Object(d['i'])(m['b'], e.saveTime) || []),
                        0 != a.length)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), o();
                    case 4:
                      (n = t.sent),
                        (a = n.data.blocks),
                        Object(d['o'])(m['b'], a);
                    case 7:
                      (r = a[0].extInfo.banners),
                        (i = a.find(
                          e => 'HOMEPAGE_BLOCK_PLAYLIST_RCMD' === e.blockCode,
                        )),
                        (s = a.find(
                          e => 'HOMEPAGE_BLOCK_STYLE_RCMD' === e.blockCode,
                        )),
                        (l = a.find(
                          e =>
                            'HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST' === e.blockCode,
                        )),
                        (u = a.filter(e => e.uiElement)),
                        (v = a.find(
                          e => 'HOMEPAGE_MUSIC_CALENDAR' === e.blockCode,
                        )),
                        (p = a.find(
                          e =>
                            'HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG' === e.blockCode,
                        )),
                        e.setState({
                          banners: r,
                          contentList: u,
                          recListData: i,
                          customizeData: s,
                          sceneListData: l,
                          calendars: v,
                          newSong: p,
                        });
                    case 15:
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
            a = e.isLogin,
            n =
              (this.state.contentList.map((e, t) =>
                s.a.createElement(I, { title: e.uiElement, key: t }),
              ),
              this.state.recListData
                ? s.a.createElement(z, { recData: this.state.recListData })
                : null),
            c = this.state.sceneListData
              ? s.a.createElement(z, { recData: this.state.sceneListData })
              : null;
          return s.a.createElement(
            'div',
            null,
            s.a.createElement(b, null),
            s.a.createElement(O, { banners: this.state.banners }),
            s.a.createElement(
              'div',
              { className: ''.concat(p.a['content-main'], ' content-box') },
              s.a.createElement(
                'div',
                { className: ''.concat(p.a['left-contet']) },
                n,
                c,
                s.a.createElement(V, { newDVDs: this.state.newDVDs }),
              ),
              s.a.createElement(
                'div',
                { className: ''.concat(p.a['right-content']) },
                s.a.createElement(G, { userInfo: t, isLogin: a }),
                s.a.createElement(A, { baseData: this.state.customizeData }),
                s.a.createElement(W, { calendars: this.state.calendars }),
                s.a.createElement(le, { newSong: this.state.newSong }),
              ),
            ),
          );
        }
      }
      t['default'] = Object(J['b'])($['b'], $['a'])(oe);
    },
    F5qy: function(e, t, a) {
      'use strict';
      var n = a('q1tI'),
        c = a.n(n),
        r = a('NsG5'),
        i = a.n(r),
        s = a('9kvl'),
        l = a('Vn/K'),
        o = a('Ng/0'),
        u = e => {
          s['a'].push({ pathname: '/playlist', query: { id: e } });
        };
      t['a'] = e => {
        var t = e.item;
        return (
          (t.playCount = Object(l['k'])(t.playCount)),
          c.a.createElement(
            'div',
            {
              className: ''.concat(i.a['list-item']),
              onClick: () => {
                u(t.id);
              },
            },
            c.a.createElement(
              'div',
              { className: ''.concat(i.a['img-warp']) },
              c.a.createElement(o['a'], {
                src: t.coverImgUrl + '?param=140y140',
              }),
              c.a.createElement(
                'div',
                { className: ''.concat(i.a['img-buttom-bar']) },
                c.a.createElement(
                  'div',
                  null,
                  c.a.createElement(
                    'i',
                    { className: 'iconfont icon-erji' },
                    ' ',
                    c.a.createElement('span', null, t.playCount),
                  ),
                ),
                c.a.createElement(
                  'div',
                  null,
                  c.a.createElement('i', { className: 'iconfont icon-ziyuan' }),
                ),
              ),
            ),
            c.a.createElement('p', {
              className: ''.concat(i.a['name-text'], ' text-row-2'),
              dangerouslySetInnerHTML: { __html: t.name },
            }),
          )
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
          l = e.height,
          o = e.width,
          u = Object(c['useState'])(!1),
          m = Object(n['a'])(u, 2),
          d = m[0],
          v = m[1],
          p = '//photo.tuituisoft.com/picgo/20210114103900.png',
          _ = { height: l, width: o, display: d ? 'block' : 'none' },
          f = { height: l, width: o, display: d ? 'none' : 'block' };
        function E() {
          v(!0);
        }
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement('img', {
            src: p,
            alt: '\u5360\u4f4d\u56fe\u7247',
            style: f,
            className: ''.concat(s.a['base-image']),
          }),
          r.a.createElement('img', {
            src: t,
            alt: i,
            style: _,
            className: ''.concat(s.a['base-image']),
            onLoad: E,
          }),
        );
      };
    },
    NsG5: function(e, t, a) {
      e.exports = {
        'list-item': 'list-item___2PceP',
        'img-warp': 'img-warp___3WOmS',
        'img-buttom-bar': 'img-buttom-bar___2Yh6g',
        'name-text': 'name-text___3KJw5',
      };
    },
    OHTo: function(e, t, a) {
      e.exports = {
        'list-warp': 'list-warp___36bjS',
        'list-item': 'list-item___hlSQh',
      };
    },
    OLXv: function(e, t, a) {
      e.exports = {
        'new-dvd': 'new-dvd___2buen',
        content: 'content___2tJdK',
        listwarp: 'listwarp___fl9Os',
        listbox: 'listbox___1n0_C',
        'dvd-item': 'dvd-item___iQCMg',
        bg: 'bg___Mv69D',
        singer: 'singer___2tkud',
        'swiper-container': 'swiper-container___2d1s9',
        'swiper-slide': 'swiper-slide___3gp36',
      };
    },
    PZE1: function(e, t, a) {
      e.exports = {
        'main-banner': 'main-banner___Csuqv',
        'next-item': 'next-item___2OQi7',
        prov: 'prov___ItAKt',
        'banner-warp': 'banner-warp___kAa2F',
        bannerBg: 'bannerBg___BdMt_',
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
    UCXR: function(e, t, a) {
      e.exports = {
        'item-tit': 'item-tit___1Ddaj',
        'left-ui': 'left-ui___QXf1d',
        'title-text': 'title-text___EkLj2',
        'type-1': 'type-1___3DLMD',
      };
    },
    'Vn/K': function(e, t, a) {
      'use strict';
      a.d(t, 'l', function() {
        return m;
      }),
        a.d(t, 'q', function() {
          return v;
        }),
        a.d(t, 'g', function() {
          return p;
        }),
        a.d(t, 'd', function() {
          return _;
        }),
        a.d(t, 'k', function() {
          return f;
        }),
        a.d(t, 'o', function() {
          return E;
        }),
        a.d(t, 'i', function() {
          return b;
        }),
        a.d(t, 'j', function() {
          return g;
        }),
        a.d(t, 'h', function() {
          return h;
        }),
        a.d(t, 'e', function() {
          return w;
        }),
        a.d(t, 'f', function() {
          return N;
        }),
        a.d(t, 'p', function() {
          return x;
        }),
        a.d(t, 'b', function() {
          return y;
        }),
        a.d(t, 'm', function() {
          return O;
        }),
        a.d(t, 'n', function() {
          return k;
        }),
        a.d(t, 'c', function() {
          return D;
        }),
        a.d(t, 'a', function() {
          return I;
        }),
        a.d(t, 'r', function() {
          return L;
        }),
        a.d(t, 's', function() {
          return C;
        });
      a('miYZ');
      var n = a('tsqr'),
        c = a('VTBJ'),
        r = (a('2qtc'), a('kLXV')),
        i = a('q1tI'),
        s = a.n(i),
        l = a('x5H0'),
        o = a('vu0G'),
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
      function v(e) {
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
      function p() {
        (document.documentElement.style.overflow = 'hidden'),
          (document.body.style.position = 'fixed'),
          (document.body.style.top = '0px'),
          (document.body.style.width = '100%');
      }
      function _() {
        (document.documentElement.style.overflowY = 'scroll'),
          (document.body.style.position = 'static');
      }
      function f(e) {
        return (
          (e = parseInt(e)),
          e <= 1e4
            ? e
            : e > 1e4 && e < 99999999
            ? parseInt(e / 1e4) + ' \u4e07'
            : parseInt(e / 1e8) + ' \u4ebf'
        );
      }
      function E(e, t) {
        var a = Date.parse(new Date()) / 1e3,
          n = { data: t, time: a };
        window.localStorage.setItem(e, JSON.stringify(n));
      }
      function b(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = Date.parse(new Date()) / 1e3,
          n = JSON.parse(window.localStorage.getItem(e));
        return !!((n && t && a - t < n.time) || (n && 0 === t)) && n.data;
      }
      function g(e) {
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
      var h = (e, t) => {
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
      function w(e) {
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
        x = () => l['a'].emit(o['e']),
        y = e => l['a'].emit(o['b'], e),
        O = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'playSong';
          return l['a'].emit(o['a'], e, t);
        },
        k = e => {
          window.scrollTo({ behavior: 'smooth', top: e });
        },
        D = (e, t) => {
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
        L = e => {
          n['default'].success(e);
        },
        C = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '\u656c\u8bf7\u671f\u5f85\uff01';
          n['default'].warning(e);
        };
    },
    'W/M8': function(e, t, a) {
      e.exports = {
        login: 'login___1hBmK',
        'login-btn': 'login-btn___2lOvo',
        top: 'top___3BrSs',
        left: 'left___JmpLn',
        right: 'right___2GCRj',
        'level-box': 'level-box___3cMbQ',
        'qd-btn': 'qd-btn___3Rml6',
        fans: 'fans___MUXZM',
        item: 'item___qjEXm',
        'public-bg': 'public-bg___1FErX',
      };
    },
    ZLdy: function(e, t, a) {
      e.exports = {
        customize: 'customize___2IQrE',
        content: 'content___2mxec',
        'swiper-container': 'swiper-container___dMVuk',
        'list-item': 'list-item___2_z4c',
        'img-warp': 'img-warp___IoBt0',
        desc: 'desc___2l9iE',
        'desc-bottom': 'desc-bottom___1Sv_j',
        'song-title': 'song-title___2iS9N',
        songname: 'songname___2TkBp',
        'album-name': 'album-name___2PAXH',
        'swiper-wrapper': 'swiper-wrapper___1LOCM',
        'play-btn': 'play-btn___e5mKC',
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
          return l;
        }),
        a.d(t, 'f', function() {
          return o;
        }),
        a.d(t, 'g', function() {
          return u;
        });
      var n = 'USER_DATA',
        c = 'HOME_DATA',
        r = 'COOKIE',
        i = 'PLAY_SONG_NAME',
        s = 'NOW_PLAY_ID',
        l = 'NEW_DVDS',
        o = 'PROFILE_PALYLIST_ID',
        u = 'SEARCH_KEYWORDS';
    },
    'nY+d': function(e, t, a) {
      e.exports = {
        'top-bar': 'top-bar___2-VV1',
        content: 'content___1iofu',
        'nav-item': 'nav-item___2Ah2b',
      };
    },
    o1iF: function(e, t, a) {
      'use strict';
      var n = a('vDqi'),
        c = a.n(n),
        r = a('aiZx'),
        i = 'http://47.107.81.99:3000';
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
    'o7/9': function(e, t, a) {
      e.exports = {
        'content-main': 'content-main___12zb8',
        'left-contet': 'left-contet____WE1x',
        'right-content': 'right-content___v-56G',
        'new-song': 'new-song___2byl6',
        active: 'active___YG_Qq',
        content: 'content___3UTq0',
        'list-item': 'list-item___3DOli',
        pic: 'pic___1XlD1',
        desc: 'desc___vOcsS',
      };
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
          return l;
        }),
        a.d(t, 'c', function() {
          return o;
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
        l = e => {
          n['a'].push({ pathname: '/mv', query: { id: e } });
        },
        o = e => {
          n['a'].push({ pathname: '/playlist', query: { id: e } });
        };
    },
    ty2S: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return c;
      }),
        a.d(t, 'c', function() {
          return r;
        }),
        a.d(t, 'b', function() {
          return i;
        }),
        a.d(t, 'g', function() {
          return s;
        }),
        a.d(t, 'h', function() {
          return l;
        }),
        a.d(t, 'd', function() {
          return o;
        }),
        a.d(t, 'e', function() {
          return u;
        }),
        a.d(t, 'f', function() {
          return m;
        });
      var n = a('o1iF');
      function c(e) {
        return Object(n['a'])({ url: '/song/detail', params: e });
      }
      function r(e) {
        return Object(n['a'])({ url: '/song/url', params: e, iscookie: !0 });
      }
      function i(e) {
        return Object(n['a'])({ url: '/lyric', params: e });
      }
      function s(e) {
        return Object(n['a'])({
          url: '/playlist/detail',
          params: e,
          iscookie: !0,
        });
      }
      function l(e) {
        return Object(n['a'])({
          url: '/related/playlist',
          params: e,
          iscookie: !0,
        });
      }
      function o(e) {
        return Object(n['a'])({
          url: '/album/newest',
          params: e,
          iscookie: !0,
        });
      }
      function u(e) {
        return Object(n['a'])({ url: '/simi/playlist', params: e });
      }
      function m(e) {
        return Object(n['a'])({ url: '/simi/song', params: e });
      }
    },
    uOER: function(e, t, a) {
      e.exports = {
        'calendars-item': 'calendars-item___2wxwY',
        'rigth-content': 'rigth-content___3qTdu',
        'left-content': 'left-content___9qLhH',
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
    ycHL: function(e, t, a) {},
  },
]);
