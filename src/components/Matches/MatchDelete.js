import { useState, useContext, useEffect } from "react";
import api from "../../apis/api";

function MatchDelete(props) {
  const id = props.match.params.id;

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await api.delete(`/matches/delete/${id}`);
        props.history.push("/profile/matches/matchcard");
      } catch (err) {
        console.error(err);
      }
    }
    fetchMatches();
  }, [id]);

  return <div>Delete Ok!</div>;
}

export default MatchDelete;
