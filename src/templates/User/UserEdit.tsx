import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, PrimaryButton } from 'components/UI/index';
import { db, storage, FirebaseTimestamp, auth } from 'firebase/index';
import {
  getUsername,
  getUserAvatar,
  getUserId,
  getUserUrl,
  updateUserAction,
  getUserProfile,
  getEmail,
  getUserTwitter,
  getUserInstagram,
} from 'reducks/users/userSlice';
import { hideLoadingAction, showLoadingAction } from 'reducks/loadingSlice';
import { snackbarOpenAction } from 'reducks/snackbar/snackbarSlice';
import { errorOpenAction, errorCloseAction, getErrorState } from 'reducks/errorSlice';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { push } from 'connected-react-router';
import loadImage from 'blueimp-load-image';
import { Title, BoldText, SectionContainer } from 'assets/GlobalLayoutStyle';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
  },
  hideIcon: {
    textAlign: 'center',
    display: 'none',
  },
}));

interface PROPS {
  setting: boolean;
}

const UserEdit: React.FC<PROPS> = ({ setting }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentUsername: string = useSelector(getUsername);
  const currentUrl: string = useSelector(getUserUrl);
  const currentAvatar: string = useSelector(getUserAvatar);
  const currentProfile: string = useSelector(getUserProfile);
  const currentEmail: string = useSelector(getEmail);
  const error = useSelector(getErrorState);
  const uid = useSelector(getUserId);
  const currentTwitter = useSelector(getUserTwitter)?.split('https://twitter.com/')[1];
  const currentInstagram = useSelector(getUserInstagram)?.split('https://instagram.com/')[1];

  const [profile, setProfile] = useState<string>(currentProfile || ''),
    [avatar, setAvatar] = useState<string>(currentAvatar || ''),
    [values, setValue] = useState({
      username: currentUsername || '',
      url: currentUrl || '',
      twitter: currentTwitter || '',
      instagram: currentInstagram || '',
    });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log(event.target.value);
    },
    [setValue]
  );

  const inputProfile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProfile(event.target.value);
      if (event.target.value.length > 200) {
        dispatch(errorOpenAction());
      } else {
        dispatch(errorCloseAction());
      }
    },
    [setProfile]
  );

  const onChangeImageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // ![0]???TypeScript????????????null,undefined?????????????????????????????????????????????0???????????????????????????

    const file: any = e.target.files![0];
    let blob = new Blob([file], { type: 'image/jpeg' });
    // 1000px?????????????????????
    const canvas = await loadImage(blob, {
      maxWidth: 1000,
      canvas: true,
    });
    // Generate random 16 digits strings
    const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
      .map((n) => S[n % S.length])
      .join('');
    //  @ts-ignore
    canvas.image.toBlob((blob: any) => {
      dispatch(showLoadingAction('uploading...'));
      const uploadRef = storage.ref('avatars').child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask
        .then(() => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              const newImage = downloadURL;
              setAvatar(newImage);
              dispatch(hideLoadingAction());
            })
            .catch(() => {
              dispatch(hideLoadingAction());
              dispatch(
                snackbarOpenAction({
                  text: '????????????????????????????????????????????????????????????????????????????????????',
                  type: false,
                })
              );
            });
        })
        .catch(() => {
          dispatch(hideLoadingAction());
          dispatch(
            snackbarOpenAction({
              text: '????????????????????????????????????????????????????????????????????????????????????',
              type: false,
            })
          );
        });
    }, 'image/jpeg');
  };

  const updateUser = async (
    avatar: string,
    username: string,
    profile: string,
    url: string,
    twitter: string,
    instagram: string
  ) => {
    dispatch(showLoadingAction('???????????????????????????'));
    const timestamp = FirebaseTimestamp.now();
    const firstLogin = { firstLogin: false };
    const baseData = {
      updated_at: timestamp,
      username: username,
      avatar: avatar,
      uid: uid,
      profile: profile,
      url: url,
      email: currentEmail,
      twitter: twitter && 'https://twitter.com/' + twitter,
      instagram: instagram && 'https://instagram.com/' + instagram,
    };
    // ??????????????????????????????first???true????????????
    const userInitialData = !setting ? baseData : Object.assign(baseData, firstLogin);

    const user: any = auth.currentUser;
    user
      .updateProfile({
        displayName: username,
        photoURL: avatar,
      })
      .then(function () {
        console.log('success');
      })
      .catch((error: any) => {
        dispatch(hideLoadingAction());
        dispatch(
          snackbarOpenAction({
            text: '????????????????????????????????????????????????????????????????????????????????????',
            type: false,
          })
        );
      });

    await dispatch(updateUserAction(userInitialData));
    // user????????????????????????????????????????????????????????????????????????????????????
    await db
      .collection('users')
      .doc(uid)
      .set(userInitialData, { merge: true })
      .then(() => {
        if (!setting) {
          dispatch(push('/user/mypage'));
          dispatch(hideLoadingAction());
          dispatch(snackbarOpenAction({ text: '?????????????????????????????????????????????', type: true }));
        } else {
          dispatch(push('/timeline'));
          dispatch(hideLoadingAction());
          dispatch(
            snackbarOpenAction({ text: '??????????????????????????????????????????????????????', type: true })
          );
        }
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        dispatch(
          snackbarOpenAction({
            text: '????????????????????????????????????????????????????????????????????????????????????',
            type: false,
          })
        );
      });
  };

  return (
    <div>
      <SectionContainer>
        {!setting && <Title>???????????????????????????</Title>}
        <Box textAlign="center">
          <IconButton>
            <label>
              <Avatar className={classes.large} src={avatar} />
              <input className={classes.hideIcon} type="file" onChange={onChangeImageHandler} />
            </label>
          </IconButton>
          <BoldText>?????????????????????</BoldText>
        </Box>

        <div className="module-spacer--medium" />

        <TextInput
          fullWidth={false}
          label={'?????????(12????????????)'}
          error={values.username.length < 12 ? false : true}
          multiline={false}
          required={true}
          onChange={handleInputChange}
          rows={1}
          name="username"
          value={values.username}
          variant="outlined"
          type={'text'}
          inputProps={{
            maxLength: 12,
          }}
        />
        <TextInput
          fullWidth={true}
          label={'??????????????????'}
          multiline={true}
          required={true}
          onChange={inputProfile}
          rows={4}
          variant="outlined"
          value={profile.slice(0, 200)}
          type={'text'}
        />
        {error && <BoldText color={'red'}>???????????????200?????????????????????????????????</BoldText>}
        {!setting && (
          <>
            <TextInput
              fullWidth={true}
              label={'??????????????????sns,web????????????url'}
              multiline={false}
              required={true}
              onChange={handleInputChange}
              variant="outlined"
              rows={1}
              name="url"
              value={values.url}
              type={'text'}
            />
            <BoldText>twitter</BoldText>
            <TextInput
              fullWidth={true}
              label={'@?????????????????????????????????'}
              multiline={false}
              required={true}
              onChange={handleInputChange}
              variant="outlined"
              rows={1}
              name="twitter"
              value={values.twitter}
              type={'text'}
            />
            <BoldText>instagram</BoldText>
            <TextInput
              fullWidth={true}
              label={'????????????Id?????????????????????????????????'}
              multiline={false}
              required={true}
              onChange={handleInputChange}
              variant="outlined"
              rows={1}
              name="instagram"
              value={values.instagram}
              type={'text'}
            />
          </>
        )}
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={setting ? '??????????????????' : '???????????????????????????'}
            onClick={() =>
              updateUser(
                avatar,
                values.username,
                profile,
                values.url,
                values.instagram,
                values.twitter
              )
            }
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default UserEdit;
