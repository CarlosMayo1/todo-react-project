import React, { useState } from "react";

import classes from "./ToDoForm.module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const ToDoForm = (props) => {
  const [modal, setModal] = useState();
  const [userInput, setUserInput] = useState("");

  const onInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0) {
      // Add informatio to the modal
      return setModal({
        title: "Error!",
        message: "Please add a task!",
        close: () => setModal(null),
        accept: () => setModal(null),
      });
    }

    props.addTask(userInput);
    setUserInput("");
  };

  return (
    <React.Fragment>
      {modal && <Modal modal={modal} />}
      <form className={classes.todoForm} onSubmit={onSubmitFormHandler}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={onInputChangeHandler}
          value={userInput}
          autoFocus
        />
        <Button type="submit">Add</Button>
      </form>
    </React.Fragment>
  );
};

export default ToDoForm;
