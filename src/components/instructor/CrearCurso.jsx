import React from "react";


const styles={
  button:{
    marginLeft: "1%"
  }, 
  inputDescription:{
    height:"200px",
    
  }
}


export default ({handleChange, handleSubmit}) => (
  
  <div className="container">
  <br/>
  <br/>
    <form onSubmit={(e)=>{
      handleSubmit(e)
      document.querySelectorAll(".form-control").forEach(input=>input.value="")
    }}>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group" >
        <label>Descripción</label>
        <textarea
          style={styles.inputDescription}
          name="descripcion"
          type="text"
          className="form-control"
          onChange={handleChange}

        />
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input
          name="precio"
          type="number"
          className="form-control"
          
          onChange={handleChange}

        />
      </div>
      <div className="form-group">
        <label>Duración</label>
        <input
          name="duracion"
          type="text"
          className="form-control"
         
          onChange={handleChange}

        />

<div>


<label htmlFor='icon'>PDF File</label>


<input accept='.pdf' type='file' id='uploadPdf' name='icon'/> 
    

</div>



<button type='submit'>Upload PDF!</button> 



      </div>
      <button type="submit" className="btn btn-primary">
        Crear Curso
      </button>
      <button type="submit" className="btn btn-primary">
        Cancelar
      </button>
    </form>
  </div>
);
