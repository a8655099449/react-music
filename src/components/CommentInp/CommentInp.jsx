import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import styles from './CommentInp.less';
import event from '@/assets/js/event';
import { showLogin } from '@/assets/js/tool';

class CommentInp extends React.Component {
  render() {
    let { userInfo, isLogin, commentCount = 0 } = this.props;

    let defaultAvatar =
      'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50';

    let maskStyle = {
      display: isLogin ? 'none' : 'block',
    };
    let btnStyle = {
      display: !isLogin ? 'none' : 'block',
    };
    let avatarUrl = isLogin
      ? userInfo.avatarUrl + '?param=50y50'
      : defaultAvatar;

    return (
      <div>
        <header className={`${styles['header']}`}>
          评论 <span>共 {commentCount} 条评论</span>
        </header>
        <div className={`${styles['commnet-inp']}`}>
          {/* 评论框 */}
          <div className={`${styles['avatar']}`}>
            <img src={avatarUrl} alt="头像" />
          </div>
          <div className={`${styles['inp-box']}`}>
            {/* 当没有登录时的遮挡 */}
            <div
              className={`${styles['mask']} `}
              style={maskStyle}
              onClick={showLogin}
            >
              登录后才可以发表评论
            </div>
            <textarea className="public-scroll" placeholder="评论"></textarea>

            <button
              className={`${styles['comment-btn']} btn btn-blue`}
              style={btnStyle}
            >
              评论
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInp);
