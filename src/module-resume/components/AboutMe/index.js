import styles from './index.less';

function AboutMe(props) {
  let { getLanguageData } = props;
  const LanguageData = getLanguageData(`AboutMe`);

  return (
    <section className={styles.aboutMe}>
      <ul>
        <li className={styles.title}>{ LanguageData.title }</li>
        <li className={styles.infoList}>
          {
            LanguageData.infoList.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.imgBox}>
                    <img src={require(`../../assets/${item.img}`)} alt={item.img}></img>
                  </div>
                  <span className={styles.infoTips}>{item.desc}</span>
                </div>
              )
            })
          }
        </li>
        <li className={styles.descList}>
          {
            LanguageData.descList.map((item, index) =>{
              return(
                <p key={index}>{item}</p>
              )
            })
          }
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
