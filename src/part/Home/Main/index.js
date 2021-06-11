import { useState, useEffect } from "react";
import axios from "axios";
import style from './main.module.css'
import {additionalImage,robotMain , helpButton} from '../../../assets/index'

function Main({povDescription, resourceDescription}) {
  const [getHelpAndTips, setGetHelpAndTips] = useState([]);

  useEffect(()=>{
    axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`)
    .then((res)=>{
      const data = res.data
      setGetHelpAndTips(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])


  return (
    <div>
      <div className={[["jumbotron"], ["jumbotron-fluid"], style['main']].join(' ')}>
        <div className="container">
          <h4 className={style["title"]}>POV</h4>
          <p className={style["description"]}>{povDescription}</p>
          <br />
          <h4 className={[style["title"], ['mt-5']].join(' ')}>Resource</h4>
          <p className={style["description"]}>{resourceDescription}</p>
          <br />
          {/* Start Help & Tips */}
          <h1 className={[style["title-help-tips"], ['mt-5']].join(' ')}>Helps & Tips</h1>
          <div className="row mt-5 justify-content-center">
          {getHelpAndTips !== undefined ? getHelpAndTips.map((item)=>{
          return (
          <>
            <div className={[["col-lg-3.5"],["mr-lg-4"], style['help-box']].join(' ')}>
              <img className={style["help-image"]} src={item.image} alt="" />
              <div className={style["bg-help-description"]}>
                <p className={style["help-description"]}>{item.title}</p>
                <button className={style["help-btn"]}>
                  <img src={helpButton} alt="" />
                </button>
              </div>
            </div>
          </>
          )
          }) : null} 
          </div>
          {/* End Help & Tips */}
          <img className={style['additional-img']} src={additionalImage} alt="" />
          <br />
          <h4 className={[style["title"], ['mt-5']].join(' ')}>You’re all set.</h4>
          <p className={style["description"]}>The wise man therefore always holds in these matters to this principle of selection.</p>
          <img className={style['robot-image']} src={robotMain} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
