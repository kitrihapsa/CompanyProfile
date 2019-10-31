import React from 'react';
import LogoFlylist from '../../assets/svg/logo-flylist.svg'
import LogoTchat from '../../assets/svg/logo-tchat.svg'
import LogoAeroaja from '../../assets/svg/logo-aeroaja.svg'
import LogoAsita from '../../assets/svg/logo-asitaaja.svg'
import Products from './Component'

export default class extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:'#259eb9', paddingRight:25}} className="mauto"> 
        <div className="white f25 text-header" style={{paddingTop:'6vw'}}><b>Our Product</b></div>
        <div className="row mright-20">
          <Products image={LogoFlylist} title={'Flylist'} textbutton={'View Product'}/>
          <Products image={LogoTchat} title={'T-Chat'} textbutton={'View Product'}/>
          <Products comingSoon={true} image={LogoAeroaja} title={'Aeroaja'} textbutton={'Coming Soon'}/>
          <Products comingSoon={true} image={LogoAsita} title={'Asitaaja'} textbutton={'Coming Soon'}/>
        </div>
      </div>
    )
  }
}