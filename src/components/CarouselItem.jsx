import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import chileNo from '../assets/static/chile_no.png'
import chileSi from '../assets/static/chile_si.png'

const CarouselItem = ({ tab, cover, description, type, hotness, title, }) => {
  return (
    <div className='carousel-itemWrap'>
      <div className='carousel-item'>

        <div className='carousel-item_tab'>
          <div className='carousel-item_emptyspace left'>
            <div className='carousel-item_emptyspace2'>
            </div>
          </div>
          <div className='carousel-item_title'>
            {tab}
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
            <div className='carousel-item_description_hotness'>
              {hotness == 0 &&
                  <>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileNo} alt="" />
                    </figure>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileNo} alt="" />
                    </figure>
                    <h2 className='carousel-item_description_hotness-text'>No pica</h2>
                  </>
                }
              {hotness === 1 &&
                  <>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileSi} alt="" />
                    </figure>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileNo} alt="" />
                    </figure>
                    <h2 className='carousel-item_description_hotness-text'>Pica poquito</h2>
                  </>
              }
              {hotness === 2 &&
                  <>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileSi} alt="" />
                    </figure>
                    <figure className='carousel-item_description_hotness-wrap'>
                      <img className='carousel-item_description_hotness-img' src={chileSi} alt="" />
                    </figure>
                    <h2 className='carousel-item_description_hotness-text'>Pica bastante</h2>
                  </>
              }
            </div>
          </div>
          </div>
      </div>
    </div>
  )
};

export default CarouselItem;
