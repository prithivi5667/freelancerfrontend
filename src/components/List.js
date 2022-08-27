import React, { useState,useEffect } from 'react'

import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function List(props) {
 

  
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
    
      <div class="flex-container">
    

      {getpost.length === 0 ? <div>No Posts ....</div>:<div >
      {getpost.map((doc)=>

      
        
        <div class="flex-item-right">
       
       <div  >
        

  
        
    
     
     <div >
        <div  >
          {doc.title}
        </div>
        <div >
          {doc.siklls}
        </div>
        <div>
          {doc.exp}
        </div>
        <div >
          {doc.price}
        </div>
        <div >
         {doc.desc}
        </div>
      </div>
      <div>
        
        <button ><ButtonMailto label="Request a E-Mail" mailto={`mailto:${doc.email}`} /></button>
      </div>
    </div>
       
       
        </div>
        
       
       
    
       )}
       </div>
    }
    </div>
    
    )
  }

export default List
