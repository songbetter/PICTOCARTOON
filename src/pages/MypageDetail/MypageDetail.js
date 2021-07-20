import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { API_URL, Order_URL } from '../../lib/api/api.config';
import MypageDetailTemplate from './MypageDetailTemplate';

const MypageDetail = () => {
  const { id } = useParams();
  const [orderItem, setOrderItem] = useState({});

  useEffect(() => {
    const path = `${Order_URL}${id}`;
    axios
      .get(`${API_URL}${path}`)
      .then((res) => setOrderItem(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Header />
      <MypageDetailTemplate orderItem={orderItem} />
    </>
  );
};

export default MypageDetail;
