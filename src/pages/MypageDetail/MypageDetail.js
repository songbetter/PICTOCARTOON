import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { getData } from '../../lib/api';
import { Mypage_URL } from '../../lib/api/api.config';
import MypageDetailTemplate from './MypageDetailTemplate';

const MypageDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    const path = `${Mypage_URL}${id}`;
    getData(path);
  }, []);

  return (
    <>
      <Header />
      <MypageDetailTemplate />
    </>
  );
};

export default MypageDetail;
