import { Avatar, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Comments = (props) => {
        const {postId,id,name,email,body}=props.item;
    return (
        <div>
            <Grid container direction="column">
                <Grid item container>
                <Grid xs={false} sm={2}/>

                <Grid xs={false} sm={1}>
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5622AQGtFy2VldI6_w/feedshare-shrink_2048_1536/0?e=1606953600&v=beta&t=gpR0yWYzOIBxb8OVzXA7ZZmNSR9MiOz4urr26J1cBNs"></Avatar>
                </Grid>

                <Grid item xs={false} sm={7}>
                 <h5>{body}</h5>
                </Grid>



                <Grid xs={false} sm={2}/>
                </Grid>
            </Grid>
           
        </div>
    );
};

export default Comments;