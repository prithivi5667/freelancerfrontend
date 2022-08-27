import Axios from 'axios'
import React, { useState } from 'react'

function Allpost() {
    const [getallpost,setallpost]=useState([])
    const getall=()=>{
        Axios.get("https://mern-freelancers.herokuapp.com/api/post").then(res=>{
            setallpost(res.data)
        })
    }
    useEffect(() => {
      getall()
    
    }, [])
    console.log(getallpost)
  return (
    <div>
      
    </div>
  )
}

export default Allpost
