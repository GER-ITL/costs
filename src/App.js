import CostItem from "./components/CostItem/CostItem";
import './styles/App.scss'
const costs = [
  {
      data: new Date(),
      description: 'Phone',
      amount: '$ 999.99',
  },
  {
      data: new Date(),
      description: 'MacBook',
      amount: '$ 1209.99',
  },
  {
      data: new Date(),
      description: 'TV',
      amount: '$ 500.00',
  },
]
function App() {
  return (
    <>
    <CostItem 
    data = {costs[0].data}
    description = {costs[0].description}
    amount = {costs[0].amount}
    />
    <CostItem 
    data = {costs[1].data}
    description = {costs[1].description}
    amount = {costs[1].amount}
    />
    <CostItem 
    data = {costs[2].data}
    description = {costs[2].description}
    amount = {costs[2].amount}
    />
    </>
  );
}

export default App;
