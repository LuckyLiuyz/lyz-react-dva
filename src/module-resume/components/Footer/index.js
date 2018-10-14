import styles from './index.less';

function Footer(props) {
  const { onClick } = props;
  
  return (
    <section className={styles.comWrapper}>
      <div className={styles.topArrowWrapper} onClick={onClick}>
        <span className={styles.topArrow}></span>
      </div>
    </section>
  );
}

export default Footer;
