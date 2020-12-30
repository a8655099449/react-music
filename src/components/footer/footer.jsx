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
      <div className={`${styles['warp']} content-box`}>我是底部</div>
    </div>
  );
};

// export default Footer
