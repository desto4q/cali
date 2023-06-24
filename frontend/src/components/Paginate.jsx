import React from 'react'
import { Link } from 'react-router-dom'
function Paginate({id}) {
  return (
    <div className="paginate">
    <button>
      <Link to={`/page/${parseInt(id) > 0 ? parseInt(id) -1 : 1}`}>-</Link>
    </button>
        <form action="#" onSubmit={e=>{
          e.preventDefault()
          let value = parseInt(e.target[0].value)
          if (value < 1) {
            value = 1
            navigate(`/page/${value}`)
            e.target[0].value = ""
          }
          else {
            navigate(`/page/${value}`)
            e.target[0].value = ""
          }
          
        }}>
          <input type="number" placeholder={id}/>
          <button className='go'>Go</button>
        </form>
        <button className='paginate'>
            <Link to={`/page/${parseInt(id)+1}`}>+</Link>
        </button>
    </div>
  )
}

export default Paginate