import './ExpenseForm.css'
import React,{useState} from 'react'
const ExpenseForm = (props) =>{

    const [NewTitle,SetNewTitle] = useState('')
    const titleHandleChange = (event) =>{
        SetNewTitle(event.target.value);
       
         
    }
    const [newAmount,UpdatedAmount]=useState('')
    const amountHandleChange = (event) =>{
        UpdatedAmount(event.target.value)
        console.log(UpdatedAmount)
    }

    const[newDate,newUpdatedDate]=useState('')
    const dateHandleChange = (event) =>{
        newUpdatedDate(event.target.value)
        console.log(newUpdatedDate);
    }
    const submitHandler =(event) =>{
        event.preventDefault()

        const expenses = {
            title:NewTitle,
            amount:newAmount,
            date:new Date(newDate)
        }
        props.onExpenseData(expenses)
        SetNewTitle('')
        UpdatedAmount('')
        newUpdatedDate('')
        console.log(expenses)
    }
 
    return(
        <form onSubmit ={submitHandler}>
        <div className = "new-expense__controls">
        <div className = "new-expense__control">
        <label>Title</label>
        <input type = "text" value ={NewTitle} onChange={titleHandleChange}/>
        </div>    
       <div className = "new-expense__control">
        <label>Amount</label>
        <input type = "text" value = {newAmount} min = "0.01" step ="0.01" onChange={amountHandleChange}/>
        </div> 
    <div className = "new-expense__control">
        <label>Date</label>
        <input type = "date" value = {newDate} min = "2019-01-01" max = "2022-12-31" onChange={dateHandleChange}/>
        </div>
        </div> 

        <div className = "new-expense__actions">
            <button type = "submit">add expense</button>
        </div>
        </form>
    
    
    
    )
}

export default ExpenseForm;