import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "../../components/card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #181818;
  box-sizing: border-box;
`;

const Home = () => {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
   getVideos(); 
  },[])
  const getVideos = async()=>{
    const res = await fetch('https://vcw29hcgll.execute-api.ap-south-1.amazonaws.com/videos');
    const response = await res.json();
    // console.log(response);
    const data = response.data;
    setVideos(data);
  }
  // if (videos.length === 0) {
  //   return <p>Loading...</p>;
  // } 
  const mappedItems = videos.map(video => <Card title={video.title} description={video.description} videoId={video.video_id}/>);
  return (
    <Container>
     {
     mappedItems
     }
    </Container>
  );
};

export default Home;
