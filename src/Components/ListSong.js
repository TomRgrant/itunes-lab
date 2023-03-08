import React, {useEffect} from "react";


const ListSong = ({song, index}) => {
    console.log(song);

    //cheating to get right index num
    index = index + 1;


    return(
        <div>
        <h1>{song.title.label}</h1>
        <h3>Number {index} In The Charts!</h3>
        {song.im.name.label}
        </div>
    );


};


export default ListSong;
