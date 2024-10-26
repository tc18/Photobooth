import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserList from '../User/UserList';
import PostList from '../Post/PostList';
import CreatePost from '../Post/CreatePost/CreatePost';
import Header from '../Header/Header';
// import CreatePost from './components/Post/CreatePost/CreatePost';

const Dashboard = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    const [temp, setTemp] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div>
            <Header/>
            <div style={{height:70}}></div>
            <CreatePost />
            <PostList />
            {/* <UserList /> */}

        </div>
    );
};

export default Dashboard;