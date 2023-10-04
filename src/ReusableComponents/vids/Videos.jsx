import React from 'react'
import './videos.scss'
import { Link } from 'react-router-dom'
const Videos = () => {
  const vidLength = [0,1,2]  
  return (
    <div className="videos">
      {vidLength.map(vid => (
        <Link key={vid} to={`/media/news/${vid+1}`}>
          <img src='https://picsum.photos/300/200' alt='...'></img>
          <h3>სამუშაო შეხვედრა პოტენციურ მომხმარებლებთან {vid +1}</h3>
          <p>25 მაისი</p>
        </Link>
      ))}
    </div>
  )
}

export default Videos