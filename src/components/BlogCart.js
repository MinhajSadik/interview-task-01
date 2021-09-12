import { Button, Container, Paper, Typography } from '@material-ui/core';
import React from 'react';

const BlogCart = ({allPost, setAllPost}) => {
    const handleDeletePost = (postIndex) => {
        const newPost = allPost.filter((postData, index) => index !== postIndex);
        setAllPost([...newPost])
    }
    return (
        <Container>
            
                {
                    allPost.map((post, index) => (
                        <Paper key={index}>
                            <Typography>{post}</Typography>
                            <Button variant="secondary" onClick={() => handleDeletePost(index)}>Delete</Button>
                        </Paper>
                    ))
                }
            
        </Container>
    );
};

export default BlogCart; 