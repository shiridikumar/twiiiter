import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"

const Trendingcard=(props)=>{
    const mystyles = makeStyles(theme => ({
        card: {
            maxWidth: "100%",
            height:"100px",
            padding:"25px",
            // borderRadius: "10px"
        },
        hashtags:{
            fontWeight:"bolder"
        },
        count:{
            color:"grey",
            fontSize:"15px"
        }

    }))
    const classes=mystyles();
    return (
        
        <div className={classes.card} >
            <h6 className={classes.count}>{props.rank}. Trending</h6>
            <h5 className={classes.hashtags}>{props.hashtag}</h5>
            <h6 className={classes.count}>{props.counts} Tweets</h6>
        </div>

    );

}
export default Trendingcard;