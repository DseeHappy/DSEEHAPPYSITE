import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block mb-4">
      <div className="container-fluid">
        <footer className={style.footer}>
          <div className="row">
            <div className="col-lg-12">
              <div className={style.footer__container}>
                <div>
                  <div className="mb-4">
                    <a
                      href="https://dseehappy.com"
                      className={style.footer__logo}
                    >
                      DSEEHAPPY
                      <span></span>
                    </a>
                  </div>
                  <div className="mb-1">
                    <b>United States</b>, Denver Co
                      </div>
                  <div>
                    Copyright © 2020 DSEEHAPPY |{" "}
                    <a
                      href="https://constructopedia.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div className="mb-1">
                    <a href="mailto:info@constructopedia.cloud">
                      info@constructopedia.cloud
                    </a>
                  </div>
                </div>
                <div className={style.footer__contactsWrapper}>
                  
                  {/*
                    <div className={style.footer__contacts}>
                    <div className={style.footer__contactsItem}>

                    </div>

                  </div>
                   <div
                    className={style.footer__rating}
                    itemProp="aggregateRating"
                    itemScope=""
                    itemType="http://schema.org/AggregateRating"
                  >
                    <div className="mb-1">
                      <span>User reviews score: 4.63 / 5</span>
                      <span className="ml-2">
                        Total: <span itemProp="votes">54</span>
                      </span>
                      <span className={style.footer__ratingStars}></span>
                    </div>
                    Based on Themeforest Customer Reviews
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="ratingValue" content="4.63" />
                    <meta itemProp="ratingCount" content="54" />
                    <meta
                      itemProp="itemReviewed"
                      content="Clean UI Pro Admin Template"
                    />
                  </div>
                 */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
