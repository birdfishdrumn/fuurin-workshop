// ページ遷移なしでログイン中かどうか判断するコンポーネント
import React, { useEffect } from "react";
import { useDispatch  } from "react-redux";
import { listenAuthNotState } from "./reducks/users/operations";


const NotPushAuth: React.FC = ( ) => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(listenAuthNotState());
  }, []);

  return (
      <>
      </>
    )

};

export default NotPushAuth;
