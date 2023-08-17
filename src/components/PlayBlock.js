import CdBlock from "./player/Cover";
import CircleButton from "./player/BlueButton";
import PlayButton from "./player/WhiteButton";
import SongInfo from "./player/SongInfo";
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../App.css";

const Top = styled.div`
  width: 100%;
  height: 3rem;
`;
function PlayerBlock(props) {
  const title = "아이유";
  const artist = "밤편지";

  return (
    <div className="PlayerBlock">
      <Top>
        <CircleButton
          float={{ float: "left", "margin-top": "1rem", "margin-left": "1rem" }}
          icon=<IoMdArrowRoundBack />
        />
        <div>
          <CircleButton
            float={{
              float: "right",
              "margin-top": "1rem",
              "margin-right": "1rem",
            }}
            icon=<GiHamburgerMenu />
          />
        </div>
      </Top>
      <CdBlock />
      <SongInfo title={title} artist={artist} />
      {/* <RangeBar /> */}
      <PlayButton />
    </div>
  );
}

export default PlayerBlock;
