import React, { useContext } from 'react';

import Context from '@/context';
export default props => {
  const { id } = useContext(Context);

  return <div>{id}</div>;
};
