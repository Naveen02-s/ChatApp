import { useState } from 'react'
import './ChatList.css'

function ChatList() {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='ChatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./Assests/search.png" alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        <img 
          src={addMode ?"Assests/minus.png" : "Assests/plus.png"} className='add' 
          onClick={() => setAddMode((prev) => !prev)}
          />
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="./Assests/avatar.png" alt="" />
        <div className="texts">
          <span>Mr. X</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
