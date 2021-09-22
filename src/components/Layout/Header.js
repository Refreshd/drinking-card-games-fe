import styled from "styled-components";

const Header = styled.header`
  padding: 1rem 0;
  text-align: center;

  > h1 {
    color: #ffff66;
    font-size: 2rem;
    line-height: 1;

    > span {
      display: block;
      margin-top: -0.5rem;
      color: #ffffff;
      font-size: 1.2rem;
      transform: rotate(-3deg);
    }
  }
`;

export default Header