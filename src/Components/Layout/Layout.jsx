
import { styled } from "styled-components";
import { Header } from "Components/Header";
import { SideBar } from "Components/SideBar";

const LayoutStyled = styled.div`
  background-color: #CAEAE6;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;

const ContentStyled = styled.div`
  background-color: #CAEAE6;
  margin-top: 90px;
  height: 100vh;
  
`;

const SideBarStyled = styled.div`
  background-color: #FFFF;
  float: left;
  width: 20%;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return <LayoutStyled>

    <SideBarStyled>
      <SideBar></SideBar>
    </SideBarStyled>
    <div className="right">
      <Header />
      <ContentStyled>{children}</ContentStyled>
    </div>
    ;
  </LayoutStyled>
}

export default Layout