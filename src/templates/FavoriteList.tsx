import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostsInFavorite } from '../reducks/users/userSlice';
import { PostCard } from '../components/PostProduct';
import {
  SectionWrapper,
  ScrollItem,
  Title,
  BoldText,
  GridList,
  HelpButtonWrapper,
} from 'assets/GlobalLayoutStyle';
import { FavoriteNav, ImageStyleChangeIcon, HelpButton } from 'components/UI/index';
import { FAVORITE } from 'types/likes';
const FavoriteList = () => {
  const [change, setChange] = useState<boolean>(false);
  // getPostsInFavoriteの処理により、お気に入りに登録された作品リストをレンダリングされた時点で取得できる。
  const postInFavorite: FAVORITE[] = useSelector(getPostsInFavorite);

  return (
    <SectionWrapper top>
      <Title>お気に入りリスト</Title>

      <FavoriteNav />

      <ImageStyleChangeIcon setChange={setChange} />

      <div className="module-spacer--small" />

      <GridList change={change}>
        {postInFavorite.length > 0 &&
          postInFavorite.map((post) => (
            <ScrollItem key={post.postId}>
              <PostCard
                change={change}
                favorite
                post={post}
                images={post.images}
                allImages={post.allImages}
                id={post.postId}
                description={post.description}
                uid={post.uid}
              />
            </ScrollItem>
          ))}
      </GridList>

      {!postInFavorite.length && (
        <>
          <div className="module-spacer--medium" />

          <BoldText color={'dimgray'}>お気に入りに登録された作品がありません。</BoldText>
        </>
      )}

      <div style={{ height: '5vh' }} />
    </SectionWrapper>
  );
};

export default FavoriteList;
