import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const DropDownMenu = ({ open, handleClick, anchorEl }) => {
  return (
    <div>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
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
