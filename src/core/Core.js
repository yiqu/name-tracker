import styles from './Core.module.scss';
import NameForm from '../name-form/NameForm';
import NameList from '../name-list/NameList';
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Parenthesis from '../shared/parenthesis/Parenthesis';


const Core = () => {

  const [nameState, setNameState] = useState([]);

  const nameSubmitHandler = (name) => {
    const normalized = {
      userName: name.userName,
      userAge: +name.userAge,
      id: Math.random().toString()
    };
    let names = [...nameState];
    names.unshift(normalized);
    setNameState(names);
  };

  let totalCountDomNode = (<Parenthesis> {nameState.length} </Parenthesis>);

  return (
    <div className={ `${styles.app}` }>
      <div className={ `${styles.main}` }>
        <NameForm onNameSubmit={ nameSubmitHandler }></NameForm>
        <NameList names={ nameState }></NameList>
      </div>
      <React.Fragment>
        { document.getElementById('total-count-portal') ? 
          ReactDOM.createPortal(totalCountDomNode, document.getElementById('total-count-portal')) : undefined
        }
      </React.Fragment>
    </div>
  );
};

export default Core;