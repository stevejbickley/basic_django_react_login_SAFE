import React from 'react';

const DashboardPage = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Welcome to the Dashboard!</h1>
            <p>This is another protected page only accessible by logged-in users.</p>
        </div>
    );
};

export default DashboardPage;