import styles from './index.less';

function NavDotItem(props) {
  let { pageIndex, onClick, item, index } = props;
  
  return (
      <li key={index} className={styles.item}>{ item.title }</li>
  );
}

export default NavDotItem;
