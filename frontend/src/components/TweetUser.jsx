import { IconArrowLeft } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'

function TweetUser({user,id}) {
  const navigate = useNavigate()
  return (
    <div className="tweetUser">
      
        <Link to={`/${user}/${id}/page/1`}>
          <div className="img">{user && user[0]}</div>
          <p>{user && user}</p>
        </Link>
    </div>
  )
}

export default TweetUser