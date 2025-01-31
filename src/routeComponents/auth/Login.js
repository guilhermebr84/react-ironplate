import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import Footer from "../../components/Footer"
import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/profile/team/teamlist");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container-login">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <div>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
        </div>
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
        <div>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>
      </div>

      <div>
        <p></p><button type="submit" to="/team">Login!</button>

        <p></p>
        
        <Link to="/auth/signup">
          Don't have an account? Click here to signup!
        </Link>
        <p></p>
        <Link className="btn btn-lg btn-secondary mt-5" to="/">
            Back to Home...
          </Link>
      </div>
    </form>
    <Footer />
</div>
  );
}

export default Login;
