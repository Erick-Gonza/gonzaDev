const NavBarDesktop = () => {
  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primaryVariant">
      <section className="flex flex-col justify-start">
        <h2 className="text-xl font-bold">Erick Gzz</h2>
        <p className="text-md font-semibold">Frontend</p>
      </section>

      <section className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#home">Skills</a>
        <a href="#home">Projects</a>
      </section>

      <section className="">
        <button className="px-4 py-3 rounded-md bg-tertiary text-secondary font-semibold">
          Let's Connect
        </button>
      </section>
    </nav>
  )
}

export default NavBarDesktop
