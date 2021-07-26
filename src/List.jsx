import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const List=(props)=>{

    const [line,setLine]=useState(false);
    const deleteItems=(props)=>{
         setLine(true);
    } ;
    return (
    <div className="todo_style">
     <span onClick={deleteItems} ><DeleteIcon className="deletIcon"/></span>
    <li style={{ textDecoration : line?"line-through":"none"}}>{props.text}</li>
    </div>
    );
};

export default List;