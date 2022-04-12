import React ,{useState} from "react";
import './ExpensesFilter.css'
const ExpensesFilter = (props) =>{
    let [newYear,UpdatingYear] = useState('')
    const filterPick =(event) =>{
        UpdatingYear(event.target.value);
         newYear = event.target.value
        console.log(newYear)
        props.getInputData(newYear)

        
    }
    
    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label className = "expenses-filter_label">Filter by year</label>
          <select value = {props.selected} className = "expenses-filter_select" onChange={filterPick}>
            <option value='2022' >2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    
    );

};

export default ExpensesFilter;