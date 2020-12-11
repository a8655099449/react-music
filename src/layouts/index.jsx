import React from 'react';
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'


function BasicLayout(props) {
  // console.log(props,NavBar);
  return (
    <div>
      {/* 头部导航 */}
      <NavBar />
      {props.children}
      <Footer/>
    </div>
  );
}

export default BasicLayout;