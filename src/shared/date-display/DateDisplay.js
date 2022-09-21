import React from "react";
import styles from './DateDisplay.module.scss';
import withDateTransform from './DateTransform';

const DateDisplay = (props) => {

  let content = null;

  if (+props.date) {
    content = (
      <div className={ `${styles.parent}` }>
        {props.prefix ?? ''} { props.children }
      </div>
    );
  }

  return (
    <React.Fragment>
      { content }
    </React.Fragment>
  );

};

export default withDateTransform(DateDisplay);