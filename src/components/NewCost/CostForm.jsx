import React, { useState } from 'react'
import './CostForm.scss'

const CostForm = (props) => {
    const[inputName, setInputName]= useState('')
    const[inputAmount, setInputAmount]= useState('')
    const[inputDate, setInputDate]= useState('')
    const changeHandler= (event)=>{
     
        setInputName(event.target.value)
    }
    const amountChangeHandler= (event)=>{

         setInputAmount(event.target.value)
   
     }
     const dateChangeHandler= (event)=>{

         setInputDate(event.target.value)
     }
      const submitHandler = (event)=>{
        event.preventDefault()
        const costData = {
            name: inputName,
            amount:inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
      }
  return (
    <form onSubmit={submitHandler}>
        <div className='cost-form'>
            <div className='cost-control'>
                <label htmlFor="name">Label</label>
                <input type="text" value={inputName} onChange={changeHandler}/>
            </div>
            <div className='cost-control'>
                <label htmlFor="name">Amount</label>
                <input type="number" min='0.01' step='0.01' value={inputAmount}  onChange={amountChangeHandler}/>
            </div>
            <div className='cost-control'>
                <label htmlFor="name">Date</label>
                <input type="date" min='2019-01-01'step='2023-11-04' value={inputDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost_actions">
                <button type='submit'>Add Cost</button>
                <button>Cancel</button>
            </div>
        </div>
    </form>
  )
}

export default CostForm