import { BrowserRouter } from 'react-router-dom'
import { Approuter } from './router/Approuter'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <>
      <BrowserRouter>
        <Approuter></Approuter>
      </BrowserRouter>
    </>
  )
}

export default App
