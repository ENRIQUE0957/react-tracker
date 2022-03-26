import '../components/ExpenseItem.css'
function ExpenseItem(props) {
    return (
        <div className = "expense-item">
          
                <h2 className="expense-item">{props.title}</h2>
            
            <div className = "expense-item__description">
                <h2 >ExpenseItem</h2>
            
            <div className = "expense-item__price">
                120.99
            </div>
            </div>
            </div>
           
        




    )
}

export default ExpenseItem