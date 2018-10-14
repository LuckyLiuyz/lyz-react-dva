// import { Link } from 'dva/router';
import styles from './index.less';

function Header(props) {
  
  return (
    <section className={styles.headerWrapper}>
      <a href="https://github.com/Happy-LYZ">
        <img className={styles.img} src={require('../../assets/favicon.jpg')} alt="img"/>
      </a>
    </section>
  );
}

export default Header;
