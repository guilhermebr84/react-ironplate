import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import Footer from "../../components/Footer";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "", age: "", position: "" });
      props.history.push("/auth/login");
      console.log(response);
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
      <div className="container-sign">
        <form onSubmit={handleSubmit}>
          <h1>Signup!</h1>

          <div>
            <label htmlFor="signupFormName">Name</label>
            <div>
              <input
                type="text"
                name="name"
                id="signupFormName"
                value={state.name}
                error={errors.name}
                onChange={handleChange}
              />
            </div>
          </div>

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
            <label htmlFor="signupFormAge">Age</label>
            <div>
              <input
                type="text"
                name="age"
                id="signupFormAge"
                value={state.age}
                error={errors.age}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="signupFormPosition">Position</label>
            <div>
              {/* <input
                type="text"
                name="position"
                id="signupFormPosition"
                value={state.position}
                error={errors.position}
                onChange={handleChange}
              /> */}
              <select
                type="text"
                name="position"
                id="signupFormPosition"
                value={state.position}
                error={errors.position}
                onChange={handleChange}
              >
                <option>Position:</option>
                <option value="GOALKEEPER">GOALKEEPER</option>
                <option value="DEFENSE">DEFENSE</option>
                <option value="MIDFIELDER">MIDFIELDER</option>
                <option value="ATTACK">ATTACK</option>
              </select>
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
              <div className="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Must have one upper case letter, a symbol and a number
                </span>
              </div>
            </div>
          </div>

          <div>
            <p></p>
            <button type="submit" className="btn btn-primary" to="/login">
              Resgiter Now!
            </button>
            <p></p>
          </div>
        </form>
        <Link to="/auth/login">
          Already have an account? Click here to login.
        </Link>
        <p></p>
        <Link className="btn btn-lg btn-secondary mt-3" to="/">
          Back to Home...
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
