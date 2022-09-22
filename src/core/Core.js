import styles from './Core.module.scss';
import NameForm from '../name-form/NameForm';
import NameList from '../name-list/NameList';
import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Parenthesis from '../shared/parenthesis/Parenthesis';
import NameListContext from "./store/names-context";

const Core = () => {

   // Wait for DOM is painted to use portal
   const [domReady, setDomReady] = useState(false);

   useEffect(() => {
     setDomReady(true);
   },[]);

  const [nameState, setNameState] = useState([]);

  const nameSubmitHandler = (name) => {
    const normalized = {
      userName: name.userName,
      userAge: +name.userAge,
      id: Math.random().toString(),
      date: name.date
    };
    let names = [...nameState];
    names.unshift(normalized);
    setNameState(names);
  };

  const removeName = (name) => (event) => {
    const indexOfName = nameState.findIndex((res) => {
      return name.id === res.id;
    });

    if (indexOfName > -1) {
      let names = [...nameState];
      names.splice(indexOfName, 1);
      setNameState(names);
    }
  };

  let totalCountDomNode = (<Parenthesis> {nameState.length} </Parenthesis>);

  return (
    <div className={ `${styles.app}` }>
      <div className={ `${styles.main}` }>
        
        <NameForm onNameSubmit={ nameSubmitHandler }></NameForm>

        <NameListContext.Provider value={ {nameList: nameState, nameClickFn: removeName} }>
          <NameList names={ nameState }></NameList>
        </NameListContext.Provider>
        
      </div>
      <React.Fragment>
        { domReady ? 
          ReactDOM.createPortal(totalCountDomNode, document.getElementById('total-count-portal')) : undefined
        }
      </React.Fragment>
    </div>
  );
};

export default Core;