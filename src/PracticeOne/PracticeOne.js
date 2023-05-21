import React from "react";

import ButtonData from "../components/button/button";
import ButtonProps from "../components/button/ButtonProps";
import styles from "./styles.module.css";
const PracticeOne = () => {
  return (
    <div className={styles.btnContainer}>
      {ButtonData &&
        ButtonData.map((item, index) => (
          <ButtonProps
            key={index}
            button={item.button}
            buttonContainerA={item.btnContainer}
            classNamebutton1
          />
        ))}
    </div>
  );
};

export default PracticeOne;
