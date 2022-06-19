import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Icon, InputAdornment, TextField, Typography } from "@mui/material";
import { makeStyles, StylesContext } from "@mui/styles";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./../components.css"
import axios from "axios";

const Tweetbox = (props) => {
    console.log(props)
    const mystyles = makeStyles(theme => ({
        but: {
            backgroundColor: "rgb(29, 155, 240)"
            , border: "none",
            borderRadius: "25px",
            width: "200px",
            display: "inline-flex",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            color: "white"
        },
        noBorder: {
            border: "none"
        }
    }))
    const [url, seturl] = useState("");
    const [tweettext, settext] = useState("");
    const classes = mystyles();
    const handleinput = (e) => {
        console.log("asdas");
        const form = document.querySelector("form");
        const formData = new FormData(form);
        // formData.append("email", location.state.email)
        formData.append("myfile", form)
        axios.post("http://127.0.0.1:4000/user/addPicture", formData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "name": props.user.user.name,
                'Content-Type': "multipart/form-data",

            }
        }).then(response => {
            console.log(response.data);
            seturl(response.data);
        })
            .catch(err => {
                console.log(err);
            })

    }
    const tweet = () => {

        let text = tweettext;
        var hashtags = text.match(/#[a-zA-Z0-9]+/gi);
        var mentions = text.match(/@[a-zA-Z0-9]+/gi);
        console.log(hashtags);
        console.log(mentions);

        console.log("Sdasdasda");
        axios.post("http://localhost:4000/user/tweet", { name: props.user.name, username: props.user.user_name, tweettext: tweettext, mentions: mentions, hashtags: hashtags ,url:url}).then(response => {
            console.log(response.data);
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <button className={classes.but} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "rgb(29, 155, 240)" }}>Tweet</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {url != "" &&
                                <div className="attach">
                                    <img src={url} style={{maxWidth:"250px",maxHeight:"300px"}} />
                                </div>
                            }
                            <TextField
                                style={{ textAlign: 'left', width: "100%" }}
                                hintText="Message Field"
                                classes={{ notchedOutline: classes.input }}
                                floatingLabelText="MultiLine and FloatingLabel"
                                multiline
                                rows={6}
                                onChange={(e) => settext(e.target.value)}
                                autoFocus
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": {
                                            border: "none"
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="modal-footer">
                            {/* <input type="file" className={classes.but} style={{ backgroundColor: "grey",width:"100px",fontSize:"10px" }} onChange={()=>attach()} /> */}
                            <form>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    name="pic"
                                    onChange={handleinput}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="raised" component="span" className={classes.button} style={{ backgroundColor: "grey", width: "100px", fontSize: "15px", color: "white", borderRadius: "25px" }} >
                                        Upload
                                    </Button>
                                </label>
                            </form>
                            <button type="button" className={classes.but} style={{ backgroundColor: "rgb(29, 155, 240)", width: "100px", fontSize: "15px" }} onClick={() => tweet()}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tweetbox;