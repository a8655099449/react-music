import React, { useContext, useEffect, useState } from 'react';
import styles from '../singer.less';
import Context from '@/context';
import { getSingerDesc } from '../../../api/api-singer';

import Loading from '@/components/loading/Loading2';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);
const desc = props => {
  const { id, singerData } = useContext(Context);

  const [descData, setDescData] = useState(null);

  // ^ 获得歌手描述
  const _getSingerDesc = async () => {
    const res = await getSingerDesc({ id });
    if (res.code !== 200) return;
    setDescData(res);
  };

  useEffect(() => {
    _getSingerDesc();
  }, []);

  if (!descData || !singerData) return loadContent;

  return (
    <div className={`${styles['desc']}`}>
      <header>
        <h3 className={`${styles['name']}`}> {singerData.artist.name}简介 </h3>
        <p>{descData.briefDesc}</p>
      </header>

      {descData.introduction.map((item, index) => (
        <DescItem item={item} key={index} />
      ))}
    </div>
  );
};

const DescItem = props => {
  let { item } = props;

  let txt = item.txt.replace(/\n/g, '<br>');
  return (
    <div className={`${styles['desc-item']}`}>
      <h3>{item.ti}</h3>
      <p dangerouslySetInnerHTML={{ __html: txt }}></p>
    </div>
  );
};

export default desc;
