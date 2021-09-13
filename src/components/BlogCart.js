import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';

const BlogCart = ({allPostData, setAllPostData}) => {
    const handlePostDelete = (postIndex) => {
        const newPost = allPostData.filter((postData, index) => index !== postIndex);
        setAllPostData([...newPost])
    }
    return (
        <Container>
            <Grid>
                {
                    allPostData.map((post, index) => (
                        <div key={index}>
                            <div>{post}</div>
                            <Button variant="contained" color="secondary" onClick={() => handlePostDelete(index)}>Delete</Button>
                        </div>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default BlogCart;