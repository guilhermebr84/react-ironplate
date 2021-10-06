import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/api";

import LoadingSpinner from "../LoadingSpinner";

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function fetchTeams() {
      try {
        setLoading(true);
        const response = await api.get("/team");
        setTeams([...response.data]);
        setLoading(false);
        
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchTeams();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th>Name:</th>
              <th>From City:</th>
              <th>Captain:</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((teamObj) => {
              return (
                <tr
                  style={{ cursor: "pointer" }}
                  key={teamObj._id}
                  onClick={() => {
                    history.push(`/team/${teamObj._id}`);
                  }}
                >
                  <td>{teamObj.name}</td>
                  <td>{teamObj.city}</td>
                  <td>{teamObj.capitain}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TeamList;
