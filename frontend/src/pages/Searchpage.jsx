import React, { useContext, useEffect, useState } from 'react'
import { IconArrowDown, IconSearch } from "@tabler/icons-react"
import { userContext } from '../context/context'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { searchPost, searchUser } from '../data/data'
import Tweet from '../components/Tweet'
import { Puff } from 'react-loader-spinner'
import User_search from '../components/User_search'
import SearchPaginate from '../components/SearchPaginate'
import Mymasonry from '../components/Mymasonry'


function Searchpage() {
    const { col } = useContext(userContext)
    let { pageId } = useParams()
    let [searchparam, setParam] = useSearchParams()
    let searchQuery = searchparam.get("q").replace("+","%")
    let [filter, setFilter] = useState("post")


    let handleSubmit = (e) => {
        e.preventDefault()
        let value = e.target[0].value
        setParam({ q: value })
    }


    let { data, isLoading, refetch } = useQuery(["search", searchQuery, pageId], async () => {
        if (filter == "user") {
            let resp = await searchUser({ q: searchQuery, page: pageId })
            return resp
        }
        if (filter == "post") {
            let resp = await searchPost({ q: searchQuery, page: pageId })
            return resp
        }
    })
    useEffect(()=>{
        refetch()
        console.log(filter)
    },[filter])

    let handleClick = (e) => {
        setFilter(e.target.innerHTML.toLowerCase())
    }

    return (
        <div className="searchPage">
            <div className="search_Header">
                <form className="searchBox" action='#' onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder='Search here....' />
                    <button type='submit'>
                        <IconSearch />
                    </button>
                </form>
                <div className="filter" tabIndex={1}>
                    {filter} <IconArrowDown/>
                    <div className="filter_options">
                        <div className="option" onClick={handleClick}>user</div>
                        <hr />
                        <div className='option' onClick={handleClick}>post</div>
                    </div>
                </div>
                
            </div>
            <div className="content">
                {
                    isLoading != true ?
                        <>
                            {data != "error" ?
                                <>
                                    {
                                        data != "end" ?
                                            <>
                                                <Mymasonry data={data.results
                                                    .map(({ user, id, body, image, username }, key) => {
                                                        if (filter == "post") {
                                                            return (
                                                                <Tweet username={user} id={id} body={body} image={image} key={key} />
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <User_search key={key} id={id} user={username} />
                                                            )
                                                        }
                                                    }
                                                    )}></Mymasonry>
                                            </> :
                                            <>
                                                <div className='end'>end of content</div>
                                            </>
                                    }
                                </>
                                :
                                <>
                                    <button>
                                        refetch
                                    </button>
                                </>}
                        </>
                        : <><Puff /></>
                }
                <SearchPaginate id={pageId} query={searchparam} />
            </div>
        </div>

    )
}

export default Searchpage