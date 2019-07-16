import React from "react";
import { Link } from "react-router-dom"

const style ={
    marginLeft: "50%"
}

export default () => (
    <div style={style}>

    <h1>Upload a Video!</h1>
    
    <Link to="/instructor/cursos/tema">
    <h5>Volver</h5>
    </Link>
    </div>
)