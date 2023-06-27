import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

function SearchPaginate({ id, query }) {
    let navigate = useNavigate()
    let num = parseInt(id)
    return (
        <div className="paginate">
            <button>
                {num > 1 ? <Link to={`/search/page/${num - 1}?${query}`}>-</Link> : <Link to={`/search/page/${num}?q${query}`}>-</Link>}
            </button>
            <form action="#" onSubmit={e => {
                e.preventDefault()
                let value = parseInt(e.target[0].value)
                if (value == undefined) [
                    value = 1
                ]
                if (value < 1) {
                    value = 1
                    navigate(`/search/page/${value}?${query}`)
                    e.target[0].value = ""
                }
                else {
                    navigate(`/search/page/${value}?${query}`)
                    e.target[0].value = ""
                }

            }}>
                <input type="number" placeholder={id} />
                <button className='go'>Go</button>
            </form>
            <button className='paginate'>
                <Link to={`/search/page/${num + 1}?${query}`}>+</Link>
            </button>
        </div>
    )
}

export default SearchPaginate