//import logo from './logo.svg';
//import './App.css';
// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from "./pages/DashboardPage";

import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<PrivateRoute><HomePage/></PrivateRoute>} /> {/* Default route */}
                    <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
                    <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} /> {/* Default route */}
                </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;