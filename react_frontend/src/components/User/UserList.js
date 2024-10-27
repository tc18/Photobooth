import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './../../config/config'; // Adjust the path if necessary

const UserList = () => {
    const [users, setUsers] = useState([]);

    console.log("${API_URL}")

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${API_URL}/users`);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
