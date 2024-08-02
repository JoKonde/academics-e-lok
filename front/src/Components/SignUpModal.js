import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../env';


  

const SignUpModal = () => {
  const [verif, setVerif] = useState(false);
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [role, setRole] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [verifBtn, setVerifBtn] = useState(false);


  const createAccount = () => {
    setErrors([]);
    setVerifBtn(true);
    axios.post(baseURL+"/new-account",{
      "email":email,
      "password":password,
      "role":role,
      "contact":{
        "nom":lastname,
        "postnom":middlename,
        "prenom":firstname,
        "tel":tel
      }
    })

      .then((res) => {
        console.log(res);
        setVerifBtn(false);
      })
      .catch((error) => {
        //setMsg(error.response.data.message);
        setErrors(error.response.data);
        //setVerif(true);
        console.log(error);
        setVerifBtn(false);
      });
  };

  
  return (
    <div className="modal fade" id="signup-modal" tabIndex="-1" aria-hidden="true">
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
                <h2 className="h3 text-light mb-4 mb-sm-5">
                  Rejoingnez-Nous <br />sur E-Lok.
                </h2>
                <ul className="list-unstyled mb-4 mb-sm-5">
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span className="text-light">Vous êtes Preteur</span>
                  </li>
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span className="text-light">Vous êtes Loueur</span>
                  </li>
                  <li className="d-flex mb-0">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span className="text-light">Cette Plateforme est pour Vous!</span>
                  </li>
                </ul>
                <img
                  className="d-block mx-auto"
                  src="assets/img/signin-modal/signup-dark.svg"
                  width="344"
                  alt="Illustration"
                />
                <div className="text-light mt-sm-4 pt-md-3">
                  <span className="opacity-60">Vous avez déjà un compte? </span>
                  <a
                    className="text-light"
                    href="#signin-modal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Connectez-Vous
                  </a>
                </div>
              </div>
              <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                <a className="btn btn-outline-info w-100 mb-3" href="#">
                  <i className="fi-google fs-lg me-1"></i>Créer avec Google
                </a>
                <a className="btn btn-outline-info w-100 mb-3" href="#">
                  <i className="fi-facebook fs-lg me-1"></i>Créer avec Facebook
                </a>
                <div className="d-flex align-items-center py-3 mb-3">
                  <hr className="hr-light w-100" />
                  <div className="text-light opacity-70 px-3">Ou</div>
                  <hr className="hr-light w-100" />
                </div>
                <form className="needs-validation" noValidate>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-name">Nom</label>
                    <input
                      className="form-control form-control-light"
                      type="text"
                      id="signup-name"
                      placeholder="Nom..."
                      required
                      onChange={(e)=>setLastname(e.target.value)}
                    />
                    <span className='text-danger'>{errors && errors.contact && errors.contact.nom && errors.contact.nom}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-name">Postnom</label>
                    <input
                      className="form-control form-control-light"
                      type="text"
                      id="signup-name"
                      placeholder="Postnom..."
                      required
                      onChange={(e)=>setMiddlename(e.target.value)}
                    />
                    <span className='text-danger'>{errors && errors.contact && errors.contact.postnom && errors.contact.postnom}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-name">Prénom</label>
                    <input
                      className="form-control form-control-light"
                      type="text"
                      id="signup-name"
                      placeholder="Prénom..."
                      required
                      onChange={(e)=>setFirstname(e.target.value)}
                    />
                    <span className='text-danger'>{errors && errors.contact && errors.contact.prenom && errors.contact.prenom}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-name">Tél</label>
                    <input
                      className="form-control form-control-light"
                      type="text"
                      id="signup-name"
                      placeholder="Tél..."
                      required
                      onChange={(e)=>setTel(e.target.value)}
                    />
                    <span className='text-danger'>{errors && errors.contact && errors.contact.tel && errors.contact.tel}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-email">Email</label>
                    <input
                      className="form-control form-control-light"
                      type="email"
                      id="signup-email"
                      placeholder="Email..."
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <span className='text-danger'>{errors && errors.email}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-password">
                      Mot de Passe <span className="fs-sm opacity-50">min. 8 char</span>
                    </label>
                    <div className="password-toggle">
                      <input
                        className="form-control form-control-light"
                        type="password"
                        id="signup-password"
                        minLength="8"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <label className="password-toggle-btn" aria-label="Show/hide password">
                        <input className="password-toggle-check" type="checkbox" />
                        <span className="password-toggle-indicator"></span>
                      </label>
                    </div>
                    <span className='text-danger'>{errors && errors.password}</span>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-password-confirm">Confirmez Mot de Passe</label>
                    <div className="password-toggle">
                      <input
                        className="form-control form-control-light"
                        type="password"
                        id="signup-password-confirm"
                        minLength="8"
                        required
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                      />
                      <label className="password-toggle-btn" aria-label="Show/hide password">
                        <input className="password-toggle-check" type="checkbox" />
                        <span className="password-toggle-indicator"></span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light" htmlFor="signup-email">Role</label>
                    <select
                      className="form-control form-control"
                        onChange={(e)=>setRole(e.target.value)}
                      >
                        <option value={""}>Choisir un rôle</option>
                        <option value={"preteur"}>Preteur</option>
                        <option value={"loueur"}>Loueur</option>

                    </select>
                    <span className='text-danger'>{errors && errors.role}</span>
                  </div>
                  <div className="form-check form-check-light mb-4">
                    <input className="form-check-input" type="checkbox" id="agree-to-terms" required />
                    <label className="form-check-label" htmlFor="agree-to-terms">
                      <span className="opacity-70">Vous acceptez</span> 
                      <a href="#" className="text-light"> Conditions Générales d'Utilisation</a> 
                      <span className="opacity-70">Et</span> 
                      <a href="#" className="text-light">Politiques de Confidentialités</a>
                    </label>
                  </div>
                  {
                verifBtn?(
                  <button className="btn btn-primary btn-lg w-100" disabled type="button">
                        <span aria-hidden="true" className="spinner-border spinner-border-sm" role="status"></span>  Chargement...
                        </button>
                ):(
                  <button className="btn btn-primary btn-lg w-100" onClick={createAccount}>Créer</button>
                )
              }
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
