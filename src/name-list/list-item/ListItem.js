import styles from './ListItem.module.scss';
import DateDisplay from '../../shared/date-display/DateDisplay';
import { useContext } from "react";
import NameListContext from "../../core/store/names-context";

const NameItem = (props) => {

  const nameListCtx = useContext(NameListContext);

  return (
    <li className={ `list-group-item ${styles.parent}` } onClick={ nameListCtx.nameClickFn(props.nameInfo) }>
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