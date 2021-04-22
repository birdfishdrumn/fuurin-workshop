import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingAction, showLoadingAction } from '../reducks/loadingSlice';
import { getRoute } from 'reducks/users/userSlice';
import { fetchPostsAction } from '../reducks/posts/postSlice';
import { push } from 'connected-react-router';
import { PostCard } from 'components/PostProduct';
import { db } from 'firebase/index';
import NotPushAuth from 'NotPushAuth';
import { PrimaryButton, ImageStyleChangeIcon } from 'components/UI';
import firebase from 'firebase/app';
import {
  GridList,
  Title,
  SectionWrapper,
  ScrollItem,
  BoldText,
  StyledLink,
  MinText,
  StyledImage,
} from 'assets/GlobalLayoutStyle';
import { TopCarouselWrapper, TopCarouselColumn } from './style';
import PopulationPost from './PopulatePost';
import { PostTag } from './style';
import { OrderByDirection } from '@firebase/firestore-types';
import Carousel from 'react-material-ui-carousel';
import CircularProgress from '@material-ui/core/CircularProgress';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import count from 'count-array-values';
import { POST } from 'types/posts';
import { Fukusuke } from 'assets/ImageIcon';

const PostList = () => {
  const dispatch = useDispatch();
  const selector: any = useSelector(getRoute);
  const postsRef = db.collection('posts');
  const [postsList, setPostsList] = useState<POST[]>([]),
    [order, setOrder] = useState<OrderByDirection>('desc'),
    [lastDoc, setLastDoc] = useState<firebase.firestore.DocumentData>(),
    [isEmpty, setIsEmpty] = useState<boolean>(false),
    [loading, setLoading] = useState<boolean>(false),
    [change, setChange] = useState<boolean>(false),
    [catName, setCatName] = useState<string>('');

  const query = decodeURI(selector.location.search); //タグ検索でリロードした時のエンコードを防ぐ
  const categoryId: string = query.split('?category=')[1]; //カテゴリーのidの名称

  const category = /^\?category=/.test(query) ? query.split('?category=')[1] : '';
  const tags = /^\?tags=/.test(query) ? query.split('?tags=')[1] : '';

  useEffect(() => {
    dispatch(showLoadingAction('Loading'));
    let query = postsRef.orderBy('updated_at', order);
    // categoryのクエリー
    query = category !== '' ? query.where('category', '==', category) : query;
    //  tagのクエリ
    query = tags !== '' ? query.where('tags', 'array-contains', tags) : query;

    const unSub = query.limit(24).onSnapshot((snapshots) => {
      const postList: any = [];
      snapshots.forEach((snapshot) => {
        const post = snapshot.data();
        postList.push(post);
      });
      // 最後に取得されたデータ
      const lastDoc = snapshots.docs[snapshots.docs.length - 1];
      setLastDoc(lastDoc);
      setPostsList(postList);
      console.log(lastDoc);
      dispatch(hideLoadingAction());
    });
    setIsEmpty(false);
    // アンマウントしないとタグ検索でいいねを押した時にバグが発生する。
    return () => {
      unSub();
    };
  }, [query, order]);

  // カテゴリーidを日本語名に変換して取得する処理
  useEffect(() => {
    if (categoryId) {
      db.collection('categories')
        .doc(categoryId)
        .get()
        .then((snapshot: firebase.firestore.DocumentData) => {
          const data = snapshot.data();
          const catName = data.name;
          setCatName(catName);
        });
    }
  }, [categoryId]);

  // 更に新しい投稿を取得する。

  const fetchMore = () => {
    setLoading(true);
    let query = postsRef.orderBy('updated_at', order);
    query = category !== '' ? query.where('category', '==', category) : query;
    query = tags !== '' ? query.where('tags', 'array-contains', tags) : query;
    query
      .startAfter(lastDoc)
      .limit(12)
      .get()
      .then((snapshots: firebase.firestore.DocumentData) => {
        const isCollectionEmpty = snapshots.size === 0;
        if (!isCollectionEmpty) {
          const postList: any = [];
          snapshots.forEach((snapshot: firebase.firestore.DocumentData) => {
            const post = snapshot.data();
            postList.push(post);
            console.log(postList.length - 1);
          });
          const lastDoc = snapshots.docs[snapshots.docs.length - 1];
          setLastDoc(lastDoc);
          setPostsList((postsList) => [...postsList, ...postList]);
          dispatch(fetchPostsAction(postList));
        } else {
          setIsEmpty(true);
        }
        setLoading(false);
      });
  };

  // -------------人気のタグを表示ーーーーーーーーーーーーー
  const tagsList = postsList.map((post) => post.tags);
  const tagNum = count(tagsList.flat());
  const tagNumSlice = tagNum.slice(0, 20);

  // -------------人気のタグを表示ーーーーーーーーーーーーー

  // タグを検索する
  const tagSearch = (t: any): void => {
    dispatch(push(`/timeline/?tags=${t.value}`));
    window.scrollTo(0, 0);
  };

  const changeSort = useCallback(
    (change) => {
      setOrder(change);
    },
    [setOrder]
  );

  return (
    <SectionWrapper top>
      <NotPushAuth />
      <div className="module-spacer--medium" />
      {!category && !tags && (
        <Carousel animation="slide">
          <TopCarouselWrapper>
            <StyledLink to="/serviceguide">
              <TopCarouselColumn>
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fmakimono.jpg?alt=media&token=53c48587-8841-4e8f-8c15-4d0b1a6293e8" />
                </div>
                <div>
                  <Title lef min>
                    はじめかた
                  </Title>
                  <MinText min left>
                    まずはこちらからサービスの始めかたについてご覧いただけます。早速江戸風鈴の体験を始めましょう！
                  </MinText>
                </div>
              </TopCarouselColumn>
            </StyledLink>
          </TopCarouselWrapper>
        </Carousel>
      )}
      <div className="module-spacer--medium" />

      {!category && !tags && postsList.length !== 0 && (
        <>
          <Title>人気のタグ</Title>
          <PostTag top>
            {tagNumSlice &&
              tagNumSlice.map((t: any, index: number) => (
                <li key={index} onClick={() => tagSearch(t)}>
                  #{t.value}
                </li>
              ))}
          </PostTag>

          <div className="module-spacer--medium" />
        </>
      )}

      {!category && !tags && <Title>新着作品</Title>}
      <ImageStyleChangeIcon changeSort={changeSort} setChange={setChange} />

      <div className="module-spacer--medium" />

      {tags && <BoldText>「{tags}」の検索結果</BoldText>}
      {category && <BoldText>「{catName}」の検索結果</BoldText>}

      <div className="module-spacer--small" />

      <GridList change={change}>
        {postsList.length > 0 ? (
          postsList.map((post) => (
            <ScrollItem key={post.id}>
              <PostCard
                change={change}
                post={post}
                key={post.id}
                name={post.name}
                images={post.images}
                allImages={post.allImages}
                id={post.id}
                description={post.description}
                username={post.username}
                avatar={post.avatar}
                uid={post.uid}
              />
            </ScrollItem>
          ))
        ) : (
          // ローディング中の表示
          <div
            style={{
              height: '1s0vh',
              backgroundColor: '#FFFAFA',
            }}
          ></div>
        )}
      </GridList>

      {!postsList.length && (
        <>
          {' '}
          <StyledImage width={'100'} min alt="福助" src={Fukusuke} />
          <BoldText color={'dimgray'}>
            申し訳ございません。
            <br />
            投稿がまだありません。
          </BoldText>
        </>
      )}

      {/* -----------もっとみるのLOADING---------------- */}
      <div className="center">
        {loading && <CircularProgress color="inherit" style={{ margin: '30px 0' }} />}
      </div>
      {!postsList.length ? (
        <></>
      ) : (
        !loading && !isEmpty && <PrimaryButton label={'もっと見る'} onClick={fetchMore} />
      )}
      {/* -----------もっとみるのLOADING---------------- */}
      <div className="module-spacer--medium" />
      {isEmpty && (
        <>
          <SentimentDissatisfiedOutlinedIcon />
          <BoldText color={'dimgray'}>これ以上投稿はありません...</BoldText>
        </>
      )}

      {!category && !tags && (
        <>
          <Title>人気の作品</Title>

          <PopulationPost top />
        </>
      )}
    </SectionWrapper>
  );
};

export default PostList;
