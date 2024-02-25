import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection after login
import './LoginForm.css';

const LoginPanel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', { // Update the URL to your actual login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                // Store the token in local storage or context
                // localStorage.setItem('token', data.token);

                // Redirect to another route upon successful login
                navigate('/main'); // Update '/main' to the path you want to redirect to
            } else {
                // Handle errors, such as displaying a message to the user
                console.error('Login failed:', data.message);
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login error: ' + error.message);
        }
    };

    return (
        <div className="login-panel">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginPanel;
