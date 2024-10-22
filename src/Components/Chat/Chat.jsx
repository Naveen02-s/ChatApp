import { useState } from "react"
import "./Chat.css"
import EmojiPicker from "emoji-picker-react"

function Chat() {

  const [open, setOpen] = useState(false) 
  const [text, setText] = useState("") 

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  return (
    <div className='Chat'>

      <div className="top">
        <div className="user">
          <img src="./Assests/avatar.png" alt="" />
          <div className="texts">
            <span>Mr.X</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./Assests/phone.png" alt="" />
          <img src="./Assests/video.png" alt="" />
          <img src="./Assests/info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./Assests/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./Assests/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./Assests/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="https://picsum.photos/536/354" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque. Architecto, vitae quaerat. Dolorum dignissimos nobis soluta rem similique numquam porro accusantium labore, minus esse sed, aliquam voluptatibus ducimus corrupti.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./Assests/img.png" alt="" />
          <img src="./Assests/camera.png" alt="" />
          <img src="./Assests/mic.png" alt="" />
        </div>

        <input 
          type="text" 
          placeholder="Type a message..." 
          value = {text}
          onChange={e => setText(e.target.value)}/>

        <div className="emoji">
          <img 
            src="./Assests/emoji.png" 
            alt="" 
            onClick={() => setOpen((prev) => !prev)
            }
           />

          <div className="picker">
            <EmojiPicker 
              open = {open}
              onEmojiClick={handleEmoji}
              />
          </div>
          
        </div>

        <button className="sendBtn">Send</button>
      </div>
      
    </div>
  )
}

export default Chat

