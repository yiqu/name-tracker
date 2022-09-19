import ReactDOM from "react-dom";
import React from 'react';
import styles from './Alert.module.scss';

const Alert = (props) => {

  let content =(<div className={ `alert alert-danger ${styles.parent}` } role="alert" onClick={ props.onClick }>
    { props.message } </div>);


  return (
    <React.Fragment>
      {ReactDOM.createPortal(content, document.getElementById('error-message-portal'))}
    </React.Fragment>
  );

};

export default Alert;