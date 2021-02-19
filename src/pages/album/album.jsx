import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';

import Details from './components/Details';

import styles from './album.less';
import Context from '@/context';
import PlayListTable from '../../components/PlayListTable/PlayListTable';
import CommentInp from '../../components/CommentInp/CommentInp';

import { getAlbumDetail } from '../../api/api-album';
import { getCommentNew } from '../../api/api-comment';
import CommentItem from '../../components/commentItem/commentItem';
import { scrollTopTo } from '../../assets/js/tool';

const album = props => {
  // let { userInfo, isLogin } = props;
  let query = props.location.query;
  let id = 488910132;
  if (query.id && !isNaN(query.id)) id = parseInt(query.id);

  const [albumInfo, setAlbumInfo] = useState(null);
  const [songs, setSongs] = useState([]);
  const [comments, setcomments] = useState([]);

  let commentParms = {
    sortType: 2,
    pageSize: 30,
    pageNo: 1,
    type: 3,
  };

  // ^ 获取专辑详情
  const _getAlbumDetail = async () => {
    const res = await getAlbumDetail({ id });
    if (res.code !== 200) return;
    setAlbumInfo(res.album);
    setSongs(res.songs);
    document.title = `${res.album.name} - 专辑`;
  };
  // ^ 获取评论
  const _getComments = async () => {
    const res = await getCommentNew({
      ...commentParms,
      id,
    });
    if (res.code !== 200) return;

    setcomments(res.data.comments);
  };

  useEffect(() => {
    _getAlbumDetail();
    _getComments();
    scrollTopTo(0);
  }, []);

  const value = { id, albumInfo, songs };

  return (
    <div className={`${styles['album-page']} content-box page-content`}>
      <Context.Provider value={value}>
        <Details />
        <PlayListTable tracks={songs} />
        <CommentInp />
        {comments.map((item, index) => (
          <CommentItem item={item} key={index} id={id} type={3} />
        ))}
      </Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(album);
