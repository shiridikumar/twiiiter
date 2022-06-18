import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"
import Menu from "./Menu";
import Postcard from "./Postcard";
import Timeline from "./Timeline";

// import { fontSize } from "@mui/system";

const Home = (props) => {
  const mystyles=makeStyles(theme=>({
    card:{
      width:"400px",
      height:"400px"
    },
    home:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center"
    },
    timeline:{
      width:"40%",
      borderLeft:"2px solid rgb(239, 243, 244)",
      borderRight:"2px solid rgb(239, 243, 244)",
      paddingTop:"30px",
  
    }
  }))
  const classes=mystyles();
  return (
    <div className={classes.home}>
      <Menu />
      <Timeline/>
      <Menu/>
    </div>

  )
};

export default Home;
