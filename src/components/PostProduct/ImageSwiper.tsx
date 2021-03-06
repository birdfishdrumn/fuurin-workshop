import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import NoImage from '../../assets/img/src/no_image.png';
import 'swiper/css/swiper.css';

interface PROPS {
  images: { [key: string]: string }[];
}

const ImageSwiper: React.FC<PROPS> = ({ images }) => {
  const [params] = React.useState({
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    rebuildOnUpdate: true,
  });

  return (
    <Swiper {...params}>
      {images.length === 0 ? (
        <div className="p-media__thumb">
          <img src={NoImage} />
        </div>
      ) : (
        images.map((image: any) => (
          <div className="p-media__thumb" key={image.id}>
            <img src={image.path} alt="商品画像" />
          </div>
        ))
      )}
    </Swiper>
  );
};

export default ImageSwiper;
