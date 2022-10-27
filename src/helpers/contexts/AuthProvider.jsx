import { useContext, useState } from "react";
import { AuthContext, defaultUser } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser.user);

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};