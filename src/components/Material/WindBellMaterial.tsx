import React from 'react';
import { ImageWrapper, SimpleGrid, BoldText } from 'assets/GlobalLayoutStyle';
const WindBellMaterial = () => {
  return (
    <ImageWrapper>
      <SimpleGrid>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Foksample.png?alt=media&token=d5bceda4-65c5-4191-88b7-21c5e298c3a5" />
          <BoldText color={'dimgray'} left>
            口の部分を並行にして取りましょう
          </BoldText>
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fbadsample.png?alt=media&token=224329a8-2786-4ddd-8662-940ad929f0b0" />
          <BoldText color={'dimgray'} left>
            ダメな例①上から撮る
          </BoldText>
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fdamesample2.png?alt=media&token=01ea7d9c-98eb-49f0-bf1e-f028ad9e1424" />
          <BoldText color={'dimgray'} left>
            ダメな例②下から撮る
          </BoldText>
        </div>
      </SimpleGrid>
    </ImageWrapper>
  );
};

export default WindBellMaterial;
