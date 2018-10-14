import styles from './index.less';
import WorkItems from '../WorksItem';
import Data from '../../mock/Main/Works/mock-zh';

function Works(props) {
  
  return (
    <section className={styles.works}>
      <ul>
        <li className={styles.title}>{Data.title}</li>
        <li className={styles.worksList}>
          {
            Data.worksList.map((item, index) =>{
              return (
                <WorkItems data = {Data.worksList[index]}/>
              )
            })
          }
        </li>
      </ul>
    </section>
  );
}

export default Works;
