import { useEffect, useState } from 'react'

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

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize])

  return <header>{!isMobile ? <NavBarDesktop /> : <NavBarMobile />}</header>
}

export default Header
