import React from "react";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { Button, Input } from "antd";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid' 
import { Spin } from "antd";
function UploadVideo({ setUploadModal }) {
  const [file, setFile] = useState(null);
  const [title,setTitle] = useState(null);
  const [description,setDescription] = useState(null);
  const [loading,setLoading] = useState(false);
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
    const uploadUrl = "http://localhost:3002/transcode";
    console.log(uploadUrl);
    const formData = new FormData();
    formData.append('video',file);
    const res = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });
    const response = res.json();
    console.log(res);
    console.log(response);
    if(res.status === 200) {
      await fetch(
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
      )
    }
  };
  const handleVideoUpload = async() => {
    const filename = uuidv4();
    setLoading(true);
    console.log("file is",file);
    const fileToUpload = new File([file], filename, { type: file.type });
    await uploadFile(fileToUpload);
    setUploadModal(false);
  };
  return (
    (loading) ? <Spin /> :
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
