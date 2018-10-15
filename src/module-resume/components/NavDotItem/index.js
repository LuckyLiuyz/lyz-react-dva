import styles from './index.less';

function NavDotItem(props) {
  let { pageIndex, onClick, item, index } = props;
  
  /**
   * @method 拼接图片路径
   * @description require()参数为纯变量时，会报错：can't  require module'.'。解决方法：采用es6的模板字符串，将字符串分为三部分，并在字符串中用${}包裹变量
   */
  const getImgSrc = () =>{
      let img = item.img;
      return require(`../../assets/${img}`);
  }

  return (
      <li key={index} className={styles.item}>
        <div className={styles.imgBOx}>
          <img alt="img" src={ getImgSrc() }/>
        </div> 
        <span className={styles.itemTitle}>{ item.title }</span>
      </li>
  );
}

export default NavDotItem;
