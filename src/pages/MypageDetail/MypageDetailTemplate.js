import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import FlexRowBetween from '../../components/atoms/FlexRowBetween';
import Loader from '../../components/atoms/Loader';
import Title from '../../components/atoms/Title';

const MypageDetailTemplate = (props) => {
  const [isLoading, orderItem] = useSelector(
    (state) => [
      state.orderDetailReducer.isLoading,
      state.orderDetailReducer.content,
    ],
    shallowEqual,
  );

  return isLoading ? (
    <Loader />
  ) : (
    <MypageWrapper>
      <ItemWrapper>
        <Title>주문번호: {orderItem.id}</Title> {orderItem.itemName}
      </ItemWrapper>
      <Button main onClick={props.goToBack}>
        뒤로가기
      </Button>
    </MypageWrapper>
  );
};

export default MypageDetailTemplate;

const ItemWrapper = styled(FlexRowBetween)`
  padding: 0.8rem;
  margin: 0.25rem;
  border: solid 1px ${(props) => props.theme.colors.sub};
  width: 100%;
`;

const MypageWrapper = styled.div`
  padding: 0.8rem;
  margin: 0.25rem;
  width: 100%;
  div {
    margin: 1rem 0;
  }
`;
