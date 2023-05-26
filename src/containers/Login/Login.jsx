import { Layout } from "Components/Layout";
import styled from "styled-components"

const LogInStyled = styled.div`
    .title{
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
}
`;

const Login = (title) => {
    return (
        <Layout>
            <LogInStyled>
                <div className='title'>
                    <h1>helloooooo</h1>
                </div>
            </LogInStyled>
        </Layout>
    )
}

export default Login