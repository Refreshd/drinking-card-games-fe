import styled from "styled-components";

const QuestionTitle = styled.h1`
  max-width: 75%;
  margin: 0 0 2rem 0;
  color: #ffffff;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 50%;
  }
`;

export default QuestionTitle;