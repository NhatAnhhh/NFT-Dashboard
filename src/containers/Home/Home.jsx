import styled from "styled-components"
import { Card } from 'Components/Card';
import { Layout } from "Components/Layout";
import BG from "assets/BG.svg"
import { Button } from "Components/Button";
import { CardTrending } from "Components/CardTrending";
import pic1 from "assets/Pic1.svg"
import pic2 from "assets/Pic2.svg"
import pic3 from "assets/Pic3.svg"
import pic4 from "assets/Pic4.svg"
import avata from "assets/AvataCard.svg"
import { Creator } from "Components/Creator";

const CardContainer = styled.div`
 
 /* .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  } */
  
  .container{
    padding: 32px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

 
  
  .content-left{
    float: left;
    width: 65%;
    display: grid;
    justify-content: flex-start;
  }

  .imgBG{
    position: relative;
    background-size: cover;
  }
  .contentBG{
    padding-left: 60px;
    position: absolute;
    top: 50%;
    left: 33%;
    transform: translate(-50%, -50%);
    z-index: 1;
    p{
        font-weight: 700;
        font-size: 44px;
        line-height: 120%;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }
  }
  .header-title{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    p{
        font-weight: 700;
        font-size: 24px;
    }
  }

  .title-menu{
    display: flex;
    gap: 10px;
    align-items: center;
    p {
        font-weight: 500!important;
        font-size: 14px!important;
        line-height: 18px!important;
        color: #7A797D!important;
    }
  }
  .container-card{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

.content-right{
    float: right;
    width: 35%;
    justify-content: flex-end;
    display: grid;
    justify-items: end;
    gap: 32px;
    .card-wrapper {
    width: 400px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-end;
    }
    .top-creator{
        width: 370px;
        height: 478px;
        background: #FFFFFF;
        border-radius: 16px;
    }
  }
  .creator-container{
    padding: 24px;
  }
`;


const CustomButon = styled(Button)`
    color: white;
    padding: 10px 20px;
    border: 1px solid;
    background-color: rgb(101 101 128 / 1%);
    margin-left: 10px;
`;

const fakeData = [
    {
        number: "1.",
        img: avata,
        name: 'Michael Jordan',
        user: 'jordan_',
    },

    {
        number: "2.",
        img: avata,
        name: 'John Tibao',
        user: '@johnti60',
    },

    {
        number: "3.",
        img: avata,
        name: 'Teressa',
        user: '@teressa',
    },

    {
        number: "4.",
        img: avata,
        name: 'Johan Hawn',
        user: '@j_hawn',
    },

    {
        number: "5.",
        img: avata,
        name: 'Maria Alisson',
        user: '@m_alisson',
    },

    {
        number: "6.",
        img: avata,
        name: 'Sam Erricson',
        user: '@erricsonsam',
    },
]


const Home = () => {

    return <>
        <Layout>
            <CardContainer>
                <div className="container">
                    <div className="content-left">
                        <div className="imgBG">
                            <img src={BG} alt="" />
                            <div className="contentBG">
                                <p>Discover, Create and Sell Your Own NFT.</p>
                                <Button fontWeight={700} fontSize={16}> Discover</Button>
                                <CustomButon fontWeight={700} fontSize={16}>Create</CustomButon>
                            </div>
                        </div>

                        <div className="header-title">
                            <p>
                                Trending Auctions
                            </p>
                            <div className="title-menu">
                                <p>Art</p>
                                <p>Music</p>
                                <p>Collectibles</p>
                                <p>Utility</p>
                            </div>
                        </div>

                        <div className="container-card">
                            <CardTrending amount={9.10} img={pic1}></CardTrending>
                            <CardTrending amount={9.10} img={pic2}></CardTrending>
                            <CardTrending amount={9.10} img={pic3}></CardTrending>
                            <CardTrending amount={9.10} img={pic4}></CardTrending>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="card-wrapper">
                            <Card title={'Revenue'} amount="5.00" percent={12.3}></Card>
                            <Card title={'Spending'} amount="2.00" percent={8.1}></Card>
                            <Card title={'ROI'} content="+14.02" percent={-5.1}></Card>
                            <Card title={'Estimated'} amount="7.00" percent={3.2}></Card>
                        </div>
                        <div className="top-creator">
                            <div className="creator-container">
                                {
                                    fakeData.map((item) => <Creator number={item.number} img={item.img} name={item.name} user={item.user}></Creator>)
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </CardContainer>
        </Layout>

    </>
}
export default Home


