import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const PageBtn = (props) => {
  const page = Array(props.totalPages)
    .fill()
    .map((_, i) => i + 1);

  return (
    <PageBtnWrapper>
      {page.map((page, idx) => (
        <Button
          key={idx}
          onClick={props.pagination}
          main={props.currentPage === page}
        >
          {page}
        </Button>
      ))}
    </PageBtnWrapper>
  );
};

export default React.memo(PageBtn);

const PageBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  button {
    margin-left: 0.125rem;
`;
