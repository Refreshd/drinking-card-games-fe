import styled from "styled-components";
import { COLORS, SCREENS } from "../../constants/styles";

const ButtonWrap = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: ${COLORS.brandWhite};
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.brandBlack};
  text-shadow: 1px 1px 0 ${COLORS.brandBlack};
  
  ${props => props.color === "primary" ? (`
    background-color: ${COLORS.brandPrimary};
  `) : null}

  ${props => props.color === "ghost" ? (`
    background-color: transparent;
  `) : null}

  ${props => props.display === "mobile" ? (`
    @media (min-width: ${SCREENS.desktop}) {
      display: none;
    }
  `) : null}
`;

export default ButtonWrap;