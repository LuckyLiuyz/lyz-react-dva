import styles from './index.less';
import NavDotItem from './NavDotItem';

function NavDot(props) {
  let { pageIndex, onClick, getLanguageData } = props;
  const LanguageData = getLanguageData(`NavDot`);

  return (
    <section className={styles.navDot}>
      <ul className={styles.dotList}>
      {
          LanguageData.dotList.map((item, index) => {
            return(
              <NavDotItem key={index} {...props} item={item} pageIndex={pageIndex} onClick={onClick}/>
            )
          })
        }
      </ul>
    </section>
  );
}

export default NavDot;
