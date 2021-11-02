import ButtonWrap from "./styles";

const Button = ({size, color, display, children, onClick, className}) => {
  return (
    <ButtonWrap size={size} color={color} display={display} onClick={onClick} className={className}>
      {children}
    </ButtonWrap>
  )
};

export default Button;