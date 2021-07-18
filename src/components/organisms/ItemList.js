import styled from 'styled-components';
import FlexColCenter from '../atoms/FlexColCenter';
import Item from '../molecules/Item';

const ItemList = (props) => {
  return (
    <ListWrapper>
      {props.itemData?.map((data) => (
        <Item key={data.id} name={data.itemName} />
      ))}
    </ListWrapper>
  );
};

export default ItemList;

const ListWrapper = styled(FlexColCenter)``;
