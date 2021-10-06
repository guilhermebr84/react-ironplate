import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css"

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Footer from "../components/Footer"
import Profile from "./Profile";
import { AuthContextComponent } from "../contexts/authContext";

import React from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
// import imgTrash from "../assets/img/trash-fill.svg";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
        </Switch>
          <Route path="/profile" component={Profile} />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
