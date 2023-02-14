import { isMobile } from 'react-device-detect'
import NavBarDesktop from './NavBarDesktop'
import { NavBarMobile } from './NavBarMobile'

const Header = () => {
  return <header>{!isMobile ? <NavBarDesktop /> : <NavBarMobile />}</header>
}

export default Header
