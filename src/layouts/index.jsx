import React from 'react';

function BasicLayout(props) {
  console.log('我被渲染了吗');
  return (
    <div>
      <h1>我来组成头部</h1>
      {props.children}
      <footer>
        我是页面底部
      </footer>
    </div>
  );
}

export default BasicLayout;