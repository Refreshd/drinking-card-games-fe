// import { useState } from 'react/cjs/react.development';
import Button from '../Button';
import AppMenuWrap from './styles';

const AppMenu = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const ToggleMenuVisibility = () => {
  //   setIsOpen(!isOpen); 
  // };

  return (
    <>
      <AppMenuWrap>
        <a href="/rules" title="Pravila">Pravila</a>
      </AppMenuWrap>

      <Button color="ghost" display="mobile">☰</Button>
    </>
  )
};

export default AppMenu;