import styles from './index.less';

function Contact(props) {
  const language = localStorage.getItem("language");
  const LanguageData = require(`../../locales/Main/Contact/${language}.json`);

  return (
    <section className={styles.contact}>
      <ul>
        <li className={styles.title}>{LanguageData.title}</li>
        <li className={styles.infoAlias}>
          <div className={styles.alias}>
            {
              LanguageData.wordsList.map((item, index) =>{
                return (
                  <span key={index} className={styles.word}>{ item }</span>
                )
              })
            }
          </div>
        </li>
        <li className={styles.infoDesc}>
          {
            LanguageData.sentenceList.map((item, index) =>{
              return (
                <p key={index}>{ item }</p>
              )
            })
          }
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
