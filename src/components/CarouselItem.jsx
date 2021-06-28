import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => {
  return (
    <div className='carousel-itemWrap'>
      <div className='carousel-item'>

        <div className='carousel-item_tab'>
          <div className='carousel-item_emptyspace left'>
            <div className='carousel-item_emptyspace2'>
            </div>
          </div>
          <div className='carousel-item_title'>
            Nombre
          </div>
          <div className='carousel-item_emptyspace right'>
            <div className='carousel-item_emptyspace3'>
            </div>
          </div>
        </div>

        <div className='carousel-item_content'>
          <div className='carousel-item_imageWrap'>
            <img className='carousel-item_image' alt='Imagen del guisado' />
          </div>

          <div className='carousel-item_description'>
            <h1>Nombre completo</h1>
            <h2>Descripción</h2>
            <h2>Tags</h2>
            <h2>Chilosidad</h2>
          </div>
          </div>
      </div>
    </div>
  )
};

export default CarouselItem;
