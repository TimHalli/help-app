import React, { useState } from "react";
import {Link} from "react-router-dom"
import HelpMe from "./HelpMe";


const Form = (props) => {

  const [state, setState] = useState({
    name: "",
    errorName: "Error Name",
    flagName: false,
    password: "",
    errorPass: "Error Password",
    flagPass: false,
    valid: false
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const key = target.name;

   
    if (key === "name") {
      if (value.length < 4 || value.match(/[0-9]/)) {
        setState({
          ...state,
          [key]: value,
          flagName: true,
        });
      }
      else {
        setState({
          ...state,
          [key]: value,
          flagName: false,
        });
      }
    }
    
    else if (key === "password") {
      if (value.length < 8 || !value.match(/[0-9]/)) {
        setState({
          ...state,
          [key]: value,
          flagPass: true,
        });
      }
      else {
        setState({
          ...state,
          [key]: value,
          flagPass: false,
          valid: !state.flagName ? true : false,
        });
      }
    }
  };

  const onSubmit = (event) => {
    
    // event.preventDefault();
    
    props.getParams(state.name, state.password);
    
    // state.valid
    //   ? props.history.push(`/${state.name}`)
    //   : props.history.push(`/`);
  };

  const handleClick = (event) => {
    props.getParams(state.name, state.password);
  };



  return (
    <div>
      <form onSubmit={onSubmit.bind(this)}>
        <label>
          <div style={{ color: "red" }}>
            {state.flagName ? state.errorName : null}
          </div>

          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </label>
     
        <label>
          <div style={{ color: "red" }}>
            {state.flagPass ? state.errorPass : null}
          </div>

          <input
            placeholder="Password"
            name="password"
            type="text"
            onChange={handleInputChange}
          />
        </label>
      </form>

      <Link to={state.name }>
        <input onClick={handleClick} type="submit" value="Send" />
      </Link>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
export default Form;
