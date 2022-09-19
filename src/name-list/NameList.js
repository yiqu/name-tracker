import styles from './NameList.module.scss';
import NameItem from './list-item/ListItem';

const NameList = (props) => {

  const names = props.names ?? [];

  return (
    <div className={ `${styles.parent}` }>
      <ul className="list-group">
        { names.map((name) => {
          return <NameItem nameInfo={ name } key={ name.id }></NameItem>;
        }) }
      </ul>
    </div>
  );
};

export default NameList;