import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MypageTemplate from '../Mypage/MypageTemplate';
import Header from '../../components/organisms/Header';
import { API_URL, ORDER_URL } from '../../lib/api/api.config';
import { useGetData } from '../../lib/api/index';
import { getOrder, pagingOrder, setLodingOrder } from '../../modules/order';

const Mypage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.orderReducer.currentPage);
  const path = `${API_URL}${ORDER_URL}?page=${currentPage}`;

  const pagination = useCallback(
    (e) => {
      dispatch(pagingOrder(e.target.innerText));
    },
    [dispatch],
  );

  useGetData(path, setLodingOrder, getOrder, [dispatch, path]);

  useEffect(() => {
    return function cleanup() {
      dispatch(pagingOrder(1));
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <MypageTemplate pagination={pagination} currentPage={currentPage + 1} />
    </>
  );
};

export default Mypage;
