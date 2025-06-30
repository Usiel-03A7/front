import { createContext, useContext, useState } from 'react';
import { register, login } from '../controllers/AuthController';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password, name) => {
    try {
      const newUser = register(email, password, name);
      setUser(newUser);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  const signIn = (email, password) => {
    try {
      const loggedUser = login(email, password);
      setUser(loggedUser);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
