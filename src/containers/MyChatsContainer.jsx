import React, { Component } from "react";
import { db, auth } from "../config/app";
import MyChats from "../components/MyChats";

export default class MyChatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
    this.userId = auth.currentUser.uid;
    this.returnToHome = this.returnToHome.bind(this);
  }

  returnToHome() {
    this.props.history.goBack();
  }

  componentDidMount() {
    db.collection("usuarios")
      .doc(this.userId)
      .collection("CHATS")
      .get()
      .then(snapshot => {
        let msgs = [];
        snapshot.forEach(doc => {
          let chat = doc.data();
          msgs.push(chat);
        });
        this.setState({
          chats: msgs
        });
      });
  }

  render() {
    return (
      <MyChats
        messages={this.state.chats}
        currentUser={auth.currentUser}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.message}
        handleClick={this.handleClick}
        returnToHome={this.returnToHome}
      />
    );
  }
}
