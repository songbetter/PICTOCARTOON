import { useCallback, useEffect, useState } from 'react';
import Header from '../../components/organisms/Header';
import { Order_URL } from '../../lib/api/api.config';
import MypageTemplate from '../Mypage/MypageTemplate';
import axios from 'axios';
import { API_URL } from '../../lib/api/api.config';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getOrder, pagingOrder } from '../../modules/order';
import { useGetData } from '../../lib/api/index';

const Mypage = () => {
  console.log('마이페이지');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [currentPage, orderList, totalPages] = useSelector(
    (state) => [
      state.orderReducer.currentPage,
      state.orderReducer.content,
      state.orderReducer.totalPages,
    ],
    shallowEqual,
  );

  const pagination = useCallback(
    (e) => {
      dispatch(pagingOrder(e.target.innerText));
    },
    [dispatch],
  );
  const path = `${API_URL}${Order_URL}?page=${currentPage}`;

  // useGetData(path, setLoading, dispatch, [path.dispatch]);

  useEffect(() => {
    const getOrderLists = async () => {
      setLoading(true);
      await axios
        .get(path)
        .then((res) => dispatch(getOrder(res.data))) // 이거 어떻게 보내지?
        .catch((error) => console.log(error));
      setLoading(false);
    };
    getOrderLists();
  }, [path, dispatch]);

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
