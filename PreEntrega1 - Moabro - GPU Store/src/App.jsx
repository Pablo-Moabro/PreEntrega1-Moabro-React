
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bievenidos a GPU-Store"} />
      </div>
      
    </>
  )
}

export default App
