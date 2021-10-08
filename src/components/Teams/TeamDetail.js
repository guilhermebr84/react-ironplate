import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import api from "../../apis/api"; // Instância do Axios pré-configurada

import LoadingSpinner from "../LoadingSpinner";
import ConfirmationModal from "../ConfirmationModal";
import MatchCard from "../Matches/MatchCard";
import MatchCreate from "../Matches/MatchCreate";
import MatchEdit from "../Matches/MatchEdit";

function TeamDetail(){
    const [teamDetails, setTeamDetails] = useState({
    name: "",
    city: "",
    players: [],
    capitain: ""
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [matchCreated, setMatchCreated] = useState(false);
    const [matchToUpdate, setMatchToUpdate] = useState({
    city: "",
    addressMatch: "",
    date: new Date().toISOString().split("T")[0],
    hour: "",
    teams: [],
    pitchType: "INDOOR 5x5",
    comments: "",
  });

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get(`/team/${id}`);

        setTeamDetails({ ...response.data });
        setLoading(false);

        if (matchCreated) {
          setMatchCreated(false);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id, matchCreated]);

  function handleModalClose() {
    setShowModal(false);
  }

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalConfirmation() {
    history.push(`/team/delete/${id}`);
  }

  return (
      <div>
          {loading ? (
        <LoadingSpinner />
      ) : (
        // Fragment
        <>
        <h3>{teamDetails.name}</h3>
          <div className="w-100 my-3 d-flex justify-content-end">
            <Link
              className="btn btn-sm btn-warning me-2"
              to={`/matches/edit/${id}`}
            >
              Edit
            </Link>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleModalOpen()} 
            >
              Delete
            </button>
          </div>
          <p>
            <strong>Team: </strong>
            {teamDetails.name}
          </p>
          <p>
            <strong>City: </strong>
            {teamDetails.city}
          </p>
          <p>
            <strong>Players: </strong>
            {teamDetails.players}
          </p>
          <p>
            <strong>Captain: </strong>
            {teamDetails.capitain}
          </p>
        </>
      )}

      <ConfirmationModal
        show={showModal}
        handleClose={handleModalClose}
        handleConfirmation={handleModalConfirmation}
      />
      <div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            // Limpa a tarefa a ser atualizada quando o usuário clicar em nova tarefa
            setMatchToUpdate({
              city: "",
              adressMatch: "",
              date: new Date().toISOString().split("T")[0],
              hour: "",
              teams: "",
              pitchType: "",
              comments:"",
            });

          }}
          className="btn btn-primary"
        >
          New Match
        </button>
      </div>

      {showForm ? (
        <div className="col-5">
          {matchToUpdate._id ? (
            <MatchEdit
              state={matchToUpdate}
              projectId={id}
              handleClose={setShowForm}
              setMatchCreated={setMatchCreated}
            />
          ) : (
            <MatchCreate
              projectId={id}
              handleClose={setShowForm}
              setMatchCreated={setMatchCreated}
            />
          )}
        </div>
      ) : null}


      <div className="row">
        <div className="col-4">
          <h3>Play the Game</h3>

          <div className="d-flex flex-column">
            {teamDetails.matches
              .filter((matchObj) => matchObj.status === "Scheduled")
              .map((matchObj) => (
                <MatchCard
                  key={matchObj._id}
                  matchObj={matchObj}
                  setMatchToUpdate={setMatchToUpdate}
                  setShowForm={setShowForm}
                  setMatchCreated={setMatchCreated}
                />
              ))}
          </div>
        </div>
        
      </div>



    </div>
  )}

  export default TeamDetail;