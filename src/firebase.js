import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCkro1gTs5_SZdiuuhQowiJPjAIcePQ-XQ",
  authDomain: "react-dialog.firebaseapp.com",
  databaseURL: "https://react-dialog.firebaseio.com",
  projectId: "react-dialog",
  storageBucket: "",
  messagingSenderId: "1024196760380"
}
firebase.initializeApp(config)

export const database = firebase.database()
