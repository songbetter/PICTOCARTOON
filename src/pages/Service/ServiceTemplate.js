import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import FlexColCenter from '../../components/atoms/FlexColCenter';
import Image from '../../components/atoms/Image';
import tommy from '../../images/tommy.jpg';

const ServiceTemplate = (props) => {
  return (
    <ServiceWrapper>
      <Image src={tommy} alt="cat is smiling" />
      <Button onClick={props.alert}>{props.btnTitle}</Button>
    </ServiceWrapper>
  );
};

export default ServiceTemplate;

const ServiceWrapper = styled(FlexColCenter)`
  padding: 1rem;
`;
