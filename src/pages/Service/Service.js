import ServiceTemplate from './ServiceTemplate';
import { getToken } from '../../lib/auth/index';
import { useHistory } from 'react-router-dom';
import Header from '../../components/organisms/Header';

const Service = () => {
  const history = useHistory();
  const isToken = !!getToken().token;

  const alert = () => {
    if (isToken) {
      alert('주문이 완료되었습니다.');
    } else {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/login');
    }
  };

  return (
    <>
      <Header />
      <ServiceTemplate
        alert={alert}
        btnTitle={isToken ? '신청하기' : '주문하기'}
      />
    </>
  );
};

export default Service;
