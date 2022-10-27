import { createContext } from "react";

const session = localStorage.getItem('lawOfficeAuth');

export const defaultUser = {
	user: session ? JSON.parse(session) : null
};

export const AuthContext = createContext(defaultUser);