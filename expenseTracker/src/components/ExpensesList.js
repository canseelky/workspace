import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {




 
    if(props.filteredArray.length === 0){
        return <h2 className="expenses-list_fallback">Oppps, no item found!</h2>;
    }



     return (
         <ul className="expenses-list">
         {props.filteredArray.map((item) => (
            <ExpenseItem
             key={item.id} 
            title={item.title} 
            amount={item.amount}
             date={item.date}
             />
         ))}
    
    </ul>
     );

}



export default ExpensesList;