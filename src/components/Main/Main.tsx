import { RiUserLine } from 'react-icons/ri'

const Main = () => {
  return (
    // <main className="flex-1 px-3 py-4">
    <main className="flex-1">
      {/* hero */}
      <section className="flex flex-col justify-center items-center lg:items-start w-full h-auto bg-slate-100 px-3 py-4">
        <h3 className="">Welcome to my Portfolio</h3>
        <h1 className="">Hi! I'm Erick Web Developer</h1>
        <p className="md:w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, hic
          obcaecati. Numquam molestias a ea velit deserunt similique tempore,
          reprehenderit necessitatibus asperiores, veniam quas magnam tenetur ab
          quasi soluta est!
        </p>

        <button className="px-2 py-2 bg-darkcyan rounded-sm w-1/3 md:w-1/5 font-semibold text-slate-100">
          Let's Connect
        </button>
      </section>

      {/* skills */}
      <section className="bg-slate-300 px-3 py-4">
        <section>
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit unde cum magni fugit voluptatum at facilis eligendi
            porro ratione? Exercitationem sunt reiciendis aspernatur, animi nisi
            facilis delectus ipsum! Molestiae, omnis.
          </p>
        </section>
        <section>
          <h2>carrousel</h2>
        </section>
      </section>

      {/* projects */}

      <section className="bg-slate-100 px-3 py-4">
        <section>
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            nam veritatis, optio porro assumenda hic nisi dolor expedita numquam
            ducimus eum? Molestiae sapiente nemo iure quidem voluptatum
            doloribus deleniti dolore?
          </p>
        </section>

        <section>
          <h2>Tabs</h2>
        </section>

        <section>
          <h2>cards proejcts</h2>
        </section>
      </section>

      {/* form */}

      <section className="bg-slate-300 px-3 py-4 flex">
        <section className="w-1/2">
          <h2>image</h2>
        </section>
        <form className="flex flex-col gap-3 w-1/2">
          <h2>Get in Touch</h2>

          <section className="flex flex-col gap-4">
            <div className="w-full relative">
              <RiUserLine className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none"
                placeholder="Name"
              />
            </div>

            <div className="w-full relative">
              <RiUserLine className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none"
                placeholder="Last Name"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="w-full relative">
              <RiUserLine className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none"
                placeholder="Email"
                type={'email'}
              />
            </div>

            <div className="w-full relative">
              <RiUserLine className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none"
                placeholder="+XX XXX XXX XXXX"
                type={'tel'}
              />
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none resize-none"
            />
          </section>

          <button className="px-2 py-1 bg-darkcyan text-slate-100 font-semibold">
            Send
          </button>
        </form>
      </section>
    </main>
  )
}

export default Main
