import { Link,useNavigate } from "react-router-dom"

function ProfilePaginator({user,pageId,userId}) {
    const navigate = useNavigate()
  return (
    <div className="paginate">
    <button>
      {/* <Link to={`/${user}/${userId}/page/${parseInt(pageId) > 0 ? parseInt(pageId) -1 : 1}`}>-</Link> */}
      <Link to={`/${user}/${userId}/page/${parseInt(pageId)  > 0 ? parseInt(pageId) -1 : 1}`}>-</Link>
    </button>
        <form action="#" onSubmit={e=>{
          e.preventDefault()
          let value = parseInt(e.target[0].value)
          if (value < 1) {
            value = 1
            navigate(`/${user}/${userId}/page/${value}`)
            e.target[0].value = ""
          }
          else {
            navigate(`/${user}/${userId}/page/${value}`)
            e.target[0].value = ""
          }
          
        }}>
          <input type="number" placeholder={pageId}/>
          <button className='go'>Go</button>
        </form>
        <button className='paginate'>
            <Link to={`/${user}/${userId}/page/${parseInt(pageId)+1}`}>+</Link>
         </button>
    </div>
    
  )
}

export default ProfilePaginator