import React from 'react';
import '../assets/styles/components/Social.scss';
import FbLogo from '../assets/static/facebook.svg'
import WhatsLogo from '../assets/static/whatsapp.svg'
import InstagramLogo from '../assets/static/instagram.svg'

const Social = () => {
  return (
    <div className="social">
      <h1>Siguenos en:</h1>
      <div className='social-links'>
        <a 
          className="icono-redes" 
          href="https://www.facebook.com/Sagaz-201683229891081/">
            <FbLogo className='icon'/>
          Sagaz
        </a>
        <a 
          className="icono-redes" 
          href="https://www.instagram.com/sagaz_takosu/?hl=es-la">
            <InstagramLogo className="icon icon-instagram" />
          @sagaz_takosu
        </a>
        <a 
          className="icono-redes" 
          href="https://wa.me/c/5215528947194">
            <WhatsLogo className="icon icon-whatsapp" />
          55 2894 7194
        </a>
      </div>
    </div>
  )
}

export default Social;