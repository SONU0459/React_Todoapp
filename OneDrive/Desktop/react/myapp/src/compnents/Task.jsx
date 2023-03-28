import React from 'react';

function Task({Title,des,delt,index}) {
  return (
    <> 
    <div className='task'>
       <div>
        <p>{Title}</p>
        <br/><hr/><br/>
         <span>{des}</span>
       </div>

       <button onClick={()=> delt(index)}>-</button>
    </div>
    </>
  );
}

export default Task;
