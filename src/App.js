import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
export default App;


function App() {
  const handlenewtask=(e) =>{
    e.preventDefault();
    console.log(newtask);
    if(!newtask){
      alert("Enter a task..");
      return;
    }
    //console.log(item);
    //setalltask((oldList) => [...oldList,newtask]);
    //console.log(alltask);

    const test1={
      newtask
    };

    /*fetch ('http://localhost:8000/alltasks',{
      methos: 'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(test1)

    }).then(()=>{
      console.log('new task added');
    })*/


    const item={
      id: Math.floor(Math.random() * 1000),
      value: newtask
    };
    //console.log(newtask);
    console.log(item);
    //console.log(alltask);

    setalltask(oldList => [...oldList, item]);
    setnewtask("");
    console.log(alltask);

  }
  
  const handletaskdone =(id)=>{
    //alert("Yayy you did it!!");
    console.log(id);
    const newlistoftasks=alltask.filter(alltask=> alltask.id!=id);
    setalltask(newlistoftasks);
    

  }
  

  const [newtask,setnewtask]=useState("");
  const [alltask, setalltask]=useState([]);
  
  return (
    <div >
      <h1>To Do List</h1>
       <form>
        <input className ="inputtingtask" type='text' 
        placeholder='Add task' value={newtask} onChange={(e)=>setnewtask(e.target.value)}/>
                
        <button classname ="addbutton" onClick={handlenewtask}>
          Add
        </button>               
       </form> 

       

      <ul className='tasklist'>
        {
          alltask.map(item => {
            return(
              <li key={item.id} className='tasklist'><input type='checkbox' className='checkbox' onClick={()=>{handletaskdone(item.id)}}/>
                {item.value}
                {/*<input type='textbox' placeholder='notes.' className='notes'/>*/}

              </li>
            )
          })
        }
      </ul>
       
       
    </div>
  );
}