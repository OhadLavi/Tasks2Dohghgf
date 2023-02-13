import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        // Perform authentication here
    };

    const [showPassword, setShowPassword] = useState(true);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ backgroundColor: '#1b1d1e', display: 'flex', alignItems: 'center' }}>
            <div className="container shadow my-5">
                <div className="row no-gutters h-700">
                    <div className="col-md-6 d-flex flex-column bg-black align-items-center text-white justify-content-center form border blackBorder rounded-4">
                        <div className="inner text-center">
                            <h1 className="display-4 fw-bolder">Welcome</h1>
                            <p className="lead text-center">Enter your credentials to login</p>
                            <h5 className="mb-4">OR</h5>
                            <NavLink to="/Signup" className="btn btn-outline-dark rounderd-pill pb-2 w-50 text-white">Sign up</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 d-flex flex-column justify-content-center border whiteBorder rounded-4 cssBox">
                        <div className="inner">
                            <h1 className="display-6 fw-bolder mb-3 text-white">Sign in</h1>
                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control bg-dark text-white" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" required="true" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type={showPassword ? 'text' : 'password'} class="form-control bg-dark text-white" placeholder="Password" id="exampleInputPassword1" required="true" />
                                    <button type="button" className="btn bg-dark text-white" onClick={handlePasswordVisibility}>
                                        <i className={`fa fa-${showPassword ? 'eye-slash' : 'eye'}`} />
                                    </button>
                                </div>
                                {/* <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary btn-block w-100">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                .border-red {
                    color: red !important;
                }
                .text-white {
                    color: #d1cdc7 !important;
                }
                .btn-primary {
                    background-color: #173156;
                    border-color: #173156 !important; 
                }
                .btn-primary:hover {
                    background-color: #1f4882;
                }
                .whiteBorder {
                    border-color: #363a3c !important;
                }
                .blackBorder {
                    border-color: #000 !important;
                }
                .h-700 {
                    height: 700px;
                }
                .cssBox {
                    margin: 0 15px;
                    flex-basis: calc(50% - 30px);
                }
                .form-control {
                    border: 1px solid #3a3e41;
                  }
                .btn, .btn:hover {
                    border: 1px solid #3a3e41;
                    border-left: none;
                }
                `}
            </style>
        </div>
    );
};

export default LoginPage;