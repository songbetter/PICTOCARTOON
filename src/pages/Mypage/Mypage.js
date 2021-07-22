import { useEffect, useState } from 'react';
import Header from '../../components/organisms/Header';
import { Order_URL } from '../../lib/api/api.config';
import MypageTemplate from '../Mypage/MypageTemplate';
import axios from 'axios';
import { API_URL } from '../../lib/api/api.config';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getOrder, pagingOrder } from '../../modules/order';

const Mypage = () => {
  const dispatch = useDispatch();
  const [currentPage, orderList, totalPages] = useSelector(
    (state) => [
      state.orderReducer.currentPage,
      state.orderReducer.content,
      state.orderReducer.totalPages,
    ],
    shallowEqual,
  );

  const pagination = (e) => {
    dispatch(pagingOrder(e.target.innerText));
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = `?page=${currentPage}`;
    const path = `${Order_URL}${query}`;

    const getOrderLists = async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}${path}`)
        .then((res) => dispatch(getOrder(res.data)))
        .catch((error) => console.log(error));
      setLoading(false);
    };
    getOrderLists();
  }, [currentPage, dispatch]);

  return (
    <>
      <Header />
      <MypageTemplate
        totalPages={totalPages}
        orderList={orderList}
        pagination={pagination}
        loading={loading}
        currentPage={currentPage + 1}
      />
    </>
  );
};

export default Mypage;
