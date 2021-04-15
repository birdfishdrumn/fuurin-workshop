import React, { useEffect, useState } from 'react';
import { SectionWrapping, Title, Text } from "assets/GlobalLayoutStyle";
import { LessonBox, LessonImage, LessonText } from "./style";
import Swiper from 'react-id-swiper';
import { FloatingButton } from "components/UI/index";
import { db } from "firebase/index";
import { SLIDE } from "types/lesson";


const WorkShopDojo = () => {
   const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

        },
          rebuildOnUpdate: true,
      }
  const [slide,setSlide] = useState<SLIDE[]>([])
  let id =window.location.pathname.split("/lesson")[1];

  if (id) {
    id = id.split("/")[1];
  }

  useEffect(() => {
    const unSub = db.collection("lessons").doc(id).collection("slide").orderBy("number", "asc").onSnapshot((snapshot) => {
      setSlide(
        snapshot.docs.map((doc) => ({
          id: doc.data().id,
          title: doc.data().title,
          images: doc.data().images,
          description: doc.data().description
        }))
      )
    })
    return () => {
      unSub()
    }
  },[]);


  return (
    <SectionWrapping>
      <Title>絵付け体験道場</Title>
      <div className="module-spacer--medium" />
      <Swiper {...params}>
        {slide.map((s) => (
           <LessonBox key={s.id}>
            <LessonImage src={s.images.path} />
            <Title>{s.title}</Title>
            <LessonText left>{s.description}</LessonText>
        </LessonBox>
        ))}
      </Swiper>
     <FloatingButton/>
    </SectionWrapping>
  )
}

export default WorkShopDojo
