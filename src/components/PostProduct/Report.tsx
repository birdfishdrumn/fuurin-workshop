import React, { useCallback, useState } from 'react';
import { db, FirebaseTimestamp } from "firebase/index";
import { useDispatch,useSelector } from "react-redux";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextInput, PrimaryButton } from "components/UI/index";
import {getUserId}from "reducks/users/userSlice"
import { snackbarOpenAction } from "reducks/snackbar/snackbarSlice";
import { modalOpenAction } from "reducks/modal/modalSlice";
import {showLoadingAction,hideLoadingAction} from "reducks/loadingSlice"

const Report = ({ id,content }) => {
  const [value, setValue] = React.useState('スパム');
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const [reason, setReason] = useState<string>("");
  const timestamp = FirebaseTimestamp.now();
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  },[setValue]);

  const inputReason = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setReason(event.target.value);
    },
    [setReason]
  );

  const handleSubmit = async (value: string, reason: string): Promise<void> => {
    try {
      dispatch(showLoadingAction("送信しています"))
      await db.collection("report").add(
        content ?
          {
            title: "コメント",
            value: value,
            reason: reason,
            id: id,
            uid: uid,
            content,
            post_at:timestamp
          }
          :
          {
            title: "作品",
            value: value,
            reason: reason,
            id: id,
            uid: uid,
            post_at:timestamp
          })
      dispatch(hideLoadingAction())
      dispatch(modalOpenAction({ type: "report", text: "違反の報告" }))

    } catch (e) {
      dispatch(snackbarOpenAction({ type: false, text: "送信に失敗しました。再度時間が経ってからお試しください。" }))
    }
  };


  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">{content ?
          "コメントの違反内容" :
          "違反内容"}</FormLabel>
        <RadioGroup aria-label="report" name="report" value={value} onChange={handleChange}>
          <FormControlLabel value="スパム" control={<Radio />} label="スパム" />
          <FormControlLabel value="誹謗中傷" control={<Radio />} label="誹謗中傷" />
          {content ?
            (
              <>
                <FormControlLabel value="嫌がらせ" control={<Radio />} label="嫌がらせ" />
                </>
            )
              :
            (
              <>
                <FormControlLabel value="作品が不適切" control={<Radio />} label="作品が不適切" />
          <FormControlLabel value="江戸風鈴以外の作品" control={<Radio />} label="作品が江戸風鈴ではない" />
                </>
              )
        }

          <FormControlLabel value="その他" control={<Radio />} label="その他" />
        </RadioGroup>
      </FormControl>
          <TextInput
            fullWidth={true}
            label={"何か理由もあればお願いします。"}
            multiline={true}
            required={true}
            onChange={inputReason}
            rows={5}
            value={reason}
            type={"text"}
            variant="outlined"
          />

      <div  className="center">
      <PrimaryButton
          label="送信する"
          onClick={()=>handleSubmit(value,reason)}
        />
      </div>

    </div>
  )
}

export default Report
