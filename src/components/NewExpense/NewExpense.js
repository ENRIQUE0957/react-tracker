import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formrenderValue,UpdateForm]= useState(false)
    const AddnewExpenseData = (ExpenseDataNew) => {
    const expenses = {
        ...ExpenseDataNew,
        id:Math.random.toString('')

    }
    
    props.onAddExpense(expenses)
    UpdateForm(false)
    
    }
     
    const changeForm = () =>{
        UpdateForm(true)
    }

    const cancelForm = () =>{
        UpdateForm(false)
    }
 
    
    
return (

<div className = "new-expense">
{!formrenderValue &&<button onClick={changeForm}>add new Expense</button>}
{formrenderValue &&<ExpenseForm onExpenseData = {AddnewExpenseData} stopEditing = {cancelForm}/>}
</div>


)
}

export default NewExpense;