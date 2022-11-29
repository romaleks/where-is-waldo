const Header = () => {
  return (
    <div className='py-2 px-4 flex justify-between text-5xl border-b-2 border-yellow-400'>
      <h1 className='text-5xl text-blue-400 font-extrabold cursor-pointer'>
        Where's <span className='text-red-500'>Waldo</span>
      </h1>
      <div>0:00</div>
    </div>
  )
}

export default Header
