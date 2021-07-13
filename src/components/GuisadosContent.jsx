import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement, getSagazData } from '../actions'
import Formulario from './Formulario';
import Social from './Social';
import Footer from './Footer';
import Categories from './Categories.jsx';
import Carousel from './Carousel.jsx';
import CarouselItem from './CarouselItem.jsx';
import '../assets/styles/components/GuisadosContent.scss'
import guisadosAPI from '../utils/getGuisados'

const GuisadosContent = (props) => {

  let guisadosIsEnable = props.guisados.length > 0 
  let sagazData = new guisadosAPI

  if(props.guisados.length <= 0){
    try{
      sagazData.getSagazData()
        .then(result => {
          let sagazData = result
          let theData = [];
          for(let n = 0; n < sagazData.data.length; n++){
            theData.push(sagazData.data[n])
          }
          props.getSagazData(theData)
        })
/*       console.log(props.guisados) */
    }catch(err){
      console.log(err)
    }
  }

  const { ref, inView, entry} = useInView({
    threshold: .5,
  });

  const handleVisibility = (el) => {
    props.visibleElement({
      [el]: inView
    })
  };

  return(
    <div id='guisados-content' className='guisados-content'>
      <div id='guisados-spacer' className='guisados-spacer'>
      </div>
      <div ref={ref} id='guisadosDisplay' className='guisadosDisplay'>
      {handleVisibility('guisados')}

      <Categories title='Carne de res'>
        <Carousel>
          {guisadosIsEnable
            ? 
              props.guisados.map(guisado => 
                /* console.log(guisado.title.split(" ")[0]) */
                <CarouselItem 
                  tab={ guisado.title.split(" ")[0] }
                  cover={ guisado.cover } 
                  description={ guisado.description } 
                 /* type={ guisado.type } */
                  hotness={ guisado.hotness } 
                  title={ guisado.title }
                  key={ guisado._id } 
                />
              )
            :
            console.log('Not enable')
          }
          <div width='300px'></div>
        </Carousel>
      </Categories>

    </div>
      <Formulario />
      <Social />
      <Footer />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    guisados: state.guisados
  }
}

const dispatchStateToProps = {
  visibleElement,
  getSagazData
};

export default connect(mapStateToProps, dispatchStateToProps)(GuisadosContent);
