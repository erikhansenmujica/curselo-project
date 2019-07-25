import React from "react"
import SideBar from "../alumnos/SideBar";
import Vimeo from '@u-wave/react-vimeo';

export default (props)=><div>
    <SideBar cursoId={props.cursoId} history={props.history}/>
    <div style={{marginLeft:"300px"}}>
 {props.topic.contentURL&&props.topic.contentURL.includes("vimeo")?
 <Vimeo
 width="900"
 video={ props.topic.contentURL.slice(14, props.topic.contentURL.length) }
 autoplay
/>:<a href={props.topic.contentURL} target="_blank">Open pdf</a>

 }
 {props.topic.content&&props.topic.content.length&&
   <p>{props.topic.content}</p>    
 }
    </div>
</div>