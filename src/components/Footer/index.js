import React from 'react'
import style from './footer.module.css'

function Footer() {
  return (
    <div>
      <div className={style["footer-bg"]}>
        <div className="container">
          <div className="row">
            <div className="col">
               <p className={style["company-name"]}><strong className={style["strong"]}>wknd</strong>@2020</p>
            </div>
            <div className="col">
              <div className={style['version']}>alpha version 0.1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
