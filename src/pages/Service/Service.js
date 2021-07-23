import ServiceTemplate from './ServiceTemplate';
import { getToken } from '../../lib/auth/index';
import { useHistory } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { useCallback } from 'react';

const Service = () => {
  const history = useHistory();
  const isToken = !!getToken().token;

  const handleAlert = useCallback(() => {
    if (isToken) {
      alert('주문이 완료되었습니다.');
      history.push('/mypage/order');
    } else {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/login');
    }
  }, [isToken, history]);

  return (
    <>
      <Header />
      <ServiceTemplate
        handleAlert={handleAlert}
        btnTitle={isToken ? '신청하기' : '주문하기'}
      />
    </>
  );
};

export default Service;
