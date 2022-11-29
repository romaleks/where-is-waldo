import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const DropDownMenu = ({ open, handleClick, anchorEl, position }) => {
  return (
    <div>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        anchorOrigin={{
          horizontal: position[0],
          vertical: position[1],
        }}
      >
        <MenuItem onClick={handleClick}>Player 1</MenuItem>
        <MenuItem onClick={handleClick}>Player 2</MenuItem>
        <MenuItem onClick={handleClick}>Player 3</MenuItem>
      </Menu>
    </div>
  )
}

export default DropDownMenu
