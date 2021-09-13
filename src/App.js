import React, { useState } from 'react';
import './App.css';
import BlogCart from './components/BlogCart';
import PostForm from './components/PostForm';

const App = () => {
    const [allPostData, setAllPostData] = useState([])

    return (
        <div ClassName="App">
            <PostForm allPostData={allPostData} setAllPostData={setAllPostData}/>
            <BlogCart allPostData={allPostData} setAllPostData={setAllPostData}/>
        </div>
    );
};

export default App;