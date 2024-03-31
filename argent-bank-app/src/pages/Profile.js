// Profile.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from "../redux/actions/userActions";
import '../styles/Profile.css';

function Profile() {
    const userProfileData = useSelector(state => state.user.userData);
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
                            firstName: data.body.firstName, 
                            lastName: data.body.lastName, 
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
        <main className="dark">
            <h1>Welcome back, {userProfileData.firstName} {userProfileData.lastName}!</h1>
        </main>
    );
}

export default Profile;