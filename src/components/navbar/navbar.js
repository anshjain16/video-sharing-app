import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useState } from "react";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
`;
const Wrapper = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  color: white;
  position: absolute;
  left: 0px;
  right: 0px;
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  border: 1px solid #454545;
  border-radius: 5px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = ({setUploadModal}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleCreateMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="search"></Input>
          <SearchOutlinedIcon />
        </Search>
        <Button
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            console.log(event.currentTarget);
          }}
          style={{ marginRight: "1rem" }}
        >
          <Tooltip title="Create">
            <VideoCallOutlinedIcon />
          </Tooltip>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCreateMenuClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={()=>{setUploadModal(true);}}>Upload Video</MenuItem>
          <MenuItem onClick={handleCreateMenuClose}>Live Stream</MenuItem>
        </Menu>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
