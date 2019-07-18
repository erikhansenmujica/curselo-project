import React from "react";
import { Link } from "react-router-dom";

const style = {
  marginLeft: "50%"
};

export default ({ handleUpload, handleSetFile, courseId, sectionId}) => (
  <div style={style}>
    <h1>Upload a video!</h1>

<form action="" onSubmit={handleUpload}>
  <label htmlFor="icon">video</label>
  <input type="file" name=".pdf" onChange={handleSetFile} />
  <button type="submit">Upload VIDEO NOWWW!</button>
</form>


    <Link to={`/instructor/cursos/${courseId}/section/${sectionId}`}>
      <h5>Volver</h5>
    </Link>
  </div>
);