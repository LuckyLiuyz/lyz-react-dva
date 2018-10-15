import styles from './index.less';
import NavDotItem from '../NavDotItem';
import Data from '../../mock/Main/NavDot/mock-zh'

function NavDot(props) {
  let { pageIndex, onClick } = props;

  return (
    <section className={styles.navDot}>
      <ul className={styles.dotList}>
      {
          Data.dotList.map((item, index) => {
            return(
              <NavDotItem key={index} {...props} item={item} index={index}/>
            )
          })
        }
      </ul>
    </section>
  );
}

export default NavDot;
