import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <CircularProgress color="secondary" />
        <p>loading</p>
    </div>
  )
}

export default Loading