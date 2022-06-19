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

    return (
        <div className={classes.profile}>
            <Menu {...location.state} />
            <Timeline type="ALL" />
            <Menu {...location.state} />

        </div>


    )

}
export default Profile;