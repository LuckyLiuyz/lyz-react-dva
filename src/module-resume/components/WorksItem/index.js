import styles from './index.less';

function WorksItem(props) {
  let { data } = props;

  return (
    <div className={styles.worksItem}>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
}

export default WorksItem;
