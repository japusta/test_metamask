import { useState } from 'react';
import { useWallet } from '../../../shared/hooks/useWallet';

export const useParticipantForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ username?: string; email?: string }>({}); // Состояние для ошибок
    const { walletAddress } = useWallet();

    const validateForm = () => {
        const newErrors: { username?: string; email?: string } = {};
        let isValid = true;
        // Валидация имени
        if (!username.trim()) {
        newErrors.username = 'Name is required';
        isValid = false;
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая регулярка для проверки email
        if (!email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
        } else if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!walletAddress) {
        console.log('Please connect your wallet before registering');
        return;
        }
        if (validateForm()) {
        setIsFormSubmitted(true);
        }
    };

    const handleListMeClick = (onSubmit: (data: { username: string; email: string; address: string }) => void, isListed: boolean) => {
        if (isListed || !walletAddress || !validateForm()) return;
        onSubmit({ username, email, address: walletAddress });
    };

    return {
        username,
        setUsername,
        email,
        setEmail,
        isFormSubmitted,
        walletAddress,
        handleFormSubmit,
        handleListMeClick,
        errors,
    };
};
