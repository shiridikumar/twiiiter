const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPG8FQXhcRMfK-iosurtFAMb9wxBllLO8",
    authDomain: "vmapp-b39d0.firebaseapp.com",
    projectId: "vmapp-b39d0",
    storageBucket: "vmapp-b39d0.appspot.com",
    messagingSenderId: "29898261505",
    appId: "1:29898261505:web:fa5b3975dc836480642c00",
    measurementId: "G-60WYWZ8HZG"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);