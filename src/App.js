
import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import TasksList from "./components/TasksList";


 function App() {
  return (
    <div>
      <div className="App">
       <Navbar />
       <h1 className="My-Tasks">My Tasks</h1>
        <li>To-do</li><li>Due Soon</li><li>In Review</li><li>Complete</li>
      </div>

      <div className="List-Tasks-Key">
       <TasksList />
      
      </div>

    </div>
  );
}
export default App