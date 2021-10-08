import { useState, useContext, useEffect } from "react";

import MatchForm from "./MatchForm";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";

function MatchEdit(props) {
  const [state, setState] = useState({
    city: "",
    addressMatch: "",
    date: new Date().toISOString().split("T")[0],
    hour: "",
    teams: [],
    pitchType: "INDOOR 5x5",
    comments: "",
    userOwnerId: ""
  });

  const { loggedInUser } = useContext(AuthContext);
  const id = props.match.params.id

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await api.get(`/matches/${id}`);
        setState({ ...response.data });
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }}
  fetchMatches();}, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.patch(`/matches/edit/${id}`, {
        ...state,
        userOwnerId: loggedInUser.user._id,
      });

      console.log(response.data);
      
      props.history.push("/profile/matches/matchcard")
     } catch (err) {
      console.error(err);
    }
  }

  return (
    <MatchForm
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Edit"
    />
  );
}

export default MatchEdit;
