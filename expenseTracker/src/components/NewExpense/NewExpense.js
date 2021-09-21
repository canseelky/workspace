import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = useState(false);
const saveExpenseDataHandler = (enteredExpenseData) =>{

    const expenseData = {... enteredExpenseData,
    id:Math.random().toString()};
    props.addNewExpense(expenseData)
}


const startEditingHandler = () => {
    setIsEditing(true);


}
const stopEditingHandler = () =>{
    setIsEditing(false);
}




    return(

        <div className="new-expense">

            {!isEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>}

           { isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onNotEditing ={stopEditingHandler} />}
        </div>




    );



}


export default NewExpense;