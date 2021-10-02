import React from "react";

import classes from "./ToDoList.module.css";
import modalClass from "./ToDoItem/ToDoItem.module.css";
import ToDoItem from "./ToDoItem/ToDoItem";

const ToDoList = (props) => {
  const ToDos = props.tasks.map((task) => (
    <ToDoItem
      key={task.id}
      data={task}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
    />
  ));

  let content = (
    <p className={classes.todoListEmpty}>
      There aren't any tasks, do you want to add one?
    </p>
  );

  return (
    <ul className={`${classes.todoList} ${modalClass.modalContainer}`}>
      {ToDos.length > 0 ? ToDos : content}
    </ul>
  );
};

export default ToDoList;
