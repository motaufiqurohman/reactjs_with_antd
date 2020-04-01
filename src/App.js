import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
