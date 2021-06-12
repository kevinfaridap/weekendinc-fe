import React from 'react'
import style from './headline.module.css'
import {robotheadline} from '../../../assets/index'

function Headline() {
  const onContentClick = (value) =>{
    const element = document.getElementById(`content${value}`);
    element.scrollIntoView();
  }
  return (
    <div>
     <div className={[["jumbotron"], ["jumbotron-fluid"], style['headline']].join(' ')}>
        <div className="container">
          <h1 className={style["title"]}>WEEKEND FROM HOME</h1>
          <p className={style['description']}>Stay active with a little workout.</p>
          <img className={style['head-robot']} src={robotheadline} alt="" />
          <br />
          <button className={style['btn']} onClick={()=>onContentClick(1)} >Let's Go</button>
        </div>
      </div>
    </div>
  )
}

export default Headline
