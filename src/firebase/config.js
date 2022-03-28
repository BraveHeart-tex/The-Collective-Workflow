import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDoZ6x7UEF_8kSWdTJ1Ll_r7x9k5mmtrdI',
  authDomain: 'collective-workflow-fbf89.firebaseapp.com',
  projectId: 'collective-workflow-fbf89',
  storageBucket: 'collective-workflow-fbf89.appspot.com',
  messagingSenderId: '683441604660',
  appId: '1:683441604660:web:abfcc4ab8dfd5f665de261',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
