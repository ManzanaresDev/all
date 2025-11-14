import React from "react";
import style from "./TaskItem.module.css";

const TaskItem = () => {
  return (
    <li className={`${style.container} ${style.default}`}>
      <div className={`${style.id} ${style.idDefault}`}>1</div>
      <div className={style.contentDefault}>Ranger ma chambre!</div>
      <button className="button-primary">X</button>
    </li>
  );
};

export default TaskItem;
