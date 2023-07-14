import React from "react";
import { styled } from "styled-components";
import logo from "../images/youtube-logo-featured.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  padding: 1rem;
  color: white;
  font-size: 14px;
  height: 100vh;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  // padding: 10px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding-bottom: 0.3rem;
  gap: 5px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 5px;
`;

const Hr = styled.hr`
  margin: 1rem 0;
  border: 1px solid #373737;
`;

const Login = styled.div`
  padding: 5px 5px;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = () => {
  return (
    <Container>
      <Logo>
        <Img src={logo}></Img>
        DevTube
      </Logo>
      <Wrapper>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Item>
          <ExploreIcon />
          Music
        </Item>
        <Item>
          <ExploreIcon />
          Sports
        </Item>
        <Item>
          <ExploreIcon />
          Gaming
        </Item>
        <Item>
          <ExploreIcon />
          Movies
        </Item>
        <Item>
          <ExploreIcon />
          News
        </Item>
        <Item>
          <ExploreIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <ExploreIcon />
          Settings
        </Item>
        <Item>
          <ExploreIcon />
          Report
        </Item>
        <Item>
          <ExploreIcon />
          Help
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;