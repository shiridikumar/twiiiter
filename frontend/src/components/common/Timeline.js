import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./../components.css"
import Postcard from "./Postcard";
import axios from "axios";

const Timeline = () => {
    
    const mystyles=makeStyles(theme=>({
        timeline:{
          width:"35%",
          borderLeft:"2px solid rgb(239, 243, 244)",
          borderRight:"2px solid rgb(239, 243, 244)",
          paddingTop:"30px",
      
        }
      }))
      const classes=mystyles();
      const row=[];
  const [cont,setcont]=useState();
  
  useEffect(async() => {
    await axios.get("http://localhost:4000/user/posts/posts").then(response => {
      const data=response.data.posts;
      console.log(data);
      for(var i=0;i<response.data.posts.length;i++){
        row.push(<><Postcard name={data[i].name} user_name={data[i].username} tweettext={data[i].tweettext}/><hr style={{color:"grey"}}/></>);
      }
    })
    setcont(row);
},[]);
    return (
        <div className={classes.timeline}>
            <h5 style={{ padding: "20px" }}>Home</h5>

            <div className="mytweet" style={{ borderBottom: "2px solid rgb(239, 243, 244)" }}>
            </div>
            <ul style={{ paddingLeft: "0px" }}>
               {cont}
            </ul>

        </div>
    )
}
export default Timeline;