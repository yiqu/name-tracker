import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Core from './core/Core';
import styles from './App.module.scss';

function App() {
  return (
    <div className={ `${styles.main} py-3` }>
      <div className={ `${styles.title}` }>
        Name Tracker
      </div>
      <Core></Core>
    </div>
  );
}

export default App;
