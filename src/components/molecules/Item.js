import { Link } from 'react-router-dom';

const Item = (props) => {
  <Link to={`mypage/order/${props.key}`}>
    {props.key} {props.name}
  </Link>;
};

export default Item;
