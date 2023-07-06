import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const UsersList = (props)=>{



    return(
        <Card className = {classes.users}>
        <ul style={{...classes.users.ulist}}>
            {props.users.map(user =>
            <li style={{...classes.users.litem}} key={Math.random().toString()}>
                {user.name} ({user.age} years old)
            </li>
            )
            };
            
        </ul>
        </Card>

    );
}

export default UsersList;