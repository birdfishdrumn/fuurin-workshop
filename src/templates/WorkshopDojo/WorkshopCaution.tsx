import React,{useEffect,useState} from 'react'
import {SectionWrapping, Title, Text, SimpleGrid, CircleImage,BoldText} from "assets/GlobalLayoutStyle"
import {cautionData,knackData} from "./cautionData"
const WorkshopCaution = () => {
  return (
    <SectionWrapping>
      <Title>江戸風鈴を扱う時の注意点</Title>
      <div className="module-spacer--medium" />
      <SimpleGrid gap>
        {cautionData.map((caution,index) => (
          <div key={index}
          ><CircleImage src={caution.image} />
            <Title min>{caution.title}</Title>
            <BoldText left color={"dimgray"}>{caution.description}</BoldText>
        </div>

      ))}

      </SimpleGrid>
         <div className="module-spacer--small" />
      <Title>絵付けのコツ</Title>
       <div className="module-spacer--medium" />
          <SimpleGrid gap>
        {knackData.map((knack,index) => (
          <div key={index}
          ><CircleImage src={knack.image} />
            <Title min>{knack.title}</Title>
            <BoldText left color={"dimgray"}>{knack.description}</BoldText>
        </div>

      ))}

      </SimpleGrid>
    </SectionWrapping>


  )
}

export default WorkshopCaution
