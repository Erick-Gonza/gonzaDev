const NavBarDesktop = () => {
  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-darkblue">
      <section className="flex flex-col justify-start text-slate-100">
        <h2 className="text-xl font-bold">Erick Gzz</h2>
        <p className="text-md font-semibold">Frontend</p>
      </section>

      <section className="flex gap-6 text-slate-100 font-bold">
        <a href="#home">Home</a>
        <a href="#home">Skills</a>
        <a href="#home">Projects</a>
      </section>

      <section className="text font-semibold text-slate-100">
        <button className="px-4 py-3 rounded-md font-semibold bg-darkcyan">
          Let's Connect
        </button>
      </section>
    </nav>
  )
}

export default NavBarDesktop
