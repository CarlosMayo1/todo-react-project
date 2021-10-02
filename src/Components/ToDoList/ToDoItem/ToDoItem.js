import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./ToDoItem.module.css";
import Modal from "../../UI/Modal/Modal";
import EditTask from "../../EditTask/EditTask";

const ToDoItem = (props) => {
  const [modal, setModal] = useState();
  const [editTask, setEditTask] = useState();
  // Delete task
  const deleteTask = () => {
    setModal({
      title: "Alert!",
      message: "You are going to delete a To-Do. Are you sure?",
      close: () => setModal(null),
      accept: () => {
        props.deleteTask(props.data.id);
        setModal(null);
      },
    });
  };

  // Send task info to the modal
  const onEditTask = () => {
    setEditTask({
      id: props.data.id,
      text: props.data.text,
      close: () => setEditTask(null),
    });
  };

  return (
    <React.Fragment>
      {/* Show a delete modal before deleting the To-Do */}
      {modal && <Modal modal={modal} />}
      {/* Show a modal to edit the Td-Do selected */}
      {editTask && (
        <EditTask
          taskEdited={editTask}
          editTask={props.editTask}
          closeModal={setEditTask}
        />
      )}
      <li
        className={classes.todoItem}
        style={{ backgroundColor: props.data.background }}
      >
        <p>{props.data.text}</p>
        <span className={classes.todoItemControllers}>
          <FontAwesomeIcon icon={"times-circle"} onClick={deleteTask} />
          <FontAwesomeIcon icon={"edit"} onClick={onEditTask} />
        </span>
      </li>
    </React.Fragment>
  );
};

export default ToDoItem;
