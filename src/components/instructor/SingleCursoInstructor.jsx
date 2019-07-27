import React from "react";
import SectionTopicContainer from "../../containers/instructor/Section&TopicContainer";
import { Link } from "react-router-dom";

const styles = {
  button2: {
    display: "block",
    margin: "auto"
  },
  text: {
    fontSize: "24px",
    textAlign: "left"
  },
  title: {
    fontSize: "40px",
    textAlign: "center"
  },
  imagen: {
    margin: "auto",
    display: "block",
    textAlign: "center"
  },
  flex: {
    display: "flex"
  }
};

export default props => (
  <div>
    <div className="jumbotron mt-3">
      <h1 style={styles.title}>Create your course</h1>
      <p style={{ textAlign: "center" }} className="lead">
        Help other people learn new skills, advance their careers and explore
        their hobbies by sharing your knowledge.
      </p>
    </div>

    {props.curso.images && (
      <div className="col-sm-3  main" style={styles.imagen}>
        <img src={props.curso.images.imagen1.url} width="100%" alt="" />
      </div>
    )}

    {props.curso.name && (
      <div>
        <div className="media" style={styles.flex}>
          <div className="media-body">
            <p className="mt-0" style={styles.text}>
              Course: {props.curso.name}
              <Link to={`/instructor/cursos/${props.curso.id}/edit`}>
                <button
                  type="button"
                  className="btn btn-light"
                  style={{
                    float: "right",
                    marginBottom: "5px",
                    marginRight: "10px"
                  }}
                  onClick={() => {}}
                >
                  {" "}
                  Edit this Course
                  <i className="fas fa-pencil-alt" />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modalContactForm"
            style={styles.button2}
          >
            Add Section
          </button>
          <br />
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
                <label htmlFor="">Section Name</label>
                <i className="fas fa-tag prefix grey-text" />
                <input
                  type="text"
                  id="form32"
                  className="form-control validate"
                  onChange={props.handleChange}
                />
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
    <div className="container">
      <Link to={`/instructor/cursos`}>
        <div>
          <button type="button" className="btn btn-primary">
            Back to My Courses
          </button>
        </div>
      </Link>
    </div>
  </div>
);
