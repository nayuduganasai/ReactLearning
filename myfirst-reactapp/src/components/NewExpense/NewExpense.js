import React from "react";
import ExpenseForm from "./ExpenseForm";
import '../../CSS/NewExpense.css'

const  NewExpense = (props) =>{

    const saveExpenseDataHandler = (expenseData)=>{
        const passedExpenseData ={
                ...expenseData,
                id:Math.random().toString()
        };

       // console.log(passedExpenseData);
       props.onAddExpense(passedExpenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;