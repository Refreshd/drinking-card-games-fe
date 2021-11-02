import { useState } from 'react/cjs/react.development';
import Button from '../Button';
import AppMenuWrap from './styles';

const AppMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenuVisibility = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <AppMenuWrap className={isOpen ? 'is-open' : null}>
        <a href="/rules" title="Pravila">Pravila</a>
      </AppMenuWrap>

      <Button onClick={ToggleMenuVisibility} color="ghost" display="mobile">☰</Button>
    </>
  )
};

export default AppMenu;