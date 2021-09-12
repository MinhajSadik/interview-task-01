import React, { useState } from 'react';
import BlogCart from './components/BlogCart';
import PostForm from './components/PostForm';

const App = () => {


    const [allPost, setAllPost] = useState([])
    return (
        <div ClassName="App">
            <PostForm 
            allPost={allPost} 
            setAllPost={setAllPost}
            />
            <BlogCart 
            allPost={allPost} 
            setAllPost={setAllPost}
            />
        </div>
    );
};

export default App;