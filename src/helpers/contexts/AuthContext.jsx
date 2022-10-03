import { createContext, useState } from "react";

const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  user: user || null
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE.user);
  return (
    <AuthContext.Provider value={{
      user: state,
      setUser: setState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;