import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div id="Pricing" className="op__block">
      <div className="container-fluid">
        <div className="op__block__heading text-center">Pricing &amp; Plans</div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>Early Access</h4>
              <p className="text-muted">
                Sign up now for early access, receive full access to our suite of features.
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>FREE EARLY ACCESS</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                SIGN UP 
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>Basic</h4>
              <p className="text-muted">
                For businesses ready to step up their team communication and
                access more features
              </p>
              <div className={style.pricing__prices}>
                {  /* 
                    <span className={style.pricing__price}>$3</span>
                    <span className="text-muted">/ user monthly</span>
                    <br />
                    <span className={style.pricing__price}>$30</span>
                    <span className="text-muted">/ user annually</span>
                */
                }
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>Pro</h4>
              <p className="text-muted">
                For businesses needing high-level scalability, management and
                unlimited features
              </p>
              <div className={style.pricing__prices}>
                {
                  /* 
                  <span className={style.pricing__price}>Tired Pricing</span>
                  <br />
                  <span className={style.pricing__price}>Volume Discount</span>
                  */
                }
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
