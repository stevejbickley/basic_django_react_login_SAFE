import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Header.css'; // Optional: For additional styling

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handlers for navigation
    const handleNavigateHome = () => {
        // Add any additional logic here before navigation
        console.log("Navigating to Home...");
        navigate('/');
    };

    const handleNavigateDashboard = () => {
        // Add any additional logic here before navigation
        console.log("Navigating to Dashboard...");
        navigate('/dashboard');
    };

    // Handler for logout to prevent default link behavior
    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser();
    };

    return (
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <button onClick={handleNavigateHome} className="nav-link-button">Home</button>
                </li>
                {user ? (
                    <>
                        <li className="nav-item">
                            <button onClick={handleLogout} className="nav-link-button">Logout</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleNavigateDashboard} className="nav-link-button">Dashboard</button>
                        </li>
                    </>
                ) : (
                    <li className="nav-item">
                        <button onClick={() => navigate('/login')} className="nav-link-button">Login</button>
                    </li>
                )}

                {user && (
                    <li className="nav-item welcome-message">
                        <span>Hello, {user.username}!</span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;