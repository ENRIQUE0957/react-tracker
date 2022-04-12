import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const AddnewExpenseData = (ExpenseDataNew) => {
    const expenses = {
        ...ExpenseDataNew,
        id:Math.random.toString('')

    }
    
    props.onAddExpense(expenses)
    
    
    }
return (
<div className = "new-expense">
<ExpenseForm onExpenseData = {AddnewExpenseData}/>

</div>
)
}

export default NewExpense;