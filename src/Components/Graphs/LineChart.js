import React, { useContext } from 'react'
import Plot from 'react-plotly.js'
import { dataContext } from '../Context/DataProvider'


const LineChart = () => {
    let {Data,dateData} = useContext(dataContext)
  return (
    <div className='Line'>
        <h4>Data for {dateData.toUpperCase()} (Final Stage)</h4>
        <Plot
        data={
            [{
                
                x:Data.map(elem=>elem.id) ,
                y:Data.map(elem=>elem.stages.final),
                type:"scatter",
                
                }
                ]}
        layout={{
            width:1320,
            height:260,
        }}

         />
    </div>
  )
}

export default LineChart