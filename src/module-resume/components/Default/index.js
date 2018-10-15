import styles from './index.less';

function Default(props) {
  const language = localStorage.getItem("language");
  const LanguageData = require(`../../mock/Main/Default/mock-${language}.json`);

  return (
    <section className={styles.default}>
      <ul>
        <li className={styles.imgLi}>
          <img src={require('../../assets/photo.png')} alt="img"></img>
        </li>
        <li>
          <p className={styles.powerWords}>{ LanguageData.powerWords }</p>
        </li>
        <li className={styles.desList}>
          <p>{ LanguageData.desList.name }</p>
          <p>{ LanguageData.desList.profession }</p>
          <p>{ LanguageData.desList.mailBox }</p>
        </li>
      </ul>
    </section>
  );
}

export default Default;
