import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Import Components
import Menu from "./components/common/Menu";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Logout from "./components/Logout";
import WorkSingle from "./components/WorkSingle";
import PDFPreview from "./components/PDFPreview";
//Services
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Menu user={user} />
          <Switch>
            <Redirect exact from="/" to="/signin" />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            <Route path="/home" component={Home} />
            <Route path="/work/:id" component={WorkSingle} />
            <Route path="/pdf" component={PDFPreview} />
            <Route
              path="/blog"
              render={(props) => <Blog {...props} user={user} />}
            />
            <Route path="/not-found" component={Error} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
