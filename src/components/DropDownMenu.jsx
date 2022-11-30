import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const DropDownMenu = ({ open, anchorEl, position, handleClick, checkClick }) => {
  return (
    <div>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        anchorOrigin={{
          horizontal: position.x,
          vertical: position.y,
        }}
      >
        <MenuItem
          onClick={e => {
            handleClick(e)
            checkClick(e)
          }}
        >
          Cat
        </MenuItem>
        <MenuItem
          onClick={e => {
            handleClick(e)
            checkClick(e)
          }}
        >
          Woman
        </MenuItem>
        <MenuItem
          onClick={e => {
            handleClick(e)
            checkClick(e)
          }}
        >
          Man
        </MenuItem>
      </Menu>
    </div>
  )
}

export default DropDownMenu
