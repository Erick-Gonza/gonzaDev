const Footer = () => {
  return (
    <footer className="bg-white flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-around w-full p-4">
      <div>
        <p className="text-gray-800 text-center md:text-left">
          &copy; 2022
          <span className="text-gray-900 font-bold">Erick Gzz.</span> Todos los
          derechos reservados.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center">
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
      </div>
    </footer>
  )
}

export default Footer
