import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block mb-5" data-aos="fade-up" data-aos-delay="400">
      <div className="container-fluid">
        <div className={style.list}>
          <h3>Team Collaboration </h3>
          <div className="row">
            <div className="col-lg-4">
              <span className={style.list__title}>Maps</span>
              <p className="text-muted">
                Setup your project &amp; track all your projects on the Map.
                Easy access to review all your projects.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}> Project Management</span>
              <p className="text-muted">
                Keep your team on track and engaged. Know the status of each and every project.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}> Photos | Videos</span>
              <p className="text-muted">
                Keep track of all photos and videos for each project
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}> Store | Share | Sync</span>
              <p className="text-muted">
               All your information on the cloud, nothing to keep track of or any hardware to setup. 
               Keep your entire team updated from the office to the jobsite and anywhere in between.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Time Clock</span>
              <p className="text-muted">
                Keep your employees timesheets all stored in one place. Track your employees work hours... without the hassle.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Project Link</span>
              <p className="text-muted">
               Sharing project details  with people outside your company. <br />From Sub-Contractors to Customers, keeping everyone up to date.
               <hr />
               When Specialty Trades are required for the project, everyone can share and communicate job requirements or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
