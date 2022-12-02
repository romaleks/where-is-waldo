import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import { Alert } from '@mui/material'

function TransitionDown(props) {
  return <Slide {...props} direction='down' />
}

function Notification({ open, setOpen, state }) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert severity={state.state} variant='filled' sx={{ width: '200px' }}>
          {state.title}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Notification
