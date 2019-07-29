import React, { Component } from "react";
import {connect} from "react-redux"
import Main from "../components/Main";
import {firebase} from "../config/app"
import {auth} from "../config/app"
import {createUser} from "../action-creators/createUser"

class MainConTainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingInstructor: false,
      loadingAlumno: false,
    };
    this.logear=this.logear.bind(this)
    this.logearAlumno=this.logearAlumno.bind(this)
  }

logear (){
  auth.onAuthStateChanged((user)=> {
    if (user) {
      this.setState({
        loadingInstructor:true
    })
    } else {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
            this.setState({
              loadingInstructor:true
            })
            return user
        })
    }
  });   
}
logearAlumno(){
  auth.onAuthStateChanged((user)=> {
    if (user) {
      this.props.logUser(user)
      this.setState({
        loadingAlumno:true
    })
    } else {
      this.setState({
        loadingAlumno:true
    })
    }
  });   

}
  render() {
    return <Main loadingInstructor={this.state.loadingInstructor} loadingAlumno={this.state.loadingAlumno} logear={this.logear} logearAlumno={this.logearAlumno}history={this.props.history}/>;
  }
}

const mapDispatchToProps = (dispatch) =>({
    logUser: (user)=>dispatch(createUser(user))

})

export default connect(null, mapDispatchToProps)(MainConTainer)