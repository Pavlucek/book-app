import React from 'react';
import LoginPanel from './LoginForm'; // Adjust the path as necessary
import RegistrationForm from './RegisterForm'; // Adjust the path as necessary
import './AuthContainer.css'; // Assuming you might want to add some container-specific styles

const AuthContainer = () => {
    return (
        <div className="auth-container">
            <LoginPanel />
            <RegistrationForm />
        </div>
    );
};

export default AuthContainer;
