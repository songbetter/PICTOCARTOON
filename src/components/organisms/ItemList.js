import styled from 'styled-components';
import FlexColCenter from '../atoms/FlexColCenter';
import Item from '../molecules/Item';

const ItemList = (props) => {
  return (
    <ListWrapper>
      {props.itemList?.map((data) => (
        <Item key={data.id} name={data.itemName} id={data.id} />
      ))}
    </ListWrapper>
  );
};

export default ItemList;

const ListWrapper = styled(FlexColCenter)``;
