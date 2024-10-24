import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import UserList from './components/UserList';
import PostList from './components/PostList';
import CreatePost from './components/Post/CreatePost/CreatePost';
import SignUp from './components/User/SignUp';
import SignIn from './components/User/SignIn';
import SignOut from './components/User/SignOut';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from "./Routes/ProtectedRoute";

const App = () => {
  const isAuthenticated = true // !!sessionStorage.getItem('user');
  console.log(isAuthenticated);

  return (

    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />}
        />
        <Route
          path="/createpost"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<CreatePost />} />}
        />
        <Route
          path="/posts"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<PostList />} />}
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>

  );
};

export default App;
