import React from 'react';

import styles from './footer.less';

// class Footer extends React.Component {

//   render(){

//     return(
//       <div>
//         我是页面的底部
//       </div>
//     )
//   }
// }
export default () => {
  return (
    <div className={`${styles['footer']}`}>
      <div className={`${styles['warp']} content-box`}>
        <div className={`${styles['left']}`}>
          <h3>关于本站</h3>
          <p>本站仅供余学习，无任何商业用途</p>
          <p>友情链接</p>
          <p className={`${styles['friend-link']}`}>
            <a href="https://react.docschina.org/" target="block">
              <i className="icon-react iconfont"></i>
              react
            </a>
            <a href="https://umijs.org/zh-CN" target="block">
              <i className="icon-rice iconfont"></i>
              umi
            </a>
            <a
              href="https://github.com/Binaryify/NeteaseCloudMusicApi"
              target="block"
            >
              <i className="icon-github2 iconfont"></i>
              网易云api
            </a>
            <a href="https://k-wei.gitee.io/" target="block">
              <img src="https://k-wei.gitee.io/icons/favicon.ico" alt="" />
              我的博客
            </a>
          </p>
        </div>
        <div className={`${styles['right']}`}>
          <h3>联系方式</h3>
          <p> qq : 865509949</p>
          <p className={`${styles['beian']}`}>
            {' '}
            <a href="https://beian.miit.gov.cn/" target="blcok">
              {' '}
              <img
                src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
                alt=""
              />{' '}
              ICP 湘ICP备2020022053号{' '}
            </a>{' '}
          </p>
        </div>
      </div>
      <div style={{ height: '30px', marginTop: '20px' }}></div>
    </div>
  );
};

// export default Footer
