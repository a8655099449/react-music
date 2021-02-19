import React, { useContext, useEffect, useState } from 'react';
import styles from '../singer.less';
import Context from '@/context';
import { getSingerMv } from '../../../api/api-singer';

import Loading from '@/components/loading/Loading2';
import Mvitem from '../../../components/mvItem/MvItem';
import Nothing from '../../../components/noting/nothing';

const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const mv = props => {
  const { id } = useContext(Context);
  const [mvs, setMvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ^ 获取歌手的mv
  const _getSingerMv = async () => {
    setIsLoading(true);
    const res = await getSingerMv({ id, limit: 30 });
    clearLoading();
    if (res.code !== 200) return;

    setMvs(res.mvs);
  };

  const clearLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  };

  useEffect(() => {
    _getSingerMv();
  }, []);

  if (isLoading) return loadContent;

  if (mvs.length === 0) return <Nothing hintText="暂无MV" />;

  // Mvitem

  return (
    <div className={`${styles['flex-warp']}`}>
      {mvs.map((item, index) => (
        <div key={index} className={`${styles['item']}`}>
          <Mvitem item={item} src="imgurl" type="mv" />
        </div>
      ))}
    </div>
  );
};

export default mv;
