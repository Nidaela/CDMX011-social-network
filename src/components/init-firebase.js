const firebaseConfig = {
  apiKey: 'AIzaSyBznzM-VtcAHSRFugVaR7Zv6T4r7XdZS7U',
  authDomain: 'dev-social-2b936.firebaseapp.com',
  projectId: 'dev-social-2b936',
  storageBucket: 'dev-social-2b936.appspot.com',
  messagingSenderId: '890780849640',
  appId: '1:890780849640:web:4b66820a90d152af0f005d',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Para aplicar la preferencia de navegador predeterminada..
firebase.auth().useDeviceLanguage();

export const myAuth = () => {
// instancia del objeto del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      console.log(credential, token, user);
      // const toFeed = () => onNavigate('/Feed');
      // return toFeed();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
