import styles from './index.less';
import { TagCloud } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式

function Skills(props) {

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
        <li className={styles.title}>技能栈</li>
        <li>
          <TagCloud
            data={tags}
            height={210}
          />
        </li>
        <li className={styles.infoDesc}>
          <p>熟练掌握Ajax、Json、Dom等相关技术</p>
          <p>有一定的基于Spring MVC的JAVA后端开发经验</p>
          <p>熟悉npm、Less、Git、SVN等技术及团队协作开发工具</p>
          <p>熟练使用React + Webpack + ES6 + React-Router + Redux</p>
          <p>熟练掌握JavaScript、CSS开发,可编写符合W3C标准的高质量代码</p>
        </li>
      </ul>
      
    </section>
  );
}

export default Skills;
