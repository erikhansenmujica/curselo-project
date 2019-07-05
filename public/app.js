document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
  
  
    // const myPost = db.collection("posts").doc("firstpost");
  
  });
  
  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log("YO SOY USER", user);
    })
    .catch(console.log);
  }
  
  
  function updatePost(e) {
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');
    myPost.update({title : e.target.value})
  }
  module.exports = db