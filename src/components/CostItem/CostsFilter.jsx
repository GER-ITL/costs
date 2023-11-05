import React from 'react'
import './CostsFilter.scss'
const CostsFilter = (props) => {
  const yearChangeHandler = (event)=>{
    props.onChangeHandler(event.target.value)
  }
  return (
    <div>
        <div className="costs-filter">
            <div className="costs-filter_control">
              <label htmlFor="cost">Filter by year</label>
              <select value={props.year} onChange={yearChangeHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
        </div>
    </div>
  )
}

export default CostsFilter