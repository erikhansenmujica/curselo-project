import React from "react";

const styles = {
  alineacion: {
    position: "center"
  },
  inputText: {
    height: "150px"
  }, 
  buttons:{
    display:"block", 
    margin:"auto"
  }
};

export default ({ handleChange, handleSubmit }) => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      style={styles.buttons}
    >
      Crea tu Curso
    </button>

    <div
      className="modal fade bd-example-modal-lg"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
      style={styles.tamano}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4
              className="modal-title"
              id="exampleModalLabel"
              style={styles.alineacion}
            >
              Crea Tu Curso
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={e => {
                handleSubmit(e);
                document
                  .querySelectorAll(".form-control")
                  .forEach(input => (input.value = ""));
              }}
            >
              <div className="form-group">
                <label className="col-form-label">Titulo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  onChange={handleChange}
                  id="recipient-name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Precio:</label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  onChange={handleChange}
                  id="recipient-name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Duracion:</label>
                <input
                  type="number"
                  className="form-control"
                  name="duracion"
                  onChange={handleChange}
                  id="recipient-name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Anexos:</label>
                <input
                  type="number"
                  className="form-control"
                  name="anexos"
                  onChange={handleChange}
                  id="recipient-name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Descripcion:</label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  onChange={handleChange}
                  id="message-text"
                  style={styles.inputText}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Contenido:</label>
                <textarea
                  className="form-control"
                  name="contenido"
                  onChange={handleChange}
                  id="message-text"
                  style={styles.inputText}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
