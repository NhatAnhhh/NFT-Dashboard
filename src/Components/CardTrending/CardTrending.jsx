import { styled } from "styled-components";
// import shandow from "assets/shadow.svg"
import iconETH from "assets/Ethereum.svg"
import avataCard from "assets/AvataCard.svg"

const StyledCardTD = styled.div`
    width: 348px;
    height: 364px;
    background: #FFFFFF;
    border-radius: 16px;
    .img-card{
        padding: 12px;
        position: relative;
        display: flex;
        justify-content: center;
    }
    img{
        /* position: absolute; */
    }

    .title-card{
        padding: 24px;
    }

    .title-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .span-titleRight{
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        font-feature-settings: 'salt';
        color: #27262E;
    }
    .span-titleLeft{
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align: right;
        font-feature-settings: 'salt' on;
        color: #747475;
    }

    .title-body{
        display: flex;
        gap: 8px;
        height: 28px;
        align-items: center;
        padding-top: 12px;
    }

    .title-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 21px;
        padding-top:16px;
        .title-ETH{
            display: flex;
            align-items: center;
        }
        .text-ETH{
            font-weight: 700;
            font-size: 16px;
            line-height: 21px;
            display: flex;
            align-items: flex-end;
            font-feature-settings: 'salt' on;
            color: #747475;
        }
        .amount{
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
            }
    }
`;

export const CardTrending = ({ amount, img }) => {
    return <StyledCardTD>
        <div className="img-card">
            {/* <img src={shandow}></img> */}
            <img src={img} alt="" />
        </div>
        <div className="title-card">
            <div className="title-header">
                <span className="span-titleRight">Ape In Love</span>
                <span className="span-titleLeft">21,5K Likes</span>
            </div>

            <div className="title-body">
                <img src={avataCard} alt="" />
                <p className="span-titleLeft"> @johnti60</p>
            </div>

            <div className="title-bottom">
                <span className="text-ETH">Current Bid</span>
                <div className="title-ETH">
                    <img className='iconETH' src={iconETH} alt='eth'></img>
                    <span className='amount'>
                        {amount}
                    </span>
                    <p className="span-titleLeft"> ETH</p>
                </div>

            </div>
        </div>
    </StyledCardTD>
}