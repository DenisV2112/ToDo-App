import React from 'react';
import '../components/Style-sheet/Task.css'
import { MdDelete } from 'react-icons/md';
function Task({id, texto, eliminarTarea }){
    return(
        <div className='task-container'>
            
            <div>
                
                <div className='task-text'>
                    {texto}
                 
                </div> 

                    <div className='task-info'>
                        <div className='task-progress'>
                          <progress className='' value = "0" max = "100"/> 0%
                         </div>
                         <div className='task-time'>
                             {new Date().toLocaleString()}
                          </div>
                    </div>
               
            </div>
            <div className='task-icon'
                        onClick={( )=>eliminarTarea(id)}
                         >
                         <MdDelete className='icon' />
             </div>
        </div>
        
    )
}

export default Task