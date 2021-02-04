import React from 'react';
import styles from './Loading.less';

import { disbledBodyScroll, bodyScroll } from '@/assets/js/tool';
import event from '@/assets/js/event';
import { SHOW_LOADING, HIDE_LOADING } from '@/config/eventKey';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    event.on(SHOW_LOADING, this.showLoading);
    event.on(HIDE_LOADING, this.hideLoading);
  }
  state = {
    isShow: false,
  };

  showLoading = () => {
    disbledBodyScroll();
    this.setState({ isShow: true });
  };
  hideLoading = () => {
    bodyScroll();
    this.setState({ isShow: false });
  };
  render() {
    let { isShow } = this.state;
    // console.log(isShow);
    if (isShow) {
      return <div className={`${styles['loading']}`}>loading ....</div>;
    }
    return null;
  }
}

export default Loading;
