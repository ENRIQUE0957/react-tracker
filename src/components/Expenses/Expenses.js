import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import React,{useState} from 'react';

function Expenses(props) {
  const [newInputYear,newInputYearFun] = useState('2020')
 const getInputDropDown =(year) =>{
   console.log(year)
   newInputYearFun(year)
 }
  return (
    <div>
   
    
    <Card className="expenses">
    <ExpensesFilter selected = {newInputYear} getInputData = {getInputDropDown}/>
    {props.items.map((expense) =>{
      return(
      (<ExpenseItem key= {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}/>
    ))})}
   
 
  
    </Card>
  </div>
  );
}

export default Expenses;