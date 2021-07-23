import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { useGetData } from '../../lib/api';
import { API_URL, Order_URL } from '../../lib/api/api.config';
import MypageDetailTemplate from './MypageDetailTemplate';

const MypageDetail = () => {
  const history = useHistory();
  const goToBack = () => history.goBack();
  const id = useParams().id;
  const path = `${API_URL}${Order_URL}/${id}`;
  const [orderItem, setOrderItem] = useState({});
  const [loading, setLoading] = useState(false);

  useGetData(path, setLoading, setOrderItem, [id]);

  return (
    <>
      <Header />
      <MypageDetailTemplate
        orderItem={orderItem}
        goToBack={goToBack}
        loading={loading}
      />
    </>
  );
};

export default MypageDetail;
