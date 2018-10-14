import styles from './index.less';

function Header(props) {
  const { location } = props;
  console.log(location);
  
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.img} src={require('../../assets/favicon.jpg')}/>
    </div>
  );
}

export default Header;
