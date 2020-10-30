import React from 'react';
import { Card, Container, Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';

const Details = () => {
    const [detailsData,setDetailsdata]=useState([]);
    const {key}= useParams();
    const [comment,setComment]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setDetailsdata(data))
    },[])
    
    
       const singleData= detailsData.length>0 && detailsData.find(item=> key==item.id);
    
   

   

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments?postId="+singleData.userId)
    .then(res=>res.json())
    .then(data=>setComment(data))
},[singleData])

    return (
        <div>
        <Grid container direction="column">
      
            <Grid item container>
                <Grid xs={false} sm={2}/>

                <Grid item xs={false} sm={8}>
                    <Card>
                        <Container>
                        <Typography >
                            <h3>Id: {singleData.id}</h3>
                            <h3>Tittle: {singleData.title}</h3>
                            <h5>Description: {singleData.body}</h5>
                        </Typography>
                        </Container>
                    </Card>

                    <Card>
                        <Container>
                            <p>All Commnets Are Here </p>
                            <p>Total Comments : {comment.length}</p>
                                {comment.length>0 && comment.map(item=> <Comments item={item}></Comments>)}
                                
                        </Container>
                    </Card>
                </Grid>
                    

                <Grid xs={false} sm={2}/>
            </Grid>
        </Grid>


        </div>
    );
};

export default Details;