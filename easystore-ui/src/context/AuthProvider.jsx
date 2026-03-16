import {useCallback, useEffect, useMemo, useReducer} from "react";
import {AUTH_ACTIONS, authReducer} from "./AuthReducer";
import {AuthContext} from "./AuthContext";

const initialAuthState = () => {
    try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("jwtToken");
        if (storedUser && storedToken) {
            return {
                user: JSON.parse(storedUser),
                jwtToken: storedToken,
                isAuthenticated: true
            }
        }
        return {
            user: null,
            jwtToken: null,
            isAuthenticated: false
        }
    } catch (error) {
        console.error("Error creating auth state", error);
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
        return {
            user: null,
            jwtToken: null,
            isAuthenticated: false
        }
    }
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, [], initialAuthState);

    useEffect(() => {
        if (authState.user && authState.jwtToken) {
            localStorage.setItem("user", JSON.stringify(authState.user));
            localStorage.setItem("jwtToken", authState.jwtToken);
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("jwtToken");
        }
    }, [authState.user, authState.jwtToken]);

    const login = useCallback((user, jwtToken) => {
        dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: {
                user, jwtToken
            }
        });
    }, []);

    const logout = useCallback(() => {
        dispatch({type: AUTH_ACTIONS.LOGOUT})
    }, []);

    const childrenProp = useMemo(() => ({
        ...authState,
        login,
        logout
    }), [authState, login, logout]);

    return (
        <AuthContext.Provider value={childrenProp}>
            {children}
        </AuthContext.Provider>
    )
}