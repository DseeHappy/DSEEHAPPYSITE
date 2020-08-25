import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.menu}>
      <div className="op__block">
        <div className={style.menu__inner}>
          <div className={style.menu__logo__container}>
            <div className={style.menu__logo}>
              <img
                src="/resources/favicon.png"
                alt="DSEEHAPPY Logo"
              />
              <div className={style.menu__logo__name}>Constructopedia</div>
              <div className={style.menu__logo__descr}> Construction Management On The Cloud</div>
            </div>
          </div>
          <div className={style.menu__links}>
            <a href="#Features" rel="noopener noreferrer">
              Features
        </a>
            <a href="#Pricing" rel="noopener noreferrer">
              Pricing
            </a>

            <a href="#Contact_Us" rel="noopener noreferrer">
              Contact Us
            </a>
            <a href="https://authi.constructopedia.cloud/login?client_id=25cs78pin33094gfrk4m9ds4pa&response_type=code&scope=email+phone+profile+openid&redirect_uri=https://app.constructopedia.cloud/oauth2/ausrfadretuHXBvLh4x6" rel="noopener noreferrer">
              LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
