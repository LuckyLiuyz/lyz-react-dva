import styles from './index.less';
import { TagCloud } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式

function Skills(props) {
  let { getLanguageData } = props;
  const LanguageData = getLanguageData('Skills');
  const tags = [{
    name: `React`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Webpack`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `ES6`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `React-Router`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Redux`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Ajax`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Json`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Less`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `Git`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `SVN`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `DOM`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `antd-design`,
    value: Math.floor((Math.random() * 20)) + 400,
  },{
    name: `NPM`,
    value: Math.floor((Math.random() * 20)) + 400,
  }
];

  return (
    <section className={styles.skills}>
      <ul>
        <li className={styles.title}>{ LanguageData.title }</li>
        <li>
          <TagCloud
            data={tags}
            height={210}
          />
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

export default Skills;
