import { Link } from 'react-router-dom'

function TweetUser({user,id}) {
  return (
    <div className="tweetUser">
        <Link to={`/${user}/${id}/page/1`}>
          <div className="img">{user[0]}</div>
          <p>{user && user}</p>
        </Link>
    </div>
  )
}

export default TweetUser