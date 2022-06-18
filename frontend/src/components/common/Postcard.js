import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"
import Menu from "./Menu";

const Postcard = (props) => {
    const mystyles = makeStyles(theme => ({
        card: {
            maxWidth: "400px",
            maxHeight: "600px",
            borderRadius:"10px"
        },
        userdetails:{
            display:"flex",
            flexDirection:"row",
            // justifyContent:"center",

            alignItems:"center"
        },
        postcard:{
            display:"flex",
            flexDirection:"row",
            padding:"25px"
            // borderBottom:"2px solid rgb(239, 243, 244)"
        },
        cardcontent:{
            display:"flex",
            flexDirection:"column",
            paddingLeft:"10px",
            paddingRight:"10px",
        },
        attach:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"

        },
    }))
    const classes = mystyles();

    return (
        <div className={classes.postcard}  >
            <div className={classes.profilepic}>
                <Avatar alt="profile-pic" src={require("./../img/temp.jpg")} />
            </div>
            <div className={classes.cardcontent}>
                <div className={classes.userdetails}>
                    <h6 style={{fontWeight:"bolder",marginRight:"5px"}}>{props.name}</h6>
                    <h6 style={{fontWeight:"normal" ,color:"grey"}}> @{props.user_name} </h6>
                </div>
                <p className="card-texasdt">{props.tweettext}</p>
                {/*<div className={classes.attach}>
                    <img src={require("./../img/rrr.jpeg")} className={classes.card} alt="..." />
                </div>*/}
            </div>
            
        </div>
    )
}
export default Postcard;