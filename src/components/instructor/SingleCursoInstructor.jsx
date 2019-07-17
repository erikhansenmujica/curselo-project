import React from "react";
import SectionTopicContainer from "../../containers/instructor/Section&TopicContainer";

const styles = {
  nav: {
    width: "60vw"
  },
  button: {
    display: "inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div
    style={{
      marginLeft: "15%",
      marginTop: "-2%"
    }}
  >
    {props.curso.name && (
      <div>
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0">Curso: {props.curso.name}</h5>
          </div>
        </div>
        <div>
          <a
            href=""
            className="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalContactForm"
          >
            Add Section
          </a>
        </div>
        <SectionTopicContainer cursoId={props.curso.id} />
      </div>
    )}
    <div
      className="modal fade"
      id="modalContactForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Add Section</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={props.handleSubmit}>
          <div className="modal-body mx-3">
            <div className="md-form mb-5">
              <i className="fas fa-tag prefix grey-text" />
              <input type="text" id="form32" className="form-control validate" onChange={props.handleChange} />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
            type="submit"
              className="btn btn-unique"
              data-toggle="modal"
              data-target="#modalContactForm"
            >
              Send <i className="fas fa-paper-plane-o ml-1" />
            </button>
          </div>
            </form>
        </div>
      </div>
    </div>
  </div>
);
