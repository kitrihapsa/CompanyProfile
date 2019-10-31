import React from 'react';

export default class  extends React.Component {
  render() {
    const {title, textbutton, image, comingSoon } = this.props
    return(
      <div className="mauto mbot-100 pbot-10vw">
        <div className="row mright-20">  
          <div className="menu-box-wrap mauto">
            <div className="menu-box">
              <div><img className="menu-icon w100" src={image} alt="logoflylist"/></div>
              <div className="box-product">
                <p className="ptop20 text-product center">{title}</p>
                <div className="center mbot-15">
                  { comingSoon ?
                    <button className="bg-white berry button-product f12">Coming Soon</button>
                    :
                    <button className="bg-third white button-product f12" >{textbutton}</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}