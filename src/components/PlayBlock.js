import CdBlock from "./player/Cover";
import CircleButton from "./player/BlueButton";
import PlayButton from "./player/WhiteButton";
import SongInfo from "./player/SongInfo";
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import MusicPlayerSlider from "./player/MUI";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

const Top = styled.div`
  width: 100%;
  height: 3rem;
`;
function PlayerBlock(props) {
  const title = "아이유";
  const artist = "밤편지";

  return (
    // <div className="PlayerBlock">
    //   <Top>
    //     <CircleButton
    //       float={{ float: "left", "margin-top": "1rem", "margin-left": "1rem" }}
    //       icon=<IoMdArrowRoundBack />
    //     />
    //     <div>
    //       <CircleButton
    //         float={{
    //           float: "right",
    //           "margin-top": "1rem",
    //           "margin-right": "1rem",
    //         }}
    //         icon=<GiHamburgerMenu />
    //       />
    //     </div>
    //   </Top>
    //   <CdBlock />

    //   <Button variant="contained">Hello World</Button>
    //   <Slider max={10} min={0} valueLabelDisplay="auto" />
    //   <SongInfo title={title} artist={artist} />
    //   {/* <RangeBar /> */}
    //   <PlayButton />
    // </div>

    <Container fluid>
      <Row>
        <MusicPlayerSlider></MusicPlayerSlider>
      </Row>
    </Container>

    // <div className="PlayerBlock">
    //   <MusicPlayerSlider></MusicPlayerSlider>
    // </div>
  );
}

export default PlayerBlock;
