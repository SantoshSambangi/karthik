import React, { Children } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const ButtonProps = ({ buttonContainerA, button, onClick, className }) => {
  // const {buttonContainerA,button}=props;
  return (
    <div className={styles.buttonContainer}>
      {
        <button className={classNames(styles.buttons, buttonContainerA)}>
          {button}
          {btName}
          {onClick}
          {(className = { customClass: button })}
        </button>
      }
    </div>
  );
  // props.btName=string;
};

export default ButtonProps;
