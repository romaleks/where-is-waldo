import DropDownMenu from './DropDownMenu'
import pic from '../assets/pic.jpg'
import { useState } from 'react'

const Main = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 })

  const handleClick = e => {
    setAnchorEl(e.target)
    setOpen(!open)
    setMenuPosition({ x: e.clientX - e.target.x, y: e.clientY - e.target.y })
  }

  const calculateCoords = e => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setClickCoords({ x, y })
  }

  const checkCLick = e => {
    const name = e.target.textContent

    switch (name) {
      case 'Cat':
        if (
          220 < clickCoords.x &&
          clickCoords.x < 265 &&
          1165 < clickCoords.y &&
          clickCoords.y < 1220
        ) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
        break

      case 'Woman':
        if (
          135 < clickCoords.x &&
          clickCoords.x < 850 &&
          845 < clickCoords.y &&
          clickCoords.y < 915
        ) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
        break

      case 'Man':
        if (
          1190 < clickCoords.x &&
          clickCoords.x < 1250 &&
          2040 < clickCoords.y &&
          clickCoords.y < 2160
        ) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
        break
    }
  }

  return (
    <div className='p-8'>
      <div className='m-auto max-w-7xl'>
        <img
          src={pic}
          onClick={e => {
            handleClick(e)
            calculateCoords(e)
          }}
          className='h-full w-full cursor-pointer drop-shadow-2xl'
        ></img>
        <DropDownMenu
          open={open}
          anchorEl={anchorEl}
          position={menuPosition}
          handleClick={handleClick}
          checkClick={checkCLick}
        />
      </div>
    </div>
  )
}

export default Main
