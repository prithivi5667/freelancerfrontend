import React, { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../App.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function List(props) {
 

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    const [getpost,setgetpost]=useState([])
 const getposts=async ()=>{
    axios.get("http://localhost:8000/api/post").then(res=>{
      setgetpost(res.data)
    }).catch(err=>{
        console.log(err)
    })
 }
useEffect(() => {
 getposts()

}, [])

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};
  return (
    <div className='sam'>
      {getpost.length === 0 ? <div>No Posts ....</div>:<div>
      {getpost.map((doc)=>
        
        <Grid  className='items'item xs={6} md={4} >
        <Item>
        
        
     <Card sx={{ maxWidth: 345 }}>
     
     <CardContent className='content'>
        <Typography gutterBottom variant="h5" component="div">
          {doc.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {doc.siklls}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {doc.exp}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {doc.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {doc.desc}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"><ButtonMailto label="Request a E-Mail" mailto={`mailto:${doc.email}`} /></Button>
      </CardActions>
    </Card>
       </Item>
       {console.log(doc.email)}
       </Grid>
       
       )}
       </div>
    }
    </div>
    
  )
}

export default List
