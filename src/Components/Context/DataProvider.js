import { createContext, useState } from "react";
import Week from "../Data/Weeek";
import YearData from "../Data/YearData";
export let dataContext = createContext(null);

export default function DataProvider({ children }) {
  let [dateData, setDate] = useState("year");
  let [Data, setData] = useState(YearData);
 
  return (
    <dataContext.Provider value={{ Data, dateData, setData, setDate,DataFilter }}>
      {children}
    </dataContext.Provider>
  );
}

export function DataFilter (item,array){
    return  array.reduce((acc,current)=>acc + current.stages[item],0)
   }
