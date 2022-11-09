import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCHQLvUGae_EMrQzqmSSE4BwOMA6XWSEAM",
  authDomain: "iamneo-todo-50350.firebaseapp.com",
  databaseURL: "https://iamneo-todo-50350-default-rtdb.firebaseio.com",
  projectId: "iamneo-todo-50350",
  storageBucket: "iamneo-todo-50350.appspot.com",
  messagingSenderId: "905382760817",
  appId: "1:905382760817:web:d2ac7387ce8acd7c9b66d0"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
