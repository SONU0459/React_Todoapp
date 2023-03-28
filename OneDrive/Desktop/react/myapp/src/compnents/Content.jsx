import React,{useEffect,useState} from 'react';
  import Task from './Task';

export default function Content() {

 const L = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] =useState(L);
  const [title,setTitle] = useState("")
  const [des ,setDes] = useState("");
   
  const sub = (e) => {
    e.preventDefault();

    setTasks([...tasks,{title,des}])

    localStorage.setItem("tasks",JSON.stringify(tasks))
    setTitle("")
    setDes("")

  }

  function delt (index) {

    const f = tasks.filter((val,i)=>{

      return i!==index;

    });

    setTasks(f);
    
  };

  useEffect(() => {
    
    localStorage.setItem("tasks",JSON.stringify(tasks))

  }, [tasks]);
   
   
  return (
    <div className='content'>
     
    <h1>Daily Assignment</h1>
    <form onSubmit={sub} >

           <input type="text" placeholder='Name of Assignment..' required
           value = {title}

           onChange = {(e) => setTitle(e.target.value)}
           />

            <textarea placeholder='Descripion...' required

          value = {des}

           onChange = {(e) => setDes(e.target.value)}
           
           ></textarea>

           <button type='submit'>ADD</button>
          

    </form>
   
    {tasks.map((item,index) =>(
     <Task key = {index} Title = {item.title} des = {item.des} index = {index} delt = {delt} />
   ) )}
    
    </div>
  );
     
    
  
}
