import React from "react";
import { styled } from "styled-components";
import thumbnail from "../images/thumbnail2.png";

const Container = styled.div`
  width: 360px;
  height: 360px;
`;

const Img = styled.img`
  width: 360px;
  height: 202px;
  background-color: #565656;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 10px;
  /* margin-top: 1px; */
`;

const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #303030;
  margin-top: 5px;
`;

const Texts = styled.div`
  /* display: flex; */
`;

const Title = styled.h3`
  font-style: 16px;
  font-weight: 400;
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ChannelName = styled.h4`
  font-style: 14px;
  color: #aaaaaa;
  margin: 2px 0px;
`;

const Info = styled.div`
  font-style: 14px;
  color: #aaaaaa;
`;

const Card = () => {
  return (
    <Container>
      <Img src={thumbnail}></Img>
      <Details>
        <ChannelImage />
        <Texts>
          <Title>Video Title</Title>
          <ChannelName>DevTube</ChannelName>
          <Info>670,684 views | 2 days ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
