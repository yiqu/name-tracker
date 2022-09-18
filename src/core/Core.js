import styles from './Core.module.scss';
import NameForm from '../name-form/NameForm';


const Core = () => {


  return (
    <div className={ `container ${styles.app}` }>
      <div className={ `${styles.main}` }>
        <NameForm></NameForm>
      </div>
    </div>
  );
};

export default Core;