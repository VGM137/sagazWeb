import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, description, type, hotness, title, }) => {
  return (
    <div className='carousel-itemWrap'>
      <div className='carousel-item'>

        <div className='carousel-item_tab'>
          <div className='carousel-item_emptyspace left'>
            <div className='carousel-item_emptyspace2'>
            </div>
          </div>
          <div className='carousel-item_title'>
            {title}
          </div>
          <div className='carousel-item_emptyspace right'>
            <div className='carousel-item_emptyspace3'>
            </div>
          </div>
        </div>

        <div className='carousel-item_content'>
          <div className='carousel-item_imageWrap'>
            <img src={cover} className='carousel-item_image' alt='Imagen del guisado' />
          </div>

          <div className='carousel-item_description'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>{type}</h2>
            <h2>{hotness}</h2>
          </div>
          </div>
      </div>
    </div>
  )
};

export default CarouselItem;
