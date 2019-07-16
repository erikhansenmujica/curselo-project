import React from "react";
import { Link } from "react-router-dom"

const style ={
    marginLeft: "50%"
}

export default ({handleSubmit, handleChange}) => (
    <div style={style}>

    <h1>Upload Text</h1>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        
    </form>
    
    
    <Link to="/instructor/cursos/tema">
    <h5>Volver</h5>
    </Link>
    </div>
)