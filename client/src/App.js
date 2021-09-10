import CarbonForm from './components/CarbonForm';
import ChartDisplay from './components/ChartDisplay';
import carbonServices from './services/carbonServices';
import CarbonList from './components/CarbonList';
import './App.css';
import { useEffect, useState } from 'react';
import HighChart from './components/HighChart';


function App() {

  // const [co2Data, setco2Data] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    carbonServices.getCarbonData()
      .then(Carbon => setAllData(Carbon));
  }, []);

  

  const addCarbonData = () => {
    carbonServices.addCarbonData(values)
    .then(savedCarbon => {
      // setco2Data(savedCarbon)
      setAllData([...allData,savedCarbon])
    }
      
      )
  }

  const deleteCarbonData = (id) => {
    carbonServices.deleteCarbonData(id)
    setAllData(allData.filter(data => data._id !== id))
  }

 

  // const updateCarbonData = () => {
  //   carbonServices.updateCarbonData(updatedCarbonData);

  //   const updatedCarbonDataIndex = co2Data.findIndex(co2Data => co2Data._id === updatedCarbonData._id);
  //   const updatedCarbonData = [...co2Data];
  //   updatedCarbonData[updatedCarbonDataIndex] = updatedCarbonData;
  //   setco2Data(updatedCarbonData);
  // };

  const [calculation, setCalculation] = useState(0);
  const [values, setValues] = useState(0);

  const handleCalculation = (values) => {

    const carTotal = values.car * 0.000168
    const trainTotal = values.train * 0.000037
    const busTotal = values.bus * 0.000103
    const bikeTotal = values.bike * 0
    const meatTotal = values.meat * 10

    const total = carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    setCalculation(total)
    setValues(values)

  }
  return (
    
    
 <div>
    

   
  
  <header> 
    <h2>A Carbon footprint calculator, designed to help you make a positive change</h2> 
  <p>
    <div>
  </div>
  <div>
  To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per year needs to drop to under 2 tonnes by 2050.
  </div>
  <div>
  By making small changes to our daily lives, such as eating less meat, taking fewer flights and line drying our clothes, we can start to make a real change.
  </div>

</p> 
</header>
  
  <div>
    <body>
  <section>
<CarbonForm  handleCalculation = {handleCalculation} calculation = {calculation} class ="form"/>
<ChartDisplay calculation = {calculation} addCarbonData ={addCarbonData} class = "display"/>
<CarbonList co2Data = {allData} deleteCarbonData = {deleteCarbonData} class = "list"/>
<HighChart co2Data = {calculation} class = "chart"/>


</section>
</body>
</div>
<footer>
  <div>
  Codeclan cohort E50. 
  </div>
  <div>
  Developed by Blue Sky Development: 
  </div>
  <div>
  New team TBC
  </div>

  <div className="Company">

    <h3>Blue Sky Development</h3>
    <p>Funded company by obligation of CodeClan</p>
    </div>

  <div>
    <p className= "copyright"> Blue Sky Development ©2021</p>
  </div>
  <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

  </footer>
</div> 
  );
}

export default App;  



