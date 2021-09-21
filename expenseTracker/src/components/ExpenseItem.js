
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;




  return (
    <div className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
