import { Link } from 'react-router-dom';
import FlexRowBetween from '../atoms/FlexRowBetween';

const Item = (props) => {
  <FlexRowBetween>
    <Link to={`mypage/order/${props.id}`}>
      {props.id} {props.name}
    </Link>
  </FlexRowBetween>;
};

export default Item;
