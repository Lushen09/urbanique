import { useUserContext } from "./useUserContext";

export const useLogout = () => {

    const { dispatch } = useUserContext();

    const logout = () => {

        // remove user from local storage
        localStorage.removeItem('user');
        window.location.reload();

        // disptach logout function

        dispatch({ type: 'LOGOUT' });
    }

    return { logout }
}