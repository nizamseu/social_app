import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Data = () => {
    const [postData,setPostdata]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPostdata(data))
    },[])

    return (
        
    <Grid container direction="column">
      
            <Grid item container>
                <Grid xs={false} sm={2}/>

                <Grid item xs={false} sm={8}>
                    {
                         postData.map(item => <Post 
                         key={item.id}
                         item={item}
                         ></Post>)
                    }
                </Grid>


                <Grid xs={false} sm={2}/>
            </Grid>
    </Grid>
    );
};

export default Data;