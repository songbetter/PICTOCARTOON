import styled from 'styled-components';
import ItemList from '../../components/organisms/ItemList';
import PageBtn from '../../components/molecules/PageBtn';

const MypageTemplate = (props) => {
  return (
    <MypageWrapper>
      <ItemList itemData={props.itemData} />
      <PageBtn />
    </MypageWrapper>
  );
};

export default MypageTemplate;

const MypageWrapper = styled.div``;
