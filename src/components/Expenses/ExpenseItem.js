import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
   const [title,setTitle]= useState(props.title);
  const eventHandler = () =>{
    setTitle('Hey nigga')
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick = {eventHandler}>ONCLICK</button>
    </Card>
  );
}

export default ExpenseItem;