import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Core from './core/Core';
import styles from './App.module.scss';

function App() {

  const title = 'Name Tracker';


  return (
    <div className={ `container ${styles.main} py-3` }>
      <div className={ `${styles.title}` }>
        <div className='mr-2'> {title} </div>
        <div id="total-count-portal"></div>
      </div>
      <div id="last-error-occured-node" className='d-flex justify-content-center'></div>
      <div id="error-message-portal"></div>
      <Core></Core>
    </div>
  );
}

export default App;
