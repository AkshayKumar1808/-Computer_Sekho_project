import React from 'react';
import { Navigate } from 'react-router-dom';


export const getJwtToken = () => localStorage.getItem('jwt1');

const PrivateRoute = ({ children }) => {
    const jwt = getJwtToken();

    if (!jwt) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
















// import { Navigate } from 'react-router-dom';

// function parseJwt(token) {
//   try {
//     const base64Url = token.split('.')[1];
//     const base64 = decodeURIComponent(atob(base64Url).replace(/(.)/g, function (m, p) {
//       return '%' + ('00' + p.charCodeAt(0).toString(16)).slice(-2);
//     }));
//     return JSON.parse(base64);
//   } catch (e) {
//     return null;
//   }
// }

// function isAuthenticated() {
//   const token = localStorage.getItem('jwt');
//   if (!token) return false;

//   const decodedToken = parseJwt(token);
//   if (!decodedToken) return false;

//   const currentTime = Date.now() / 1000;
//   return decodedToken.exp > currentTime;
// }

// const PrivateRoute = ({ element: Component }) => {
//   return isAuthenticated() ? Component : <Navigate to="/login" />;
// };

// export default PrivateRoute;

