import React from "react";
import Products from '../../pages/Product/index' 
import NewsEvent from '../../pages/NewsEvent/Component'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div style={{backgroundColor: '#ffffff'}}>
        <div className="box-logo" style={{backgroundColor:'#f6f9ff'}}>
          <div className="parallax"></div>
        </div>
        <div style={{ height: '100%'}}>
          <div className="padding margin-header">
            <p className="primary f25 text-header"><b>Solusi Awan Indonesia</b></p>
            <p className="primary f20 center ptop15" style={{ wordSpacing: 6, fontFamily: 'NunitoSans-Regular'}}>Didirikan  pada  tahun  2018, PT. Solusi Awan Indonesia adalah perusahaan yang berspesialisasi dalam industri perjalanan <br/>yang menggunakan teknologi Informasi (TI) terkini. Kami sangat antusias membuat orang berpergian dengan sangat mudah. <br/> Layanan Solusi Awan Indonesia menjangkau berbagai bidang fungsional bisnis yang berbasis pada teknologi informasi.<br/>Mulai dari ticketing system, hingga memberikan solusi “end to end”. </p>
          </div>
          <div className="mbot-35"><Products /></div>
          <div style={{paddingBottom: 60}}><NewsEvent/></div>
        </div> 
      </div>
    )
  }
}

export default LandingPage