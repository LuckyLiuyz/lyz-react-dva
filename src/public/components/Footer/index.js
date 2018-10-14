import styles from './index.less';

function Footer(props) {
  const { location } = props;
  console.log(location);
  
  return (
    <div className={styles.comWrapper}>
      <div className={styles.topArrow}></div>
    </div>
  );
}

export default Footer;
