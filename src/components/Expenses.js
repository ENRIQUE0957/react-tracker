import ExpenseItem from "./ExpenseItem";
function Expenses(props){
    return (
        <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title = {props.title} amount ={props.amount} date = {props.date}></ExpenseItem>
      <ExpenseItem title = {props.title} amount ={props.amount} date = {props.date}></ExpenseItem>
      <ExpenseItem title = {props.title} amount ={props.amount} date = {props.date}></ExpenseItem>
    </div>

        
    );
}
export default Expenses;