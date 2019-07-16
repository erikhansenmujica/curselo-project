import React from "react";
import SectionTopicContainer from "../../containers/instructor/Section&TopicContainer" 

const styles = {
  nav: {
    width:"60vw"
  },
  button: {
    display: "inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div style={{  
    marginLeft:"15%",
    marginTop:"-2%"}}>
    {props.curso.name && (
      <div >
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0">Curso: {props.curso.name}</h5>
          </div>
        </div>
        <SectionTopicContainer cursoId={props.curso.id}/>
      </div>
    )}
      <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">

        <div class="md-form mb-5">
          <i class="fas fa-tag prefix grey-text"></i>
          <input type="text" id="form32" class="form-control validate"/>
          <label data-error="wrong" data-success="right" for="form32">Subject</label>
        </div>

      
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-unique">Send <i class="fas fa-paper-plane-o ml-1"></i></button>
      </div>
    </div>
  </div>
</div>

<div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch
    Modal Contact Form</a>
</div>
  </div>
);
