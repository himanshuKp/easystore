export const AUTH_ACTIONS = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGOUT: "LOGOUT"
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                jwtToken: action.payload.jwtToken,
                user: action.payload.user,
                isAuthenticated: true
            }
        case AUTH_ACTIONS.LOGOUT:
            return {
                ...state,
                jwtToken: null,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}