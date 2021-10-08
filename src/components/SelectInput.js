function SelectInput(props) {
    return (
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <select
          className="form-select"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        >
          {props.items.map((item) => {
            if(typeof item === "object") {
              return <option value={item.value} key={item}>{item.text}</option>;
          }
          else{
            return <option value={item} key={item}>{item}</option>
          }})}
        </select>
      </div>
    );
  }
  
  export default SelectInput;