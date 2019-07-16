import React from "react";
import { Link } from "react-router-dom";

const style = {
  marginLeft: "50%"
};

export default ({ handleUpload, handleSetFile }) => (
  <div style={style}>
    <h1>Upload a File!</h1>

    <form action="" onSubmit={handleUpload}>
      <label htmlFor="icon">PDF File</label>
      <input type="file" name="pdf" accept=".pdf" onChange={handleSetFile} />
      <button type="submit">Upload PDF!</button>
    </form>

    <Link to="/instructor/cursos/tema">
      <h5>Volver</h5>
    </Link>
  </div>
);
