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
    pitchType: [],
    comments: "",
    userOwnerId:""
  });

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    setState({ ...props.state });
  }, [props.state]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.patch(`/match/edit/${props.state._id}`, {
        ...state,
        matchOwner: loggedInUser.user._id,
        teamId: props.teamId,
      });

      console.log(response.data);

      setState({
        city: "",
        addressMatch: "",
        date: new Date().toISOString().split("T")[0],
        hour: "",
        teams: [],
        pitchType: [],
        comments: "",
        userOwnerId:""
      });

      props.handleClose(false);
      props.setTaskCreated(true);
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
