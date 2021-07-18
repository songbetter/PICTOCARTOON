import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Image from '../../components/atoms/Image';
import tommy from '../../images/tommy.jpg';

const ServiceTemplate = (props) => {
  const history = useHistory();

  return (
    <ServiceWrapper>
      <Image src={tommy} alt="cat is smiling" />
      <Button
        onClick={() => {
          if (props.isToken) {
            alert('주문이 완료되었습니다.');
          } else {
            alert('로그인이 필요한 서비스입니다.');
            history.push('/login');
          }
        }}
      >
        {props.isToken ? '주문하기' : '신청하기'}
      </Button>
    </ServiceWrapper>
  );
};

export default ServiceTemplate;

const ServiceWrapper = styled.div``;
