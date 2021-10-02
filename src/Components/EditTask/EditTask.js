import React, { useState } from "react";

import classes from "./EditTask.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const EditTask = (props) => {
  const [userInput, setUserInput] = useState(props.taskEdited.text);

  const onChangeInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const todoData = {
    id: props.taskEdited.id,
    text: userInput,
  };

  const onSubmitEditForm = (e) => {
    e.preventDefault();
    props.editTask(todoData);
    props.closeModal(null);
    setUserInput("");
  };

  return (
    <React.Fragment>
      <Backdrop onClick={props.taskEdited.close} />
      <Card>
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>Edit To-Do</h2>
        </div>
        <div className={classes.modalContent}>
          <form className={classes.editForm} onSubmit={onSubmitEditForm}>
            <input
              type="text"
              className="form-input"
              placeholder="Add a task"
              name="text"
              value={userInput}
              onChange={onChangeInputHandler}
            />
            <Button type="submit">Accept</Button>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default EditTask;
