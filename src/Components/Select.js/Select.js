import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/DataProvider'
import Week from '../Data/Weeek'
import YearData from '../Data/YearData'

const Select = () => {
    let {dateData,setDate,setData} = useContext(dataContext) 
   
    useEffect(()=>{
      if(dateData==="week")
      {
        setData(Week)
      }
      else{
        setData(YearData)
      }
    },[dateData])


    function handleChange({target})
    {
      setDate(target.value)
    }


  return (
    <div className='select-box'>
        <div className="select">
        <select name="select" className="form-select" onChange={handleChange}>
            <option value="year">This Year </option>
            <option value="week">This Month </option>
            <option value="year">Previous Month </option>
            <option value="week">This Week </option>
            <option value="year">Previous Week </option>
            <option value="week">Custom</option>
        </select>
        </div>
    </div>
  )
}
/**
 * let [dateData, setDate] = useState("year");
  let [Data, setData] = useState(YearData);
 */


export default Select