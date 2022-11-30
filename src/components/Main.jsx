import DropDownMenu from './DropDownMenu'
import pic from '../assets/pic.jpg'
import { useState } from 'react'

const Main = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState([0, 0])

  const handleClick = e => {
    setAnchorEl(e.target)
    setOpen(!open)
    setPosition([e.clientX, e.clientY - e.target.y])
    console.log(e)
  }

  return (
    <div className='h-full'>
      <img
        src={pic}
        onClick={handleClick}
        className='h-full w-full cursor-pointer select-none'
      ></img>
      <DropDownMenu
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
        position={position}
      />
    </div>
  )
}

export default Main
