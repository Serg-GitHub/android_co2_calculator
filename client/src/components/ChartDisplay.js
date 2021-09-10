import React from 'react';

const ChartDisplay = ({calculation, addCarbonData, updateCarbonData}) => {
if (!calculation){
    return (
        
        <h2>Please enter your data</h2>
    )

}

const handleSave = () => {
    addCarbonData()
    
} 




return (
    <div>
        <h3> Here is your total: </h3>
        <h2>{calculation}</h2>
        <button onClick={handleSave}> Save your entry </button> 
        <div>
        </div>
    </div>


)};

export default ChartDisplay;