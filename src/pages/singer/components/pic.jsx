import React, { useContext } from 'react';
import styles from '../singer.less';
import Context from '@/context';
import Image from '@/components/Image/Image';
import Loading from '@/components/loading/Loading2';
import { goUserDatail } from '../../../assets/js/linkto';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);
const defaultSrc = `http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg`;

const pic = props => {
  const { singerData } = useContext(Context);
  if (!singerData) return loadContent;
  return (
    <div className={`${styles['pic']}`}>
      <header>
        {singerData.artist.name}{' '}
        <span>{/* {singerData.artist.identifyTag[0]} */}</span>
      </header>
      <div className={`${styles['pic-img']}`}>
        <Image
          src={`${singerData.artist.cover || defaultSrc}?param=640y300`}
          alt="华晨宇"
        />
        <div className={`${styles['btn-wrap']}`}>
          <div
            className={`${styles['classname']} btn btn-black`}
            style={{
              display: singerData.user ? 'flex' : 'none',
            }}
            onClick={() => {
              goUserDatail(singerData.user.userId);
            }}
          >
            <i className="iconfont icon-yonghu1"></i> 个人主页
          </div>
          <div className={`${styles['classname']} btn btn-black`}>
            <i className="icon-jiahaocu iconfont"></i>
            收藏
          </div>
        </div>
      </div>
    </div>
  );
};

export default pic;
