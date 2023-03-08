import React, { useEffect, useState } from "react";
import Songlist from "../Components/SongList";


const Top20Box = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = async function() {
        const response = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        const songs = await response.json();
        setSongs(songs.feed.entry)
        console.log(songs);
    }


    return(
        <div>
            <Songlist songs={songs}></Songlist>
        </div>
    );

};


export default Top20Box;