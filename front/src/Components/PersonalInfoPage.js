import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const PersonalInfoPage = () => {
  return (
    <>
    
    <div className="container pt-5 pb-lg-4 mt-5 mb-sm-2">
      {/* Breadcrumb */}
      <nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol className="breadcrumb breadcrumb-light">
          <li className="breadcrumb-item"><p onClick={()=>window.location.href="/"}>Acceuil</p></li>
          <li className="breadcrumb-item"><Link to="/acceuil">Espace de travail</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Info</li>
        </ol>
      </nav>
      {/* Page content */}
      <div className="row">
        {/* Sidebar */}
        <aside className="col-lg-4 col-md-5 pe-xl-4 mb-5">
          {/* Account nav */}
          <div className="card card-body card-light border-0 shadow-sm pb-1 me-lg-1">
            <div className="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4">
              <img className="rounded-circle" src="assets/img/avatars/01.jpg" width="48" alt="Robert Fox" />
              <div className="pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3">
                <h2 className="fs-lg text-light mb-0">Robert Fox</h2>
                <span className="star-rating">
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                </span>
                <ul className="list-unstyled fs-sm mt-3 mb-0">
                  <li><a className="nav-link-light fw-normal" href="tel:3025550107"><i className="fi-phone opacity-60 me-2"></i>(302) 555-0107</a></li>
                  <li><a className="nav-link-light fw-normal" href="mailto:robert_fox@email.com"><i className="fi-mail opacity-60 me-2"></i>robert_fox@email.com</a></li>
                </ul>
              </div>
            </div>
            <a className="btn btn-primary btn-lg w-100 mb-3" href="car-finder-sell-car.html"><i className="fi-plus me-2"></i>Sell car</a>
            <a className="btn btn-outline-light d-block d-md-none w-100 mb-3" href="#account-nav" data-bs-toggle="collapse"><i className="fi-align-justify me-2"></i>Menu</a>
            <div className="collapse d-md-block mt-3" id="account-nav">
              <div className="card-nav">
                <a className="card-nav-link active" href="car-finder-account-info.html"><i className="fi-user me-2"></i>Personal Info</a>
                <a className="card-nav-link" href="car-finder-account-security.html"><i className="fi-lock me-2"></i>Password & Security</a>
                <a className="card-nav-link" href="car-finder-account-cars.html"><i className="fi-car me-2"></i>My Cars</a>
                <a className="card-nav-link" href="car-finder-account-wishlist.html"><i className="fi-heart me-2"></i>Wishlist<span className="badge bg-faded-light ms-2">4</span></a>
                <a className="card-nav-link" href="car-finder-account-reviews.html"><i className="fi-star me-2"></i>Reviews</a>
                <a className="card-nav-link" href="car-finder-account-notifications.html"><i className="fi-bell me-2"></i>Notifications</a>
                <a className="card-nav-link" href="car-finder-help-center.html"><i className="fi-help me-2"></i>Help</a>
                <a className="card-nav-link" href="signin-dark.html"><i className="fi-logout me-2"></i>Sign Out</a>
              </div>
            </div>
          </div>
        </aside>
        {/* Content */}
        <div className="col-lg-8 col-md-7 mb-5">
          <h1 className="h2 text-light">Personal Info</h1>
          <div className="text-light mb-2 pt-1">Your personal info is 50% completed</div>
          <div className="progress progress-light mb-4" style={{ height: '.25rem' }}>
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="row pt-2">
            <div className="col-lg-9 col-md-12 col-sm-8 mb-2 mb-m-4">
              <div className="border border-light rounded-3 p-3 mb-4" id="personal-info">
                {/* Name */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Full name</label>
                      <div className="text-light" id="name-value">Robert Fox</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#name-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="name-collapse" data-bs-parent="#personal-info">
                    <input className="form-control form-control-light mt-3" type="text" data-bs-binded-element="#name-value" data-bs-unset-value="Not specified" defaultValue="Robert Fox" />
                  </div>
                </div>
                {/* Gender */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Gender</label>
                      <div className="text-light" id="gender-value">Not specified</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#gender-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="gender-collapse" data-bs-parent="#personal-info">
                    <select className="form-select form-select-light mt-3" data-bs-binded-element="#gender-value">
                      <option value="" disabled selected>Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                {/* Email */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Email</label>
                      <div className="text-light" id="email-value">robert_fox@email.com</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#email-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="email-collapse" data-bs-parent="#personal-info">
                    <input className="form-control form-control-light mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" defaultValue="robert_fox@email.com" />
                  </div>
                </div>
                {/* Phone number */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Phone number</label>
                      <div className="text-light" id="phone-value">(302) 555-0107</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#phone-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="phone-collapse" data-bs-parent="#personal-info">
                    <input className="form-control form-control-light mt-3" type="text" data-bs-binded-element="#phone-value" data-bs-unset-value="Not specified" defaultValue="(302) 555-0107" />
                  </div>
                </div>
                {/* Address */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Address</label>
                      <div className="text-light" id="address-value">2464 Royal Ln. Mesa, New Jersey</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#address-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="address-collapse" data-bs-parent="#personal-info">
                    <input className="form-control form-control-light mt-3" type="text" data-bs-binded-element="#address-value" data-bs-unset-value="Not specified" defaultValue="2464 Royal Ln. Mesa, New Jersey" />
                  </div>
                </div>
                {/* Birthday */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Birthday</label>
                      <div className="text-light" id="birthday-value">February 17, 1990</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#birthday-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="birthday-collapse" data-bs-parent="#personal-info">
                    <input className="form-control form-control-light mt-3" type="text" data-bs-binded-element="#birthday-value" data-bs-unset-value="Not specified" defaultValue="February 17, 1990" />
                  </div>
                </div>
                {/* Avatar */}
                <div className="border-bottom border-light pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Avatar</label>
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle" src="assets/img/avatars/01.jpg" width="60" alt="Robert Fox" id="avatar-value" />
                        <span className="ps-2">Change avatar</span>
                      </div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#avatar-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="avatar-collapse" data-bs-parent="#personal-info">
                    <div className="file-drop-area mt-3">
                      <div className="file-drop-icon fi-upload"></div>
                      <span className="file-drop-message">Drag & drop here to upload</span>
                      <input className="file-drop-input" type="file" data-bs-binded-element="#avatar-value" />
                      <button className="file-drop-btn btn btn-primary btn-sm mb-2" type="button">Or select file</button>
                      <div className="form-text text-light">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2 opacity-70">
                      <label className="form-label fw-bold text-light">Description</label>
                      <div className="text-light" id="description-value">N/A</div>
                    </div>
                    <div data-bs-toggle="tooltip" title="Edit">
                      <a className="nav-link nav-link-light py-0" href="#description-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <div className="collapse" id="description-collapse" data-bs-parent="#personal-info">
                    <textarea className="form-control form-control-light mt-3" rows="4" data-bs-binded-element="#description-value" data-bs-unset-value="N/A" defaultValue=""></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-3 col-md-12 col-sm-4">
              <div className="ps-lg-4">
                <div className="border border-light rounded-3 p-3 mb-4">
                  <h6 className="text-light mb-2">Email notifications</h6>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="sale-alerts" checked />
                    <label className="form-check-label text-light" htmlFor="sale-alerts">Sale alerts</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="new-cars" checked />
                    <label className="form-check-label text-light" htmlFor="new-cars">New cars</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="news" />
                    <label className="form-check-label text-light" htmlFor="news">News</label>
                  </div>
                </div>
                <div className="border border-light rounded-3 p-3 mb-4">
                  <h6 className="text-light mb-2">SMS notifications</h6>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="sms-sale-alerts" />
                    <label className="form-check-label text-light" htmlFor="sms-sale-alerts">Sale alerts</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="sms-new-cars" checked />
                    <label className="form-check-label text-light" htmlFor="sms-new-cars">New cars</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="sms-news" />
                    <label className="form-check-label text-light" htmlFor="sms-news">News</label>
                  </div>
                </div>
                <div className="border border-light rounded-3 p-3 mb-4">
                  <h6 className="text-light mb-2">Who can see my contact info</h6>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility" id="visibility-public" />
                    <label className="form-check-label text-light" htmlFor="visibility-public">Public</label>
                  </div>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility" id="visibility-friends" />
                    <label className="form-check-label text-light" htmlFor="visibility-friends">Friends</label>
                  </div>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility" id="visibility-private" checked />
                    <label className="form-check-label text-light" htmlFor="visibility-private">Private</label>
                  </div>
                </div>
                <div className="border border-light rounded-3 p-3 mb-4">
                  <h6 className="text-light mb-2">Who can see my birthday</h6>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility-birthday" id="visibility-birthday-public" />
                    <label className="form-check-label text-light" htmlFor="visibility-birthday-public">Public</label>
                  </div>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility-birthday" id="visibility-birthday-friends" />
                    <label className="form-check-label text-light" htmlFor="visibility-birthday-friends">Friends</label>
                  </div>
                  <div className="form-check form-check-light">
                    <input className="form-check-input" type="radio" name="visibility-birthday" id="visibility-birthday-private" checked />
                    <label className="form-check-label text-light" htmlFor="visibility-birthday-private">Private</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    {/* Footer*/}
    <Footer/>
    {/* Back To Top Button */}
    <a className="btn-scroll-top" href="#top" data-scroll>
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon fi-chevron-up"></i>
    </a>
    
    
    </>
  )
}

export default PersonalInfoPage
