import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import SubNav from "./components/subNav";
import Grid from "./components/grid";
import Footer from "./components/footer";
import Grid1 from "./components/grid1";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SubNav />
        <Grid />
        <Grid1 />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
