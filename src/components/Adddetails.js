import React, { useState } from "react";
import axios from "axios";
function Adddetails(props) {
  console.log(props.user.email);
  const userdata=props.user;
  const [email, setemail] = useState(props.user.email);
  const [name, setname] = useState(props.user.name);
  const [title, settitle] = useState("");
  const [skills, setskills] = useState("");
  const [exp, setexp] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");
  const addpost = (props) => {
    const post = {
      title: title,
      exp: exp,
      skills: skills,
      price: price,
      name: name,
      email: email,
      desc: desc,
    };
    console.log(post);
    axios
      .post("https://mern-freelancers.herokuapp.com/api/post/add", post)
      .then((res) => {
        alert("Post sucessfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
  {userdata ?  
    <div className="row justify-content-center">
    <div className="col-md-8">
    <div>
    <div className="form-group">
    <label>Title</label>
    <input
    className="form-control"
    type="text"
    placeholder="title"
    value={title}
    onChange={(e) => settitle(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Experience</label>
    
    <input
    className="form-control"
    type="text"
    placeholder="experience"
    value={exp}
    onChange={(e) => setexp(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Description</label>
    <br/>
    <textarea
    value={desc}
    rows="4"
    cols="50"
    onChange={(e) => setdesc(e.target.value)}
            ></textarea>
            </div>
            <div className="form-group">
            <label>Skills</label>
            
            <input
            type="text"
            className="form-control"
            placeholder="skills"
            value={skills}
            onChange={(e) => setskills(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Email</label>
            
            <input
            type="text"
              className="form-control"
              placeholder="price"
              value={props.user.email}
              onChange={(e) => setemail(e.target.value)}
              />
              <label>Name</label>

              <input
              type="text"
              className="form-control"
              placeholder="price"
              value={props.user.name}
              onChange={(e) => setname(e.target.value)}
              />
              <label>Price</label>
              <input
              type="text"
              className="form-control"
              placeholder="price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              />
              </div>
              <button className="btn btn-primary" onClick={addpost}>
            Add
            </button>
            </div>
            </div>
            </div>
            
        :<div>pls login</div>  
        }
        </div>
        );
      }
          export default Adddetails;
