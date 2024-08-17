import { useState } from 'react';

const useAuth = () => {
    const getAuthToken = () => localStorage.getItem('jwt1');
    const getRefreshToken = () => localStorage.getItem('refreshToken');

    const refreshToken = async () => {
        try {
            const refreshToken = getRefreshToken();
            const response = await fetch('http://localhost:8080/api/pta/refreshToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const newToken = await response.text();
                console.log('New JWT Token:', newToken);
                localStorage.setItem('jwt', newToken);
                return newToken;
            } else {
                console.error('Failed to refresh token');
                handleUnauthorized();
                return null;
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            handleUnauthorized();
            return null;
        }
    };

    const handleUnauthorized = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Redirect to login page
    };

    const fetchData = async (url, options = {}) => {
        let token = getAuthToken();

        try {
            let response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Ensuring Content-Type is always set
                },
            });

            if (response.status === 401) { // Unauthorized
                token = await refreshToken();
                if (token) {
                    response = await fetch(url, {
                        ...options,
                        headers: {
                            ...options.headers,
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json', // Ensuring Content-Type is always set
                        },
                    });
                }
            }

            if (response.ok) {
                return await response.json();
            } else {
                console.error('Failed to fetch data:', response.statusText);
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    return { fetchData };
};

export default useAuth;
