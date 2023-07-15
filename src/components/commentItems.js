import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 5px 0;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #303030;
  margin-top: 5px;
  margin: 10px 0;
`;

const Name = styled.span`
  font-size: 15px;
`;
const Date = styled.span`
  padding-left: 10px;
  font-size: 14px;
  color: #aaaaaa;
`;
const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #bbbbbb;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItems = () => {
  return (
    <Container>
      <ChannelImage src="https://picfiles.alphacoders.com/410/thumb-410307.jpg" />
      <Info>
        <Name>
          DevTube <Date>2 mins ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          sequi.
        </Text>
      </Info>
    </Container>
  );
};

export default CommentItems;
