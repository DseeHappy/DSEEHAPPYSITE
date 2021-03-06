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
            <a href="https://authening.constructopedia.cloud/login?client_id=5limg616d2dfotejb7slte769&response_type=code&scope=email+openid+phone+profile&redirect_uri=https://app.constructopedia.cloud/auth/login/" rel="noopener noreferrer">
              LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
