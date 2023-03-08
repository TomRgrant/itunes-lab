import React from "react";
import ListSong from "../Components/ListSong";

const Songlist = ({songs}) => {

    const listOfSongs = songs.map((song, index) => {
        return <ListSong song={song} key={index} index={index}></ListSong>
    })





    return(
        <>
            {listOfSongs}
        </>
    );

};

export default Songlist;