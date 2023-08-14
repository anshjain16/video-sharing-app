import React from "react";
import CommentItems from "./commentItems";
import { styled } from "styled-components";

const Container = styled.div``;

const AddComment = styled.div`
  display: flex;
  gap: 5px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #303030;
  margin-top: 5px;
  margin: 10px 0;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Comments = () => {
  return (
    <Container>
      <AddComment>
        <ChannelImage src="https://picfiles.alphacoders.com/410/thumb-410307.jpg" />
        <Input type="text" n placeholder="Add a comment." />
      </AddComment>
      <CommentItems></CommentItems>
      <CommentItems></CommentItems>
      <CommentItems></CommentItems>
      <CommentItems></CommentItems>
    </Container>
  );
};

export default Comments;
