import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => {
  return (
    <div className='carousel-itemWrap'>
      <div className='carousel-item'>
        <div className='carousel-item_titleWrap'>
          <h1 className='carousel-item_title'>
            Nombre
          </h1>
        </div>

        <div className='carousel-item_imageWrap'>
          <img className='carousel-item_image' alt='Imagen del guisado' />
        </div>

        <div className='carousel-item_description'>
          <h1>Nombre completo</h1>
          <h2>Ingredientes</h2>
        </div>
      </div>
    </div>
  )
};

export default CarouselItem;
