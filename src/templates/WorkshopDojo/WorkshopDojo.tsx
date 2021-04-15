import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { SectionWrapping, Title, Text, StyledLink } from "assets/GlobalLayoutStyle";
import { LessonWrapper, LessonColumn } from "./style";
import { db } from "firebase/index";
import { LESSON } from "types/lesson";
import { showLoadingAction, hideLoadingAction } from "reducks/loadingSlice";


const WorkShopDojo = () => {
  const [lessons, setLessons] = useState<LESSON[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoadingAction("loading"))
    db.collection("lessons").get().then((snapshot) => {
      const list: any = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)
      })
      dispatch(hideLoadingAction())
      setLessons(list)
    })
  }, []);

  return (

    <SectionWrapping>
      <Title>絵付け体験道場</Title>
      <div className="module-spacer--medium" />
      {lessons.map((lesson) => (
        <LessonWrapper key={lesson.id}>
        <StyledLink to={`/lesson/${lesson.id}`}>
        <LessonColumn>
          <div>
           <img alt="レッスン画像" src ="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/slide%2FGlPawrfvzGJcloCF?alt=media&token=43848d95-f094-4f72-936f-3f050f77c938"/>
          </div>
          <div>
            <Title left>Lesson 1</Title>
                <Title left>{lesson.title}</Title>
                <Text left>{lesson.description}</Text>
          </div>
        </LessonColumn>
       </StyledLink>
      </LessonWrapper>
      ))}

      <div className="module-spacer--medium" />

        <LessonWrapper>
        <StyledLink to="/workshopcaution">
        <LessonColumn>
          <div>
           <img  alt="コツ" src ="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F4729901_s.jpg?alt=media&token=d954867e-b2c4-4ce4-a209-19762d889989"/>
          </div>
          <div>

                <Title left>絵付けのコツ・注意点</Title>
                <Text left>江戸風鈴では絵を内側から描くため、なかなか思い通りに描くのは難しいです。こちらでは上手く描くちょっとしたコツ、描く際の注意点をご紹介いたします。</Text>
          </div>
        </LessonColumn>
       </StyledLink>
      </LessonWrapper>

      <div className="module-spacer--medium" />

      <LessonWrapper>
        <StyledLink to="/mixcolor">
        <LessonColumn>
          <div>
           <img alt="色の作り方" src ="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F1277239.png?alt=media&token=2be597cc-6586-4132-ad2a-b6eae281b469"/>
          </div>
          <div>

                <Title left>色の作り方</Title>
                <Text left>こちらでは簡単な色の作り方について紹介いたします。原色のまま使う方が夏らしい明るい柄が出来上がりますが、自分の世界観を表現したい方は積極的に色を作っていきましょう</Text>
          </div>
        </LessonColumn>
       </StyledLink>
      </LessonWrapper>
      <div className="module-spacer--medium" />
                    <LessonWrapper>
        <StyledLink to="/strip">
        <LessonColumn>
          <div>
           <img alt="短冊" src ="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Ftanzaku.png?alt=media&token=50dfbb86-b8d8-44c6-86ef-15debec6cf63"/>
          </div>
          <div>

                <Title left>短冊の付け方</Title>
                <Text left>体験を終えた後には短冊をつけましょう。こちらでは短冊の付け方、またオリジナル短冊の簡単な作り方について説明いたします。</Text>
          </div>
        </LessonColumn>
       </StyledLink>
      </LessonWrapper>

    </SectionWrapping>
  )
}

export default WorkShopDojo
