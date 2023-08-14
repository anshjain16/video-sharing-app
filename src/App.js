
import styled from "styled-components";
import Menu from "./components/sidebar/menu";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./routes/video/Video";
import Home from "./routes/Home/Home";
import SignIn from "./routes/auth/SignIn";


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
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar></Navbar>
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
