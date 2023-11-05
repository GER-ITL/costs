import React, { useState } from 'react'
import './CostItem.scss'
const costs = [
  {
      id:1,
      data: new Date(),
      description: 'Phone',
      amount: '$ 999.99',
  },
  {
      id:2,
      data: new Date(),
      description: 'MacBook',
      amount: '$ 1209.99',
  },
  {
      id:3,
      data: new Date(),
      description: 'TV',
      amount: '$ 500.00',
  },
  
  
  
]
const CostItem = (cost) => {
  const[description, setDescription] = useState(cost.description)
  const changeCost = ()=>{
    setDescription('New Cost')
    console.log(description)
  }
  return (
    <>
     <div className='outBox'>
      
      {costs.map((cost)=>{
        const month = cost.data.toLocaleString('ru-RU',{month: 'long'})
        const year = cost.data.getFullYear()
        const day = cost.data.toLocaleString('ru-RU', {day: '2-digit'})
     
        return(
         

          <div className='cost-item' key={cost.id}>
          <div className='cost-data'>
            <div>{month}</div>
            <div>{year}</div>
            <div className='day'>{day}</div>
          </div>
          <div className='cost-info'>
          <label className='cost-price'htmlFor="price">{cost.amount}</label>
          <label  htmlFor="element">{cost.description}</label>
          </div>
          <button onClick={changeCost}>Change cost</button>
        </div>
        
        )
      })}
     </div>

    </>

  )
}

export default CostItem