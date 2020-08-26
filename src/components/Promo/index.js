import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.promo}>
      <div className="op__block">
        <div className="container-fluid">
          <div
            className={style.promo__notification}
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <span>
              <span role="img" aria-label="">
                👉
              </span>{" "}
              Sign up for early access soon!  <a href="https://auth.constructopedia.cloud/login?client_id=5limg616d2dfotejb7slte769&response_type=code&scope=email+openid+phone+profile&redirect_uri=https://app.constructopedia.cloud/auth/login/"><del>Unlock access now</del> </a>
            </span>
          </div>
          <div className={style.promo__inner}>
            <div className="row">
              <div className="col-md-6">
                <h1 data-aos="fade-right">

                  <strong>Manage Projects, Employees &amp; Contractors </strong>
                   in one open easy-to-use platform
                  </h1>

                <p
                  className="text-muted"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Our construction management tool will be another great tool in your toolbelt </p>
                <ul
                  className={style.promo__list}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <li>
                    <span className={style.promo__list__icon}>
                      <i class="fas fa-file-contract fa-2x"></i>
                    </span>
                    <span>Project Management</span>
                  </li>
                  <li>
                    <span
                      className={`${style.promo__list__icon} `}
                    >
                      <i class="fas fa-users fa-2x"></i>

                    </span>
                    <span>Employee &amp; Contractor Management</span>
                  </li>
                  <li>
                    <span
                      className={`${style.promo__list__icon} `}
                    >
                      <i class="fas fa-smile fa-2x"></i>
                    </span>
                    <span> Customer Communicator</span>
                  </li>
                </ul>
                <div
                  className={style.promo__buttons}
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                    <div className={style.form__item}>
                      <input className={style.unlock__tag} placeholder="enter your email address" type="text" id="email" />
                      <a href="/" className="op__btn mr-3">
                        Sign Up For Early Access Notification
                </a>

                    </div>


                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={style.promo__img}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src="/resources/img/promo.png"
                    alt="DSEEHAPPY Landing Page"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
