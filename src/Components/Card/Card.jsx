import styled from 'styled-components';
import { Button } from 'Components/Button';
import iconEth from 'assets/iconEth.svg'

const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  color: #747475;

.title{
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
}

.amount{
        font-size: 24px;
        line-height: 31px;
        color: #27262E;
        font-weight: 700;
    }

.amount-wrapper{
        margin-bottom: 12px;
    }

.iconETH{
        margin-right: 4px;
    }
`;
export const Card = ({ title, amount, content, percent }) => {
    return <StyledCard>
        <div className='title'>
            {title}
        </div>
        {
            amount ?
                <div className='amount-wrapper'>
                    <img className='iconETH' src={iconEth} alt='eth'></img><span className='amount'>
                        {amount}
                    </span> ETH
                </div>
                : <div>
                    <span>{content}</span> %
                </div>
        }
        <Button percent={percent} boderColor="#E9E9E9">{percent}%</Button>
    </StyledCard>
}