import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import classes from "./Modal.module.css";
import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.modal.close} />
      <Card>
        <div className={classes.modalHeader}>
          <span>
            <FontAwesomeIcon icon="times-circle" />
          </span>
          <h1 className={classes.modalTitle}>{props.modal.title}</h1>
        </div>
        <div className={classes.modalBody}>
          <p>{props.modal.message}</p>
        </div>
        <div className={classes.modalFooter}>
          <Button onClick={props.modal.accept}>Accept</Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Modal;
