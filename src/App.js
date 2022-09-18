import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Core from './core/Core';
import styles from './App.module.css';

function App() {
  return (
    <div className={ `${styles.main}` }>
      <Core></Core>
    </div>
  );
}

export default App;
