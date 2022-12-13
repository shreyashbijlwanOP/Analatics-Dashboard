import React, {  useState } from "react";
import StageBox from "./StageBox";
const Buttons = () => {
  let [state, setState] = useState("number");
  function HandleClick(text)
  {
        setState(text);
  }

  return (

      <div className="main-content">
      <div className="btn-group" role="group" aria-label="...">
        <div className="btn" 
        name="number"
        style={{backgroundColor:state === "number" ? "#FF914D":"grey",color:"white" }}
        onClick={()=>{HandleClick("number")}}
        >
          <small>Numbers</small>
        </div>
        <div className="btn" 
        name="percent"
        style={{backgroundColor:state === "percent" ? "#FF914D":"grey",color:"white" }}
        onClick={()=>{HandleClick("percent")}}
        >
          <small>percentage</small>
        </div>
      </div>

        <StageBox state={state}/>
      </div>

  );
};

export default Buttons;
// #fd7e14
