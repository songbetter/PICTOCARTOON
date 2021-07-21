import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { API_URL, Order_URL } from '../../lib/api/api.config';
import MypageDetailTemplate from './MypageDetailTemplate';

const MypageDetail = () => {
  const history = useHistory();
  const goToBack = () => history.goBack();

  const [orderItem, setOrderItem] = useState({});
  const [loading, setLoading] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    const path = `${Order_URL}/${id}`;

    const getOrderList = async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}${path}`)
        .then((res) => setOrderItem(res.data))
        .catch((error) => console.log(error));
      setLoading(false);
    };
    getOrderList();
  }, [id]);

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
