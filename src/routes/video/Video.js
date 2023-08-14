import React from "react";
import { styled } from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Comments from "../../components/comments/comments";
import Recommendation from "../../components/recommendation";

const Container = styled.div`
  color: white;
  display: flex;
  gap: 20px;
  /* height: 100vh; */
  background-color: #181818;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 7px;
  font-weight: 500;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
const Info = styled.span`
  color: #888888;
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  color: white;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Subscribe = styled.button`
  background-color: red;
  border: none;
  height: 20%;
  border-radius: 4px;
  color: white;
  margin-top: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #303030;
  margin-top: 5px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChannelName = styled.span`
  font-weight: 450;
`;
const ChannelCounter = styled.span`
  color: #888888;
`;
const ChannelDescription = styled.p`
  margin-top: 8px;
  color: #aaaaaa;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/aRGdDy18qfY"
            title="Unforgettable"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Title>Test Video</Title>
          <Details>
            <Info>470,000 views | 18 feb 2023</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon />
                Like
              </Button>
              <Button>
                <ThumbDownAltOutlinedIcon />
              </Button>
              <Button>
                <ReplyOutlinedIcon />
                Share
              </Button>
              <Button>
                <LibraryAddOutlinedIcon />
                Save
              </Button>
            </Buttons>
          </Details>
        </VideoWrapper>
        <Channel>
          <ChannelInfo>
            <ChannelImage src="https://picfiles.alphacoders.com/410/thumb-410307.jpg" />
            <ChannelDetail>
              <ChannelName>DevTube</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eos, quis fuga nisi, repudiandae obcaecati deserunt
                libero ad.
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Comments />
      </Content>
      <Recommendation></Recommendation>
    </Container>
  );
};

export default Video;
