const ExpenseDate = (props) =>{

const month = props.date.toLocaleString("en-US", {month:'long'});
const day = props.date.toLocaleString("en-US", {day:'2-digit'});
const year = props.date.getFullYear();

return(
    <div>
        <p>{month}</p>
        <p>
            {day}
        </p>

        <p>{year}</p>




    </div>




);





}

export default ExpenseDate;