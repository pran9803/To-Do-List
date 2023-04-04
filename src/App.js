import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [newtask,setnewtask]=useState("");
  const [task, set_task]=useState([]);  
  
  function addTasks(){
    
    //console.log(newtask);
    const tasktobeadded = {
      id: Math.floor(Math.random()*1000),
      value: newtask,
    };
    set_task((oldlist) => [...oldlist,task]);
    setnewtask("");
    console.log(task);
  }
  

  return (
    <div >
      <h1>To Do List</h1>
       <form>
        <input className ="inputtingtask" type='text' 
        placeholder='Add task' 
        defaultValue={newtask} 
        onChangeCapture={e => setnewtask(e.target.value)}/>
      
        <button onClick={() => addTasks()}>
          Add
        </button>

        <ul>
          {task.map(tasktobeadded =>{
            return(
              <li key={tasktobeadded.id}>
                {tasktobeadded.value}

              </li>
            )
          })}
        
        </ul>
        
       </form >


       

    </div>
  );
}

export default App;
