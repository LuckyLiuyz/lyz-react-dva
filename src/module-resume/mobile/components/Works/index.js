import styles from './index.less';
import WorkItems from './WorksItem';
import { Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function Works(props) {
  let { getLanguageData } = props;
  const LanguageData = getLanguageData(`Works`);

  return (
    <section className={styles.works}>
      <ul>
        <li className={styles.title}>{LanguageData.title}</li>
        <li className={styles.worksList}>
          <Carousel
            autoplay={true}
            infinite={true}
            autoplayInterval={3000}
            dotActiveStyle={{
              background: "#4b85a0"
            }}
          >
            {
              LanguageData.worksList.map((item, index) =>{
                return (
                  <WorkItems key={index} data={LanguageData.worksList[index]} index={index}/>
                )
              })
            }
          </Carousel>
        </li>
      </ul>
    </section>
  );
}

export default Works;
