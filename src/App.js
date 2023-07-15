import logo from "./logo.svg";
import styled from "styled-components";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";

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
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="video">
                  <Route path=":id" element={<Video />}></Route>
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
