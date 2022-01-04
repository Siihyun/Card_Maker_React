import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase';

const googleLogin = async (): Promise<boolean> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  return signInWithPopup(auth, provider)
    .then(() => {
      return true;
    })
    .catch(() => {
      alert('login중 에러가 발생하였습니다.');
      return false;
    });
};

export default googleLogin;
