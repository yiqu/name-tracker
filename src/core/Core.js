import styles from './Core.module.scss';
import NameForm from '../name-form/NameForm';
import NameList from '../name-list/NameList';
import React from 'react';
import { NameListContextProvider } from "./store/names-context";


/**
 * Full states are managed within React context
 */
const Core = () => {


  return (
    <div className={ `${styles.app}` }>
      <div className={ `${styles.main}` }>

        <NameListContextProvider>

          <NameForm />

          <NameList />

        </NameListContextProvider>
        
      </div>
      
    </div>
  );
};

export default Core;