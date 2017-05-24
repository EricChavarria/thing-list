import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCaMr_MZ8-IIZM-Wj20WCl2dsRyxxgM1Xc",
    authDomain: "thing-list-f3af8.firebaseapp.com",
    databaseURL: "https://thing-list-f3af8.firebaseio.com",
    projectId: "thing-list-f3af8",
    storageBucket: "thing-list-f3af8.appspot.com",
    messagingSenderId: "181159628450"
})

const db = database(app)

export default Rebase.createClass(db)