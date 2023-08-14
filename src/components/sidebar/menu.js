import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/images/youtube-logo-featured.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import HdOutlinedIcon from "@mui/icons-material/HdOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import { Link} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  padding: 1rem;
  color: white;
  font-size: 14px;
  height: 100vh;
  position: sticky;
  top: 0;
  box-sizing: border-box;
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

  &:hover {
    background-color: #373737;
  }
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
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Logo>
          <Img src={logo}></Img>
          DevTube
        </Logo>
      </Link>
      <Wrapper>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Item>
            <HomeIcon />
            Home
        </Item>
      </Link>
       
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
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Item>
          <PlayCircleOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsSoccerOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <HdOutlinedIcon />
          Movies
        </Item>
        <Item>
          <NewspaperOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
