import styled from "styled-components";
import { COLORS, SCREENS } from "../../constants/styles";

const AppMenuWrap = styled.nav`
  position: fixed;
  top: 5rem;
  right: 0;
  bottom: 5rem;
  transform: translateX(105%);
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  background-color: ${COLORS.brandPrimary};
  box-shadow: 0 0 1rem 0 ${COLORS.black50};

  @media (min-width: ${SCREENS.mobile}) {
    position: static;
    transform: translateX(0);
    flex-direction: row;
    justify-content: flex-end;
    box-shadow: none;
    background-color: transparent;
  }

  &.is-open {
    @media (max-width: ${SCREENS.mobile}) {
      transform: translateX(0)
    }
  }

  > a {
    padding: 0.75rem 1rem;
    color: ${COLORS.brandWhite};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    
    @media (min-width: ${SCREENS.desktop}) {
      padding: 0 0.75rem;
    }
  }
`;

export default AppMenuWrap;