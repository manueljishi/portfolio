import { Button } from "../GlobalElements/ButtonElement";
import {
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoSectionElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer lightBg={false}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading lightText={true}>Heading</Heading>
                <Subtitle darkText={false}>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" primary={true} dark={true}>
                    Button
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
