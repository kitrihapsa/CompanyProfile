import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home/Component"

class RootComponent extends React.PureComponent {
  
  componentWillMount() {

  }

  render() {
    return(
      <Router>
        <div fluid style={{ margin: 0, padding: 0, backgroundColor: "#259eb9" }}>
          <div style={{display: "flex", flexDirection: "column", marginBottom: 0 }}>
            <div className="containerHeader" fluid style={{ minHeight: "5vh",  backgroundColor: "#FFFFFF", paddingTop: 20,paddingBottom: 20, marginBottom: 0, paddingRight:'5vw', paddingLeft:'5vw' }}>
              <Header />
            </div>
            <div fluid tyle={{ minHeight: "90vh",paddingRight:'5vw', paddingLeft:'5vw', overview: 'hiden' }}>
              <Home />
            </div>
            <div fluid style={{ minHeight: "1vh",marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
export default RootComponent