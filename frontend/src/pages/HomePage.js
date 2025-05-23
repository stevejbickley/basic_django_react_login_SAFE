import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext';

const HomePage = () => {
    const { user } = useContext(AuthContext);

    const { authTokens, logoutUser } = useContext(AuthContext);
    let [profile, setProfile] = useState([])

    useEffect(() => {
        getProfile()
    },[])

    const getProfile = async() => {
        let response = await fetch('http://127.0.0.1:8000/auth_api/profile', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        let data = await response.json()
        console.log(data)
        if(response.status === 200){
            setProfile(data.user)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    return (
        user ? (
            <div>
                <p>You are logged in to the homepage!</p>
                <p>Name: {profile.first_name || ""} {profile.last_name || ""}</p>
                <p>Email: {profile.email}</p>
            </div>
        ):(
            <div>
                <p>You are not logged in, redirecting...</p>
            </div>
        )
    )
}

export default HomePage