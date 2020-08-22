import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="200">
      <div className="container-fluid">
        <div className={style.list}>
          <h3>Contractor Manager &amp; Customer Communicator</h3>
          <div className="row">
            <div className="col-lg-4">
              <span className={style.list__title}>Scheduling</span>
              <p className="text-muted">
                Manage your project scheduling to ensure every project is done on time.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Leads | Bids </span>
              <p className="text-muted">
                Keep track of all your prospective projects with advanced sharing features.
                <hr />
                Sub-Contractors can view bids you send them and respond all without having to pickup the phone.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Full Office Files Support</span>
              <p className="text-muted">
                An All In One Solution for all your document creating &amp; editing needs.
                </p>
              <hr />
              <p className="text-muted">
                Full Support for Word, Excel, PowerPoint
                </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Blueprints</span>
              <p className="text-muted">
                View | Edit Blueprints with real time collaboration to share concerns and updates

              </p>
              <hr />
              <p className="text-muted">
                Once every concern and update is finalized, you can digitally sign your documents.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Estimate &amp; Invoice Builder</span>
              <p className="text-muted">
                All in one integrated system to generate estimates and invoices with email templates.
              </p>
              <hr />
              <p className="text-muted">
                With a full suite of document editing tools, you will be able to stop switching between apps and actually get work done.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>OCR</span>
              <p className="text-muted">
                Do you have a folder full of years worth of old PDF Customer Agreements?
              </p>
              <hr />
              <p className="text-muted">
                Instead of having to sort through them, let our OCR system scan your documents to easily have full text searchability for all your documents.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
