import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';

const App = () => {
    const [allPostData, setAllPostData] = useState([])
    return (
        <div ClassName="App">
            <PostForm/>
        </div>
    );
};

export default App;