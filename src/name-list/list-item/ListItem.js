import styles from './ListItem.module.scss';
import DateDisplay from '../../shared/date-display/DateDisplay';


const NameItem = (props) => {

  return (
    <li className={ `list-group-item ${styles.parent}` } >
      <div>
        Name: { props.nameInfo.userName }
      </div>
      <div>
        Age: { props.nameInfo.userAge }
      </div>
      <div>
        ID: { (props.nameInfo.id+'').slice(0,5) }
      </div>
      <DateDisplay date={ props.nameInfo.date }></DateDisplay>
    </li>
  );
};

export default NameItem;