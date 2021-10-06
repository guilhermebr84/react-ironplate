import React from "react";
import "../assets/styles/index.css"
import Footer from "../components/Footer"
import logo1 from "../assets/styles/img/logo1.png";
import img1 from "../assets/styles/img/bg1.jpg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-home">
      <div className="text-center" src={img1}>
        <img src={logo1} alt="company logo" />
        <h1 className="bg-logo">Rivals F.C.</h1>
        <p className="bg-logo">Find Rivals and challenge them!</p>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-lg btn-primary mt-5" to="/auth/signup">
            Register Here!
          </Link>
          <label>If you don´t have a registration yet!</label>
          <p></p>
          <Link className="btn btn-lg btn-primary mt-5" to="/auth/login">
            Login Now!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
