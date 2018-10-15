import styles from './index.less';

function WorksItem(props) {
  let { data, index } = props;

  return (
    <div key={index} className={styles.worksItem}>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
}

export default WorksItem;
