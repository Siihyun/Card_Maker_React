import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase';

const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  signInWithPopup(auth, provider)
    .then(() => {
      console.log('login succeeded');
    })
    .catch(() => {
      alert('login 과정에서 error가 발생하였습니다.');
    });
};

export default googleLogin;
