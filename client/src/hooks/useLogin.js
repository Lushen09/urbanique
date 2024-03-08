import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useLogin = () => {
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setLoginError(null);

            const response = await fetch('https://urbanique-ecommerce-j2jjss19w-lushen09s-projects.vercel.app//api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password}),
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setLoginError(json.error);
                console.log(json.error);

                return false; 
            }

            if (response.ok) {
                //save user to local storage
                localStorage.setItem('user', JSON.stringify(json));

                // update auth context
                dispatch({ type: 'LOGIN', payload: json });

                setIsLoading(false);

                return true;
            }

    }

    return { login, loginError, isLoginLoading}

}