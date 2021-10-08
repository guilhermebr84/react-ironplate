import { useState } from "react";
import { useHistory } from "react-router-dom";

import TeamForm from "./TeamForm";

import api from "../../apis/api";

function TeamCreate() {
  const [state, setState] = useState({
    name: "",
    city: "",
    players: [],
    capitain: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  function handleChange(event) {
    if (event.target.name === "players") {
      let value = Array.from(event.target.selectedOptions, option => option.value);
     return setState({ ...state, [event.target.name]: value });
    }
    return setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    api
      .post("/team", state)
      .then(() => {
        setLoading(false);
        history.push("/profile/team/teamlist");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        if (!err.response.data) {
          return setError("error");
        }

        if (err.response.data.err) {
          return setError(err.response.data.err.message);
        }
        return setError(err.response.data.msg);
      });
  }

  return (
    <div>
      <h1 className="mb-3">Create New Team</h1>
      <TeamForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        state={state}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default TeamCreate;