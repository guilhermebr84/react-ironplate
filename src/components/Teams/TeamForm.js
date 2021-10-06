import { useState, useEffect } from "react";
import React from "react";
import { MultiSelect } from "react-multi-select-component";
import TextInput from "../TextInput";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import api from "../../apis/api";

function TeamForm(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await api.get("/playerslist");
        setPlayers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPlayers();
  }, []);

  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="name"
        id="teamFormName"
        name="name"
        onChange={props.handleChange}
        value={props.state.name}
      />

      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">
              From:
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              name="city"
              onChange={props.handleChange}
              value={props.state.city}
            >
              <option selected>Choose a City.</option>
              <option value="São Paulo/SP">São Paulo/SP</option>
              <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
              <option value="Porto Alegre/RS">Porto Alegre/RS</option>
              <option value="Florianópolis/SC">Florianópolis/SC</option>
              <option value="Vitória/ES">Vitória/ES</option>
              <option value="Salvador/BA">Salvador/BA</option>
            </select>
          </div>
        </div>

        <div className="col-auto">
          <select
            className="form-select"
            id="inputGroupSelect02"
            multiple
            name="players"
            onChange={props.handleChange}
            value={props.state.players}
          >
            {players.map((player) => {
              return <option value={player._id}>{player.name}</option>;
            })}
          </select>
        </div>

        <div className="col-auto">
          <TextInput
            type="text"
            label="captain"
            id="teamFormPlayers"
            name="players"
            onChange={props.handleChange}
            value={props.state.description}
          />
        </div>

        {props.loading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-100 text-end">
            <button className="btn btn-primary">Salvar</button>
          </div>
        )}

        {props.error ? <ErrorMessage /> : null}
      </div>
    </form>
  );
}

export default TeamForm;
