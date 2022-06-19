import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./../components.css"
import Postcard from "./Postcard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Menu from "./Menu"
import { useLocation, useNavigate } from "react-router-dom";
const Timeline = (params) => {


  const mystyles = makeStyles(theme => ({
    timeline: {
      width: "35%",
      borderLeft: "2px solid rgb(239, 243, 244)",
      borderRight: "2px solid rgb(239, 243, 244)",
      paddingTop: "30px",

    }
  }))
  const classes = mystyles();
  const row = [];
  const [cont, setcont] = useState();

  let { hashtag } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(async () => {
    var api_link

    if (params.type == "ALL")
      api_link = "http://localhost:4000/user/posts/posts"
    else if (params.type == "HASHTAG") {
      api_link = "http://localhost:4000/user/posts/hashtag/"
      console.log(hashtag)
      api_link += hashtag
    }
    else if(params.type=="user"){
      api_link="http://localhost:4000/user/posts/userid/";
      api_link+=params.username;
    }
    else
      console.log("invalid parameters")
    if(params.type!="user"){
    await axios.get(api_link).then(response => {
      const data = response.data.posts;
      console.log(data);
      for (var i = 0; i < response.data.posts.length; i++) {
        row.push(<><Postcard name={data[i].name} user_name={data[i].username} tweettext={data[i].tweettext} url={data[i].url} /><hr style={{ color: "grey" }} /></>);
      }
    })
  }
  else{
    await axios.post(api_link,{userid:params.username}).then(response => {
      const data = response.data.posts;
      console.log(data);
      for (var i = 0; i < response.data.posts.length; i++) {
        row.push(<><Postcard name={data[i].name} user_name={data[i].username} tweettext={data[i].tweettext} url={data[i].url} /><hr style={{ color: "grey" }} /></>);
      }
    })

  }
    setcont(row);
  }, []);

  return (
    <>
    {params.type == "HASHTAG" &&
    <div className="tl" style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
      {params.type == "HASHTAG" &&
        <Menu {...location.state} />
      }
      <div className={classes.timeline}>
        <h5 style={{ padding: "20px" }}>Home</h5>
        <hr style={{color:"grey"}}/>
        <ul style={{ paddingLeft: "0px" }}>
          {cont}
        </ul>

      </div>
      {params.type == "HASHTAG" &&
        <Menu  {...location.state} />
      }
    </div>
    }
    {
      params.type != "HASHTAG" &&
      <div className={classes.timeline}>
        <h5 style={{ padding: "20px" }}>Home</h5>
        <hr style={{color:"grey"}}/>
        <ul style={{ paddingLeft: "0px" }}>
          {cont}
        </ul>

      </div>
    }
    </>

  )
}
export default Timeline;