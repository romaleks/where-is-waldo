import { useState } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import { Alert } from '@mui/material'

function TransitionDown(props) {
  return <Slide {...props} direction='down' />
}

function Notification() {
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert severity='success' variant='filled' sx={{ width: '200px' }}>
          Correct!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Notification
