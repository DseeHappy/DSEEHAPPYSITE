import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="200">
      <div className="container-fluid">
        <h3 className="text-center mb-5">Compare our plans</h3>
        <div className={style.table}>
          <table className="table">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <strong>EARLY ACCESS</strong>
                </td>
                <td>
                  <strong>BASIC</strong>
                </td>
                <td>
                  <strong>PRO</strong>
                </td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">GET STARTED</td>
              </tr>
              <tr>
                <td>Users</td>
                <td>3</td>
                <td>unlimited</td>
                <td>unlimited</td>
              </tr>

              <tr>
                <td>Projects</td>
                <td>30</td>
                <td>unlimited</td>
                <td>unlimited</td>
              </tr>

              <tr>
                <td>Progressive Web App</td>
                <td>Windows, macOS, iPhone, Android</td>
                <td>Windows, macOS, iPhone, Android</td>
                <td>Windows, macOS, iPhone, Android</td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">Team Collaboration </td>
              </tr>

              <tr>
                <td>Maps</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>

              <tr>
                <td>Project Management</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>Upload Photo</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>Upload Video</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>Time Clock</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Cloud Store Share Sync</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Project Link</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">CONTRACTOR MANAGER &amp; CUSTOMER COMMUNICATOR</td>
              </tr>
              <tr>
                <td>Scheduling</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Blueprints</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Estimates</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Invoices</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>OCR</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>Full Office Support</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>

              </tr>
              <tr>
                <td>Leads | Bids Management</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Customer Communicator</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>Contractor Management</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="https://app.dseehappy.com/signup" className="op__link">
                    SIGN UP FOR EARLY ACCESS
                  </a>
                </td>
                <td>
                  <a href="mailto:dseehappy@gmail.com"className="op__link">
                    Contact Us
                  </a>
                </td>
                <td>
                  <a href="mailto:dseehappy@gmail.com" className="op__link">
                    Contact Us
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
