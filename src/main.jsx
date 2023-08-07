import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rutas/>
  </BrowserRouter>
)
