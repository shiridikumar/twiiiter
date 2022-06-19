import { ClassNames } from "@emotion/react"
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles"
import axios from "axios";
import Menu from "./Menu";
import Trendingcard from "./Trendingcard";
import { useLocation, useNavigate } from "react-router-dom";

const HashRecord_comp = (props) => {
    const mystyles = makeStyles(theme => ({
        trend_record: {
            display: "flex",
        },
       
    }))
    const Classes = mystyles();

    return (
        <div className={Classes.trend_record}>
            {props.hashTag}
        </div>
    )
}

export const HashRecord_list_comp = (props) => {
    var hashtags = ["Not working", "hello"];
    const mystyles = makeStyles(theme => ({
        trend_record_list: {
            display: "flex",
            width:"35%",
            flexDirection:"column",
            borderLeft: "2px solid rgb(239, 243, 244)",
            borderRight: "2px solid rgb(239, 243, 244)",
            // paddingTop: "30px",
        },
        trending: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }
    }))
    const Classes = mystyles();
    const [hash_tags_list, setlist] = useState()
    const row = []
    const location=useLocation();
    const navigation=useNavigate();

    useEffect(async () => {
        await axios.get("http://localhost:4000/user/posts/trendinghashtags").then(response => {
            hashtags = response.data.hashtags;
            console.log(hashtags);
            hashtags.map((hashtag,index) => {
                row.push(<><Trendingcard hashtag={hashtag.hash_tag} rank={index+1} counts={hashtag.counts} {...location.state}/><hr style={{color:"grey"}}/></>)
                //row.push(<h1>{hashtag.hash_tag}</h1>)
            })
            setlist(row)
            console.log(row)
        })

    }, []);

    return (
        <div className={Classes.trending}>
            
            <Menu {...location.state}/>
            <div className={Classes.trend_record_list}>
                <div className="header">
                    <img src={require("./../img/trending.jpg")} style={{width:"100%",height:"200px",borderRadius:"5px"}}/>
                </div>
                <ol style={{padding:"0px"}}>
                    {hash_tags_list}
                </ol>
            </div>
            <Menu/>
        </div>
    )
}