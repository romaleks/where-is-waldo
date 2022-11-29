import DropDownMenu from './DropDownMenu'
import pic from '../pic.jpg'
import { useState } from 'react'

const Main = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClick = e => {
    setAnchorEl(e.target)
    setOpen(!open)
  }

  return (
    <div className='h-full'>
      <img
        src={pic}
        onClick={handleClick}
        className='h-full w-full cursor-pointer select-none'
      ></img>
      <DropDownMenu open={open} handleClick={handleClick} anchorEl={anchorEl} />
    </div>
  )
}

export default Main
