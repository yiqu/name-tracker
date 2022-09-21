import React from "react";
import styles from './DateDisplay.module.scss';

const DateDisplay = (props) => {

  const date = props.children;
  console.log(date);

  return (
    <React.Fragment>
      <div className={ `${styles.parent}` }>
        { props.children }
      </div>
    </React.Fragment>
  );

};

export default DateDisplay;