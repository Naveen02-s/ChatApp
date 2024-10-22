import "./Detail.css"

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./Assests/avatar.png" alt="" />
        <h2>Jo Jo</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./Assests/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./Assests/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./Assests/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem"> 
              <div className="photoDetail">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./Assests/download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem"> 
              <div className="photoDetail">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./Assests/download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem"> 
              <div className="photoDetail">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./Assests/download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./Assests/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail
