import React from 'react'
import './CostItem.scss'

const CostItem = (props) => {

  return (
    <div className='cost-item'>
      <div className='cost-data'><label htmlFor="data">{props.data.toDateString()}</label></div>
      <div className='cost-info'>
      <label className='cost-price'htmlFor="price">{props.amount}</label>
      <label  htmlFor="element">{props.description}</label>
      </div>

    </div>
  )
}

export default CostItem