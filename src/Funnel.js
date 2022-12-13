import React, { useContext } from "react";
import { dataContext,DataFilter } from "./Components/Context/DataProvider";

const Funnel = () => {
let {Data} = useContext(dataContext)
console.log(Data)

    let stage1 = DataFilter("stage1",Data)
    let stage2 = DataFilter("stage2",Data)
    let stage3 = DataFilter("stage3",Data)
    let stage4 = DataFilter("stage4",Data)
    let final = DataFilter("final",Data)

  return (
    <div className="funnel-box">
      <div className="indicators">
        <p>
          {" "}
          <span className="box1"></span> Stage1
        </p>
        <p>
          <span className="box2"></span> Stage2
        </p>
        <p>
          <span className="box3"></span> Stage3
        </p>
        <p>
          <span className="box4"></span> Stage4
        </p>
        <p>
          <span className="box5"></span> Final
        </p>
      </div>

      <svg
        width="510"
        height="287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H399L354.214 60H53.5102L0 0Z" fill="#CFB1E6" />
        <path
          d="M52.3469 60H353.051L307.102 120H106.439L52.3469 60Z"
          fill="#B88ADA"
        />
        <path
          d="M107.02 120H307.102L261.645 180H160.531L107.02 120Z"
          fill="#A063CE"
        />
        <path
          d="M160.531 180H261.735L238.469 229H186.122L160.531 180Z"
          fill="#883CC2"
        />
        <path
          d="M186.122 229H238.469L229.745 287H196.01L186.122 229Z"
          fill="#662D91"
        />
        {/* Funneel Values */}
        <text x="190" y="35" fill="black" fontSize="20px">
          {stage1}
        </text>
        <text x="190" y="95" fill="black" fontSize="20px">
          {stage2}
        </text>
        <text x="195" y="155" fill="black" fontSize="20px">
          {stage3}
        </text>
        <text x="195" y="205" fill="black" fontSize="20px">
          {stage4}
        </text>
        <text x="200" y="265" fill="black" fontSize="20px">
          {final}
        </text>
        {/* Lines */}
        <line
          x1="362"
          y1="60"
          x2="402"
          y2="60"
          stroke="black"
          strokeOpacity="1"
        />
        <line
          x1="316"
          y1="120"
          x2="356"
          y2="120"
          stroke="black"
          strokeOpacity="1"
        />
        <line
          x1="270"
          y1="182"
          x2="310"
          y2="182"
          stroke="black"
          strokeOpacity="1"
        />
        <line
          x1="247"
          y1="229"
          x2="287"
          y2="229"
          stroke="black"
          strokeOpacity="1"
        />
        {/* Lines percentage */}
        <text x="405" y="65" fill="black">
          Rate: {((stage2 / stage1) * 100).toFixed(1)}%{" "}
        </text>
        <text x="359" y="125" fill="black">
          Rate: {((stage3 / stage2) * 100).toFixed(1)}%{" "}
        </text>
        <text x="313" y="186" fill="black">
          Rate: {((stage4 / stage3) * 100).toFixed(1)}%{" "}
        </text>
        <text x="290" y="234" fill="black">
          Rate: {((final / stage4) * 100).toFixed(1)}%{" "}
        </text>
      </svg>
    </div>
  );
};

export default Funnel;

/*
formula  lowerStage / upperStage * 100 

rate -> stage1-stage2 : 73/100 * 100 = 73%
rate -> stage2-stage3 : 50/73 * 100  = 68.4%;
rate -> stage3-stage4 : 30/50 * 100  = 60%;
rate -> stage4-final  : 15/30 *100 = 50%


// viewBox="0 0 475 287" -> svg attribute
*/
