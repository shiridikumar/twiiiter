import { ClassNames } from "@emotion/react"
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles"
import axios from "axios";

const HashRecord_comp = (props) => {
    const mystyles = makeStyles(theme => ({
        trend_record: {
            display: "flex",
        }
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
        }
    }))
    const Classes = mystyles();
    const [hash_tags_list, setlist] = useState()
    const row = []
    
    useEffect(async() => {
        await axios.get("http://localhost:4000/user/posts/trendinghashtags").then(response => {
            hashtags = response.data.hashtags;
            console.log(hashtags);
            hashtags.map((hashtag) => {
                    row.push(<HashRecord_comp hashTag={hashtag.hash_tag} />)
                    //row.push(<h1>{hashtag.hash_tag}</h1>)
                })
            setlist(row)
            console.log(row)
            })
        
    }, []);

    return (
        <div className={Classes.trend_record_list}>
            <ol>
            {hash_tags_list}
            </ol>
        </div>
    )
}