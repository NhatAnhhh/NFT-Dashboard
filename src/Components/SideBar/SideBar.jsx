import { styled } from "styled-components";
import logo from "assets/logoNFT.svg";
import iconShop from "assets/iconShop.svg"
import iconDashboard from "assets/IconDashboard.svg"
import iconActive from "assets/IconActive.svg"
import iconPorfolio from "assets/iconPorfolio.svg"
import iconWallet from "assets/IconWallet.svg"
import iconFavorites from "assets/IconFavorites.svg"
import iconHistory from "assets/IconHistory.svg"
import iconSetting from "assets/IconSetting.svg"
import iconLightMode from "assets/IconLightMode.svg"
import logoETH from "assets/LogoETH.svg"
import iconCardEth from "assets/iconCardETH.svg"
import { NavLink } from "react-router-dom";


const StyledSideBar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }

  .title{
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #27262E;
  }

  .card-ETH{
    width: 228px;
    height: 220px;
    background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
    border-radius: 16px;
    .img-logoETH{
      padding-top: 41px;
      padding-left: 13.33px;
    }
  }

  .content-card{
    position: absolute;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }
`;





const NavItem = ({ text, path, img }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}

export const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div>
          <div className="logo-text">MyNFT</div>
          <div className="logo-desc">NFT Marketplace</div>
        </div>
      </div>
      <div className="nav">
        <NavItem img={iconDashboard} text="Dashboard" path="/"></NavItem>
        <NavItem img={iconShop} text="Market" path="/about"></NavItem>
        <NavItem img={iconActive} text="Active Bids" path="/login"></NavItem>
      </div>
      <h1 className="title">
        Profile
      </h1>
      <div className="nav">
        <NavItem img={iconPorfolio} text="My Portfolio" path="/"></NavItem>
        <NavItem img={iconWallet} text="Wallet" path="/"></NavItem>
        <NavItem img={iconFavorites} text="Favourites" path="/"></NavItem>
        <NavItem img={iconHistory} text="History" path="/"></NavItem>
        <NavItem img={iconSetting} text="Settings" path="/"></NavItem>
      </div>
      <h1 className="title">
        Other
      </h1>
      <div className="nav">
        <NavItem img={iconLightMode} text="Light Mode" path="/"></NavItem>
      </div>
      <div className="card-ETH">
        <div className="img-logoETH"><img src={logoETH} alt="" /></div>
        <div className="content-card">
          <p>Your Balance</p>
          <h1>1,034.02</h1>
          <div className='amount-wrapper'>
            <img className='iconETH' src={iconCardEth} alt='eth'></img> ETH
          </div>
        </div>
      </div>
    </StyledSideBar>
  );
};