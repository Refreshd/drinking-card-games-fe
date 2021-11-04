import styled from "styled-components";
import { COLORS, SCREENS } from "../../constants/styles";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  text-align: center;

  @media (min-width: ${SCREENS.desktop}) {
    justify-content: space-between;
  }

  > h1 {
    color: ${COLORS.brandSecondary};
    font-size: 2rem;
    line-height: 1;

    > span {
      display: block;
      margin-top: -0.5rem;
      color: ${COLORS.brandWhite};
      font-size: 1.2rem;
      transform: rotate(-3deg);
    }
  }
`;

export default HeaderWrap