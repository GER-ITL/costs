import React from 'react'
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
const CostItem = () => {

  return (
    <>
      {costs.map((cost)=>{
        return(
          <div className='cost-item' key={cost.id}>
          <div className='cost-data'><label htmlFor="data">{cost.data.toDateString()}</label></div>
          <div className='cost-info'>
          <label className='cost-price'htmlFor="price">{cost.amount}</label>
          <label  htmlFor="element">{cost.description}</label>
          </div>
          <button>Change cost</button>
        </div>
        )
      })}

    </>

  )
}

export default CostItem