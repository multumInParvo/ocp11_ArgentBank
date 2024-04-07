// Profile.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from "../redux/actions/userActions";
import EditUserName from '../components/EditUserName';
import '../styles/Profile.css';

function Profile() {
    const userData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstName: data.body.firstName, 
                            lastName: data.body.lastName, 
                            userName: data.body.userName,
                        }
                        dispatch(userProfile(userData));
                    } else {
                        console.log("Error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <main className="bg-dark">
            <h1 className='profile-title'>Welcome back, {userData.firstName} {userData.lastName}!</h1>
            <EditUserName />
        </main>
    );
}

export default Profile;
