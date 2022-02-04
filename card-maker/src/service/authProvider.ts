import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import firebaseApp from './firebase';

const socialLogin = async (method: 'Github' | 'Google'): Promise<boolean> => {
  const provider =
    method === 'Github' ? new GithubAuthProvider() : new GoogleAuthProvider();
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

export default socialLogin;
