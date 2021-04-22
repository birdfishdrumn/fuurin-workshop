import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton, TextInput } from '../components/UI';
import { changePasswordAction } from 'reducks/users/operations';
import { Title, Text, SectionWrapping, BoldText } from 'assets/GlobalLayoutStyle';

const PasswordChange = () => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const changePassword = (newPassword: string, currentPassword: string): void => {
    dispatch(changePasswordAction(newPassword, currentPassword));
  };

  const inputCurrentPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentPassword(event.target.value);
    },
    [setCurrentPassword]
  );
  const inputNewPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewPassword(event.target.value);
    },
    [setNewPassword]
  );

  return (
    <div>
      <SectionWrapping>
        <Title>パスワードの変更</Title>
        <Text Flex left>
          こちらではパスワードを変更する事が可能です。現在のパスワード情報が必須になりますので、入力後新しい6桁以上のパスワードを入力してください。
        </Text>
        <BoldText left color={'red'}>
          ※googleやsnsアカウント情報使用している場合は変更の必要はありませんのでご了承下さい。
        </BoldText>

        <div className="module-spacer--medium" />

        <TextInput
          fullWidth={false}
          label={'現在のパスワード'}
          multiline={false}
          required={true}
          rows={1}
          value={currentPassword}
          type={'password'}
          variant="outlined"
          onChange={inputCurrentPassword}
        />

        <div className="module-spacer--extra-small" />

        <TextInput
          fullWidth={false}
          label={'新しいパスワード'}
          multiline={false}
          required={true}
          rows={1}
          value={newPassword}
          type={'password'}
          variant="outlined"
          onChange={inputNewPassword}
        />
        <br />
        <PrimaryButton
          label={'変更する'}
          onClick={() => changePassword(currentPassword, newPassword)}
        />
      </SectionWrapping>
    </div>
  );
};

export default PasswordChange;
