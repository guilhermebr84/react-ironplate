import { useState, useContext } from "react";

import MatchForm from "./MatchForm";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";

function MatchCreate(props) {
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

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(`/matches`, {
        ...state,
        userOwnerId: loggedInUser.user._id,
        teamId: props.teamId,
      });

      console.log(response.data);

      setState({
        city: "",
        addressMatch: "",
        date: new Date(),
        hour: "",
        name: [],
        pitchType: "",
        comments: "",
        userOwnerId: ""
      });
    //   props.handleClose(false);
      props.setMatchCreated(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <MatchForm
      value={state.pitchType}
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Schedule a Match"
    />
  );
}

export default MatchCreate;
