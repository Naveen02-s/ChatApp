import './UserInfo.css'

function UserInfo() {
  return (
    <div className='UserInfo'>
      <div className="user">
        <img src="./Assests/avatar.png" />
        <h2>Johny Bravo</h2>
      </div>
      <div className="icons">
        <img src="./Assests/more.png" />
        <img src="./Assests/video.png" />
        <img src=".//Assests/edit.png" />
      </div>
    </div>
  )
}

export default UserInfo
