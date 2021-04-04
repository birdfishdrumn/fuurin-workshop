import React, {  useEffect } from "react";

// import { listenAuthState } from "./features/userSlice";
import { getIsSignedIn ,login} from "./reducks/users/userSlice";
import { useDispatch , useSelector } from "react-redux";
import { listenAuthNotState } from "./reducks/users/operations";



const NotPushAuth: React.FC = ( ) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const isSignedIn = useSelector(getIsSignedIn);

  useEffect(() => {
      dispatch(listenAuthNotState());
  }, []);

  return (
      <>
      </>
    )

};

export default NotPushAuth;
