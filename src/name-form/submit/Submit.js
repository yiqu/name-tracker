import styles from './Submit.module.scss';

const Submit = (props) => {

  const clickHandler = (event, btnId) => {
    props.actionClick(btnId);
  };

  return (
    <div className={ `${styles.parent}` }>
      <div>
        <button type="button" className={ `btn btn-secondary ${styles.reset}` }
          onClick={ (e) => clickHandler(e, 'reset') }>Reset</button>
        <button type="button" className="btn btn-primary" disabled={ props.disabled }
          onClick={ (e) => clickHandler(e, 'submit') }>Submit</button>
      </div>
      
    </div>
  );
};

export default Submit;