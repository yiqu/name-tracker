import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Parenthesis from '../../shared/parenthesis/Parenthesis';


const NameListContext = React.createContext({
  nameList: [],
  nameClickFn: () => () => {},
  nameSubmitFn: () => {}
});

export const NameListContextProvider = (props) => {

  const [nameState, setNameState] = useState([]);

  // Wait for DOM is painted to use portal
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  },[]);

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
  
  return (
    <>
      <NameListContext.Provider value={ {nameList: nameState, nameClickFn: removeName, nameSubmitFn: nameSubmitHandler} }>
        { props.children }
      </NameListContext.Provider>
    
      <React.Fragment>
        { domReady ? 
              ReactDOM.createPortal((<Parenthesis> {nameState.length} </Parenthesis>), document.getElementById('total-count-portal')) : undefined
            }
      </React.Fragment>
    </>
   
  );
};

export default NameListContext;