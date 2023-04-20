import jwt_decode from "jwt-decode";

export const isValidToken = () => {
    const token = localStorage.getItem("token");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const sessionId = localStorage.getItem("sessionLogin");
    const isAuth = token && isAuthenticated && sessionId;
    if (!isAuth) return false;
    try {
        const jwt: any = jwt_decode(token);
        return Date.now() / 1000 < jwt.exp;
    } catch (e) {
        return false;
    }
};