import React from "react";

function Signup(props) {
    return (
        <section className="signup modal">

            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-0">
                    <div className="view" id="modal-signup-view">
                        <div className="modal-header border-0 bg-dark px-4">
                        <h4 className="modal-title text-light">Sign up</h4>
                        <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="btn-close"></button>
                        </div>
                        <div className="modal-body px-4">
                        <p className="fs-ms text-muted">Registration takes less than a minute but gives you full control over your orders.</p>
                        <form className="needs-validation" noValidate>
                            <div className="mb-3">
                            <input className="form-control" type="text" placeholder="Full name" required />
                            </div>
                            <div className="mb-3">
                            <input className="form-control" type="text" placeholder="Email" required />
                            </div>
                            <div className="mb-3 password-toggle">
                            <input className="form-control" type="password" placeholder="Password" required />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                            </label>
                            </div>
                            <div className="mb-3 password-toggle">
                            <input className="form-control" type="password" placeholder="Confirm password" required />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                            </label>
                            </div>
                            <button className="btn btn-primary d-block w-100" type="submit">Sign up</button>
                            <p className="fs-sm pt-3 mb-0">Already have an account? <a href='#' className='fw-medium' data-view='#modal-signin-view'>Sign in</a></p>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Signup;
