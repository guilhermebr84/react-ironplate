import React from "react";
import logo1 from "../assets/styles/img/logo1.png";
import img1 from "../assets/styles/img/bg1.jpg"
import { Link } from "react-router-dom";
import "../assets/styles/index.css"

function Home() {
  return (
    <div className="has-bg-img">
     {/* <img className="bg-img" src={img1} alt="wp"/> */}
      <div className="text-center">
        <img src={logo1} alt="company logo" />
        <h1>Rivals F.C.</h1>
        <p>Find Rivals and challenge them!</p>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-lg btn-primary" to="/auth/signup">
            Register Here!
          </Link>
          <label>If you don´t have a registration yet!</label>
          <p></p>
          <Link className="btn btn-lg btn-primary" to="/auth/login">
            Login Now!
          </Link>
          <label></label>
        </div>
      </div>
    </div>
  );
}

export default Home;
