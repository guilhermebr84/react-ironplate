import TextInput from "../TextInput";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";

function ProjectForm(props) {
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
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cities
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item">SÃO PAULO/SP</a>
            </li>
            <li>
              <a className="dropdown-item">RIO DE JANEIRO/RJ</a>
            </li>
            <li>
              <a className="dropdown-item">outros</a>
            </li>
          </ul>
          <TextInput
            className="form-control"
            label="city"
            id="teamFormCity"
            name="city"
            onChange={props.handleChange}
            value={props.state.description}
          />
        </div>

        <div className="col-auto">
          <TextInput
            type="text"
            label="players"
            id="teamFormPlayers"
            name="players"
            onChange={props.handleChange}
            value={props.state.description}
          />
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

export default ProjectForm;
