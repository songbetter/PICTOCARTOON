import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../components/atoms/Loader';
import PageBtn from '../../components/molecules/PageBtn';
import ItemList from '../../components/organisms/ItemList';

const MypageTemplate = (props) => {
  const [isLoading, totalPages, orderList] = useSelector(
    (state) => [
      state.orderReducer.isLoading,
      state.orderReducer.totalPages,
      state.orderReducer.content,
    ],
    shallowEqual,
  );
  return isLoading ? (
    <Loader />
  ) : (
    <MypageWrapper>
      <ItemList
        listItems={orderList}
        totalPages={totalPages}
        pagination={props.pagination}
      />
      <PageBtn
        totalPages={totalPages}
        currentPage={props.currentPage}
        pagination={props.pagination}
      />
    </MypageWrapper>
  );
};

export default MypageTemplate;

const MypageWrapper = styled.div``;
