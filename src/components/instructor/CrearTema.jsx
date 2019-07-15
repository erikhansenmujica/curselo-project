import React from "react";

export default () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">New Topic!</h1>
      <p className="lead">What do you want to share?</p>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Upload text!
          </button>
        </div>
        <div className="card mb-4 shadow-sm">
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Upload PDF!
          </button>
        </div>
        <div className="card mb-4 shadow-sm">
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Upload a video!
          </button>
        </div>
      </div>
    </div>
  </div>
);
