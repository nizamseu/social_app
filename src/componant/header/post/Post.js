import React from 'react';
import { Button, Card, CardActions, CardContent,Typography,} from '@material-ui/core';
import "./post.css";
import { NavLink } from 'react-router-dom';


const Post = (props) => {
  const {id,body,title}= props.item;
    return (
    <div className="postt">
        <Card  className="post2">
        <CardContent>
        <Typography>
            ID: {id}
        </Typography>
            <Typography variant="h5">
               {title}
            </Typography>
            <Typography>
                {body}
            </Typography>
        </CardContent>
        <CardActions className="btn">
            
             <NavLink to={"/details/"+id}> 
             <Button size="small" color="primary" >SEE MORE</Button>
             </NavLink>
             
      </CardActions>
        </Card>
    </div>
    );
};

export default Post;