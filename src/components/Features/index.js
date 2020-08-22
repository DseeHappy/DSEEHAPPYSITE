import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import style from "./style.module.scss"

export default () => {
  return (
    <div id="Features" className="op__block" data-aos="fade-up" data-aos-delay="400">
      <div className="container-fluid">
        <div className="op__block__heading text-center">
          CONNECTING BUILDERS TO THE DATA THEY NEED, WHEN THEY NEED IT
        </div>
        <div className={style.features}>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-map-marker-alt fa-4x"></i>
            </div>
            <div className={style.features__title}>Maps</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-file-invoice-dollar fa-4x"></i>
            </div>
            <div className={style.features__title}>Invoices</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-file-invoice fa-4x"></i>
            </div>
            <div className={style.features__title}>Estimates</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-tasks fa-4x"></i>
            </div>
            <div className={style.features__title}>Leads | Bids</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-calendar-check fa-4x"></i>
            </div>
            <div className={style.features__title}>Scheduling</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-users fa-4x"></i>
            </div>
            <div className={style.features__title}>Customer Communication</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-user-check fa-4x"></i>
            </div>
            <div className={style.features__title}>Contractor Manager</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-camera fa-4x "></i>
            </div>
            <div className={style.features__title}>Photos</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-video fa-4x"></i>
            </div>
            <div className={style.features__title}>Videos</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-business-time fa-4x"></i>
            </div>
            <div className={style.features__title}>Time Clock</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-sticky-note fa-4x"></i>
            </div>
            <div className={style.features__title}>Blueprints</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <i class="fas fa-cloud fa-4x"></i>
            </div>
            <div className={style.features__title}>Cloud Store Share Sync</div>
          </div>
        </div>
      </div>
    </div>
  )
}
