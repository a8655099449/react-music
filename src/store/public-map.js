export function mapStateToProps(state) {
  return {
    userInfo: state.userData,
    isLogin: state.isLogin,
  };
}

export function mapDispatchToProps(dispacth) {
  return {};
}
