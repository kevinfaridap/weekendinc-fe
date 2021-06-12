import React from 'react'
import style from './subheadline.module.css'
import {robotsubheadline} from '../../../assets/index'

function SubHeadline({destination}) {
  return (
    <div>
      <div className={[["jumbotron"], ["jumbotron-fluid"], style['subheadline']].join(' ')}>
        <img className={style['robot-image']} src={robotsubheadline} alt="robotImg" />
        <p id={destination} className={style['definiton-desc']}><strong>Deffinition;</strong> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
        <br />
        <p className={style["team-name"]}>-weekend team</p>
        <br />
        <div className={style["circle"]}></div>
      </div>
    </div>
  )
}

export default SubHeadline
