import React, { useCallback, memo } from 'react';
import { BoldText } from 'assets/GlobalLayoutStyle';
import { useSelector, useDispatch } from 'react-redux';
import { POST } from 'types/posts';
import { FAVORITE } from 'types/likes';
import NoImage from 'assets/img/src/no_image.png';
import { ProductDialog } from 'components/UI/index';
import Favorite from '../Favorite/Favorite';
import { dialogOpenAction } from 'reducks/dialog/dialogSlice';
import { getUserId, getPostsInFavorite, getIsSignedIn } from 'reducks/users/userSlice';
import { push } from 'connected-react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    display: 'inlineBlock',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    '&:last-child': {
      paddingBottom: '16px',
    },
  },
  media: {
    height: 0,
    paddingTop: '100%',
    position: 'relative',
    transition: '0.3s',
    '&:hover': {
      opacity: 0.7,
    },
  },
  title: {
    marginTop: '8px',
  },
  avatar: {
    zIndex: 10,
    position: 'absolute',
    top: 5,
    left: 5,
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  },
  favorite: {
    position: 'absolute',
    top: 3,
    right: 0,
  },
}));

const changeStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: '8px',
      width: '200px',
      height: '450px',
      display: 'inlineBlock',
      cursor: 'pointer',
    },
    [theme.breakpoints.up('md')]: {
      margin: '10px',
      width: '200px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: 5,
      width: '200px',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    cursor: 'pointer',
    '&:last-child': {
      paddingBottom: '16px',
    },
  },
  media: {
    height: 500,
    width: 200,
    paddingTop: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 450,
    },
  },
}));

const PostCard: React.FC<Partial<POST>> = memo((props) => {
  const { id, change, name, post } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const changeClass = changeStyles();
  const uid = useSelector(getUserId);
  const isSignedIn = useSelector(getIsSignedIn);
  const postInFavorite: FAVORITE[] = useSelector(getPostsInFavorite);
  const likesPostsArray: string[] = postInFavorite.map((post: any) => post.postId);

  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];
  const allImages = props.allImages.length ? props.allImages : [{ path: NoImage }];

  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const handleClickOpen = (id: string): void => {
    props.changeRelation ? props.changeRelation(id) : setDialogOpen(true);
  };

  const handleClickUserPage = (event: any) => {
    event.stopPropagation();
    isSignedIn
      ? dispatch(push('/users/' + post.uid))
      : dispatch(dialogOpenAction({ type: 'signin', title: 'ログイン' }));
  };
  return (
    <div>
      <Card className={change ? changeClass.root : classes.root}>
        <CardMedia
          // 複数登録した画像のうちの最初のものを選択
          className={change ? changeClass.media : classes.media}
          image={change ? allImages[0].path : images[0].path}
          onClick={() => handleClickOpen(props.id)}
        >
          {/* お気に入りリストから取得した場合 */}
          {!props.favorite && !change && (
            <>
              <Avatar
                src={props.avatar}
                aria-label="recipe"
                className={classes.avatar}
                onClick={handleClickUserPage}
              />
              <div className={classes.favorite}>
                {<Favorite id={id} uid={uid} likesPostsArray={likesPostsArray} post={post} />}
              </div>
            </>
          )}
        </CardMedia>
      </Card>
      {!change && (
        <BoldText color={'dimgray'} left style={{ margin: '3px' }}>
          {name}
        </BoldText>
      )}

      <ProductDialog dialogId={props.id} dialogOpen={dialogOpen} handleClose={handleClose} />
    </div>
  );
});

export default PostCard;
