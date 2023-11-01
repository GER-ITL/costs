import React from 'react'
import CostItem from './CostItem'

const Costs = (props) => {
  return (
    <div className='costs'>
         <CostItem 
    data = {props.costs[0].data}
    description = {props.costs[0].description}
    amount = {props.costs[0].amount}
    />
    
    </div>
  )
}

export default Costs