const Footer = () => {
  return (
    <footer className="flex justify-between lg:justify-around items-center px-3 py-4 bg-darkblue">
      <section className="p-1 rounded-md text-slate-100">
        <h2 className="text-2xl lg:text-4xl font-bold">Erick</h2>
        <h2 className="text-lg lg:text-2xl font-bold">Gzz</h2>
      </section>

      <section className="flex gap-2 lg:gap-6">
        <a
          href="https://www.linkedin.com/in/erick-gzz/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1 bg-slate-100"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            className="w-6 lg:w-8 h-auto"
          />
        </a>

        <a
          href="https://github.com/Erick-Gonza/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1 bg-slate-100"
        >
          <img
            src="https://img.icons8.com/windows/256/github.png"
            alt="github"
            className="w-6 lg:w-8 h-auto"
          />
        </a>
      </section>
    </footer>
  )
}

export default Footer
