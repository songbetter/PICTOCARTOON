import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlexRowBetween from '../atoms/FlexRowBetween';
import Title from '../atoms/Title';

const Item = (props) => {
  return (
    <ItemWrapper>
      <div>
        <Title>주문번호: </Title>
        {props.id}
      </div>
      <Link to={`/mypage/order/${props.id}`}>{props.name}</Link>
    </ItemWrapper>
  );
};

export default Item;

const ItemWrapper = styled(FlexRowBetween)`
  padding: 0.8rem;
  margin: 0.25rem;
  border: solid 1px ${(props) => props.theme.colors.sub};
  width: 100%;
`;
