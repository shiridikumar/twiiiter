import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import Tweetbox from "./Tweetbox";
import Timeline from "./Timeline";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
const Profile = () => {
    const location = useLocation();
    const mystyles = makeStyles(theme => ({
        profile: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
        },
    }))
    const classes = mystyles();
    const user=location.state.user;
    const row=[]
    const [cont,setcont]=useState();
    const [flag,setflag]=useState(0);
    
    
    const display=["bio","predicted_grad_year","joining_year","course","relationship_status","email"]
    useEffect(()=>{
        for(const item in display){
            row.push(
                <>
                <div className="items" style={{display:"flex",flexDirection:"row"}}>
                <h6  style={{display:"inline"}}>{display[item]} : </h6>
                <h6 style={{color:"grey"}}>{user[display[item]]}</h6>
                </div>
                </>
            )

        }
        setcont(row);
        
        
    },[])

    return (
        <div className={classes.profile}>
            <Menu {...location.state} />
            <div className="middle" style={{width:"35%"}}>
                <div className="header" style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
                    <div className="wall" style={{backgroundColor: "grey", height: "100px" }}>
                    </div>
                    <img src={require("./../img/download.png")} style={{marginTop:"-10px"}}/>
                    <h3>{user.name}</h3>
                    <h4 style={{color:"grey"}}>@{user.user_name}</h4>
                    
                    <h5>following {user.following.length}</h5>
                    <h5>followers {user.followers.length}</h5>
                    <hr style={{width:"80%"}}/>
                    {cont}
                    <hr style={{width:"100%"}}/>
                </div>
            </div>
            <Timeline type="user" username={user.user_name} />
            {/* <Menu {...location.state} /> */}
        </div>


    )

}
export default Profile;