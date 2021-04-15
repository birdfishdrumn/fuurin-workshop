import React from 'react';
import { SectionWrapping, Title, Text, SimpleGrid, CircleImage, BoldText } from "assets/GlobalLayoutStyle";
import { ProcessWrapper } from "./style";
import { stripData, stripMakingData } from "./stripData";


const WorkshopCaution = () => {
  return (
    <SectionWrapping>
      <Title>短冊の付け方</Title>
      <div className="module-spacer--medium" />

      {stripData.map((strip, index) => (
          <ProcessWrapper  key={index}>
          <div
          ><CircleImage src={strip.image} />
          </div>
          <div>
            <Title min left>{strip.title}</Title>
            <BoldText left color={"dimgray"}>{strip.description}</BoldText>
            </div>

          </ProcessWrapper>

      ))}

      <div className="module-spacer--small" />

      <Title>短冊の作り方</Title>
      <Text left>短冊はご自分で用意する事も可能です。もし作品にオリジナリティを高めたいなどあれば自由に作ってみましょう。</Text>
      <Title>-用意するもの-</Title>
            <div className="module-spacer--small" />
      <SimpleGrid>
        <div>
          <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fcutter.jpg?alt=media&token=8b2dac06-e7fd-4744-91c3-b8f24f10bf6b" />
          <BoldText  color={"dimgray"}>カッター</BoldText>
        </div>
         <div>
          <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fpanti.jpg?alt=media&token=259149c6-9707-4af1-b0f9-e40fc8f3b525" />
                    <BoldText  color={"dimgray"}>穴あけパンチ</BoldText>
        </div>
         <div>
          <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fwashi.jpg?alt=media&token=d7e4127c-289b-44cf-9358-1300d0330d7b" />
           <BoldText  color={"dimgray"}>和紙、クリアファイルなど</BoldText>
          </div>

      </SimpleGrid>

      <div className="module-spacer--small" />

       <Title>制作のながれ</Title>
         <div className="module-spacer--small" />
      {stripMakingData.map((make, index) => (
          <ProcessWrapper  key={index}>
          <div
          ><CircleImage src={make.image} />
          </div>
          <div>
            <Title min left>{make.title}</Title>
            <BoldText left color={"dimgray"}>{make.description}</BoldText>
            </div>

          </ProcessWrapper>

      ))}
    </SectionWrapping>


  )
}

export default WorkshopCaution
