import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import MypageDetailTemplate from './MypageDetailTemplate';
import Header from '../../components/organisms/Header';
import { useGetData } from '../../lib/api';
import { API_URL, ORDER_URL } from '../../lib/api/api.config';
import {
  getOrderDetail,
  setLodingOrderDetail,
} from '../../modules/orderDetail';

const MypageDetail = () => {
  const history = useHistory();
  const goToBack = () => history.goBack();
  const dispatch = useDispatch();
  const id = useParams().id;
  const path = `${API_URL}${ORDER_URL}/${id}`;

  useGetData(path, setLodingOrderDetail, getOrderDetail, [path, dispatch]);

  return (
    <>
      <Header />
      <MypageDetailTemplate goToBack={goToBack} />
    </>
  );
};

export default MypageDetail;
