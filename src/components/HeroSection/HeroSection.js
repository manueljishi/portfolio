import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import Video from "../../videos/video.mp4";
import { useState } from "react";
import { Button } from "../GlobalElements/ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          title="Video by Pressmaster from Pexels"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Manel</HeroH1>
        <HeroP>Welcome to my portfolio</HeroP>
        <HeroP>
          I created this portfolio to showcase my abilities and skills as a
          fullstack web developer.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
