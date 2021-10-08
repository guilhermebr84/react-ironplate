import { useState, useEffect } from "react";
import ConfirmationModal from "../ConfirmationModal";
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

  async function handleDelete (matchId) {
    try {
      await MatchDelete(matchId, props.setMatchCreated);
      setMatches(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="border rounded p-2 shadow-sm bg-light m-2">
      {matches.map((obj) => {
        return (
          <div>
            <small className="mb-0">{obj.addressMatch}</small>
            <p style={{ fontSize: "10px" }} className="text-muted fst-italic">
              {obj.date}
            </p>

            <button className="btn btn-danger btn-dark mr-3" type="button">
              Edit
            </button>

            <button
              className="btn btn-danger btn-danger mr-3"
              type="button"
              onClick={props.handleDelete}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MatchCard;

{
  /* <div className="w-100 text-end">
        <i
          title="Edit"
          className="fas fa-edit text-secondary me-2"
          onClick={() => {
            props.setMatchToUpdate({ ...props.matchObj });
            props.setShowForm(true);
          }}
        ></i>
        <i
          title="Delete"
          className="fas fa-trash-alt text-danger"
          onClick={() => setShowModal(true)}
        ></i>
      </div>

      <ConfirmationModal
        show={showModal}
        handleClose={handleModalClose}
        handleConfirmation={() => handleModalConfirmation(props.matchObj._id)}
      />
    </div> */
}
