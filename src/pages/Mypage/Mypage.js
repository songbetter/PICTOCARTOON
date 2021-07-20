import { useEffect } from 'react';
import Header from '../../components/organisms/Header';
import { Order_URL } from '../../lib/api/api.config';
import MypageTemplate from '../Mypage/MypageTemplate';
import axios from 'axios';
import { API_URL } from '../../lib/api/api.config';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, pagingOrder } from '../../modules/order';

const Mypage = () => {
  const dispatch = useDispatch();
  const [currentPage, orderList, totalPages] = useSelector((state) => [
    state.orderReducer.currentPage,
    state.orderReducer.content,
    state.orderReducer.totalPages,
  ]);

  const pagination = (e) => {
    dispatch(pagingOrder(e.target.innerText));
  };

  useEffect(() => {
    const query = `?page=${currentPage}`;
    const path = `${Order_URL}${query}`;

    axios
      .get(`${API_URL}${path}`)
      .then((res) => dispatch(getOrder(res.data)))
      .catch((error) => console.log(error));
  }, [currentPage, dispatch]);

  return (
    <>
      <Header />
      <MypageTemplate
        totalPages={totalPages}
        // orderList={orderList}
        pagination={pagination}
      />
    </>
  );
};

export default Mypage;
