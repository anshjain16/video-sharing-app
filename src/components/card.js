import React from "react";
import { styled } from "styled-components";
import thumbnail from "../assets/images/thumbnail2.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  height: ${(props) => (props.type === "sm" ? "120px" : "360px")};
  display: ${(props) => props.type === "sm" && "flex"};
  margin-bottom: ${(props) => props.type === "sm" && "20px"};
  padding-top: ${(props) => props.type === "sm" && "0px"};
  gap: 15px;
  &:hover {
    background-color: #373737;
  }
`;

const Img = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #565656;
  cursor: pointer;
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  /* align-items: center; */
  gap: 10px;
  /* margin-top: 1px; */
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #303030;
  margin-top: 5px;
  display: ${(props) => props.type === "sm" && "none"};
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

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }} type={type}>
      <Container type={type}>
        <Img src={thumbnail} type={type}>
          {console.log(type)}
        </Img>
        <Details type={type}>
          <ChannelImage
            src="https://picfiles.alphacoders.com/410/thumb-410307.jpg"
            type={type}
          />
          <Texts type={type}>
            <Title>Video Title</Title>
            <ChannelName>DevTube</ChannelName>
            <Info>670,684 views | 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
