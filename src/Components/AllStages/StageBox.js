import React, { useContext } from "react";
import uuid from "react-uuid";
import { dataContext , DataFilter} from "../Context/DataProvider";

const StageBox = (props) => {
  let {Data} = useContext(dataContext)
    let {state} = props
  let DataCard = [
    { stageName: "stage1", count: 0 },
    { stageName: "stage2", count: 0 },
    { stageName: "stage3", count: 0 },
    { stageName: "stage4", count: 0 },
    { stageName: "stage5", count: 0 },
    { stageName: "stage6", count: 0 },
    { stageName: "final", count: 0 },
  ];
  
  DataCard.forEach(elem=> elem.count = DataFilter(elem.stageName,Data))


  let totalCount = DataCard.reduce((acc,current)=>acc+current.count,0)

  return (
    <div className="stage-box">
        {DataCard.map(item=>(<div className="stage-card" key={uuid()}>
        <div className="stage-count">{state==="number"? item.count: ((item.count/totalCount *100).toFixed(1)+"%")}</div>
        <div className="stage-name">{item.stageName}</div>
      </div>))}    
    </div>
  );
};

export default StageBox;
