import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./filter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./NewExpense/ExpensesChart";

const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState("2020");



    const filterChangeHandler = selectedYear =>{
    
        
        setFilteredYear(selectedYear);

      
    }

    const filteredArray= props.items.filter(item => { return item.date.getFullYear().toString() === filteredYear});
    return(
        <>

        <ExpensesFilter selected ={filteredYear} onYearSelected = {filterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredArray}></ExpensesChart>
        <ExpensesList filteredArray={filteredArray}></ExpensesList>
        </>

    );

}

export default Expenses;