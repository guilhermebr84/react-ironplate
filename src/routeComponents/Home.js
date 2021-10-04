import React from "react";
import logo1 from "../assets/styles/img/logo1.png";
import { Link } from "react-router-dom";
import "../assets/styles/index.css"

function Home() {
  return (
    <div className="bg-home">
      <div className="text-center">
        <img src={logo1} alt="company logo" />
        <h1>Rivals F.C.</h1>
        <p>Find your Rival and Try to Win the Game!</p>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-lg btn-primary" to="/auth/signup">
            Signup here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
