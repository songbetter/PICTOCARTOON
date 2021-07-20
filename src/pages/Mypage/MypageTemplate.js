import styled from 'styled-components';
import ItemList from '../../components/organisms/ItemList';
import PageBtn from '../../components/molecules/PageBtn';

const MypageTemplate = (props) => {
  return (
    <MypageWrapper>
      <ItemList itemList={props.orderList} />
      <PageBtn totalPages={props.totalPages} pagination={props.pagination} />
    </MypageWrapper>
  );
};

export default MypageTemplate;

const MypageWrapper = styled.div``;
