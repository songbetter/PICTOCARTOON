import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Loader from '../../components/atoms/Loader';
import Title from '../../components/atoms/Title';

const MypageDetailTemplate = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <MypageWrapper>
      <div>
        <Title>주문번호:</Title> {props.orderItem.id}
      </div>
      <div>
        <Title>주문 상세내역:</Title> {props.orderItem.itemName}
      </div>
      <Button main onClick={props.goToBack}>
        뒤로가기
      </Button>
    </MypageWrapper>
  );
};

export default MypageDetailTemplate;

const MypageWrapper = styled.div`
  padding: 0.8rem;
  margin: 0.25rem;
  border: solid 1px ${(props) => props.theme.colors.sub};
  width: 100%;
  div {
    margin: 1rem 0;
  }
`;
