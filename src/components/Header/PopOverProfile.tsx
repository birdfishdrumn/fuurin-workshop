import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId } from 'reducks/users/userSlice';
import { MinText, PushWrapper } from './style';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

interface PROPS {
  handleClose: () => void;
}

const PushList: React.FC<PROPS> = ({ handleClose }) => {
  const history = useHistory();
  const uid = useSelector(getUserId);
  const selectMenu = (event: any, path: string) => {
    history.push(path);
    handleClose();
  };

  const profileMenu = [
    {
      func: selectMenu,
      label: 'マイページ',
      icon: <ImageIcon />,
      id: 'mypage',
      value: `/users/${uid}`,
    },
    { func: selectMenu, label: '作品の編集', icon: <EditIcon />, id: 'post', value: '/user/post' },
    {
      func: selectMenu,
      label: 'プロフィールの編集',
      icon: <PersonIcon />,
      id: 'profile',
      value: '/user/edit',
    },
    {
      func: selectMenu,
      label: 'アカウントの設定',
      icon: <LockIcon />,
      id: 'account',
      value: '/user/account',
    },
  ];

  return (
    <PushWrapper>
      <MinText padding>アカウント</MinText>
      <Divider />
      <List>
        {profileMenu.map((prof) => (
          <ListItem button key={prof.id} onClick={(e) => prof.func(e, prof.value)}>
            <ListItemAvatar>
              <Avatar>{prof.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={prof.label} />
          </ListItem>
        ))}
      </List>
    </PushWrapper>
  );
};

export default PushList;
