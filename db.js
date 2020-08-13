// Your web app's Firebase configuration
const  firebaseConfig = {
    apiKey: "AIzaSyC583PdlqD1xfiojM5zYcHsVppz15XC_O8",
    authDomain: "final-contact-book.firebaseapp.com",
    databaseURL: "https://final-contact-book.firebaseio.com",
    projectId: "final-contact-book",
    storageBucket: "final-contact-book.appspot.com",
    messagingSenderId: "798286090094",
    appId: "1:798286090094:web:d496b0da33ab45d6d2bb7f"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  // db.collection('contacts').get()
  //     .then(data => data.forEach(doc => console.log(doc.data())))
