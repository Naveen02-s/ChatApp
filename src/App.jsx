import './App.css'
import List from './Components/List/List'
import Chat from './Components/Chat/Chat'
import Detail from './Components/Detail/Detail'

function App() {

  return (
    <>
      <div className="container">
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  )
}

export default App
