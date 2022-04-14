
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './Expenses.list';
import ExpensesChart from './ExpensesChart'
import React, { useState } from 'react';

function Expenses(props) {
  const [newInputYear, newInputYearFun] = useState('2020')
  
  const getInputDropDown = (year) => {
    
    console.log(year)
    newInputYearFun(year)
   
    
  }

  const filteredArray = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === newInputYear;
  
  
 
  })
  
  
  

  
   

  return (
    <ul>


      <Card className="expenses">
        <ExpensesFilter selected = {newInputYear} getInputData={getInputDropDown} />
        
        <ExpensesChart expenses = {filteredArray}/>
        <ExpenseList items ={filteredArray}/>
        



      </Card>
    </ul>
  );

}
export default Expenses;