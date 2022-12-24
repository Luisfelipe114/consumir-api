import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 15px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }

  // toda div seguida de uma div vai ter border-top
  div + div {
    border-top: 1px solid #eee;
  }
`; // sem estilizar

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
