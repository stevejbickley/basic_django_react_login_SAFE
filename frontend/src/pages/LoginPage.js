import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

    const {loginUser} = useContext(AuthContext);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f9fc',
        fontFamily: 'Arial, sans-serif',
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={loginUser} style={formStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    style={inputStyle}
                />
                <input type="submit" value="Login" style={buttonStyle} />
            </form>
        </div>
    )
}

export default LoginPage