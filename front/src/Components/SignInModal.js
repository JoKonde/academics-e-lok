import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import Navbar from './Navbar';
import Hero from './Hero';
import BodyType from './BodyType';
import Api from '../Cnx';
import axios from 'axios';
import { baseURL } from "../env";
import Popup from './Popups/Message';
const SignInModal = () => {

  const [verif, setVerif] = useState(false);
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    setErrors([]);

    axios.post(baseURL+"/auth",{
      "email":email,
      "password":password
    })

      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        //setMsg(error.response.data.message);
        setErrors(error.response.data);
        //setVerif(true);
        console.log(error);
      });
  };




  return (
    
      <div className="modal fade" id="signin-modal" tabIndex="-1" aria-hidden="true">
        {verif && <Popup  message={msg} setVerif={setVerif} />}
        <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ maxWidth: '950px' }}>
          <div className="modal-content bg-dark border-light">
            <div className="modal-body px-0 py-2 py-sm-0">
              <button
                className="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3"
                type="button"
                data-bs-dismiss="modal"
              ></button>
              <div className="row mx-0 align-items-center">
                <div className="col-md-6 border-end-md border-light p-4 p-sm-5">
                  <h2 className="h3 text-light mb-4 mb-sm-5">Salutation!<br />Bienvenue.</h2>
                  <img
                    className="d-block mx-auto"
                    src="assets/img/signin-modal/signin-dark.svg"
                    width="344"
                    alt="Illustration"
                  />
                  <div className="text-light mt-4 mt-sm-5">
                    <span className="opacity-60">Vous n'avez pas de compte? </span>
                    <a
                      className="text-light"
                      href="#signup-modal"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Créer en un
                    </a>
                  </div>
                </div>
                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                  <a className="btn btn-outline-info w-100 mb-3" href="#">
                    <i className="fi-google fs-lg me-1"></i>Se Connecter avec Google
                  </a>
                  <a className="btn btn-outline-info w-100 mb-3" href="#">
                    <i className="fi-facebook fs-lg me-1"></i>Se Connecter avec Facebook
                  </a>
                  <div className="d-flex align-items-center py-3 mb-3">
                    <hr className="hr-light w-100" />
                    <div className="text-light opacity-70 px-3">Ou</div>
                    <hr className="hr-light w-100" />
                  </div>
                  <span className='text-danger px-5'>{errors && errors.detail}</span>
                  <div className="needs-validation">
                  
                    <div className="mb-4">
                      <label className="form-label text-light mb-2" htmlFor="signin-email">Email</label>
                      <input
                        className="form-control form-control-light"
                        type="email"
                        id="signin-email"
                        placeholder="Votre adresse email"
                        required
                        onChange={(e) =>setEmail(e.target.value)}
                      />
                      <span className='text-danger'>{errors && errors.email}</span>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <label className="form-label text-light mb-0" htmlFor="signin-password">Mot de Passe</label>
                        <a className="fs-sm text-light" href="#">Mot de Passe oublié?</a>
                      </div>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-light"
                          type="password"
                          id="signin-password"
                          placeholder="Votre mot de passe"
                          required
                          onChange={(e) =>setPassword(e.target.value)}
                        />
                        
                        <label className="password-toggle-btn" aria-label="Show/hide password">
                          <input className="password-toggle-check" type="checkbox" />
                          <span className="password-toggle-indicator"></span>
                        </label>
                        
                      </div>
                      <span className='text-danger'>{errors && errors.password}</span>
                    </div>
                    <button className="btn btn-primary btn-lg w-100" onClick={login}>Se Connecter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default SignInModal;
