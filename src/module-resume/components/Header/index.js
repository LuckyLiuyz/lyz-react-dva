// import { Link } from 'dva/router';
import styles from './index.less';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

function Header(props) {
  let { changeLanguageState, getLanguageData } = props;
  
  const language = localStorage.getItem("language");
  const LanguageData = getLanguageData(`Header`);

  return (
    <section className={styles.headerWrapper}>
      <a href="https://github.com/Happy-LYZ">
        <img className={styles.img} src={require('../../assets/favicon.jpg')} alt="img"/>
      </a>
      <Switch className={language === 'zh' ? styles.languageSwitchCN : styles.languageSwitchEN} checkedChildren={LanguageData.language.zh} unCheckedChildren={LanguageData.language.en} defaultChecked onChange={changeLanguageState}/>
    </section>
  );
}

export default Header;
