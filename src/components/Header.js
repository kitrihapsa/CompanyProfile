import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as  Link } from "react-router-dom";
import logo from '../assets/png/logo-sai.png'

class Header extends React.Component {
  render() {
    return (
      <Container fluid >
        <Row className="header">
          <Col className="headerLogo" lg="6" md="6" sm="6" xs="6">
            <div className="align-self-center">
              <img alt="Logo" src={!logo ? '' : logo} className="width-logo-sai" />
            </div>
          </Col>
          <Col className="headerMenu" lg="6" md="6" sm="6" xs="6" >
            {/* <div>
              <b style={{textAlign: 'center', fontSize: 14, color: '#292929', fontFamily: 'NunitoSans-Regular'}}>Beranda</b>
            </div>
            <div style={{marginLeft:'6vw'}}>
              <b style={{textAlign: 'center', fontSize: 14, color: '#292929', fontFamily: 'NunitoSans-Regular'}}>Blog</b>
            </div> */}
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Header