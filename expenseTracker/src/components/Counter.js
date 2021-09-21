import {useState} from 'react';

const Counter = () =>{


   const [count, setCount] = useState(0);

   const onButtonClicked = () =>{
       setCount(count+1);
   }

    return(
        <div>

            <p>Total count is {count}</p>
            <button onClick={onButtonClicked}>Click here to update counter </button>



        </div>


    )




}


export default Counter;