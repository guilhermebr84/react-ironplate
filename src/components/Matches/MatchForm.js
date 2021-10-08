import { useState, useEffect } from "react";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import api from "../../apis/api";

function MatchForm(props) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await api.get("/team/all");
        setTeams([...response.data]);
        console.log(teams);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTeams();
  }, []);

  return (
    <div className="container-match-form">
      <form onSubmit={props.handleSubmit}>

      <div className="input-group mb-3">
        <label className="input-group-text mr-3">Choose a city for the Match: </label>
        <SelectInput
          id="matchFormCity"
          name="city"
          onChange={props.handleChange}
          value={props.state.city}
          items={[
            "São Paulo/SP",
            "Rio de Janeiro/RJ",
            "Porto Alegre/RS",
            "Florianópolis/SC",
            "Vitória/ES",
            "Salvador/BA",
            "outros",
          ]}
        />
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text mr-3" >Match Adress: </label>
        <TextInput

          id="matchFormAdress"
          name="addressMatch"
          onChange={props.handleChange}
          value={props.state.adressMatch}
        />
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text mr-3">Schedule the Day: </label>
        <input
          type="date"
          id="matchFormDate"
          name="date"
          onChange={props.handleChange}
          value={props.state.date}
        />
        </div>
        
        <div className="input-group mb-3">
        <label className="input-group-text mr-3">Schedule the time: </label>
        <TextInput
          id="matchFormHour"
          name="hour"
          onChange={props.handleChange}
          value={props.state.hour}
        />
        </div>
        
        <div className="input-group mb-3">
        <label className="input-group-text mr-3">Choose the Opponent: </label>
        <SelectInput
          id="matchFormTeams"
          name="teams"
          onChange={props.handleChange}
          value={props.state.teams}
          items={teams.map((obj) => {
            return { value: obj._id, text: obj.name };
          })}
        />
        </div>
          
        <div className="input-group mb-3">
        <label className="input-group-text mr-3">Set a Pitch for the Game: </label>
        <SelectInput
          id="matchFormPitch"
          name="pitchType"
          onChange={props.handleChange}
          value={props.state.pitchType}
          items={["INDOOR 5x5", "OUTDOOR 7x7", "PROFESSIONAL 11x11"]}
        />
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text mr-3">More Details: </label>
        <TextInput
          id="matchFormComments"
          name="comments"
          onChange={props.handleChange}
          value={props.state.comments}
        />
        </div>

        <div className="mb-2">
          <button className="btn btn-primary">{props.buttonText}</button>
        </div>
      </form>
    </div>
  );
}

export default MatchForm;
