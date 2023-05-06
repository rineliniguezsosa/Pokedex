import { BrowserRouter } from 'react-router-dom'
import { Approuter } from './router/Approuter'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Approuter></Approuter>
      </BrowserRouter>
    </Provider>
  )
}

export default App
