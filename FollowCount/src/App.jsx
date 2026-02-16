import { ChevronLeft } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import './App.css'
import { useState } from 'react';


function App() {

  const [follow, setFollow] = useState(563)
  const [isFollowing, setIsFollowing] = useState(false)

   const handleFollow = () => {

    if (isFollowing) {
      setFollow(follow - 1)
    } else {
      setFollow(follow + 1)
    }

    setIsFollowing(!isFollowing)
  }

  return (
    <div>

      <div className='container'>

        <div className='otrbox'>
          <p><ChevronLeft /></p>
          <div className='topbar'>

            <p className='username'>rendom123</p>
            <img src="https://img.freepik.com/premium-vector/blue-bold-instagram-verification-icon_525160-5705.jpg?w=360" alt="" />
          </div>
          <p>...</p>

        </div>

        <div className='otrbox'>
          <div className='profileimg'></div>

          <div className='populer'>
            <div>
              <h6>12</h6>
              <p>posts</p>
            </div>

            <div>
              <h6>{follow}</h6>
              <p>Followers</p>
            </div>

            <div>
              <h6>1</h6>
              <p>Following</p>
            </div>
          </div>
        </div>

       

        <div className='otrbox'>
          <button className='follow' onClick={handleFollow}>
            {isFollowing ? "following" : "Follow"}
          </button>
          <button className='msg'>message</button>
          <div className='icon'>
            <UserPlus className='iconinr' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default App