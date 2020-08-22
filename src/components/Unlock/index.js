import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.unlock}>
      <div className="op__block">
        <div className={style.unlock__container}>
          <div className="container-fluid">
            <h1 data-aos="fade-left" data-aos-delay="200">
              unlock early access
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              Construction
              <span className={style.unlock__tag}>On The Cloud</span>
              Simplify Your Paperwork &amp; Reduce The Headache
            </p>


            <div
              data-aos="fade-right"
              className={style.form__item}>
              <input className={style.unlock__tag} placeholder="enter your email address" type="text" id="email" />
              <a
                href="/"
                className="op__btn"
                data-aos-delay="600"
              >
                Sign Up For Early Access Notification
            </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
