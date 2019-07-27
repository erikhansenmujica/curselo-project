import React from "react";
import CrearCurso from "../../components/instructor/CrearCurso";
import { firebase, db } from "../../config/app";
import { connect } from "react-redux";
import { auth } from "../../config/app";
import { createCourse } from "../../action-creators/cursosInstructor";

class CrearContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: 0,
      image: "",
      imageUrl1: "",
      imageUrl2: "",
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadImg = this.handleUploadImg.bind(this);
    this.handleSetImg = this.handleSetImg.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    //if(!this.state.imageUrl1.length){ alert("Debe cargar una imagen")}
    // else if(!this.state.name.length) alert("Debe cargar un nombre")
    // else if(!this.state.price) alert("Debe cargar un precio para su curso")
    // else if(!this.state.description.length) alert("Debe cargar una descripcion de su curso")
    if (this.state.imageUrl1.length && this.state.name.length && this.state.price && this.state.description.length)this.props
      .newCourse({
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        ownerId: auth.currentUser.uid,
        images: {
          imagen1: {
            url: this.state.imageUrl1
          }
        }
      })
      .then(data => {
        this.props.history.push(`/instructor/cursos/${data.id}`);
      });
  }

  handleSetImg(e) {
    e.preventDefault();
    let img = e.target.files[0];
    this.setState({
      image: img
    });
  }

  handleUploadImg(e) {
    this.setState({
      loading: false
    })
    e.preventDefault();
    const file = this.state.image;
    const storageRef = firebase.storage().ref(`/images/${auth.currentUser.uid}/${file.name}`);
    storageRef.put(file).then(file => console.log("FILE?", file))
    storageRef.getDownloadURL()
    .then(data => { this.setState({
      imageUrl1: data,
      loading: true
    })
  })
  }

  render() {
    return (
      <div>

      <CrearCurso
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleUpload={this.handleUpload}
        handleSetImg={this.handleSetImg}
        handleUploadImg={this.handleUploadImg}
        imageUrl1={this.state.imageUrl1}
        imageUrl2={this.state.imageUrl2}
        loading={this.state.loading}
        name={this.state.name}
        price={this.state.price}
        description={this.state.description}
        />
        
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newCourse: obj => dispatch(createCourse(obj))
});

export default connect(
  null,
  mapDispatchToProps
)(CrearContainer);
