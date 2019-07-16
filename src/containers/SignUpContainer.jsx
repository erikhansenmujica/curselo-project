import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { auth, firebase } from "../config/app";
import { connect } from "react-redux";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  // componentDidMount(){
  //   const email = this.state.email;
  //   const password = this.state.password;
  //   auth.signInWithEmailAndPassword(email, password).catch(error => {
  //     let errorCode = error.code;
  //     let errorMessage = error.message;
  //     console.log("logueado el usuario");
  //   });
      
  // }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSignUp(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    auth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log('usuario creado')
    });
  }
  handleSignIn(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("logueado el usuario");
    });
  }
  handleLogOut(e) {
    e.preventDefault();
    auth.signOut().then(() => console.log("user signout"));
  }

  render() {
    return (
      <div>
        <SignUp
          handleChange={this.handleChange}
          handleSignUp={this.handleSignUp}
          handleLogOut={this.handleLogOut}
        />
        <SignIn 
        handleSignIn={this.handleSignIn} 
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  
  return {
    user: firebase.auth().currentUser
  };
};

export default connect(mapStateToProps)(SignUpContainer);
