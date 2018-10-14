import styles from './index.less';

function AboutMe(props) {
  
  return (
    <section className={styles.aboutMe}>
      <ul>
        <li className={styles.title}>关于我</li>
        <li className={styles.infoList}>
          <div className={styles.age}>
            <div className={styles.imgBox}>
              <img src={require('../../assets/i_age.svg')} alt="age"></img>
            </div>
            <span className={styles.infoTips}>年龄/26</span>
          </div>
          <div className={styles.edu}>
            <div className={styles.imgBox}>
              <img src={require('../../assets/i_edu.svg')} alt="edu"></img>
            </div>
            <span className={styles.infoTips}>学历/本科</span>
          </div>
          <div className={styles.site}>
            <div className={styles.imgBox}>
              <img src={require('../../assets/i_site.svg')} alt="site"></img>
            </div> 
            <span className={styles.infoTips}>坐标/北京</span>
          </div>
          <div className={styles.status}>
            <div className={styles.imgBox}>
              <img src={require('../../assets/i_status.svg')} alt="status"></img>
            </div>
            <span className={styles.infoTips}>状态/在职</span>
          </div>
        </li>
        <li className={styles.infoDesc}>
          <p>强烈的自我驱动力,代码强迫症患者</p>
          <p>三年互联网经验,两年半全职前端开发经验</p>
          <p>熟悉MV*开发,深谙自动化,模块化开发之道</p>
          <p>高效的自学能力,具备独立分析解决问题能力</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
