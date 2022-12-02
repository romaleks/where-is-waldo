import DropDownMenu from './DropDownMenu'
import Notification from './Notification'
import pic from '../assets/pic.jpg'
import { useState } from 'react'

const Main = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 })
  const [toastState, setToastState] = useState({})

  const handleClick = e => {
    setAnchorEl(e.target)
    setMenuOpen(!menuOpen)
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
          setToastState({
            title: 'Correctly!',
            state: 'success',
          })
        } else {
          setToastState({
            title: 'Wrong Person!',
            state: 'error',
          })
        }
        break

      case 'Woman':
        if (
          135 < clickCoords.x &&
          clickCoords.x < 850 &&
          845 < clickCoords.y &&
          clickCoords.y < 915
        ) {
          setToastState({
            title: 'Correctly!',
            state: 'success',
          })
        } else {
          setToastState({
            title: 'Wrong Person!',
            state: 'error',
          })
        }
        break

      case 'Man':
        if (
          1190 < clickCoords.x &&
          clickCoords.x < 1250 &&
          2040 < clickCoords.y &&
          clickCoords.y < 2160
        ) {
          setToastState({
            title: 'Correctly!',
            state: 'success',
          })
        } else {
          setToastState({
            title: 'Wrong Person!',
            state: 'error',
          })
        }
        break
    }

    setToastOpen(true)
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
          open={menuOpen}
          anchorEl={anchorEl}
          position={menuPosition}
          handleClick={handleClick}
          checkClick={checkCLick}
        />
        <Notification open={toastOpen} setOpen={setToastOpen} state={toastState} />
      </div>
    </div>
  )
}

export default Main
