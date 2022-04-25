import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../components/Style-sheet/TasksList.css';


function TasksList( ) {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
       
       if(task.texto.trim()) { 
           task.texto = task.texto.trim();
           const tasksUpdate =[task,...tasks];
            setTasks(tasksUpdate);
       }
    }
    const eliminarTarea = id =>{
        const tasksUpdate = tasks.filter(task => task.id !== id);
        setTasks(tasksUpdate);
    }
    return(
        <>
          <TaskForm onSubmit={addTask} />
          <div className="tasks-list-container"> 
           {
            tasks.map((task) =>
                <Task 
                key={task.id}
                id={task.id}
                texto ={task.texto} 
                eliminarTarea ={eliminarTarea}
                />
               
            )
           }
          </div>
        </>
    );
}

export default TasksList;