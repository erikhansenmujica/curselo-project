import React from "react";
import {Link} from "react-router-dom";

export default ({curso}) => (
    <div style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"#F3F6FC"}}>
        <div style={{
            borderRadius:"4px",
            backgroundColor:"white",
            height: "60vh",
            width: "80vw",
            marginLeft:"10%",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor:"#E4E9F4",
            display:"flex",
            flexDirection: "row",
        }}>
                <div style={{
                    float:"left"
                }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFiS3k5Xqg9CFuoghOVJPtpO8Wgz4QpaVbx0Ei5dOJoBWKoMY" alt="" height="300vh"/>
                </div>
            <div style={{
                marginTop:"5%",
                float:"left"
            }}>
                {curso&&<h3>{curso.titulo}</h3>}
                {curso&&<p>{curso.descripcion}</p>}
            </div>
        </div>


    </div>
)