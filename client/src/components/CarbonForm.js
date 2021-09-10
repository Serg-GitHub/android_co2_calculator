import React, { useState } from 'react';
import Background from "./images/Background2.mp4"



const CarbonForm = ({handleCalculation,addCarbonData}) => {
    const [car, setCar] = useState(0)
    const [train, setTrain] = useState(0);
    const [bus, setBus] = useState(0);
    const [bike, setBike] = useState(0);
    const [meat, setMeat] = useState(0);
    

    
    const handleCar = (event) => setCar(event.target.value);
    const handleTrain = (event) => setTrain(event.target.value);
    const handleBus = (event) => setBus(event.target.value);
    const handleBike = (event) => setBike(event.target.value);
    const handleMeat = (event) => setMeat(event.target.value);


    const handleSubmit = event => {
        event.preventDefault();
        const values = {
            car: parseInt(car),
            train: parseInt(train),
            bus:parseInt(bus),
            bike: parseInt(bike),
            meat: parseInt(meat)
        }

        handleCalculation(values)
        setCar(0);
        setTrain(0);
        setBus(0);
        setBike(0);
        setMeat(0);
    }




    return(
        <>
        {/* <div id = "myVideo"></div>
        <video className= "my-video"

        autoPlay
        loop
        muted
        style ={{
            
        }}
       >
            <source src={Background} type="video/mp4"></source>
            
        </video> */}

        <form className= "form-style" onSubmit={handleSubmit}>
            <h2>Fill in your details</h2>
            <div className="form-label">
            <label htmlFor="car">How many kilometers do you drive a week?</label>
            <input type = "number" id= "car" min = "0" value = {car} onChange = {handleCar}></input>
            </div>
            <div className="form-label">
            <label htmlFor="train">How many kilometers do you travel by train per week?</label>
            <input type = "number" id= "train" min = "0" value={train} onChange={handleTrain}></input>
            </div>
            <div className="form-label">
            <label htmlFor="bus">How many kilometers do you travel by bus per week?</label>
            <input type = "number" id= "bus" min = "0" value= {bus} onChange = {handleBus}></input>
            </div>
            <div className="form-label">
            <label htmlFor="bike">How many kilometers do you ride your bike per week?</label>
            <input type = "number" id= "bike" min = "0" value={bike} onChange={handleBike}></input>
            </div>

            <div className="form-label">
            <label for="meat">How much meat do you eat? </label>
            <select id="meatDropdown" name="meat" value={meat} onChange={handleMeat}>
            <option value="1.5">I have meat in most meals</option>
            <option value="1">I have meat in some meals</option>
            <option value="0.5"> I am a vegetarian </option>
            <option value="0" >I am a vegan</option>
            </select>
            </div>
            
            <div className="Calculate-button">
            <button onClick={handleSubmit}> Calculate </button>
            </div>
                    
        </form>
      
    </>
    )
    

    
}   
export default CarbonForm;