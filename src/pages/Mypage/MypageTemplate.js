import styled from 'styled-components';
import PageBtn from '../../components/molecules/PageBtn';
import ItemList from '../../components/organisms/ItemList';
import Loader from '../../components/atoms/Loader';

const MypageTemplate = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <MypageWrapper>
      <ItemList
        listItems={props.orderList}
        totalPages={props.totalPages}
        pagination={props.pagination}
      />
      <PageBtn totalPages={props.totalPages} pagination={props.pagination} />
    </MypageWrapper>
  );
};

export default MypageTemplate;

const MypageWrapper = styled.div``;
