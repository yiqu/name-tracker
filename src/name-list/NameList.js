import styles from './NameList.module.scss';
import NameItem from './list-item/ListItem';
import { useContext } from "react";
import NameListContext from "../core/store/names-context";

const NameList = () => {

  const nameListCtx = useContext(NameListContext);

  return (
    <div className={ `${styles.parent}` }>
      <ul className="list-group">
        { nameListCtx.nameList.map((name) => {
          return <NameItem nameInfo={ name } key={ name.id }></NameItem>;
        }) }
      </ul>
    </div>
  );
};

export default NameList;