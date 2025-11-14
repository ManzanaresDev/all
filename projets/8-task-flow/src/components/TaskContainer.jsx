import React from "react";
import Header from "./Header/Header";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";
// Composants qui contient la totalité des tâches
const TaskContainer = () => {
  return (
    <div>
      <main>
        <Header />
        <TaskInput />
        <TaskList />
        <Footer />
      </main>
    </div>
  );
};

export default TaskContainer;
