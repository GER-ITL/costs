import { useState } from "react";
import CostItem from "./components/CostItem/CostItem";
import CostsFilter from "./components/CostItem/CostsFilter";
import NewCost from "./components/NewCost/NewCost";
import './styles/App.scss'
function App() {
  

  const [costs, setCosts] = useState('')

  const addCostHandler=(cost)=>{
    setCosts(prevCosts=> {
      return[cost, ...prevCosts]
    })
    console.log(cost)
  }
  const [selectedYear, setSelectedYear] = useState('2023')
  const yearChangerHandler = (year) =>{
    setSelectedYear(year)
    console.log(year)
  }
  return (
    <>
    
      <NewCost  onAddCost={addCostHandler}/>
      <div>
      <CostsFilter year ={selectedYear} onChangeHandler = {yearChangerHandler}/>
      <CostItem costs = {costs}/>

      </div>
    </>
  );
}

export default App;