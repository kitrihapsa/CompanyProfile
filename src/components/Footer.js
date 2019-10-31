import React from "react";
import Email from '../assets/svg/icon-email.svg'
import map from '../assets/svg/icon-map.svg'
import Phone from '../assets/svg/icon-phone.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#259eb9'}} className="margin-footer">
        <div className="row">
          <div className="margin-row-footer" style={{paddingLeft: '5.5vw'}}>
            <div className="box-img-fot row">
              <img src={map} alt="email" style={{width: 22}}/><span className="text-footer mleft-25">Visit Us</span>
            </div><br/>
            <div style={{marginLeft: '2vw'}}>
              <p className="text-footer2"> 
                Menara MTH 11th Floor. <br/>
                Jl. Letjen. MT. Haryono <br/>
                Kav 23 Jakarta 12820
              </p>
            </div>
          </div>
          <div className="margin-row-footer">
            <div className="box-img-fot">
              <img src={Email} alt="email" style={{width: 25}}/><span className="text-footer mleft-25">Email Us</span>
            </div><br/>
            <div style={{marginLeft: '3.6vw'}}>
              <p className="text-footer2">support@solusiawanindonesia.com</p>
            </div>
          </div>
          <div className="margin-row-footer">
            <div className="box-img-fot">
              <img src={Phone} alt="email" style={{width: 25}}/><span className="text-footer mleft-25">Call Us</span>
            </div><br/>
            <div style={{marginLeft: '3.5vw'}}>
              <p className="text-footer2">P +62 21 8378 2445 <br/>F +62 21 8378 2447 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

