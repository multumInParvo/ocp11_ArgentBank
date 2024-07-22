// EditUserName component

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername } from '../redux/actions/userActions'
import '../styles/EditUserName.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function EditUserName() {
    const token = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user.userData);
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [userName, setUsername] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (isEditingMode) {
            setUsername(userData.userName);
        }
    }, [isEditingMode, userData.userName]);

    const handleToggleEditMode = () => {
        setIsEditingMode(!isEditingMode);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ userName }),
            });

            if (response.ok) {
                const data = await response.json();
                const userName = data.body.userName;
                dispatch(updateUsername(userName));
                setIsEditingMode(false);
            } else {

                console.error('Error updating username:', await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCancelEdit = () => {
        setIsEditingMode(false);

        setUsername('');
    };

    return (
        <div className='edit-profile-container'>
            {isEditingMode ? (
                <form className='edit-profile' onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <h2 className='edit-profile-title'>Edit profile</h2>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={userName} onChange={handleUsernameChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" value={userData.firstName} disabled />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" value={userData.lastName} disabled />
                    </div>
                    <button className='edit-user-button' type="submit">Save Changes</button>
                    <button className='edit-user-button' type="button" onClick={handleCancelEdit}>Cancel</button>
                </form>
            ) : (
                <button className='edit-user-button' onClick={handleToggleEditMode}>Edit Name</button>
            )}
        </div>
    );
}

export default EditUserName;