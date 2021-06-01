import React from "react";

function Signin(props) {
    return (
        <section className="signin">
            <div className="container py-5 py-md-7">
                <div className="row align-items-center pt-2">
                    <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                    <div className="bg-secondary px-4 py-5 p-sm-5 rounded-3">
                        <h1 className="h3 pt-1">Sign in</h1>
                        <p className="fs-ms text-muted">Sign in to your account using email and password provided during registration.</p>
                        <form className="needs-validation" novalidate>
                        <div className="input-group mb-3"><i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                            <input className="form-control rounded" type="email" placeholder="Email" required />
                        </div>
                        <div className="input-group mb-3"><i className="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                            <div className="password-toggle w-100">
                            <input className="form-control" type="password" placeholder="Password" required />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                            </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-1">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="keep-signed-2" />
                            <label className="form-check-label fs-sm" for="keep-signed-2">Keep me signed in</label>
                            </div><a className="nav-link-style fs-ms" href="password-recovery.html">Forgot password?</a>
                        </div>
                        <button className="btn btn-primary d-block w-100" type="submit">Sign in</button>
                        <div className="border-top text-center mt-4 pt-4">
                            <p className="fs-sm fw-medium text-heading">Or sign in with</p><a className="btn-social bs-facebook bs-outline bs-lg mx-1 mb-2" href="#"><i className="ai-facebook"></i></a><a className="btn-social bs-twitter bs-outline bs-lg mx-1 mb-2" href="#"><i className="ai-twitter"></i></a><a className="btn-social bs-instagram bs-outline bs-lg mx-1 mb-2" href="#"><i className="ai-instagram"></i></a><a className="btn-social bs-google bs-outline bs-lg mx-1 mb-2" href="#"><i className="ai-google"></i></a>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-md-6 offset-lg-1">
                    <h2 className="h3">No account? Sign up</h2>
                    <p className="fs-ms text-muted">Registration takes less than a minute but gives you full control over your orders.</p>
                    <form className="row needs-validation" novalidate>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-fn">First name<sup className="text-danger ms-1">*</sup></label>
                        <input className="form-control" type="text" required id="reg-fn" />
                        <div className="invalid-feedback">Please enter you first name!</div>
                        </div>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-ln">Last name<sup className="text-danger ms-1">*</sup></label>
                        <input className="form-control" type="text" required id="reg-ln" />
                        <div className="invalid-feedback">Please enter you last name!</div>
                        </div>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-email">Email address<sup className="text-danger ms-1">*</sup></label>
                        <input className="form-control" type="email" required id="reg-email" />
                        <div className="invalid-feedback">Please enter a valid email address!</div>
                        </div>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-phone">Phone number</label>
                        <input className="form-control bg-image-0" type="text" id="reg-phone" />
                        </div>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-password">Password<sup className="text-danger ms-1">*</sup></label>
                        <input className="form-control" type="password" required id="reg-password" />
                        <div className="invalid-feedback">Please provide password!</div>
                        </div>
                        <div className="col-sm-6 mb-3">
                        <label className="form-label" for="reg-confirm-password">Confirm password<sup className="text-danger ms-1">*</sup></label>
                        <input className="form-control" type="password" required id="reg-confirm-password" />
                        <div className="invalid-feedback">Password doesn't match!</div>
                        </div>
                        <div className="col-sm-6 pt-2">
                        <button className="btn btn-primary d-block w-100" type="submit">Sign up</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signin;
