import React from "react";
import style from "./TaskInput.module.css";

// Ce composant affiche le champ de saissi de la tâche

const TaskInput = () => {
  return (
    <div className={`box ${style.element}`}>
      <h2 className={style.titre}>Ajoute ta tâche</h2>
      <form action="" className={style.container}>
        <input
          type="text"
          className={style.input}
          placeholder="Indiquez un titre pour la tâche"
          size="21"
        />
        <button
          type="submit"
          className="button-primary"
          style={{ marginTop: "15px" }}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
