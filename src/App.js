
import styled from "styled-components";
import Menu from "./components/sidebar/menu";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./routes/video/Video";
import Home from "./routes/Home/Home";
import SignIn from "./routes/auth/SignIn";
import { useEffect, useState } from "react";
import {Button, Modal} from 'antd'
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';


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
  const [file,setFile] = useState(null);
  useEffect(()=>{
      if(file){
        const getUploadUrl = async(file)=>{
          const res = await fetch('https://vcw29hcgll.execute-api.ap-south-1.amazonaws.com/S3upload',{
              method: 'POST',
              body: JSON.stringify({
                filename: file.name,
                contentType: file.type
              })
          })
          const response = await res.json();
          console.log(response.url);
          return response.url;
        }
        const uploadFile = async(file)=>{
            const uploadUrl = await getUploadUrl(file);
            console.log(uploadUrl);
             await fetch(uploadUrl, {
              method: 'PUT',
              body: file
            })
        }
        uploadFile(file);
      }
  },[file])
  const handleVideoUpload = (event)=>{
      setFile(event.target.files[0]);
  }
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar setUploadModal={setUploadModal}></Navbar>
          <Modal
        open={uploadModal}
        onClose={()=>{setUploadModal(false)}}
        aria-labelledby="upload-modal-title"
        aria-describedby="upload-modal-description"
        footer = {null}
      >
        <div className="upload-modal">
          <h2 id="upload-modal-title">Upload Video</h2>
          <div className="upload-content">
            <UploadOutlinedIcon  fontSize="large" color="primary" />
            <input type="file" name="file" onChange={handleVideoUpload}/>
            <Button disabled= {!file}>upload</Button>
          </div>
        </div>
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
