import { Button, Container, Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core/';
import React, { useState } from 'react';

const PostForm = ({allPostData, setAllPostData}) => {
    const [postData, setPostData] = useState('')

    const handlePostSubmit = () => {
        setAllPostData([...allPostData, postData]);
        // console.log({allPostData});
    }

    return (
        <Container>
            <Grid container>
            <Grid item xs={12}>
                <TextField
                    fullWidth 
                    multiline 
                    miniRows="6" 
                    id="standard-basic" 
                    label="Standard"
                    onChange={(e) => setPostData(e.target.value)}
                    />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handlePostSubmit}>Submit</Button>
            </Grid>
            </Grid>
            
        </Container>
    );
};

export default PostForm;