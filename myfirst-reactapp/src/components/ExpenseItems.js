import React , {useState} from "react";

function ExpenseItem(props){

    const [title,setTitle] = useState(props.expenseTitle);


    const clickhandler = ()=>{
       setTitle('Updated !');
        console.log(title);
    }


    return(
            <div style={{backgroundColor:"skyblue", width:'200px', height:'200px'}}>
                <div>{props.expensedate.toISOString()}</div>
                <div>
                    <h2>{title}</h2>
                    <div>{props.expenseAmount}</div>
                </div>
                <button  onClick={clickhandler}>change Title</button>
            </div>
    );
}

export default ExpenseItem;