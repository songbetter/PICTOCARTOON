import { useEffect } from 'react';
import Header from '../../components/organisms/Header';
import { Mypage_URL } from '../../lib/api/api.config';
import MypageTemplate from '../Mypage/MypageTemplate';
import { getData } from '../../lib/api';
import { useState } from 'react';

const Mypage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const query = `?page=${offset}`;
    const path = `${Mypage_URL}${query}`;
    getData(path);
  }, [offset]);

  return (
    <>
      <Header />
      <MypageTemplate offset={offset} setOffset={setOffset} itemData />
    </>
  );
};

export default Mypage;
