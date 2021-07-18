import styled from 'styled-components';
import Button from '../atoms/Button';

const PageBtn = () => {
  const data = { totalPages: 3 };
  const page = Array(data.totalPages)
    .fill()
    .map((_, i) => i + 1);
  return (
    <PageBtnWrapper>
      {page.map((page, idx) => (
        <Button key={idx}>{page}</Button>
      ))}
    </PageBtnWrapper>
  );
};

export default PageBtn;

const PageBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
