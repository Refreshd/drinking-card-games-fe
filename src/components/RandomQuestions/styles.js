import styled from "styled-components";
import { COLORS, SCREENS } from "../../constants/styles";

export const RandomQuestionWrapper = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuestionTitle = styled.h1`
  max-width: 75%;
  color: ${COLORS.brandWhite};
  font-size: 2rem;
  text-align: center;

  @media (min-width: ${SCREENS.desktop}) {
    font-size: 3rem;
    max-width: 50%;
  }
`;
