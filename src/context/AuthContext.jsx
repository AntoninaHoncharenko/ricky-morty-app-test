import { useState, useEffect } from 'react';
import { useContext, createContext } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app, provider } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const auth = getAuth(app);

  const logIn = () => {
    signInWithPopup(auth, provider);
    // .then(result => {
    //   setUser(result.user.displayName);
    //   localStorage.setItem('user', result.user.displayName);
    // })
    // .catch(error => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user.displayName);
      localStorage.setItem('user', user.displayName);
    });
    return () => unsubscribe();
  }, [auth]);

  const logOut = () => {
    localStorage.setItem('user', '');
    setUser('');
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ logIn, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
