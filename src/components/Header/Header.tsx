import { useState } from 'react'

import NavBarDesktop from './NavBarDesktop'
import { NavBarMobile } from './NavBarMobile'

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleResize = (): void => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  window.addEventListener('resize', handleResize)

  return <header>{!isMobile ? <NavBarDesktop /> : <NavBarMobile />}</header>
}

export default Header
