import styles from './index.less';
import WorkItems from './WorksItem';

function Works(props) {
  const language = localStorage.getItem("language");
  const LanguageData = require(`../../locales/Main/Works/${language}.json`);

  return (
    <section className={styles.works}>
      <ul>
        <li className={styles.title}>{LanguageData.title}</li>
        <li className={styles.worksList}>
          {
            LanguageData.worksList.map((item, index) =>{
              return (
                <WorkItems key={index} data={LanguageData.worksList[index]} index={index}/>
              )
            })
          }
        </li>
      </ul>
    </section>
  );
}

export default Works;
