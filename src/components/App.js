import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "./Home";
import Login from "./Login";
import VideoLib from "./VideoLib";
import Schedule from "./Schedule";
import Trainings from "./Trainings";
import PrivateRoute from "./PrivateRoute";
import Events from "./Events";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/videos" component={VideoLib} />
            <PrivateRoute exact path="/schedule" component={Schedule} />
            <PrivateRoute exact path="/trainings" component={Trainings} />
            <PrivateRoute exact path="/events" component={Events} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
