import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserList from '../UserList';
import PostList from '../PostList';
import CreatePost from '../Post/CreatePost/CreatePost';
import Header from '../Header/Header';
// import CreatePost from './components/Post/CreatePost/CreatePost';

const Dashboard = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    const [temp, setTemp] = useState('');

    useEffect(() => {
        if (!user) {
            // Redirect to sign-in page if the user is not logged in
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div>
            <Header/>
            {/* <h1>Welcome to the Dashboard {user.username}</h1> */}
            <input type="text" value={temp}></input>

            <CreatePost />
            <PostList />
            {/* <UserList /> */}

        </div>
    );
};

export default Dashboard;