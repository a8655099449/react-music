export function mapStateToProps(state) {
  return {
    userInfo: state.userData,
    isLogin: state.isLogin,
    isH5: state.isH5,
  };
}

export function mapDispatchToProps(dispacth) {
  return {
    setUserData: data => {
      dispacth({
        type: 'setUserInfo',
        data,
      });
    },
    logout: () => {
      dispacth({
        type: 'logout',
      });
    },
    setDevice: data => {
      dispacth({
        type: 'setDevice',
        data,
      });
    },
  };
}
