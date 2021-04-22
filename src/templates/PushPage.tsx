import React, { useState, useEffect } from 'react';
import { db, FirebaseTimestamp } from 'firebase/index';
import firebase from 'firebase/app';
import { BackgroundWhite, Title, BoldText, Text, SectionWrapping } from 'assets/GlobalLayoutStyle';
import { dateToString, returnCodeToBr } from 'functions/function';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PUSH } from 'types/push';

interface PROPS {
  location: any;
}

const PushList: React.FC<PROPS> = ({ location }) => {
  const [pushItem, setPushItem] = useState<Partial<PUSH>>({
    title: '',
    message: '',
    images: '',
    date: FirebaseTimestamp.now(),
  });
  const id = location.state;

  useEffect(() => {
    db.collection('message')
      .doc(id)
      .get()
      .then((snapshot: firebase.firestore.DocumentData) => {
        const data = snapshot.data();

        setPushItem(data);
      });
  }, [id]);

  return (
    <div>
      <SectionWrapping>
        <Title>お知らせ</Title>

        <div className="module--space-medium" />

        <BackgroundWhite>
          {pushItem ? (
            <>
              <Title>{pushItem.title}</Title>
              <BoldText right>{dateToString(pushItem.date.toDate())}</BoldText>

              <div className="module-spacer--medium" />

              <Text left>{returnCodeToBr(pushItem.message)}</Text>
            </>
          ) : (
            <CircularProgress color="inherit" style={{ marginTop: '20vh' }} />
          )}

          <div className="module-spacer--medium" />
        </BackgroundWhite>
      </SectionWrapping>
    </div>
  );
};

export default PushList;
