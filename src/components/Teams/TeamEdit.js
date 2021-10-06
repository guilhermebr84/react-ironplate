import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import TeamForm from "./TeamForm";

import api from "../../apis/api";

function TeamEdit() {
  const [state, setState] = useState({
    name: "",
    city: "",
    players: [],
    capitain: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function fetchTeams() {
      setLoading(true);
      try {
        const response = await api.get(`/teams/${id}`);

        setState({ ...response.data });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        if (!err.response.data) {
          return setError("Edit Loading Error");
        }

        if (err.response.data.err) {
          return setError(err.response.data.err.message);
        }
        return setError(err.response.data.msg);
      }
    }
    fetchTeams();
  }, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    api
      .patch(`/teams/${id}`, state)
      .then(() => {
        setLoading(false);
        history.push("/teams");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        if (!err.response.data) {
          return setError("Edit Submit Error");
        }

        if (err.response.data.err) {
          return setError(err.response.data.err.message);
        }
        return setError(err.response.data.msg);
      });
  }

  return (
    <div>
      <h1>Team Edit</h1>
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

export default TeamEdit;