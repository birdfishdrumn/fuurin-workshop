import React, { useCallback, useState,useEffect} from "react";
import { TextInput, PrimaryButton } from "../components/UI";

import { Text } from "assets/GlobalLayoutStyle";
import { useDispatch } from "react-redux";

import { push } from "connected-react-router";
import {SectionWrapping} from "assets/GlobalLayoutStyle"

const Confirm: React.FC= () => {
  const dispatch = useDispatch();
  // const isSignedIn = useSelector(getIsSignedIn


  return (
    <SectionWrapping>
      <h2 className="u-text__headline u-text-center">本人確認メールの送信</h2>
      <div className="module-spacer--medium"></div>
      <Text left>

    </Text>
          <div className="module-spacer--medium"></div>
          <PrimaryButton onClick={()=>dispatch(push("/"))} label="Topへ戻る" />
    </SectionWrapping>
  );
};

export default Confirm;
