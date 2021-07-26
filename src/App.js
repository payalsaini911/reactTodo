import React, { useState } from 'react';
import List from './List';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const App=()=>{
  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]); 
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList(" ");  
  };
  return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>TO DO LIST</h1>
                <br/>
                 <input 
                 type="text" 
                 placeholder="Add an Items"
                 value={inputList}  
                 onChange={itemEvent}/>
                 <Button className="newBtn" onClick={listOfItems}><AddIcon/></Button>
                 <ol>
                   {Items.map((val,index)=>{
                     return <List key={index} text={val} />;
                   })}
                 </ol>
            </div>
        </div>
        </>
    );
};
export default App;