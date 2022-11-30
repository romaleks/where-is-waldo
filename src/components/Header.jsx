import { useEffect, useState } from 'react'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import PersonCard from './PersonCard'

const Header = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1)
    }, 1000)
  })

  return (
    <div className='py-2 px-4 flex justify-between items-end text-5xl border-b-2 border-yellow-400 bg-white sticky top-0 z-10'>
      <h1 className='text-5xl text-blue-400 font-extrabold cursor-pointer'>
        Where's <span className='text-red-500'>Waldo</span>
      </h1>
      <div className='flex gap-4'>
        <PersonCard picture={person1} />
        <PersonCard picture={person2} />
        <PersonCard picture={person3} />
      </div>
      <div>{`${Math.floor(timer / 60)}:${timer % 60 < 9 ? '0' : ''}${timer % 60}`}</div>
    </div>
  )
}

export default Header
