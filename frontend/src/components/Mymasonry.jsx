import React, { useContext } from 'react'
import Masonry from 'react-responsive-masonry'
import { userContext } from '../context/context'

function Mymasonry({data}) {
    const {col} = useContext(userContext)
    return (
    <Masonry columnsCount={col} gutter='12px' className='masonryfeed'>
        {...data}
    </Masonry>
  )
}

export default Mymasonry