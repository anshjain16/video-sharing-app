import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202020;
  padding: 20px 50px;
  border: 1px solid #373737;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;
const SubTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  padding-bottom: 10px;
`;
const Input = styled.input`
  margin: 5px 0;
  background-color: transparent;
  border: 1px solid #373737;
  padding: 3px 2px;
  width: 100%;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #373737;
  color: #aaaaaa;
  margin-bottom: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;
// const More = styled.div``;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <SubTitle>To DevTube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Input type="email" placeholder="email" />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
