import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import Tweetbox from "./Tweetbox";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = (props) => {
    const mystyles = makeStyles(theme => ({
        wrapicon: {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center"
        },
        menuitems: {
            listStyle: "none",
        },
        item: {
            fontSize: "30px"
        },
        iconclass: {
            fontSize: "35px",
            color: "#03a9f4"
        },
        menubutton: {
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "25px",
            width: "200px",
            display: "inline-flex",
            padding: "10px"
        },

    }))

    const user=props.user;
    console.log(user);
    const classes = mystyles();
    const firebaseConfig = {
        apiKey: "AIzaSyBPG8FQXhcRMfK-iosurtFAMb9wxBllLO8",
        authDomain: "vmapp-b39d0.firebaseapp.com",
        projectId: "vmapp-b39d0",
        storageBucket: "vmapp-b39d0.appspot.com",
        messagingSenderId: "29898261505",
        appId: "1:29898261505:web:fa5b3975dc836480642c00",
        measurementId: "G-60WYWZ8HZG"
      }
     
      const navigate=useNavigate();
    return (
        <>
            <div style={{marginRight:"20px",paddingTop:"20px"}}>
                <div className="menu">
                    <ul className={classes.menuitems}>
                    <TwitterIcon className={classes.iconclass} style={{fontSize:"35px",margin:"10px"}}/>
                        <li className={classes.item}>
                            <button className={classes.menubutton} onClick={()=>navigate("/home",{state:{user:user}})}>
                                <Typography variant="h5" className={classes.wrapicon}>
                                    <HomeIcon className={classes.iconclass}   style={{fontSize:"35px"}}/> Home
                                </Typography>
                            </button>
                        </li>
                        <li className={classes.item}>
                            <button className={classes.menubutton} onClick={()=>{navigate("/explore",{state:{user:user}})}}>
                                <Typography variant="h5" className={classes.wrapicon}>
                                    <TagIcon className={classes.iconclass}  style={{fontSize:"35px"}}/> Explore
                                </Typography>
                            </button>
                        </li>

                        <li className={classes.item}>
                            <button className={classes.menubutton}>
                                <Typography variant="h5" className={classes.wrapicon}>
                                    <NotificationsIcon className={classes.iconclass}  style={{fontSize:"35px"}} /> Notifictaions
                                </Typography>
                            </button>
                        </li>
                        <li className={classes.item}>
                            <button className={classes.menubutton} onClick={()=>{navigate("/profile",{state:{user:user}})}}>
                                <Typography variant="h5" className={classes.wrapicon}>
                                    <PersonIcon className={classes.iconclass}  style={{fontSize:"35px"}}  /> Profile
                                </Typography>
                            </button>
                        </li>
                        <li className={classes.item}>
                            <button className={classes.menubutton}>
                                <Typography variant="h5" className={classes.wrapicon}>
                                    <BookmarkIcon className={classes.iconclass}  style={{fontSize:"35px"}} /> Bookmarks
                                </Typography>
                            </button>
                        </li>
                        <br/>
                        <Tweetbox user={user}/>

                    </ul>
                </div>
                

            </div>
        </>

    )
}

export default Menu;