
import { styled } from "styled-components";
import { Button } from "Components/Button";

const StyledCreator = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    .number{
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        font-feature-settings: 'salt' on;
        color: #27262E;
        font-weight: 700;
        gap: 10px;
    }
    .img{
        width: 44px;
        height: 44px;
    }
    .name{
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        font-feature-settings: 'salt' on;
        color: #27262E;
    }
    .user{
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        font-feature-settings: 'salt' on;
        color: #747475;
    }
`;

export const Creator = ({ number, img, name, user }) => {
    return <StyledCreator>
        <div className="number">{number}
            <div><img className="img" src={img} alt="" /></div>
            <div><h1 className="name">{name}</h1>
                <p className="user">{user}</p>
            </div>
        </div>

        <Button width={77} height={32} bgColor={'rgba(84, 41, 255, 0.1);'} textColor={'#5429FF'}>Follow</Button>
    </StyledCreator >
}
