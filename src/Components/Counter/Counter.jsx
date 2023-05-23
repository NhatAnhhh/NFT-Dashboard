import React from "react";
import styled from "styled-components"

const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

const StyledTitle = styled(Title)`
    color: pink;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
    .sp{
        color: ${props => props.count > 5 ? "bule" : "pink"};
        margin-left:30px;
        margin-right:30px;
    }
`;

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, loading: true }
    }



    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }); }, 3000)
    }

    onDecrease = () => {
        this.setState({ count: this.state.count - 1 })
    }



    inDecrease = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div className="wrapper">
                {
                    this.state.loading ? <div>
                        Helooooooo
                    </div> :
                        <>
                            <Wrapper>
                                <Title>CucCuuuu{this.props.name}<StyledTitle><span className="sp">!!!!!</span>
                                </StyledTitle> </Title>
                                <button onClick={() => this.onDecrease()}>-</button>
                                <span>{this.state.count}</span>
                                <button onClick={() => this.inDecrease()}>+</button>
                            </Wrapper>

                        </>
                }

            </div>
        )
    }
}