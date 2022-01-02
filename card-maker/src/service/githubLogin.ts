import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase';

const githubLogin = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth(firebaseApp);
  console.log('hi..');
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('github login succeeded');
    })
    .catch((error) => {
      alert('login중 에러가 발생하였습니다.');
    });
};

export default githubLogin;
