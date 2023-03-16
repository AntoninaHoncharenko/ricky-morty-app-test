import { useState } from 'react';
import { useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, provider } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const auth = getAuth(app);
  const navigate = useNavigate();

  const logIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user.displayName);
        navigate('/main', { replace: true });
        localStorage.setItem('user', result.user.displayName);
      })
      .catch(error => console.log(error));
  };

  const logOut = () => {
    localStorage.setItem('user', '');
    console.log('logOut');
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
