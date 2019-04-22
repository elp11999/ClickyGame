import React from "react";
import "./style.css";

/*
https://static.comicvine.com/uploads/scale_small/3/31666/4936581-herc2015001covcol-cx-d8ad6.jpg
https://static.comicvine.com/uploads/scale_small/2/28028/671140-the_color_of_cosmic.jpg
https://static.comicvine.com/uploads/scale_small/10/100647/4343135-spider-woman_vol_5_5_anka_variant_textless.jpg
https://static.comicvine.com/uploads/scale_small/0/8190/544712-newexilann001_cov.jpg
*/

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} width="150" height="200" onClick={() => props.removeFriend(props.id)}/>
      </div>
    </div>
  );
}

export default FriendCard;
