import { useState, useEffect } from "react";
import MatchEdit from "../Matches/MatchEdit";
import MatchDelete from "../Matches/MatchDelete";
import api from "../../apis/api";
import { Link } from "react-router-dom";

function MatchCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const response = await api.get("/matches");
        setMatches([...response.data]);
        console.log(matches);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMatch();
  }, []);

  return (
    <div className="border rounded p-2 shadow-sm bg-light m-2">
      {matches.map((obj) => {
        return (
          <div>
            <small className="mb-0">{obj.addressMatch}</small>
            <p style={{ fontSize: "10px" }} className="text-muted fst-italic">
              {obj.date}
            </p>

            <Link
              className="btn btn-danger btn-dark mr-3"
              to={`/profile/matches/matchedit/${obj._id}`}
            >
              Edit
            </Link>

            <Link
              className="btn btn-danger btn-danger mr-3"
              to={`/profile/matches/matchdelete/${obj._id}`}
            >
              Delete
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MatchCard;
