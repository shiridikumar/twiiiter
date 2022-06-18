import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./../components.css"
import Postcard from "./Postcard";

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
    return (
        <div className={classes.timeline}>
            <h5 style={{ padding: "20px" }}>Home</h5>

            <div className="mytweet" style={{ borderBottom: "2px solid rgb(239, 243, 244)" }}>
            </div>
            <ul style={{ paddingLeft: "0px" }}>
                <Postcard />
                <Postcard/>
                <Postcard />
                <Postcard/>
                <Postcard />
                <Postcard/>
                <Postcard />
                <Postcard/>
                <hr style={{ color: "grey" }} />
            </ul>

        </div>
    )
}
export default Timeline;