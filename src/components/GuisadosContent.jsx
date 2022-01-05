import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement, allData, resData, polloData, puercoData, verdurasData, derivadosData } from '../actions'
import Formulario from './Formulario';
import Social from './Social';
import Footer from './Footer';
import Categories from './Categories.jsx';
import Carousel from './Carousel.jsx';
import CarouselItem from './CarouselItem.jsx';
import '../assets/styles/components/GuisadosContent.scss'
import guisadosAPI from '../utils/getGuisados'

const GuisadosContent = (props) => {

  let guisadosIsEnable = props.allGuisados.length > 0 
  let resIsEnable = props.resGuisados.length > 0 
  let puercoIsEnable = props.puercoGuisados.length > 0 
  let polloIsEnable = props.polloGuisados.length > 0 
  let verdurasIsEnable = props.verdurasGuisados.length > 0 
  let derivadosIsEnable = props.derivadosGuisados.length > 0 
  let sagazData = new guisadosAPI

  if(props.allGuisados.length <= 0){
    try{
      sagazData.getSagazData()
        .then(result => {
          let sagazData = result
          let allData = [];
          let resData = [];
          let puercoData = [];
          let polloData = [];
          let verdurasData = [];
          let derivadosData = [];
          for(let n = 0; n < sagazData.data.length; n++){
            allData.push(sagazData.data[n])
          }

          allData.forEach(data => {
            if(data.type){
              let type = data.type
              console.log(type)
              type.forEach(type => {
                if(type === 'res'){
                  resData.push(data)
                }
              })
            }
          })
          allData.forEach(data => {
            let type = data.type
            if(data.type){
              type.forEach(type => {
                if(type === 'puerco'){
                  puercoData.push(data)
                }
              })
            }
          })
          allData.forEach(data => {
            let type = data.type
            if(data.type){
              type.forEach(type => {
                if(type === 'pollo'){
                  polloData.push(data)
                }
              })
            }
          })
          allData.forEach(data => {
            let type = data.type
            if(data.type){
              type.forEach(type => {
                if(type === 'vegetariano'){
                  verdurasData.push(data)
                }
              })
            }
          })
          allData.forEach(data => {
            let type = data.type
            if(data.type){
              type.forEach(type => {
                if(type === 'huevo' || type === 'salchicha'){
                  derivadosData.push(data)
                }
              })
            }
          })

          props.allData(allData)
          props.resData(resData)
          props.puercoData(puercoData)
          props.polloData(polloData)
          props.verdurasData(verdurasData)
          props.derivadosData(derivadosData)
        })

    }catch(err){
      console.log(err)
    }
  }

  const { ref, inView, entry} = useInView({
    threshold: .1,
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

      {resIsEnable
        ? 
          <Categories title='Carne de res'>
            <Carousel>
              { props.resGuisados.map(guisado =>
                <CarouselItem 
                  tab={ guisado.title.split(" ")[0] }
                  cover={ guisado.cover } 
                  description={ guisado.description } 
                  hotness={ guisado.hotness } 
                  title={ guisado.title }
                  key={ guisado._id } 
                />
                )
              }
              <div width='300px'></div>
            </Carousel>
          </Categories>
        :
          console.log('Not enable')
      }

      {puercoIsEnable
        ?
          <Categories title='Carne de puerco'>
            <Carousel>
              {
                props.puercoGuisados.map(guisado =>
                  <CarouselItem 
                    tab={ guisado.title.split(" ")[0] }
                    cover={ guisado.cover } 
                    description={ guisado.description } 
                    hotness={ guisado.hotness } 
                    title={ guisado.title }
                    key={ guisado._id } 
                  />
                )
              }
              <div width='300px'></div>
            </Carousel>
          </Categories>
        :
          console.log('Not enable')
      }

      {polloIsEnable
        ? 
          <Categories title='Carne de pollo'>
            <Carousel>
              { props.polloGuisados.map(guisado =>
                  <CarouselItem 
                    tab={ guisado.title.split(" ")[0] }
                    cover={ guisado.cover } 
                    description={ guisado.description } 
                    hotness={ guisado.hotness } 
                    title={ guisado.title }
                    key={ guisado._id } 
                  />
                )
              }
              <div width='300px'></div>
            </Carousel>
          </Categories>
        :
        console.log('Not enable')
      }

      {verdurasIsEnable
        ? 
          <Categories title='Vegetariano'>
            <Carousel>
              { props.verdurasGuisados.map(guisado =>
                 <CarouselItem 
                   tab={ guisado.title.split(" ")[0] }
                   cover={ guisado.cover } 
                   description={ guisado.description } 
                   hotness={ guisado.hotness } 
                   title={ guisado.title }
                   key={ guisado._id } 
                 />
                )
              }
              <div width='300px'></div>
            </Carousel>
          </Categories>
        :
        console.log('Not enable')
      }

      {derivadosIsEnable
        ? 
          <Categories title='Derivados'>
            <Carousel>
              { props.derivadosGuisados.map(guisado =>
                 <CarouselItem 
                   tab={ guisado.title.split(" ")[0] }
                   cover={ guisado.cover } 
                   description={ guisado.description } 
                   hotness={ guisado.hotness } 
                   title={ guisado.title }
                   key={ guisado._id } 
                 />
                )
              }
              <div width='300px'></div>
            </Carousel>
          </Categories>
        :
        console.log('Not enable')
      }

    </div>
      <Formulario />
      <Social />
      <Footer />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    allGuisados: state.allGuisados,
    resGuisados: state.resGuisados,
    puercoGuisados: state.puercoGuisados,
    polloGuisados: state.polloGuisados,
    verdurasGuisados: state.verdurasGuisados,
    derivadosGuisados: state.derivadosGuisados
  }
}

const dispatchStateToProps = {
  visibleElement,
  allData,
  resData,
  puercoData,
  polloData,
  verdurasData,
  derivadosData
};

export default connect(mapStateToProps, dispatchStateToProps)(GuisadosContent);
