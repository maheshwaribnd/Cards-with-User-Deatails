import React from 'react'
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <div className='flex justify-center pt-36'>
      <CircularProgress />
    </div>
  )
}

export default Loader;
