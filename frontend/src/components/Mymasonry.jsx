import React, { useContext } from 'react'
import Masonry from 'react-responsive-masonry'
import { userContext } from '../context/context'

function Mymasonry({data}) {
    const {col} = useContext(userContext)
    return (
    <Masonry columnsCount={col} className='masonryfeed'>
        {...data}
    </Masonry>
  )
}

export default Mymasonry