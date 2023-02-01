const environment = {
  firebase: {
    projectId: 'michat-1b726',
    appId: '1:568915690205:web:5dead3772ce64d1ee75134',
    databaseURL: 'https://michat-1b726.firebaseio.com',
    storageBucket: 'michat-1b726.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDN1rSyQ_-xdDO_hZme38_196sj1wR0VGQ',
    authDomain: 'michat-1b726.firebaseapp.com',
    messagingSenderId: '568915690205',
  },
};

  export function getFirebaseConfig() {
    if (!environment.firebase || !environment.firebase.apiKey) {
      throw new Error('No Firebase configuration object provided.');
    } else {
      return environment.firebase;
    }
};