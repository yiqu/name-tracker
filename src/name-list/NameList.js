import styles from './NameList.module.scss';
import NameItem from './list-item/ListItem';
import { useContext } from "react";
import NameListContext from "../core/store/names-context";

const NameList = () => {

  const nameListCtx = useContext(NameListContext);

  return (
    <div className={ `${styles.parent}` }>
      { nameListCtx.nameList.length > 0 ?
        <ul className="list-group">
          { nameListCtx.nameList.map((name, index) => {
            return <NameItem nameInfo={ name } key={ name.id }></NameItem>;
          })}
        </ul> :
        <div className='d-flex justify-content-center'>
          Name list is empty
        </div>
      }
      
    </div>
  );
};

export default NameList;