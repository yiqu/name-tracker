import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Core from './core/Core';
import styles from './App.module.scss';

function App() {
  return (
    <div className={ `${styles.main} py-3` }>
      <div className={ `${styles.title}` }>
        <div className='mr-2'> Name Tracker </div>
        <div id="total-count-portal"></div>
      </div>
      <div id="error-message-portal" className='container'></div>
      <Core></Core>
    </div>
  );
}

export default App;
