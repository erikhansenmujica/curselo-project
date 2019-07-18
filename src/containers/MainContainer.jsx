import React, { Component } from "react";
import Main from "../components/Main";
import {firebase} from "../config/app"

export default class MainConTainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false
  }
}

componentDidMount(){
  if(window.location.href.includes("instructor"))
  (()=> {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
            this.setState({
                loading:true
            })
        })
        .catch(console.log);
    })()
}
  render() {
    return <Main loading={this.state.loading}/>;
  }
}
