import './ExpenseForm.css';
import {useState} from "react";


const ExpenseForm = (props) => {

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");


    const titleChangeHandler = (e) =>{
        setTitle(e.target.value);
    }

    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);


    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value);


    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
                title: title,
                amount: +amount,
                date: new Date(date)


        }
        setDate("");
        setTitle("");
        setAmount("")

        props.onSaveExpenseData(expenseData);
        props.onNotEditing();


    }

        return(
            <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                    <div className="new-expense__control">

                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}></input>

                    </div>
                    </div>

                    <div className="new-expense__controls">
                    <div className="new-expense__control">

                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}></input>

                    </div>
                    </div>

                    <div className="new-expense__controls">
                    <div className="new-expense__control">

                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date}></input>

                    </div>
                    </div>

                    <div className="new-expense__actions">
                    <button type="button" onClick={props.onNotEditing} >Cancel</button>
                        <button type="submit" >Add Expense</button>


                    </div>
            </form>
        );
}


export default ExpenseForm;