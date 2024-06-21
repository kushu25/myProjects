import { useState } from "react";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      details: "Doctors Appointment",
      day: "Feb 2nd at 2:30 PM",
    },
    {
      id: 2,
      details: "Meeting with Team",
      day: "Today at 9:00 AM",
    },
    {
      id: 3,
      details: "Food Shopping",
      day: "Tomorrow at 12:00 PM",
    },
  ]);
  return (
    <div className="container">
      <Header />
      <TaskSection tasks={tasks} />
    </div>
  );
}

export default App;
