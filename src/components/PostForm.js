import { Button, Container, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const PostForm = ({allPost, setAllPost}) => {
    const [aboutPostData, setAboutPostData] = useState('')
    const handleSubmit = () => {
        setAllPost([...allPost, aboutPostData])
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
                    onChange={(e) => setAboutPostData(e.target.value)} 
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PostForm;