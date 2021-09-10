import React, {} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HighChart = ({co2Data}) => {

  const options = {

    chart: {
      type: 'column',
      backgroundColor:'rgba(255, 255, 255, 0.8)'
    },
    title:{
      text:''
    },
    legend: {  
      layout:'vertical',
      align:'center',
      verticalAlign: 'top',
      floating:false
    },
  
    title: {
      text: 'C02'
    },
    series: [{   
       
      borderColor: "#257025",
      color: "#257025",
      type: "column",
      name: "C02 Footprint Parts Per Metric Tons",
      data: [
        ["Your", co2Data],
        ["Average", 0.24]
      ],
      
      
    }]
    
    
  }

  if(co2Data === 0){
    return(
      <h3>Please select some values from above</h3>
    )
    
  }

  return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    </div>
  )
}



export default HighChart;