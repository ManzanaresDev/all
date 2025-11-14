import React from "react";
import style from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  return (
    <div className="box">
      <h2 className={style.title}>Il te restent encore X tâches à accomplir</h2>
      <ul className={style.container}>
        <TaskItem />
      </ul>
    </div>
  );
};

export default TaskList;
