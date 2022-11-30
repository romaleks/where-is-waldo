import React from 'react'

const PersonCard = ({ picture }) => {
  return (
    <div className='rounded overflow-hidden cursor-pointer'>
      <img src={picture} alt='person' className='h-20 w-14' />
    </div>
  )
}

export default PersonCard
