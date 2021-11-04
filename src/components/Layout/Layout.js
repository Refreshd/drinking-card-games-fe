import styled from "styled-components";
import { SCREENS } from "../../constants/styles";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  @media (min-width: ${SCREENS.desktop}) {
    min-height: 100vh;
    height: auto;
  }
`;

export default Layout