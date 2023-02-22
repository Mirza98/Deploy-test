import React, { FC } from 'react';

import { BlogData } from '../../lib/BlogData';
import { BlogItem } from './BlogItem';

const BlogItemList: FC = () => {
  return (
    <>
      {BlogData.map((post, i) => (
        <BlogItem {...post} key={i} index={i} />
      ))}
    </>
  );
};

export { BlogItemList };
