import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlexRowBetween from '../atoms/FlexRowBetween';
import Title from '../atoms/Title';
import { MYPAGE_URL } from '../../lib/api/api.config';

const Item = (props) => {
  return (
    <ItemWrapper>
      <div>
        <Title>주문번호: </Title>
        {props.id}
      </div>
      <Link to={`${MYPAGE_URL}/${props.id}`}>{props.name}</Link>
    </ItemWrapper>
  );
};

export default Item;

export const ItemWrapper = styled(FlexRowBetween)`
  padding: 0.8rem;
  margin: 0.25rem;
  border: solid 1px ${(props) => props.theme.colors.sub};
  width: 100%;
`;
