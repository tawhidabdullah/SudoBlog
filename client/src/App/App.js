import React, { Component } from "react";
import "./App.css";
import Home from "../components/pages/Home";
import Header from "../components/Header/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path={"/"} component={Home} />

              <Route exact path="/newStory" component={""} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
