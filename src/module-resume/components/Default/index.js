import styles from './index.less';

function Default(props) {
  
  return (
    <section className={styles.default}>
      <ul>
        <li className={styles.imgLi}>
          <img src={require('../../assets/photo.png')} alt="img"></img>
        </li>
        <li>
          <p className={styles.powerWords}>生活不止眼前的苟且，还有诗和远方。</p>
        </li>
        <li className={styles.desList}>
          <p>姓名： 刘业镇</p>
          <p>职业： 前端开发工程师</p>
          <p>邮箱： Best_try@163.com</p>
        </li>
      </ul>
    </section>
  );
}

export default Default;
