import styles from './index.less';
import LanguageData from '../../mock/Main/Contact/mock-zh';

function Contact(props) {
  
  return (
    <section className={styles.contact}>
      <ul>
        <li className={styles.title}>{LanguageData.title}</li>
        <li className={styles.infoAlias}>
          <div className={styles.alias}>
              <span className={styles.word}>灵感</span>
              <span className={styles.word}>代码</span>
              <span className={styles.word}>梦想</span>
              <span className={styles.word}>未来</span>
          </div>
        </li>
        <li className={styles.infoDesc}>
          <p>行路有良友，便是捷径</p>
          <p>注重效率，偏爱敏捷开发</p>
          <p>喜欢尝试，期待新鲜事物</p>
          <p>既然选择了远方,便只顾风雨兼程</p>
        </li>
        <li className={styles.contactType}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Happy-LYZ">
                <img alt="" src={require("../../assets/s_github.svg")}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/u/happy_lyz">
                <img alt="" src={require("../../assets/s_sf.svg")}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/people/happy_lyz/activities">
                <img alt="" src={require("../../assets/s_zh.svg")}/>
            </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
