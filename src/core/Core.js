import styles from './Core.module.scss';
import NameForm from '../name-form/NameForm';
import NameList from '../name-list/NameList';
import { useState } from "react";

const Core = () => {

  const [nameState, setNameState] = useState([]);

  const nameSubmitHandler = (name) => {
    const normalized = {
      userName: name.userName,
      userAge: +name.userAge,
      id: Math.random()
    };
    let names = [...nameState];
    names.unshift(normalized);
    setNameState(names);
  };

  return (
    <div className={ `container ${styles.app}` }>
      <div className={ `${styles.main}` }>
        <NameForm onNameSubmit={ nameSubmitHandler }></NameForm>
        <NameList names={ nameState }></NameList>
      </div>
    </div>
  );
};

export default Core;