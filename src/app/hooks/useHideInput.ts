import { useState } from 'react';

export const useHideInput = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return {
        isPasswordVisible,
        togglePasswordVisibility,
    };
};
