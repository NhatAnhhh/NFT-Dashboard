import styled from "styled-components";
import iconSearch from "assets/IconSearch.svg"
import iconNoti from "assets/IconNoti.svg"
import avata from "assets/Ellipse 3Avata.svg"

const HeaderStyled = styled.div`
padding: 32px;
  position: fixed;
  width: -webkit-fill-available;
  z-index: 99;
  height: 56px;
  display: flex;
  justify-content: space-between;
  .search-wrapper{
    position: relative;
    display: flex;
    align-items: center;
    img{
        position: absolute;
        margin-left: 24px;
    }
  }

  .search-input{
    width: 461px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 35px;
    border: none;
    text-indent: 56px;
    font-size: 16px;
    line-height: 21px;
    outline: none;
  }

  .user-info{
    display: flex;
    gap: 24px;
  }

  .noti-icon{
    width: 56px;
    height: 56px;
    background: #FFFFFF;
    border-radius:50px;
    border: 1px solid #E9E9E9;
    img{
        padding: 16px;
    }
  }
`;
const Header = () => {
    return (
        <HeaderStyled>
            <span className="search-wrapper">
                <img src={iconSearch} alt="icon" />
                <input className="search-input"
                    placeholder="Search Item, Collection and Account.."
                    type="text" />
            </span>

            <div className="user-info">
                <div className="noti-icon"><img src={iconNoti} alt="" /></div>
                <img src={avata} alt="" />
            </div>
        </HeaderStyled>
    );
};

export default Header;