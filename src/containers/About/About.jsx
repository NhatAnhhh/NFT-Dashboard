import styled from "styled-components"
import { Layout } from "Components/Layout";

const AboutStyled = styled.div`
 .title{
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
}
`;

const About = () => {
    return (
        <Layout>
            <AboutStyled>
                <div className='title'>
                    <h1>helloooooo</h1>
                </div>
            </AboutStyled>
        </Layout>
    )

}

export default About