import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Icon from "@mui/material/Icon";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <Icon className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </Icon>
      <Icon className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </Icon>
      <Icon className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </Icon>
      <Icon className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </Icon>
      <Icon className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </Icon>
    </div>
  );
};
export default SwipeButtons;
