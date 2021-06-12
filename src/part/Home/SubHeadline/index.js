import React, { useEffect } from 'react'
import style from './subheadline.module.css'
import {robotsubheadline} from '../../../assets/index'
import Aos from 'aos';
import 'aos/dist/aos.css';

function SubHeadline({destination}) {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div>
      <div id={destination} className={[["jumbotron"], ["jumbotron-fluid"], style['subheadline']].join(' ')}>
        <img data-aos="fade-down-right" className={style['robot-image']} src={robotsubheadline} alt="robotImg" />
        <p data-aos="fade-right" className={style['definiton-desc']}><strong>Deffinition;</strong> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
        <br />
        <p data-aos="fade-up" className={style["team-name"]}>-weekend team</p>
        <br />
        <div className={style["circle"]}></div>
      </div>
    </div>
  )
}

export default SubHeadline
