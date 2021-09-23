import styled from "styled-components";

export const RandomQuestionWrapper = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuestionTitle = styled.h1`
  max-width: 75%;
  color: #ffffff;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 50%;
  }
`;
