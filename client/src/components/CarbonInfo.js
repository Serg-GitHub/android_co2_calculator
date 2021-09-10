import React from 'react';

const CarbonInfo = ({co2, deleteCarbonData}) => {

    const total = () => {
        const carTotal = co2.car * 0.000168
        const trainTotal = co2.train * 0.000037
        const busTotal = co2.bus * 0.000103
        const bikeTotal = co2.bike * 0
        const meatTotal = co2.meat * 10

        return  carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    }

    const handleDelete = () => {
        deleteCarbonData(co2._id)
    }

    return (
        <>
        <h2>Your stored value : {total()} metric tonnes CO2</h2>
        <div>
            <button onClick = {handleDelete}>DELETE ME!</button>
        </div>
        </>
    )
}

export default CarbonInfo;