import React, {useState} from "react";
import '../components/Style-sheet/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);

    }

    const manejarEnvio = e =>{
        e.preventDefault();
        console.log("Sending form");
         const newTask ={
             id: uuidv4(),
             texto: input
         }
         props.onSubmit(newTask);
    }

    return(
        <form className="task-form"
        onSubmit={manejarEnvio}>
            <input className="task-input" 
            type='text' 
            placeholder='Write a Task' 
            name='texto'
            onChange={manejarCambio}
            />
            
            <button className="task-button">
                +
            </button>
        </form>
    )
}

export default TaskForm;