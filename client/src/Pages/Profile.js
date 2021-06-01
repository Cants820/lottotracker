import React from "react";

const Profile = () => {
  return (
    <div className="d-flex flex-column h-100 bg-light rounded-3 shadow-lg p-4">
      <div className="py-2 p-md-3">

        <div className="d-sm-flex align-items-center justify-content-between pb-4 text-center text-sm-start">
          <h1 className="h3 mb-2 text-nowrap">Profile info</h1>
          <a className="btn btn-link text-danger fw-medium btn-sm mb-2" href="#"><i className="ai-trash-2 fs-base me-2"></i>Delete account</a>
        </div>

        <div className="bg-secondary rounded-3 p-4 mb-4">
          <div className="d-block d-sm-flex align-items-center">
            <img className="d-block rounded-circle mx-sm-0 mx-auto mb-3 mb-sm-0" src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="Amanda Wilson" width="110" />
            <div className="ps-sm-3 text-center text-sm-start">
              <button className="btn btn-light shadow btn-sm mb-2" type="button"><i className="ai-refresh-cw me-2"></i>Change avatar</button>
              <p className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">First Name</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">Last Name</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">Email address</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">Username</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">City</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">Address</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0">ZIP Code</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-12">
            <hr className="mt-2 mb-4" />
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <button className="btn btn-primary mt-3 mt-sm-0" type="button"><i className="ai-save fs-lg me-2"></i>Save changes</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
