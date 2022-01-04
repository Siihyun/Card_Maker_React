import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase';

const githubLogin = async (): Promise<boolean> => {
  const provider = new GithubAuthProvider();
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

export default githubLogin;
