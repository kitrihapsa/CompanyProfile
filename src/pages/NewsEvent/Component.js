import React from 'react';
import News1 from '../../assets/png/banner-event-flylist.png'
import News2 from '../../assets/png/banner-event-tchat.png'


export default class NewsEvent extends React.Component {
  render() {
    return(
      <div style={{marginBottom: '15vw'}} className="pbot-35">
        <div className="black f25 text-header"><b>News & Event</b></div>
        <div className="row">
          <div className="menu-box-wrap mauto">
            <div className="box-img-news">
              <div><img className="w100" src={News1} alt="logoflylist"/></div>
              <div className="text-product center f25 mtop-30">Flylist Merupakan Solusi Terbaik Pembelian <br/> Tiket  Pesawat Tanpa Resiko</div>
            </div>
          </div>
          <div className="menu-box-wrap mauto">
            <div className="box-img-news">
              <div><img className="w100" src={News2} alt="logoflylist"/></div>
              <div className="text-product center f25 mtop-30">T-Chat Permudah Pelanggan Setia Garuda Indonesia <br/> Grup Dalam Pembelian Tiket Pesawat</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}