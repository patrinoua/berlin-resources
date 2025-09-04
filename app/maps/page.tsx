import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'], // πρόσθεσε και '600', '700' αν χρειάζεσαι bold
  variable: '--font-montserrat',
})

export default function Maps() {
  return (
    <div
      className={`${montserrat.variable} flex min-h-screen flex-col text-gray-200`}
      style={{
        background:
          'linear-gradient(to bottom, #006f14, #63104eff, #050831ff, #011c34ff)',
      }}
    >
      <div className="w-full bg-black p-4 md:mb-8 md:p-8">
        {/* <img src='colorimage.png' className='w-full'/> */}
        <h1 className='my-6 bg-[url("/colorimage.png")] bg-cover bg-clip-text bg-[0%_50%] text-center text-3xl font-extralight text-transparent md:text-7xl'>
          maps :)
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1MMZUDoXaZMNn9JNsqbzh3sX3XqkpPIU&ehbc=2E312F"
        className="h-[80vh] w-[80%] self-center rounded-2xl border border-gray-700 shadow-lg"
        loading="lazy"
      ></iframe>

      <footer className='bg-black bg-[url("/colorimage.png")] bg-cover bg-[0%_67%] p-8 py-6 text-center text-sm text-gray-200'>
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/demeque_saloniquia/"
            target="_blank"
            className="no-underline"
          >
            <img src="instagram.png" className="m-2 mb-5 w-7" />
          </a>
          <a
            href="https://github.com/patrinoua/my-art-resources"
            target="_blank"
            className="no-underline"
          >
            <img src="github.png" className="m-2 mb-5 w-7" />
          </a>
        </div>
        {/* <a
          href='https://angeliki.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          © Angeliki Patrinou, 2025
        </a> */}
      </footer>
    </div>
  )
}
