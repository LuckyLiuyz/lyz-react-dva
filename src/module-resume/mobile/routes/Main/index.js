import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import NavDot from '../../components/NavDot';
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Default from '../../components/Default';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Skills from '../../components/Skills';
import Works from '../../components/Works';

function Main(props) {
  let { dispatch, app, getLanguageData } = props;

  /**
   * @method 统一处理滚轮滚动事件
   */
  let timer = 0;
  const wheel = (event) => {
    clearTimeout(timer);
    timer = setTimeout(function(){
      var delta = 0;
      event = !event ? window.event : event;
      if (event.wheelDelta) { //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        if (window.opera) {
          delta = - delta; //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
        }
      } else if (event.detail) { //FF浏览器使用的是detail,其值为“正负3”
        delta = - event.detail / 3;
      }
      if (delta){
        console.log('delta', delta);
        if (delta < 0) { //向下滚动
          turnNext('down');
        } else { //向上滚动
          turnNext('top');
        }
      }
    }, 150);
  }
  //判断鼠标滚轮滚动方向
  if (window.addEventListener){ //FF,火狐浏览器会识别该方法
    window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel; //W3C
  
  /** 
   * @method 进入下/上一页
   * @param {string} type,滚轮的滚动方向; 不传则表示点击事件
   */
  const turnNext = (type, pageIndex) =>{
    let index = 0;
    if(Number.isInteger(pageIndex)){
      index = pageIndex; // 点击右侧dot跳转
    }else{
      pageIndex = app.pageIndex;
      if(type === 'top'){
        if(pageIndex === 0){
          index = 4;
        }else{
          index = pageIndex - 1;
        }
      }else if(type === 'down'){
        if(pageIndex === 4){
          index = 0;
        }else{
          index = pageIndex + 1;
        }
      }else{// 点击底部箭头跳转
        if(pageIndex === 4){
          index = 0;
        }else{
          index = pageIndex + 1;
        }
      }
    }
    dispatch({
      type: 'app/changeState',
      payload:{
        pageIndex: index
      }
    })
  }
  
  /**
   * @method 根据pageIndex返回相应的页面
   * pageList: [
   *   'Default', 'AboutMe', 'Skills', 'Works', 'Contact'
   * ]
   */
  const getContent = () =>{
    if(app.pageIndex === 1){
      return <AboutMe getLanguageData={getLanguageData}/>
    }else if(app.pageIndex === 2){
      return <Skills getLanguageData={getLanguageData}/>
    }else if(app.pageIndex === 3){
      return <Works getLanguageData={getLanguageData}/>
    }else if(app.pageIndex === 4){
      return <Contact getLanguageData={getLanguageData}/>
    }else{
      return <Default getLanguageData={getLanguageData}/>
    }
  }

  /**
   * @method 切换语言
   */
  const changeLanguageState = () =>{
    let language = app.language ? app.language : 'zh_CN';
    if(language === 'zh_CN'){
      language = 'en_US';
    }
    dispatch({
      type: 'app/changeLanguageState',
      payload:{
        language
      }
    })
  }

  return (
    <div className={styles.mainWrapper}>
      <Header getLanguageData={getLanguageData} changeLanguageState={changeLanguageState}/>
      {/* <NavDot getLanguageData={getLanguageData} pageIndex={app.pageIndex} onClick={turnNext}/> */}
      <div className={styles.content}>
        { getContent() }
      </div>
      <Footer getLanguageData={getLanguageData} onClick={turnNext}/>
    </div>
  );
}

Main.propTypes = {

};

function mapStateToProps(state) {
  console.log('mapStateToProps state', state);
  return {
    app: state.app,
    getLanguageData: function(route){
        const language = localStorage.getItem("language");
        const LanguageData = require(`../../locales/Main/${route}/${language}.json`);
        return LanguageData;
    }
  };
}
export default connect(mapStateToProps)(Main);
