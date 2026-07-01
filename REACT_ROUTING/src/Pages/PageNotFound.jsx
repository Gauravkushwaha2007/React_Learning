import React from 'react'
import BackNavigate from "../components/BackNavigate"

const PageNotFound = () => {
  return (<>
  
  <BackNavigate/>
  <div className='border-1 border-pink-950 text-black rounded-xl text-bold text-3xl px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>OOPs!! PageNotFound</div>
  </>
  )
}

export default PageNotFound