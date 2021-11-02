import AppMenu from '../AppMenu';
import HeaderWrap from './styles';

const AppHeader = () => {
  return (
    <HeaderWrap>
      <h1>Spit or Swallow <span>Drinking Game</span></h1>

      <AppMenu />
    </HeaderWrap>
  )
};

export default AppHeader;