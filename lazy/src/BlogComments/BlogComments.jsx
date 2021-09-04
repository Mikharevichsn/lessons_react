import React, { useEffect, useState, lazy, Suspense } from 'react';
import { CommentsList } from './CommentsList';
import fakeComments from './fakeComments';
import './BlogComments.scss';

const AddComment = lazy(() => import('./AddComment'));

export const BlogComments = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(fakeComments);
  }, []);

  return (
    <div>
      <CommentsList className='article-comments' list={list} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <AddComment setList={setList} />
      </Suspense>
    </div>
  );
};
