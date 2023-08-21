
import styled from "styled-components";
import Menu from "./components/sidebar/menu";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./routes/video/Video";
import Home from "./routes/Home/Home";
import SignIn from "./routes/auth/SignIn";
import { useEffect, useState } from "react";
import {Modal} from 'antd'
import UploadVideo from "./components/uploadVideo/UploadVideo";



const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 22px 50px;
  box-sizing: border-box;
  background-color: #181818;
`;

function App() {
  const [uploadModal,setUploadModal] = useState(false);
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar setUploadModal={setUploadModal}></Navbar>
          <Modal
          open={uploadModal}
          onCancel={()=>{setUploadModal(false)}}
          aria-labelledby="upload-modal-title"
          aria-describedby="upload-modal-description"
          footer = {null}
      >
        <UploadVideo setUploadModal={setUploadModal}/>
      </Modal>
          {/* <Modal
          open={uploadModal}
          onCancel={()=>{setUploadModal(false)}}
          width={"40%"}
          style={{height: "60%"}}
          >
            <UploadOutlinedIcon style={{alignItems: "center"}} />
          </Modal> */}
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>} />
                <Route path="signin" element={<SignIn/>} />
                <Route path="video">
                  <Route path=":id" element={<Video/>}></Route>
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
