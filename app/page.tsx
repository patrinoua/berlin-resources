import {
  TileProps,
  Item,
  youtubeChannelArray,
  musicArray,
  // artistsArray,
  therinaArray,
  barsArray,
  djsArray,
  ekpompesArray,
  followingArray,
  hobbiesArray,
  workoutArray,
} from './data/data'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'], // πρόσθεσε και '600', '700' αν χρειάζεσαι bold
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div
      className={`${montserrat.variable} flex min-h-screen flex-col text-gray-200`}
      style={{
        background: 'linear-gradient(to bottom, #011c34ff, rgb(11 12 25))',
      }}
    >
      <div className="w-full bg-black p-4 md:mb-8 md:p-8">
        {/* <img src='colorimage.png' className='w-full'/> */}
        <h1 className='my-6 bg-[url("/colorimage.png")] bg-cover bg-clip-text bg-[0%_50%] text-center text-3xl font-extralight text-transparent md:text-7xl'>
          berlin unleashed
        </h1>
      </div>
      <main className="flex flex-grow flex-col font-sans md:p-8">
        {sectionsArray.map((section, i) => {
          return (
            <div
              key={i}
              className="center flex flex-col items-center justify-center"
            >
              <Section section={section} />
              {i !== sectionsArray.length - 1 && (
                <div className="h-1 w-[300px] max-w-[850px] bg-yellow-700 opacity-80 shadow-lg md:w-full" />
              )}
            </div>
          )
        })}
        {/* <div className='w-full bg-black p-8'> */}
        <div className="flex flex-col items-center p-4 text-gray-500">
          * Things that are not included (but hey, change my mind!) are{' '}
          <b>arte, nts</b>
        </div>
      </main>
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

type Section = {
  name: string
  array: Item[]
}
type SectionProps = {
  section: Section
}

const Section = ({ section }: SectionProps) => {
  return (
    <section className="mb-10 flex flex-col items-center" key={section.name}>
      <h2
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}
        className="m-14 mt-14 bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-center text-3xl font-light text-transparent brightness-92 md:mt-25 md:text-5xl"
      >
        {section.name}
      </h2>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
        {section.array.map((item: Item, i: number) => (
          <Tile item={item} key={i} />
        ))}
      </div>
    </section>
  )
}

const Tile = ({ item }: TileProps) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="center relative m-1 flex flex-col items-center brightness-80 transition-transform duration-300 hover:scale-104 hover:brightness-92">
        <img
          src={(item.image.length && item.image) || 'art_default.png'}
          className="h-40 w-40 bg-[#150b0b]/30 object-cover p-1 shadow-lg brightness-90 md:m-1 md:h-60 md:w-60 md:p-1"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center transition-transform duration-300 hover:scale-105">
          <h1 className="b-4 max-w-[200px] text-center text-xl font-bold tracking-wide text-gray-100 md:text-2xl">
            {item.name}
          </h1>
          {item.comment && (
            <p className="max-w-[200px] text-center text-gray-200">
              {item.comment}
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

const youtubeChannels = {
  name: 'Youtube Channels',
  array: youtubeChannelArray,
}

const music = {
  name: 'Music',
  array: musicArray,
}

// const artists = {
//   name: 'Artists',
//   array: artistsArray,
// }
const bars = {
  name: 'Where?',
  array: barsArray,
}
const djs = {
  name: 'Who?',
  array: djsArray,
}
const ekpompes = {
  name: 'Shows',
  array: ekpompesArray,
}
const following = {
  name: 'Δείξε μου το φίλο σου',
  array: followingArray,
}
const therina = {
  name: 'θερινά σινεμά',
  array: therinaArray,
}
const hobbies = {
  name: 'hobbiz',
  array: hobbiesArray,
}
const gym = {
  name: 'gym',
  array: workoutArray,
}

const sectionsArray = [
  youtubeChannels,
  bars,
  djs,
  music,
  // ekpompes,
  // artists,
  // following,
  therina,
  gym,
  hobbies,
]
