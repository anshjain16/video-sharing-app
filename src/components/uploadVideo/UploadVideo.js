import React from "react";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { Button, Input } from "antd";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid' 
function UploadVideo({ setUploadModal }) {
  const [file, setFile] = useState(null);
  const [title,setTitle] = useState(null);
  const [description,setDescription] = useState(null);
  const getUploadUrl = async (file) => {
    const res = await fetch(
      "https://vcw29hcgll.execute-api.ap-south-1.amazonaws.com/S3upload",
      {
        method: "POST",
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          title: title,
          description: description
        }),
      }
    );
    const response = await res.json();
    // console.log(response.url);
    return response.url;
  };
  const uploadFile = async (file) => {
    const uploadUrl = await getUploadUrl(file);
    console.log(uploadUrl);
    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
    });
  };
  const handleVideoUpload = () => {
    const filename = uuidv4();
    const fileToUpload = new File([file], filename, { type: file.type });
    uploadFile(fileToUpload);
    setUploadModal(false);
  };
  return (
    <div className="upload-modal">
      <h2 id="upload-modal-title">Upload Video</h2>
      <div className="upload-content">
        <UploadOutlinedIcon fontSize="large" color="primary" />
        <p>Title</p>
        <Input onChange={(event)=>{
          setTitle(event.target.value);
        }}/>

        <p>Select Video</p>
        <input
          type="file"
          name="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <p>Description</p>
        <Input onChange={(event)=>{
          setDescription(event.target.value);
        }}/>
        <Button onClick={handleVideoUpload} disabled={!file}>
          upload
        </Button>
      </div>
    </div>
  );
}

export default UploadVideo;
