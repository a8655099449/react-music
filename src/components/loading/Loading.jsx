import React from 'react';
import styles from './Loading.less';

import { disbledBodyScroll, bodyScroll } from '@/assets/js/tool';
let body = document.querySelector('body');
import event from '@/assets/js/event';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    event.on('showLoading', this.showLoading);
    event.on('hideLoading', this.hideLoading);
  }
  state = {
    isShow: false,
  };

  showLoading = () => {
    this.setState({ isShow: true });
  };
  hideLoading = () => {
    this.setState({ isShow: false });
  };
  render() {
    let { isShow } = this.state;
    console.log(isShow);
    if (isShow) {
      return <div className={`${styles['loading']}`}>loading ....</div>;
    }
    return null;
  }
}

export default Loading;
