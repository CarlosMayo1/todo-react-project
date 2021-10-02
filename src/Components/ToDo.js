import React, { useReducer } from "react";

import classes from "./ToDo.module.css";
import ToDoForm from "./ToDoForm/ToDoForm";
// import { assignments } from "./Assignments";
import ToDoList from "./ToDoList/ToDoList";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIT_TODO",
};

// Add a randomColor
const randomBackgroundColor = () => {
  let x, y, z, random_color;
  x = Math.round(Math.random() * 256);
  y = Math.round(Math.random() * 256);
  z = Math.round(Math.random() * 256);
  random_color = "rgb(" + x + "," + y + "," + z + ")";
  return random_color;
};

const reduce = (todos, action) => {
  const updatedTasks = [...todos];
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      updatedTasks.unshift({
        id: Math.random(),
        text: action.payload.text,
        background: randomBackgroundColor(),
      });
      return updatedTasks;
    case ACTIONS.DELETE_TODO:
      const newArr = updatedTasks.filter(
        (todo) => todo.id !== action.payload.id
      );
      return newArr;

    case ACTIONS.EDIT_TODO:
      updatedTasks.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
      return updatedTasks;
    default:
      break;
  }
};

const ToDo = (props) => {
  const [state, dispatch] = useReducer(reduce, []);

  // Add a new Task
  const onAddTaskHandler = (task) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: task } });
  };

  // Delete a task
  const onDeleteTaskHandler = (taskId) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: taskId } });
  };

  const onSaveEditedTaskHandler = (editTask) => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: editTask.id, text: editTask.text },
    });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.containerHeader}>What's the plan for today?</h2>
      <ToDoForm showModal={props.showModal} addTask={onAddTaskHandler} />
      <ToDoList
        tasks={state}
        deleteTask={onDeleteTaskHandler}
        editTask={onSaveEditedTaskHandler}
      />
    </div>
  );
};
export default ToDo;
