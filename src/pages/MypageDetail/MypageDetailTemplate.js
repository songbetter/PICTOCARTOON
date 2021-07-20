import styled from 'styled-components';

const MypageDetailTemplate = (props) => {
  return (
    <MypageWrapper>
      {props.orderItem.id} {props.orderItem.itemName}
    </MypageWrapper>
  );
};

export default MypageDetailTemplate;

const MypageWrapper = styled.div``;
