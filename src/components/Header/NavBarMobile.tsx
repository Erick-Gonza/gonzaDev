import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleMenu = (): void => setIsOpen(!isOpen)

  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primaryVariant">
      <section className="flex flex-col justify-start">
        <h2 className="text-xl font-bold">Erick Gzz</h2>
        <p className="text-md font-semibold">Frontend</p>
      </section>
      <section>
        <button onClick={handleMenu}>
          {isOpen ? <FiX size={32} color="#c2a345" /> : <FiMenu size={32} />}
        </button>
      </section>
    </nav>
  )
}
